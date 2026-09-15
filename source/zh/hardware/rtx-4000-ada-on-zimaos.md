---
title: NVIDIA RTX 4000 SFF Ada 本地大模型推理性能测试
seo_title: "NVIDIA RTX 4000 SFF Ada 在 ZimaOS 上的大模型推理：256K 上下文 74.5 t/s"
description: "NVIDIA RTX 4000 SFF Ada 20 GB 在运行 ZimaOS 的 ZimaCube 上的实测基准：容器化 llama.cpp 跑 Qwen3.6-35B-A3B、256K 上下文显存账本、MTP 投机解码、功耗，以及推荐配置。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

本文记录 NVIDIA RTX 4000 SFF Ada Generation 20 GB——一张 70 W、无需外接供电、能装进 ZimaCube 的显卡——在 ZimaOS 1.7.1 上通过容器化 llama.cpp 服务器运行本地大模型推理的实测基准。20 GB 显存是与 16 GB [RTX PRO 2000](./rtx-pro-2000-on-zimaos "NVIDIA RTX PRO 2000 在 ZimaOS 上的完整基准测试报告") 的关键区别：它解锁了模型原生的 256K 上下文窗口。

五步部署流程见 [本地大模型推理](../zimaos/local-llm-inference "在 ZimaOS NAS 上部署经过验证的 35B MoE 私有 AI 服务器")。

## TL;DR

| 结论 | 结果 |
|---|---|
| 部署方式 | 容器化——`ghcr.io/ggml-org/llama.cpp:server-cuda`，无需本地编译 |
| 最佳模型 | **Qwen3.6-35B-A3B，unsloth UD-IQ3_XXS（13.21 GB）** |
| 解码速度 | **74.5 t/s**（Q3_K_S 可达 83.3 t/s，但多占 2.3 GB） |
| 上下文 | **实现 256K 原生上下文**，配合 KV q4 量化 |
| MTP 投机解码 | 测试后弃用——接受率 62–72%，但解码增益小且不稳定 |
| 功耗 | 满负载 69.8 W（贴着 70 W 上限），83 °C |

一句话总结：20 GB 显存的 RTX 4000 SFF Ada 跑的是与 16 GB 档位相同的 35B MoE 模型，但拥有完整 256K 上下文窗口——推荐配置只占 14.5 GB，还有充足余量。

## 测试环境

| 组件 | 规格 |
|---|---|
| GPU | NVIDIA RTX 4000 SFF Ada Generation，计算能力 8.9，20475 MiB |
| 设备 | ZimaCube（兼容 PCIe 插槽，70 W 无需外接供电） |
| 操作系统 | ZimaOS 1.7.1——插入显卡后自动激活驱动 580.105.08 |
| 运行时 | Docker + nvidia-container-toolkit，已验证 `--gpus all` |
| 引擎 | `ghcr.io/ggml-org/llama.cpp:server-cuda`（4.3 GB 镜像，内置 sm_80–120 CUDA 内核，无需本地编译） |
| 模型格式 | GGUF |

除非特别说明，基准测试使用 llama-bench，参数为 `-p 512 -n 256 -r 3`（prompt 512 tokens，生成 256 tokens，3 次取平均）。

## 基准结果

### 量化对比（llama-bench，512/256）

量化来源决定了模型是否保留 **MTP（下一 token 预测）层**：`prithivMLmods/...-MTP-GGUF` 量化保留 MTP，而 `unsloth/...-GGUF` UD 量化会移除它（加载时报告 `model doesn't contain MTP layers`）。

| 量化 | 大小 | MTP | 解码 t/s | 预填充 t/s | 备注 |
|---|---|---|---|---|---|
| Q3_K_S（标准 K-quant） | 15.55 GB | 有 | **83.3** | 1692.6 | CUDA 内核适配最佳 |
| **IQ3_XXS（unsloth UD）** | **13.21 GB** | 无 | **74.5** | **1771.2** | 解码慢 10.6%，省 2.3 GB |

20 GB 卡应该选 **IQ3_XXS**：它给 256K 上下文 + KV q4 留出了空间。Q3_K_S 15.55 GB 在 16 GB 卡上连加载都做不到。

模型选择与 16 GB 档位相同：Qwen3.6-35B-A3B 是这类显卡能装下的最强模型，其混合 MoE 架构专为 agent 和编码场景而生——完整的带宽分析在 [RTX PRO 2000](./rtx-pro-2000-on-zimaos "NVIDIA RTX PRO 2000 在 ZimaOS 上的完整基准测试报告") 页面。严肃的编码和知识库负载，下一步是 122B / Flash 档，需要更大的卡。

### 优化开关 A/B（llama-bench，512/256，3 次取平均）

| 配置 | 预填充 | 解码 |
|---|---|---|
| 基线（无优化） | 1713.3 | 83.7 |
| + flash-attn | 1295.6（−24%） | 84.2 |
| + KV q8 | 1692.6 | 83.3 |
| + ubatch 2048 | **2312.9（+36%）** | — |

