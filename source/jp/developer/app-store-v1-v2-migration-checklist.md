---
title: App Store v1 から v2 への移行チェックリスト
seo_title: "ZimaOS App Store v1 から v2 への移行チェックリスト"
description: "ZimaOS、ホームサーバー、Homelab で self-hosted Docker App Store を v1 から v2 へ移行するための最小変更チェックリストです。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

このチェックリストは、ホームサーバーまたは Homelab の self-hosted Docker App Store カタログを v1 から v2 へ移行しながら互換性を維持するためのものです。

すでに v1 ストアがあり、v2 対応に必要な実用上最小限の変更だけを行いたい場合に使用してください。

目標は、1 つのソースリポジトリから v2 静的出力と任意の v1 zip 互換出力を生成することです。

## 1. 既存のアプリツリーを維持する

既存の構成を維持します。

```text
Apps/
└── MyApp/
    ├── docker-compose.yml
    ├── icon.png
    ├── thumbnail.png
    └── screenshot-1.png
```

SVG アイコンや品質の高いリソースは後から追加できます。リソースの置き換えは、移行を開始するための必須条件ではありません。

## 2. `store-config.json` を追加する

リポジトリのルートに次のファイルを作成します。

```json
{
  "version": 2,
  "store_id": "your-store-id",
  "name": {
    "en_US": "Your Store Name"
  },
  "maintainer": "your-name",
  "url": "https://github.com/username/your-appstore"
}
```

確認項目:

- `version` が `2` であること
- `store_id` がグローバルに識別でき、安定していること
- `store_id` で使用しているのが英字、数字、ドット (`.`)、アンダースコア (`_`)、ハイフン (`-`) だけであること
- `name.en_US` が存在すること

## 3. `supported-languages.json` を追加する

リポジトリのルートに次のファイルを作成します。

```json
[
  "en_US"
]
```

ソースメタデータで定義する可能性がある `zh_CN` や `de_DE` など、すべての locale を追加してください。

## 4. すべてのアプリに `x-casaos.id` を追加する

各アプリには、トップレベルの安定したアプリ ID が必要です。

```yaml
x-casaos:
  id: com.example.myapp
```

確認項目:

- すべてのソース `docker-compose.yml` にトップレベルの `x-casaos.id` があること
- `com.example.myapp` のような逆ドメイン形式を使用していること
- ID に、ドットで区切られた空でないセグメントが 2 つ以上あること
- 使用しているのが英字、数字、ドット (`.`)、アンダースコア (`_`)、ハイフン (`-`) だけであること

## 5. 従来のメタデータ構成を正規化する

v1 から v2 への一般的な整理:

| 従来のソース | v2 ソース |
|---|---|
| `en_us` | `en_US` |
| `zh_cn` | `zh_CN` |
| `appfile.json` の表示メタデータ | トップレベルの `x-casaos` フィールド |

v2 では `appfile.json` を維持する必要はありません。v1 パッケージが引き続き使用する場合に限り、従来のパイプライン用として残してください。

## 6. カテゴリを正規化する

各アプリの `x-casaos.category` を次のいずれかに設定します。

`Media`, `Productivity`, `Home`, `Networking`, `AI`, `Finance`, `Social`, `Developer`, `Others`

例えば、従来の `Utilities` は、最も近い v2 カテゴリ、通常は `Productivity` または `Others` へ変更する必要があります。

## 7. v2 出力をビルドする

```bash
BASE_URL="https://your-store-domain" \
./scripts/build_dist.sh
```

確認項目:

- `dist/store.json` が存在すること
- `dist/index.json` が存在すること
- `dist/apps/<app-id>/docker-compose.yml` が存在すること。`<app-id>` は正規化された `x-casaos.id` です
- `dist/apps/<app-id>/meta.json` が存在すること
- 生成されたアプリ一覧項目に `id`、`compose_url`、`meta_url`、`content_hash` が含まれること

## 8. バージョンとその他の表示フィールドを追加する

古いソースリポジトリに同等のフィールドがなかった場合でも、新しいストアでは `version` が必須です。

その他のフィールドは互換性のために必須ではありませんが、ストアの体験を改善します。

| フィールド | 型 | 注記 |
|---|---|---|
| `version` | `string` | 新規かつ必須です。将来のアプリアップグレード判断で使用します。可能な限り semver 形式を使用してください。 |
| `update_at` | `string` | 新規の任意更新日です。可能な場合は `YYYY-MM-DD` を使用してください。 |
| `release_notes` | `object` | 新規の任意項目です。locale をキーとするリリースノートで、各値は単純なテキストです。 |
| `website` | `string` | 新規の任意公式 Web サイト URL です。 |
| `repo` | `string` | 新規の任意ソースリポジトリ URL です。 |
| `support` | `string` | 新規の任意サポート URL です。 |
| `docs` | `string` | 新規の任意ドキュメント URL です。 |

## 9. 必要な場合は v1 互換性を維持する

古いクライアントが v1 ストアに依存している場合は、次をビルドするワークフロー手順を維持します。

```text
dist/store/main.zip
```

公式リポジトリでは、v2 ビルドの後に v1 ビルドを実行します。これにより、1 つのソースツリーで次の両方を提供できます。

- v2 静的ストアを利用するクライアント
- 従来の v1 zip を利用するクライアント

## 10. 生成ファイルをデプロイする

`dist/` を静的ホスティングへ公開します。ユーザーが追加する URL は、ビルドの `base-url` と一致させてください。

## リリース前の最終チェック

- [ ] `store-config.json` が存在し、有効である
- [ ] `supported-languages.json` が存在し、有効である
- [ ] すべてのアプリに有効な `x-casaos.id` がある
- [ ] 古い locale キーが正規化されている
- [ ] `x-casaos.version` が存在し、このリリース向けに更新されている
- [ ] 必要な箇所に任意の表示フィールドが追加されている
- [ ] すべてのアプリカテゴリが v2 の値を使用している
- [ ] `dist/store.json` と `dist/index.json` にアクセスできる
- [ ] v1 互換性が必要な場合、`dist/store/main.zip` が生成されている
