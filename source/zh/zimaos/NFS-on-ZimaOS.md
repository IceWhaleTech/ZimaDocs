---
title: 如何在ZimaOS上使用NFS
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
网络文件共享协议允许你将计算机上的文件和目录与网络中的其他设备共享。常见的协议包括SAMBA、NFS和FTP。  
网络共享的优势：
| **方面** | **USB复制** | **消息应用** | **网络共享** |
| - | - | - | - |
| **存储** | 本地副本 | 多个副本 | **集中式，无重复** |
| **管理** | 手动，容易出错 | 分散在聊天中 | **集中控制** |
| **媒体使用** | 需要完整复制 | 需要完整下载 | **支持流式传输** |
| **协作** | 实体传输 | 文件大小限制 | **实时多方访问** |

ZimaOS目前提供对SAMBA的CLI和GUI支持。在1.3.2版本之后，ZimaOS还集成了NFS功能（CLI级别）。本教程演示如何在ZimaOS上使用NFS共享文件夹，并从Windows、macOS和Ubuntu中访问它们。  
首先，您需要创建或找到一个共享的文件夹。在这里，我将使用`/DATA/C/demo`作为示例。

## 编辑配置文件
使用`vi`编辑`/etc/exports`文件，这是NFS的配置文件。

```language
# 首先，您需要进入ZimaOS的Web终端并获取root权限。
# ZimaOS仪表板 -> 设置 -> 常规
# -> 开发者模式 -> 基于Web的终端
# 登录并切换到root
sudo -i

# 编辑配置文件
vi /etc/exports

# 在/etc/exports中，粘贴这一行
/DATA/C/demo *(rw,sync,no_subtree_check)

# 第一列指定共享文件夹（例如 /DATA/C/demo）
# 第二列定义：
    # 允许访问的子网
        # 例如，10.0.0.0/8
        # *表示允许来自所有网络的访问
    # 允许网络用户读写权限(rw)
    # 写入方法，通常使用sync或async（此处使用sync）
    # no_subtree_check允许对共享目录进行完全访问，无子目录限制
# 请参考：https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/5/html/deployment_guide/s1-nfs-server-config-exports#s1-nfs-server-config-exports
```
即使重启后，它也会自动生效。

## 使配置文件生效
```language
# 在某些情况下，
# 您可能需要在终端中运行此命令以使配置生效。
systemctl restart nfs-server

# 或者
exportfs -a
```

## 使用（挂载/卸载）NFS文件夹
### 在ZimaOS/Ubuntu上
```language
# 在ZimaOS 1.3.2-beta2和Ubuntu 22.04.5 LTS上测试
# 在客户端计算机上
# 打开终端
# 首先切换到root
# 创建一个挂载目录
sudo -i
mkdir /mnt/demo

# 挂载NFS文件夹
# 此IP为服务器的IP
mount 10.0.0.71:/DATA/C/demo /mnt/demo

# 现在您可以查看并使用共享的文件夹

# 如果以后想移除挂载的NFS文件夹
# 只需检查挂载的文件夹
df -h
# 或者
mount | grep nfs

# 卸载NFS文件夹
umount /mnt/demo
```

### 在macOS上
```language
# 在M4芯片的macOS Sequoia上测试
# 创建一个挂载目录
mkdir ~/demo

# 挂载NFS文件夹
# 需要使用sudo来挂载
# 它会提示您输入密码
sudo mount -t nfs -o resvport 10.0.0.71:/DATA/C/demo ~/demo

# 打开文件夹进行使用
open .

# 如果以后想移除挂载的NFS文件夹
# 只需检查挂载的文件夹
df -h
# 或者
mount | grep nfs

# 卸载NFS文件夹
sudo umount /mnt/demo
```

### 在Windows上
```language
# 在Windows 11上测试
# 可能需要先进入CMD
# 因为Windows 11默认可能会将您放入PowerShell
cmd

# 您可能需要将W:更改为未占用的可用字符
mount \\10.0.0.71\DATA\C\demo W:

# 现在您可以查看并使用共享的文件夹

# 如果以后想移除挂载的NFS文件夹
# 只需检查挂载的文件夹
net use

# 卸载NFS文件夹
net use W: /delete
```

在Windows上挂载后的截图：
![](https://manage.icewhale.io/api/static/docs/1739500988306_image.png)

## 有用的提示
以下是一些您可能需要的命令。
```language
# 在ZimaOS服务器上
# 检查nfs服务的状态
systemctl status nfs-server

# 删除或注释掉/etc/exports中的行以禁用共享
# 运行此命令使其生效
exportfs -a
# 或者
systemctl restart nfs-server
```

如果在使用过程中遇到任何问题，请随时告知我们。您也可以加入我们的[社区](https://community.zimaspace.com/)和[Discord](https://discord.com/invite/uuNfKzG5)，与我们讨论有关NAS和ZimaOS的更多内容。我们期待您的反馈！