---
title: Local AI Agent on ZimaOS
seo_title: "Local AI Agent on ZimaOS: Run DeepSeek Harness on Your Local LLM Server"
description: "Connect DeepSeek Harness to your local LLM server on ZimaOS and start your first fully local task — data processing, automation, or smart-home monitoring with no cloud involved."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

You have two pieces running on your NAS: [DeepSeek Harness](./app-store/deepseek-harness-setup "Install DeepSeek Harness from the ZimaOS App Store and create your first workspace"), a coding agent, and a [local LLM server](./local-llm-inference "Deploy a private AI server on your ZimaOS NAS with a verified 35B MoE setup") that answers at 65–70 tokens per second. This guide connects them and starts your first fully local task.

From that point on, your agent has no API bill, no rate limits, and no data leaving home. Run as many tasks as you want — data processing, automation, smart-home monitoring — around the clock on your own hardware.

## Before You Start

- A running local LLM server. If you do not have one yet, [Deploy Local LLM Inference on ZimaOS](./local-llm-inference "Deploy a private AI server on your ZimaOS NAS with a verified 35B MoE setup") gets it up in five steps.
- DeepSeek Harness installed and a workspace created — see [Deploy DeepSeek Harness](./app-store/deepseek-harness-setup "Install DeepSeek Harness from the ZimaOS App Store and create your first workspace").
- The IP address of your NAS and the server port, usually `8080`.

## Connect the Agent to Your Local Server

1. Open DeepSeek Harness and go to **Settings > Models**.

2. Add a model provider:

| Field | Value |
|---|---|
| Base URL | `http://<your-nas-ip>:8080/v1` |
| API key | Any placeholder, such as `sk-none` — the server does not authenticate |

3. Click **Fetch available models**. DeepSeek Harness queries the local server and lists the models it serves. The local model appears in the list, ready to use.

4. The model's behavior was measured, not guessed — see the [RTX PRO 2000 Performance Test](../hardware/rtx-pro-2000-on-zimaos "Full benchmark report of the NVIDIA RTX PRO 2000 on ZimaOS") for the full findings. One point matters in use: temperature is set at server launch (the deployment guide uses 0.7 — never 0, greedy sampling makes the model repeat itself forever).

5. **Context starts at 128K.** Agent conversations grow, and this model's native window is 256K. Start the server with a 128K context on a 16 GB card (tight but workable, verified at 14.8 GB), or reach the full 256K with KV q4 on a 20 GB card — the [RTX 4000 SFF Ada](../hardware/rtx-4000-ada-on-zimaos "Full benchmark report of the NVIDIA RTX 4000 SFF Ada on ZimaOS") page has the verified command.

6. In the chat dialog, select the local model before sending. Every conversation from then on runs on your own hardware. Send a short message and confirm the reply arrives. If you want proof it came from your own machine, watch the server logs while it answers.


## Start Your First Task

Pick one, paste it into a session, and let the agent work. Each prompt below is a starting point — the agent plans the details, and you steer in the conversation.

**Process local data.**

> Go through the Documents folder on the NAS, list what is in there, group the files by topic, and write a summary index in Markdown. Do not modify or delete any files without asking me first.


**Automate a recurring chore.**

> Set up a daily job at 23:00 that checks the Downloads folder, moves files older than 30 days into an Archive folder sorted by month, and writes a short log of what it moved.


**Watch your hardware with a smart-home style alert.**

> Monitor this NAS's disk temperature and free space. If the temperature passes 55 °C or free space drops below 10%, write a health report and make it visible so I can review it.


## Keep It Running 24/7

The agent runs on the NAS itself, so long-running tasks keep working while your laptop is closed. Check progress from your phone through ZimaClient — the same Web UI, anywhere. The [DeepSeek Harness guide](./app-store/deepseek-harness-setup "Install DeepSeek Harness from the ZimaOS App Store and create your first workspace") covers the mobile access and the folder authorization the agent needs for file tasks.

## When Something Breaks

- **Replies repeat forever.** The temperature is 0 — see the note above.
- **Speed suddenly dropped.** Part of the model fell back to CPU. The [local LLM guide](./local-llm-inference "Deploy a private AI server on your ZimaOS NAS with a verified 35B MoE setup") has the full fix list.
- **The agent cannot reach the model.** Open `http://<your-nas-ip>:8080/v1/models` in a browser on your LAN. A JSON list means the server is up and the problem is in the Base URL field; an error means the server itself needs a restart.

## Reference Links

- DeepSeek Harness – [installation and deployment guide](./app-store/deepseek-harness-setup "Install DeepSeek Harness from the ZimaOS App Store and create your first workspace")
- Local LLM server – [deployment guide](./local-llm-inference "Deploy a private AI server on your ZimaOS NAS with a verified 35B MoE setup")
