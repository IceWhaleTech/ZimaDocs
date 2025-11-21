---
title: 在 ZimaBoard 2 上安装 OpenWrt
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

## 1.介绍

![OpenWrt官方logo](https://manage.icewhale.io/api/static/docs/1763713194262_copyImage.png)

OpenWrt 是一个开源的基于 Linux 的路由器操作系统，广泛应用于家庭路由器、企业路由器、软路由、NAS 设备以及其他网络设备。它提供了高度的灵活性和可定制性，允许用户像操作小型 Linux 服务器一样管理他们的网络设备。

OpenWrt 的主要特点包括：

* **开源和透明**：完全控制，没有黑箱组件。
    
* **高度可扩展**：可以安装额外的软件包，如 VPN、AdGuard、Docker 等。
    
* **高性能**：非常适合千兆网络和强大的软路由硬件。
    
* **灵活的网络配置**：支持高级功能，如 VLAN、多 WAN 和旁路路由。
    

本教程旨在展示如何使用 ZimaBoard 2 构建高性能软路由器，并引导您完成 OpenWrt 的完整安装过程。

---

## **2.准备工作**

请提前准备以下硬件和工具，以确保顺利完成安装过程：

**1. ZimaBoard 2 设备**

**2. USB 驱动器（≥16GB）** 用于创建启动安装盘

刷写过程将会清除 USB 驱动器上的所有数据，请提前备份重要文件！

**3. 计算机（Windows / macOS）** 用于下载固件并将其刷入 USB 驱动器

**4. 显示器 + MiniDP 转 HDMI/DP 适配器 + 键盘 + 以太网电缆**

---

## 3.安装步骤

### **步骤 1：创建 OpenWrt 启动 USB 驱动器**

**下载固件**

* 访问官方下载页面：[下载 OpenWrt 官方固件](https://firmware-selector.openwrt.org/?version=24.10.4&target=x86%2F64&id=generic)
    
* 选择推荐的镜像类型：选择 **COMBINED-EFI (SQUASHFS)** 版本。这是一个完整的启动镜像，专为 x86_64 设备设计，支持 UEFI 启动，并且与 ZimaBoard 2 BIOS 环境完全兼容。
    
    ![下载 OpenWrt 官方固件](https://manage.icewhale.io/api/static/docs/1763713196060_copyImage.png)
    

### 步骤 2：使用 balenaEtcher 将镜像刷入 USB 驱动器

1. 准备一块空白 USB 驱动器

刷写过程将会清除 USB 驱动器上的所有数据，请提前备份重要文件！

2. 将 USB 驱动器插入计算机

![balenaEtcher 刷写中](https://manage.icewhale.io/api/static/docs/1763713196652_copyImage.png)

3. 打开 balenaEtcher（如果没有安装，可以从[官方网站](https://etcher.balena.io/)下载）

4. 开始刷写

* 点击 **从文件刷写** 并选择下载的 OpenWrt x86 镜像
    
* 点击 **选择目标** 并选择你的 USB 驱动器
    
* 刷写过程通常需要 **1-3 分钟**，请耐心等待
    

5. 刷写完成 — 移除 USB 驱动器

当 Etcher 显示 **“刷写完成！”** 时，您可以安全地拔出 USB 驱动器。此时，您的 USB 驱动器已成为一个可启动的 OpenWrt 安装介质。

![balenaEtcher 刷写完成](https://manage.icewhale.io/api/static/docs/1763713197464_copyImage.png)

### **步骤 3：从 USB 驱动器启动 ZimaBoard 2**

**1. 准备并连接硬件**

* 将刚创建的 OpenWrt 启动 USB 驱动器插入 ZimaBoard 2 的 USB 端口
    
* 使用以太网电缆将 **LAN 端口（最靠近电源连接器的端口）** 连接到您的计算机
    
* 连接电源并确保键盘和显示器（或其他控制方式）准备就绪
    

**2. 进入启动菜单**

* 按下电源按钮启动 ZimaBoard 2
    
* 当启动屏幕出现时，反复按 **F11** 进入 **启动菜单**
    

**3. 选择 USB 驱动器作为启动设备**

* 在启动菜单中，使用箭头键选择您的 USB 驱动器
    
* 按 **回车** 确认并从 USB 驱动器启动
    

![启动顺序选项](https://manage.icewhale.io/api/static/docs/1763713198322_copyImage.png)

**4. 确认 OpenWrt 成功启动**

* 如果一切正常，ZimaBoard 2 将从 USB 驱动器启动并进入 OpenWrt 系统（通常是命令行界面）
    

![OpenWrt 启动成功](https://manage.icewhale.io/api/static/docs/1763713201272_copyImage.png)

### **步骤 4：通过浏览器访问 OpenWrt Web 界面**

**1. 确保您的计算机已连接到 ZimaBoard 2**

* 计算机上的以太网电缆应插入 ZimaBoard 2 的 **LAN 端口（最靠近电源连接器的端口）**
    
* 计算机的网络适配器应设置为 **自动获取 IP 地址（DHCP）**
    
* 在大多数情况下，OpenWrt 会为您的计算机分配一个 **192.168.1.x** 范围的地址（例如，192.168.1.100）
    

**2. 在浏览器中打开 OpenWrt 管理页面** 在计算机上打开任意浏览器（Chrome、Edge、Firefox 等），在 URL 栏中输入以下地址：

    http://192.168.1.1

**3. 登录到 OpenWrt** 默认用户名：**root** 默认密码：**password**

![OpenWrt 登录界面](https://manage.icewhale.io/api/static/docs/1763713201956_copyImage.png)

![OpenWrt 主界面](https://manage.icewhale.io/api/static/docs/1763713203997_copyImage.png)

## **4.最终说明**

至此，您已经完成了在 ZimaBoard 2 上安装 OpenWrt 的基本过程。

从下载固件、创建启动 USB 驱动器、从 USB 启动到成功登录 Web 界面，您已将这块紧凑的板子转变为强大的软路由器。

从这里，您可以根据需要继续自定义设置，例如：

* 配置 PPPoE 或设置旁路（桥接）路由器
    
* 安装常见插件（Docker、广告屏蔽工具、代理服务等）
    
* 设置远程访问、NAS、媒体服务器等
    

**ZimaBoard 2 + OpenWrt** 的组合提供了无限的可能性——本教程只是一个开始。

如果在过程中遇到任何问题，欢迎与社区分享您的情况和错误信息，获取帮助。