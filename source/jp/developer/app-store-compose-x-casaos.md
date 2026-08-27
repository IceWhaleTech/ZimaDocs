---
title: Docker Compose と x-casaos
seo_title: "ZimaOS アプリ向け Docker Compose と x-casaos リファレンス"
description: "ZimaOS、ホームサーバー、Homelab、NAS OS 環境で配布する self-hosted アプリ向けに、Docker サービスと x-casaos メタデータを定義します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

Docker サービスを ZimaOS または互換 NAS OS 向けの self-hosted アプリとしてパッケージするときは、このリファレンスを使用してください。

各アプリは `Apps/<folder>/docker-compose.yml` に配置します。

## このページの範囲

このページでは、ビルドパイプラインで使用するストア固有のメタデータ契約である、トップレベルの `x-casaos` ブロックを中心に説明します。

Compose ファイルのその他の部分については、次の公式リファレンスを参照してください。

- Docker Compose ファイルの公式リファレンス: https://docs.docker.com/reference/compose-file/
- サービス定義用の公式 `services` リファレンス: https://docs.docker.com/reference/compose-file/services/
- トップレベル `name` の公式リファレンス: https://docs.docker.com/reference/compose-file/version-and-name/

つまり、次のように分けます。

- 標準的なコンテナ実行設定は Docker Compose に記述します
- ストアに表示するアプリメタデータは `x-casaos` に記述します

## ソースモデル

アプリごとに 1 つの Compose ファイルを作成します。このファイルには次を含めます。

- 標準の Docker Compose コンテンツ
- トップレベルの `x-casaos` ブロック 1 つ

`Apps/` 内のソースディレクトリ名は、プロトコル上の識別情報ではありません。ビルド処理は Compose の内容、特にトップレベルの `name` と `x-casaos.id` から識別情報を読み取ります。

## 最小例

```yaml
name: my-app
services:
  my-app:
    image: myrepo/my-app:1.0.0
    ports:
      - target: 8080
        published: "8080"
        protocol: tcp
    restart: unless-stopped
x-casaos:
  id: com.example.myapp
  main: my-app
  index: /
  port_map: "8080"
  scheme: http
  icon: https://cdn.example.com/my-app/icon.svg
  title:
    en_US: My App
  tagline:
    en_US: Does amazing things
  description:
    en_US: A great app that does amazing things.
  author: Your Name
  developer: Original Developer
  category: Productivity
  architectures:
    - amd64
  version: "1.0.0"
  update_at: "2026-03-01"
  release_notes:
    en_US: First release
```

## `x-casaos` 以外の Compose ルール

`x-casaos` 以外の内容について、このリポジトリは Docker Compose のセマンティクスを再定義しません。次の公式ドキュメントを正式なリファレンスとして使用してください。

- Compose ファイルリファレンス: https://docs.docker.com/reference/compose-file/
- サービスリファレンス: https://docs.docker.com/reference/compose-file/services/
- プロジェクト `name` リファレンス: https://docs.docker.com/reference/compose-file/version-and-name/
- プロジェクト名の動作: https://docs.docker.com/compose/how-tos/project-name/

リポジトリ固有の要件は次に限られます。

- Compose が有効な YAML であること
- Compose が `docker compose config -q` に合格すること
- トップレベルの `name` がリポジトリの検証要件を満たすこと
- サービスレベルの従来形式 `services.<name>.x-casaos` ブロックは、v2 ビルド処理で削除されること

## x-casaos の概要

トップレベルの `x-casaos` ブロックには、2 種類のフィールドがあります。

- ビルド済み `docker-compose.yml` に残る実行および表示エントリフィールド
- ビルド済み `meta.json` に抽出されるメタデータフィールド

## フィールド一覧

