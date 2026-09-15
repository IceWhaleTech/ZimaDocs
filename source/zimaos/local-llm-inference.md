---
title: Deploy Local LLM Inference on ZimaOS
seo_title: "Run a Private AI on Your ZimaOS NAS: Verified 35B MoE Setup"
description: "Turn your ZimaCube into a private AI server — let an AI agent do the setup or follow the verified manual steps with Qwen3.6-35B-A3B and llama.cpp."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

Turn your ZimaOS NAS into a private AI server. No cloud, no API bill, everything stays on your drives.

**An engine, not a chatbot.** This guide deploys an OpenAI-compatible API server — the endpoint at `http://<your-nas-ip>:8080/v1` is not a chat window. A chatbot is just one client of it. The bigger value: every AI app and agent on your LAN can plug into this one endpoint. Point [DeepSeek Harness](./app-store/deepseek-harness-setup "Install DeepSeek Harness from the ZimaOS App Store and create your first workspace") or any coding agent at it, and the agent itself — not just your chats — runs fully local on your own hardware.

**Performance is measured, not theoretical.** A ZimaCube with an RTX PRO 2000 GPU answers at **65–70 tokens per second** with a 35B mixture-of-experts model — replies stream faster than you can read them. Condense a week of meeting notes, answer questions across your own documents, field your smart-home agent's requests: the reply is already flowing while you are still reading your own question. The card doing the work draws only 70 W — a fraction of a desktop gaming rig. At this speed, most routine agent work — and the personal data behind it — can stay entirely on your own hardware.

## Before You Start

- A ZimaOS device with a spare PCIe slot and an **NVIDIA GPU** — Compute Capability 8.0 or newer, 16 GB VRAM or more. The setup below was verified on a ZimaCube with an RTX PRO 2000.
- **ZimaOS 1.7 or later**, which activates the NVIDIA driver automatically when the card is inserted.
- Verify the card: open a terminal and run `nvidia-smi`. If you see the card, you are ready.

> If the card is not recognized, see [GPU Expansion](../hardware/gpu-expansion "Add a graphics card to your ZimaCube for AI and transcoding") for the physical installation.

## Path A: Let an AI Agent Do It

If you have DeepSeek Harness (or another coding agent) on your ZimaOS, the whole setup becomes a conversation.

1. **Install DeepSeek Harness** from the App Store — see [Deploy DeepSeek Harness](./app-store/deepseek-harness-setup "Install DeepSeek Harness from the ZimaOS App Store and create your first workspace").

2. **Give the agent the permissions it needs.**

   - A folder authorization lets it work on your drives.
   - The Docker socket authorization allows system-level container management.

   Both are covered in the DeepSeek Harness guide's usage notes.

   The task only asks the agent to set up and configure software — your data stays out of it. Grant the socket level for the setup; revoke it after if you prefer.

3. **Start a conversation and share what we know.** Paste the following into the chat, then keep talking until the agent reports success:

   > Set up a local LLM server on this ZimaOS host. Here is everything you need:
   >
   > - **Model:** Qwen3.6-35B-A3B, GGUF format, IQ3_XXS quantization. Download `Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf` (about 12.3 GB) from the Hugging Face repo `unsloth/Qwen3.6-35B-A3B-GGUF` using the `hf` CLI.
   > - **Engine:** run the llama.cpp server from the container image `ghcr.io/ggml-org/llama.cpp:server-cuda`. Nothing needs to be compiled.
   > - **GPU:** keep every layer on the GPU (`--n-gpu-layers 99`). If the model falls back to CPU on this NAS-class machine, speed collapses.
   > - **Settings:** 128K context on a 16 GB card, flash attention on, sampling temperature 0.7. Never set temperature to 0 — greedy sampling makes this model repeat itself forever.
   > - **Verify:** the OpenAI-compatible endpoint must answer at `http://<host-ip>:8080/v1`. Send a short chat completion to confirm, then report the container name and a summary of what you did.
   >
   > If something fails, explain what you tried and what the error says. Ask me before changing anything system-wide.

