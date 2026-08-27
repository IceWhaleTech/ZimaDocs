---
title: 3-2-1 Backup on ZimaOS
seo_title: "ZimaOS Backup Plan: The 3-2-1 Strategy for Your NAS Data"
description: "Build a complete backup plan on ZimaOS with the 3-2-1 rule. Back up folders, USB drives, and cloud storage in one task, schedule automatic runs, and keep an offsite copy."
type: Docs
author: vicky
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Hard drives fail, files get deleted by accident, and houses have floods. A backup plan is what stands between those moments and losing everything.

One thing to be clear about first: RAID is not a backup. RAID protects you from a single drive failure while the device keeps running. It does nothing against accidental deletion, ransomware, or a power surge that takes out the whole machine. A real backup plan covers those too.

## The 3-2-1 Rule

The 3-2-1 rule is the standard answer to the question of how many backups are enough.

- **3 copies** of your data: the original plus two backups, so no single failure destroys everything.
- **2 different types of media**: such as the drives in your device plus an external USB drive, to diversify the risk.
- **1 copy offsite**: somewhere physically separate, so a fire or theft at home does not take all copies with it.

## Set Up a Backup Task

ZimaOS has a built-in Backup app that handles all of this in one place.

1. Launch the **Backup** app from the dashboard.

![ZimaOS desktop showing the Backup app icon to launch the backup tool](https://manage.icewhale.io/api/static/docs/1755069939384_copyImage.png)

2. Click **Add new backup** to open the task creation wizard.

![Backup task creation wizard with the Add new backup button](https://manage.icewhale.io/api/static/docs/1755069940811_copyImage.png)

3. Choose the data source: **Cloud** (Google Drive, Dropbox, and more), **LAN** (shared folders from other devices), **USB** (external drives), or **Zima** (files stored on this device).

Backups from **[Phone Backup](./phone-backup "Back up your phone to ZimaOS automatically with ZimaClient")** and **[Computer Backup](./computer-backup "Back up your computer to ZimaOS with Finder, Explorer, or sync")** land in your storage as regular folders, so they fit into a backup task like anything else stored on the device.

![Backup data source selection showing Cloud, LAN, USB, and Zima options](https://manage.icewhale.io/api/static/docs/1755069942195_copyImage.png)

4. If you picked a cloud source, sign in and authorize access.

![Google account sign-in screen for authorizing cloud backup access](https://manage.icewhale.io/api/static/docs/1755069943543_copyImage.png)

![Cloud storage authorization step in the backup task wizard](https://manage.icewhale.io/api/static/docs/1755069944297_copyImage.png)

5. Select the folders you want to back up, or the entire directory structure.

![Backup content selection screen for choosing folders or entire directories](https://manage.icewhale.io/api/static/docs/1755069945701_copyImage.png)

6. Set the destination: a local disk, another Zima device, an external drive, or the cloud.

![Backup destination options for local disks, other NAS devices, USB, or cloud](https://manage.icewhale.io/api/static/docs/1755069947027_copyImage.png)

7. Click **Start**. The backup runs with progress shown in real time.

![Backup task running with real-time progress displayed](https://manage.icewhale.io/api/static/docs/1755069948294_copyImage.png)

A video walkthrough of the same steps is available on [YouTube](https://www.youtube.com/watch?v=pUVMsS1tcyY).

## Backup Automatically

A backup plan only works if it runs without you remembering to run it.

- **Scheduled backup** runs on its own at the interval you set.
- **Multiple tasks** can run side by side without interfering, so photos, documents, and app data each get their own schedule.
- **Resume and fault tolerance** continues an interrupted transfer instead of starting over.

![Backup app task list showing multiple backup tasks running concurrently](https://manage.icewhale.io/api/static/docs/1755069949757_copyImage.png)

## Cloud Sync Is Not Backup

A folder synced to the cloud is not a backup. Sync mirrors changes in both directions, so deleting a file locally deletes it everywhere. A backup keeps versions and only writes forward. When you use the cloud in your backup plan, use the Backup app's cloud destination so you get versions and restore points, not a mirror of your mistakes.

The cloud also earns its place as the offsite copy in your 3-2-1 plan. See **[Connect Cloud Drives](./cloud-drive-connect "Connect Google Drive, Dropbox, or OneDrive to ZimaOS for backup")** for working with cloud storage.

## Restore and Verify

A backup you have never restored is a plan you have never tested. After your first backup finishes, restore one file and open it. Ten minutes of verification now beats discovering a silent problem the day you actually need the backup.

## Next

- **[RAID Options](./raid-options "RAID levels and JBOD explained with step-by-step setup instructions")** — what RAID protects, and what it does not
- **[Phone Backup](./phone-backup "Back up your phone to ZimaOS automatically with ZimaClient")** — get the phone data into the plan
- **[Move Data Between Drives](./data-migration "Move Docker images, app data, and folders between drives on ZimaOS")** — when a drive fills up
