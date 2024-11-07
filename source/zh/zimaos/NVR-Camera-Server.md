---
title: NVR摄像头服务器
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 介绍
本教程将指导您如何使用Kerberos.io和ZimaBoard在CasaOS上创建一个家庭视频监控系统。我们将使用CasaOS的Docker自定义安装功能来简化安装和配置过程，同时详细解释如何配置RTSP摄像头。
## 1. 准备工作
- ZimaBoard X 1
- 确保ZimaBoard已连接电源和互联网，并已安装CasaOS
- 兼容RTSP的IP摄像头
## 2. 获取摄像头的RTSP链接
由于不同制造商的摄像头获取RTSP链接的方式不同，请参考您的摄像头用户手册或制造商官方网站上的相关说明，或登录摄像头管理界面查找RTSP链接。在本教程中，我们成功测试了TP-Link和Tuya品牌的摄像头，并验证了它们与Kerberos.io的兼容性。此外，我们预计该系统将兼容Hikvision、Ezviz、Dahua、eufy和Yousee等品牌的摄像头。
## 3. 配置Kerberos.io
### 第一步：登录CasaOS
1. 确保ZimaBoard已连接电源和互联网，并已安装CasaOS。
2. 访问CasaOSweb界面（通常为http://<你的ZimaBoard IP>）。
### 第二步：通过CasaOS安装Docker
1. 打开应用商店
![](https://manage.icewhale.io/api/static/docs/1727083688403_image.png)
2. 点击自定义安装
![](https://manage.icewhale.io/api/static/docs/1727083742110_image.png)
3. 点击导入
![](https://manage.icewhale.io/api/static/docs/1727083761139_image.png)
4. 将以下代码粘贴到输入框中以配置Docker
version: '3'  # Docker Compose文件版本

services:
  kerberos:
    image: kerberos/kerberos  # 使用kerberos/kerberos镜像
    container_name: kerberos  # 容器名称
    ports:
      - "8080:80"  # 将主机端口8080映射到容器端口80
    volumes:
      - ./config:/config  # 将主机的配置目录挂载到容器内的/config
      - ./recordings:/etc/opt/kerberosio/capture  # 将主机的录制目录挂载到容器内的/etc/opt/kerberosio/capture
    restart: unless-stopped  # 容器重启策略：除非手动停止，否则自动重启
    environment:
      - TZ=Europe/London  # 将容器的时区设置为Europe/London
      - KERBEROSIO_SETTINGS_PORT=80  # 设置Kerberos服务监听端口为80
      - KERBEROSIO_SETTINGS_RECORDSTREAM="/config/recordings"  # 设置录制流位置为/config/recordings
![](https://manage.icewhale.io/api/static/docs/1727083935343_image.png)
5. 点击提交
6. 填写'tag': latest和'title': kerberos
![](https://manage.icewhale.io/api/static/docs/1727083963029_image.png)
7. 提交并等待安装完成
### 第三步：配置Kerberos.io
1. 在浏览器中打开http://<你的ZimaBoard IP>:8080以进入Kerberos.io设置界面。
![](https://manage.icewhale.io/api/static/docs/1727084036342_image.png)
2. 创建一个账户和密码并登录Kerberos.io。
![](https://manage.icewhale.io/api/static/docs/1727084057212_image.png)
3. 点击'配置'
![](https://manage.icewhale.io/api/static/docs/1727084077776_image.png)
4. 选择‘IP摄像头’
![](https://manage.icewhale.io/api/static/docs/1727084096179_image.png)
5. 输入获取的RTSP URL，例如：rtsp://admin:Hjj12345@10.0.171.52/stream1。
![](https://manage.icewhale.io/api/static/docs/1727084126856_image.png)
6. 配置分辨率和帧率，例如：720x480。
7. 配置完成后，您可以在Kerberos界面中查看捕获的图像和视频
![](https://manage.icewhale.io/api/static/docs/1727084148176_image.png)
![](https://manage.icewhale.io/api/static/docs/1727084153287_image.png)
8. 您还可以在主界面上实时查看监控状态
![](https://manage.icewhale.io/api/static/docs/1727084172190_image.png)
9. 该系统适合需要实时监控特定区域的用户，特别是在家庭和小型办公室场景中。尽管该系统目前仅支持单个摄像头的配置，但其易于安装、高效性能和良好的品牌兼容性使其成为一个可靠的监控解决方案。