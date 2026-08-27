---
title: Connect Cloud Drives
seo_title: "Cloud Drives on ZimaOS: Connect Google Drive, Dropbox, and OneDrive"
description: "Connect Google Drive, Dropbox, and OneDrive to ZimaOS. Mount cloud folders in Files, work across local and cloud storage, and use the cloud as the offsite ring in your 3-2-1 backup plan."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Cloud drives are good at what they do: they are everywhere, they are reliable, and other people already share files with you through them. Your ZimaOS device is good at the rest: speed on your own network, real capacity, and data that stays under your control. Connect the two, and you gain the flexibility to move data between them as your needs change. Take over part of your cloud data with the NAS to downgrade a subscription, or use the cloud as the encrypted offsite backup for your NAS. You decide where each piece of data lives.

## Mount Cloud Drives in Files

The Files app connects to **Google Drive**, **Dropbox**, and **OneDrive** directly. Connect once, and your cloud folders appear in Files right next to your local storage.

1. Open **Files** on the ZimaOS dashboard.
2. Add a cloud drive from the storage list.
3. Sign in with your cloud account and authorize access.

![ZimaOS Files app showing the cloud drive connection options for Google Drive, Dropbox, and OneDrive](/images/guides/files-cloud-drive-mount.png)

After connecting, the cloud drive shows up alongside your storage spaces, and its folders are browsable like any other folder.

![ZimaOS Files sidebar showing a connected cloud drive next to local storage spaces](/images/guides/files-cloud-drive-list.png)

## Work Across Local and Cloud

With the cloud mounted, moving between the two worlds stops being a project.

Open a file from the cloud, edit it, and save it back. Drag a local folder into the cloud drive when you want a copy somewhere else. Pull cloud files down when you need them on fast local storage. Move enough data to your device and you can often drop to a cheaper cloud tier. The transfer runs in Files with verification, so a big move does not end with silently corrupted files.

Here is a move from a cloud drive to local storage, step by step.

1. In Files, open the cloud drive and select the folder you want to move.

![ZimaOS Files showing a cloud folder selected for migration](/images/guides/files-cloud-migrate-select.png)

2. Choose the destination storage space.

![ZimaOS Files migration dialog for choosing the destination storage space](/images/guides/files-cloud-migrate-destination.png)

3. Start the transfer. Progress shows in real time.

![ZimaOS Files migration progress showing the transfer running in real time](/images/guides/files-cloud-migrate-progress.png)

4. When it finishes, Files verifies the result and confirms the files are intact.

![ZimaOS Files migration complete with verification confirming the files are intact](/images/guides/files-cloud-migrate-verified.png)

## The Offsite Ring

A connected cloud drive earns a second job in your backup plan: it becomes the offsite copy in your **[3-2-1 Backup Strategy](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")**.

Local storage holds the working copy, a second drive holds the local backup, and the cloud holds an encrypted copy that survives a fire or a flood. It is the same cloud you already use, now doing the job it is genuinely great at.

## Next

- **[3-2-1 Backup Strategy](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")** — build the full backup plan
- **[Phone Backup](./phone-backup "Back up your phone to ZimaOS automatically with ZimaClient")** — bring the phone data home too
