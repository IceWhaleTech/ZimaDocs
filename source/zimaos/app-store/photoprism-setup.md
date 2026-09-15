---
title: How to Run PhotoPrism on ZimaOS
seo_title: "PhotoPrism on ZimaOS: Self-Hosted AI Photo Gallery"
description: "Install PhotoPrism from the ZimaOS App Store — a private, AI-powered photo gallery with automatic tagging, smart search, and albums on your own hardware."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

PhotoPrism is natively supported in the ZimaOS App Catalog. See the [PhotoPrism App Store page](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.photoprism) for the latest app details.

PhotoPrism is a self-hosted, AI-powered photo gallery — it keeps your photos private on your own ZimaOS device while still giving you the automatic tagging, smart search, and albums you'd expect from a cloud service. No subscription, no storage limits, and no one scanning your memories.

## Why PhotoPrism?

- **Your photos stay yours** — everything lives on your own ZimaOS drive, not in someone else's cloud.
- **AI does the organizing** — faces, places, and objects are tagged automatically, so you find any photo by searching instead of scrolling.
- **Free & unlimited** — no subscription, capacity is limited only by your disk, and your originals are never compressed.
- **No lock-in** — your photos are plain files in `/DATA/Gallery`, so you can back up or migrate them anytime.

## Prerequisites

- A running ZimaOS installation.
- A free port for the web UI (default: **2342**).

## App Catalog

1. Find PhotoPrism in the ZimaOS App Catalog. Open **App Store** → search for "PhotoPrism" → click **Install**.

![PhotoPrism app page in the ZimaOS App Store with Install and Custom Installation](/images/app-store/photoprism-app-store.webp)

2. **It's ready to use!**

![PhotoPrism icon on the ZimaOS dashboard after installation completes](/images/app-store/photoprism-installed-dashboard.webp)

## Configuration

The following steps are **NOT required** — you can get started right away with the **DEFAULT** configuration.

ZimaOS supports multiple configuration methods, including form-based editing and YAML secondary editing. The main settings you may want to adjust:

- **Volumes** — where your photos and PhotoPrism's data are stored. Your photo library lives in `/DATA/Gallery` on ZimaOS (mounted to `/photoprism/originals`), and the database, index, cache, and thumbnails are stored in `/DATA/AppData/photoprism/storage` (mounted to `/photoprism/storage`). Keep the storage folder outside the originals folder.
- **Port** — the external port you use to access the web UI (default: 2342).

![PhotoPrism container settings showing the 2342 port and volume mappings](/images/app-store/photoprism-config-form.webp)

## First-time setup

After installation, click the PhotoPrism icon. A pop-up shows the default account and password — use the username and password shown there to log in.

![PhotoPrism tips window showing the default admin username and password](/images/app-store/photoprism-default-credentials.webp)

Once logged in, you're ready to go. To change the default account or password later, open **Settings → Account**.

![PhotoPrism Account settings with change password and two-factor options](/images/app-store/photoprism-account-settings.webp)

## Using PhotoPrism

1. Add your photos — put your pictures into `/DATA/Gallery` (or upload them from the web UI), then start indexing from the **Library** tab. PhotoPrism organizes and tags them automatically with AI.

![PhotoPrism Library tab with Complete Rescan and Cleanup options before indexing](/images/app-store/photoprism-library-index.webp)

2. Browse — open the **Calendar** sub-page to browse photos by date, or use **Search** to find photos by keyword, location, or AI-detected objects.
3. Organize & share — create albums under the **Albums** sub-page to organize your photos and share them with family or friends.

## Try these next

Once your photos are indexed, open PhotoPrism and try these — no manual tagging needed:

- **Search something natural** — type "cat", "beach", or "birthday" and PhotoPrism finds every match in seconds.
- **Open People** — see your photos automatically grouped by face.
- **Open Places** — see your photos pinned on a world map.
- **Open Moments** — PhotoPrism auto-groups your photos into events and trips.

## Related Guides

- Want automatic phone backup plus a photo gallery? See [Immich Photo Backup](./immich-photo-backup "Back up phone photos automatically with Immich on ZimaOS") and [Sync Photos with Immich](./sync-photos-with-immich "Keep phone photos in sync with an Immich server on ZimaOS").

Not sure which one fits? Pick Immich when automatic phone backup is the main goal; pick PhotoPrism when you want an AI-powered library over a folder of files you manage yourself.

## Need Help?

If you run into any issues while installing or using PhotoPrism on ZimaOS, join the [ZimaSpace Discord community](https://discord.gg/f9nzbmpMtU "Join the ZimaSpace Discord community for ZimaOS support"). Our team and community members will be happy to help.
