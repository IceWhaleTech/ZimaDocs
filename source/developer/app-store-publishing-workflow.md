---
title: App Store Publishing Workflow
seo_title: "Publish a ZimaOS Docker App Store to GitHub Pages and a CDN"
description: "Publish a ZimaOS-compatible Docker app store to GitHub Pages, GitHub Releases, and a CDN for home server and homelab users."
type: Docs
author: IceWhaleTech
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

This publishing workflow delivers a Docker app store to static hosting so ZimaOS home servers and homelabs can consume it.

This page documents [`.github/workflows/release-store.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release-store.yml), the publish workflow used for tagged releases.

## Purpose

It takes release-ready build output and publishes it to the public delivery targets.

## Triggers

- push tags matching `v*`
- manual `workflow_dispatch`

Manual runs can set `purge_only` to refresh the files changed by the latest
`gh-pages` deployment without rebuilding or deploying the store again.

## Main stages

1. Check out repository source.
2. Restore build caches.
3. Build protocol v2 `dist/`.
4. Build legacy v1 zip output.
5. Create release bundles.
6. Upload release artifacts and reports.
7. Save build caches.
8. Write a release summary.
9. Deploy `dist/` to `gh-pages`.
10. Collect files changed by the deployment and refresh their jsDelivr cache entries.
11. Create a GitHub Release with attached bundles.

The cache refresh runs after the `gh-pages` deployment. It compares the
previous and current `gh-pages` revisions, always includes the store entry
points, and submits paths to jsDelivr in batches. The refresh script polls the
purge result, retries transient HTTP failures, and fails visibly when jsDelivr
reports throttling or an unsuccessful purge. A follow-up content check compares
the source and CDN response hashes so an accepted purge request cannot be
mistaken for a refreshed cache.

## Publish outputs

The workflow currently publishes or attaches:

- `gh-pages` static `dist/` output for the v2 protocol
- `main.zip` for legacy v1 compatibility
- zipped release bundles for download
- JSON build reports for troubleshooting

## Why it matters

This workflow is the closest reference if you want a third-party store repository to match the official publish path.

It shows how the official repository separates:

- build-time artifacts
- publish-time deployment
- release attachments for manual download

## Related build workflow

The non-publishing build workflow is documented in [Release Workflow](./app-store-build-workflow).

If you are designing an external repository, see [Official Actions Reuse](./app-store-github-actions) for the recommended reuse path.

