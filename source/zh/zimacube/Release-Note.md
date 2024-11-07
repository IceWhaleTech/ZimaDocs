---
title: 标题
description:
type: "文档"
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字
---

我们真诚感谢我们的社区用户积极参与和提供宝贵建议，使我们能够不断改进和完善ZimaOS！欢迎您分享更多想法！

提示

如果您发现任何软件问题，欢迎加入Discord，与20,000名Zima社区成员获得支持。-[IceWhale](https://discord.com/invite/f9nzbmpMtU)
# ZimaOS v1.2.3
![](https://manage.icewhale.io/api/static/docs/1724749372699_image.png)
## 修复
修复与RAID存储相关的体验问题 @scottyman2k@orochikun

修复系统安装或升级失败的问题 @Secarius@Bmorg

修复SSD无法识别或错位的问题 @Scyto@artophe@Vinney

修复CPU资源使用异常的问题 @jojo@goultron

修复无法创建用户、SSH无法使用及系统磁盘容量显示错误的问题 @applegeek@Halogen

在文件中，缩略图显示速度提升至5倍

在ZVM中，解决了连续点击创建按钮导致虚拟机重复创建的问题 @cfouche

PeerDrop增加了登录认证以提高安全性

释放53端口以确保Pi-hole或AdGuard Home正常工作 @oldintynazar

## 新增

对于ZimaOS的新用户，默认启用Samba共享，适用于ZimaOS HD和所有存储空间，并通过ZimaOS账号和密码进行保护

升级ZimaOS到当前版本后，修改密码将同时启用上述Samba共享

更改ZimaOS系统密码后，Samba共享密码会同步更改

RAID5允许添加新硬盘以扩展空间

RAID5中一块硬盘损坏时，数据仍然可以读取

在文件中，存储空间的容量添加到左侧栏

在文件中，左上角添加了新的Zima logo，点击后可返回仪表盘

在ZVM、助手和应用设置中，文件选择器添加了存储空间侧边栏，以便更方便选择文件路径

在设置中，新增“始终开灯”开关，以主动关闭始终亮着的电源灯 @Sabitech

在设置中，添加了ZimaCubePro 10G以太网端口和Thunderbolt端口的工作状态显示

提高ZimaCube在Mac Finder和Windows资源管理器中的自动扫描概率

允许ZFS存储在ZimaOS上运行 @Brucio

## 移除
不再允许修改ZimaOS账户的用户名
## 下载
:zap: 对于已安装ZimaOS V1.1的用户：点击仪表盘左上角的红点以启动更新。

:zap: 安装程序：https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3_installer.img

:zap: 手动升级：https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3.raucb