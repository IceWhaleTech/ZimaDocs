---
title: ZimaOSにAdminerをインストールして使用する
seo_title: "ZimaOSでAdminerを使う：インストールとSQLiteデータベースへのアクセス"
description: "ZimaOS App StoreからAdminerをインストールし、データベースディレクトリをマウントして、EmbyのライブラリなどのSQLiteデータベースを確認します。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Adminerは、SQLite、MySQL、PostgreSQLなどのデータベースシステムに対応した、軽量なブラウザベースのデータベース管理ツールです。このガイドでは、ZimaOS App StoreからAdminerをインストールし、Embyを例としてSQLiteデータベースのディレクトリへのアクセスを許可する方法を説明します。

> **重要：** Adminerではアプリケーションデータに直接アクセスできます。変更を加える前にデータベースをバックアップし、Adminerをインターネットへ直接公開せず、アプリケーションのデータベース構造を理解するまでは読み取り専用のクエリを使用してください。

## 始める前に

- ZimaOSがインストールされ、稼働していること。
- ZimaOSのWebインターフェースとApp Storeにアクセスできること。
- 既存のSQLiteデータベースを確認する場合は、その `.db` ファイルが保存されているホスト側ディレクトリを把握していること。
- 書き込み操作を行う前に、最新のデータベースバックアップがあること。

既存のデータベースがなくてもAdminerをインストールでき、ディレクトリのマウントは後から設定できます。

## Adminerをインストールする

1. ZimaOSの **App Store** を開きます。
2. **Adminer** を検索します。
3. Adminerの詳細ページを開き、**Install** をクリックします。
4. インストールが完了するまで待ち、ZimaOSダッシュボードにAdminerが表示されることを確認します。

![ZimaOS App StoreのAdminer詳細ページ](/images/guides/adminer-app-store.webp)

## Adminerにデータベースディレクトリへのアクセスを許可する

1. ZimaOSダッシュボードで、Adminerアプリカードの右上にあるメニューを開きます。
2. **Manage Adminer** を選択して、コンテナ設定ページを開きます。
3. **Volumes** を展開し、**Mount** を見つけてマウントを追加します。
4. マウントタイプを **Bind mount** に設定します。
5. **Host** で、データベースファイルを含むディレクトリを選択します。Embyの標準的なインストールでは、通常 `/DATA/AppData/emby/config/data` です。
6. **Container** に `/config/data` と入力します。
7. **Save** をクリックし、ZimaOSによって自動的に再起動されない場合はAdminerを再起動します。

![Adminerコンテナ設定でEmbyデータベースディレクトリをバインドマウントする](/images/guides/adminer-volume-mount.webp)

別のアプリケーションで使用する場合は、Embyのホストパスをそのアプリケーションのデータベースディレクトリに置き換えてください。広い範囲のストレージパスではなく、Adminerが必要とするディレクトリだけをマウントします。

## SQLiteデータベースを開く

1. ZimaOSダッシュボードからAdminerを開きます。
2. インストールされているAdminerイメージで利用できる場合は、データベースシステムとして **SQLite** を選択します。
3. マウントしたディレクトリを参照し、`/config/data/library.db` などのデータベースファイルを選択します。
4. Adminerイメージで必要な認証情報を入力してログインします。

SQLite認証の処理方法は、Adminerのイメージやバージョンによって異なる場合があります。インストールしたイメージがパスワードなしのSQLite接続を拒否する場合、他のアプリケーションの認証情報を弱くしたり、Adminerを公開したりしないでください。データベースに対応したAdminerイメージまたは認証設定を使用し、長期利用する前に更新状況とセキュリティ状態を確認してください。

## 例：Embyのライブラリデータベースを確認する

Embyの標準データディレクトリを `/config/data` にマウントすると、次のファイルが見つかる場合があります。

- `library.db` にはメディアライブラリのメタデータが含まれます。
- `users.db` にはユーザーアカウントのデータが含まれます。

**SQL Command** ページで読み取り専用の確認を実行します。SQLiteデータベースの整合性を確認するには、次を実行します。

```sql
PRAGMA integrity_check;
```

結果が `ok` であれば、SQLiteは整合性エラーを検出していません。Embyのメディア名と保存先パスの一部を確認するには、次を実行します。

```sql
SELECT Name, Path FROM MediaItems LIMIT 20;
```

データベーススキーマは、アプリケーションのバージョンによって変わる場合があります。テーブルや列が見つからない場合は、クエリを変更する前にスキーマを確認してください。テスト済みのバックアップがあり、影響を理解している場合を除き、`UPDATE`、`DELETE`、スキーマ変更は避けてください。

## その他のデータベースタイプに接続する

MySQLとPostgreSQLは、単独のファイルではなくネットワークデータベースサービスです。接続するには、Adminerからデータベースホストへのネットワークアクセス、正しいポート、有効なデータベース認証情報が必要です。ボリュームのマウントだけでは接続できません。

データベースが別のコンテナで稼働している場合は、適切なDockerネットワークを介して両方のコンテナが通信できることを確認してください。Adminerを接続するためだけに、データベースポートを公開しないでください。

## セキュリティとメンテナンスのヒント

- Adminerへのアクセスは、信頼できるローカルネットワークまたは安全な別のアクセス方法に限定します。
- データベースを編集する前にバックアップし、データベースファイルを置き換える前に元のアプリケーションを停止します。
- コミュニティが保守するAdminerイメージを使用する前に、リリース日とセキュリティ状態を確認します。
- データベースへの直接アクセスが不要になったら、Adminerを停止または削除します。

## 参考情報

- [Adminer公式サイト](https://www.adminer.org/)
- [SQLite PRAGMAリファレンス](https://www.sqlite.org/pragma.html)

## サポートが必要な場合

ZimaOSでAdminerをインストールまたは使用する際に問題が発生した場合は、ZimaSpaceのDiscordコミュニティにご参加ください。IceWhaleチームとコミュニティメンバーが設定のトラブルシューティングをお手伝いします。

[ZimaSpace Discordに参加する](https://discord.gg/f9nzbmpMtU)
