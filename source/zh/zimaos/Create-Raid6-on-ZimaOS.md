---
title: 如何在 ZimaOS 上创建 Raid6？
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 介绍
目前，ZimaOS 支持 RAID0/1/5，但我们理解许多用户需要 RAID6 以增强冗余。为此，我们准备了一份通过命令行创建 RAID6 的逐步指南。请按照以下说明操作。
我们期待在未来加速对更多 RAID 级别的支持！

{% note warn Tips %}
如果系统重启，您需要重新组装 RAID6 阵列。
{% endnote %}


## 先决条件

1. 您需要至少四个硬盘。
2. 您需要学习如何通过点击 [此处](https://www.zimaspace.com/docs/zimaos/How-to-Open-SSH-in-ZimaOS.html) 访问命令行页面。
3. 您需要以超级用户权限（root 权限）运行教程中的命令。您可以使用 `sudo ` 提升权限，例如 `sudo mkfs.ext4 /dev/md0 `
4. 使用 `lsblk` 命令检查可用的硬盘。
   ![](https://manage.icewhale.io/api/static/docs/1729218009483_98dae94c-9b29-4042-a508-537aa6d1d554.jpeg)

5. 如果 MOUNTPOINTS 有挂载点，您需要使用以下命令取消挂载。
   ![](https://manage.icewhale.io/api/static/docs/1729145392591_image.png)
   ```command
   umount /dev/sda
   ```
   

## 创建 RAID6 的步骤

1. 使用以下命令创建至少四个驱动器的 RAID6 阵列：
   ```
   mdadm -Cv /dev/md0 --level=6 --name=foldername --raid-devices=4 /dev/sda /dev/sdb /dev/sdc /dev/sdd --run --homehost=zimaos
   ```
   `/dev/md0` 是新 RAID 设备的名称。

   `--level=6` 表示您正在创建一个 RAID6 阵列。

   `--name=foldername` 指定 RAID 阵列的名称。

   `--raid-devices=4` 告诉系统使用四个硬盘。

   `/dev/sda /dev/sdb /dev/sdc /dev/sdd` 是参与阵列的驱动器。

   ![](https://manage.icewhale.io/api/static/docs/1729219387443_img_v3_02fp_8fce2dd8-56af-4706-b5de-96cea3b8162g.jpg)


2. 使用以下命令格式化 RAID：
   ```
   mkfs.ext4 /dev/md0
   ```
   ![](https://manage.icewhale.io/api/static/docs/1729219416289_img_v3_02fp_7340f5ef-7892-4696-8707-cdda424461cg.jpg)


3. 创建一个用于挂载 RAID 的目录：

   ```
   cd /media
   mkdir foldername
   ```

4. 使用以下命令挂载 RAID：

   ```
   mount -t ext4 /dev/md0 /media/foldername
   ```
5. 创建完成后，输入路径到基于网页的文件中以进行显示

   ![](https://manage.icewhale.io/api/static/docs/1729220708308_img_v3_02fp_245f1382-835d-4827-8852-f6ab8b166d8g.jpg)

   ![](https://manage.icewhale.io/api/static/docs/1729220715773_img_v3_02fp_1b36a2a6-e9a5-45d0-acc2-9b3345b3224g.jpg)

   
## 注意：
如果系统重启，您需要重新组装 RAID6 阵列：
```
mdadm -Av /dev/md0 /dev/sda /dev/sdb /dev/sdc /dev/sdd
mount /dev/md0 /media/foldername
```