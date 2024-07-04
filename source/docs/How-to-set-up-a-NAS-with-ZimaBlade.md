---
title: How to set up a NAS with ZimaBlade
type: “Docs”
---
NAS is a digital haven where your precious data assets reside.
--------------------------------------------------------------

ZimaBlade is a compact, single-board server that transforms your storage needs into a seamless NAS experience. And not just on Earth, but even on Mars one day! Whether you’re a seasoned Linux enthusiast or a curious tech explorer, setting up your pocket-sized data sanctuary NAS with ZimaBlade is a breeze. Let’s dive in this tutorial!

![](https://manage.icewhale.io/api/static/docs/1719988281769_copyImage.png)

**What you need:**

*   ZimaBlade: Your trusty single-board server!
    
*   SO-DIMM DDR3L: The memory module that powers your ZimaBlade.
    
*   Type-C 12V 3A Power Adapter: Keep your ZimaBlade juiced up.
    
*   MiniDP Cable: For connecting your display.
    
*   One to Two HDD or SSD (SATA Interface): Your storage heroes.
    
*   RJ45 Connector with LAN Connection: To keep your ZimaBlade networked.
    
*   USB Keyboard: For initial setup.
    
*   Screen: So you can see what’s happening during boot and setup.
    

You can find all the accessories in our [Zima Store](https://shop.zimaboard.com/collections/zima-accessories?utm_source=head&utm_medium=menu).

[Also, give our quick-start video a glance.](https://www.youtube.com/watch?v=--G4T5aGGEM) Let's start!

## Step 1: Install SO-DIMM

Remove the black cover from ZimaBlade and open the transparent cover:

![](https://manage.icewhale.io/api/static/docs/1719988660694_2.png)


Use a screwdriver to open the transparent cover:

![](https://manage.icewhale.io/api/static/docs/1719988685607_3.png)


Insert the SO-DIMM until you hear a click.

![](https://manage.icewhale.io/api/static/docs/1719988701892_4.png)


Reassemble all the covers.

## Step 2: Connect

**Connect ZimaBlade to your drive. Here, we use an HDD as an example:**

To work properly, your drive needs data and a power supply from ZimaBlade. Use the SATA cable included in ZimaBlade package, which gets both data and power supply from ZimaBlade.

![](https://manage.icewhale.io/api/static/docs/1719988728728_5.png)


**Connect ZimaBlade using an RJ45:**
![](https://manage.icewhale.io/api/static/docs/1719988748568_6.png)


**Connect ZimaBlade to a keyboard(USB) and a screen (miniDP):**
![](https://manage.icewhale.io/api/static/docs/1719988770426_7.png)


**Connect ZimaBlade to the power supply:**
![](https://manage.icewhale.io/api/static/docs/1719988789048_8.png)


Use the type-C cable included in ZimaBlade package.

> ZimaBlade's type-C interface supports USB PD 3.1.
> 
> For long-term use with an HDD, consider using an external power supply.

## Step 3: Boot and get the IP

Plug the power adapter to you AC socket and power on your display. And... Boom! You are in!

![](https://manage.icewhale.io/api/static/docs/1719988807110_9.png)


You'll be prompted to enter the default account `casaos` and password `casaos` to login in.

After logging in, obtain the IP address.

  

**Now, get ZimaBlade's IP address:**

Type `ip addr` and press `Enter` to see the IP address. It will be somting like `192.x.x.x` or `10.0.x.x`. (depending on your LAN configuration.)

![](https://manage.icewhale.io/api/static/docs/1719988868694_Arc_OQwvsTt5Jv.png)


Note down the IP address.

## Step 4: Your NAS is here!

Visit your ZimaBlade at http://yourIpAddress on your phone or desktop computer.

Follow the instructions to create a Web UI account.
![](https://manage.icewhale.io/api/static/docs/1719988936857_Arc_MyleHxojSb.png)

After creating the account, you will be logged into the CasaOS Web UI.
<br>

**Now, configure your disk.** CasaOS will detect the disk connected. Click the storage setting button, then click the "Create Storage" button.
![](https://manage.icewhale.io/api/static/docs/1720065540546_image.png)
![](https://manage.icewhale.io/api/static/docs/1719988986725_Arc_Xe3iywhbjm.png)

Choose the appropriate option for your needs. Your drive is now ready to be used as storage.
![](https://manage.icewhale.io/api/static/docs/1719989035890_Arc_0Jjnl9skw3.png)

**Use the "Files" app to upload and access your files!**
![](https://manage.icewhale.io/api/static/docs/1719989056324_Arc_gdroRMM9ST.png)

**Your ZimaBlade NAS is just set up! Enjoy!**

  

If you encounter any issues during use, feel free to let us know at any time. You can also join our [community](https://icewhale.community/) and [Discord](https://discord.gg/uuNfKzG5) to discuss more about NAS and ZimaBlade. We look forward to your feedback!