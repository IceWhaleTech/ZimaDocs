---
title: FAQ
---
# ZimaBoard FAQ's

# Q：What is the account password for ROOT?

Account： `casaos`
Password：`casaos`


# The red light comes on when I plug it in, but I can't access CasaOS through http://casaos.local/?

When you power on the device normally, the network port light flashes, and the machine device indicator palace light is on, indicating that the device power system is running normally. At this time, you need to get the device’s IP address into CasaOS by entering the route or other means or check it by connecting the miniDP on the device through the monitor. 
[**Tutorial to get the IP address**](/faq/How-to-check-IP-address)
[**Tutorial for Recovery the system**](/faq/Restore-factory-settings) 

{% note dinfo %}
**TIPS**
1. If the signal indicator blinks, it means the signal is normal and communication is in progress
2. If the signal indicator is off, it means no communication
3. If the signal indicator light is long, it means the network cable is short-circuited
{% endnote %}

# Q：Does the power supply support 110v?

**No. We recommend that you use the official 12V/3A power adapter for ZimaBoard.**

# Q:Does ZimaBoard support a single 8T hard drive??

**ZimaBoard can be expanded to 36TB HDD (2x18TB) via two SATA ports onboard. Please note that external power supply for 3.5inch HDDs will be needed as power supply from the ZimaBoard could be insufficient**

# Does SSH need to go into the server and open the port itself?

  SSH is opened by default

# Q BIOS Problems:

**I reinstalled a Debian system with a USB flash drive and then prepared to use it to do their own docker, another empty USB flash drive for expansion, I plugged in the USB flash drive, which can be recognized, ready to pull some data to put the docker container, but after unplugging, the power light all out, ssh also out, at this time not yet plugged in the empty USB flash drive, and then plugged in the power, the power light flashes a little and gone, and then try to plug in monitor, the monitor can not receive the signal, the logo can not see, bios naturally can not enter may be unplugged u disk when the sudden current, resulting in parts burned** 

  This side of the current understanding of the system BIOS problems (belonging to the version of the problem that has been repaired), if earlier users buy equipment find such problems, the machine cannot open. Please open the backplane, and remove the RTC battery to re-power the boot again.
 [**modify the BIOS system**](/faq/Upgrade-Motherboard-BIOS-Version)
 [**Tutorial for Recovery the system**](/faq/Restore-factory-settings) 

 [![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)

 