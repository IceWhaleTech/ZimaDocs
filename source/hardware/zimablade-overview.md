---
title: Get Started with ZimaBlade
description: "ZimaBlade hardware guide. Compare the 3760 and 7700 models, learn what you need to get started, and find detailed setup instructions."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

I have a soft spot for the ZimaBlade. It is the smallest thing we make, and it costs about as much as a nice dinner out. But it runs the same software stack as the Cube — CasaOS, Docker, all of it.

We make two versions. The 3760 is a dual-core board that handles Pi-hole, VPN, and lightweight NAS without breaking a sweat. The 7700 steps up to a quad-core chip, which gives you enough headroom for Plex, a handful of Docker containers, and Home Assistant running side by side.

| | ZimaBlade 3760 | ZimaBlade 7700 |
|---|---|---|
| **CPU** | Intel Celeron N3350 (dual-core) | Intel Celeron quad-core (N3450 / J3455 / E3950) |
| **RAM** | 1 × SODIMM DDR3L, up to 16 GB | 1 × SODIMM DDR3L, up to 16 GB |
| **Storage** | 32 GB eMMC onboard | 32 GB eMMC onboard |
| **Networking** | 1 × Gigabit Ethernet | 1 × Gigabit Ethernet |
| **USB** | 1 × USB-C, 1 × USB 3.0, 2 × USB 2.0 | 1 × USB-C, 1 × USB 3.0, 2 × USB 2.0 |
| **SATA** | 2 × SATA 3.0 | 2 × SATA 3.0 |
| **PCIe** | 1 × PCIe 2.0 x4 | 1 × PCIe 2.0 x4 |
| **Video** | Mini DisplayPort 1.2 (4K@60Hz) | Mini DisplayPort 1.2 (4K@60Hz) |
| **Best for** | Pi-hole, VPN, lightweight NAS | Plex, Docker, Home Assistant, heavier use |

Both models use an x86 processor — every Docker image just works, no ARM compatibility headaches.

## Setting Up

If you just got your ZimaBlade, start with the detailed walkthrough: **[Power On](./power-on-zimablade "Power on your ZimaBlade and complete the initial setup")**. It covers installing the memory module, connecting drives, booting up, and configuring CasaOS — with photos for every step.

The ZimaBlade ships with CasaOS pre-installed. If you want to run ZimaOS instead, head to the **[Install ZimaOS](../zimaos/how-to-install-zimaos "Step-by-step guide to installing ZimaOS on your device from scratch")** guide — the process is the same as for any Zima device.

## What You Can Build

Despite its size, the ZimaBlade runs the same apps as ZimaBoard and ZimaCube. See the **[App Store Overview](../zimaos/app-store/ "Browse App Store categories for media, self-hosted apps, and AI")** for ideas on media servers, self-hosted apps, and AI agents.

## Third-Party Operating Systems

Because it is x86, you can put other operating systems on it — Ubuntu, Debian, OpenWrt, you name it. The **[Third-Party OS Guide](./third-party-os-install "Install any operating system on Zima hardware with this guide")** covers the general process.

## If Something Goes Wrong

The board does not have a power LED, so do not assume it is dead if the screen stays black. Give it half a minute and check your router for a new device — it is usually alive and just being quiet about it.

No display usually means a fussy Mini DisplayPort adapter. I have had better luck with direct MiniDP-to-DP cables than with HDMI adapters. If your drives are not showing up, reseating the SATA cables almost always fixes it. And if you cannot find the IP, your router's DHCP client list is the quickest way to track it down.
