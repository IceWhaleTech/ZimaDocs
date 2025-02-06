---
title: How to Create a Home Media Center with ZimaCube and DLNA？
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Introduction
In this digital age, home entertainment systems are becoming more and more intelligent and interconnected. As a high-performance personal cloud storage device, ZimaCube not only provides a large-capacity storage solution, but also supports the DLNA (Digital Living Network Alliance) protocol, allowing you to easily share and play any multimedia content in your home network.

This tutorial will guide you on how to set up ZimaCube as a DLNA server and use XX TV as a client to achieve a seamless media playback experience.

Before you start, make sure you have downloaded and installed the latest version of ZimaOS: https://github.com/IceWhaleTech/ZimaOS/releases
## Step 1: Open Settings and enter "Developer mode"
![](https://manage.icewhale.io/api/static/docs/1738831331021_image.png)
## Step 2: Enable DLNA
In the "**Developer mode**" interface, find the "**DLNA**" switch and make sure it is enabled.
![](https://manage.icewhale.io/api/static/docs/1738831393315_image.png)
## Step 3: Configure DLNA settings
Click "**DLNA Configuration**" to enter the settings interface. You can modify the following two options:
- **Friendly name:** The default is "ZimaCube DLNA Server", you can customize a name that suits you better.
- **Media Path:** The default path is `/media`, you can **modify it to other storage paths** as needed.


| ![](https://manage.icewhale.io/api/static/docs/1738831857738_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738831871432_image.png) |
| - | - |

After completing the modification, click the "**Save**" button.
## Step 4: Play content on TV
1. Open a TV device or player app that supports DLNA
![](https://manage.icewhale.io/api/static/docs/1738831977224_image.png)
2. Search the DLNA devices on the network and find "ZimaCube DLNA Server".
![](https://manage.icewhale.io/api/static/docs/1738832005480_image.png)
3. Browse the shared media file and select Play.

| ![](https://manage.icewhale.io/api/static/docs/1738832059024_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832067952_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832081469_image.png) |
| - | - | - |

## Troubleshooting
If you have problems with connection or playback, please check the following points:
- Make sure ZimaCube and TV are in the same LAN.
- Check if the media file format is compatible with the TV device.
- Make sure there are playable media files in the shared folder.

## Additional Notes
Since different brands of smart TVs may have different interfaces and functions, please refer to the DLNA usage guide for your TV brand.

## Summarize
With simple steps, you can now easily share and enjoy HD videos and music in your home network. Hope this can help you build a smart home entertainment system!