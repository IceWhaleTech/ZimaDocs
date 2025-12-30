---
title:Arch Linux Installation on ZimaBoard 2
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 段落标题
## **I. Overview**

Arch Linux has long been favored by developers and advanced users for its minimalist design, rolling release model, and high degree of customizability.

ZimaBoard 2 is an x86-based single-board server that balances performance and expandability, making it an excellent platform for deploying Arch Linux in scenarios such as home servers, self-hosted services, and development or testing environments.

This article provides a complete walkthrough of installing Arch Linux on ZimaBoard 2 and performing basic system configuration. The steps are presented clearly and are designed to be reproducible, serving as a practical reference for users deploying Arch Linux on this platform for the first time.

* * *

## **II. Preparation**

1.  ### Hardware Checklist
    

*   **ZimaBoard 2 main board**
*   > ⚠️ In this guide, the system is installed on the onboard eMMC. The installation process will partition and format the eMMC. Please ensure there is no important data stored on it.
>     

*   **HDMI monitor + USB keyboard**
    

 *   **USB flash drive (≥ 8 GB)** (for creating the bootable installer)

 *   >⚠️ The USB drive will be formatted during the creation of the bootable media. All existing data will be erased. Be sure to back up any important files in advance.  
>     

*   **Wired network connection** (recommended, as an internet connection is required during installation)
    

2.  ### Software Preparation
    

* **A computer for creating the bootable USB** (Windows, macOS, or Linux)
    
