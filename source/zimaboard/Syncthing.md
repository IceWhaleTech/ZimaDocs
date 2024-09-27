---
title: ZimaBoard + Syncthing!
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
**Protect your data and enjoy a worry-free backup and sync experience 
Effortless Backup and Sync, Let Your Data Flow Freely!
**
ZimaBoard + Syncthing, seamlessly integrated, provides you with the best data management solution. Whether it’s precious photos, important documents, or cherished music, your data will always be securely and reliably backed up and synced. ZimaBoard offers reliable hardware support, while Syncthing provides powerful file syncing and sharing capabilities. With automated backup processes and real-time synchronization, your data stays in sync with you forever. No matter where you are, you no longer have to worry about data loss. ZimaBoard + Syncthing allows you to focus on creating, working, and enjoying life.
# Introduction
Syncthing is an open-source file synchronization and sharing software that allows secure synchronization of files and folders between multiple computers. It is a peer-to-peer application that operates without a central server, and all communication is encrypted and conducted directly over the local network. Syncthing provides cross-platform support and can run on operating systems such as Windows, Mac OS, Linux, and Android.

ZimaBoard is a powerful single board server designed for creators, developers and individual users. It provides a high-performance, highly reliable hardware platform for building personal servers, home media centers, IoT applications, and a variety of other computing tasks.

ZimaBoard hardware has a wide range of real-world use cases. Below are some common practical application cases:
- **Personal server:** ZimaBoard can be used as a personal server for storing and managing personal data, building personal websites, blogs or file sharing services. You can access and manage your data anytime, anywhere via remote access.

- **Home Media Center:** Combine ZimaBoard with media center software (such as Kodi) to create a powerful home media center. You can store media files in a centralized location with ZimaBoard and play them smoothly on your TV or other devices.

- **Internet of Things (IoT) applications:**  ZimaBoard’s extended interface and network connectivity make it ideal for building IoT applications. You can connect a variety of sensors and devices and integrate them into ZimaBoard to realize smart home, environment monitoring, remote control and other applications.

- **Remote office and remote access:** By configuring ZimaBoard as a remote access server, you can easily realize remote office and access. No matter where you are, just connect to ZimaBoard to access your files, applications and other resources.

## Advantages of Using ZimaBoard + Syncthing:
- 1. Data Privacy and Security: By using a personal server, you have full control over your data. Your data is not stored on third-party cloud service provider servers, reducing the risk of data access, leaks, or misuse. Additionally, you can implement security measures on your server, such as firewalls and access controls, to enhance data privacy and security.

- 2. Data Backup and Sync: With Syncthing combined with ZimaBoard, you can easily perform data backup and synchronization. You can choose the files and folders to backup and sync, storing them on your personal server. This way, even if your devices experience failures or are lost, you can still recover and access your data from the personal server.

- 3. Cross-Device Access and Sharing: ZimaBoard allows you to share and access data across multiple devices. You can sync and access the same data on different computers, smartphones, tablets, and more, ensuring that your work and personal files stay in sync and consistent across devices.

- 4. Flexibility and Customization: ZimaBoard provides flexibility and customization advantages. You can choose the hardware and operating system that suits your preferences to build your personal server and configure and expand it according to your needs. You can set the storage capacity, processing power, and network bandwidth of the server based on your personal data management requirements.

The following will provide a detailed explanation of syncing computer device data to CasaOS using Syncthing.

# Operation steps
## 1. Installation synchronization
To begin, you need to install Syncthing on your computer device. Visit the official website at https://syncthing.net/ and download the appropriate installation package for your operating system. The installation process is similar to installing any other software.
![](https://manage.icewhale.io/api/static/docs/1727262326663_image.png)
## 2. View the device ID
Running the software, each device is assigned a unique device ID (a long string of characters) to identify the device, which we will use later in synchronization. Click Actions → to display the ID to view.
![](https://manage.icewhale.io/api/static/docs/1727262345800_image.png)
## 3. Add a shared folder
Select the folder you want to upload on that device, after which all the contents of the folder will appear on Zimaboard.At the same time, if the operator adds or deletes files from the folder, Zimaboard also changes.
![](https://manage.icewhale.io/api/static/docs/1727262377851_image.png)
For example, what we’re adding is downloads documents. You only need to enter the label, ID and local path of the folder to complete the addition.
For example, what we’re adding is downloads documents. You only need to enter the label, ID and local path of the folder to complete the addition.
# 4. Adding Remote Devices
Run Syncthing in CasaOS, click Add Remote Device, and connect with the computer device. (To prevent confusion, we set Syncthing in casaOS to dark mode)
![](https://manage.icewhale.io/api/static/docs/1727262413245_image.png)
![](https://manage.icewhale.io/api/static/docs/1727262418895_image.png)

Enter the device ID of the computer.

![](https://manage.icewhale.io/api/static/docs/1727262438326_image.png)

After clicking Save, you can see that the connection is successful.

![](https://manage.icewhale.io/api/static/docs/1727262453826_image.png)

## 5. Set up file synchronization
On the device side, Syncthing sets up shared files.

Click the Options button under the synced shared folder, and tick the devices you want to sync in the Sharing interface; Syncthing monitors file system notifications to detect changed items and synchronize them.
![](https://manage.icewhale.io/api/static/docs/1727262752262_image.png)
![](https://manage.icewhale.io/api/static/docs/1727262756052_image.png)
Later the device will appear with a shared folder request, click the Add button in Syncthing in casaOS to complete the synchronization settings.
![](https://manage.icewhale.io/api/static/docs/1727262766182_image.png)
Finally, the synchronization is complete
## 6. Synchronization is completed, compare data
By default, the shared folders of both devices remain exactly the same.
## 7. Precautions
During the operation, we found that if we modify the content in a certain word in the folder on the device side, the Syncthing in CasaOS cannot be changed accordingly, and if you want to update it completely, you need to upload the overwrite again. This issue is resolved in the new version of FilesBrowser.

# Summary
With the above methods, you can achieve automatic backup and real-time synchronization of any files, photos, videos, etc., and support cross-platform devices, no matter which device or operating system you use. Best of all: Syncthing uses peer-to-peer encrypted communication to ensure that your files are protected while in transit. ZimaBoard provides a stable and reliable hardware environment to protect your data from hardware failure or corruption. Make sure your data is always safe and secure.