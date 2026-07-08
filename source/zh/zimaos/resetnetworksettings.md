:::writing{variant="document" id="73915"}
---
title: 重置网络设置
description: "当网络更改导致连接问题时，如何使用 USB 驱动器重置 ZimaOS 网络设置和静态 IP 配置。"
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
如果您已在 ZimaOS 中设置静态 IP，并且由于网络变化需要重置网络 IP 设置，可以使用本教程重置已设置的 IP 绑定。

{% note warn  %} 
**注意：** 在尝试下面的 USB 重置步骤之前，请先尝试连接到其他网络端口，然后使用 ZimaClient 再次搜索网络。
{% endnote %}

### 格式化 USB 驱动器
Windows 格式化操作可以通过右键点击 USB 驱动器并选择 exFAT 进行格式化
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

Mac 格式化操作可以在磁盘管理工具中选择磁盘并执行抹除操作
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### 写入 _ResetNetwork 文件
在磁盘根目录创建一个文件，将其命名为 `_ResetNetwork`，请记住不要添加后缀，并且文件应为空。
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### 将其插入 ZimaOS 并等待 20 秒。
以下任一情况出现即可视为成功。
- 显示屏显示 IP 已更改。
- USB 驱动器中的 `_ResetNetwork` 文件已被移除。
:::
