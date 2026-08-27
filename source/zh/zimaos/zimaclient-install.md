---
title: 如何下载并安装 ZimaClient
seo_title: "在 Windows、macOS、iOS 和 Android 上下载并安装 ZimaClient"
description: "在 Windows 或 Mac 上安装 ZimaClient，随时随地访问 ZimaCube。本指南介绍远程访问、文件浏览和设备连接设置。"
type: Docs
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---
## 简介
ZimaClient 被设计为一款安静运行的客户端，但它提供了丰富功能。部分核心体验会在你不易察觉的地方自然地在后台完成。

远程访问是其中最重要的功能之一。启用并连接 ZimaCube 后，无论处于局域网、Thunderbolt、外部网络还是手机热点环境，客户端都会自动寻找最快的连接方式来打开 Web UI。
你也可以通过它与朋友共享 ZimaOS 服务。OpenWebUI 和游戏服务器等部分服务可以使用应用自身的身份验证功能，无需登录 ZimaOS 即可访问。

客户端还提供 Peer Drop、Back up、Open in Finder 等功能的快捷入口。
ZimaClient 仍处于早期迭代阶段，我们欢迎更多使用建议。

请按照以下步骤下载并安装 ZimaClient：
### 1. 下载 ZimaClient
在主要设备上访问以下链接，下载安装包：
https://www.zimaspace.com/zimaos/download
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. macOS 安装指南
- 下载完成后，双击打开安装包。
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- 将 ZimaClient 拖入“Applications”文件夹，等待安装完成。
- 安装完成后，打开“Launchpad”并运行 ZimaClient。
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
注意：
ZimaClient 会**在菜单栏中显示图标**。单击图标即可打开并操作客户端。

有关通过 ZimaClient 连接 ZimaCube 的方法，请参阅此[文档](./remote-access)。
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Windows 安装指南
- 下载完成后，双击运行 ZimaClient 安装包。
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- 安装完成后，ZimaClient 会在任务栏中显示图标。单击图标即可使用客户端。

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### 常见问题
**1. 如果安装时停留在以下界面，请尝试这些步骤：**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- 访问 https://www.zerotier.com/download/ 下载并安装 ZeroTier，同时确认网络连接正常。
- 再次运行 ZimaClient。

<br>

**2. 如果 macOS 显示 ZimaClient 正在运行，但界面没有出现，请按以下步骤排查：**
- 打开 macOS“活动监视器”，搜索 Zima、Zima Helper、zima-client-backup 等 Zima 相关进程。
- 关闭所有相关进程。
- 重新打开 Launchpad 并运行 ZimaClient。
<br>

**3. 远程访问会影响隐私吗？**
不会。ZimaClient 应用和 ZimaOS 会自动在笔记本电脑与 ZimaCube 之间建立 P2P 连接。两端之间的数据传输经过加密，所有数据都在设备之间直接传输。
我们在 ZimaCube 上部署自己的网络控制器，只使用 ZeroTier 的全球公共服务器进行设备发现。虚拟网络完全由 ZimaCube 控制，IceWhale 和 ZeroTier 均没有管理权限。数据隐私和数据主权是我们的首要原则，如有任何疑问，欢迎提出。
我们会持续监控并优化这些功能。
<br>

**4. 如何获取日志并协助调试**
发生错误或问题时，请立即截图（如适用），然后退出 ZimaClient。
从以下位置获取日志：
macOS：
`~/Library/Application Support/Zima/logs`
Windows：
`%AppData%\Zima\logs`
将所有日志文件打包后发送到 john@icewhale.org，并说明问题、附上相关截图。
