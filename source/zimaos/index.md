---
title: ZimaOS Overview
seo_title: "ZimaOS Setup Guides: Storage, Sharing, Backup, and System Settings"
description: "ZimaOS setup guides for beginners. Step-by-step instructions for installing ZimaOS, configuring file sharing, setting up backups, connecting cloud storage, and managing system settings on your NAS."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

I put these guides together to help you get comfortable with ZimaOS — whether you just opened the box or have been using it for a while.

## Setup and Storage

Start here after your first boot. Three things to get right.

- **[Get Started](./get-started "Set up ZimaOS from first boot with ZimaClient and account creation")** — language, network, and account setup
- **[Features Overview](./features "ZimaOS feature tour covering remote access, storage, and apps")** — a walkthrough of Data Station, app management, and settings
- **[Storage Setup](./storage-setup "Choose your storage setup with RAID options matched to your needs")** — choose the right drives for your use case
- **[RAID Options](./raid-options "RAID levels and JBOD explained with step-by-step setup instructions")** — detailed RAID configuration reference
- **[App Storage Paths](./docker-app-paths "Where apps store data on your drives and how to move it")** — set where your app data is stored

## Sync and Backup

Once the basics are set, bring your content in and decide where everything lives.

- **[Phone Backup](./phone-backup "Back up your phone to ZimaOS automatically with ZimaClient")** — automatic photo and file backup from your phone
- **[Computer Backup](./computer-backup "Back up your computer to ZimaOS with Finder, Explorer, or sync")** — Finder, Explorer, and scheduled backup for laptops
- **[Connect Cloud Drives](./cloud-drive-connect "Connect Google Drive, Dropbox, or OneDrive to ZimaOS for backup")** — pull data out of Google Drive, Dropbox, and OneDrive
- **[Move from Another NAS](./synology-to-zimacube-migration "Move files from a Synology NAS to ZimaOS with a phased approach")** — the recommended path from Synology
- **[Synology Manual Transfer](./from-synology-to-zimacube-migrate-all-files "Mount Synology DSM shares in ZimaOS Files and copy files step by step")** — step-by-step SMB manual
- **[Move Data Between Drives](./data-migration "Move Docker images, app data, and folders between drives on ZimaOS")** — the built-in tool when a drive fills up
- **[3-2-1 Backup](./how-to-use-3-2-1-backup-on-zimaos "Protect data with the 3-2-1 backup rule on your NAS")** — the backup plan that protects it all
- **[Time Machine Backup](./time-machine-backup "Back up your Mac to your NAS over the network with Time Machine")** — back up your Mac to ZimaOS over the network

## Access and Share

Once your data is in place, make it accessible.

- **[Remote Access](./remote-access "Configure remote access so your home server is reachable anywhere")** — reach your ZimaOS when you are away from home
- **[Download ZimaClient](./zimaclient-install "Install and set up ZimaClient on desktop and mobile for device access")** — install the desktop app to browse files
- **[SMB File Sharing](./smb-troubleshooting "Share files over SMB so they appear in Finder and File Explorer")** — share files across your local network
- **[Share via Link](./share-via-link "Create share links to send files to anyone without an account")** — generate a link to share files without an account
- **[Samba Multi-User](./samba-member-setup "Set up Samba with per-user access control on ZimaOS")** — per-user access control for Samba shares

## Install Methods

Different ways to get ZimaOS running, depending on your setup.

- **[Install ZimaOS](./how-to-install-zimaos "Step-by-step guide to installing ZimaOS on your device from scratch")** — write the image to a USB drive and boot your device
- **[Install on Proxmox](./install-zimaos-on-proxmox-ve "Run ZimaOS as a virtual machine on Proxmox VE with this guide")** — run ZimaOS as a virtual machine
- **[Migrate from CasaOS](./casaos-to-zimaos-migration "Move your home server setup from CasaOS to ZimaOS")** — move your setup from CasaOS to ZimaOS
- **[Get Network ID](./remote-id "Find your ZimaOS Network ID and use it to connect from other devices")** — find your device's unique network identifier
- **[Reset Password](./password-recovery "Recover or reset your ZimaOS account password step by step")** — recover or change your ZimaOS password

## System

Keep your device running smoothly.

- **[UPS Setup](./ups-setup "Connect a UPS to your NAS to protect against power outages")** — protect against power outages
- **[System Recovery](./system-recovery "Restore ZimaOS on your NAS after a failure or reset")** — restore ZimaOS after a failure
- **[Offline Installation](./offline-install "Install ZimaOS on your NAS without an internet connection")** — install ZimaOS without an internet connection
- **[Search Function](./zimaos-search "Use ZimaOS search to quickly find files across your NAS")** — find files across your NAS

---

## Next

You do not need to learn everything at once. Take whichever path matches what you are working on.

- Compare devices: **[Hardware Overview](../hardware/ "Compare ZimaCube, ZimaBoard, and ZimaBlade hardware side by side")** — ZimaCube, ZimaBoard, and ZimaBlade side by side
- Run apps: **[App Store Overview](./app-store/ "Browse App Store categories for media, self-hosted apps, and AI")** — media servers, self-hosted apps, and AI agents
- Go deeper: **[Dev Overview](../developer/ "Go deeper into ZFS, RAID, networking, and the ZimaOS API")** — ZFS, RAID, networking, and the ZimaOS API
