---
title: ZFS 在 ZimaCube 上
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 建立存储池
将外部驱动器连接到 ZimaCube。使用 lsblk 工具列出所有驱动器。您可以通过控制变量找到刚刚连接的驱动器。
![](https://manage.icewhale.io/api/static/docs/1727160959998_image.png)
在这里，我的 USB 驱动器显示为 sda。
使用以下命令创建存储池。
```language
# 您可能需要首先删除磁盘上的所有数据：
dd if=/dev/zero of=/dev/sda bs=1M count=10

# 由于在大多数情况下 ZimaOS 的根目录是只读的，
# 手动在 /media 下创建一个目录以便于挂载。
mkdir /media/pool1

# 创建您的存储池：
zpool create -m /media/pool1 pool1 /dev/sda -f

# 此外，您可能还需要为后续删除做准备：
zpool export pool1
zpool destroy pool1
```
![](https://manage.icewhale.io/api/static/docs/1727161209903_image.png)
## 在存储池上建立 ZFS
```language
# 在创建的存储池上创建 ZFS：
zfs create pool1/zfs

# 使用以下命令显示 ZFS 列表
zfs list
```
![](https://manage.icewhale.io/api/static/docs/1727161245558_image.png)
我选择在 /media 目录中创建存储池和 ZFS，这样您可以更方便地在 ZimaOS 上使用 ZFS。