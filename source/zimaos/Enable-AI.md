---
title: How Enable AI for ZimaOS
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## What is ZimaOS-AI
Introducing **ZimaOS-AI**, an AI module designed for the ZimaOS search functionality. Once you have installed this module, you can activate the search AI features. The AI module operates by employing a substantial local model to perform feature extraction on images, audio files, and video content. Additionally, it provides the capability to schedule the module's operational times.

### Compatibility: 
ZimaOS version v1.3.1 stable and later versions.

## How to Use
###  Step 1.Download the ZimaOS-AI module
1. **Enable SSH in Developer Mode:** Access the Developer Mode in the General settings and turn on the SSH switch. Click on the Web-based terminal to enter the web terminal.
2. **Login with ZimaOS Credentials:** Use your ZimaOS account and password to log in (note that the password will not be displayed when you type it).
3. **Install ZimaOS AI Module:** Execute the command `zpkg install zimaos_ai`. You should see a screenshot similar to the one provided below.
![install ZimaOS AI Module](https://manage.icewhale.io/api/static/docs/1735903071409_image.png)
4. **Wait for Installation Completion:** After initiating the installation process, wait for it to complete. This may take a few moments.
5. **Access the Dashboard:** Once the installation is finished, navigate to the Dashboard. You should be able to see the ZimaOS AI module now available for use.
![ZimaOS-AI in dashboard](https://manage.icewhale.io/api/static/docs/1735903287348_image.png)

### Step 2. Waiting for the first feature extraction of images, audio, and video

* The ZimaOS AI module will **automatically** download the large language model when used for the first time, and the AI ​​module will automatically start.
* The ZimaOS search module will perform local analysis of the feature maps of images and audio and video files **every ten minutes** within the available time for display during search.

### Step 3.Experience AI search
Open the search and enter keywords.
![search picture with words using AI](https://manage.icewhale.io/api/static/docs/1735903472461_image.png)

**OR**，now， you can enter a sentence to search.
![search picture with sentence using AI](https://manage.icewhale.io/api/static/docs/1735903519243_image.png)


###  Requirements
1. At least 12GB of GPU video memory
2. 30 series or A2000 and above graphics card
3. 20G of system space

### Troubleshooting
- **Q:** No AI-related results appear during search
**A:** Check the video memory usage. The 12G required here is the minimum requirement, which will increase according to the size and complexity of the image
- **Q:** I don't know the running status of ZimaOS-AI
**A:** Click Call-History to check the running status
- **Q:** I can't see the download status during the model download process
**A:** You can check the download traffic yourself through the network on the homepage to judge the situation
- **Q:** AI-related content cannot be searched in Chinese
**A:** Currently, the AI ​​function only supports English
- **Q:** Semantic search cannot search text or video
**A:** Currently, semantic search supports images