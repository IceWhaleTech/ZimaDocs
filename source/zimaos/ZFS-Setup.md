---
title: ZFS on ZimaCube
description: “Set up ZFS storage on ZimaCube with ZimaOS for advanced data integrity, snapshots, and compression. Step-by-step ZFS pool creation and configuration guide.”
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
# Establish storage pool
Connect an external drive to ZimaCube. Use the lsblk tool to list all the drives. You can find the drive you just connected by controlling the variables.
![](https://manage.icewhale.io/api/static/docs/1727160959998_image.png)
Here, my USB drive is shown as sda .
Use this command to create a storage pool.
```language
# You may need to remove all the data on your disk firstly:
dd if=/dev/zero of=/dev/sda bs=1M count=10

# Since the root directory is read-only under most circumstances on ZimaOS,
# mannually make a directory under /media for mounting.
mkdir /media/pool1

# Create your pool:
zpool create -m /media/pool1 pool1 /dev/sda -f

# Also, you may need these for later removal purpose:
zpool export pool1
zpool destroy pool1
```
![](https://manage.icewhale.io/api/static/docs/1727161209903_image.png)
## Establish ZFS on storage pool
```language
# Create ZFS on the storage pool created:
zfs create pool1/zfs

# Use command below to show zfs list
zfs list
```
![](https://manage.icewhale.io/api/static/docs/1727161245558_image.png)
I chose to create the storage pool and zfs in the /media directory so that you can easily use ZFS on ZimaOS.