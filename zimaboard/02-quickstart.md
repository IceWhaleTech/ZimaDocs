---
sidebar_label: Quick Start
title: Quick Start | ZimaBoard
---
import BrowserWindow from '@site/src/components/BrowserWindow';

# Quick Start

## Preparation

<p><img
  src={require('./images/quickstart-preparation.jpg').default}
  alt="Preparation"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

- Required
  - ZimaBoard 
  - 12V/3A Power Adapter
  - Cat.5E or higher network cable
- Recommended
  - SATA Cable for ZimaBoard (Inside the ZimaBoard package)
  - 2.5" SATA SSD or HDD

:::tip

You don't need to connect your mouse and keyboard to the ZimaBoard, you can access all the services on the ZimaBoard directly through the network after connecting cables.

Of course, if you find it more convenient to plug in your monitor, you can also use a miniDP to DP or HDMI cable to connect your monitor, and connect your mouse and keyboard.

:::

## Wiring and Powering Up

### Connect Ethernet

<p><img
  src={require('./images/quickstart-eth-connect.jpg').default}
  alt="Ethernet Connection"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

It is recommended to connect the ZimaBoard to your router or ISP modem through a network cable, refer to this picture

<p><img
  src={require('./images/eth-connection.jpg').default}
  alt="Ethernet Connection Guide"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

:::info

If you have multiple routers in your network, make sure to connect the ZimaBoard to your primary router. Or at least to the router at the same level you use to access the device.

In short, just try to connect to the top router!

<details>

<summary>Network Details</summary>

**For example, if your network looks like this:**

<p><img
  src={require('./images/network-case-1.png').default}
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
  src={require('./images/network-case-2.png').default}
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

### Connect HDD/SSD Drive

:::tip 
This step is optional, but it is recommended that you add an external drive to use CasaOS.
:::

<p><img
  src={require('./images/quickstart-sata-connect.jpg').default}
  alt="SATA Connection"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>


### Power On 

Plug in the power cable and the power indicator flashes! (ง ͡ʘ ͜ʖ ͡ʘ)ง

<p><img
  src={require('./images/quickstart-power-connect.jpg').default}
  alt="Power Connection"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

:::info

Please be patient for about 10-15 seconds! 

:::


## Setting Up CasaOS

:::tip
Make sure your computer is connected to the same router as the ZimaBoard
:::

### Open CasaOS

Open a new tab in your browser and enter `http://casaos.local`

<BrowserWindow minHeight={100} url="http://casaos.local">

![CasaOS Welcome](./images/casaos-welcome.jpg)

</BrowserWindow>

### Create Your Account

<BrowserWindow url="http://casaos.local">

![CasaOS Create Account](./images/casaos-create-account.jpg)

</BrowserWindow>

### Update CasaOS

<BrowserWindow url="http://casaos.local">

![CasaOS Update](./images/casaos-update.jpg)

</BrowserWindow>


### Have Fun!

:::tip

**Default account for Pre-installed Apps**

Username:`casaos`

Password:`casaos`

:::

![CasaOS Main](./images/casaos-main.jpg)