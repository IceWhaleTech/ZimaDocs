---
title: How to Run Karakeep on ZimaOS
seo_title: "Karakeep on ZimaOS: Self-Hosted Bookmark Manager with AI Tagging"
description: "Install Karakeep from the ZimaOS App Store — bookmark everything into one self-hosted library with AI auto-tagging and summarization on your own hardware."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

Karakeep is natively supported in the ZimaOS App Catalog. See the [Karakeep App Store page](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.karakeep) for the latest app details.

**Karakeep** (previously Hoarder) is an open source "Bookmark Everything" app that uses AI to automatically tag and summarize the links, notes, and images you throw at it. Built with self-hosting as a first class citizen, it keeps your bookmark library on your own hardware instead of a browser vendor's cloud.

## Prerequisites

- A running ZimaOS installation.
- *(Optional)* An OpenAI-compatible API key. If you want to use a different AI provider (e.g. a local model for private inference), check out the [different AI providers](https://docs.karakeep.app/configuration/different-ai-providers "Karakeep guide to configuring different AI providers") guide.

## App Catalog

1. Find Karakeep in the ZimaOS App Catalog. Open **App Store** → search for "Karakeep" → **Install**.

![Karakeep app page in the ZimaOS App Store with the Install button](/images/app-store/karakeep-app-store.webp)

2. **It's ready to use!**

![Karakeep icon with a New badge on the ZimaOS dashboard after installation](/images/app-store/karakeep-installed-dashboard.webp)

Open Karakeep and you can start bookmarking right away — paste a link, write a note, or drop an image into the **NEW ITEM** box.

![Karakeep interface with the New Item box for pasting links, notes, or images](/images/app-store/karakeep-ui-new-item.webp)

![Karakeep home view with Get Started and Zima cards beside the New Item box](/images/app-store/karakeep-ui-content.webp)

## Optional: Set your domain (NEXTAUTH_URL)

By default, Karakeep assumes it is running at `http://localhost:xxxx`. If you open it from another device — or through a domain — links inside the app (including the **logout** button) will still point to `localhost` and fail.

To fix this, set the `NEXTAUTH_URL` environment variable to the exact address you use to open Karakeep (the IP address you use to log in to ZimaOS):

![Karakeep environment variables with NEXTAUTH_URL set to the device address](/images/app-store/karakeep-nexauth-env.webp)

Then **save** and restart the app.

## Optional: Enable AI auto-tagging

Karakeep can automatically tag and summarize your saved links using AI. Open **Manager** and enter your OpenAI API key in **Advanced**.

![Karakeep settings with the Advanced (Show more) section for the AI API key](/images/app-store/karakeep-advanced-config.webp)

![Karakeep variables with the OPENAI_API_KEY entry filled in and highlighted](/images/app-store/karakeep-openai-api-key.webp)

**Now** your Karakeep can handle automatic tagging and summarization — all you need to do is paste a link, write a note, or upload an image.

![Karakeep overview page with auto-generated summary and tags on a saved link](/images/app-store/karakeep-auto-tag-result.webp)

### Use a Local LLM Instead

Sending your links to a cloud API is optional. Karakeep supports OpenAI-compatible providers and Ollama, so you can keep tagging and summarization entirely on your own device.

Set these variables in the Karakeep container instead of a cloud API key:

```text
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://<your-zimaos-ip>:11434/v1
INFERENCE_TEXT_MODEL=gemma3
INFERENCE_IMAGE_MODEL=llava
```

Two things to get right:

- The address must be reachable from inside the Karakeep container — use your ZimaOS IP, not `localhost`.
- Pull the models on the Ollama server first, or tagging will fail when the first link arrives.

To run the LLM server itself on ZimaOS, see [Local LLM Inference](../local-llm-inference "Deploy a private AI server on your ZimaOS NAS in five steps"). For other providers and advanced model settings, see the official [different AI providers](https://docs.karakeep.app/configuration/different-ai-providers "Karakeep guide to configuring different AI providers") guide.

## Need Help?

If you run into any issues while installing or using Karakeep on ZimaOS, join the [ZimaSpace Discord community](https://discord.gg/f9nzbmpMtU "Join the ZimaSpace Discord community for ZimaOS support"). Our team and community members will be happy to help.
