---
title: 硬件概览
seo_title: "Zima 硬件对比：ZimaCube、ZimaBoard 与 ZimaBlade"
description: "比较 ZimaCube、ZimaBoard 和 ZimaBlade 的 CPU、内存、硬盘位、网络与扩展规格，并查找设备设置、硬件扩展和第三方系统安装指南。"
type: "Docs"
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如留空，将使用正文第一段。
---

Zima 目前有三条硬件产品线，每条产品线都面向不同类型的用户。此页面可以帮助你确认手中的设备，或选择最适合自己的型号。

## 设备对比

| | ZimaCube 2 | ZimaBoard 2 | ZimaBlade |
|---|---|---|---|
| **适合场景** | 专业 NAS、媒体制作、本地 AI | 家庭服务器、网络服务、动手实验 | 入门 NAS、首次 DIY 搭建 |
| **CPU** | Intel i3-1215U / i5-1235U（Pro） | Intel N150（四核，最高 3.6 GHz） | Intel Celeron N3350（3760）/ 四核（7700） |
| **内存** | 8 GB DDR5（最高 64 GB） | 8 GB / 16 GB LPDDR5（板载） | 1 个 DDR3L SODIMM，最高 16 GB |
| **硬盘位** | 6 个 SATA + 4 个 M.2 NVMe | 2 个 SATA 3.0 + 32/64 GB eMMC | 2 个 SATA 3.0 |
| **网络** | 2 个 2.5 GbE（Pro 另含 10 GbE） | 2 个 2.5 GbE | 1 个 1 GbE |
| **Thunderbolt** | 全型号均配备 2 个 TB4 | 无 | 无 |
| **PCIe** | PCIe 4.0 x16 + PCIe 3.0 x8 | PCIe 3.0 x2 | 1 个 PCIe 2.0 x4 |

## 设置设备

如果设备刚刚开箱，请从对应的快速设置指南开始。

- **[ZimaCube 快速开始](./quick-start "开箱 ZimaCube、连接电源并访问 ZimaOS")** — 完成开箱、接线和首次访问
- **[ZimaBoard 开机](./zimaboard-quick-start "完成 ZimaBoard 的首次启动与初始配置")** — 首次启动和初始化
- **[ZimaBlade 开机](./power-on-zimablade "安装硬盘支架并首次启动 ZimaBlade")** — 安装硬盘支架并完成首次启动

## 硬件详情

设备启动后，可通过以下页面了解端口、扩展插槽和内部结构。

- **[ZimaCube 硬件详情](./hardware-details "详细了解 ZimaCube 的每个端口和硬件接口")** — 查看 ZimaCube 的所有端口与接口
- **[ZimaBoard 硬件接口](./hardware-interface "查看 ZimaBoard 引脚、连接器和硬件接口")** — 查看引脚和连接器
- **[ZimaCube PC 直连](./pc-direct "通过 Thunderbolt 将 ZimaCube 直接连接到电脑")** — 将 ZimaCube 直接连接到电脑
- **[ZimaCube GPU 扩展](./gpu-expansion "为 ZimaCube 添加独立显卡")** — 添加独立显卡和 GPU 算力
- **[ZimaCube RAID SSD 扩展](./raid-ssd-expansion "为 ZimaCube 添加 SSD 缓存或高速 RAID 存储")** — 添加 SSD 缓存或高速存储
- **[DIY 风扇指南](./zimacube-fan-diy "更换或升级 ZimaCube 的散热风扇")** — 更换或升级散热风扇

## 兼容性

以下页面列出了经过实际测试的兼容设备和功能。

- **[UPS 兼容性列表](./ups-compatibility-list "查看确认兼容 Zima 设备的不间断电源")** — 已验证可用的 UPS 型号
- **[支持的磁盘格式](./supported-disk-formats "查看 Zima 设备原生支持读写的文件系统")** — 设备可以读写的文件系统
- **[兼容的网络适配器（英文）](../../hardware/compatible-network-adapters "查看经过 ZimaCube 测试的网络适配器")** — 已验证兼容的网卡
- **[Intel AX210 Wi-Fi](./enable-intel-ax210 "在 ZimaOS 上启用 Intel AX210 Wi-Fi 模块")** — 在 ZimaOS 上启用 AX210 模块
- **[AX210 Wi-Fi 模块](./ax210-wifi-6e "在 ZimaBoard 上安装 Intel AX210 Wi-Fi 模块")** — 在 ZimaBoard 上安装 AX210
- **[BIOS 配置](./bios-configuration "进入并配置 Zima 设备的 BIOS 设置")** — 访问并调整 BIOS
- **[启用网络唤醒](./enable-wol-on-zimacube "启用 Wake-on-LAN，远程启动 ZimaCube")** — 远程启动 ZimaCube
- **[ZimaBoard 网络唤醒](./wake-on-lan-setup "为 ZimaBoard 启用 Wake-on-LAN")** — 远程唤醒 ZimaBoard

## 第三方操作系统

ZimaOS 已预装在设备上，但硬件并未锁定。社区也会在这些设备上运行 Unraid、TrueNAS、OpenWrt 等系统。

- **[运行 Unraid](./install-unraid "在 ZimaCube 上安装 Unraid，搭建灵活的 NAS")** — 在 ZimaCube 上安装 Unraid
- **[运行 TrueNAS](./install-truenas "在 ZimaCube 上安装基于 ZFS 的 TrueNAS")** — 在 ZimaCube 上设置 TrueNAS
- **[在 ZimaBoard 上运行 Unraid](./unraid-install "在 ZimaBoard 家庭服务器上安装 Unraid")** — 在 ZimaBoard 上安装 Unraid
- **[运行 OpenWrt](./openwrt-x86-install "使用 OpenWrt 将 ZimaBoard 变成家庭路由器")** — 将 ZimaBoard 变成路由器
- **[通过 USB 运行 OpenWrt](./openwrt-usb-install "从 USB 设备启动并运行 OpenWrt")** — 从 USB 设备启动 OpenWrt
- **[OpenWrt eMMC 启动](./openwrt-emmc-boot "将 OpenWrt 安装到 ZimaBoard 内置 eMMC")** — 将 OpenWrt 安装到内部存储
- **[安装 OMV](./openmediavault-install "在 ZimaBoard 上安装 OpenMediaVault")** — 安装适合 NAS 的 OpenMediaVault
- **[配置 OMV](./openmediavault-setup "完成 OpenMediaVault 安装后的初始配置")** — 安装 OMV 后的第一步设置
- **[安装 Arch Linux](./arch-linux-installation-on-zimaboard-2 "在 ZimaBoard 2 上安装 Arch Linux")** — 在 ZimaBoard 2 上运行 Arch Linux
- **[设置 Ubuntu Server](./minimal-ubuntu-server-build "在 ZimaBoard 2 上构建精简 Ubuntu Server")** — 构建精简服务器系统
- **[第三方系统指南](./third-party-os-install "在 Zima 硬件上安装任意操作系统")** — 通用操作系统安装方法

## 下一步

了解硬件之后，后续设置会更加清晰。

- 设置 ZimaOS：**[ZimaOS 概览](../zimaos/ "查看 ZimaOS 安装、存储与共享文档")** — 安装、存储和系统设置
- 运行应用：**[应用商店概览](../zimaos/app-store/ "浏览媒体、自托管应用和 AI 等应用类别")** — 媒体服务器、自托管应用与 AI 智能体
