---
title: 如何在 ZimaOS 上运行 VoceChat
seo_title: "ZimaOS 上的 VoceChat：自托管团队聊天服务器"
description: 从 ZimaOS 应用商店安装 VoceChat——在你自己的硬件上拥有一个轻量、私密的聊天服务器，支持群聊、文件分享和可嵌入组件。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

VoceChat 在 ZimaOS 应用目录中原生支持。查看 [VoceChat 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.vocechat)了解最新的应用详情。

VoceChat 是一款轻量、自托管的聊天服务器——它为你提供私密群聊、私信、文件分享、@提及、机器人和可嵌入的聊天组件，全部运行在你自己的硬件上，而不是消息服务商的云端。

## 准备工作

- 一台运行中的 ZimaOS 设备。
- 一个空闲端口用于聊天服务器（默认：**3009**）。

## 应用目录

1. 在 ZimaOS 应用目录中找到 VoceChat。打开 **App Store** → 搜索 "VoceChat"。

![ZimaOS 应用商店中的 VoceChat 应用页面及安装按钮](/images/app-store/vocechat-app-store.webp)

2. **马上就能用了！**

![安装完成后 ZimaOS 桌面上的 VoceChat 图标](/images/app-store/vocechat-installed-dashboard.webp)

## 配置

以下步骤**并非必需**——你可以直接用**默认**配置开始使用。

ZimaOS 支持多种配置方式，包括表单编辑和 YAML 二次编辑。

![VoceChat 容器设置中的 3009 端口和数据卷挂载](/images/app-store/vocechat-config-form.webp)

你可能想调整的主要设置：

- **卷（Volumes）**——聊天记录和上传文件的存放位置（默认：`/DATA/AppData/vocechat/home/vocechat-server/data`，挂载到 `/home/vocechat-server/data`）。
- **端口**——访问 Web 界面的外部端口（默认：3009）。

## 首次设置

在 ZimaOS 上，首次设置同样简单——无需编辑任何配置文件。安装完成后，打开 VoceChat 并跟随设置向导：

1. 为你的服务器设置一个名称。
2. 创建管理员账号（邮箱 + 密码）。
3. 选择注册模式（开放注册或仅邀请）。

![VoceChat 欢迎界面中的邀请成员和升级选项](/images/app-store/vocechat-first-run-welcome.webp)

完成后，把邀请链接分享给你的家人或团队，即可开始聊天。VoceChat 还提供官方 iOS/Android 应用，以及可嵌入你网站中的聊天组件。

## 需要帮助？

如果你在 ZimaOS 上安装或使用 VoceChat 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.com/invite/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
