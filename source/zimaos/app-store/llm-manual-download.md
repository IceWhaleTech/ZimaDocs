---
title: How to Manually Download the Large Language Model
seo_title: "Download LLM Models Manually on ZimaOS for Offline AI"
description: "Download LLM models on a PC and move them to your ZimaOS NAS over USB or LAN — the offline route for devices with limited internet."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

The [Local LLM Inference](../local-llm-inference "Run a private AI on your ZimaOS NAS with a verified 35B MoE setup") guide pulls the model straight from Hugging Face — the fastest route when your NAS has a good connection. This page covers the offline route: download the model on a PC, then move it to the NAS over USB or your LAN.

The steps below use the same model as the main guide — `Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf`, about 12.3 GB — and the same destination folder. The download-and-transfer pattern works for any GGUF model.

## Before You Start

- A PC with internet access
- About 13 GB of free space on the PC, and the same on the NAS
- A USB drive, or the NAS reachable over your LAN

## Step 1: Download the Model on Your PC

The Hugging Face CLI is the easiest way — it resumes interrupted downloads:

```bash
pip install -U huggingface_hub
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

You can also download from the [model page](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Qwen3.6-35B-A3B GGUF model page on Hugging Face") in a browser.

## Step 2: Move the Model to the NAS

**Over USB:** copy the `models/llm` folder to the drive, plug it into the NAS, then in ZimaOS Files move the folder to the NAS's `models/llm` directory (create it if it does not exist).

**Over LAN:** push the file from the PC with `scp`. Create the destination folder on the NAS first:

```bash
ssh <username>@<your-nas-ip> mkdir -p models/llm
scp models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf <username>@<your-nas-ip>:models/llm/
```

## Step 3: Verify the File

Large downloads can corrupt silently. On the NAS, check the size and the checksum:

```bash
ls -lh models/llm
sha256sum models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf
```

Compare both against the file card on the [model page](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Qwen3.6-35B-A3B GGUF model page on Hugging Face") — the file should be about 12.3 GB.

## Step 4: Continue the Setup

The model is now in `models/llm` — exactly where the [Local LLM Inference](../local-llm-inference "Run a private AI on your ZimaOS NAS with a verified 35B MoE setup") guide expects it. Skip that guide's download step and continue with starting the server.

## Reference Links

- Hugging Face – [huggingface_hub CLI documentation](https://huggingface.co/docs/huggingface_hub "Official huggingface_hub CLI documentation")
- unsloth – [Qwen3.6-35B-A3B-GGUF model card](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Qwen3.6-35B-A3B GGUF model page on Hugging Face")
