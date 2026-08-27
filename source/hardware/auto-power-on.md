---
title: Auto Power-On Solution For ZimaCube
description: "Configure ZimaCube to power on automatically after a power outage. Step-by-step guide using the BIOS method."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

By default, ZimaCube waits for you to press the power button after being plugged in. If you want it to start automatically — useful if the Cube is tucked away in a closet or you want it to come back after a power outage — there are two ways to set this up.

This guide covers the BIOS method. If your BIOS does not have the Restore on AC Power Loss option, see the **[jumper method](./auto-power-on-setup)** instead.

## BIOS Method

1. Shut down the ZimaCube and plug in a keyboard and monitor.
2. Power on and press **F11** repeatedly during boot to enter the boot menu, then select **Enter Setup** to open the BIOS.
3. Navigate to the **Advanced** tab using the arrow keys.
4. Look for **Restore on AC Power Loss** or a similarly named option. The exact location varies by BIOS version — it is usually under Advanced > Power Management or Advanced > Chipset Configuration.
5. Change the setting to **Power On**.
6. Press **F10** to save and exit.

After saving, unplug the power cable, wait a few seconds, and plug it back in. The ZimaCube should start automatically without pressing the power button.

If you do not see the Restore on AC Power Loss option, your BIOS version may not include it. In that case, use the jumper method linked above — it works on all ZimaCube models.

## When to Use Each Method

- **BIOS method**: Faster, no need to open the case. Works on most ZimaCube units shipped after mid-2024.
- **Jumper method**: Works on every ZimaCube regardless of BIOS version. Requires opening the top cover and moving a small plastic cap on the motherboard.
