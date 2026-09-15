---
title: 在 ZimaOS 上设置 Emby
seo_title: "ZimaOS 上的 Emby 服务器：安装并设置你的媒体库"
description: "在 ZimaOS 上安装 Emby 并设置你的媒体库。涵盖应用商店安装、设置向导、文件命名和映射额外文件夹。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

Emby 在 ZimaOS 应用目录中原生支持。查看 [Emby 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.emby)了解最新的应用详情。

Emby 能把一个装满视频文件的文件夹变成像流媒体服务一样的东西。它会读取你的电影和剧集，拉取海报和简介，并播放到手机、浏览器或电视应用上。

安装本身从 ZimaOS 应用商店只需几分钟。真正的工作在于决定文件存放的位置，以及告诉 Emby 如何读取它们。

## 安装之前

Emby 需要在硬盘上有两处空间。一处存放它自己的配置和海报图。另一处存放你的视频文件。

先设置好存储。如果你的硬盘尚未配置，[选择你的存储方案](../storage-setup "选择适合你需求的 RAID 或单盘存储方案") 介绍了 RAID 和单盘方案，以及哪种适合不断增长的媒体库。

然后确认应用数据存放的位置。应用默认写入系统盘，而媒体服务器在图片和元数据堆积后会迅速占满系统盘。[应用数据存放在哪里](../docker-app-paths "了解 Docker 容器路径以及 ZimaOS 应用数据的存放位置") 展示了如何在安装任何东西之前把应用数据指向你的存储阵列。

## 安装 Emby

从 ZimaOS 桌面打开 App Store，搜索 Emby。会返回一个结果，归类在 Zima App Store 的 Media 分类下。

![ZimaOS 应用商店搜索结果中 Media 分类下的 Emby 应用卡片](/images/app-store/emby-app-store-search.webp)

ZimaOS 包自带已映射好的存储。电影存放在 `/DATA/Media/Movies`，剧集存放在 `/DATA/Media/TV Shows`，两者都能在 Files 应用中访问；Emby 在容器内把它们读作 `/data/movies` 和 `/data/tvshows`。

点击 Install 并等待容器拉取完成。就绪后 Emby 会出现在你的桌面上，点击图标即可打开 Web 界面。

![ZimaOS 桌面上 Files、Backup、ZVM 和 Immich 旁的 Emby 应用图标](/images/app-store/emby-installed-on-dashboard.webp)

## 走一遍设置向导

首次启动会带你走完一个简短的向导。没有任何选项是日后难以修改的，所以不必过度纠结。

**语言。** 选择你的显示语言。它控制的是 Emby 界面，而不是媒体库的元数据语言——后者在创建每个媒体库时单独设置。

![Emby 设置向导欢迎界面中的首选显示语言下拉框](/images/app-store/emby-wizard-language.webp)

**用户和密码。** 创建你的第一个账号。这是存储在你自己服务器上的 Emby 账号，与 ZimaOS 登录相互独立。家里的每个人之后都可以拥有自己的账号，各自独立保存观看历史。

![Emby 向导中创建第一个用户账号并设置用户名和密码的界面](/images/app-store/emby-wizard-first-user.webp)

**完成。** 在用户界面和这个界面之间，向导会要求你设置媒体库，接下来两节会详细讲解。设置完成后，Emby 确认配置，开始首次扫描，点击 Finish 按钮即可进入仪表盘。

![Emby 向导最后确认设置完成并显示 Finish 按钮的界面](/images/app-store/emby-wizard-finished.webp)

## 添加文件之前先规范命名

Emby 通过读取文件和文件夹名称来识别媒体，然后与在线数据库匹配。规范的命名让你在首次扫描时就能得到正确的海报和简介。随意的命名会给你一个充满空白、需要手动修补的媒体库。

按照下面的布局，把文件复制到存储上的 Media 文件夹中。

```text
/DATA/Media/
  Movies/
    Arrival (2016)/
      Arrival (2016).mkv
    Dune (2021)/
      Dune (2021).mkv
  TV Shows/
    Severance/
      Season 01/
        Severance S01E01.mkv
        Severance S01E02.mkv
```

