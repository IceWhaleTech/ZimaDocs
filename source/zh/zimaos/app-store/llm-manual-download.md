---
title: 如何手动下载大型语言模型
seo_title: "在 ZimaOS 上手动下载 LLM 模型，实现离线 AI"
description: "在 PC 上下载 LLM 模型，再通过 USB 或局域网传到 ZimaOS NAS——网络受限设备的离线安装路线。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；若留空，将使用正文首段作为摘要。
---

## 概述

[本地大模型推理](../local-llm-inference "在 ZimaOS NAS 上部署经过验证的 35B MoE 私有 AI 服务器")教程直接从 Hugging Face 拉取模型——NAS 网络顺畅时这是最快的方式。本页介绍离线路线：在 PC 上下载模型，再通过 USB 或局域网传到 NAS。

以下步骤使用与主教程相同的模型——`Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf`，约 12.3 GB——以及相同的目标文件夹。这套「下载 + 传输」流程适用于任何 GGUF 模型。

## 开始之前

- 一台能上网的 PC
- PC 和 NAS 上各有约 13 GB 可用空间
- 一个 USB 存储设备，或局域网内可访问的 NAS

## 第一步：在 PC 上下载模型

Hugging Face CLI 最简单，且支持断点续传：

```bash
pip install -U huggingface_hub
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

也可以在浏览器中从[模型页面](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Hugging Face 上的 Qwen3.6-35B-A3B GGUF 模型页面")直接下载。

## 第二步：把模型传到 NAS

**USB 方式：**把 `models/llm` 文件夹复制到 U 盘，插入 NAS，然后在 ZimaOS Files 中把文件夹移动到 NAS 的 `models/llm` 目录（不存在则先创建）。

**局域网方式：**在 PC 上用 `scp` 推送文件。先在 NAS 上创建目标文件夹：

```bash
ssh <用户名>@<NAS-IP> mkdir -p models/llm
scp models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf <用户名>@<NAS-IP>:models/llm/
```

## 第三步：校验文件

大文件下载可能静默损坏。在 NAS 上检查文件大小和校验和：

```bash
ls -lh models/llm
sha256sum models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf
```

与[模型页面](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Hugging Face 上的 Qwen3.6-35B-A3B GGUF 模型页面")上的文件信息比对——文件应约为 12.3 GB。

## 第四步：继续部署

模型现在位于 `models/llm`——正是[本地大模型推理](../local-llm-inference "在 ZimaOS NAS 上部署经过验证的 35B MoE 私有 AI 服务器")教程所需的路径。跳过教程中的下载步骤，直接继续启动服务器即可。

## 参考链接

- Hugging Face – [huggingface_hub CLI 文档](https://huggingface.co/docs/huggingface_hub "huggingface_hub CLI 官方文档")
- unsloth – [Qwen3.6-35B-A3B-GGUF 模型卡](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Hugging Face 上的 Qwen3.6-35B-A3B GGUF 模型页面")
