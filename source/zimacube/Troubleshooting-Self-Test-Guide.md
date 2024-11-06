---
title: ZimaCube Troubleshooting Self-Test Guide
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

As a high-performance NAS product, ZimaCube is designed to provide a reliable solution for creative professionals and technology enthusiasts. However, in daily use, users may encounter various technical problems or failures, which can usually be solved by themselves through simple troubleshooting steps. The purpose of this guide is to help users quickly and effectively identify and solve common ZimaCube problems to avoid unnecessary downtime.

## Hardware Problems
### The device cannot start
Remove external devices, including hard drives, SSDs, and additional PCIe devices, and try again
### Step1 Troubleshoot power problems
Make sure the orange power light of the device can be successfully lit. If not, please confirm that the power cord is properly connected and the green power light can be normally lit. If the green power light cannot be lit, it is determined to be a power problem.
### Step2 Troubleshoot DDR issues
1. If you are using ZimaCube Pro, you can try to insert only one DDR to see if it can boot
2. If there are no problems above, you can try to run memtest to troubleshoot DDR issues. For specific steps, please refer to the following link:
https://www.zimaspace.com/docs/zimacube/Memory-Test-Tutorial

### Step3 Reset the device
You can refer to the following steps to reset the RTC battery
https://www.zimaspace.com/docs/zimacube/Resets-CMOS
### Solution:
If you cannot boot according to the above steps, you can contact our after-sales team support@icewhale.org to replace the motherboard for you.
## Software problem
### System startup abnormality
1. Re-plug the system disk on the motherboard and check whether the system disk can be recognized normally.
2. You can reinstall ZimaOS according to the method in the following link
https://www.zimaspace.com/docs/zimacube/How-to-Install-ZimaOS
3. Try to use other available SSDs to see if it can be successfully booted.
### HDD or NVMe not recognized
**Step 1 Open the case**
Carefully remove the top cover of the case to access the motherboard.
![](https://manage.icewhale.io/api/static/docs/1730874467873_image.png)
**Step 2 Check whether the EDP cable and the backplane power cable are properly** plugged in. Replug the EDP cable and the backplane power cable according to the following method
![](https://manage.icewhale.io/api/static/docs/1730875959034_image.png)
![](https://manage.icewhale.io/api/static/docs/1730875970165_image.png)
**Step 3 Enter lsblk to check if it is recognized**
You can open SSH in ZimaOS by following the following method and entering the command "lsblk".
https://www.zimaspace.com/docs/zimaos/How-to-Open-SSH-in-ZimaOS
1. If all can be recognized, it is judged to be a software problem or hard disk problem. It is recommended to upgrade to the latest software version and check whether the hard disk has created an array. You can try to initialize it after recognition in other devices.
2. If some can be recognized, it is recommended to try soft restart or hot-swap the hard disk. If the above methods are useless, swap the hard disk position to exclude the fixed disk or disk cause
3. If all cannot be recognized, first determine whether the disk is an enterprise disk. If it is an enterprise disk, try to shield the 3.3V pin

![](https://manage.icewhale.io/api/static/docs/1730876010218_image.png)
The following link lists the hard drive models that can be used normally in the internal test
https://www.zimaspace.com/docs/zimacube/HDD-Interface-Usage-Guide
**Solution:**
If the above methods cannot make the hard drive run normally, you can contact our after-sales team support@icewhale.org to replace the backplane for you.
