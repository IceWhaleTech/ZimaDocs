---
title: How to setup an emby server on ZimaOS?
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
John, a movie enthusiast, wanted to build his dream home theater. However, he struggled to organize his growing collection of films and TV shows across multiple devices.
 He found existing solutions either too complex to set up or lacking the performance needed for smooth playback. That’s when he discovered Emby, a powerful media server that not only simplified his setup but also enhanced his viewing experience. 
However, like many users, John faced challenges with certain configurations and features. This article explores how pairing Emby with ZimaOS or CasaOS can solve these challenges. It shows how users like John can build a seamless and efficient home theater system.

## About Emby Media Server
**Emby Media Server** is a powerful tool for managing personal video, audio, TV shows, and movie content. It organizes local and online media into easy-to-browse libraries, supporting multi-device access and streaming.
Emby allows you to share content across devices and ensures smooth playback with its powerful transcoding features. It also supports add-ons for automatic downloads, metadata updates, and subtitles.
As a home theater solution, Emby offers flexible options and an easy streaming experience.

## Deployment convenience: from installation to use
In today's home theater environment, the convenience of deploying and using a media server is essential. For ZimaOS, users can install and deploy it in a simple way. ZimaOS makes installation easy by allowing you to download and install directly from the App Store. Unlike other complex server software, it eliminates the need for tedious configuration steps.
### Quick Deployment Guide
1. **Search for Emby**
We provide two versions of the app:
**Normal version**: This version lacks support for discrete graphics cards (GPU).
**GPU version**: This version is designed to work with dedicated GPUs. Its offering enhanced performance for demanding tasks and smoother media processing.
You can choose to download and install the corresponding version according to your personal needs. Here we choose the normal version.

<div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
  <img src="https://manage.icewhale.io/api/static/docs/1733898121660_copyImage.png" alt="Image 1" style="width: 45%; height: auto;">
  <img src="https://manage.icewhale.io/api/static/docs/1733898136560_image.png" alt="Image 2" style="width: 45%; height: auto;">
</div>

2. Set **language**
![](https://manage.icewhale.io/api/static/docs/1733898456976_image.png)

3. Create a **user** and set a **password**
![](https://manage.icewhale.io/api/static/docs/1733898467306_image.png)

4. **Configure remote access** and check **Enable automatic port mapping**
![](https://manage.icewhale.io/api/static/docs/1733898487602_image.png)

5. Complete the **configuration**
![](https://manage.icewhale.io/api/static/docs/1733898734330_image.png)

## Content management through Files
1. Import your film and television resources into the corresponding folder (here we use media/movies as an example)

2. In emby, click **Settings** in the upper right corner and scroll down to find Library

<div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
  <img src="https://manage.icewhale.io/api/static/docs/1733898803658_image.png" alt="Image 1" style="width: 45%; height: auto;">
  <img src="https://manage.icewhale.io/api/static/docs/1733898814780_image.png" alt="Image 2" style="width: 45%; height: auto;">
</div>

3. Click **New Library** and follow the steps below to configure our media library

![](https://manage.icewhale.io/api/static/docs/1733898861871_image.png)

- Click **Add** to add a media library folder
![](https://manage.icewhale.io/api/static/docs/1733898935344_image.png)

- Select the appropriate folder as the media library folder in **Folder**
![](https://manage.icewhale.io/api/static/docs/1733898989858_image.png)

- Select the appropriate **language** and country, and **enable real-time monitoring** of changes to files by default.
![](https://manage.icewhale.io/api/static/docs/1733899008619_image.png)

- Enable **import collection information from metadata downloaders**, it will import collection information from enabled metadata downloader.
![](https://manage.icewhale.io/api/static/docs/1733899046613_image.png)


- Choose the option that best suits your needs.
  ![](https://manage.icewhale.io/api/static/docs/1733900275276_image.png)
{% note warn Note: %}The above options are the best configurations we recommend based on various requirements. You can choose the configuration options that suit you according to your specific needs.
Here are **three** options for managing media images:
1. Save media images to media folder: Places images next to the media files, allowing easy access outside Emby.
2. Keep a cached copy in the metadata folder: Stores images in a server folder for quick access.
3. Pre-download images from the internet: Downloads images before displaying the media in Emby.
{% endnote %}

- This completes the creation of the media library
  ![](https://manage.icewhale.io/api/static/docs/1733900340972_image.png)
4.  Now we have created our own media library. Click Home on the left to enter the homepage and watch our film and television resources.
  ![](https://manage.icewhale.io/api/static/docs/1733900362242_image.png)
  ![](https://manage.icewhale.io/api/static/docs/1733900376347_image.png)
If you have an external storage device that you want to use on ZimaCube, you can refer to the following method:
1. Connect and mount the external disk to ZimaCube
First, connect your external disk to ZimaCube. Make sure the device can recognize the disk and mount it correctly. Use the ZimaOS management interface or command line to confirm the successful connection of the external disk.
2. Configure Emby to use an external disk
- Find the target folder in the external disk and check the address
  ![](https://manage.icewhale.io/api/static/docs/1733900396116_image.png)
  ![](https://manage.icewhale.io/api/static/docs/1733900403879_image.png)
- Configure this address to Emby
  ![](https://manage.icewhale.io/api/static/docs/1733900415693_image.png)
After re-entering Emby, click Add to create a media library folder. This will allow you to locate and select the address of the external storage.
![](https://manage.icewhale.io/api/static/docs/1733900433853_image.png)

## Transcoding performance
Transcoding in Emby Server is resource-intensive, especially for high-quality videos. Despite hardware-accelerated transcoding (e.g., Intel Quick Sync, NVIDIA NVENC), challenges include:
- **Compatibility**: Some GPUs may not work with Emby.
- **Resources**: High-resolution videos need strong CPU/GPU power, risking slowdowns or crashes.
- **Efficiency**: Speed varies with GPU, drivers, and settings.
### Improving Performance
1. Enable hardware acceleration in Emby settings.
2. Optimize settings like video quality and resolution.
3. Monitor usage with tools like intel-gpu-top.
### ZimaBlade vs. ZimaCube
ZimaCube excels in high-resolution transcoding with its powerful GPU, while ZimaBlade is better for basic video playback.
ZimaCube
![](https://manage.icewhale.io/api/static/docs/1733900490633_image.png)
ZimaBlade
![](https://manage.icewhale.io/api/static/docs/1733900499324_image.png)

## Summarize
In this tutorial, you’ve installed and configured Emby, enabling you to manage and play your media content. To enhance your experience, you can pair Emby with tools like:
- **Sonarr**: Automatically finds, downloads, and updates TV episodes.
- **Radarr**: Manages and updates your movie collection.
These tools keep your library up to date, saving time and effort.

You can access your media on multiple devices:
- **On TV**: Download the Emby app from your smart TV app store. Connect it using your server’s IP address, then start watching.
- **On mobile**: Download the Emby app for Android or iOS. Connect using your server’s IP or the auto-search feature to start enjoying your media.
Emby helps you create a private multimedia cloud, offering easy access to your content anytime, anywhere.