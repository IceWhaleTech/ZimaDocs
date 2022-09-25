---
title: Unraid First Experience At $129 - Installation
---

# Introduce Unraid

![introduce unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-introduce-unraid.png)

Unraid OS allows sophisticated media aficionados, gamers, and other intensive data-users to have ultimate control over their data, media, applications, and desktops, using just about any combination of hardware.

# First option - official software burn image

## Create an installation USB stick
Prepare a USB stick（Needs to be greater than 1G） and format it in FAT32 format，name changed to UNRAID（Mac）

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive1.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive2.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive3.png)

## Download the official [USB Creator](https://unraid.net/download)

![Creator Unraid Offical](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-usb-creator.png)

## Download the [Official Image](https://unraid.net/download)

![Download Unraid offical image](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-image.png)

## Open the USB Creator and Wirte Unraid OS

Select the following options according to the specification

![write unraid os](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-unraid-os.png)

**Click write and wait**

![write unraid image](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image.png)

![write unraid image done](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image-done.png)

# Second option - write the system image manually

## Modify "make_bootable"

**Download the image package and extract all the files, copy the extracted files to the root directory of your USB stick**

> **Tips：**
>
> The format of the USB stick also needs to be FAT32
>
> Windows systems need to run the make_bootable.bat file from the USB stick as administrator
>
> Linux systems execute the make_bootable_linux file

![change Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-click-boottable.png)

## Complete burn-in

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in.png)

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in1.png)

## Installing UnraidOS to ZimaBoard

## Boot from the installation USB stick

![Boot Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot.png)

## Choose OS

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot-choose-unraidos.png)

> ## Boot Mode Selector (Syslinux)
> After configuring your BIOS, you will be prompted with the unRAID Server OS boot menu. There are a number of options available for you to select:
>
> **unRAID OS (Headless)**
>
> The standard boot mode for unRAID Server OS, headless mode utilizes less memory than desktop mode, but relies on the use of another device to access the webGui for management.
>
> **unRAID OS GUI Mode (Desktop)**
>
> Desktop mode loads a lightweight desktop interface with a quick-launch menu for accessing the webGui, product documentation, and useful Linux utilities including a bash shell, midnight commander, and htop. This mode may be helpful for users trying to diagnose network connectivity problems or for users that don't have a separate device to use for connecting to the webGui.
> **unRAID OS Safe Mode (Headless)**
>
> Use this boot mode to diagnose if plugins are causing stability issues on your system.

![log in unraid OS](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-log-in-unraid-with-ip.png)

# Connecting to the Unraid webGui

There are two methods to connect to the webGui in Unraid:

- Boot Unraid in GUI mode and login (username is **`root`**, no password by default); or

- Open a web browser from your Mac or PC and navigate to **`http://tower.local`** Note: if you configured a different host name in the USB Flash Creator, use that name instead of **`tower`**.

![Unraid user dashboard](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-unraid-dashborad.png)

This is the main interface of UNRAID . A lot of information can be seen on this page, such as system status, motherboard information, CPU usage, network, disk information, user information, etc.


[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)