| フィールド | 型 | 必須 | ソースでローカライズ | ビルド出力先 |
|---|---|---:|---:|---|
| `id` | `string` | はい | いいえ | ビルド済み Compose + `meta.json`/インデックス由来の出力 |
| `main` | `string` | はい | いいえ | ビルド済み Compose |
| `index` | `string` | 実質的に必須 | いいえ | ビルド済み Compose |
| `port_map` | `string` | はい | いいえ | ビルド済み Compose |
| `scheme` | `string` | いいえ | いいえ | ビルド済み Compose |
| `icon` | `string` | はい | いいえ | ビルド済み Compose。ビルド時に書き換え |
| `title` | `object` | はい | はい | ビルド済み Compose。locale ごとに解決 |
| `tagline` | `object` | 推奨 | はい | `meta.json`、インデックス一覧 |
| `description` | `object` | 推奨 | はい | `meta.json` |
| `thumbnail` | `string` | いいえ | いいえ | ビルド済みリソースパスとして `meta.json` |
| `screenshot_link` | `string[]` | いいえ | いいえ | ビルド済みリソースパスとして `meta.json` |
| `tips` | `object` | いいえ | はい | `meta.json` |
| `author` | `string` | 推奨 | いいえ | `meta.json`、インデックス一覧 |
| `developer` | `string` | 推奨 | いいえ | `meta.json`、インデックス一覧 |
| `category` | `string` | はい | いいえ | `meta.json`、インデックス一覧 |
| `architectures` | `string[]` | 推奨 | いいえ | `meta.json`、インデックス一覧 |
| `version` | `string` | はい | いいえ | `meta.json`、インデックス一覧 |
| `update_at` | `string` | いいえ | いいえ | `meta.json` |
| `release_notes` | `object` | いいえ | はい | `meta.json.release_note` |
| `website` | `string` | いいえ | いいえ | `meta.json` |
| `repo` | `string` | いいえ | いいえ | `meta.json` |
| `support` | `string` | いいえ | いいえ | `meta.json` |
| `docs` | `string` | いいえ | いいえ | `meta.json` |

## 実行フィールド

### `id`

目的:
ストアプロトコル上で安定したアプリ識別情報を提供します。

ルール:

- すべてのアプリのソース Compose で必須です
- `com.example.myapp` のような逆ドメイン形式を使用してください
- 使用できるのは英字、数字、`.`、`_`、`-` のみです
- ビルド時に小文字へ正規化されます
- ドットで区切られた空でないセグメントが 2 つ以上必要です

ビルド時の動作:

- ビルド済み Compose に残ります
- ビルド済みメタデータと一覧データにも反映されます

よくある間違い:

- アプリディレクトリ名を識別情報として扱う
- ドメイン形式ではない短い文字列を使用する

### `main`

目的:
ブラウザー向けの主要 UI を提供するサービス名を指定します。

ルール:

- 必須です
- `services` 内のサービス名と一致する必要があります
- 補助コンテナではなく、ユーザー向けの Web サービスを指定してください

ビルド時の動作:

- ビルド済み Compose に残ります

よくある間違い:

- `main` にデータベースコンテナを指定する

### `index`

目的:
クライアントが UI を開くとき、アプリのエントリ URL に追加するパスを定義します。

ルール:

- 通常は `/` です
- アプリの実際の Web エントリパスに合わせてください

ビルド時の動作:

- ビルド済み Compose に残ります

### `port_map`

目的:
ユーザーに公開する Web UI のポートを定義します。

ルール:

- 必須です
- `"8080"` のような YAML 文字列である必要があります
- ユーザーがブラウザーで実際に開くポートと一致させてください

ビルド時の動作:

- ビルド済み Compose に残ります

よくある間違い:

- 引用符を付けずに `port_map: 8080` と記述する

### `scheme`

目的:
アプリを `http` と `https` のどちらで開くかを指定します。

ルール:

- 任意です
- 実際に公開するプロトコルに合わせてください

ビルド時の動作:

- ビルド済み Compose に残ります

### `icon`