括号里的年份对电影很重要。重拍片会共用同一个片名，年份正是区分它们的依据。对剧集来说，SxxExx 模式是 Emby 用来把单集归入正确季的凭据。

电影和剧集要分别放在不同的顶层文件夹中。它们各自成为 Emby 中独立的媒体库，拥有各自的元数据规则。

## 创建你的第一个媒体库

向导会进入一个名为 Setup Media Libraries 的界面，此时还是空的。点击 New Library 打开定义媒体库的对话框。

![Emby 向导媒体库界面中零个媒体库及 New Library 按钮](/images/app-store/emby-wizard-new-library.webp)

内容类型选择 Movies，显示名称保持默认。在 Folders 下，`/data/movies` 已经列出，并指向你刚刚填充的 Movies 文件夹，所以无需再浏览选择。

![Emby New Library 对话框中的内容类型、已映射文件夹和媒体库设置](/images/app-store/emby-new-library-settings.webp)

接下来设置元数据语言和国家。这决定 Emby 请求片名和简介时使用的语言，与你在向导中选择的界面语言相互独立。

保持实时监控开启。Emby 会监视文件夹，新文件一到就自动收录，你无需每次添加电影都手动触发扫描。

再往下，开启从元数据下载器导入合集信息。Emby 会把属于同一系列的电影归组，这样《指环王》三部曲就能排在一起，而不是按字母顺序散落各处。

最后一个决定是海报图的存放方式。Emby 提供三个选项，它们并不互斥。

| 选项 | 作用 | 适用场景 |
|-|-|-|
| 将媒体图片保存到媒体文件夹 | 把海报和背景图写在视频文件旁边 | 希望图片随文件一起移动，或其他播放器也读取相同的文件夹 |
| 在元数据文件夹中保留缓存副本 | 把图片存放在 Emby 自己的数据文件夹中 | 默认选项。保持媒体文件夹整洁且加载快速 |
| 从互联网预下载图片 | 扫描时就抓取图片，而不是按需获取 | 大型媒体库，希望从第一次打开起浏览就流畅 |

点击 OK 保存媒体库。Emby 开始扫描，正常规模的收藏在一两分钟内就会陆续填上海报。

完成向导，在左侧边栏打开 Movies。每个被 Emby 匹配到的文件都已就位，附带海报、年份和简介。

![首次扫描完成后 Emby 电影库中带海报的一部影片](/images/app-store/emby-first-movie-scanned.webp)

## 从其他文件夹添加媒体

Emby 只能看到映射进容器的文件夹，在 ZimaOS 上就是 `/data/movies` 和 `/data/tvshows`。其他任何位置都不可见，无论是 USB 硬盘、第二个存储池，还是系统中其他地方的文件夹。这是媒体库扫描后空空如也的最常见原因。

映射一个文件夹只需要一分钟。回到 ZimaOS 桌面，右键点击 Emby 图标，选择 Manage。

![ZimaOS 应用菜单中 Emby 的 Manage、Logs、Stop 和 Restart 选项](/images/app-store/emby-app-manage-menu.webp)

面板会打开在 Volumes 上，Emby 已读取的文件夹以绑定挂载的形式列出。点击 Mount 旁的加号新增一行，然后用 Host 侧的文件夹按钮选择你想添加的内容。

![ZimaOS 中 Emby 容器设置的主机文件夹选择器在硬盘上打开](/images/app-store/emby-app-add-bind-mount.webp)

右侧的 Container 列是 Emby 看到的名称。给它起一个位于 `/data` 下的可辨识名称，然后保存并让应用重启。

![Emby 应用设置中新增绑定挂载并高亮容器路径](/images/app-store/emby-app-container-path.webp)

回到 Emby，从右上角的齿轮图标打开 Settings。在左侧边栏的 Emby Server 下点击 Library，然后点击 Movies 媒体库进行编辑。

![Emby 服务器设置中列出 Movies 媒体库及路径的 Library 页面](/images/app-store/emby-settings-library.webp)

点击 Folders 旁的 Add。Select Path 对话框会列出容器内存在的路径，滚动到新挂载的名称并确认。它会加入已有的文件夹，两者共同供给同一个媒体库。

