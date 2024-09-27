---
title: Title
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

We sincerely thank our community users for their active participation and valuable suggestions, which enable us to continuously improve and refine ZimaOS! We welcome you to share more ideas please!

Tips

If you find any software problems, welcome to join the Discord and get support from 20,000 Zima community members.-[IceWhale](https://discord.com/invite/f9nzbmpMtU)
# ZimaOS v1.2.3
![](https://manage.icewhale.io/api/static/docs/1724749372699_image.png)
## Fixed
Fix RAID storage related experience issues @scottyman2k@orochikun

Fix system installation or upgrade failure @Secarius@Bmorg

Fix the problem of SSD not being recognized or misplaced @Scyto@artophe@Vinney

Fix some problem with abnormal CPU resource usage @jojo@goultron

Fix the problem of being unable to create users, SSH being unusable, and system disk capacity display errors @applegeek@Halogen

In Files, thumbnails are displayed 5 times faster

In ZVM, double creation of virtual machines when clicking the create button continuously is fixed @cfouche

PeerDrop adds login authentication to increase security

Port 53 is released to ensure that Pi-hole or AdGuard Home work properly @oldintynazar

## New

For new users of ZimaOS, Samba sharing is enabled by default for ZimaOS HD and all storage spaces, and is protected by the ZimaOS account and password

After upgrading ZimaOS to the current version, changing the password will enable the above Samba sharing

After the ZimaOS system password is changed, the password of the Samba share is changed synchronously

RAID5 allows new hard disks to be added to expand the space

When one disk in RAID5 is damaged, the data can still be read

In Files, the capacity of the storage space is added to the left column

In FIles, a new Zima logo is added to the upper left corner to return to the dashboard after clicking

In ZVM, Assist, and App settings, the file selector adds a storage space sidebar for more convenient file path selection

In Settings, a “power light is always on” switch is added to actively turn off the always-on power light @Sabitech

In Settings, the working status display of ZimaCubePro 10G Ethernet port and Thunderbolt port is added

The probability of ZimaCube being automatically scanned in the network function of Mac Finder and Windows Explorer is improved

Allow ZFS storage to run on ZimaOS @Brucio

## Remove
The username of the ZimaOS account is no longer allowed to be modified
## Download
:zap: For users who have installed ZimaOS V1.1: Click on the red dot in the top left corner of the dashboard to initiate the update.

:zap: Installer: https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3_installer.img

:zap: Manual upgrade: https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3.raucb