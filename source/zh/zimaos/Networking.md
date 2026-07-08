---
title: 网络
description:ZimaOS 没有桌面 UI，只需插入以太网即可使用。连接的显示器会显示设备信息和 IP 地址，而仪表盘可让你查看每个端口的链路速度、切换到静态 IP 或启用远程访问。
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /zh/zimaos/networking.html
---

**ZimaOS** 没有桌面环境。当你将显示器连接到设备时，屏幕会显示一个控制台概览，其中包含 ZimaOS 版本、设备型号以及可用于访问 ZimaOS Web 仪表盘的 IP 地址。

你将在显示器上看到的示例：

![Zimaos display UI](https://manage.icewhale.io/api/static/docs/1783495730981_image.png)


默认情况下，ZimaOS 会通过 DHCP 自动获取 IP 地址——只需插入以太网线，设备即可使用。如果你需要更改网络设置，请打开仪表盘并前往 **Settings > Network**。

## 网络设置

**Network** 页面会一目了然地显示设备上的所有物理以太网端口。对于每个端口，你可以查看：

- 接口名称（例如，`eth0`、`eth1`）
- 链路状态（已连接 / 已断开）
- 当前链路速度（例如，1000 Mbps、2500 Mbps）
- 分配的 IP 地址（通过 DHCP）

这使你可以轻松确认每个端口是否以预期速度进行协商，并且是否已从路由器获取有效 IP。

## 配置静态 IP

每个网络接口都可以从自动配置（DHCP）切换为手动静态 IP 配置：

1. 点击你想要配置的接口
2. 将模式从 **DHCP** 切换为 **Manual**
3. 输入所需的 IP 地址、子网掩码、网关和 DNS 服务器
4. 点击 **Save**
![Setting Page](https://manage.icewhale.io/api/static/docs/1783495665542_image.png)

更改会立即生效。如果新的 IP 位于不同子网中，你当前的仪表盘会话将断开——请使用连接显示器上显示的新 IP 重新连接。

## 远程访问

网络页面中的 **Remote Access** 开关允许你启用通过互联网访问 ZimaOS 仪表盘的入站连接。启用后，ZimaOS 会建立安全中继连接，因此你无需在路由器上配置端口转发，即可从任何地方访问设备。

有关更多详细信息，请参阅 [Remote Access](https://www.zimaspace.com/docs/zimaos/remote-access)。