*   [\- Official Arch Linux ISO image (2025.12.01)](https://archlinux.org/download/)
    
*   **Bootable USB creation tool** (choose one):
    
    *   **balenaEtcher** (cross-platform, graphical interface, recommended)
        
    *   **Rufus** (for Windows users)
        

* * *

## **III. Creating the Bootable USB (Using balenaEtcher as an Example)**

![balenaEtcher burning process](https://manage.icewhale.io/api/static/docs/1766567149666_copyImage.png)

> ⚠️ Creating the bootable USB drive will format the flash drive and erase all existing data. Be sure to back up any important files in advance.

1. Insert the USB flash drive.  
    
2.  Launch **balenaEtcher**.
    
3.  Click **“Flash from file”** and select the downloaded `archlinux-2025.12.01-x86_64.iso`.
    
4.  Click **“Select target”** and choose your USB flash drive (make sure not to select the wrong device).
    
5.  Click **“Flash!”** and wait for the writing process to complete.
    
6.  Safely eject the USB flash drive.
    

![balenaEtcher burning complete](https://manage.icewhale.io/api/static/docs/1766567150367_copyImage.png)  

* * *

## **IV. Booting ZimaBoard 2 from the USB Drive**

1.  Insert the prepared Arch Linux bootable USB drive into a USB port on the ZimaBoard 2.
    
2.  Connect the HDMI monitor, keyboard, and Ethernet cable.
    
3.  Power on the device. When the **ZIMA** logo appears, repeatedly press **F11** to enter the **Boot Menu**.
    
4.  Use the arrow keys to select your USB flash drive.
    
5.  Press **Enter** to confirm and boot from the USB drive.
    

![boot options](https://manage.icewhale.io/api/static/docs/1766567151194_copyImage.png)

* * *

## **V. Entering the Installation Environment and Performing Initial Configuration**

1.  ### Booting into the Arch Linux Installation Environment
    

From the boot menu, select the first option:

    Arch Linux install medium (x86_64)

![arch startup options](https://manage.icewhale.io/api/static/docs/1766567151645_copyImage.png)

After the boot process completes, you will be dropped into a root shell:

    root@archiso ~ #

![
Arch installation environment](https://manage.icewhale.io/api/static/docs/1766567152384_copyImage.png)

This means you are now in the Arch Linux installation environment.

* * *

2.  ### **Verify Network Connectivity**
    

First, check whether the system has detected a network interface:

    ip link

If you can see an interface such as **enp\***, this indicates that the network interface card has been successfully detected.

* * *

3.  ### **Test Network Connectivity**
    

Next, test the network connection:

    ping archlinux.org

If the ping succeeds, the network connection is working properly. Press`Ctrl + C` to stop the test.

![Network connectivity test](https://manage.icewhale.io/api/static/docs/1766567153730_copyImage.png)

* * *

4.  ### **Synchronize System Time**
    

Before proceeding with the installation, it is recommended to enable network time synchronization to ensure accurate system time.

Enable NTP to allow automatic time synchronization:

    timedatectl set-ntp true

Check the synchronization status:

    timedatectl

If the time is displayed correctly, the system time synchronization is complete.

![Synchronize system time](https://manage.icewhale.io/api/static/docs/1766567154188_copyImage.png)

* * *

5.  ### **Disk Partitioning (GPT)**
    

This guide assumes that the system will be installed on the **onboard eMMC device**.

> ⚠️ The installation process will partition and format the onboard eMMC. Please ensure that there is no important data stored on the eMMC before proceeding.

* * *

#### View Disk Information

    lsblk

Run the following command to view disk and partition information in a tree structure:

![View disk information](https://manage.icewhale.io/api/static/docs/1766567155139_copyImage.png)

#### Create a GPT Partition Table Using `cfdisk`

##### Launch the partitioning tool:

    cfdisk /dev/mmcblk0

![Enter the partition tool](https://manage.icewhale.io/api/static/docs/1766567156058_copyImage.png)

##### Select the Partition Table Type

When entering `cfdisk` for the first time, you will be prompted to choose a partition table type. Select:`GPT`

![Select partition table type](https://manage.icewhale.io/api/static/docs/1766567156700_copyImage.png)

##### Create the First Partition (EFI System)

###### ① Create a New Partition

In the main `cfdisk` interface, perform the following steps:

1.  Use the **right arrow key (→)**.
    
2.  Move the cursor to the bottom menu and select **\[NEW\]**.
    

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567157176_copyImage.png)

3.  Press **Enter** to create a new partition.
    

###### ② Specify the Partition Size

When prompted for the partition size, enter:`512M`

![Input 512M](https://manage.icewhale.io/api/static/docs/1766567157797_copyImage.png)

Then press **Enter**.

###### ③ Set the Partition Type

After the new partition is created:

1.  Ensure the newly created partition is selected.
    
2.  Use the **right arrow key (→)** to move to the bottom menu.
    
3.  Select **\[Type\]**.
    
4.  Press **Enter**.
    

![View partition type](https://manage.icewhale.io/api/static/docs/1766567158616_copyImage.png)

###### ④ Choose the EFI System Type

From the list of partition types:

1.  Use the **↑ / ↓** arrow keys.
    
2.  Locate **EFI System**.
    
3.  Press **Enter** to confirm.
    

![Select partition type](https://manage.icewhale.io/api/static/docs/1766567159383_copyImage.png)

###### ⑤ Verify the Result

Back at the main interface, you should see an entry similar to:

`/dev/mmcblk0p1 512M EFI System`

![Confirm partition results](https://manage.icewhale.io/api/static/docs/1766567160155_copyImage.png)

* * *

##### **Create the Second Partition (Swap)**

###### ① Select the Free Space

Use the **↓** arrow key to select:`Free space 28.6G`

###### ② Create a New Partition

*   Use the **right arrow key (→)** to move to the bottom menu.
    
*   Highlight **\[NEW\]**.
    
*   Press **Enter**.
    

###### ③ Specify the Partition Size

When prompted for the size, enter:`2G`

![Enter 2G](https://manage.icewhale.io/api/static/docs/1766567161097_copyImage.png)

###### ④ Set the Partition Type to Linux Swap

*   Select the newly created ~2 GB partition.
    
*   Enter **\[Type\]**.
    
*   Choose **Linux swap**.
    

![Set the partition type to Linux swap.](https://manage.icewhale.io/api/static/docs/1766567162104_copyImage.png)

* * *

##### Create the Third Partition (Root)

###### ① Select the Remaining Free Space

You should now see:

`Free space 26.6G`

Keep this entry selected.

![Create the third partition (Root).](https://manage.icewhale.io/api/static/docs/1766567162844_copyImage.png)

###### ② Create a New Partition

*   Use the **right arrow key (→)** to move to the bottom menu.
    
*   Select **\[NEW\]**.
    
*   Press **Enter**.
    

![
Select the 3rd partition (Root).](https://manage.icewhale.io/api/static/docs/1766567163775_copyImage.png)

###### ③ Use All Remaining Space

When prompted for the partition size:

**Do not enter anything. Simply press Enter** to use all remaining space.

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567164682_copyImage.png)

###### ④ Set the Partition Type

After the partition is created:

*   The default partition type is **Linux filesystem**.
    
*   In most cases, no change is required. Keep the default.
    

![Default partition type](https://manage.icewhale.io/api/static/docs/1766567165509_copyImage.png)

* * *

##### Write the Partition Table and Exit

###### Write the Partition Table

*   Select **\[Write\]**.
    

![Write to partition table](https://manage.icewhale.io/api/static/docs/1766567166450_copyImage.png)

*   Press **Enter**.
    
*   When prompted, type:yes
    

![Confirm writing](https://manage.icewhale.io/api/static/docs/1766567167219_copyImage.png)  

###### Exit `cfdisk`

*   Select **\[Quit\]**.
    

![Exit cfdisk](https://manage.icewhale.io/api/static/docs/1766567168020_copyImage.png)

*   Press **Enter**.
    

* * *

##### Partitioning Summary

At this point, disk partitioning is complete. You should have the following layout:


| Size |Partition | type |
| - | - | - |
| mmcblk0p1| 512M | EFI System |
| mmcblk0p2 | 2G | Linux swap |
| mmcblk0p3 | 26.6G | Linux filesystem |

![Partition completed](https://manage.icewhale.io/api/static/docs/1766567168969_copyImage.png)

At this point, you have completed the most error-prone step in the Arch Linux installation process.

* * *

6.  ### Format Partitions
    

In simple terms:

*   **Formatting** = clearing a partition and preparing it for use
    
*   **Mounting** = telling the system how these partitions should be used
    

* * *

#### ① Format the EFI Partition (FAT32)

Run the following command to format `mmcblk0p1`:

    mkfs.fat -F32 /dev/mmcblk0p1

![Format partition](https://manage.icewhale.io/api/static/docs/1766567169740_copyImage.png)

#### ② Initialize and Enable the Swap Partition

    mkswap /dev/mmcblk0p2
    swapon /dev/mmcblk0p2

![Initialize and enable partitions](https://manage.icewhale.io/api/static/docs/1766567170625_copyImage.png)

#### ③ Format the Root Partition (ext4)

    mkfs.ext4 /dev/mmcblk0p3

![Format root partition](https://manage.icewhale.io/api/static/docs/1766567171361_copyImage.png)

* * *

7.  ### Mount Partitions
    

#### Mount the Root Partition to `/mnt`

    mount /dev/mmcblk0p3 /mnt

#### Create and Mount the EFI Partition

    mkdir /mnt/boot
    mount /dev/mmcblk0p1 /mnt/boot

![Create and mount the EFI partition](https://manage.icewhale.io/api/static/docs/1766567172129_copyImage.png)

* * *

## VI. Installing Arch Linux (pacstrap)

1.  ### Run `pacstrap`
    

    pacstrap /mnt base linux linux-firmware networkmanager sudo vim

**Parameter explanation (for reference):**

*   **base**: Minimal Arch Linux system
    
*   **linux**: Standard Linux kernel
    
*   **linux-firmware**: Hardware firmware (required)
    
*   **networkmanager**: Network management tool
    
*   **sudo**: Privilege management for non-root users
    
*   **vim**: Text editor (used for later configuration)
    

This step will download and install packages. The duration depends on network speed. A large amount of output during the process is normal.

![Execute pacstrap](https://manage.icewhale.io/api/static/docs/1766567172894_copyImage.png)

![pacstrap execution complete](https://manage.icewhale.io/api/static/docs/1766567174214_copyImage.png)

* * *

2.  ### Generate the `fstab` File
    

Generate the filesystem mount table for the new system:

    genfstab -U /mnt >> /mnt/etc/fstab

![Generate fstab file](https://manage.icewhale.io/api/static/docs/1766567175220_copyImage.png)

* * *

3.  ### Enter the Newly Installed System (chroot)
    

*   Switch into the newly installed Arch Linux system environment:
    

`arch-chroot /mnt`

*   After a successful switch, the shell prompt will change to something similar to:
    

`[root@arch /]#`

**This indicates that you have exited the installation environment and are now inside the newly installed Arch Linux system.**

![Enter the newly installed system (chroot)](https://manage.icewhale.io/api/static/docs/1766567175932_copyImage.png)

* * *

## VII. Basic System Configuration

1.  ### Set the Time Zone
    

Using Hong Kong as an example:

    ln -sf /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime

Synchronize the hardware clock (very important):

    hwclock --systohc

![Synchronizing hardware clock](https://manage.icewhale.io/api/static/docs/1766567176716_copyImage.png)

Quick verification (optional)

If the time is shown as **UTC+8 (Hong Kong time)**, the configuration is successful.

![Hardware clock synchronization successful](https://manage.icewhale.io/api/static/docs/1766567177777_copyImage.png)

* * *

2.  ### Configure Locale (Language)
    

#### ① Edit the locale list

Open the locale configuration file:

    vim /etc/locale.gen

![Set language](https://manage.icewhale.io/api/static/docs/1766567178733_copyImage.png)

Find the language you want and uncomment the corresponding line (remove the leading `#`). Example for English (United States):

    en_US.UTF-8 UTF-8

![Set language en_US](https://manage.icewhale.io/api/static/docs/1766567179497_copyImage.png)

Save and exit:

*   Press **Esc**
    
*   Type `:wq`
    
*   Press **Enter**
    

#### ② Generate locales

    locale-gen

![Generate locale](https://manage.icewhale.io/api/static/docs/1766567180239_copyImage.png)  

3.  ### Set the Hostname
    

Set the system hostname. You may replace it with any name you like. Here, `arch` is used as an example (you can choose a different name):

    echo "arch" > /etc/hostname

![Set system hostname](https://manage.icewhale.io/api/static/docs/1766567180931_copyImage.png)

Next, configure the `hosts` file:

    vim /etc/hosts

![vim hosts](https://manage.icewhale.io/api/static/docs/1766567181830_copyImage.png)

Modify the file as follows:

    127.0.0.1   localhost
    ::1         localhost
    127.0.1.1   arch.localdomain arch

![
hosts example](https://manage.icewhale.io/api/static/docs/1766567182309_copyImage.png)

⚠️ If your hostname is not `arch`, replace `arch` in the above lines with the hostname you actually set.

Save and exit Vim:

*   Press **Esc**
    
*   Type `:wq`
    
*   Press **Enter**
    

* * *

4.  ### Set the Root Password
    

Set a login password for the `root` user:

    passwd

The system will prompt you to enter the password twice:

1.  Enter the new password
    
2.  Re-enter it to confirm
    

⚠️ Notes:

*   No characters (not even `*`) will be displayed while typing the password — this is normal.
    
*   Make sure both entries match.
    

Once completed, you can log in as `root` using this password.

![Set root password](https://manage.icewhale.io/api/static/docs/1766567182798_copyImage.png)

* * *

5.  ### Enable Network Service
    

Enable NetworkManager to start automatically at boot:

    systemctl enable NetworkManager

![Enable network services](https://manage.icewhale.io/api/static/docs/1766567183538_copyImage.png)

![Network service enabled successfully](https://manage.icewhale.io/api/static/docs/1766567184534_copyImage.png)

* * *

## VIII. Install and Configure the systemd-boot Bootloader

1.  ### Install systemd-boot
    

Simply run:

    bootctl install

![Install systemd-boot](https://manage.icewhale.io/api/static/docs/1766567185486_copyImage.png)

* * *

2.  ### Create an Arch Linux Boot Entry
    

You need the following file:

`/boot/loader/entries/arch.conf`

This file tells systemd-boot:

*   Where the kernel is
    
*   Where the initramfs is
    
*   Which partition is the root filesystem
    

#### ① Obtain the PARTUUID of the root partition

    blkid /dev/mmcblk0p3

You should see output similar to:

    /dev/mmcblk0p3: PARTUUID="12345678-9abc-def0-1234-56789abcdef0"

> Copy and note the value inside the quotes.

![Write down PARTUUID.](https://manage.icewhale.io/api/static/docs/1766567186422_copyImage.png)

* * *

#### ② Create the boot entry configuration file

    vi /boot/loader/entries/arch.conf

![Create startup configuration file](https://manage.icewhale.io/api/static/docs/1766567187080_copyImage.png)

Enter insert mode (press **i**) and enter the following content:

⚠️ Replace `YOUR_PARTUUID` with the actual value obtained in the previous step.

    title   Arch Linux
    linux   /vmlinuz-linux
    initrd  /initramfs-linux.img
    options root=PARTUUID=YOUR_PARTUUID rw
    

![arch.conf example](https://manage.icewhale.io/api/static/docs/1766567187556_copyImage.png)

Save and exit:

*   Press **Esc**
    
*   Type `:wq`
    
*   Press **Enter**
    

* * *

## IX. Finish Installation and Reboot

### Exit chroot

Leave the chroot environment:`exit`

![Exit the chroot environment](https://manage.icewhale.io/api/static/docs/1766567188512_copyImage.png)

### Reboot the system

`reboot`

> ⚠️ Before rebooting, **make sure to remove the installation media** (USB drive / ISO).

![Restart the system](https://manage.icewhale.io/api/static/docs/1766567189421_copyImage.png)

* * *

### Installation Complete

After a successful boot, you should see a screen similar to the following:

![Installation completed](https://manage.icewhale.io/api/static/docs/1766567190046_copyImage.png)

🎉 At this point, the basic installation of **Arch Linux** is complete. The system is now a clean, functional, and extensible starting point.

### Next steps you may consider:

*   Configure networking
    
*   Set up a desktop environment
    

You can refer to the official Arch Wiki for further guidance: [https://wiki.archlinux.org/title/General\_recommendations](https://wiki.archlinux.org/title/General_recommendations)

All further configurations can be gradually built on top of this foundation.