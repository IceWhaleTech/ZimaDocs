---
title: ZimaOS で AdGuard Home を実行する方法
seo_title: "ZimaOS の AdGuard Home：ネットワーク全体の広告・トラッカー遮断"
description: ZimaOS アプリストアから AdGuard Home をインストール——独自の DNS サーバーでネットワーク上の全デバイスの広告、トラッカー、悪質なドメインを遮断します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

AdGuard Home は ZimaOS アプリカタログでネイティブにサポートされています。最新のアプリ情報については [AdGuard Home アプリストアページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.adguardhome)をご覧ください。

AdGuard Home は、自分のハードウェア上で動作するネットワーク全体向けの広告・トラッカー遮断 DNS サーバーです。スマートフォンからスマートホームデバイスまで、ネットワーク上のすべてのデバイスに対して広告、トラッカー、悪質なドメインを遮断します。デバイス側には何もインストールする必要がありません。

## 前提条件

- 稼働中の ZimaOS システム。
- デバイスでポート **82** と **3001** が利用可能であること——これらは AdGuard Home 自身のポート 80（Web インターフェース）と 3000（セットアップウィザード）にマッピングされる ZimaOS ホストポートです。
- DNS 用にポート **53** も空いている必要があります。

## アプリカタログ

1. ZimaOS アプリカタログで AdGuard Home を見つけます。**App Store** を開き、"AdGuard Home" を検索して **Install** をクリックします。

![インストールとカスタムインストールが表示された ZimaOS アプリストアの AdGuard Home アプリページ](/images/app-store/adguard-app-store.webp)

2. **すぐに使えます！**

![インストール完了後の ZimaOS ダッシュボードに表示された AdGuard Home アイコン](/images/app-store/adguard-installed-dashboard.webp)

## 設定

ダウンロードが完了したら、アプリ設定を開いてポートフォワーディングルールを追加します：

1. **Port forwarding** の下の **'+'** ボタンをクリックし、`82` を `80` にマッピングするルールを追加します。

![82 から 80 への新しい TCP マッピングが追加された AdGuard Home のポートフォワーディングルール](/images/app-store/adguard-port-forwarding.webp)

> **ヒント：** ルール追加時にエラーが表示される場合、ポート `82` が別のアプリで使用されている可能性が高いです。`82` を別の空きポートに変更し、文中のすべての `82` の記載も合わせて更新してください。ポート `53` のマッピングは変更しないでください——DNS に必要です。

## 初回セットアップ

1. AdGuard Home アイコンをクリックして初期セットアップを開きます。
2. すべてのデフォルト設定のままセットアップを完了し、管理者ユーザー名とパスワードを作成します。

> AdGuard Home の管理インターフェースはデフォルトですべてのネットワークインターフェースで待ち受けます。この設定を変更するには、AdGuard の [AdGuard Home を安全に実行する](https://adguard-dns.io/kb/adguard-home/running-securely/ "AdGuard Home 公式セキュリティガイド") ガイドをご覧ください。

## セットアップ後

1. ZimaOS ダッシュボードに戻り、アプリ設定を再度開きます。**Web URL**（webURL）フィールドで `3001` を `82` に変更します。

![Web URL フィールドが 3001 から 82 に変更された AdGuard Home アプリ設定](/images/app-store/adguard-web-url.webp)

2. AdGuard Home アイコンをクリックし、セットアップ中に設定したユーザー名とパスワードでログインします。

![ユーザー名とパスワードの入力欄がある AdGuard Home ログイン画面](/images/app-store/adguard-login.webp)

## 静的 IP の設定

ルーターを AdGuard Home に向ける前に、ZimaOS デバイスに固定アドレスを割り当てます。DHCP で割り当てられたアドレスのままで、そのアドレスが後で変わると、更新されるまでネットワーク上のすべてのデバイスが DNS 解決を失います。

1. ZimaOS の **Settings** → **Network** を開き、ネットワークインターフェースを選択します。
2. 自動（DHCP）から **Manual** に切り替え、各フィールドに入力します。
3. 設定を保存します。

![静的 IP、ゲートウェイ、DNS を入力して手動モードに切り替えた ZimaOS ネットワーク設定](/images/app-store/adguard-static-ip.webp)

スクリーンショットのフィールドは例です——自分のネットワークに合った値に置き換えてください：

- IP アドレス：例 `10.0.1.91`
- サブネットマスク：例 `255.255.255.0`（セットアップによっては /24 のようなプレフィックス長）
- ゲートウェイ：例 `10.0.1.1`
- DNS：例 `94.140.14.14`（プライマリ）、`94.140.15.15`（セカンダリ）

あるいは、ルーターの DHCP ページでアドレスを予約して、デバイスが常に同じ IP を受け取るようにすることもできます。

## ルーターを AdGuard Home に向ける

AdGuard Home の設定が完了したら、ルーター設定を開いて **DHCP/DNS** セクションを探し、AdGuard Home を実行しているデバイスのアドレス（例 `10.0.1.91`）を入力します。設定を保存すれば準備完了です。

> 一部のルーターではカスタム DNS サーバーの設定自体ができません。その場合は、代わりに AdGuard Home 自身の DHCP サーバーを使用できます。

## ブロックリストの追加

AdGuard Home には **AdGuard DNS filter** がデフォルトで有効になっているため、セットアップ完了後すぐにフィルタリングが機能します。より強力にフィルタリングするには、**Filters** → **DNS blocklists** → **Add blocklist** を開いて追加の DNS ブロックリストを追加します——これらのリストにあるドメインは、ネットワーク上のすべてのデバイスでブロックされます。

## AdGuard Home がブロックするもの

DNS ベースのブロックはドメイン単位で機能するため、以下をブロックできます：

- 専用の広告・トラッキングドメインから配信される広告とトラッカー
- 悪質なドメインとフィッシングドメイン
- アプリやスマートホームデバイスからのテレメトリ

注意：AdGuard Home は、YouTube の動画内広告や大半のアプリ内広告のように、コンテンツと同じドメインから配信される広告は削除できません。それらにはデバイスレベルの広告ブロッカーが必要です。スマートフォンやパソコンで YouTube やアプリ内広告をブロックするには、コード ZIMAGUARD30 を使って AdGuard Ad Blocker をお試しください。30% オフになります。

ネットワーク全体のフィルタリングは、クライアントのリクエストが AdGuard Home の **Query Log** に表示され、ブロックされたリクエストが **Dashboard** の統計に表示されるようになると有効です。

![DNS クエリ数とクライアント統計が表示された AdGuard Home ダッシュボード](/images/app-store/adguard-dashboard-stats.webp)

## アップデート

AdGuard Home は Docker コンテナとして動作し、Docker インストールでは自動更新が仕様上無効になっています。そのため AdGuard Home インターフェース内の **Update** ボタンは機能しません。更新するには、**ZimaOS アプリストア**から最新バージョンをインストールしてください。

## 関連ガイド

- 別の選択肢をお探しですか？[Pi-hole セットアップ](./pi-hole-setup "ZimaOS で Pi-hole を使ってネットワーク全体の広告とトラッカーをブロック") をご覧ください。

## ヘルプが必要ですか？

ZimaOS での AdGuard Home のインストールや使用で問題が発生した場合は、[ZimaSpace Discord コミュニティ](https://discord.gg/f9nzbmpMtU "ZimaOS サポートのための ZimaSpace Discord コミュニティに参加")にご参加ください。チームとコミュニティメンバーが喜んでお手伝いします。
