---
title: 开始使用 ZimaBlade
description: "ZimaBlade 硬件指南。对比 3760 与 7700 型号，了解开始使用所需的设备，并查看详细设置说明。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

我一直很喜欢 ZimaBlade。它是我们制造的最小设备，价格大约相当于一顿不错的晚餐，但运行的软件栈与 ZimaCube 完全相同，包括 CasaOS、Docker 等。

我们提供两个版本。3760 是一款双核主板，可以轻松运行 Pi-hole、VPN 和轻量级 NAS。7700 升级为四核处理器，性能余量足以同时运行 Plex、多个 Docker 容器和 Home Assistant。

| | ZimaBlade 3760 | ZimaBlade 7700 |
|---|---|---|
| **CPU** | Intel Celeron N3350（双核） | Intel Celeron 四核处理器（N3450 / J3455 / E3950） |
| **内存** | 1 × SODIMM DDR3L，最高 16 GB | 1 × SODIMM DDR3L，最高 16 GB |
| **存储** | 板载 32 GB eMMC | 板载 32 GB eMMC |
| **网络** | 1 × 千兆以太网 | 1 × 千兆以太网 |
| **USB** | 1 × USB-C、1 × USB 3.0、2 × USB 2.0 | 1 × USB-C、1 × USB 3.0、2 × USB 2.0 |
| **SATA** | 2 × SATA 3.0 | 2 × SATA 3.0 |
| **PCIe** | 1 × PCIe 2.0 x4 | 1 × PCIe 2.0 x4 |
| **视频输出** | Mini DisplayPort 1.2（4K@60Hz） | Mini DisplayPort 1.2（4K@60Hz） |
| **适合用途** | Pi-hole、VPN、轻量级 NAS | Plex、Docker、Home Assistant 以及负载更高的用途 |

两个型号均采用 x86 处理器，因此各种 Docker 镜像都可以直接运行，无需处理 ARM 兼容性问题。

## 设置设备

如果你刚收到 ZimaBlade，请先阅读详细的 **[开机指南](./power-on-zimablade "启动 ZimaBlade 并完成初始设置")**。其中介绍了安装内存模块、连接硬盘、启动设备和配置 CasaOS 的方法，并为每个步骤配有图片。

ZimaBlade 出厂时已预装 CasaOS。如果你希望改用 ZimaOS，请参阅 **[安装 ZimaOS](../zimaos/how-to-install-zimaos "在设备上从头安装 ZimaOS 的分步指南")**；操作过程与其他 Zima 设备相同。

## 可以搭建哪些服务

ZimaBlade 体积虽小，却可以运行与 ZimaBoard 和 ZimaCube 相同的应用。有关媒体服务器、自托管应用和 AI 智能体的使用灵感，请查看 **[App Store 概览](../zimaos/app-store/ "浏览 App Store 中的媒体、自托管应用和 AI 分类")**。

## 第三方操作系统

由于采用 x86 架构，你可以安装 Ubuntu、Debian、OpenWrt 等其他操作系统。**[第三方操作系统指南](./third-party-os-install "按照本指南在 Zima 硬件上安装任意操作系统")** 介绍了通用安装流程。

## 如果遇到问题

这块主板没有电源指示灯，因此即使屏幕一直黑屏，也不要立即判断设备已经损坏。等待约 30 秒，然后在路由器中检查是否出现新设备；通常它已经正常运行，只是没有明显提示。

没有画面通常是 Mini DisplayPort 转接器兼容性不佳导致的。相比 HDMI 转接器，MiniDP 直连 DP 的线缆往往更可靠。如果硬盘没有显示，重新插拔 SATA 线通常就能解决。如果找不到 IP 地址，查看路由器的 DHCP 客户端列表是最快的定位方法。
