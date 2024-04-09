---
title: Small Size, Big Applications (OMV+ZimaBoard)
---
# OMV Introduction

![introduce openmediavault](/images/Small-body-Big-applications-(OMV+Zima)/introduce-openmediavault.png)

**OpenMediaVault (OMV), a Debian Linux-based Network Attached Storage (NAS) solution for use in a home environment or small office, is a simple and easy-to-use out-of-box solution that can be easily installed and managed by any novice user and includes many standard data applications services such as SSH, SMB, DAAP Media Server, RSync. It can also be enhanced with modular design framework features for additional application extensions such as KVM, Docker, etc. On the other hand, the small size of ZimaBoard and the small size of the OMV means convenience for the user. Size really doesn’t matter!**

# OMV Installation Preparation

- OMV installation [**image file**](https://www.openmediavault.org/download.html) (Recommended to download the latest official OMV6 stable version)
- A USB memory stick with a capacity of at least 1G
- miniDP cable connecting the monitor
- Network cable: Plugged into the network port on the ZimaBoard near the miniDP port
- Keyboards: A keyboard connected via USB is sufficient

# Attentions

- If the image fails to write, you can use a disk tool such as Diskgenius to clear the partition and format information on the USB stick. Try writing the image again.

- As the OMV installation process requires a networked environment in many places, it is important that the user connects Zima to a router or switch with a smooth Internet connection.

# OMV New Installation

## Setup of BIOS

**1.Insert the USB stick, connect the monitor with the miniDP cable, connect the keyboard, power on the ZimaBoard, and press the Del key on the keyboard continuously to enter the Bios.**
**2.By default, ZimaBoard’s BIOS uses its own eMMC as the preferred boot disk, as shown here**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/setup-of-bios.jpeg)

**3. In Boot, adjust Boot Option #1 to partition 1 of the USB stick, as follows: `"UEFI:Legend ZhenJBFast 1100"`is the partition where the OMV6 image is located, and `"UEFI:Legend ZhenJBFast 1100`, Partition 1" is the remaining space on the USB stick. `UEFI:Legend ZhenJBFast 1100, Partition 1"` is the remaining space on the USB stick, and the user should select `"UEFI:Legend ZhenJBFast 1100"` as the boot preference.**
**4. After pressing Save & Exit, ZimaBoard will reboot and go to the OMV6 installation screen.**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/chosse-uefi-boot.jpeg)

## Steps of Installation

**1.To initialize the installation, select Install and press enter**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/install-omv.png)

**2.Select the language for the installation process; the default is English**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/select-language.png)

**3.By default, ZimaBoard has dual network ports, with enp2s0 being the one near the miniDP port and enp3s0 being the one near the power supply**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-lan-port.jpeg)

**4.When the installer asks the user to select the installation path of the OMV, please make sure it is set to “MMC/SD CARD”**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-emmc.jpeg)

**5.The installer will ask the user to confirm that the ZimaBoard internal hard disk space is cleared of all contents and repartitioned**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/partition-disks.jpeg)

**6.The installer then asks the user to set the initial password for the root account**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/Initialize-password.jpeg)

{% note danger %}
**tips:**
  Be sure to remember that this set of account’s passwords is required for subsequent background configuration operations.
{% endnote  %}

**7. When the installer asks the user to select the Debian image source, please make sure to select the user’s current country or region and choose the appropriate image source in it. Remember: This choice will greatly affect the user’s daily update/installation speed of various OMV plug-ins**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-image.jpeg)

**8. When proceeding to the picture below, the fresh installation of OVM is complete, and the user can continue the OMV reboot after removing the USB drive.**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/usb-drive-boot.jpeg)

{% note danger %}

**Please Note:**

- If a wrong selection or setting is made during the installation process, you can press the Cancel button to go back to the installation progress directory and select the progress page the user needs to reset.
- After the new installation is complete, if the USB flash drive is removed before the OMV reboots, BIOS will automatically use the OMV boot partition in eMMC as the preferred boot disk, so users do not have to enter the BIOS again to set the Boot Option.

{% endnote  %}

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)
