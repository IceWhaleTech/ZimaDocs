---
title: App Store のビルドワークフロー
seo_title: "ZimaOS Docker App Store のビルドワークフロー"
description: "self-hosted ZimaOS Docker App Store 向けに、v2 静的出力、従来の v1 パッケージ、レポート、再利用可能な成果物をビルドします。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

このビルドワークフローは、self-hosted Docker アプリ定義を Homelab や NAS OS で配布できる再利用可能な成果物へ変換します。

このページでは、成果物ビルドワークフロー [`.github/workflows/release.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release.yml) を説明します。

## 目的

リポジトリのソース定義を、再利用可能なビルド成果物へ変換します。

## トリガー

- `main` への push
- 手動の `workflow_dispatch`

## 主な段階

1. リポジトリのソースをチェックアウトします。
2. ビルドキャッシュを復元します。
3. v2 プロトコルの `dist/` をビルドします。
4. 従来の v1 zip 出力をビルドします。
5. ビルドレポートと配布用成果物をアップロードします。
6. ビルドキャッシュを保存します。
7. job summary を書き込みます。

## ビルド出力

現在、このワークフローは少なくとも次を生成します。

- v2 プロトコル用の静的 `dist/` 出力
- 従来の `dist/store/main.zip`
- v1 と v2 のビルド結果を示す JSON レポート

## 重要な理由

このワークフローは、リポジトリのビルド契約を示します。

- ソースファイル自体が公開プロトコルになるわけではありません
- 公開成果物は `dist/` です
- アップロードされたレポートはデバッグ成果物であり、プロトコルファイルではありません

## 関連する公開ワークフロー

タグに基づく実際の公開は、[公開ワークフロー](./app-store-publishing-workflow)で行います。

サードパーティストアのリポジトリを設計する場合は、推奨される再利用方法を[公式アクションの再利用](./app-store-github-actions)で確認してください。

公式ワークフローを完全にコピーしない外部ストアの管理者にとっても、このページは、プロトコルに不可欠な手順と実装上の詳細を区別する参考になります。
