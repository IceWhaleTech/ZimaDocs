---
title: 安装 TrueNAS
description:
type: “文档”
tip: 顶部栏固定格式请勿删除，description 为文章描述，不填时将截取内容最前一段文字
---
# ZimaCube 安装 TrueNAS 指南
![](https://manage.icewhale.io/api/static/docs/1727244342954_image.png)
## 硬件环境：
1X ZimaCube N100 原型 V2.0  
1X 显示器  
1X HDMI/DP 数据线  
1X 键盘  
1X 以太网线  
1X USB 闪存驱动器（作为安装盘）  

![](https://manage.icewhale.io/api/static/docs/1727244553488_image.png)

## 快速操作流程简要说明：
- 下载 TrueNAS.iso 镜像文件，并使用 Rufus 将此文件写入 USB 闪存驱动器作为安装盘。
- 将安装盘插入 ZimaCube N100 原型 V2.0，并在安装完成后拔出。
- 重启 ZimaCube N100 原型 V2.0
- 登录并使用 TrueNAS

## 详细安装过程
### 第一步：下载镜像文件
点击下面的官方链接：  
https://www.truenas.com/download-truenas-core/  
![](https://manage.icewhale.io/api/static/docs/1727244630367_image.png)

### 第二步：制作安装 USB 盘
使用 Rufus，选择 USB 盘设备并添加 iso 文件；  
![](https://manage.icewhale.io/api/static/docs/1727244652725_image.png)

### 第三步：在 ZimaCube 上安装 TrueNAS
![](https://manage.icewhale.io/api/static/docs/1727244670117_image.png)

#### 3.1 选择 eMMC 安装
![](https://manage.icewhale.io/api/static/docs/1727244696012_image.png)

#### 3.2 设置密码
![](https://manage.icewhale.io/api/static/docs/1727244712012_image.png)

#### 3.3 安装成功
![](https://manage.icewhale.io/api/static/docs/1727244726567_image.png)

#### 3.4 重启 ZimaCube
![](https://manage.icewhale.io/api/static/docs/1727244747055_image.png)

### 第四步：读取 IP 并访问 TrueNAS
![](https://manage.icewhale.io/api/static/docs/1727244760285_image.png)

## 现在你可以在 ZimaCube 中使用 TrueNAS 了！
![](https://manage.icewhale.io/api/static/docs/1727244829586_image.png)