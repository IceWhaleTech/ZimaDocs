---
title: 在 ZimaBoard 2 上安装 OpenWrt
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除, description 为文章描述，不填时将截取内容最前一段文字
---
##  1.介绍

![OpenWrt 官方 logo](https://manage.icewhale.io/api/static/docs/1764298451910_The_official_logo_of_openwrt.png)

OpenWrt 是一个开源的、基于 Linux 的路由器操作系统，广泛应用于家用路由器、企业路由器、软路由、NAS 设备以及其他网络设备。它提供了高度的灵活性和可定制性，允许用户像操作小型 Linux 服务器一样管理他们的网络设备。

OpenWrt 的主要特点包括：

*   **开源与透明**：完全控制，没有黑箱组件。
    
*   **高度可扩展**：可以安装额外的包，如 VPN、AdGuard、Docker 等。
    
*   **高性能**：非常适合千兆网络和强大的软路由硬件。
    
*   **灵活的网络设置**：支持 VLAN、多 WAN 和绕过路由等高级功能。

本教程旨在演示如何使用 ZimaBoard 2 构建一个高性能的软路由，并指导你完成 OpenWrt 的完整安装过程。

* * *

## **2.准备工作**

请提前准备以下硬件和工具，以确保安装过程顺利进行：

* **ZimaBoard 2 设备**

* **USB 驱动器（≥16GB）** 用于制作可启动安装器

  {% note warn Tips %}

闪存过程会擦除 USB 驱动器上的所有数据，请事先备份重要文件！
{% endnote %}

* **PC（Windows / macOS）** 用于下载固件并将其刷入 USB 驱动器

* **显示器 + MiniDP 到 HDMI/DP 转接头 + 键盘 + 以太网线**

* * *

## 3.安装步骤

### **步骤 1：创建 OpenWrt 可启动 USB 驱动器**

**下载固件**

*   访问官方下载页面：[下载 OpenWrt 官方固件](https://firmware-selector.openwrt.org/?version=24.10.4&target=x86%2F64&id=generic)
    
*   选择推荐的镜像类型：选择 **COMBINED-EFI (SQUASHFS)** 版本。这是一个完整的可启动镜像，设计用于 x86_64 设备，支持 UEFI 启动，并与 ZimaBoard 2 的 BIOS 环境完全兼容。
    
    ![下载 OpenWrt 官方固件](https://manage.icewhale.io/api/static/docs/1764302027764_Download_the_official_firmware_of_openwrt.png)
   

### 步骤 2：使用 balenaEtcher 刷写镜像到 USB 驱动器

**1.准备一个空的 USB 驱动器**

  {% note warn Tips %}

刷写过程会擦除 USB 驱动器上的所有数据，请事先备份重要文件！
{% endnote %}

**2.将 USB 驱动器插入计算机**

![balenaEtcher burning](https://manage.icewhale.io/api/static/docs/1764309100941_balenaEtcher_burning.png)


**3.打开 balenaEtcher**（如果你还没有安装，可以从[官网](https://etcher.balena.io/)下载。）

**4.开始刷写**

*   点击 **从文件刷写**，选择下载的 OpenWrt x86 镜像
    
*   点击 **选择目标**，选择你的 USB 驱动器
    
*   刷写过程通常需要 **1-3 分钟**，请耐心等待
    

**5.刷写完成 — 移除 USB 驱动器**

  一旦 Etcher 显示 **“Flash Complete!”**，你可以安全地弹出 USB 驱动器。你的 USB 驱动器现在是一个可启动的 OpenWrt 安装介质。

![balenaEtcher 刷写完成](https://manage.icewhale.io/api/static/docs/1764299872754_The_burning_of_balenaEtcher_is_complete.png)

### **步骤 3：从 USB 驱动器启动 ZimaBoard 2**

**1.准备并连接硬件**

*   将新创建的 OpenWrt 可启动 USB 驱动器插入 ZimaBoard 2 的一个 USB 端口
    
*   使用以太网线将 **LAN 端口（最靠近电源连接器的端口）** 连接到你的计算机
    
*   连接电源，确保键盘和显示器（或其他控制方法）准备就绪
    

**2.进入启动菜单**

*   按下电源按钮启动 ZimaBoard 2
    
*   当启动画面出现时，反复按 **F11** 进入 **启动菜单**
    

**3.选择 USB 驱动器作为启动设备**

*   在启动菜单中，使用箭头键选择你的 USB 驱动器
    
*   按 **Enter** 确认并从 USB 驱动器启动
    

![启动序列选项](https://manage.icewhale.io/api/static/docs/1764300015325_Startup_sequence_option.png)


**4.确认 OpenWrt 成功启动**

*   如果一切正常，ZimaBoard 2 将从 USB 驱动器启动并进入 OpenWrt 系统（通常是命令行界面）
    

![OpenWrt 已成功启动](https://manage.icewhale.io/api/static/docs/1764300101135_openwrt_has_been_launched_successfully.png)


### **步骤 4：通过浏览器访问 OpenWrt Web 界面**

**1.确保你的计算机已连接到 ZimaBoard 2**

*   你的计算机应通过以太网线连接到 **ZimaBoard 2 上的 LAN 端口（最靠近电源连接器的端口）**
    
*   计算机的网络适配器应设置为 **自动获取 IP 地址（DHCP）**
    
*   在大多数情况下，OpenWrt 会为你的计算机分配 **192.168.1.x** 范围内的地址（例如，192.168.1.100）
    

**2.在浏览器中打开 OpenWrt 管理页面** 在计算机上打开任何浏览器（Chrome、Edge、Firefox 等），并在 URL 地址栏输入以下地址：

    http://192.168.1.1

**3.登录到 OpenWrt** 默认用户名：**root** 默认密码：**password**

![OpenWrt 登录界面](https://manage.icewhale.io/api/static/docs/1764301256473_openwrt_login_interface.png)

![](https://manage.icewhale.io/api/static/docs/1764301317557_The_main_interface_of_openwrt.png)


## **4.最后备注**

至此，你已经完成了在 ZimaBoard 2 上安装 OpenWrt 的基本过程。

从下载固件、创建可启动 USB 驱动器，到从 USB 启动并成功登录到 Web 界面，你已经将这块紧凑的主板转变为一个强大的软路由器。

接下来，你可以根据需要继续自定义设置，例如：

*   配置 PPPoE 或设置绕过（桥接）路由器
    
*   安装常见插件（Docker、广告拦截工具、代理服务等）
    
*   设置远程访问、NAS、媒体服务器等
    

**ZimaBoard 2 + OpenWrt** 的组合提供了无穷的可能性——本教程只是一个开始。

如果在过程中遇到任何问题，随时与社区分享你的情况和错误信息，寻求帮助。