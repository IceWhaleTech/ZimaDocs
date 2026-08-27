---
title: 在 ZimaOS 上实施 3-2-1 备份
seo_title: "ZimaOS 备份计划：保护 NAS 数据的 3-2-1 策略"
description: "使用 3-2-1 原则在 ZimaOS 上构建完整的备份计划。通过一项任务备份文件夹、USB 硬盘和云存储，安排自动运行，并保留一份异地副本。"
type: Docs
author: vicky
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

硬盘会故障，文件会被意外删除，房屋也可能遭遇洪水。备份计划能够避免这些意外最终导致你失去一切。

首先需要明确一点：RAID 不是备份。RAID 可以在设备继续运行的同时，保护你免受单盘故障的影响；但它无法应对意外删除、勒索软件，或导致整台机器损坏的电涌。真正的备份计划也必须覆盖这些风险。

## 3-2-1 原则

对于“多少份备份才足够”这个问题，3-2-1 原则是标准答案。

- **3 份数据副本**：一份原始数据加两份备份，避免单次故障摧毁所有内容。
- **2 种不同的存储介质**：例如设备内的硬盘加一块外置 USB 硬盘，用于分散风险。
- **1 份异地副本**：存放在物理位置不同的地方，避免家中发生火灾或盗窃时所有副本一同丢失。

## 设置备份任务

ZimaOS 内置 Backup 应用，可以在一个地方完成所有这些工作。

1. 从仪表板启动 **Backup** 应用。

![ZimaOS 桌面上用于启动备份工具的 Backup 应用图标](https://manage.icewhale.io/api/static/docs/1755069939384_copyImage.png)

2. 点击**添加新备份**，打开任务创建向导。

![带有“添加新备份”按钮的备份任务创建向导](https://manage.icewhale.io/api/static/docs/1755069940811_copyImage.png)

3. 选择数据来源：**云端**（Google Drive、Dropbox 等）、**LAN**（其他设备的共享文件夹）、**USB**（外置硬盘），或 **Zima**（存储在本设备上的文件）。

通过**[手机备份](./phone-backup "通过 ZimaClient 自动将手机备份到 ZimaOS")**和**[电脑备份](./computer-backup "通过 Finder、文件资源管理器或同步功能将电脑备份到 ZimaOS")**导入的数据，会以普通文件夹的形式保存在存储空间中，因此可以像设备上的其他内容一样加入备份任务。

![备份数据来源选择界面，显示云端、LAN、USB 和 Zima 选项](https://manage.icewhale.io/api/static/docs/1755069942195_copyImage.png)

4. 如果选择了云端来源，请登录并授权访问。

![用于授权云备份访问的 Google 账户登录界面](https://manage.icewhale.io/api/static/docs/1755069943543_copyImage.png)

![备份任务向导中的云存储授权步骤](https://manage.icewhale.io/api/static/docs/1755069944297_copyImage.png)

5. 选择要备份的文件夹，或选择整个目录结构。

![用于选择文件夹或整个目录的备份内容选择界面](https://manage.icewhale.io/api/static/docs/1755069945701_copyImage.png)

6. 设置目标位置：本地硬盘、另一台 Zima 设备、外置硬盘或云端。

![本地硬盘、其他 NAS 设备、USB 或云端等备份目标选项](https://manage.icewhale.io/api/static/docs/1755069947027_copyImage.png)

7. 点击**开始**。备份会开始运行，并实时显示进度。

![正在运行的备份任务，实时显示备份进度](https://manage.icewhale.io/api/static/docs/1755069948294_copyImage.png)

你还可以在 [YouTube](https://www.youtube.com/watch?v=pUVMsS1tcyY) 上观看相同步骤的视频演示。

## 自动执行备份

如果备份计划还要依靠你记得手动运行，它就无法真正发挥作用。

- **计划备份**会按照你设置的时间间隔自动运行。
- **多项任务**可以并行运行且互不干扰，因此照片、文档和应用数据都能拥有各自的计划。
- **断点续传和容错**会从中断的位置继续传输，而不是从头开始。

![Backup 应用任务列表，显示多项备份任务正在同时运行](https://manage.icewhale.io/api/static/docs/1755069949757_copyImage.png)

## 云同步不是备份

同步到云端的文件夹并不等于备份。同步会双向镜像更改，因此在本地删除文件，也会将其从所有位置删除。备份会保留版本，并且只向前写入。在备份计划中使用云端时，请选择 Backup 应用的云端目标位置，以获得版本和还原点，而不是镜像你的误操作。

云端也可以作为 3-2-1 计划中的异地副本。有关云存储的使用方法，请参阅**[连接云盘](./cloud-drive-connect "将 Google Drive、Dropbox 或 OneDrive 连接到 ZimaOS 进行备份")**。

## 恢复并验证

从未恢复过的备份，就等于从未测试过的计划。首次备份完成后，请恢复一个文件并打开它。现在花十分钟验证，总比真正需要备份时才发现隐藏问题要好。

## 下一步

- **[RAID 选项](./raid-options "了解 RAID 级别和 JBOD，并按照分步说明完成设置")** — 了解 RAID 能保护什么、不能保护什么
- **[手机备份](./phone-backup "通过 ZimaClient 自动将手机备份到 ZimaOS")** — 将手机数据纳入备份计划
- **[在硬盘间移动数据](./data-migration "在 ZimaOS 的硬盘之间移动 Docker 镜像、应用数据和文件夹")** — 硬盘空间不足时使用
