---
title: Time Machine Backup on ZimaOS
seo_title: "Time Machine Backup to Your NAS: Back Up a Mac with ZimaOS"
description: "Back up your Mac to ZimaOS with Time Machine. Set up a Samba share for Time Machine and connect it from macOS System Settings."
type: Docs
author: admin
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

If you are on a Mac, Time Machine is the backup you already know. Point it at your ZimaOS device and every Mac in the house gets full automatic backups without an extra subscription.

## Step 1: Set Up a Shared Folder on ZimaOS

1. Open the ZimaOS dashboard and go to the **Files** page.
2. Find or create the folder you want to use as the backup destination, such as **Time Machine**.
3. Right-click the folder and select **Share via Samba**.

![ZimaOS Files context menu with the Share via Samba option on a folder](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)

4. In the popup, confirm the folder name and location, and check **Configure for Time Machine**. Your default ZimaOS user is used for authentication. You can add other users too.

![Samba share popup with the Configure for Time Machine option checked](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)

5. Click **Create**.

![ZimaOS shared folder creation completed for Time Machine backup](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)

## Step 2: Connect Time Machine on Your Mac

1. Open **System Settings** and go to **Time Machine**.

![macOS System Settings showing the Time Machine backup options](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)

2. Click **Add Backup Disk**.

![Time Machine settings with the Add Backup Disk button](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)

3. Select the shared folder you just created on ZimaOS and click **Set Up Disk**.

![Time Machine disk list showing the ZimaOS shared folder selected](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)

4. Enter your ZimaOS username and password when prompted.

![macOS prompt for username and password to access the Time Machine share](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)

## Step 3: Start the Backup

With your Mac and the ZimaOS device on the same network, Time Machine finds the target folder and starts backing up on its own.

![Time Machine interface showing the first backup in progress](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)

{% note tip Troubleshooting %}
If the backup fails, check the network connection and confirm that the SMB service is enabled on the device. When macOS will not let you type the password, click an empty area first and then click the password field again.
{% endnote %}

## Restore Files

When you need a file back, restore it from the Time Machine interface. Apple's guide covers it in detail: [Restore items backed up with Time Machine on Mac](https://support.apple.com/zh-cn/guide/mac-help/mh11422/11.0/mac/11.0).

## Next

- **[3-2-1 Backup Strategy](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")** — Time Machine is one ring of the plan; add an offsite copy
- **[Computer Backup](./computer-backup "Back up your computer to ZimaOS with Finder, Explorer, or sync")** — backup options for every computer in the house
