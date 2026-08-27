---
title: ZimaCube BIOS Update Method
description: "Update your ZimaCube BIOS using a USB flash drive. Step-by-step instructions for N100 and Pro models with download links and troubleshooting."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

BIOS updates can fix hardware compatibility issues, improve system stability, and add new features. Only update the BIOS if you are experiencing a specific problem that a newer version addresses, or if our support team has recommended it.

If the update process is interrupted — by a power loss, for example — the motherboard can become unbootable. Make sure the ZimaCube is plugged into a reliable power source before you begin.

## What You Need

- A USB flash drive (empty, formatted as FAT32)
- A monitor connected via Mini DisplayPort
- A USB keyboard
- The correct BIOS package for your ZimaCube model (see below)

## Step 1: Identify Your Model

Check which ZimaCube you have before downloading. The model name is printed on a label on the bottom of the device. It will be one of:

| Model | BIOS Package |
|---|---|
| **ZimaCube N100** | [Google Drive Link](https://drive.google.com/file/d/1yd8Z2fJNr69TLyy6381JzVSHP_Af0awQ/view?usp=drive_link) |
| **ZimaCube Pro 1235u** | [Google Drive Link](https://drive.google.com/file/d/1hQI2oe0C9CIsylP0vjdP3tZSljgslkx8/view?usp=drive_link) |
| **ZimaCube Pro 1235u with Resizable BAR** | [Google Drive Link](https://drive.google.com/file/d/1i0cm2QHK2e4oNNmQU-0-pnABuqp4HR8N/view?usp=drive_link) |

The Resizable BAR feature is already included in ZimaCube 2 BIOS — no update is needed for that model.

## Step 2: Prepare the USB Drive

1. Format your USB flash drive as **FAT32**.
2. Download the BIOS package for your model from the table above.
3. Extract the downloaded archive. You should see an `EFI` folder inside.
4. Copy the entire `EFI` folder to the root of the USB drive.

![](https://manage.icewhale.io/api/static/docs/1779788907886_image.png)

## Step 3: Boot from USB

1. Plug the USB drive, keyboard, and monitor into the ZimaCube.
2. Power on and press **F11** repeatedly until the boot menu appears.
3. Use the arrow keys to select **UEFI: (your USB drive)** and press Enter.

![](https://manage.icewhale.io/api/static/docs/1729233125821_image.png)

## Step 4: Run the Update

The BIOS update will start automatically. You will see a progress screen. Do not turn off the power or remove the USB drive during this process — it usually takes less than two minutes.

![](https://manage.icewhale.io/api/static/docs/1729233155418_image.png)

## Step 5: Finish

When the update completes, you will see a confirmation screen.

![](https://manage.icewhale.io/api/static/docs/1729233179864_image.png)

Press the power button to shut down. Remove the USB drive. Press the power button again to boot normally.

The first boot after a BIOS update may take longer than usual — the system is reinitializing hardware. This is normal.

## Troubleshooting

- **Boot menu does not appear**: Try a different USB port. The rear USB 2.0 ports tend to be the most reliable for BIOS updates. Also try **Delete** or **F2** instead of F11.
- **USB drive not detected in boot menu**: Make sure the drive is formatted as FAT32 and the EFI folder is at the root level, not inside another folder.
- **Update appears to hang**: Wait at least five minutes before assuming it has frozen. Some BIOS updates have long pauses between steps.
- **System will not boot after update**: Try the **[CMOS Reset](./resets-cmos)** procedure to restore BIOS defaults.
