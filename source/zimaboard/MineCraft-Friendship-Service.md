---
title: Minecraft Server–Build a Minecraft Server with ZimaBoard
---

We have experience using a **ZimaCube/ZimaBoard** to build a home 4K theater, but simply watching movies no longer meets our family’s entertainment needs. As a result, we started looking for engaging games that appeal to both adults and children. A truly captivating game not only brings family members closer but also nurtures children’s creativity.
**Minecraft **is an ideal choice for this purpose. Often described as a digital take on LEGO, it presents players of all ages with a vast, blocky 3D world where they can build structures, craft tools, and embark on endless adventures. Whether it’s exploring dungeons, farming crops, raising animals, or designing elaborate roller coasters, Minecraft offers something enjoyable for everyone in the family.

## Introduce [**Minecraft**](https://www.minecraft.net/)

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-introduce-home-page.png)

Minecraft is a sandbox building game created by Markus Persson, founder of Mojang AB, and inspired by Endless Miner, Dwarf Fortress, and Dungeon Keeper. The current lead developer is Jens Bergensten. Players can create and destroy a myriad of cubes in the game’s three-dimensional space and can also experience different game modes on multiplayer servers or in single-player worlds to construct impressive buildings, creations, and artwork.

## Prepare in Advance

By default, we assume you already know how to use ZimaBoard when following this tutorial:[**ZimaBoard Tutorial**](/docs/zimaboard/)

Similarly, we assume you have already purchased a “My World” account (refer to the [**MineCraft purchase link**](https://www.minecraft.net/about-minecraft))

| Item     | Description |
| ----------- | ----------- |
| Software    | [**MineCraft Installation Links**](https://www.minecraft.net/en-us/download) |
| Paragraph   | ZimaBoard 216|

## Start to Build a Minecraft Server

#### Enter CasaOS

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-casa-home-page.png)

#### Open the App Store and Select “Custom Install”

```
 docker run -d \
-p 25565:25565 \
-v /DATA/AppData/mc-data/:/data \
-e EULA=TRUE \
--name minecraft \
itzg/minecraft-server
```

#### Copy [CLI]
（<https://hub.docker.com/r/itzg/minecraft-server>)

![Copy Minecraft Server Cli](/images/Minecraft-Friendship-Service/minecraft-copy-cli.png).

#### Check Environment

![Check Minecraft Server Environment](/images/Minecraft-Friendship-Service/minecraft-check-environment.png)

{% note dinfo %}
**Attention**

Environment Variable: **EULA=TRUE**
Make sure you always include `-e EULA=TRUE` in your commands and container definitions, because Mojang/Microsoft requires EULA acceptance.

{% endnote %}

#### Open the My World Client

Now open the My World client you installed earlier. In this example, we are using a Mac.

![](/images/Minecraft-Friendship-Service/minecraft-open-minecraft-client.png)

#### Click “Multiplayer” 

![Open Minecraft Client](/images/Minecraft-Friendship-Service/minecraft-click-multiplayer.png)

#### Click “Add Server”

![Add Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

#### Enter Your IP Address and Append Port 25565

![Add Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

![Add Minecraft Address](/images/Minecraft-Friendship-Service/minecraft-add-server-address.png)

If you don’t know your IP address, refer to the tutorial—["**Find Your CasaOS IP Address**"](/Users/lijian/Documents/GitHub/ZimaDocs/zimaboard/02-get-started/09-find-casaos-ip-address.md)

#### Congratulations! Your Minecraft server is now ready to host your adventures.

![Show Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-server.png)

#### Play

![Show Minecraft Game Page](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page.png)

![Show Minecraft Game Page](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page2.png)

## Adjusting Server Parameters

For example

By default, Minecraft servers are configured to run in Survival mode. You can change the mode by specifying **MODE**, where you can either provide the standard numeric values or the following shortcut values:

- creative
- survival
- adventure
- spectator (available only in Minecraft 1.8 or later)

```

docker run -d -e MODE=creative ...

```

**Announce Player Achievements**

```

docker run -d -e ANNOUNCE_PLAYER_ACHIEVEMENTS=true

```

**More Information** - [**Docker Minecraftf Server**](https://github.com/itzg/docker-minecraft-server)

#### Extended Additions

1.In the future, an MC Server Docker application will be available in the CasaOS App Store, enabling one-click installation in under a minute.

2.Explore advanced gameplay with ZimaBoard and Minecraft to unlock enhanced performance and features.

## Conclusion

The philosophy behind Minecraft is simple: it lets you create a world of your own. By guiding children responsibly, joining their adventures, and managing gaming time, you’ll discover far more than just fun—you’ll foster creativity, cooperation, and lasting memories.

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)
