---
title: 如何设置NAS与ZimaBlade
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
NAS是一个数字避风港，存放着您珍贵的数据资产。
--------------------------------------------------------------

ZimaBlade是一款紧凑型单板服务器，将您的存储需求转化为无缝的NAS体验。未来，甚至在火星上也能使用！无论您是经验丰富的Linux爱好者还是好奇的技术探索者，与ZimaBlade一起设置您便携式的数据圣地NAS都是轻而易举的。让我们开始这个教程吧！

![](https://manage.icewhale.io/api/static/docs/1719988281769_copyImage.png)

**您需要的准备:**

*   ZimaBlade：您值得信赖的单板服务器！
    
*   SO-DIMM DDR3L：为您的ZimaBlade提供动力的内存模块。
    
*   Type-C 12V 3A电源适配器：让您的ZimaBlade保持充电状态。
    
*   MiniDP连接线：用于连接显示器。
    
*   一到两个HDD或SSD（SATA接口）：您的存储英雄。
    
*   带LAN连接的RJ45连接器：让您的ZimaBlade保持联网状态。
    
*   USB键盘：用于初始设置。
    
*   显示器：让您能够在启动和设置过程中看到发生了什么。
    

您可以在我们的[Zima商店](https://shop.zimaspace.com/collections/zima-accessories?utm_source=head&utm_medium=menu)中找到所有配件。

[此外，可以快速观看我们的快速入门视频。](https://www.youtube.com/watch?v=--G4T5aGGEM) 让我们开始吧！

## 步骤1：安装SO-DIMM

从ZimaBlade上移除黑色盖子，并打开透明盖子：

![](https://manage.icewhale.io/api/static/docs/1719988660694_2.png)


使用螺丝刀打开透明盖：

![](https://manage.icewhale.io/api/static/docs/1719988685607_3.png)


插入SO-DIMM，直到听到咔嗒声。

![](https://manage.icewhale.io/api/static/docs/1719988701892_4.png)


重新装回所有的盖子。

## 步骤2：连接

**将ZimaBlade连接到您的驱动器。这里，以HDD为例：**

为了正常工作，您的驱动器需要从ZimaBlade获取数据和电源。使用ZimaBlade包装中的SATA线缆，它能够同时获取数据和电源。

![](https://manage.icewhale.io/api/static/docs/1719988728728_5.png)


**通过RJ45连接ZimaBlade：**
![](https://manage.icewhale.io/api/static/docs/1719988748568_6.png)


**将ZimaBlade连接到键盘（USB）和显示器（miniDP）：**
![](https://manage.icewhale.io/api/static/docs/1719988770426_7.png)


**将ZimaBlade连接到电源：**
![](https://manage.icewhale.io/api/static/docs/1719988789048_8.png)


使用ZimaBlade包装中的Type-C线缆。

> ZimaBlade的Type-C接口支持USB PD 3.1。
> 
> 如果长时间使用HDD，建议使用外部电源。

## 步骤3：启动并获取IP地址

一旦您插入电源，设备将会自动启动。然后...轰！您进入了！

![](https://manage.icewhale.io/api/static/docs/1724748313259_image.png)



系统将提示您输入默认账户`casaos`和密码`casaos`以登录。


  

**现在，获取ZimaBlade的IP地址：**

输入`ip addr`并按`Enter`键查看IP地址。它将类似于`192.x.x.x`或`10.0.x.x`（根据您的LAN配置）。

![](https://manage.icewhale.io/api/static/docs/1724748361255_image.png)


物理网络接口`enp2s0`的IP地址（例如：`10.0.179.111`）已被记录下来，如果需要，将在未来的登录尝试中使用。
> IP地址`127.x.x.x`（回环）用于内部通信，`10.x.x.x`（物理接口）用于网络连接，`172.x.x.x`（Docker）用于容器网络。

## 步骤4：您的NAS在这里！

在您的手机或桌面计算机上打开浏览器，并访问您刚刚记录的IP地址。

按照说明创建Web UI账户。
![](https://manage.icewhale.io/api/static/docs/1719988936857_Arc_MyleHxojSb.png)

创建完成后，您将登录到CasaOS Web UI。
<br>

**现在，配置您的磁盘。** CasaOS将检测到已连接的磁盘。点击存储设置按钮，然后点击“创建存储”按钮。
![](https://manage.icewhale.io/api/static/docs/1720065540546_image.png)
![](https://manage.icewhale.io/api/static/docs/1719988986725_Arc_Xe3iywhbjm.png)

选择适合您需求的选项。您的驱动器现在已准备好作为存储使用。
![](https://manage.icewhale.io/api/static/docs/1719989035890_Arc_0Jjnl9skw3.png)

**使用“文件”应用程序上传和访问您的文件！**
![](https://manage.icewhale.io/api/static/docs/1719989056324_Arc_gdroRMM9ST.png)

**您的ZimaBlade NAS已成功设置！祝您使用愉快！**

  

如果在使用过程中遇到任何问题，请随时告诉我们。您还可以加入我们的[社区](https://community.zimaspace.com/)和[Discord](https://discord.gg/uuNfKzG5)讨论有关NAS和ZimaBlade的更多信息。我们期待您的反馈！