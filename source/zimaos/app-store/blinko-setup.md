---
title: How to Deploy Blinko on ZimaOS
seo_title: "Run Blinko on ZimaOS: Self-Hosted AI Note-Taking on Your Home Server"
description: Install Blinko from the ZimaOS App Store in minutes — capture fleeting thoughts in cards, search them with AI in natural language, and keep every note on your own drives.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

Blinko is natively supported in the ZimaOS App Catalog and can be installed in just 3 mins — ZimaOS is an official sponsor of the Blinko project, and its README ships with a "Run on ZimaOS" button. See the [Blinko App Store page](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.blinko) for the latest app details.

Blinko is an open-source, self-hosted card note-taking app. You know the problem it solves: ideas arrive at random moments — a meeting, a commute, a shower — and by the time you open a heavyweight note app, the thought is gone. Blinko captures those fleeting thoughts the moment they strike, as small cards. And because it lives on your home server, an AI assistant can search your notes by meaning: ask "what did I note about the project last week?" and it finds the answer across everything you have ever written.

The community describes it as "10x better than a phone memo" — a lighter Obsidian with AI retrieval and a self-hosted Notion inbox. All your notes stay on your drives, not in someone else's cloud.

## Prerequisites

- A running ZimaOS home server.

## App Catalog

1. Find Blinko in the ZimaOS App Catalog. Open **App Store** → search for "Blinko".

![App Store search results showing the Blinko app card and its Install button](/images/app-store/blinko-app-store.png)

2. Click **Install** and wait a moment.

![Apps list in the ZimaOS Dashboard with Blinko showing as installed](/images/app-store/blinko-installed.png)

3. **It's ready to use!**

The app runs on port 1111 with its own database, and ZimaOS stores all your notes under the App data location on your drives — they survive app updates and reinstallations.

## First Launch

Open Blinko from the app card. On the first visit, register your account — this first account becomes the administrator.

![First-run screen in Blinko for registering the administrator account](/images/app-store/blinko-first-run.png)

Once inside, open the settings and set the interface language if you want (Simplified Chinese and English are both available), then start writing. Create a card, give it a tag, and save — that's the whole loop.

![Blinko note editor with a new card being written](/images/app-store/blinko-note.png)

## Enable AI Features (Optional)

The following step is **NOT required** — Blinko is a complete note app without AI. But quick-capture notes have a known fate: you write things down and later cannot find them. The AI fixes exactly that — semantic search finds any card by meaning months later, automatic tagging keeps everything organized without effort, and post-capture expansion turns five jotted words into a full note kept as a comment. That turns a pile of cards into a searchable second brain. To enable it:

1. Open **Settings** and find the AI provider section.

2. Pick a provider: OpenAI, Anthropic, Google AI, Grok, or a local Ollama server on your hardware — whichever you already use.

3. Fill in the four model capabilities: chat, embedding, image, and voice. Some providers cover all four with one key; with others, leave a capability empty if you do not need it.

4. Click **Test connection**. When it passes, an AI dialog appears in the corner of the interface and natural-language search starts working.

![AI provider settings in Blinko with the connection test passed](/images/app-store/blinko-ai-settings.png)

> **Privacy tip:** if you want AI help without sending your notes anywhere, point Blinko at a local Ollama server — everything stays on your home server.

## Community Tips

Ways the Blinko community actually uses the app, collected from user stories:

- **Three card types, freely convertible.** Write a fleeting thought as a quick card, a longer piece as a note, and tasks as a to-do list. Any card can be converted into another type later — much easier than moving files between folders.
- **Let AI comment, not rewrite.** When AI expands or polishes a card, the generated text is saved as a comment, not mixed into your original words. Your voice stays yours, and you can review the suggestion later.
- **Daily review.** Use the daily review to revisit the cards you captured today — the community treats it as the bridge from "quick capture" to "real notes".
- **Your data stays yours.** Every card lives as plain text in the app data folder on your drives. Back up that folder and your whole note library is safe.

## Reference Links

For further details, consult the official Blinko documentation:

- Introduction and features – [https://docs.blinko.space/en/introduction](https://docs.blinko.space/en/introduction "Official Blinko introduction and feature documentation")
- Installation and updates – [https://docs.blinko.space/en/install](https://docs.blinko.space/en/install "Official Blinko installation and update guide")
- How to use AI – [https://docs.blinko.space/en/how-to-use/ai/ai-setting](https://docs.blinko.space/en/how-to-use/ai/ai-setting "Official Blinko AI configuration guide")
- Source code – [GitHub repository](https://github.com/blinkospace/blinko "Official Blinko repository on GitHub")
