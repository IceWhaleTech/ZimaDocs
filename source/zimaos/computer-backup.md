---
title: Computer Backup
seo_title: "Mac and Windows Backup to ZimaOS: Finder, Explorer, and Scheduled Sync"
description: "Back up your computer to ZimaOS with ZimaClient. Sign in once, access shared folders in Finder or Explorer, and back up the folders that matter."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

The same backup that keeps your phone safe works for your computer. Install the desktop client, sign in once, and the folders you care about keep landing on your own device.

## Before You Start

Your ZimaOS device needs to be powered on and connected to the network. For the first connection, your computer and the device should be on the same network. Have your ZimaOS account and password ready. If the device is fresh out of the box, follow **[Get Started](./get-started "Set up ZimaOS from first boot with ZimaClient and account creation")** first.

## Install ZimaClient

Download ZimaClient for **[Windows or macOS](https://www.zimaspace.com/zimaos/download "Download ZimaClient desktop app for Windows and macOS")** and open it.

## Sign In and Connect

1. Open ZimaClient. It scans the local network and lists the NAS devices running ZimaOS that it finds. Select yours and click to connect.

![ZimaClient device discovery screen showing NAS devices running ZimaOS found on the local network](/images/guides/zimaclient-desktop-discovery.webp)

2. Select your device and sign in with your ZimaOS account. Check **remember password** so you stay signed in.

![ZimaClient desktop sign-in screen with the ZimaOS account username and password fields](/images/guides/zimaclient-desktop-sign-in.webp)

3. Configure the default mount so your storage space shows up in the network section of Finder on macOS or File Explorer on Windows. Once mounted, it behaves like a USB drive that is always plugged in. Video editing software and other PC apps open files straight from the NAS as if they were on a local disk.

![ZimaClient desktop screen configuring the default storage mount for Finder and File Explorer](/images/guides/computer-zimaclient-mount.webp)

After the first sign-in, the computer is linked to the device.

{% note tip Remote Access %}
Remote access is set up automatically during the first sign-in. After that, your laptop reaches the NAS from anywhere through the encrypted peer-to-peer channel, with nothing else to configure — provided you have enabled the remote access feature in **Settings > Network** on your ZimaOS device.
{% endnote %}

## Access Shared Folders in Finder

Once connected, your ZimaOS storage shows up directly in Finder on macOS and File Explorer on Windows. Browse the shared folders like any other folder on your computer, and drag files in and out without a web interface.

![macOS Finder window showing ZimaOS shared folders accessible like local folders](/images/guides/computer-finder-smb.png)

File sharing is on by default through **[SMB File Sharing](./smb-troubleshooting "Share files over SMB so they appear in Finder and File Explorer")**, protected by your ZimaOS account.

## Choose Folders to Back Up

Pick the folders on your computer that matter: documents, projects, photos.

1. In ZimaClient, click **Backup**.
2. Click **Add Backup Directory**.
3. Select the folders to back up.

You select them once, and ZimaClient keeps them backed up from then on — automatically, in the background, on the schedule you set. No need to remember to run it.

![ZimaClient desktop screen for selecting computer folders to back up](/images/guides/computer-zimaclient-folders.png)

## Choose the Destination

Point the backup at a storage space of your own — a single disk or a RAID array — and never the ZimaOS system drive. The system drive is usually the smallest one, and computer folders fill it up fast. See **[Storage Setup](./storage-setup "Choose your storage setup with RAID options matched to your needs")** for planning your storage spaces.

![ZimaClient desktop destination picker showing storage spaces to choose for the backup](/images/guides/computer-zimaclient-destination.png)

## Start the Backup

Confirm and start. The first backup takes the longest because it moves everything you selected. Later backups only transfer what changed.

![ZimaClient desktop backup confirmation with the start button](/images/guides/computer-zimaclient-start.png)

## Restore Files

Getting files back is just as simple as backing them up.

Open your ZimaOS storage in Finder or File Explorer and drag the files back to your computer. Folder backup covers the files where your work lives. On a Mac, **[Time Machine Backup](./time-machine-backup "Back up your Mac to your NAS over the network with Time Machine")** adds full system recovery on top.

Before you rely on any backup, restore one file and open it. A backup you have never tested is a plan you have never tested.

## Backup Speed

A computer on 5 GHz Wi-Fi tops out around 100 MB/s in theory. In a typical home, real Wi-Fi transfers land between 40 and 80 MB/s, depending on the router and how crowded the air is. The NAS side keeps up without breaking a sweat, and ZimaOS transfers large batches of small files as smoothly as big videos, so project folders full of tiny files are no slower than movies.

The factors that actually move the number, in order of impact:

1. **Wired vs Wi-Fi.** A gigabit cable delivers 110 to 125 MB/s, stable and predictable. Wi-Fi shares the air with every device in the house and drops with distance and walls.
2. **Your router.** The single biggest upgrade. In community tests, swapping an ISP-supplied router for a decent one took the same Wi-Fi transfer from 18 MB/s to around 90 MB/s.
3. **Distance and interference.** Closer to the router on 5 GHz beats farther away, and a busy channel with neighbors and IoT devices cuts into the airtime you get.
4. **Everything else is noise.** The device's network port, the disks inside, and the file mix are rarely the bottleneck once the first three are handled.

If your computer has Thunderbolt, **[Thunderbolt Direct Connect](./thunderbolt-direct-connect "Connect your computer to ZimaOS over Thunderbolt for top speed")** pushes well past Wi-Fi, limited only by the drives inside your device.

For the first big backup, plug in the cable and let it run.

## Common Problems

**The backup got interrupted.** ZimaOS resumes automatically where it left off. Reconnect and it continues.

**You replaced your computer.** Install ZimaClient, sign in with the same ZimaOS account, and add your folders again. The data on the NAS is untouched.

**The destination is running out of space.** Point the backup at a larger storage space, or use the built-in tool in **[Data Migration](./data-migration "Move Docker images, app data, and folders between drives on ZimaOS")** to free up room.

## Practical Tips

{% note tip %}
- Before you replace a computer, open ZimaClient once and let it finish a final backup.
- A folder synced to the cloud is not a backup: deleting a file locally deletes it everywhere. A backup keeps versions and only writes forward.
{% endnote %}

## Next

- **[Phone Backup](./phone-backup "Back up your phone to ZimaOS automatically with ZimaClient")** — the same simplicity for the phone in your pocket
- **[3-2-1 Backup Strategy](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")** — one backup is not a plan
