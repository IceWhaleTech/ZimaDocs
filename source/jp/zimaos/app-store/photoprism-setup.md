---
title: ZimaOS で PhotoPrism を実行する方法
seo_title: "ZimaOS の PhotoPrism：セルフホスト型 AI フォトギャラリー"
description: ZimaOS アプリストアから PhotoPrism をインストール——自動タグ付け、スマート検索、アルバムを備えたプライベートな AI フォトギャラリーを自分のハードウェアで実現します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

PhotoPrism は ZimaOS アプリカタログでネイティブにサポートされています。最新のアプリ情報については [PhotoPrism アプリストアページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.photoprism)をご覧ください。

PhotoPrism はセルフホスト型の AI 搭載フォトギャラリーです。写真を自分の ZimaOS デバイス上にプライベートに保ちながら、クラウドサービスに期待する自動タグ付け、スマート検索、アルバム機能を提供します。サブスクリプションも保存容量の制限もなく、誰かがあなたの思い出をスキャンすることもありません。

## PhotoPrism を選ぶ理由

- **写真はあなたのもの** — すべてが自分の ZimaOS ドライブ上にあり、他人のクラウドではありません。
- **AI が整理** — 顔、場所、物体が自動的にタグ付けされるので、スクロールする代わりに検索で写真を見つけられます。
- **無料・無制限** — サブスクリプションなし。容量はディスク容量のみに制限され、オリジナルが圧縮されることもありません。
- **ロックインなし** — 写真は `/DATA/Gallery` 内の普通のファイルなので、いつでもバックアップや移行が可能です。

## 前提条件

- 稼働中の ZimaOS インストール。
- Web UI 用の空きポート（デフォルト：**2342**）。

## アプリカタログ

1. ZimaOS アプリカタログで PhotoPrism を見つけます。**App Store** を開き、"PhotoPrism" を検索して **Install** をクリックします。

![インストールとカスタムインストールが表示された ZimaOS アプリストアの PhotoPrism アプリページ](/images/app-store/photoprism-app-store.webp)

2. **すぐに使えます！**

![インストール完了後の ZimaOS ダッシュボードに表示された PhotoPrism アイコン](/images/app-store/photoprism-installed-dashboard.webp)

## 設定

以下の手順は**必須ではありません**。**デフォルト**設定のまますぐに使い始められます。

ZimaOS はフォーム編集や YAML による二次編集など、複数の設定方法に対応しています。調整したい主な設定：

- **ボリューム** — 写真と PhotoPrism データの保存場所。写真ライブラリは ZimaOS の `/DATA/Gallery`（`/photoprism/originals` にマウント）にあり、データベース、インデックス、キャッシュ、サムネイルは `/DATA/AppData/photoprism/storage`（`/photoprism/storage` にマウント）に保存されます。storage フォルダは originals フォルダの外に置いてください。
- **ポート** — Web UI にアクセスする外部ポート（デフォルト：2342）。

![2342 ポートとボリュームマッピングが表示された PhotoPrism コンテナ設定](/images/app-store/photoprism-config-form.webp)

## 初回セットアップ

インストール後、PhotoPrism アイコンをクリックします。デフォルトのアカウントとパスワードがポップアップに表示されます——そこに表示されたユーザー名とパスワードでログインします。

![デフォルトの管理者ユーザー名とパスワードが表示された PhotoPrism のヒントウィンドウ](/images/app-store/photoprism-default-credentials.webp)

ログインすればすぐに使えます。デフォルトのアカウントやパスワードを後で変更するには、**Settings → Account** を開きます。

![パスワード変更と二要素認証のオプションがある PhotoPrism アカウント設定](/images/app-store/photoprism-account-settings.webp)

## PhotoPrism の使い方

1. 写真を追加します——`/DATA/Gallery` に写真を置き（または Web UI からアップロードし）、**Library** タブからインデックス作成を開始します。PhotoPrism が AI で自動的に整理・タグ付けします。

![インデックス作成前の完全再スキャンとクリーンアップオプションが表示された PhotoPrism ライブラリタブ](/images/app-store/photoprism-library-index.webp)

2. 閲覧——**Calendar** サブページを開いて日付ごとに写真を閲覧するか、**Search** でキーワード、場所、AI が検出した物体から写真を探します。
3. 整理と共有——**Albums** サブページでアルバムを作成して写真を整理し、家族や友人と共有します。

## 次に試してみましょう

写真のインデックス作成が完了したら、PhotoPrism を開いて以下を試してみてください——手動タグ付けは不要です：

- **自然な言葉で検索** — "cat"、"beach"、"birthday" と入力すれば、PhotoPrism が数秒で一致する写真をすべて見つけます。
- **People を開く** — 顔で自動グループ化された写真を確認できます。
- **Places を開く** — 世界地図上にピン留めされた写真を確認できます。
- **Moments を開く** — PhotoPrism が写真をイベントや旅行ごとに自動グループ化します。

## 関連ガイド

- フォトギャラリーに加えてスマートフォンの自動バックアップもお求めですか？[Immich フォトバックアップ](./immich-photo-backup "ZimaOS で Immich を使ってスマートフォンの写真を自動バックアップ") と [Immich で写真を同期](./sync-photos-with-immich "ZimaOS の Immich サーバーでスマートフォンの写真を同期") をご覧ください。

どちらを選ぶか迷っていますか？スマートフォンの自動バックアップが主目的なら Immich を、自分で管理するファイルフォルダの上に AI 搭載ライブラリが欲しいなら PhotoPrism を選びましょう。

## ヘルプが必要ですか？

ZimaOS での PhotoPrism のインストールや使用で問題が発生した場合は、[ZimaSpace Discord コミュニティ](https://discord.gg/f9nzbmpMtU "ZimaOS サポートのための ZimaSpace Discord コミュニティに参加")にご参加ください。チームとコミュニティメンバーが喜んでお手伝いします。
