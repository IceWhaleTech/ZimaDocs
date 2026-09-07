---
title: 远程访问
seo_title: "ZimaOS 远程访问：随时随地连接家庭服务器"
description: "ZimaOS 远程访问的工作原理：加密点对点连接、自动选择最快路径、设备远程 ID、多设备切换，以及标准协议选项。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---
远程访问是你每天使用却不曾察觉的安静功能。家庭服务器留在家里，而你在咖啡馆、办公室或另一个国家访问它。连接在你首次登录的那一刻就已经建立好了。

## 远程访问的工作原理

ZimaClient 和 ZimaOS 会在你的设备与家庭服务器之间建立一条**加密的点对点**通道。数据直接从一端传输到另一端。**中间没有任何第三方服务器**，也没有人能读取通道中经过的内容。

![手机与 ZimaOS 家庭服务器之间的加密点对点通道示意图](/images/guides/remote-access-how-it-works.webp)

连接还会自动选择最快的路径。在家里时走本地局域网，插上 Thunderbolt 就切换到直连电缆，离开家后通过互联网或热点工作。这些都不需要你配置。ZimaClient 会找到最快的路径并自动选择它。

控制权始终在设备上。ZimaOS 为远程连接运行自己的网络控制器，任何外部方都不拥有你网络的管理权限。ZimaOS 不会收集、存储或访问你的文件、连接日志或使用数据。

你也可以彻底关闭远程访问。在仪表盘中打开**设置 > 网络**并关闭开关。远程连接随即停止，而家庭网络和本地连接照常工作。想重新打开通道时，随时可以再次开启。

## 从手机和电脑连接

新设备上的首次登录会完成所有设置。之后连接就是自动的。打开 ZimaClient 即已连接，无论在家还是在外。如果设备刚开箱，请先按照**[入门指南](./get-started "通过 ZimaClient 和账户创建，从首次启动开始设置 ZimaOS")**完成设置。

打开客户端，你得到的不仅是连接。设备面板显示家庭服务器的 IP 和连接状态，还有一个按钮可以一键打开 ZimaOS 仪表盘。无论你在哪里，仪表盘都只需轻点一下。

![ZimaClient 设备面板显示家庭服务器 IP、连接状态和仪表盘按钮](/images/guides/zimaclient-connection-info.png)

在手机上，同一个客户端承载着你日常使用的功能。文件和照片让内容触手可及，离开家后备份依然继续运行。参见**[手机备份](./phone-backup "使用 ZimaClient 将手机照片和文件自动备份到 ZimaOS")**和**[照片](./photos "按时间线、地图和合集浏览 ZimaOS 照片库")**。

在电脑上，ZimaClient 将存储挂载到 Finder 或文件资源管理器中，并持续运行你的备份文件夹。完整流程参见**[电脑备份](./computer-backup "通过 Finder、文件资源管理器或同步任务将电脑备份到 ZimaOS")**。

## 设备的远程 ID

远程 ID 是设备在远程连接中的唯一身份。其他人通过它访问你的设备，所以请像保管共享文件夹的密码一样保管它。

要找到它，打开 ZimaOS 仪表盘的**设置**，切换到**网络**选项卡，然后复制远程 ID。

![ZimaOS 设置网络选项卡显示设备远程 ID 及复制选项](/images/guides/remote-id-location.webp)

关于安全保管，有两件事需要了解：

- 如果远程 ID 泄露，你的共享文件夹可能会暴露。请勿把它交给他人。
- 如果怀疑已泄露，点击远程 ID 旁边的 **...** 按钮进行重置。泄露的 ID 会立即失效。现有的连接和共享也会失效，因此重置后设备需要重新连接。

![ZimaOS 设置网络选项卡显示设备远程 ID 的重置选项](/images/guides/remote-id-reset.png)

## 多设备

拥有多台 ZimaOS 设备是常态而非例外。ZimaClient 会列出所有设备，在设备列表中轻点一下即可切换。

![ZimaClient 设备列表显示多台可切换的 ZimaOS 家庭服务器](/images/guides/zimaclient-device-switch.png)

给每台设备设置专属图标，方便一眼区分。在 ZimaOS 仪表盘中打开**设置 > 常规**，点击**设备信息**旁边的设置按钮。图标随设备走，因此客户端会在你使用的每个屏幕上显示相同的身份。

![ZimaOS 设置常规页面显示自定义设备图标，其中一个采用脉冲星波纹专辑封面风格](/images/guides/zimaclient-device-icons.png)

对于第二台电脑，Connect ID 覆盖了设备不在身边的情况。使用 Connect ID 登录而不是本地扫描，连接方式完全相同。更多信息参见**[功能一览](./features "了解 ZimaOS 的远程访问、存储和应用功能")**。

## ZimaClient 还是标准协议

ZimaClient 是内置方案。登录后远程连接即可使用，无需在网络上做任何设置。连接是点对点的，数据直接在设备之间传输。

如果你希望连接基于开放协议运行，官方 App Store 中有四款应用可供选择：Tailscale、WireGuard Easy、Firefly 和 NetBird。使用你自己的账户或密钥，即可通过 Linux、Android 等平台上的标准客户端连接。完整的对比和设置步骤请参阅 **[Tailscale 与 WireGuard 远程访问](./app-store/tailscale-wireguard-remote-access "使用 Tailscale 或 WireGuard 为你的家庭服务器设置远程访问")**。

## 下一步

- **[下载 ZimaClient](./zimaclient-install "在桌面端和移动端安装并设置 ZimaClient，以访问设备")** — 覆盖你随身携带的每台设备
- **[Tailscale 与 WireGuard 远程访问](./app-store/tailscale-wireguard-remote-access "使用 Tailscale 或 WireGuard 为你的家庭服务器设置远程访问")** — 标准协议路线
- **[SMB 文件共享](./smb-troubleshooting "通过 SMB 共享文件，使其显示在 Finder 和文件资源管理器中")** — 局域网内的共享
