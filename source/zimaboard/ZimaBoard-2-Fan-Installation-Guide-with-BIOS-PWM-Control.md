---
title: ZimaBoard 2 Fan Installation Guide & PWM Control
description: Install a PWM fan on ZimaBoard 2, T5 rear-cover removal, 4-pin fan cable, cable routing, fan mounting with T10, and BIOS fan control for mini NAS, home server, self-hosted, NVMe, 10GbE, and local AI workloads.
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
**One-sentence overview**: From the **shipping list**, to **wiring & installation**, then set **PWM in BIOS**—all in one go.
 Add active cooling to your **[ZimaBoard 2](https://www.zimaspace.com/docs/zimaboard/Power-on-Zimaboard2)** **mini NAS** / **home server** / **self-hosted node f**or sustained **NVMe**, **10GbE**, and **local AI** workloads.

 ## Shipping List
- 1x **PWM fan module** (with **4-pin PWM** cable) 
- 1x **T5 Torx screwdriver** (rear cover)
- 1x **T10 Torx screwdriver** (fan mounting)

<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757316597042_zimaboard-2-fan-installation-shipping-list-pwm-fan-module-t5-t10-torx.jpg"
     alt="ZimaBoard 2 fan installation kit—PWM fan module with 4-pin cable and T5/T10 Torx screwdrivers (shipping list)"
     width="50%" />
  <br/><em></em>
</p>

## Fan Installation
- **Shut down** the device and **unplug the 12V power adapter**.
- Wait until the **Power LED** is **off** and the **heatsink is cool**.
- Work on a **clean**, **ESD-safe** surface.
  
### Steps
- **Remove rear cover (T5)**: Unscrew the T5 screws and lift the cover straight up.

<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757316683902_zimaboard-2-remove-rear-cover-t5-torx-fan-installation-step.jpg"
     alt="ZimaBoard 2 rear cover removal with T5 Torx screwdriver—loosen four screws to open the back panel (fan installation step)."
     width="50%" />
  <br/><em></em>
</p>

- **Plug 4-pin PWM fan cable**: Locate the **CPU_FAN** header; align the keyed connector and insert.
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757317159059_zimaboard-2-cpu-fan-header-4pin-pwm-connector-wiring.jpg"
     alt="ZimaBoard 2 CPU_FAN 4-pin header wiring—align the keyed 4-pin PWM connector and plug in (fan installation step), CLR_CMOS nearby."
     width="50%" />
  <br/><em></em>
</p>

- **Route cable & refit cover**: Lead the cable through the **side notch**; reinstall the rear cover and tighten the T5 screws evenly.
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757319056602_zimaboard-2-side-notch-cable-routing-fan-installation-step.jpg"
     alt="ZimaBoard 2 side notch cable routing—PWM fan cable exiting through the chassis notch to prevent pinching; refit rear cover and tighten screws (fan installation)."
     width="50%" />
  <br/><em></em>
</p>

- **Mount the fan (T10)**: With the airflow **into the fins** (per diagram), fasten the fan to the heatsink using the **T10 screws**; secure firmly without over-torque.
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757318959466_zimaboard-2-mount-fan-t10-torx-heatsink-bracket-installation.jpg"
     alt="ZimaBoard 2 fan mounting with T10 Torx—secure the fan bracket to the heatsink, airflow toward the fins; cable routed through the side notch (installation step)."
     width="50%" />
  <br/><em></em>
</p>

- **Congratulations! — Installation complete.**
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757319075447_zimaboard-2-fan-installation-complete-heatsink-mounted-cable-routing.jpg"
     alt="ZimaBoard 2 fan installation complete—fan bracket secured to the aluminum heatsink, airflow toward the fins, cable routed through the side notch (final result)."
     width="50%" />
  <br/><em></em>
</p>

## Set PWM in BIOS (if needed)
- Power on and press **Delete** to enter **BIOS Setup**.
- Open **Hardware Monitor**.
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757319311018_zimaboard-2-bios-hardware-monitor-fan-control-menu.png"
     alt="ZimaBoard 2 BIOS—Advanced > Hardware Monitor screen for fan control and PWM settings (AMI Aptio)."
     width="100%" />
  <br/><em></em>
</p>

- Choose your preferred **fan control mode** (e.g., **PWM** with a curve, or a fixed duty).
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757319415157_zimaboard-2-bios-fan-control-mode-pwm-settings-automatic-fixed.png"
     alt="ZimaBoard 2 BIOS—CPU Fan Control mode with PWM settings: Start Temperature, Full-Speed Temperature, Fan Start PWM, and PWM Slope (AMI Aptio)."
     width="100%" />
  <br/><em></em>
</p>

- **Save & Exit (F10)**, then confirm the fan spins after reboot.
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757319507155_zimaboard-2-bios-save-and-exit-f10-save-changes-fan-pwm-settings.png"
     alt="ZimaBoard 2 BIOS—Save & Exit (F10) screen; choose “Save Changes and Exit” to apply fan/PWM settings (AMI Aptio)."
     width="100%" />
  <br/><em></em>
</p>

## BIOS Fan Control Options (Explanation)
1. **PWM Auto Mode**
  - **Fan Start Temperature:** Fan control engages automatically once **CPU temp ≥ start point** (range: 0–100 °C).
  - **Fan Full-Speed Temperature**: When **CPU temp ≥ this point**, the fan jumps to **100%** (range: 0–100 °C; must be **greater** than Start Temperature).
  - **Fan Start PWM**: Initial (minimum) fan speed after ZimaBoard 2 powers on (range: 0–255; 255 = 100%).
`Example: To set “Fan off when temperature is below Fan Start Temperature”, set to 0.`
  - **PWM SLOPE SEETING**: **Duty increment** for each **+1 °C** rise (select from predefined step options).
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757319591823_zimaboard-2-bios-pwm-auto-mode-fan-control-start-temp-full-speed-pwm-slope.png"
     alt="ZimaBoard 2 BIOS—CPU Fan Control in PWM Auto Mode: start temperature limit, full-speed temperature limit, fan start PWM, and PWM slope setting (AMI Aptio)."
     width="100%" />
  <br/><em></em>
</p>

2. **Fixed Duty Mode**
  - **Fixed Fan Duty**: Run the fan at a **constant speed** (range: **0–255**; 255 = 100%).
`**Note**: The PWM value (0–255) represents the duty cycle / effective drive level rather than a direct RPM percentage. Fan speed is not linear with PWM`
<p align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1757319699717_zimaboard-2-bios-fixed-duty-mode-manual-pwm-setting-0-255.png"
     alt="ZimaBoard 2 BIOS—CPU Fan Control in Fixed Duty (Manual) Mode: set Manual PWM value (0–255, 255=100%) (AMI Aptio)."
     width="100%" />
  <br/><em></em>
</p>

## Troubleshooting
- **Fan won’t spin**:
  - Reseat the **4-pin connector**; ensure the header/mode is enabled.
  - Verify the fan’s **minimum PWM start threshold** (don’t set duty too low, each fan has a different minimum starting PWM).
- **Noise / vibration**: Re-align the fan and tighten the screws.
- **Won’t power on after install**: Remove the **fan PWM lead** and try again. If the **CMOS reset** button was pressed accidentally, the **first boot may take ~2 minutes** for POST/self-test.
- **Fan doesn't stop at PWM 0**：This is by design to prevent stalling and ensure minimum cooling. Many fans have a hardware-enforced minimum PWM speed.