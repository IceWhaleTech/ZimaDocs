---
title: How to Run Frigate on ZimaOS
seo_title: "Frigate on ZimaOS: Local AI NVR for Camera Monitoring and Recording"
description: "Install Frigate from the ZimaOS App Store in one step — set up AI-powered camera monitoring, motion detection, and recording on your own hardware."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

Frigate is natively supported in the ZimaOS App Catalog. See the [Frigate App Store page](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.frigate) for the latest app details.

Frigate is an open-source Network Video Recorder (NVR) with real-time AI-powered object detection — it gives you local, private camera monitoring, motion detection, and recording, all running on your own hardware and without sending footage to the cloud.

## Prerequisites

- A running ZimaOS installation.
- One or more IP cameras that support RTSP or ONVIF.
- A free port for the web UI (default: **8971**).
- *(Optional)* A Google Coral TPU or an Intel/AMD iGPU to accelerate object detection.

## App Catalog

1. Find Frigate in the ZimaOS App Catalog. Open **App Store** → search for "Frigate".

![Frigate app page in the ZimaOS App Store with the Install button](/images/app-store/frigate-app-store.webp)

2. **It's ready to use!**

![Frigate icon on the ZimaOS dashboard after installation completes](/images/app-store/frigate-installed-dashboard.webp)

## Configuration

The following steps are **NOT required** — you can get started right away with the **DEFAULT** configuration.

ZimaOS supports multiple configuration methods, including form-based editing and YAML secondary editing.

![Frigate container settings with ports, volumes, and device mappings](/images/app-store/frigate-config-form.webp)

The main settings you may want to adjust:

- **Volumes** — where your Frigate config and recordings are stored (default: `/DATA/AppData/frigate/config`, mounted to `/config`, and `/DATA/AppData/frigate/media`, mounted to `/media/frigate`).
- **Port** — the external port you use to access the web UI (default: 8971).
- **Detector device** — *(optional)* map a PCIe Coral (`/dev/apex_0`), USB Coral (`/dev/bus/usb`), or Intel/AMD iGPU (`/dev/dri/renderD128`) for hardware-accelerated detection.

## First-time setup

1. Open Frigate from your ZimaOS dashboard. The first time you open it, you may see a security warning — this is normal, as Frigate uses a self-signed certificate. Click **Advanced**, then **Continue to ...** to proceed.
2. On first login, you'll need your initial username and password. Click the three dots in the top-right corner of the Frigate app icon → **Settings**, open **Terminal and Logs**, click **Logs**, then click the full-screen icon to enlarge the view.

![Frigate app settings open on Logs with the view enlarged to full screen](/images/app-store/frigate-logs-view.webp)

3. Look for the section surrounded by asterisks (`****`) — it contains your username and password. Use this information to log in to Frigate.

![Frigate startup log showing the default admin credentials surrounded by asterisks](/images/app-store/frigate-logs-credentials.webp)

4. Add your cameras and configure detection, recording, and more by editing the `config.yml` file at `/DATA/AppData/frigate/config/config.yml`. See the official documentation below for the full reference.

5. Frigate is working when you can open its interface, sign in, and view a connected camera without a stream error. Open **Live** and confirm that the camera displays a current image.

## Related Guides

- Pair Frigate with a local LLM for AI image descriptions of detected events — see [AI Photo Description with Frigate and Ollama](./frigate-ollama-setup "Describe camera events in natural language with Frigate and a local Ollama model").
- Prefer a simpler, browser-based camera server? See [NVR Camera Server](./nvr-camera-server "Set up a Kerberos.io NVR for video surveillance on ZimaOS") for an alternative.

## Official documentation

Frigate's app-level settings — cameras, object detection, recording, snapshots, notifications, Home Assistant, hardware acceleration and more — all live inside the `config.yml` file and are independent of ZimaOS. For the full reference, follow the official Frigate documentation:

- [Frigate documentation](https://docs.frigate.video/ "Official Frigate documentation")
- [Configuration reference](https://docs.frigate.video/configuration/ "Frigate configuration reference for all settings")
- [Cameras](https://docs.frigate.video/configuration/cameras "Frigate camera configuration guide")
- [Object detection](https://docs.frigate.video/configuration/objects "Frigate object detection settings")
- [Detectors](https://docs.frigate.video/configuration/object_detectors "Frigate detector configuration for Coral TPU and GPUs")
- [Hardware acceleration](https://docs.frigate.video/configuration/hardware_acceleration_video "Frigate hardware acceleration guide")
- [Recording](https://docs.frigate.video/configuration/record "Frigate recording configuration")
- [Snapshots](https://docs.frigate.video/configuration/snapshots "Frigate snapshot configuration")
- [Zones & masks](https://docs.frigate.video/configuration/zones "Frigate zones and masks guide")
- [Notifications](https://docs.frigate.video/configuration/notifications "Frigate notification configuration")
- [Authentication](https://docs.frigate.video/configuration/authentication "Frigate authentication settings")
- [Home Assistant](https://docs.frigate.video/integrations/home-assistant "Frigate Home Assistant integration guide")

## Need Help?

If you run into any issues while installing or using Frigate on ZimaOS, join the [ZimaSpace Discord community](https://discord.gg/f9nzbmpMtU "Join the ZimaSpace Discord community for ZimaOS support"). Our team and community members will be happy to help.
