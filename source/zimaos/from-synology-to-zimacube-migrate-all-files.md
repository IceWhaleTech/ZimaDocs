---
title: Synology Manual Transfer
seo_title: "Synology Manual Transfer: Mount DSM Shares and Copy Files to ZimaOS"
description: "Manual file transfer from Synology DSM to ZimaOS. Mount DSM shares as LAN Storage in Files, then copy files step by step with capacity and account tips."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

This is the step-by-step manual for moving files from a Synology device. If you want the recommended path and a phased strategy first, start with **[Move from Another NAS](./synology-to-zimacube-migration "Move files from a Synology NAS to ZimaOS with a phased approach")**.

## Mount DSM Shares in Files

SMB is the common language here. Both Synology DSM and ZimaOS speak it well, which makes a direct network transfer possible without any extra tools.

Before you start, make sure the folders you plan to move are shared in DSM. If a folder was created without sharing, create a new shared directory in DSM and move the data you want to transfer into it.

1. Open the Files app on the ZimaOS dashboard.
2. In the left navigation, find the plus sign next to Storage and click it, then click **LAN Storage**.

![ZimaOS Files app showing the plus sign next to Storage with the LAN Storage option](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)

3. In the popup, enter the IP address of your Synology device and click **Connect**. If the shared account has a username and password, enter those too.

![Connection popup in ZimaOS Files for entering the Synology DSM IP address](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)

When the connection succeeds, the Synology device appears as a network device under Storage, with its shared directories on the right.

![ZimaOS Files showing the Synology device connected with its shared directories listed](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)

## Copy the Files Over

1. Open the shared directory and select the files and folders you want to move. You can select everything.
2. Click the **Copy** button in the upper right corner.

![Synology shared directory in ZimaOS Files with files selected and the Copy button](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

3. Go to the target directory in your ZimaOS storage and click **Paste**.

![ZimaOS storage directory with the Paste button in the upper right corner](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)

{% note warn Capacity Check %}
Make sure the remaining capacity of the destination storage is larger than the total size of what you are copying. Then let the transfer run.
{% endnote %}

## After the Move

Once the files are on the new device, protect them with a **[3-2-1 backup plan](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")**. A freshly migrated library is exactly the data you do not want to lose twice.
