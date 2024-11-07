---
title: PC 直连
description:
type: “文档”
tip: 顶部栏固定格式请勿删除，description 为文章描述，不填时将截取内容最前一段文字
---
# 不同的设置方式
无论您是出于个人还是专业目的使用 ZimaOS 设备，了解如何通过各种网络连接到设备是至关重要的。本文将涵盖三种主要的网络连接类型：直接连接、本地局域网（LAN），以及广域网（WAN）。每种方法都有独特的优势和应用，确保您可以无缝访问和管理您的数据，无论您是在家中还是在外出时。

本文的目的是为了理解不同网络下的连接方式。

## 直接连接
![](https://manage.icewhale.io/api/static/docs/1726131286208_image.png)

直接连接非常适合快速和简单的设置，提供了一种快速且安全的方式来连接设备，而无需更广泛的网络。这种方法非常适合文件传输或使用需要高速访问的特定应用程序。

{% note warn 提示: %}
如果在使用 Thunderbolt 时遇到任何问题，您可以在 [这里](/zimacube/Connecting-ZimaCube-via-Thunderbolt.html) 获取更多详细信息。
{% endnote %}

**您需要准备的：**

* 网络电缆或用于高速连接的 Thunderbolt 电缆

* ZimaOS 设备（ZimaCube Pro 配备 Thunderbolt）和客户端设备（笔记本电脑、台式 PC 等）

步骤：

1. **建立连接：** 使用标准网络电缆将您的客户端设备直接连接到 ZimaOS 设备，或使用 Thunderbolt（针对 ZimaCube Pro 用户）电缆，速度可达 20G，适合高要求的任务。

2. **网络配置：** IP 通过自动配置功能分配，格式为 169.254.x.x。
![](https://manage.icewhale.io/api/static/docs/1726131302533_image.png)

3. **这意味着您的连接成功：** 显示在屏幕上的 IP 地址，如 169.254.x.x，表示直接连接成功。
![](https://manage.icewhale.io/api/static/docs/1726131333502_image.png)

**应用实例和使用场景：** 利用高速连接，特别适合视频编辑或其他带宽密集型任务。它非常适合低延迟和高速数据传输至关重要的场景。

## 本地局域网（LAN）连接
![](https://manage.icewhale.io/api/static/docs/1726131416246_image.png)

通过 LAN 连接您的 ZimaOS 设备提供了一个强大而稳定的网络环境，非常适合家庭或小型企业，其中多个设备需要高效共享资源。

**您需要准备的：**

* 路由器或网络交换机

* ZimaOS 设备（ZimaCube Pro 配备 10G NIC）和客户端设备（手机、笔记本电脑、台式 PC 等）

**步骤：**

1. **连接到网络：** 将您的 ZimaOS 设备和其他客户端设备连接到路由器或交换机。

2. **网络配置：** 检查所有设备是否在同一子网并能够相互通信，格式类似于 192.168.x.x 或 10.0.x.x，具体取决于您的 LAN 配置。您可以手动分配静态 IP 地址以实现一致的设备识别，或依靠 DHCP 自动分配。

3. **这意味着您的连接成功：** 显示在屏幕上的 IP 地址，如 192.168.x.x，表示 LAN 连接成功。LAN IP 取决于您的 LAN 配置。
![](https://manage.icewhale.io/api/static/docs/1726131462130_image.png)

**应用实例和使用场景：** 在设备之间流媒体和管理媒体内容，享受无缝访问您的资料库。最适合需要可靠和快速本地网络访问的环境，例如媒体服务器或共享文件存储。
![](https://manage.icewhale.io/api/static/docs/1726131473384_image.png)

## 选择哪个？
当您同时具有直接连接和 LAN 连接时，您会选择哪个？
![](https://manage.icewhale.io/api/static/docs/1726131488677_image.png)

如果您已阅读我们的 SAMBA 教程 4，这是体验 NAS 的重要方式，您可能会掌握将 NAS 驱动器挂载到客户端设备的正确方法。要注意的是，这里有两条规则：

1. 在使用 Zima 应用时，优先选择 Thunderbolt。

2. 您可以通过手动挂载文件夹，通过相应的 IP 选择特定的连接。
![](https://manage.icewhale.io/api/static/docs/1726131521116_image.png)

## 广域网（WAN）连接
![](https://manage.icewhale.io/api/static/docs/1726131531121_image.png)

WAN 连接使您能够远程访问您的 ZimaOS 设备，允许您从任何有互联网连接的地方连接。这对于远程工作或在旅行时访问个人数据特别有用。

为了增强安全性和便捷性，我们使用 Zerotier 创建虚拟网络，简化连接过程。
![](https://manage.icewhale.io/api/static/docs/1726131539225_image.png)

**您需要准备的：**

* 每台设备都需有互联网连接

* 获取 ZimaOS 设备的远程登录 ID。此 ID 是 Zerotier ID，您可以从 ZimaOS 仪表板 → 网络 → 远程登录中获取。
![](https://manage.icewhale.io/api/static/docs/1726131699787_image.png)

* 对于您的 Windows/Mac，需要一个 [Zima APP](https://find.zimaspace.com) 5（集成 Zerotier）。
**步骤：**

1. **建立连接：** 在您的 Windows/Mac 上下载并启动 Zima 应用。点击系统任务栏右侧的应用图标，选择通过网络 ID 连接。之后，您可能需要输入您的 WebUI 用户名和密码。
![](https://manage.icewhale.io/api/static/docs/1726131911735_image.png)

2. **网络配置：** 基本上，您不需要进一步的网络配置，因为 Zima 应用已为您完成这些。

3. **这意味着您的连接成功：** 您将导航到 ZimaOS 的仪表板。
![](https://manage.icewhale.io/api/static/docs/1726131933130_image.png)

**应用实例和使用场景：** 使用 WAN 连接安全访问重要文件或在紧急情况下管理设备。非常适合需要远程管理或访问其 ZimaOS 设备的用户，确保重要数据的持续可用性。
![](https://manage.icewhale.io/api/static/docs/1726131946008_image.png)

可选：配置了动态 DNS 的公共 IP 地址也可以作为选项，因为您可以通过域名直接访问设备。

## 结论
无论您的需求如何，ZimaOS 提供灵活且强大的连接选项以满足任何情况。从高速直接连接到通过 WAN 的便捷远程访问，您都可以轻松管理您的设备和数据。在处理 WAN 连接时，始终考虑安全措施，以保护您的信息并保持顺畅操作。

如果您在使用过程中遇到任何问题，请随时与我们联系。您还可以加入我们的社区和 Discord，讨论更多关于 ZimaCube 和 ZimaOS 的内容。我们期待您的反馈！