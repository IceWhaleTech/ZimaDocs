---
title: 一体化路由系统 - 安装 OpenWRT
typora-root-url: ..
---

# 介绍 OpenWRT

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/openwrt-logo.svg)

致敬伟大的 [OpenWRT 文档](https://oldwiki.archive.openwrt.org/start)，本文仅记录在 ZimaBoard 上安装 OpenWRT 的过程。当前还有另一篇文章介绍如何将 OpenWRT 系统写入 ZimaBoard 的 eMMC。

**OpenWRT 是 ZimaBoard USB 吊牌登录版本的最佳伴侣—— 5 个步骤烧录您最喜欢的 OpenWRT Firmware**

{% note dinfo %}
**主题**

在 Raspberry Pi 和 MicroServer 之间的性能和价格定位上，ZimaBoard 对许多玩家来说无疑是一个价格在百元左右的、可定制的、具有足够计算能力的 OpenWRT/pfSense x86 路由器。因此，基于这个简单的教程，我们将演示如何制作一个 USB 吊牌启动盘，并在几个步骤后登录到 OpenWRT。
{% endnote %}

## **准备工作**

1. PC 主机
2. ZimaBoard（与 PC 处于同一局域网）
3. U 盘
4. 键盘 
5. MiniDP 转 HDMI 或 DP 适配器
6. 显示器
7. 以太网线 
8. OpenWrt 镜像（或通过该链接下载团队推荐的镜像）
9. balenaEther（或您常用的任意 U 盘镜像创建工具）

# 操作步骤

## 1. 在 USB 吊牌上创建 OpenWRT 系统
详细步骤，请参考通用第三方系统安装

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-creat-mirror.png)

## 2. 连接相关设备

**通过 miniDP 转 HDMI / DP 线连接 ZimaBoard，接入显示器，USB 键盘连接到 ZimaBoard**

![openwrt router system zimaboard connect](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-zimaboard-connect.png)

## 3. 进入 BIOS

**将 USB 吊牌插入 ZimaBoard，开机后点击“DEL”进入 BIOS 页面**

![Enter To OpenWRT Bios](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-to-bios.png)

## 4. BIOS 中的选择

**在启动选项中，将 USB 闪存驱动器配置为启动选项 #1，保存设置并重启。重启后，进入 USB 驱动器的 OpenWRT**

![Choose OpenWRT Boot](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-choose-boot.png)

## 5. 查找 IP 并登录 OpenWRT

**配置您的 OpenWRT 系统 IP 地址信息，并使用 PC 浏览器进入 OpenWRT Luci 页面**

![Log In OpenWRT Luci](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-openwrt-luci.png)

# 成功登录！！！！

![Complete Install OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-complete-install-openwrt.jpeg)

# 总结

**让 OpenWRT 在 USB 吊牌上运行是一种相对简单的方法。但是作为一个有抱负的玩家，如果您想将 OpenWrt 系统写入 ZimaBoard 的 eMMC，可以参考以下教程。如果您对在 OpenWRT 上运行更多有趣的软件服务以增强网络和管理家庭云数据感兴趣，可以查看此链接！**

**当然，还有其他方法，这里也提供了 OpenWRT 固件下载地址—— [固件下载地址](https://supes.top/?version=22.03&target=x86%2F64&id=generic)**
**请不要滥用对电力的热爱**

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)