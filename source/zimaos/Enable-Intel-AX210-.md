---
title: How to Enable the Intel AX210 Wi-Fi Module on ZimaOS？
description:  
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

**🎯 Goal**
Enable the AX210 Wi-Fi card on ZimaOS and connect to a wireless network—no graphical interface required.

## For ZimaOS v1.4.2 and above
The Intel AX210 is a high-performance wireless card that supports Wi-Fi 6E. Many Zima device users rely on it for wireless connectivity. This guide walks you through enabling the AX210 and connecting to Wi-Fi in a command-line-only environment.
👉 [Click here to download the latest version of ZimaOS](https://github.com/IceWhaleTech/ZimaOS)



## Step 1: Confirm AX210 is recognized 
Run the following command:
```language
lspci | grep -i network

```
You should see output similar to:

`Intel Corporation Wi-Fi 6E AX210...`

![The terminal output confirms Intel AX210 Wi-Fi detection on ZimaOS via lspci.](https://manage.icewhale.io/api/static/docs/1751615644136_image.png)

If it's not detected, ensure the card is inserted into the correct M.2 E-key slot and that the hardware is functional.
## Step 2: Connect to Wi-Fi using nmtui
ZimaOS includes the `nmtui` command-line tool. Launch it with:
```language
sudo nmtui
```
Then:
- Select `Activate a connection`
- Choose your Wi-Fi network (SSID)
- Enter the password and press Enter

| ![](https://manage.icewhale.io/api/static/docs/1751616098976_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616105026_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616124786_image.png) |
| :---------------: | :---------------: | :---------------: |

## Step 3: Verify IP address and connectivity
Check your wireless interface status:
```language
ip a
```
![the terminal output of the ip a command in Linux, displaying network interface configurations including IP addresses and statuses.](https://manage.icewhale.io/api/static/docs/1751616224099_image.png)


🖥️ **Optional:** View and manage network settings in the ZimaOS dashboard
If you're using the ZimaOS web UI (Dashboard), you can also view and configure network settings there.
Example:
<p align="center">
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616926003_image.png)" width="45%" />
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616939282_image.png)" width="45%" />
</p>



🎉 **You’re all set!**
Your AX210 Wi-Fi card is now connected and ready to use with ZimaOS.

If you have any questions, please contact support email: <support@icewhale.org>