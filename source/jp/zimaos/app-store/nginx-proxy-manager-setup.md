---
title: ZimaOS で Nginx Proxy Manager を実行する方法
seo_title: "ZimaOS の Nginx Proxy Manager：リバースプロキシと HTTPS 設定"
description: ZimaOS アプリストアから Nginx Proxy Manager をインストール——セルフホストアプリのためのリバースプロキシ、Let's Encrypt 証明書、HTTPS を設定します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

Nginx Proxy Manager は ZimaOS アプリカタログでネイティブにサポートされています。最新のアプリ情報については [Nginx Proxy Manager アプリストアページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.nginxproxymanager)をご覧ください。

[Nginx Proxy Manager](https://nginxproxymanager.com/ "Nginx Proxy Manager 公式サイト") は、Nginx の上にクリーンな Web UI を載せた無料のオープンソースツールです。リバースプロキシ、SSL 証明書（Let's Encrypt 経由）、アクセスリストを数分で設定できます——設定ファイルを手作業で編集することなく、セルフホストアプリを HTTPS でインターネットに公開できます。このアプリはセルフホスティングを第一級市民として設計されています。

## 前提条件

- 稼働中の ZimaOS インストール。
- *（任意）* Let's Encrypt による自動 HTTPS 証明書が必要な場合、サーバーのパブリック IP を指すドメイン名。

## アプリカタログ

1. ZimaOS アプリカタログで Nginx Proxy Manager を見つけます。**App Store** を開き、"Nginx Proxy Manager" を検索して **Install** をクリックします。

> **ヒント：** 初めてインストールする際に **"there are ports in use"** というプロンプトが表示されることがあります。対処方法は下記の FAQ をご覧ください。

![インストールボタンが表示された ZimaOS アプリストアの Nginx Proxy Manager アプリページ](/images/app-store/nginx-proxy-manager-app-store.png)

2. **すぐに使えます！**

![インストール完了後の ZimaOS ダッシュボードに表示された Nginx Proxy Manager アイコン](/images/app-store/nginx-proxy-manager-installed-dashboard.png)

3. サインイン後、最初のプロキシホストを追加します。

![プロキシホストとリダイレクトのカウンターがゼロの Nginx Proxy Manager ダッシュボード](/images/app-store/nginx-proxy-manager-dashboard.webp)

## はじめに

1. `http://your-zimaos-ip:81` で Nginx Proxy Manager の管理 UI にログインします。
2. 最初の **Proxy Host** を追加します：

   - **Domain Names** — ZimaOS を指すドメインまたはサブドメインを入力します。
   - **Forward Hostname / IP** と **Forward Port** — 公開したいサービスのアドレス。
   - 必要に応じて **Block Common Exploits** と **Websockets Support** を有効にします。

![ドメイン、転送先ホスト名、転送先ポートのフィールドがある Add Proxy Host ダイアログ](/images/app-store/nginx-proxy-manager-add-proxy-host.png)

3. **SSL** タブで無料の **Let's Encrypt** 証明書をリクエストし、自動 HTTPS のために **Force SSL** を有効にします。

これでサービスにわかりやすいドメイン経由で HTTPS アクセスできるようになります——ルーティング、SSL、アクセス制御は Nginx Proxy Manager が処理します。

ブラウザでドメインを開いたときに、証明書の警告なしでアプリが HTTPS で読み込まれれば、プロキシは正常に動作しています。

## サービスを公開する前に

リバースプロキシはアプリを公開します——各アプリが公開に値することを確認してください：

- 独自のログインを持たないサービスの前には **Access List** を置きます。
- 管理 UI（ポート 81）はインターネットに公開しないでください。ローカルネットワークから管理するか、ポートを公開する代わりに [Tailscale](./tailscale-wireguard-remote-access "Tailscale WireGuard で ZimaOS デバイスにリモートアクセス") を使用します。
- 独自の認証を備えたサービスから始め、公開環境での挙動を確認してからアクセスを広げてください。

## FAQ

### "there are ports in use"

![ZimaOS への Nginx Proxy Manager インストール時に表示されるポート使用中の警告](/images/app-store/nginx-proxy-manager-ports-in-use.webp)

Nginx Proxy Manager はポート **80**（HTTP）、**81**（管理 UI）、**443**（HTTPS）を使用します。ポート 80 は通常 ZimaOS Gateway が使用しているため、手動で再マッピングします：**Custom Installation** を選択し、ポート 80 のマッピングを変更してから **Install** をクリックします。（使用中の他のポートも再マッピングしてください——81 を再マッピングした場合、「はじめに」の管理 UI アドレスもそれに合わせて変わります。）

![インストール前に Custom Installation が選択された Nginx Proxy Manager アプリページ](/images/app-store/nginx-proxy-manager-custom-install.webp)

![ポート 80 が 8010 に再マッピングされたカスタムインストールのポートマッピング](/images/app-store/nginx-proxy-manager-port-remap.webp)

## 関連ガイド

- ポートをまったく開かずにサービスを公開したいですか？[Tailscale WireGuard リモートアクセス](./tailscale-wireguard-remote-access "Tailscale WireGuard で ZimaOS デバイスにリモートアクセス") をご覧ください。

## ヘルプが必要ですか？

ZimaOS での Nginx Proxy Manager のインストールや使用で問題が発生した場合は、[ZimaSpace Discord コミュニティ](https://discord.gg/f9nzbmpMtU "ZimaOS サポートのための ZimaSpace Discord コミュニティに参加")にご参加ください。チームとコミュニティメンバーが喜んでお手伝いします。
