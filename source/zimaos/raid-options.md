---
title: RAID Configuration Reference
seo_title: "ZimaOS RAID Configuration: RAID 0, 1, 5, 6, and JBOD Explained"
description: “Detailed RAID configuration guide for ZimaOS. RAID 0, 1, 5, 6 and JBOD explained with comparison tables, step-by-step setup instructions, and answers to common questions.”
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

RAID combines multiple drives to improve reliability, performance, or both. It distributes data across drives so that higher read and write speeds are possible, and data remains intact even if a drive fails. JBOD simply joins several disks into one continuous volume, making the most of the total capacity.

If you are new to this and just want to know which setup fits your situation, start with **[Storage Setup](./storage-setup "Choose your storage setup with RAID options matched to your needs")**. It walks through the decision without assuming prior knowledge. This page is the technical reference.

## What Each Option Does

Here is what each level means in plain terms.

- **RAID 0 (Fast)**: Splits data across drives for maximum speed and capacity. No redundancy. If one drive fails, all data is lost. Best for temporary data or when speed matters more than safety.
- **RAID 1 (Safe)**: Mirrors data across two drives. One fails, the other keeps working. Simple and reliable. The classic home NAS choice. Limited to two drives by design.
- **RAID 5 (Balanced)**: Spreads data and parity across three or more drives. Survives one drive failure, uses space efficiently, and can grow by adding drives over time. The go-to for small businesses and growing libraries.
- **RAID 6 (Stability)**: Like RAID 5 but with double parity. Survives two drive failures. Requires four or more drives. For setups where downtime is expensive.
- **JBOD**: Concatenates disks into one large volume with no redundancy. Maximum capacity, but if one disk fails, the entire volume is lost. We generally do not recommend it for important data.

For a visual comparison, see the table below.

![ZimaOS RAID options overview showing RAID 0, 1, 5, 6, and JBOD side by side for comparison](https://manage.icewhale.io/api/static/docs/1755075585086_copyImage.png)

  

  

## Detailed Steps to Create RAID 5

RAID 5 is ideal for users seeking a balance of storage efficiency, performance, and single-drive failure protection. It requires at least three disks. Below is a step-by-step guide for creating a RAID 5 array using the updated ZimaOS UI.

  

1.  Open **Settings > Storage**. You will see a list of current disks and available operations.
    

![ZimaOS Settings storage page listing current disks and available storage operations](https://manage.icewhale.io/api/static/docs/1755075586219_copyImage.png)

2.  Click **Combine** to open the disk combination menu.
    

![ZimaOS storage page showing the Combine button used to open the disk combination menu](https://manage.icewhale.io/api/static/docs/1755075587914_copyImage.png)

3.  Select **RAID 5**, then click **Next**.
    

![ZimaOS disk combination menu with RAID 5 selected among the available RAID options](https://manage.icewhale.io/api/static/docs/1755075589691_copyImage.png)

4.  **Select three available disks**. The system will calculate the estimated capacity, then click **“Next.”**
    

![ZimaOS RAID creation wizard showing three disks selected with the estimated array capacity](https://manage.icewhale.io/api/static/docs/1755075591241_copyImage.png)

5.  **Configure and name the array**: Enter a name for the array (e.g., “RAID5”), check the desired protocols, then click **“Create”** to begin initialization.
    

![ZimaOS storage array setup screen with name field and protocol options before creation](https://manage.icewhale.io/api/static/docs/1755075592784_copyImage.png)

6.  **Creation complete**: The system will perform data striping, monitor the progress until finished, and display the array status as **“Healthy.”**
    

![ZimaOS storage creation complete screen showing the new array status as Healthy](https://manage.icewhale.io/api/static/docs/1755075594884_copyImage.png)

7.  **You can now use RAID 5!** After creation, parity will be enabled automatically. During this process, disk read speeds may be affected, but normal usage will not be interrupted.
    

![ZimaOS storage page with the new RAID 5 array ready and parity enabled automatically](https://manage.icewhale.io/api/static/docs/1755075596383_copyImage.png)

## Choosing a RAID Level

Still deciding? This quick reference summarizes the trade-offs.

![ZimaOS RAID level quick reference chart summarizing capacity, speed, and redundancy trade-offs](https://manage.icewhale.io/api/static/docs/1755075597233_copyImage.png)

For scenario-based recommendations, start with **[Storage Setup](./storage-setup "Choose your storage setup with RAID options matched to your needs")**.

## Other RAID Levels

The steps for RAID 0, 1, and 6 are the same, differing only in the selected option and minimum number of disks. RAID 6 requires at least four drives and provides dual-failure tolerance.

## ZFS

ZimaOS also supports the ZFS file system for users who want snapshots, checksums, and advanced data integrity. See the **[ZFS Setup guide](../developer/zfs-setup "Set up ZFS on ZimaOS for snapshots, checksums, and data integrity")** in the Dev section.

## FAQ

**Why does creating a RAID take a long time?**

Initialization time depends on the capacity and speed of your drives. Larger drives take longer. The array remains usable during the process, though read speeds may be reduced until initialization completes.

## Next

RAID protects against drive failure, not against accidental deletion or disaster. Pair it with the **[3-2-1 Backup](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")** strategy for complete protection. And if you have not decided which setup fits your needs, start with **[Storage Setup](./storage-setup "Choose your storage setup with RAID options matched to your needs")**.