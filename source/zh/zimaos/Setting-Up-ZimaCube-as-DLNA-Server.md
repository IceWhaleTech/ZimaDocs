---
title: 如何使用 ZimaCube 和 DLNA 创建家庭媒体中心？
description: 
type: 文档
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 介绍
在这个数字时代，家庭娱乐系统变得越来越智能和互联。作为一款高性能的个人云存储设备，ZimaCube 不仅提供大容量存储解决方案，还支持 DLNA（数字生活网络联盟）协议，让您可以轻松共享和播放家庭网络中的任何多媒体内容。

本教程将指导您如何将 ZimaCube 设置为 DLNA 服务器，并使用 XX 电视作为客户端，实现无缝的媒体播放体验。

在开始之前，请确保您已下载并安装最新版本的 ZimaOS: https://github.com/IceWhaleTech/ZimaOS/releases
## 步骤 1：打开设置并进入“开发者模式”
![](https://manage.icewhale.io/api/static/docs/1738831331021_image.png)
## 步骤 2：启用 DLNA
在“**开发者模式**”界面中，找到“**DLNA**”开关，并确保它已启用。
![](https://manage.icewhale.io/api/static/docs/1738831393315_image.png)
## 步骤 3：配置 DLNA 设置
点击“**DLNA 配置**”以进入设置界面。您可以修改以下两个选项：
- **友好名称：** 默认是“ZimaCube DLNA 服务器”，您可以自定义一个更适合您的名称。
- **媒体路径：** 默认路径是 `/media`，您可以根据需要**修改为其他存储路径**。

| ![](https://manage.icewhale.io/api/static/docs/1738831857738_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738831871432_image.png) |
| - | - |

完成修改后，点击“**保存**”按钮。
## 步骤 4：在电视上播放内容
1. 打开一个支持 DLNA 的电视设备或播放器应用
![](https://manage.icewhale.io/api/static/docs/1738831977224_image.png)
2. 在网络上搜索 DLNA 设备，找到“ZimaCube DLNA 服务器”。
![](https://manage.icewhale.io/api/static/docs/1738832005480_image.png)
3. 浏览共享的媒体文件并选择播放。

| ![](https://manage.icewhale.io/api/static/docs/1738832059024_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832067952_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832081469_image.png) |
| - | - | - |

## 故障排除
如果您在连接或播放时遇到问题，请检查以下几点：
- 确保 ZimaCube 和电视处于同一局域网。
- 检查媒体文件格式是否与电视设备兼容。
- 确保共享文件夹中有可播放的媒体文件。

## 额外说明
由于不同品牌的智能电视可能具有不同的界面和功能，请参考您电视品牌的 DLNA 使用指南。

## 总结
通过简单的步骤，您现在可以轻松共享并欣赏家庭网络中的高清影片和音乐。希望这能帮助您建立一个智能的家庭娱乐系统！