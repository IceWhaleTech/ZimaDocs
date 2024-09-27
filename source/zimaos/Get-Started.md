---
title: Get Started
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Introdction
In this article, we'll briefly introduce the main features available on ZimaOS. Those familiar with Zima know that ZimaOS is developed based on CasaOS, an open-source private cloud project released by the Zima team in 2022. It has garnered significant attention from developers worldwide, with over 700k installations serving enthusiasts in hundreds of countries globally.

Building on the foundation of CasaOS, ZimaOS has further enhanced its core functionalities as a ultimate NAS OS. In a nutshell, while **CasaOS serves** as a personal cloud **application hub** enabling easy deployment of various private cloud applications, **ZimaOS** builds on this foundation to **establish a robust, complete operating system.** It features RAID setup, remote access, a cloud-like file manager, automatic backups, and unified management of cloud and NAS data—a suite of system-level functions. 

As an innovative system, our core is to ensure stability while rapidly iterating and enriching system functionalities based on community suggestions. Here, you can view the history of past versions and, through community involvement and contributions, provide your suggestions for ZimaOS.

Let's begin our exploration of ZimaOS, this streamlined system.

# Key Features

## Remote Access
Accessibility is foundational for private clouds, and configuring network settings on most NAS devices can be quite complex. ZimaOS aims to offer a plug-and-play remote access experience that is both secure and reliable, without any risk of cloud forwarding or data leakage.

Thus, once you install the Zima Client application and scan to connect to ZimaOS for the first time, your remote access channel is already set up. You can connect to your ZimaCube at home or in the office from anywhere using your MacBook or laptop without any additional configurations. The connection between your laptop and ZimaCube is automatically established by the Zima Client Application and ZimaOS, utilizing P2P communication to build the connection. Data transfers between the two are encrypted, ensuring all data transmissions are peer-to-peer.

