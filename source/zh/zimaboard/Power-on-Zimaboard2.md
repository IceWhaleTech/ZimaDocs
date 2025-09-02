---
title: 开始使用 ZimaBoard 2  
description: ZimaBoard 2 是一款高性能单板服务器，支持 NAS、家庭服务器、软件路由等多场景，搭载 Intel 四核 CPU、双 2.5GbE、PCIe 插槽、SATA 与 USB 扩展，预装 ZimaOS，轻松实现存储、网络和本地 AI 应用。
type: “Docs”  
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字  
---
## 简介
**ZimaBoard 2 — 打破新规则**  
一款为创客与创造者设计的 **高性能单板服务器**。小巧却强大，它可以成为你的 **迷你 NAS**、**家庭服务器**、**自建平台** 或 **软件路由器**，同时具备 **本地 AI 推理** 和 **集群** 部署能力。  
凭借 **双 2.5GbE**、**PCIe 插槽**、**双 SATA 3.0** 和 **USB 3.1** 扩展，ZimaBoard 2 让你轻松构建属于自己的高性能数字枢纽。  

## 功能特性
- **Intel® N150 四核 CPU**，最高 **3.6 GHz**，响应迅速。  
- **8GB** 或 **16GB LPDDR5x** 内存，应对多任务处理。  
- **32GB** 或 **64GB eMMC**，实现快速系统启动。  
- **2 × 2.5GbE LAN 接口**，支持高速网络。  
- **2 × SATA 3.0（带电源）**，可直接连接 2.5"/3.5" HDD/SSD。  
- **2 × USB 3.1**，连接高速外设或外置硬盘。  
- **1 × PCIe 3.0 插槽**，支持 **10GbE 网卡**、**NVMe 转接卡** 或 **显卡**。  
- **1 × Mini DisplayPort 1.4**，支持 **4K@60Hz** 输出。  
- **无风扇被动散热**，静音且稳定运行。  

## 接口
![ZimaBoard 2 接口图示—双 2.5GbE、USB 3.1、MiniDP、DC 电源、PCIe、SATA。](https://manage.icewhale.io/api/static/docs/1756385752551_image.png)  

## 连接存储与 PCIe 设备
### 2.5"/3.5" SATA HDD/SSD  
- 使用附带的 **SATA 数据线 + 电源线** 将硬盘连接到主板的 SATA 接口。  
- 将硬盘安装在合适的 **NAS 支架** 或外置托架中。  
*提示：双 **3.5" 硬盘**需要更高的启动电流，请确保 **12V/5A** 稳定电源供应。*  

### PCIe 扩展卡  
- 可安装 **10GbE 网卡**、**NVMe 转接卡** 或 **低功耗独立显卡**（详情见 GPU 兼容性列表）。  
- 若显卡需要外接供电，请准备合适的电源线并确保电源功率充足（参考兼容性文档）。  

## 首次启动与网络
- 连接 **电源适配器** 至 ZimaBoard 2。  
- 插入一根 **网线** 连接路由器或交换机。  
<img src="https://manage.icewhale.io/api/static/docs/1756386839952_image.png"
     alt="ZimaBoard 2 后置 I/O，已连接 2.5GbE 网线和 12V 电源，电源灯点亮——迷你 NAS 首次启动设置。"
     width="50%" />  
- ZimaBoard 2 **预装 ZimaOS 自动启动**，并会自动获取 IP 地址。  
  - 在路由器的 **DHCP 列表** 或连接的 **显示器** 上查看 IP。  
  - 或访问 https://find.zimaspace.com/ 下载 **ZimaClient**，扫描并直接打开设备页面。  
  - 现已支持 **Zima App**，更方便发现和管理设备。  

## [登录并使用 ZimaOS](https://www.zimaspace.com/docs/zimaos/Get-Started)
- 打开登录页面（通过设备 IP、ZimaClient 或 App）。  
- 创建账户并完成初始设置（语言、时区、网络）。  
- 更新到最新的 ZimaOS，以获得最佳稳定性与应用兼容性。  

## 更多进阶玩法
- **安装第三方系统**：Linux 发行版、OpenWrt、[UnRAID](https://www.zimaspace.com/docs/zimaboard/Unraid-First-Experience-at-$129-Installation) 等。  
- **开启 WOL（局域网唤醒）**：在 BIOS 和操作系统中启用（参见 [教程：开启 WOL](https://www.zimaspace.com/docs/zimaboard/Enable-WOL-on-Zimaboard)）。  
- **使用 Wi-Fi 模块**：按 ZimaOS 或所选系统的驱动/配置指南操作（参见 [教程：AX210 使用指南](https://www.zimaspace.com/docs/zimaboard/AX210-Wi-Fi)）。  
- **添加散热模块**：若计划高负载任务，可参考散热模块安装指南。  

## 常见问题
- **如何恢复或重装 ZimaOS？**  
  请参考 ZimaOS 恢复/重装指南，创建可启动介质并运行安装程序。  

- **如何清除/初始化 CMOS？**  
  关机后，按下复位键（或取下电池数秒），然后重新上电并加载 BIOS 默认设置。详情