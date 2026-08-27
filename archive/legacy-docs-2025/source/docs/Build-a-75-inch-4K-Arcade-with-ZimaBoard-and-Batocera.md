---
title: Build a 75-inch 4K Arcade Machine with ZimaBoard and Batocera.linux
---
>**Story:**
 There are still so many retro games out there, and browsing through them one by one, with their memorable names and screenshots, is like going back in time. It’s like going back in time to your own childhood passions and desires)This tutorial will take us back to your early days.

**Read this document to learn about other ways to use ZimaBoard and get a quick overview of the diversity of ZimaBoard use**
> **Reasons to choose Batocera：**
    - > **Batocera** is one of the easiest ways to turn our ZimaBoard into an attractive retro console with multiple emulators and hundreds of games to enjoy.
    - > One of the positive points of **Batocera** is that it does not modify the internal storage memory of the ZimaBoard or other compatible devices. Remove the memory or the card we use when we do not want to use Batocera, and our machine will return to its original state without any modification. There is a  system similar to [EmuELEC](https://androidpctv.com/、tutorial-emuelec-turns-your-android-tv-box-into-a-retro-console/) that we can also try.

# 1. WHAT IS [BATOCERA.LINUX](https://batocera.org/) ?

![Introduce Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera.png)

**[Batocera](https://batocera.org/) software, based on Debian distribution, is a group of emulators that allows us to load games with their covers and other extras to play in an orderly way dozens of emulators of different machines. To play them, you need the ```ROMS or ISO``` of the games. Some of these systems also require the BIOS images of the machine to emulate.**

**Batocera also supports ```Android```,```PC``` ```or MacOS``` computers of all kinds, ```Raspberry Pi``` boards, and many **portable retro consoles**… for which there are exclusive distributions. Batocera installation is simple and easy to configure, its interface is nice and easy to use, and the list of supported emulators is huge.**

- Basic emulators supported: AMIGA, MSX, NES, SNES, GBA, MG, DREAMCAST, NDS, PS1, CPS1/2/3…
- Supported only on powerful hardware: PS2, PS3, GAMECUBE, 3DS, WII/U, SWITCH, XBOX…
- [Complete list of emulated systems in Batocera.](https://batocera.org/compatibility.php)
- [Batocera wiki](https://wiki.batocera.org/)

![Introduce Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera2.png)

# 2.INSTALL BATOCERA ON USB PENDRIVE OR MICROSD

## Things to Prepare in Advance

![Batocera Linux](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare.png)

![Introduce Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare2.jpeg)

## Making a Batocera Image

**To install **Batocera** we need the **IMG.GZ** file for our device.To download it, we only have to enter the Batocera website and save it on our computer. Then thanks to the balenaEtcher software, we will create the boot drive that will allow us to run the system without modifying our device.**

- **[Download Batocera image file IMG.GZ.](https://batocera.org/download)**
- **[Download Balena to burn the image](https://www.balena.io/etcher)**
- **[Download BIOS pack for Batocera](https://github.com/Abdess/retroarch_system/releases/download/RetroArch-v1.9.13/Batocera_V33.zip)**

## Create boot drive for Batocera

**After downloading the necessary files, we can generate the  ```SD memory or USB drive``` to boot this system, running the Balena program. If it does not work on our device by USB drive is recommended to use an SD card; in any case, we must have the fastest possible drive if we are going to use it with this method.**

**- step1**

**We require a [microSD card or USB drive](https://amzn.to/3tcdzSh)as fast as possible, at least 16 GB and a PC card reader.**

**- step2**

**Open your Balena and click on Flash from the file and select the Batocera you have just downloaded.**

![Open balenaetcher](/images//Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

**- step3**

**Select the ```SD memory or USB drive``` you need to boot from** 

![choose usb drive](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

**- step4**

**Enter your host password to start the conversion**

![choose usb drive](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

# 3.Power on ZimaBoard

## First boot on ZiamBoard

**With the ZimaBoard turned off, we insert the micro ```SD card or USB drive``` prepared with Batocera.**

![Zimaboard Connect Usb](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-connect-usb.png)

**When booting, long press to enter the Bios interface, select the ```U disk boot```**

![Zimaboard Boot Select The USB Disk](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-select-the-u-disk.jpeg)

**Finally, you are in the Batocera interface**

![Enter Batocerag](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-enter-batocera.png)

# 4. Getting Started with Batocera

## Handle Usage Rules

![Batocera Hotkeys](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-in-game-batocera-hotkeys.png)

Batocera may not be suitable for all grips, but it satisfies the rules of use of the mainstream grips on the market.

## Play
**Batocera is shipped with a selection of ```free ROMs - games``` that are freely available and that can be legally distributed.**

![Play Batocera With Zimaboard](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-play.jpeg)

# 5.Other Configurations

**If you want to add your own ROM and BIOS files, you must first get access to Batocera**

## Find a ZiamBoard IP Address 

**- Step1 Press the space bar**

**- Step2 Find NETWORK SETTINGS And Enter**

![Batocera Setting Nerwork](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings.jpeg)

**- Step 3 Find IP address**

![Batocera Setting Nerwork](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings1.jpeg)


**- Step 4 Link to ZimaBoard using your computer** 

![Batocera Setting Nerwork](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings2.jpeg)

**- Step 5 Click on Connect to go to the folder**

![Batocera Setting Nerwork](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings3.jpeg)

![iBatocera Setting Nerworkmg](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings4.jpeg)

**- Step 6 Place the Rom or BIOS you downloaded into the appropriate folder** 

Please refer to the **[official tutorial](https://wiki.batocera.org/add_games_bios)** for detailed documentation

## Overwriting the Batocera with the Original System

**- Step1 Press the space bar and look for `SYSTEM SETTINGS`**

![Batocera System](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings.jpeg)

**- Step2 Select `INSTALL BATOCREA ON A NEW DISK`**

![Batocera System](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings2.jpeg)

**- Step 3 TARGET DEVICE `16 or 32G` TARGECT ARCHITCTURE Choose `X860_64 `ARE YOU SURE？choose `yes`**

**Finally click on `INSTALL`**

![Batocera System](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings3.jpeg)

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)