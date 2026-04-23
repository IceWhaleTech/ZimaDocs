---
title: Creating RAID Troubleshooting Guide
description: "Troubleshoot ZimaCube RAID creation errors on ZimaOS. Fix common issues with drive detection, RAID type selection, and array initialization failures."
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /zimacube/raid-troubleshooting.html
---
# When dealing with issues related to the inability to create RAID, it is recommended to follow these troubleshooting steps:

## Check the Number of Hard Drives
Ensure that there are at least two hard drives available to meet the basic requirements for RAID setup.
![](https://manage.icewhale.io/api/static/docs/1722484339854_image.png)
## Check Disk Health Status
![](https://manage.icewhale.io/api/static/docs/1722484363590_image.png)
## Check whether the individual disk formatting is successful
Format each hard drive individually to ensure that the formatting process completes successfully without any errors.
![](https://manage.icewhale.io/api/static/docs/1722484386621_image.png)
## Check Mount Point
Verify that the RAID mount point does not already contain files. The mount point must be empty to ensure the smooth configuration of RAID. If files are present, back them up and clear the mount point.
![](https://manage.icewhale.io/api/static/docs/1722484409099_image.png)
## System Reboot
After completing the above checks, restart the system and try creating RAID again.
![](https://manage.icewhale.io/api/static/docs/1722484430867_image.png)
