---
title: 连接Synology与SMB共享
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 如何分享和获取NAS上的文件？SAMBA可能是最重要的方式
当我们谈论网络附加存储时，我们希望我们的文件能够存储、管理在一个地方，并在任何地方都能访问。但是，这一切是如何实现的呢？
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)
您可以通过访问ZimaOS的WebUI来随时访问您的数据，WebUI拥有组织良好的界面和流畅的体验。然而，当您的工作涉及文件引用，或者您需要对文件系统层次结构进行更复杂的操作时，通过像SMB/SAMBA这样的技术将NAS驱动器挂载到您的客户端系统将是更好的方式。
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)
SMB（服务器消息块）是一种内置于Windows系统中的协议，用于在网络上共享文件和其他服务。SAMBA实现了SMB协议，丰富了类*nix系统的文件共享方法。ZimaOS配备了SAMBA，使文件共享和传输非常方便。在以下内容中，我们将描述SMB和SAMBA，并为了方便起见将其统一称为SMB。
## 在ZimaOS上创建共享文件夹
在ZimaOS的仪表板上启动文件应用程序，找到您想共享的文件所在的目标文件夹。右键单击文件夹并选择共享。
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)
一个对话框窗口将提示您需要的URLs，以在相应系统上挂载共享文件夹。
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)
这两个URLs是供专业用户手动挂载驱动器的。此外，在相应系统上使用[Zima客户端](https://findzima.com/)，我们可以使挂载过程更简单。
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)
## 在Windows上挂载您的SMB共享文件夹
从[findzima](https://findzima.com/)下载Zima-latest setup.exe并打开它。它将启动安装过程，Zima客户端将在安装后自动启动。您将在任务栏右侧找到Zima图标，由于未连接状态，图标显示为问号。
右键单击该图标，选择扫描并连接到Zima。
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)
找到您的Zima设备并单击连接。
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)
Zima.exe将提示您输入WebUI的用户名和密码以登录。之后，您的zima.exe图标将从问号变为ZIMA标志，这意味着您的zima.exe已进入登录状态。
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)
右键单击zima图标，选择在文件资源管理器中打开，这将把您的共享文件夹挂载到Windows系统并自动打开！

> 注意：要正常工作，您的Windows和ZimaOS需要处于同一局域网（LAN）中。
## 在macOS上挂载您的SMB共享文件夹
和上面一样，我们也为Mac用户在[findzima](https://findzima.com/)准备了zima应用程序。Mac zima应用程序的使用与Windows相似。只需参考上述内容。

您还记得文件应用程序在您完成创建共享文件夹时提示了什么吗？在macOS上，我们将使用您刚才获得的URLs进行手动挂载！
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)
在您的Mac上打开Finder并按CMD+K，然后将相应的URL复制粘贴到输入框中。
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)
点击连接。此时，在提示对话框中，选择访客并点击连接。

> 对于ZimaOS v1.2.3的用户，选择注册用户并输入正确的用户名和密码。
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)
现在，您将看到共享文件夹打开，并且它将在Finder应用程序的左侧栏中列出。
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)
> Windows资源管理器的URL怎么处理？Zima自动挂载与手动通过URL挂载驱动器有什么区别？

目前我们的SMB共享使用访客账户。在未来的版本中，我们将引入多个用户共享功能并加强权限管理。我们希望这些功能能满足每个人的多样化需求。
## 不仅仅是局域网
实际上，不仅在局域网上，而且在直连网络和广域网（WAN）上，您也可以轻松连接Zima设备并将共享目录映射为网络驱动器。我们将发布相关的教程。感谢您持续的关注。

如果您在使用过程中遇到任何问题，请随时告诉我们。您还可以加入我们的[社区](https://community.zimaspace.com/)和[Discord](https://discord.com/invite/uuNfKzG5)，以讨论关于NAS和ZimaOS的更多内容。我们期待您的反馈！