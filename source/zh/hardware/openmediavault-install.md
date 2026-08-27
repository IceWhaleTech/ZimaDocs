---
title: 小尺寸，大应用（OMV+ZimaBoard）
---
# OMV 介绍

![介绍 openmediavault](/images/Small-body-Big-applications-(OMV+Zima)/introduce-openmediavault.png)

**OpenMediaVault（OMV）是一款基于 Debian Linux 的网络附加存储（NAS）解决方案，适用于家庭环境或小型办公室，是一种简单易用的开箱即用解决方案，任何新手用户都可以轻松安装和管理，并且包含许多标准数据应用服务，如 SSH、SMB、DAAP 媒体服务器、RSync。它还可以通过模块化设计框架的功能进行增强，支持额外的应用扩展，如 KVM、Docker 等。另一方面，ZimaBoard 和 OMV 的小尺寸为用户带来了便利。大小并不重要！**

# OMV 安装准备

- OMV 安装 [**映像文件**](https://www.openmediavault.org/download.html)（推荐下载最新的官方 OMV6 稳定版本）
- 一个容量至少为 1G 的 USB 存储器
- 连接显示器的 miniDP 电缆
- 网络电缆：插入 ZimaBoard 上靠近 miniDP 端口的网络端口
- 键盘：只需通过 USB 连接的键盘即可

# 注意事项

- 如果映像写入失败，可以使用 Diskgenius 等磁盘工具清除 USB 存储器上的分区和格式信息。再尝试一次写入映像。

- 由于 OMV 安装过程在许多地方需要联网环境，用户需将 Zima 连接到一个具有畅通互联网连接的路由器或交换机。

# OMV 新安装

## BIOS 设置

**1. 插入 USB 存储器，用 miniDP 电缆连接显示器，连接键盘，通电 ZimaBoard，并持续按下键盘上的 Del 键以进入 BIOS。**
**2. 默认情况下，ZimaBoard 的 BIOS 使用其内置的 eMMC 作为首选启动盘，如下所示**

![BIOS 设置](/images/Small-body-Big-applications-(OMV+Zima)/setup-of-bios.jpeg)

**3. 在 Boot 中，将 Boot Option #1 调整为 USB 存储器的分区 1，如下所示：`"UEFI:Legend ZhenJBFast 1100"` 是包含 OMV6 映像的分区，而 `"UEFI:Legend ZhenJBFast 1100`, Partition 1"` 是 USB 存储器的剩余空间。用户应选择 `"UEFI:Legend ZhenJBFast 1100"` 作为启动首选项。**
**4. 按下 Save & Exit 后，ZimaBoard 将重启并转到 OMV6 安装界面。**

![BIOS 设置](/images/Small-body-Big-applications-(OMV+Zima)/chosse-uefi-boot.jpeg)

## 安装步骤

**1. 为了初始化安装，选择 Install 并按 Enter**

![安装 OMV](/images/Small-body-Big-applications-(OMV+Zima)/install-omv.png)

**2. 选择安装过程的语言；默认语言为英语**

![选择语言](/images/Small-body-Big-applications-(OMV+Zima)/select-language.png)

**3. 默认情况下，ZimaBoard 具有双网络端口，enp2s0 是靠近 miniDP 端口的，而 enp3s0 是靠近电源端口的**

![选择 LAN 端口](/images/Small-body-Big-applications-(OMV+Zima)/choose-lan-port.jpeg)

**4. 当安装程序提示用户选择 OMV 的安装路径时，请确保设置为 “MMC/SD CARD”**

![选择 eMMC](/images/Small-body-Big-applications-(OMV+Zima)/choose-emmc.jpeg)

**5. 安装程序将要求用户确认 ZimaBoard 内部硬盘空间已清空并重新分区**

![分区磁盘](/images/Small-body-Big-applications-(OMV+Zima)/partition-disks.jpeg)

**6. 然后安装程序要求用户设置 root 账户的初始密码**

![初始化密码](/images/Small-body-Big-applications-(OMV+Zima)/Initialize-password.jpeg)

{% note danger %}
**提示：**
  请务必记住这一组账户的密码，这在后续的后台配置操作中是必需的。
{% endnote  %}

**7. 当安装程序提示用户选择 Debian 镜像源时，请确保选择用户当前的国家或地区，并在其中选择适当的镜像源。请记住：这个选择将极大影响用户日常更新/安装各种 OMV 插件的速度**

![选择镜像](/images/Small-body-Big-applications-(OMV+Zima)/choose-image.jpeg)

**8. 继续到下图，新安装的 OVM 完成，用户可以在移除 USB 驱动器后继续 OMV 重启。**

![USB 驱动器启动](/images/Small-body-Big-applications-(OMV+Zima)/usb-drive-boot.jpeg)

{% note danger %}

**请注意：**

- 如果在安装过程中做出了错误的选择或设置，可以按取消按钮返回到安装进度目录，并选择用户需要重置的进度页面。
- 在新安装完成后，如果在 OMV 重启之前移走 USB 存储器，BIOS 将自动使用 eMMC 中的 OMV 启动分区作为首选启动盘，因此用户不必再次进入 BIOS 设置启动选项。

{% endnote  %}

[![Discord 卡片](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)