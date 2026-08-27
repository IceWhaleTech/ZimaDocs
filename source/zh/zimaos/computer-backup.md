---
title: 电脑备份
seo_title: "将 Mac 和 Windows 备份到 ZimaOS：Finder、文件资源管理器与计划同步"
description: "使用 ZimaClient 将电脑备份到 ZimaOS。只需登录一次，即可从 Finder 或文件资源管理器访问共享文件夹，并备份重要文件夹。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

保护手机的同一套备份方式，也适用于电脑。安装桌面客户端并登录一次后，你关心的文件夹就会持续保存到自己的设备中。

## 开始前

ZimaOS 设备需要开机并连接网络。首次连接时，电脑和设备应位于同一网络。请准备好 ZimaOS 账户和密码。如果设备刚刚开箱，请先按照**[入门指南](./get-started "通过 ZimaClient 和账户创建，从首次启动开始设置 ZimaOS")**完成设置。

## 安装 ZimaClient

下载适用于 **[Windows 或 macOS](https://www.zimaspace.com/zimaos/download "下载适用于 Windows 和 macOS 的 ZimaClient 桌面应用")**的 ZimaClient，然后打开它。

## 登录并连接

1. 打开 ZimaClient。它会扫描本地网络，并列出找到的运行 ZimaOS 的 NAS 设备。选择你的设备并点击连接。

![ZimaClient 设备发现界面，显示在本地网络中找到的运行 ZimaOS 的 NAS 设备](/images/guides/zimaclient-desktop-discovery.png)

2. 选择设备，使用 ZimaOS 账户登录。勾选**记住密码**，以保持登录状态。

![ZimaClient 桌面登录界面，显示 ZimaOS 账户用户名和密码字段](/images/guides/zimaclient-desktop-sign-in.webp)

3. 配置默认挂载，让存储空间显示在 macOS Finder 或 Windows 文件资源管理器的网络部分。挂载后，它就像一块始终插着的 USB 硬盘。视频编辑软件和其他电脑应用可以直接从 NAS 打开文件，就像这些文件位于本地磁盘上一样。

![ZimaClient 桌面界面，正在为 Finder 和文件资源管理器配置默认存储挂载](/images/guides/computer-zimaclient-mount.webp)

首次登录后，电脑即与设备绑定。

{% note tip 远程访问 %}
首次登录时会自动配置远程访问。之后，只要你已在 ZimaOS 设备的**设置 > 网络**中启用远程访问功能，笔记本电脑就能通过加密的点对点通道从任何地方访问 NAS，无需其他配置。
{% endnote %}

## 在 Finder 中访问共享文件夹

连接后，ZimaOS 存储会直接显示在 macOS 的 Finder 和 Windows 的文件资源管理器中。你可以像浏览电脑上的其他文件夹一样浏览共享文件夹，无需使用网页界面，即可拖入或拖出文件。

![macOS Finder 窗口，显示可像本地文件夹一样访问的 ZimaOS 共享文件夹](/images/guides/computer-finder-smb.png)

文件共享默认通过 **[SMB 文件共享](./smb-troubleshooting "通过 SMB 共享文件，使其显示在 Finder 和文件资源管理器中")**开启，并由你的 ZimaOS 账户保护。

## 选择要备份的文件夹

选择电脑中重要的文件夹，例如文档、项目和照片。

1. 在 ZimaClient 中点击**备份**。
2. 点击**添加备份目录**。
3. 选择要备份的文件夹。

这些文件夹只需选择一次。此后，ZimaClient 会按照你设置的计划，在后台自动持续备份，无需记得手动运行。

![ZimaClient 桌面界面，用于选择要备份的电脑文件夹](/images/guides/computer-zimaclient-folders.png)

## 选择目标位置

请将备份保存到你自己的存储空间中，例如单盘或 RAID 阵列，绝不要使用 ZimaOS 系统盘。系统盘通常容量最小，电脑文件夹很快就会将它填满。有关存储空间的规划，请参阅**[存储设置](./storage-setup "根据你的需求选择合适的 RAID 和存储配置")**。

![ZimaClient 桌面目标位置选择器，显示可供备份使用的存储空间](/images/guides/computer-zimaclient-destination.png)

## 开始备份

确认并开始。首次备份需要传输所有已选内容，因此耗时最长。后续备份只传输发生变化的内容。

![ZimaClient 桌面备份确认界面，显示开始按钮](/images/guides/computer-zimaclient-start.png)

## 恢复文件

恢复文件与备份同样简单。

在 Finder 或文件资源管理器中打开 ZimaOS 存储，然后将文件拖回电脑。文件夹备份可以保护你实际工作的文件。在 Mac 上，**[Time Machine 备份](./time-machine-backup "使用 Time Machine 通过网络将 Mac 备份到 NAS")**还可以提供完整的系统恢复能力。

在依赖任何备份前，请恢复一个文件并打开它。从未测试过的备份，就等于从未测试过的计划。

## 备份速度

从理论上看，通过 5 GHz Wi-Fi 连接的电脑速度上限约为 100 MB/s。在普通家庭环境中，实际 Wi-Fi 传输速度通常为 40 到 80 MB/s，具体取决于路由器和无线环境的拥挤程度。NAS 端可以轻松跟上，而且 ZimaOS 传输大量小文件时与传输大型视频一样流畅，因此充满细小文件的项目文件夹不会比电影更慢。

真正影响速度的因素，按重要程度依次如下：

1. **有线还是 Wi-Fi。** 千兆网线可稳定、可预测地提供 110 到 125 MB/s。Wi-Fi 与家中所有设备共享无线资源，距离和墙壁都会降低速度。
2. **路由器。** 这是效果最明显的单项升级。社区测试中，将运营商提供的路由器更换为性能较好的型号后，同一项 Wi-Fi 传输从 18 MB/s 提升到了约 90 MB/s。
3. **距离和干扰。** 靠近路由器使用 5 GHz，优于在远处连接；邻居网络和 IoT 设备造成的信道拥堵，会减少你能使用的无线传输时间。
4. **其他因素影响很小。** 处理好前三项后，设备网络端口、内部硬盘和文件组合很少会成为瓶颈。

如果电脑支持 Thunderbolt，**[Thunderbolt 直连](./thunderbolt-direct-connect "通过 Thunderbolt 将电脑连接到 ZimaOS，以获得最高速度")**可以大幅超过 Wi-Fi，速度只受设备内部硬盘限制。

首次进行大规模备份时，接上网线并让它完成。

## 常见问题

**备份中断了。** ZimaOS 会自动从中断的位置继续。重新连接后，它会接着运行。

**更换了电脑。** 安装 ZimaClient，使用同一 ZimaOS 账户登录，然后重新添加文件夹。NAS 上的数据不会受到影响。

**目标位置空间不足。** 将备份指向更大的存储空间，或使用**[在硬盘间移动数据](./data-migration "在 ZimaOS 的硬盘之间移动 Docker 镜像、应用数据和文件夹")**中的内置工具释放空间。

## 实用提示

{% note tip %}
- 更换电脑前，打开一次 ZimaClient，并让它完成最后一次备份。
- 同步到云端的文件夹不是备份：在本地删除文件，也会将其从所有位置删除。备份会保留版本，并且只向前写入。
{% endnote %}

## 下一步

- **[手机备份](./phone-backup "通过 ZimaClient 自动将手机备份到 ZimaOS")** — 让口袋里的手机也能享受同样简单的备份
- **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份原则保护数据")** — 一份备份并不等于一套计划
