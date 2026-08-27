---
title: 开始使用 ZimaOS
description: "在电脑或手机上安装 ZimaClient，创建 ZimaOS 账户，选择语言并完成初始设置。支持 Windows、macOS、iOS 和 Android。"
type: Docs
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

设置新设备不应该是一项繁琐工作。经历过无数次首次启动后，我把流程缩短为三件事：安装客户端、创建账户，然后即可开始使用。

## 开始前

Zima 设备需要开机，并与用于设置的电脑连接到同一网络。如果尚未安装 ZimaOS，请先参阅 **[安装 ZimaOS](./how-to-install-zimaos "在设备上从头安装 ZimaOS 的分步指南")**。

## 安装 ZimaClient

ZimaClient 会将电脑或手机连接到 Zima 设备。它能自动发现网络中的设备并设置远程访问。

**电脑** — 下载 **[Windows 或 macOS](https://www.zimaspace.com/zimaos/download "下载适用于 Windows 和 macOS 的 ZimaClient 桌面应用")** 版本。安装并打开应用后，它会扫描网络并显示可用设备。

**手机** — 从 App Store 获取 **[iOS](https://www.zimaspace.com/zimaos/download "从 App Store 下载 ZimaClient iOS 应用")** 版本，或从 Google Play 获取 **[Android](https://www.zimaspace.com/zimaos/download "从 Google Play 下载 ZimaClient Android 应用")** 版本。移动应用可以查看系统状态、管理应用，并同步手机文件。

![ZimaClient 下载页面显示 macOS、Windows、iOS 和 Android 的安装选项](https://manage.icewhale.io/api/static/docs/1773888170981_20260318-185643.jpeg)

## 登录并设置

ZimaClient 找到设备后，单击设备进行连接。随后会显示 ZimaOS 设置界面。

**选择语言。** ZimaOS 支持英语、中文、日语等语言。随着社区参与翻译，支持的语言还在不断增加。

![ZimaOS 初始设置界面显示包含英语、中文和日语的语言选择器](https://manage.icewhale.io/api/static/docs/1727082127778_image.png)

**创建账户。** 创建的第一个账户是主账户，拥有所有者和管理员权限。请设置用户名和高强度密码。

![ZimaOS 设置界面显示用于创建本地账户的用户名和密码输入框](https://manage.icewhale.io/api/static/docs/1727082165610_image.png)

账户创建完成后，ZimaOS 会简要介绍主要功能。现在设备已经可以使用。

![ZimaOS 设置向导显示远程访问、RAID、Btrfs 存储和 NAS OS 功能概览](https://manage.icewhale.io/api/static/docs/1727082245929_image.png)

## 已经配置好的功能

以下功能会立即运行，无需额外配置。

**远程访问。** 首次通过 ZimaClient 连接后，即可从家外访问设备。连接采用加密 P2P 方式，无需端口转发或配置路由器。

你可以在咖啡店打开 NAS 文件、旅行时查看下载任务，或在不先上传到第三方服务的情况下共享文件夹。设备会成为一台随时可用的家庭服务器，而所有数据仍由你控制。远程访问可以在 Settings 中一键关闭，因此设备何时可以访问完全由你决定。数据不会经过第三方服务器。

**Samba 共享。** 所有存储空间默认会在局域网中共享，并由 ZimaOS 账户和密码保护。ZimaClient 会通过 P2P 链路自动处理连接。连接后，共享文件夹会显示在 Mac 的 Finder 或 Windows 文件资源管理器中，可以像普通文件夹一样拖放文件。

无论是团队共同处理项目，还是家庭成员共享照片和视频，网络中的所有人都可以在不安装额外软件的情况下访问同一存储。权限与 ZimaOS 用户账户绑定，因此可以控制每个人看到的内容。

## 下一步

- **[功能概览](./features "了解 ZimaOS 的远程访问、存储和应用功能")** — 浏览 ZimaOS 仪表板及其功能
- **[下载 ZimaClient](./zimaclient-install "在电脑和移动设备上安装并设置 ZimaClient")** — 了解桌面应用的安装和使用详情
- **[远程访问](./remote-access "配置远程访问，以便从任何地点连接家中服务器")** — 配置和管理远程连接

## 故障排查

如果 ZimaClient 找不到设备，请确认两者连接到同一网络。也可以通过 IP 地址直接连接：在路由器的 DHCP 客户端列表中查找设备 IP，然后在浏览器中输入。显示的设置界面相同。
