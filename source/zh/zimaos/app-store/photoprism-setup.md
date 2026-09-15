---
title: 如何在 ZimaOS 上运行 PhotoPrism
seo_title: "ZimaOS 上的 PhotoPrism：自托管 AI 照片相册"
description: 从 ZimaOS 应用商店安装 PhotoPrism——在你自己的硬件上拥有一个私密、AI 驱动的照片相册，支持自动打标、智能搜索和相册功能。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

PhotoPrism 在 ZimaOS 应用目录中原生支持。查看 [PhotoPrism 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.photoprism)了解最新的应用详情。

PhotoPrism 是一款自托管的 AI 驱动照片相册——它把你的照片私密地保存在自己的 ZimaOS 设备上，同时保留你期望云服务提供的自动打标、智能搜索和相册功能。没有订阅费，没有存储上限，也没有人扫描你的回忆。

## 为什么选择 PhotoPrism？

- **照片归你所有**——一切都存放在你自己的 ZimaOS 硬盘上，而不是别人的云里。
- **AI 负责整理**——人脸、地点和物体被自动打标，你通过搜索就能找到任何照片，而不必翻页。
- **免费且无限制**——没有订阅费，容量只受硬盘限制，原始照片永不被压缩。
- **没有锁定**——你的照片就是 `/DATA/Gallery` 中的普通文件，随时可以备份或迁移。

## 准备工作

- 一台运行中的 ZimaOS 设备。
- 一个空闲端口用于 Web 界面（默认：**2342**）。

## 应用目录

1. 在 ZimaOS 应用目录中找到 PhotoPrism。打开 **App Store** → 搜索 "PhotoPrism" → 点击 **Install**。

![ZimaOS 应用商店中的 PhotoPrism 应用页面及安装和自定义安装选项](/images/app-store/photoprism-app-store.webp)

2. **马上就能用了！**

![安装完成后 ZimaOS 桌面上的 PhotoPrism 图标](/images/app-store/photoprism-installed-dashboard.webp)

## 配置

以下步骤**并非必需**——你可以直接用**默认**配置开始使用。

ZimaOS 支持多种配置方式，包括表单编辑和 YAML 二次编辑。你可能想调整的主要设置：

- **卷（Volumes）**——照片和 PhotoPrism 数据的存放位置。你的照片库位于 ZimaOS 的 `/DATA/Gallery`（挂载到 `/photoprism/originals`），数据库、索引、缓存和缩略图存放在 `/DATA/AppData/photoprism/storage`（挂载到 `/photoprism/storage`）。请把 storage 文件夹放在 originals 文件夹之外。
- **端口**——访问 Web 界面的外部端口（默认：2342）。

![PhotoPrism 容器设置中的 2342 端口和卷映射](/images/app-store/photoprism-config-form.webp)

## 首次设置

安装完成后，点击 PhotoPrism 图标。弹窗会显示默认账号和密码——使用其中显示的用户名和密码登录。

![PhotoPrism 提示窗口中显示的默认管理员用户名和密码](/images/app-store/photoprism-default-credentials.webp)

登录后即可开始使用。如需稍后修改默认账号或密码，打开 **Settings → Account**。

![PhotoPrism 账号设置中的修改密码和双重认证选项](/images/app-store/photoprism-account-settings.webp)

## 使用 PhotoPrism

1. 添加照片——把照片放进 `/DATA/Gallery`（或从 Web 界面直接上传），然后在 **Library** 标签页开始索引。PhotoPrism 会用 AI 自动整理并为它们打标。

![PhotoPrism 库标签页中索引前的完整重扫和清理选项](/images/app-store/photoprism-library-index.webp)

2. 浏览——打开 **Calendar** 子页面按日期浏览照片，或使用 **Search** 按关键词、地点或 AI 检测到的物体查找照片。
3. 整理与分享——在 **Albums** 子页面创建相册来整理照片，并与家人朋友分享。

## 试试这些

照片索引完成后，打开 PhotoPrism 试试以下操作——完全无需手动打标：

- **自然语言搜索**——输入 "cat"、"beach" 或 "birthday"，PhotoPrism 几秒内就能找到所有匹配的照片。
- **打开 People**——查看照片按人脸自动分组的结果。
- **打开 Places**——查看照片在世界地图上的位置标记。
- **打开 Moments**——PhotoPrism 会把照片自动分组为事件和旅程。

## 相关指南

- 想要手机自动备份外加照片相册？参见 [Immich 照片备份](./immich-photo-backup "在 ZimaOS 上用 Immich 自动备份手机照片") 和 [用 Immich 同步照片](./sync-photos-with-immich "在 ZimaOS 上用 Immich 服务器保持手机照片同步")。

不确定选哪个？以手机自动备份为主要目标就选 Immich；想要一个管理自己文件的文件夹之上的 AI 图库，就选 PhotoPrism。

## 需要帮助？

如果你在 ZimaOS 上安装或使用 PhotoPrism 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.gg/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