![Emby Movies 媒体库设置中映射文件夹列表上方的 Add 按钮](/images/app-store/emby-library-add-folder.webp)

![Emby Select Path 对话框中列出容器文件夹及新挂载](/images/app-store/emby-select-path-dialog.webp)

![Emby Movies 媒体库设置中默认文件夹和新增文件夹并列](/images/app-store/emby-library-both-folders.webp)

以这种方式添加的文件夹与随应用自带的文件夹行为完全一致。实时监控、元数据和海报图都以同样的方式工作。

保存设置，从侧边栏打开 Movies。你刚映射的文件夹中的文件会与已扫描的内容并排出现。

![扫描完成后 Emby 电影库中带海报的数十部影片](/images/app-store/emby-movies-library-full.webp)

## 硬件转码

当客户端无法直接播放文件时，就会发生转码——Emby 即时转换视频格式。仅靠 CPU 时，一条 4K 流可能占满所有核心；有了 GPU，同样的任务几乎毫无负担。

硬件转码是 Emby Premiere 功能。如果你的客户端都能直接播放你的文件，你可能根本不需要它。

启用方法：

1. 打开 Emby **Settings** → **Transcoding**。
2. 开启 **Enable hardware acceleration when available**。
3. 选择与你的 GPU 匹配的解码器：ZimaCube 的集成显卡选择 **Intel Quick Sync Video**，通过 GPU 插槽安装的独立显卡选择 **NVIDIA NVENC**。
4. 保存后开始播放一条流，并在仪表盘中确认播放会话显示了硬件解码。

安装独立显卡参见 [GPU 扩展](../../hardware/gpu-expansion "为你的 ZimaCube 添加用于 AI 和转码的显卡")。ZimaOS 上 GPU 转码的实操示例参见 [Plex 与 GPU 转码](./plex-and-gpu-transcoding "在你的 ZimaOS 设备上为 Plex 启用 GPU 转码")。

## 遇到问题时

**扫描后媒体库是空的。** Emby 只读取映射进容器的路径。打开 ZimaOS 中的应用设置，确认媒体文件夹在卷列表中。缺失就添加，然后从 Emby 媒体库页面运行 Scan Library Files。

**海报和片名不对。** 这几乎总是命名问题。把文件重命名为 片名 (年份) 的格式并重新扫描。对顽固的文件，点击条目，选择 Identify，手动搜索正确的片名。

**播放卡顿或缓冲。** 播放文件时打开仪表盘。出现转码会话说明客户端无法读取原始格式，把该客户端设为直接播放，或把文件存储为它原生支持的格式。如果转码不可避免，查看上文的硬件转码一节。直接播放仍然卡顿，则问题指向网络。

**新文件不出现。** 某些配置下，实时监控会漏掉通过 SMB 复制进来的文件。手动触发 Scan Library Files；如果每次都这样，在 Settings 的 Scheduled Tasks 中安排定期扫描。

**重启后 Emby 无法访问。** 给容器一分钟的启动时间。如果仍然宕机，在 ZimaOS 的 Settings 和 Apps 中检查容器状态，并确认存放其配置的存储已挂载。

## 相关指南

Emby 很适合与让媒体库自动充实的工具搭配：

- [Radarr 安装](./radarr-setup "自动化电影下载，让媒体库保持更新") — 关注新片发布，并把文件归档到 Emby 已读取的文件夹中
- [Jellyfin 安装](./media-server-setup-with-jellyfin "在你的 NAS 上设置开源 Jellyfin 媒体服务器") — 没有付费档位的开源替代方案
- [Plex 安装](./plex-setup-guide "在你的家庭服务器上配置 Plex 媒体库和播放") — 设备支持最广泛的选择
- [DLNA 服务器](./dlna-server-setup "通过 DLNA 从你的 NAS 流式播放到旧电视和播放器") — 面向没有应用商店的旧电视
- [App Store 概览](../app-store/ "浏览 App Store 中媒体、自托管应用和 AI 的分类") — ZimaOS 上还能运行的其他内容

## 需要帮助？

如果你在 ZimaOS 上安装或使用 Emby 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.gg/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
