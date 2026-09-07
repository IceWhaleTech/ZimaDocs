---
title: 连接其他 NAS
seo_title: "将 Synology NAS 连接到 ZimaOS：迁移文件或跨设备备份"
description: "将其他 NAS 连接到你的 ZimaOS 设备。通过网络挂载共享文件夹，迁移文件，或将连接用于 3-2-1 计划中的跨设备备份。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---
把另一台 NAS 连接到 ZimaOS，同时打开两扇门。你可以永久迁移文件，也可以保留连接用于跨设备备份。两者都从同一步开始：通过网络把两台设备连起来。本页覆盖完整旅程，以 Synology DSM 为例。

## 为什么连接

一个连接，两种用途：

- **迁移文件。** 把重要的文件夹搬到你的 ZimaOS 设备，迁移期间旧 NAS 继续运行，准备好之后再清理。
- **纳入备份计划。** 已连接的 NAS 可以成为 **[3-2-1 备份计划](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** 中的 LAN 数据源或第二台设备目的地。一个连接同时承担两个任务。

## 连接两台设备

SMB 是这里的通用语言。ZimaOS 和其他 NAS 系统都支持得很好，无需额外工具即可直接通过网络传输。

开始前，请确认要移动的文件夹已在旧设备上共享。在 DSM 中检查**控制面板 > 共享文件夹**。如果某个文件夹创建时没有共享，先在 DSM 中新建共享目录，再把要转移的数据移进去。

1. 在 ZimaOS 仪表盘中打开 **Files** 应用。
2. 在左侧导航中，点击 **Storage** 旁边的加号，然后点击 **LAN Storage**。

![ZimaOS Files 应用显示 Storage 旁的加号和 LAN Storage 选项](/images/guides/files-lan-storage-option.webp)

3. 在弹窗中输入另一台设备的 IP 地址，点击 **Connect**。如果共享账户有用户名和密码，也一并输入。

![ZimaOS Files 连接弹窗，用于输入另一台 NAS 的 IP 地址](/images/guides/files-lan-storage-connect.webp)

连接成功后，该设备会出现在 Storage 下方，其共享目录列在右侧。

![ZimaOS Files 显示已连接的另一台 NAS 及其共享目录](/images/guides/files-lan-storage-listed.webp)

## 复制文件

1. 打开共享目录，选择要移动的文件和文件夹。也可以全选。
2. 点击右上角的 **Copy** 按钮。

![ZimaOS Files 共享目录中已选中文件并显示 Copy 按钮](/images/guides/files-lan-copy.webp)

3. 进入 ZimaOS 存储中的目标目录，点击 **Paste**。

![ZimaOS 存储目录，右上角显示 Paste 按钮](/images/guides/files-lan-paste.webp)

{% note warn 容量检查 %}
确保目标存储的剩余容量大于要复制内容的总大小，然后让传输运行即可。
{% endnote %}

复制会在旧设备上保留原文件。在你决定清理之前什么都不会被删除，因此可以先放心验证副本。

传输完成后，文件会像设备上的其他内容一样出现在 ZimaOS 存储中。打开检查一遍确认都到位了，旧 NAS 就可以继续服务，直到你准备好让它退役。

![ZimaOS Files 显示复制完成的文件夹已可用在 ZimaOS 存储中](/images/guides/files-lan-copied.webp)

## 慢慢来

切换没有最后期限。分阶段迁移比一步到位更稳妥。

从每天使用的文件夹开始。等它们在新设备上安顿好，再按自己的节奏处理其余部分。旧设备会一直提供文件服务，直到最后一轮复制完成。

## 迁移之后

文件到了新设备后，用 **[3-2-1 备份计划](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** 保护它们。刚迁移完的资料库，正是你最不想再失去一次的数据。

## 下一步

- **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** — 保护刚迁移的文件
- **[连接云盘](./cloud-drive-connect "将 Google Drive、Dropbox 或 OneDrive 连接到 ZimaOS")** — 异地故事的另一半
- **[手机备份](./phone-backup "使用 ZimaClient 将手机照片和文件自动备份到 ZimaOS")** — 把家里的其他数据也收进来
