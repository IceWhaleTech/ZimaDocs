---
title: FAQ
---
# ZimaBoard Frequently Asked Questions

# Q：What are the default login credentials for CasaOS?

Username: `casaos`
Password：`casaos`


# Q：Why do I see a red light when I plug in the device, but I can’t access CasaOS at http://casaos.local?

If you can’t access CasaOS at http://casaos.local/:
1. Obtain the device’s IP address from your router’s connected devices list or by connecting a monitor to the miniDP port on the ZimaBoard.
2. Enter the IP address in your browser (e.g., http://192.168.X.X) to access CasaOS.
[**Tutorial to get the IP address**](/faq/How-to-check-IP-address)
[**Tutorial for Recovery the system**](/faq/Restore-factory-settings) 

{% note dinfo %}
**TIPS**
1. **Blinking LED:** Normal activity; communication in progress.
2. **LED Off:** No communication or no network connection.
3. **LED Solid (always on):** Possible short-circuit in the network cable.
{% endnote %}

# Q：Does the power supply support 110v?

No. We recommend using the official 12V/3A power adapter for ZimaBoard.

# Q：Can ZimaBoard support a single 8TB hard drive?

Yes. ZimaBoard can be expanded up to 36TB (2×18TB) via its two onboard SATA ports. However, if you’re using 3.5" HDDs, you will need an external power supply, as ZimaBoard’s power output may be insufficient for large HDDs.

# Q：Is SSH enabled by default?

Yes. SSH is enabled by default on ZimaBoard. You do not need to enable or open the port manually.

# Q：BIOS Problems:

**Scenario:**
- You reinstalled Debian on a USB flash drive and used another flash drive for additional storage.
- After removing the USB drive, the system lost power, SSH access failed, and no display signal was detected when plugging in a monitor.

**Possible Cause:**
- An older BIOS version may cause system startup failures, sometimes triggered by sudden power changes or hardware swaps.

**Recommended Solution:**
1. Power off and unplug your ZimaBoard.
2. Open the back panel and carefully remove the RTC battery (the small coin battery on the board).
3. Wait a few seconds, then reinsert the RTC battery.
4. Reattach the back panel and plug in the power adapter.
5. Attempt to power on again.
 [**modify the BIOS system**](/faq/Upgrade-Motherboard-BIOS-Version)
 [**Tutorial for Recovery the system**](/faq/Restore-factory-settings) 

 [![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)

 