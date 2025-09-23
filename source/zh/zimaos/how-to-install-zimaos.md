---
title: 如何安装 ZimaOS  
description: 通过这份逐步指南学习如何安装 ZimaOS。内容包括下载镜像、写入 U 盘、安装过程，以及通过 ZimaClient 或 IP 地址登录。  
type: Docs  
author: admin  
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字  
---

## 你将学到什么
ZimaOS 是一款为 ZimaCube 和其他家庭服务器设备设计的轻量级 NAS 操作系统。  
本指南提供完整的分步流程，帮助你快速且成功地 **下载、写入和安装 ZimaOS**。

---

## 你需要准备
- 一台 **Zima 设备** 或至少拥有 25GB 存储空间的通用 x86-64 设备。  
- 一个 U 盘（推荐 4GB 或更大）。  

---

## 开始之前
要启动 ZimaOS，需要在 BIOS 中启用 UEFI 启动模式，并关闭 Secure Boot。  

### 步骤 1：下载 ZimaOS 安装镜像
首先，从官方 GitHub 发布页面下载最新的 ZimaOS `.img` 文件：  
👉 [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases)

### 步骤 2：创建可启动 U 盘
需要将 ZimaOS 镜像写入 U 盘。最简单的工具是 **Balena Etcher**。  

1. 下载并安装 [**Balena Etcher**](https://etcher.balena.io/#download-etcher)  
2. 打开 Etcher 并选择 ZimaOS `.img` 文件。  
3. 插入 U 盘并选择为目标设备。  
4. 点击 **Flash** 开始写入镜像。  

![balena etcher 打开 zimaos 安装镜像](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)  
![balena etcher 选择 U 盘作为目标](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)  
![zimaos 镜像写入完成](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)  

### 步骤 3：从 U 盘启动设备
1. 将可启动 U 盘插入设备。  
2. 进入 BIOS/启动菜单，选择 **从 USB 启动**。  
![安装工具主菜单选择安装或重启](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)  
![快速安装菜单选择安装位置](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)  
![确认安装选择是](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)  
![最后一次确认安装选择是](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)  
![安装进度条显示中，请耐心等待](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)  

### 步骤 4：完成 ZimaOS 安装
按照屏幕上的提示完成安装。  
系统提示时，请移除 U 盘并重启设备。  
此时将会自动启动进入 **ZimaOS**。  
![移除 U 盘并重启](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)  

### 步骤 5：访问 ZimaOS
重启后，最简单的方式是通过 **ZimaClient** 登录，它可以自动检测网络中的设备并帮助快速访问 ZimaOS。  

👉 下载 ZimaClient 并参考指南：[ZimaOS 快速入门](https://www.zimaspace.com/docs/zimaos/Get-Started)  

![欢迎界面 zimaos webgui](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)  

或者，你也可以查看设备在网络中的 IP 地址，并在浏览器中输入该地址以访问 **ZimaOS Web UI**。  
![屏幕显示关键信息，包括 IP 地址和系统版本](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)  

🎉 **恭喜！** 你已经成功在设备上安装了 ZimaOS，现在可以开始探索它的全部 NAS 功能了。  

---

## 下一步探索 ZimaOS

现在 ZimaOS 已经安装在你的智能服务器上，你可以开始搭建个人云和家庭服务器。  
以下是一些可尝试的方向：  

- 🔧 **设置 RAID 或存储池** 以保护数据。  
- 📂 **开启文件共享 (SMB/FTP)**，实现多设备互通。  
- 🎞️ **运行媒体服务器 (Plex, Jellyfin)** 来串流电影和音乐。  
- 🐳 **直接在 ZimaOS 应用商店中部署 Docker 应用**。  
- ☁️ **将重要数据备份** 到外部硬盘或云端。  

👉 准备解锁更多功能？  
- 浏览 [ZimaOS 文档](https://github.com/IceWhaleTech/ZimaOS/wiki)  
- 加入 [社区论坛](https://github.com/IceWhaleTech/ZimaOS/discussions)  
- 探索 [应用商店](https://github.com/IceWhaleTech/ZimaOS) 扩展你的系统  

💡 **专业提示**：收藏此指南以便日后查看更新。新的 ZimaOS 版本通常包含性能优化和新应用。  

立即开启你的 ZimaOS 之旅，享受更快、更简单、更稳定的 NAS 体验吧！ 🚀