---
title: ZimaOS OpenAPIの使い方
description:
type: “Docs”
tip: トップバーの固定形式は削除しないでください。descriptionは記事の説明であり、空欄の場合は内容の最初の段落が取り込まれます。
---
# イントロダクション 
ZimaOSは、開発者とユーザーがZimaOSシステムの機能を統合、オートメーション、および拡張できるようにするOpenAPIを提供します。このAPIを使用することで、ユーザーはプログラムでZimaOSサービスと対話し、既存のワークフローやサードパーティアプリケーションへのシームレスな統合が可能になります。ファイル、ユーザー、システム設定の管理など、多様な操作をサポートしており、カスタマイズと自動化の両方に柔軟なソリューションを提供します。

詳細および技術文書については、公式リポジトリ[IceWhale OpenAPI](https://github.com/IceWhaleTech/IceWhale-OpenAPI)を訪問してください。

# Javascript/Typescript の使用
npmjs.comで次のようなnpmパッケージを見つけることができます。
```
npm install @icewhale/zimaos-localstorage-openapi
```

```
import { StorageMethodsApi } from '@icewhale/zimaos-localstorage-openapi'
...
export const storageApi = new StorageMethodsApi(configuration, '/v2/local_storage', axios)
...
storageApi.getDisk()
```

# Golang
openapi.yamlファイルを使用してAPIコードを生成できます。

例えば、main.goファイルのヘッダーに次のコードを追加します。
```
//go:generate bash -c "mkdir -p codegen/local_storage && go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen@v1.12.4 -generate types,client -package local_stroage https://raw.githubusercontent.com/IceWhaleTech/IceWhale-OpenAPI/main/zimaos-local-storage/local_storage/openapi.yaml > codegen/local_storage/api.go"
```
次に、次のコマンドを実行してAPIコードを生成します。
```
go generate
```
# その他の言語
openapi.yamlファイルを使用してAPIコードを生成できます。

# ライセンス
MIT