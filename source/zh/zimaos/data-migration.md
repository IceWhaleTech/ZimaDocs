---
title: 在硬盘之间移动数据
seo_title: "在 ZimaOS 中跨硬盘移动数据：Docker、应用数据和文件夹"
description: "使用 ZimaOS 内置的 Data Migration 工具，在不同存储空间之间移动 Docker 镜像、应用数据和用户文件夹。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

硬盘空间用满时，无需重新安装任何内容。内置迁移工具可以将 Docker 镜像、应用数据和用户文件夹移动到其他存储空间，同时保持所有内容正常运行。

## 可以移动的内容

- Docker 镜像
- Docker 应用数据
- 用户数据库（Gallery、Downloads、Documents、Media、Backup）

## 移动方法

![ZimaOS Settings 页面显示 Data Migration 入口和存储文件夹列表](https://manage.icewhale.io/api/static/docs/1727178430378_image.png)

1. 打开 **Settings > Data Migration**。
2. 选择要迁移的项目，然后单击右侧的 **Modify Location** 按钮。

![Data Migration 页面在每个可选项目旁显示 Modify Location 按钮](https://manage.icewhale.io/api/static/docs/1727178444256_image.png)

3. 选择新的存储空间，然后单击 **Next**。

![Data Migration 向导显示存储空间选择和 Next 按钮](https://manage.icewhale.io/api/static/docs/1727178450237_image.png)

4. 选中 "I acknowledge and confirm this action" 复选框，然后单击 **Start Migration**。

![Data Migration 确认页面显示确认复选框和 Start Migration 按钮](https://manage.icewhale.io/api/static/docs/1727178455511_image.png)

5. 迁移进度会全屏显示，迁移期间无法执行其他操作。

![Data Migration 进度页面全屏显示迁移状态](https://manage.icewhale.io/api/static/docs/1727178460307_image.png)

6. 迁移完成后，弹窗会显示迁移详情。

![Data Migration 完成弹窗显示已完成迁移的详细信息](https://manage.icewhale.io/api/static/docs/1727178465734_image.png)

## 相关内容

- **[应用存储路径](./docker-app-paths "了解应用将数据保存在硬盘的什么位置以及如何移动")** — 移动前先了解应用数据的存放位置
- **[存储设置](./storage-setup "根据需求选择合适的 RAID 选项和存储配置")** — 规划存储空间
