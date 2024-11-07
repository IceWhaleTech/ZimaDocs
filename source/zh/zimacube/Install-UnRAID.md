---
title: 如何在 ZimaCube 上安装 UnRAID
description:
type: “文档”
tip: 顶部栏固定格式请勿删除，description 为文章描述，不填时将截取内容最前一段文字
---
# ZimaCube 安装 TrueNAS 指南
![](https://manage.icewhale.io/api/static/docs/1727249736896_image.png)
## 硬件环境：
1X ZimaCube  
1X 显示器  
1X DP  
1X 键盘  
1X 以太网线  
1 X USB 闪存驱动器（作为安装盘）  
![](https://manage.icewhale.io/api/static/docs/1727249911617_image.png)
## 详细安装过程
### 步骤 1：格式化 USB 闪存驱动器
**a.准备一个（需要大于 1G）USB 驱动器并格式化为 FAT32 格式，名称改为 UNRAID（Mac）**
![](https://manage.icewhale.io/api/static/docs/1727249967953_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249974644_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249981977_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249988198_image.png)
**b.下载官方 [USB 创建工具](https://unraid.net/download)**
![](https://manage.icewhale.io/api/static/docs/1727250152598_image.png)
**c.下载 [官方镜像](https://unraid.net/download)**
![](https://manage.icewhale.io/api/static/docs/1727250193523_image.png)
**d.打开 USB 创建工具并写入 Unraid OS**
根据规格选择以下选项
![](https://manage.icewhale.io/api/static/docs/1727250248143_image.png)
**点击写入并等待**
![](https://manage.icewhale.io/api/static/docs/1727250272215_image.png)
![](https://manage.icewhale.io/api/static/docs/1727250278309_image.png)
### 步骤 2：将 Unraid 安装到 ZimaCube
**a.从安装 USB 驱动器启动**
![](https://manage.icewhale.io/api/static/docs/1727250302063_image.png)
**b.选择操作系统**
![](https://manage.icewhale.io/api/static/docs/1727250317388_image.png)
**c.获取 IP**
![](https://manage.icewhale.io/api/static/docs/1727250333338_image.png)
## 连接到 Unraid webGui
有两种方法可以连接到 Unraid 的 webGui：
  - 以 GUI 模式启动 Unraid 并登录（用户名为 `root`，默认没有密码）；或
  - 从 Mac 或 PC 打开网页浏览器并导航到 `http://tower.local` 注意：如果您在 USB Flash 创建工具中配置了不同的主机名，请使用该名称，而不是 `tower`。
![](https://manage.icewhale.io/api/static/docs/1727250410689_image.png)
## 现在您可以在 ZimaCube 中使用 UNRAID 了！
![](https://manage.icewhale.io/api/static/docs/1727250432285_image.png)