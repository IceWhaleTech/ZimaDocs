---
title: NVR Camera Server
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Introduce
This tutorial will guide you through how to create a home video surveillance system on CasaOS using Kerberos.io and ZimaBoard. We will use CasaOS's Docker custom installation feature to simplify the installation and configuration process, and will also explain in detail how to configure an RTSP camera.
## 1. Preparation
- ZimaBoard X 1
- Make sure the ZimaBoard is connected to power and the Internet, and CasaOS is installed
- RTSP-compatible IP camera
## 2. Get the RTSP link of the camera
Since different manufacturers' cameras have different ways of getting the RTSP link, please refer to your camera's user manual or the manufacturer's official website for relevant instructions, or log in to the camera's management interface to find the RTSP link. In this tutorial, we successfully tested TP-Link and Tuya brand cameras and verified their compatibility with Kerberos.io. In addition, we expect the system to be compatible with cameras from brands such as Hikvision, Ezviz, Dahua, eufy, and Yousee.
## 3. Configure Kerberos.io
### Step 1: Log in to CasaOS
1. Make sure ZimaBoard is connected to power and the internet, and CasaOS is installed.
2. Access the CasaOS web interface (usually http://<your ZimaBoard IP>).
### Step 2: Install Docker using CasaOS
1. Open the App Store
![](https://manage.icewhale.io/api/static/docs/1727083688403_image.png)
2. Click Custom Installation
![](https://manage.icewhale.io/api/static/docs/1727083742110_image.png)
3. Click Import
![](https://manage.icewhale.io/api/static/docs/1727083761139_image.png)
4. Paste the following code to configure Docker into the input field
version: '3'  # Docker Compose file version

services:
  kerberos:
    image: kerberos/kerberos  # Use the kerberos/kerberos image
    container_name: kerberos  # Container name
    ports:
      - "8080:80"  # Map host port 8080 to container port 80
    volumes:
      - ./config:/config  # Mount the host's config directory to /config in the container
      - ./recordings:/etc/opt/kerberosio/capture  # Mount the host's recordings directory to /etc/opt/kerberosio/capture in the container
    restart: unless-stopped  # Container restart policy: restart automatically unless stopped manually
    environment:
      - TZ=Europe/London  # Set the container's timezone to Europe/London
      - KERBEROSIO_SETTINGS_PORT=80  # Set the Kerberos service listening port to 80
      - KERBEROSIO_SETTINGS_RECORDSTREAM="/config/recordings"  # Set the recording stream location to /config/recordings
![](https://manage.icewhale.io/api/static/docs/1727083935343_image.png)
5. Click Submit
6. Fill in 'tag': latset and 'title': kerberos
![](https://manage.icewhale.io/api/static/docs/1727083963029_image.png)
7. Submit and wait for the installation to complete
### Step 3: Configure Kerberos.io
1. Open http://<your ZimaBoard IP>:8080 in your browser to enter the Kerberos.io settings interface.
![](https://manage.icewhale.io/api/static/docs/1727084036342_image.png)
2. Create an account and password and log in to Kerberos.io.
![](https://manage.icewhale.io/api/static/docs/1727084057212_image.png)
3. Click 'Configuration'
![](https://manage.icewhale.io/api/static/docs/1727084077776_image.png)
4. Select ‘IP camera’
![](https://manage.icewhale.io/api/static/docs/1727084096179_image.png)
5. Enter the obtained RTSP URL, for example: rtsp://admin:Hjj12345@10.0.171.52/stream1.
![](https://manage.icewhale.io/api/static/docs/1727084126856_image.png)
6. Configure the resolution and frame rate, for example: 720x480.
7. After the configuration is completed, you can view the captured images and videos in the Kerberos interface
![](https://manage.icewhale.io/api/static/docs/1727084148176_image.png)
![](https://manage.icewhale.io/api/static/docs/1727084153287_image.png)
8. You can also view the monitoring status in real time on the main interface
![](https://manage.icewhale.io/api/static/docs/1727084172190_image.png)
9. This system is suitable for users who need to monitor a specific area in real time, especially in home and small office scenarios. Although the system currently only supports the configuration of a single camera, its easy installation, efficient performance and good brand compatibility make it a reliable monitoring solution.