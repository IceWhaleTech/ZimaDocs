---
title: 入门指南
description:
type: "Docs"
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字
---

# 入门指南

开始使用ZimaOS非常简单。整个系统的设计侧重于简洁和语言一致性。我们的目标是确保在私有云上使用、共享和管理数据是一种无缝、优雅和快速的体验。
在设置过程中，**Zima客户端应用程序会建立您的笔记本电脑或iMac与ZimaCube之间的所有连接**，为访问、高速传输和远程体验提供基础。安装客户端应用程序后，只需按照引导步骤完成ZimaCube的初始化即可。

## 安装Zima客户端
### 下载Zima客户端
https://find.zimaspace.com/ 并安装ZimaClient。它将自动扫描可用设备。
### 快速搜索
如果您喜欢使用Web界面，可以访问网站。请确保您的设备连接到与ZimaCube相同的网络。在网页上进行扫描，扫描完成后，您将看到可用的ZimaCube设备列表。只需点击相应的设备即可连接到ZimaOS。
![](https://manage.icewhale.io/api/static/docs/1727082045246_image.png)

## 登录ZimaOS
成功连接到ZimaCube后，输入相应的IP地址进入ZimaOS初始化界面，您可以开始配置您的ZimaCube。
### 选择语言
目前，ZimaOS支持包括英语、中文、日语、意大利语和挪威语在内的6种语言。选择您最熟悉的语言，以确保最佳用户体验。
![](https://manage.icewhale.io/api/static/docs/1727082127778_image.png)
### 创建用户
接下来，您需要创建一个用户帐户。该帐户将是您管理ZimaOS的主要方式。请设置一个安全的用户名和密码，以保护您的数据和设置。
![](https://manage.icewhale.io/api/static/docs/1727082165610_image.png)
### 初始化成功
初始化后，ZimaOS将为您提供简要介绍和使用指南。这将帮助您了解ZimaOS的主要功能和用法。您可以了解以下内容：
- 文件管理系统
- 应用商店和可安装应用程序
- 设备管理和网络设置
- 多种Raid类型可供选择
![](https://manage.icewhale.io/api/static/docs/1727082245929_image.png)
![](https://manage.icewhale.io/api/static/docs/1728377751054_copyImage.png)


# 简介

## 远程访问
可访问性是私有云的基础，而在大多数NAS设备上配置网络设置可能相当复杂。ZimaOS旨在提供一种即插即用的远程访问体验，既安全可靠，又没有云转发或数据泄漏的风险。

因此，一旦您安装了[**Zima客户端**](https://find.zimaspace.com/)应用程序并进行首次连接到ZimaOS，您的远程访问通道已经设置好！

您可以使用MacBook或笔记本电脑从家里或办公室连接到您的ZimaCube，无需进行任何其他配置。您的笔记本电脑和ZimaCube之间的连接由Zima客户端应用程序和ZimaOS自动建立，利用P2P通信建立连接。两者之间的数据传输是加密的，确保所有数据传输都是点对点的。

为了完全控制，您还可以登录设置面板，只需点击一次即可关闭远程访问功能。
![](https://manage.icewhale.io/api/static/docs/1727081506994_image.png)
## 文件
文件专注于创作者和个人数据的统一管理，提供了简化的存储和文件访问体验。它无疑类似于本地云存储服务。然而，与主流云存储服务不同，它的速度可以通过Thunderbolt达到GB/s，并且通过Wi-Fi 6无线网络，可以实现超过100MB/s的材料同步和文件预览体验。这为备份大量个人图像或视频内容（包括4K）提供了最佳速度。

文件提供视频预览、固定和云存储扩展功能，有效满足您对内容访问和统一云服务数据的需求。常见用途包括在小团队内共享一组材料或将最常用的项目文件夹固定在便于访问的位置。

虽然100MB/s的性能通常可以满足大多数预览和编辑需求，但如果您需要极高的速度，ZimaCube的10GbE或Thunderbolt功能是很好的选择。
![](https://manage.icewhale.io/api/static/docs/1727081538638_image.png)
## Thunderbolt传输

Thunderbolt是专业编辑人员或寻求最高传输性能的用户不容忽视的方法，它与ZimaCube一起使用。它提供超过1GB/s的数据传输速度，理论读写速度可达20Gbps。

然而，它不应该复杂，它应该像连接Thunderbolt电缆并立即使用一样简单。是的，通过Zima客户端应用程序和ZimaOS。一旦连接了Thunderbolt电缆，只需通过Zima客户端应用程序重新访问ZimaOS，即可体验最快的编辑、材料访问或Samba共享速度。无需进行其他配置；系统和应用程序将自动处理一切。
![](https://manage.icewhale.io/api/static/docs/1727081568557_image.png)
## Samba共享
在本地区域网络（LAN）中创建一个团队可以直接编辑的空间，或者使电视和VR头显等设备直接访问本地网络存储，Samba通常是许多人的首选。在ZimaOS上设置和管理Samba仍然提供了系统固有的简便和流畅性。您可以通过右键单击Files中的任何文件夹轻松创建LAN共享。

有趣的是，当与Zima客户端的远程访问功能结合使用时，您甚至可以远程加载存储空间并直接在该远程空间中编辑文件。这为协作和远程工作提供了一种引人注目且简单的解决方案。

通过设置面板，您可以直接创建不同的用户并分配相应的内容访问权限，根据团队或家庭的需要进行定制访问权限。
![](https://manage.icewhale.io/api/static/docs/1727081592637_image.png)
## 云存储集成
如今，每个人的数据都非常分散 - 一些在Notion中，一些在Slack中，还有很多在电子邮件中。我们认为个人或小团队的数据应该更加统一。它不一定需要驻留在私有云上，但管理应该集中。基于这一理念，ZimaOS的第一步是通过单一的系统界面管理您的云存储数据、NAS数据或Zima设备上的数据。

通过Files中的添加功能，您可以轻松地通过单击将您的Google Drive、Dropbox、OneDrive或本地Samba共享文件夹与一个优雅的文件管理器连接起来。这允许批量或统一管理您的个人数据。

这意味着如果您发现Google Drive的数据管理不再可靠或经济，您可以批量将数据从Google Drive迁移到Dropbox或您选择的任何其他介质。这将非常令人兴奋，并基于这个想法，我们将提供更有效的个人数据管理解决方案。
![](https://manage.icewhale.io/api/static/docs/1727081614882_image.png)
## Raid
RAID是现有NAS用户必不可少的核心功能。ZimaOS现在支持三种RAID模式：RAID 0、RAID 1和RAID 5。这些选项为您的个人数据存储提供冗余备份解决方案，提供对硬盘故障的不可预测风险的保护。

RAID 0是一种主要用于最大化读写性能和统一存储空间而没有任何冗余机制的选项。RAID 1提供了一种安全可靠的解决方案，将您的数据存储在两个相同的硬盘上，减少了空间但提高了安全性。RAID 5通过配置三个磁盘，最大化存储空间同时提供冗余机制。

如果您对ZFS或更高级的RAID配置感兴趣，可以通过ZimaOS提供的系统级界面构建这些配置。
![](https://manage.icewhale.io/api/static/docs/1727081705277_image.png)
## ZVM
基于虚拟化技术，您可以进一步利用ZimaCube硬件上的计算资源。例如，您可以将您的NAS用作Windows桌面主机、隔离的Debian开发环境，甚至作为路由系统来管理您的网络。VM功能仍处于早期阶段，我们正在根据社区反馈不断完善其更高级功能。
![](https://manage.icewhale.io/api/static/docs/1727081725764_image.png)
## Drop
这是一个简单的甜点功能：当在ZimaOS共享的链接时，所有在ZimaOS创建的本地区域网络中的手机、笔记本电脑或客户端设备可以自由地进行点对点的文件传输。
![](https://manage.icewhale.io/api/static/docs/1727081744441_image.png)
## 应用商店
应用商店几乎完全继承了CasaOS的所有功能，提供了一百多个可以通过一键部署的私有化应用程序。其中包括流行的媒体服务器应用程序，如Plex和Jellyfin，智能家居应用程序，如Home Assistant和Homebridge，以及私有化的文档和团队协作工具，如Notion和Affinity。
最近流行的本地AI应用程序，如OpenWeb UI和Stable Diffusion，也可以通过一键安装和激活。

有许多场景和用途等待您去探索，我们将逐步通过即将推出的内容向您展示这些。
![](https://manage.icewhale.io/api/static/docs/1727081765695_image.png)


# ZimaOS和CasaOS
在本文中，我们将简要介绍ZimaOS上可用的主要功能。熟悉Zima的人都知道，ZimaOS是基于CasaOS开发的，CasaOS是Zima团队于2022年发布的开源私有云项目。它在全球范围内吸引了全球开发者的广泛关注，已经在数百个国家为数十万的用户提供服务。

在CasaOS的基础上，ZimaOS进一步增强了其作为终极NAS操作系统的核心功能。简而言之，**CasaOS**作为一个个人云**应用程序中心**，可以轻松部署各种私有云应用程序，而**ZimaOS**在此基础上构建了一个强大、完整的操作系统。它具有RAID设置、远程访问、类似云的文件管理器、自动备份和云和NAS数据的统一管理等一套系统级功能。

接下来的内容将更深入地介绍ZimaOS的详细功能。
