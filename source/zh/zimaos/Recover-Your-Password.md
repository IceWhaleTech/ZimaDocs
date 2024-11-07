---
title: 如何找回您的密码
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
### 如果您忘记了 ZimaOS 密码，请按照以下步骤操作：
1. 通过 HDMI 电缆将 ZimaCube 连接到显示器
![](https://manage.icewhale.io/api/static/docs/1728367816858_1.1.jpeg)

2. 通过键盘在 ZimaCube 上设置 SSH 密码
![](https://manage.icewhale.io/api/static/docs/1728367843555_1.2.png)

3. 输入用户重置命令
```
rm -fr /var/lib/casaos/db/user.db
```

4. 重启设备
![](https://manage.icewhale.io/api/static/docs/1728367919089_1.3.png)

5. 重新进入 ZimaOS 进行初始化
![](https://manage.icewhale.io/api/static/docs/1728367926499_1.4.png)