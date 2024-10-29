---
title: How to Enable Wake-on-LAN (WOL) on Zimaboard
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
LAN Wake-on-LAN (WOL) is a very important part of system and computer processing, especially if you are dealing with a SBS (Single Board Server) like Zimaboard.
To meet your needs, our Zimaboard product provides support for WOL, out of the box, and you just need to enable it.
Enabling LAN Wake-on-LAN (WOL) on Zimaboard through its BIOS is a three-step process.
- The first step is to configure WOL through the BIOS
- The second step is to enable WOL in the system services, and note down the MAC address and other information
- The third step is to download the appropriate WakeOnLine software and configure the new device.

Here are the specific steps:

### BIOS Settings
1. Turn on the system power and press the **Delete** key to enter the BIOS.
2. Use the arrow keys on the keyboard to navigate to the **Advanced** tab, then select the **Power Management Configuration** item. Make sure the **Wake on PME** option is set to **Enabled**. Press **F10** and click **OK** to save the settings, and the system will automatically restart.
   ![](https://manage.icewhale.io/api/static/docs/1730194172109_image.png)
   ![](https://manage.icewhale.io/api/static/docs/1730194187655_image.png)

### Enabling System Services

1. Our ZimaBoard is pre-installed with the CasaOS system. Here, an SSH tool can be utilized to control the command line and connect using your own username and password.
Use the command `ip a` to list all the network interfaces and their status in the system. Network interface names are typically like `eth0`, `enp2s0`, `wlan0`, etc. You can identify the appropriate interface name based on the network interface you are connected to:
At the same time, when using WakeMeOnLan on Windows in the subsequent steps, ensure that you use the correct target address. Usually, the broadcast address is the broadcast IP address of the entire subnet. For instance, if the IP address of the ZimaBoard is `10.0.192.211`, the broadcast address should be `10.0.255.255`. Therefore, attention should also be paid to the broadcast address. 
![](https://manage.icewhale.io/api/static/docs/1730195494901_copyImage.jpeg)

2. Run the following commands to update your package manager and install the ethtool tool:
```
sudo apt update
sudo apt install ethtool
```

3. The network interface I enabled here is `enp3s0`. By default, the network interface WOL is disabled. You can use the following command to check whether WOL is enabled:
```
sudo ethtool enp3s0
```
Where `enp3s0` should be the name of the network interface you enabled, as shown below
![](https://manage.icewhale.io/api/static/docs/1730196409296_image.png)
`Wake-on: d` means WOL is currently disabled.

4. To enable the Wake-on-LAN feature, you need to run the following command:
```
sudo ethtool -s enp3s0 wol g
```
  This command will enable magic packets (g), which will support waking up the ZimaBoard via magic packets.
  After running this command, you can use the following command again to confirm that WOL is enabled:
```
sudo ethtool enp3s0
```

| ![](https://manage.icewhale.io/api/static/docs/1730196776593_image.png) | ![](https://manage.icewhale.io/api/static/docs/1730196793376_image.png) |
| - | - |
| running this command | The status of `Wake-on` should change to `g`, indicating that WOL has been successfully enabled |


5. Create a startup script through systemd
- Create a systemd service to automatically run the ethtool command to enable WOL at system startup. Services are the simplest.
- Create a new service file:
```
sudo nano /etc/systemd/system/wol.service
```
- Enter the following content in the file:
```
[Unit]
Description=Enable Wake-on-LAN on enp3s0

[Service]
Type=oneshot
ExecStart=/sbin/ethtool -s enp3s0 wol g

[Install]
WantedBy=multi-user.target
```
![](https://manage.icewhale.io/api/static/docs/1730197095005_image.png)
- Press `Ctel+O` to save, then press `Enter`, then press `Ctrl+X` to close the file, and then use the following command to enable the service:
```
sudo systemctl enable wol.service
```

- Reboot the system and check if the Wake-on setting remains as `g`:
```
sudo systemctl start wol.service
```

The above method can ensure that the WOL setting is automatically enabled after reboot.

6. After success, shut down the computer on the web page, or enter `sudo shutdown now` to shut down the computer
![](https://manage.icewhale.io/api/static/docs/1730197245860_image.png)

### Wake on LAN

**Windows test**
1. Download [WakeMeOnLan](https://sourceforge.net/projects/wakemeonlan/) software (of course there are many options, here we use this software for testing)
2. Open the software and click `Add New Computer` under File
![](https://manage.icewhale.io/api/static/docs/1730197626956_image.png)
3. Enter the previous broadcast address in IP address. For example, if the IP address of ZimaBoard is `10.0.192.211`, the broadcast address should be `10.0.255.255`. Fill in the MAC Address normally. Do not fill in other information. Click `OK`.
4. Select the device to be awakened, click `Wake Up Selected Computers` in the upper right corner, and observe whether it can be awakened and started.
![](https://manage.icewhale.io/api/static/docs/1730197821740_image.png)
{% note warn Tips %}
If you need remote wakeup on other devices (such as Android, iOS, MacOS, etc.), you can search for related software online. Since the basic steps are not much different, I will not go into details here. I wish you all the best.
{% endnote %}