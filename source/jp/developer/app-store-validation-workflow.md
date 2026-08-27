---
title: App Store の検証ワークフロー
seo_title: "GitHub Actions で ZimaOS App Store の Docker アプリを検証する"
description: "アプリを ZimaOS 互換ストアへマージする前に、Docker Compose 構文、x-casaos メタデータ、v2 ビルド出力を検証します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

検証によって、不正な Docker Compose やアプリメタデータがホームサーバーまたは NAS OS のユーザーへ届くことを防ぎます。

検証ワークフローは [`.github/workflows/validator.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/validator.yml) で定義されています。

## 目的

マージ前にソース入力を検証し、リグレッションを早期に検出します。

## トリガー

- `opened` および `synchronize` イベントの pull request
- 手動の `workflow_dispatch`

## 主なチェック

1. アプリのソースファイルに対して、リポジトリローカルの `validate-compose` アクションを実行します。
2. 構造化検証レポートの成果物をアップロードします。
3. 共有ビルドキャッシュを復元します。
4. 完全なビルド検証として、リポジトリローカルの `build-store-v2` アクションを実行します。
5. ビルド検証レポートをアップロードし、job summary を書き込みます。
6. Compose 検証または v2 ビルドチェックが失敗した場合、ワークフローを失敗させます。

## 使用するリポジトリローカルアクション

- `validate-compose`: トップレベル `name`、`x-casaos.id`、`docker compose config -q` を確認します
- `build-store-v2`: 公開アクション `IceWhaleTech/build-appstore-action` を呼び出します
- `write-job-summary`: JSON レポートを GitHub Actions の summary に表示します

## 重要な理由

このワークフローは、ソースリポジトリの契約を保護します。

- Compose 構文が有効であること
- 名前がリポジトリの要件を満たすこと
- リポジトリから有効な `dist/` を引き続きビルドできること

## このページを読む場面

次の場合にこのページを参照してください。

- PR の検証が失敗した場合
- 自動的に適用されるソースルールを確認したい場合
- このリポジトリを参考にサードパーティストアの CI を設計する場合
