---
title: How to Run RomM on ZimaOS
seo_title: "RomM on ZimaOS: Self-Hosted ROM Library Manager"
description: "Install RomM from the ZimaOS App Store — organize, browse, and share your game ROM collection in a self-hosted library on your own hardware."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

RomM is natively supported in the ZimaOS App Catalog. See the [RomM App Store page](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.romm) for the latest app details.

RomM is a self-hosted ROM library manager — it scans your game collection, pulls in box art and metadata, and gives you a browser-based library you can browse and share from any device on your network.

## Prerequisites

- A running ZimaOS installation.
- Your library arranged in the expected [folder structure](https://docs.romm.app/latest/getting-started/folder-structure/ "RomM guide to the expected ROM library folder structure").

## App Catalog

1. Find RomM in the ZimaOS App Catalog. Open **App Store** → search for "RomM".

![RomM app page in the ZimaOS App Store with the Install button and Media category](/images/app-store/romm-app-store.webp)

2. **It's ready to use!**

![RomM app icon on the ZimaOS dashboard after installation completes](/images/app-store/romm-installed-dashboard.webp)

## Configuration

The following steps are **NOT required** — you can get started right away with the **DEFAULT** configuration.

ZimaOS supports multiple configuration methods, including form-based editing and YAML secondary editing.

![RomM container settings with Form and YAML tabs and environment variables](/images/app-store/romm-config-form.webp)

## Import ROMs

Importing ROMs on ZimaOS is easy — just drag and drop. Open ZimaOS Files, navigate to the directory where your library is configured (default is `AppData/romm/library/roms`), and drag your files in to upload. RomM picks them up and adds them to your library with artwork and metadata.

## RomM, RetroArch, and Batocera

These three tools cover different parts of retro gaming:

- **RomM** organizes the collection — it scans your files, pulls box art and metadata, and gives you a shareable library to browse. It is not the emulator itself.
- **[RetroArch](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.retroarch "RetroArch app page in the ZimaOS App Store")** plays the games — it is the emulation frontend that runs ROMs across dozens of systems.
- **[Batocera](./batocera-arcade-setup "Turn a ZimaBoard into a retro arcade console with Batocera")** turns a whole device into a console — it is a dedicated retro-gaming OS you boot a ZimaBoard into, instead of an app on ZimaOS.

A common setup is to keep the collection tidy in RomM on ZimaOS, and play on a RetroArch or Batocera device.

## Need Help?

If you run into any issues while installing or using RomM on ZimaOS, join the [ZimaSpace Discord community](https://discord.gg/f9nzbmpMtU "Join the ZimaSpace Discord community for ZimaOS support"). Our team and community members will be happy to help.
