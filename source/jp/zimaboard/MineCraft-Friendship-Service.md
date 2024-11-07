---
title: Minecraft サーバー - ZimaBoardでMinecraftサーバーを構築する
---

# 理由

**COVID-19**により、私たちは家族と過ごす時間が増えました。以前は、ZimaBoardを使用して4Kシアターの家庭版を構築する方法が紹介されました。最近では、シアターだけでは家族には十分ではなくなりました。そこで、家庭内で大人と子供により適した楽しいゲームを見つけました。良いゲームは家族の絆を深め、子供の創造力を高めることができます。

## [**Minecraft**](https://www.minecraft.net/zh-hans)の紹介

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-introduce-home-page.png)

[**Minecraft**](https://www.minecraft.net/zh-hans)は、Mojang ABの創設者であるMarkus Perssonによって創造されたサンドボックスビルディングゲームで、Endless Miner、Dwarf Fortress、Dungeon Keeperに触発されています。現在のリード開発者はJens Bergenstenです。プレイヤーは、ゲームの3D空間で無数のキューブを作成および破壊し、マルチプレイヤーサーバーやシングルプレイヤーのワールドで異なるゲームモードを体験しながら精巧な建物や作品、アートを作り出すことができます。

# 事前準備

このチュートリアルを読んでいる時点で、ZimaBoardの使い方をすでに知っている前提です：[**ZimaBoardチュートリアル**](/docs/)

同様に、ここではデフォルトでMy Worldアカウントを購入している前提です：[**MineCraft購入リンク**](https://www.minecraft.net/zh-hans/about-minecraft)

| アイテム     | 説明 |
| ----------- | ----------- |
| ソフトウェア    | [**MineCraftインストールリンク**](https://www.minecraft.net/en-us/download) |
| 段落   | ZimaBoard 216|

# Minecraftサーバーの構築を始める

## CasaOSに入る

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-casa-home-page.png)

## アプリストアを開いてカスタムインストールを選択

```
 docker run -d \
-p 25565:25565 \
-v /DATA/AppData/mc-data/:/data \
-e EULA=TRUE \
--name minecraft \
itzg/minecraft-server
```

## [Cli]（<https://hub.docker.com/r/itzg/minecraft-server>）をコピー

![Copy Minecraft Server Cli](/images/Minecraft-Friendship-Service/minecraft-copy-cli.png).

## 環境をチェック

![Check Minecraft Server Environment](/images/Minecraft-Friendship-Service/minecraft-check-environment.png)

{% note dinfo %}
**注意**

環境変数 **EULA=TRUE**

Mojang/MicrosoftがEULAへの同意を要求するため、常にコマンドやコンテナ定義に-e EULA=TRUEを含めるようにしてください。
{% endnote %}

## MY Worldクライアントを開く

**今、以前にインストールしたMy Worldクライアントを開きます。ここではMACを使用しています**

![](/images/Minecraft-Friendship-Service/minecraft-open-minecraft-client.png)

## マルチプレイヤーをクリック ##

![Open Minecraft Client](/images/Minecraft-Friendship-Service/minecraft-click-multiplayer.png)

## サーバーを追加 ##

![Add Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

## IPアドレスを入力して25565を追加

![Add Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

![Add Minecraft Address](/images/Minecraft-Friendship-Service/minecraft-add-server-address.png)

IPアドレスがわからない場合は、チュートリアル—["**CasaOSのIPアドレスを見つける**"](/Users/lijian/Documents/GitHub/ZimaDocs/zimaboard/02-get-started/09-find-casaos-ip-address.md)を参照してください。

## あなたのMinecraftサーバーは今や準備完了です ##

![Show Minecraft Server](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-server.png)

## プレイ ##

![Show Minecraft Game Page](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page.png)

![Show Minecraft Game Page](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page2.png)

# サーバーのパラメータ調整

## 例えば

デフォルトでは、[**Minecraft**](https://www.minecraft.net/zh-hans)サーバーはサバイバルモードで実行されるように構成されています。**MODE**を使用してモードを変更でき、標準の数値やショートカット値を提供できます：

- creative
- survival
- adventure
- spectator（[**Minecraft**](https://www.minecraft.net/zh-hans) 1.8以降のみ）

```

docker run -d -e MODE=creative ...

```

**プレイヤーの成果をアナウンス**

```

docker run -d -e ANNOUNCE_PLAYER_ACHIEVEMENTS=true

```

**詳細情報** - [**Docker Minecraftサーバー**](https://github.com/itzg/docker-minecraft-server)

### 拡張追加 ###

1. 後にCasaOSアプリストアにmcサーバーのdockerアプリケーションが追加され（一分でワンクリックでMCサーバーをインストールできるもの）

2. Zimaboard & [**Minecraft**](https://www.minecraft.net/zh-hans)の高级版のプレイ

## 結論 ##

[**Minecraft**](https://www.minecraft.net/zh-hans)の哲学は非常にシンプルです。あなた自身に属する世界を作ること; お子さんを正しく導き、共に参加し、ゲームの時間を管理してください。純粋な喜びと幸せを超えて、もっと得られると信じています。

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)