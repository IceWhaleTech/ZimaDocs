---
title: App Store 向け GitHub Actions
seo_title: "ZimaOS Docker App Store 向け GitHub Actions"
description: "公式 GitHub Actions を再利用して、self-hosted や Homelab 環境向けの ZimaOS 互換 Docker App Store を検証、ビルド、公開します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

サードパーティストアの管理者は、公式リポジトリ全体をコピーしなくても、self-hosted Docker App Store を自動化できます。

このページでは、公式のビルドおよびリリース処理を再利用する推奨方法を説明します。

## 推奨される再利用方法

外部リポジトリでは、次のレイヤーを使用してください。

1. 公開ビルドアクション `IceWhaleTech/build-appstore-action` を使用します。
2. 検証、成果物のアップロード、公開は、自分のリポジトリのワークフローで管理します。
3. このリポジトリの `.github/actions/` 配下にある補助アクションは、意図的に取り込む場合を除き、例またはリポジトリローカルのラッパーとして扱います。

## 各アクションの用途

- `IceWhaleTech/build-appstore-action`: 公開 v2 ビルドエンジンです。自分のリポジトリのワークフローで `dist/` を生成するために使用します。
- `.github/actions/build-store-v2`: 公開ビルドアクションのリポジトリローカルラッパーです。
- `.github/actions/build-store-v1`: 古いクライアント向けに従来の `dist/store/main.zip` をパッケージします。
- `.github/actions/validate-compose`: ビルド前にアプリの Compose メタデータを確認します。
- `.github/actions/write-job-summary`: 構造化 JSON レポートを GitHub Actions の job summary に書き込みます。
- `.github/actions/render-report`: JSON レポートを単独の HTML 成果物へ変換します。

## 推奨ワークフロー構成

公式リポジトリでは、次のように役割を分けています。

- `validator.yml`: Compose 入力を検証し、v2 ビルドの成功を確認します。
- `release.yml`: v2 `dist/` と v1 `main.zip` をビルドし、成果物をアップロードしてキャッシュを保存します。
- `release-store.yml`: タグ付きリリースを公開し、`dist/` を `gh-pages` にデプロイして GitHub Release のバンドルを作成します。

ほとんどのサードパーティストアでも同じように分けます。

- PR 用の検証ワークフロー
- 再利用可能な成果物用のビルドワークフロー
- タグまたはリリース用の公開ワークフロー

## 最小の検証ワークフロー

```yaml
name: Validate Store

on:
  pull_request:
  workflow_dispatch:

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build v2 dist
        uses: IceWhaleTech/build-appstore-action@v1
        with:
          source: .
          output: dist
          base-url: https://cdn.jsdelivr.net/gh/${{ github.repository }}@gh-pages
          cache-file: .cache/build_appstore/image-size-cache.json
          digest-cache-file: .cache/build_appstore/image-digest-cache.json
```

## 最小の公開ワークフロー

```yaml
name: Release Store

on:
  push:
    tags:
      - "v*"

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build v2 dist
        uses: IceWhaleTech/build-appstore-action@v1
        with:
          source: .
          output: dist
          base-url: https://cdn.jsdelivr.net/gh/${{ github.repository }}@gh-pages
          cache-file: .cache/build_appstore/image-size-cache.json
          digest-cache-file: .cache/build_appstore/image-digest-cache.json

      - name: Deploy dist
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./dist
```

## 互換性に関する注記

従来の v1 クライアントもサポートする場合は、`dist/store/main.zip` も生成する手順を追加してください。公式リポジトリでは、v2 ビルドが成功した後に `.github/actions/build-store-v1` を使って生成します。

## ローカルビルド

ローカル開発の動作を公式ビルドアクションに近づけるには、`./scripts/build_dist.sh` を使用します。実際のサードパーティストア CI には GitHub Actions を直接使用してください。
