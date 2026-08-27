---
title: Move from Another NAS
seo_title: "Move from Another NAS to ZimaOS: Synology Migration Guide"
description: "Move files from a Synology NAS to ZimaOS. The recommended path through Files LAN Storage, with a phased approach so both devices keep running."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Switching NAS brands should not mean starting over. Your files move over as they are, and you can keep the old device running while you settle in. This page covers the recommended path. The detailed walkthrough lives in the manual linked below.

## The Recommended Path

The cleanest way is through the Files app. It connects to your old device over the network, and you copy what you want, when you want.

1. On the old device, make sure the folders you plan to move are shared.
2. In ZimaOS Files, add the old device as LAN Storage.
3. Copy the folders you need most and paste them into your ZimaOS storage.

For the full step-by-step version with screenshots, see **[Synology Manual Transfer](./from-synology-to-zimacube-migrate-all-files "Mount Synology DSM shares in ZimaOS Files and copy files step by step")**.

## Take Your Time

There is no deadline to cut over. A phased move works better than a big-bang one.

Start with the folders you use every day. Once those live on the new device, work through the rest of the backlog at your own pace. The old device keeps serving its files until the last copy is done.

One thing worth doing right after the move: set up your **[3-2-1 backup plan](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")**. Freshly migrated files are the most valuable files you have, and a single copy is not a plan.

## Next

- **[Synology Manual Transfer](./from-synology-to-zimacube-migrate-all-files "Mount Synology DSM shares in ZimaOS Files and copy files step by step")** — the step-by-step manual
- **[3-2-1 Backup Strategy](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")** — protect the files you just moved
- **[Phone Backup](./phone-backup "Back up your phone to ZimaOS automatically with ZimaClient")** — bring the rest of the household data in
