---
title: iSCSI usage tutorial
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

iSCSI (Internet Small Computer System Interface) is a protocol for transmitting SCSI commands over a network, allowing storage devices to communicate over a network, similar to directly connected storage. It can virtualize storage resources, achieve centralized management, network sharing, and remote access, and is suitable for scenarios such as data centers, virtualized environments, and backup and recovery. 
Through this tutorial, you will learn how to configure and use iSCSI in ZimaOS to improve storage management efficiency, simplify network storage architecture, and achieve flexible data access methods.
## Prerequisites
1. The hard disk used is not in use
2. Confirm the client's IQN

## Operation steps
### Server
*Make sure your ZimaOS has been upgraded to 1.2.5 or above.*

1. Use the command `sudo -i` to enter superuser mode，Start targetcli
```
targetcli
```

![](https://manage.icewhale.io/api/static/docs/1730362966225_image.png)

2. Create a LUN, assuming `/dev/sde` is used as the storage backend(Here we use sde. You can use the `lsblk` to view the device status and change to `sda` or `sdb`..):
```
cd backstores/block
create myblockdev /dev/sde
```

![](https://manage.icewhale.io/api/static/docs/1730362990127_image.png)

3. Create an iSCSI target (`iqn.2024-10.com.zima:target1` is an example)
```
cd /iscsi
create iqn.2024-10.com.zima:target1
```

![](https://manage.icewhale.io/api/static/docs/1730363013870_image.png)

4. Add a LUN to the target
```
cd iqn.2024-10.com.zima:target1/tpg1/luns
create /backstores/block/myblockdev
```

![](https://manage.icewhale.io/api/static/docs/1730363050568_image.png)

5. Set the ACL (access control list) to allow the connection. The IQN here needs to be consistent with the client(Open iSCSI Initiator, it is in the Configuration tab)
```
cd ../acls
create iqn.1993-08.org.debian:01:bb1e6772dfb6
```

![](https://manage.icewhale.io/api/static/docs/1730363186571_image.png)
### Client
**Windows**
1. Open iSCSI Initiator, in the Discovery tab, click Discover Portal
![](https://manage.icewhale.io/api/static/docs/1730363629547_image.png)

2. Configure the IP address, click OK
![](https://manage.icewhale.io/api/static/docs/1730363646462_image.png)

3. In the Targets tab, click Connect
![](https://manage.icewhale.io/api/static/docs/1730363656977_image.png)

4. Open Computer Management, click Storage > Disk Management, and you can see the newly connected iSCSI volume
![](https://manage.icewhale.io/api/static/docs/1730363667742_image.png)

**Linux**
1. Discover iSCSI targets
```
iscsiadm -m discovery -t sendtargets -p <IP_ADDRESS>
```

Replace `<IP_ADDRESS>` with the IP address of the server
![](https://manage.icewhale.io/api/static/docs/1730363793486_image.png)

2. Log in to the iSCSI target
```
iscsiadm -m node --login
```
![](https://manage.icewhale.io/api/static/docs/1730363899468_image.png)
