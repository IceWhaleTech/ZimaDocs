---
title: Tailscale 与 WireGuard 远程访问
seo_title: "使用 Tailscale 和 WireGuard 随时随地连接 ZimaOS 家庭服务器"
description: "通过官方 App Store 安装 Tailscale、WireGuard Easy、Firefly 或 NetBird，访问你的 ZimaOS 家庭服务器。开放协议、自有密钥、完全掌控。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---
从登录的那一刻起，ZimaClient 就承担着 ZimaOS 的远程访问。但也有不少人已经在运行 Tailscale 网络或 WireGuard 服务器，原因通常相同：希望连接建立在开放协议之上，使用自己掌控的账户和密钥。本指南介绍的正是这条路线，全部从 App Store 直接安装。

## 为什么选择标准协议

无论你用哪种方式连接，ZimaOS 都不会收集用户数据。不同路线之间的差别在于控制权在哪里。

内置远程访问通过 ZimaClient 运行。登录后连接就自动建立，点对点且加密。标准协议则把这份设置交给你自己。你带着自己的 Tailscale 账户或 WireGuard 密钥，流量依然是点对点的，客户端可以在 Linux、Android 等平台上运行，一切都不绑定单一厂商。即使将来离开 ZimaOS，你的网络和配置也可以带走。

官方 App Store 中有四款应用可用于此：**Tailscale**、**WireGuard Easy**、**Firefly** 和 **NetBird**。

## 选择你的应用

| 应用 | 是什么 | 适合谁 |
|---|---|---|
| Tailscale | 基于 WireGuard 的网状 VPN，无需开放端口 | 用最少的配置把所有设备连进一个私有网络 |
| WireGuard Easy | 管理 WireGuard VPN 服务器的 Web 界面 | 带着仪表盘运行自己的 WireGuard 服务器 |
| Firefly | 基于 wg-easy 的 WireGuard VPN 服务器 | 开箱即用的 WireGuard 服务器 |
| NetBird | 基于 WireGuard 的覆盖网络，带 SSO、MFA 和访问控制 | 团队和精细的访问规则 |

Tailscale 和 NetBird 用自己的服务协调设备，但流量本身仍是点对点的。WireGuard Easy 和 Firefly 则把一切留在你的设备上，包括密钥。

## 从 App Store 安装

四款应用的前几步完全相同：

1. 在 ZimaOS 设备上打开 **App Store**。
2. 搜索应用并点击**安装**。
3. 从已安装的应用中打开它。

![ZimaOS App Store 中的 Tailscale 应用卡片，显示安装按钮和应用介绍](/images/app-store/tailscale-app-store-card.webp)

Tailscale 还需要几个步骤，见下文。另外三款应用在客户端设置之后介绍。

### Tailscale

首次启动时，Tailscale 会要求你使用 Tailscale 账户登录。浏览器会打开一个页面，你授权设备后，ZimaOS 设备就加入了你的 tailnet。

![Tailscale 登录页面，请求为你的家庭服务器授权加入 tailnet](/images/app-store/tailscale-sign-in.png)

给它起一个容易辨认的名字，然后在 [Tailscale 管理控制台](https://login.tailscale.com/admin/machines "在官方管理控制台中管理你的 Tailscale 设备")中找到它，以及它的 100.x 地址。

![Tailscale 管理控制台显示家庭服务器及其 100.x 地址](/images/app-store/tailscale-admin-console-device.webp)

现在 tailnet 中的任何设备都可以通过该地址访问你的 ZimaOS 家庭服务器，无论双方身在何处。把仪表盘地址存进笔记本浏览器书签，随时随地登录。

## 安装客户端应用

客户端一侧很简单。从设备的应用商店安装官方应用，然后连接到你的网络。

在 iOS 上，两款应用都在 App Store 中。在 Android 上，从 Google Play 获取官方 Tailscale 或 WireGuard 应用。在 Linux 上，从你的发行版安装官方 Tailscale 客户端或 wireguard-tools。

配置只需一步：

- Tailscale：打开应用并用 Tailscale 账户登录。设备会出现在你的 tailnet 中。
- WireGuard：导入配置文件，或扫描你在 ZimaOS 上创建的二维码。

![iOS 上的 Tailscale 应用，显示已连接到 tailnet 的家庭服务器](/images/app-store/tailscale-ios-app.png)

## WireGuard Easy、Firefly 和 NetBird

另外三款应用从 App Store 安装的流程相同。安装后各自打开管理页面。

**WireGuard Easy** 运行一个带 Web 界面的 WireGuard VPN 服务器。为每台设备创建一个客户端，然后把配置以二维码或配置文件的形式交给各设备。

**Firefly** 是最简单的 WireGuard 服务器，基于 wg-easy 构建。创建客户端，用手机扫描二维码，连接即完成。

**NetBird** 将你的设备接入一个基于 WireGuard 的覆盖网络，支持 SSO、MFA 和精细的访问控制。在 NetBird 仪表盘中批准设备并设置访问规则。

需要注意：

- WireGuard 服务器监听 UDP 端口。要从家庭网络外访问 WireGuard Easy 或 Firefly，该端口需要公网 IP 或在路由器上做端口转发。
- NetBird 通过自己的服务处理登录和访问规则，与你的 ZimaOS 账户无关。

## 桌面端与高级配置

在桌面端，流程与移动端相同。安装适用于 Windows、macOS 或 Linux 的官方 Tailscale 或 WireGuard 客户端，然后用 Tailscale 账户登录，或导入你的 WireGuard 配置。

高级配置详见各官方文档：

- Tailscale：[Tailscale 知识库](https://tailscale.com/kb/ "Tailscale 官方文档，涵盖设置与高级配置")
- WireGuard：[WireGuard 官网](https://www.wireguard.com/install/ "WireGuard 官网，提供客户端与安装说明")
- WireGuard Easy：[wg-easy 仓库](https://github.com/wg-easy/wg-easy "wg-easy 官方仓库，包含安装与配置详情")
- NetBird：[NetBird 文档](https://docs.netbird.io/ "NetBird 官方文档，涵盖 SSO、MFA 和访问规则")

## 这些应用不做什么

- 它们不替代 ZimaClient。照片浏览、**[手机备份](../phone-backup "使用 ZimaClient 将手机照片和文件自动备份到 ZimaOS")**、**[电脑备份](../computer-backup "通过 Finder、文件资源管理器或同步任务将电脑备份到 ZimaOS")**、Connect ID 以及 ZimaOS 设置中的远程访问开关都属于 ZimaClient。Tailscale 和 WireGuard 只负责传输连接，不做任何备份或同步。
- Tailscale 和 NetBird 通过自己的服务协调设备，所以账户归服务商所有。流量仍是点对点的。如果你在意每一部分都留在自己的硬件上，WireGuard Easy 和 Firefly 可以做到。
- 在以上任何路线上，ZimaOS 本身都不会收集用户数据。

## 下一步

- **[远程访问](../remote-access "配置远程访问，让你可以从任何地方连接家庭服务器")** — 内置方案
- **[下载 ZimaClient](../zimaclient-install "在桌面端和移动端安装并设置 ZimaClient，以访问设备")** — 桌面端和移动端客户端
- **[自托管应用](./self-hosted-apps "浏览可在 ZimaOS 家庭服务器上运行的自托管应用")** — 你的设备还能运行什么
