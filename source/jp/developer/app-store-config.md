---
title: App Store の設定
seo_title: "Docker と self-hosted アプリ向け ZimaOS App Store 設定"
description: "ZimaOS ホームサーバーや Homelab で使用する Docker App Store の識別情報、ローカライズ、管理者情報、公開 URL を設定します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

公開または非公開の Homelab カタログでは、ホームサーバーや NAS OS のユーザーが購読を開始した後もストアの識別情報を変更しないでください。

`store-config.json` は、リポジトリレベルのストア識別情報を定義します。

## 目的

ビルドスクリプトは `store-config.json` を読み、次を生成します。

- `dist/store.json`
- ストアのローカライズ済みテキストフィールドで明示的に定義された locale の `dist/store.{locale}.json`

## 最小例

```json
{
  "version": 2,
  "store_id": "my-awesome-apps",
  "name": {
    "en_US": "My Awesome Apps",
    "zh_CN": "我的应用商店"
  },
  "description": {
    "en_US": "A collection of apps for home server enthusiasts"
  },
  "maintainer": "your-github-username",
  "url": "https://github.com/username/my-appstore"
}
```

## フィールド

| フィールド | 型 | 必須 | 注記 |
|------|------|----------|------|
| `version` | `int` | はい | `2` である必要があります |
| `store_id` | `string` | はい | 一意なストア識別子 |
| `name` | `object` | はい | locale をキーとする表示名 |
| `description` | `object` | いいえ | locale をキーとするストアの説明 |
| `maintainer` | `string` | はい | 管理者または所有者の名前 |
| `url` | `string` | いいえ | プロジェクトまたはホームページの URL |
| `icon` | `string` | いいえ | ストアアイコンの URL |

## フィールドリファレンス

### `version`

- 必須
- 整数 `2` である必要があります
- ビルド処理で使用するソースプロトコルのバージョンを示します

### `store_id`

- 必須
- ストアの主要な識別情報です
- ユーザーが購読を開始した後は変更しないでください
- グローバルに識別できる値を選んでください

### `name`

- 必須
- 単純な文字列ではなく、locale をキーとするオブジェクトである必要があります
- 必ず `en_US` を含めてください
- 生成された `store.json` の表示名になります

### `description`

- 任意
- locale をキーとするオブジェクトです
- クライアントに表示するストア概要に使用できます

### `maintainer`

- 必須
- ストアの管理者、所有者、組織を示す単純な文字列です

### `url`

- 任意
- 公開プロジェクト、リポジトリ、ホームページの URL です

### `icon`

- 任意
- ストアレベルの公開アイコン URL です
- アプリごとのリソースとは異なり、アプリディレクトリのリソース処理からは生成されません

## `store_id` のルール

- 使用できるのは英字、数字、`.`、`_`、`-` のみです
- 入力に大文字を使用できますが、ビルド時に小文字へ正規化されます
- 少なくとも 1 つの英字または数字を含める必要があります
- グローバルに識別できる値である必要があります
- `zimaos-appstore` などの予約値は使用しないでください

## 検証要件

次の項目をソース契約のルールとして扱ってください。

- ファイルが有効な JSON であること
- `version` が有効なプロトコルバージョンと一致すること
- `name` がオブジェクトであること
- locale キーが `ll_CC` 形式であること
- URL フィールドがすでに公開され、アクセス可能であること

## ローカライズの動作

ビルドスクリプトは、次のフィールドからストアレベルのローカライズ済みテキストを解決します。

- `name`
- `description`

これらのフィールドで明示的に定義された locale だけが `store.{locale}.json` として生成されます。

## 出力の動作

ビルドスクリプトは常にデフォルト locale のファイルを生成します。

- `dist/store.json`

さらに、その locale がストアのローカライズ済みテキストに明示的に含まれる場合のみ、locale サフィックス付きファイルを生成します。

- `dist/store.zh_CN.json`
- `dist/store.de_DE.json`

これにより、ローカライズ済みストアメタデータをサポートしながら、出力を小さく保てます。

## 入力と出力の対応

| ソースフィールド | 生成先 | 注記 |
|---|---|---|
| `version` | `store.json.version` | プロトコルメタデータとして引き継がれます |
| `store_id` | `store.json.store_id` | 必要に応じてビルド中に正規化されます |
| `name.<locale>` | `store.{locale}.name` | locale ファイルごとに解決されます |
| `description.<locale>` | `store.{locale}.description` | 明示された locale にのみ出力されます |
| `maintainer` | `store.json.maintainer` | 単純な文字列としてコピーされます |
| `url` | `store.json.url` | 単純な文字列としてコピーされます |
| `icon` | `store.json.icon` | 単純な文字列 URL としてコピーされます |

## 実用上の推奨事項

- 必ず `name.en_US` を指定してください
- クライアントにストアの紹介を表示する場合は `description` を追加してください
- ユーザーが購読を開始した後は `store_id` を変更しないでください

## よくある間違い

- `name` を locale キーのオブジェクトではなく単純な文字列として記述する
- クライアントが使用を開始した後に `store_id` を変更する
- `en_US` ではなく `en_us` のような locale キーを使用する
- `supported-languages.json` のすべての locale について `store.{locale}.json` が自動的に生成されると考える
