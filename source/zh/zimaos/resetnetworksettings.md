---
title: Reset Network Settings
description: 
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
如果你在 ZimaOS 中设置了静态 IP，并且由于网络变动需要重置网络 IP 设置，可以使用本教程来重置已设置的 IP 绑定。

{% note warn  %} 
**注意：** 在尝试下面的 USB 重置操作之前，请先尝试连接到不同的网络端口，然后使用 ZimaClient 重新搜索网络。
{% endnote %}

### 格式化 USB 驱动器
在 Windows 上，可以右键点击 USB 驱动器并选择 exFAT 来格式化
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

在 Mac 上，可以在磁盘管理工具中选择磁盘并执行抹掉操作
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### 写入 _ResetNetwork 文件
在磁盘根目录下创建一个文件，命名为 `_ResetNetwork`，注意不要有后缀，文件内容应为空。
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### 插入 ZimaOS 并等待 20 秒
满足以下任意条件即可视为成功：
- 显示屏显示 IP 已更改。
- USB 驱动器中的 `_ResetNetwork` 文件已被移除。