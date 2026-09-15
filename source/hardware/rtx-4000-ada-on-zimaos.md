---
title: NVIDIA RTX 4000 SFF Ada Local LLM Inference Performance Test
seo_title: "NVIDIA RTX 4000 SFF Ada LLM Inference on ZimaOS: 256K Context at 74.5 t/s"
description: "A hands-on benchmark of the NVIDIA RTX 4000 SFF Ada 20 GB on a ZimaCube running ZimaOS: containerized llama.cpp with Qwen3.6-35B-A3B, 256K context memory accounting, MTP speculative decoding, power draw, and the recommended setup."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

This article documents a hands-on benchmark of the NVIDIA RTX 4000 SFF Ada Generation 20 GB — a 70 W card with no external power connector that fits the ZimaCube — running local LLM inference on ZimaOS 1.7.1 through a containerized llama.cpp server. The 20 GB of VRAM is the key difference from the 16 GB [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Full benchmark report of the NVIDIA RTX PRO 2000 on ZimaOS"): it unlocks the model's native 256K context window.

For the five-step deployment walkthrough, see [Local LLM Inference](../zimaos/local-llm-inference "Deploy a private AI server on your ZimaOS NAS in five steps").

## TL;DR

| Finding | Result |
|---|---|
| Deployment | Containerized — `ghcr.io/ggml-org/llama.cpp:server-cuda`, no local compile |
| Best model | **Qwen3.6-35B-A3B, unsloth UD-IQ3_XXS (13.21 GB)** |
| Decode speed | **74.5 t/s** (Q3_K_S reaches 83.3 t/s but costs 2.3 GB more) |
| Context | **256K native context achieved** with KV q4 quantization |
| MTP speculative decoding | Tested and abandoned — acceptance 62–72% but decode gain is small and unstable |
| Power | 69.8 W at the 70 W wall, 83 °C under full load |

In one sentence: with 20 GB of VRAM, the RTX 4000 SFF Ada runs the same 35B MoE model as the 16 GB tier but with the full 256K context window — the recommended setup fits in 14.5 GB with room to spare.

## Test Environment

| Component | Specification |
|---|---|
| GPU | NVIDIA RTX 4000 SFF Ada Generation, Compute Capability 8.9, 20475 MiB |
| Device | ZimaCube (compatible PCIe slot, 70 W no external power) |
| OS | ZimaOS 1.7.1 — driver 580.105.08 auto-activated on card insertion |
| Runtime | Docker + nvidia-container-toolkit, `--gpus all` verified |
| Engine | `ghcr.io/ggml-org/llama.cpp:server-cuda` (4.3 GB image, CUDA sm_80–120 kernels bundled, no local build) |
| Model format | GGUF |

Unless noted otherwise, benchmarks use llama-bench with `-p 512 -n 256 -r 3` (prompt 512 tokens, generate 256 tokens, mean of 3 runs).

## Benchmark Results

### Quantization Comparison (llama-bench, 512/256)

The quantization source decides whether the model keeps its **MTP (next-token prediction) layer**: the `prithivMLmods/...-MTP-GGUF` quants keep MTP, while the `unsloth/...-GGUF` UD quants strip it (loading reports `model doesn't contain MTP layers`).

| Quantization | Size | MTP | Decode t/s | Prefill t/s | Notes |
|---|---|---|---|---|---|
| Q3_K_S (standard K-quant) | 15.55 GB | Yes | **83.3** | 1692.6 | Best CUDA kernel fit |
| **IQ3_XXS (unsloth UD)** | **13.21 GB** | No | **74.5** | **1771.2** | 10.6% slower decode, saves 2.3 GB |

The 20 GB card should take **IQ3_XXS**: it leaves room for 256K context with KV q4. Q3_K_S at 15.55 GB cannot even load on a 16 GB card.

The model choice itself is the same as on the 16 GB tier: Qwen3.6-35B-A3B is the strongest model that fits this class of card, and its hybrid MoE architecture is built for agent and coding scenarios — the full bandwidth analysis is on the [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Full benchmark report of the NVIDIA RTX PRO 2000 on ZimaOS") page. For serious coding and knowledge-base workloads, the 122B / Flash tier is the next step and requires larger cards.

### Optimization Switches A/B (llama-bench, 512/256, mean of 3 runs)

| Configuration | Prefill | Decode |
|---|---|---|
| Baseline (no optimizations) | 1713.3 | 83.7 |
| + flash-attn | 1295.6 (−24%) | 84.2 |
| + KV q8 | 1692.6 | 83.3 |
| + ubatch 2048 | **2312.9 (+36%)** | — |

### Flash-Attention and Long Context

| Prompt | Prefill with fa=on |
|---|---|
| 4096 | 1691.7 |
| 8192 | 1635.1 |
| 16384 | 1580.8 |

With fa=off, even 4096 tokens fail with `failed to create context`. Flash attention is a hard requirement for long contexts with this model.

### 256K Context Memory Accounting

| Configuration | Result | VRAM |
|---|---|---|
| KV f16 + 256K | Out of memory | >20 GB |
| KV q8 + 256K (no MTP) | Works | ~18.35 GB (Q3_K_S) / 16186 MiB (IQ3_XXS) |
| KV q4 + 256K (no MTP) | Works | **14906 MiB (IQ3_XXS)** |
| KV q4 + 256K + MTP | Works (Q3_K_S) | 18894 MiB |

### MTP Speculative Decoding

| Measurement | Result |
|---|---|
| Real acceptance rate (server logs) | **62–72%** |
| Decode gain, natural short replies | +3.9% |
| Decode gain, fixed 256 tokens, temp=0.8 | +26.1% |
| Decode gain, greedy temp=0 | −10.1% |

MTP is rejected for the 20 GB tier: acceptance is high, but decode is bandwidth-locked — the MoE model must read about 3B active experts per token regardless. The gain is small and unstable, so the recommendation is to skip MTP.

### Agent Workload: DeepSeek Harness at Long Context

Measured with a real DeepSeek Harness agent session as the workload:

| Total context | Decode t/s |
|---|---|
| 76K | 39.2 |
| 101K | 33.0 |

Decode slows as context grows (larger KV reads plus more attention). This is the inherent cost of long context, not a fault — no overflow, no truncation. Even at ~100K context, ~33 t/s is still fluid for a streaming agent. For DeepSeek Harness and Codex-style coding agents, this 256K window is the reason to pick this card over the 16 GB tier.

### Power and Temperature (full load)

| Item | Value |
|---|---|
| Power draw | 69.8 W (at the 70 W limit) |
| Temperature | 83 °C (normal; throttling threshold is ~90 °C+) |
| Utilization | 96–100% |
| Power-limit adjustability | Not adjustable (`-pl` rejected, exit 4) |

## Why MTP Does Not Help Here

On the 16 GB [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Full benchmark report of the NVIDIA RTX PRO 2000 on ZimaOS"), decode is capped by memory bandwidth at about 65–70 t/s. The 4000 SFF Ada has more bandwidth (320 GB/s), which lifts decode to 74–83 t/s — but the same MoE bandwidth logic still applies: every token must read the ~3B active experts. MTP adds a draft model on top, and with 62–72% acceptance the real gain is a few percent on natural text, negative under greedy sampling. The memory is better spent on KV q4 and the 256K window.

## Recommended Configuration (20 GB Tier)

| Item | Value |
|---|---|
| Quantization | Qwen3.6-35B-A3B **UD-IQ3_XXS** (13.21 GB) |
| Flash attention | On |
| KV cache | q4_0 |
| Context | 256K |
| ubatch | 2048 |
| MTP | Skip |
| VRAM | **14906 MiB (14.56 GB, ~5.5 GB headroom)** |

Start the server in one command:

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 262144 --n-gpu-layers 999 \
  -fa on --cache-type-k q4_0 --cache-type-v q4_0
```

The service exposes an OpenAI-compatible endpoint at `http://<host-ip>:8080/v1` (API key is a placeholder, the server does not authenticate). Any OpenAI-format client or agent can connect directly.

## Tier Comparison

| Tier | Combination | VRAM |
|---|---|---|
| 20 GB | IQ3_XXS + 256K + KV q4 | 14.5 GB |
| 20 GB | Q3_K_S + 256K + KV q4 + MTP | 18.45 GB (tight) |
| 16 GB | IQ3_XXS + 128K + KV q4 | ~14 GB (Q3_K_S OOMs on load) |

## Limitations

1. MTP data points and long-context decay are single samples; variance was not strictly evaluated. The optimization matrix (A/B table) is a mean of 3 runs.
2. Only the 20 GB single-card tier was verified on hardware. The 16/24/32 GB tiers follow the theoretical compatibility matrix and are not covered by these measurements.
3. NVFP4 (Blackwell-only), EAGLE, and power-limit tuning are not available on this card and were not included.
