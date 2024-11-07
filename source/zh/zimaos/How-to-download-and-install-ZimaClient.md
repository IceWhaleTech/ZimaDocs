---
title: 如何下载和安装ZimaClient
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 介绍：
ZimaClient旨在作为一个静默客户端，但其功能足够强大，以至于一些核心体验发生在你可能不会注意的地方——安静而自然。

远程访问是最重要的功能之一。一旦你启用并连接ZimaCube，它将始终找到最快的连接，以在任何网络场景（局域网、Thunderbolt、外部网络、热点）中打开webUI。这也适用于与朋友共享ZimaOS服务。一些服务，如OpenWebUI和游戏服务器，可以在不登录的情况下访问，使用应用程序自己的身份验证功能。

同时，我们还提供了一些快速访问功能，例如Peer Drop、备份、在Finder中打开。当然，我们仍然处于早期迭代阶段，欢迎更多的客户端创意。

要下载和安装ZimaClient，请按照以下步骤操作：
### 1. 下载ZimaClient
访问以下链接在你的宿主设备上下载ZimaClient安装包：
https://find.zimaspace.com/
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. Mac OS安装指南
- 下载完成后，双击打开下载的安装包。
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- 将ZimaClient拖放到“应用程序”文件夹中，等待安装完成。
- 安装完成后，你可以找到并点击“启动台”来运行ZimaClient。
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
注意：
ZimaClient将**在任务栏中显示其图标**，你可以通过点击图标来打开和操作客户端。

有关如何通过ZimaClient连接到ZimaCube，请参阅此[文档](https://www.zimaspace.com/docs/zimaos/Romote-Access.html)
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Windows安装指南
- 下载完成后，双击运行ZimaClient安装包。
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- 安装完成后，ZimaClient将在任务栏中显示其图标，你可以通过点击图标来使用客户端。

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### 常见问题
**1. 如果你在安装过程中卡在以下屏幕，请尝试以下步骤：**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- 访问 https://www.zerotier.com/download/ 下载安装包，确保互联网连接正常。
- 尝试再次运行ZimaClient。

<br>

**2. 如果ZimaClient在macOS上没有显示，但指示正在运行，请按照以下步骤排查问题：**
- 打开macOS“活动监视器”，搜索并找到与Zima相关的进程（例如，Zima、Zima Helper、zima-client-backup等）。
- 关闭所有相关进程。
- 重新打开启动台并运行ZimaClient。
<br>

**3. 远程访问会侵犯我的隐私吗？**
绝对不会！你的笔记本电脑与ZimaCube之间的连接是由Zima Client应用程序和ZimaOS自动建立的，使用P2P通信建立连接。两者之间的数据传输是加密的，确保所有数据传输都是点对点的。
我们在ZimaCube上使用自我部署的网络控制器，这意味着我们只使用ZeroTier的全球公共发现服务器。虚拟网络的控制完全由ZimaCube控制，IceWhale和ZeroTier都没有任何管理权限。数据隐私和主权是我们的首要任务，所以如果你有任何问题，请随时提出。
我们将继续监控和优化这些问题。
<br>

**4. 如何访问日志并协助调试**
当发生错误/问题时，立即截屏（如适用）并退出Zima客户端。
从以下位置检索日志：
macOS：
`~/Library/Application Support/Zima/logs`
Windows：
`%AppData%\Zima\logs`
将所有日志文件打包，并发送至 john@icewhale.org，描述问题并提供截图（如有）。