---
title: App Store のリポジトリ構成
seo_title: "ZimaOS と NAS OS 向け Docker App Store のリポジトリ構成"
description: "ZimaOS 互換の self-hosted App Store に必要な Docker Compose、アプリメタデータ、リソース、生成出力の構成を説明します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

予測しやすいリポジトリ構成にすると、self-hosted ホームサーバー、Homelab、NAS OS 向け Docker アプリの検証、ビルド、公開が容易になります。

このページでは、v2 プロトコルを使用するストアの最小ソース構成と、生成出力への対応関係を説明します。

## ソースツリー

ソースリポジトリは、編集して Git にコミットする対象です。

```text
my-appstore/
├── Apps/
│   └── MyApp/
│       ├── docker-compose.yml
│       ├── icon.svg
│       ├── thumbnail.png
│       └── screenshot-1.png
├── store-config.json
└── supported-languages.json
```

ローカル開発では、次も追加できます。

```text
scripts/
└── build_dist.sh
```

## ルートの必須ファイル

- `store-config.json`: v2 で必須となるストア識別情報ファイル。
- `supported-languages.json`: このリポジトリのワークフローで使用する locale 候補の必須リスト。
- `Apps/`: 必須のアプリソースディレクトリ。

従来の v1 ストアには、`category-list.json`、`recommend-list.json`、v1 パッケージファイルもよく含まれます。v1 互換性が必要な間は残して構いませんが、v2 クライアントが利用するのは生成された `dist/` 内のファイルです。

## 生成ツリー

ビルドによって、ソースファイルはデプロイ可能な静的出力に変換されます。

```text
dist/
├── index.json
├── index.zh_CN.json
├── store.json
├── store.zh_CN.json
└── apps/
    └── com.example.myapp/
        ├── docker-compose.yml
        ├── docker-compose.amd64.yml
        ├── meta.json
        ├── meta.zh_CN.json
        └── assets/
            ├── icon.svg
            ├── icon.png
            ├── thumbnail.webp
            └── screenshot-1.webp
```

## 各場所の役割

- `Apps/`: 編集可能なアプリ定義、ソース Compose、ソースリソース。
- `store-config.json`: ストアの識別情報とストアレベルのローカライズ。
- `supported-languages.json`: 出力生成で候補となる locale。
- `scripts/build_dist.sh`: 任意のローカルビルド補助スクリプト。
- `dist/`: 生成されたプロトコル出力であり、手動で記述するソースではありません。
- `dist/apps/<app-id>/`: 生成されたアプリ出力ディレクトリ。`<app-id>` はトップレベルの `x-casaos.id` を正規化した値です。
- `dist/store/main.zip`: ワークフローで引き続き生成する場合の任意の v1 互換成果物。

## 基本原則

リポジトリルートのソースファイルを編集し、`dist/` はビルド出力として扱います。

フィールドごとのルールについては、次のページを参照してください。

- [ストア設定](./app-store-config)
- [Compose と x-casaos](./app-store-compose-x-casaos)
- [ビルド出力](./app-store-build-output)
