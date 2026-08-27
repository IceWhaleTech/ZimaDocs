---
title: 连接云盘
seo_title: "在 ZimaOS 中使用云盘：连接 Google Drive、Dropbox 和 OneDrive"
description: "将 Google Drive、Dropbox 和 OneDrive 连接到 ZimaOS。在 Files 中挂载云端文件夹，跨本地和云存储工作，并将云端用作 3-2-1 备份方案中的异地副本。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

云盘有自己的优势：随处可用、运行可靠，而且其他人已经在通过它与你共享文件。ZimaOS 设备则擅长其他方面：在自己的网络中提供高速访问、拥有真正的大容量，并让数据始终由你掌控。将两者连接起来后，你可以随着需求变化灵活移动数据。把一部分云端数据迁回 NAS，以降低订阅方案；也可以将云端用作 NAS 的加密异地备份。每一份数据保存在哪里，都由你决定。

## 在 Files 中挂载云盘

Files 应用可以直接连接 **Google Drive**、**Dropbox** 和 **OneDrive**。只需连接一次，云端文件夹就会显示在本地存储旁边。

1. 在 ZimaOS 仪表板中打开 **Files**。
2. 从存储列表中添加云盘。
3. 登录云服务账户并授权访问。

![ZimaOS Files 应用显示 Google Drive、Dropbox 和 OneDrive 的云盘连接选项](/images/guides/files-cloud-drive-mount.png)

连接后，云盘会与其他存储空间并排显示，其中的文件夹可以像普通文件夹一样浏览。

![ZimaOS Files 侧边栏在本地存储空间旁显示已连接的云盘](/images/guides/files-cloud-drive-list.png)

## 跨本地与云端工作

挂载云盘后，在两个环境之间移动数据不再是一项复杂工程。

你可以直接打开云端文件，编辑后再保存回去；需要在别处保留副本时，可以将本地文件夹拖入云盘；需要高速本地访问时，则将云端文件下载到本地。如果迁入设备的数据足够多，通常还能将云服务降级到更便宜的方案。Files 会在传输时执行校验，因此大规模迁移不会在毫无提示的情况下留下损坏文件。

以下是将文件从云盘移动到本地存储的步骤。

1. 在 Files 中打开云盘，并选择要移动的文件夹。

![ZimaOS Files 显示已选择准备迁移的云端文件夹](/images/guides/files-cloud-migrate-select.png)

2. 选择目标存储空间。

![ZimaOS Files 迁移对话框用于选择目标存储空间](/images/guides/files-cloud-migrate-destination.png)

3. 开始传输。进度会实时显示。

![ZimaOS Files 迁移进度实时显示正在进行的传输](/images/guides/files-cloud-migrate-progress.png)

4. 传输完成后，Files 会验证结果并确认文件完整无损。

![ZimaOS Files 迁移完成并通过验证，确认文件完整](/images/guides/files-cloud-migrate-verified.png)

## 异地备份环节

连接后的云盘还可以在备份方案中承担第二项工作：成为 **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** 中的异地副本。

本地存储保存工作副本，第二块硬盘保存本地备份，云端则保存一份加密副本，即使发生火灾或水灾也能保留下来。你仍在使用原来的云服务，只是让它承担最擅长的工作。

## 下一步

- **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** — 建立完整备份方案
- **[手机备份](./phone-backup "使用 ZimaClient 将手机自动备份到 ZimaOS")** — 将手机数据也带回家中
