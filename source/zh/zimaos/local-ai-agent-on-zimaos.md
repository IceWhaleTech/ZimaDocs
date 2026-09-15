---
title: 在 ZimaOS 上运行本地 AI Agent
seo_title: "ZimaOS 本地 AI Agent：让 DeepSeek Harness 接入你的本地大模型服务器"
description: "把 DeepSeek Harness 接入你在 ZimaOS 上的本地大模型服务器，开启你的第一个完全本地任务——数据处理、自动化或智能家居监控，全程不经过云端。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

你的 NAS 上已经跑着两个组件：[DeepSeek Harness](./app-store/deepseek-harness-setup "从 ZimaOS 应用商店安装 DeepSeek Harness 并创建你的第一个工作区")，一个编码 agent；还有一个[本地大模型服务器](./local-llm-inference "在 ZimaOS NAS 上部署经过验证的 35B MoE 私有 AI 服务器")，以 65–70 tokens/s 的速度作答。本指南把两者接起来，并开启你的第一个完全本地任务。

从这一刻起，你的 agent 没有 API 账单、没有速率限制、没有任何数据离开家门。想跑多少任务就跑多少——数据处理、自动化、智能家居监控——在你自己的硬件上 24 小时不间断。

## 开始之前

- 一个正在运行的本地大模型服务器。如果还没有，[在 ZimaOS 上部署本地大模型推理](./local-llm-inference "在 ZimaOS NAS 上部署经过验证的 35B MoE 私有 AI 服务器") 五步就能搭好。
- 已安装 DeepSeek Harness 并创建好工作区——参见 [部署 DeepSeek Harness](./app-store/deepseek-harness-setup "从 ZimaOS 应用商店安装 DeepSeek Harness 并创建你的第一个工作区")。
- NAS 的 IP 地址和服务器端口，通常是 `8080`。

## 把 Agent 接入你的本地服务器

1. 打开 DeepSeek Harness，进入 **Settings > Models**。

2. 添加一个模型提供商：

| 字段 | 值 |
|---|---|
| Base URL | `http://<your-nas-ip>:8080/v1` |
| API key | 任意占位符即可，例如 `sk-none`——服务器不做认证 |

3. 点击 **Fetch available models**。DeepSeek Harness 会查询本地服务器并列出它服务的模型。本地模型出现在列表中，随时可用。

4. 这个模型的行为是实测出来的，不是猜的——完整结论见 [RTX PRO 2000 性能测试](../hardware/rtx-pro-2000-on-zimaos "NVIDIA RTX PRO 2000 在 ZimaOS 上的完整基准测试报告")。使用时有一点最关键：温度在服务器启动时设定（部署指南用的是 0.7——永远不要用 0，贪婪采样会让模型无限重复）。

5. **上下文从 128K 起步。** Agent 对话会不断增长，而这个模型的原生窗口是 256K。在 16 GB 显卡上以 128K 上下文启动服务器（紧凑但可用，实测占用 14.8 GB），或用 20 GB 显卡加 KV q4 跑满 256K——[RTX 4000 SFF Ada](../hardware/rtx-4000-ada-on-zimaos "NVIDIA RTX 4000 SFF Ada 在 ZimaOS 上的完整基准测试报告") 页面有实测验证过的命令。

6. 在聊天对话框里，发送前先选择本地模型。此后每一段对话都跑在你自己的硬件上。发一条简短消息，确认回复到达。想证明它来自你自己的机器，可以在它回答时盯着服务器日志看。

## 开启你的第一个任务

选一个粘贴进会话，让 agent 干活。下面每个 prompt 都只是起点——细节由 agent 规划，你在对话中掌舵。

**处理本地数据。**

> 遍历 NAS 上的 Documents 文件夹，列出里面的内容，按主题给文件分组，并用 Markdown 写一份摘要索引。未经我允许，不要修改或删除任何文件。

**自动化一个重复性杂务。**

> 设置一个每天 23:00 运行的定时任务：检查 Downloads 文件夹，把超过 30 天的文件移入按月份归档的 Archive 文件夹，并写一份简短日志记录移动了什么。

**用智能家居风格的告警盯着你的硬件。**

> 监控这台 NAS 的硬盘温度和剩余空间。如果温度超过 55 °C 或剩余空间低于 10%，写一份健康报告并让它可见，方便我查看。

## 让它 24/7 常驻运行

Agent 跑在 NAS 本身上，所以长任务在你合上笔记本后依然继续。用 ZimaClient 从手机查看进度——同一个 Web UI，随时随地。[DeepSeek Harness 指南](./app-store/deepseek-harness-setup "从 ZimaOS 应用商店安装 DeepSeek Harness 并创建你的第一个工作区") 覆盖了移动端访问，以及 agent 处理文件任务所需的文件夹授权。

## 遇到问题时

- **回复无限重复。** 温度是 0——见上文的说明。
- **速度突然下降。** 模型有一部分回落到 CPU 了。[本地大模型指南](./local-llm-inference "在 ZimaOS NAS 上部署经过验证的 35B MoE 私有 AI 服务器") 里有完整的修复清单。
- **Agent 连不上模型。** 在局域网浏览器里打开 `http://<your-nas-ip>:8080/v1/models`。返回 JSON 列表说明服务器在运行、问题出在 Base URL 字段；报错则说明服务器本身需要重启。

## 参考链接

- DeepSeek Harness – [安装部署指南](./app-store/deepseek-harness-setup "从 ZimaOS 应用商店安装 DeepSeek Harness 并创建你的第一个工作区")
- 本地大模型服务器 – [部署指南](./local-llm-inference "在 ZimaOS NAS 上部署经过验证的 35B MoE 私有 AI 服务器")
