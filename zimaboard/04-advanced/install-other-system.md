---
sidebar_label: Install other system
title: Install other system | Advanced | ZimaBoard
---

# Installing other system

## Intro

Many of the people who got ZimaBoard want to install some different operating systems to experience or meet specific usage needs.

Here we will show you how to install a new operating system on your ZimaBoard, using the installation of Ubuntu Server as an example in this document.

## Prepation

### On your PC or Mac

- Download and install [balenaEtcher](https://www.balena.io/etcher/) on your computer. 
- Download the system image you want to install, in this document it is [Ubuntu Server](https://ubuntu.com/download/server).

### ZimaBoard related

- ZimaBoard and power adapter
- A USB drive (The capacity needs to be larger than the system image you want to install)
- A miniDP to DP/HDMI Adapter (Used to connect to a monitor)
- A monitor
- A keyboard
- A network cable (Recommended)
  - Convenient for you to complete the network setup and install the latest security and feature updates at the same time as installing the system.
- A USB hub (Optional, if the USB port is not enough)
- A mouse (Optional)
  - It will be convenient if the system installer you want to install comes with a GUI interactive interface. Most desktop OS will have one, server OS generally do not.)

  
## Create a USB installer

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

### 2. Select system image

Click on "Flash from file" and select the system image you downloaded earlier.

<p><img
  src={require('./images/ubuntu-select-iso.png').default}
  alt="select iso"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

### 3. Select USB drive

Click "Select target" and select your inserted USB drive in the dialog box.

<p><img
  src={require('./images/ubuntu-select-usb-drive.png').default}
  alt="select usb drive"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

### 4. Flash!

Click "Flash!" and wait for it to complete.

<p><img
  src={require('./images/ubuntu-select-iso-1.png').default}
  alt="select iso 1"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

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

### Boot from the USB installer

#### 1. Connecting the accessories to ZimaBoard
Connect your USB drive, monitor, keyboard, USB hub (Optional), mouse (Optional), network cable (Recommended) to ZimaBoard.

#### 2. Power on and select the boot device
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

:::tip
When selecting the storage for installing the system, please take care to select the correct drive.

Because operating systems and storage vendors calculate storage space sizes differently, usually the capacity you see when you install your system is not exactly the same as the hardware capacity. You can distinguish different storage devices by the type and approximate size of the drive.

The built-in storage type of the ZimaBoard is eMMC, which may also be recognized as an MMC device in the operating system.
:::


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

:::tip
You may need to modify the boot sequence in BIOS or select the boot device at boot time, if you install the OS to an external hard disk.
:::