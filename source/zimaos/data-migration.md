---
title: Data Migration
seo_title: "ZimaOS Data Migration: Move Docker, App Data, and Folders Between Drives"
description: "Move Docker images, app data, and user folders between storage spaces on ZimaOS with the built-in Data Migration tool."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
When a drive fills up, or you swap it for a bigger one, you do not need to reinstall anything. The built-in Data Migration tool relocates whole categories of data to another storage space in one run.

## What You Can Move

The tool works on three categories:

- **Docker images.** The packages your apps run from. This category grows fastest when you keep installing apps.
- **Docker application data.** Everything your installed apps have written, moved as a whole.
- **User folders.** Photos, Downloads, Documents, Media, and Backup.

It moves at the category level, not app by app. If you want to relocate a single app or understand where its files live, see **[App Storage Paths](./docker-app-paths "Where apps store data on your drives and how to move it")**.

## When Container Data Fills the System Drive

The system drive is usually the smallest one, and containers write to it by default. Docker images and app data grow quietly until updates start failing and apps behave oddly.

Setting the app data location early is the way to prevent this, and **[App Storage Paths](./docker-app-paths "Where apps store data on your drives and how to move it")** covers that. If the system drive is already full, the Data Migration tool fixes it in one run: migrate Docker images and app data to your storage space, and the system drive is clear again.

## When You Migrate RAID Data

Replacing drives in a RAID array, or moving to a bigger array, follows the same path. Migrate each category to the new storage space, one at a time. When the last one finishes, the old array is free to retire. Apps keep working throughout, and migration does not reinstall or reconfigure anything.

## How to Move

1. Open **Settings > Data Migration**.

![ZimaOS Settings page showing the Data Migration entry with storage folders listed](/images/guides/data-migration-entry.webp)

2. Select the item you wish to migrate and click the **Modify Location** button on the right.

![Data Migration page with Modify Location button next to each selectable item](/images/guides/data-migration-modify-location.webp)

3. Choose the new storage space and click **Next**.

![Data Migration wizard showing storage space selection with the Next button](/images/guides/data-migration-choose-space.webp)

4. Confirm how conflicts are handled. When a file already exists at the destination, pick what happens: skip it, overwrite it, or keep both. Also choose whether the original files stay on the old drive or are removed after a verified migration. Then check the acknowledgment box and click **Start Migration**.

5. Progress shows full screen, and no other operations can be performed during migration.

![Data Migration progress screen showing the full screen migration status display](/images/guides/data-migration-progress.webp)

6. When it finishes, a popup shows the migration details. For large migrations, the tool provides a full report of the results.

![Data Migration completion popup showing the details of the finished migration](/images/guides/data-migration-done.webp)

![Data Migration report page showing the complete results of a large migration](/images/guides/data-migration-report.webp)

## Limitations

The tool migrates the three categories above. System partitions and data outside those categories are not part of it.

## Related

- **[App Storage Paths](./docker-app-paths "Where apps store data on your drives and how to move it")** — app-level moves and where app data lives
- **[Storage Setup](./storage-setup "Choose your storage setup with RAID options matched to your needs")** — plan your storage spaces
- **[Connect Another NAS](./synology-to-zimacube-migration "Connect another NAS to ZimaOS to move files or back up across devices")** — data moving between devices goes through the Files app instead
- **[3-2-1 Backup Strategy](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")** — the offsite and second-device rings of your plan