For complete control, you can also log into the settings panel to turn off the remote access feature with just one click.
![](https://manage.icewhale.io/api/static/docs/1727081506994_image.png)
## Files
Files focuses on unified management for creators and personal data, offering a streamlined storage and file access experience. It undoubtedly resembles a local cloud storage service. However, unlike mainstream cloud storage services, its speed can reach GB/s via Thunderbolt, and with Wi-Fi 6 wireless networks, it can achieve over 100MB/s in material synchronization and file preview experiences. This provides optimal speeds for backing up large quantities of personal images or video content, including 4K.

Files offers video previews, pinning, and cloud storage expansion features, effectively meeting your needs for content access and unifying data across cloud services. Common uses include sharing a set of materials within a small team or pinning your most frequently used project folders for easy access.

While 100MB/s performance generally satisfies most preview and editing needs, if you require extreme speeds, ZimaCube's 10GbE or Thunderbolt capabilities are excellent options.
![](https://manage.icewhale.io/api/static/docs/1727081538638_image.png)
## Thunderbolt Transfer

Thunderbolt, a method not to be overlooked by professional editors or users seeking peak transfer performance, is utilized with ZimaCube. It offers data transfer speeds exceeding 1GB/s, with theoretical read-write speeds reaching up to 20Gbps.

However, it shouldn’t be complicated—it should be as simple as connecting a Thunderbolt cable and using it immediately. Yes, through the Zima Client application and ZimaOS. Once the Thunderbolt cable is connected, simply re-access ZimaOS via the Zima Client application to experience the fastest editing, material access, or Samba share speeds. No additional configurations are necessary; the system and applications will automatically handle everything for you.
![](https://manage.icewhale.io/api/static/docs/1727081568557_image.png)
## Samba Share
Creating a space within a local area network (LAN) where a team can directly edit, or enabling direct access to local network storage from devices like TVs and VR headsets, Samba is often the go-to choice for many. Setting up and managing Samba on ZimaOS continues to offer the system's inherent ease and smoothness. You can easily create a LAN share by right-clicking any folder in Files.

Interestingly, when combined with the Zima Client's remote access feature, you can even remotely load storage spaces and directly edit files within that remote space. This offers a compelling and simple solution for collaboration and remote work.

Through the settings panel, you can directly create different users and assign corresponding content access permissions, tailoring accessibility as needed for your team or family.
![](https://manage.icewhale.io/api/static/docs/1727081592637_image.png)
## Cloud Storage Integration
Today, everyone's data is incredibly scattered—some in Notion, some in Slack, and plenty in email. We believe personal or small team data should be more unified. It doesn't necessarily need to reside on a private cloud, but the management should be centralized. With this philosophy in mind, ZimaOS's first step is to enable management of your cloud storage data, NAS data, or data on Zima devices through a single system interface.

With the Add feature in Files, you can easily link your Google Drive, Dropbox, OneDrive, or local Samba shared folders with one click, all from a single, elegant file manager. This allows for batch or unified management of your personal data.

This means if you find Google Drive’s data management no longer trustworthy or economical, you can batch migrate data from Google Drive to Dropbox or any other medium of your choice. This will be very exciting, and based on this idea, we will offer more effective personal data management solutions.
![](https://manage.icewhale.io/api/static/docs/1727081614882_image.png)
## Raid
RAID is a core feature essential for existing NAS users. ZimaOS now supports three RAID modes: RAID 0, RAID 1, and RAID 5. These options provide redundancy backup solutions for your personal data storage, offering protection against the unpredictable risk of hard drive failures.

RAID 0 is an option that exists primarily to maximize read and write performance and to unify storage space, without any redundancy mechanism. RAID 1 offers a safe and reliable solution, storing your data on two identical hard drives, halving the space but doubling the safety. RAID 5, through the configuration of three disks, maximizes storage space while providing a redundancy mechanism.

If you're interested in ZFS or more advanced RAID configurations, you can build these through the system-level interfaces provided by ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727081705277_image.png)
## ZVM
Based on virtualization technology, you can further utilize the computing resources on your ZimaCube hardware. For instance, you can use your NAS as a Windows desktop host, a segregated Debian development environment, or even as a routing system to manage your network. VM capabilities are still in the early stages, and we are continuously refining its more advanced features based on community feedback.
![](https://manage.icewhale.io/api/static/docs/1727081725764_image.png)
## Drop
It's a straightforward dessert feature: all mobile phones, laptops, or client devices within the same local area network created by ZimaOS can freely perform peer-to-peer transfers of individual files when they open a link shared by ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727081744441_image.png)
## App Store
The AppStore almost entirely inherits all features from CasaOS, offering over a hundred privatized applications that can be deployed with just one click. These include popular media server apps like Plex and Jellyfin, smart home applications like Home Assistant and Homebridge, and privatized document and team collaboration tools such as Notion and Affinity. 
Recent popular local AI applications like OpenWeb UI and Stable Diffusion can also be installed and activated with just one click.

There are many scenarios and uses to explore, waiting for you to unlock. We will gradually showcase these to you through upcoming content.
![](https://manage.icewhale.io/api/static/docs/1727081765695_image.png)

# Onboarding
## Find ZimaOS
### Zima-Client
https://find.zimaspace.com/ and install ZimaClient. It will automatically scan for available devices.
### Quick Search
If you prefer to use the web interface, you can visit the website. Please make sure your device is connected to the same network as ZimaCube. Scan on the web page, and after the scan is completed, you will see a list of available ZimaCube devices. Just click on the corresponding device to connect to ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727082045246_image.png)
## Initialize ZimaOS
After successfully connecting to ZimaCube, enter the corresponding IP address to enter the ZimaOS initialization interface, where you can start configuring your ZimaCube.
### Select language
Currently ZimaOS supports 6 languages ​​including English, Chinese, Japanese, Italian, and Norwegian. Choose the language you are most familiar with to ensure the best user experience.
![](https://manage.icewhale.io/api/static/docs/1727082127778_image.png)
### Create User
Next, you will need to create a user account. This account will be the primary way you manage ZimaOS. Please set a secure username and password to protect your data and settings.
![](https://manage.icewhale.io/api/static/docs/1727082165610_image.png)
### Initialization successful
After initialization, ZimaOS will provide you with a brief introduction to the functions and usage guide. This will help you understand the main features and usage of ZimaOS. You can learn about: 
- File management system
- App store and installable applications
- Device management and network settings
- Multiple Raid types to choose from
![](https://manage.icewhale.io/api/static/docs/1727082245929_image.png)
