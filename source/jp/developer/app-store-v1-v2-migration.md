---
title: App Store を v1 から v2 へ移行する
seo_title: "CasaOS または ZimaOS App Store を v1 から v2 へ移行する"
description: "CasaOS または ZimaOS の Docker App Store を v1 パッケージ形式から v2 静的プロトコルへ移行し、従来の互換性も維持します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

ホームサーバーまたは Homelab のユーザー向けに運営している既存の CasaOS または ZimaOS Docker App Store を、v1 から v2 NAS OS プロトコルへ移行する場合は、この戦略を使用してください。

このセクションは、zip ベースの v1 CasaOS/ZimaOS App Store がすでにあり、ソースの変更を最小限に抑えて v2 に対応したい管理者向けです。

重要なのは、通常すべてのアプリをゼロから作り直す必要がないことです。既存の `Apps/` ツリーを維持し、ソースメタデータを正規化し、ストアレベルの v2 ファイルを追加して、同じリポジトリから両方の出力を生成します。

## v1 から v2 で変わる点

| 項目 | v1 ストア | v2 ストア |
|---|---|---|
| 配布 | パッケージ zip または sysroot バンドル | `dist/` 配下の静的ファイル |
| クライアントの入口 | `main.zip` などの従来パッケージ | `store.json` と `index.json` |
| ストア識別情報 | ストアレベルの識別ファイルは不要 | `store-config.json` が必須 |
| locale リスト | アプリ内容から推測 | `supported-languages.json` で宣言し、フィールドがある場合のみ出力 |
| アプリ識別情報 | Compose や名前の規約に基づく場合が多い | トップレベルの `x-casaos.id` が必須 |
| メタデータ | `appfile.json` と `x-casaos` | トップレベル `x-casaos` をビルド済み Compose と `meta.json` に分割 |
| カテゴリ | `Utilities` など従来または任意の値 | 正規化された v2 カテゴリ |
| 更新 | パッケージ全体の更新 | `content_hash` によるアプリ単位の差分更新 |
| 互換性 | v1 クライアントが zip を利用 | `dist/store/main.zip` もビルドして v1 互換性を維持 |

## 最小の移行モデル

1. `Apps/<App>/docker-compose.yml` を正式なソースとして維持します。
2. アプリ表示用メタデータをトップレベルの `x-casaos` ブロックへ移動または確認します。
3. 各アプリに安定した `x-casaos.id` を追加します。
4. `en_us` のような locale キーを `en_US` へ正規化します。
5. アプリカテゴリを v2 カテゴリ一覧に合わせて正規化します。
6. `store-config.json` と `supported-languages.json` を追加します。
7. 必要に応じて `version`、`update_at`、`release_notes` などの v2 表示フィールドを追加します。
8. v2 の `dist/` をビルドします。
9. 従来クライアントもサポートする場合は、v1 zip も引き続きビルドします。

## 互換性パターン

現在のリポジトリは両方の形式をビルドします。

- v2: `dist/store.json`、`dist/index.json`、`dist/apps/<app-id>/...`
- v1: `dist/store/main.zip`

ここで `<app-id>` は、各アプリのトップレベル `x-casaos.id` を正規化した値です。

既存ストアには、この移行パターンが最も安全です。新しいクライアントは v2 静的 URL を購読でき、古いクライアントはサポートを終了するまで v1 成果物を使い続けられます。

## 維持できるもの

v1 互換性が必要な場合、次の v1 時代のファイルまたはディレクトリを維持できます。

- `Apps/`
- 既存の Compose 実行設定
- アイコン、サムネイル、スクリーンショットなどのアプリリソース
- v1 パッケージで使用している場合の `category-list.json` と `recommend-list.json`
- v1 パッケージ用ワークフロー手順

v2 ビルドでは、`dist/` のファイルを手動で作成する必要はありません。

## 変更が必要なもの

v2 には最低限、次が必要です。

- ルートの `store-config.json`
- ルートの `supported-languages.json`
- すべてのアプリ Compose のトップレベル `x-casaos.id`
- 対応する v2 カテゴリ
- `en_US`、`zh_CN`、`de_DE` などに正規化された locale キー
- v2 ビルドおよび公開ワークフロー

## v2 で追加されたバージョンと表示フィールド

移行は、前述の必須変更までで完了できます。ただし、新しいストアでは `version` が必須です。その他のフィールドは、アプリ詳細、一覧、更新表示を改善します。

情報がある場合は、トップレベルの `x-casaos` ブロックに次のフィールドを追加してください。

| フィールド | ソース型 | 移行時の注記 |
|---|---|---|
| `version` | `string` | 新規かつ必須です。バージョン追跡、アップグレード通知、ストア表示の充実に使用します。 |
| `update_at` | `string` | 新規の任意項目です。アプリ更新日で、`YYYY-MM-DD`、例 `"2026-03-01"` を推奨します。 |
| `release_notes` | `object` | 新規の任意項目です。ソースでは locale をキーとするリリースノートで、各値は単純なテキストです。出力は `release_note` を使用します。 |
| `website` | `string` | 新規の任意項目です。表示を充実させる公式 Web サイト URL です。 |
| `repo` | `string` | 新規の任意項目です。表示を充実させるソースリポジトリ URL です。 |
| `support` | `string` | 新規の任意項目です。表示を充実させるサポート URL です。 |
| `docs` | `string` | 新規の任意項目です。表示を充実させるドキュメント URL です。 |

例:

```yaml
x-casaos:
  version: "1.0.0"
  update_at: "2026-03-01"
  release_notes:
    en_US: "First v2-compatible release."
  website: "https://example.com"
  repo: "https://github.com/example/myapp"
  support: "https://github.com/example/myapp/issues"
  docs: "https://docs.example.com"
```

## 次に読むページ

1. [最小変更チェックリスト](./app-store-v1-v2-migration-checklist)
2. [ストア設定](./app-store-config)
3. [Compose と x-casaos](./app-store-compose-x-casaos)
4. [ビルド出力](./app-store-build-output)
5. [公式アクションの再利用](./app-store-github-actions)
