---
title: How to Create Raid6 on ZimaOS?
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Introduction
Currently, ZimaOS supports RAID0/1/5, but we understand that many users require RAID6 for enhanced redundancy. To address this, we've prepared a step-by-step guide for creating RAID6 through the command line. Please follow the instructions below.
We look forward to accelerating our support for more RAID levels in the future!
## Prerequisites
1. You will need at least four hard drives.
2. Use the command lsblk to check the available hard drives.
![](https://manage.icewhale.io/api/static/docs/1729145283950_image.png)
3. If MOUNTPOINTS has a mount point, you need to cancel it with the following command.
```
umount /dev/sda
```

![](https://manage.icewhale.io/api/static/docs/1729145392591_image.png)
4. You need to run the commands in the tutorial with superuser privileges (root privileges). You can use `sudo `to elevate privileges, such as  `sudo mkfs.ext4 /dev/md0 `

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

2. Format the RAID using the following command:
   ```
   mkfs.ext4 /dev/md0
   ```

3. Create a directory for mounting the RAID:

   ```
   cd /media
   mkdir foldername
   ```

4. Mount the RAID using the following command:

   ```
   mount -t ext4 /dev/md0 /media/foldername
   ```

## Notice:
If the system is rebooted, you'll need to reassemble the RAID6 array:
```
mdadm -Av /dev/md0 /dev/sda /dev/sdb /dev/sdc /dev/sdd
mount /dev/md0 /media/foldername
```
