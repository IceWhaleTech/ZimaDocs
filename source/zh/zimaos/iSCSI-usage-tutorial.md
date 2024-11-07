---
title: iSCSI 使用教程
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

iSCSI（互联网小型计算机系统接口）是一种通过网络传输 SCSI 命令的协议，允许存储设备通过网络进行通信，类似于直接连接的存储。它可以虚拟化存储资源，实现集中管理、网络共享和远程访问，适用于数据中心、虚拟化环境、备份和恢复等场景。
通过本教程，您将学习如何在 ZimaOS 中配置和使用 iSCSI，以提高存储管理效率，简化网络存储架构，实现灵活的数据访问方式。

## 先决条件
1. 使用的硬盘未被占用
2. 确认客户端的 IQN

## 操作步骤
### 服务器
*确保您的 ZimaOS 已升级至 1.2.5 或以上版本。*

1. 使用命令 `sudo -i` 进入超级用户模式，启动 targetcli
```
targetcli
```

![](https://manage.icewhale.io/api/static/docs/1730362966225_image.png)

2. 创建一个 LUN，假设 `/dev/sde` 用作存储后端（这里我们使用 sde。您可以使用 `lsblk` 查看设备状态并更改为 `sda` 或 `sdb`）：
```
cd backstores/block
create myblockdev /dev/sde
```

![](https://manage.icewhale.io/api/static/docs/1730362990127_image.png)

3. 创建一个 iSCSI 目标 (`iqn.2024-10.com.zima:target1` 是一个示例)
```
cd /iscsi
create iqn.2024-10.com.zima:target1
```

![](https://manage.icewhale.io/api/static/docs/1730363013870_image.png)

4. 向目标添加一个 LUN
```
cd iqn.2024-10.com.zima:target1/tpg1/luns
create /backstores/block/myblockdev
```

![](https://manage.icewhale.io/api/static/docs/1730363050568_image.png)

5. 设置 ACL（访问控制列表）以允许连接。此处的 IQN 需要与客户端一致（打开 iSCSI Initiator，在配置选项卡中可以找到）
```
cd ../acls
create iqn.1993-08.org.debian:01:bb1e6772dfb6
```

![](https://manage.icewhale.io/api/static/docs/1730363186571_image.png)

### 客户端
**Windows**
1. 打开 iSCSI Initiator，在 Discovery 选项卡中，点击 Discover Portal
![](https://manage.icewhale.io/api/static/docs/1730363629547_image.png)

2. 配置 IP 地址，点击 OK
![](https://manage.icewhale.io/api/static/docs/1730363646462_image.png)

3. 在 Targets 选项卡中，点击 Connect
![](https://manage.icewhale.io/api/static/docs/1730363656977_image.png)

4. 打开计算机管理，点击存储 > 磁盘管理，您可以看到新连接的 iSCSI 卷
![](https://manage.icewhale.io/api/static/docs/1730363667742_image.png)

**Linux**
1. 发现 iSCSI 目标
```
iscsiadm -m discovery -t sendtargets -p <IP_ADDRESS>
```

将 `<IP_ADDRESS>` 替换为服务器的 IP 地址
![](https://manage.icewhale.io/api/static/docs/1730363793486_image.png)

2. 登录到 iSCSI 目标
```
iscsiadm -m node --login
```
![](https://manage.icewhale.io/api/static/docs/1730363899468_image.png)