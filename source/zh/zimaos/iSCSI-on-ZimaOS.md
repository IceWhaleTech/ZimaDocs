---
title: 开始使用ZimaOS上的iSCSI
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字
---
ZimaOS提供了多种网络共享协议，以满足不同的存储和文件共享需求，包括NFS、SAMBA和iSCSI：

**[NFS（网络文件系统）](https://www.zimaspace.com/docs/zimaos/NFS-on-ZimaOS)**：适用于Unix/Linux系统中的文件共享，支持高并发访问和跨平台文件共享。

**SAMBA**：提供出色的兼容性，支持高级权限管理和加密传输，是跨平台环境的理想选择。

**iSCSI（互联网小型计算机系统接口）**：通过IP网络将远程存储设备映射为本地磁盘，适用于高性能块存储场景，如虚拟化环境和数据库存储。

这些网络共享协议确保用户能够根据需求选择最合适的解决方案。

本教程提供了如何在ZimaOS上配置和使用iSCSI的指南，帮助您快速实现高效的块存储共享。在开始之前，我们先解释一些概念。

## 目标、targetcli和iSCSI启动器
**目标**是您将在服务器端设置的内容，这里的服务器是**ZimaOS**。**targetcli**是用于进行设置的工具。

在客户端机器上，您需要使用**iSCSI启动器**连接到服务器上的**目标**。在本教程中，我们将以Windows为例。

## ZimaOS端
### 设置iSCSI目标
1. 首先，您需要进入ZimaOS的Web终端并获得root权限。
2. ZimaOS仪表盘 -> 设置 -> 常规 -> 开发者模式 -> 基于Web的终端
3. 登录并切换到root
```language
sudo -i
```
启动targetcli
```language
targetcli
```
现在，您已进入targetcli
```language
/>
```
**创建目标：**
导航到iscsi目录
```language
/> cd iscsi
```
创建一个iSCSI目标
```language
/iscsi> create
```
↓这是输出：
```language
Created target iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
有一天，您可能需要删除目标，此操作将删除整个目标，包括所有ACL、LUN和门户
```language
/iscsi> delete iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df
```
您还可以在创建目标时指定名称：
```language
/iscsi> create iqn.2025-03.com.icewhale:888
```
↓这是输出
```language
Created target iqn.2025-03.com.icewhale:888.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
### 后端存储和创建
iSCSI后端存储是为目标创建的存储使用。首先，让我们进入后端存储目录。
导航到backstores
```language
/> cd /backstores
```
有四种类型的后端存储。
**使用文件创建后端存储：**
```language
/backstores> cd fileio 
/backstores/fileio> create file1 /media/myRAID5/disk1.img 200M write_back=false
Created fileio file1 with size 209715200
```
↑这是系统输出
**使用块存储对象创建后端存储：**
```language
/backstores> cd block
/backstores/block> create name=block_backend dev=/dev/sdf

Created block storage object block_backend using /dev/sdf.
```
↑这是输出
您可以使用lsblk命令识别块设备。
**使用其他类型创建后端存储：**
使用pscsi存储对象创建后端存储
```language
/backstores> cd pscsi
/backstores> create name=pscsi_backend dev=/dev/sr0
```
或使用RAM创建后端存储
```language
/backstores> cd ramdisk
/backstores> create name=rd_backend size=1GB
```
### LUN连接目标和后端存储
进入某个iqn的luns
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/luns
```
将后端存储链接到此目标
```language
/iscsi/iqn.20...888/tpg1/luns> create /backstores/fileio/file1

Created LUN 0
```
↑这是输出
### 访问控制列表
我们需要创建ACL以授予启动器访问权限。
导航到iqn的acls目录
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/acls
```
使此initiator_iqn_name可访问，您需要在客户端机器上找到或定义initiator_iqn_name
```language
/iscsi/iqn.20...888/tpg1/acls> create iqn.1991-05.com.microsoft:desktop-44sqg6u
```
↓这是输出
```language
Created Node ACL for iqn.1991-05.com.microsoft:desktop-44sqg6u
Created mapped LUN 0.
```
## Windows端
在Windows上，连接到iSCSI目标非常简单。

在搜索栏中输入iSCSI启动器并点击提示图标。
![](https://manage.icewhale.io/api/static/docs/1740639156824_image.png)
根据提示窗口，您可能需要先启用此功能。

在iSCSI启动器属性面板中，您可以在配置选项卡找到`initiator_iqn_name`。
![](https://manage.icewhale.io/api/static/docs/1740639189242_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639196492_image.png)
在目标选项卡中，输入服务器的IP并点击`快速连接...`。
选择正确的名称并点击`连接`。
![](https://manage.icewhale.io/api/static/docs/1740639240986_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639249479_image.png)
在搜索栏中输入`磁盘管理`，然后点击提示的`创建和格式化...`图标。进入后，您将看到刚刚连接的存储设备。
![](https://manage.icewhale.io/api/static/docs/1740639298524_image.png)
初始化磁盘并像本地磁盘一样使用它！
![](https://manage.icewhale.io/api/static/docs/1740639317499_image.png)
关于如何在Windows中初始化磁盘，请参考这篇[文章](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/initialize-new-disks)。
这是`targetcli`的基本使用方法。有关详细教程，请参考[redhat文档](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/managing_storage_devices/configuring-an-iscsi-target_managing-storage-devices#configuring-an-iscsi-target_managing-storage-devices)。如果在使用过程中遇到任何问题，随时告知我们。您也可以加入我们的[社区](https://community.zimaspace.com/)和[Discord](https://discord.com/invite/uuNfKzG5)讨论更多关于NAS和ZimaOS的内容。我们期待您的反馈！
