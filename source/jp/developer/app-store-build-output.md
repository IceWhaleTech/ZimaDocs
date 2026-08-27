---
title: App Store のビルド出力
seo_title: "ZimaOS App Store のビルド出力: Docker Compose、メタデータ、リソース"
description: "ZimaOS App Store が生成する Docker Compose、アプリメタデータ、ローカライズ済みインデックス、リソース、コンテンツハッシュを説明します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

ここで説明するファイルは、Docker App Store のビルド完了後に ZimaOS ホームサーバーまたは Homelab のクライアントが利用するものです。

プロトコルは `dist/` 配下に生成されたファイルから利用されます。

## 出力ファイル

ビルドスクリプトは次のファイルを生成できます。

- `dist/store.json`
- `dist/store.{locale}.json`
- `dist/index.json`
- `dist/index.{locale}.json`
- `dist/apps/<app-id>/docker-compose.yml`
- `dist/apps/<app-id>/docker-compose.{architecture}.yml`
- `dist/apps/<app-id>/meta.json`
- `dist/apps/<app-id>/meta.{locale}.json`
- `dist/apps/<app-id>/assets/*`

## `index.json`

`index.json` はストア全体のアプリ一覧です。

各アプリ項目には次のようなデータが含まれます。

- `id`
- `title`
- `tagline`
- `category`
- `version`
- `author`
- `developer`
- `architectures`
- `icon`
- `thumbnail`
- `compose_url`
- `meta_url`
- `content_hash`

### 一覧フィールドの意味

#### `id`

- ソースのトップレベル `x-casaos.id` を正規化したアプリ識別子です
- `dist/apps/` 配下に生成するアプリ出力フォルダー名にも使用します

#### `title`

- 対象 locale 向けに解決されたアプリ表示名です

#### `tagline`

- 対象 locale 向けに解決された短い概要です

#### `category`

- 表示とグループ化に使用する標準カテゴリ値です

#### `version`

- `x-casaos.version` で指定されたアプリバージョンです
- ユーザーにアップグレード内容を伝え、バージョンを追跡するために重要です

#### `author`

- パッケージ担当者またはストア側の帰属情報です

#### `developer`

- 上流プロジェクトの帰属情報です

#### `architectures`

- 対応 CPU アーキテクチャの一覧です
- 可能な場合、ビルドはこの値を使ってアーキテクチャ別の Compose を生成します

#### `icon`

- `--base-url` からの相対パスまたは URL で表されるビルド済みリソースです

#### `thumbnail`

- `--base-url` からの相対パスまたは URL で表されるビルド済みサムネイルです

#### `compose_url`

- アプリごとのビルド済み Compose ファイルへのパスです

#### `meta_url`

- アプリごとのビルド済みメタデータファイルへのパスです

#### `content_hash`

- アプリに関連するすべての生成ファイルを表すハッシュです
- クライアント側の差分更新検出に使用します

次の形式で生成されます。

- `dist/index.json`
- 一覧向けフィールドで 1 つ以上のアプリがその locale を明示的に定義している場合の `dist/index.{locale}.json`

## ビルド済み `docker-compose.yml`

ビルド済み Compose ファイルには、実行向けの `x-casaos` フィールドだけが残ります。

- `id`
- `main`
- `index`
- `port_map`
- `scheme`
- `icon`
- `title`

その他のメタデータはビルド済み Compose から削除され、`meta.json` に移動します。

### ビルド済み Compose の動作

ビルド済み Compose は、ソース Compose の単純なコピーではありません。

ビルド中に次の処理を行います。

- 実行に不要な `x-casaos` メタデータを削除します
- `icon` を書き換えます
- locale をキーとする `title` を、生成対象 locale の単純な文字列に解決します

## ビルド済み `meta.json`

ビルド済み `meta.json` には、アップグレードや表示に関連する次のようなアプリメタデータが含まれます。

- `version`
- `update_at`
- `release_note`
- `website`
- `repo`
- `support`
- `docs`

`version` は単なる表示用の追加項目ではありません。新しいストアでアプリのアップグレードを伝えるための重要なフィールドです。

`title` と `icon` は、ビルド済み Compose の実行および表示情報として残るため、意図的に `meta.json` へは書き込まれません。

### ビルド済みメタデータのグループ

実際には、ビルド済み `meta.json` は次の項目をまとめます。

- `tagline` や `description` などの説明コンテンツ
- `thumbnail` や `screenshot_link` などの表示リソース
- `author` や `developer` などの帰属情報
- `architectures` などの互換性データ
- `version`、`update_at`、`release_note` などの任意の拡張フィールド

## パスの動作

生成されるアプリ相対パスは通常、次のようになります。

- `apps/com.example.myapp/docker-compose.yml`
- `apps/com.example.myapp/meta.json`
- `apps/com.example.myapp/assets/icon.svg`

これらの例で、`com.example.myapp` はソースの `x-casaos.id` を正規化した値です。

パスは、設定された `--base-url` を基準に解決されます。

したがって、`--base-url` を変更すれば、同じ論理ビルドを別の公開ホストへ配信できます。

## コンテンツハッシュ

`content_hash` は、生成された各アプリディレクトリ内の次のようなファイルから計算されます。

- ビルド済み Compose
- アーキテクチャ別 Compose
- メタデータの各バリアント
- リソース

これにより、クライアント側で効率的な差分更新が可能になります。

## 更新の動作

クライアントの更新確認は、`index.json` と各アプリの `content_hash` に基づきます。

つまり、次のように動作します。

- 変更されていないアプリはスキップされます
- 変更されたアプリは、その Compose とメタデータファイルだけを取得します
- 更新のたびにストア全体のパッケージを再ダウンロードする必要はありません

## よくある間違い

- `dist/` のファイルを手動で作成するものだと考える
- `meta.json` に `title` が含まれると考える
- `content_hash` を手動のバージョンフィールドとして扱う
- locale 固有のインデックスとメタデータは、明示的に定義された locale にだけ生成されることを忘れる
