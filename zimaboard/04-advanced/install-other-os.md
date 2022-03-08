---
sidebar_label: Install New OS to ZimaBoard
title: Install New OS to ZimaBoard | Advanced | ZimaBoard
---

# Installing a new operating system for ZimaBoard 

Many of you have purchased a ZimaBoard and want to install some different operating systems to experience or meet specific usage needs.
Here we will show you how to install a new operating system on your ZimaBoard, using the example of installing Ubuntu Server OS.

Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.Ubuntu is officially released in three editions: Desktop,Server,and Core for Internet of things devices and robots.

## Prepation

### What you need to do on your computer to prepare.

- Download and install on your computer [balenaEtcher](https://www.balena.io/etcher/)
- Download the system image you want to install, the text is [Ubuntu Server](https://ubuntu.com/download/server)


### ZimaBoard-related preparations

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
  
## Create installation USB flash drive

### 1. Open balenaEtcher

<p><img
  src={require('./images/ubuntu-open-balena.png').default}
  alt="open balena"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

### 2. Click on "Flash from file" and select the system image you downloaded earlier.

<p><img
  src={require('./images/ubuntu-select-iso.png').default}
  alt="select iso"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

<p><img
  src={require('./images/ubuntu-select-iso-1.png').default}
  alt="select iso 1"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

### 3. Click "Select target" and select your inserted USB drive in the dialog box.

<p><img
  src={require('./images/ubuntu-select-usb-drive.png').default}
  alt="select usb drive"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

### 4. Click "Flash!" and wait for it to complete.

You may be asked to enter your system password during the process, just enter it and click OK.

<p><img
  src={require('./images/ubuntu-enter-passwoer.png').default}
  alt="ubuntu enter passwoer"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

The whole process will take a few minutes, depending on the size of your system image and the read/write speed of your USB drive.

<p><img
  src={require('./images/ubuntu-balena-drive-complete.png').default}
  alt="ubuntu balena drive complete"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

## Install Ubuntu Server to ZimaBoard

### Boot from the installation USB drive

### 1. Connecting the accessories to ZimaBoard
Connect your USB drive, monitor, keyboard, USB hub (Optional), mouse (Optional), network cable (Recommended) to ZimaBoard.

### 2. Power on and select the boot device
1. Connect power and press F11 continuously.

2. Select your USB drive starting with UEFI in the boot device menu.
 
 <p><img
  src={require('./images/ubuntu-select-drive-starting.jpeg').default}
  alt="select drive starting"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

### Start installation

 <p><img
  src={require('./images/ubuntu-start-installation.png').default}
  alt="ubuntu start installation"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

Refer to the [official Ubuntu installation tutorial](https://ubuntu.com/tutorials/install-ubuntu-server#3-boot-from-install-media) for setup.

### Note that when selecting storage space, please take care to select the correct disk

Because operating systems and storage vendors calculate storage space sizes differently, usually the capacity you see when you install your system is not exactly the same as the hardware capacity. You can tell the difference by the type of disk and the approximate size.

The built-in storage type of the ZimaBoard is eMMC, which may also be recognized as an MMC device in the operating system.

## Complete installation

After the installation is complete, you will see a message on your screen that looks like this.

 <p><img
  src={require('./images/ubuntu-installation-complete.png').default}
  alt="ubuntu installation complete"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

Unplug your installation USB drive and select "Reboot Now".

**Attention! You may need to modify the boot sequence in BIOS or select the boot device at boot time, if you install the OS to an external hard disk.**