---
title: Immich的指南：高效照片备份的逐步操作！
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

## 介绍
Immich 以其简单的网页界面和智能功能，为您提供了一个完美的平台来组织和分享您珍贵的照片和视频。ZimaOS 以其直观的操作和强大的数据保护能力，为NAS用户、专业人士和创意工作室带来了革命性的体验。它简化了Docker应用程序的安装，只需点击几下即可完成。
将Immich与ZimaOS结合，您将获得一个强大且易于使用的解决方案。让我们来探讨如何在ZimaOS上轻松享受Immich的便捷功能。
![](https://manage.icewhale.io/api/static/docs/1730269774466_image.png)
## 安装与配置
1. **下载并安装Immich应用**
您可以从ZimaOS应用商店下载最新版本的Immich应用。下载完成后，双击安装文件，按照屏幕上的说明完成安装。
![](https://manage.icewhale.io/api/static/docs/1730269866832_copyImage.jpeg)![](https://manage.icewhale.io/api/static/docs/1730269868372_copyImage.png)
2. 创建用户账户
安装完成后，启动应用。在启动屏幕上，选择“创建新用户”，并按照提示输入必要的用户信息以完成注册。
![](https://manage.icewhale.io/api/static/docs/1730269926591_image.png)
![](https://manage.icewhale.io/api/static/docs/1730269940085_image.png)
进入主页：
![](https://manage.icewhale.io/api/static/docs/1730269963189_image.png)
3. 配置服务器连接
在手机上下载并打开Immich应用（以iPhone为例）。
输入服务器地址和端口号以登录。请确保服务器地址和端口号输入正确。
![](https://manage.icewhale.io/api/static/docs/1730270062733_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1730270082792_copyImage.jpeg)![](https://manage.icewhale.io/api/static/docs/1730270083467_copyImage.jpeg)
## 如何使用
1. 开始备份
- 打开Immich应用的主页。
- 点击“备份”按钮，选择您想要备份的照片或视频。
- 选择文件后，点击“开始备份”，应用将开始将您的文件上传到服务器。
![](https://manage.icewhale.io/api/static/docs/1730270241632_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270251463_image.png)
2. 查看备份文件
备份完成后，您可以在应用的主页查看所有已上传的照片和视频。
![](https://manage.icewhale.io/api/static/docs/1730270310188_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270325913_image.png)
## 高级功能：AI搜索
Immich的面部识别功能使用先进的AI技术，自动识别和分类照片中的人物，大大提高了照片管理和搜索的效率。这使得用户能够轻松浏览和查看按人整理的照片集合。
![](https://manage.icewhale.io/api/static/docs/1730270365044_image.png)
同时，在主界面上，使用搜索框输入关键词，AI将帮助您快速定位所需文件。这样可以帮助用户快速准确地找到存储在服务器上的特定照片或视频。
![](https://manage.icewhale.io/api/static/docs/1730270384165_image.png)
## 地图显示
Immich还支持地图标记功能，用户可以在地图上标记特定位置，方便快速定位和浏览在该位置拍摄的所有照片和视频。
![](https://manage.icewhale.io/api/static/docs/1730270408893_image.png)
## 高级设置
1. **配置备份选项**
![](https://manage.icewhale.io/api/static/docs/1730270441373_image.png)
在“备份选项”设置界面，您可以配置以下备份功能：
- **自动前台备份**：打开此功能后，每次打开应用时，应用将自动将新媒体文件上传到服务器。
- **自动后台备份**：启用此功能后，即使应用未打开，应用也将在后台运行并自动备份新媒体文件。
- **忽略iCloud照片**：如果启用，您可以选择不将存储在iCloud中的照片上传到服务器。
- **同步相册**：允许用户将所有上传的视频和照片同步到指定的备份相册。
您可以根据需要进行设置。
2. **存储文件位置设置**
在设置中，您可以更改选择存储文件的路径信息。
![](https://manage.icewhale.io/api/static/docs/1730270501295_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270511744_image.png)
链接：如何理解路径配置：https://community.zimaspace.com/t/tutorial-how-to-understand-docker-apps-paths-on-zimaos-take-plex-as-an-example/3395
3. **存储文件命名规则**
存储模板是一种工具，用于在Immich应用中定义和标准化文件的存储路径和文件名。通过这种方式，您可以根据需要自定义文件的组织，这将便利您后续的数据管理和检索效率。
有关更多详细信息，请访问：https://immich.app/docs/administration/storage-template/
![](https://manage.icewhale.io/api/static/docs/1730270568147_image.png)
## 常见问题
1. 如何在ZimaOS上找到备份的照片文件？
当您未设置存储模板时，可以在设置中查看您的存储路径。根据路径打开，如下所示：
![](https://manage.icewhale.io/api/static/docs/1730270615131_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270625991_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270635201_image.png)
当您设置了存储模板时，照片文件的组织和搜索将更加直观和方便。您可以直接根据存储模板的类别浏览和查找您的照片文件。
![](https://manage.icewhale.io/api/static/docs/1730270689535_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270699458_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270702487_image.png)
通过这些步骤，您可以轻松找到备份在ZimaOS上的照片文件，无论是使用默认路径还是自定义存储模板。

2. 当您的磁盘容量不足时，如何将先前的数据迁移到新磁盘？
a. 数据迁移
点击“设置”中的数据迁移，选择库迁移，图库、文档、媒体和备份将自动迁移到目标位置。
![](https://manage.icewhale.io/api/static/docs/1730272017160_image.png)

b. 手动迁移！
您也可以直接将图库文件夹复制到目标位置，步骤如下：
- 禁用Immich应用
- 将图库复制到目标位置
- 然后修改应用中immich-server下的Volumes目录到修改后的目录
- 重新启动Immich
![](https://manage.icewhale.io/api/static/docs/1730271838216_image.png)