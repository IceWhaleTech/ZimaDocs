---
title: 如何在 ZimaOS 上部署 DeepSeek Harness
seo_title: "在 ZimaOS 上部署 DeepSeek Harness：把家庭服务器变成物理 AI 智能体"
description: 从 ZimaOS 应用商店一键安装 DeepSeek Harness，接入任意 AI 模型提供商，授权宿主机文件夹存放智能体数据，并用手机随时控制它。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

DeepSeek Harness 在 ZimaOS 应用目录中原生支持，整个安装过程只需几分钟。最新应用信息请参阅 [DeepSeek Harness 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.dsh-harness)。

DeepSeek Harness（dsh）是 DeepSeek 开发的开源 AI 智能体——你可以把它想象成一位住在你家庭服务器里的程序员。你在浏览器里和它对话，描述你想要什么，它就会在你的 NAS 上的文件夹里规划并完成工作。完全不需要编程背景：技术部分由智能体替你完成。

安装在 ZimaOS 上之后，它会在你自己的硬件上 24/7 运行。你可以通过 ZimaClient 用手机控制它，你的项目留在自己的硬盘上，而不是云端。

## 准备工作

- 一台正在运行的 ZimaOS 家庭服务器。
- 最低硬件要求：双核 CPU 和至少 2 GB 内存。
- 任意 AI 模型提供商的 API 密钥——DeepSeek、OpenAI（GPT）、Anthropic、OpenRouter 或其他任何第三方提供商都可以，运行在你自有硬件上的本地推理模型也同样支持（将在本系列的下一篇教程中介绍）。在下方「添加模型提供商」一节可以一分钟拿到密钥。

## 应用目录

1. 在 ZimaOS 应用目录中找到 DeepSeek Harness。打开**应用商店** → 搜索 "DeepSeek Harness"。

![应用商店搜索结果，显示 DeepSeek Harness 应用卡片及其安装按钮](/images/app-store/dsh-app-store.webp)

2. 点击**安装**，稍等片刻。

![ZimaOS 仪表盘中的应用列表，DeepSeek Harness 显示为已安装](/images/app-store/dsh-installed.webp)

3. **马上就能用了！**

## 授权数据目录

智能体需要一个位于你硬盘上的文件夹来存放工作区。安装完成后立即执行：

1. 在应用卡片上，点击右上角的选项菜单打开容器设置。

2. 在**卷**（或路径映射）区域添加一条卷规则：将**容器路径**设为 `/root/`，将**宿主机路径**设为你希望用于存放智能体数据的文件夹，例如 `/media/SSD-Storage/DSH`。

![应用设置的卷区域，智能体数据文件夹从容器根目录映射到宿主机文件夹](/images/app-store/dsh-volumes.webp)

3. 重启容器——无需重启 NAS。此后智能体创建的每个工作区都会直接落在你硬盘上的那个文件夹里。

## 创建第一个工作区

从应用卡片打开 DeepSeek Harness——浏览器会显示 Web UI。创建你的第一个工作区；由于上一步的文件夹授权，智能体创建的所有内容都会直接保存在你的硬盘上。

![在 DeepSeek Harness Web UI 中创建第一个工作区](/images/app-store/dsh-workspace.webp)

## 添加模型提供商

前往**设置 > 模型**添加提供商，然后粘贴你的 API 密钥：

