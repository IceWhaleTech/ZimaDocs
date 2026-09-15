---
title: ZimaOS で Frigate を実行する方法
seo_title: "ZimaOS の Frigate：カメラ監視と録画のためのローカル AI NVR"
description: ZimaOS アプリストアから Frigate をインストール——AI によるカメラ監視、モーション検知、録画を自分のハードウェアで実現します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

Frigate は ZimaOS アプリカタログでネイティブにサポートされています。最新のアプリ情報については [Frigate アプリストアページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.frigate)をご覧ください。

Frigate は、リアルタイムの AI 物体検出を備えたオープンソースのネットワークビデオレコーダー（NVR）です。ローカルかつプライベートなカメラ監視、モーション検知、録画をすべて自分のハードウェア上で実現し、映像をクラウドに送る必要はありません。

## 前提条件

- 稼働中の ZimaOS インストール。
- RTSP または ONVIF に対応した IP カメラが 1 台以上。
- Web UI 用の空きポート（デフォルト：**8971**）。
- *（任意）* 物体検出を高速化する Google Coral TPU または Intel/AMD iGPU。

## アプリカタログ

1. ZimaOS アプリカタログで Frigate を見つけます。**App Store** を開き、"Frigate" を検索します。

![インストールボタンが表示された ZimaOS アプリストアの Frigate アプリページ](/images/app-store/frigate-app-store.webp)

2. **すぐに使えます！**

![インストール完了後の ZimaOS ダッシュボードに表示された Frigate アイコン](/images/app-store/frigate-installed-dashboard.webp)

## 設定

以下の手順は**必須ではありません**。**デフォルト**設定のまますぐに使い始められます。

ZimaOS はフォーム編集や YAML による二次編集など、複数の設定方法に対応しています。

![ポート、ボリューム、デバイスマッピングが表示された Frigate コンテナ設定](/images/app-store/frigate-config-form.webp)

調整したい主な設定：

- **ボリューム** — Frigate の設定と録画データの保存場所（デフォルト：`/DATA/AppData/frigate/config` を `/config` にマウント、`/DATA/AppData/frigate/media` を `/media/frigate` にマウント）。
- **ポート** — Web UI にアクセスする外部ポート（デフォルト：8971）。
- **検出デバイス** — *（任意）* ハードウェア加速検出のために PCIe Coral（`/dev/apex_0`）、USB Coral（`/dev/bus/usb`）、または Intel/AMD iGPU（`/dev/dri/renderD128`）をマッピングします。

## 初回セットアップ

1. ZimaOS デスクトップから Frigate を開きます。初回起動時にセキュリティ警告が表示されることがありますが、これは Frigate が自己署名証明書を使用しているためで正常です。**Advanced** をクリックし、**Continue to ...** をクリックして続行します。
2. 初回ログインには初期ユーザー名とパスワードが必要です。Frigate アプリアイコンの右上にある三点メニュー → **Settings** をクリックし、**Terminal and Logs** を開いて **Logs** をクリックし、全画面アイコンで表示を拡大します。

![ログを開いて全画面表示に拡大した Frigate アプリ設定](/images/app-store/frigate-logs-view.webp)

3. アスタリスク（`****`）で囲まれたセクションを探します。そこにユーザー名とパスワードが含まれています。この情報で Frigate にログインします。

![アスタリスクで囲まれたデフォルトの管理者認証情報が表示された Frigate 起動ログ](/images/app-store/frigate-logs-credentials.webp)

4. `/DATA/AppData/frigate/config/config.yml` ファイルを編集してカメラを追加し、検出や録画などを設定します。完全なリファレンスは下記の公式ドキュメントをご覧ください。

5. Frigate は、インターフェースを開いてログインし、接続されたカメラをストリームエラーなしで表示できた時点で正常に動作しています。**Live** を開き、カメラが現在の映像を表示していることを確認してください。

## 関連ガイド

- Frigate とローカル LLM を組み合わせて、検出イベントの AI 画像説明を生成する方法は [Frigate と Ollama による AI 画像説明](./frigate-ollama-setup "ZimaOS で Frigate とローカル Ollama モデルを使ってカメライベントを自然言語で説明") をご覧ください。
- よりシンプルなブラウザベースのカメラサーバーをお探しですか？代替案として [NVR カメラサーバー](./nvr-camera-server "ZimaOS でビデオ監視用の Kerberos.io NVR をセットアップ") をご覧ください。

## 公式ドキュメント

Frigate のアプリレベルの設定（カメラ、物体検出、録画、スナップショット、通知、Home Assistant、ハードウェアアクセラレーションなど）はすべて `config.yml` ファイル内にあり、ZimaOS からは独立しています。完全なリファレンスについては、Frigate の公式ドキュメントをご覧ください：

- [Frigate ドキュメント](https://docs.frigate.video/ "Frigate 公式ドキュメント")
- [設定リファレンス](https://docs.frigate.video/configuration/ "Frigate の全設定リファレンス")
- [カメラ](https://docs.frigate.video/configuration/cameras "Frigate カメラ設定ガイド")
- [物体検出](https://docs.frigate.video/configuration/objects "Frigate 物体検出の設定")
- [検出器](https://docs.frigate.video/configuration/object_detectors "Coral TPU と GPU 向けの Frigate 検出器設定")
- [ハードウェアアクセラレーション](https://docs.frigate.video/configuration/hardware_acceleration_video "Frigate ハードウェアアクセラレーションガイド")
- [録画](https://docs.frigate.video/configuration/record "Frigate 録画設定")
- [スナップショット](https://docs.frigate.video/configuration/snapshots "Frigate スナップショット設定")
- [ゾーンとマスク](https://docs.frigate.video/configuration/zones "Frigate ゾーンとマスクのガイド")
- [通知](https://docs.frigate.video/configuration/notifications "Frigate 通知設定")
- [認証](https://docs.frigate.video/configuration/authentication "Frigate 認証設定")
- [Home Assistant](https://docs.frigate.video/integrations/home-assistant "Frigate Home Assistant 連携ガイド")

## ヘルプが必要ですか？

ZimaOS での Frigate のインストールや使用で問題が発生した場合は、[ZimaSpace Discord コミュニティ](https://discord.gg/f9nzbmpMtU "ZimaOS サポートのための ZimaSpace Discord コミュニティに参加")にご参加ください。チームとコミュニティメンバーが喜んでお手伝いします。
