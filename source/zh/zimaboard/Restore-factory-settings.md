---
title: ZimaBoard CasaOS 工厂恢复
---

# 准备

下载官方 ZimaBoard CasaOS 镜像

- **ZimaBoard CasaOS 镜像 -832/432** [下载链接](https://drive.google.com/file/d/1b-k7d1LzPHNUtem-hOrHB5dDt0_AC6mK/view)

- **ZimaBoard CasaOS 镜像 -216** [下载链接](https://drive.google.com/file/d/1PFw1JXoimwUvOX9kgkmOSUM0evi_GGxv/view)

## 使用 USB 驱动器创建镜像

**提前准备**

- 在您的计算机上下载并安装 [BalenaEtcher](https://www.balena.io/etcher/)
- 下载官方 ZimaBoard CasaOS 镜像

与 ZimaBoard 相关的准备工作。

- ZimaBoard 及电源适配器
- 一根 USB 驱动器（8GB+，其中的数据将被清除）
- 一根 miniDP 转 DP/HDMI 适配器（用于连接显示器）
- 一台监视器
- 一个键盘
- 一个 USB 集线器（可选，若 USB 端口不足）

## 使用 USB 驱动器安装

### 打开 [BalenaEtcher](https://www.balena.io/etcher/)

![打开 Balenaetcher](/images/Restore-factory-settings/open-balenaetcher.png)

### 选择系统镜像 

![选择镜像](/images/Restore-factory-settings/choose-image.png)

### 选择您插入的 USB 驱动器

![选择 USB 驱动器](/images/Restore-factory-settings/choose-usb.png)

### 点击 "Flash!" 

**在此过程中，您可能会被要求输入系统密码，输入后点击 OK。**

![使用 Balenaetcher 点击 Flash](/images/Restore-factory-settings/click-flash.png)

![输入您的计算机账户和密码](/images/Restore-factory-settings/enter-password.png)

**整个过程可能需要几分钟，具体取决于系统镜像的大小和您的 USB 驱动器的读写速度。**

![等待 Flash](/images/Restore-factory-settings/waiting-flash.png)

### 完成！ 

**拔下 USB 驱动器，您就可以开始了！**

![完成创建 USB 驱动器](/images/Restore-factory-settings/complete-flash.png)

## **从安装 USB 驱动器启动**

### 将配件连接到 ZimaBoard

将您的 USB 驱动器、监视器、键盘、`USB 集线器` **（可选）**、`鼠标` **（可选）**、`网络电缆` **（推荐）** 连接至 ZimaBoard。

![连接示意图](/images/Restore-factory-settings/connection-diagram.png)

### 打开电源并选择启动设备

连接电源，持续按 **F11**。

## **开始安装**

**1. 在启动设备菜单中选择您的 USB 驱动器以 UEFI 开头。**

![选择 UEFI 启动](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

**2. 等待几分钟**

![等待启动](/images/Restore-factory-settings/witting-boot.png)

**3. 选择第一个**

![选择 mmcblk0](/images/Restore-factory-settings/select-mmcblk0.png)

**4. 输入 `y`**

![安装 CasaOS](/images/Restore-factory-settings/enter-yes.png)

**5. 等待几分钟**

![等待 CasaOS 安装程序](/images/Restore-factory-settings/witting-install.png)

**6. 选择第一个**

![选择关机](/images/Restore-factory-settings/select-poweroff.png)

**在倒计时结束后完成安装！！！！**

# 视频短教程

{% youtuber video SMV3wG1YbUk %}
https://www.youtube.com/embed/SMV3wG1YbUk
{% endyoutuber %}

**注意**：在选择存储时，请务必选择正确的磁盘

由于操作系统和存储供应商对存储空间大小的计算方式不同，您在安装系统时看到的容量与硬件容量并不相同。您可以通过磁盘类型和大致大小来区分。
ZimaBoard 的内置存储类型为 eMMC，在操作系统中也可能被识别为 MMC 设备。

**注意**！如果您将操作系统安装在外部硬盘上，您可能需要在 BIOS 中修改启动顺序或在启动时选择启动设备。**