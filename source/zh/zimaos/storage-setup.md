---
title: 选择存储配置
seo_title: "ZimaOS 存储设置：为家庭服务器选择 RAID、NAS 或 ZFS"
description: "介绍如何在 ZimaOS 上设置存储。针对家庭 NAS、应用服务器、AI 智能体和小型企业文件共享等不同场景，对比单盘、RAID 和 ZFS。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

硬盘的配置方式取决于你要构建什么。家庭媒体服务器所需的存储，与全天运行的 AI 智能体并不相同。

存储配置取决于设备的用途。下面介绍四种常见方案。你不需要提前了解 RAID。

## 常见使用场景

- **家庭数据** — 从 RAID 1 开始，随着资料库扩大再升级到 RAID 5
- **应用服务器** — 使用 SSD 提升速度，媒体库使用 RAID
- **AI 智能体** — 使用一块可靠的硬盘，并定期备份
- **小型企业** — 使用 RAID 5，在容量和持续可用性之间取得平衡

![ZimaOS 设置中的存储仪表板，显示硬盘、存储空间和选项概览](/images/guides/storage-dashboard-overview.png)

### 家庭照片、视频和文件

你希望为全家人创建的所有内容提供一个统一位置：每部手机里的照片、家庭视频和文档。设备放在客厅，家中每个人都能使用。

可以从两块相同硬盘组成的 RAID 1 开始。数据会进行镜像；即使一块硬盘故障，也不会丢失任何内容。

**[连接云盘](./cloud-drive-connect "将 Google Drive、Dropbox 或 OneDrive 连接到 ZimaOS 进行备份")**可以提高灵活性。将大型媒体库从 Google Drive 或 iCloud 迁出，以降低订阅成本。按照 3-2-1 备份策略，为无法替代的文件保留第三份异地副本。将共享项目分散在本地存储和云端，让协作者可以访问所需内容。

如果资料库超出了两块硬盘的容量，可以使用由三块或更多硬盘组成的 RAID 5，在保持保护能力的同时继续扩容。

### 应用服务器和 Docker 主机

你正在运行 Jellyfin、Paperless、Pi-hole 和其他一些应用。对某些数据而言，速度比冗余更重要；对另一些数据则相反。

使用一块 SSD 保存应用数据，可以加快容器启动和文件访问。将媒体和文档存放在独立的 RAID 1 或 RAID 5 阵列中，在这些数据上冗余更重要。

### AI 智能体服务器

你正在运行 OpenClaw 或 Hermes。智能体全天候运行，不断写入日志和记忆。数据大多是文本，因此容量通常不是问题，真正重要的是可靠性。

一块 SSD、一块普通 HDD，甚至系统盘都可以胜任。这些数据主要是文本，包括日志、记忆文件和配置。请定期进行备份。如果你在运行多个智能体的同时还运行其他应用，两块 SSD 组成的 RAID 1 会增加一些成本，但能消除单点故障。

### 小型企业文件共享

办公室或工作室中的几个人需要共享访问项目文件。工作时间内速度很重要，而冗余始终都很重要。

由三块或更多硬盘组成的 RAID 5 可以平衡容量、速度和保护。一块硬盘故障时，用户甚至不会察觉。最大的优势是：随着存储需求增长，你可以逐步添加更多硬盘，无需从头重建。

## 设置方法

ZimaOS 会替你处理配置。连接新硬盘时，系统会显示通知，提示你进行设置。

![检测到新连接的硬盘时，ZimaOS 显示的硬盘设置提示通知](/images/guides/storage-new-disk-notification.png)

1. 前往**设置 > 存储**。
2. 点击**组合**，打开硬盘设置向导。

![从“组合”按钮打开的 ZimaOS 存储设置向导，显示硬盘配置选项](/images/guides/storage-combine-wizard.png)

3. 选择配置并勾选要使用的硬盘。
4. 为阵列命名并确认。

![ZimaOS 存储创建界面，可选择硬盘、为阵列命名并确认设置](/images/guides/storage-create-name.png)

## 创建完成后

存储设置完成后，你会在**设置 > 存储**中看到阵列及其状态。健康的阵列会显示绿色指示标志。你可以在此页面查看硬盘健康状况、可用容量以及读写速度。

![ZimaOS 存储状态页面，显示阵列健康状况、可用容量以及读写速度](/images/guides/storage-disk-status.png)

如果 RAID 阵列中的一块硬盘故障，状态会变为“降级”。数据仍然可以完整访问，读写也会正常继续。更换故障硬盘后，ZimaOS 会引导你完成重建过程。

单盘和 USB 硬盘会显示更简单的状态视图，包括健康状况和容量，无需进行 RAID 管理。

USB 硬盘与内置 HDD 和 SSD 遵循相同逻辑：连接后可以直接用作存储、加入阵列，或扩展现有空间。

有关各 RAID 级别的分步说明，请参阅 **[RAID 选项](./raid-options "了解 RAID 级别和 JBOD，并按照分步说明完成设置")**。如果你希望使用 ZFS 获得快照和高级数据完整性功能，请参阅“开发者”部分的 **[ZFS 设置指南](../developer/zfs-setup "在 ZimaOS 上设置 ZFS，以获得快照、校验和及数据完整性功能")**。

存储设置完成后，下一步就是导入数据。**[手机备份](./phone-backup "通过 ZimaClient 自动将手机备份到 ZimaOS")**和**[电脑备份](./computer-backup "通过 Finder、文件资源管理器或同步功能将电脑备份到 ZimaOS")**覆盖你每天使用的设备；硬盘空间不足时，可以使用**[在硬盘间移动数据](./data-migration "在 ZimaOS 的硬盘之间移动 Docker 镜像、应用数据和文件夹")**；**[应用存储路径](./docker-app-paths "了解应用将数据存放在硬盘的什么位置，以及如何移动这些数据")**则可以让每个应用使用正确的硬盘。
