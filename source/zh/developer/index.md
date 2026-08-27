---
title: 开发者概览
seo_title: "ZimaOS 开发者指南：ZFS、RAID、网络与 ZimaOS API"
description: "ZimaOS 开发者文档，涵盖 Docker 与 self-hosted 应用、家庭服务器和 Homelab 存储、网络与 SSH、NAS OS API、应用商店发布及项目贡献。"
type: "Docs"
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如留空，将使用正文第一段。
---

如果你希望深入系统内部，这一部分就是为你准备的。存储系统、网络和 ZimaOS API 等高级用户与开发者需要的内容都集中在这里。

## 存储与文件系统

ZimaOS 原生支持 ZFS、RAID、NFS 和 iSCSI。可以从以下指南开始了解和配置这些存储能力。

- **[ZFS 设置](./zfs-setup "在 ZimaOS 上设置支持快照、校验和与数据完整性的 ZFS")** — 创建和管理 ZFS 存储池
- **[RAID 选项概览](../zimaos/raid-options "比较 RAID 级别和 JBOD，并查看详细设置步骤")** — 根据使用场景选择合适的 RAID 级别
- **[创建 RAID 6](./raid6-setup "在 ZimaOS 上创建具有双重奇偶校验保护的 RAID 6")** — 分步配置双重奇偶校验 RAID
- **[RAID 重建](./raid-rebuild-after-reinstall "重新安装 ZimaOS 后恢复并重建 RAID")** — 重装系统后恢复 RAID 阵列
- **[NFS 文件共享](./nfs-on-zimaos "通过 NFS 向 Linux 和 macOS 客户端共享文件")** — 为 Linux 和 macOS 设置 NFS 共享
- **[iSCSI 使用指南](./iscsi-guide "在 NAS 上设置块级 iSCSI 存储")** — 使用 iSCSI 配置块级存储
- **[iSCSI 设置](./iscsi-setup "详细配置 ZimaOS iSCSI")** — 完整的 iSCSI 配置流程
- **[Rsync 备份克隆](./rsync-backup-clones "使用 rsync 克隆完整磁盘或数据集")** — 使用 rsync 克隆磁盘或数据集
- **[连接群晖 SMB](./synology-smb-connect "通过 SMB 将 ZimaOS 连接到现有群晖 NAS")** — 通过 SMB 连接现有群晖设备
- **[QTS 双向同步](./zimaos-qts-two-way-sync-guide "在 ZimaOS 与 QNAP QTS 之间保持文件夹同步")** — 与 QNAP 建立双向文件夹同步
- **[加密文件夹](./folder-encryption "在 ZimaOS 文件系统层加密敏感文件夹")** — 在文件系统层保护敏感数据

## 网络与协议

正确的网络配置能让其他服务运行得更快、更稳定。

- **[网络配置](./networking "在 ZimaOS 上配置网络接口、路由和静态 IP")** — 设置接口、路由与静态地址
- **[启用 SSH](./how-to-open-ssh-in-zimaos "在 ZimaOS 上启用 SSH 并配置基础远程访问")** — 开启 SSH 并完成基础访问设置
- **[SSH 高级设置](./ssh-setup "通过密钥认证、端口调整和安全选项加固 SSH")** — 配置密钥认证、端口和安全加固
- **[网络传输速度](./nas-transfer-speed-troubleshooting "查找并解决 NAS 网络传输速度慢的问题")** — 定位并修复网络瓶颈

## 开发

在 ZimaOS 之上构建自己的 Docker 应用、Python 脚本，或直接参与项目贡献。

- **[Python 环境](./python-setup "在 ZimaOS 上设置用于脚本和自动化的 Python")** — 配置 Python 脚本与自动化环境
- **[贡献指南](./how-to-contribute "向 ZimaOS 项目贡献代码、文档或反馈")** — 参与代码、文档和反馈贡献
- **[社区贡献](./contributions "查看 ZimaOS 用户提交的驱动和改进")** — 浏览用户提交的驱动与功能改进

## 应用商店开发

为 ZimaOS 家庭服务器构建 Docker 与 self-hosted 应用，维护 Homelab 应用目录，或为其他 NAS OS 环境发布兼容的应用商店。

- **[构建并发布应用](./docker-app-publishing "为 ZimaOS 应用商店适配并打包 Docker 应用")** — 准备单个应用并提交到商店
- **[创建应用商店](./app-store-create-from-scratch "为 ZimaOS、家庭服务器和 Homelab 创建 Docker 应用商店")** — 从源文件构建兼容 v2 的商店
- **[Docker Compose 与 x-casaos](./app-store-compose-x-casaos "为 self-hosted 应用配置 Docker Compose 与 x-casaos 元数据")** — 查询运行时和元数据字段
- **[应用商店 CI/CD](./app-store-ci-cd "验证、构建并发布 Docker 应用商店")** — 自动化验证、构建制品和静态托管
- **[从 v1 迁移到 v2](./app-store-v1-v2-migration "把 CasaOS 或 ZimaOS 应用商店迁移到 v2 协议")** — 在采用静态产物的同时保留兼容性
- **[开发者 FAQ](./app-store-faq "面向 Docker 应用商店维护者的常见问题")** — 应用 ID、多语言、托管、构建与兼容性

## ZimaOS API

通过 API，可以从自己的代码中自动执行文件操作、用户管理和系统设置。

- **[ZimaOS API 指南](./openapi-developer-guide "了解 ZimaOS API 的认证、端点和集成示例")** — 认证、接口端点与集成示例
- **[ZimaOS API 浏览器](./openapi-live-preview "直接在浏览器中试用 ZimaOS API 请求")** — 在浏览器中实时尝试 API 调用

## 版本记录

侧边栏包含从 v1.2.2 到最新版本的全部 ZimaOS 发布说明。

## 下一步

先从当前需要的主题开始，其他内容随时可以回来查阅。

- 设置 ZimaOS：**[ZimaOS 概览](../zimaos/ "查看 ZimaOS 安装、存储与共享文档")** — 安装、存储和系统设置
- 运行应用：**[应用商店概览](../zimaos/app-store/ "浏览媒体、自托管应用和 AI 等应用类别")** — 媒体服务器、自托管应用与 AI 智能体
