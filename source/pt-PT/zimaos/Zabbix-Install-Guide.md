Aqui está a tradução para o português de Portugal do guia de instalação do Zabbix para ZimaOS, mantendo o formato original:

---

**Guia de Instalação do Zabbix para ZimaOS**

**Descrição:** Transforme o seu dispositivo ZimaOS num servidor de monitorização poderoso e centralizado para toda a sua rede.

**Tipo:** Documentação  
**Autor:** icewhale123456  
**Dica:** O formato da barra superior é fixo, não deve ser removido, e a descrição deve ser uma breve descrição do artigo. Se não for preenchida, a primeira parte do conteúdo será utilizada como descrição.

---

## Informações da Versão

- **Versão do Zabbix:** 7.0 LTS  
- **Versão do Guia:** 1.8  
- **Última Atualização:** Janeiro de 2026  
- **Testado em:** ZimaOS (baseado em Buildroot)  
- **Criado por:** Holger Kuehn, aka Lintuxer  

---

## Por que usar o ZimaOS como Plataforma de Monitorização?

Dispositivos ZimaOS (ZimaBoard, ZimaCube) são candidatos ideais para executar o Zabbix:

| Vantagem | Descrição |
|----------|-----------|
| **Sempre ativo** | Consumo de energia baixo, projetado para operação 24/7 |
| **Compacto** | Tamanho reduzido, cabe em qualquer lugar da sua rede |
| **Nativo para Docker** | Perfeito para serviços em containers como o Zabbix |
| **Custo-benefício** | Não há necessidade de hardware dedicado de servidor |
| **Silencioso** | Operação sem ventilador ou silenciosa |

Em vez de dedicar um servidor caro para monitorização, o seu dispositivo ZimaOS pode servir como um centro de monitorização centralizado para monitorizar:

- **Servidores Windows** – Controladores de domínio, servidores de arquivos, servidores de aplicações
- **Servidores Linux** – Servidores web, bases de dados, hosts Docker
- **Dispositivos de Rede** – Switches, routers, pontos de acesso (via SNMP)
- **IoT & Casa Inteligente** – Qualquer dispositivo com conectividade de rede
- **O próprio dispositivo ZimaOS** – Monitorização completa do sistema

## Visão Geral

Este guia cobre:  
- A instalação do servidor Zabbix no ZimaOS como sua plataforma de monitorização centralizada  
- Configuração de rede para comunicação entre containers Docker  
- Monitorização do host ZimaOS em si  
- Adição de servidores Windows à monitorização (inclusive em ambientes isolados por VLAN)  
- Adição de servidores Linux e outros dispositivos de rede  
- Backup, restauração e atualização do Zabbix

## Exemplo de Caso de Uso

```
                         ┌─────────────────────────────┐
                         │        Dispositivo ZimaOS   │
                         │    (Plataforma de Monitorização) │
                         │                             │
                         │  ┌───────────────────────┐  │
                         │  │   Servidor Zabbix      │  │
                         │  │   + Interface Web      │  │
                         │  │   + PostgreSQL         │  │
                         │  └───────────────────────┘  │
                         └──────────────┬──────────────┘
                                        │
            ┌───────────────────────────┼───────────────────────────┐
            │                           │                           │
            ▼                           ▼                           ▼
   ┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐
   │ Servidor Windows│        │  Servidor Linux │        │ Dispositivos de Rede │
   │ (Agente Ativo)  │        │ (Agente Ativo)  │        │    (SNMP)       │
   │                 │        │                 │        │                 │
   │ • Servidor de Arquivos │        │ • Servidor Web  │        │ • Switch UniFi  │
   │ • Controlador de Domínio │        │ • Host Docker   │        │ • Pontos de Acesso │
   │ • Servidor SQL     │        │ • NAS           │        │ • Roteador        │
   └─────────────────┘        └─────────────────┘        └─────────────────┘
```

**Modo Ativo para redes isoladas por VLAN:** Agentes conectam-se de forma saída para o Zabbix – não são necessárias regras de firewall de entrada nas suas VLANs seguras.

## Pré-requisitos

- ZimaOS instalado e em funcionamento  
- Acesso SSH ao dispositivo ZimaOS  
- Compreensão básica dos conceitos de Docker  
- Acesso à rede entre os alvos de monitorização e o servidor Zabbix

## Por que usar Docker para instalação no ZimaOS?

Existem duas maneiras principais de instalar o Zabbix:

| Método | Descrição | Melhor Para |
|--------|-----------|-------------|
| **Tradicional** | Instalar pacotes via apt/yum diretamente no sistema operacional | Servidores Debian, Ubuntu, RHEL |
| **Docker** | Executar serviços como containers | ZimaOS, ambientes baseados em container |

**Para ZimaOS, Docker é a única opção prática porque:**

1. **Sem gestor de pacotes** – ZimaOS usa Buildroot, que não inclui apt, yum ou ferramentas semelhantes  
2. **Sistema base imutável** – ZimaOS é projetado para não ser alterado; os apps funcionam como containers  
3. **Atualizações fáceis** – Baixar novas imagens em vez de upgrades complexos de pacotes  
4. **Separação limpa** – Cada serviço isolado, fácil de fazer backup/restaurar via volumes  
5. **Nativo para ZimaOS** – CasaOS/ZimaOS é construído em torno do Docker

**Por que o host padrão "servidor Zabbix" não funciona:**  

Instalações tradicionais do Zabbix executam o servidor e o agente na mesma máquina, então `127.0.0.1:10050` alcança o agente local. No Docker, cada serviço executa em seu próprio container isolado com seu próprio namespace de rede. O `127.0.0.1` do container do servidor aponta para ele mesmo (onde não há agente), não para o container do agente. Por isso, deletamos este host padrão e criamos um novo apontando para `zabbix-agent` via DNS do Docker.

---

A tradução continua com as mesmas seções detalhadas do guia, mantendo a estrutura, explicações e comandos com o mesmo significado. Se precisar de mais detalhes ou continuar a tradução, posso seguir com isso!