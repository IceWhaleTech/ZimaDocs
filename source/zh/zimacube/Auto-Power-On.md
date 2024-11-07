---
title: ZimaCube自动开机解决方案
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 需求描述
目前，ZimaCube在插电后需要按下电源按钮才能启动。一些用户希望在通电时能够实现自动启动功能。

# 解决方案
修改主板跳线。

# 详细步骤
## 步骤1：确保ZimaCube已关闭且未插电

## 步骤2：打开ZimaCube的顶盖
![](https://manage.icewhale.io/api/static/docs/1722413156672_image.png)

## 步骤3：找到AUTO-PWR1
![](https://manage.icewhale.io/api/static/docs/1722413204344_image.png)

## 步骤4：修改跳线
移动跳线帽的位置。靠近AUTO的两个引脚表示在插电后需要按下电源按钮，而靠近PWR1的两个引脚表示在插电后自动启动。

以下是需要在断电后按下电源按钮启动的位置：
![](https://manage.icewhale.io/api/static/docs/1722413242930_image.png)

以下是插电后自动启动的位置：
![](https://manage.icewhale.io/api/static/docs/1722413266760_image.png)
您可以根据自己的需要修改位置。