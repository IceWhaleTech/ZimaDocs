---
title: 从Synology迁移至ZimaCube，转移所有文件！
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 欢迎来到ZimaOS的世界！来自其他品牌阵营（例如Synology）的新朋友们，大家好！

ZimaOS是NAS爱好者、专业用户和工作室用户的游戏规则改变者。其直观的界面简化了数据备份和管理，确保您的重要文件始终安全。ZimaOS在Docker应用安装方面表现出色，仅需几个点击即可简化该过程。
![](https://manage.icewhale.io/api/static/docs/1722482124812_image.png)

我们很荣幸您选择ZimaCube作为体验ZimaOS的首个硬件。为了帮助大家快速从Synology设备迁移文件到ZimaCube，我们准备了本教程。

当然，转移文件到ZimaCube非常简单。让我们开始吧。

> 本教程同样适用于其他已安装ZimaOS的设备。

## SMB/SAMBA将是我们的迁移方式
SMB（服务器消息块）是一种内置于Windows系统的协议，用于通过网络共享文件和其他服务。SAMBA实现了SMB协议，丰富了类Unix系统的文件共享方式。

ZimaOS和Synology DSM都对SMB进行了良好的实现和兼容，无论是通过SAMBA还是自我实现，使得文件共享和转移变得非常方便。

## 在ZimaOS中挂载DSM的共享
> 在Synology设置的初始阶段，许多用户在创建目录时设置了共享；有些用户在创建目录时没有给予共享功能。因此，在迁移之前，您可能需要创建一个新的共享目录，然后将要迁移的数据移动到该共享目录中。

请前往ZimaOS仪表板并启动文件应用程序。然后，在文件应用程序界面的左侧导航栏中，找到“+”号，点击它，然后点击“LAN存储”。
![](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)
在弹出窗口中，输入Synology DMS的IP地址。我这里是10.0.0.11，您需要填入设备的正确IP地址。现在点击连接按钮。
![](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)
> 如果您的DSM共享账户不是访客账户，而是特定设置了用户和密码的账户，您需要在这里输入正确的DSM账户和密码。

## 在ZimaOS中从Synology DSM复制并粘贴文件
点击连接按钮并成功连接后，Synology将作为网络设备出现在存储下。在右侧，将显示Synology的共享目录。
![](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)
前往共享目录，选择我们想要迁移的文件和目录。您可以按Ctrl + A选择所有文件。然后，点击右上角的复制按钮。

![](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

现在进入ZimaOS存储区域。前往目标目录，选择右上角的`粘贴xx项`按钮。

[![](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)


> 您需要确保目标存储池的**剩余容量**大于待复制和粘贴的文件的**总体积**。

现在，等待文件迁移完成。迁移完成后，请体验ZimaOS为您的数据管理带来的便利！