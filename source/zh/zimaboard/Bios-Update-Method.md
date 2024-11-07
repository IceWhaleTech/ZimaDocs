---
title: ZimaBoard BIOS 更新方法
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 准备工作：
- USB 闪存驱动器（无内容）X1
- 显示器 X1
- 键盘 X1
- MiniDP X1
## 第一步：下载 BIOS 安装程序
**链接：**
{% note warn 警告 %}
没有适用于 ZimaBoard 832（J3455 CPU）的 BIOS 更新包
{% endnote %}

| 型号 | CPU | 下载链接 |
| - | - | - |
| ZimaBoard 232 | N3350 | [https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link](https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link) |
| ZimaBoard 432 | N3450 | [https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link](https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link) |
| ZimaBoard 832 | N3450 | [https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link](https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link) |
## 第二步：准备 USB 闪存驱动器
将 USB 驱动器格式化为 FAT32 格式，根据 ZimaBoard 型号打开安装包，将 EFI 文件夹复制到空的 USB 驱动器中。
|![](https://manage.icewhale.io/api/static/docs/1729154067524_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729154081840_image.png) |
| - | - |
## 第三步：更新 BIOS
将 USB 闪存驱动器、键盘和显示器连接到 ZimaBoard，开机后不断按 F11 进入选择界面，使用键盘选择 UEFI：
![](https://manage.icewhale.io/api/static/docs/1729154195372_image.png)
## 第四步：开始安装
![](https://manage.icewhale.io/api/static/docs/1729154235770_image.png)

## 第五步：安装完成
![](https://manage.icewhale.io/api/static/docs/1729154248434_image.png)