---
title: 在 ZimaOS 上部署本地大模型推理
seo_title: "在你的 ZimaOS NAS 上运行私有 AI：经实测的 35B MoE 方案"
description: "把你的 ZimaCube 变成私有 AI 服务器——让 AI agent 代劳部署，或按实测过的手动步骤用 Qwen3.6-35B-A3B 和 llama.cpp 自己搭建。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

把你的 ZimaOS NAS 变成私有 AI 服务器。没有云端，没有 API 账单，一切都在你自己的硬盘上。

**它是引擎，不是聊天机器人。** 本指南部署的是一个 OpenAI 兼容的 API 服务器——`http://<your-nas-ip>:8080/v1` 这个端点并不是聊天窗口。聊天机器人只是它的一个客户端。更大的价值在于：局域网里的每个 AI 应用和 agent 都可以接入这同一个端点。把 [DeepSeek Harness](./app-store/deepseek-harness-setup "从 ZimaOS 应用商店安装 DeepSeek Harness 并创建你的第一个工作区") 或任何编码 agent 指向它，agent 本身——而不只是你的聊天——就完全在你自己的硬件上本地运行。

**性能是实测的，不是纸面的。** 一台装有 RTX PRO 2000 显卡的 ZimaCube 用 35B 混合专家模型可以达到 **65–70 tokens/s** 的回答速度——回复比你的阅读速度还快。浓缩一周的会议纪要、跨你自己的文档回答问题、响应智能家居 agent 的请求：你还没读完自己的问题，回复已经流出来了。干活的显卡功耗只有 70 W——桌面游戏主机的零头。在这个速度下，大多数日常 agent 工作——以及背后的个人数据——可以完全留在你自己的硬件上。

## 开始之前

- 一台有闲置 PCIe 插槽并装有 **NVIDIA GPU** 的 ZimaOS 设备——计算能力 8.0 或更高，显存 16 GB 或以上。以下方案在装有 RTX PRO 2000 的 ZimaCube 上验证过。
- **ZimaOS 1.7 或更高版本**，插入显卡后会自动激活 NVIDIA 驱动。
- 验证显卡：打开终端运行 `nvidia-smi`。能看到显卡，就说明准备好了。

> 如果显卡没有被识别，参见 [GPU 扩展](../hardware/gpu-expansion "为你的 ZimaCube 添加用于 AI 和转码的显卡") 了解物理安装。

## 路径 A：让 AI Agent 代劳

如果你的 ZimaOS 上装有 DeepSeek Harness（或其他编码 agent），整个搭建过程就变成一场对话。

1. **从应用商店安装 DeepSeek Harness**——参见 [部署 DeepSeek Harness](./app-store/deepseek-harness-setup "从 ZimaOS 应用商店安装 DeepSeek Harness 并创建你的第一个工作区")。

2. **给 agent 它需要的权限。**

   - 文件夹授权让它能在你的硬盘上工作。
   - Docker socket 授权允许系统级的容器管理。

   两者在 DeepSeek Harness 指南的使用说明里都有覆盖。

   这个任务只要求 agent 安装和配置软件——你的数据不参与其中。搭建期间授予 socket 权限；如果介意，完成后可以撤销。

3. **开始对话，把已知信息交给它。** 把下面这段粘贴进对话，然后持续沟通，直到 agent 报告成功：

   > 在这台 ZimaOS 主机上搭建一个本地 LLM 服务器。以下是你需要知道的全部信息：
   >
   > - **模型：** Qwen3.6-35B-A3B，GGUF 格式，IQ3_XXS 量化。用 `hf` CLI 从 Hugging Face 仓库 `unsloth/Qwen3.6-35B-A3B-GGUF` 下载 `Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf`（约 12.3 GB）。
   > - **引擎：** 用容器镜像 `ghcr.io/ggml-org/llama.cpp:server-cuda` 运行 llama.cpp server。无需编译任何东西。
   > - **GPU：** 把所有层都放在 GPU 上（`--n-gpu-layers 99`）。如果模型在这台 NAS 级机器上回落到 CPU，速度会崩溃。
   > - **设置：** 16 GB 显卡上 128K 上下文，开启 flash attention，采样温度 0.7。永远不要把温度设为 0——贪婪采样会让这个模型无限重复。
   > - **验证：** OpenAI 兼容端点必须在 `http://<host-ip>:8080/v1` 上应答。发送一个简短的 chat completion 确认，然后报告容器名称和你所做操作的摘要。
   >
   > 如果哪里失败了，说明你尝试了什么、报错内容是什么。在改动任何系统级设置之前先问我。

