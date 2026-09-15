---
title: ZimaOSにAdminerをインストールして使用する
seo_title: "ZimaOSでAdminerを使う：インストールとSQLiteデータベースへのアクセス"
description: "ZimaOS アプリストアから Adminer をインストールし、データベースディレクトリをマウントして、Emby のライブラリなどの SQLite データベースを確認します。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Adminer は、SQLite、MySQL、PostgreSQL などのデータベースシステムに対応した、ブラウザベースの軽量データベースマネージャーです。最新のアプリ情報については [Adminer アプリストアページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.adminer)をご覧ください。このガイドでは、ZimaOS アプリストアから Adminer をインストールし、Emby を例に SQLite データベースディレクトリへのアクセスを許可する方法を説明します。

> **重要：** Adminer はアプリケーションデータへの直接アクセスを提供します。変更を加える前にデータベースをバックアップし、Adminer をインターネットに直接公開せず、アプリケーションのデータベース構造を理解するまでは読み取り専用クエリを使用してください。

## はじめる前に

- ZimaOS がインストールされ、稼働していること。
- ZimaOS の Web インターフェースとアプリストアにアクセスできること。
- 既存の SQLite データベースを確認する場合、どのホストディレクトリに `.db` ファイルが含まれているかを把握していること。
- 書き込み操作を行う前に、データベースの最新のバックアップがあること。

既存のデータベースなしで Adminer をインストールし、後からディレクトリマウントを設定することもできます。

## Adminer のインストール

1. ZimaOS の **App Store** を開きます。
2. **Adminer** を検索します。
3. Adminer のリストを開き、**Install** をクリックします。
4. インストールの完了を待ち、Adminer が ZimaOS ダッシュボードに表示されることを確認します。

![Developer カテゴリに表示された ZimaOS アプリストアの Adminer アプリページ](/images/app-store/adminer-app-store.webp)

## Adminer にデータベースディレクトリへのアクセスを許可する

1. ZimaOS ダッシュボードで、Adminer アプリタイルの右上のメニューを開きます。
2. **Manage Adminer** を選択してコンテナ設定ページを開きます。

![サービス設定、ネットワーク、8080 ポートが表示された Edit Adminer ページ](/images/app-store/adminer-config-page.webp)

3. **Volumes** を展開し、**Mount** を見つけてマウントを追加します。
4. マウントタイプを **Bind mount** に設定します。
5. **Host** で、データベースファイルを含むディレクトリを選択します。デフォルトの Emby インストールの場合、通常は `/DATA/AppData/emby/config/data` です。
6. **Container** に `/config/data` と入力します。
7. **Save** をクリックし、ZimaOS が自動的に再起動しない場合は Adminer を再起動します。

![Emby データフォルダがコンテナにマウントされた Adminer のボリューム設定](/images/app-store/adminer-volumes-bind.webp)

別のアプリケーションの場合は、Emby のホストパスをそのアプリケーションのデータベースディレクトリに置き換えます。より広いストレージパスへのアクセスを許可するのではなく、Adminer が必要とするディレクトリだけをマウントしてください。

## SQLite データベースを開く

1. ZimaOS ダッシュボードから Adminer を開きます。
2. インストールされた Adminer イメージで利用可能であれば、データベースシステムとして **SQLite** を選択します。
3. マウントされたディレクトリに移動し、`/config/data/library.db` などのデータベースファイルを選択します。
4. その Adminer イメージが必要とする認証情報を入力してログインします。

Adminer のイメージとバージョンによって、SQLite 認証の扱いは異なります。Adminer v4+ では SQLite 接続にパスワードが必要です——公式イメージでは空のパスワードでログインできません。インストールされたイメージが空パスワードの SQLite 接続を拒否する場合は、パネルパスワードプラグインや `finwo/adminer` のようなコミュニティイメージ（`nopassword` でログイン）を使用してください。無関係なアプリケーションの認証情報を弱めたり、Adminer を公開したりしないでください。長期使用の前に、イメージの更新状況とセキュリティステータスを確認してください。

## 例：Emby のライブラリデータベースを確認する

デフォルトの Emby データディレクトリを `/config/data` にマウントすると、次のファイルが見つかることがあります：

- `library.db` にはメディアライブラリのメタデータが含まれています。
- `users.db` にはユーザーアカウントデータが含まれています。

**SQL Command** ページで読み取り専用チェックを実行します。SQLite データベースの整合性を確認するには、次を実行します：

```sql
PRAGMA integrity_check;
```

`ok` が返れば、SQLite は整合性エラーを検出しなかったことを意味します。Emby のメディア名と保存パスの小さなサンプルを確認するには、次を実行します：

```sql
SELECT Name, Path FROM MediaItems LIMIT 20;
```

データベーススキーマはアプリケーションのバージョン間で変わることがあります。テーブルやカラムがない場合は、クエリを変更する前にスキーマを確認してください。テスト済みのバックアップがあり結果を理解していない限り、`UPDATE`、`DELETE`、スキーマ変更は避けてください。

## 他の種類のデータベースへの接続

MySQL と PostgreSQL はスタンドアロンファイルではなく、ネットワークデータベースサービスです。接続するには、Adminer からデータベースホストへのネットワークアクセス、正しいポート、有効な認証情報が必要です。ボリュームマウントだけでは不十分です。

データベースが別のコンテナで動作している場合は、両方のコンテナが適切な Docker ネットワークを通じて通信できることを確認してください。Adminer を接続させるためだけにデータベースポートを公開しないでください。

## セキュリティとメンテナンスのヒント

- Adminer は信頼できるローカルネットワーク、または別の安全なアクセス方法に限定してください。
- データベースを編集する前にバックアップし、データベースファイルを置き換える前にソースアプリケーションを停止してください。
- コミュニティ管理の Adminer イメージを使用する前に、リリース日とセキュリティステータスを確認してください。
- データベースへの直接アクセスが不要になったら、Adminer を停止または削除してください。

## 参考

- [Adminer 公式ウェブサイト](https://www.adminer.org/ "Adminer 公式サイト")
- [SQLite PRAGMA リファレンス](https://www.sqlite.org/pragma.html "SQLite PRAGMA コマンドの公式リファレンス")

## ヘルプが必要ですか？

ZimaOS での Adminer のインストールや使用で問題が発生した場合は、[ZimaSpace Discord コミュニティ](https://discord.gg/f9nzbmpMtU "ZimaOS サポートのための ZimaSpace Discord コミュニティに参加")にご参加ください。チームとコミュニティメンバーが喜んでお手伝いします。
