---
title: 重置网络设置
description: 
type: 文档
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 场景
如果您在ZimaOS中设置了静态IP，并且由于网络变更需要重置网络IP设置，您可以使用此教程重置设置的IP绑定。
### 格式化USB驱动器
在Windows中，可以右键单击USB驱动器并选择exFAT进行格式化
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

在Mac中，可以在磁盘管理工具中选择磁盘并执行擦除操作
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### 写入 _ResetNetwork 文件
在磁盘的根目录创建一个名为`_ResetNetwork`的文件，记住不要有后缀，文件应为空。
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### 将其插入ZimaOS并等待20秒。
以下任一条件将被视为成功。
- 显示器显示IP已更改。
- USB驱动器中的`_ResetNetwork`文件已被移除。