4. **在浏览器里验证。** 打开 `http://<your-nas-ip>:8080/v1/models`——能看到 JSON 模型列表就说明服务器在运行。

   如果出了任何问题，把下文「遇到问题时」一节的笔记发给 agent，然后继续对话。

**追求完全私密的最后一步：** 在 agent 的模型设置里，把模型提供商切换到你的新本地端点。从此，agent 就在你自己的模型、你自己的硬件上运行——整个闭环都在家里。

## 路径 B：手动搭建

五个步骤，全程终端操作。

### 第 1 步：安装 GPU

打开机箱，把显卡插进 PCIe 插槽，完成——这块卡不需要供电线。

完整流程：[GPU 扩展](../hardware/gpu-expansion "为你的 ZimaCube 添加用于 AI 和转码的显卡")。

### 第 2 步：拉取引擎镜像

容器化的 llama.cpp server 内置了 sm_80–120 的 CUDA 内核，无需任何编译：

```bash
docker pull ghcr.io/ggml-org/llama.cpp:server-cuda
```

### 第 3 步：获取模型

下载 **Qwen3.6-35B-A3B** 的 **IQ3_XXS** 量化 GGUF 文件——约 12.3 GB，选择这个量化是为了让整个模型装进 16 GB 显存，并给 128K 上下文留出空间。

如果你的设备网络受限，参见 [如何手动下载大语言模型](./app-store/llm-manual-download "在 ZimaOS 上为离线使用手动下载 LLM 模型")。

```bash
mkdir -p models/llm
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

### 第 4 步：启动服务器

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

`--n-gpu-layers 99` 把所有层都留在 GPU 上。在 NAS 级 CPU 上这不是可选项——模型一旦溢出到 CPU，速度就会崩溃。

### 第 5 步：打个招呼

服务器在 `http://<your-nas-ip>:8080/v1` 上暴露 OpenAI 兼容 API：

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

整个搭建就是这样。把任何东西指向它——笔记应用的 AI 搜索、照片整理工具、你自己的脚本——它们每一个现在都在你自己的硬件上运行。

## 实测数据

在运行 ZimaOS、装有 RTX PRO 2000 的 ZimaCube 上实测：

| 项目 | 结果 |
|---|---|
| 回答速度 | 65–70 tokens/s——比阅读速度还快。同卡上 27B 稠密模型只有 18–23；MoE 架构是原因 |
| 上下文 | 64K 舒适——一部长篇小说的体量；128K 可用——你自己文档的小型文库；256K 在 16 GB 里装不下 |
| 功耗 | 负载 55–70 W，空闲 6–12 W——比游戏本还低，安静到忘了它在运行。适合 24/7 常开 |
| 稳定性 | 多轮对话和长文档检索均已验证 |

## 遇到问题时

- **服务器一直起不来。** 运行 `nvidia-smi` 确认 GPU 在列。然后用 `docker logs llm-server` 读日志——前几行通常会指出缺失的部分。
- **启动时端口冲突。** 日志显示端口绑定错误：NAS 上另一个应用已经占用了 8080——这是自托管世界里非常常见的端口。挑一个空闲的主机端口，把所有客户端指向它——例如用 `-p 8088:8080` 启动容器，并把 Base URL 设为 `http://<your-nas-ip>:8088/v1`。
- **速度突然下降。** 模型有一部分回落到 CPU 了。保持 `--n-gpu-layers 99`；如果你改用 Ollama，运行 `ollama ps` 查看 GPU/CPU 分配——Ollama 会悄悄做 offload。
- **模型无限重复。** 你把温度设成了 0。这个模型家族需要 **0.6–0.7**；贪婪采样会毁掉它。
- **回答半句就停。** 思考空间用完了。模型先思考再回答，思考 token 也计入上限——把 `max_tokens` 保持在 **2048 或更高**。

## 参考链接

- llama.cpp – [GitHub 仓库](https://github.com/ggml-org/llama.cpp "GitHub 上 llama.cpp 的源码和发布")
- llama.cpp server – [服务器文档](https://github.com/ggml-org/llama.cpp/tree/master/tools/server "llama.cpp HTTP 服务器文档")
