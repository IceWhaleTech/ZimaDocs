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

For a virtual machine, follow [Install ZimaOS on Proxmox VE](./install-zimaos-on-proxmox-ve).

---

## What you’ll need
- A **Zima device** or a generic x86-64 with at least 25GB of storage space.
- A flash drive (4GB or above recommended).
- [ZimaOS USB Creator](https://www.zimaspace.com/zimaos/download) or [balenaEtcher](https://etcher.balena.io/).

---

## Getting Started
To boot ZimaOS, the BIOS needs to have UEFI boot mode enabled and Secure Boot disabled.

### Step 1: Prepare the ZimaOS Installation Image
ZimaOS USB Creator downloads the version you select in the app. If you use balenaEtcher, download the file ending in `_installer.img` from [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases). The `.raucb` file is an update package, not a USB installation image.

### Step 2: Create a Bootable ZimaOS USB Drive
Choose one of the following methods, then continue with Step 3.

> Version numbers, filenames, drive names, and interface details in the screenshots are examples.

> Writing an image erases all data on the selected USB drive. Back up important files and check the drive name and capacity before continuing.

#### Option A: ZimaOS USB Creator

1. Insert the USB drive and open **ZimaOS USB Creator**. On **Choose operating system**, select the ZimaOS version you want to install, then click **Next**.

![Choose a ZimaOS version in USB Creator](/images/guides/usb-creator-select-os.webp)

2. Select the USB drive. Check its name and capacity, keep **Exclude system drives** selected, then click **Next**.

![Select the USB drive in USB Creator](/images/guides/usb-creator-select-storage.webp)

3. Review the operating system image and storage device in the summary, then click **Write**.

![Review the image and target USB drive](/images/guides/usb-creator-review-write.webp)

4. Check the target drive in the **Erase this device?** dialog, then click **Erase and write**.

![Confirm erasing and writing the selected USB drive](/images/guides/usb-creator-erase-warning.webp)

5. Complete administrator authorization if prompted. Wait while USB Creator downloads and writes the image; leave the USB drive connected.

![USB Creator downloading and writing the image](/images/guides/usb-creator-writing-progress.webp)

6. When **Write complete!** appears, the drive has been ejected automatically. Click **Finish** and remove it safely.

![USB Creator write complete screen](/images/guides/usb-creator-write-complete.webp)

#### Option B: balenaEtcher

1. Download and install [balenaEtcher](https://etcher.balena.io/).

2. Open Etcher, click **Flash from file**, and select the `_installer.img` file downloaded in Step 1.

![Select the ZimaOS installer image in balenaEtcher](/images/guides/zimaos-etcher-select-image.webp)

3. Click **Select target** and choose the USB drive. Check its name and capacity.

![Select the target USB drive in balenaEtcher](/images/guides/zimaos-etcher-select-target.webp)

4. Click **Flash!**, authorize access if prompted, and wait for writing and verification to finish.

5. When Etcher reports completion, safely eject the USB drive. Continue with Step 3 below.

![balenaEtcher has finished flashing the ZimaOS image](/images/guides/zimaos-etcher-complete.webp)

### Step 3: Boot your device from USB
1. Insert the bootable USB drive into your device. Enter the BIOS or boot menu and boot from the USB drive.
2. On the ZimaOS Installer welcome screen, click **Start**.

![ZimaOS Installer welcome screen with the Start button](/images/guides/zimaos-installer-welcome.webp)

3. Choose the installer language and click **Continue**.

![Choose the ZimaOS Installer language](/images/guides/zimaos-installer-choose-language.webp)

4. Select the disk where you want to install ZimaOS. Check its name, path, and capacity carefully: **all data on this disk will be erased**. Click **Continue**.

![Select the disk to install ZimaOS](/images/guides/zimaos-installer-choose-disk.webp)

5. Review the target disk and the installation checks, then click **Continue**.

![Review the target disk and installation checks](/images/guides/zimaos-installer-ready.webp)

6. Check the disk once more on the erase warning, then click **Erase and install**.

![Confirm that the selected disk can be erased](/images/guides/zimaos-installer-erase-confirmation.webp)

7. Keep the device powered on while the installer writes ZimaOS.

![ZimaOS installation progress](/images/guides/zimaos-installer-progress.webp)

### Step 4: Complete ZimaOS Installation
When the installation complete screen appears, remove the USB drive, then click **Restart**. The device will boot from the installed disk into ZimaOS.

![ZimaOS installation complete screen with the Restart button](/images/guides/zimaos-installer-complete.webp)

### Step 5: Access ZimaOS
After reboot, the device screen shows system details and how to access ZimaOS. The serial number and IP address are obscured in this screenshot; use the address shown on your device.

![ZimaOS console with system details and access information, with serial number and IP address obscured](/images/guides/zimaos-console-access.webp)

The easiest way to connect is with **ZimaClient**, which can detect the device on your network. Download ZimaClient and follow the [ZimaOS Quick Start Guide](./get-started).

Alternatively, enter the IP address shown on your device into a browser to open the **ZimaOS Web UI**.

The example below shows the initial page on a ZimaCube. Select a language and review the Privacy Policy before continuing. The page may look different on other devices.

![Initial ZimaCube setup page with language and Privacy Policy options](/images/guides/zimaos-zimacube-welcome.webp)

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
- Continue with **[Get Started](./get-started)** for first boot setup
- Set up **[Remote Access](./remote-access)** to connect from anywhere
- Join our **[Community Forum](https://community.zimaspace.com/)**

💡 Bookmark this guide for future updates. New ZimaOS releases often include performance improvements and new apps.
