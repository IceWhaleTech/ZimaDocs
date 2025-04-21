---
title: 使用ZimaOS实现Frigate+Olama屏幕AI描述
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字
---
## 背景
在日常生活中，监控摄像头已经成为家庭和企业中重要的工具。然而，传统的监控系统通常只记录图像或简单地检测运动，无法提供图像内容的详细解释。这通常需要用户自己判断，观看视频或接收通知时，判断发生了什么。
Frigate 是一个高效的开源视频分析工具，能够识别图像中的目标，如人、车和动物，并触发相关事件。但其功能主要停留在“看见”的层面，无法直接告诉你“发生了什么”。
为弥补这一不足，我们引入了 Ollama，它可以生成自然语言描述。通过它，我们可以将 Frigate 检测到的视觉内容转化为清晰的文本说明，比如“有人走进了院子”或“有辆车停在门口”。
本教程将引导你如何使用 ZimaOS 将 Frigate 和 Ollama 结合起来，创建一个实用的视觉描述系统。无论你是想提升家庭安全的便利性，还是为小型项目增加智能功能，这一解决方案都能满足你的需求。

## 硬件准备
1. **支持 RTSP 协议的摄像头**
   用于为 Frigate 提供实时视频流输入。
2. **兼容的 ZimaBoard2 显卡**
   用于本地加速 AI 模型推理（如 NVIDIA 系列显卡）。参考显卡 [https://www.zimaspace.com/docs/zh/zimacube/GPU-Expansion](https://www.zimaspace.com/docs/zh/zimacube/GPU-Expansion)。
3. **6GB 或更大容量的硬盘**
   用于存储 AI 模型文件、视频快照和系统数据。

## 软件安装
该系统的软件安装可以分为以下三个步骤：
1. 数据迁移
2. 安装 Ollama 并配置 LLaVA 模型
3. 安装并配置 Frigate

### 步骤 1: 数据迁移
由于 AI 模型文件的体积较大，建议提前安装独立硬盘，并将 Docker 数据目录及个人数据迁移到硬盘中，以避免下载过程中出现失败或存储空间不足的问题，从而确保系统稳定运行并有足够的存储空间。
> 请备份重要文件，以防数据丢失。在迁移数据时可能存在风险！！！

#### 连接显卡到硬盘，启动设备并进入操作系统。
![](https://manage.icewhale.io/api/static/docs/1745202079506_image.png)

#### 数据迁移
1. 点击左上角菜单中的 **"设置"** 图标。
2. 点击 **"应用"**。
3. 找到相关的应用或数据管理项目，点击 **"迁移"** 按钮，等待迁移完成。
![](https://manage.icewhale.io/api/static/docs/1745202168758_image.png)

### 步骤 2: 安装 Ollama 并配置 LLaVA 模型
关于支持的模型的更多细节，请访问 [Frigate 官方文档](https://docs.frigate.video/configuration/genai/) 和 [Ollama 官方网站](https://ollama.com/)。

#### 安装 Ollama
1. 打开 **应用商店**，在搜索栏输入 **"Ollama"**。
2. 根据显卡类型选择合适的版本进行安装（例如支持 NVIDIA 的版本）。
![](https://manage.icewhale.io/api/static/docs/1745202389678_image.png)

#### 配置 LLaVA 模型
1. 打开 **Olama 终端**，点击右上角的菜单图标。
2. 选择 **"设置"** 进入设置界面。
![](https://manage.icewhale.io/api/static/docs/1745203245150_image.png)

3. 点击 **"终端"** 图标进入命令行控制界面。
![](https://manage.icewhale.io/api/static/docs/1745203281707_image.png)

4. 在命令行中输入以下命令，下载并安装 llava-llama3 模型：
```language
ollama pull llava-llama3
```
![](https://manage.icewhale.io/api/static/docs/1745203346880_image.png)

5. 出现 **"Success"** 字样表示模型下载完成，Ollama 已准备就绪。
![](https://manage.icewhale.io/api/static/docs/1745203380348_image.png)

6. 启动 Ollama 后，**记录运行的 IP 地址和端口号**（如 `http://10.0.1.3:11434`），稍后在配置 Frigate 时使用。
![](https://manage.icewhale.io/api/static/docs/1745203428242_image.png)

### 步骤 3: 安装并配置 Frigate
#### 安装 Frigate
1. 点击主界面右上角的 **"加号"** 按钮。
2. 选择“安装自定义应用”。
![](https://manage.icewhale.io/api/static/docs/1745203508399_image.png)

3. 点击 **"导入"** 按钮。
4. 导入下面的 frigate.yaml 配置文件。
```yaml
name: pure_grace
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
```

5. 点击 **"提交"**。
![](https://manage.icewhale.io/api/static/docs/1745203744283_image.png)

6. 点击 **"安装"**，等待安装完成。
![](https://manage.icewhale.io/api/static/docs/1745203764783_image.png)

#### 获取 Frigate 的账号和密码
启动 Frigate 后，请检查并记录日志中的默认账号和密码。
![](https://manage.icewhale.io/api/static/docs/1745203839741_image.png)

1. 打开 **Frigate 终端**，点击右上角的 **菜单图标**。
2. 选择 **"设置"** 进入设置界面。
![](https://manage.icewhale.io/api/static/docs/1745203882560_image.png)

3. 点击 **"终端"** 图标进入命令行界面。
4. 切换到 **"日志"** 标签查看启动日志。
5. 点击右上角的 **"全屏"** 按钮，方便查找默认的用户名和密码。
![](https://manage.icewhale.io/api/static/docs/1745203925603_image.png)

6. 账号和密码信息会显示在这里，请记录下来。
![](https://manage.icewhale.io/api/static/docs/1745203946052_image.png)

#### 配置 Frigate
1. 输入之前获取的账号和密码登录系统。
![](https://manage.icewhale.io/api/static/docs/1745203986368_image.png)

2. 点击左侧菜单中的 **"设置"** 按钮。
3. 选择 **"配置编辑器"** 进入配置文件编辑界面。
![](https://manage.icewhale.io/api/static/docs/1745204019481_image.png)

4. 在配置编辑器中，添加或修改摄像头相关配置。你可以参考以下示例进行设置：

```yaml
mqtt:
  enabled: false

cameras:
  abc: # 摄像头名称，可以自定义
    genai:
      enabled: true
      use_snapshot: True
      objects:
        - person

    ffmpeg:
      inputs:
        - path: rtsp://admin:HTC123456@10.0.171.52/stream1  # 摄像头的 RTSP 地址，替换为你的设备 URL
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
  base_url: http://10.0.1.12:11434   # Ollama 服务运行的主机地址和端口
  model: llava-llama3 # 用于图像+文本分析的多模态模型
  prompt: "Describe what the {label} is doing in these images from camera {camera}. Focus on actions and possible intent."
  object_prompts:
    person: "What is this person doing?" # 针对“person”分析的特定提示
    car: "What is this car doing? Is it parked, circling, or doing something unusual?"

version: 0.15-1
```

**请确保将 `rtsp` 链接替换为你自己的摄像头地址，并将 Ollama 的 IP 和端口设置为实际运行地址（例如 `http://10.0.1.3:11434`）。否则，Frigate 将无法访问视频流或连接 AI 模型进行分析。**
![](https://manage.icewhale.io/api/static/docs/1745204529636_image.png)

5. 配置完成后，点击 **"保存"**，Frigate 会自动应用新的配置并开始运行。
当 Frigate 在监控屏幕中检测到人物对象时，它会自动捕捉快照，并调用 AI 模型生成相应的图像描述。你还可以根据实际应用场景自由调整检测对象、使用的模型和提示内容，从而创建更加智能和个性化的监控体验。

## 系统建设完成
![](https://manage.icewhale.io/api/static/docs/1745204647915_image.png)

至此，Frigate 和 Ollama 的智能监控系统已经成功搭建完成。你可以通过实时屏幕查看检测效果，或进入日志和快照页面，验证 AI 分析是否正常运行。
为了进一步优化体验，你可以尝试接入通知服务、调整模型参数或添加更多摄像头。