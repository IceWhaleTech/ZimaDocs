---
title: Servidor Minecraft–Construa um Servidor Minecraft com ZimaBoard
---

# Razão

**COVID-19** nos forçou a passar mais tempo com nossas famílias. Anteriormente, houve uma introdução sobre como construir uma versão caseira de um cinema 4K usando o ZimaBoard. Recentemente, o cinema não é mais suficiente para a família. Então, encontramos alguns jogos divertidos em casa que são mais adequados para adultos e crianças. Bons jogos podem aproximar os membros da família e melhorar as habilidades criativas das crianças.

## Apresentar [**Minecraft**](https://www.minecraft.net/zh-hans)

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-introduce-home-page.png)

[**Minecraft**](https://www.minecraft.net/zh-hans) é um jogo de construção sandbox criado por Markus Persson, fundador da Mojang AB, e inspirado em Endless Miner, Dwarf Fortress e Dungeon Keeper. O atual desenvolvedor principal é Jens Bergensten. Os jogadores podem criar e destruir uma infinidade de cubos no espaço tridimensional do jogo e até experimentar diferentes modos de jogo em servidores multiplayer versus mundos de um único jogador para criar edifícios, criações e obras de arte requintadas.

# Prepare-se com antecedência

Por padrão, você sabe como usar o ZimaBoard ao ler este tutorial: [**Tutorial ZimaBoard**](/docs/)

Da mesma forma, aqui você já comprou uma conta My World por padrão: [**Link de compra do MineCraft**](https://www.minecraft.net/zh-hans/about-minecraft)

| Item     | Descrição |
| ----------- | ----------- |
| Software    | [**Links de Instalação do MineCraft**](https://www.minecraft.net/en-us/download) |
| Parágrafo   | ZimaBoard 216|

# Comece a Construir um Servidor Minecraft

## Entrar no CasaOS

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-casa-home-page.png)

## Abra a App Store e Selecione Instalação Personalizada

```
 docker run -d \
-p 25565:25565 \
-v /DATA/AppData/mc-data/:/data \
-e EULA=TRUE \
--name minecraft \
itzg/minecraft-server
```

## Copiar [Cli]（<https://hub.docker.com/r/itzg/minecraft-server>)

![Copiar Cli do Servidor Minecraft](/images/Minecraft-Friendship-Service/minecraft-copy-cli.png)

## Verificar Ambiente

![Verificar Ambiente do Servidor Minecraft](/images/Minecraft-Friendship-Service/minecraft-check-environment.png)

{% note dinfo %}
**Atenção**

Variáveis de Ambiente **EULA=TRUE**

Certifique-se de sempre incluir -e EULA=TRUE em seus comandos e definições de contêiner, pois a Mojang/Microsoft requer a aceitação do EULA.
{% endnote %}

## Abrir o Cliente MY World

**Agora abra o cliente My World que você instalou anteriormente, aqui está usando MAC**

![](/images/Minecraft-Friendship-Service/minecraft-open-minecraft-client.png)

## Clique em Multiplayer ##

![Abrir Cliente Minecraft](/images/Minecraft-Friendship-Service/minecraft-click-multiplayer.png)

## Adicionar Servidor ##

![Adicionar Servidor Minecraft](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

## Insira seu endereço IP e adicione 25565

![Adicionar Servidor Minecraft](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

![Adicionar Endereço Minecraft](/images/Minecraft-Friendship-Service/minecraft-add-server-address.png)

Se você não souber seu endereço IP, pode consultar o tutorial—["**Encontre seu Endereço IP do CasaOS**"](/Users/lijian/Documents/GitHub/ZimaDocs/zimaboard/02-get-started/09-find-casaos-ip-address.md)

## Seu Servidor Minecraft Agora Está Pronto ##

![Mostrar Servidor Minecraft](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-server.png)

## Jogar ##

![Mostrar Página do Jogo Minecraft](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page.png)

![Mostrar Página do Jogo Minecraft](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page2.png)

# Ajustando parâmetros do servidor

## Por exemplo

Por padrão, os servidores [**Minecraft**](https://www.minecraft.net/zh-hans) estão configurados para rodar no modo Sobrevivência. Você pode mudar o modo usando **MODE**, onde pode fornecer os valores numéricos padrão ou os valores de atalho:

- criativo
- sobrevivência
- aventura
- espectador (apenas para [**Minecraft**](https://www.minecraft.net/zh-hans) 1.8 ou posterior)

```

docker run -d -e MODE=creative ...

```

**Anunciar Conquistas dos Jogadores**

```

docker run -d -e ANNOUNCE_PLAYER_ACHIEVEMENTS=true

```

**Mais Informações** - [**Servidor Docker Minecraft**](https://github.com/itzg/docker-minecraft-server)

### Adições Estendidas ###

1. Mais tarde haverá um aplicativo docker de servidor mc na loja APP do CasaOS (realize um clique por minuto para instalar o Servidor MC)

2. Zimaboard & [**Minecraft**](https://www.minecraft.net/zh-hans) Versão Avançada para Jogar

## Conclusão ##

A filosofia por trás do [**Minecraft**](https://www.minecraft.net/zh-hans) é muito simples: criar um mundo que pertence a você; por favor, guie seus filhos corretamente, participe com seus filhos juntos e controle o tempo de jogo. Acredito que você pode obter mais do que pura alegria e felicidade.

[![Cartão Discord](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)