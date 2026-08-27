---
title: ZimaOS App Store をゼロから作成する
seo_title: "ZimaOS、ホームサーバー、Homelab 向け Docker App Store の作成"
description: "self-hosted ホームサーバー、Homelab、NAS OS 向けに ZimaOS 互換の Docker App Store を構築します。アプリの定義、v2 出力の生成、静的ファイルの公開までを説明します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

このガイドでは、ホームサーバー、Homelab、NAS OS 向けに、Docker および self-hosted アプリの ZimaOS 互換カタログを構築する方法を説明します。必要最小限のソースファイル、v2 のビルド処理、静的公開までの流れを扱います。

新しい ZimaOS 互換サードパーティストアを作成するときは、この手順を使用してください。

すでに zip ベースの v1 ストアがある場合は、最初に[移行戦略](./app-store-v1-v2-migration)をお読みください。移行では既存の `Apps/` ツリーの大部分を再利用でき、必要な手順も少なくなります。

## 最小限のソースファイル

v2 プロトコルを使用する新しいストアには、次のものが必要です。

- `store-config.json`: ストアの識別情報とストアレベルのローカライズ済みテキスト。
- `supported-languages.json`: 生成出力で候補となる locale。
- `Apps/<AppName>/docker-compose.yml`: アプリごとに 1 つのソース Compose ファイル。
- `icon.svg`、`thumbnail.png`、`screenshot-1.png` などのアプリリソース。

`scripts/build_dist.sh` は任意ですが、ローカルビルドには推奨されます。CI から `IceWhaleTech/build-appstore-action` を直接呼び出すこともできます。

## ビルド手順

1. [リポジトリ構成](./app-store-repository-structure)で説明している構造を作成します。
2. 安定した `store_id`、ローカライズ済みの `name`、`maintainer`、任意の説明を含む `store-config.json` を追加します。
3. ビルドで考慮する locale を `supported-languages.json` に追加します。
4. `Apps/` の下にアプリごとのディレクトリを追加します。
5. Docker の実行設定を標準の Compose セクションに記述します。
6. ストアのメタデータをトップレベルの `x-casaos` ブロックに記述します。
7. ビルドアクションまたは `./scripts/build_dist.sh` を実行します。
8. 生成された `dist/` ディレクトリを静的ホスティングへ公開します。

## 最初のアプリのチェックリスト

各アプリのソース Compose に次の項目があることを確認してください。

- Compose トップレベルの `name`
- `services`
- トップレベルの `x-casaos.id`
- `x-casaos.main`
- `x-casaos.index`
- `x-casaos.port_map`
- `x-casaos.icon`
- `x-casaos.title`
- `x-casaos.category`

推奨メタデータ:

- `tagline`
- `description`
- `author`
- `developer`
- `architectures`
- `version`
- 利用できる場合は `website`、`repo`、`support`、`docs`

## 公開先

v2 プロトコルのストアは静的ファイルとして利用されます。HTTPS を使える静的ホストであれば使用できます。

- GitHub Pages
- Cloudflare Pages
- Netlify
- self-hosted Nginx
- 生成されたファイルを変更せずに配信できる任意の CDN またはオブジェクトストレージ

ビルドの `base-url` には、`dist/` を公開する最終 URL を設定します。この URL は、生成されるアプリファイルとリソースのパスに書き込まれます。

## 次に読むページ

1. [リポジトリ構成](./app-store-repository-structure)
2. [ストア設定](./app-store-config)
3. [Compose と x-casaos](./app-store-compose-x-casaos)
4. [ビルド出力](./app-store-build-output)
5. [CI/CD の概要](./app-store-ci-cd)
