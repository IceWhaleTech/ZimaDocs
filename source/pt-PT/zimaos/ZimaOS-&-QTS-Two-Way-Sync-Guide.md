---
title: Guia de Sincronização Bidirecional ZimaOS & QTS
description: 
type: Docs
author: admin
tip: O formato fixo da barra superior não deve ser removido, a descrição é uma descrição do artigo, que será cortada caso não esteja preenchida.
---
![](https://manage.icewhale.io/api/static/docs/1742550303202_image.png)
## Ponto de Dor no Mundo Real: Desafios de Sincronização entre NAS
Um usuário perguntou recentemente: "Nossa equipe utiliza tanto o ZimaOS quanto os sistemas QNAP QTS. Transferir arquivos manualmente consome mais de 2 horas diariamente. Como podemos automatizar a sincronização bidirecional?" Este guia resolve exatamente esse problema.
## Por que WebDAV + Zerotier?
![](https://manage.icewhale.io/api/static/docs/1742550364111_image.png)
Figura 1: Arquitetura de sincronização de arquivos entre sistemas via WebDAV e Zerotier
### Palavras-chave: Sincronização Bidirecional ZimaOS e QTS
- WebDAV : Protocolo de colaboração de arquivos multiplataforma
- Zerotier : Ferramenta de LAN virtual para travessia NAT sem requisitos de IP público
- Vantagens : Configuração fácil, sincronização automática e sincronização retomável
## Implementação Passo a Passo
### Passo 1: Configurar WebDAV no ZimaOS
1. Instalar o App : Procure "WebDAV" na Loja de Apps do ZimaOS
![](https://manage.icewhale.io/api/static/docs/1742550445278_image.png)
2. Parâmetros Críticos (Figura 2):
  - Credenciais: Padrão `casaos` 
  - Diretório de Sincronização: Selecione a pasta alvo através do "Escolher Ícone do Diretório" (segundo círculo vermelho)
  - Porta: Anote a porta personalizada (ex: `5005`)
![](https://manage.icewhale.io/api/static/docs/1742550489305_image.png)
Figura 2: Interface de configuração WebDAV do ZimaOS
### Passo 2: Estabelecer Rede Zerotier
1. Obter ID da Rede :
  - Painel do ZimaOS → Configurações → Rede → Acesso remoto → Habilitar → Clique em "NetworkID" para copiar
![](https://manage.icewhale.io/api/static/docs/1742550534267_image.png)
2. Instalar Zerotier e habilitar SSH. (Recursos relacionados podem ser encontrados no final do artigo)
3. Configuração QNAP :
  - Acesse via SSH no QTS e execute:
`zerotier-cli join [ZimaOS NetworkID]`
4. Verificar Conectividade :
  - Obter IP do Zerotier do ZimaOS: Rede → Rede Virtual → IP Estático
  - Testar com `ping [IP Zerotier ZimaOS]
`
### Passo 3: Criar Tarefa de Sincronização HBS 3
1. Configurar Sincronização :
  - Instalar "HBS 3" no Centro de Apps do QTS
  - Iniciar HBS 3 e Selecionar Sincronização → Tarefa de Sincronização Bidirecional → Adicionar conta WebDAV
![](https://manage.icewhale.io/api/static/docs/1742550603938_image.png)
2. Otimização :
  - Escolher 'política de conflito' para renomear arquivos locais
  - Configurar 'frequência do agendamento da tarefa' para 30 ~ 300s
## Conclusão & Recursos
![](https://manage.icewhale.io/api/static/docs/1742550646713_image.png)
Você conseguiu:
✅ Sincronização em tempo real entre sistemas
✅ Penetração NAT sem IP público
✅ Sincronização bidirecional de arquivos automatizada
Se você encontrar algum problema durante o uso, sinta-se à vontade para nos avisar a qualquer momento. Você também pode se juntar à nossa [comunidade](https://community.zimaspace.com/) e ao nosso [Discord](https://discord.gg/uuNfKzG5) para discutir mais sobre NAS e ZimaOS. Aguardamos seu feedback!

Leitura Adicional:
[Manual Oficial do Zerotier para QNAP](https://docs.zerotier.com/qnap/)
[Ativar acesso SSH no QNAP](https://www.qnap.com.cn/zh-cn/how-to/faq/article/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-ssh-%E8%AE%BF%E9%97%AE-qnap-nas)
[Mantenha os Arquivos Sincronizados Entre ZimaOS e Synology DSM](https://www.youtube.com/watch?v=n8ajxo6Uh3c)