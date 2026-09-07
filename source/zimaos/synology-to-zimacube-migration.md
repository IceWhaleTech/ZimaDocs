---
title: Connect Another NAS
seo_title: "Connect a Synology NAS to ZimaOS: Move Files or Back Up Across Devices"
description: "Connect another NAS to your ZimaOS device. Mount shared folders over the network, move files over, or keep the connection for cross-device backup in your 3-2-1 plan."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
Connecting another NAS to ZimaOS opens two doors at once. You can move files over permanently, or keep the connection and use it for cross-device backup. Both start with the same step: connect the two devices over your network. This page covers the whole journey, with Synology DSM as the example.

## Why Connect

One connection, two things you can do with it:

- **Move files over.** Bring the folders you care about to your ZimaOS device, keep the old NAS running during the transition, and clean up when you are ready.
- **Keep it in the backup plan.** A connected NAS becomes a LAN source or a second-device destination in your **[3-2-1 backup plan](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")**. One connection feeds both jobs.

## Connect the Two Devices

SMB is the common language here. ZimaOS and other NAS systems both speak it well, which makes a direct network transfer possible without extra tools.

Before you start, make sure the folders you plan to move are shared on the old device. In DSM, check **Control Panel > Shared Folder**. If a folder was created without sharing, create a new shared directory in DSM and move the data you want to transfer into it.

1. Open the **Files** app on the ZimaOS dashboard.
2. In the left navigation, click the plus sign next to **Storage**, then click **LAN Storage**.

![ZimaOS Files app showing the plus sign next to Storage with the LAN Storage option](/images/guides/files-lan-storage-option.webp)

3. In the popup, enter the IP address of the other device and click **Connect**. If the shared account has a username and password, enter those too.

![Connection popup in ZimaOS Files for entering the IP address of the other NAS device](/images/guides/files-lan-storage-connect.webp)

When the connection succeeds, the device appears as a network device under Storage, with its shared directories listed.

![ZimaOS Files showing the other NAS device connected with its shared directories listed](/images/guides/files-lan-storage-listed.webp)

## Copy Files Over

1. Open the shared directory and select the files and folders you want to move. You can select everything.
2. Click the **Copy** button in the upper right corner.

![Shared directory in ZimaOS Files with files selected and the Copy button](/images/guides/files-lan-copy.webp)

3. Go to the target directory in your ZimaOS storage and click **Paste**.

![ZimaOS storage directory with the Paste button in the upper right corner](/images/guides/files-lan-paste.webp)

{% note warn Capacity Check %}
Make sure the remaining capacity of the destination storage is larger than the total size of what you are copying. Then let the transfer run.
{% endnote %}

Copying leaves the originals on the old device. Nothing is deleted until you decide to clean up, which makes it safe to verify the copies first.

When the transfer finishes, the files appear in your ZimaOS storage like anything else on the device. Open them, check that everything made it, and the old NAS can keep serving until you are ready to retire it.

![ZimaOS Files showing the copied folders now available in the ZimaOS storage](/images/guides/files-lan-copied.webp)

## Take Your Time

There is no deadline to cut over. A phased move works better than a big-bang one.

Start with the folders you use every day. Once those live on the new device, work through the rest of the backlog at your own pace. The old device keeps serving its files until the last copy is done.

## After the Move

Once the files are on the new device, protect them with a **[3-2-1 backup plan](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")**. A freshly migrated library is exactly the data you do not want to lose twice.

## Next

- **[3-2-1 Backup Strategy](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")** — protect the files you just moved
- **[Connect Cloud Drives](./cloud-drive-connect "Connect Google Drive, Dropbox, or OneDrive to ZimaOS for backup")** — the other half of the offsite story
- **[Phone Backup](./phone-backup "Back up your phone to ZimaOS automatically with ZimaClient")** — bring the rest of the household data in
