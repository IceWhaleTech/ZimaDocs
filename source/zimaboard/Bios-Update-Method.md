---
title: ZimaBoard Bios Update Method
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Pre-preparation:
- USB flash drive (without contents) X1
- Monitor X1
- Keyboard X1
- MiniDP X1
## Step 1: Download BIOS installer
**Link:**
{% note warn Warning %}
There is no bios update package for zimaboard832 with J3455 CPU
{% endnote %}

| Model | CPU | Download Link |
| - | - | - |
| ZimaBoard 232 | N3350 | [https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link](https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link) |
| ZimaBoard 432 | N3450 | [https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link](https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link) |
| ZimaBoard 832 | N3450 | [https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link](https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link) |
## Step 2: Prepare a USB flash drive
Format the USB drive into FAT32 format, open the installation package according to the ZimaBoard model number, and copy the EFI folder to an empty USB drive.
|![](https://manage.icewhale.io/api/static/docs/1729154067524_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729154081840_image.png) |
| - | - |
## Step 3: Update Bios
Plug the USB flash drive, keyboard and monitor into the ZimaBoard, power on and hit F11 continuously to enter the selection screen and manipulate the keyboard to select UEFI:
![](https://manage.icewhale.io/api/static/docs/1729154195372_image.png)
## Step 4: Start installation
![](https://manage.icewhale.io/api/static/docs/1729154235770_image.png)

## Step 5: Installation completed
![](https://manage.icewhale.io/api/static/docs/1729154248434_image.png)
