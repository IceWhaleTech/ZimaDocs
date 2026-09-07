---
title: 应用数据存储在哪里
seo_title: "ZimaOS 应用数据存储位置：Docker 路径说明"
description: "了解 ZimaOS 应用将数据保存在硬盘的什么位置，包括 Docker 容器路径映射、应用配置位置以及跨硬盘移动数据的方法。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

从 App Store 安装应用后，应用会将文件保存在硬盘上的某个位置。了解具体位置有助于备份正确的文件夹、日后将数据迁移到更大的硬盘，也能避免应用更新后消失时措手不及。

App Store 应用运行在容器中。应用在容器内部有自己的文件系统，但真正重要的数据会映射到容器外、硬盘上的实际文件夹。删除容器后，这些文件仍会保留。Files 和 VM 等 ZimaOS 原生功能并不使用容器，因此本页只适用于 App Store 应用。

## 不要将应用数据保存在系统盘

安装应用前，建议将应用数据指向 **[存储设置](./storage-setup "根据需求选择合适的 RAID 选项和存储配置")** 教程中创建的存储空间。

系统盘通常容量较小。如果所有应用都向其中写入数据，很快就会用满。Immich 同步的照片、Plex 抓取的媒体信息以及 Paperless 建立索引的文档，默认都会写入系统盘。系统盘用满后，更新会失败、应用行为会异常，整台设备也会变慢。

从一开始就将应用数据路径设置到主存储阵列，可以保持职责清晰：系统盘负责操作系统，存储阵列负责数据。以后某块硬盘空间不足时，也能将单个应用迁移到其他位置，无需重新安装。

![ZimaOS Settings Apps 页面将 App data location 指向主存储空间](/images/guides/app-data-path-config.png)

进入 **Settings > Apps**，找到 **App data location**，将其设置为已创建的存储空间。ZimaOS 会自动移动数据。

下面以媒体服务器 Plex 为例说明其工作方式。

## Plex 示例

安装 Plex 后，ZimaOS 会为其设置两个文件夹。

![ZimaOS App Store 中的 Plex 应用卡片显示安装按钮和应用详情](/images/guides/plex-app-store-card.png)

**Config.** 保存设置、数据库和偏好。在容器内对应 `/config`；在硬盘上位于 App data location 下，默认路径为 `/DATA/AppData/plex/config`，如果已迁移，则位于你选择的存储空间中。重新安装和更新后仍会保留。

**Media.** 保存电影和电视节目。在容器内对应 `/media`；在硬盘上则是存储空间中的 Media 文件夹。将视频文件放入其中，Plex 就能直接读取。

在 ZimaOS 中打开应用设置，可以查看并更改这些路径。每个卷路径旁都有编辑按钮。

![ZimaOS 中的 Plex 应用设置显示 config 和 media 卷路径及编辑按钮](/images/guides/plex-volume-path-settings.png)

## 为什么路径很重要

了解应用路径有两个实际原因。

第一，设置备份时，应备份硬盘上的文件夹，而不是容器内部的内容。容器可以重建，硬盘上的数据却不可替代。

第二，如果某块硬盘空间不足，可以将应用数据指向另一块硬盘。移动文件夹，再更新应用设置中的路径即可，无需重新安装。

## 清理应用缓存

应用会逐渐积累缓存，在不知不觉中占用磁盘空间。**Settings > Apps** 页面会显示每个应用的空间用量。如果某个应用异常增长，可以在该页面清理缓存。应用仍会正常运行，同时可以回收空间。

![ZimaOS Settings Apps 页面列出已安装应用、磁盘用量和缓存清理选项](/images/guides/app-data-cleanup.png)

## 下一步

- **[存储设置](./storage-setup "根据需求选择合适的 RAID 选项和存储配置")** — 决定哪些硬盘保存数据
- **[数据迁移](./data-migration "在 ZimaOS 中跨硬盘移动 Docker 镜像、应用数据和文件夹")** — 硬盘用满时使用内置迁移工具
- **[App Store 概览](./app-store/ "浏览 App Store 中的媒体、自托管应用和 AI 分类")** — 查看可以安装的应用
