---
title: Enable AI search for ZimaOS
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## What is ZimaOS-AI
Introducing **ZimaOS-AI**, an AI module that serves the ZimaOS search function. Once you download this module, you can enable the AI search capabilities of ZimaOS. The AI module will utilize a Local LLM（Large Language Models) to extract features from images, audio, and video to assist in preparing the data for AI search, and it allows you to set the available call times based on the graphics card resource requirements.

### Compatibility: 
ZimaOS version: **v1.3.1** stable and later versions.

## How to Use
###  Step 1.Download the ZimaOS-AI module
1. **Enable SSH in Developer Mode:** Access the Developer Mode in the General settings and turn on the SSH switch. Click on the Web-based terminal to enter the web terminal.
2. **Login with ZimaOS Credentials:** Use your ZimaOS account and password to log in (note that the password will not be displayed when you type it).
3. **Install ZimaOS AI Module:** Execute the command `zpkg install zimaos_ai`. You should see a screenshot similar to the one provided below.
![install ZimaOS AI Module](https://manage.icewhale.io/api/static/docs/1735903071409_image.png)
4. **Initialize the Module:** Run the command `systemctl restart zimaos-ai`. If you do not see any error messages, it indicates that the service has started up successfully.
5. **Wait for Installation Completion:** After initiating the installation process, wait for it to complete. This may take a few moments.
6. **Access the Dashboard:** Once the installation is finished, navigate to the Dashboard. You should be able to see the ZimaOS AI module now available for use.
![ZimaOS-AI in dashboard](https://manage.icewhale.io/api/static/docs/1735903287348_image.png)

### Step 2. Waiting for the first feature extraction of images, audio, and video

* The ZimaOS AI module will **automatically** download the large language model when used for the first time, and the AI ​​module will automatically start.
* The AI search module of ZimaOS will utilize local computational resources to perform feature extraction on images and audio/video files for display during your search. The resource invocation interval is set to every 10 minutes, and the invocation time will only occur within the set available time period (by default, it is set to **'on'**, with the time period being all day, and you can adjust this in the ZimaOS AI interface).

### Step 3.Experience AI search
* In the top left corner of Files, you will find the search box where you can try entering some keywords.
![search picture with words using AI](https://manage.icewhale.io/api/static/docs/1735903472461_image.png)

* Or，you can also enter a complete sentence to try semantic search.
![search picture with sentence using AI](https://manage.icewhale.io/api/static/docs/1735903519243_image.png)


###  Requirements
1. At least 12GB of GPU video memory
2. RTX 30 series or A2000 and above graphics card
3. More than 20GB of system space

### Troubleshooting
- **Q:** No AI-related results appear during search
**A:**
   1. The system is currently in the process of AI feature extraction.
   2. Check the video memory usage. The 12G required here is the minimum requirement, which will increase according to the size and complexity of the image
         
- **Q:** I don't know the running status of ZimaOS-AI
**A:** Click **Call-History** to check the running status.

  
- **Q:** I can't see the download status during the model download process
**A:** You can check the download traffic yourself through the network on the homepage to judge the situation

  
- **Q:** Non-English content cannot be searched for AI-related information.
**A:** Currently, the AI ​​Module is temporarily limited to English language support.

  
- **Q:** Semantic search can only find images.
**A:** Currently, semantic search is temporarily limited to image content.