---
title: ZimaOS で VoceChat を実行する方法
seo_title: "ZimaOS の VoceChat：セルフホスト型チームチャットサーバー"
description: ZimaOS アプリストアから VoceChat をインストール——グループチャット、ファイル共有、埋め込みウィジェットを備えた軽量でプライベートなチャットサーバーを自分のハードウェアで実現します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

VoceChat は ZimaOS アプリカタログでネイティブにサポートされています。最新のアプリ情報については [VoceChat アプリストアページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.vocechat)をご覧ください。

VoceChat は軽量でセルフホスト型のチャットサーバーです。プライベートグループチャット、ダイレクトメッセージ、ファイル共有、@メンション、ボット、埋め込み可能なチャットウィジェットを備え、すべてメッセージングベンダーのクラウドではなく自分のハードウェア上で動作します。

## 前提条件

- 稼働中の ZimaOS インストール。
- チャットサーバー用の空きポート（デフォルト：**3009**）。

## アプリカタログ

1. ZimaOS アプリカタログで VoceChat を見つけます。**App Store** を開き、"VoceChat" を検索します。

![インストールボタンが表示された ZimaOS アプリストアの VoceChat アプリページ](/images/app-store/vocechat-app-store.webp)

2. **すぐに使えます！**

![インストール完了後の ZimaOS ダッシュボードに表示された VoceChat アイコン](/images/app-store/vocechat-installed-dashboard.webp)

## 設定

以下の手順は**必須ではありません**。**デフォルト**設定のまますぐに使い始められます。

ZimaOS はフォーム編集や YAML による二次編集など、複数の設定方法に対応しています。

![3009 ポートとデータボリュームマウントが表示された VoceChat コンテナ設定](/images/app-store/vocechat-config-form.webp)

調整したい主な設定：

- **ボリューム** — チャット履歴とアップロードファイルの保存場所（デフォルト：`/DATA/AppData/vocechat/home/vocechat-server/data` を `/home/vocechat-server/data` にマウント）。
- **ポート** — Web UI にアクセスする外部ポート（デフォルト：3009）。

## 初回セットアップ

ZimaOS では初回セットアップも同様に簡単です——編集する設定ファイルはありません。インストール後、VoceChat を開いてセットアップウィザードに従います：

1. サーバーの名前を設定します。
2. 管理者アカウントを作成します（メール + パスワード）。
3. 登録モードを選択します（オープン登録または招待制）。

![仲間の招待やアップグレードのオプションがある VoceChat ウェルカム画面](/images/app-store/vocechat-first-run-welcome.webp)

完了したら、招待リンクを家族やチームに共有してすぐにチャットを始められます。VoceChat は公式の iOS/Android アプリと、Web サイトに埋め込めるチャットウィジェットも提供しています。

## ヘルプが必要ですか？

ZimaOS での VoceChat のインストールや使用で問題が発生した場合は、[ZimaSpace Discord コミュニティ](https://discord.com/invite/f9nzbmpMtU "ZimaOS サポートのための ZimaSpace Discord コミュニティに参加")にご参加ください。チームとコミュニティメンバーが喜んでお手伝いします。
