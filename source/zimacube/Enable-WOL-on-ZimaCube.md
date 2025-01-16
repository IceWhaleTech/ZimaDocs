---
title: How to Enable Wake-on-LAN (WOL) on ZimaCube
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
WOL (Wake-on-LAN) is a remote wake-up technology that allows users to start devices that are in sleep or shutdown mode by sending a specific "magic packet" over the network. This feature is particularly suitable for scenarios where devices need to be managed remotely, such as starting a NAS server at home or performing remote maintenance on computers in an office environment. With WOL, users can efficiently manage ZimaCube anytime and anywhere without having to operate the switch themselves, greatly improving convenience and work efficiency.Here are the specific steps to achieve this functionL:
## Item List：
- ZimaCube X 1
- Power supply X 1
- Keyboard X 1
- Mouse X 1
- Mac X 1
- Monitor X 1
> Note: Currently this function only supports 2.5GB network port
## Method:
### Step 1 Enter ZimaCube BIOS and modify Wake-on-LAN settings
1. After plugging in the power, press the Del button to enter Bios
![](https://manage.icewhale.io/api/static/docs/1735524832516_image.png)
2. Right click and select Advanced to open OEM Configuration
![](https://manage.icewhale.io/api/static/docs/1735524851875_image.png)
3. Turn on Wake from PME
![](https://manage.icewhale.io/api/static/docs/1735524871357_image.png)
4. Save and exit
![](https://manage.icewhale.io/api/static/docs/1735524887156_image.png)
### Step 2 Get device information
1. Use SSH to connect to ZimaCube
Fill in the IP address of your ZimaCube in xxx.xxx.xxx.xxx
```
ssh root@xxx.xxx.xxx.xxx

```
2. Check the MAC address
```
ip a

```
Save MAC address 88:c9:b3:b3:0c:fc
Save IP address 10.0.203.220
Save broadcast address 10.0.255.255
![](https://manage.icewhale.io/api/static/docs/1735525072064_image.png)
3. Use "ethtool" to configure Wake-on-LAN
4. Change the WOL trigger wake-up activity from `d` (disable) to `g` and enter ethtool eth0 to check whether the modification is successful
**Note: ZimaCube has WOL function enabled by default. If it is not enabled, you can change it according to the above instructions!
**
```
//Modify Command
ethtool -s eth0 wol g
//View Commands
ethtool eth0

```
![](https://manage.icewhale.io/api/static/docs/1735525352878_image.png)
### Step 3 Set WOL to automatically enable after reboot
1. Create a startup script through systemd and create a new service file:
```
nano /etc/systemd/system/wol.service

```
2. Enter the following into the file
```
[Unit]
Description=Enable Wake-on-LAN on eth0

[Service]
Type=oneshot
ExecStart=/sbin/ethtool -s eth0 wol g

[Install]
WantedBy=multi-user.target


```
![](https://manage.icewhale.io/api/static/docs/1735525447586_image.png)
3. Press `Ctel+O` to save, then press Enter, then press `Ctrl+X` to close the file, and then enable the service with the following command:
```
systemctl enable wol.service
systemctl start wol.service

```
4. Restart the system and check if the Wake-on setting is still set to`g`
### Step 4 Use WOL function
Shut down the computer on the web page, or enter `shutdown now` to shut down the computer
![](https://manage.icewhale.io/api/static/docs/1735525561055_image.png)
#### Windows Testing
1. Download [WakeMeOnLan](https://sourceforge.net/projects/wakemeonlan/) software
2. Open the software and click `Add New Computer` under "File"
![](https://manage.icewhale.io/api/static/docs/1735525670726_image.png)
3. Enter the broadcast address saved previously in the IP address and enter the MAC address normally.
![](https://manage.icewhale.io/api/static/docs/1735525688873_image.png)
4. Select the device to be woken up, click `Wake Up Selected Computers` in the upper right corner, and observe whether it can be woken up and started.
![](https://manage.icewhale.io/api/static/docs/1735525722686_image.png)
## Summary
Through this tutorial, we learned how to enable the Wake-on-LAN (WOL) function on ZimaCube. After enabling WOL, you can remotely wake up the device over the network to improve the convenience of use. In this tutorial, the Windows system is used for operation, but the methods for other operating systems are basically the same. You can search for related software online. No matter which operating system you are using, enabling WOL is a simple and effective operation, making your device more flexible and intelligent.