---
title: 通用第三方系统安装
typora-root-url: ..
---
## 原因

**许多用户在下载系统后不知道如何安装。不清楚安装步骤等。本文将帮助用户解决安装系统的问题**

## 通用生产镜像

**您需要在计算机上做的准备工作。**
- 下载并安装 [balenaEtcher](https://www.balena.io/etcher/) 在您的计算机上
- 下载您希望安装的系统镜像，在文本中 [Ubuntu Server](https://ubuntu.com/download/server)

**ZimaBoard相关准备。**

- ZimaBoard和电源适配器
- 一个USB驱动器（容量需要大于您想要安装的系统镜像）
- 一个miniDP到DP/HDMI适配器（用于连接监视器）
- 一个监视器
- 一个键盘
- 一个USB集线器（可选，如果USB端口不够的话）
- 一个鼠标（可选）
  - 如果您要安装的系统安装程序带有GUI交互界面，将会非常方便。大多数桌面操作系统会有一个，服务器操作系统一般没有。）
- 一根网络电缆（推荐）
  - 方便您完成网络设置，并在安装系统的同时安装最新的安全和功能更新。）

# 创建一个安装USB闪存盘

## 1. 打开 balenaEtcher

![打开 Balenaetcher](/images/Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

## 2. 点击“从文件刷写”并选择您之前下载的系统镜像。

![使用 Balenaetcher 将镜像写入 USB](/images/Installing-Ubuntu-System/intall-ubuntu-system-choose-image-in-balenaetcher.png)

![使用 Balenaetcher 将镜像写入 USB](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-image-in-balenaetcher1.png)

## 3. 点击“选择目标”，在弹出对话框中选择您插入的USB驱动器。

![使用 Balenaetcher 将镜像写入 USB](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-usb-disk.png)

## 4. 点击“刷写！”并等待完成。
在此过程中，您可能会被要求输入系统密码，只需输入并点击确定。

![输入您的计算机账户及密码](/images/Installing-Ubuntu-System/install-ubuntu-system-enter-password.png)

整个过程将用几分钟，具体取决于您的系统镜像大小和USB驱动器的读写速度。

![等待 Balenaetcher 刷写](/images/Installing-Ubuntu-System/install-ubuntu-system-makeing-image.png)

## 5. 完成！拔出USB驱动器，您就准备好了！

![完成创建 USB 启动](/images/Installing-Ubuntu-System/install-ubuntu-system-image-complete.png)

## 通用启动系统

在插入ZimaBoard后，连续按**`F11键`** / **`删除键`**。当我们插入U盘启动盘时，它将自动显示USB键，选择USB键并按下回车键。

[![Discord 卡片](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)