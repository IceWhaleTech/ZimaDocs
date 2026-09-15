---
title: 如何在 ZimaOS 上部署 Blinko
seo_title: "在 ZimaOS 上运行 Blinko：家庭服务器上的自托管 AI 笔记"
description: 几分钟内在 ZimaOS 应用商店安装 Blinko——用卡片捕捉稍纵即逝的灵感，用 AI 自然语言搜索笔记，让每一条笔记都留在你自己的硬盘上。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

Blinko 在 ZimaOS 应用目录中原生支持，只需 3 分钟即可安装完成——ZimaOS 是 Blinko 项目的官方赞助商，其 README 里就带有「Run on ZimaOS」按钮。最新应用信息请参阅 [Blinko 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.blinko)。

Blinko 是一款开源、自托管的卡片式笔记应用。它解决的问题你一定熟悉：灵感总在不经意间出现——开会时、通勤路上、洗澡时——等你打开一个笨重的笔记应用，想法已经消失了。Blinko 在灵感闪现的瞬间把它捕捉下来，存成一张张小卡片。而因为它住在你的家庭服务器上，AI 助手可以按意思搜索你的笔记：问一句「我上周关于项目写了什么」，它就能在你有史以来写过的所有内容里找到答案。

社区的评价是「比手机备忘录好用 10 倍」——一个更轻的 Obsidian，加上 AI 检索，再加一个自托管的 Notion 收件箱。所有笔记都留在你自己的硬盘上，而不是别人的云里。

## 准备工作

- 一台正在运行的 ZimaOS 家庭服务器。

## 应用目录

1. 在 ZimaOS 应用目录中找到 Blinko。打开**应用商店** → 搜索 "Blinko"。

![应用商店搜索结果，显示 Blinko 应用卡片及其安装按钮](/images/app-store/blinko-app-store.png)

2. 点击**安装**，稍等片刻。

![ZimaOS 仪表盘中的应用列表，Blinko 显示为已安装](/images/app-store/blinko-installed.png)

3. **马上就能用了！**

应用运行在 1111 端口，自带数据库，ZimaOS 会把你的所有笔记存放在硬盘上的应用数据目录里——应用更新或重装都不会丢失。

## 首次启动

从应用卡片打开 Blinko。首次访问时注册你的账户——第一个注册的账户就是管理员。

![Blinko 的首次运行界面，用于注册管理员账户](/images/app-store/blinko-first-run.png)

进入之后，如果需要可以在设置里切换界面语言（简体中文和英文都可用），然后就可以开始写了。创建一张卡片，加上标签，保存——这就是全部的操作循环。

![Blinko 笔记编辑器，正在写一张新卡片](/images/app-store/blinko-note.png)

## 启用 AI 功能（可选）

以下步骤**并非必需**——不开 AI，Blinko 也是一个完整的笔记应用。但快记类笔记有一个众所周知的宿命：写进去的东西，之后找不到。AI 补的正是这个断点——语义检索让你几个月后还能按意思找到任何一张卡片，自动标签让一切保持有序而无需手动整理，捕捉后处理把你随手写的五个词扩成完整笔记并以评论形式保留。这才是把一堆卡片变成可检索第二大脑的关键。启用方法：

1. 打开**设置**，找到 AI 提供商区域。

2. 选择一个提供商：OpenAI、Anthropic、Google AI、Grok，或者跑在你自有硬件上的本地 Ollama 服务器——用你手头现成的就行。

3. 填写四种模型能力：聊天、嵌入、图像和语音。有些提供商一把密钥就能覆盖全部四种；用其他提供商时，用不到的能力留空即可。

4. 点击**测试连接**。通过之后，界面角落会出现 AI 对话框，自然语言搜索也开始工作。

![Blinko 的 AI 提供商设置，连接测试已通过](/images/app-store/blinko-ai-settings.png)

> **隐私提示：**如果你想用 AI 又不想把笔记发给任何外部服务，把 Blinko 指向本地 Ollama 服务器——一切都留在你的家庭服务器上。

## 社区技巧

来自社区真实使用故事的用法总结：

- **三种卡片类型，自由互转。**灵光一闪写成快记卡片，长内容写成笔记，任务写成待办清单。任何卡片之后都能转换成其他类型——比在文件夹之间搬文件容易得多。
- **让 AI 评论，而不是改写。**AI 扩写或润色卡片时，生成的内容会以评论形式保存，不会混进你的原文。你的声音始终是你的，建议留给你事后审阅。
- **每日回顾。**用每日回顾重温今天捕捉的卡片——社区把它当作从「随手记」通向「真笔记」的桥梁。
- **数据永远属于你。**每张卡片都以纯文本形式存在你硬盘上的应用数据文件夹里。备份那个文件夹，整个笔记库就安全了。

## 参考链接

更多细节请查阅 Blinko 官方文档：

- 介绍与功能 – [https://docs.blinko.space/en/introduction](https://docs.blinko.space/en/introduction "Blinko 官方介绍与功能文档")
- 安装与更新 – [https://docs.blinko.space/en/install](https://docs.blinko.space/en/install "Blinko 官方安装与更新指南")
- AI 使用方法 – [https://docs.blinko.space/en/how-to-use/ai/ai-setting](https://docs.blinko.space/en/how-to-use/ai/ai-setting "Blinko 官方 AI 配置指南")
- 源代码 – [GitHub 仓库](https://github.com/blinkospace/blinko "Blinko 官方 GitHub 仓库")
