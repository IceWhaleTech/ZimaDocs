---
sidebar_label: Troubleshooting
title: Troubleshooting | ZimaBoard
---

# Troubleshooting

## Fail to boot

### Reason

Wrong AC Adapter or loose connection

### How to Solve

We recommend using ZimaBoard official 12V/3A DC power adapter. 

Make sure the connection is tight.


## Can't reach page: casaos.local

### Reason 

Not on the same network;

Operation system does not support mDNS;

Router compatibility issues

### How to Solve

Make sure PC and ZimaBoard are connected to the same router.

:::info

If you have multiple routers in your network, make sure to connect the ZimaBoard to your primary router. Or at least to the router at the same level you use to access the device.

In short, just try to connect to the top router!

<details>

<summary>Network Details</summary>

**For example, if your network looks like this:**

<p><img
  src={require('./02-get-started/images/network-case-1.png').default}
  alt="Network Case 1"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

The routers are connected as shown in the diagram. Both router A and router B are connected to different devices that need to be networked, and you want them both to be connected to the ZimaBoard, connect the ZimaBoard to router A.

But if all your devices that need to be networked are actually connected to router B, or if you only want the devices under router B to access the ZimaBoard, then just connect to router B.

---

**The same goes for the following network situation:**

<p><img
  src={require('./02-get-started/images/network-case-2.png').default}
  alt="Network Case 2"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

The routers are connected as shown in the figure. Routers A, B, C and D are all connected to different Internet devices, and you want them all to connect to the ZimaBoard, connect the ZimaBoard to router A.

If you only want the devices under router B to access the ZimaBoard, then just connect to router B. At this point, none of the devices connected to routers A and C will be able to access the ZimaBoard.

</details>

:::


## My monitor only has HDMI or VGA port

### How to Solve

Use a MiniDP to HDMI or a MiniDP to VGA adapter.


## No screen on/after boot

### Reason

Loose connection;
Power adapter failure

### How to Solve

Make sure the connection is tight.

Try with another DC power adapter;

Try to power off ZimaBoard first, re-plug the MiniDP, and reboot.


## System not responding/hanging

### Reason

System failure

### How to Solve

Reboot ZimaBoard. Unplug and reconnect the power adapter.