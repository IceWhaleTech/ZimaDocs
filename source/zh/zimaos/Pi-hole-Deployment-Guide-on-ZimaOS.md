---
title: ZimaOS 上 Pi-hole 部署指南  
description:  
type: Docs  
author: icewhale123456  
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字  
---  
### 介绍  
Pi-hole 是一个强大的网络级广告拦截工具，能够帮助你屏蔽广告并保护隐私。在本教程中，我们将介绍如何在 ZimaOS 上安装和配置 Pi-hole，使你的家庭网络更清洁、更高效。

---  
### 准备工作  
- 一台安装了 ZimaOS 的设备。  
- 能够访问 ZimaOS 的网页界面或通过 SSH 登录。  
- 网络和管理员权限已设置。

---  
### 第一步：安装 Docker 版 Pi-hole  
1. 进入 ZimaOS 网页界面。  
2. 进入 **应用商店**，搜索 Pi-hole 并安装。  
![](https://manage.icewhale.io/api/static/docs/1734678654109_image.png)  

3. 点击安装。  
4. 登录 Pi-hole 前，点击应用的设置界面，找到密码（示例密码为 your_password）。  

| ![](https://manage.icewhale.io/api/static/docs/1734678694677_image.png) | ![](https://manage.icewhale.io/api/static/docs/1734678703824_image.png) |  
| - | - |  

5. 点击应用，输入密码进入界面。  
![](https://manage.icewhale.io/api/static/docs/1734678749177_image.png)  

![](https://manage.icewhale.io/api/static/docs/1734678754268_image.png)  

---  
### 第二步：配置网络  
**2.1 修改路由器的 DNS 设置**  
好处：修改路由器的 DNS 设置可以让整个网络中的设备自动使用 Pi-hole 进行广告拦截，无需单独配置每台设备。  
1. 登录路由器管理界面。  
2. 将路由器的 DNS 服务器地址设置为运行 Pi-hole 的 ZimaOS 设备的本地 IP 地址。  
- 示例：如果 ZimaOS 的本地 IP 是 `10.0.201.187`，则将 DNS 服务器地址设置为 `10.0.201.187`。  

**2.2 在客户端设备上手动配置 DNS**  
- 如果你不想修改整个网络的设置，可以在单个设备上配置自定义 DNS 地址，指向 ZimaOS IP。  

**配置 Windows 设备的 DNS**  
1. 在设置窗口中找到“更多适配器选项”，点击编辑。  
![](https://manage.icewhale.io/api/static/docs/1734679538566_image.png)  

2. 找到并双击“Internet 协议版本 4 (TCP/IPv4)”。  
3. 填写以下内容：  
- 首选 DNS 服务器：10.0.201.187（你的 Pi-hole 服务器 IP）。  
- 备用 DNS 服务器：1.1.1.1（Cloudflare DNS）或 8.8.8.8（Google DNS，备用）。  
![](https://manage.icewhale.io/api/static/docs/1734679557759_image.png)  

4. 点击“确定”保存设置。  
提示：如果广告屏蔽无效，尝试清除 DNS 缓存：  
在命令提示符中运行：  
```
ipconfig /flushdns
```
这样可以强制设备使用新的 DNS 设置。

---  
### 第三步：优化设置（可选）  
**3.1 启用更多广告过滤列表**  
1. 在 Pi-hole 仪表盘中，进入 Adlists（广告列表）。  
![](https://manage.icewhale.io/api/static/docs/1734679945680_image.png)  

2. 添加更多广告拦截列表，例如：  
- [StevenBlack/hosts](https://github.com/StevenBlack/hosts)  
- [oisd.nl](https://oisd.nl/)  
将复制的网址粘贴到地址栏，填写备注，点击添加。  
![](https://manage.icewhale.io/api/static/docs/1734680053090_image.png)  

**3.2 配置 DNS 缓存和隐私增强**  
1. 在设置 > DNS 中，选择一个可信赖的上游 DNS 服务器（例如 Cloudflare 或 Google）。  
![](https://manage.icewhale.io/api/static/docs/1734680136362_image.png)  

2. 开启 DNSSEC 以增强安全性。  
![](https://manage.icewhale.io/api/static/docs/1734680141523_image.png)  

---  
### 第四步：测试广告拦截  
1. 访问一个广告较多的网站（例如新闻门户）。  
2. 检查广告是否成功被屏蔽。  
3. 在 Pi-hole 仪表盘查看被屏蔽的请求数量。  
![](https://manage.icewhale.io/api/static/docs/1734680159332_image.png)  

---  
### 总结  
现在你已经成功在 ZimaOS 上部署了 Pi-hole，享受无广告的上网体验吧！Pi-hole 不仅提升了网络速度，还保护了你的隐私。你可以根据需求调整设置或添加更多功能。如有任何问题，欢迎在社区讨论！  

### 常见问题  
1. 点击安装以避免端口冲突，只需更改端口即可。  
![](https://manage.icewhale.io/api/static/docs/1734680182479_image.png)  

端口 10443 通常用于 Pi-hole 的 HTTPS 管理界面，修改端口不会影响 Pi-hole 核心 DNS 功能。  
不建议更改端口 67，因为它会影响 DHCP 服务的正常运行，导致客户端无法自动获取 IP 地址。如果出现端口冲突，最佳方案是禁用冲突的服务。  
- 首先，在命令行界面查找占用端口 67 的进程，使用命令：  
```
sudo ss -ulnp | grep :67
```
![](https://manage.icewhale.io/api/static/docs/1734680210741_image.png)  

- 使用以下命令终止冲突进程，安装即可成功：  
```
sudo kill -9 <PID>
```
---