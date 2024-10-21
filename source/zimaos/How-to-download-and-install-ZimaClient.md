---
title: How to download and install ZimaClient
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Introduction:
The ZimaClient is designed to be a silent client, but its functionality is substantial enough that some core experiences occur in places you might not even notice—quietly and naturally.

Remote access is one of the most important features. Once you enable and connect ZimaCube, it will always find the fastest connection to open the webUI in any network scenario (LAN, Thunderbolt, external network, hotspot).
This also applies to sharing ZimaOS services with your friends. Some services, like OpenWebUI and game servers, can be accessed without logging in, using the app’s own authentication features.

At the same time, we also provide some quick access to functions, such as Peer Drop, Back up, Open in finder.
Of course, we are still in the early iterations and welcome more client ideas.

To download and install ZimaClient, please follow the steps below:
### 1. Download ZimaClient
Visit the following link on your hosting device to download the ZimaClient installation package:
https://find.zimaspace.com/
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. Mac OS Installation Guide
- Once the download is complete, double-click to open the downloaded installation package.
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- Drag and drop ZimaClient into the “Applications” folder and wait for the installation to complete.
- After the installation is complete, you can find and click “Launchpad” to run ZimaClient.
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
Notes:
ZimaClient will **display its icon in the taskbar** and you can open and operate the client by clicking on the icon.

How to connect to ZimaCube via ZimaClient, please refer to this [document](https://www.zimaspace.com/docs/zimaos/Romote-Access.html)
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Windows Installation Guide
- After the download is complete, double-click to run the ZimaClient installation package.
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- After the installation is complete, ZimaClient will display its icon in the taskbar and you can use the client by clicking on the icon.

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### FAQ
**1. If you are stuck in the following screen during installation, please try the following steps:**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- Visit https://www.zerotier.com/download/ to download and install Make sure the internet connection is working.
- Try running ZimaClient again.

<br>

**2. If ZimaClient does not show up on macOS but indicates that it is running, please follow the steps below to troubleshoot the problem:**
- Open macOS “Activity Monitor”, search and find Zima related processes (e.g. Zima, Zima Helper, zima-client-backup, etc.).
- Close all related processes.
- Reopen the Launchpad and run ZimaClient.
<br>

**3. Will remote access compromise my privacy?**
Absolutely not! The connection between your laptop and ZimaCube is established automatically by the Zima Client application and ZimaOS, using P2P communication to establish the connection. The data transfer between the two is encrypted, ensuring that all data transfers are peer-to-peer.
We use a self-deployed network controller on ZimaCube, which means we only use ZeroTier's global public discovery servers. The control of the virtual network is entirely under the control of ZimaCube. neither IceWhale nor ZeroTier have any administrative rights. Data privacy and sovereignty are our top priorities, so if you have any questions, please feel free to challenge them.
We will continue to monitor and optimize these issues.
<br>

**4. How to access logs and assist with debugging**
When an error/issue occurs, immediately take a screenshot (if applicable) and exit the Zima client.
Retrieve the logs from the following locations:
macOS:
`~/Library/Application Support/Zima/logs`
Windows:
`%AppData%\Zima\logs`
Pack all the log files and send them to john@icewhale.org, describing the issue and providing screenshots (if any).