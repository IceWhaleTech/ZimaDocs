---
title: Build A $129 Five-Bay NAS with Unraid
---

**The previous document introduced two options for Unraid installation. This content will be combined with some of the accessories I currently have to build a five-bay NAS, and some Unraid OS features to talk about.**

# Introduction of the Hardware Currently Available

## 3.5-inch 5-Bay HDD Cage

My choice of hard drive cage here is cost-effective; the purpose is to get a great experience at the lowest cost possible

![5-Port PCIe SATA Adapter](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas-3.5-inch-hard-drive-cage.jpeg)

![5-Port PCIe SATA Adapter](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas-3.5-inch-hard-drive-cage2.png)

## ATX Power Supply

![](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas-atx-power-supply.png)

## [5-Port PCIe SATA Adapter](https://shop.zimaspace.com/products/5-channel-sata-6g-pcie-adapter-host-card-pci-express-x1-to-x4-sata-connector-supports-ahci-fis-ncq-marvell-chipset)

![5-Port PCIe SATA Adapter](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas-5-port-pcie-sata-adapter.png)

**The same type of ATX power supply + hard drive cage can be your own choice**

## Connection Diagram

### HDD & ATX Power Supply Connection

**Please ignore my untidy lines**

![ATX Power Connect ZimaBoard](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas-atx-and-hdd.png)

### ZimaBoard & ATX Power Supply Connection

![ATX Power Connect ZimaBoard](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-zimaboard-connect-atx-powwer.png)

### ZimaBoard & HDD Rack Connection

![ATX Power Connect ZimaBoard And Hdd](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-Disks-zimaboard-connect-hdd.png)

### Power Cable Shorted
On a 20-pin or 24-pin connector, find the green wire, usually only one green one; if there are several, the power supply is a workshop factory production. You can find the thinnest green wire and short it to any of the black wires and see if there is any output.

[Simple Educational Connections](https://zh.wikipedia.org/zh-hk/Template:ATX%E7%94%B5%E6%BA%90%E8%BF%9E%E6%8E%A5%E5%99%A8)

![Simple Educational Connections](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-power-cable-shorted.png)


### Overall Desktop View

![](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-overall-desktop-view.png)

**en.... It's my problem, it's a bit - very messy**

# Start To Configure UnraidOS

## Configuring User Information
After the installation of Unraid is complete, there is only the root user by default, and no password has been set, which is a significant security risk.

Switch to the USER interface; you can see only the root user. Click on its avatar to enter the user edit screen, change the password and click `CHANGE`. Unraid will prompt you to log in again. Root is the most privileged user on the Unraid system and is also the login user of WebGUI, so make sure you remember its password. 

![Using Unraid Configuring User Information](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-configuring-user-information.png)

![Using Unraid Configuring User Information](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-configuring-user-information1.png)

## Add/Manage User Permissions

Similarly, you can create users to manage user permissions when sharing

 For security reasons, you should not use the root user when setting up share permissions and Docker applications.

Switch to the USER screen, click `ADD USER`, set the username, description, avatar and password, and click `ADD` to create the user.

![Using Unraid Configuring User Information](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-add-user-permissions.png)


## Configuring Hard Disk Arrays

> Tips
>  The array must be activated to enable other functions

**Click “MAIN”**

![Create Unraid Disk](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-click-main.png)

**Configure disk**

In the Disk 1 option, scroll down to select a drive to be added to the array. With the current hardware, I should be able to get a Disk5, but now, I only have two 4TB drives at disposal.

![Create Unraid Disk ](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-configure-disk.png)

**Once you have made your selection, click on the START button in Array Operation**

![Create Unraid Disk And Click Start](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-click-start.png)

**After a few seconds, the drive is mounted**

> **Tips：**
> The main concept behind the Unraid array is its ability to manage the aggregation of disk devices (JBOD) protected by a dedicated parity device. A parity device provides a way for you to rebuild data from a failed disk to a new disk. While it may seem incredible that a drive may back up other drives with more storage capacity than the parity, it can reconstruct lost data from a failed drive using binary logic called XOR (eXclusive-OR). Because hard drives store data as zeros and ones, when a drive fails, parity compares the binary data on all surviving drives and can infer the lost data to be reconstructed.

## Create a Shared Folder

**Click "ADD SHARE"**

![ Using Unraid Add User Share](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-click-add-share.png)

**Enter the appropriate information and select the appropriate disk**

![Using Unraid Select The Appropriate DisK](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-select-the-appropriate-disk.png)

**Set whether the folder is an SMB share folder**

![ Using Unraid Smb Create Share Folder ](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-choose-smb-share-folder.png)

[Official Mounting Tutorial](https://wiki.unraid.net/Articles/Getting_Started)（There are many different ways to do this, so I won't explain them all here, if you're interested click on the links to see them）

# Unraid’s Other Features

## Docker

![ Unraid Docker](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-use-docker.png)

## Virtual Machine Creation and Use

![ Unraid Virtual](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-use-unraid-virtual.png)

## Create SMB/NFS Local Side Mount

![Unraid SMB](/images/Unraid-First-Experience-At-$129-Five-drive-Disks-Nas/Unraid-First-Experience-At-$129-Five-drive-create-smb-nfs-mount.png)

# In summary：

There is much more to Unraid OS, and the benefits are clear: Flexibility and Scalability. Modular Unraid enables you to build the system you have always wanted using the preferred hardware, software, and operating system. I hope this system will meet everyone’s usage scenarios.
UnraidOS has been running quietly and stably on my ZimaBoard 216 for 48 hours without any discomfort!

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)