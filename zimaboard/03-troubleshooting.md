---
sidebar_label: Troubleshooting
title: Troubleshooting | ZimaBoard
hide_title: true
comments: true
---

# Troubleshooting

The main goal of this document is to be able to categorize problems and find quick solutions in a few simple steps when you encounter problems with the product.

## Known Issues

:::info
This section will be continuously updated, if the documentation does not contain the issue you are currently experiencing. You can refer to "[Looking for support](#looking-for-support)"
:::

### Cannot be turned on normally, power indicator goes off periodically

When you find that the power indicator can light up, you can be sure that your hardware is able to run properly.

The probability is that the system is not working properly due to reboot. The most common causes of repeated system reboots are as follows.

1. Due to high load on the motherboard, caused by insufficient power supply, CPU boot failure
2. Insufficient power supply to the motherboard due to low power adapter output current
3. System boot failure due to corrupted system image
4. Failure to boot due to modification of Bios setting items.

In most cases, it is caused by the current demand of the system running is less than the power supply capacity.

#### For excessive load

To diagnose and confirm, remove all ZimaBoard peripherals (including USB devices), connect to power independently, observe the working status of ZimaBoard, wait patiently for 3 minutes (for the first 1 minute, the power indicator may go off briefly and come on again due to the BIOS operation mechanism), if the power indicator is always on, it indicates normal operation.

#### For insufficient power or abnormal power adapter

Please check first if the voltage specification of the power adapter is 12V and its maximum power. Usually, you can easily get this information from the back or bottom of your power adapter at the plug.

When your power adapter can provide low power, you can observe the ZimaBoard working status (please wait 1-3 minutes) by removing the ZimaBoard related peripherals and then plugging in the standalone power supply, if the power indicator is always on, it is working properly.

The following is the ZimaBoard operating data we tested earlier for your reference.

Standby: 0.11A @ 12v, 1.3w.
Full load: 0.7A @ 12v, 8.6w. 

We recommend you to use the original power adapter (12V/3A) from the official website to better avoid such problems.

#### For system damage

The diagnosis and confirmation is to connect the ZimaBoard to the monitor through the miniDP port, then connect the power to the ZimaBoard, when the monitor gets the ZimaBoard logo, the rest screen appears and this login process is cycled. In this case, you can re-burn the ZimaBoard image by writing the image in our other tutorial.

#### For problems after modifying the setting items of specific Bios

You can fix the problem by replugging the RTC battery on the back of the backplane and restoring the default entries of the Bios.



### Fail to boot

#### Reason

Wrong AC Adapter or loose connection

#### How to Solve

We recommend using ZimaBoard official 12V/3A DC power adapter. 

Make sure the connection is tight.


### Can't reach page: casaos.local

#### Reason 

Not on the same network;

Operation system does not support mDNS;

Router compatibility issues

#### How to Solve

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


### My monitor only has HDMI or VGA port

#### How to Solve

Use a MiniDP to HDMI or a MiniDP to VGA adapter.


### No screen on/after boot

#### Reason

Loose connection;
Power adapter failure

#### How to Solve

Make sure the connection is tight.

Try with another DC power adapter;

Try to power off ZimaBoard first, re-plug the MiniDP, and reboot.


### System not responding/hanging

#### Reason

System failure

#### How to Solve

Reboot ZimaBoard. Unplug and reconnect the power adapter.

## Looking for support

Welcome to join our [Discord](https://discord.gg/TZjYGnAW3M) and get community support in #zimaboard-support.

You can also contact ober@icewhale.org for assistance with this.

:::tip
In order for IceWhale or the community to quickly understand the problem you are experiencing and better help you.

You can refer to the outline below to better write your problem.

1. Hardware connection picture
2. Operation steps
3. Issue description

<details>

<summary>Example</summary>

**Hardware connection picture**

<p><img
  src={require('./images/troubleshooting-hardware-connection-picture.png').default}
  alt="Network Case 2"
  style={{
    maxHeight: '300px',
    display: 'block',
    margin: 'auto'
    }}
/></p>

**Operation steps**

I entered the system and changed the system file with the file path xxx, and the changed action is xxx.

I also executed what under xx application, the changed operation is xxx

After running overnight, I got up this morning and found that the device had been shut down

**Issue Description**

Now the machine does not turn on properly, and the phenomenon appears is that after power on, it lights up and goes off periodically.


</details>
:::