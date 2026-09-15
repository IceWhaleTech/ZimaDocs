---
title: NVIDIA RTX PRO 2000 Local LLM Inference Performance Test
seo_title: "NVIDIA RTX PRO 2000 LLM Inference Performance on ZimaOS: Verified 65–70 t/s"
description: "A hands-on benchmark of the NVIDIA RTX PRO 2000 Blackwell 16 GB on a ZimaCube running ZimaOS: llama.cpp decode speed with Qwen3.6-35B-A3B MoE, context limits, power draw, and the recommended setup."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

This article documents a hands-on benchmark of the NVIDIA RTX PRO 2000 Blackwell 16 GB — the official GPU option of the ZimaCube Creator — running local LLM inference on ZimaOS 1.7.1. It covers synthetic benchmarks, real conversation generation, long-context validation, and power draw, and ends with the recommended model and deployment setup.

For the five-step deployment walkthrough, see [Local LLM Inference](../zimaos/local-llm-inference "Deploy a private AI server on your ZimaOS NAS in five steps"). For the physical installation, see [GPU Expansion](./gpu-expansion "Add a graphics card to your ZimaCube for AI and transcoding").

## TL;DR

| Finding | Result |
|---|---|
| Can it run local LLMs | Yes — CUDA 13.0 / Compute Capability 12.0 fully supported |
| Best model | **Qwen3.6-35B-A3B (IQ3_XXS quantization)** |
| Decode speed | **About 65–70 tokens per second** |
| Long context | 64K stable, 128K workable |
| vs. a 27B dense model | Only 18–23 t/s — the MoE model is about 3.5x faster |
| The real bottleneck | 16 GB of VRAM, not compute or power |

In one sentence: the RTX PRO 2000 is one of the best 16 GB cards for local agent inference — 70 W, Blackwell architecture, and with a MoE model it decodes several times faster than a dense model of a similar footprint.

## Test Environment

### Hardware

| Component | Specification |
|---|---|
| Device | ZimaCube NAS (first-generation entry model, official ZimaOS hardware) |
| OS | ZimaOS 1.7.1 |
| CPU | Intel N100 (4 cores, 0.7–3.4 GHz) |
| Memory | 16 GB (about 15 GB usable) + 5.2 GB swap |
| GPU | **NVIDIA RTX PRO 2000 Blackwell** |
| VRAM | 16 GB GDDR7 |
| CUDA | 13.0, driver 580.105.08 — auto-activated by ZimaOS 1.7.1 on card insertion |
| Compute capability | 12.0 (sm_120, Blackwell) |
| Power limit | 70 W |

This is a GPU-strong, CPU-weak device. The N100 is a low-power efficiency core, so every model must fit entirely in VRAM. The moment inference spills to the CPU, speed collapses.

The tested device is the first-generation entry ZimaCube. On a ZimaCube 2, the stronger CPU can only improve the results — the GPU-side numbers stay the same because the card is identical.

### Software

| Software | Version / notes |
|---|---|
| Inference engine | llama.cpp (built from source with the CUDA sm_120 backend; use CUDA 12.8 for builds — 13.1 has known MMQ kernel issues) |
| Server | llama-server (OpenAI-compatible API) |
| Model format | GGUF (including Unsloth Dynamic quantization) |

The RTX PRO 2000 is a Blackwell card (sm_120). It needs a recent CUDA runtime and inference backend — older prebuilt llama.cpp releases may not recognize the card.

## Methodology

1. **Synthetic benchmark**: `llama-bench` with full GPU offload (`-ngl 99`), testing prompt processing (512/2048 tokens) and token generation (128/512 tokens).
2. **Real generation**: `llama-cli` with `--temp 0.7`, single-turn mode, fixed random seed, real Chinese Q&A.
3. **Multi-turn and long context**: multi-turn conversations and needle-in-a-haystack retrieval through the OpenAI-compatible llama-server API.
4. **Context capacity**: loading the model at 64K / 128K context and measuring VRAM usage.

### Models Under Test

| Model | Architecture | Total params | Active params | Quantization | Size |
|---|---|---|---|---|---|
| Qwen3.8-27B | Dense | 27.3B | 27.3B (all active) | Q3_K_XL / Q2_K_XL / IQ2_XXS | 8.4–12.5 GiB |
| Qwen3.6-35B-A3B | Hybrid MoE | 34.7B | About 3B | IQ3_XXS / Q2_K_XL | 11.4–12.3 GiB |

Qwen3.6-35B-A3B is a hybrid architecture: 10 full-attention layers and 30 SSM (Mamba) + MoE layers, 256 experts with 8 active per token. It targets agent and coding scenarios.

## Benchmark Results

### Synthetic (llama-bench, full GPU offload, tokens/s)

| Model (quant) | Size | Prefill pp2048 | Decode tg512 |
|---|---|---|---|
| Qwen3.8-27B Q3_K_XL | 12.51 GiB | 670 | 17.9 |
| Qwen3.8-27B Q2_K_XL | 9.93 GiB | 670 | 20.7 |
| Qwen3.8-27B IQ2_XXS | 8.38 GiB | 570 | 23.1 |
| **Qwen3.6-35B-A3B IQ3_XXS** | 12.29 GiB | 1490 | **68.1** |
| **Qwen3.6-35B-A3B Q2_K_XL** | 11.44 GiB | 1564 | **74.4** |

### Real Generation (llama-cli, --temp 0.7, Chinese Q&A)

