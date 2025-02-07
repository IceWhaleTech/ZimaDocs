---
title: How do I back up files from my Mac to ZimaCube using Time Machine?
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
Want to keep your Mac files safe? With ZimaOS's new Time Machine feature, you can easily back up your files to ZimaCube. This powerful feature is not only quick and easy, but also ensures that your important data is always protected. Here are the easy-to-follow steps to quickly set up a backup.

Before you begin, make sure you have downloaded and installed the latest version of ZimaOS: https://github.com/IceWhaleTech/ZimaOS/releases

## Step 1: Set up a ZimaOS shared folder
1. Open your ZimaOS dashboard (e.g., access it via `http://<your_nas_ip>`).
2. Go to the **Files** page.
3. Find the folder you want to use as a backup destination, such as **Time Machine**.
4. Right-click the folder and select **Share via Samba**.
![](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)
5. In the pop-up window:
- Confirm that the folder name and storage location are correct.
- Check the Configure for **Time Machine option**.
- Remember: your default user will be used for Time Machine authentication.
- (Optional) Click **+ Add** to assign access permissions to other users.
![](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)
6. Click Create to complete the shared folder settings.
  ![](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)
## Step 2: Set up Time Machine on your Mac
1. Open **System Preferences** or **System Settings** (macOS Ventura and later).
2. Click **Time Machine**.
![](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)
3. Select **Add Back Disk...**.
![](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)
4. In the disk list, find and select the shared folder previously configured on ZimaOS (for example: **Time Machine**). Click **Set Up Disk**.
![](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)
5. Enter your username and password as prompted to complete the disk configuration.
![](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)
## Step 3: Start backup
1. Make sure your Mac and ZimaCube are in the same LAN.
2. Time Machine will automatically identify the target folder and start backing up.
![](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)
## Precautions
**Storage space**: Make sure ZimaCube has enough free space to meet the backup requirements.
**Network connection**: If the backup fails, please check the network connection and confirm that ZimaCube's SMB service is enabled.
**Permission password input problem**: When entering the password, macOS may not be able to enter. If you encounter this problem, please click on the blank space first, then click on the password input box again and try again.

## Summary
Following the above steps, you have successfully backed up your Mac files to ZimaCube, adding a solid barrier to your data security. If you have any questions during the operation, please feel free to contact our support team <feedback@zimaos.com>. Let ZimaOS provide more efficient protection for your work and life!

## Further reading:
**How to restore files using Time Machine**: macOS User Guide:[Restore items backed up with Time Machine on Mac](https://support.apple.com/zh-cn/guide/mac-help/mh11422/11.0/mac/11.0)