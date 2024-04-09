---
title: Swiping on my favorite third-party Linux distro——ONE
typora-root-url: ..
---
-- I don't like the official ZimaBoard pre-installed systems and services
-- Installing a new operating system for the ZimaBoard

Many of you have purchased a ZimaBoard and want to install a number of different operating systems to experience or meet specific usage needs.

Here we will show you how to install a new operating system on your ZimaBoard, using the installation of the Ubuntu server operating system as an example.

# Introduce Ubuntu Server

![Introduce Ubuntu Server](/images/Installing-Ubuntu-System/install-ubuntu-system-introduce-ubuntu.png?400x100)

Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.Ubuntu is officially released in three editions: Desktop,Server,and Core for Internet of things devices and robots.

# Preparation

**What you need to do on your computer to prepare.**

- Download and install [balenaEtcher](https://www.balena.io/etcher/) on your computer
- Download the system image you wish to install, in the text [Ubuntu Server](https://ubuntu.com/download/server)
  
**ZimaBoard related preparation.**

- ZimaBoard and power adapter
- A USB drive (The capacity needs to be larger than the system image you want to install)
- A miniDP to DP/HDMI Adapter (Used to connect to a monitor)
- A monitor
- A keyboard
- A USB hub (Optional, if the USB port is not enough)
- A mouse (Optional)
  - It will be convenient if the system installer you want to install comes with a GUI interactive interface. Most desktop OS will have one, server OS generally do not.)
- A network cable (Recommended)
  - Convenient for you to complete the network setup and install the latest security and feature updates at the same time as installing the system.)

# Create an installation USB stick

## 1.  Open balenaEtcher

![Open balenaetcher](/images/Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

## 2. Click on "Flash from file" and select the system image you downloaded earlier

![Create Ubunt Server Image](/images/Installing-Ubuntu-System/intall-ubuntu-system-choose-image-in-balenaetcher.png)

![Create Ubunt Server Image](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-image-in-balenaetcher1.png)

## 3. Click "Select target" and select your inserted USB drive in the dialog box

![Create Ubunt Server Image](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-usb-disk.png)

## 4. Click "Flash!" and wait for it to complete

You may be asked to enter your system password during the process, just enter it and click OK.

![Enter you Computer Account And Password](/images/Installing-Ubuntu-System/install-ubuntu-system-enter-password.png)

The whole process will take a few minutes, depending on the size of your system image and the read/write speed of your USB drive.

![Create Ubunt Server Boot Usb Disk ](/images/Installing-Ubuntu-System/install-ubuntu-system-makeing-image.png)

## 5. Complete! Remove the USB drive and you're ready to go

![Complete Create Ubunt Server Boot Usb Disk ](/images/Installing-Ubuntu-System/install-ubuntu-system-image-complete.png)

# Installing Ubuntu Server to ZimaBoard

**Boot from the installation USB stick**

## 6.Connecting the accessories to ZimaBoard

Connect your **USB Drive**, **Monitor**, **Keyboard**, **UsB Hub**(Optional), **Mouse** (Optional), **Network Cable** (Recommended) to **ZimaBoard.**

# Power on and select the boot device

## 7.Connect power and press F11 continuously

## 8.Select your USB drive starting with UEFI in the boot device menu

![Ubunt Server Choose Usb Boot](/images/Installing-Ubuntu-System/intall-ubuntu-system-choose-usb-boot.jpg)

## System Start Install

![Ubunt Server Install System](/images/Installing-Ubuntu-System/install-ubintu-system-start-installing.png)

**Refer to the [official Ubuntu installation tutorial](https://ubuntu.com/tutorials/install-ubuntu-server#3-boot-from-install-media) for setup.**

{% note danger %}
that when selecting storage space please take care to select the correct disk
Because operating systems and storage vendors calculate storage space sizes differently, usually the capacity you see when you install your system is not exactly the same as the hardware capacity. You can tell the difference by the type of disk and the approximate size.
The built-in storage type of the ZimaBoard is eMMC, which may also be recognized as an MMC device in the operating system.
{% endnote %}

## Completing the installation

When the installation is complete, you will see a message on your screen like this

![Complete Install Ubuntu Server System](/images/Installing-Ubuntu-System/install-ubuntu-system-complete-install.png)

Unplug your installation USB drive and select **"Reboot Now"**.

{% note danger %}
Attention! You may need to modify the boot sequence in BIOS or select the boot device at boot time, if you install the OS to an external hard disk.
{% endnote %}
**ZimaBoard installs any operating system you like!**

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)
