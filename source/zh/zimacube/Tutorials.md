---
title: ZimaCube 自动开机解决方案
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字
---
# 需求描述
目前，ZimaCube 需要在插电后按下电源按钮才能启动。一些用户希望在供电时自动启动的功能。

# 解决方案
修改主板跳线。

# 详细步骤
## 步骤 1: 确保 ZimaCube 已关闭并拔掉电源

## 步骤 2: 打开 ZimaCube 的顶部盖
![](https://manage.icewhale.io/api/static/docs/1722413156672_image.png)

## 步骤 3: 找到 AUTO-PWR1
![](https://manage.icewhale.io/api/static/docs/1722413204344_image.png)

## 步骤 4: 修改跳线位置
移动跳线帽位置。靠近 AUTO 的两个引脚表示在插电后需要按下电源按钮，而靠近 PWR1 的两个引脚表示在插电后自动启动。

下面是需要在断电后按电源按钮启动的位置：
![](https://manage.icewhale.io/api/static/docs/1722413242930_image.png)

下面是插电后自动启动的位置：
![](https://manage.icewhale.io/api/static/docs/1722413266760_image.png)
您可以根据需要修改位置。