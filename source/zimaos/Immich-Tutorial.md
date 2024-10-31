---
title: Immich's Guide： Step-by-step to efficient photo backup!
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

## Introduction
Immich, with its simple web interface and smart features, provides you with a perfect platform to organize and share your precious photos and videos. ZimaOS, with its intuitive operation and powerful data protection capabilities, brings a revolutionary experience to NAS users, professionals and creative studios. It simplifies the installation of Docker applications and can be completed with just a few clicks.
Combine Immich with ZimaOS and you will get a powerful and easy-to-use solution. Let's explore how to easily enjoy the convenience of Immich on ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1730269774466_image.png)
## Installation and Configuration
1. **Download and install the Immich app**
You can download the latest version of the Immich app from the ZimaOS App Store. Once downloaded, double-click the installation file and follow the on-screen instructions to complete the installation.
![](https://manage.icewhale.io/api/static/docs/1730269866832_copyImage.jpeg)![](https://manage.icewhale.io/api/static/docs/1730269868372_copyImage.png)
2. Create a user account
After installation, launch the application. On the launch screen, select "Create New User" and follow the prompts to enter the necessary user information to complete the registration.
![](https://manage.icewhale.io/api/static/docs/1730269926591_image.png)
![](https://manage.icewhale.io/api/static/docs/1730269940085_image.png)
Go to the main page:
![](https://manage.icewhale.io/api/static/docs/1730269963189_image.png)
3. Configure server connection
Download and open the Immich app on your phone (using iPhone as an example).
Enter your server address and port number to log in. Please make sure that the server address and port number are entered correctly.
![](https://manage.icewhale.io/api/static/docs/1730270062733_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1730270082792_copyImage.jpeg)![](https://manage.icewhale.io/api/static/docs/1730270083467_copyImage.jpeg)
## How to use
1. Start backup
- Open the main page of the Immich app.
- Click the "Backup" button and select the photos or videos you want to back up.
- After selecting the files, click "Start backup" and the app will start uploading your files to the server.
![](https://manage.icewhale.io/api/static/docs/1730270241632_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270251463_image.png)
2. View backup files
After the backup is complete, you can view all uploaded photos and videos on the main page of the app.
![](https://manage.icewhale.io/api/static/docs/1730270310188_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270325913_image.png)
## Advanced Features: AI Search
Immich’s face recognition feature uses advanced AI technology to automatically identify and classify people in photos, greatly improving the efficiency of photo management and search. This allows users to easily browse and review photo collections organized by person.
![](https://manage.icewhale.io/api/static/docs/1730270365044_image.png)
At the same time, on the main interface, use the search box to enter keywords, and AI will help you quickly locate the files you need. This can help users quickly and accurately find specific photos or videos stored on the server
![](https://manage.icewhale.io/api/static/docs/1730270384165_image.png)
## Map display
Immich also supports map marking function, users can mark specific locations on the map, convenient for quick positioning and browsing of all photos and videos taken at that location.
![](https://manage.icewhale.io/api/static/docs/1730270408893_image.png)
## Advanced settings
1. **Configure backup options**
![](https://manage.icewhale.io/api/static/docs/1730270441373_image.png)
In the "Backup Options" settings interface, you can configure the following backup features:
- **Automatic foreground backup**: After turning on this feature, the app will automatically upload new media files to the server every time you open the app.
- **Automatic background backup**: Enabling this feature allows the app to run in the background and automatically back up new media files even if the app is not open.
- **Ignore iCloud photos**: If enabled, you can choose not to upload photos stored in iCloud to the server.
- **Sync albums**: Allow users to sync all uploaded videos and photos to the specified backup album.
You can set it according to your needs.
2. **Storage file location settings**
In the settings, you can change the path information for selecting storage files.
![](https://manage.icewhale.io/api/static/docs/1730270501295_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270511744_image.png)
Link: How to understand path configuration: https://community.zimaspace.com/t/tutorial-how-to-understand-docker-apps-paths-on-zimaos-take-plex-as-an-example/3395
3. **Storage file naming rules**
The storage template is a tool used in the Immich app to define and standardize the storage path and file name of files. In this way, you can customize the organization of files according to your needs, which will facilitate your subsequent data management and retrieval efficiency.
For more detailed information, please visit: https://immich.app/docs/administration/storage-template/
![](https://manage.icewhale.io/api/static/docs/1730270568147_image.png)
## FAQ
1. How to find the backed-up photo files on ZimaOS?
When you have not set a storage template, you can check your storage path in the settings. Open it according to the path, as follows:
![](https://manage.icewhale.io/api/static/docs/1730270615131_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270625991_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270635201_image.png)
When you set up a storage template, the organization and search of photo files will be more intuitive and convenient. You can browse and find your photo files directly according to the categories of the storage template.
![](https://manage.icewhale.io/api/static/docs/1730270689535_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270699458_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270702487_image.png)
With these steps, you can easily find the photo files backed up on ZimaOS, whether using the default path or a custom storage template.

2. When your disk capacity is insufficient, how do you migrate your previous data to a new disk?
a. Data migration
Click Data migration in Settings, select Library migration, and Gallery, Documents, Media, and Backup will be automatically migrated to the target location
![](https://manage.icewhale.io/api/static/docs/1730272017160_image.png)

b. Manual migration!
You can also just copy the Gallery folder to the target location, the steps are as follows:
- Disable the Immich application
- Copy the Gallery to the target location
- Then modify the directory under Volumes of immich-server in the application to the modified directory
- Restart Immich
![](https://manage.icewhale.io/api/static/docs/1730271838216_image.png)
