---
title: App Store Build Workflow
seo_title: "Build Workflow for ZimaOS Docker App Stores"
description: "Build v2 static output, legacy v1 packages, reports, and reusable artifacts for a self-hosted ZimaOS Docker app store."
type: Docs
author: IceWhaleTech
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

This build workflow turns self-hosted Docker app definitions into reusable artifacts for homelab and NAS OS distribution.

This page documents [`.github/workflows/release.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release.yml), the artifact build workflow.

## Purpose

It turns repository source definitions into reusable build deliverables.

## Triggers

- push to `main`
- manual `workflow_dispatch`

## Main stages

1. Check out repository source.
2. Restore build caches.
3. Build protocol v2 `dist/`.
4. Build legacy v1 zip output.
5. Upload build reports and deliverable artifacts.
6. Save build caches.
7. Write a job summary.

## Build outputs

The workflow currently produces at least:

- static `dist/` output for the v2 protocol
- legacy `dist/store/main.zip`
- JSON reports for v1 and v2 build results

## Why it matters

This workflow explains the build contract of the repository:

- source files are not the published protocol directly
- `dist/` is the publication artifact
- uploaded reports are debugging artifacts, not protocol files

## Related publish workflow

Actual tag-based publishing now lives in [Release-store Workflow](./app-store-publishing-workflow).

If you are designing a third-party store repository, see [Official Actions Reuse](./app-store-github-actions) for the recommended reuse path.

For external store maintainers, this page is useful even if you do not copy the official workflow exactly, because it shows which steps are protocol-critical and which are implementation detail.

