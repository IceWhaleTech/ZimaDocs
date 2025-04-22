---
title: Enable AI search
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## ZimaOS-AI  
ZimaOS-AI is an AI module designed to serve ZimaOS search. After downloading this module, you can enable the AI search functionality in ZimaOS. The AI module will use a local large language model to extract features from images, audio, and video to assist in preparing data for AI searches. It can also automatically set the time periods during which it can be called based on GPU resource usage requirements. In addition to being a supporting module for AI searches, it also serves as a playground, allowing you to experience the capabilities of ZimaOS AI models.  
### Applicable Versions  
v1.3.3 stable and later  
## How to Use  
### Downloading the ZimaOS AI Module
1. Ensure you are using the latest version of ZimaOS.  
2.  Enable the SSH switch in Developer Mode under "General," then click "Web-based Terminal" to enter the web-based terminal.  
3.  Log in using your ZimaOS account and password (no visual feedback will be shown when entering the password).  
4. Install the ZimaOS AI module:   
  - If you have an NVIDIA discrete GPU, run `zpkg install zimaos_ai`. You will see the following screenshot (the service size is approximately 1.8GB, and downloading and installing will consume your network bandwidth).
    ![](https://manage.icewhale.io/api/static/docs/1745290359434_image.png)
  - If you are using the ZimaCube Pro version with an Intel integrated GPU but no NVIDIA discrete GPU, run `zpkg install zimaos_ai_intel`. You will see the following screenshot (the service size is approximately 380MB, and downloading and installing will consume your network traffic).     
![](https://manage.icewhale.io/api/static/docs/1745290380015_image.png)
5. Go to the Dashboard to see ZimaOS AI.   
![](https://manage.icewhale.io/api/static/docs/1745290396987_image.png)
### Waiting for Initial Feature Extraction of Images, Audio, and Video  
When first used, the ZimaOS AI module will automatically download a large language model, and the AI module will start automatically.  
The ZimaOS search module will extract features from images and audio/video files for display during searches. API calls occur at 10-minute intervals (and only within the set available time periods, which are open all day by default; you can adjust this in the ZimaOS AI user interface).  
### Experiencing AI Search  
Find the search box in the top left corner of the "Files" section. You can try entering some keywords.  
![](https://manage.icewhale.io/api/static/docs/1745290446562_image.png)
You can also enter a sentence to try semantic search. 
![](https://manage.icewhale.io/api/static/docs/1745290463509_image.png)
## Usage Requirements  
1. Meet at least one of the following configurations:   
**Configuration 1: NVIDIA GPU **  
  - At least 4GB of VRAM (note: if VRAM is less than 8GB, it will use the CPU and additional memory for mixed CPU/GPU inference).   
  - GTX 16, RTX 20, or A2000 and higher GPUs (must support CUDA 12). 
**Configuration 2: Intel Integrated GPU **
  - At least 8GB of free RAM.   
  - An i5-1235U or higher CPU with integrated graphics recommended.  
2.  System space requirement: at least 20GB of free space.   
  - The application will be stored on the system drive (NVIDIA CUDA version: ~1.8GB / Intel integrated GPU version: ~380MB).   
  - Model files will be stored in `/media/ZimaOS-HD/AppData/.models` (if AppData has been migrated, it will actually occupy the migrated storage space).  
3.  Must be connected to the internet and able to access huggingface.co normally (for automatic downloading of LLM models).  
**Compatible Low Profile GPU Card for Direct Insertion into ZimaCube:**

| **Model** | **Dimensions (L × H)** | **Compute Power** | **VRAM** | **TDP** | **Price (USD)** |
| - | - | - | - | - | - |
| **NVIDIA Tesla P4** | 168×69mm | 5.5 TFLOPS | 8GB | 50W | $100 |
| **NVIDIA GTX 1650 LP** | 168×69mm | 7.1 TFLOPS | 4GB | 75W | $200 |
| **NVIDIA RTX 3050 LP** | 182×69mm | 9.1 TFLOPS | 6GB | 70W | $250 |
| **NVIDIA RTX 4060 LP** | 182×69mm | 15.0 TFLOPS | 8GB | 115W★ | $299 |
| **NVIDIA RTX A2000** | 168×69mm | 8.0 TFLOPS | 6GB/12GB | 70W | $450/$630 |
| **NVIDIA Tesla T4** | 168×69mm | 8.1 TFLOPS | 16GB | 70W | $650 | 
| **NVIDIA A2** | 168×69mm | 4.5 TFLOPS | 16GB | 40W/60W | $650 |
| **NVIDIA RTX 2000 Ada** | 168×69mm | 12.0 TFLOPS | 16GB | 70W | $680|
| **NVIDIA RTX 4000 SFF Ada** | 168×69mm | 19.2 TFLOPS | 20GB | 70W | $1250 |
| **NVIDIA L4** | 168×69mm | 29.5 TFLOPS | 24GB | 72W | $1500 |

> ★ DIY additional power supply (ATX preferred): 12V 8-pin GPU power connector, with an output power of no less than 115W.

**Full-Height GPUs Connected via Other Methods (e.g., Thunderbolt Docks or PCIe Extenders) (GPUs supporting CUDA 12):**

| **Architecture Code** | **Corresponding Product Series** | **Supported** |
| - | - | - |
| **Volta** | Tesla V100 and other data center cards | ✅(Partially supported) |
| **Turing** | RTX 20 series、GTX 16 series | ✅ |
| **Ampere** | RTX 30 series、A series data center cards | ✅ |
| **Ada Lovelace** | RTX 40 series | ✅ |
| **Hopper** | H100 and other server cards | ✅ |
| **Blackwell** | RTX 50 series | ✅ |
## Resource Usage
### NVIDIA GPUs 
| **Model** | **VRAM Usage** | **Memory Usage** | **Additional CPU Usage** | **Model Fully Loaded on GPU** |
| - | - | - | - | - |
| **GTX 1650 4G** | 3448 MiB | 3.8GB | 3% → 25% | ❌ Partially on CPU |
| **RTX 3050 6G** | 5210 MiB | 2.1GB | 3% → 17% | ❌ Partially on CPU |
| **RTX 4060 8G** | 6314 MiB | 1.1GB | 3% → 9% | ✅ Fully on GPU  |
| **A2000 16G | 9312 MiB** | 1.1GB | 3% → 7% | ✅ Fully on GPU |
| **RTX 4060Ti 16G** | 9346 MiB | 1.0GB | 3% → 5% | ✅ Fully on GPU |
## Common Troubleshooting 
1. **Q: No AI-related results appear during searches**  
  -  Possible reasons:    
    - Poor network connection (unable to access huggingface.co); the model is still downloading.     
    - Currently performing AI feature extraction.     
    - Check VRAM usage. The minimum requirement here is 5GB (when VRAM is low, it will use CPU and memory resources and a downgraded model. Only when VRAM exceeds 10GB will it use the better Q8 model). Usage may increase slightly depending on image size and complexity.  

2. **Q: Unknown status of ZimaOS-AI operation**   
  - Click "Call-History" to check the operation status.  

3. **Q: No download progress visible during model download**   
  - You can check download speed by monitoring network traffic on the homepage.   
  - You can also check download progress with `journalctl -xef -u zimaos-ai`.  

4. **Q: Non-English content cannot be searched for AI-related results**   
  - Currently, AI search only supports English.  

5. **Q: Semantic search only finds images**   
  -  Currently, semantic search only supports images.  

6. **Q: Why do I see increased network traffic after running?**
  - Automatic model downloads will consume network bandwidth, depending on different functions (currently, AI search triggers automatic downloads for the last two items).  

7. **Q: How are ZimaOS-AI resources being used?**  
  -  Refer to the "Resource Usage" table.  

8. **Q: I feel ZimaOS-AI is too resource-intensive, affecting normal work or entertainment on ZimaOS**   
  - You can set the time periods during which GPU resources can be called for API use in the ZimaOS-AI main interface, such as disabling it or limiting AI search feature extraction to between 1 AM and 7 AM.
![](https://manage.icewhale.io/api/static/docs/1745293019552_image.png)
