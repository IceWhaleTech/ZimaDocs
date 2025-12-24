---
title: 文章标题  
description:  
type: Docs  
author: admin  
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字  
---  
## 段落标题  
## **I. 概述**

Arch Linux 长期以来一直受到开发者和高级用户的青睐，因其简约的设计、滚动发布模式以及高度的可定制性。

ZimaBoard 2 是一款基于 x86 的单板服务器，兼具性能和扩展性，是部署 Arch Linux 的优秀平台，适用于家庭服务器、自托管服务、开发或测试环境等场景。

本文将提供完整的 ZimaBoard 2 上安装 Arch Linux 并进行基本系统配置的步骤。所有步骤均清晰展示，设计上便于复现，适合作为首次在此平台上部署 Arch Linux 的用户参考。

* * *

## **II. 准备工作**

1.  ### 硬件清单
> *   **ZimaBoard 2 主板** ⚠️ 本指南假设系统安装在板载 eMMC 上，安装过程将对 eMMC 进行分区和格式化，请确保其中没有重要数据。
> 
*   **HDMI 显示器 + USB 键盘**
> *   **USB 闪存驱动器 (≥ 8 GB)** （用于创建启动安装盘）⚠️ 创建启动盘时，USB 驱动器将被格式化，所有现有数据将被删除，请提前备份重要文件。
> *   **有线网络连接** （推荐，因安装过程中需要网络连接）

