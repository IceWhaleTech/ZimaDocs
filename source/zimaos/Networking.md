---
title: Networking
description:ZimaOS has no desktop UI, plug in Ethernet and its ready. The connected display shows device info and IP addresses, while the dashboard lets you view link speeds per port, switch to a static IP, or enable remote access.
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /zimaos/networking.html
---

**ZimaOS** does not have a desktop environment. When you connect a monitor to your device, the screen displays a console overview showing the ZimaOS version, device model, and the IP addresses you can use to access the ZimaOS web dashboard.

Example of what you will see on the display:

![Zimaos display UI](https://manage.icewhale.io/api/static/docs/1783495730981_image.png)


By default, ZimaOS obtains an IP address automatically via DHCP — just plug in the Ethernet cable and the device is ready. If you need to change network settings, open the dashboard and go to **Settings > Network**.

## Networking Settings

The **Network** page shows all physical Ethernet ports on your device at a glance. For each port you can see:

- Interface name (e.g., `eth0`, `eth1`)
- Link status (Connected / Disconnected)
- Current link speed (e.g., 1000 Mbps, 2500 Mbps)
- Assigned IP address (via DHCP)

This makes it easy to verify that each port is negotiating at the expected speed and has received a valid IP from your router.

## Configuring a Static IP

Each network interface can be switched from automatic (DHCP) to a manual static IP configuration:

1. Click on the interface you want to configure
2. Switch the mode from **DHCP** to **Manual**
3. Enter your desired IP address, subnet mask, gateway, and DNS server
4. Click **Save**
![Setting Page](https://manage.icewhale.io/api/static/docs/1783495665542_image.png)

The change takes effect immediately. If the new IP is on a different subnet, your current dashboard session will disconnect — use the new IP shown on the connected monitor to reconnect.

## Remote Access

The **Remote Access** toggle on the Networking page allows you to enable inbound access to your ZimaOS dashboard over the internet. When enabled, ZimaOS establishes a secure relay connection so you can reach your device from anywhere without configuring port forwarding on your router.

For more details, see [Remote Access](https://www.zimaspace.com/docs/zimaos/remote-access).
