---
title: Estructura del repositorio de App Store
seo_title: "Estructura de un repositorio de App Store Docker para ZimaOS y NAS OS"
description: "Organiza archivos Docker Compose, metadatos, recursos y salida generada para una tienda de aplicaciones self-hosted compatible con ZimaOS."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Una estructura de repositorio predecible facilita la validación, compilación y publicación de aplicaciones Docker para un servidor doméstico self-hosted, un homelab o un NAS OS.

Esta página explica la estructura fuente mínima de una tienda que usa el protocolo v2 y cómo se convierte en la salida generada.

## Árbol de fuentes

El repositorio fuente es lo que editas y confirmas en Git:

```text
my-appstore/
├── Apps/
│   └── MyApp/
│       ├── docker-compose.yml
│       ├── icon.svg
│       ├── thumbnail.png
│       └── screenshot-1.png
├── store-config.json
└── supported-languages.json
```

Para el desarrollo local también puedes añadir:

```text
scripts/
└── build_dist.sh
```

## Archivos raíz obligatorios

- `store-config.json`: archivo de identidad de tienda obligatorio para v2.
- `supported-languages.json`: lista obligatoria de locales candidatos para el flujo de trabajo de este repositorio.
- `Apps/`: directorio fuente obligatorio de aplicaciones.

Las tiendas v1 heredadas también suelen tener `category-list.json`, `recommend-list.json` y archivos de empaquetado v1. Pueden conservarse cuando necesites compatibilidad con v1, pero los clientes v2 consumen los archivos generados dentro de `dist/`.

## Árbol generado

La compilación convierte los archivos fuente en una salida estática desplegable:

```text
dist/
├── index.json
├── index.zh_CN.json
├── store.json
├── store.zh_CN.json
└── apps/
    └── com.example.myapp/
        ├── docker-compose.yml
        ├── docker-compose.amd64.yml
        ├── meta.json
        ├── meta.zh_CN.json
        └── assets/
            ├── icon.svg
            ├── icon.png
            ├── thumbnail.webp
            └── screenshot-1.webp
```

## Contenido de cada ubicación

- `Apps/`: definiciones editables, Compose fuente y recursos fuente de las aplicaciones.
- `store-config.json`: identidad de la tienda y localización de nivel de tienda.
- `supported-languages.json`: locales candidatos para generar la salida.
- `scripts/build_dist.sh`: ayudante opcional para compilaciones locales.
- `dist/`: salida generada del protocolo; no es código fuente escrito a mano.
- `dist/apps/<app-id>/`: directorio de salida generado para una aplicación, donde `<app-id>` es el `x-casaos.id` superior normalizado.
- `dist/store/main.zip`: artefacto v1 heredado opcional si el flujo de trabajo todavía lo genera.

## Regla práctica

Edita los archivos fuente en la raíz del repositorio y trata `dist/` como salida de compilación.

Para consultar las reglas de cada campo, continúa con:

- [Configuración de la tienda](./app-store-config)
- [Compose y x-casaos](./app-store-compose-x-casaos)
- [Salida de compilación](./app-store-build-output)
