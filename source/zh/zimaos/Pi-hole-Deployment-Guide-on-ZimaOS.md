---
title: 连接 Synology 和 SMB 共享
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字
---
# 如何共享和获取 NAS 中的文件？SAMBA 可能是最重要的方式
当我们谈到网络附加存储（NAS）时，我们希望文件能够存储、管理在一个地方，并且能从任何地方访问这些文件。那么，如何实现这一点呢？
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)
你可以通过访问 ZimaOS 的 WebUI 来随时访问数据，WebUI 拥有精美的界面和流畅的体验。然而，当你的工作涉及到文件引用，或者你需要对文件系统层级进行更复杂的操作时，通过 SMB/SAMBA 等技术将 NAS 驱动器挂载到客户端系统将是更好的方式。
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)
SMB（Server Message Block）是 Windows 系统中用于通过网络共享文件和其他服务的协议。SAMBA 实现了 SMB 协议，它丰富了类 Unix 系统的文件共享方式。ZimaOS 配备了 SAMBA，使得文件共享和传输变得非常方便。在以下内容中，为了方便，我们将描述 SMB 和 SAMBA，统称为 SMB。

## 在 ZimaOS 上创建共享文件夹
在 ZimaOS 的仪表盘上启动 Files 应用，找到包含你想要共享的文件的目标文件夹。右键点击该文件夹并选择“共享”。
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)
弹出一个对话框，提供你需要挂载共享文件夹的系统对应 URL。
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)
这两个 URL 供专业用户手动挂载驱动器。此外，通过 [Zima 客户端](https://findzima.com/) 在相应系统上安装，我们可以使挂载过程更加简单。
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)

## 在 Windows 上挂载 SMB 共享文件夹
从 [findzima](https://findzima.com/) 下载 Zima-latest setup.exe 并打开它。它将启动安装过程，安装完成后 Zima 客户端会自动启动。你会发现 Zima 图标出现在任务栏右侧，由于未连接状态，它显示为一个问号。
右键点击图标并选择“扫描并连接到 Zima”。
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)
找到你的 Zima 设备并点击“连接”。
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)
Zima.exe 会提示你输入 WebUI 的用户名和密码进行登录。之后，你的 Zima.exe 图标会从问号变为 ZIMA 标志，这意味着你的 Zima.exe 已进入登录状态。
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)
右键点击 Zima 图标并选择“在文件资源管理器中打开”，这将把共享文件夹挂载到你的 Windows 系统，并自动打开！

> 注意：为了正常工作，你的 Windows 系统和 ZimaOS 需要在同一个局域网（LAN）内。

## 在 macOS 上挂载 SMB 共享文件夹
与上述类似，我们也为 Mac 用户准备了 Zima 应用，可以从 [findzima](https://findzima.com/) 下载。Mac 版 Zima 应用的使用方式与 Windows 版几乎相同，请参考上面的内容。

你还记得当你完成创建共享文件夹时，Files 应用会提示什么吗？在 macOS 上，我们将使用你刚才获得的 URL 来手动挂载！
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)
在 Mac 上打开 Finder，并按下 CMD+K，然后将相应的 URL 粘贴到输入框中。
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)
点击“连接”。在弹出的对话框中，选择“访客”并点击“连接”。

> 对于 ZimaOS v1.2.3 用户，请选择“注册用户”，并输入正确的用户名和密码。
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)
现在，你将看到共享文件夹被打开，并且它会显示在 Finder 应用的左侧栏中。
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)

> 关于 Windows 资源管理器中的 URL 怎么样？Zima 自动挂载和通过 URL 手动挂载驱动器有什么区别？

目前，我们的 SMB 共享使用的是访客账户。在未来的版本中，我们将引入多用户共享功能，并加强权限管理。我们希望这些能满足更多用户的需求。

## 不仅仅是局域网
实际上，不仅仅是在局域网（LAN）内，你还可以在直接网络和广域网（WAN）中轻松连接 Zima 设备，并将共享目录映射为网络驱动器。我们将发布相关教程，请继续关注。

如果在使用过程中遇到任何问题，随时告诉我们。你也可以加入我们的 [社区](https://community.zimaspace.com/) 和 [Discord](https://discord.com/invite/uuNfKzG5) 讨论更多关于 NAS 和 ZimaOS 的内容。我们期待你的反馈！
