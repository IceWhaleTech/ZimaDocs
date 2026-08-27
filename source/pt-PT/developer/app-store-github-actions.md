---
title: GitHub Actions para App Stores
seo_title: "GitHub Actions para App Stores Docker ZimaOS"
description: "Reutilize GitHub Actions oficiais para validar, compilar e publicar uma App Store Docker compatível com ZimaOS em ambientes self-hosted e homelab."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Os responsáveis por lojas de terceiros podem automatizar uma App Store Docker self-hosted sem copiar todo o repositório oficial.

Esta página mostra a forma recomendada de reutilizar o processo oficial de compilação e publicação.

## Caminho de reutilização recomendado

Para repositórios externos, prefira estas camadas:

1. Utilize a ação pública de compilação `IceWhaleTech/build-appstore-action`.
2. Mantenha no workflow do seu repositório a responsabilidade pela validação, carregamento de artefactos e publicação.
3. Trate as ações auxiliares em `.github/actions/` deste repositório como exemplos ou wrappers locais, a menos que as incorpore intencionalmente.

## Para que serve cada ação

- `IceWhaleTech/build-appstore-action`: motor público de compilação v2. Utilize-o para gerar `dist/` no workflow do seu repositório.
- `.github/actions/build-store-v2`: wrapper local do repositório em torno da ação pública.
- `.github/actions/build-store-v1`: empacota o artefacto legado `dist/store/main.zip` para clientes antigos.
- `.github/actions/validate-compose`: verifica os metadados Compose antes da compilação.
- `.github/actions/write-job-summary`: escreve relatórios JSON estruturados no resumo do GitHub Actions.
- `.github/actions/render-report`: converte relatórios JSON em artefactos HTML independentes.

## Separação recomendada dos workflows

O repositório oficial separa as responsabilidades desta forma:

- `validator.yml`: valida a entrada Compose e confirma que a compilação v2 termina com êxito.
- `release.yml`: compila `dist/` v2 e `main.zip` v1, carrega artefactos e guarda caches.
- `release-store.yml`: publica releases etiquetadas, implementa `dist/` em `gh-pages` e cria um pacote de GitHub Release.

Para a maioria das lojas de terceiros, utilize a mesma separação:

- um workflow de validação para PRs
- um workflow de compilação para artefactos reutilizáveis
- um workflow de publicação para etiquetas ou releases

## Workflow mínimo de validação

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

## Workflow mínimo de publicação

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

## Nota de compatibilidade

Se ainda suportar clientes v1 legados, adicione um passo que também produza `dist/store/main.zip`. O repositório oficial faz isso através de `.github/actions/build-store-v1` depois de a compilação v2 terminar com êxito.

## Compilações locais

Utilize `./scripts/build_dist.sh` quando quiser aproximar o desenvolvimento local da ação de compilação oficial. Para a CI real de uma loja de terceiros, utilize diretamente o GitHub Actions.
