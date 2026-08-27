---
title: ZimaCube RAID SSD Expansion
description: "Add SSDs to your ZimaCube for RAID caching and fast storage pools. Step-by-step guide to installing M.2 NVMe and SATA SSDs, configuring RAID in ZimaOS, and optimizing performance."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

ZimaCube supports up to four internal SSDs in addition to its six HDD bays. You can use these SSDs for RAID caching to speed up HDD access, or create a dedicated fast storage pool for applications that need low latency.

## Where to Install SSDs

ZimaCube has two types of SSD slots inside the chassis:

- **4 × M.2 NVMe slots** (PCIe 3.0 x4) on the motherboard. These support 2280-size NVMe drives.
- **2 × 2.5-inch SATA SSD bays** accessible from the front after removing the drive trays.

The M.2 slots are best for cache drives because NVMe has much lower latency than SATA. The 2.5-inch bays work well for a fast bulk-storage pool.

## Installing M.2 NVMe SSDs

Before you start, shut down the ZimaCube and unplug the power cable.

1. Remove the top cover by unscrewing the thumbscrews at the rear and sliding the panel back.
2. Locate the two M.2 slots on the motherboard. They are between the CPU cooler and the PCIe expansion slot.
3. Insert the M.2 drive at a 30-degree angle into the slot, then press it flat against the standoff.
4. Secure the drive with the small screw that came with your SSD or the one pre-installed on the standoff.
5. Replace the top cover.

After booting, the drives should appear in ZimaOS under Storage > Disks. If a drive does not show up, check that it is fully seated in the slot.

## Installing 2.5-inch SATA SSDs

1. Pull out one of the empty drive trays from the front of the ZimaCube.
2. Mount the 2.5-inch SSD onto the tray using the four screws included with the ZimaCube.
3. Slide the tray back into the bay until it clicks.
4. The drive will appear in ZimaOS automatically.

## Configuring RAID with SSDs

Once your SSDs are installed, you can set up RAID through the ZimaOS web interface:

1. Go to **Storage > RAID**.
2. Select the drives you want to include in the array. You can mix SSDs and HDDs, but for best performance, keep SSDs in their own array.
3. Choose a RAID level. For SSDs, RAID 0 gives the best performance (but no redundancy), while RAID 1 mirrors data across two drives for safety.
4. Click **Create** and wait for the array to build. This can take several minutes for large drives.

For more detail on RAID options, see **[RAID Options Overview](../zimaos/raid-options)**.

## Using SSDs as Cache

If you have HDDs as your main storage, you can use an SSD as a read/write cache to speed up frequently accessed files. In ZimaOS, this is configured per shared folder:

1. Go to **Storage > Shared Folders**.
2. Select a folder and click **Edit**.
3. Under **Cache**, choose your SSD from the dropdown.
4. Set the cache mode (writeback for best performance, writethrough for data safety).
5. Click **Save**.

A single 256 GB NVMe SSD is enough to cache most home NAS workloads. For a multi-user setup with large media files, consider a 512 GB or 1 TB cache drive.

## Checking Drive Health

SSDs have a limited number of write cycles. ZimaOS shows drive health information under **Storage > Disks > [select drive] > Health**. Check this periodically — if the wear level approaches 80%, plan to replace the drive.