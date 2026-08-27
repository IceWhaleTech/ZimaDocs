---
title: GitHub Actions para App Stores
seo_title: "GitHub Actions para App Stores Docker de ZimaOS"
description: "Reutiliza GitHub Actions oficiales para validar, compilar y publicar una App Store Docker compatible con ZimaOS en entornos self-hosted y homelab."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Los responsables de tiendas de terceros pueden automatizar una App Store Docker self-hosted sin copiar todo el repositorio oficial.

Esta página muestra la forma recomendada de reutilizar el proceso oficial de compilación y publicación.

## Ruta de reutilización recomendada

Para repositorios externos, utiliza preferentemente estas capas:

1. Usa la acción pública de compilación `IceWhaleTech/build-appstore-action`.
2. Mantén en el workflow de tu repositorio la responsabilidad de validar, subir artefactos y publicar.
3. Trata las acciones auxiliares de `.github/actions/` de este repositorio como ejemplos o wrappers locales, salvo que decidas incorporarlas deliberadamente.

## Objetivo de cada acción

- `IceWhaleTech/build-appstore-action`: motor público de compilación v2. Úsalo para generar `dist/` desde el workflow de tu repositorio.
- `.github/actions/build-store-v2`: wrapper local del repositorio para la acción pública.
- `.github/actions/build-store-v1`: empaqueta el artefacto heredado `dist/store/main.zip` para clientes antiguos.
- `.github/actions/validate-compose`: comprueba los metadatos Compose antes de compilar.
- `.github/actions/write-job-summary`: escribe informes JSON estructurados en el resumen de GitHub Actions.
- `.github/actions/render-report`: convierte informes JSON en artefactos HTML independientes.

## División recomendada de workflows

El repositorio oficial separa las responsabilidades de esta forma:

- `validator.yml`: valida la entrada Compose y confirma que la compilación v2 termina correctamente.
- `release.yml`: compila `dist/` v2 y `main.zip` v1, sube artefactos y guarda cachés.
- `release-store.yml`: publica releases etiquetadas, despliega `dist/` en `gh-pages` y crea un paquete de GitHub Release.

Para la mayoría de las tiendas de terceros, usa la misma división:

- un workflow de validación para PR
- un workflow de compilación para artefactos reutilizables
- un workflow de publicación para etiquetas o releases

## Workflow mínimo de validación

```yaml
name: Validate Store

on:
  pull_request:
  workflow_dispatch:

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build v2 dist
        uses: IceWhaleTech/build-appstore-action@v1
        with:
          source: .
          output: dist
          base-url: https://cdn.jsdelivr.net/gh/${{ github.repository }}@gh-pages
          cache-file: .cache/build_appstore/image-size-cache.json
          digest-cache-file: .cache/build_appstore/image-digest-cache.json
```

## Workflow mínimo de publicación

```yaml
name: Release Store

on:
  push:
    tags:
      - "v*"

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build v2 dist
        uses: IceWhaleTech/build-appstore-action@v1
        with:
          source: .
          output: dist
          base-url: https://cdn.jsdelivr.net/gh/${{ github.repository }}@gh-pages
          cache-file: .cache/build_appstore/image-size-cache.json
          digest-cache-file: .cache/build_appstore/image-digest-cache.json

      - name: Deploy dist
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./dist
```

## Nota de compatibilidad

Si todavía admites clientes v1 heredados, añade un paso que también produzca `dist/store/main.zip`. El repositorio oficial lo hace mediante `.github/actions/build-store-v1` después de que termine correctamente la compilación v2.

## Compilaciones locales

Utiliza `./scripts/build_dist.sh` cuando quieras que el desarrollo local se comporte de forma similar a la acción de compilación oficial. Para la CI real de una tienda de terceros, utiliza directamente GitHub Actions.
