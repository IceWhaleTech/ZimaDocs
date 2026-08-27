---
title: 手机备份
seo_title: "使用 ZimaOS 备份手机：自动备份照片和文件"
description: "使用 ZimaClient 将手机备份到 ZimaOS。自动备份照片和文件，选择 iOS 相册，并指定自己的存储空间。所有内容都可在一个资料库中浏览。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

要不要备份照片，通常不是人们纠结的问题。真正的麻烦会在几年后出现：抽屉里放着三部旧手机，云服务账单也随着照片库悄悄上涨。使用自己的设备，可以写出不同的结局：你用过的每部手机中的照片都会汇聚到一个资料库中，整个故事都保存在同一个地方。

## 开始前

ZimaOS 设备需要开机并连接网络。首次连接时，手机和设备应连接到同一个 Wi-Fi。请准备好 ZimaOS 账户和密码。如果设备刚刚开箱，请先按照**[入门指南](./get-started "通过 ZimaClient 和账户创建，从首次启动开始设置 ZimaOS")**完成设置。

## 安装 ZimaClient

从 App Store 获取 **[iOS](https://www.zimaspace.com/zimaos/download "从 App Store 下载 ZimaClient iOS 应用")** 版 ZimaClient，或从 Google Play 获取 **[Android](https://www.zimaspace.com/zimaos/download "从 Google Play 下载 ZimaClient Android 应用")**版，然后打开应用。

## 登录并连接

1. 打开 ZimaClient。它会扫描本地网络，并列出找到的运行 ZimaOS 的 NAS 设备。

![ZimaClient 设备发现界面，显示在本地网络中找到的运行 ZimaOS 的 NAS 设备](/images/guides/zimaclient-device-discovery.jpg)

2. 点击你的设备，使用 ZimaOS 账户登录。

![ZimaClient 登录界面，显示 ZimaOS 账户用户名和密码字段](/images/guides/zimaclient-sign-in.jpg)

首次登录后，手机即与设备绑定。

{% note tip 远程访问 %}
远程访问会自动设置，因此离开家后备份仍可继续运行，但你需要先在 ZimaOS 设备的**设置 > 网络**中启用远程访问功能。
{% endnote %}

如果你运行多台 ZimaOS 设备，可以为每台设备设置自定义图标，以便一眼区分不同的家庭服务器。在 ZimaOS 仪表板中打开**设置 > 常规**，点击**设备信息**旁的配置按钮。选择一些有个性的图标。我们其中一台使用了经典专辑封面上的脉冲星波纹，因为家庭服务器永远都在随着数据跳动。

<div style="display:flex; align-items:stretch; gap:16px;">
  <img src="/docs/images/guides/zimaclient-device-icons.png" alt="ZimaOS“设置 > 常规”页面，显示自定义设备图标，其中一个采用脉冲星波纹专辑封面风格" style="flex:0 0 62%; max-width:62%; height:auto;">
  <img src="/docs/images/guides/zimaclient-phone-device-icon.jpg" alt="ZimaClient 手机界面，显示配置了自定义图标的运行 ZimaOS 的 NAS 设备" style="flex:0 0 30%; max-width:30%; object-fit:cover; object-position:top;">
</div>

## 选择要备份的内容

从 iOS 照片库中选择要备份的相册。你可以只选特定相册，而不是整个照片库；如果不希望备份截图和下载内容，可以将它们排除。

先从备份设置开始，选择备份包含哪些内容。然后逐一查看相册，选出重要的部分。

<div style="display:flex; align-items:flex-start; justify-content:center; gap:40px;">
  <img src="/docs/images/guides/zimaclient-album-backup-setting.png" alt="ZimaClient 备份设置页面，显示照片备份所包含内容的选项" style="flex:0 0 42%; max-width:42%; height:auto;">
  <img src="/docs/images/guides/zimaclient-album-selection.png" alt="ZimaClient 相册选择界面，列出带复选框的 iOS 照片相册" style="flex:0 0 42%; max-width:42%; height:auto;">
</div>

## 选择目标位置

系统会自动创建默认目标位置。拥有自己的存储空间后，请将备份指向该位置，例如 RAID 阵列或专用硬盘，而不是 ZimaOS 系统盘。系统盘通常容量最小，照片很快就会将其填满。有关存储空间规划，请参阅**[存储设置](./storage-setup "根据你的需求选择合适的 RAID 和存储配置")**。

## 开始备份

确认并开始。首次备份需要传输所有已选内容，因此耗时最长。后续备份只传输发生变化的内容。

![ZimaClient 备份确认界面，首次运行前显示开始按钮](/images/guides/zimaclient-backup-start.webp)

从手机上看，备份后的效果如下：照片预览，以及在详细视图中打开的照片。

<div style="display:flex; align-items:flex-start; justify-content:center; gap:40px;">
  <img src="/docs/images/guides/zimaclient-photo-preview.webp" alt="ZimaClient 照片预览界面，可从手机浏览已备份的照片" style="flex:0 0 42%; max-width:42%; height:auto;">
  <img src="/docs/images/guides/zimaclient-photo-detail.webp" alt="ZimaClient 照片详细视图，全屏打开一张已备份照片" style="flex:0 0 42%; max-width:42%; height:auto;">
</div>

备份选项还不止这些。iOS Live Photos 可以在保留动态效果的情况下传输；自动备份和使用蜂窝数据备份都只需切换开关；目标位置的可用空间也会直接显示，让你随时知道还剩多少容量。

<img src="/docs/images/guides/zimaclient-more-options.png" alt="ZimaClient 备份选项，显示 Live Photo 支持、备份开关和目标位置可用空间" style="display:block; margin:0 auto; width:35%; height:auto;">

## 关联文件夹

**关联文件夹**选项可以将备份指向 ZimaOS 上已经存在的文件夹。通过这种方式，手机之外的内容也能加入同一个资料库。

想想你已经拥有的那些文件夹：专业相机或运动相机拍摄的素材、旧手机备份，或从旧电脑复制过来的档案。关联任意文件夹后，其中的内容就会出现在手机上的 ZimaClient 中，并与其他备份内容整理在一起。一个资料库，一个地方即可浏览所有内容。

## 备份速度

在健康的本地网络中，手机理论上可以用满 50 MB/s 以上的传输带宽。实际速度主要取决于一件事：Wi-Fi。

**Wi-Fi 质量是最重要的因素。** 靠近路由器的 5 GHz 连接，远快于隔着房间的 2.4 GHz 连接。距离、墙壁和拥挤的信道都会降低速度。在路由器附近使用 5 GHz，比其他任何可配置项都更有效。

其他因素很少成为瓶颈。设备的网络端口比手机的 Wi-Fi 路径更快，因此不会拖慢传输。硬盘的读写速度可达 100 MB/s 或更高，明显高于手机连接能够推送的速度。实际使用中，手机自身性能也不是问题。

{% note tip ZimaOS 小文件优化 %}
照片库主要由小文件组成，而 ZimaOS 正是为这种场景而设计。接收端深度优化了小文件传输，因此成批的截图、短视频和连拍照片，与大型视频一样传输流畅。
{% endnote %}

实用结论很简单：首次进行大规模备份时，将手机放在路由器旁边，并让备份运行完成。

## 实用提示

{% note tip %}
- 首次大规模备份请使用 Wi-Fi，而不要使用蜂窝数据，以免触及流量上限。
- 更换手机前，打开一次 ZimaClient，并让它完成最后一次备份。
- 每位家庭成员都使用自己的 ZimaOS 账户登录，因此每个人的照片都会留在各自的资料库中。需要汇总时，可以使用**[家庭照片库](./family-photo-library "在 ZimaOS 上用每个人的照片构建家庭照片库")**将它们聚合起来。
- 如果备份停滞，靠近路由器可以解决大多数情况。
{% endnote %}

## 下一步

- **[电脑备份](./computer-backup "通过 Finder、文件资源管理器或同步功能将电脑备份到 ZimaOS")** — 也把笔记本电脑纳入备份
- **[照片预览](./photos-preview "以网格、瀑布流和两端对齐模式浏览 ZimaOS 照片")** — 导入后浏览整个资料库
- **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份原则保护数据")** — 一份备份并不等于一套计划
