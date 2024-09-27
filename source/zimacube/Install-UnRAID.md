---
title: How to install UnRAID on ZimaCube
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# ZimaCube Install TrueNAS Guide
![](https://manage.icewhale.io/api/static/docs/1727249736896_image.png)
## Hardware environment：
1X ZimaCube
1X Monitor
1X DP
1X Keyboard
1X Ethernet cable
1 X USB flash drive (as installation disk)
![](https://manage.icewhale.io/api/static/docs/1727249911617_image.png)
## Detailed installation process
### Step 1: Format USB flash drive
**a.Prepare a USB stick（Needs to be greater than 1G） and format it in FAT32 format，name changed to UNRAID（Mac）**
![](https://manage.icewhale.io/api/static/docs/1727249967953_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249974644_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249981977_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249988198_image.png)
**b.Download the official [USB Creator](https://unraid.net/download)**
![](https://manage.icewhale.io/api/static/docs/1727250152598_image.png)
**c.Download the [Official Image](https://unraid.net/download)**
![](https://manage.icewhale.io/api/static/docs/1727250193523_image.png)
**d.Open the USB Creator and Wirte Unraid OS**
Select the following options according to the specification
![](https://manage.icewhale.io/api/static/docs/1727250248143_image.png)
**Click write and wait**
![](https://manage.icewhale.io/api/static/docs/1727250272215_image.png)
![](https://manage.icewhale.io/api/static/docs/1727250278309_image.png)
### Step2: Installing Unraid to ZimaCube
**a.Boot from the installation USB stick**
![](https://manage.icewhale.io/api/static/docs/1727250302063_image.png)
**b.Choose OS**
![](https://manage.icewhale.io/api/static/docs/1727250317388_image.png)
**c.Get IP**
![](https://manage.icewhale.io/api/static/docs/1727250333338_image.png)
## Connecting to the Unraid webGui
There are two methods to connect to the webGui in Unraid:
  - Boot Unraid in GUI mode and login (username is `root`, no password by default); or
  - Open a web browser from your Mac or PC and navigate to `http://tower.local` Note: if you configured a different host name in the USB Flash Creator, use that name instead of `tower`.
![](https://manage.icewhale.io/api/static/docs/1727250410689_image.png)
## Now you can use UNRAID in ZimaCube！
![](https://manage.icewhale.io/api/static/docs/1727250432285_image.png)
