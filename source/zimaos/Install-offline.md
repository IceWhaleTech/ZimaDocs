---
title: Update offline
description: update ZimaOS in an offline environment
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

This tutorial will guide you through the steps to update ZimaOS in an offline environment.
This will help update and repair the system in specific scenarios.
* Download the RAUCB installation package from the [ZimaOS GitHub](https://github.com/IceWhaleTech/ZimaOS) .
    

![](https://manage.icewhale.io/api/static/docs/1723538915006_copyImage.png)

* Upload the downloaded installation package to the `/ZimaOS-HD/rauc/offline/` directory on ZimaOS.
    

![](https://manage.icewhale.io/api/static/docs/1723538915467_copyImage.png)

* Wait for the red update dot to appear (the device will automatically scan for the update package, which may take a few minutes).
    

![](https://manage.icewhale.io/api/static/docs/1723538915931_copyImage.png)

* Simply click on the update button to proceed.
    

![](https://manage.icewhale.io/api/static/docs/1723538917096_copyImage.png)

* Wait for the system to complete the update, and you're all set!


##### **NOTES：**

**Starting from ZimaOS v1.4.1, the directory for offline update packages has changed:**


Older versions (before v1.4.1), Place the installation package in:

`/ZimaOS-HD/rauc/offline/
`

New versions (v1.4.1 and later), Place the installation package in:

`/ZimaOS-HD/.ota/offline/
`
![](https://manage.icewhale.io/api/static/docs/1755847486345_image.png)
![](https://manage.icewhale.io/api/static/docs/1755847493159_image.png)

