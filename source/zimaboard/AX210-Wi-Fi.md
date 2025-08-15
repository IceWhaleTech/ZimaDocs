---
title: AX210 Wi-Fi Card User Guide
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 1. Introduction
The Intel® Wi-Fi 6E AX210 (Gig+) adapter is designed to support Wi-Fi 6E technology. The product supports dual-stream Wi-Fi in the 2.4GHz, 5GHz and 6GHz bands as well as Bluetooth® 5.3. Combined with Intel® Core™ processors and exceptional Intel wireless innovations, the Intel® Wi-Fi 6E AX210 module can dramatically improve your connected experience at home, work, or on the go.

## 2. Specifications
![AX210 Wi-Fi Card Spec](https://manage.icewhale.io/api/static/docs/1755248064574_copyImage.png)

## 3. Usage Instructions
**Quick Operation Steps:
A. Insert the AX210 card into the ZimaBoard.
B. Update the AX210 driver.
C. Open the CasaOS system and connect to Wi-Fi.**

**STA Mode**
**Required Equipment:**
- ZimaBlade / ZimaBoard × 1
- AX210 Wi-Fi card × 1
- Ethernet cable × 1
- Power adapter × 1
**Optional:**
- miniDP cable × 1
- Monitor × 1
- Keyboard × 1
**Connection Diagram**
![Connection Diagram](https://manage.icewhale.io/api/static/docs/1755248150818_image.png)
### Step 1: Check if the AX210 Wi-Fi card is detected
1. Access your device via Terminal.
![Terminal](https://manage.icewhale.io/api/static/docs/1755248310999_copyImage.png)
![Login Terminal](https://manage.icewhale.io/api/static/docs/1755248335646_image.png)

2. Switch to root mode `su`
![root mode](https://manage.icewhale.io/api/static/docs/1755248357144_image.png)

3. Run the command `lspci`
![result of lspci](https://manage.icewhale.io/api/static/docs/1755248383004_image.png)

   You should see the Intel Device listed, confirming it is connected to the ZimaBoard.

### Step 2: Install the AX210 driver
<mark style="background-color: #fff9bd">Note:
 If you are using CasaOS pre-installed on ZimaBoard or ZimaBlade with kernel version **5.10**, you can skip directly to **Step 3**.
 You can also get this version from [the provided link](https://www.zimaspace.com/docs/zimaboard/Restore-factory-settings).</mark>
1. Check your kernel version. If it is below 6.10, it is recommended to upgrade. In this guide, we will use the backports kernel.
![kernel version](https://manage.icewhale.io/api/static/docs/1755248568547_image.png)

2. Add the backports repository:
```language
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" | sudo tee -a /etc/apt/sources.list
```


3. Update package lists:
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249083029_image.png)

4. Add the Debian archive keyring:
```language
sudo apt install -y debian-archive-keyring
```
![Lisence](https://manage.icewhale.io/api/static/docs/1755249117075_image.png)

5. Update package lists again:
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249154038_image.png)

6. Upgrade the kernel and install firmware:
```language
sudo apt install -y -t bookworm-backports linux-image-amd64 firmware-iwlwifi
```
![download kernel and driver](https://manage.icewhale.io/api/static/docs/1755249240618_image.png)

7. Reboot:
```language
sudo reboot
```
After rebooting, confirm that the kernel version is 6.12 or higher.
![](https://manage.icewhale.io/api/static/docs/1755249301302_image.png)

### Step 3: Connect to Wi-Fi using `nmtui`
We will use the `nmtui` tool to connect.
```language
sudo nmtui
```

If the system does not recognize the `nmtui` command, please refer to the **FAQ** section for installation instructions.

1. Select **Activate a connection**.
![network manager GUI/TUi](https://manage.icewhale.io/api/static/docs/1755249412290_image.png)

2. Choose your Wi-Fi network (SSID).
![select wifi](https://manage.icewhale.io/api/static/docs/1755249456648_image.png)

3. Enter the password and press Enter.
![Authentication/password required by wireless network](https://manage.icewhale.io/api/static/docs/1755249476230_image.png)

4. Verify IP address and connectivity
Save & Exit the `nmtui` tool and using `ip a` to check the status of your wireless interface:

```language
ip a
```
![find the ip address](https://manage.icewhale.io/api/static/docs/1755249580916_image.png)

  If you are using the GUI version of CasaOS, simply open the Wi-Fi menu and select your desired network.

![](https://manage.icewhale.io/api/static/docs/1755249604651_image.png)

### Compatible Router Operating Systems
- **OpenWRT**
  1. You should install iwlwifi, which is the official driver for ax210.
  2. go to intel [official website](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html 383) to download the firmware.
  3. Unzip the iwlwifi-ty-59.601f3a66.0.tgz and copy the file to the /lib/firmware/
  4. Use lspci command to check the ax210 path.
  5. go to the /sys/bus/pci/devices, and you will see the device id.
  6. enter the dictionary and use pwd command to get the absolute path.
  7. edit the /etc/config/wireless
```language
config wifi-device 'radio0'
        option type 'mac80211'
        option country 'US'
        option cell_density '0'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'

config wifi-device 'radio1'
        option type 'mac80211'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'
        option band '5g'
        option htmode 'HE80'
        option cell_density '0'
        option country 'US'
```
  8. reboot ! And you will find the driver works well.

#### FAQ
- **Network Speed Test from Zima device to LAN device**
![iperf3](https://manage.icewhale.io/api/static/docs/1755249878561_image.png)


- **AP Mode (2.4 GHz Only)**

- 1. Install required packages:
     `sudo apt update`
     `sudo apt install hostapd iw`
- 2.  Configure the wireless network:
     Edit `/etc/hostapd/hostapd.conf`
```language
interface=wlp1s0  # Replace according to your network adapter name
driver=nl80211
ssid=mylove   # Replace "YourSSID" with your desired network name
hw_mode=a
channel=36      # Select your preferred channel
country_code=US
ieee80211ac=1
wmm_enabled=1
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP
wpa_passphrase=YourPassphrase  # Replace "YourPassphrase" with your Wi-Fi password
logger_stdout=-1
logger_stdout_level=2
```
- 3.  Start hostapd:
    ` sudo systemctl start hostapd`
![](https://manage.icewhale.io/api/static/docs/1755250711162_image.png)

- 4.  Test your Wi-Fi network by connecting from another device.![](https://manage.icewhale.io/api/static/docs/1755250706664_image.png)

 
- **Installing nmtui Tool**
  `nmtui` is included in the `network-manager` package:
```language
sudo apt install network-manager
```

  