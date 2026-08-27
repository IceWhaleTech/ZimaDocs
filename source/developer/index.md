---
title: Dev Overview
seo_title: "ZimaOS Developer Guide: ZFS, RAID, Networking, and the ZimaOS API"
description: "ZimaOS developer documentation for Docker and self-hosted apps, home server and homelab storage, networking, SSH, NAS OS APIs, App Store publishing, and project contributions."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

If you like getting under the hood, this section is for you. Storage systems, networking, the ZimaOS API — everything a power user or developer needs.

## Storage and Filesystem

ZimaOS supports ZFS, RAID, NFS, and iSCSI out of the box. I have spent a lot of time with these systems — here is where I would start.

- **[ZFS Setup](./zfs-setup "Set up ZFS on ZimaOS for snapshots, checksums, and data integrity")** — create and manage ZFS pools on ZimaOS
- **[RAID Options Overview](../zimaos/raid-options "RAID levels and JBOD explained with step-by-step setup instructions")** — compare RAID levels and pick the right one for your use case
- **[Create RAID 6](./raid6-setup "Create a RAID 6 array on ZimaOS with dual-parity protection")** — dual-parity RAID step by step
- **[RAID Rebuild](./raid-rebuild-after-reinstall "Recover and rebuild your RAID array after reinstalling ZimaOS")** — recover your RAID after reinstalling the OS
- **[NFS File Sharing](./nfs-on-zimaos "Share files over NFS with Linux and macOS clients")** — share files over NFS for Linux and macOS clients
- **[iSCSI Usage Guide](./iscsi-guide "Set up block-level iSCSI storage on your NAS for fast access")** — set up block-level storage with iSCSI
- **[iSCSI Setup](./iscsi-setup "Detailed iSCSI configuration walkthrough for ZimaOS")** — detailed configuration walkthrough
- **[Rsync Backup Clones](./rsync-backup-clones "Clone entire drives or datasets with rsync on your NAS")** — clone entire drives or datasets with rsync
- **[Synology SMB Connect](./synology-smb-connect "Connect ZimaOS to an existing Synology NAS over SMB")** — connect ZimaOS to an existing Synology over SMB
- **[QTS Two-Way Sync](./zimaos-qts-two-way-sync-guide "Keep folders in sync between ZimaOS and QNAP with QTS")** — keep folders in sync between ZimaOS and QNAP
- **[Encrypted Folders](./folder-encryption "Encrypt sensitive folders at the filesystem level on ZimaOS")** — encrypt sensitive data at the filesystem level

## Networking and Protocols

Getting your network right makes everything else faster and more reliable.

- **[Network Configuration](./networking "Configure network interfaces, routing, and static IPs on ZimaOS")** — interfaces, routing, and static IPs
- **[Enable SSH](./how-to-open-ssh-in-zimaos "Enable SSH on ZimaOS and configure basic remote access")** — turn on SSH and configure basic access
- **[SSH Advanced Setup](./ssh-setup "Harden SSH with key-based auth, port changes, and security settings")** — key-based auth, port changes, security hardening
- **[Network Transfer Speed](./nas-transfer-speed-troubleshooting "Find and fix slow transfer speeds on your NAS network")** — find and fix bottlenecks

## Development

Build on top of ZimaOS — whether that means a Docker app, a Python script, or a contribution to the OS itself.

- **[Python Environment](./python-setup "Set up Python on ZimaOS for scripting and automation")** — get Python running for scripting and automation
- **[Contribution Guide](./how-to-contribute "Contribute code, docs, or feedback to the ZimaOS project")** — contribute code, docs, or feedback to ZimaOS
- **[Community Contributions](./contributions "Community drivers and improvements submitted by ZimaOS users")** — drivers and improvements submitted by users

## App Store Development

Build Docker and self-hosted apps for a ZimaOS home server, maintain a homelab app catalog, or publish a compatible store for another NAS OS environment.

- **[Build and Publish Apps](./docker-app-publishing "Adapt and package a Docker app for the ZimaOS App Store")** — prepare an individual app for the store
- **[Create an App Store](./app-store-create-from-scratch "Create a Docker app store for ZimaOS, home servers, and homelabs")** — build a v2-compatible store from source files
- **[Docker Compose and x-casaos](./app-store-compose-x-casaos "Use Docker Compose and x-casaos metadata for self-hosted apps")** — reference every runtime and metadata field
- **[App Store CI/CD](./app-store-ci-cd "Validate, build, and publish a Docker app store")** — automate validation, artifacts, and static hosting
- **[Migrate v1 to v2](./app-store-v1-v2-migration "Migrate a CasaOS or ZimaOS app store to the v2 protocol")** — preserve compatibility while adopting static output
- **[Developer FAQ](./app-store-faq "Answers for Docker app store maintainers")** — IDs, localization, hosting, builds, and compatibility

## ZimaOS API

The API lets you automate file operations, user management, and system settings from your own code.

- **[ZimaOS API Guide](./openapi-developer-guide "ZimaOS API authentication, endpoints, and integration examples")** — authentication, endpoints, and integration examples
- **[ZimaOS API Explorer](./openapi-live-preview "Try ZimaOS API calls live in your browser with the explorer")** — try API calls live in your browser

## Version Log

Release notes for every ZimaOS version are in the sidebar — v1.2.2 through the latest.

## Next

Start with what you need. The rest will be here when you are ready for it.

- Set up ZimaOS: **[ZimaOS Overview](../zimaos/ "ZimaOS documentation overview for setup, storage, and sharing")** — installation, storage, and system settings
- Run apps: **[App Store Overview](../zimaos/app-store/ "Browse App Store categories for media, self-hosted apps, and AI")** — media servers, self-hosted apps, and AI agents
