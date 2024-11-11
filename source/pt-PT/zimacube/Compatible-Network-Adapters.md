---
title: Adaptadores de Rede Compatíveis com ZimaCube & ZimaOS
description: 
type: Docs
author: icewhale123456
tip: A formatação fixa da barra superior não deve ser removida, a descrição é para o artigo, se não for preenchida, será capturado o texto do primeiro parágrafo
---
Aqui está uma lista de adaptadores de rede compatíveis com ZimaCube e ZimaOS. Com base no feedback da comunidade, garantimos a compatibilidade com os seguintes adaptadores, proporcionando uma integração fluida para um desempenho ideal:
### Lista de Adaptadores de Rede Compatíveis
- **Adaptador Ethernet Gigabit de Dual Porta PCIe** Chipset Realtek RTL8111
- **Adaptador Ethernet de Dual Porta 2.5G PCIe** Chipset Realtek RTL8125B
- **Adaptador Ethernet Gigabit de 4-Portas PCIe** Chipset Realtek RTL8111
- **Adaptador Ethernet de 4-Portas PCIe** Chipset Intel I350-T4
- **Adaptador Ethernet de 4-Portas 2.5G PCIe** Chipset Realtek RTL8125B
- **Adaptador Ethernet de 4-Portas 2.5G PCIe** Chipset Intel I225
- **Adaptador Ethernet de Single-Port 10G PCIe x4** Chipset AQC113
- **Adaptador Ethernet de 2-Portas PCIe** Chipset Intel I350-T2
- **Adaptador Ethernet de 2.5G PCIe** Chipset Realtek RTL8125
- **Placa WiFi 6E PCIe Intel AX210** com Antenas 8Dbi
Adicionado de acordo com os usuários da comunidade (Em breve):
- **Adaptador de Rede PCIe** Chipset Intel X540 (Nova Adição)
- **Adaptador de Rede PCIe** Realtek RTL8125B (Nova Adição)
- **Adaptador SFP + de Servidor PCIe 10G de 2-Portas** Chipset Intel 82599ES (Nova Adição)
### Ferramentas de Teste de Velocidade Recomendadas
Para ajudar você a medir o desempenho da rede com precisão, recomendamos as seguintes duas ferramentas:
1. **iPerf3**: Uma ferramenta de linha de comando incorporada ao ZimaOS, o iPerf3 é perfeito para testar velocidades de rede internas. É rápido, confiável e ideal para usuários confortáveis com comandos de terminal para avaliar o desempenho da rede interna.
2. **Aplicativo OpenSpeedTest Docker**: Esta ferramenta fácil de instalar com interface gráfica, disponível na ZimaOS App Store, pode ser utilizada para testar velocidades de rede internas. O OpenSpeedTest fornece uma interface simples e amigável, tornando-o uma boa escolha para aqueles que preferem uma ferramenta visual em vez de utilitários de linha de comando.
Ambas as ferramentas são ótimas para testar velocidades de rede internas, com o iPerf3 para usuários que preferem testes via linha de comando e o OpenSpeedTest para aqueles que procuram uma opção gráfica rápida e intuitiva.
### Breve tutorial sobre como usar o iperf3
Você precisa de pelo menos duas máquinas que tenham o iperf3 instalado. No ZimaOS, você pode consultar este artigo para aprender sobre CLI. No Windows ou macOS, você precisa instalar o iperf3 primeiro [artigo](https://www.zimaspace.com/docs/zimaos/Sync-Photos-via-Configurable-CLI) e usá-lo no aplicativo Terminal.
**Configurar o Servidor**
Na máquina que você deseja usar como servidor, execute:
```
iperf3 -s
```
Isso iniciará o servidor `iperf3`, aguardando conexões.
**Configurar o Cliente**
Na máquina cliente, execute:
```
iperf3 -c <endereço_ip_do_servidor>
```

Substitua `<endereço_ip_do_servidor>` pelo endereço IP da máquina que está executando o servidor.
Este comando iniciará um teste e exibirá a largura de banda da rede entre o cliente e o servidor.
Executar Testes com Parâmetros Personalizados
Você pode modificar as configurações do teste usando diferentes opções:
- Duração do teste: `-t <segundos>` (o padrão é 10 segundos)
- Número de fluxos paralelos: `-P <num_fluxos>` (o padrão é 1)
- Número da porta: `-p <número_da_porta>` (o padrão é 5201)
Exemplo: Execute um teste de 30 segundos com 4 fluxos paralelos:
```
iperf3 -c <endereço_ip_do_servidor> -t 30 -P 4
```

**Verificar os Resultados**
Após a conclusão do teste, o `iperf3` mostrará a largura de banda, o jitter e a perda de pacotes entre os dois dispositivos.
Este é um guia básico para começar com o `iperf3` para testes de desempenho de rede. Ajuste os parâmetros com base nas suas necessidades específicas!
Com essa compatibilidade e as ferramentas de teste de velocidade recomendadas, você será capaz de aproveitar ao máximo sua configuração ZimaCube. Se você tiver mais perguntas ou feedback, fique à vontade para entrar em contato com nossa comunidade ou equipe de suporte!