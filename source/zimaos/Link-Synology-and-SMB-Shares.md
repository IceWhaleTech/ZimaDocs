---
title: Link Synology and SMB Shares
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
How to Share and Get files from a NAS? **SAMBA** may be the most important way

When we talk about Network Attached Storage, we want our files be stored, managed in one place and be accessed from every place. But how is that going?
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)
You can always access your data by visiting ZimaOS’ WebUI, which has a beautifully organized interface and a fluent experience. However, when your work involves files referring, or you need a more complex operation on file system hierarchy, mounting your NAS drives to your client system through technologys like SMB/SAMBA will be a better way.
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)
SMB (Server Message Block) is a protocol built into the Windows system for sharing files and other services over the network. SAMBA implements the SMB protocol, which enriches the file sharing methods of *nix-like systems. ZimaOS is equipped with SAMBA, making file sharing and transfer very convenient. In the following content, we will describe both SMB and SAMBA as SMB for convenience purposes.
## Create a shared folder on ZimaOS
Launch the Files app on ZimaOS’ dashboard and find the destination folder that carries the files you want to share. Right click on the folder and select Share.
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)
A dialogue window will prompt you with the URLs you need to mount shared folder on corresponding systems.
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)
These two URLs are for pro users to manually mount drives. Additionally, with [Zima client](https://findzima.com/) on corresponding systems, we can make the mounting process easier.
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)
## Mount your SMB shared folder on Windows
Download Zima-latest setup.exe from [findzima](https://findzima.com/) and open it. It will boot the installation process and Zima client will be launched automatically after installation. You will find the Zima icon to the right of your taskbar, which is shown as a question mark due to the state of being unconnected.
Right click the icon and select Scan and Connect to Zima.
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)
Locate your Zima device and click Connect.
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)
Zima.exe will prompt you to enter your WebUI’s username and password to log in. After that, your zima.exe icon will turn from a question mark into a ZIMA mark, which means your zima.exe has entered a logged in status.
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)
Right click on the zima icon and select Open in File Explorer, which will mount your shared folder to your Windows system and open it up automatically!
**Manually mount zimacube under Windows**
1. Temporary mount

- Click on this computer.
![](https://manage.icewhale.io/api/static/docs/1734589265561_image.png)

- Enter "\\Device Intranet IP" in the address bar, which is the IP address of zimacube
![](https://manage.icewhale.io/api/static/docs/1734589279076_image.png)

- Enter the network credentials
![](https://manage.icewhale.io/api/static/docs/1734589285351_image.png)

- After verification, Windows SMB mount is completed
![](https://manage.icewhale.io/api/static/docs/1734589299508_image.png)

2. Mount as a network hard disk
This method is suitable for personal computers. When your computer and zimacube are in the same LAN, the mount is completed automatically, and when you select "Remember my credentials", you can avoid the password verification step and log in permanently without a password; the disadvantage is that each folder needs to be mounted separately and repeated operations are performed. For example: when you want to mount "My Files" and "A Certain File Group" at the same time, you need to mount them separately
- Open "My Computer", right-click "My Computer" and select "Map Network Drive".
![](https://manage.icewhale.io/api/static/docs/1734589308925_image.png)

- Enter the IP address of your device and the name of the disk you want to mount
![](https://manage.icewhale.io/api/static/docs/1734589315004_image.png)

By default, "Reconnect at login (R)" is checked, and the folder will be automatically mounted after booting, without manual operation; it is recommended to check "Use other credentials to connect", because Windows logs in through the local account of the current computer by default. If it is not checked, you may encounter a situation where you cannot change the user name;

- Enter the user name and password
![](https://manage.icewhale.io/api/static/docs/1734589323555_image.png)

3. Mount through "Add a network location"
This method of mounting is not recommended. Under certain operations, Windows will clear the files in your folder, causing unnecessary data loss.
> Note: to work properly, your Windows and ZimaOS need be in the same local area network(LAN).
## Mount your SMB shared folder on macOS
Like above, we have also prepared a zima app for Mac users on [findzima](https://findzima.com/) . The usage of the Mac zima app is pretty the same as the Windows one. Just refer to the content above.

Do you recall what Files app prompts you when you finish creating a shared folder? On macOS, we will use the URLs you just get for manually mounting!
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)
Open Finder on your mac and press CMD+K, then copy paste the corresponding URL to the input box.
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)
Click Connect. For now, on the prompt dialogue, choose Guest and click Connect.

> For ZimaOS v1.2.3 users, choose Registered User and input the correct username and password.
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)
Now, you will get your shared folder opened up and it will be listed on the left column of the Finder app.
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)
> How about the URL for Windows Explorer? What is the differences between zima automating mounting and mannually mounting the drive via URL?

Currently our SMB sharing uses the Guest account. In future versions, we will introduce multiple users to the sharing function and strengthen permission management. We hope these can meet more diverse needs of everyone.
## Not just LAN
In fact, not only on LAN, but also on direct network and WAN, you can easily connect your Zima device and map the shared directory as a network drive. We will release relevant tutorials. Thank you for your continued attention.

If you encounter any issues during use, feel free to let us know at any time. You can also join our [community](https://community.zimaspace.com/) and [Discord](https://discord.com/invite/uuNfKzG5) to discuss more about NAS and ZimaOS. We look forward to your feedback!
