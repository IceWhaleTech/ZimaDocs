---
title: 如何在 ZimaOS 上部署 Komga
seo_title: "在 ZimaOS 上运行 Komga：家庭服务器上的漫画与电子书服务器"
description: 几分钟内在 ZimaOS 应用商店安装 Komga——上传漫画和电子书、授权书库文件夹，然后在包括手机在内的任何设备上阅读。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

Komga 在 ZimaOS 应用目录中原生支持，只需 3 分钟即可安装完成。最新应用信息请参阅 [Komga 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.komga)。

Komga 是一款免费开源的漫画与电子书媒体服务器。它把 PDF 和 EPUB 文件整理成带自动元数据的书库，在任何浏览器里提供清爽的网页阅读器，并支持 OPDS 协议以配合第三方阅读应用。安装在 ZimaOS 上，你的书库留在自己的硬盘里，任何设备都能访问——包括通过 ZimaClient 用手机阅读。

## 准备工作

- 一台正在运行的 ZimaOS 家庭服务器。
- 你的 PDF 或 EPUB 文件存放在 ZimaOS 家庭服务器上的本地文件夹中。

## 应用目录

1. 在 ZimaOS 应用目录中找到 Komga。打开**应用商店** → 搜索 "Komga"。

![应用商店搜索结果，显示 Komga 应用卡片及其安装按钮](/images/app-store/komga-app-store.png)

2. **马上就能用了！**

![ZimaOS 仪表盘中的应用列表，Komga 显示为已安装](/images/app-store/komga-installed.png)

## 通过 ZimaOS Files 上传文件

使用 ZimaOS Files 直接上传或复制你的 PDF 或 EPUB 文件。打开 ZimaOS Files，新建一个文件夹，然后拖放你的 PDF 或 EPUB 文件，直接上传到该目录中。

![ZimaOS Files 窗口，已为漫画和电子书上传创建 komga-library 文件夹](/images/app-store/komga-files.png)

## 授权 Komga 加载数据

以下步骤**并非必需**——使用默认配置即可立即开始使用。

如果你想自定义所有容器设置，可以通过应用右上角的选项进行配置。

![ZimaOS 中的 Komga 应用页面，右上角为容器设置选项菜单](/images/app-store/komga-settings.png)

ZimaOS 支持多种配置方式，包括表单式编辑和 YAML 二次编辑。

在 ZimaOS 的 Komga 配置表单中，导航到**卷**（或路径映射）区域并添加一条卷规则：将**容器路径**设为 `/data`（Komga 内部的默认媒体目录），将**宿主机路径**设为你存放漫画的 ZimaOS 设备本地文件夹。下图为填写示例。

![Komga 应用设置的卷区域，容器媒体路径已映射到宿主机文件夹](/images/app-store/komga-volumes.png)

## 在 Komga 中添加书库

1. 首次访问：创建管理员账户。

![Komga 的首次运行界面，用于创建带邮箱和密码的管理员账户](/images/app-store/komga-admin.png)

2. 登录后，点击侧边栏 Libraries 旁边的 "+" 按钮。

![Komga 的添加书库对话框，已填写名称和根文件夹路径](/images/app-store/komga-library.png)

3. 设置文件扫描间隔。

![Komga 添加书库对话框中的扫描器设置，扫描间隔设为每小时](/images/app-store/komga-scan.png)

> 其他标签页保持默认设置，直接继续。

4. 点击 "Add" 完成。

Komga 会自动扫描并导入该文件夹中存放的所有漫画、杂志或电子书。

![添加书库后的 Komga 图书页面，显示最近添加的漫画和系列](/images/app-store/komga-books.png)

## 通过手机访问 Komga

通过 ZimaClient 手机应用访问 Komga——与你的家庭服务器建立直连 P2P 连接，无需云中继，无需配置 VPN。在家或出门都能用。

| ![ZimaClient 手机应用的应用列表，显示 Komga 图标](/images/app-store/komga-phone-apps.png) | ![通过 ZimaClient 在手机上打开 Komga 书库，显示漫画系列页面](/images/app-store/komga-phone-library.png) | ![手机上 Komga 的电子书详情页，带阅读和下载按钮](/images/app-store/komga-phone-reader.png) |
| - | - | - |

## 参考链接

更多细节请查阅 Komga 官方文档：

- 书库高级设置 – [https://komga.org/docs/guides/libraries/](https://komga.org/docs/guides/libraries/ "Komga 官方书库配置与扫描指南")
- 服务器设置与管理 – [https://komga.org/docs/guides/server-settings/](https://komga.org/docs/guides/server-settings/ "Komga 官方服务器设置与管理指南")
- 反向代理与 HTTPS 设置 – [https://komga.org/docs/installation/https/](https://komga.org/docs/installation/https/ "Komga 官方 HTTPS 与反向代理设置指南")
