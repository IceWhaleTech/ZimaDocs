---
title: Aplicações de Auto-implantação
description:
typora-root-url: ..
---
# Razão

**Para atender às necessidades de instalação de sua própria carga de aplicativo, o CasaOS oferece aos usuários várias maneiras de instalar. Este documento irá ajudá-lo a encontrar mais aplicativos Docker e usá-los simplesmente copiando-os. O site de pesquisa recomendado para este documento é **[linuxserver.io](https://www.linuxserver.io/)****


# linuxserver.io

![Linuxserver](/images/Self-Deploying-Applications/application-introduce-linuxserver.png)

Como descrito em seu site oficial.
Somos um grupo de entusiastas com ideias semelhantes de todo o mundo que constroem e mantêm a maior coleção de imagens Docker na web e, em nosso núcleo, estão os princípios por trás do Software Livre e de Código Aberto. Nosso principal objetivo é fornecer imagens Docker fáceis de usar e simplificadas, com documentação clara e concisa. 
**Sim, eu acho que eles conseguiram isso!**


# Pesquisar a Imagem Docker Desejada

**Passo 1** Abra o LinuxServer e clique em **[’fleet’](https://fleet.linuxserver.io/)**

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet1.png)

**Passo 2** Pesquise a aplicação que você deseja em **[’fleet’](https://fleet.linuxserver.io/)**

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet.png)

# Instalando aplicações 

**Exemplo:** Instalando a **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)** no CasaOS e usando-a

## O que é **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)**?

![Appriseapi](/images/Self-Deploying-Applications/applicatin-appriseapi-logo.png)

O Apprise permite que você envie notificações para quase todos os serviços de notificação mais populares disponíveis hoje, como Telegram, Discord, Slack, Amazon SNS, Gotify, e mais. Esta API fornece um gateway simples para acessá-la diretamente através de uma interface HTTP. Instalação da API Apprise no CasaOS

## Pesquisar CLI Docker 
Vá até o hub da Apprise API e copie o CLI Docker apropriado -apprise-api

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-docker-cli.png)


## Siga estes passos na ordem 

Abra o CasaOS e vá para a tela de instalação definida pelo usuário, cole e aguarde a instalação.

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps1.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps2.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps3.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps4.png)

## Copiar CLI Docker Apprise API 

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps5.png)

## Colar CLI Docker Apprise API 

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps6.png)

## Adicionar Porta da Interface Web

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps7.png)

## Aguardar Instalação

Isto pode levar alguns minutos

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps8.png)

## Instalação Bem-Sucedida e Clique para Usar

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-using-appriseapi.png)

**Atenção**
O AutoPreenchimento apenas ajuda você a completar algumas das informações de configuração, 
incluindo:
- a porta e o caminho da Interface Web
- a localização de montagem do volume ou arquivo
- o mapeamento de porta do Host
- itens de configuração opcionais
Esses incluem, mas não se limitam a esses casos e ainda precisam ser confirmados ou modificados por você. Sinta-se à vontade para sugerir melhorias a este recurso no Servidor Discord!

# Conclusão

Acima está o método de instalação da **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)**, e o mesmo se aplica a outras aplicações. Mas note: cada aplicação requer certas condições.

Várias partes precisam ser verificadas na interface do Docker Hub durante a instalação。

**Por exemplo**

- Arquitetura Suportada 
  Identifica a arquitetura suportada pela aplicação. Se não, por favor, verifique as Tags acima (contendo o histórico de versões atualizadas)
- Parâmetros : 
  A imagem do contêiner é racionada usando os parâmetros passados em tempo de execução, e algumas aplicações definiram senhas padrão que serão exibidas aqui também.

Mais Informações——https://docs.linuxserver.io/images/docker-airsonic-advanced#docker-cli-click-here-for-more-info

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)