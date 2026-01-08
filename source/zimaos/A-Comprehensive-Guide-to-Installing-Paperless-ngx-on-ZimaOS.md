---
title: A Comprehensive Guide to Installing Paperless-ngx on ZimaOS
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
> _Originally published on the IceWhale Community Forum by_ _**Muditha Liyanagama**_ _:_ _[Source URL](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474)_

Hello fellow ZimaOS and Zimaboard enthusiasts!

I’ve noticed that while the ZimaOS community and the Ice-whale team provide excellent support, finding clear, organized, and detailed installation guides can sometimes be a challenge. For those of us who prefer a straightforward, step-by-step approach, especially when tackling those small, often frustrating, technical hurdles, this guide is designed for you. This article is the second in a series I’m developing on ZimaOS and Zimaboard, and I sincerely hope you find it helpful.

This guide focuses on installing Paperless-ngx with its essential functions for home use, accessible within your local network or a Tailscale network. If your intention is to expose your Paperless-ngx instance to the public internet, some of the configurations outlined below may need adjustment.

I performed this installation on a Zimaboard 2 with the following specifications:

*   **CPU:** Intel(R) N150 4 Cores 2.90 GHz 4 Threads
    
*   **RAM:** 16 GB 6400 MHz LPDDR5
    
*   **GPU****:** Intel Corporation Alder Lake-N \[Intel Graphics\]
    
*   **Operating System:** ZimaOS v1.5.3 Plus
    

Let’s get Paperless-ngx installed!

### **Step 1: Accessing the** **App** **Store**

1.  Sign in to your ZimaOS web interface.
    
2.  Navigate to the **App Store**.
    

### **Step 2: Finding and Selecting Paperless-ngx**

1.  In the App Store’s search bar, type Paperless-ngx.
    
2.  Select **Paperless-ngx (BigBearCasaOS)** from the search results.
    

### **Step 3: Custom Installation**

1.  Locate the **Install** button. Instead of clicking it directly, click the small down arrow next to it.
    
2.  Select **Custom Install**.
    

### **Step 4: Crucial Configuration Before Installation**

This is the critical phase where we set up the essential parameters for Paperless-ngx to function correctly.

Under the **Volumes** section, make the following changes. (If you prefer the default settings, you can leave them unchanged. See the image below for reference.)

*   **Set custom Volume path for** **/usr/src/paperless/consume**: It is highly recommended to define a specific, user-friendly path for your consumption folder. This makes managing your documents much easier.
    

![Configuration Path](https://manage.icewhale.io/api/static/docs/1767274710302_copyImage.png)

Add the following environmental variables. (See the image below for reference.)

*   **PAPERLESS\_ADMIN\_USER**: Change the default value to your preferred administrative username.
    
*   **PAPERLESS\_ADMIN\_PASSWORD**: Change the default value to your preferred administrative password.
    
*   _These parameters will create your administrative account upon installation._
    
*   **PAPERLESS\_CONSUMER\_DELETE\_ORIGINALS: true**:
    
*   _This parameter enables automatic deletion of files from the_ _/consume_ _folder after they have been processed and absorbed into Paperless-ngx._
    
*   **PAPERLESS\_CONSUMER\_RECURSIVE: true**:
    
*   _This parameter enables recursive consumption of files within the_ _/consume_ _folder, meaning it will process subfolders and their contents._
    
*   **PAPERLESS\_OCR\_CLEAN: clean-final**:
    
*   **PAPERLESS\_OCR\_LANGUAGES: <3-letter code for OCR support languages separated by spaces (e.g., eng sin)>**:
    
*   _These configurations enable basic, necessary OCR functions for Paperless-ngx. However, the specific_ _clean-final_ _setting and the desired OCR languages will need to be further enabled and configured within the Paperless-ngx graphical user interface (GUI) after installation._
    
*   **PAPERLESS\_CSRF\_TRUSTED\_ORIGINS:** _**http://your\_server**_ _**address:port**_
    
*   **PAPERLESS\_URL:** _**http://your\_server**_ _**address:port**_
    
*   _These configurations are critical. Do not include a trailing slash (__**/**__) at the end of the URLs. Incorrectly setting these parameters will result in a “Forbidden (403) CSRF verification failed. Request aborted” error message when you attempt to sign in._
    
*   **Note:** Replace with the IP address or hostname of your Zimaboard (e.g., 192.168.1.100 ). Replace with the port Paperless-ngx will use (often 8000 by default, but you can verify this in the ZimaOS App Store configuration).
    

![Confirm path](https://manage.icewhale.io/api/static/docs/1767274711098_copyImage.png)

Keep all other settings unchanged.

**Double-Check:** Before proceeding, meticulously review all your settings. Once you are confident that all parameters are correct, click the **Install** button.

### **Post-Installation Configuration and Operation**

After installation, sign in to your Paperless-ngx interface and configure the OCR settings as follows:

1.  Navigate to **Application Configuration** —> **OCR Settings**.
    
2.  Set **Clean** to clean-final.
    
3.  Enable **Deskew**.
    
4.  Set **Language** to the 3-letter codes for your desired OCR support languages, separated by a plus sign (+) (e.g., eng+sin).
    
5.  Click **Save**.
    

![OCR Settings](https://manage.icewhale.io/api/static/docs/1767274711641_copyImage.png)

Next, return to the **Application Dashboard** on ZimaOS and restart **Paperless-ngx**.

![restart](https://manage.icewhale.io/api/static/docs/1767274712173_copyImage.png)

**Important Operational Note:** Whenever you add a large batch of documents to your /consume folder for processing, it is advisable to restart Paperless-ngx. Failing to do so may lead to file permission issues and hinder document processing. Alternatively, you can upload documents directly through the Paperless-ngx GUI, which typically does not require a restart.