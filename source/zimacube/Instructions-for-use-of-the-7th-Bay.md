---
title: 7th Bay Usage 
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Install and Remove the 7th Bay
## Preparations:
Ensure that the ZimaCube is powered off and unplugged.
Prepare the hard drive to be installed.
## Specific Steps:
Step 1: Remove the front panel of the case.
![](https://manage.icewhale.io/api/static/docs/1722418820491_image.png)
Step 2: Remove the 6th bay.
![](https://manage.icewhale.io/api/static/docs/1722418858886_image.png)
Step 3: Turn counterclockwise to unscrew the screws securing the seventh drive.
![](https://manage.icewhale.io/api/static/docs/1722418913222_image.png)
Step 4: Remove the 7th bay.
![](https://manage.icewhale.io/api/static/docs/1722418964759_image.png)
![](https://manage.icewhale.io/api/static/docs/1722418974044_image.png)
Step 5: Freely install the SSD onto the 7th bay.
![](https://manage.icewhale.io/api/static/docs/1722419028169_image.png)
Step 6: Push the 7th bay into the correct position and tighten the screws clockwise.
![](https://manage.icewhale.io/api/static/docs/1722419069919_image.png)

# How to upgrade ZimaCube 7th lighting firmware
*In order to prevent esp32 from failing in OTA (Over-The-Air) updates, a wired update method is introduced here.*
## 3-step solution
1. Connect to WiFi
Connect to WiFi with a computer
Name: "ZimaCube"
Password: "homecloud"
2. Enter the URL
Enter in the browser: 172.16.1.1
3. Upload the firmware
[https://drive.google.com/file/d/1h8LKvZ47gdMmpJzu6CFK3awjGFX5ayRE/view?usp=drive_link](https://drive.google.com/file/d/1h8LKvZ47gdMmpJzu6CFK3awjGFX5ayRE/view?usp=drive_link)

## Backup plan

**Preparation before updating**
- Computer
- Data cable tybe-c
- Disk 7
- Download and unzip the compressed package
[https://drive.google.com/file/d/15nPalLy-2ieNQ84dT1gchBzLqtEfM--8/view?usp=drive_link](https://drive.google.com/file/d/15nPalLy-2ieNQ84dT1gchBzLqtEfM--8/view?usp=drive_link)

**Start updating**
3.1 Use the tybe-c data cable to connect the computer to the tybe-c on the chip on the seventh disk
3.2 Open the link [espressif.github.io](espressif.github.io) on the computer
3.3 Click 'Connect'
![](https://manage.icewhale.io/api/static/docs/1730360675989_image.png)

3.4 Select the serial port for connection
![](https://manage.icewhale.io/api/static/docs/1730360689217_image.png)

3.5 Click 'DIY'
![](https://manage.icewhale.io/api/static/docs/1730360715808_image.png)

3.6 Click 'Add File' twice
![](https://manage.icewhale.io/api/static/docs/1730360989529_image.png)

3.7 Change the burning address and select the file
*The specific burning address is as shown in the figure, select the three files after decompression in turn*
![](https://manage.icewhale.io/api/static/docs/1730360997291_image.png)

3.8 Click 'Program' to start burning
![](https://manage.icewhale.io/api/static/docs/1730361017895_image.png)

3.9 Burning is complete, press the RST reset button, and the firmware is successfully updated