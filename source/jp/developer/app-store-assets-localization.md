---
title: App Store のリソースとローカライズ
seo_title: "ZimaOS App Store 向け Docker アプリのリソースとローカライズ"
description: "ZimaOS や他の NAS OS で配布する self-hosted Docker アプリ向けに、アイコン、サムネイル、スクリーンショット、ローカライズ済みメタデータを準備します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

一貫したリソースと locale データを用意すると、self-hosted Docker アプリをホームサーバーや NAS OS のインターフェースで正しく表示できます。

このページでは、生成出力に大きく影響する 2 つのプロトコル動作、リソース処理とローカライズ済みテキストの展開を説明します。

## リソース

ビルドされたすべてのリソースは `apps/{app-id}/assets/` に書き込まれます。

`{app-id}` は、ソースのトップレベル `x-casaos.id` を正規化した値です。

### 対応するソース形式

| リソース | 入力形式 | 出力動作 |
|------|---------------|----------------|
| `icon` | `.svg`, `.png`, `.jpg`, `.webp` | SVG は保持され、PNG フォールバックが生成される場合があります。ラスターアイコンはコピーされます |
| `thumbnail` | `.png`, `.jpg`, `.jpeg`, `.webp` | ツールを利用できる場合は最適化されます。最終拡張子は生成出力に従います |
| `screenshot-{n}` | `.png`, `.jpg`, `.jpeg`, `.webp` | ツールを利用できる場合は最適化されます。最終拡張子は生成出力に従います |

### リソース動作の詳細

#### `icon`

- すべてのアプリに必要です
- 可能であれば `icon.svg` を使用してください
- ツールを利用できる場合、PNG フォールバックも生成されることがあります

#### `thumbnail`

- 任意です
- 主にストア内でより充実した表示を行うために使います
- ビルド済みリソースのパスへ正規化されます

#### `screenshot-{n}`

- 任意です
- 複数の番号付きスクリーンショットを使用できます
- ビルド済みリソースのパスへ正規化されます

## リソースの推奨事項

- 可能な限り `icon.svg` を使用してください
- ストア表示用の専用サムネイルを用意してください
- 実際の UI を適切に表すスクリーンショットを使用してください

アイコン以外のラスターリソースはビルド中に最適化され、幅が大きすぎる場合はリサイズされることがあります。
ビルドアクションのバージョンと利用可能な画像ツールによっては、生成されたサムネイルとスクリーンショットが元の拡張子を保持する場合と、最適化された WebP で出力される場合があります。`index.json` と `meta.json` に書き込まれたパスを正式な出力として扱ってください。

## アイコンの動作

アイコンは次の 2 か所に表示されます。

- `index.json` に出力されたアイコンパスを使用するアプリ一覧
- ビルド済み Compose の `x-casaos.icon` を使用する、インストール済みアプリのダッシュボード項目

ビルド中に、ビルド済み Compose のアイコン URL は、設定された `--base-url` 配下のビルド済みリソース URL へ書き換えられます。

## locale キー

locale キーには `ll_CC` 形式を使用してください。

- `en_US`
- `zh_CN`
- `de_DE`

ビルドスクリプトは locale キーを自動的に正規化しますが、ソースファイルでも期待される形式を使用してください。

## ローカライズ元フィールド

ストアレベルのローカライズ済みテキスト:

- `store-config.json.name`
- `store-config.json.description`

アプリレベルのローカライズ済みテキスト:

- `x-casaos.title`
- `x-casaos.tagline`
- `x-casaos.description`
- `x-casaos.release_notes`
- `x-casaos.tips` 内の locale をキーとする値

## 多言語出力

候補となる locale は `supported-languages.json` から取得されます。

重要な動作:

- デフォルト出力は常に生成されます
- locale 固有のファイルは、その locale が明示的に定義されている場合にのみ生成されます
- `supported-languages.json` がない場合は、`en_US` の出力だけが生成されます

## locale の生成ルール

locale の生成は、次の 2 段階で考えてください。

1. `supported-languages.json` が候補となる locale を宣言します。
2. ソースのローカライズフィールドによって、実際に生成する locale 固有ファイルが決まります。

したがって、候補リストに含まれる locale でも、ストアまたはアプリのフィールドで明示的に定義されていなければ出力されません。

## 例

ソース:

```yaml
title:
  en_US: My App
  zh_CN: 我的应用
```

生成される可能性がある出力:

- `dist/index.json`
- `dist/index.zh_CN.json`
- `dist/apps/com.example.myapp/meta.json`
- `dist/apps/com.example.myapp/meta.zh_CN.json`

ここで `com.example.myapp` は、ソースの `x-casaos.id` を正規化した値です。

## よくある間違い

- `supported-languages.json` だけでローカライズ済みファイルが生成されると考える
- リソースが locale ごとに複製されると考える
- アイコンが一覧表示とインストール済みダッシュボード表示の両方に影響することを忘れる
