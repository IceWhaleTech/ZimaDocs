---
title: Implementing Frigate+Olama Screen AI Description with ZimaOS
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Background
In daily life, surveillance cameras have become important tools for both households and businesses. However, traditional monitoring systems usually only record images or simply detect motion, and cannot provide detailed explanations of the content of the images. This often requires users to judge for themselves what happened when viewing videos or receiving notifications.
Frigate is an efficient open-source video analysis tool that can identify targets such as people, cars, and animals in images and trigger related events. But its function mainly stays at the level of "seeing" and cannot directly tell you "what happened".
To compensate for this deficiency, we introduced Ollama, a tool that can generate natural language descriptions. Through it, we can convert the visual content detected by Frigate into clear textual explanations, such as' someone walked into the yard 'or' a car parked at the door '.
This tutorial will guide you on how to use ZimaOS to combine Frigate and Ollama to create a practical visual description system. Whether you want to improve the convenience of home security or add intelligent features to small projects, this solution can meet your needs.
## Hardware preparation
1. **Cameras that support RTSP protocol**
Used to provide real-time video stream input to Frigate.
2. **ZimaBoard2 compatible graphics card**
Used for locally accelerating AI model inference (such as NVIDIA series graphics cards). Reference graphics card https://www.zimaspace.com/docs/zh/zimacube/GPU-Expansion
3. **A hard drive with a capacity of 6GB or greater**
Used for storing AI model files, video snapshots, and system data.
## Software installation
The software installation of this system can be divided into the following three steps:
1. Data migration
2. Install Ollama and configure the LLaVA model
3. Install and configure Frigate
### Step 1: Data Migration
Due to the large size of AI models, it is recommended to install an independent hard drive in advance and migrate Docker data directories and personal data to the hard drive to avoid problems such as failure or insufficient storage space during the download process, in order to ensure stable system operation and sufficient storage space.
> Please backup important files to prevent data loss. There may be risks when migrating data!!!
#### Connect the graphics card to the hard drive, start the device, and enter the operating system.
![](https://manage.icewhale.io/api/static/docs/1745202079506_image.png)
#### Data migration
1. Click on the **"Settings"** icon in the upper left menu
2. Click on **"Apps"**
3. Find the relevant application or data management item, click the **"Migration"** button, and wait for the migration to complete.
![](https://manage.icewhale.io/api/static/docs/1745202168758_image.png)
### Step 1:Install Ollama and configure LLaVA model
For more details on supported models, please visit [the official documentation of Frigate](https://docs.frigate.video/configuration/genai/) and [the official website of Ollama](https://ollama.com/).
#### Install Ollama
1. Open the **App Store** and enter **"Ollama"** in the search bar
2. Choose the appropriate version for installation based on your graphics card type (such as a version that supports NVIDIA)
![](https://manage.icewhale.io/api/static/docs/1745202389678_image.png)
#### Configure LLaVA model
1. Open the **Olama terminal** and click on the menu icon in the upper right corner
2. Select **"Settings"** to enter the settings interface
![](https://manage.icewhale.io/api/static/docs/1745203245150_image.png)
3. Click on the **"Terminal"** icon to enter the command line control interface
![](https://manage.icewhale.io/api/static/docs/1745203281707_image.png)
4. Enter the following command in the command line to download the model and install llava-llama3
```language
ollama pull llava-llama3
```
![](https://manage.icewhale.io/api/static/docs/1745203346880_image.png)
5. The appearance of the word **"Success"** indicates that the model download is complete and Ollama is ready
![](https://manage.icewhale.io/api/static/docs/1745203380348_image.png)
6. After starting Olama, **record the IP address and port number of the running IP** (such as `http://10.0.1.3:11434` ）It will be used later when configuring Frigate.
![](https://manage.icewhale.io/api/static/docs/1745203428242_image.png)
### Step 3: Install and configure Frigate
#### Install Frigate
1. Click the **"plus"** button in the upper right corner of the main interface.
2. Select 'Install a customized app'.
![](https://manage.icewhale.io/api/static/docs/1745203508399_image.png)
3. Click on the 'Import' button.
4. Import the frigate.yaml configuration file below.
> name: pure_grace
services:
  frigate:
    cpu_shares: 90
    command: []
    container_name: frigate
    deploy:
      resources:
        limits:
          memory: 7766M
    devices:
      - /dev/bus/usb:/dev/bus/usb
      - /dev/apex_0:/dev/apex_0
      - /dev/video11:/dev/video11
      - /dev/dri/renderD128:/dev/dri/renderD128
    image: ghcr.io/blakeblackshear/frigate:0.15.0
    labels:
      icon: https://icon.casaos.io/main/all/frigate.png
    ports:
      - target: 8971
        published: "8971"
        protocol: tcp
      - target: 8554
        published: "8554"
        protocol: tcp
      - target: 8555
        published: "8555"
        protocol: tcp
      - target: 8555
        published: "8555"
        protocol: udp
    privileged: true
    restart: unless-stopped
    shm_size: "67108864"
    volumes:
      - type: bind
        source: /etc/localtime
        target: /etc/localtime
      - type: bind
        source: /DATA/AppData/frigate/config
        target: /config
      - type: bind
        source: /DATA/Media
        target: /media/frigate
    cap_add: []
    environment: []
    network_mode: bridge
x-casaos:
  author: self
  category: self
  hostname: ""
  icon: https://icon.casaos.io/main/all/frigate.png
  index: /
  is_uncontrolled: false
  port_map: "8971"
  scheme: https
  store_app_id: pure_grace
  tips: null
  title:
    custom: ""
    en_us: frigate

5. Click on "Submit".
![](https://manage.icewhale.io/api/static/docs/1745203744283_image.png)
6. Click "Install" and wait for the installation to complete.
![](https://manage.icewhale.io/api/static/docs/1745203764783_image.png)
#### Obtain Frigate's account and password
After starting Frigate, please check and record the default account and password in the log.
![](https://manage.icewhale.io/api/static/docs/1745203839741_image.png)
1. Open the **Frigate terminal** and click on the **menu icon** in the upper right corner.
2. Select **"Settings"** to enter the settings interface.
![](https://manage.icewhale.io/api/static/docs/1745203882560_image.png)
3. Click on the **"Terminal"** icon within the application.
4. Switch to the **"Logs"** tab to view the startup logs.
5. Click the **"Full Screen"** button in the upper right corner to easily find the default username and password.
![](https://manage.icewhale.io/api/static/docs/1745203925603_image.png)
6. Account and password information will be displayed here, please record it.
![](https://manage.icewhale.io/api/static/docs/1745203946052_image.png)
#### Configure firmate
1. Enter the account and password obtained earlier and log in to the system.
![](https://manage.icewhale.io/api/static/docs/1745203986368_image.png)
2. Click on the **"Settings"** button in the left menu.
3. Select **"Configuration Editor"** to enter the configuration file editing interface.
![](https://manage.icewhale.io/api/static/docs/1745204019481_image.png)
4. In the configuration editor, add or modify camera related configurations. You can refer to the following example for setting up:

```language
mqtt:
  enabled: false

cameras:
  abc: # Name of the camera, customizable
    genai:
      enabled: true
      use_snapshot: True
      objects:
        - person

    ffmpeg:
      inputs:
        - path: rtsp://admin:HTC123456@10.0.171.52/stream1  # RTSP address of the camera, replace with your device's URL
          roles:
            - detect
    detect:
      enabled: true
      width: 1280
      height: 720
      fps: 10
      max_disappeared: 10

    motion:
      enabled: true
      mask: []
      threshold: 25

    snapshots:
```
```language
      enabled: true
      timestamp: true
      bounding_box: true
      retain:
        default: 3

semantic_search:
  enabled: true
  reindex: False

genai:
  enabled: true
  provider: ollama
  base_url: http://10.0.1.12:11434   # Host address and port where the Ollama service is running
  model: llava-llama3 # Multimodal model used for image + text analysis
  prompt: "Describe what the {label} is doing in these images from camera {camera}. Focus on actions and possible intent."
  object_prompts:
    person: "What is this person doing?" # Specific prompt for analyzing "person"
    car: "What is this car doing? Is it parked, circling, or doing something unusual?"

version: 0.15-1
```
**Please make sure to replace the `rtsp` link with your own camera address and set Ollama's IP and port to the actual running address (e.g `http://10.0.1.3:11434` ）Otherwise, Frigate will not be able to access video streams or connect AI models for analysis.**
![](https://manage.icewhale.io/api/static/docs/1745204529636_image.png)
5. After the configuration is completed, click "Save" and Frigate will automatically apply the new configuration and start running.
When Frigate detects a person object in the monitoring screen, it will automatically capture a snapshot and call the AI model to generate the corresponding image description. You can also freely adjust the detection object, model used, and prompt content according to the actual application scenario, thus creating a more intelligent and personalized monitoring experience.
## Construction completed
![](https://manage.icewhale.io/api/static/docs/1745204647915_image.png)
At this point, the intelligent monitoring system of Frigate and Ollama has been successfully built. You can check the detection effect through real-time screen, or enter the log and snapshot page to verify whether the AI analysis is running normally.
To further optimize the experience, you can try accessing notification services, adjusting model parameters, or adding more cameras.