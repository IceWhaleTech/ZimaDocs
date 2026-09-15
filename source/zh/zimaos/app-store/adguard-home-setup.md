---
title: 如何在 ZimaOS 上运行 AdGuard Home
seo_title: "ZimaOS 上的 AdGuard Home：全网络广告与追踪器拦截"
description: 从 ZimaOS 应用商店安装 AdGuard Home——用你自己的 DNS 服务器为网络上每台设备拦截广告、追踪器和恶意域名。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

AdGuard Home 在 ZimaOS 应用目录中原生支持。查看 [AdGuard Home 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.adguardhome)了解最新的应用详情。

AdGuard Home 是一款运行在你自己硬件上的全网络广告和追踪器拦截 DNS 服务器——它为网络上的每台设备拦截广告、追踪器和恶意域名，从手机到智能家居设备都不例外，而且无需在设备本身上安装任何东西。

## 准备工作

- 一台运行中的 ZimaOS 设备。
- 设备上的 **82** 和 **3001** 端口可用——这两个是 ZimaOS 主机端口，分别映射到 AdGuard Home 自身的 80 端口（Web 界面）和 3000 端口（设置向导）。
- **53** 端口也必须空闲，用于 DNS。

## 应用目录

1. 在 ZimaOS 应用目录中找到 AdGuard Home。打开 **App Store** → 搜索 "AdGuard Home" → 点击 **Install**。

![ZimaOS 应用商店中的 AdGuard Home 应用页面及安装和自定义安装选项](/images/app-store/adguard-app-store.webp)

2. **马上就能用了！**

![安装完成后 ZimaOS 桌面上的 AdGuard Home 图标](/images/app-store/adguard-installed-dashboard.webp)

## 配置

下载完成后，打开应用设置并添加一条端口转发规则：

1. 点击 **Port forwarding** 下方的 **'+'** 按钮，添加一条将 `82` 映射到 `80` 的规则。

![AdGuard Home 端口转发规则中新增的 82 到 80 TCP 映射](/images/app-store/adguard-port-forwarding.webp)

> **提示：** 如果添加规则时报错，说明端口 `82` 很可能已被其他应用占用。把 `82` 改成另一个空闲端口，并记得同步修改文中所有提到 `82` 的地方。不要修改 `53` 端口的映射——DNS 需要它。

## 首次设置

1. 点击 AdGuard Home 图标打开初始设置。
2. 保持所有默认设置并完成设置流程，创建你的管理员用户名和密码。

> AdGuard Home 的管理界面默认监听所有网络接口。如需修改此配置，请参阅 AdGuard 的 [安全运行 AdGuard Home](https://adguard-dns.io/kb/adguard-home/running-securely/ "AdGuard Home 官方安全运行指南") 指南。

## 设置完成后

1. 返回 ZimaOS 桌面，再次打开应用设置。在 **Web URL**（webURL）字段中，把 `3001` 改成 `82`。

![AdGuard Home 应用设置中 Web URL 字段由 3001 改为 82](/images/app-store/adguard-web-url.webp)

2. 点击 AdGuard Home 图标，用设置过程中创建的用户名和密码登录。

![AdGuard Home 登录界面及用户名和密码输入框](/images/app-store/adguard-login.webp)

## 设置静态 IP

在把路由器指向 AdGuard Home 之前，先给 ZimaOS 设备分配一个固定地址。如果它一直使用 DHCP 分配的地址，一旦地址发生变化，网络上每台设备都会失去 DNS 解析，直到更新为止。

1. 打开 ZimaOS **Settings** → **Network** 并选择你的网络接口。
2. 将其从自动（DHCP）切换为 **Manual**，然后填写各项字段。
3. 保存设置。

![ZimaOS 网络设置已切换为手动模式，填有静态 IP、网关和 DNS](/images/app-store/adguard-static-ip.webp)

截图中的字段为示例——请替换成与你网络匹配的值：

- IP 地址：例如 `10.0.1.91`
- 子网掩码：例如 `255.255.255.0`（或按你的设置使用前缀长度，如 /24）
- 网关：例如 `10.0.1.1`
- DNS：例如 `94.140.14.14`（首选），`94.140.15.15`（备用）

或者，你也可以在路由器的 DHCP 页面为设备保留地址，让它始终获得相同的 IP。

## 将路由器指向 AdGuard Home

配置完 AdGuard Home 后，打开路由器设置，找到 **DHCP/DNS** 部分，输入运行 AdGuard Home 的设备地址——例如 `10.0.1.91`。保存设置即可开始使用。

> 有些路由器完全不允许设置自定义 DNS 服务器。这种情况下，你可以改用 AdGuard Home 自带的 DHCP 服务器。

## 添加拦截列表

AdGuard Home 默认启用 **AdGuard DNS filter**，因此设置完成后过滤立即生效。如需更激进的过滤，打开 **Filters** → **DNS blocklists** → **Add blocklist** 添加更多 DNS 拦截列表——这些列表上的任何域名都会对你网络上的每台设备被拦截。

## AdGuard Home 能拦截什么

基于 DNS 的拦截按域名生效，因此它可以拦截：

- 来自专用广告和追踪域名的广告与追踪器
- 恶意和钓鱼域名
- 应用和智能家居设备发出的遥测数据

请注意：AdGuard Home 无法移除与内容同域名的广告，例如 YouTube 视频内广告和大多数应用内广告。这些需要设备级的广告拦截器。

当客户端请求出现在 AdGuard Home 的 **Query Log** 中、且被拦截的请求出现在 **Dashboard** 统计中时，说明全网络过滤已经生效。

![AdGuard Home 仪表盘中的 DNS 查询数量和客户端统计](/images/app-store/adguard-dashboard-stats.webp)

## 更新

AdGuard Home 以 Docker 容器方式运行，而 Docker 安装默认禁用自动更新。因此 AdGuard Home 界面内的 **Update** 按钮无法使用。要更新，请从 **ZimaOS App Store** 安装最新版本。

## 相关指南

- 想要一个界面更简单、对设备更友好的替代方案？参见 [Pi-hole 安装](./pi-hole-setup "在 ZimaOS 上用 Pi-hole 实现全网络广告与追踪器拦截")。

## 需要帮助？

如果你在 ZimaOS 上安装或使用 AdGuard Home 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.gg/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
