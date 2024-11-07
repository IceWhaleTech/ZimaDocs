---
title: 如何在 ZimaCube 上启用 Plex 硬件转码？
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Plex 和 GPU 转码
Plex 媒体服务器是一个多功能且受到广泛欢迎的平台，用于管理和流媒体传输您的媒体库。通过利用 Intel / NVIDIA GPU 的强大功能，可以显著提升其性能和转码能力。在本指南中，我们将为您详细讲解如何设置 Docker Plex 以实现 Intel / NVIDIA GPU 加速，从而实现高效的硬件转码和更好的媒体流传输。
## 为什么使用硬件加速流媒体？
为了在多种设备上流畅播放视频，Plex 媒体服务器通常需要将视频转换为不同的质量或兼容格式。视频的转换（转码）会在您播放时自动进行实时处理。使用 Plex 媒体服务器的免费软件转码，家庭计算机可以无缝地实时转换和流式传输视频到任何 Plex 应用。有些处理器更强大的计算机甚至可以同时流式传输多个视频，尤其是在较低质量时。

为了更快地转换视频并减少处理器的使用，您可以在 Plex 媒体服务器中打开硬件加速流媒体。当开启硬件加速时，Plex 媒体服务器将使用您计算机/设备中专用的视频解码器和编码器硬件支持来转换视频，让您能够更顺畅地流式传输 HD 或 4K 视频，并能同时向更多设备进行流媒体传输。而且，如果您在同一台计算机上进行工作和娱乐，硬件加速在视频流传输时使用的处理器能力更少，从而为您的其他活动恢复所需的速度。
## 硬件加速流媒体具有多个优势：
- 通常，可以同时流式传输更多视频。
- 视频可以更快开始流式传输，并且缓冲较少。
- 高质量视频，尤其是 4K 和 HEVC 视频，可以更流畅地进行流式传输。
- 通过将 CPU 密集型的转码任务卸载到专用硬件上，视频流传输对您的计算机性能的影响更小。
- 使用专用的视频解码/编码硬件更加节能，从而消耗更少的电力。

## 如何启用硬件加速流媒体？
>硬件加速流媒体是一个高级功能，需要有效的 Plex Pass 订阅。

### 1. 使用内置的 Intel GPU
ZimaCube 使用 Intel N100/1235U 处理器，这两款处理器都集成了 Intel 最新的集成 GPU，具有很强的硬件转码能力。
  - 从应用商店搜索并安装 Plex。（**如果之前已经安装，请更新到最新版本。建议进行全新安装。**）
  - 打开 Plex Web 应用。
  - 用拥有 Plex Pass 的帐户登录。
  - 导航到设置 > 服务器 > 转码器以访问服务器设置。
  - 在右上角开启“显示高级设置”以显示高级选项。
  - 开启“在可用时使用硬件加速”。
  - 选择硬件转码设备：Alder Lake....
![](https://manage.icewhale.io/api/static/docs/1727266956851_image.png)
  - 在底部点击“保存更改”。
  - 保存后，选择一部电影播放，并在播放设置中选择“自动转换”。
  - 通常，使用内置 GPU 进行转码时，其功耗将增加 4-8W，而 CPU 的功耗非常少。这非常令人兴奋。
![](https://manage.icewhale.io/api/static/docs/1727266979170_image.png)

| **之前**          | **之后**          |
|-------------------|-------------------|
| ![之前图片](https://manage.icewhale.io/api/static/docs/1727266997124_image.png) | ![之后图片](https://manage.icewhale.io/api/static/docs/1727267013579_image.png) |

### 2. 使用 Nvidia GPU
如果您有一个内置 NVIDIA GPU 的 ZimaCube pro，或者您自己安装了 NVIDIA GPU，可以按照以下步骤进行设置：
  - 建议进行全新安装。
  - 有关当前 ZimaOS 支持的 NVIDIA GPU 列表，请参见 https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html 中的当前 NVIDIA GPU 部分。
  - 在 ZimaOS 仪表板中找到 Plex 应用，点击右上角的三个点，然后在下一个菜单中点击“设置”。
  - 在设置中将 NVIDIA_VISIBLE_DEVICES 设置为 all 的环境变量，并保存。
![](https://manage.icewhale.io/api/static/docs/1727267065118_image.png)
  - 导航到设置 > 服务器 > 转码器以访问服务器设置。
  - 在右上角开启“显示高级设置”以显示高级选项。
  - 开启“在可用时使用硬件加速”。
  - 选择硬件转码设备：未知 (NVIDIA)
   ![](https://manage.icewhale.io/api/static/docs/1727267082104_image.png)
  - 在底部点击“保存更改”。
  - 保存后，选择一部电影播放，并在播放设置中选择“自动转换”。
  - 通常，使用 NVIDIA GPU 进行转码时，其功耗将增加 10-25W。同时，它不会消耗 CPU 的计算能力。这非常令人兴奋。
  - 尽管功耗高于内置 GPU，但由于 NVIDIA GPU 的出色性能，它能够更快地处理高分辨率转码，并能同时处理多个视频流。
![](https://manage.icewhale.io/api/static/docs/1727267123811_image.png)


| **之前**          | **之后**          |
|-------------------|-------------------|
| ![之前图片](https://manage.icewhale.io/api/static/docs/1727267241180_image.png) | ![之后图片](https://manage.icewhale.io/api/static/docs/1727267268401_image.png) |

## 总结 
这两种解决方案均能有效支持 Plex 的硬件加速流媒体。选择 NVIDIA 还是 Intel GPU 取决于您的具体需求和预算。如果您需要处理高分辨率视频或多个流，NVIDIA GPU 可能是更好的选择。如果您更关注成本和功耗，Intel GPU 可能更合适。