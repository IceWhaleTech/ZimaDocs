---
title: How to Install ZimaOS
description: Learn how to install ZimaOS with this step-by-step guide. Includes downloading the image, flashing to USB, installation process, and logging in via ZimaClient or IP address.
type: Docs
author: admin
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## What you’ll learn
ZimaOS is a lightweight NAS operating system designed for generic x86-64.
This guide provides a complete step-by-step process to help you **download, flash, and install ZimaOS** quickly and successfully.

---

## What you’ll need
- A **Zima device** or a generic x86-64 with at least 25GB of storage space.
- A flash drive (4GB or above recommended).

---

## Getting Started
To boot ZimaOS, the BIOS needs to have UEFI boot mode enabled and Secure Boot disabled.

### Step 1: Download the ZimaOS Installation Image
To get started, download the latest ZimaOS `.img` file from the official GitHub release page:  
👉 [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases)


### Step 2: Create a Bootable USB Drive
You need to flash the ZimaOS image to a USB drive. The easiest tool for this is **Balena Etcher**.

1. Download and install [Balena Etcher](https://etcher.balena.io/#download-etcher)  
2. Open Etcher and select the ZimaOS `.img` file.  
3. Insert your USB drive and select it as the target.  
4. Click **Flash** to start writing the image.

![balena etcher tool open zimaos installer image file](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)
![balena etcher select flash device as a target to install zimaos](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)
![flash zimaso image to flash device completed](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)



### Step 3: Boot your device from USB
1. Insert the bootable USB drive into your device.  
2. Enter the BIOS/boot menu and choose **Boot from USB**.

![main memu of zimaos installation tool to choose install zimaos or reboot](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)

![quick install memu to select a device or space or location to install zimaos](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)

![confirmation before istalling and choose yes.](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)

![last chance to abort install and choose yes.](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)

![Installation progress bar displayed. Please wait patiently at this time.](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)


### Step 4: Complete ZimaOS Installation
Follow the on-screen instructions to install ZimaOS.  
When the system prompts, remove the USB drive and restart the device.  
It will now automatically boot into **ZimaOS**.
![remove the flash device and reboot](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)



### Step 5: Access ZimaOS
After reboot, the easiest way to log in is by using **ZimaClient**, which can automatically detect your device on the network and help you quickly access ZimaOS.  

👉 Download ZimaClient and follow the guide here: [ZimaOS Quick Start Guide](https://www.zimaspace.com/docs/zimaos/Get-Started)  

![welcome to zimacos webgui](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)


Alternatively, you can also check the IP address on your network and enter it into a web browser to access the **ZimaOS Web UI**.  
![zimaos key information show on the screen include ip address os version](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)


🎉 **Congratulations!** You have successfully installed ZimaOS on your device and can now start exploring all its NAS features.

---

## Next Steps with ZimaOS

Now that ZimaOS is installed on your smart server, you can start building your personal cloud and home server.  
Here are some ideas for what to do next:

- 🔧 **Set up RAID or storage pools** for data protection.  
- 📂 **Enable file sharing (SMB/FTP)** across your devices.  
- 🎞️ **Run a media server (Plex, Jellyfin)** to stream your movies and music.  
- 🐳 **Deploy Docker apps** directly from the ZimaOS App Store.  
- ☁️ **Backup important data** to external drives or the cloud.  

👉 Ready to unlock more features?  
- Visit the [ZimaOS Documentation](https://www.zimaspace.com/docs/zimaos/Romote-Access)  
- Join our [Community Forum](https://community.zimaspace.com/)  
- Explore the [Awesome App Store](https://awesome.casaos.io/content/3rd-party-app-stores/list.html) to expand your setup  

💡 **Pro Tip**: Bookmark this guide for future updates. New ZimaOS releases often include performance improvements and new apps.  

Start your journey with ZimaOS today and enjoy a faster, simpler, and more reliable NAS experience! 🚀
