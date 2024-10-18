---
title: Memory Test Tutorial
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# If the motherboard fails to boot properly, or there is a screen distortion or freeze during use, follow the steps below to troubleshoot the memory problem.
## Hardware environment：
1X ZimaCube
1X Monitor
1X HDMI/DP Cable
1X Keyboard
1X USB flash drive
## Step 1: Download the Memtest86 image
First, you need to download the Memtest86 image file, which you can download from the following link:
https://www.memtest86.com/download.htm
![](https://manage.icewhale.io/api/static/docs/1729233669049_image.png)
## Step 2: Install the image to the USB drive
After the download is complete, you need to flash the image file to the USB drive. It is recommended to use the Rufus tool to perform this process. The steps are as follows:
1. Download and install Rufus.
2. Open Rufus and select the downloaded Memtest86 image file.
3. Insert the USB drive and select it as the target device.
4. Click the "START" button to start the flashing process.
![](https://manage.icewhale.io/api/static/docs/1729233702813_image.png)
## Step 3: Start ZimaCube and boot from USB
1. Insert the USB drive with Memtest86 image into the USB port of ZimaCube.
2. Plug in the keyboard, press F11 continuously, and select boot from USB.
![](https://manage.icewhale.io/api/static/docs/1729233729784_image.png)
3. Enter the Memtest interface and select Start Test.
![](https://manage.icewhale.io/api/static/docs/1729233755009_image.png)
![](https://manage.icewhale.io/api/static/docs/1729233761336_image.png)
![](https://manage.icewhale.io/api/static/docs/1729233768385_image.png)
## Step 4: Determine if there is a problem with the memory based on the feedback results
If the PASS interface appears, there is no problem with the memory
![](https://manage.icewhale.io/api/static/docs/1729233805061_image.png)
You can use the above methods to determine whether your memory has stability issues and further troubleshoot motherboard issues! At the same time, you can contact our technical support email support@icewhale.org and attach the test results for further help.