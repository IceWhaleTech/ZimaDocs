---
title: 如何在 ZimaOS 上运行 Karakeep
seo_title: "ZimaOS 上的 Karakeep：带 AI 打标的自托管书签管理器"
description: 从 ZimaOS 应用商店安装 Karakeep——把一切收藏进一个自托管书签库，并在你自己的硬件上实现 AI 自动打标和摘要。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

Karakeep 在 ZimaOS 应用目录中原生支持。查看 [Karakeep 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.karakeep)了解最新的应用详情。

**Karakeep**（前身是 Hoarder）是一款开源的 "Bookmark Everything" 应用，会用 AI 自动为你丢进来的链接、笔记和图片打标并生成摘要。它把自托管作为一等公民来设计，让书签库留在你自己的硬件上，而不是浏览器厂商的云端。

## 准备工作

- 一台运行中的 ZimaOS 设备。
- *（可选）* 一个 OpenAI 兼容的 API Key。如果你想使用其他 AI 提供商（例如本地模型做私密推理），请参阅 [different AI providers](https://docs.karakeep.app/configuration/different-ai-providers "Karakeep 配置不同 AI 提供商的指南") 指南。

## 应用目录

1. 在 ZimaOS 应用目录中找到 Karakeep。打开 **App Store** → 搜索 "Karakeep" → **Install**。

![ZimaOS 应用商店中的 Karakeep 应用页面及安装按钮](/images/app-store/karakeep-app-store.webp)

2. **马上就能用了！**

![安装完成后 ZimaOS 桌面上带 New 标记的 Karakeep 图标](/images/app-store/karakeep-installed-dashboard.webp)

打开 Karakeep 就能立刻开始收藏——在 **NEW ITEM** 框中粘贴链接、写下笔记或拖入图片即可。

![Karakeep 界面中用于粘贴链接、写笔记或上传图片的 New Item 框](/images/app-store/karakeep-ui-new-item.webp)

![Karakeep 首页视图中 New Item 框旁的 Get Started 和 Zima 卡片](/images/app-store/karakeep-ui-content.webp)

## 可选：设置你的域名（NEXTAUTH_URL）

默认情况下，Karakeep 假设自己运行在 `http://localhost:xxxx`。如果你从其他设备——或通过域名——打开它，应用内的链接（包括**退出登录**按钮）仍会指向 `localhost` 而失败。

要修复此问题，把 `NEXTAUTH_URL` 环境变量设置为打开 Karakeep 时使用的确切地址（登录 ZimaOS 所用的 IP 地址）：

![Karakeep 环境变量中设置为设备地址的 NEXTAUTH_URL](/images/app-store/karakeep-nexauth-env.webp)

然后**保存**并重启应用。

## 可选：启用 AI 自动打标

Karakeep 可以用 AI 自动为你收藏的链接打标并生成摘要。打开 **Manager**，在 **Advanced** 中输入你的 OpenAI API key。

![Karakeep 设置中用于填写 AI API key 的 Advanced (Show more) 部分](/images/app-store/karakeep-advanced-config.webp)

![Karakeep 变量中已填写并高亮的 OPENAI_API_KEY 条目](/images/app-store/karakeep-openai-api-key.webp)

**现在**，你的 Karakeep 就能处理自动打标和摘要了——你只需要粘贴链接、写笔记或上传图片。

![Karakeep 概览页面中已收藏链接的自动摘要和标签](/images/app-store/karakeep-auto-tag-result.webp)

### 改用本地大模型

把链接发给云端 API 并非必须。Karakeep 支持 OpenAI 兼容的提供商和 Ollama，因此你可以把打标和摘要完全留在自己的设备上。

在 Karakeep 容器中设置以下变量，代替云端 API key：

```text
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://<your-zimaos-ip>:11434/v1
INFERENCE_TEXT_MODEL=gemma3
INFERENCE_IMAGE_MODEL=llava
```

有两点要注意：

- 地址必须能从 Karakeep 容器内部访问——使用你的 ZimaOS IP，而不是 `localhost`。
- 要事先在 Ollama 服务器上拉取模型，否则第一条链接到达时打标会失败。

要在 ZimaOS 上运行 LLM 服务器本身，参见 [本地大模型推理](../local-llm-inference "五步在你的 ZimaOS NAS 上部署私有 AI 服务器")。其他提供商和高级模型设置，请参阅官方 [different AI providers](https://docs.karakeep.app/configuration/different-ai-providers "Karakeep 配置不同 AI 提供商的指南") 指南。

## 需要帮助？

如果你在 ZimaOS 上安装或使用 Karakeep 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.gg/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
