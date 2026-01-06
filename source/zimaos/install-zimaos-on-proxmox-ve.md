---
title: Install ZimaOS on Proxmox VE Using the ISO Image
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
**W**ith the official release of the **ZimaOS ISO image** , you can now install and deploy ZimaOS more easily in virtualized environments such as **Proxmox VE (PVE)** .
 This ISO image is **specifically optimized for virtual machine installation**, allowing you to deploy ZimaOS without physical hardware and quickly explore its core features.
This installation method is ideal for **testing, learning, evaluation, and lightweight usage scenarios**.

## Introduction
Installing ZimaOS on Proxmox VE (PVE) means running ZimaOS as a **virtual machine using an ISO image**, rather than installing it directly on physical hardware. This approach allows you to experience the full ZimaOS system and web-based management interface within a standard virtualization environment.
By deploying ZimaOS on PVE, you can quickly create an isolated ZimaOS instance on your existing server or homelab. Compared to bare-metal installation, this method offers several advantages:
- Faster setup with a lower learning curve
- Reduced risk compared to direct hardware installation
- Easy environment replication with snapshots and backups
- Flexible resource allocation (CPU, memory, storage)
It is especially suitable for **feature evaluation, solution validation, and lightweight service deployment**.
---

## Requirements
Hardware & Environment Requirements
- A working and accessible Proxmox VE (PVE) environment
- An x86_64 CPU with virtualization support enabled
  Recommended minimum configuration:
  - CPU: 2 cores or more (4 cores recommended)
  - Memory: 4 GB or more (8 GB recommended)
  - Storage: At least 32 GB of available disk space

Software & System Requirements
- ZimaOS ISO installation image
- Proxmox VE 6.x / 7.x / 8.x / 9.x
- Virtual machine boot mode: UEFI
- VM BIOS type: OVMF (UEFI)

---
## Installation Steps
Note:
 The ZimaOS ISO image required for this tutorial can be downloaded from:
https://github.com/IceWhaleTech/ZimaOS/releases

### Upload the ZimaOS ISO Image
1. Log in to the Proxmox VE web interface
2. Navigate to **local → ISO Images → Upload**
![](https://manage.icewhale.io/api/static/docs/1767616598247_copyImage.png)
3. Select the downloaded **ZimaOS ISO image** and click **Upload**
![](https://manage.icewhale.io/api/static/docs/1767616612358_image.png)

### Create a Virtual Machine
1. Click the Create VM button
![](https://manage.icewhale.io/api/static/docs/1767616679913_image.png)
2. On the OS page, select the ZimaOS ISO image
![](https://manage.icewhale.io/api/static/docs/1767616694612_image.png)
3. On the System page:
  - Set BIOS to UEFI
  - Uncheck Add EFI Disk
![](https://manage.icewhale.io/api/static/docs/1767616715004_image.png)
4. On the **CPU** page, adjust the number of CPU cores
**Purpose**:Allocating more CPU cores improves multi-threaded performance and helps ensure smooth operation under load.
**Recommended**: 4 CPU cores or more
![](https://manage.icewhale.io/api/static/docs/1767616752746_image.png)
5. On the **Memory** page, adjust the memory size
**Purpose**:More memory allows ZimaOS to run additional services, improves multitasking performance, and reduces slowdowns during frequent operations.
**Recommended**: 8 GB (8192 MB) or more
![](https://manage.icewhale.io/api/static/docs/1767616800421_image.png)

### Install ZimaOS
1. After creating the virtual machine, click **Start**
![](https://manage.icewhale.io/api/static/docs/1767616824433_image.png)
2. Click **Console** to open the VM console
![](https://manage.icewhale.io/api/static/docs/1767616843275_image.png)
3. Press `Enter` to start the ZimaOS installation process
![](https://manage.icewhale.io/api/static/docs/1767616860449_image.png)
4. Select `Install ZimaOS` and press `Enter`
![](https://manage.icewhale.io/api/static/docs/1767616872278_image.png)
5. Select the target disk for installation and press `Enter`
![](https://manage.icewhale.io/api/static/docs/1767616901998_image.png)
6. Confirm the selected disk by choosing `Yes` and pressing `Enter`
![](https://manage.icewhale.io/api/static/docs/1767616916757_image.png)
7. Confirm again to proceed with installation
![](https://manage.icewhale.io/api/static/docs/1767616933805_image.png)
8. When the installation finishes, the completion screen will appear
![](https://manage.icewhale.io/api/static/docs/1767616945992_image.png)

---
### Remove the ISO Image
1. Return to the Proxmox VE interface
2. Select the virtual machine, choose **CD**, and click **Edit**
![](https://manage.icewhale.io/api/static/docs/1767616981489_image.png)
3. Select **Do not use any media** and click **OK**
![](https://manage.icewhale.io/api/static/docs/1767616998638_image.png)
4. After the change, the configuration should appear as shown below
![](https://manage.icewhale.io/api/static/docs/1767617011570_image.png)

---

### Start and Access ZimaOS
1. Start the ZimaOS virtual machine
2. Click Console to access the VM console
3. Wait for the system to finish booting
4. The IP address will be displayed in the console
Open a web browser and enter the IP address to access the ZimaOS Web Management Interface.
![](https://manage.icewhale.io/api/static/docs/1767617057004_image.png)

---

## Continue Exploring ZimaOS

Now that ZimaOS is running in your virtual machine, you can continue exploring its features and workflows at your own pace.  
To learn how to get started with system setup, storage management, and application deployment, please visit the following guide:

👉[Get Started with ZimaOS ](https://www.zimaspace.com/docs/zimaos/Get-Started) 


This guide will help you take the next steps and make the most of your ZimaOS environment.