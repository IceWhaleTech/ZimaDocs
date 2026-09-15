---
title: 如何在 ZimaOS 上运行 Frigate
seo_title: "ZimaOS 上的 Frigate：本地 AI 网络录像机，用于摄像头监控与录像"
description: 从 ZimaOS 应用商店一步安装 Frigate——在你自己的硬件上实现 AI 驱动的摄像头监控、移动侦测和录像。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

Frigate 在 ZimaOS 应用目录中原生支持。查看 [Frigate 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.frigate)了解最新的应用详情。

Frigate 是一款开源的网络录像机（NVR），具备实时 AI 驱动的物体检测能力——它为你提供本地、私密的摄像头监控、移动侦测和录像功能，全部运行在你自己的硬件上，视频画面无需上传云端。

## 准备工作

- 一台运行中的 ZimaOS 设备。
- 一台或多台支持 RTSP 或 ONVIF 的 IP 摄像头。
- 一个空闲端口用于 Web 界面（默认：**8971**）。
- *（可选）* 一块 Google Coral TPU 或 Intel/AMD 核显，用于加速物体检测。

## 应用目录

1. 在 ZimaOS 应用目录中找到 Frigate。打开 **App Store** → 搜索 "Frigate"。

![ZimaOS 应用商店中的 Frigate 应用页面及安装按钮](/images/app-store/frigate-app-store.webp)

2. **马上就能用了！**

![安装完成后 ZimaOS 桌面上的 Frigate 图标](/images/app-store/frigate-installed-dashboard.webp)

## 配置

以下步骤**并非必需**——你可以直接用**默认**配置开始使用。

ZimaOS 支持多种配置方式，包括表单编辑和 YAML 二次编辑。

![Frigate 容器设置中的端口、卷和设备映射](/images/app-store/frigate-config-form.webp)

你可能想调整的主要设置：

- **卷（Volumes）**——Frigate 配置和录像的存放位置（默认：`/DATA/AppData/frigate/config` 挂载到 `/config`，`/DATA/AppData/frigate/media` 挂载到 `/media/frigate`）。
- **端口**——访问 Web 界面的外部端口（默认：8971）。
- **检测设备**——*（可选）* 映射 PCIe Coral（`/dev/apex_0`）、USB Coral（`/dev/bus/usb`）或 Intel/AMD 核显（`/dev/dri/renderD128`）以进行硬件加速检测。

## 首次设置

1. 从 ZimaOS 桌面打开 Frigate。第一次打开时你可能会看到安全警告——这是正常的，因为 Frigate 使用自签名证书。点击 **Advanced**，然后点击 **Continue to ...** 继续。
2. 首次登录需要初始用户名和密码。点击 Frigate 应用图标右上角的三个点 → **Settings**，打开 **Terminal and Logs**，点击 **Logs**，再点击全屏图标放大查看。

![Frigate 应用设置中已打开日志并放大至全屏](/images/app-store/frigate-logs-view.webp)

3. 找到用星号（`****`）包围的部分——其中包含你的用户名和密码。使用这些信息登录 Frigate。

![Frigate 启动日志中以星号包围的默认管理员凭据](/images/app-store/frigate-logs-credentials.webp)

4. 通过编辑 `/DATA/AppData/frigate/config/config.yml` 文件添加摄像头并配置检测、录像等功能。完整的配置参考见下方官方文档。

5. 当你可以打开 Frigate 界面、登录并查看已连接的摄像头且没有流错误时，说明 Frigate 已正常工作。打开 **Live** 确认摄像头正在显示实时画面。

## 相关指南

- 将 Frigate 与本地大模型结合，为检测到的事件生成 AI 图像描述——参见 [Frigate + Ollama AI 图像描述](./frigate-ollama-setup "在 ZimaOS 上用 Frigate 和本地 Ollama 模型描述摄像头事件")。
- 想要更简单、基于浏览器的摄像头服务器？参见 [NVR 摄像头服务器](./nvr-camera-server "在 ZimaOS 上搭建 Kerberos.io NVR 视频监控")作为替代方案。

## 官方文档

Frigate 的应用级设置——摄像头、物体检测、录像、快照、通知、Home Assistant、硬件加速等——全部位于 `config.yml` 文件中，与 ZimaOS 相互独立。完整的配置参考请查阅 Frigate 官方文档：

- [Frigate 文档](https://docs.frigate.video/ "Frigate 官方文档")
- [配置参考](https://docs.frigate.video/configuration/ "Frigate 全部设置的配置参考")
- [摄像头](https://docs.frigate.video/configuration/cameras "Frigate 摄像头配置指南")
- [物体检测](https://docs.frigate.video/configuration/objects "Frigate 物体检测设置")
- [检测器](https://docs.frigate.video/configuration/object_detectors "Frigate Coral TPU 与 GPU 的检测器配置")
- [硬件加速](https://docs.frigate.video/configuration/hardware_acceleration_video "Frigate 硬件加速指南")
- [录像](https://docs.frigate.video/configuration/record "Frigate 录像配置")
- [快照](https://docs.frigate.video/configuration/snapshots "Frigate 快照配置")
- [区域与掩码](https://docs.frigate.video/configuration/zones "Frigate 区域与掩码指南")
- [通知](https://docs.frigate.video/configuration/notifications "Frigate 通知配置")
- [身份验证](https://docs.frigate.video/configuration/authentication "Frigate 身份验证设置")
- [Home Assistant](https://docs.frigate.video/integrations/home-assistant "Frigate Home Assistant 集成指南")

## 需要帮助？

如果你在 ZimaOS 上安装或使用 Frigate 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.gg/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
