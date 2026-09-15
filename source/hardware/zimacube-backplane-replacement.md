---
title: ZimaCube Backplane Replacement Guide
description: "Step-by-step guide to remove and replace the ZimaCube hard-drive backplane, covering tools, safety notes, flat-cable handling, and post-replacement verification."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

This guide applies to the ZimaCube series and walks through removing and replacing the hard-drive backplane. Follow the steps in order; reassemble by reversing the disassembly steps.

## Tools You Will Need

- M3 Phillips screwdriver (for the backplane and bracket screws)
- H2 Hex screwdriver (for the side panel screws)
- Tweezers or a plastic spudger (recommended, for prying off the clip-on panel and peeling back the black tape)

## Important Notes

{% note warn Power off and discharge %}
Before replacing the backplane, power off the device and unplug the power cord. Wait about 30 seconds for residual power to drain, to avoid electric shock or component damage.
{% endnote %}

{% note warn ESD protection %}
Touch a metal surface or wear an anti-static wrist strap before handling components, to avoid damaging the backplane.
{% endnote %}

- Screws from different locations may differ in length. Keep them sorted so each goes back in the right place.
- The flat cables (FPC) are fragile. Peel the tape, lift the latches, and plug or unplug them gently to avoid tearing the cable or breaking a latch.
- When plugging or unplugging connectors, grip the connector itself. Never pull on the wires.
- The flat cables are keyed and fit only one way. Take a photo to record the orientation before removing them, align with the keyed notch when reinstalling, and never force a connector that will not seat.

## Disassembly Steps

### 1. Power off and remove the drives

1. Power off the device and unplug the power cord.
2. Remove all drive trays (including the seventh-bay tray) and set them aside safely.

![ZimaCube internal structure with the drive trays and heatsink visible](/images/zimacube-backplane-replacement/remove-drives.webp)

### 2. Remove the side panels and open the top cover

1. Remove the fixing screws on both sides of the chassis (4 per side).

![Side screws marked with red boxes](/images/zimacube-backplane-replacement/side-screws.webp)

2. Open the top cover.
3. Lift the side panels upward to make room for later cable access.

### 3. Remove the rear panel and bracket

1. The rear panel is clip-mounted. Simply pry it open and remove it.

![Rear panel removed, exposing the fans](/images/zimacube-backplane-replacement/rear-panel.webp)

2. Remove the 6 screws on the rear bracket (located behind the clip-on panel, securing the fans and backplane), and unplug the two fan connectors.

![Rear bracket screws and fan connectors marked](/images/zimacube-backplane-replacement/bracket-screws.webp)

### 4. Disconnect the backplane power cable

1. Unplug the backplane power cable on the left side.

![Backplane power cable marked with a red box](/images/zimacube-backplane-replacement/power-cable.webp)

### 5. Remove the flat cables

1. Carefully peel off the black tape on the flat cables.
2. Lift the latches on both flat-cable connectors one at a time, then gently pull the cables out.
3. Both ends of each cable are handled the same way. Keep the orientation consistent (the connector is keyed), and align with the keyed notch when reinstalling.

![Flat-cable connectors on the backplane labeled BP CON1, 2P, and 8P](/images/zimacube-backplane-replacement/flat-cables.webp)

### 6. Remove the old backplane

1. Remove the 3 screws on the backplane.

![The three backplane screws marked with red boxes](/images/zimacube-backplane-replacement/remove-backplane.webp)

2. Gently lift out the old backplane.

## Install the New Backplane

### 1. Install the new backplane and reconnect the cables

1. Place the new backplane into position and align the screw holes.
2. Secure it with the 3 backplane screws.
3. Reconnect the flat cables: plug the CON1 and CON2 cables into their corresponding slots, matching the labels on the backplane and motherboard. Align with the keyed notch, insert, press the latch down, and re-apply the black tape.

> How to tell the two cables apart (see the figures below): CON1 is the longer cable and CON2 the shorter, each labeled on the cable. The end marked "BP" plugs into the backplane, and the end marked "MB" plugs into the motherboard.

{% note info Flat cables are universal %}
The flat cables are universal and work with both first-generation and second-generation Cubes.
{% endnote %}

![Backplane slots labeled BP CON1 and BP CON2](/images/zimacube-backplane-replacement/con1-con2-slots.webp)

![CON1 and CON2 connection positions on the motherboard](/images/zimacube-backplane-replacement/con1-con2-positions.webp)

![The two flat cables with the BP and MB ends labeled](/images/zimacube-backplane-replacement/con1-con2-cables.webp)

### 2. Reassemble in reverse order

1. Plug the backplane power cable back in on the left side.
2. Reinstall the rear bracket, reconnect the two fan cables, and tighten the 6 screws.
3. Snap the rear clip-on panel back into place.
4. Reinstall the two side panels.
5. Replace the top cover.
6. Tighten the screws on both sides of the chassis (4 per side).
7. Reinstall all drive trays (including the seventh-bay tray).

### 3. Power on and verify

Connect the power, power on, and confirm the fans spin normally and all drive bays are detected correctly.

Run `lspci` in the terminal: if you see the two parts circled in the image below, the replacement is successful.

![Terminal output of lspci showing the ASMedia devices](/images/zimacube-backplane-replacement/lspci-verify.webp)
