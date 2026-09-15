---
title: 如何在 ZimaOS 上运行 Nginx Proxy Manager
seo_title: "ZimaOS 上的 Nginx Proxy Manager：反向代理与 HTTPS 设置"
description: 从 ZimaOS 应用商店安装 Nginx Proxy Manager——为你的自托管应用设置反向代理、Let's Encrypt 证书和 HTTPS。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

Nginx Proxy Manager 在 ZimaOS 应用目录中原生支持。查看 [Nginx Proxy Manager 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.nginxproxymanager)了解最新的应用详情。

[Nginx Proxy Manager](https://nginxproxymanager.com/ "Nginx Proxy Manager 官方网站") 是一款免费、开源的工具，在 Nginx 之上提供了一个干净的 Web 界面。它让你在几分钟内就能设置反向代理、SSL 证书（通过 Let's Encrypt）和访问列表——无需手动编辑配置文件，就能通过 HTTPS 把你的自托管应用暴露到互联网上。这款应用把自托管作为一等公民来设计。

## 准备工作

- 一台运行中的 ZimaOS 设备。
- *（可选）* 一个指向服务器公网 IP 的域名，用于通过 Let's Encrypt 自动获取 HTTPS 证书。

## 应用目录

1. 在 ZimaOS 应用目录中找到 Nginx Proxy Manager。打开 **App Store** → 搜索 "Nginx Proxy Manager" → **Install**。

> **提示：** 首次安装时，你可能会看到 **"there are ports in use"** 提示。处理方法见下方 FAQ。

![ZimaOS 应用商店中的 Nginx Proxy Manager 应用页面及安装按钮](/images/app-store/nginx-proxy-manager-app-store.png)

2. **马上就能用了！**

![安装完成后 ZimaOS 桌面上的 Nginx Proxy Manager 图标](/images/app-store/nginx-proxy-manager-installed-dashboard.png)

3. 登录后，添加你的第一个代理主机。

![Nginx Proxy Manager 仪表盘中代理主机和重定向计数器均为零](/images/app-store/nginx-proxy-manager-dashboard.webp)

## 快速上手

1. 在 `http://your-zimaos-ip:81` 登录 Nginx Proxy Manager 管理界面。
2. 添加你的第一个 **Proxy Host**：

   - **Domain Names** — 输入指向你的 ZimaOS 的域名或子域名。
   - **Forward Hostname / IP** 和 **Forward Port** — 你想暴露的服务的地址。
   - 按需开启 **Block Common Exploits** 和 **Websockets Support**。

![Add Proxy Host 对话框中的域名、转发主机名和转发端口字段](/images/app-store/nginx-proxy-manager-add-proxy-host.png)

3. 在 **SSL** 标签页申请免费的 **Let's Encrypt** 证书，并启用 **Force SSL** 实现自动 HTTPS。

现在，你的服务就能通过一个友好的域名以 HTTPS 访问了——Nginx Proxy Manager 为你处理路由、SSL 和访问控制。

当你在浏览器中打开自己的域名、应用以 HTTPS 加载且没有证书警告时，说明代理已正常工作。

## 把服务暴露到公网之前

反向代理会让应用公开——请确保每个应用都值得公开：

- 为没有自带登录的服务加上 **Access List**。
- 管理界面（81 端口）不要暴露到互联网上；从本地网络管理，或改用 [Tailscale](./tailscale-wireguard-remote-access "通过 Tailscale WireGuard 远程访问你的 ZimaOS 设备")，而不是开放该端口。
- 从一个自带身份验证的服务开始，确认其在公网上的表现后再逐步放开。

## FAQ

### "there are ports in use"

![ZimaOS 上安装 Nginx Proxy Manager 时出现的端口占用警告](/images/app-store/nginx-proxy-manager-ports-in-use.webp)

Nginx Proxy Manager 使用 **80**（HTTP）、**81**（管理界面）和 **443**（HTTPS）端口。80 端口通常被 ZimaOS Gateway 占用，因此需要手动重新映射：选择 **Custom Installation**，修改 80 端口的映射，然后点击 **Install**。（其他被占用的端口也一并重新映射——如果你重新映射了 81，快速上手一节中的管理界面地址也要相应改变。）

![安装前已选中 Custom Installation 的 Nginx Proxy Manager 应用页面](/images/app-store/nginx-proxy-manager-custom-install.webp)

![自定义安装中把 80 端口重新映射到 8010 的端口映射](/images/app-store/nginx-proxy-manager-port-remap.webp)

## 相关指南

- 完全不想开放端口暴露服务？参见 [Tailscale WireGuard 远程访问](./tailscale-wireguard-remote-access "通过 Tailscale WireGuard 远程访问你的 ZimaOS 设备")。

## 需要帮助？

如果你在 ZimaOS 上安装或使用 Nginx Proxy Manager 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.gg/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
