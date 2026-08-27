---
title: ZimaOS 功能
seo_title: "ZimaOS 功能：远程访问、存储、RAID 和 App Store"
description: "带你了解 ZimaOS 仪表板，包括远程访问、文件共享、存储管理、RAID 选项、虚拟机，以及可一键安装 Docker 应用的 App Store。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

如果你刚刚按照**[入门指南](./get-started "通过 ZimaClient 和账户创建，从首次启动开始设置 ZimaOS")**完成设置，那么设备现已上线并准备就绪：远程访问已经开启，存储已经共享，账户也已配置完成。第一次看到整个仪表板正常运转，确实会让人很有成就感。

本页将带你了解 ZimaOS 的能力，并指引你找到每项功能的详细指南。可以把它当作一张地图；如果某项功能吸引了你，沿着链接继续深入即可。

## 随时随地访问设备

大多数 NAS 都要求你配置端口转发或 VPN，才能从家外连接。ZimaOS 不需要。首次通过 ZimaClient 连接时，系统会自动建立加密的点对点通道。此后，你可以从任何地方访问设备。

你的数据始终保持私密。连接采用端到端加密，中间没有第三方服务器。你也可以随时在“设置”中关闭远程访问。

我们不会收集或存储你的个人文件、连接日志或使用数据，也无权访问这些内容。远程访问通过加密的点对点通道运行，你与设备之间不存在第三方服务器。我们的隐私实践已完整记录，并向社区开放审查。

**[隐私政策](../help-center/privacy-policy "ZimaOS 关于如何处理你的数据和连接的隐私政策")**

<table style="width:100%; table-layout:fixed;">
  <tr>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885802_zimaclient-ios-v-1-6-dash.png" alt="ZimaClient iOS 仪表板界面，显示设备状态、存储使用情况和系统信息" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885801_zimaclient-ios-v-1-6-files.png" alt="ZimaClient iOS 文件界面，列出家庭服务器上的共享文件夹和文件" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885803_zimaclient-ios-v-1-6-app.png" alt="ZimaClient iOS 应用界面，显示已安装的应用及其运行状态" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885804_zimaclient-ios-v-1-6-photos.png" alt="ZimaClient iOS 照片界面，显示从家庭服务器同步的照片库" style="max-width:100%; height:auto;">
    </td>
  </tr>
</table>

**[远程访问](./remote-access "配置远程访问，让你可以从任何地方连接家庭服务器")** · **[下载 ZimaClient](./zimaclient-install "在桌面端和移动端安装并设置 ZimaClient，以访问设备")** · **[网络 ID](./remote-id "查找 ZimaOS 网络 ID，并用它从其他设备连接")**

## 存储、共享和保护文件

存储的设置方式取决于你打算如何使用设备。

对于大多数家庭，我们建议从两块相同硬盘组成的 RAID 1 开始。数据会镜像到两块硬盘，因此即使其中一块故障，也不会丢失数据。家中每台电脑都能在 Finder 或文件资源管理器中看到这些文件，无需等待上传，也不必支付云存储月费。如果你希望为最重要的文件保留一份异地副本，Files 应用可以连接 Google Drive、Dropbox 或 OneDrive，选择性地进行备份。

音乐、照片和视频可以从设备直接串流到网络中的任意屏幕。为了进一步保护数据，Files 应用还可以选择性地将最重要的文件夹备份到 Google Drive、Dropbox 或 OneDrive。

