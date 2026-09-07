---
title: 数据迁移
seo_title: "ZimaOS 数据迁移：跨硬盘移动 Docker、应用数据和文件夹"
description: "使用 ZimaOS 内置的 Data Migration 工具，在不同存储空间之间移动 Docker 镜像、应用数据和用户文件夹。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---
硬盘满了，或者换一块更大的，都不需要重装任何东西。内置的 Data Migration 工具一次运行即可把整类数据迁移到另一个存储空间。

## 可以移动什么

工具处理三类数据：

- **Docker 镜像。** 应用运行所依赖的软件包。持续安装应用时，这一类增长最快。
- **Docker 应用数据。** 已安装应用写入的全部数据，整体迁移。
- **用户文件夹。** 照片、下载、文档、媒体和备份。

它按类别迁移，而不是逐个应用。如果你想迁移单个应用，或了解它的文件存放在哪里，参见**[应用存储路径](./docker-app-paths "了解应用数据的存储位置以及迁移方法")**。

## 容器数据塞满系统盘时

系统盘通常最小，而容器默认写入系统盘。Docker 镜像和应用数据悄然增长，直到更新失败、应用行为异常。

尽早设置应用数据位置是预防手段，**[应用存储路径](./docker-app-paths "了解应用数据的存储位置以及迁移方法")** 有详细说明。如果系统盘已经满了，Data Migration 工具一次运行即可解决：把 Docker 镜像和应用数据迁移到存储空间，系统盘就空出来了。

## RAID 数据迁移时

更换 RAID 阵列中的硬盘，或迁移到更大的阵列，走的是同一路径。把每一类数据逐一迁移到新存储空间。最后一类完成后，旧阵列就可以退役。应用全程保持运行，迁移不会重装或重新配置任何东西。

## 如何移动

1. 打开**设置 > Data Migration**。

![ZimaOS 设置页面显示 Data Migration 入口及存储文件夹列表](/images/guides/data-migration-entry.webp)

2. 选择要迁移的项目，点击右侧的 **Modify Location** 按钮。

![Data Migration 页面，每个可选项目旁有 Modify Location 按钮](/images/guides/data-migration-modify-location.webp)

3. 选择新的存储空间，点击 **Next**。

![Data Migration 向导显示存储空间选择和 Next 按钮](/images/guides/data-migration-choose-space.webp)

4. 确认冲突处理方式。当目标位置已存在同名文件时，选择处理方式：跳过、覆盖或两者都保留。同时选择原始文件保留在旧硬盘上，还是在验证迁移完成后删除。然后勾选确认框，点击 **Start Migration**。


5. 进度全屏显示，迁移期间不能执行其他操作。

![Data Migration 进度界面，全屏显示迁移状态](/images/guides/data-migration-progress.webp)

6. 完成后，弹窗显示迁移详情。对于大数据量的迁移，工具会提供完整的结果报告。

![Data Migration 完成弹窗，显示迁移完成的详情](/images/guides/data-migration-done.webp)

![Data Migration 报告页面，显示大数据量迁移的完整结果](/images/guides/data-migration-report.webp)

## 限制

工具迁移的是上述三类数据。系统分区和这三类之外的数据不在其范围内。

## 相关页面

- **[应用存储路径](./docker-app-paths "了解应用数据的存储位置以及迁移方法")** — 应用级别的迁移和应用数据的位置
- **[存储设置](./storage-setup "根据使用需求选择磁盘和存储方案")** — 规划你的存储空间
- **[连接其他 NAS](./synology-to-zimacube-migration "将其他 NAS 连接到 ZimaOS，迁移文件或跨设备备份")** — 设备之间的数据迁移走 Files 应用
- **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** — 计划中的异地环和第二设备环
