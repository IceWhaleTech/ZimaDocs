---
title: 开始使用
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

# 入门

开始使用 ZimaOS 非常简单。整体系统**设计专注于简洁性和语言一致性**。我们的目标是确保在私人云上使用、共享和管理数据的过程无缝、优雅且快速。
在整个设置过程中，**Zima 客户端应用程序建立了您笔记本电脑或 iMac 与 ZimaCube 之间的所有连接**，**为访问、高速传输和远程体验提供基础**。安装客户端应用程序后，只需按照引导步骤完成 ZimaCube 初始化即可。

## 安装 Zima 客户端 
### 下载 Zima 客户端
请访问 https://find.zimaspace.com/ 并安装 ZimaClient。它将自动扫描可用设备。
### 快速搜索
如果您更喜欢使用网页界面，可以访问该网站。请确保您的设备连接到与 ZimaCube 相同的网络。在网页上扫描，扫描完成后，您将看到可用的 ZimaCube 设备列表。只需点击相应的设备即可连接到 ZimaOS。
![](https://manage.icewhale.io/api/static/docs/1727082045246_image.png)

## 登录 ZimaOS
成功连接到 ZimaCube 后，输入相应的 IP 地址以进入 ZimaOS 初始化界面，在这里您可以开始配置您的 ZimaCube。
### 选择语言
目前 ZimaOS 支持包括英语、中文、日语、意大利语和挪威语在内的 6 种语言。选择您最熟悉的语言，以确保最佳用户体验。
![](https://manage.icewhale.io/api/static/docs/1727082127778_image.png)
### 创建用户
接下来，您需要创建一个用户账户。这个账户将是您管理 ZimaOS 的主要方式。请设置一个安全的用户名和密码，以保护您的数据和设置。
![](https://manage.icewhale.io/api/static/docs/1727082165610_image.png)
### 初始化成功
初始化完成后，ZimaOS 将为您提供功能简要介绍和使用指南。这将有助于您了解 ZimaOS 的主要功能及其用法。您可以了解： 
- 文件管理系统
- 应用商店和可安装的应用程序
- 设备管理和网络设置
- 多种 RAID 类型可供选择
![](https://manage.icewhale.io/api/static/docs/1727082245929_image.png)
![](https://manage.icewhale.io/api/static/docs/1728377751054_copyImage.png)


# 简介

## 远程访问
可访问性是私人云的基础，配置大多数 NAS 设备的网络设置可能相当复杂。ZimaOS 的目标是提供一种即插即用的安全可靠的远程访问体验，无需担心云转发或数据泄露的风险。

因此，只要您安装 [**Zima 客户端**](https://find.zimaspace.com/) 应用程序并首次扫描连接 ZimaOS，您的远程访问通道就已经设置好了！

![](https://manage.icewhale.io/api/static/docs/1728377748520_image.png)

您可以从任何地方用您的 MacBook 或笔记本电脑连接到家中或办公室的 ZimaCube，而无需进行额外配置。笔记本电脑与 ZimaCube 之间的连接由 Zima 客户端应用程序和 ZimaOS 自动建立，利用 P2P 通信构建连接。两者之间的数据传输经过加密，确保所有数据传输都是点对点的。

为了完全控制，您也可以登录设置面板，只需一键即可关闭远程访问功能。
![](https://manage.icewhale.io/api/static/docs/1727081506994_image.png)
## 文件
文件专注于创作者和个人数据的统一管理，提供简化的存储和文件访问体验。这无疑类似于本地云存储服务。然而，与主流云存储服务不同，其速度通过 Thunderbolt 可达 GB/s，而通过 Wi-Fi 6 无线网络，材料同步和文件预览体验可以超过 100MB/s。这为备份大量个人图像或视频内容（包括 4K）提供了最佳速度。

文件提供视频预览、固定和云存储扩展功能，有效满足您对内容访问和跨云服务数据统一的需求。常见用途包括在小团队内共享一组材料，或固定您最常用的项目文件夹以便于访问。

尽管 100MB/s 的性能通常满足大多数预览和编辑需求，但如果您需要极致的速度，ZimaCube 的 10GbE 或 Thunderbolt 功能是极佳的选择。
![](https://manage.icewhale.io/api/static/docs/1727081538638_image.png)
## Thunderbolt 传输

Thunderbolt 是专业编辑人员或寻求极致传输性能用户不应忽视的方法，ZimaCube 利用此技术。它提供超过 1GB/s 的数据传输速度，理论读写速度最高可达 20Gbps。

然而，它不应该复杂——连接 Thunderbolt 电缆并立即使用就足够简单。没错，通过 Zima 客户端应用程序和 ZimaOS。连接 Thunderbolt 电缆后，只需通过 Zima 客户端应用程序重新访问 ZimaOS，即可体验最快的编辑、材料访问或 Samba 共享速度。无需额外配置；系统和应用程序会自动为您处理一切。
![](https://manage.icewhale.io/api/static/docs/1727081568557_image.png)
## Samba 共享
在局域网 (LAN) 中创建一个空间，团队可以直接编辑，或允许设备（如电视和 VR 头盔）直接访问本地网络存储，Samba 通常是许多人的首选。在 ZimaOS 上设置和管理 Samba 继续提供系统固有的简便性和流畅性。您可以通过右键单击 Files 中的任何文件夹轻松创建 LAN 共享。

有趣的是，当与 Zima 客户端的远程访问功能结合使用时，您甚至可以远程加载存储空间并直接在该远程空间内编辑文件。这为协作和远程工作提供了一种引人注目且简单的解决方案。

通过设置面板，您可以直接创建不同的用户，并分配相应的内容访问权限，根据您的团队或家庭的需求定制可访问性。
![](https://manage.icewhale.io/api/static/docs/1727081592637_image.png)
## 云存储集成
今天，大家的数据非常分散——一些在 Notion，一些在 Slack，还有很多在电子邮件中。我们认为个人或小团队的数据应该更加统一。它不一定要驻留在私人云上，但管理应该是集中化的。基于这种理念，ZimaOS 的第一步是通过单一系统界面使您能够管理云存储数据、NAS 数据或 Zima 设备上的数据。

通过 Files 中的添加功能，您可以通过一次点击轻松链接 Google Drive、Dropbox、OneDrive 或本地 Samba 共享文件夹，所有都来自一个优雅的文件管理器。这允许您批量或统一管理您的个人数据。

这意味着如果您发现 Google Drive 的数据管理不再值得信任或经济，您可以批量迁移数据从 Google Drive 到 Dropbox 或其他您选择的媒介。这将是非常令人兴奋的，基于这个理念，我们将提供更有效的个人数据管理解决方案。
![](https://manage.icewhale.io/api/static/docs/1727081614882_image.png)
## RAID
RAID 是现有 NAS 用户必不可少的核心功能。ZimaOS 现在支持三种 RAID 模式：RAID 0、RAID 1 和 RAID 5。这些选项为您的个人数据存储提供冗余备份解决方案，保护您免受硬盘故障的不可预测风险。

RAID 0 主要旨在最大化读写性能并统一存储空间，而没有任何冗余机制。RAID 1 提供安全可靠的解决方案，将您的数据存储在两块相同的硬盘上，空间减半但安全性翻倍。RAID 5 通过配置三块磁盘，最大化存储空间的同时提供冗余机制。

如果您对 ZFS 或更高级的 RAID 配置感兴趣，可以通过 ZimaOS 提供的系统级界面构建这些。
![](https://manage.icewhale.io/api/static/docs/1727081705277_image.png)
## ZVM
基于虚拟化技术，您可以进一步利用 ZimaCube 硬件上的计算资源。例如，您可以将 NAS 用作 Windows 桌面主机、一个隔离的 Debian 开发环境，或甚至作为路由系统来管理您的网络。虚拟机功能仍处于初期阶段，我们根据社区反馈不断完善其更高级的功能。
![](https://manage.icewhale.io/api/static/docs/1727081725764_image.png)
## Drop
这是一个简单的共享功能：在 ZimaOS 创建的同一局域网内，所有手机、笔记本电脑或客户端设备可以在打开 ZimaOS 共享的链接时自由进行点对点的单个文件传输。
![](https://manage.icewhale.io/api/static/docs/1727081744441_image.png)
## 应用商店
应用商店几乎完全继承了 CasaOS 的所有功能，提供超过一百个可以一键部署的私人应用。这些包括流行的媒体服务器应用如 Plex 和 Jellyfin、智能家居应用如 Home Assistant 和 Homebridge，以及私人文档和团队协作工具如 Notion 和 Affinity。 
近期流行的本地 AI 应用如 OpenWeb UI 和 Stable Diffusion 也可以一键安装和激活。

有许多场景和用途等待您去探索，我们将通过即将到来的内容逐渐向您展示这些。
![](https://manage.icewhale.io/api/static/docs/1727081765695_image.png)


# ZimaOS 和 CasaOS
在这篇文章中，我们将简要介绍 ZimaOS 上可用的主要功能。熟悉 Zima 的人知道，ZimaOS 是基于 CasaOS 开发的，CasaOS 是 Zima 团队在 2022 年发布的开源私人云项目。它受到了全球开发者的广泛关注，超过 70 万次安装服务于数百个国家的热爱者。

在 CasaOS 的基础上，ZimaOS 进一步增强了其作为终极 NAS 操作系统的核心功能。简单来说，**CasaOS** 作为个人云 **应用中心**，使得各种私人云应用程序的部署变得容易，而 **ZimaOS** 则在此基础上 **建立了一个强大、完整的操作系统。** 它具有 RAID 设置、远程访问、云状的文件管理器、自动备份和云数据及 NAS 数据的统一管理等系统级功能。

进一步的内容将深入探讨 ZimaOS 的详细功能。