---
title: How to Create Raid6 on ZimaOS?
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Introduction
Currently, ZimaOS supports RAID0/1/5, but we understand that many users require RAID6 for enhanced redundancy. To address this, we've prepared a step-by-step guide for creating RAID6 through the command line. Please follow the instructions below.
We look forward to accelerating our support for more RAID levels in the future!

{% note warn Tips %}
If the system is rebooted, you’ll need to reassemble the RAID6 array.
{% endnote %}


## Prerequisites

1. You will need at least four hard drives.
2. You need to learn how to get to the command line page by clicking on [this](https://www.zimaspace.com/docs/zimaos/How-to-Open-SSH-in-ZimaOS.html).
3. You need to run the commands in the tutorial with superuser privileges (root privileges). You can use `sudo `to elevate privileges, such as  `sudo mkfs.ext4 /dev/md0 `
4. Use the command lsblk to check the available hard drives.
   ![](https://manage.icewhale.io/api/static/docs/1729218009483_98dae94c-9b29-4042-a508-537aa6d1d554.jpeg)

5. If MOUNTPOINTS has a mount point, you need to cancel it with the following command.
   ![](https://manage.icewhale.io/api/static/docs/1729145392591_image.png)
   ```command
   umount /dev/sda
   ```
   


## Steps to Create RAID6

1. Create the RAID6 array with at least four drives using the following command:
   ```
   mdadm -Cv /dev/md0 --level=6 --name=foldername --raid-devices=4 /dev/sda /dev/sdb /dev/sdc /dev/sdd --run --homehost=zimaos
   ```
   `/dev/md0` is the name of the new RAID device.

   `--level=6` indicates you're creating a RAID6 array.

   `--name=foldername` specifies the name of the RAID array.

   `--raid-devices=4` tells the system to use four hard drives.

   `/dev/sda /dev/sdb /dev/sdc /dev/sdd` are the drives participating in the array.

   ![](https://manage.icewhale.io/api/static/docs/1729219387443_img_v3_02fp_8fce2dd8-56af-4706-b5de-96cea3b8162g.jpg)


2. Format the RAID using the following command:
   ```
   mkfs.ext4 /dev/md0
   ```
   ![](https://manage.icewhale.io/api/static/docs/1729219416289_img_v3_02fp_7340f5ef-7892-4696-8707-cdda424461cg.jpg)


3. Create a directory for mounting the RAID:

   ```
   cd /media
   mkdir foldername
   ```

4. Mount the RAID using the following command:

   ```
   mount -t ext4 /dev/md0 /media/foldername
   ```
5. Once created, enter the path in the web-based File to display it

   ![](https://manage.icewhale.io/api/static/docs/1729220708308_img_v3_02fp_245f1382-835d-4827-8852-f6ab8b166d8g.jpg)

   ![](https://manage.icewhale.io/api/static/docs/1729220715773_img_v3_02fp_1b36a2a6-e9a5-45d0-acc2-9b3345b3224g.jpg)

   
## Notice:
If the system is rebooted, you'll need to reassemble the RAID6 array:
```
mdadm -Av /dev/md0 /dev/sda /dev/sdb /dev/sdc /dev/sdd
mount /dev/md0 /media/foldername
```
