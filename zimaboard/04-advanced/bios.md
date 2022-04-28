---
sidebar_label: BIOS
title: BIOS | Advanced | ZimaBoard
hide_title: true
comments: true
---

# BIOS

## Latest Version

:::info
The new version of BIOS is under testing and will be released later.

Please ask for help in [Discord](https://discord.gg/TZjYGnAW3M) if you encounter problems.
:::

:::warning
If your ZimaBoard is running normally, upgrading the BIOS is not recommended!

Improper operation can cause the ZimaBoard to fail to start.
:::

### ZimaBoard 216

- APLR1202G.N06
  <!-- - Download: [GitHub](https://github.com/IceWhaleTech/ZimaBoard-BIOS/releases/download/N06/ZMB216-APLR1202G.N06.zip) -->

### ZimaBoard 432

- APLR1204G.N06
  <!-- - Download: [GitHub](https://github.com/IceWhaleTech/ZimaBoard-BIOS/releases/download/N06/ZMB432-APLR1204G.N06.zip) -->

### ZimaBoard 832

- APLR1208G.N06
  <!-- - Download: [GitHub](https://github.com/IceWhaleTech/ZimaBoard-BIOS/releases/download/N06/ZMB832-APLR1208G.N06.zip) -->

## BIOS Update Guide

### Step 1: Preparation

- Download the corresponding version of the BIOS file above
- An empty USB drive formatted as FAT32
- A miniDP to HDMI Adapter (Used to connect to a monitor)
- A keyboard

### Step 2: Prepare USB drive

1. Unzip the downloaded BIOS file
2. Copy the entire EFI folder to the root of the USB drive

<p><img
  src={require('./images/bios-efi-folder.png').default}
  alt="finder-go"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

### Step 3: Update BIOS

1. Connecting USB drive, keyboard, and monitor to the ZimaBoard.
2. Connect power and press <kbd>F11</kbd> continuously.
3. Select your USB drive starting with UEFI in the boot device menu.

<p><img
  src={require('./images/bios-select-boot-device.jpg').default}
  alt="finder-go"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

4. Wait for BIOS update to complete.

<p><img
  src={require('./images/bios-update-wating.jpg').default}
  alt="finder-go"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

5. Done!

<p><img
  src={require('./images/bios-update-successful.jpg').default}
  alt="finder-go"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>
