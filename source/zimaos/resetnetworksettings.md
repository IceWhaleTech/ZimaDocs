---
title: Reset Network Settings
description: "How to reset ZimaOS network settings and static IP configuration using a USB drive when network changes cause connectivity issues."
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
If you have set a static IP in ZimaOS and need to reset the network IP settings due to network changes, you can use this tutorial to reset the set IP binding.

{% note warn  %} 
**Note:** Before attempting the USB reset procedure below, please try connecting to a different network port and then use ZimaClient to search for the network again.
{% endnote %}

### Format USB drive
Win formatting can be done by right-clicking the USB drive and selecting exFAT to format
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

Mac formatting can select the disk in the disk management tool and perform the erase operation
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### Write _ResetNetwork file
Create a file in the root directory of the disk, name it `_ResetNetwork`, remember not to have a suffix, and the file should be empty.
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### Insert it into ZimaOS and wait for 20 seconds.
Any of the following conditions will be considered successful.
- The display shows that the IP has changed.
- The `_ResetNetwork` file in the USB drive has been removed.