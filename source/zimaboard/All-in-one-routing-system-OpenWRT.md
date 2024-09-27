---
title: All-in-one routing system- Install OpenWRT
typora-root-url: ..
---

# Introducing OpenWRT

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/openwrt-logo.svg)

Tribute to the great [OpenWRT Documentation](https://oldwiki.archive.openwrt.org/start), This article only documents the installation of OpenWRT on the ZimaBoard. There is currently another article on writing the OpenWRT system for the ZimaBoard eMMC.

**OpenWRT is the best companion for the ZimaBoard USB stick login version– 5 steps to burn your favorite OpenWRT hombre firmware**


{% note dinfo %}
**Topics**

With a performance between Raspberry Pi and MicroServer and a price positioning, the best use of the ZimaBoard for many gamers is undoubtedly to be a hundred-dollar , customizable, OpenWRT / pfSense x86 router with enough computing power. So, based on this simple tutorial, we will demonstrate how to make a USB stick boot disk and, after a few steps, log into OpenWRT.
{% endnote %}

## **Preparation**

1. PC Host
2. ZimaBoard（Access to the same LAN as the PC）
3. U Disk
4. Keyboard 
5. Minidp to HDMI or DP Adapter
6. Monitor
7. Ethernet Cable 
8. OpenWrt Image（Or download the mirror recommended by the team via this link）
9. balenaEther（Or any of your usual u disk image creation tools）

# Operation steps

## 1. Creating an OpenWRT System on a USB stick
For detailed steps, please see Universal Third Party System Installation

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-creat-mirror.png)

## 2. Connecting Related Equipment

**ZimaBoard via miniDP to HDMI / DP cable, access to the display, USB Keyboard to ZimaBoard**

![openwrt router system zimaboard connect](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-zimaboard-connect.png)

## 3. Enter BIOS

**Insert the USB stick into the ZimaBoard, boot up and click “DEL” to log into the BIOS Page**

![Enter To OpenWRT Bios](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-to-bios.png)

## 4. Selection in BIOS

**In the Boot option, configure the USB flash drive as Boot Option #1, save the settings, and reboot. After boot, enter the USB drive OpenWRT**

![Choose OpenWRT Boot](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-choose-boot.png)

## 5. Find the IP and Login to OpenWRT

**Configure your OpenWRT system IP address information and use a PC browser to log into the OpenWRT Luci page**

![Log In OpenWRT Luci](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-openwrt-luci.png)

# Successful Login ！！！！

![Complete Install OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-complete-install-openwrt.jpeg)

# Summary

**Getting OpenWRT to run on a USB stick is a relatively simple way. But as an aspiring gamer, you can refer to the following tutorial if you wish to write your OpenWrt system to a ZimaBoard eMMC. If you are interested in running more interesting software services for network enhancement and home cloud data management on OpenWRT, check out this link!**

**Of course, there are other methods, and the OpenWRT firmware download address is also provided here—— [Firmware Download Address](https://supes.top/?version=22.03&target=x86%2F64&id=generic)**
**Please don't abuse for the love of power**


[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)