4. **Verify in your browser.** Open `http://<your-nas-ip>:8080/v1/models` — a JSON list of models means the server is up.

   If anything went wrong, show the agent the notes under [When Something Breaks](#when-something-breaks) and continue the conversation.

**One last step for full privacy:** switch the agent's model provider to your new local endpoint in its model settings. From then on, the agent runs on your own model on your own hardware — the whole loop stays at home.

## Path B: Manual Setup

Five steps, straight through a terminal.

### Step 1: Install the GPU

Open the case, seat the card in the PCIe slot, done — the card needs no power cable.

Full walkthrough: [GPU Expansion](../hardware/gpu-expansion "Add a graphics card to your ZimaCube for AI and transcoding").

### Step 2: Pull the Engine Image

The containerized llama.cpp server bundles CUDA kernels for sm_80–120, so there is nothing to compile:

```bash
docker pull ghcr.io/ggml-org/llama.cpp:server-cuda
```

### Step 3: Get the Model

Download the GGUF file for **Qwen3.6-35B-A3B** in **IQ3_XXS** quantization — about 12.3 GB, chosen so the whole model fits in 16 GB of VRAM with room for a 128K context.

If your device has limited internet, see [How to Manually Download the Large Language Model](./app-store/llm-manual-download "Download LLM models manually for offline use on ZimaOS").

```bash
mkdir -p models/llm
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

### Step 4: Start the Server

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

`--n-gpu-layers 99` keeps every layer on the GPU. On NAS-class CPUs this is not optional — the moment the model spills to CPU, speed collapses.

### Step 5: Say Hello

The server exposes an OpenAI-compatible API at `http://<your-nas-ip>:8080/v1`:

```python
from openai import OpenAI
client = OpenAI(base_url="http://<nas-ip>:8080/v1", api_key="sk-none")
resp = client.chat.completions.create(
    model="Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf",
    messages=[{"role": "user", "content": "Summarize my Documents folder"}],
    temperature=0.7,
    max_tokens=2048,
)
print(resp.choices[0].message.content)
```

That is the whole setup. Point anything at it — a note app's AI search, a photo organizer, your own scripts — and every one of them now runs on your own hardware.

## Verified Numbers

Measured on a ZimaCube running ZimaOS with the RTX PRO 2000:

| What | Result |
|---|---|
| Answer speed | 65–70 tokens/s — faster than you can read. A 27B dense model on the same card manages 18–23; the MoE architecture is why this works |
| Context | 64K comfortable — a long novel's worth of context; 128K workable — a small library of your own documents; 256K does not fit in 16 GB |
| Power | 55–70 W under load, 6–12 W idle — less than a gaming laptop, quiet enough to forget it is on. Fine for 24/7 |
| Stability | Multi-turn conversations and long-document retrieval verified |

## When Something Breaks

- **The server never starts.** Run `nvidia-smi` and confirm the GPU is listed. Then read the logs with `docker logs llm-server` — the first lines usually name the missing piece.
- **Port conflict on startup.** The logs show a port bind error: another app on the NAS already uses 8080, a very common port in the self-hosted world. Pick a free host port and point every client at it — for example, start the container with `-p 8088:8080` and use `http://<your-nas-ip>:8088/v1` as the Base URL.
- **Speed suddenly dropped.** Part of the model fell back to CPU. Keep `--n-gpu-layers 99`, and if you use Ollama instead, run `ollama ps` to see the GPU/CPU split — Ollama offloads silently.
- **The model repeats itself forever.** You set temperature to 0. This model family needs **0.6–0.7**; greedy sampling breaks it.
- **Answers stop mid-sentence.** It ran out of thinking room. The model thinks before answering, and thinking tokens count toward the limit — keep `max_tokens` at **2048 or more**.

## Reference Links

- llama.cpp – [GitHub repository](https://github.com/ggml-org/llama.cpp "llama.cpp source code and releases on GitHub")
- llama.cpp server – [server documentation](https://github.com/ggml-org/llama.cpp/tree/master/tools/server "llama.cpp HTTP server documentation")