| Quantization | Generation speed |
|---|---|
| IQ3_XXS | **64.7 t/s** |
| Q2_K_XL | **70.3 t/s** |

### Multi-Turn and Long-Context Validation

| Test | Result |
|---|---|
| Multi-turn context retention | Passed — turn 2 correctly recalled earlier information |
| Needle-in-a-haystack retrieval | Passed — retrieved earlier content |
| Repeated-call stability | Passed — stable at about 63 t/s |

### Agent Workload Suitability

The Qwen3.6-35B-A3B hybrid architecture targets agent and coding scenarios, and the measurements confirm it: multi-turn context retention and needle-in-a-haystack retrieval both pass, and repeated calls stay stable at about 63 t/s. For a DeepSeek Harness or Codex-style coding agent, that is a fluid interactive speed, and the 35B total parameters give the model reasoning and coding ability that a small dense model lacks.

The constraint on this 16 GB card is context. Agent conversations grow, and while 64K is comfortable, 128K is tight. If your agent workloads need the model's native 256K window, the 20 GB [RTX 4000 SFF Ada](./rtx-4000-ada-on-zimaos "Full benchmark report of the NVIDIA RTX 4000 SFF Ada on ZimaOS") achieves it with KV q4 quantization.

## Why the MoE Model Is 3.5x Faster Than a Dense 27B

This is the most valuable finding of the test.

- A **dense model** reads all 27B weights for every generated token, so decode speed is capped by memory bandwidth. The measured effective decode bandwidth is about 224 GiB/s, which puts a 27B model at 18–23 t/s.
- The **MoE model** activates only 8 of 256 experts (about 3B parameters) per token, reading an order of magnitude less weight and sidestepping the bandwidth bottleneck. That is how it reaches 65–70 t/s.

On VRAM-limited devices, MoE is the best way to get both parameter capacity and decode speed.

## VRAM Is the Only Hard Limit

- The IQ3_XXS quantization of 35B-A3B is only 12.3 GiB, leaving about 2.4 GB of headroom in 16 GB.
- Higher quantizations (Q4 is about 19–20 GB) or bigger models exceed 16 GB. Once CPU offload kicks in, the N100 drags speed down to unusable levels.
- "The strongest MoE that fits in 16 GB" is this device's performance ceiling.

## Power

Measured at full generation load, the card draws about 55–70 W (at the 70 W limit without exceeding it) and 6–12 W idle. For a NAS that runs 24/7, the efficiency is excellent.

## Context Capacity

| Context | VRAM used | Headroom | Verdict |
|---|---|---|---|
| 64K | 13.5 GB | 2.4 GB | Comfortable, recommended |
| 128K | 14.8 GB | 1.1 GB | Workable, tight |
| ~150K | ~15.6 GB | ~0.3 GB | Theoretical limit |
| 256K (model native) | >16 GB | — | Does not fit |

Context overhead is tiny (about 22 MiB per 1K tokens) because only 10 attention layers need KV cache; the SSM layers keep constant state.

## Conclusion and Recommendations

### Best Model

**Recommended: Qwen3.6-35B-A3B (IQ3_XXS quantization, 3.06 bpw)**

1. It is the largest, strongest model that fits entirely in 16 GB of VRAM.
2. Decode at about 65 t/s — 3.5x a 27B dense model — is enough for a fluid agent experience.
3. The 35B total parameters bring far more knowledge, reasoning, and coding ability than any dense model of the same footprint.
4. IQ3_XXS is the sweet spot between quality and speed. Q2_K_XL is about 8% faster, but the 2-bit quality loss is more noticeable.

On a 16 GB card this is the ceiling of the tier. For serious coding and knowledge-base workloads, the 122B / Flash tier is the next step — it does not fit in 16 GB and belongs to larger cards.

### Usage Notes

1. **Sample at 0.6–0.7, never greedy (temp=0).** Greedy sampling makes this reasoning model degrade into endless repetition.
2. **It is a reasoning model.** It emits a chain of thought before the answer, and thinking tokens count toward the limit. Keep `max_tokens` at 2048 or more, or the answer gets cut off mid-thought.
3. **Response fields.** The final answer is in `content`; the reasoning trace is in `reasoning_content` (the same extension field as DeepSeek).

### Use Cases

- Local agents: coding, task orchestration, tool calling
- Private AI assistant and RAG knowledge-base Q&A on a NAS
- Low-power, always-on local inference
- Not suitable for: contexts beyond 128K, or larger models at high quantization

## Deployment (OpenAI-Compatible Server)

Use the same containerized server as the deployment guide — nothing to compile, the image bundles CUDA kernels up to sm_120:

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

The server exposes an OpenAI-compatible API that mainstream agent frameworks (the OpenAI SDK and others) can call directly:

```python
from openai import OpenAI
client = OpenAI(base_url="http://<zima-cube-ip>:8080/v1", api_key="sk-none")
resp = client.chat.completions.create(
    model="/models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf",
    messages=[{"role": "user", "content": "Hello"}],
    temperature=0.7,
    max_tokens=2048,          # keep it large, or thinking eats the limit
)
print(resp.choices[0].message.content)             # final answer
print(resp.choices[0].message.reasoning_content)   # reasoning trace (optional)
```

## Appendix: Verified GPU Profile

```text
NVIDIA RTX PRO 2000 Blackwell
Compute Capability: 12.0 (sm_120)
VRAM: 16311 MiB (15848 MiB usable by CUDA)
Driver: 580.105.08 / CUDA 13.0
Power limit: 70 W
```
