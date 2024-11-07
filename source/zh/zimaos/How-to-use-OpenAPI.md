---
title: 如何使用 ZimaOS OpenAPI
description:
type: “文档”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 引言
ZimaOS 提供了一个 OpenAPI，使开发人员和用户能够集成、自动化和扩展其 ZimaOS 系统的功能。通过该 API，用户可以以编程方式与 ZimaOS 服务进行交互，从而实现与现有工作流程和第三方应用程序的无缝集成。它支持各种操作，例如管理文件、用户和系统设置，为定制和自动化提供灵活的解决方案。

有关更多详细信息和技术文档，您可以访问官方代码库 [IceWhale OpenAPI](https://github.com/IceWhaleTech/IceWhale-OpenAPI)。

# 在 Javascript/Typescript 中使用
您可以在 npmjs.com 中找到 npm 包，例如：
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
您可以使用 openapi.yaml 文件生成 API 代码。

例如，将以下代码添加到您的 main.go 文件的头部
```
//go:generate bash -c "mkdir -p codegen/local_storage && go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen@v1.12.4 -generate types,client -package local_storage https://raw.githubusercontent.com/IceWhaleTech/IceWhale-OpenAPI/main/zimaos-local-storage/local_storage/openapi.yaml > codegen/local_storage/api.go"
```
然后运行以下命令生成 API 代码。
```
go generate
```
# 其他语言
您可以使用 openapi.yaml 文件生成 API 代码。

# 许可证
MIT