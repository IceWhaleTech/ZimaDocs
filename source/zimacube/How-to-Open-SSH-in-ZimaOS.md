---
title: How to Open SSH in ZimaOS
description: "Enable SSH access on ZimaOS by creating a root password and configuring remote access. Step-by-step guide with keyboard and monitor setup."
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
# By default, SSH is disabled. Please connect a keyboard and mouse to the device. You will see a message asking you to create a root password. Then enable SSH.
![](https://manage.icewhale.io/api/static/docs/1722492895687_image.png)
## 1. Connect Monitor and Keyboard:
Start by connecting a monitor and a keyboard to your device.
## 2. Enter Setup Mode:
After powering on the device, press the Alt + F2 key combination, which typically brings you to a command line or setup interface.
## 3. Log in as Root User:

At the command prompt, type root to log in as the root user.
## 4. Change Root User Password:

Enter the command passwd-root to initiate the process of setting the root password.

Follow the prompts to enter a new password and confirm it. Make sure to choose a strong password that includes a combination of letters, numbers, and special characters.
## 5. Enable SSH Service:
![](https://manage.icewhale.io/api/static/docs/1722493052627_image.png)
With these detailed steps, you should be able to successfully enable SSH and set the root password, allowing you to securely access the device from other computers within the network.