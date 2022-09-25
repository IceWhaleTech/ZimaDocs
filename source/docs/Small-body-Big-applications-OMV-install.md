---
title: Small body Big applications (OMV+Zima)
---
# OMV Introduction
![introudce openmediavault](/images/Small-body-Big-applications-(OMV+Zima)/introudce-openmediavault.png)

**OpenMediaVault (OMV), a Debian Linux-based Network Attached Storage (NAS) solution for use in a home environment or small office, is a simple and easy to use out of box solution that can be easily installed and managed by any novice user and includes many common Data application services such as SSH, SMB, DAAP Media Server, RSync, and it can also be enhanced with modular design framework features for additional application extensions such as KVM, Docker, etc. On the other hand, the small size of Zima and the small size of the OMV means convenience for the user, as the saying goes: small size for big applications.**

# OMV Installation Preparation

- OMV installation [**image file**](https://www.openmediavault.org/download.html) (Recommended to download the latest official OMV6 stable version)
- A USB memory stick with a capacity of at least 1G
- miniDP cable. Connecting the monitor
- Network cable. Plugged into the network port on the Zima near the miniDP port
- Keyboards. A keyboard connected via USB is sufficient

# Attentions
- If the image fails to write, you can use a disk tool such as Diskgenius to clear the partition and formatting information on the USB stick and then try writing the image again.

- As the OMV installation process requires a networked environment in many places, it is important that the user connects Zima to a router or switch with a smooth Internet connection.

# OMV New Installation

## Setup of BIOS

**1. Inserted the USB stick, connected the monitor with the miniDP cable, connected the keyboard, powered on the Zima and pressed the Del key on the keyboard continuously to enter the Bios**
**2. By default, Zima's BIOS uses its own emmc as the preferred boot disk, as shown here**
   
![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/setup-of-bios.jpeg)

**3. In Boot, adjust Boot Option #1 to partition 1 of the USB stick, as follows: `"UEFI:Legend ZhenJBFast 1100" `is the partition where the OMV6 image is located, and `"UEFI:Legend ZhenJBFast 1100`, Partition 1" is the remaining space on the USB stick. `UEFI:Legend ZhenJBFast 1100, Partition 1"` is the remaining space on the USB stick, and the user should select `"UEFI:Legend ZhenJBFast 1100"` as the boot preference.**
**4. After Save & Exit, Zima will reboot and go to the OMV6 installation screen.**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/chosse-uefi-boot.jpeg)

## Steps of Installation

**1. To initialise the installation, select Install and enter**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/install-omv.png)

**2.Select the language for the installation process, the default is English**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/select-language.png)

**3. By default Zima has dual network ports, with enp2s0 being the one near the miniDP port and enp3s0 being the one near the power supply.**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-lan-port.jpeg)

**4.When the installer asks the user to select the installation path of the OMV, please make sure that "MMC/SD CARD**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-emmc.jpeg)

**5. The installer will ask the User to confirm that the Zima internal hard disk space is cleared of all contents and repartitioned**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/partition-disks.jpeg)

**6. When the installer asks the user to set the initial password for the root account**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/Initialize-password.jpeg)

{% note danger %}
**tips:**
  Be sure to remember that this set of account passwords is required for subsequent background configuration operations.
{% endnote  %}

**6. When the installer asks the user to select the Debian image source, please make sure to select the user's current country or region, and choose the appropriate image source in it, this choice will greatly affect the user's daily update/installation speed of various OMV plug-ins, remember!**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-image.jpeg)

**7. When proceeding to the picture below, the fresh installation of OVM is complete and the user can continue the OMV reboot after removing the USB drive.**


![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/usb-drive-boot.jpeg)

{% note danger %}

**Attentions**

- If a wrong selection or setting is made during the installation process, you can press the Cancel button to go back to the installation progress directory and select the progress page that the user needs to reset.
- After the new installation is complete, as long as the USB flash drive is removed before the OMV reboots, BIOS will automatically use the OMV boot partition in emsc as the preferred boot disk, so users do not have to enter the BIOS again to set the Boot Option.

{% endnote  %}

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)