---
title: Pi-hole Deployment Guide on ZimaOS
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
### Introduction
Pi-hole is a powerful network-level ad blocking tool that can help you block ads and protect your privacy. In this tutorial, we will introduce how to install and configure Pi-hole on ZimaOS to make your home network cleaner and more efficient.

---
### Prerequisites
- A device with ZimaOS installed.
- The ability to access the ZimaOS web interface or SSH.
- Network and administrator privileges have been set up.

---
### Step 1: Install Docker Pi-hole
1. Enter the ZimaOS web interface.
2. Enter the **App Store** and search for Pi-hole to install.
![](https://manage.icewhale.io/api/static/docs/1734678654109_image.png)

3. Click Install.
4. Before logging in to Pi-hole, click the application's setting interface and find the password (the sample password is your_password).

| ![](https://manage.icewhale.io/api/static/docs/1734678694677_image.png) | ![](https://manage.icewhale.io/api/static/docs/1734678703824_image.png) |
| - | - |


5. Click the application and enter the password to enter the interface.
![](https://manage.icewhale.io/api/static/docs/1734678749177_image.png)

![](https://manage.icewhale.io/api/static/docs/1734678754268_image.png)


---
### Step 2: Configure the network
**2.1 Change the router's DNS settings**
Benefit: Changing the router's DNS settings will allow the entire network of devices to automatically use Pi-hole for ad blocking, without having to manually configure each one.
1. Log in to the router's management interface.
2. Set the router's DNS server address to the local IP address of the ZimaOS device running Pi-hole.
- Example: If ZimaOS's local IP is `10.0.201.187`, set the DNS server address to `10.0.201.187`.
**2.2 Manually configure DNS on client devices**
- If you don't want to modify the settings for the entire network, you can configure a custom DNS address on a single device to the ZimaOS IP.
**Configure Windows device DNS**
1. In the settings window, find "More adapter options" and click Edit.
![](https://manage.icewhale.io/api/static/docs/1734679538566_image.png)

2. Find and double-click "Internet Protocol Version 4 (TCP/IPv4)".
3. Fill in the following:
- Preferred DNS server: 10.0.201.187 (your Pi-hole server IP).
- Alternate DNS server: 1.1.1.1 (Cloudflare DNS) or 8.8.8.8 (Google DNS, backup).
![](https://manage.icewhale.io/api/static/docs/1734679557759_image.png)

4. Click "OK" to save the settings.
Tips: If ad blocking doesn't work, try clearing the DNS cache:
In the command prompt, run:
```
ipconfig /flushdns
```

This will force the device to use the new DNS settings.

---
### Step 3: Optimize settings (optional)
**3.1 Enable more ad filter lists**
1. In the Pi-hole dashboard, navigate to Adlists.
![](https://manage.icewhale.io/api/static/docs/1734679945680_image.png)

2. Add more ad blocking lists, for example:
- [StevenBlack/hosts](https://github.com/StevenBlack/hosts)
- [oisd.nl](https://oisd.nl/)
Paste the copied url in Address, fill in comment, and click add to add.
![](https://manage.icewhale.io/api/static/docs/1734680053090_image.png)

**3.2 Configure DNS caching and privacy enhancement**
1. In Settings > DNS, select a trusted upstream DNS server (such as Cloudflare or Google).
![](https://manage.icewhale.io/api/static/docs/1734680136362_image.png)

2. Turn on DNSSEC for added security.
![](https://manage.icewhale.io/api/static/docs/1734680141523_image.png)


---
Step 4: Test ad blocking
1. Visit a website with a lot of ads (such as a news portal).
2. Check if the ads are successfully blocked.
3. Check the number of blocked requests in the Pi-hole dashboard.
![](https://manage.icewhale.io/api/static/docs/1734680159332_image.png)


---
### Conclusion
Now that you have successfully deployed Pi-hole on ZimaOS, enjoy an ad-free Internet experience! Pi-hole not only improves your network speed, but also protects your privacy. Feel free to adjust the settings or add more features according to your needs. If you have any questions, please discuss in our community!
### F&Q
1. Click Install to avoid port occupation. Just change the port.
![](https://manage.icewhale.io/api/static/docs/1734680182479_image.png)

Port 10443 is usually used for Pi-hole's HTTPS management interface. Changing the port will not affect Pi-hole's core DNS function.
It is not recommended to change port 67 because it will affect the normal operation of the DHCP service and cause the client to be unable to automatically obtain an IP address. If there is a port conflict, the best solution is to disable the conflicting service.
- First, find the process occupying port 67 in the command line interface and use the command
```
sudo ss -ulnp | grep :67
```

![](https://manage.icewhale.io/api/static/docs/1734680210741_image.png)

- Use the following command to kill the conflicting process and the installation will be successful
```
sudo kill -9 <PID>
```
