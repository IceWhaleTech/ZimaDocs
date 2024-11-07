---
title: 我的世界服务器–使用 ZimaBoard 构建一个我的世界服务器
---

# 理由

**COVID-19** 迫使我们花更多时间与家人相处。之前我们介绍过如何利用 ZimaBoard 构建一个家庭版的 4K 影院。最近，影院已无法满足家庭的需求。因此，我们找到了一些更适合成年人和儿童在家玩的有趣游戏。好的游戏可以让家庭成员之间更加亲近，并提高孩子的创造能力。

## 介绍 [**Minecraft**](https://www.minecraft.net/zh-hans)

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-introduce-home-page.png)

[**Minecraft**](https://www.minecraft.net/zh-hans) 是由 Mojang AB 创始人 Markus Persson 创建的一款沙盒建造游戏，受 Endless Miner、Dwarf Fortress 和 Dungeon Keeper 的启发。目前的首席开发者是 Jens Bergensten。玩家可以在游戏的三维空间中创建和销毁无数的立方体，并在多人服务器和单人世界中体验不同的游戏模式，创造精美的建筑、作品和艺术品。

# 提前准备

默认情况下，阅读本教程时你知道如何使用 ZimaBoard：[**ZimaBoard 教程**](/docs/)

同样，在这里你默认已经购买了一个我的世界账户：[**MineCraft 购买链接**](https://www.minecraft.net/zh-hans/about-minecraft)

| 项目     | 描述 |
| ----------- | ----------- |
| 软件    | [**MineCraft 安装链接**](https://www.minecraft.net/en-us/download) |
| 段落   | ZimaBoard 216|

# 开始构建一个我的世界服务器

## 进入 CasaOS

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-casa-home-page.png)

## 打开应用商店并选择自定义安装

```
 docker run -d \
-p 25565:25565 \
-v /DATA/AppData/mc-data/:/data \
-e EULA=TRUE \
--name minecraft \
itzg/minecraft-server
```

## 复制 [Cli]（<https://hub.docker.com/r/itzg/minecraft-server>)

![Copy Minecraft Server Cli](/images/Minecraft-Friendship-Service/minecraft-copy-cli.png).

## 检查环境

![Check Minecraft Server Environment](/images/Minecraft-Friendship-Service/minecraft-check-environment.png)

{% note dinfo %}
**注意**

环境变量 **EULA=TRUE**

确保在你的命令和容器定义中始终包含 -e EULA=TRUE，因为 Mojang/Microsoft 要求接受 EULA。
{% endnote %}

## 打开我的世界客户端

**现在打开你之前安装的我的世界客户端，这里是在 MAC 上的操作**

![](/images/Minecraft-Friendship-Service/minecraft-open-minecraft-client.png)

## 点击多人游戏 ##

![Open Minecraft Client](/images/Minecraft-Friendship-Service/minecraft-click-multiplayer.png)

## 添加服务器 ##

![Add Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

## 输入你的 IP 地址并添加 25565

![Add Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

![Add Minecraft Address](/images/Minecraft-Friendship-Service/minecraft-add-server-address.png)

如果你不知道你的 IP 地址，可以参考教程——["**查找你的 CasaOS IP 地址**"](/Users/lijian/Documents/GitHub/ZimaDocs/zimaboard/02-get-started/09-find-casaos-ip-address.md)

## 你的我的世界服务器现在已准备就绪 ##

![Show Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-server.png)

## 开始游戏 ##

![Show Minecraft Game Page](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page.png)

![Show Minecraft Game Page](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page2.png)

# 调整服务器参数

## 例如

默认情况下，[**Minecraft**](https://www.minecraft.net/zh-hans) 服务器配置为生存模式。你可以使用 **MODE** 更改模式，在这里你可以提供标准数字值或快捷值：

- creative
- survival
- adventure
- spectator（仅适用于 [**Minecraft**](https://www.minecraft.net/zh-hans) 1.8 或更高版本）

```

docker run -d -e MODE=creative ...

```

**宣布玩家成就**

```

docker run -d -e ANNOUNCE_PLAYER_ACHIEVEMENTS=true

```

**更多信息** - [**Docker Minecraft 服务器**](https://github.com/itzg/docker-minecraft-server)

### 扩展附加功能 ###

1. 在后期，CasaOS 应用商店将会有 mc 服务器 Docker 应用（实现一键安装 MC 服务器）。

2. Zimaboard & [**Minecraft**](https://www.minecraft.net/zh-hans) 高级版游戏。

## 结论 ##

[**Minecraft**](https://www.minecraft.net/zh-hans) 背后的理念非常简单，就是创造一个属于你的世界；请正确指导你的孩子，与他们一起参与，并控制游戏时间。我相信你能获得更多超越纯粹的快乐与幸福。

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)