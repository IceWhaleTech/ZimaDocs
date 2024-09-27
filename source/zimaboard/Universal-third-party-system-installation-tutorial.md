---
title: Universal Third-party System Installation
typora-root-url: ..
---
## Reason

**Many users do not know how to install the system after we have downloaded it. Do not know the clear installation steps, etc. This article will help users to solve the problem of installing the system**

## Universal Production Mirror

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

## 1.Open balenaEtcher


![Open Balenaetcher](/images/Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

## 2. Click “Flash from file” and select the system image you downloaded earlier.

![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/intall-ubuntu-system-choose-image-in-balenaetcher.png)


![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-image-in-balenaetcher1.png)

## 3.Click “Select target” and select your inserted USB drive in the dialog box.

![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-usb-disk.png)

## 4.Click “Flash!” and wait for it to complete.
You may be asked to enter your system password during the process, just enter it and click OK.

![Enter you Computer Account And Password](/images/Installing-Ubuntu-System/install-ubuntu-system-enter-password.png)

The whole process will take a few minutes, depending on the size of your system image and the read/write speed of your USB drive.

![Waitting Balenaetcher Flash](/images/Installing-Ubuntu-System/install-ubuntu-system-makeing-image.png)

## 5.Completion! Remove the USB drive, and you’re ready to go!

![Complete Create Usb Boot](/images/Installing-Ubuntu-System/install-ubuntu-system-image-complete.png)

## Universal Start-up System

After the ZimaBoard is plugged in, press the **`F11 key`** / **`Delete key`** uninterrupted . When we insert the U disk boot disk, it will automatically display the USB key, select the USB key and press the Enter key

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)