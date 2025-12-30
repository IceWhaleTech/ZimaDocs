---
title: 在 ZimaBoard 2 上安装 Arch Linux
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## **I. 概述**

长期以来，Arch Linux 以其极简设计、滚动更新模型以及高度可定制性而深受开发者和高级用户的喜爱。

ZimaBoard 2 是一款基于 x86 的单板服务器，在性能与可扩展性之间取得平衡，是在家庭服务器、自托管服务以及开发或测试环境中部署 Arch Linux 的优秀平台。

本文提供在 ZimaBoard 2 上安装 Arch Linux 并执行基础系统配置的完整操作流程。步骤清晰、可复现，旨在为首次在该平台上部署 Arch Linux 的用户提供实用参考。

* * *

## **II. 准备工作**

1.  ### 硬件清单
    

*   **ZimaBoard 2 主板**
*   > ⚠️ 本指南中，系统安装在板载 eMMC 上。安装过程中会对 eMMC 进行分区和格式化，请确保其中没有重要数据。
>

*   **HDMI 显示器 + USB 键盘**
    

 *   **USB 闪存盘（≥ 8 GB）**（用于制作启动安装盘）

 *   >⚠️ 在制作可启动介质时会格式化 USB 驱动器，所有现有数据将被擦除。请提前备份重要文件。
>    

*   **有线网络连接**（推荐，安装过程中需要联网）
    
2.  ### 软件准备
    

* **用于制作启动 USB 的电脑**（Windows、macOS 或 Linux）
    