目的:
インストール済みアプリのダッシュボードアイコン URL を提供します。

ルール:

- 必須です
- ソース Compose ではアクセス可能な任意の URL を使用できます
- ビルド出力では、`--base-url` 配下のビルド済みリソース URL に書き換えられます

ビルド時の動作:

- ビルド済み Compose に残ります
- `apps/{app-id}/assets/icon.*` を指すように書き換えられます

よくある間違い:

- ビルド後もソースの値がそのまま残ると考える

### `title`

目的:
アプリの表示名を提供します。

ルール:

- 必須です
- ソースでは locale をキーとするオブジェクトです
- `en_US` を含めてください

ビルド時の動作:

- ビルド済み Compose に残ります
- 生成される locale ごとの出力では単純な文字列に解決されます

よくある間違い:

- locale をキーとするオブジェクトではなく、単純な文字列を記述する

## メタデータフィールド

### `tagline`

目的:
アプリ一覧や詳細画面で使用する 1 行の短い概要です。

ルール:

- 推奨です
- ソースでは locale をキーとするオブジェクトです

ビルド時の動作:

- ビルド済み `meta.json` に抽出されます
- `index.json` などの一覧データにも出力される場合があります

### `description`

目的:
アプリの詳細な説明です。

ルール:

- 推奨です
- ソースでは locale をキーとするオブジェクトです
- クライアントの対応状況に応じて Markdown テキストを含められます

ビルド時の動作:

- ビルド済み `meta.json` に抽出されます
- 生成される各 locale ファイルでは単純な文字列に解決されます

### `thumbnail`

目的:
より充実したアプリ表示に使用する、大きなプロモーション画像を提供します。

ルール:

- 任意です
- 通常はアプリディレクトリ内のファイルを参照します

ビルド時の動作:

- ビルド済みリソースパスとして `meta.json` に出力されます
- ソースファイルは `apps/{app-id}/assets/` 配下の出力へ変換されます

### `screenshot_link`

目的:
アプリ詳細画面に表示する 1 枚以上のスクリーンショットを提供します。

ルール:

- 任意です
- ソースではスクリーンショットファイル名の配列です

ビルド時の動作:

- ビルド済みリソースパスとして `meta.json` に出力されます

### `tips`

目的:
インストール時またはインストール前のユーザー向け案内を提供します。

ルール:

- 任意です
- 値が locale をキーとするテキストであるオブジェクトです

例:

```yaml
tips:
  before_install:
    en_US: This app requires at least 4GB RAM.
    zh_CN: This app requires at least 4GB RAM.
```

ビルド時の動作:

- ビルド済み `meta.json` に抽出されます
- locale の値は生成される locale ごとに解決されます

### `author`

目的:
ストア側でアプリ定義をパッケージまたは管理する担当者を示します。

ルール:

- 推奨です
- 単純な文字列です

ビルド時の動作:

- `meta.json` に出力されます
- 通常はアプリ一覧データにも含まれます

### `developer`

目的:
上流プロジェクトまたは元の開発者を示します。

ルール:

- 推奨です
- 単純な文字列です

ビルド時の動作:

- `meta.json` に出力されます
- 通常はアプリ一覧データにも含まれます

### `category`

目的:
アプリを標準化された ZimaOS ストアカテゴリに割り当てます。

ルール:

- 正しく表示するため、実質的に必須です
- 次のいずれかである必要があります:
  - `Media`
  - `Productivity`
  - `Home`
  - `Networking`
  - `AI`
  - `Finance`
  - `Social`
  - `Developer`
  - `Others`

ビルド時の動作:

- `meta.json` に出力されます
- 通常はアプリ一覧データにも含まれます

よくある間違い:

- 任意のカテゴリ名を使用する

### `architectures`

目的:
アプリパッケージが対応する CPU アーキテクチャを宣言します。

ルール:

- 推奨です
- 文字列の配列です
- 一般的な値は `amd64` と `arm64` です

