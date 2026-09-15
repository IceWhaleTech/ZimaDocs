---
title: NVIDIA RTX PRO 2000 本地大模型推理性能测试
seo_title: "NVIDIA RTX PRO 2000 在 ZimaOS 上的大模型推理性能：实测 65–70 t/s"
description: "NVIDIA RTX PRO 2000 Blackwell 16 GB 在运行 ZimaOS 的 ZimaCube 上的实测基准：Qwen3.6-35B-A3B MoE 的 llama.cpp 解码速度、上下文上限、功耗，以及推荐配置。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

本文记录 NVIDIA RTX PRO 2000 Blackwell 16 GB——ZimaCube Creator 的官方显卡选项——在 ZimaOS 1.7.1 上运行本地大模型推理的实测基准。内容涵盖合成基准、真实对话生成、长上下文验证和功耗，最后给出推荐的模型和部署方案。

五步部署流程见 [本地大模型推理](../zimaos/local-llm-inference "在 ZimaOS NAS 上部署经过验证的 35B MoE 私有 AI 服务器")。物理安装见 [GPU 扩展](./gpu-expansion "为你的 ZimaCube 添加用于 AI 和转码的显卡")。

## TL;DR

| 结论 | 结果 |
|---|---|
| 能否跑本地大模型 | 能——CUDA 13.0 / 计算能力 12.0 完全支持 |
| 最佳模型 | **Qwen3.6-35B-A3B（IQ3_XXS 量化）** |
| 解码速度 | **约 65–70 tokens/s** |
| 长上下文 | 64K 稳定，128K 可用 |
| 对比 27B 稠密模型 | 只有 18–23 t/s——MoE 模型快约 3.5 倍 |
| 真正的瓶颈 | 16 GB 显存，不是算力也不是功耗 |

一句话总结：RTX PRO 2000 是 16 GB 级显卡里最适合本地 agent 推理的之一——70 W、Blackwell 架构，搭配 MoE 模型时解码速度比同体量稠密模型快数倍。

## 测试环境

### 硬件

| 组件 | 规格 |
|---|---|
| 设备 | ZimaCube NAS（第一代入门款，ZimaOS 官方硬件） |
| 操作系统 | ZimaOS 1.7.1 |
| CPU | Intel N100（4 核，0.7–3.4 GHz） |
| 内存 | 16 GB（约 15 GB 可用）+ 5.2 GB swap |
| GPU | **NVIDIA RTX PRO 2000 Blackwell** |
| 显存 | 16 GB GDDR7 |
| CUDA | 13.0，驱动 580.105.08——插入显卡后由 ZimaOS 1.7.1 自动激活 |
| 计算能力 | 12.0（sm_120，Blackwell） |
| 功耗上限 | 70 W |

这是一台 GPU 强、CPU 弱的设备。N100 是低功耗效率核，所以每个模型都必须完整装进显存。推理一旦溢出到 CPU，速度就会崩盘。

测试设备是第一代入门款 ZimaCube。在 ZimaCube 2 上，更强的 CPU 只会改善结果——GPU 侧的数据不变，因为显卡完全相同。

### 软件

| 软件 | 版本 / 说明 |
|---|---|
| 推理引擎 | llama.cpp（从源码构建，使用 CUDA sm_120 后端；构建请用 CUDA 12.8——13.1 有已知的 MMQ 内核问题） |
| 服务器 | llama-server（OpenAI 兼容 API） |
| 模型格式 | GGUF（含 Unsloth Dynamic 量化） |

RTX PRO 2000 是 Blackwell 卡（sm_120），需要较新的 CUDA 运行时和推理后端——较旧的预编译 llama.cpp 发行版可能不认这张卡。

## 测试方法

1. **合成基准**：`llama-bench` 全 GPU offload（`-ngl 99`），测试 prompt 处理（512/2048 tokens）和 token 生成（128/512 tokens）。
2. **真实生成**：`llama-cli`，`--temp 0.7`，单轮模式，固定随机种子，真实中文问答。
3. **多轮与长上下文**：通过 OpenAI 兼容的 llama-server API 做多轮对话和「大海捞针」检索。
4. **上下文容量**：以 64K / 128K 上下文加载模型并测量显存占用。

### 参测模型

| 模型 | 架构 | 总参数 | 激活参数 | 量化 | 大小 |
|---|---|---|---|---|---|
| Qwen3.8-27B | 稠密 | 27.3B | 27.3B（全部激活） | Q3_K_XL / Q2_K_XL / IQ2_XXS | 8.4–12.5 GiB |
| Qwen3.6-35B-A3B | 混合 MoE | 34.7B | 约 3B | IQ3_XXS / Q2_K_XL | 11.4–12.3 GiB |

Qwen3.6-35B-A3B 是混合架构：10 层全注意力 + 30 层 SSM（Mamba）+ MoE，256 个专家每个 token 激活 8 个。它面向 agent 和编码场景。

## 基准结果

### 合成基准（llama-bench，全 GPU offload，tokens/s）

| 模型（量化） | 大小 | 预填充 pp2048 | 解码 tg512 |
|---|---|---|---|
| Qwen3.8-27B Q3_K_XL | 12.51 GiB | 670 | 17.9 |
| Qwen3.8-27B Q2_K_XL | 9.93 GiB | 670 | 20.7 |
| Qwen3.8-27B IQ2_XXS | 8.38 GiB | 570 | 23.1 |
| **Qwen3.6-35B-A3B IQ3_XXS** | 12.29 GiB | 1490 | **68.1** |
| **Qwen3.6-35B-A3B Q2_K_XL** | 11.44 GiB | 1564 | **74.4** |

### 真实生成（llama-cli，--temp 0.7，中文问答）

