---
title: ZimaOS で Komga をデプロイする方法
seo_title: "ZimaOS で Komga を動かす：ホームサーバー向けコミック・電子書籍サーバー"
description: ZimaOS アプリストアから Komga を数分でインストール — コミックや電子書籍をアップロードし、ライブラリフォルダーを承認して、スマートフォンを含むあらゆるデバイスで読めます。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

Komga は ZimaOS アプリカタログでネイティブにサポートされており、わずか 3 分でインストールできます。最新のアプリ情報は [Komga の App Store ページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.komga)をご覧ください。

Komga はコミック、マンガ、電子書籍向けの無料のオープンソースメディアサーバーです。PDF と EPUB ファイルを自動メタデータ付きのライブラリに整理し、あらゆるブラウザーで使えるクリーンな Web リーダーを備え、サードパーティの読書アプリ向けに OPDS もサポートしています。ZimaOS にインストールすれば、ライブラリは自分のドライブに保存され、ZimaClient 経由のスマートフォンを含むあらゆるデバイスから利用できます。

## 前提条件

- 稼働中の ZimaOS ホームサーバー。
- PDF または EPUB ファイルが ZimaOS ホームサーバー上のローカルフォルダーに保存されていること。

## アプリカタログ

1. ZimaOS アプリカタログで Komga を探します。**App Store** を開き、「Komga」を検索します。

![App Store の検索結果に Komga のアプリカードとインストールボタンが表示されている](/images/app-store/komga-app-store.png)

2. **すぐに使えます！**

![ZimaOS ダッシュボードのアプリ一覧で Komga がインストール済みと表示されている](/images/app-store/komga-installed.png)

## ZimaOS Files でファイルをアップロードする

ZimaOS Files を使って PDF または EPUB ファイルを直接アップロードまたはコピーします。ZimaOS Files を開き、新しいフォルダーを作成し、PDF または EPUB ファイルをドラッグ＆ドロップしてディレクトリに直接アップロードします。

![ZimaOS Files のウィンドウに、コミックと電子書籍のアップロード用に komga-library フォルダーが作成されている](/images/app-store/komga-files.png)

## Komga にデータの読み込みを許可する

以下の手順は**必須ではありません** — デフォルト設定のまますぐに使い始められます。

コンテナ設定をすべてカスタマイズしたい場合は、アプリの右上にあるオプションから設定できます。

![ZimaOS の Komga アプリページ。右上にコンテナ設定のオプションメニューがある](/images/app-store/komga-settings.png)

ZimaOS はフォームベースの編集と YAML の二次編集など、複数の設定方法をサポートしています。

ZimaOS の Komga 設定フォームで**ボリューム**（またはパスマッピング）セクションに移動し、新しいボリュームルールを追加します。**コンテナパス**を `/data`（Komga 内部のデフォルトメディアディレクトリ）に、**ホストパス**をコミックが保存されている ZimaOS デバイス上のローカルフォルダーに設定します。入力例は下のスクリーンショットを参照してください。

![Komga アプリ設定のボリュームセクションで、コンテナのメディアパスがホストフォルダーにマッピングされている](/images/app-store/komga-volumes.png)

## Komga にライブラリを追加する

1. 初回アクセス時：管理者アカウントを作成します。

![Komga の初回起動画面。メールアドレスとパスワードで管理者アカウントを作成する](/images/app-store/komga-admin.png)

2. ログイン後、サイドバーの Libraries の横にある「+」ボタンをクリックします。

![Komga のライブラリ追加ダイアログで、名前とルートフォルダーのパスが入力されている](/images/app-store/komga-library.png)

3. ファイルスキャン間隔を設定します。

![Komga のライブラリ追加ダイアログのスキャナー設定で、スキャン間隔が毎時に設定されている](/images/app-store/komga-scan.png)

> 他のタブはすべてデフォルト設定のまま進めてください。

4. 「Add」をクリックして完了します。

Komga はそのフォルダーに保存されているすべてのコミック、雑誌、電子書籍を自動的にスキャンしてインポートします。

![ライブラリ追加後の Komga の書籍ページに、最近追加されたコミックとシリーズが表示されている](/images/app-store/komga-books.png)

## モバイルから Komga にアクセスする

ZimaClient モバイルアプリから Komga にアクセスします — ホームサーバーへの直接 P2P 接続で、クラウドリレーも VPN 設定も不要です。自宅でも外出先でも使えます。

| ![ZimaClient モバイルアプリのアプリ一覧に Komga アイコンが表示されている](/images/app-store/komga-phone-apps.png) | ![ZimaClient 経由でスマートフォンに開いた Komga ライブラリにコミックのシリーズページが表示されている](/images/app-store/komga-phone-library.png) | ![スマートフォンの Komga の電子書籍詳細ページに読む・ダウンロードボタンが表示されている](/images/app-store/komga-phone-reader.png) |
| - | - | - |

## 参考リンク

詳細は Komga の公式ドキュメントをご覧ください。

- ライブラリの詳細設定 – [https://komga.org/docs/guides/libraries/](https://komga.org/docs/guides/libraries/ "Komga 公式ライブラリ設定・スキャンガイド")
- サーバー設定と管理 – [https://komga.org/docs/guides/server-settings/](https://komga.org/docs/guides/server-settings/ "Komga 公式サーバー設定・管理ガイド")
- リバースプロキシと HTTPS の設定 – [https://komga.org/docs/installation/https/](https://komga.org/docs/installation/https/ "Komga 公式 HTTPS・リバースプロキシ設定ガイド")