![ZimaOS 存储设置页面，显示硬盘列表以及将硬盘组合为 RAID 存储的选项](https://manage.icewhale.io/api/static/docs/1786262061523_zimaos-storage-settings.png)

如果你经营小型企业，或保存着无法替代的家庭档案，RAID 5 可以在防止单盘故障的同时提供更多可用空间。可以从三块硬盘开始，以后再继续添加。即使正在更换故障硬盘，数据仍能保持在线。ZimaOS 也支持 RAID 0、RAID 1 和 RAID 6，以满足其他场景。

如果你需要快照、校验和以及高级数据完整性功能，也可以使用 **[ZFS](../developer/zfs-setup "在 ZimaOS 上设置 ZFS，以获得快照、校验和及数据完整性功能")**。

存储配置完成后，会自动出现在本地网络中：Mac 上显示在 Finder 中，Windows 上显示在文件资源管理器中。访问由 ZimaOS 账户保护。你可以为家人或团队成员分别创建账户，并为每个账户设置独立的读写权限。

**[存储设置](./storage-setup "根据你的需求选择合适的 RAID 和存储配置")** · **[SMB 文件共享](./smb-troubleshooting "通过 SMB 共享文件，使其显示在 Finder 和文件资源管理器中")** · **[连接云盘](./cloud-drive-connect "将 Google Drive、Dropbox 或 OneDrive 连接到 ZimaOS 进行备份")** · **[RAID 选项](./raid-options "了解 RAID 级别和 JBOD，并按照分步说明完成设置")** · **[在硬盘间移动数据](./data-migration "在 ZimaOS 的硬盘之间移动 Docker 镜像、应用数据和文件夹")**


## 一键安装应用

从这里开始，设备不再只是存放文件，而会变成一台家庭服务器。ZimaOS 1.7 大幅扩充了 App Store。

**一键安装。** 数百款应用都可以一键安装，无需 Docker 知识。安装 Pi-hole 可以屏蔽整个家庭网络中的广告；安装 Jellyfin 则可以运行自己的流媒体服务器。界面专为浏览而设计，通过分类和推荐帮助你找到需要的内容。

**集中管理所有应用。** 所有已安装应用都集中在一个页面中。无需接触配置文件，就能查看哪些应用正在运行、检查更新并调整基本设置。如果出现问题，还可以随时使用内置日志和终端。

**面向高级用户。** 可以导入任意 Docker Compose YAML 文件、直接编辑配置，并以完整的生命周期控制运行多容器堆栈。ZimaOS 负责 Docker 层，让你专注于正在构建的内容。

社区维护着多个第三方商店，额外提供数百款应用。你的硬件、你的应用、你的规则；一切都不依赖订阅或其他人的云服务。

**[App Store 概览](./app-store/ "浏览媒体、自托管应用和 AI 等 App Store 分类")** — 媒体串流、自托管应用、AI 和创意项目

## 先导入数据

我知道 App Store 很有吸引力。你可能已经浏览过，并选好了三款想试的应用。不过，如果能重新进行第一次设置，我会先处理好存储，再安装任何内容。这样能避免以后遇到麻烦。

先从硬盘开始。单盘是最简单的方案；两块相同硬盘组成 RAID 1，可以在不增加复杂度的情况下提供冗余；当你需要在保护数据的同时扩展空间时，RAID 5 可以覆盖三块或更多硬盘。USB 硬盘可以用作额外容量或便携存储。**[存储设置](./storage-setup "根据你的需求选择合适的 RAID 和存储配置")**页面会为每种场景匹配建议配置，**[RAID 选项](./raid-options "了解 RAID 级别和 JBOD，并按照分步说明完成设置")**则提供技术参考。

接下来，决定应用数据的存放位置。每个已安装应用都会将文件保存在设备中的某个位置。**[应用存储路径](./docker-app-paths "了解应用将数据存放在硬盘的什么位置，以及如何移动这些数据")**指南会告诉你具体位置，并说明以后如何将这些数据迁移到更大的硬盘。提前设置好，可以省去后续迁移应用数据的麻烦。

然后导入你的内容。**[手机备份](./phone-backup "通过 ZimaClient 自动将手机备份到 ZimaOS")**和**[电脑备份](./computer-backup "通过 Finder、文件资源管理器或同步功能将电脑备份到 ZimaOS")**覆盖你每天使用的设备；**[从其他 NAS 迁移](./synology-to-zimacube-migration "分阶段将文件从 Synology NAS 迁移到 ZimaOS")**和**[连接云盘](./cloud-drive-connect "将 Google Drive、Dropbox 或 OneDrive 连接到 ZimaOS 进行备份")**则处理最常见的两类数据来源。

这些指南以及更多内容都整理在“设置与存储”下的 **[ZimaOS 概览](./ "关于设置、存储和共享的 ZimaOS 文档概览")**中。完成这些之后，就可以随心安装了。你已经做好准备。