| 量化 | 生成速度 |
|---|---|
| IQ3_XXS | **64.7 t/s** |
| Q2_K_XL | **70.3 t/s** |

### 多轮与长上下文验证

| 测试 | 结果 |
|---|---|
| 多轮上下文保持 | 通过——第 2 轮正确回忆起更早的信息 |
| 大海捞针检索 | 通过——成功检索到更早的内容 |
| 重复调用稳定性 | 通过——稳定在约 63 t/s |

### Agent 工作负载适用性

Qwen3.6-35B-A3B 的混合架构面向 agent 和编码场景，实测数据也印证了这一点：多轮上下文保持和大海捞针检索都通过，重复调用稳定在约 63 t/s。对 DeepSeek Harness 或 Codex 风格的编码 agent 来说，这是流畅的交互速度，35B 总参数带来的推理和编码能力是小稠密模型所没有的。

16 GB 卡上的约束是上下文。Agent 对话会不断增长，64K 舒适，128K 紧凑。如果你的 agent 工作负载需要模型原生的 256K 窗口，20 GB 的 [RTX 4000 SFF Ada](./rtx-4000-ada-on-zimaos "NVIDIA RTX 4000 SFF Ada 在 ZimaOS 上的完整基准测试报告") 用 KV q4 量化可以做到。

## 为什么 MoE 模型比 27B 稠密模型快 3.5 倍

这是本次测试最有价值的发现。

- **稠密模型**每生成一个 token 都要读取全部 27B 权重，因此解码速度被内存带宽封顶。实测有效解码带宽约 224 GiB/s，27B 模型只能到 18–23 t/s。
- **MoE 模型**每个 token 只激活 256 个专家中的 8 个（约 3B 参数），读取的权重少一个数量级，绕开了带宽瓶颈。这就是它能到 65–70 t/s 的原因。

在显存受限的设备上，MoE 是同时获得参数容量和解码速度的最佳方式。

## 显存是唯一硬上限

- 35B-A3B 的 IQ3_XXS 量化只有 12.3 GiB，16 GB 里还剩约 2.4 GB 余量。
- 更高的量化（Q4 约 19–20 GB）或更大的模型会超出 16 GB。一旦 CPU offload 介入，N100 会把速度拖到不可用的程度。
- 「能装进 16 GB 的最强 MoE」就是这台设备的性能天花板。

## 功耗

满生成负载下实测，显卡功耗约 55–70 W（贴着 70 W 上限但不超过），空闲 6–12 W。对一台 24/7 运行的 NAS 来说，能效非常出色。

## 上下文容量

| 上下文 | 显存占用 | 余量 | 结论 |
|---|---|---|---|
| 64K | 13.5 GB | 2.4 GB | 舒适，推荐 |
| 128K | 14.8 GB | 1.1 GB | 可用，紧凑 |
| ~150K | ~15.6 GB | ~0.3 GB | 理论极限 |
| 256K（模型原生） | >16 GB | — | 装不下 |

上下文开销极小（每 1K tokens 约 22 MiB），因为只有 10 层注意力需要 KV 缓存；SSM 层保持恒定状态。

## 结论与建议

### 最佳模型

**推荐：Qwen3.6-35B-A3B（IQ3_XXS 量化，3.06 bpw）**

1. 它是能完整装进 16 GB 显存的最大、最强模型。
2. 解码约 65 t/s——27B 稠密模型的 3.5 倍——足以支撑流畅的 agent 体验。
3. 35B 总参数带来的知识、推理和编码能力远超同体量的任何稠密模型。
4. IQ3_XXS 是质量与速度的甜点。Q2_K_XL 快约 8%，但 2-bit 的质量损失更明显。

在 16 GB 卡上，这就是这个档位的天花板。严肃的编码和知识库负载，下一步是 122B / Flash 档——它装不进 16 GB，属于更大的卡。

### 使用注意事项

1. **采样温度 0.6–0.7，永远不要贪心（temp=0）。** 贪婪采样会让这个推理模型退化成无限重复。
2. **它是推理模型。** 回答前会输出思维链，思考 token 计入上限。把 `max_tokens` 保持在 2048 或更高，否则回答会在思考中途被截断。
3. **响应字段。** 最终答案在 `content`；推理轨迹在 `reasoning_content`（与 DeepSeek 相同的扩展字段）。

### 适用场景

- 本地 agent：编码、任务编排、工具调用
- NAS 上的私有 AI 助手和 RAG 知识库问答
- 低功耗、常开的本地推理
- 不适合：超过 128K 的上下文，或更高量化的大模型

## 部署（OpenAI 兼容服务器）

使用与部署指南相同的容器化服务器——无需编译，镜像内置最高 sm_120 的 CUDA 内核：

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

服务器暴露 OpenAI 兼容 API，主流 agent 框架（OpenAI SDK 等）可以直接调用：

```python
from openai import OpenAI
client = OpenAI(base_url="http://<zima-cube-ip>:8080/v1", api_key="sk-none")
resp = client.chat.completions.create(
    model="/models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf",
    messages=[{"role": "user", "content": "Hello"}],
    temperature=0.7,
    max_tokens=2048,          # 保持大值，否则思考会吃掉上限
)
print(resp.choices[0].message.content)             # 最终答案
print(resp.choices[0].message.reasoning_content)   # 推理轨迹（可选）
```

## 附录：已验证的 GPU 档案

```text
NVIDIA RTX PRO 2000 Blackwell
Compute Capability: 12.0 (sm_120)
VRAM: 16311 MiB (15848 MiB usable by CUDA)
Driver: 580.105.08 / CUDA 13.0
Power limit: 70 W
```