ビルド時の動作:

- `meta.json` に出力されます
- 通常はアプリ一覧データにも含まれます

### `version`

目的:
ユーザーに表示し、アップグレード内容の把握に使用するアプリバージョンです。

ルール:

- 新しいストアで公開するアプリでは必須です
- 単純な文字列です
- ユーザーが新しいバージョンとして受け取るべき変更を公開したときに更新してください
- 可能な限り `1.2.3` のような semver 形式を使用してください

ビルド時の動作:

- `meta.json` に出力されます
- 一覧データにも含まれる場合があります

重要な理由:

- 将来のアップグレード判断では、このフィールドを使ってユーザーの移行先バージョンを決定します
- この値がない場合、ユーザーとクライアントは `content_hash` などの低レベルな変更信号に依存する必要があります
- バージョンがない、または semver 形式でない場合、アップデートの透明性が下がり、一部の一覧出力から省かれることがあります

よくある間違い:

- `version` を単なる表示項目として扱う
- 重要なアプリ更新を公開するときに値を更新しない
- 通常のリリースバージョンとして機能しない任意の文字列を使用する

### `update_at`

目的:
ストア表示を充実させるための任意の更新日です。

ルール:

- 任意です
- 推奨形式: `YYYY-MM-DD`

ビルド時の動作:

- `meta.json` に出力されます

### `release_notes`

目的:
リリースノートまたは変更概要を提供します。

ルール:

- 任意です
- ソースでは locale をキーとするオブジェクトです
- ソースフィールド名は `release_notes` のままです

ビルド時の動作:

- ビルド済み `meta.json` に抽出されます
- `release_note` に名前が変わります

よくある間違い:

- ソースに `release_notes` ではなく `release_note` と記述する

### `website`

目的:
公式製品またはホームページへのリンクです。

ルール:

- 任意です
- 単純な URL 文字列です

ビルド時の動作:

- `meta.json` に出力されます

### `repo`

目的:
ソースリポジトリまたはプロジェクトリポジトリへのリンクです。

ルール:

- 任意です
- 単純な URL 文字列です

ビルド時の動作:

- `meta.json` に出力されます

### `support`

目的:
サポートページ、Issue トラッカー、フォーラム、ヘルプセンターへのリンクです。

ルール:

- 任意です
- 単純な URL 文字列です

ビルド時の動作:

- `meta.json` に出力されます

### `docs`

目的:
パッケージ対象アプリのドキュメントへのリンクです。

ルール:

- 任意です
- 単純な URL 文字列です

ビルド時の動作:

- `meta.json` に出力されます

## ビルド済み Compose に残る項目と `meta.json` に移る項目

ビルド済み Compose に残る項目:

- `id`
- `main`
- `index`
- `port_map`
- `scheme`
- `icon`
- `title`

ビルド済み `meta.json` に移る項目:

- `tagline`
- `description`
- `thumbnail`
- `screenshot_link`
- `tips`
- `author`
- `developer`
- `category`
- `architectures`
- `version`
- `update_at`
- `release_note`
- `website`
- `repo`
- `support`
- `docs`

## フィールド配置ルール

ソース Compose を作成するときは、次のように分けてください。

- 実行情報と起動エントリ情報は、実行用の `x-casaos` フィールドに記述します
- ストア表示用メタデータは、メタデータ用の `x-casaos` フィールドに記述します
- コンテナ実行の詳細は、`services`、`volumes`、`networks`、`environment` などの標準 Docker Compose セクションに記述します

## よくある間違いのまとめ

- locale をキーとするオブジェクトが必要な場所に単純な文字列を使用する
- `main` に UI を持たないサービスを指定する
- `port_map` に引用符付き文字列ではなく整数を使用する
- 非公式のカテゴリ値を使用する
- `title` はビルド済み Compose に残り、`tagline` は `meta.json` に移ることを忘れる
