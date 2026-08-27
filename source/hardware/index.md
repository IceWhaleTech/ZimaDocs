---
title: Hardware Overview
seo_title: "Zima Hardware Comparison: ZimaCube vs ZimaBoard vs ZimaBlade"
description: "Compare ZimaCube, ZimaBoard, and ZimaBlade hardware. CPU, RAM, drive bays, networking, and power specs for every Zima device. Find setup guides, expansion options, and third-party OS installation."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

We make three hardware lines, each built for a different kind of user. This page will help you figure out which one you have — or which one you need.

## Compare Devices

| | ZimaCube 2 | ZimaBoard 2 | ZimaBlade |
|---|---|---|---|
| **Best for** | Professional NAS, media production, local AI | Home server, networking, tinkering | Entry-level NAS, first DIY build |
| **CPU** | Intel i3-1215U / i5-1235U (Pro) | Intel N150 (quad-core, up to 3.6 GHz) | Intel Celeron N3350 (3760) / quad-core (7700) |
| **RAM** | 8 GB DDR5 (up to 64 GB) | 8 GB / 16 GB LPDDR5 (soldered) | 1 × SODIMM DDR3L, up to 16 GB |
| **Drive bays** | 6 SATA + 4 M.2 NVMe | 2 SATA 3.0 + eMMC 32/64 GB | 2 SATA 3.0 |
| **Networking** | 2.5 GbE × 2 (Pro adds 10 GbE) | 2.5 GbE × 2 | 1 GbE × 1 |
| **Thunderbolt** | 2 × TB4 (all models) | No | No |
| **PCIe** | PCIe 4.0 x16 + PCIe 3.0 x8 | PCIe 3.0 x2 | 1 × PCIe 2.0 x4 |

## Set Up Your Device

If your device is fresh out of the box, start with one of these.

- **[ZimaCube Quick Start](./quick-start "Unbox your ZimaCube, plug it in, and access ZimaOS")** — unbox, plug in, and access ZimaOS
- **[ZimaBoard Power On](./zimaboard-quick-start "First boot and initial configuration for your ZimaBoard")** — first boot and initial configuration
- **[ZimaBlade Power On](./power-on-zimablade "Set up your ZimaBlade with the HDD stand and first boot")** — set up your ZimaBlade with the HDD stand

## Hardware Details

Once you are up and running, these pages cover the specifics — ports, expansion slots, and internal layouts.

- **[ZimaCube Hardware Details](./hardware-details "Every port and interface on the ZimaCube explained in detail")** — every port and interface on the Cube
- **[ZimaBoard Hardware Interface](./hardware-interface "ZimaBoard pinouts, connectors, and hardware interface details")** — pinouts and connectors
- **[ZimaCube PC Direct Connection](./pc-direct "Plug your ZimaCube directly into your computer over Thunderbolt")** — plug your Cube straight into your computer
- **[ZimaCube GPU Expansion](./gpu-expansion "Add a dedicated graphics card to your ZimaCube for GPU power")** — add a dedicated graphics card
- **[ZimaCube RAID SSD Expansion](./raid-ssd-expansion "Add SSDs to your ZimaCube for caching or fast RAID storage")** — add SSDs for caching or fast storage
- **[DIY Fan Guide](./zimacube-fan-diy "Replace or upgrade the cooling fan on your ZimaCube")** — replace or upgrade the cooling fan

## Compatibility

What works with what. We have tested these ourselves.

- **[UPS Compatibility List](./ups-compatibility-list "Uninterruptible power supplies confirmed to work with Zima devices")** — which uninterruptible power supplies are confirmed to work
- **[Supported Disk Formats](./supported-disk-formats "File systems your Zima devices can read and write natively")** — file systems your device can read and write
- **[Compatible Network Adapters](./compatible-network-adapters "Network adapters tested and confirmed with ZimaCube")** — NICs tested with ZimaCube
- **[Intel AX210 WiFi](./enable-intel-ax210 "Enable the Intel AX210 WiFi module on ZimaOS step by step")** — enable the AX210 module on ZimaOS
- **[AX210 WiFi Module](./ax210-wifi-6e "Install the Intel AX210 WiFi module on your ZimaBoard")** — install the AX210 on ZimaBoard
- **[BIOS Configuration](./bios-configuration "Access and navigate the BIOS settings on your Zima device")** — access and navigate the BIOS settings
- **[Enable Wake-on-LAN](./enable-wol-on-zimacube "Power on your ZimaCube remotely with Wake-on-LAN enabled")** — power on your ZimaCube remotely
- **[Wake-on-LAN for ZimaBoard](./wake-on-lan-setup "Enable remote wake for your ZimaBoard with Wake-on-LAN")** — remote wake for ZimaBoard

## Third-Party Operating Systems

ZimaOS comes pre-installed, but the hardware is not locked down. Our community runs everything from Unraid to OpenWrt on these machines.

- **[Run Unraid](./install-unraid "Install Unraid on your ZimaCube for a flexible NAS setup")** — Unraid installation on ZimaCube
- **[Run TrueNAS](./install-truenas "Install TrueNAS on your ZimaCube for ZFS-based storage")** — TrueNAS setup on ZimaCube
- **[Run Unraid on ZimaBoard](./unraid-install "Install Unraid on your ZimaBoard home server step by step")** — Unraid on the Board
- **[Run OpenWrt](./openwrt-x86-install "Turn your ZimaBoard into a home router with OpenWrt")** — turn your ZimaBoard into a router
- **[OpenWrt via USB](./openwrt-usb-install "Boot and run OpenWrt from a USB drive on your ZimaBoard")** — boot OpenWrt from a USB drive
- **[OpenWrt eMMC Boot](./openwrt-emmc-boot "Install OpenWrt to the internal eMMC storage on ZimaBoard")** — install OpenWrt to internal storage
- **[Install OMV](./openmediavault-install "Install OpenMediaVault on ZimaBoard for NAS-focused setups")** — OpenMediaVault for NAS-focused setups
- **[OMV Configuration](./openmediavault-setup "First steps to configure OpenMediaVault after installation")** — first steps after installing OMV
- **[Arch Linux Installation](./arch-linux-installation-on-zimaboard-2 "Install Arch Linux on your ZimaBoard 2 step by step")** — Arch on ZimaBoard 2
- **[Ubuntu Server Setup](./minimal-ubuntu-server-build "Build a minimal Ubuntu Server on your ZimaBoard 2")** — minimal Ubuntu for server use
- **[Third-Party OS Guide](./third-party-os-install "Install any operating system on Zima hardware with this guide")** — how to install any OS on Zima hardware

## Next

Once you know your hardware, everything else gets easier.

- Set up ZimaOS: **[ZimaOS Overview](../zimaos/ "ZimaOS documentation overview for setup, storage, and sharing")** — installation, storage, and system settings
- Run apps: **[App Store Overview](../zimaos/app-store/ "Browse App Store categories for media, self-hosted apps, and AI")** — media servers, self-hosted apps, and AI agents
