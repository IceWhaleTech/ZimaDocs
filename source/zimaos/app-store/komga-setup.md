---
title: How to Deploy Komga on ZimaOS
seo_title: "Run Komga on ZimaOS: Comic and E-Book Server for Your Home Server"
description: Install Komga from the ZimaOS App Store in minutes — upload comics and e-books, authorize a library folder, and read them from any device including your phone.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

Komga is natively supported in the ZimaOS App Catalog and can be installed in just 3 mins. See the [Komga App Store page](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.komga) for the latest app details.

Komga is a free, open-source media server for comics, manga, and e-books. It organizes your PDF and EPUB files into libraries with automatic metadata, offers a clean web reader in any browser, and supports OPDS for third-party reading apps. Installed on ZimaOS, your library stays on your own drives and is available from any device — including your phone through ZimaClient.

## Prerequisites

- A running ZimaOS home server.
- Your PDF or EPUB files are stored in a local folder on your ZimaOS home server.

## App Catalog

1. Find Komga in the ZimaOS App Catalog. Open **App Store** → search for "Komga".

![App Store search results showing the Komga app card and its Install button](/images/app-store/komga-app-store.png)

2. **It's ready to use!**

![Apps list in the ZimaOS Dashboard with Komga showing as installed](/images/app-store/komga-installed.png)

## Upload Files via ZimaOS Files

Use ZimaOS Files to upload or copy your PDF or EPUB files directly. Open ZimaOS Files, create a new folder, and then drag and drop your PDF or EPUB files to upload them directly into the directory.

![ZimaOS Files window with a komga-library folder created for comic and e-book uploads](/images/app-store/komga-files.png)

## Authorize Komga to Load Data

The following steps are **NOT required** — you can get started right away with the DEFAULT configuration.

If you want to customize all container settings, you can configure them via the options in the upper-right corner of the app.

![Komga app page in ZimaOS with the upper-right options menu for container settings](/images/app-store/komga-settings.png)

ZimaOS supports multiple configuration methods, including form-based editing and YAML secondary editing.

In the ZimaOS configuration form for Komga, navigate to the **Volumes** (or path mapping) section and add a new volume rule: set the **Container Path** to `/data` (the default media directory inside Komga) and the **Host Path** to the local folder on your ZimaOS device where your comics are stored. See the screenshot below for a filled example.

![App settings Volumes section for Komga with the container media path mapped to a host folder](/images/app-store/komga-volumes.png)

## Add a Library in Komga

1. First visit: Create an admin account.

![First-run screen in Komga for creating an admin account with email and password](/images/app-store/komga-admin.png)

2. After logging in, click the "+" button next to Libraries in the sidebar.

![Add Library dialog in Komga with a name and the root folder path filled in](/images/app-store/komga-library.png)

3. Set the file scan interval.

![Scanner settings in the Komga Add Library dialog with the scan interval set to hourly](/images/app-store/komga-scan.png)

> Keep all other tabs at their default settings and proceed.

4. Click "Add" to finish.

Komga will automatically scan and import all comics, magazines, or e-books stored in that folder.

![Komga books page after adding a library showing recently added comics and series](/images/app-store/komga-books.png)

## Access Komga via Mobile

Access Komga via the ZimaClient mobile app — direct P2P connection to your home server, no cloud relay, no VPN setup required. Works from home or on the go.

| ![ZimaClient mobile app listing installed apps with the Komga icon on a phone](/images/app-store/komga-phone-apps.png) | ![Komga library opened through ZimaClient on a phone showing a comic series page](/images/app-store/komga-phone-library.png) | ![E-book detail page in Komga on a phone with read and download buttons](/images/app-store/komga-phone-reader.png) |
| - | - | - |

## Reference Links

For further details, please consult the official Komga documentation:

- Library advanced settings – [https://komga.org/docs/guides/libraries/](https://komga.org/docs/guides/libraries/ "Official Komga guide to library configuration and scanning")
- Server settings & management – [https://komga.org/docs/guides/server-settings/](https://komga.org/docs/guides/server-settings/ "Official Komga guide to server settings and management")
- Reverse proxy & HTTPS setup – [https://komga.org/docs/installation/https/](https://komga.org/docs/installation/https/ "Official Komga guide to HTTPS and reverse proxy setup")
