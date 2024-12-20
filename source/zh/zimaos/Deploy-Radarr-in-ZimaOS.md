---
title: 链接 Synology 和 SMB 共享
description:
type: “文档”
tip: 顶部栏固定格式请勿删除，description 为文章描述，不填时将截取内容最前一段文字
---
# 如何从 NAS 中共享和获取文件？SAMBA 可能是最重要的方式
当我们谈论网络附加存储时，我们希望文件能集中存储、管理，并且可以从任何地方访问。但是，这样的情况是如何实现的呢？
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)
你始终可以通过访问 ZimaOS 的 WebUI 来访问你的数据，它拥有一个精美组织的界面和流畅的使用体验。然而，当你的工作涉及到文件引用，或者你需要对文件系统层级进行更复杂的操作时，通过 SMB/SAMBA 等技术将你的 NAS 驱动器挂载到客户端系统上会是一个更好的选择。
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)
SMB（服务器消息块）是 Windows 系统内置的一种协议，用于在网络中共享文件和其他服务。SAMBA 实现了 SMB 协议，丰富了类 *nix 系统的文件共享方式。ZimaOS 配备了 SAMBA，使得文件共享和传输变得非常方便。在接下来的内容中，我们将统一将 SMB 和 SAMBA 称为 SMB 以简化描述。

## 在 ZimaOS 上创建共享文件夹
在 ZimaOS 的仪表盘上启动文件应用程序，找到你想要共享的目标文件夹。右键点击文件夹并选择“共享”。
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)
一个对话框会显示出你需要的 URL，用于在相应系统上挂载共享文件夹。
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)
这两个 URL 是为专业用户提供的手动挂载驱动器的链接。此外，借助 [Zima 客户端](https://findzima.com/) 在相应系统上的应用，我们可以让挂载过程变得更加简便。
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)

## 在 Windows 上挂载 SMB 共享文件夹
从 [findzima](https://findzima.com/) 下载 Zima-latest setup.exe 并打开它。安装过程中将自动启动 Zima 客户端。安装完成后，你会看到任务栏右侧的 Zima 图标，由于未连接状态，它显示为一个问号。
右键点击图标并选择“扫描并连接到 Zima”。
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)
找到你的 Zima 设备并点击“连接”。
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)
Zima.exe 会提示你输入 WebUI 的用户名和密码以登录。登录后，Zima.exe 图标会从问号变为 ZIMA 标志，表示 Zima.exe 已经进入登录状态。
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)
右键点击 Zima 图标并选择“在文件资源管理器中打开”，这将把你的共享文件夹挂载到 Windows 系统中，并自动打开它！

> 注意：为了正常工作，Windows 和 ZimaOS 必须在同一局域网 (LAN) 中。

## 在 macOS 上挂载 SMB 共享文件夹
与 Windows 类似，我们也为 Mac 用户在 [findzima](https://findzima.com/) 提供了 Zima 应用程序。Mac 上 Zima 应用的使用方式与 Windows 版几乎相同。请参照上述内容进行操作。

你还记得文件应用程序在创建共享文件夹时提示的是什么吗？在 macOS 上，我们将使用你刚刚获得的 URL 进行手动挂载！
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)
在 Mac 上打开 Finder，按下 CMD+K，然后将相应的 URL 粘贴到输入框中。
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)
点击“连接”。此时，在提示对话框中选择“访客”并点击“连接”。

> 对于 ZimaOS v1.2.3 用户，请选择“注册用户”并输入正确的用户名和密码。
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)
现在，你将看到你的共享文件夹已经打开，并且它将显示在 Finder 应用的左侧栏中。
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)

> Windows 文件资源管理器的 URL 是怎么样的？Zima 自动挂载和手动通过 URL 挂载驱动器有什么区别？

目前，我们的 SMB 共享使用的是访客账户。在未来版本中，我们将引入多用户共享功能，并加强权限管理。我们希望这些功能能够满足大家更为多样化的需求。

## 不仅仅是局域网
实际上，不仅在局域网内，甚至在直接网络和广域网中，你也可以轻松连接你的 Zima 设备，并将共享目录映射为网络驱动器。我们将发布相关教程，请继续关注。

如果在使用过程中遇到任何问题，请随时告诉我们。你也可以加入我们的 [社区](https://community.zimaspace.com/) 和 [Discord](https://discord.com/invite/uuNfKzG5)，讨论更多关于 NAS 和 ZimaOS 的内容。我们期待你的反馈！