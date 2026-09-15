---
title: 如何在 ZimaOS 上运行 RomM
seo_title: "ZimaOS 上的 RomM：自托管 ROM 游戏库管理器"
description: 从 ZimaOS 应用商店安装 RomM——在你自己的硬件上整理、浏览和分享你的游戏 ROM 收藏。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

RomM 在 ZimaOS 应用目录中原生支持。查看 [RomM 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.romm)了解最新的应用详情。

RomM 是一款自托管的 ROM 游戏库管理器——它会扫描你的游戏收藏，抓取封面和元数据，并提供一个基于浏览器的游戏库，让你可以在网络中的任何设备上浏览和分享。

## 准备工作

- 一台运行中的 ZimaOS 设备。
- 游戏库已按预期的 [文件夹结构](https://docs.romm.app/latest/getting-started/folder-structure/ "RomM 官方 ROM 游戏库文件夹结构指南") 整理好。

## 应用目录

1. 在 ZimaOS 应用目录中找到 RomM。打开 **App Store** → 搜索 "RomM"。

![ZimaOS 应用商店中 Media 分类下的 RomM 应用页面及安装按钮](/images/app-store/romm-app-store.webp)

2. **马上就能用了！**

![安装完成后 ZimaOS 桌面上的 RomM 应用图标](/images/app-store/romm-installed-dashboard.webp)

## 配置

以下步骤**并非必需**——你可以直接用**默认**配置开始使用。

ZimaOS 支持多种配置方式，包括表单编辑和 YAML 二次编辑。

![RomM 容器设置中的 Form 和 YAML 标签页及环境变量](/images/app-store/romm-config-form.webp)

## 导入 ROM

在 ZimaOS 上导入 ROM 非常容易——直接拖放即可。打开 ZimaOS Files，进入你的游戏库配置目录（默认是 `AppData/romm/library/roms`），把文件拖进去上传。RomM 会接收这些文件，并把它们连同封面和元数据加入你的游戏库。

## RomM、RetroArch 与 Batocera

这三个工具覆盖了复古游戏的不同环节：

- **RomM** 负责整理收藏——它扫描你的文件、抓取封面和元数据，并提供一个可分享的游戏库供你浏览。它本身不是模拟器。
- **[RetroArch](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.retroarch "ZimaOS 应用商店中的 RetroArch 应用页面")** 负责玩游戏——它是模拟器前端，可以在数十种主机系统上运行 ROM。
- **[Batocera](./batocera-arcade-setup "把 ZimaBoard 变成一台 Batocera 复古街机")** 把整台设备变成游戏机——它是一个专用的复古游戏操作系统，让 ZimaBoard 直接启动进入游戏机体验，而不是 ZimaOS 上的一个应用。

常见的搭配是：在 ZimaOS 上用 RomM 保持收藏整洁，在 RetroArch 或 Batocera 设备上玩游戏。

## 需要帮助？

如果你在 ZimaOS 上安装或使用 RomM 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.gg/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
