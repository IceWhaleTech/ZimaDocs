---
title: 如何在ZimaOS上启用Intel AX210 Wi-Fi模块？
description:  
type: 文档
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

**🎯 目标**
在ZimaOS上启用AX210 Wi-Fi卡并连接到无线网络—无需图形界面。

## 针对ZimaOS v1.4.2及以上版本
Intel AX210是一款高性能无线卡，支持Wi-Fi 6E。许多Zima设备用户依赖它进行无线连接。本指南将带您通过命令行环境启用AX210并连接到Wi-Fi。
👉 [点击此处下载最新版本的ZimaOS](https://github.com/IceWhaleTech/ZimaOS)

## 步骤1：确认AX210被识别
运行以下命令：
```language
lspci | grep -i network
```
您应该看到类似以下的输出：

`Intel Corporation Wi-Fi 6E AX210...`

![终端输出通过lspci确认在ZimaOS上检测到Intel AX210 Wi-Fi。](https://manage.icewhale.io/api/static/docs/1751615644136_image.png)

如果未被检测到，请确保卡插入正确的M.2 E-key插槽，并确保硬件功能正常。
## 步骤2：使用nmtui连接Wi-Fi
ZimaOS包含`nmtui`命令行工具。通过以下命令启动它：
```language
sudo nmtui
```
然后：
- 选择`激活连接`
- 选择您的Wi-Fi网络（SSID）
- 输入密码并按Enter

| ![](https://manage.icewhale.io/api/static/docs/1751616098976_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616105026_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616124786_image.png) |
| :---------------: | :---------------: | :---------------: |

## 步骤3：验证IP地址和连接性
检查您的无线接口状态：
```language
ip a
```
![Linux中ip a命令的终端输出，显示网络接口配置，包括IP地址和状态。](https://manage.icewhale.io/api/static/docs/1751616224099_image.png)

🖥️ **可选：** 在ZimaOS仪表盘中查看和管理网络设置
如果您使用ZimaOS的Web UI（仪表盘），您也可以在此处查看和配置网络设置。
示例：
<p align="center">
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616926003_image.png)" width="45%" />
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616939282_image.png)" width="45%" />
</p>

🎉 **您已准备就绪！**
您的AX210 Wi-Fi卡现已连接并准备与ZimaOS一起使用。

如果您有任何问题，请联系支持邮箱：<support@icewhale.org>