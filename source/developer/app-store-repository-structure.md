---
title: App Store Repository Structure
seo_title: "Docker App Store Repository Structure for ZimaOS and NAS OS"
description: "Organize Docker Compose files, app metadata, assets, and generated output for a ZimaOS-compatible self-hosted app store."
type: Docs
author: IceWhaleTech
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

A predictable repository layout makes Docker apps easier to validate, build, and publish across a self-hosted home server, homelab, or NAS OS.

This page explains the minimum source layout for a store using the v2 protocol and how it maps to generated output.

## Source tree

The source repository is what you edit and commit:

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

For local development, you can also add:

```text
scripts/
└── build_dist.sh
```

## Required root files

- `store-config.json`: required store identity file for v2.
- `supported-languages.json`: required locale candidate list for this repository's workflow.
- `Apps/`: required app source directory.

Legacy v1 stores also commonly have `category-list.json`, `recommend-list.json`, and v1 packaging files. Those can remain when you need v1 compatibility, but v2 clients consume the generated `dist/` files.

## Generated tree

The build turns source files into deployable static output:

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

## What lives where

- `Apps/`: editable app definitions, source compose, and source assets.
- `store-config.json`: store identity and store-level localization.
- `supported-languages.json`: candidate locales for output generation.
- `scripts/build_dist.sh`: optional local build helper.
- `dist/`: generated protocol output, not hand-authored source.
- `dist/apps/<app-id>/`: generated app output directory, where `<app-id>` is the normalized top-level `x-casaos.id`.
- `dist/store/main.zip`: optional legacy v1 artifact when your workflow still builds it.

## Rule of thumb

Edit source files under the repository root and treat `dist/` as build output.

For field-level rules, continue with:

- [Store Config](./app-store-config)
- [Compose and x-casaos](./app-store-compose-x-casaos)
- [Build Output](./app-store-build-output)

