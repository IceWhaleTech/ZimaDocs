---
title: Minecraft Server–Build a Minecraft Server with ZimaBoard
---

# Reason

**COVID-19** forced us to spend more time with our families. Previously, there was an introduction on how to build a home version of a 4K theater using ZimaBoard. Recently the theater is no longer enough for the family. So we found some fun games at home that are more suitable for adults and children. Good games can make family members closerand improve kid’s creative abilities.

## Introduce [**Minecraft**](https://www.minecraft.net/zh-hans)

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-introduce-home-page.png)

[**Minecraft**](https://www.minecraft.net/zh-hans) is a sandbox building game created by Markus Persson, founder of Mojang AB, and inspired by Endless Miner, Dwarf Fortress and Dungeon Keeper. The current lead developer is Jens Bergensten. Players can create and destroy a myriad of cubes in the game’s three-dimensional space and even experience different game modes on multiplayer servers versus single-player worlds to create exquisite buildings, creations, and artwork

# Prepare in advance

By default, you know how to use ZimaBoard when reading this tutorial:[**ZimaBoard Tutorial**](/docs/)

Similarly, here you have already purchased a My World account by default:[**MineCraft purchase link**](https://www.minecraft.net/zh-hans/about-minecraft)

| Item     | Description |
| ----------- | ----------- |
| Software    | [**MineCraft Installation Links**](https://www.minecraft.net/en-us/download) |
| Paragraph   | ZimaBoard 216|

# Start to Build a Minecraft Server

## Enter CasaOS

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-casa-home-page.png)

## Open the App Store and Select Custom Install

```
 docker run -d \
-p 25565:25565 \
-v /DATA/AppData/mc-data/:/data \
-e EULA=TRUE \
--name minecraft \
itzg/minecraft-server
```

## Copy [Cli]（<https://hub.docker.com/r/itzg/minecraft-server>)

![Copy Minecraft Server Cli](/images/Minecraft-Friendship-Service/minecraft-copy-cli.png).

## Check Environment

![Check Minecraft Server Environment](/images/Minecraft-Friendship-Service/minecraft-check-environment.png)

{% note dinfo %}
**Attention**

Environment Variables **EULA=TRUE**

Be sure to always include -e EULA=TRUE in your commands and container definitions, as Mojang/Microsoft requires EULA acceptance.
{% endnote %}

## Opne MY World Client

**Now open the My World client you installed earlier, here it is using MAC**

![](/images/Minecraft-Friendship-Service/minecraft-open-minecraft-client.png)

## Click Multiplayer ##

![Open Minecraft Client](/images/Minecraft-Friendship-Service/minecraft-click-multiplayer.png)

## Add Server ##

![Add Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

## Enter your IP address and add 25565

![Add Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

![Add Minecraft Address](/images/Minecraft-Friendship-Service/minecraft-add-server-address.png)

If you don’t know your IP address, you can refer to the tutorial—["**Find Your CasaOS IP Address**"](/Users/lijian/Documents/GitHub/ZimaDocs/zimaboard/02-get-started/09-find-casaos-ip-address.md)

## Your Minecraft Server is Now Ready ##

![Show Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-server.png)

## PLay ##

![Show Minecraft Game Page](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page.png)

![Show Minecraft Game Page](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page2.png)

# Adjusting server parameters

## For example

By default, [**Minecraft**](https://www.minecraft.net/zh-hans) servers are configured to run in Survival mode. You can change the mode using **MODE** where you can either provide the standard numerical values or the shortcut values:

- creative
- survival
- adventure
- spectator (only for [**Minecraft**](https://www.minecraft.net/zh-hans) 1.8 or later)

```

docker run -d -e MODE=creative ...

```

**Announce Player Achievements**

```

docker run -d -e ANNOUNCE_PLAYER_ACHIEVEMENTS=true

```

**More Information** - [**Docker Minecraftf Server**](https://github.com/itzg/docker-minecraft-server)

### Extended Additions ###

1.Later there will be mc server docker application in CasaOS APP store (realize one minute to one click to install MC Server)

2.Zimaboard & [**Minecraft**](https://www.minecraft.net/zh-hans) Advanced Version Play

## Conclusion ##

The philosophy behind [**Minecraft**](https://www.minecraft.net/zh-hans) is very simple to create a world that belongs to you; please guide your children correctly, participate with your children together, and control the gaming time. I believe you can get more beyond sheer joy and happiness.

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)
