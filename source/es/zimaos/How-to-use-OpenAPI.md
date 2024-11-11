---
title: Cómo usar ZimaOS OpenAPI
description:
type: “Docs”
tip: El formato fijo de la barra superior no debe eliminarse, description es la descripción del artículo, si no se completa, se tomará la primera parte del contenido.
---
# Introducción
ZimaOS ofrece un OpenAPI para permitir a desarrolladores y usuarios integrar, automatizar y extender las funcionalidades de sus sistemas ZimaOS. Con esta API, los usuarios pueden interactuar programáticamente con los servicios de ZimaOS, lo que permite una integración fluida en flujos de trabajo existentes y aplicaciones de terceros. Soporta varias operaciones, como la gestión de archivos, usuarios y configuraciones del sistema, proporcionando una solución flexible tanto para la personalización como para la automatización.

Para más detalles y documentación técnica, puedes visitar el repositorio oficial en [IceWhale OpenAPI](https://github.com/IceWhaleTech/IceWhale-OpenAPI).

# Uso en Javascript/Typescript
Puedes encontrar el paquete npm en npmjs.com como:
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
Puedes usar el archivo openapi.yaml para generar el código de la API.

Por ejemplo, agrega el siguiente código al encabezado de tu archivo main.go
```
//go:generate bash -c "mkdir -p codegen/local_storage && go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen@v1.12.4 -generate types,client -package local_stroage https://raw.githubusercontent.com/IceWhaleTech/IceWhale-OpenAPI/main/zimaos-local-storage/local_storage/openapi.yaml > codegen/local_storage/api.go"
```
Luego ejecuta el siguiente comando para generar el código de la API.
```
go generate
```
# Otro Lenguaje
Puedes usar el archivo openapi.yaml para generar el código de la API.

# Licencia
MIT