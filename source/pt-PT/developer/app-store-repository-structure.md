---
title: Estrutura do repositório da App Store
seo_title: "Estrutura de repositório de App Store Docker para ZimaOS e NAS OS"
description: "Organize ficheiros Docker Compose, metadados, recursos e saída gerada para uma loja de aplicações self-hosted compatível com ZimaOS."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Uma estrutura de repositório previsível facilita a validação, compilação e publicação de aplicações Docker num servidor doméstico self-hosted, homelab ou NAS OS.

Esta página explica a estrutura de origem mínima de uma loja que utiliza o protocolo v2 e como ela é transformada na saída gerada.

## Árvore de origem

O repositório de origem é aquilo que edita e confirma no Git:

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

Para desenvolvimento local, também pode adicionar:

```text
scripts/
└── build_dist.sh
```

## Ficheiros obrigatórios na raiz

- `store-config.json`: ficheiro obrigatório de identidade da loja para v2.
- `supported-languages.json`: lista obrigatória de locales candidatos para o fluxo de trabalho deste repositório.
- `Apps/`: diretório obrigatório com as origens das aplicações.

As lojas v1 legadas também costumam incluir `category-list.json`, `recommend-list.json` e ficheiros de empacotamento v1. Estes podem permanecer quando precisar de compatibilidade v1, mas os clientes v2 consomem os ficheiros gerados em `dist/`.

## Árvore gerada

A compilação transforma os ficheiros de origem em saída estática pronta para implementação:

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

## O que pertence a cada localização

- `Apps/`: definições editáveis, Compose de origem e recursos de origem das aplicações.
- `store-config.json`: identidade da loja e localização ao nível da loja.
- `supported-languages.json`: locales candidatos para a geração da saída.
- `scripts/build_dist.sh`: auxiliar opcional para compilações locais.
- `dist/`: saída gerada do protocolo, não uma origem escrita manualmente.
- `dist/apps/<app-id>/`: diretório de saída gerado da aplicação, em que `<app-id>` é o `x-casaos.id` superior normalizado.
- `dist/store/main.zip`: artefacto v1 legado opcional quando o fluxo de trabalho ainda o compila.

## Regra prática

Edite os ficheiros de origem na raiz do repositório e trate `dist/` como saída de compilação.

Para consultar as regras ao nível dos campos, continue para:

- [Configuração da loja](./app-store-config)
- [Compose e x-casaos](./app-store-compose-x-casaos)
- [Saída da compilação](./app-store-build-output)