2.  ### 软件准备
* **用于创建启动 USB 的计算机** （Windows、macOS 或 Linux）
*   [\- 官方 Arch Linux ISO 镜像（2025.12.01）](https://archlinux.org/download/)
*   **启动 USB 创建工具** （选择一个）：
    *   **balenaEtcher** （跨平台，图形界面，推荐）
    *   **Rufus** （Windows 用户使用）

* * *

## **III. 创建启动 USB（以 balenaEtcher 为例）**

![balenaEtcher 烧录过程](https://manage.icewhale.io/api/static/docs/1766567149666_copyImage.png)

> ⚠️ 创建启动 USB 时会格式化闪存驱动器并删除所有现有数据，请提前备份重要文件。

1. 插入 USB 闪存驱动器。
2. 启动 **balenaEtcher**。
3. 点击 **“从文件烧录”** 并选择已下载的 `archlinux-2025.12.01-x86_64.iso`。
4. 点击 **“选择目标”** 并选择你的 USB 闪存驱动器（确保选择正确的设备）。
5. 点击 **“烧录！”** 并等待写入过程完成。
6. 安全弹出 USB 闪存驱动器。

![balenaEtcher 烧录完成](https://manage.icewhale.io/api/static/docs/1766567150367_copyImage.png)

* * *

## **IV. 从 USB 启动 ZimaBoard 2**

1. 将准备好的 Arch Linux 启动 USB 驱动器插入 ZimaBoard 2 的 USB 端口。
2. 连接 HDMI 显示器、键盘和以太网电缆。
3. 开机。看到 **ZIMA** logo 时，反复按 **F11** 进入 **启动菜单**。
4. 使用方向键选择你的 USB 闪存驱动器。
5. 按 **Enter** 确认并从 USB 启动。

![启动选项](https://manage.icewhale.io/api/static/docs/1766567151194_copyImage.png)

* * *

## **V. 进入安装环境并进行初始配置**

1.  ### 启动进入 Arch Linux 安装环境

从启动菜单中选择第一个选项：

    Arch Linux install medium (x86_64)

![Arch 启动选项](https://manage.icewhale.io/api/static/docs/1766567151645_copyImage.png)

启动过程完成后，你将进入一个 root shell：

    root@archiso ~ #

![Arch 安装环境](https://manage.icewhale.io/api/static/docs/1766567152384_copyImage.png)

这意味着你已经进入了 Arch Linux 安装环境。

* * *

2.  ### **验证网络连接**

首先，检查系统是否检测到了网络接口：

    ip link

如果你能看到类似 **enp\*** 的接口，说明网络接口卡已成功检测到。

* * *

3.  ### **测试网络连接**

接下来，测试网络连接：

    ping archlinux.org

如果 ping 测试成功，说明网络连接正常。按`Ctrl + C` 停止测试。

![网络连接测试](https://manage.icewhale.io/api/static/docs/1766567153730_copyImage.png)

* * *

4.  ### **同步系统时间**

在安装之前，建议启用网络时间同步，以确保系统时间的准确性。

启用 NTP 以允许自动时间同步：

    timedatectl set-ntp true

检查同步状态：

    timedatectl

如果时间显示正确，系统时间同步完成。

![同步系统时间](https://manage.icewhale.io/api/static/docs/1766567154188_copyImage.png)

* * *

5.  ### **磁盘分区（GPT）**

本指南假设系统将安装在 **板载 eMMC 设备** 上。

> ⚠️ 安装过程将对板载 eMMC 进行分区和格式化，请确保 eMMC 上没有重要数据。

* * *

#### 查看磁盘信息

    lsblk

运行以下命令查看磁盘和分区信息：

![查看磁盘信息](https://manage.icewhale.io/api/static/docs/1766567155139_copyImage.png)

#### 使用 `cfdisk` 创建 GPT 分区表

##### 启动分区工具：

    cfdisk /dev/mmcblk0

![进入分区工具](https://manage.icewhale.io/api/static/docs/1766567156058_copyImage.png)

##### 选择分区表类型

首次进入 `cfdisk` 时，系统会提示选择分区表类型。选择：`GPT`

![选择分区表类型](https://manage.icewhale.io/api/static/docs/1766567156700_copyImage.png)

##### 创建第一个分区（EFI 系统）

###### ① 创建新分区

在主界面中，执行以下步骤：

1.  使用 **右箭头键 (→)**。
2.  将光标移到底部菜单，选择 **[NEW]**。

![创建新分区](https://manage.icewhale.io/api/static/docs/1766567157176_copyImage.png)

3. 按 **Enter** 创建新分区。

###### ② 指定分区大小

当系统提示分区大小时，输入：`512M`

![输入 512M](https://manage.icewhale.io/api/static/docs/1766567157797_copyImage.png)

然后按 **Enter**。

###### ③ 设置分区类型

创建新分区后：

1. 确保新创建的分区被选中。
2. 使用 **右箭头键 (→)** 移动到底部菜单。
3. 选择 **[Type]**。
4. 按 **Enter**。

![查看分区类型](https://manage.icewhale.io/api/static/docs/1766567158616_copyImage.png)

###### ④ 选择 EFI 系统类型

从分区类型列表中：

1. 使用 **↑ / ↓** 键。
2. 找到 **EFI System**。
3. 按 **Enter** 确认。

![选择分区类型](https://manage.icewhale.io/api/static/docs/1766567159383_copyImage.png)

###### ⑤ 验证结果

返回主界面后，你应该看到类似的条目：

`/dev/mmcblk0p1 512M EFI System`

![确认分区结果](https://manage.icewhale.io/api/static/docs/1766567160155_copyImage.png)

* * *

##### **创建第二个分区（Swap）**

###### ① 选择空闲空间

使用 **↓** 键选择：`Free space 28.6G`

###### ② 创建新分区

*   使用 **右箭头键 (→)** 移动到底部菜单。
*   选择 **[NEW]**。
*   按 **Enter**。

###### ③ 指定分区大小

当提示分区大小时，输入：`2G`

![输入 2G](https://manage.icewhale.io/api/static/docs/1766567161097_copyImage.png)

###### ④ 设置分区类型为 Linux Swap

*   选择新创建的约 2GB 分区。
*   输入 **[Type]**。
*   选择 **Linux swap**。

![设置分区类型为 Linux swap](https://manage.icewhale.io/api/static/docs/1766567162104_copyImage.png)

* * *

##### 创建第三个分区（Root）

###### ① 选择剩余的空闲空间

