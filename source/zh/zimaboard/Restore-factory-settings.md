---
title: ZimaBoard CasaOS 工厂恢复
---

# 准备工作

下载官方 ZimaBoard CasaOS 镜像

- [**ZimaBoard CasaOS 镜像-GUI 版本**](https://drive.google.com/file/d/19w03lNFgRSbU9f_xNJQXZcJXRmDRchKF/view?usp=sharing)

- [**ZimaBoard CasaOS 镜像-Headless 版本**](https://drive.google.com/file/d/1PFw1JXoimwUvOX9kgkmOSUM0evi_GGxv/view)
## 使用 USB 驱动器创建镜像

**提前准备**

- 在计算机上下载并安装 [BalenaEtcher](https://www.balena.io/etcher/)
- 下载官方 ZimaBoard CasaOS 镜像

ZimaBoard 相关准备。

- ZimaBoard 和电源适配器
- 一个 USB 驱动器（8GB 以上，驱动器中的数据将被清除）
- 一个 miniDP 到 DP/HDMI 转接器（用于连接显示器）
- 一台显示器
- 一个键盘
- 一个 USB 集线器（可选，如果 USB 端口不足）

## 使用 USB 驱动器安装

### 打开 [BalenaEtcher](https://www.balena.io/etcher/)

![打开 Balenaetcher](/images/Restore-factory-settings/open-balenaetcher.png)

### 选择系统镜像

![选择镜像](/images/Restore-factory-settings/choose-image.png)

### 选择插入的 USB 驱动器

![选择 USB](/images/Restore-factory-settings/choose-usb.png)

### 点击“Flash！”

**在过程中，可能会要求您输入系统密码，只需输入密码并点击确定。**

![使用 Balenaetcher 点击 Flash](/images/Restore-factory-settings/click-flash.png)

![输入计算机账户和密码](/images/Restore-factory-settings/enter-password.png)

**整个过程会根据系统镜像的大小和 USB 驱动器的读写速度需要几分钟。**

![等待 Flash 完成](/images/Restore-factory-settings/waiting-flash.png)

### 完成！

**移除 USB 驱动器，安装完成，准备启动！**

![完成创建 USB 驱动器](/images/Restore-factory-settings/complete-flash.png)

## **从安装 USB 驱动器启动**

### 连接配件到 ZimaBoard

将 USB 驱动器、显示器、键盘、`USB 集线器`**(可选)**、`鼠标`**(可选)**、`网络电缆`**(推荐)** 连接到 ZimaBoard。

![连接图](/images/Restore-factory-settings/connection-diagram.png)

### 开机并选择启动设备

连接电源并连续按 **F11** 键。

## **开始安装**

**1. 在启动设备菜单中选择以 UEFI 开头的 USB 驱动器。**

![选择 UEFI 启动](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

**2. 等待几分钟**

![等待启动](/images/Restore-factory-settings/witting-boot.png)

**3. 选择第一个选项**

![选择 mmcblk0](/images/Restore-factory-settings/select-mmcblk0.png)

**4. 输入 `y`**

![安装 CasaOS](/images/Restore-factory-settings/enter-yes.png)

**5. 等待几分钟**

![等待 CasaOS 安装程序](/images/Restore-factory-settings/witting-install.png)

**6. 选择第一个选项**

![选择关机](/images/Restore-factory-settings/select-poweroff.png)

**倒计时结束后，安装完成！！！！**

# 视频短教程

{% youtuber video SMV3wG1YbUk %}
https://www.youtube.com/embed/SMV3wG1YbUk
{% endyoutuber %}

**注意**：选择存储时，请务必选择正确的磁盘。

由于操作系统和存储厂商在计算存储空间大小时存在差异，您在安装系统时看到的容量与硬件容量可能不同。通过磁盘类型和大致大小可以判断差异。
ZimaBoard 的内置存储类型为 eMMC，在操作系统中可能被识别为 MMC 设备。

**注意**！如果您将操作系统安装到外部硬盘，可能需要在 BIOS 中修改启动顺序，或在启动时选择启动设备。