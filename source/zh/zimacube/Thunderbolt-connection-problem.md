---
title: 检查Thunderbolt连接问题
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
如果Thunderbolt连接后没有响应，可以根据以下项目进行检查

1. 确认ZimaCube是Pro版本
只有ZimaCube Pro版本具有Thunderbolt功能。您可以在后面板的电源附近看到两个Thunderbolt接口，如下图所示。
![](https://manage.icewhale.io/api/static/docs/1731392263987_image.png)

2. 确认客户端具有Thunderbolt端口
一般来说，Thunderbolt会有一个Thunderbolt标志，或者查询相应的硬件信息以确认它是一个Thunderbolt接口。
![](https://manage.icewhale.io/api/static/docs/1731392292731_image.png)

3. 确认Thunderbolt线
Thunderbolt线通常有特殊标志，您还可以检查硬件是否支持Thunderbolt传输。
![](https://manage.icewhale.io/api/static/docs/1731392311295_image.png)

4. 确认ZimaCube识别Thunderbolt硬件 (lspci)
执行命令‘lspci | grep Thunderbolt’，结果如下
![](https://manage.icewhale.io/api/static/docs/1731392323684_image.png)

5. 确认ZimaCube Thunderbolt端口能识别硬件
- 找一个Type-C USB插入ZimaCube，检查是否可以在ZimaOS中被识别。
- 找一个Type-C显示器，查看插入后是否能正常输出视频。

如果按照以上排查步骤问题仍未解决，请再次联系我们并告知我们排查的步骤。