---
title: Tailscale と WireGuard によるリモートアクセス
seo_title: "Tailscale と WireGuard で ZimaOS ホームサーバーにどこからでも接続"
description: "公式 App Store の Tailscale、WireGuard Easy、Firefly、NetBird で ZimaOS ホームサーバーにアクセス。オープンなプロトコル、自分の鍵、完全な制御。"
type: Docs
author: Lauren Pan
tip: このFront Matterブロックは削除しないでください。descriptionフィールドは記事の概要に使用され、空の場合は最初の段落が代わりに使用されます。
---
ZimaClient はサインインした瞬間から ZimaOS のリモートアクセスを担います。それでも、すでに Tailscale ネットワークや WireGuard サーバーを運用している人は少なくありません。理由はたいてい同じです。自分が管理するアカウントと鍵を使い、オープンなプロトコルで接続を構築したい。このガイドでは、App Store から直接インストールするその方法を紹介します。

## 標準プロトコルを選ぶ理由

ZimaOS は、どの方法で接続してもユーザーデータを収集しません。方法による違いは、制御がどこにあるかです。

組み込みのリモートアクセスは ZimaClient を通じて動作します。サインインするだけで、暗号化されたピアツーピアの接続が設定されます。標準プロトコルでは、その設定を自分で行います。自分の Tailscale アカウントや WireGuard の鍵を持ち込みます。トラフィックはピアツーピアのままで、クライアントは Linux、Android、その他のプラットフォームで動作し、特定のベンダーに縛られることもありません。将来 ZimaOS から離れても、ネットワークと設定はそのまま持ち運べます。

公式 App Store には、このためのアプリが 4 つあります。**Tailscale**、**WireGuard Easy**、**Firefly**、**NetBird** です。

## アプリを選ぶ

| アプリ | 概要 | こんな人に |
|---|---|---|
| Tailscale | ポート開放不要の WireGuard ベースのメッシュ VPN | 最小限の設定でデバイスを 1 つのプライベートネットワークにまとめたい人 |
| WireGuard Easy | WireGuard VPN サーバーを管理する Web UI | ダッシュボード付きで自分の WireGuard サーバーを運用したい人 |
| Firefly | wg-easy をベースにした WireGuard VPN サーバー | 既定の設定でそのまま使える WireGuard サーバーが欲しい人 |
| NetBird | SSO、MFA、アクセス制御を備えた WireGuard ベースのオーバーレイネットワーク | チームや細かいアクセスルールが必要な人 |

Tailscale と NetBird はデバイスの調整に自社のサービスを使いますが、トラフィック自体はピアツーピアのままです。WireGuard Easy と Firefly は、鍵を含めてすべてをデバイス内に保管します。

## App Store からインストールする

最初の手順は 4 つのアプリすべてで同じです。

1. ZimaOS デバイスで **App Store** を開きます。
2. アプリを検索して **インストール** をクリックします。
3. インストール済みアプリからアプリを開きます。

![インストールボタンと説明が表示された ZimaOS App Store の Tailscale アプリカード](/images/app-store/tailscale-app-store-card.webp)

Tailscale はあと数ステップ必要です。以下で説明します。ほかの 3 つのアプリはクライアントの設定の後に説明します。

### Tailscale

初回起動時に、Tailscale は Tailscale アカウントでのサインインを求めます。ブラウザのページが開き、デバイスを承認すると、ZimaOS デバイスがあなたのテールネットに参加します。

![ホームサーバーをテールネットで承認するよう求める Tailscale のサインインページ](/images/app-store/tailscale-sign-in.png)

