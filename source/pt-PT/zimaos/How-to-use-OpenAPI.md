---
title: Como usar o ZimaOS OpenAPI
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição deve ser uma descrição do artigo; se não preenchida, o conteúdo será cortado na primeira parte do texto.
---
# Introdução
O ZimaOS oferece um OpenAPI para permitir que desenvolvedores e usuários integrem, automatizem e ampliem as funcionalidades de seus sistemas ZimaOS. Com esta API, os usuários podem interagir programaticamente com os serviços do ZimaOS, permitindo uma integração fluida em fluxos de trabalho existentes e aplicações de terceiros. Suporta várias operações, como gerenciamento de arquivos, usuários e configurações do sistema, proporcionando uma solução flexível tanto para personalização quanto para automação.

Para mais detalhes e documentação técnica, você pode visitar o repositório oficial em [IceWhale OpenAPI](https://github.com/IceWhaleTech/IceWhale-OpenAPI).

# Uso em Javascript/Typescript
Você pode encontrar o pacote npm em npmjs.com, como:
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
Você pode usar o arquivo openapi.yaml para gerar o código da API.

Por exemplo, adicione o seguinte código ao cabeçalho do seu arquivo main.go
```
//go:generate bash -c "mkdir -p codegen/local_storage && go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen@v1.12.4 -generate types,client -package local_stroage https://raw.githubusercontent.com/IceWhaleTech/IceWhale-OpenAPI/main/zimaos-local-storage/local_storage/openapi.yaml > codegen/local_storage/api.go"
```
Em seguida, execute o seguinte comando para gerar o código da API.
```
go generate
```
# Outro Idioma
Você pode usar o arquivo openapi.yaml para gerar o código da API.

# Licença
MIT