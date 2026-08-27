---
title: ZimaBoard 2 入门指南
description: "开箱并设置 ZimaBoard 2 单板服务器。本指南涵盖硬件概览、首次启动、连接外设以及访问系统仪表板。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## 简介
**ZimaBoard 2 — 打破常规，创造新规则**
这是一款专为创客和创作者设计的**超高性能单板服务器**。机身小巧但性能强大，可以用作**迷你 NAS**、**家庭服务器**、**自托管平台**或**软路由**，并能够运行**本地 AI** 推理和**集群**部署。
 凭借**双 2.5GbE**、一个 **PCIe** 插槽、**双 SATA 3.0** 和 **USB 3.1** 扩展能力，ZimaBoard 2 可帮助你构建专属的高性能私有数字中心。

 ## 功能特性
- **Intel® N150 四核 CPU**，最高 **3.6 GHz**，提供流畅响应的性能。
- **8GB** 或 **16GB LPDDR5x** 内存，轻松处理多任务。
- **32GB** 或 **64GB eMMC**，支持系统快速启动。
- **2 个 2.5GbE LAN 端口**，提供高速网络连接。
- **2 个带供电的 SATA 3.0 接口**，可直接连接 2.5"/3.5" HDD/SSD。
- **2 个 USB 3.1 接口**，用于高速外设和外置硬盘。
- **1 个 PCIe 3.0 插槽**，可安装 **10GbE 网卡**、**NVMe 适配器**或 **GPU**。
- **1 个 Mini DisplayPort 1.4**，支持 **4K@60Hz** 输出。
- **无风扇被动散热**，运行安静稳定。

## 接口
![ZimaBoard 2 接口示意图：双 2.5GbE、USB 3.1、MiniDP、直流电源、PCIe 和 SATA。](https://manage.icewhale.io/api/static/docs/1756795953605_zimaboard2-interface-pinout.png)


## 连接存储和 PCIe 设备
### 2.5"/3.5" SATA HDD/SSD
- 使用随附的 **SATA 数据线 + 电源线**，将硬盘连接到主板的 SATA 接口。
- 将硬盘安装在合适的 **NAS 支架**或外置托盘中。
<mark>*提示：两块 **3.5" 硬盘**启动时需要更大的电流，请确保使用**稳定的 12V/5A** 电源。*</mark>
### PCIe 扩展卡
- 安装 **10GbE 网卡**、**NVMe 适配器**或**低功耗独立 GPU**（更多信息请参阅 GPU 兼容性列表）。
- 如果 GPU 需要外接供电，请准备合适的线缆，并确保电源容量充足（参阅同一兼容性文档）。

## 首次启动和网络
- 将**电源适配器**连接到 ZimaBoard 2。
- 将**以太网线**连接到路由器或交换机。
<img src="https://manage.icewhale.io/api/static/docs/1756796033890_zimaboard2-power-network.png"
     alt="ZimaBoard 2 后置接口已连接 2.5GbE 以太网和 12V 电源，电源 LED 亮起，正在进行迷你 NAS 首次启动设置。"
     width="50%" />

- ZimaBoard 2 会使用**预装的 ZimaOS 自动启动**，并自动获取 IP 地址。
  - 访问 https://www.zimaspace.com/zimaos/download 下载 **ZimaClient**，扫描并直接打开设备页面。
  - 也可以在**路由器的 DHCP 列表**或连接的**显示器**上查找 IP。
  - 现在还可以使用 **Zima App**，更轻松地发现和管理设备。

## [登录并使用 ZimaOS](../zimaos/get-started)
- 通过设备 IP、ZimaClient 或应用打开登录页面。
- 创建账户并完成初始设置，包括语言、时区和网络。
- 将系统更新到最新版 ZimaOS，以获得最佳稳定性和应用兼容性。

## 更多高级选项
- **安装第三方操作系统**：Linux 发行版、OpenWrt、[UnRAID](./unraid-install) 等。
- **启用 WOL（网络唤醒）**：在 BIOS 和操作系统中启用（参阅[启用 WOL 教程](./wake-on-lan-setup)）。
- **使用 Wi-Fi 模块**：按照 ZimaOS 或所选操作系统的驱动/设置指南操作（[教程：AX210 用户指南](./ax210-wifi-6e)）。
- **添加散热模块**：如果计划运行高负载任务，请参阅散热模块安装指南。
-  **下载 3D 模型**：[Google Drive](https://drive.google.com/file/d/1paE2loHLjRjftefT0xsKo4lIFok9-Itc/view?usp=sharing)

## 常见问题
- **如何恢复或重新安装 ZimaOS？**
 请参阅 ZimaOS 恢复/重装指南，创建可启动介质并运行安装程序。
- **如何清除/初始化 CMOS？**
 关闭电源，按下重置按钮（或取出电池几秒钟），然后恢复供电并加载 BIOS 默认设置。详情请参阅 CMOS 初始化指南。
