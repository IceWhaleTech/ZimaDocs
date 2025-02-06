---
title: ZimaOS System Quick Recovery Guide
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Introduction
ZimaOS is a lightweight NAS operating system that uses a dual-partition design (Slot A and Slot B), each partition is about 6GB in size. When one partition fails, you can easily switch to the backup partition to ensure that the system continues to run. This tutorial will guide you on how to switch to the backup partition when there is a problem with the system.
## Preparation
Before you begin, make sure you have a monitor and keyboard connected.
## Step by step guide:
### Step 1: Boot the device
- Power on the ZimaOS device.

### Step 2: Enter the GRUB menu
- When the system boots up, pay close attention to the screen display. Quickly press the ↑ and ↓ arrow keys on the keyboard to bring up the GRUB menu. The GRUB menu is displayed as follows:
![](https://manage.icewhale.io/api/static/docs/1738826493349_image.png)

### Step 3: Select Boot Partition
- Use the arrow keys to select the alternate partition you wish to boot from (e.g. if Slot A crashes, select Slot B).

### Step 4: Boot Selected Partition
- Press Enter to boot from the selected partition.

**Now you can successfully enter the ZimaOS system**
![](https://manage.icewhale.io/api/static/docs/1738826615202_image.png)
## Tips
**How do I know which partition I am currently in?**
1. Run the terminal command `rauc status` and check the output to determine the currently booted partition.
2. In the output, `booted` indicates the currently booted partition.
![](https://manage.icewhale.io/api/static/docs/1738827159260_image.png)
## Additional Notes:
1. **Data safety:**
- Switching partitions will not affect user data, because ZimaOS user data is usually stored in a separate partition (such as /data).
2. **Understanding menu options:**
- "OK=1" means the partition is in good condition, "TRY=1" or "TRY=0" indicates the number of times the partition has been tried to boot.
- Rescue shell option is for advanced users to troubleshoot or repair the system, but it is not necessary to select it unless necessary.
3. **Advanced operations:**
- Press the 'e' key to edit the boot command, and press the 'c' key to enter the command line mode for experienced users.

**If you need further assistance or have other questions, please contact the ZimaOS team: <feedback@zimaos.com>.**