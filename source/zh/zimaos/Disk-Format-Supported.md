---
title: ZimaBoard CasaOS 工厂恢复
---

# 准备工作

下载官方ZimaBoard CasaOS镜像

- 针对 [**ZimaBoard CasaOS镜像 -832/432**](https://drive.google.com/file/d/1b-k7d1LzPHNUtem-hOrHB5dDt0_AC6mK/view)

- 针对 [**ZimaBoard CasaOS镜像 -216**](https://drive.google.com/file/d/1PFw1JXoimwUvOX9kgkmOSUM0evi_GGxv/view)

## 使用USB闪存制作镜像

**提前准备**

- 在计算机上下载并安装 [BalenaEtcher](https://www.balena.io/etcher/)
- 下载官方ZimaBoard CasaOS镜像

关于ZimaBoard的准备工作。

- ZimaBoard及电源适配器
- 一根USB驱动器（8GB及以上，里面的数据将被清除）
- 一根miniDP转DP/HDMI适配器（用于连接显示器）
- 一台显示器
- 一只键盘
- 一只USB集线器（可选，如果USB端口不够）

## 使用USB驱动器安装

### 打开 [BalenaEtcher](https://www.balena.io/etcher/)

![打开Balenaetcher](/images/Restore-factory-settings/open-balenaetcher.png)

### 选择系统镜像

![选择镜像](/images/Restore-factory-settings/choose-image.png)

### 选择插入的USB驱动器

![选择USB](/images/Restore-factory-settings/choose-usb.png)

### 点击“Flash!”

**在此过程中，可能会要求您输入系统密码，只需输入并点击OK。**

![使用Balenaetcher点击Flash](/images/Restore-factory-settings/click-flash.png)

![输入您的计算机账户和密码](/images/Restore-factory-settings/enter-password.png)

**整个过程将需要几分钟，具体取决于您的系统镜像大小和USB驱动器的读/写速度。**

![等待Flash](/images/Restore-factory-settings/waiting-flash.png)

### 完成！

**取出USB驱动器，您准备好了！**

![完成创建USB驱动器](/images/Restore-factory-settings/complete-flash.png)

## **从安装USB驱动器启动**

### 将配件连接到ZimaBoard

将USB驱动器、显示器、键盘、`USB集线器` **（可选）**、`鼠标` **（可选）**、`网络电缆` **（推荐）**连接到ZimaBoard。

![连接示意图](/images/Restore-factory-settings/connection-diagram.png)

### 打开电源并选择启动设备

连接电源并持续按**F11**。

## **开始安装**

**1. 在启动设备菜单中选择以UEFI开头的USB驱动器。**

![选择UEFI启动](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

**2. 等待几分钟**

![等待启动](/images/Restore-factory-settings/witting-boot.png)

**3. 选择第一个**

![选择mmcblk0](/images/Restore-factory-settings/select-mmcblk0.png)

**4. 输入`y`**

![正在安装CasaOS](/images/Restore-factory-settings/enter-yes.png)

**5. 等待几分钟**

![等待CasaOS安装程序](/images/Restore-factory-settings/witting-install.png)

**6. 选择第一个**

![选择关机](/images/Restore-factory-settings/select-poweroff.png)

**在倒计时结束后完成安装！！！！**

# 视频短教程

{% youtuber video SMV3wG1YbUk %}
https://www.youtube.com/embed/SMV3wG1YbUk
{% endyoutuber %}

**注意**：选择存储时，请务必选择正确的磁盘

由于操作系统和存储厂商以不同的方式计算存储空间大小，您在安装系统时看到的容量与硬件容量不相同。您可以根据磁盘类型和大致大小来判断差异。
ZimaBoard的内置存储类型为eMMC，操作系统也可能将其识别为MMC设备。

**注意****！如果您将操作系统安装到外部硬盘驱动器，您可能需要在BIOS中修改启动顺序或在启动时选择启动设备。**