### Flash Attention 与长上下文

| Prompt | 预填充（fa=on） |
|---|---|
| 4096 | 1691.7 |
| 8192 | 1635.1 |
| 16384 | 1580.8 |

关闭 fa 时，连 4096 tokens 都会报 `failed to create context`。对这个模型来说，flash attention 是长上下文的硬性要求。

### 256K 上下文显存账本

| 配置 | 结果 | 显存 |
|---|---|---|
| KV f16 + 256K | 显存不足 | >20 GB |
| KV q8 + 256K（无 MTP） | 可用 | ~18.35 GB（Q3_K_S）/ 16186 MiB（IQ3_XXS） |
| KV q4 + 256K（无 MTP） | 可用 | **14906 MiB（IQ3_XXS）** |
| KV q4 + 256K + MTP | 可用（Q3_K_S） | 18894 MiB |

### MTP 投机解码

| 测量项 | 结果 |
|---|---|
| 真实接受率（服务器日志） | **62–72%** |
| 解码增益，自然短回复 | +3.9% |
| 解码增益，固定 256 tokens，temp=0.8 | +26.1% |
| 解码增益，贪心 temp=0 | −10.1% |

20 GB 档位否决 MTP：接受率高，但解码受带宽约束——MoE 模型每个 token 都要读取约 3B 激活专家，这点绕不开。增益小且不稳定，所以建议跳过 MTP。

### Agent 工作负载：长上下文下的 DeepSeek Harness

以真实 DeepSeek Harness agent 会话为负载实测：

| 总上下文 | 解码 t/s |
|---|---|
| 76K | 39.2 |
| 101K | 33.0 |

上下文增长时解码变慢（KV 读取更大，注意力更多）。这是长上下文的固有成本，不是缺陷——没有溢出，没有截断。即使在约 100K 上下文下，约 33 t/s 对流式 agent 依然流畅。对 DeepSeek Harness 和 Codex 风格的编码 agent 来说，这个 256K 窗口就是选这张卡而不是 16 GB 档位的理由。

### 功耗与温度（满负载）

| 项目 | 数值 |
|---|---|
| 功耗 | 69.8 W（贴着 70 W 上限） |
| 温度 | 83 °C（正常；降频阈值约 90 °C+） |
| 利用率 | 96–100% |
| 功耗上限可调性 | 不可调（`-pl` 被拒绝，exit 4） |

## 为什么 MTP 在这里没用

在 16 GB [RTX PRO 2000](./rtx-pro-2000-on-zimaos "NVIDIA RTX PRO 2000 在 ZimaOS 上的完整基准测试报告") 上，解码被内存带宽封顶在约 65–70 t/s。4000 SFF Ada 带宽更大（320 GB/s），解码提升到 74–83 t/s——但同样的 MoE 带宽逻辑依然成立：每个 token 都要读取约 3B 激活专家。MTP 在上面加了一个草稿模型，62–72% 的接受率下，自然文本的实际增益只有几个百分点，贪心采样下甚至是负的。显存花在 KV q4 和 256K 窗口上更值。

## 推荐配置（20 GB 档位）

| 项目 | 值 |
|---|---|
| 量化 | Qwen3.6-35B-A3B **UD-IQ3_XXS**（13.21 GB） |
| Flash attention | 开 |
| KV 缓存 | q4_0 |
| 上下文 | 256K |
| ubatch | 2048 |
| MTP | 跳过 |
| 显存 | **14906 MiB（14.56 GB，约 5.5 GB 余量）** |

一条命令启动服务器：

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 262144 --n-gpu-layers 999 \
  -fa on --cache-type-k q4_0 --cache-type-v q4_0
```

服务在 `http://<host-ip>:8080/v1` 上暴露 OpenAI 兼容端点（API key 是占位符，服务器不做认证）。任何 OpenAI 格式的客户端或 agent 都可以直接连接。

## 档位对比

| 档位 | 组合 | 显存 |
|---|---|---|
| 20 GB | IQ3_XXS + 256K + KV q4 | 14.5 GB |
| 20 GB | Q3_K_S + 256K + KV q4 + MTP | 18.45 GB（紧凑） |
| 16 GB | IQ3_XXS + 128K + KV q4 | 约 14 GB（Q3_K_S 加载即 OOM） |

## 局限性

1. MTP 数据点和长上下文衰减为单次采样；方差未经严格评估。优化矩阵（A/B 表）为 3 次运行的平均值。
2. 仅在 20 GB 单卡档位上做了硬件验证。16/24/32 GB 档位遵循理论兼容矩阵，不在本测试覆盖范围内。
3. NVFP4（仅 Blackwell）、EAGLE 和功耗上限调节在这张卡上不可用，未纳入测试。
