---
title: 如何安装 ZimaOS
description: "按照本指南分步安装 ZimaOS，包括下载镜像、写入 USB 设备、完成安装，以及通过 ZimaClient 或 IP 地址登录。"
type: Docs
author: admin
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

## 你将了解
ZimaOS 是一款为通用 x86-64 设备设计的轻量级 NAS 操作系统。
本指南提供完整步骤，帮助你快速、顺利地**下载、写入并安装 ZimaOS**。

---

## 所需设备
- 一台 **Zima 设备**或至少有 25 GB 存储空间的通用 x86-64 设备。
- 一个容量不低于 4 GB 的 USB 设备。

---

## 开始安装
要启动 ZimaOS，需要在 BIOS 中启用 UEFI 启动模式并关闭 Secure Boot。

### 步骤 1：下载 ZimaOS 安装镜像
从官方 GitHub Release 页面下载最新的 ZimaOS `.img` 文件：
👉 [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases)


### 步骤 2：制作可启动 USB 设备
需要将 ZimaOS 镜像写入 USB 设备。最简单的工具是 **Balena Etcher**。

1. 下载并安装 [Balena Etcher](https://etcher.balena.io/#download-etcher)
2. 打开 Etcher，选择 ZimaOS `.img` 文件。
3. 插入 USB 设备，并将其选为目标设备。
4. 单击 **Flash** 开始写入镜像。

![Balena Etcher 已打开 ZimaOS 安装镜像文件](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)
![Balena Etcher 选择用于安装 ZimaOS 的目标 USB 设备](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)
![ZimaOS 镜像已成功写入 USB 设备](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)



### 步骤 3：从 USB 启动设备
1. 将可启动 USB 设备插入目标设备。
2. 进入 BIOS 或启动菜单，然后选择 **Boot from USB**。

![ZimaOS 安装工具主菜单用于选择安装 ZimaOS 或重新启动](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)

![快速安装菜单用于选择安装 ZimaOS 的设备或空间](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)

![安装前确认界面选择 Yes](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)

![取消安装前的最后确认界面选择 Yes](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)

![安装进度条正在显示，请耐心等待](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)


### 步骤 4：完成 ZimaOS 安装
按照屏幕提示安装 ZimaOS。
系统提示时，拔下 USB 设备并重新启动。
设备随后会自动启动进入 **ZimaOS**。
![拔下 USB 设备并重新启动](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)



### 步骤 5：访问 ZimaOS
重新启动后，最简单的登录方式是使用 **ZimaClient**。它可以自动发现网络中的设备，并帮助你快速访问 ZimaOS。

👉 下载 ZimaClient 并按照此指南操作：[ZimaOS 快速入门指南](./get-started)

![ZimaOS Web UI 欢迎界面](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)


也可以在网络中查找设备 IP 地址，并在浏览器中输入，从而访问 **ZimaOS Web UI**。
![ZimaOS 信息界面显示 IP 地址和系统版本](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)


🎉 **恭喜！** ZimaOS 已成功安装，现在可以开始探索各项 NAS 功能。

---

## 安装 ZimaOS 后的下一步

在智能服务器上安装 ZimaOS 后，可以开始搭建个人云和家庭服务器。
你可以尝试：

- 🔧 **设置 RAID 或存储池**以保护数据。
- 📂 **启用文件共享（SMB/FTP）**，在设备之间访问文件。
- 🎞️ **运行媒体服务器（Plex、Jellyfin）**，串流播放电影和音乐。
- 🐳 从 ZimaOS App Store 直接**部署 Docker 应用**。
- ☁️ 将重要数据**备份到外部硬盘或云端**。

👉 准备使用更多功能？
- 继续阅读 **[开始使用](./get-started)**，完成首次启动设置
- 设置 **[远程访问](./remote-access)**，随时随地连接设备
- 加入 **[社区论坛](https://community.zimaspace.com/)**

💡 建议收藏本指南以便日后查看。ZimaOS 新版本通常会带来性能改进和新应用。
