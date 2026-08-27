---
title: ZimaOS 概览
seo_title: "ZimaOS 设置指南：存储、共享、备份与系统设置"
description: "面向新用户的 ZimaOS 设置指南，包含安装 ZimaOS、配置文件共享、设置备份、连接云存储以及管理 NAS 系统设置的分步说明。"
type: "Docs"
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如留空，将使用正文第一段。
---

我们整理了这些指南，帮助你轻松上手 ZimaOS。无论你刚刚开箱设备，还是已经使用了一段时间，都可以从这里找到合适的入口。

## 设置与存储

首次启动后从这里开始。优先完成下面几项基础设置。

- **[开始使用](./get-started "通过 ZimaClient、账户创建和首次启动设置 ZimaOS")** — 完成语言、网络和账户设置
- **[功能概览](./features "了解 ZimaOS 的远程访问、存储和应用功能")** — 浏览 Data Station、应用管理和系统设置
- **[存储设置](./storage-setup "根据使用需求选择磁盘和存储方案")** — 为你的使用场景选择合适的磁盘
- **[RAID 选项](./raid-options "了解 RAID 级别、JBOD 以及详细设置步骤")** — 查看详细的 RAID 配置参考
- **[应用存储路径](./docker-app-paths "了解应用数据的存储位置以及迁移方法")** — 设置应用数据保存在哪块磁盘上

## 同步与备份

基础设置完成后，将内容迁入 ZimaOS，并确定每类数据的存放位置。

- **[手机备份](./phone-backup "使用 ZimaClient 将手机照片和文件自动备份到 ZimaOS")** — 自动备份手机中的照片和文件
- **[电脑备份](./computer-backup "通过 Finder、文件资源管理器或同步任务将电脑备份到 ZimaOS")** — 为笔记本电脑设置访问和定时备份
- **[连接云盘](./cloud-drive-connect "将 Google Drive、Dropbox 或 OneDrive 连接到 ZimaOS")** — 从 Google Drive、Dropbox 和 OneDrive 导入数据
- **[从其他 NAS 迁移](./synology-to-zimacube-migration "分阶段将文件从群晖 NAS 迁移到 ZimaOS")** — 从群晖迁移时推荐使用的流程
- **[群晖手动传输](./from-synology-to-zimacube-migrate-all-files "在 ZimaOS Files 中挂载群晖 DSM 共享并复制文件")** — SMB 手动迁移的分步指南
- **[在磁盘之间迁移数据](./data-migration "在 ZimaOS 的磁盘之间迁移 Docker 镜像、应用数据和文件夹")** — 磁盘空间不足时使用内置迁移工具
- **[3-2-1 备份](./how-to-use-3-2-1-backup-on-zimaos "使用 3-2-1 备份原则保护 NAS 数据")** — 建立覆盖全部重要数据的备份方案
- **[Time Machine 备份](./time-machine-backup "通过网络使用 Time Machine 将 Mac 备份到 NAS")** — 将 Mac 通过网络备份到 ZimaOS

## 访问与共享

数据准备好后，让需要的人和设备能够安全访问。

- **[远程访问](./remote-access "配置远程访问，随时连接家中的服务器")** — 离开家后仍可访问 ZimaOS
- **[下载 ZimaClient](./zimaclient-install "在桌面端和移动端安装 ZimaClient 并连接设备")** — 安装桌面客户端并浏览文件
- **[SMB 文件共享](./smb-troubleshooting "通过 SMB 共享文件，使其显示在 Finder 和文件资源管理器中")** — 在局域网内共享文件
- **[通过链接共享](./share-via-link "创建无需账户即可访问的文件分享链接")** — 生成链接并将文件分享给其他人
- **[Samba 多用户设置](./samba-member-setup "在 ZimaOS 上为 Samba 共享配置按用户控制的权限")** — 为每位用户分配不同的共享访问权限

## 安装方式

根据你的硬件和部署环境，选择合适的 ZimaOS 安装方式。

- **[安装 ZimaOS](./how-to-install-zimaos "从零开始安装 ZimaOS 的分步指南")** — 将系统镜像写入 USB 设备并启动安装
- **[安装到 Proxmox](./install-zimaos-on-proxmox-ve "在 Proxmox VE 中以虚拟机方式运行 ZimaOS")** — 将 ZimaOS 作为虚拟机运行
- **[从 CasaOS 迁移](./casaos-to-zimaos-migration "将家庭服务器配置从 CasaOS 迁移到 ZimaOS")** — 把现有 CasaOS 环境迁移到 ZimaOS
- **[获取网络 ID](./remote-id "查找 ZimaOS 网络 ID，并从其他设备建立连接")** — 查看设备唯一的网络标识符
- **[重置密码](./password-recovery "恢复或重置 ZimaOS 账户密码")** — 找回或修改 ZimaOS 密码

## 系统

让设备保持稳定运行。

- **[UPS 设置](./ups-setup "将 UPS 连接到 NAS，防止断电导致数据损坏")** — 防范突然断电
- **[系统恢复](./system-recovery "发生故障或重置后恢复 NAS 上的 ZimaOS")** — 在系统故障后恢复 ZimaOS
- **[离线安装](./offline-install "在没有互联网连接时安装 ZimaOS")** — 无网络环境下安装 ZimaOS
- **[搜索功能](./zimaos-search "使用 ZimaOS 搜索快速查找 NAS 中的文件")** — 跨存储空间快速查找文件

---

## 下一步

你不需要一次学完所有内容。根据当前要完成的事情选择下一条路径即可。

- 比较设备：**[硬件概览](../hardware/ "并排比较 ZimaCube、ZimaBoard 和 ZimaBlade")** — 对比三条产品线的硬件
- 运行应用：**[应用商店概览](./app-store/ "浏览媒体、自托管应用和 AI 等应用类别")** — 媒体服务器、自托管应用与 AI 智能体
- 深入探索：**[开发者概览](../developer/ "深入了解 ZFS、RAID、网络和 ZimaOS API")** — ZFS、RAID、网络与 ZimaOS API
