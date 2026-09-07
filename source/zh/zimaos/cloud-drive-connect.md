---
title: 连接云盘
seo_title: "在 ZimaOS 中使用云盘：连接 Google Drive、Dropbox 和 OneDrive"
description: "将 Google Drive、Dropbox 和 OneDrive 连接到 ZimaOS。在 Files 中挂载云端文件夹，跨本地和云存储工作，并将云端用作 3-2-1 备份方案中的异地副本。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

云盘有自己的优势：随处可用、运行可靠，而且其他人已经在通过它与你共享文件。ZimaOS 设备则擅长其他方面：在自己的网络中提供高速访问、拥有真正的大容量，并让数据始终由你掌控。将两者连接起来后，你可以随着需求变化灵活移动数据。把一部分云端数据迁回 NAS，以降低订阅方案；也可以将云端用作 NAS 的异地备份。每一份数据保存在哪里，都由你决定。

## 在 Files 中挂载云盘

Files 应用可以直接连接 **Google Drive**、**Dropbox** 和 **OneDrive**。三步之后，云端文件夹就会出现在本地存储旁边。

### 步骤 1：添加云盘

在 ZimaOS 仪表盘中打开 **Files**，从存储列表中添加云盘。

![ZimaOS Files 应用显示 Google Drive、Dropbox 和 OneDrive 的云盘连接选项](/images/guides/files-cloud-drive-mount.png)

### 步骤 2：授权你的设备

登录云服务账户并授权访问。你授权的是你的 ZimaOS 设备，而不是第三方。每一次请求都从你自己的硬件发起，直接在设备与云服务商之间传输。数据不经过任何第三方，隐私和访问安全都掌握在你手中。

![ZimaOS Files 云盘授权页面，用于将设备连接到云服务账户](/images/guides/files-cloud-drive-authorize.png)

### 步骤 3：在设备上统一管理

连接完成后，云盘会出现在 Files 中本地存储空间的旁边。你的 ZimaOS 设备成为跨云管理所有数据的唯一入口：自动复制、批量迁移或直接访问，都在同一个仪表盘中完成。

![ZimaOS Files 显示云盘与本地存储并排，用于统一管理](/images/guides/files-cloud-drive-list.png)

## 跨本地与云端工作

挂载云盘后，在两个环境之间移动数据不再是一项复杂工程。

你可以直接打开云端文件，编辑后再保存回去；需要别处副本时，把本地文件夹拖入云盘。如果迁入设备的数据足够多，通常还能将云服务降级到更便宜的方案。Files 会在传输时执行校验，因此大规模迁移不会在毫无提示的情况下留下损坏文件。

下面是一次从云盘到本地存储的迁移，分步说明。

### 步骤 1：选择文件夹

在 Files 中打开云盘，选择要移动的文件夹。

![ZimaOS Files 显示已选中待迁移的云端文件夹](/images/guides/files-cloud-migrate-select.png)

### 步骤 2：选择目标位置

选择目标存储空间。

![ZimaOS Files 迁移对话框，用于选择目标存储空间](/images/guides/files-cloud-migrate-destination.png)

### 步骤 3：确认冲突处理和原始文件

在开始传输之前，Files 会要求你确认两个选择。

- **冲突处理。** 当目标位置已存在同名文件时，选择处理方式：跳过、覆盖或两者都保留。
- **原始文件。** 选择原始文件保留在云盘上，还是在验证迁移完成后删除。

### 步骤 4：开始并验证

开始传输。进度实时显示。完成后，Files 会校验结果并确认文件完好无损。

![ZimaOS Files 迁移进度，实时显示传输过程](/images/guides/files-cloud-migrate-progress.png)

![ZimaOS Files 迁移完成，校验确认文件完好无损](/images/guides/files-cloud-migrate-verified.png)

## 多账号与断开连接

一个账号往往装不下全部需求。你可以连接同一服务的多个账号，每个账号在 Files 中都显示为独立条目。两个 Google Drive 或两个 OneDrive 可以像其他存储空间一样并排使用。

![ZimaOS Files 显示同一云服务的两个账号，以独立条目列出](/images/guides/files-cloud-multi-account.png)

当云盘完成使命后，从 Files 中移除即可。连接随即关闭，云端数据仍保留在服务商一侧。已经复制到本地存储的数据则继续留在本地。

![ZimaOS Files 显示已连接云盘的移除选项](/images/guides/files-cloud-disconnect.png)

## 异地备份环节

连接后的云盘还可以在备份方案中承担第二项工作：成为 **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** 中的异地副本。

本地存储保存工作副本，第二块硬盘保存本地备份，云端则保存一份异地副本，即使发生火灾或水灾也能保留下来。你仍在使用原来的云服务，只是让它承担最擅长的工作。

## 下一步

- **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** — 建立完整备份方案
- **[手机备份](./phone-backup "使用 ZimaClient 将手机自动备份到 ZimaOS")** — 将手机数据也带回家中
