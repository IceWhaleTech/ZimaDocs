---
title: GPU Expansion
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Introduction
  ZimaCube is a computing device that can meet your professional work needs. Through its modular design, it allows users to expand hardware according to personal requirements, including the installation of a Graphics Processing Unit (GPU). A GPU is crucial for users who need to handle extensive graphical processing and parallel computing tasks.

# Installation Guide and Application Examples
## 1. GPU Installation Steps
### Step 1: Remove the IO shield.
  - Before installing the GPU, remove the IO shield from the PCIe slot.


| ![](https://manage.icewhale.io/api/static/docs/1728614816722_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614828318_image.png)|
|:---:|:---:|
### Step 2: Install the GPU in the correct orientation.
  - Ensure the GPU is aligned correctly, matching the gold fingers with the PCIe slot.
  - Gently insert the GPU into the slot until it is fully secured.

| ![](https://manage.icewhale.io/api/static/docs/1728614909590_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614920088_image.png)|
|:---:|:---:|
#### Tips:
  - When installing or removing the GPU, press the clip on the PCIe slot. This ensures the GPU is securely fixed or released.
![](https://manage.icewhale.io/api/static/docs/1728614946501_copyImage.png)
## 2. Application Examples: GPU Transcoding and AI Applications
### Hardware Transcoding:

Utilizing GPU for hardware transcoding can greatly improve media processing performance. For instance, Plex Media Server can use the GPU on ZimaOS to enable efficient hardware transcoding (note: download the professional GPU version of Plex).
![](https://manage.icewhale.io/api/static/docs/1728615170049_image.png)
- Select hardware transcoding device: Unknown (NVIDIA)
- Click Save to start transcoding

| ![](https://manage.icewhale.io/api/static/docs/1728615235531_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615252888_image.png)|
|:---:|:---:|

| Before： |      After： |
| - | - |
| ![](https://manage.icewhale.io/api/static/docs/1728615297358_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615306943_image.png)|

For a list of Nvidia GPUs currently supported by ZimaOS, see the Current NVIDIA GPUs section：https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html
### AI Application Examples:
On ZimaOS, you can use Open WebUI to experience advanced AI conversation clients.
It supports the latest language models, including but not limited to Llama3 and Gemma, and is compatible with OpenAI's API. Additionally, Open WebUI will call on the ZimaCube Pro Creator's built-in NVIDIA 2000 Ada GPU to reduce processing latency.
Most importantly, all your data (including login details) is locally stored on your device. Open WebUI ensures strict confidentiality under your authorization, with no external requests, protecting your privacy and enhancing your security.

![](https://manage.icewhale.io/api/static/docs/1728615600750_094e8811-903b-4bb0-8053-548119f56272.gif)
- The version has integrated Stable Diffusion.

![](https://manage.icewhale.io/api/static/docs/1728615658463_2.gif)

- There are other AI apps in our AppStore, such as Tasking AI and Anything AI.

![](https://manage.icewhale.io/api/static/docs/1728615689023_image.png)
Tasking AI is an intelligent task management tool that utilizes AI technology to help users more efficiently organize and manage daily tasks. It can intelligently prioritize, remind, and automate tasks, improving efficiency in work and life.

Anything AI is a multi-functional AI application that provides a variety of practical AI tools and services, including text generation, language translation, and speech recognition. It aims to simplify daily work and life for users through powerful AI technology.

With these AI applications, you can fully utilize the advantages of artificial intelligence to enhance your work efficiency and quality of life!
## 3. Precautions
  - Power Down: Ensure ZimaCube is completely powered off before performing any operations, and ground yourself to avoid static damage to the device.
  - Gentle Handling: Avoid excessive force when installing or removing the GPU to prevent damage.
  - Cleanliness: Ensure the slot and device are free of dust or foreign objects during installation or removal to avoid poor contact.
  - Driver Installation: Install the correct drivers to achieve optimal performance and stability.

## 4. Conclusion
  This guide should help you successfully install a GPU on ZimaCube and understand its importance in various applications. We encourage you to try out the installation and explore more GPU functions to enhance your work efficiency and quality of life.
  
  We look forward to hearing more about your experiences!

# Compatibility List
The ZimaCube supports **low-profile** graphics cards, typically around 64.41 mm (2.536 inches) in height. The PCIe slot provides up to **75W** of power, so it is recommended to select graphics cards within this size and power range to ensure compatibility with ZimaCube's compact design and power limitations. 
**Please note that other graphics cards may require external power for proper operation.**

{% note warn Note: %}
We've compiled this list based on the drivers supported by the ZimaOS, with "verified" models marked accordingly. If you've successfully run **Assist** on a different graphics card model, please help us update this list by using the 'Improve' feature in the top right corner. Thank you for your contribution.
{% endnote %}

| **Category**                          | **Models**                                                       |
| :-------------------------------- | ------------------------------------------------------------ |
| GeForce RTX 40 Series (Notebooks) | GeForce RTX 4090 Laptop GPU, GeForce RTX 4080 Laptop GPU, GeForce RTX 4070 Laptop GPU, GeForce RTX 4060 Laptop GPU, GeForce RTX 4050 Laptop GPU |
| GeForce RTX 40 Series             | NVIDIA GeForce RTX 4090 D, NVIDIA GeForce RTX 4090, NVIDIA GeForce RTX 4080, NVIDIA GeForce RTX 4070 Ti, NVIDIA GeForce RTX 4070, NVIDIA GeForce RTX 4060 Ti(verified), NVIDIA GeForce RTX 4060 |
| GeForce RTX 30 Series (Notebooks) | GeForce RTX 3080 Ti Laptop GPU, GeForce RTX 3080 Laptop GPU, GeForce RTX 3070 Ti Laptop GPU, GeForce RTX 3070 Laptop GPU, GeForce RTX 3060 Laptop GPU, GeForce RTX 3050 Ti Laptop GPU, GeForce RTX 3050 Laptop GPU |
| GeForce RTX 30 Series             | GeForce RTX 3090 Ti, GeForce RTX 3090, GeForce RTX 3080 Ti, GeForce RTX 3080, GeForce RTX 3070 Ti, GeForce RTX 3070, GeForce RTX 3060 Ti(verified), GeForce RTX 3060, GeForce RTX 3050 |
| GeForce RTX 20 Series (Notebooks) | GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060, GeForce RTX 2050 |
| GeForce RTX 20 Series             | GeForce RTX 2080 Ti, GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060 SUPER, GeForce RTX 2060 |
| GeForce MX500 Series (Notebooks)  | GeForce MX570, GeForce MX550                                 |
| GeForce MX400 Series (Notebooks)  | GeForce MX450                                                |
| GeForce MX300 Series (Notebooks)  | GeForce MX350, GeForce MX330                                 |
| GeForce MX200 Series (Notebooks)  | GeForce MX250, GeForce MX230                                 |
| GeForce MX100 Series (Notebooks)  | GeForce MX150, GeForce MX130, GeForce MX110                  |
| GeForce GTX 16 Series (Notebooks) | GeForce GTX 1660 Ti, GeForce GTX 1650 Ti, GeForce GTX 1650   |
| GeForce 16 Series                 | GeForce GTX 1660 SUPER, GeForce GTX 1650 SUPER, GeForce GTX 1660 Ti, GeForce GTX 1660, GeForce GTX 1650, GeForce GTX 1630 |
| GeForce 10 Series                 | GeForce GTX 1080 Ti, GeForce GTX 1080, GeForce GTX 1070 Ti, GeForce GTX 1070, GeForce GTX 1060, GeForce GTX 1050 Ti, GeForce GTX 1050, GeForce GT 1030, GeForce GT 1010 |
| GeForce 10 Series (Notebooks)     | GeForce GTX 1080, GeForce GTX 1070, GeForce GTX 1060, GeForce GTX 1050 Ti, GeForce GTX 1050 |
| GeForce 900 Series                | GeForce GTX 980 Ti, GeForce GTX 980, GeForce GTX 970, GeForce GTX 960, GeForce GTX 950 |
| GeForce 900M Series (Notebooks)   | GeForce GTX 980, GeForce GTX 980M, GeForce GTX 970M, GeForce GTX 965M, GeForce GTX 960M, GeForce GTX 950M, GeForce 945M, GeForce 940MX, GeForce 930MX, GeForce 920MX, GeForce 940M, GeForce 930M |
| GeForce 800M Series (Notebooks)   | GeForce GTX 860M, GeForce GTX 850M, GeForce 845M, GeForce 840M, GeForce 830M |
| GeForce 700 Series                | GeForce GTX 750 Ti, GeForce GTX 750, GeForce GTX 745         |
| NVIDIA TITAN Series               | NVIDIA TITAN RTX, NVIDIA TITAN V, NVIDIA TITAN Xp, NVIDIA TITAN X (Pascal), GeForce GTX TITAN X |
| NVIDIA RTX Series                 | NVIDIA RTX 6000 Ada Generation, NVIDIA RTX 5880 Ada Generation, NVIDIA RTX 5000 Ada Generation, NVIDIA RTX 4500 Ada Generation, NVIDIA RTX 4000 Ada Generation, NVIDIA RTX 4000 SFF Ada Generation, NVIDIA RTX A6000, NVIDIA RTX A5500, NVIDIA RTX A5000, NVIDIA RTX A4500, NVIDIA RTX A4000H, NVIDIA RTX A4000, NVIDIA RTX A2000 12GB(verified), NVIDIA RTX A2000, NVIDIA A800 40GB Active, NVIDIA T1000 8GB, NVIDIA T1000, NVIDIA T600, NVIDIA T400 4GB, NVIDIA T400 |
| NVIDIA RTX Series (Notebooks)     | NVIDIA RTX 5000 Ada Generation Laptop GPU, NVIDIA RTX 4000 Ada Generation Laptop GPU, NVIDIA RTX 3500 Ada Generation Laptop GPU, NVIDIA RTX 3000 Ada Generation Laptop GPU, NVIDIA RTX 2000 Ada Generation Laptop GPU, NVIDIA RTX A5500 Laptop GPU, NVIDIA RTX A5000 Laptop GPU, NVIDIA RTX A4500 Laptop GPU, NVIDIA RTX A4000 Laptop GPU, NVIDIA RTX A3000 12GB Laptop GPU, NVIDIA RTX A3000 Laptop GPU, NVIDIA RTX A2000 8GB Laptop GPU, NVIDIA RTX A2000 Laptop GPU, NVIDIA RTX A1000 Laptop GPU, NVIDIA RTX A500 Laptop GPU, NVIDIA T1200 Laptop GPU , NVIDIA T600 Laptop GPU, NVIDIA T550 Laptop GPU, NVIDIA T500 |
| Quadro RTX Series                 | Quadro RTX 8000, Quadro RTX 6000, Quadro RTX 5000, Quadro RTX 4000, Quadro RTX 3000 |
| Quadro RTX Series (Notebooks)     | Quadro RTX 6000, Quadro RTX 5000, Quadro RTX 4000, Quadro RTX 3000 |
| Quadro Series                     | Quadro GV100, Quadro GP100, Quadro P6000, Quadro P5200, Quadro P5000, Quadro P4000, Quadro P2200, Quadro P2000, Quadro P1000, Quadro P620, Quadro P600, Quadro P400, Quadro M6000 24GB, Quadro M6000, Quadro M5000, Quadro M4000, Quadro M2000, Quadro K2200, Quadro K1200, Quadro K620 |
| Quadro Series (Notebooks)         | Quadro T2000, Quadro T1000, Quadro P5200, Quadro P5000, Quadro P4200, Quadro P3200, Quadro P4000, Quadro P3000, Quadro P2000, Quadro P1000, Quadro P600, Quadro P520, Quadro P500, Quadro M2200, Quadro M1200, Quadro M620, Quadro M520, Quadro M5500, Quadro M5000M, Quadro M4000M, Quadro M3000M, Quadro M2000M, Quadro M1000M, Quadro M600M, Quadro M500M, Quadro K2200M, Quadro K620M |
| Quadro Blade/Embedded Series      | Quadro P5000, Quadro P3000, Quadro M5000 SE, Quadro M3000 SE |
| Quadro NVS Series                 | NVS 810                                                      |
| NVS Series                        | NVS 810                                                      |

More to come...