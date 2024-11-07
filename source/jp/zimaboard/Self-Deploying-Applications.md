---
title: 自動デプロイアプリケーション
description:
typora-root-url: ..
---
# 理由

**自分のアプリケーションのロードをインストールするニーズに応えるために、CasaOSはユーザーにさまざまなインストール方法を提供しています。この文書は、Dockerアプリケーションを見つけて簡単にコピーして使用する手助けをします。この文書推奨の検索サイトは**[linuxserver.io](https://www.linuxserver.io/)****です。

# linuxserver.io

![Linuxserver](/images/Self-Deploying-Applications/application-introduce-linuxserver.png)

公式ウェブサイトに記載されている通りです。
私たちは、世界中から集まった同じ志を持つ愛好者のグループで、ウェブ上で最大のDockerイメージのコレクションを構築・維持しており、基本には自由でオープンなソフトウェアの原則があります。私たちの主な目標は、使いやすく簡潔なドキュメントを持つストリームライン化されたDockerイメージを提供することです。
**はい、彼らはそれを達成したと思います！**

# 希望のDockerイメージを検索

**ステップ1** OpenLinuxServerにアクセスし、**[’fleet’](https://fleet.linuxserver.io/)**をクリックします。

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet1.png)

**ステップ2** **[’fleet’](https://fleet.linuxserver.io/)**で希望のアプリケーションを検索します。

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet.png)

# アプリケーションのインストール

**例:** CasaOSに**[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)**をインストールして使用する。

## **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)**とは？

![Appriseapi](/images/Self-Deploying-Applications/applicatin-appriseapi-logo.png)

Appriseは、Telegram、Discord、Slack、Amazon SNS、Gotifyなど、今日利用可能なほぼすべての人気の通知サービスに通知を送信することができます。このAPIは、HTTPインターフェースを通じて直接アクセスするためのシンプルなゲートウェイを提供します。CasaOSでのApprise APIインストール。

## Docker CLIを検索
Apprise APIハブにアクセスして、適切なDocker CLI -apprise-apiをコピーします。

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-docker-cli.png)

## これらのステップに従ってください

CasaOSを開き、ユーザー定義のインストール画面に移動し、貼り付けてインストールを待ちます。

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps1.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps2.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps3.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps4.png)

## Apprise API Docker CLIをコピー

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps5.png)

## Apprise API Docker CLIを貼り付け

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps6.png)

## Web UIポートを追加

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps7.png)

## インストールを待つ

これには数分かかる場合があります。

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps8.png)

## インストール成功と使用クリック

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-using-appriseapi.png)

**注意**
AutoFillは、いくつかの設定情報を完了する手助けをするだけです。
含まれるもの：
- Web UIのポートとパス
- ボリュームやファイルのマウント位置
- ホストのポートマッピング
- オプションの設定項目
これらには、これらのケースに限らず、あなたによって確認または修正される必要があります。この機能の改善をDiscordサーバーで自由に提案してください！

# 結論

上記は**[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)**のインストール方法であり、他のアプリケーションにも同様のことが言えます。しかし注意してください：各アプリケーション自体は特定の条件を必要とします。

インストール中はDocker Hubインターフェースでいくつかの部分を確認する必要があります。

**例えば**

- 対応アーキテクチャ  
  アプリケーションによってサポートされているアーキテクチャを識別します。もしなければ、上記のタグを確認してください（更新版の履歴を含む）。

- パラメータ :  
  コンテナイメージは、実行時に渡されるパラメータを使用して配分され、一部のアプリケーションはここに表示されるデフォルトパスワードを設定しています。

詳細情報——https://docs.linuxserver.io/images/docker-airsonic-advanced#docker-cli-click-here-for-more-info

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)