---
title: ZimaBoard CasaOS Factory Recovery
---

# Preparation

Download the official ZimaBoard CasaOS image

- For [**ZimaBoard CasaOS image -832/432**](https://mega.nz/file/jrISlLCL#YGBsaqysSOv_o70KMhwvc_PrE8RCK4BEHfzhXO4j4g0)

- For [**ZimaBoard CasaOS image -216**](https://mega.nz/file/OuoFmZDQ#nKI9pm3fHN74S0devyXR_COpoX2Il2MUjw1xj3t5jp8)
## Create an image USB stick

**Prepare in advance**

- Download and install [BalenaEtcher](https://www.balena.io/etcher/) on your computer
- Download the official ZimaBoard CasaOS image

ZimaBoard related preparation.

- ZimaBoard and power adapter
- A USB drive (8GB+, The data in it will be cleared)
- A miniDP to DP/HDMI Adapter (Used to connect to a monitor)
- A monitor
- A keyboard
- A USB hub (Optional, if the USB port is not enough)



## Create an installation USB drive

###  Open [BalenaEtcher](https://www.balena.io/etcher/)

![Open Balenaetcher](/images/Restore-factory-settings/open-balenaetcher.png)

### Select the system image 

![Choose Image](/images/Restore-factory-settings/choose-image.png)

### Select your inserted USB drive

![Choose Usb](/images/Restore-factory-settings/choose-usb.png)

### Click "Flash!" 

**You may be asked to enter your system password during the process, just enter it and click OK.**

![Using Balenaetcher Click Flash](/images/Restore-factory-settings/click-flash.png)

![Enter you Computer Account And Password ](/images/Restore-factory-settings/enter-password.png)

**The whole process will take a few minutes, depending on the size of your system image and the read/write speed of your USB drive.**

![Watting Flash](/images/Restore-factory-settings/waiting-flash.png)

### Complete! 

**Remove the USB drive and you're ready to go!**

![ComPlete Creat Usb Driver](/images/Restore-factory-settings/complete-flash.png)

## **Boot from the installation USB** **drive**

### Connecting the accessories to ZimaBoard

Connect your USB drive, monitor, keyboard,` USB hub `**(Optional)**, `mouse `**(Optional)**, `network cable `**(Recommended)** to ZimaBoard.

![Connection Diagram](/images/Restore-factory-settings/connection-diagram.png)

### Power on and select the boot device

Connect power and press **F11**continuously.

## **Start Install**

**1. Select your USB drive starting with UEFI in the boot device menu.**

![Choose Udfi Boot](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

**2. Wait a few minutes**

![Witting Boot](/images/Restore-factory-settings/witting-boot.png)

**3. Select the first one**

![Select mmcblk0](/images/Restore-factory-settings/select-mmcblk0.png)

**4. Enter **"y"****

![Installing CasaOS](/images/Restore-factory-settings/enter-yes.png)

**5. Wait a few minutes**

![Witting CasaOS installer](/images/Restore-factory-settings/witting-install.png)

**6. Select the first one**

![Select Poweroff](/images/Restore-factory-settings/select-poweroff.png)

**Finish the installation after the countdown！！！！**

# Video short tutorials

{% youtuber video SMV3wG1YbUk %}
{% endyoutuber %}

**Note****:** **when selecting** **storage,** **please take care to select the correct disk**

Because operating systems and storage vendors calculate storage space sizes differently, usually the capacity you see when you install your system is not exactly the same as the hardware capacity. You can tell the difference by the type of disk and the approximate size.

The built-in storage type of the ZimaBoard is eMMC, which may also be recognized as an MMC device in the operating system.

**Attention****! You may need to modify the boot sequence in BIOS or select the boot device at boot time if you install the OS to an external hard disk.**