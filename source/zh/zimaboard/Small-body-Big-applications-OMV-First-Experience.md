---
title: 探索 OMV
---

# 首次登录

## 登录方式

![OMV登录方法](/images/Small-body-Big-applications-(OMV+Zima)/menthod-of-login.jpeg)

首次登录OMV，请在浏览器中输入 **`openmediavault.local/ `**

{% note info %}
**用户名**: `admin`  
**密码**: `openmediavault` (用户可以在首次登录后更改默认密码)

{% endnote %}

## 仪表盘

![OMV仪表盘](/images/Small-body-Big-applications-OMV-First-Experience/omv-dashboard.jpeg)

**用户可以通过右上角的设置（齿轮形按钮）自定义仪表盘的布局。**

![更改OMV仪表盘](/images/Small-body-Big-applications-OMV-First-Experience/change-dashboard.jpeg)

# 初始化的三个元素

## 组/用户

**用户 -> 组 -> 创建**

![创建用户](/images/Small-body-Big-applications-OMV-First-Experience/omv-creat-users.jpeg)

**在创建新用户组时，用户可以将新创建的用户ID添加到该用户组中。**

![创建OMV用户ID](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-users-id.jpeg)

**用户 -> 用户 -> 创建**

![创建OMV权限](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions.jpeg)

**新用户默认属于用户组，但用户也可以根据实际需要自定义用户组以区别他们的使用。**

![与组一起创建OMV权限](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-groups.jpeg)

**共享文件夹的权限设置新用户对共享文件夹的访问权（请参阅共享文件夹的教程内容）**
![与共享文件夹一起创建OMV权限](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-%20share-folders.jpeg)

## 共享文件夹

**存储 - 文件系统 - 挂载 Ext3/4 分区（挂载）**  
**OMV支持直接挂载现有的 Ext3 或 Ext4 分区，如果当前连接的硬盘没有这样的分区，可以在现有的硬盘分区上进行相关磁盘管理（分区或格式化）**

{% note danger %}
**挂载的分区是新共享文件夹的前提条件**
{% endnote %}

![创建OMV共享文件夹](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders.jpeg)

**存储 -> 共享文件夹 -> 创建**

![创建OMV共享文件夹](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders1.jpeg)

**用户可以选择在挂载的分区中创建新共享文件夹并设置适当的访问权限（读取/写入）**

![创建OMV共享文件夹权限](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders-permissions.jpeg)

## 插件管理

**系统 -> 更新管理 -> 更新**

![OMV系统更新](/images/Small-body-Big-applications-OMV-First-Experience/omv-system-upadtes.jpeg)

{% note danger %}
**系统更新通常是官方系统补丁或者OMV的更新内容，因此建议在初始化后再进行操作。**
{% endnote %}

**系统 -> 插件**

如本文章开头所述，OMV是基于Debian Linux的网络附加存储（NAS）解决方案，适用于家庭环境或小型办公室，其官方插件库可以满足大多数用户的日常应用需求。
![OMV系统插件安装](/images/Small-body-Big-applications-OMV-First-Experience/omv-plugins-install.jpeg)

{% note primary %}
**必须安装的插件推荐**

**- 文件管理器: [Filebrowser](https://filebrowser.org/)**  
**- 网盘: [Onedrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage)**  
**- 图像管理器: [Photoprism](https://photoprism.app/)**  
**- AirPlay推送: [Shairport](https://github.com/mikebrady/shairport-sync)**  
**- OMV系统分区共享: sharerootfs（如果用户想要体验并使用Zima的emmc作为共享文件夹，无需外接硬盘）**  
**- 虚拟机管理器: [Kvm](https://www.linux-kvm.org/page/Main_Page)**  
**- SSH终端浏览器: [Wetty](https://github.com/butlerx/wetty)**

{% endnote %}

## 使用提示

### 自动注销时间

![OMV系统自动注销时间](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-automatic-logout-times.jpeg)

在日常使用过程中，大多数用户会发现，仅过短时间后就需要重新输入登录凭据。这是因为OMV的默认自动注销时间仅为5分钟。**`系统 - 工作台 - 自动注销。`**将时间设置得稍长一些可以解决此问题。

### 时区

![OMV系统时区](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-a-times-zone.jpeg)

有些用户发现，当他们设置每天下午同步数据时，实际上却是在清晨同步数据。这是因为用户没有设置自己的时区。为了解决这个问题，请前往 **`系统 - 日期和时间 - 时区 `**

### 提醒

![OMV系统提醒通知](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-reminder-notice.jpeg)

OMV桌面右上角的小铃铛经常弹出冗余通知，用户往往觉得这些通知与自己无关，因此感到烦恼。用户只需前往 **`系统 - 通知 - 通知`** 关闭与他们无关的通知。

### 固定IP地址

![OMV系统固定IP地址](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-fixed-ip-address.jpeg)

对于一些用户，由于局域网的环境因素，OMV地址会一直变化。用户可以使用主机（openmediavault.local/）访问管理页面，但实际应用操作仍然不方便。因此，用户应该前往 **`网络 -> 接口`** 将现有网络接口的IP从默认的DHCP可变IP地址修改为静态的固定IP地址。**`SMB/CIFS`**  
**SMB服务**是最基本的NAS应用之一；第一次使用OMV的用户往往会遇到无法正确创建SMB服务的尴尬。事实上，用户只需按照本指南中的步骤完成共享文件夹设置的三个元素初始化，SMB服务的创建即可轻松解决（与NFS服务的开启相同）。

### SMB/CIFS

![OMV系统SMB/CIFS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-smb-cifs.jpeg)

**SMB服务是最基本的NAS应用之一，第一次使用OMV的用户往往会遇到无法正确创建SMB服务的尴尬，实际上，用户只需按照本指南中的步骤完成共享文件夹设置的三个元素初始化，SMB服务的创建即可轻松解决（与NFS服务的开启相同）。**

# OMV高级玩法

## 社区插件库

**除了系统自带的官方插件，OMV还有大量由爱好者构建/维护的社区插件库，其中最重要的是全面支持Docker。**

**a)** 用户可以使用之前文章推荐的官方插件Wetty [服务（Services） - Wetty]  

![OMV系统社区插件](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins.jpeg)

**b)** 打开Wetty的Web版本SSH浏览器，输入在系统安装过程中设置的root账户和密码登录。

**c)** 登录后输入:**<code>`wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash`<code>**

![OMV系统社区插件](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins1.jpeg)

**d)** 一旦社区插件库安装完成，用户即可安装Docker

![OMV系统社区插件](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins2.jpeg)

## Docker与CasaOS

**a)** 使用root账户密码登录Wetty的SSH并输入。  
**<code>`wget -qO- https://get.casaos.io | sudo bash`<code>**

![OMV系统与CasaOS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos.jpeg)

**b)** 安装完成后，用户必须记住CasaOS的登录地址。

![OMV系统与CasaOS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos1.jpeg)

**c)** 进入CasaOS主页，用户可以轻松享受定制的Docker应用集合。

![OMV系统与CasaOS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos2.jpeg)

# 总结

**作为一款基于Debian Linux的网络附加存储（NAS）解决方案，OMV的系统小巧玲珑，能够帮助用户满足其日常需求，拥有自己的插件库，外加庞大的Docker库以及我们为用户量身定制的CasaOS，与市场上其他大型NAS系统如Synology、QNAP和UNAS相比，体现出其优势。**

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)