- **DeepSeek**——在 [DeepSeek 平台](https://platform.deepseek.com/ "DeepSeek 平台：API 密钥与账单")注册并复制密钥
- **GPT (OpenAI)**——使用你的 OpenAI 密钥
- **OpenRouter**——一把密钥使用多种模型
- 自有硬件上的模型服务器——将在本系列的下一篇教程中介绍

![DeepSeek Harness Web UI 的设置页面，已添加模型提供商并保存 API 密钥](/images/app-store/dsh-models.webp)

## 第一个任务

现在给智能体派第一份真实工作。用大白话描述你想要的应用——下面这个例子要的是一个资源监控应用：实时显示 ZimaOS 主机的 CPU、内存、磁盘和网络情况，并以容器应用的形式运行。

![DeepSeek Harness Web UI 中的一个会话，包含资源监控任务和智能体的计划](/images/app-store/dsh-first-task.webp)

看着它干活：会话里会依次显示计划、代码和结果——你一行代码都不用写。

![智能体在工作区中规划并编写资源监控应用的屏幕录制](/images/app-store/dsh-work-demo.webp)

经过几轮对话，智能体把想法变成了真实的应用——你不需要任何编程知识。最终得到的是一个系统级资源管理器，全天候运行，实时看护 ZimaOS 的磁盘健康、网络安全和容器生命周期。

![制作完成的资源管理器实时显示磁盘、网络和容器指标的屏幕录制](/images/app-store/dsh-resource-manager.webp)

## 通过手机访问 DeepSeek Harness

通过 ZimaClient 手机应用访问 DeepSeek Harness——与你的家庭服务器建立直连 P2P 连接，无需云中继，无需配置 VPN。在家或出门都能用。

| ![ZimaClient 手机应用显示应用商店的应用列表](/images/app-store/dsh-phone-apps.png) | ![通过 ZimaClient 在手机上打开 DeepSeek Harness Web UI，显示进行中的会话](/images/app-store/dsh-phone-ui.png) |
| - | - |

通过 P2P 连接，你可以随时随地查看智能体的工作进展和所有自托管服务——同一套 Web UI，就在你的手机上。

## 你的家庭服务器现在是一个智能体

整个设置就是这样。你的家庭服务器不再只是一个存储盒子——它是一个住在你自有硬件上的物理智能体：

- **用手机控制**——随时随地通过 ZimaClient 打开 Web UI，查看会话、检查结果或派发新任务。在家或在外，智能体都只隔一次点击。
- **不写代码的氛围编程**——用大白话描述一个功能，让智能体在工作区里规划并编写，代码留在你的硬盘上，而不是云端。
- **家庭自动化**——把家庭服务器相关的任何任务交给它：整理文件、用你的数据生成报告、自动化重复性工作。它跑在 NAS 本身上，因此可以全天候工作。
- **诊断故障应用**——当 Jellyfin 停止转码或 Home Assistant 挂掉时，把症状贴给它，让它直接在 NAS 上读日志和配置，找到并修复原因。不再对着黑盒瞎猜。
- **维护你的应用栈**——智能体读取你的 Docker Compose 文件，陪你完成升级、配置变更和迁移，让你的自托管栈可以长期维护，而不是撑到下一次更新就散架。

## 使用注意事项

- **给它独立的硬件。**智能体最适合作为物理沙箱智能体运行在专用设备上——让它远离存放大量数据的主 NAS，这样沙箱里的实验永远不会碰到重要的东西。
- **两级授权。**文件夹授权只给智能体 ZimaOS 上的数据访问权限。授权 Docker socket 是第二个、高得多的级别——它给智能体系统级的容器管理能力，接近 SSH 级别的控制权。每级授权都要谨慎授予，只有在任务确实需要时才授权 socket 级别。

![应用设置页面，显示 DeepSeek Harness 容器的 Docker socket 卷授权](/images/app-store/dsh-docker-socket.webp)
- **把沙箱权限设为完全访问。**在 dsh 内把沙箱执行权限设为完全访问，这样智能体运行任务时就不用在每一步都请求批准。

![DeepSeek Harness Web UI 中沙箱权限设置为完全访问](/images/app-store/dsh-sandbox-permission.webp)
- **智能体写的所有内容都能在 Files 中看到。**由于工作区映射，智能体写的所有源代码都会落到已授权的文件夹里——随时可以在 ZimaOS Files 中浏览和检查。

## 下一步

- **本地推理：**把提供商指向自有硬件上的模型服务器，让智能体完全离线运行——本系列的下一篇教程。
- **用 dsh 自动化服务：**在 ZimaOS 上构建并运行自动化服务——本系列后续教程。

## 参考链接

更多细节请查阅 DeepSeek Harness 官方文档：

- 安装与全部部署方式 – [安装指南](https://github.com/sdkwork-ai/deepseek-harness-desktop/blob/master/INSTALL.md "DeepSeek Harness 官方安装指南")
- Web UI 使用 – [Web UI 指南](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md "DeepSeek Harness Web UI 官方指南")
- 模型提供商 – [提供商指南](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md "DeepSeek Harness 模型提供商官方指南")
- 源代码 – [GitHub 仓库](https://github.com/deepseek-ai/deepseek-harness "DeepSeek Harness 官方 GitHub 仓库")

ZimaSpace Tech AI Hub 延伸阅读：

- [10 Best DeepSeek Harness Plugins 2026](https://shop.zimaspace.com/blogs/tech-ai-hub/10-best-deepseek-harness-plugins-2026 "ZimaSpace Tech AI Hub 最佳 DeepSeek Harness 插件指南")
- [DE Minimal and Creator Explained](https://shop.zimaspace.com/blogs/tech-ai-hub/de-minimal-and-creator-explained "ZimaSpace Tech AI Hub 关于 DE Minimal 和 Creator 的解析")
