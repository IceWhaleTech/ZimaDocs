---
title: App Store Overview
seo_title: "ZimaOS App Store: Media Servers, Self-Hosted Apps, and AI on Your NAS"
description: "Explore what you can build with your Zima NAS. Set up home media servers, self-host applications, run AI agents, and create gaming servers — all on your own hardware."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

I love seeing what people build on these machines. Over the years, our community has turned Zima devices into media centers, ad blockers, AI assistants, game servers — and every time I think I have seen it all, someone surprises me with something new.

There is a certain feeling that comes with running your own services. The hardware is yours. The data stays with you. Nobody can take it away or change the pricing on you.

## Media Server

This is where most people start. Turn your NAS into a streaming box — movies, TV, music, photos, all accessible from any screen in the house.

- **[Bulk Photo Sync](./cli-guide "Bulk sync thousands of photos to your NAS from the command line")** — for when you have thousands of photos to move
- **[Immich Photo Backup](./immich-photo-backup "Deeper Immich configuration for backing up your photo library")** — deeper dive into Immich configuration
- **[Jellyfin Media Server](./media-server-setup-with-jellyfin "Set up Jellyfin to stream movies, TV, and music from your NAS")** — free and open source, runs on everything
- **[NVR Camera Server](./nvr-camera-server "Connect security cameras to your NAS with AI object detection")** — connect security cameras with AI object detection
- **[Immich Photo Sync](./sync-photos-with-immich "Sync photos from your phone to your NAS with self-hosted Immich")** — a self-hosted alternative to Google Photos
- **[Plex Media Server](./plex-setup-guide "Install Plex Media Server and stream your library to any device")** — polished interface with companion apps for every device
- **[DLNA Server](./dlna-server-setup "Set up DLNA to stream media to older TVs and DLNA devices")** — stream to older smart TVs and DLNA devices
- **[Plex GPU Transcoding](./plex-and-gpu-transcoding "Enable GPU hardware transcoding in Plex for smooth 4K streaming")** — enable hardware acceleration for smooth 4K
- **[Emby Server](./setup-emby-server "Set up Emby Media Server for streaming across your devices")** — good middle ground between Jellyfin and Plex
- **[Komga](./komga-setup "Run Komga on ZimaOS as a comic and e-book server")** — a media server for comics, manga, and e-books

## Self-Hosted Apps

These are the apps our community runs the most. Each one replaces a subscription service with something you control.

- **[File Sync with Syncthing](./syncthing-setup "Keep folders in sync across devices with self-hosted Syncthing")** — keep folders in sync across all your computers and phones
- **[Pi-hole Ad Blocker](./pi-hole-setup "Block ads network-wide with Pi-hole on your home server")** — network-wide ad blocking, works on every device automatically
- **[Document Management](./paperless-ngx-install "Manage and search scanned documents with Paperless-ngx")** — scan paper documents, make them searchable
- **[AI Document Processing](./paperless-ai-install "Automatically tag and classify documents with Paperless-AI")** — add auto-tagging and classification to Paperless
- **[Radarr Movie Manager](./radarr-setup "Automate movie downloads and management with Radarr")** — tell it what movies you want, it handles the rest
- **[Web Radio Station](./azuracast-install "Run your own internet radio station with AzuraCast")** — run your own internet radio station
- **[Server Monitoring](./zabbix-install-guide "Monitor your servers and network with Zabbix dashboards")** — keep an eye on your servers and network
- **[Torrent Downloader](./webtorrent-feature "Download torrents directly to your NAS storage with WebTorrent")** — download torrents directly to your NAS storage
- **[Syncthing Setup Guide](./syncthing-install "Advanced Syncthing configuration for syncing across your devices")** — more detailed Syncthing configuration

## Agents & Inference

Running AI on your own hardware means your data never leaves your house. Our community has been pushing hard in this direction lately.

- **[DeepSeek Harness](./deepseek-harness-setup "Run DeepSeek Harness on your home server as a physical AI agent")** — a physical AI agent on your home server that vibecodes and automates tasks
- **[Enable AI Search](./enable-ai "Enable AI search on your home server to find files naturally")** — natural language search across all your files
- **[Deploy DeepSeek R1](./deploy-deepseek-r1 "Deploy DeepSeek R1 on your agent server to run an LLM locally")** — a capable LLM that runs locally on Zima hardware
- **[Download AI Models](./llm-manual-download "Download AI models to your agent server for offline setups")** — grab models for offline or low-bandwidth setups
- **[AI Photo Description](./frigate-ollama-setup "Automatically tag and describe photos on your home server with AI")** — automatically tag and describe your photo library
- **[OpenClaw Agent](./openclaw-agent-setup "Run OpenClaw as a 24/7 agent server you can chat with on Telegram")** — a 24/7 AI agent you can talk to through Telegram
- **[Hermes Agent](./hermes-agent-setup "Run Hermes on your agent server to remember and learn from you")** — an agent that learns from you and remembers over time

## Creative Builds

Some projects do not fit neatly into a category. These are the ones that surprised us.

- **[Batocera Arcade](./batocera-arcade-setup "Turn your device into a retro gaming console with Batocera")** — turn your Zima device into a retro gaming console
- **[Minecraft Server](./minecraft-friendship-service "Host a persistent Minecraft world on your own server")** — host a persistent Minecraft world
- **[Oculus VR Streaming](./oculus-quest-media-server "Stream PC VR games wirelessly to your Oculus Quest headset")** — stream PC VR games to your Quest headset
- **[PVE Cluster Migration](./zimablade-cluster-pve "Move services between Proxmox hosts with cluster migration")** — move services between Proxmox hosts
- **[Run PVE on Debian](./pve-on-debian-for-i226 "Run Proxmox VE on Debian for Intel i226 network adapters")** — Proxmox VE on Debian for Intel i226 NICs
- **[Community App Stores](./awesome-third-party-stores "Discover community-curated third-party app stores for your NAS")** — third-party app stores curated by the community
- **[Self-Hosted Apps Overview](./self-hosted-apps "A broader look at self-hosting apps on your home server")** — a broader look at self-hosting on ZimaBoard
- **[Jellyfin on ZimaBoard](./jellyfin-setup "Set up the Jellyfin media server on your home server")** — Jellyfin specifically for ZimaBoard hardware

## Next

Whatever you decide to build, take it one app at a time. The fun is in making it yours.

- Hardware specs: **[Hardware Overview](../../hardware/ "Compare ZimaCube, ZimaBoard, and ZimaBlade hardware side by side")** — ZimaCube, ZimaBoard, and ZimaBlade details
- Go deeper: **[Dev Overview](../../developer/ "Go deeper into ZFS, RAID, networking, and the ZimaOS API")** — ZFS, RAID, networking, and the ZimaOS API
