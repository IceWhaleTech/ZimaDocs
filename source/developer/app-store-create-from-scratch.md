---
title: Create a ZimaOS App Store from Scratch
seo_title: "Create a Docker App Store for ZimaOS, Home Servers, and Homelabs"
description: "Build a ZimaOS-compatible Docker app store for a self-hosted home server, homelab, or NAS OS. Define apps, generate v2 output, and publish static files."
type: Docs
author: IceWhaleTech
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

This guide is for building a ZimaOS-compatible catalog of Docker and self-hosted apps for a home server, homelab, or NAS OS. It covers the minimum source files, v2 build process, and static publishing path.

Use this path when you are creating a new ZimaOS-compatible third-party store.

If you already have a v1 zip-based store, read [Migration Strategy](./app-store-v1-v2-migration) first. Migration reuses most of the existing `Apps/` tree and has a shorter path.

## Minimum source files

A new store using the v2 protocol starts with:

- `store-config.json`: store identity and store-level localized text.
- `supported-languages.json`: locale candidates for generated output.
- `Apps/<AppName>/docker-compose.yml`: one source compose file per app.
- app assets such as `icon.svg`, `thumbnail.png`, and `screenshot-1.png`.

`scripts/build_dist.sh` is optional but recommended for local builds. CI can call `IceWhaleTech/build-appstore-action` directly.

## Build path

1. Create the repository structure described in [Repository Structure](./app-store-repository-structure).
2. Add `store-config.json` with a stable `store_id`, localized `name`, `maintainer`, and optional description.
3. Add `supported-languages.json` with the locales you want the build to consider.
4. Add one directory per app under `Apps/`.
5. Put Docker runtime configuration in standard Compose sections.
6. Put store metadata in the top-level `x-casaos` block.
7. Run the build action or `./scripts/build_dist.sh`.
8. Publish the generated `dist/` directory to static hosting.

## First app checklist

For each app, make sure the source compose has:

- top-level Compose `name`
- `services`
- top-level `x-casaos.id`
- `x-casaos.main`
- `x-casaos.index`
- `x-casaos.port_map`
- `x-casaos.icon`
- `x-casaos.title`
- `x-casaos.category`

Recommended metadata:

- `tagline`
- `description`
- `author`
- `developer`
- `architectures`
- `version`
- `website`, `repo`, `support`, or `docs` when available

## Publish target

Stores using the v2 protocol are consumed as static files. Any HTTPS static host works:

- GitHub Pages
- Cloudflare Pages
- Netlify
- self-hosted Nginx
- any CDN or object storage that serves the generated files unchanged

Set the build `base-url` to the final public URL where `dist/` will be reachable. This URL is written into generated app file and asset paths.

## Next pages

1. [Repository Structure](./app-store-repository-structure)
2. [Store Config](./app-store-config)
3. [Compose and x-casaos](./app-store-compose-x-casaos)
4. [Build Output](./app-store-build-output)
5. [CI/CD Overview](./app-store-ci-cd)

