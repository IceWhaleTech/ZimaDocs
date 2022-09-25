---
title: All-in-one routing system- Install OpenWRT
typora-root-url: ..
---

# Introduce OpneWRT

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/openwrt-logo.svg)

Tribute to the great [OpenWRT Documentation](https://oldwiki.archive.openwrt.org/start), This article only documents the installation of OpenWRT on the zimaboard, there is currently another article on writing the OpenWRT system to the ZimaBoard eMMc

**OpenWrt is the best companion for the ZimaBoard USB stick login version**

**-- 5 steps to burn your favourite OpenWrt hombre firmware**

{% note dinfo %}
**Topics**

With a performance between Raspberry Pi and MicroServer and a price positioning, the best use of the ZimaBoard for many gamers is undoubtedly to be a hundred-dollar class, customizable, OpenWrt / pfSense x86 router with enough computing power.
Based on this simple tutorial, we will share, how to make a USB stick boot disk and after a few steps, log into OpenWrt.
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

## 1. Creating an OpenWrt system on a USB stick
（For detailed steps, please see Universal Third Party System Installation）——插入通用第三方教程的

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-creat-mirror.png)

## 2. Connecting related equipment

**ZimaBoard via mini DP to HDMI / DP cable, access to the display,USB Keyboard to ZimaBoard**

![openwrt router system zimaboard connect](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-zimaboard-connect.png)

## 3. Enter Bios
**Insert the USB stick into the ZimaBoard, boot up and click "DEL" to log into the BIOS Page**

![Enter To OpenWRT Bios](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-to-bios.png)

## 4. Selection in Bios
**In the Boot option, configure the USB flash drive as Boot Option #1, save the settings, and reboot. After boot, enter the USB drive OpenWrt**

![Choose OpenWRT Boot](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-choose-boot.png)

## 5. Find the IP and log in to OpenWRT
**Configure your OpenWrt system IP address information and use a PC browser to log into the OpenWrt Luci page**

![Log In OpenWRT Luci](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-openwrt-luci.png)

# Successful login ！！！！

![Complete Install OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-complete-install-openwrt.jpeg)

# Summary
**Getting OpenWrt to run on a USB stick is a relatively simple way to do it. But as an aspiring gamer, if you wish to write your OpenWrt system to a ZimaBoard eMMC, you can refer to the next tutorial.**
**If you are interested in running more interesting software services for network enhancement, and home cloud data management on OpenWrt, check out this link!**

**Of course there are other methods, and the OpenWrt firmware download address is also provided here —— [Firmware Download Address](https://supes.top/?version=22.03&target=x86%2F64&id=generic)**
**Please don't abuse for the love of power**

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)