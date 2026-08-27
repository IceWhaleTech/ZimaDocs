---
title: 应用商店概览
seo_title: "ZimaOS 应用商店：在 NAS 上运行媒体服务、自托管应用与 AI"
description: "探索 Zima NAS 可以实现的用途：搭建家庭媒体服务器、自托管应用、运行 AI 智能体以及创建游戏服务器，所有服务都运行在你自己的硬件上。"
type: "Docs"
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如留空，将使用正文第一段。
---

我们很喜欢看到大家用这些设备创造出的各种项目。多年来，社区成员把 Zima 设备变成了媒体中心、广告拦截器、AI 助手和游戏服务器；每当我们以为已经见过所有玩法时，总会有人带来新的惊喜。

运行自己的服务会带来一种独特的踏实感：硬件属于你，数据留在你手中，也不会有人突然停止服务或更改价格。

## 媒体服务器

大多数人从这里开始。把 NAS 变成家庭流媒体中心，让电影、电视剧、音乐和照片能够在家中的任意屏幕上播放。

- **[Jellyfin 媒体服务器](./media-server-setup-with-jellyfin "使用 Jellyfin 从 NAS 串流电影、电视剧和音乐")** — 免费开源，支持多种设备
- **[Plex 媒体服务器](./plex-setup-guide "安装 Plex Media Server，并将媒体库串流到任意设备")** — 界面成熟，并为各类设备提供客户端
- **[Plex GPU 转码](./plex-and-gpu-transcoding "在 Plex 中启用 GPU 硬件转码，实现流畅的 4K 播放")** — 启用硬件加速，流畅播放 4K 内容
- **[Emby 服务器](./setup-emby-server "设置 Emby Media Server，在不同设备间串流内容")** — 兼顾 Jellyfin 的开放性与 Plex 的易用性
- **[Immich 照片同步](./sync-photos-with-immich "使用自托管 Immich 将手机照片同步到 NAS")** — Google Photos 的自托管替代方案
- **[Immich 照片备份](./immich-photo-backup "深入配置 Immich，用于备份照片库")** — 进一步设置 Immich 照片备份
- **[DLNA 服务器](./dlna-server-setup "设置 DLNA，将媒体串流到旧款电视和 DLNA 设备")** — 将内容播放到旧款智能电视和 DLNA 设备
- **[NVR 摄像机服务器](./nvr-camera-server "将安防摄像机连接到 NAS，并启用 AI 目标检测")** — 接入安防摄像机并使用 AI 目标检测
- **[批量照片同步](./cli-guide "通过命令行将数千张照片批量同步到 NAS")** — 适合一次迁移大量照片

## 自托管应用

这些是社区最常运行的应用。每个应用都能用你自己掌控的服务替代一项订阅。

- **[使用 Syncthing 同步文件](./syncthing-setup "使用自托管 Syncthing 在设备之间保持文件夹同步")** — 在所有电脑和手机之间同步文件夹
- **[Pi-hole 广告拦截](./pi-hole-setup "在家庭服务器上使用 Pi-hole 拦截全网广告")** — 自动为网络中的每台设备拦截广告
- **[文档管理](./paperless-ngx-install "使用 Paperless-ngx 管理和搜索扫描文档")** — 扫描纸质文档并建立可搜索的资料库
- **[AI 文档处理](./paperless-ai-install "使用 Paperless-AI 自动标记和分类文档")** — 为 Paperless 增加自动标签和分类
- **[Radarr 电影管理](./radarr-setup "使用 Radarr 自动下载和管理电影")** — 指定想看的电影，其余流程自动完成
- **[网络电台](./azuracast-install "使用 AzuraCast 运行自己的网络电台")** — 搭建属于自己的网络广播站
- **[服务器监控](./zabbix-install-guide "使用 Zabbix 仪表盘监控服务器和网络")** — 掌握服务器与网络运行状态
- **[种子下载器](./webtorrent-feature "使用 WebTorrent 将种子内容直接下载到 NAS")** — 直接把下载内容保存到 NAS
- **[Syncthing 设置指南](./syncthing-install "为多设备同步配置更高级的 Syncthing 设置")** — 更详细的 Syncthing 配置说明

## AI 与机器学习

在自己的硬件上运行 AI，意味着数据无需离开家中。最近，社区在这个方向上投入了很多创造力。

- **[启用 AI 搜索](./enable-ai "在家庭服务器上启用 AI 搜索，用自然语言查找文件")** — 使用自然语言搜索所有文件
- **[部署 DeepSeek R1](./deploy-deepseek-r1 "在智能体服务器上部署 DeepSeek R1，本地运行大语言模型")** — 在 Zima 硬件上本地运行高性能模型
- **[下载 AI 模型](./llm-manual-download "为离线环境下载 AI 模型")** — 适用于离线或低带宽环境
- **[AI 照片描述](./frigate-ollama-setup "使用 AI 自动为家庭服务器中的照片添加标签和描述")** — 自动标记并描述照片库
- **[OpenClaw 智能体](./openclaw-agent-setup "将 OpenClaw 作为全天候智能体运行，并通过 Telegram 对话")** — 可通过 Telegram 随时对话的 AI 智能体
- **[Hermes 智能体](./hermes-agent-setup "运行能够学习并记住用户信息的 Hermes 智能体")** — 会持续学习并保留记忆的智能体

## 创意项目

有些项目很难归入固定类别，而它们往往最让人惊喜。

- **[Batocera 街机](./batocera-arcade-setup "使用 Batocera 将 Zima 设备变成复古游戏机")** — 将 Zima 设备改造成复古游戏主机
- **[Minecraft 服务器](./minecraft-friendship-service "在自己的服务器上托管持续运行的 Minecraft 世界")** — 托管属于自己的 Minecraft 世界
- **[Oculus VR 串流](./oculus-quest-media-server "将 PC VR 游戏无线串流到 Oculus Quest")** — 将 PC VR 游戏串流到 Quest 头显
- **[PVE 集群迁移](./zimablade-cluster-pve "通过 Proxmox 集群迁移在主机之间移动服务")** — 在 Proxmox 主机之间迁移服务
- **[在 Debian 上运行 PVE](./pve-on-debian-for-i226 "为 Intel i226 网卡在 Debian 上运行 Proxmox VE")** — 适用于 Intel i226 网卡的 Proxmox VE 方案
- **[社区应用商店](./awesome-third-party-stores "浏览由社区维护的第三方 NAS 应用商店")** — 社区整理的第三方应用源
- **[自托管应用概览](./self-hosted-apps "了解在家庭服务器上自托管应用的更多方式")** — 在 ZimaBoard 上探索更多自托管方案
- **[ZimaBoard 上的 Jellyfin](./jellyfin-setup "在 ZimaBoard 家庭服务器上设置 Jellyfin")** — 针对 ZimaBoard 硬件的 Jellyfin 指南

## 下一步

无论准备搭建什么，都可以先从一个应用开始。亲手把它变成自己的服务，正是其中的乐趣。

- 硬件规格：**[硬件概览](../../hardware/ "并排比较 ZimaCube、ZimaBoard 和 ZimaBlade")** — 查看三条产品线的硬件详情
- 深入探索：**[开发者概览](../../developer/ "深入了解 ZFS、RAID、网络和 ZimaOS API")** — ZFS、RAID、网络与 ZimaOS API
