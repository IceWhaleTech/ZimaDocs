---
title: Unraid的首次体验$129 - 安装
---

# 介绍Unraid

![介绍unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-introduce-unraid.png)

Unraid OS允许复杂的媒体爱好者、游戏玩家和其他高速数据用户对其数据、媒体、应用程序和桌面进行终极控制，使用几乎任何硬件组合。

# 第一个选项 - 官方软件刻录镜像

## 使用USB闪存驱动器进行安装

准备一个USB闪存驱动器（大于1G）并格式化为FAT32格式。将名称更改为UNRAID（Mac）

![Unraid USB闪存驱动器](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive.png)

![Unraid USB闪存驱动器](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive1.png)

![Unraid USB闪存驱动器](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive2.png)

![Unraid USB闪存驱动器](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive3.png)

## 下载官方[USB创作工具](https://unraid.net/download)

![Unraid官方创作工具](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-usb-creator.png)

## 下载[官方镜像](https://unraid.net/download)

![下载Unraid官方镜像](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-image.png)

## 打开USB创作工具并写入UnraidOS

根据规范选择以下选项：

![写入unraid os](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-unraid-os.png)

**点击‘写入’并等待。**

![写入unraid镜像](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image.png)

![写入unraid镜像完成](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image-done.png)

# 第二个选项 - 手动写入系统镜像

## 修改"make_bootable"

**下载镜像包并解压所有文件，然后将解压的文件复制到USB闪存驱动器的根目录**

> **提示：**
>
> USB闪存驱动器的格式也需要是FAT32
>
> Windows系统需要以管理员身份运行USB闪存驱动器中的make_bootable.bat文件
>
> Linux系统执行make_bootable_linux文件

![更改Unraid可启动性](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-click-boottable.png)

## 完成刻录

![Unraid可启动性](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in.png)

![Unraid可启动性完成](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in1.png)

## 在ZimaBoard上安装UnraidOS

## 从安装USB闪存驱动器启动

![启动Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot.png)

## 选择操作系统

![Unraid可启动性](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot-choose-unraidos.png)

> ## 启动模式选择器（Syslinux）
> 
> 配置完BIOS后，将弹出Unraid服务器操作系统启动菜单。您可以选择多个选项：
>
> **unRAID OS（无头模式）**
>
> Unraid服务器操作系统的标准启动模式。无头模式占用的内存比桌面模式少，但依赖于使用另一台设备访问WebGUI进行管理。
>
> **Unraid OS GUI模式（桌面）**
>
> 桌面模式加载一个轻量级的桌面界面，带有快速启动菜单，用于访问WebGUI、产品文档和有用的Linux实用程序，包括bash shell、midnight commander和htop。此模式可能对尝试诊断网络连接问题的用户有帮助，或者对于没有单独设备用于连接到WebGUI的用户。
> 
> **unRAID OS安全模式（无头模式）**
>
> 使用此启动模式来诊断插件是否导致系统稳定性问题。

![登录unraid OS](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-log-in-unraid-with-ip.png)

# 连接到Unraid WebGUI

有两种方法可以连接到Unraid的WebGUI：

- 在GUI模式下启动Unraid并登录（用户名为**`root`**，默认没有密码）；或

- 从Mac或PC打开Web浏览器，并导航到**`http://tower.local`** 注意：如果您在USB闪存创作工具中配置了不同的主机名，请使用该名称而不是**`tower`**。

![Unraid用户仪表板](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-unraid-dashborad.png)

这是UNRAID的主界面。该页面上可以看到很多信息，如系统状态、主板信息、CPU使用情况、网络、磁盘信息、用户信息等。

[![Discord卡片](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)