*   [\- 官方 Arch Linux ISO 镜像 (2025.12.01)](https://archlinux.org/download/)
    
*   **制作启动 USB 的工具**（任选其一）：
    
    *   **balenaEtcher**（跨平台、图形界面，推荐）
        
    *   **Rufus**（适用于 Windows 用户）
        

* * *

## **III. 制作启动 U 盘（以 balenaEtcher 为例）**

![balenaEtcher burning process](https://manage.icewhale.io/api/static/docs/1766567149666_copyImage.png)

> ⚠️ 制作启动 U 盘会格式化闪存盘并擦除其中所有数据。请提前备份重要文件。

1. 将 USB 闪存盘插入电脑。 
    
2.  启动 **balenaEtcher**。
    
3.  点击 **“Flash from file”** 并选择已下载的 `archlinux-2025.12.01-x86_64.iso`。
    
4.  点击 **“Select target”** 并选择你的 USB 闪存盘（注意不要选错设备）。
    
5.  点击 **“Flash!”** 并等待写入完成。
    
6.  安全弹出 USB 闪存盘。
    

![balenaEtcher burning complete](https://manage.icewhale.io/api/static/docs/1766567150367_copyImage.png)  

* * *

## **IV. 从 USB 驱动器引导 ZimaBoard 2**

1.  将准备好的 Arch Linux 可启动 USB 驱动器插入 ZimaBoard 2 的 USB 接口。
    
2.  连接 HDMI 显示器、键盘和以太网线。
    
3.  开机。当出现 **ZIMA** 徽标时，反复按 **F11** 进入 **启动菜单（Boot Menu）**。
    
4.  使用方向键选择你的 USB 闪存盘。
    
5.  按 **Enter** 确认并从 USB 驱动器引导。
    

![boot options](https://manage.icewhale.io/api/static/docs/1766567151194_copyImage.png)

* * *

## **V. 进入安装环境并执行初始配置**

1.  ### 引导进入 Arch Linux 安装环境
    
从启动菜单选择第一项：

    Arch Linux install medium (x86_64)

![arch startup options](https://manage.icewhale.io/api/static/docs/1766567151645_copyImage.png)

引导完成后，你将进入一个 root shell：

    root@archiso ~ #

![
Arch installation environment](https://manage.icewhale.io/api/static/docs/1766567152384_copyImage.png)

这表示你已进入 Arch Linux 安装环境。

* * *

2.  ### **验证网络接口**
    
首先检查系统是否检测到网络接口：

    ip link

如果可以看到类似 **enp*** 的接口，则表示网卡已被成功识别。

* * *

3.  ### **测试网络连通性**
    
接下来测试网络连接：

    ping archlinux.org

如果 ping 成功，则网络连接正常。按 `Ctrl + C` 停止测试。

![Network connectivity test](https://manage.icewhale.io/api/static/docs/1766567153730_copyImage.png)

* * *

4.  ### **同步系统时间**
    
在继续安装之前，建议启用网络时间同步以确保系统时间准确。

启用 NTP 自动同步：

    timedatectl set-ntp true

查看同步状态：

    timedatectl

如果时间显示正确，则系统时间同步已完成。

![Synchronize system time](https://manage.icewhale.io/api/static/docs/1766567154188_copyImage.png)

* * *

5.  ### **磁盘分区（GPT）**
    
本指南假定系统将安装在 **板载 eMMC 设备** 上。

> ⚠️ 安装过程会对板载 eMMC 进行分区和格式化。请在继续操作前确保 eMMC 中没有重要数据。

* * *

#### 查看磁盘信息

    lsblk

运行上述命令以树状查看磁盘与分区信息：

![View disk information](https://manage.icewhale.io/api/static/docs/1766567155139_copyImage.png)

#### 使用 `cfdisk` 创建 GPT 分区表

##### 启动分区工具：

    cfdisk /dev/mmcblk0

![Enter the partition tool](https://manage.icewhale.io/api/static/docs/1766567156058_copyImage.png)

##### 选择分区表类型

首次打开 `cfdisk` 时，会提示选择分区表类型。请选择：`GPT`

![Select partition table type](https://manage.icewhale.io/api/static/docs/1766567156700_copyImage.png)

##### 创建第一个分区（EFI 系统分区）

###### ① 新建分区

在 `cfdisk` 主界面中，按如下操作：

1.  使用 **右箭头 (→)**。
    
2.  将光标移至底部菜单并选择 **[NEW]**。
    

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567157176_copyImage.png)

3.  按 **Enter** 创建新分区。
    

###### ② 指定分区大小

提示输入分区大小时，输入：`512M`

![Input 512M](https://manage.icewhale.io/api/static/docs/1766567157797_copyImage.png)

然后按 **Enter**。

###### ③ 设置分区类型

新分区创建后：

1.  确保选中新创建的分区。
    
2.  使用 **右箭头 (→)** 移到底部菜单。
    
3.  选择 **[Type]**。
    
4.  按 **Enter**。
    

![View partition type](https://manage.icewhale.io/api/static/docs/1766567158616_copyImage.png)

###### ④ 选择 EFI 系统类型

在分区类型列表中：

1.  使用 **↑ / ↓** 选择键。
    
2.  找到 **EFI System**。
    
3.  按 **Enter** 确认。
    

![Select partition type](https://manage.icewhale.io/api/static/docs/1766567159383_copyImage.png)

###### ⑤ 验证结果

回到主界面后，你应看到类似条目：

`/dev/mmcblk0p1 512M EFI System`

![Confirm partition results](https://manage.icewhale.io/api/static/docs/1766567160155_copyImage.png)

* * *

##### **创建第二个分区（Swap）**

###### ① 选择剩余空间

使用 **↓** 选择：`Free space 28.6G`

###### ② 新建分区

*   使用 **右箭头 (→)** 移到底部菜单。
    
*   高亮 **[NEW]**。
    
*   按 **Enter**。
    

###### ③ 指定分区大小

提示输入大小时，输入：`2G`

![Enter 2G](https://manage.icewhale.io/api/static/docs/1766567161097_copyImage.png)

###### ④ 将分区类型设置为 Linux swap

*   选择新建的大约 2 GB 分区。
    
*   进入 **[Type]**。
    
*   选择 **Linux swap**。
    

![Set the partition type to Linux swap.](https://manage.icewhale.io/api/static/docs/1766567162104_copyImage.png)

* * *

##### 创建第三个分区（根分区）

###### ① 选择剩余的自由空间

此时你应看到：

`Free space 26.6G`

保持该项被选中。

![Create the third partition (Root).](https://manage.icewhale.io/api/static/docs/1766567162844_copyImage.png)

###### ② 新建分区

*   使用 **右箭头 (→)** 移到底部菜单。
    
*   选择 **[NEW]**。
    
*   按 **Enter**。
    

![
Select the 3rd partition (Root).](https://manage.icewhale.io/api/static/docs/1766567163775_copyImage.png)

###### ③ 使用剩余全部空间

提示输入分区大小时：

**不要输入任何内容，直接按 Enter** 以使用剩余所有空间。

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567164682_copyImage.png)

###### ④ 设置分区类型

分区创建后：

*   默认分区类型为 **Linux filesystem**。
    
*   通常无需更改，保持默认即可。
    

![Default partition type](https://manage.icewhale.io/api/static/docs/1766567165509_copyImage.png)

* * *

##### 写入分区表并退出

###### 写入分区表

*   选择 **[Write]**。
    

![Write to partition table](https://manage.icewhale.io/api/static/docs/1766567166450_copyImage.png)

*   按 **Enter**。
    
*   出现提示时输入：`yes`
    

![Confirm writing](https://manage.icewhale.io/api/static/docs/1766567167219_copyImage.png)  

###### 退出 `cfdisk`

*   选择 **[Quit]**。
    

![Exit cfdisk](https://manage.icewhale.io/api/static/docs/1766567168020_copyImage.png)

*   按 **Enter**。
    

* * *

##### 分区摘要

此时，磁盘分区已完成。应具有如下布局：


| Size |Partition | type |
| - | - | - |
| mmcblk0p1| 512M | EFI System |
| mmcblk0p2 | 2G | Linux swap |
| mmcblk0p3 | 26.6G | Linux filesystem |

![Partition completed](https://manage.icewhale.io/api/static/docs/1766567168969_copyImage.png)

至此，你已完成 Arch Linux 安装过程中最容易出错的步骤。

* * *

6.  ### 格式化分区
    
简单说明：

*   **格式化（Formatting）** = 清空分区并为其准备文件系统
    
*   **挂载（Mounting）** = 告诉系统如何使用这些分区
    

* * *

#### ① 格式化 EFI 分区（FAT32）

运行以下命令格式化 `mmcblk0p1`：

    mkfs.fat -F32 /dev/mmcblk0p1

![Format partition](https://manage.icewhale.io/api/static/docs/1766567169740_copyImage.png)

#### ② 初始化并启用交换分区

    mkswap /dev/mmcblk0p2
    swapon /dev/mmcblk0p2

![Initialize and enable partitions](https://manage.icewhale.io/api/static/docs/1766567170625_copyImage.png)

#### ③ 格式化根分区（ext4）

    mkfs.ext4 /dev/mmcblk0p3

![Format root partition](https://manage.icewhale.io/api/static/docs/1766567171361_copyImage.png)

* * *

7.  ### 挂载分区
    
#### 将根分区挂载到 `/mnt`

    mount /dev/mmcblk0p3 /mnt

#### 创建并挂载 EFI 分区

    mkdir /mnt/boot
    mount /dev/mmcblk0p1 /mnt/boot

![Create and mount the EFI partition](https://manage.icewhale.io/api/static/docs/1766567172129_copyImage.png)

* * *

## VI. 安装 Arch Linux（pacstrap）

1.  ### 运行 `pacstrap`
    
    pacstrap /mnt base linux linux-firmware networkmanager sudo vim

**参数说明（仅供参考）：**

*   **base**：最小 Arch Linux 系统
    
*   **linux**：标准 Linux 内核
    
*   **linux-firmware**：硬件固件（必需）
    
*   **networkmanager**：网络管理工具
    
*   **sudo**：为非 root 用户提供权限管理
    
*   **vim**：文本编辑器（用于后续配置）
    

此步骤将下载并安装软件包，所需时间取决于网络速度。过程会输出大量信息，属于正常现象。

![Execute pacstrap](https://manage.icewhale.io/api/static/docs/1766567172894_copyImage.png)

![pacstrap execution complete](https://manage.icewhale.io/api/static/docs/1766567174214_copyImage.png)

* * *

2.  ### 生成 `fstab` 文件
    
为新系统生成文件系统挂载表：

    genfstab -U /mnt >> /mnt/etc/fstab

![Generate fstab file](https://manage.icewhale.io/api/static/docs/1766567175220_copyImage.png)

* * *

3.  ### 进入新安装的系统（chroot）
    
*   切换到新安装的 Arch Linux 系统环境：
    
`arch-chroot /mnt`
    
*   成功切换后，提示符将类似于：
    
`[root@arch /]#`
    
**这表明你已退出安装环境，进入新安装的 Arch Linux 系统。**

![Enter the newly installed system (chroot)](https://manage.icewhale.io/api/static/docs/1766567175932_copyImage.png)

* * *

## VII. 基本系统配置

1.  ### 设置时区
    
以香港为例：

    ln -sf /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime

同步硬件时钟（非常重要）：

    hwclock --systohc

![Synchronizing hardware clock](https://manage.icewhale.io/api/static/docs/1766567176716_copyImage.png)

快速验证（可选）

如果时间显示为 **UTC+8（香港时间）**，则配置成功。

![Hardware clock synchronization successful](https://manage.icewhale.io/api/static/docs/1766567177777_copyImage.png)

* * *

2.  ### 配置区域和语言（Locale）
    
#### ① 编辑 locale 列表

打开语言配置文件：

    vim /etc/locale.gen

![Set language](https://manage.icewhale.io/api/static/docs/1766567178733_copyImage.png)

找到你需要的语言并取消相应行的注释（去掉行首的 `#`）。例如美国英语：

    en_US.UTF-8 UTF-8

![Set language en_US](https://manage.icewhale.io/api/static/docs/1766567179497_copyImage.png)

保存并退出：

*   按 **Esc**
    
*   输入 `:wq`
    
*   按 **Enter**
    

#### ② 生成本地化信息

    locale-gen

![Generate locale](https://manage.icewhale.io/api/static/docs/1766567180239_copyImage.png)  

3.  ### 设置主机名
    
设置系统主机名。你可以替换为任意名称，这里以 `arch` 为示例（可按需更改）：

    echo "arch" > /etc/hostname

![Set system hostname](https://manage.icewhale.io/api/static/docs/1766567180931_copyImage.png)

接下来，配置 `hosts` 文件：

    vim /etc/hosts

![vim hosts](https://manage.icewhale.io/api/static/docs/1766567181830_copyImage.png)

将文件修改为如下内容：

    127.0.0.1   localhost
    ::1         localhost
    127.0.1.1   arch.localdomain arch

![hosts example](https://manage.icewhale.io/api/static/docs/1766567182309_copyImage.png)

⚠️ 如果你的主机名不是 `arch`，请将上述条目中的 `arch` 替换为你实际设置的主机名。

保存并退出 Vim：

*   按 **Esc**
    
*   输入 `:wq`
    
*   按 **Enter**
    

* * *

4.  ### 设置 root 密码
    
为 `root` 用户设置登录密码：

    passwd

系统会提示你输入两次密码：

1.  输入新密码
    
2.  重新输入以确认
    
⚠️ 注意：输入密码时终端不会显示任何字符（连 `*` 都不会），这是正常现象。请确保两次输入一致。

完成后即可使用该密码以 `root` 身份登录系统。

![Set root password](https://manage.icewhale.io/api/static/docs/1766567182798_copyImage.png)

* * *

5.  ### 启用网络服务
    
让 NetworkManager 在开机时自动启动：

    systemctl enable NetworkManager

![Enable network services](https://manage.icewhale.io/api/static/docs/1766567183538_copyImage.png)

![Network service enabled successfully](https://manage.icewhale.io/api/static/docs/1766567184534_copyImage.png)

* * *

## VIII. 安装并配置 systemd-boot 引导加载器

1.  ### 安装 systemd-boot
    
运行：

    bootctl install

![Install systemd-boot](https://manage.icewhale.io/api/static/docs/1766567185486_copyImage.png)

* * *

2.  ### 创建 Arch Linux 的引导项
    
你需要创建如下文件：

`/boot/loader/entries/arch.conf`

该文件告诉 systemd-boot：

*   内核位置
    
*   initramfs 位置
    
*   根文件系统所在分区
    

#### ① 获取根分区的 PARTUUID

    blkid /dev/mmcblk0p3

你会看到类似输出：

    /dev/mmcblk0p3: PARTUUID="12345678-9abc-def0-1234-56789abcdef0"

> 记录并复制引号内的值。

![Write down PARTUUID.](https://manage.icewhale.io/api/static/docs/1766567186422_copyImage.png)

* * *

#### ② 创建引导项配置文件

    vi /boot/loader/entries/arch.conf

![Create startup configuration file](https://manage.icewhale.io/api/static/docs/1766567187080_copyImage.png)

进入插入模式（按 **i**）并输入以下内容：

⚠️ 请将 `YOUR_PARTUUID` 替换为上一步中获取的实际值。

    title   Arch Linux
    linux   /vmlinuz-linux
    initrd  /initramfs-linux.img
    options root=PARTUUID=YOUR_PARTUUID rw

![arch.conf example](https://manage.icewhale.io/api/static/docs/1766567187556_copyImage.png)

保存并退出：

*   按 **Esc**
    
*   输入 `:wq`
    
*   按 **Enter**
    

* * *

## IX. 完成安装并重启

### 退出 chroot

离开 chroot 环境：`exit`

![Exit the chroot environment](https://manage.icewhale.io/api/static/docs/1766567188512_copyImage.png)

### 重启系统

`reboot`

> ⚠️ 重启前请 **确保移除安装介质**（USB 驱动器 / ISO）。

![Restart the system](https://manage.icewhale.io/api/static/docs/1766567189421_copyImage.png)

* * *

### 安装完成

成功启动后，你应该会看到类似以下的画面：

![Installation completed](https://manage.icewhale.io/api/static/docs/1766567190046_copyImage.png)

🎉 至此，**Arch Linux** 的基础安装已完成。系统现在是一个干净、可扩展的起点。

### 后续可考虑的步骤：

*   配置网络
    
*   安装桌面环境
    
你可以参考官方 Arch Wiki 获取更多指导：[https://wiki.archlinux.org/title/General\_recommendations](https://wiki.archlinux.org/title/General_recommendations)

后续的所有配置都可以在此基础上逐步搭建。
