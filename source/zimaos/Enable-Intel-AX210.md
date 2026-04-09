---
title: How to Enable the Intel AX210 Wi-Fi Module on ZimaOS？
description: "Enable the Intel AX210 Wi-Fi 6E module on ZimaOS. Step-by-step guide to install the PCIe card, load drivers and connect your ZimaCube to a wireless network."
type: Docs
author: admin
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

**🎯 Goal**
Enable [the AX210 Wi-Fi card](https://shop.zimaspace.com/products/intel-ax210-wifi-6e-pcie-card-zimaboard) on ZimaOS and connect to a wireless network—no graphical interface required.

## For ZimaOS v1.4.2 and above
The Intel AX210 is a high-performance wireless card that supports Wi-Fi 6E. Many Zima device users rely on it for wireless connectivity. This guide walks you through enabling the AX210 and connecting to Wi-Fi in a command-line-only environment.
👉 [Click here to download the latest version of ZimaOS](https://github.com/IceWhaleTech/ZimaOS)



## Step 1: Confirm AX210 is recognized 
Run the following command:
```language
lspci | grep -i network
```
You should see output similar to:

![The terminal output confirms Intel AX210 Wi-Fi detection on ZimaOS via lspci.](https://manage.icewhale.io/api/static/docs/1751615644136_image.png)

If it's not detected, ensure the card is inserted into the correct M.2 E-key slot and that the hardware is functional.
## Step 2: Connect to Wi-Fi using nmtui
ZimaOS includes the `nmtui` command-line tool. Launch it with:
```language
sudo nmtui
```
Then:
- Select `Activate a connection`
  ![](https://manage.icewhale.io/api/static/docs/1751618008434_image.png)

- Choose your Wi-Fi network (SSID)

  ![](https://manage.icewhale.io/api/static/docs/1751618013751_image.png)

- Enter the password and press Enter

  ![](https://manage.icewhale.io/api/static/docs/1751618020114_image.png)




## Step 3: Verify IP address and connectivity
Check your wireless interface status:
```language
ip a
```
![the terminal output of the ip a command in Linux, displaying network interface configurations including IP addresses and statuses.](https://manage.icewhale.io/api/static/docs/1751616224099_image.png)


🖥️ **Optional:** View and manage network settings in the ZimaOS dashboard
If you're using the ZimaOS web UI (Dashboard), you can also view and configure network settings there.
Example:
![a network configuration panel displaying Ethernet, virtual, and wireless connections with their statuses, alongside a remote access section featuring a unique device ID.](https://manage.icewhale.io/api/static/docs/1751618035812_image.png)

![the configuration settings for a wireless interface (wlan0), showing IPv4/IPv6 parameters, DHCP options, and control buttons like Save and Cancel.](https://manage.icewhale.io/api/static/docs/1751618039627_image.png)


🎉 **You’re all set!**
Your AX210 Wi-Fi card is now connected and ready to use with ZimaOS.

If you have any questions, please contact support email: <support@icewhale.org>