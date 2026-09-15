---
title: ZimaOS で RomM を実行する方法
seo_title: "ZimaOS の RomM：セルフホスト型 ROM ライブラリ管理"
description: ZimaOS アプリストアから RomM をインストール——ゲーム ROM コレクションを自分のハードウェア上のセルフホスト型ライブラリで整理、閲覧、共有します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

RomM は ZimaOS アプリカタログでネイティブにサポートされています。最新のアプリ情報については [RomM アプリストアページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.romm)をご覧ください。

RomM はセルフホスト型の ROM ライブラリ管理ツールです。ゲームコレクションをスキャンし、ボックスアートとメタデータを取得し、ネットワーク上のどのデバイスからでも閲覧・共有できるブラウザベースのライブラリを提供します。

## 前提条件

- 稼働中の ZimaOS インストール。
- ライブラリが期待される [フォルダ構造](https://docs.romm.app/latest/getting-started/folder-structure/ "RomM の ROM ライブラリのフォルダ構造ガイド") で整理されていること。

## アプリカタログ

1. ZimaOS アプリカタログで RomM を見つけます。**App Store** を開き、"RomM" を検索します。

![インストールボタンと Media カテゴリが表示された ZimaOS アプリストアの RomM アプリページ](/images/app-store/romm-app-store.webp)

2. **すぐに使えます！**

![インストール完了後の ZimaOS ダッシュボードに表示された RomM アプリアイコン](/images/app-store/romm-installed-dashboard.webp)

## 設定

以下の手順は**必須ではありません**。**デフォルト**設定のまますぐに使い始められます。

ZimaOS はフォーム編集や YAML による二次編集など、複数の設定方法に対応しています。

![Form と YAML タブと環境変数が表示された RomM コンテナ設定](/images/app-store/romm-config-form.webp)

## ROM のインポート

ZimaOS での ROM のインポートはとても簡単です——ドラッグ＆ドロップするだけです。ZimaOS Files を開き、ライブラリを設定したディレクトリ（デフォルトは `AppData/romm/library/roms`）に移動し、ファイルをドラッグしてアップロードします。RomM がファイルを取り込み、ボックスアートとメタデータとともにライブラリに追加します。

## RomM、RetroArch、Batocera

この 3 つのツールはレトロゲームの異なる部分をカバーしています：

- **RomM** はコレクションを整理します——ファイルをスキャンし、ボックスアートとメタデータを取得し、閲覧可能な共有ライブラリを提供します。それ自体はエミュレータではありません。
- **[RetroArch](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.retroarch "ZimaOS アプリストアの RetroArch アプリページ")** はゲームをプレイします——数十のシステムの ROM を実行するエミュレーションフロントエンドです。
- **[Batocera](./batocera-arcade-setup "Batocera で ZimaBoard をレトロアーケードコンソールに変える")** はデバイス全体をコンソールに変えます——ZimaOS 上のアプリではなく、ZimaBoard を起動する専用のレトロゲーミング OS です。

一般的な構成は、ZimaOS の RomM でコレクションをきれいに保ち、RetroArch または Batocera のデバイスでプレイするというものです。

## ヘルプが必要ですか？

ZimaOS での RomM のインストールや使用で問題が発生した場合は、[ZimaSpace Discord コミュニティ](https://discord.gg/f9nzbmpMtU "ZimaOS サポートのための ZimaSpace Discord コミュニティに参加")にご参加ください。チームとコミュニティメンバーが喜んでお手伝いします。
