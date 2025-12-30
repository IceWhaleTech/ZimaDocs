---
title: A Simple Guide to Installing Syncthing on ZimaOS
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
> _Originally published on the IceWhale Community Forum by_ _**Muditha Liyanagama (Community Contributor)**:_ _[https://community.zimaspace.com/](https://community.zimaspace.com/t/a-simple-guide-to-installing-syncthing-on-zimaos/7456?utm_source=chatgpt.com)_

Hello fellow ZimaOS and Zimaboard enthusiasts!

I’ve found that while the ZimaOS community and the Ice-whale team offer fantastic support, finding clear, organized, and detailed installation guides can sometimes be a challenge. For those of us who prefer a straightforward, step-by-step approach, especially when troubleshooting those tiny, frustrating issues, this guide is for you. This is the first in a series of articles I plan to write on ZimaOS and Zimaboard, and I hope it proves helpful.

I performed this installation on a Zimaboard2 with the following specifications:

*   **CPU:** Intel(R) N150 4 Cores 2.90 GHz 4 Threads
    
*   **RAM:** 16 GB 6400 MHz LPDDR5
    
*   **GPU****:** Intel Corporation Alder Lake-N \[Intel Graphics\]
    
*   **Operating System:** ZimaOS v1.5.3 Plus
    

Let’s get Syncthing installed

### **Step 1: Accessing the** **App** **Store**

1.  Sign in to your ZimaOS interface.
    
2.  Navigate to the **App Store**.
    

![app_store](https://manage.icewhale.io/api/static/docs/1767081086850_copyImage.png)  

### **Step 2: Finding and Selecting Syncthing**

1.  In the App Store search bar, type Syncthing.
    
2.  Select **Syncthing (Backup)** from the search results.
    
    ![synctin](https://manage.icewhale.io/api/static/docs/1767081087737_copyImage.png)
    

### **Step 3: Custom Installation**

1.  Locate the **Install** button. Instead of clicking it directly, click the small **down arrow** next to it.
    
2.  Select **Custom Install**.
    
    ![custom_install](https://manage.icewhale.io/api/static/docs/1767081088482_copyImage.png)
    

### **Step 4: Critical Configuration Before Installation**

This is where we set up the essential parameters for Syncthing to work correctly.

*   **Syncthing Folder Path:**
    
*   This is the primary location where Syncthing will manage your synchronized files. Any subfolders you create within this path will be accessible for synchronization.
    
*   **Important Note:** You cannot use the root of any mounted disk or system folders (like Gallery, Media, Document, etc.) as your Syncthing folder path. This is because running Syncthing with these paths typically requires root user privileges, which is not recommended for security reasons.
    
*   **PGID and PUID:**
    
*   These are crucial identifiers that tell Syncthing which user permissions to use. Setting them incorrectly can lead to synchronization problems and may require a full uninstall and reinstall to fix.
    
*   **How to find your PGID and PUID:**
    

1.  In ZimaOS, go to **Settings**.
    
2.  Navigate to **General**.
    
3.  Enable **Developer mode**.
    
4.  Go to **View**.
    
5.  Click on **SSH Access** to enable it.
    
6.  Click on **Web-based terminal**.
    
7.  Sign in using your ZimaOS username and password.
    
8.  Once logged into the terminal, enter the following commands, pressing Enter after each. **Remember to replace** _username_ **with your actual ZimaOS username.** _id -u username_ _id -g username_
    

The output will display your **PUID** (User ID) and **PGID** (Group ID). **Carefully copy and paste these numbers** into the corresponding fields under the **Environment Variables** section in the Syncthing custom installation screen, as shown in the example image provided. For me, the PGID was 1000 and the PUID was 999.

![set](https://manage.icewhale.io/api/static/docs/1767081089336_copyImage.png)

*   **Double-Check:** Before proceeding, **review all your settings very carefully**. Ensure the Syncthing folder path is valid and that your PGID and PUID values are correctly entered.
    
*   **Install:** Once you are confident that all settings are correct, click the **Install** button.
    

### **Step 5: Post-Installation - Synchronization Best Practices**

After Syncthing has been successfully installed:

*   When you are synchronizing folders, **always create the destination folder path** _**through Syncthing itself**_.
    
*   **Do NOT create the destination folder directly using ZimaOS’s default file browser.** Doing so can sometimes lead to unexpected synchronization issues.
    

I hope this detailed guide makes installing Syncthing on your ZimaOS device a smooth and successful experience! Happy synchronizing!