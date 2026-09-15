---
title: How to Run VoceChat on ZimaOS
seo_title: "VoceChat on ZimaOS: Self-Hosted Team Chat Server"
description: "Install VoceChat from the ZimaOS App Store — a lightweight, private chat server with group chats, file sharing, and an embeddable widget on your own hardware."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

VoceChat is natively supported in the ZimaOS App Catalog. See the [VoceChat App Store page](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.vocechat) for the latest app details.

VoceChat is a lightweight, self-hosted chat server — it gives you private group chats, direct messages, file sharing, @mentions, bots, and an embeddable chat widget, all running on your own hardware instead of a messaging vendor's cloud.

## Prerequisites

- A running ZimaOS installation.
- A free port for the chat server (default: **3009**).

## App Catalog

1. Find VoceChat in the ZimaOS App Catalog. Open **App Store** → search for "VoceChat".

![VoceChat app page in the ZimaOS App Store with the Install button](/images/app-store/vocechat-app-store.webp)

2. **It's ready to use!**

![VoceChat icon on the ZimaOS dashboard after installation completes](/images/app-store/vocechat-installed-dashboard.webp)

## Configuration

The following steps are **NOT required** — you can get started right away with the **DEFAULT** configuration.

ZimaOS supports multiple configuration methods, including form-based editing and YAML secondary editing.

![VoceChat container settings showing the 3009 port and data volume mount](/images/app-store/vocechat-config-form.webp)

The main settings you may want to adjust:

- **Volumes** — where your chat history and uploaded files are stored (default: `/DATA/AppData/vocechat/home/vocechat-server/data`, mounted to `/home/vocechat-server/data`).
- **Port** — the external port you use to access the web UI (default: 3009).

## First-time setup

On ZimaOS, first-time setup is just as easy — no config files to edit. After installation, open VoceChat and follow the setup wizard:

1. Set a name for your server.
2. Create your admin account (email + password).
3. Choose your registration mode (open registration or invite-only).

![VoceChat welcome screen with options to invite teammates and upgrade](/images/app-store/vocechat-first-run-welcome.webp)

Once done, share the invite link with your family or team and start chatting right away. VoceChat also offers official iOS/Android apps and an embeddable chat widget for your website.

## Need Help?

If you run into any issues while installing or using VoceChat on ZimaOS, join the [ZimaSpace Discord community](https://discord.com/invite/f9nzbmpMtU "Join the ZimaSpace Discord community for ZimaOS support"). Our team and community members will be happy to help.
