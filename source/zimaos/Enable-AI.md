---
title: Enable AI search for ZimaOS
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## What is ZimaOS-AI
Introducing **ZimaOS-AI**, an AI module that serves the ZimaOS search function. <br>
Once installed, you can enable AI search capabilities within ZimaOS. The AI module utilizes a local Large Language Models(LLM) to extract features from images, audio, and video, assisting in data preparation for AI search. Additionally, it allows you to schedule activation periods based on GPU resource requirements. Beyond serving as an auxiliary component for AI search, it functions as a playground for users to explore during their leisure time. To ensure an uninterrupted experience, you may need to adjust the settings to temporarily disable API Call. <br>

### Compatibility: 
**ZimaOS version:** v1.3.1 stable and later versions. <br>

### System Requirements:
* **GPU Memory:** Minimum of 12GB VRAM.
* **Graphics Card:** NVIDIA RTX 30 series or A2000 and above.
* **Storage Space:** At least 20GB of available system storage.
* **Internet Connectivity:** Active internet connection with access to huggingface.co for automatic LLM model downloads.

## How to Use
###  Step 1.Download the ZimaOS-AI module
1. **Enable SSH in Developer Mode:** Access the Developer Mode in the General settings and turn on the SSH switch. Click on the Web-based terminal to enter the web terminal. <br>
2. **Login with ZimaOS Credentials:** Use your ZimaOS account and password to log in (note that the password will not be displayed when you type it). <br>
3. **Install ZimaOS AI Module:** Execute the command `zpkg install zimaos_ai`. You should see a screenshot similar to the one provided below.<br>{% note warn %} Please note that the AI module is approximately 5GB in size. Downloading and installing it will consume network bandwidth. {% endnote %}<br>
![install ZimaOS AI Module](https://manage.icewhale.io/api/static/docs/1735903071409_image.png)
4. **Initialize the Module:** Run the command `systemctl restart zimaos-ai`. If you do not see any error messages, it indicates that the service has started up successfully. <br>
5. **Access the Dashboard:** Once the initialize is finished, navigate to the Dashboard. You should be able to see the ZimaOS AI module now available for use. <br>
![ZimaOS-AI in dashboard](https://manage.icewhale.io/api/static/docs/1735903287348_image.png)

### Step 2. Waiting for the first feature extraction of images, audio, and video

* The ZimaOS-AI module will **automatically** download the LLM model when used for the first time, and the AI ​​module will automatically start.<br>
* The AI search module of ZimaOS will utilize local computational resources to perform feature extraction on images and audio/video files for display during your search. The interval between each API call is 10 minutes, and API calls occur only within the designated available time periods (default is 'on', set to 'all day'. You can adjust these settings in the ZimaOS-AI user interface.) <br>

### Step 3.Experience AI search
* In the top left corner of Files, you will find the search box where you can try entering some keywords.<br>
![search picture with words using AI](https://manage.icewhale.io/api/static/docs/1735903472461_image.png)

* Or，you can also enter a complete sentence to try semantic search.<br>
![search picture with sentence using AI](https://manage.icewhale.io/api/static/docs/1735903519243_image.png)


### Troubleshooting
- **Q:** No AI-related results appear during search?
**A:**
  It may be due to one of the following reasons:
   1. Unable to access huggingface.co; model not yet downloaded: Ensure your system can connect to huggingface.co to download the necessary AI models.
   2. AI feature extraction in progress: The system may still be processing data; please wait for completion.
   3. Insufficient GPU memory: While 12GB is the minimum requirement, larger or more complex images may demand more memory. Check your GPU's memory usage to ensure it meets the necessary criteria.<br>
         
- **Q:** I don't know the running status of ZimaOS-AI.
**A:** Click **Call-History** to check the running status.<br>

  
- **Q:** I can't see the download status during the model download process.
**A:** You can check the download traffic yourself through the network on the homepage to judge the situation<br>

  
- **Q:** Non-English content cannot be searched for AI-related information.
**A:** Currently, the AI ​​Module is temporarily limited to English language support.<br>

  
- **Q:** Semantic search can only find images.
**A:** Currently, semantic search is temporarily limited to image content.<br>

- **Q:** Why does network traffic increase after running the application?
- **A:** Automatic model downloads consume network bandwidth. For different functions (currently, AI search automatically triggers the download of the latter two):

  - OCR: 1.4GB
  - <u>Image/Summary/Tag: 4.5GB</u>
  - <u>Subtitle: 3.09GB</u><br>
- **Q:** ZimaOS-AI consumes too many resources, affecting normal work or entertainment on ZimaOS.
- **A:** You can set the time periods during which GPU resources are available for API Call in the user interface of ZimaOS-AI. For example, you can disable it or schedule AI search feature extraction tasks to run only between 1:00 AM and 7:00 AM.
<div align="center">
  <img src="https://manage.icewhale.io/api/static/docs/1736132154512_copyImage.png" alt="Allow Api CAll Time Range" />
</div>