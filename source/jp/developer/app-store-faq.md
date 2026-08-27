---
title: App Store 開発者 FAQ
seo_title: "self-hosted ホームサーバー向け ZimaOS Docker App Store FAQ"
description: "ZimaOS や Homelab の App Store に関する Docker アプリ ID、ローカライズ、ビルド、ホスティング、CDN URL、v1 互換性の質問に回答します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

ここでは、ZimaOS、ホームサーバー、Homelab、NAS OS 環境向けの Docker および self-hosted App Store 管理者から寄せられる一般的な質問に回答します。

このページには、v2 プロトコルを使用するストア、移行、ホスティング、互換性に関する短い回答をまとめています。

## 公式ストアと同じアプリ ID を使用できますか？

はい。ZimaOS では公式ストアのアプリとサードパーティストアのアプリが分離されているため、ソースの `id` が同じでも共存できます。

サードパーティストアでも、ユーザーが予測しやすい更新を受け取れるように、安定した逆ドメイン形式の ID を選んでください。

## 別のサードパーティストアが同じアプリ ID を使用している場合はどうなりますか？

ZimaOS はストアのコンテキストごとにインストールを分離するため、異なるストアで同じソースアプリ ID を使用しても Docker プロジェクトレベルでは衝突しません。

## `supported-languages.json` は必要ですか？

このリポジトリの v2 ソース構成では必要です。ビルドで候補とする locale を宣言します。

ただし、これだけでローカライズ済み出力が自動生成されるわけではありません。ソースファイルに対応するローカライズフィールドがある場合にのみ、locale 固有ファイルが生成されます。

## ビルドスクリプトを実行する必要がありますか？

はい。ビルドによって、ソースファイルはクライアントが利用するプロトコル出力へ変換されます。

- `store-config.json` から `store.json`
- ソース Compose からビルド済み Compose と `meta.json`
- `content_hash` を含むストア全体のアプリ一覧
- 最適化済みリソースと locale 固有の出力

## どの問題が警告で、どの問題がワークフローを失敗させますか？

ビルドアクションは、1 回の実行で複数の問題を summary に表示できるよう、独立したアプリの処理をできる限り継続します。

v2 ビルドを失敗させない警告:

- `supported-languages.json` の欠落: ビルドは `en_US` にフォールバックします
- `store-config.json` の欠落: アプリ出力はビルドできますが、`store.json` は生成されません
- トップレベル `x-casaos` のないアプリディレクトリ: そのアプリはスキップされます
- レジストリのレート制限、digest 固定の失敗、イメージサイズ推定の失敗: 可能な場合はビルドを継続し、警告として報告します
- 画像最適化または SVG から PNG フォールバックへの変換失敗: 可能な場合は元のリソースを保持し、ログに警告を表示します
- semver 形式でない `x-casaos.version`: `index.json` ではバージョンが省略されます

アプリごとに収集され、他のアプリを処理した後に v2 ビルドを失敗させるエラー:

- `x-casaos.id` の欠落または不正を含む、無効なアプリメタデータ
- 無効なアプリ YAML
- 参照しているアイコン、サムネイル、スクリーンショットの欠落
- 宣言したアーキテクチャにコンテナイメージが対応していない
- その他のアプリレベルの Compose、メタデータ、リソース、レジストリ処理の失敗

リポジトリ全体のビルドを停止するエラー:

- 無効な `base-url`
- `Apps/` ディレクトリの欠落
- 無効な `store-config.json` または `store_id`
- `supported-languages.json` の無効な JSON
- ビルドスクリプト開始前の依存関係セットアップ失敗

## ビルド summary はどこで確認できますか？

GitHub Actions の実行を開き、ビルドまたは検証 job を選択して、job ページ上部の summary を確認します。このリポジトリでは、構造化レポート JSON から summary を生成します。

元のレポートも、`build-v2-report`、`build-v2-validation-report`、`validation-report` などのワークフロー成果物としてアップロードされます。

## GitHub Pages 以外でストアをホストできますか？

はい。生成されたファイルへアクセスできれば、任意の HTTPS 静的ホスティングを使用できます。

## jsDelivr を使う必要がありますか？

いいえ。`jsDelivr` は CDN の選択肢の 1 つにすぎません。正しい `base-url` であれば使用できます。

## `base-url` が重要なのはなぜですか？

生成された一覧データには、解決可能な公開ホストのプレフィックスが必要なアプリファイルやリソースのパスが含まれるためです。

`dist/` を配信する最終公開 URL を設定してください。

## v1 互換性を維持できますか？

はい。従来の成果物を引き続き生成してください。

```text
dist/store/main.zip
```

公式リポジトリでは、同じソースツリーから v2 静的ファイルをビルドした後、この v1 zip もビルドします。

## 最小構成のストアはどのようなものですか？

```text
my-appstore/
├── Apps/
│   └── MyApp/
│       ├── docker-compose.yml
│       └── icon.svg
├── store-config.json
└── supported-languages.json
```

ローカル補助スクリプトが必要な場合は `scripts/build_dist.sh` を追加してください。CI から `IceWhaleTech/build-appstore-action` を直接呼び出すこともできます。
