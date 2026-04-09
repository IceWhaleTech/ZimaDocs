---
title: How to use ZimaOS OpenAPI
description: "Use ZimaOS OpenAPI to automate file management, user control, and system settings. Developer guide covering authentication, endpoints, and integration examples."
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
# Introduction 
ZimaOS offers an OpenAPI to enable developers and users to integrate, automate, and extend the functionalities of their ZimaOS systems. With this API, users can interact programmatically with ZimaOS services, allowing for seamless integration into existing workflows and third-party applications. It supports various operations, such as managing files, users, and system settings, providing a flexible solution for both customization and automation.

For more details and technical documentation, you can visit the official repository at [IceWhale OpenAPI](https://github.com/IceWhaleTech/IceWhale-OpenAPI).

# Use in Javascript/Typescript
You can find npm package in npmjs.com such as:
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
You can use the openapi.yaml file to generate the API code.

Such as, add the following code to the header of your main.go file
```
//go:generate bash -c "mkdir -p codegen/local_storage && go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen@v1.12.4 -generate types,client -package local_stroage https://raw.githubusercontent.com/IceWhaleTech/IceWhale-OpenAPI/main/zimaos-local-storage/local_storage/openapi.yaml > codegen/local_storage/api.go"
```
Then run the following command to generate the API code.
```
go generate
```
# Other Language
You can use the openapi.yaml file to generate the API code.

# License
MIT