---
title: Synology 手动传输
seo_title: "Synology 手动传输：挂载 DSM 共享并将文件复制到 ZimaOS"
description: "将文件从 Synology DSM 手动传输到 ZimaOS。在 Files 中将 DSM 共享挂载为 LAN Storage，再按照步骤复制文件，并检查容量和账户设置。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

本页是从 Synology 设备迁移文件的分步手动操作指南。如果希望先了解推荐方式和分阶段迁移策略，请从 **[从其他 NAS 迁移](./synology-to-zimacube-migration "采用分阶段方式将文件从 Synology NAS 迁移到 ZimaOS")** 开始。

## 在 Files 中挂载 DSM 共享

SMB 是两台设备之间的通用协议。Synology DSM 和 ZimaOS 都能良好支持 SMB，因此无需额外工具即可通过网络直接传输。

开始前，请确认准备迁移的文件夹已在 DSM 中共享。如果某个文件夹创建时没有开启共享，请在 DSM 中新建共享目录，再将要传输的数据移入其中。

1. 在 ZimaOS 仪表板中打开 Files 应用。
2. 在左侧导航栏中找到 Storage 旁的加号，单击后选择 **LAN Storage**。

![ZimaOS Files 应用显示 Storage 旁的加号和 LAN Storage 选项](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)

3. 在弹窗中输入 Synology 设备的 IP 地址，然后单击 **Connect**。如果共享账户设置了用户名和密码，也请一并输入。

![ZimaOS Files 连接弹窗用于输入 Synology DSM 的 IP 地址](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)

连接成功后，Synology 设备会作为网络设备显示在 Storage 下方，其共享目录则显示在右侧。

![ZimaOS Files 显示已连接的 Synology 设备及其共享目录列表](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)

## 复制文件

1. 打开共享目录，选择要迁移的文件和文件夹。你也可以全选。
2. 单击右上角的 **Copy** 按钮。

![ZimaOS Files 中的 Synology 共享目录已选择文件并显示 Copy 按钮](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

3. 进入 ZimaOS 存储空间中的目标目录，然后单击 **Paste**。

![ZimaOS 存储目录右上角显示 Paste 按钮](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)

{% note warn 检查容量 %}
确保目标存储空间的剩余容量大于准备复制的数据总大小，然后等待传输完成。
{% endnote %}

## 迁移后

文件进入新设备后，请使用 **[3-2-1 备份方案](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** 加以保护。刚刚迁移完成的资料库，正是最不应该再次丢失的数据。
