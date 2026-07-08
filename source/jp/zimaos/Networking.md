---
title: ネットワーク
description:ZimaOSにはデスクトップUIがなく、Ethernetを接続するだけですぐに使用できます。接続されたディスプレイにはデバイス情報とIPアドレスが表示され、ダッシュボードではポートごとのリンク速度の確認、固定IPへの切り替え、リモートアクセスの有効化ができます。
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /jp/zimaos/networking.html
---
**ZimaOS** にはデスクトップ環境がありません。デバイスにモニターを接続すると、画面にはコンソール概要が表示され、ZimaOSのバージョン、デバイスモデル、およびZimaOSウェブダッシュボードへのアクセスに使用できるIPアドレスが確認できます。

ディスプレイに表示される例：

![Zimaos display UI](https://manage.icewhale.io/api/static/docs/1783495730981_image.png)


デフォルトでは、ZimaOSはDHCP経由でIPアドレスを自動的に取得します。Ethernetケーブルを接続するだけでデバイスを使用できます。ネットワーク設定を変更する必要がある場合は、ダッシュボードを開き、**Settings > Network** に移動してください。

## ネットワーク設定

**Network** ページでは、デバイス上のすべての物理Ethernetポートを一覧で確認できます。各ポートについて、以下の情報を確認できます：

- インターフェース名（例：`eth0`、`eth1`）
- リンク状態（Connected / Disconnected）
- 現在のリンク速度（例：1000 Mbps、2500 Mbps）
- 割り当てられたIPアドレス（DHCP経由）

これにより、各ポートが期待される速度でネゴシエーションされ、ルーターから有効なIPが取得されていることを簡単に確認できます。

## 固定IPの設定

各ネットワークインターフェースは、自動設定（DHCP）から手動による固定IP設定へ切り替えることができます：

1. 設定するインターフェースをクリックします
2. モードを **DHCP** から **Manual** に切り替えます
3. 希望するIPアドレス、サブネットマスク、ゲートウェイ、DNSサーバーを入力します
4. **Save** をクリックします
![Setting Page](https://manage.icewhale.io/api/static/docs/1783495665542_image.png)

変更はすぐに反映されます。新しいIPが異なるサブネット上にある場合、現在のダッシュボードセッションは切断されます。接続されたモニターに表示される新しいIPを使用して再接続してください。

## リモートアクセス

Networkingページの **Remote Access** トグルを使用すると、インターネット経由でZimaOSダッシュボードへの外部アクセスを有効にできます。有効にすると、ZimaOSは安全なリレー接続を確立するため、ルーターでポートフォワーディングを設定することなく、どこからでもデバイスにアクセスできます。

詳細については、[Remote Access](https://www.zimaspace.com/docs/zimaos/remote-access) を参照してください。