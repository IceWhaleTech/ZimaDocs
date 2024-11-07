---
title: 内存测试教程
description:
type: “文档”
tip: 顶部栏固定格式请勿删除，description 为文章描述，不填时将截取内容最前一段文字
---
# 如果主板无法正常启动，或者在使用过程中出现屏幕失真或冻结，请按照以下步骤排查内存问题。
## 硬件环境：
1个 ZimaCube
1个 显示器
1条 HDMI/DP 数据线
1个 键盘
1个 USB 闪存驱动器
## 步骤 1：下载 Memtest86 镜像
首先，您需要下载 Memtest86 镜像文件，您可以从以下链接下载：
https://www.memtest86.com/download.htm
![](https://manage.icewhale.io/api/static/docs/1729233669049_image.png)
## 步骤 2：将镜像安装到 USB 驱动器
下载完成后，您需要将镜像文件刷入 USB 驱动器。建议使用 Rufus 工具进行此过程。步骤如下：
1. 下载并安装 Rufus。
2. 打开 Rufus 并选择下载的 Memtest86 镜像文件。
3. 插入 USB 驱动器并选择它作为目标设备。
4. 点击“开始”按钮以启动刷写过程。
![](https://manage.icewhale.io/api/static/docs/1729233702813_image.png)
## 步骤 3：启动 ZimaCube 并从 USB 启动
1. 将带有 Memtest86 镜像的 USB 驱动器插入 ZimaCube 的 USB 端口。
2. 插入键盘，持续按 F11，并选择从 USB 启动。
![](https://manage.icewhale.io/api/static/docs/1729233729784_image.png)
3. 进入 Memtest 界面并选择开始测试。
![](https://manage.icewhale.io/api/static/docs/1729233755009_image.png)
![](https://manage.icewhale.io/api/static/docs/1729233761336_image.png)
![](https://manage.icewhale.io/api/static/docs/1729233768385_image.png)
## 步骤 4：根据反馈结果判断内存是否有问题
如果出现通过（PASS）界面，则内存没有问题。
![](https://manage.icewhale.io/api/static/docs/1729233805061_image.png)
您可以使用上述方法来判断您的内存是否存在稳定性问题，并进一步排查主板问题！同时，您可以通过我们的技术支持邮箱 support@icewhale.org 联系我们，并附上测试结果以获得进一步帮助。