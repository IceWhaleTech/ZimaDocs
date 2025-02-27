---
title: Getting Started with iSCSI on ZimaOS
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
ZimaOS offers a variety of network sharing protocols to meet different storage and file-sharing needs, including NFS, SAMBA, and iSCSI:

**[NFS (Network File System)](https://www.zimaspace.com/docs/zimaos/NFS-on-ZimaOS)**: Ideal for file sharing in Unix/Linux systems, it supports high-concurrency access and cross-platform file sharing. 

**SAMBA**: It offers excellent compatibility. Supporting advanced permission management and encrypted transmission, it is an ideal choice for cross-platform environments.

**iSCSI (Internet Small Computer System Interface)**: Maps remote storage devices to local disks via IP networks, making it suitable for high-performance block storage scenarios, such as virtualization environments and database storage.

These network sharing protocols ensure users can choose the most suitable solution based on their needs.

This tutorial provides a guide on how to configure and use iSCSI on ZimaOS, helping you quickly achieve efficient block storage sharing. Before start, let's explain a few concepts.

## Target, targetcli and iSCSI Initiator. 
A **target** is what you will set up on the server side. Here the server is **ZimaOS**. And **targetcli** is the tool that you use to do the set up.

On the client machine, you need to use the **iSCSI Initiator** to connect to your **target** on the server. In this tutorial, we will take Windows as an example.

## ZimaOS Side
### Set up iSCSI Target
1. First, you need to enter the ZimaOS web terminal and obtain the root privilege.
2. ZimaOS dashboard -> Settings -> General -> Developer mode -> Web-based terminal
3. Log in and switch to root
```language
sudo -i
```
lauch targetcli
```language
targetcli
```
Now, you are in targetcli
```language
/>
```
**Create a target:**
Navigate to iscsi directory
```language
/> cd iscsi
```
create an iSCSI target
```language
/iscsi> create
```
↓This is the output:
```language
Created target iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
You might need to remoeve the target oneday,this operation will remove the entire target,including all ACLs, LUNs, and portals
```language
/iscsi> delete iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df
```
Also, you can specify a name creating a target:
```language
/iscsi> create iqn.2025-03.com.icewhale:888
```
↓This is the output
```language
Created target iqn.2025-03.com.icewhale:888.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
### Backstore and Creation
iSCSI Backstores are created for storage use by the target. First, let's enter the backstores directory.
Navigate to backstores
```language
/> cd /backstores
```
There are four types of backstore.
**Creating backstore with a file:**
```language
/backstores> cd fileio 
/backstores/fileio> create file1 /media/myRAID5/disk1.img 200M write_back=false
Created fileio file1 with size 209715200
```
↑This is the system output
**Creating backstore with a block storage object:**
```language
/backstores> cd block
/backstores/block> create name=block_backend dev=/dev/sdf

Created block storage object block_backend using /dev/sdf.
```
↑This is the output
You can use lsblk to identify block devices.
**Creating backstore with other types:**
Creating backstore with pscsi storage object
```language
/backstores> cd pscsi
/backstores> create name=pscsi_backend dev=/dev/sr0
```
or creating backstore with RAM
```language
/backstores> cd ramdisk
/backstores> create name=rd_backend size=1GB
```
### LUN links the target and backstores
Enter luns of one iqn
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/luns
```
link the backtore to this target
```language
/iscsi/iqn.20...888/tpg1/luns> create /backstores/fileio/file1

Ctreated LUN 0
```
↑This is the output
### Access Control Lists
We need to create an ACL to grant access for the initiator.
Navigate to iqn's acls directory
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/acls
```
Make this initiator_iqn_name accessable,you need to find or define the initiator_iqn_name on the client machine
```language
/iscsi/iqn.20...888/tpg1/acls> create iqn.1991-05.com.microsoft:desktop-44sqg6u
```
↓This is the output
```language
Created Node ACL for iqn.1991-05.com.microsoft:desktop-44sqg6u
Created mapped LUN 0.
```
## Windows Side
On Windows, connecting to an iSCSI target is easy.

Type iSCSI Initiator in the search bar and click the prompting icon.
![](https://manage.icewhale.io/api/static/docs/1740639156824_image.png)
You might need to enable this function first according to the prompt window.

On the iSCSI Initiator Properties panel, you can find the `initiator_iqn_name` in the Configuration tab.
![](https://manage.icewhale.io/api/static/docs/1740639189242_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639196492_image.png)
In the Targets tab, input the server's IP and click `Quick Connect...`.
Choose the right name and click `Connect`.
![](https://manage.icewhale.io/api/static/docs/1740639240986_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639249479_image.png)
In the search bar, type `Disk Management` and the `Create and format...` icon will prompt you. Click and enter, you will find the storage device just connected.
![](https://manage.icewhale.io/api/static/docs/1740639298524_image.png)
Initialize Disk and use it like a local disk! 
![](https://manage.icewhale.io/api/static/docs/1740639317499_image.png)
For how to initialize disk on Windows, refer to this [artical](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/initialize-new-disks). 
This is the basic use of `targetcli`. For detailed tutorial, refer to [redhat docs](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/managing_storage_devices/configuring-an-iscsi-target_managing-storage-devices#configuring-an-iscsi-target_managing-storage-devices). If you encounter any issues during use, feel free to let us know at any time. You can also join our [community](https://community.zimaspace.com/) and [Discord](https://discord.com/invite/uuNfKzG5) to discuss more about NAS and ZimaOS. We look forward to your feedback!