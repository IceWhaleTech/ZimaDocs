---
title: Reset Network Settings
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Scenario
If you have set a static IP in ZimaOS and need to reset the network IP settings due to network changes, you can use this tutorial to reset the set IP binding.
### Format USB drive
Win formatting can be done by right-clicking the USB drive and selecting exFAT to format
![](https://manage.icewhale.io/api/static/docs/1730779181971_image.png)
Mac formatting can select the disk in the disk management tool and perform the erase operation
![](https://manage.icewhale.io/api/static/docs/1730786481890_image.png)
### Write _ResetNetwork file
Create a file in the root directory of the disk, name it `_ResetNetwork`, remember not to have a suffix, and the file should be empty.
![](https://manage.icewhale.io/api/static/docs/1730786546721_image.png)
### Insert it into ZimaOS and wait for 20 seconds.
Any of the following conditions will be considered successful.
- The display shows that the IP has changed.
- The `_ResetNetwork` file in the USB drive has been removed.