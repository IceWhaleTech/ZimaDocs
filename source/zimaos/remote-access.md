---
title: Remote Access
seo_title: "ZimaOS Remote Access: Connect to Your Home Server from Anywhere"
description: "How remote access works on ZimaOS: encrypted peer-to-peer connection, automatic fastest path, device Remote ID, multi-device switching, and standard protocol options."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
Remote access is the quiet feature you use every day without thinking about it. Your home server sits at home, and you reach it from a cafe, an office, or another country. The connection was set up the moment you signed in for the first time.

## How Remote Access Works

ZimaClient and ZimaOS establish an **encrypted peer-to-peer** channel between your device and the home server. Your data travels directly from one to the other. **No third-party server sits in the middle**, and no one can read what passes through.

![Diagram of the encrypted peer-to-peer channel between your phone and your ZimaOS home server](/images/guides/remote-access-how-it-works.webp)

The connection also picks the fastest path for you. On the home network it uses the local LAN. Plug in Thunderbolt and it switches to the direct cable. Away from home it works over the internet or a hotspot. You do not configure any of this. ZimaClient finds the fastest path and takes it.

Control stays on your device. ZimaOS runs its own network controller for remote connections, so no outside party holds administrative rights over your network. ZimaOS does not collect, store, or have access to your files, connection logs, or usage data.

You can also turn remote access off entirely. Open **Settings > Network** on the dashboard and switch it off. Remote connections stop there, while your home network and local connections keep working as usual. Turn it back on whenever you want the channel open again.

## Connect from Phone and Computer

The first sign-in on a new device sets everything up. After that, the connection is automatic. Open ZimaClient and you are connected, at home or away. See **[Get Started](./get-started "Set up ZimaOS from first boot with ZimaClient and account creation")** if your device is fresh out of the box.

Open the client and you get more than a connection. The device panel shows your home server's IP and connection status, with a button that opens the ZimaOS dashboard in one click. Wherever you are, the dashboard is one tap away.

![ZimaClient device panel showing the home server IP, connection status, and the dashboard button](/images/guides/zimaclient-connection-info.png)

On the phone, the same client carries the features you use daily. Files and Photos keep your content in reach, and backups keep working when you leave the house. See **[Phone Backup](./phone-backup "Back up your phone to ZimaOS automatically with ZimaClient")** and **[Photos](./photos "Browse your photo library by timeline, map, and collections on ZimaOS")** for those.

On the computer, ZimaClient mounts your storage in Finder or File Explorer and keeps your backup folders running. See **[Computer Backup](./computer-backup "Back up your computer to ZimaOS with Finder, Explorer, or sync")** for the full flow.

## Your Device Remote ID

The Remote ID is your device's unique identity for remote connections. Other people reach your device through it, so treat it like a password for your shared folders.

To find it, open **Settings** on the ZimaOS dashboard, switch to the **Network** tab, and copy the Remote ID.

![ZimaOS Settings Network tab showing the device Remote ID with the copy option](/images/guides/remote-id-location.webp)

Two things to know about keeping it safe:

- If the Remote ID leaks, your shared folders may be exposed. Keep it to yourself.
- If you suspect a leak, reset it by clicking the **...** button next to the Remote ID. The leak stops working immediately. Existing connections and shares become invalid, so devices need to reconnect after a reset.

![ZimaOS Settings Network tab showing the reset option for the device Remote ID](/images/guides/remote-id-reset.png)

## Multiple Devices

More than one ZimaOS device in your life is the norm, not the exception. ZimaClient lists them all, and switching is one tap in the device list.

![ZimaClient device list showing multiple ZimaOS home servers to switch between](/images/guides/zimaclient-device-switch.png)

Give each device its own icon so they are easy to tell apart. On the ZimaOS dashboard, open **Settings > General** and click the configure button next to **Device Info**. The icon travels with the device, so the client shows the same identity on every screen you use.

![ZimaOS Settings General page with custom device icons, one styled after the pulsar wave album cover](/images/guides/zimaclient-device-icons.png)

For a second computer, Connect ID covers the case where your device is not nearby. Sign in with the Connect ID instead of a local scan, and the connection works the same way. Find more in **[Features](./features "A tour of the ZimaOS dashboard and what each feature does")**.

## ZimaClient or a Standard Protocol

ZimaClient is the built-in path. You sign in, and the remote connection works without any network setup on your side. The connection is peer to peer, so your data moves directly between devices.

If you prefer to run the connection on open protocols, the official App Store has four apps for that: Tailscale, WireGuard Easy, Firefly, and NetBird. You bring your own account or keys, and the connection works with standard clients on Linux, Android, and other platforms. See **[Tailscale and WireGuard Remote Access](./app-store/tailscale-wireguard-remote-access "Run remote access with Tailscale or WireGuard on your home server")** for the comparison and the setup steps.


## Next

- **[Download ZimaClient](./zimaclient-install "Install and set up ZimaClient on desktop and mobile for device access")** — the client for every device you carry
- **[Tailscale and WireGuard Remote Access](./app-store/tailscale-wireguard-remote-access "Run remote access with Tailscale or WireGuard on your home server")** — the standard protocol path
- **[SMB File Sharing](./smb-troubleshooting "Share files over SMB so they appear in Finder and File Explorer")** — sharing on the local network
