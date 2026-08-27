---
title: BIOS Configuration
seo_title: "ZimaCube BIOS Configuration: Boot Order, Fans, and Power"
description: "Configure ZimaCube BIOS settings. How to access the BIOS, change boot order, adjust fan curves, set power options, and enable hardware features."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

The ZimaCube BIOS gives you control over boot order, fan speeds, power behavior, and hardware settings. Most users will not need to touch it, but a few settings are worth knowing about.

## Entering the BIOS

1. Plug in a keyboard and monitor to the ZimaCube.
2. Power on the device.
3. Press **F11** repeatedly during the boot screen until the boot menu appears.
4. Select **Enter Setup** to open the BIOS interface.

If F11 does not work, try **Delete** or **F2** — the exact key depends on your BIOS version.

## Boot Order

If you need to boot from a USB drive (for OS installation or recovery), change the boot order:

1. In the BIOS, go to the **Boot** tab.
2. Find **Boot Option Priorities**.
3. Move your USB device to the top of the list using the +/- keys.
4. Press **F10** to save and exit.

The ZimaCube will now attempt to boot from USB first. Remember to change this back after you are done, or remove the USB drive before rebooting.

## Fan Control

The ZimaCube has two system fans. You can adjust their behavior in the BIOS:

1. Go to **Advanced > Hardware Monitor**.
2. Find **CPU Fan Settings** and **System Fan Settings**.
3. Choose a mode:
   - **Standard**: Fans ramp up as temperature rises. Good for everyday use.
   - **Silent**: Lower fan speeds, quieter operation. Use this if the Cube is in a living space and not under heavy load.
   - **Full Speed**: Maximum cooling. Use this if the Cube is in a hot environment or under constant load.
4. Press **F10** to save.

## Power Settings

- **Restore on AC Power Loss**: Determines what happens after a power outage. Set to **Power On** if you want the Cube to start automatically when power returns. See the **[Auto Power-On guide](./auto-power-on)** for details.
- **Wake on LAN**: Enable this if you want to power on the Cube remotely over the network. After enabling in BIOS, you will also need to configure it in ZimaOS. See **[Enable Wake-on-LAN](./enable-wol-on-zimacube)**.

## Hardware Configuration

Most hardware settings should be left at their defaults unless you have a specific reason to change them:

- **VT-d / Virtualization Technology**: Enabled by default. Leave this on if you plan to run virtual machines.
- **SATA Mode**: Should be set to **AHCI**. Do not change this unless you know what you are doing — switching to RAID mode without proper setup can make your drives unreadable.
- **Above 4G Decoding**: Enables support for large PCIe devices like GPUs. Enable this if you are installing a dedicated graphics card.

If you make changes that prevent the system from booting, see the **[CMOS Reset guide](../help-center/resets-cmos)** to restore BIOS defaults.
