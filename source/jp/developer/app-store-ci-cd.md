---
title: App Store の CI/CD
seo_title: "ZimaOS とホームサーバー向け Docker App Store の CI/CD"
description: "ZimaOS ホームサーバー、Homelab、NAS OS 環境向けの self-hosted Docker App Store を CI/CD で検証、ビルド、公開します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

ZimaOS ホームサーバー、self-hosted ラボ、より大規模な Homelab 向け Docker アプリカタログの検証と公開には、この CI/CD モデルを使用してください。

CI/CD は、ソースファイルを検証済み、ビルド済み、公開済みのストア成果物へ変換する流れです。

ほとんどのサードパーティストアでは、次を目標にします。

1. pull request でアプリの Compose ファイルを検証する
2. v2 の `dist/` をビルドする
3. 必要に応じて従来の v1 `dist/store/main.zip` をビルドする
4. `dist/` を静的ホスティングへ公開する

## 現在の公式ワークフロー構成

このリポジトリでは、主に 3 つの GitHub Actions ワークフローを使用します。

- [`validator.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/validator.yml): Compose ファイルを検証し、完全な v2 ビルドチェックを実行します。
- [`release.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release.yml): 確認または再利用用の v2 と v1 成果物をビルドします。
- [`release-store.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release-store.yml): タグ付きストア出力を `gh-pages` と GitHub Releases に公開します。

## ワークフローの役割

| ワークフロー | 実行タイミング | 主な目的 | 主な出力 |
|---|---|---|---|
| Validator | pull request または手動実行 | 無効なソースを早期に検出 | 検証およびビルドレポート |
| Release | `main` への push または手動実行 | 再利用可能なビルド成果物を生成 | `dist/`、`main.zip`、レポート |
| Release-store | リリースタグまたは手動実行 | ストアを公開 | `gh-pages`、GitHub Release の成果物 |

## リポジトリローカルのアクション

これらのワークフローは、次の小さなアクションから構成されます。

- `validate-compose`: ソース Compose ファイルを検証します。
- `build-store-v2`: `IceWhaleTech/build-appstore-action` を呼び出すリポジトリローカルのラッパーです。
- `build-store-v1`: 従来の `main.zip` をビルドします。
- `write-job-summary`: レポート JSON を GitHub Actions の job summary に表示します。
- `render-report`: 必要に応じてレポート JSON を HTML に変換します。

外部の管理者には、公開エントリポイント `IceWhaleTech/build-appstore-action` を推奨します。[公式アクションの再利用](./app-store-github-actions)を参照してください。

## ビルドレポートと job summary

`report-json` を指定すると、v2 ビルドアクションは構造化レポート JSON を出力します。このリポジトリでは、そのレポートを成果物としてアップロードし、GitHub Actions の job summary に表示します。

確認手順:

1. GitHub Actions の実行を開きます。
2. `validate`、`build`、`release` など、対象の job を開きます。
3. job ページ上部の summary を確認します。
4. JSON の詳細が必要な場合は、レポート成果物をダウンロードします。

一般的な成果物名:

- `validation-report`
- `build-v2-validation-report`
- `build-v2-report`
- `release-build-v2-report`

summary には、ビルド状態、アプリ数、警告数とエラー数、主な問題、生成成果物、リポジトリのコンテキストが含まれます。

## ビルドエラーの動作

アクションは、アプリ単位の問題とリポジトリ全体の失敗を分けて処理します。

アプリ単位のエラーは収集されるため、その後のアプリも処理できます。アプリ単位のエラーが 1 つでもあれば、レポートを書き出した後、最終的に v2 ビルドは失敗します。例として、不正なアプリメタデータ、必須 `x-casaos.id` の欠落、参照リソースの欠落、不正な YAML、アーキテクチャの不一致があります。

出力を生成できる場合、警告は v2 ビルドを失敗させずに報告されます。例として、`supported-languages.json` の欠落、トップレベル `x-casaos` がないためスキップされたアプリディレクトリ、レジストリのレート制限、イメージ digest 固定の失敗、イメージサイズ推定の失敗、semver 形式でない `x-casaos.version` があります。

グローバルな失敗は、リポジトリ全体のビルドを停止します。例として、無効な `base-url`、`Apps/` の欠落、不正なストア設定 JSON、無効な `store_id`、不正な `supported-languages.json`、依存関係のセットアップ失敗があります。

## 互換性の動作

公式ワークフローは、意図的に両方の出力をビルドします。

- 新しいクライアント向けの v2 静的ファイル
- 従来クライアント向けの v1 `dist/store/main.zip`

新規ストアで v1 対応が不要な場合は、v1 ビルド手順を省略できます。

## 次に読むページ

- [公式アクションの再利用](./app-store-github-actions)
- [検証ワークフロー](./app-store-validation-workflow)
- [ビルドワークフロー](./app-store-build-workflow)
- [公開ワークフロー](./app-store-publishing-workflow)