わかりやすい名前を付けたら、[Tailscale 管理コンソール](https://login.tailscale.com/admin/machines "公式管理コンソールで Tailscale デバイスを管理する")で 100.x アドレスとともにデバイスを確認できます。

![100.x アドレスとともにホームサーバーが表示された Tailscale 管理コンソール](/images/app-store/tailscale-admin-console-device.webp)

これで、テールネット上のどのデバイスからでも、そのアドレスを通じて ZimaOS ホームサーバーにアクセスできます。どこにいてもです。ダッシュボードの URL をノートパソコンのブックマークに保存しておけば、どこからでもサインインできます。

## クライアントアプリをインストールする

クライアント側は簡単です。デバイスのアプリストアから公式アプリをインストールし、ネットワークに接続するだけです。

iOS では、どちらのアプリも App Store にあります。Android では、公式の Tailscale または WireGuard アプリを Google Play から入手します。Linux では、公式の Tailscale クライアントまたは wireguard-tools をディストリビューションからインストールします。

設定は 1 ステップです。

- Tailscale: アプリを開き、Tailscale アカウントでサインインします。デバイスがテールネットに表示されます。
- WireGuard: ZimaOS で作成した設定ファイルをインポートするか、QR コードをスキャンします。

![テールネットに接続されたホームサーバーが表示された iOS の Tailscale アプリ](/images/app-store/tailscale-ios-app.png)

## WireGuard Easy、Firefly、NetBird

ほかの 3 つのアプリも App Store からのインストール手順は同じです。インストール後、それぞれ管理ページが開きます。

**WireGuard Easy** は Web UI 付きの WireGuard VPN サーバーを実行します。デバイスごとにクライアントを作成し、QR コードまたは設定ファイルとして各デバイスに設定を渡します。

**Firefly** は wg-easy をベースにした最もシンプルな WireGuard サーバーです。クライアントを作成し、スマートフォンで QR コードをスキャンすれば接続完了です。

**NetBird** は SSO、MFA、詳細なアクセス制御を備えた WireGuard ベースのオーバーレイネットワークにデバイスを接続します。NetBird ダッシュボードでデバイスを承認し、アクセスルールを設定します。

注意点：

- WireGuard サーバーは UDP ポートで待ち受けます。自宅ネットワークの外から WireGuard Easy や Firefly に到達するには、そのポートにパブリック IP アドレスまたはルーターでのポート転送が必要です。
- NetBird はサインインとアクセスルールを自社のサービスで処理します。ZimaOS アカウントは関与しません。

## デスクトップと詳細設定

デスクトップでの手順はモバイルと同じです。Windows、macOS、Linux 用の公式 Tailscale または WireGuard クライアントをインストールし、Tailscale アカウントでサインインするか WireGuard の設定をインポートします。

詳細な設定については、公式ドキュメントに記載があります。

- Tailscale: [Tailscale ナレッジベース](https://tailscale.com/kb/ "セットアップと詳細設定のための Tailscale 公式ドキュメント")
- WireGuard: [WireGuard 公式サイト](https://www.wireguard.com/install/ "クライアントと設定手順を掲載する WireGuard 公式サイト")
- WireGuard Easy: [wg-easy リポジトリ](https://github.com/wg-easy/wg-easy "インストールと設定の詳細を掲載する wg-easy 公式リポジトリ")
- NetBird: [NetBird ドキュメント](https://docs.netbird.io/ "SSO、MFA、アクセスルールを解説する NetBird 公式ドキュメント")

## これらのアプリが行わないこと

- ZimaClient の代わりにはなりません。写真の閲覧、**[スマートフォンのバックアップ](../phone-backup "ZimaClient でスマートフォンを ZimaOS に自動バックアップする")**、**[パソコンのバックアップ](../computer-backup "Finder、エクスプローラー、同期を使用してコンピューターを ZimaOS にバックアップする")**、Connect ID、ZimaOS 設定のリモートアクセススイッチはすべて ZimaClient のものです。Tailscale と WireGuard が担うのは接続だけです。バックアップや同期は行いません。
- Tailscale と NetBird は自社のサービスを通じてデバイスを調整するため、アカウントはプロバイダー側にあります。トラフィックはピアツーピアのままです。すべてを自分のハードウェアに置きたい場合は、WireGuard Easy と Firefly が対応します。
- どの方法でも、ZimaOS 自体がユーザーデータを収集することはありません。

## 次へ

- **[リモートアクセス](../remote-access "どこからでもホームサーバーにアクセスできるようリモートアクセスを設定する")** — 組み込みの方法
- **[ZimaClient をダウンロード](../zimaclient-install "デバイスへのアクセス用にデスクトップとモバイルで ZimaClient をインストールして設定する")** — デスクトップとモバイル向けのクライアント
- **[セルフホストアプリ](./self-hosted-apps "ZimaOS ホームサーバーで実行できるセルフホストアプリを探す")** — デバイスでほかに何が動くか
