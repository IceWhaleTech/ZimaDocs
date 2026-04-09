---
title: Auto Power-On Solution For ZimaCube
description: "Configure ZimaCube to power on automatically after a power outage. Step-by-step guide to enable auto power-on via BIOS or mainboard jumper settings."
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
# Requirement Description
Currently, ZimaCube requires pressing the power button to start after being plugged in. Some users desire an auto-start function upon power being supplied.

# Solution
Modify mainboard jumper pins.

# Detailed Steps
## Step 1: Ensure ZimaCube is shut down and unplugged

## Step 2: Open the top cover of ZimaCube
![](https://manage.icewhale.io/api/static/docs/1722413156672_image.png)

## Step 3: Locate AUTO-PWR1
![](https://manage.icewhale.io/api/static/docs/1722413204344_image.png)

## Step 4: Modify the jumper pins
Move the jumper cap position. The two pins near AUTO indicate the need to press the power button after plugging in, while the two pins near PWR1 indicate automatic startup upon plugging in.

Below is the position for requiring the power button press to start after power off:
![](https://manage.icewhale.io/api/static/docs/1722413242930_image.png)

Below is the position for automatic startup after plugging in:
![](https://manage.icewhale.io/api/static/docs/1722413266760_image.png)
You can modify the position according to your needs.