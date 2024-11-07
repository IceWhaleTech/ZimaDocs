---
title: 7th Bay LED
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 介绍
## 项目概述
ZimaCube 7th Bay 旨在为旗舰设备提供重要的 SSD 扩展能力，同时通过可定制的照明为家庭计算带来更大的活力。可定制照明的整合开启了无限可能：使用 7th Bay 灯带来指示系统状态、显示数据传输速度、指示下载进度、信号本地 AI 活动，甚至与桌面音乐同步。

为了实现这些理念，ZimaCube 7th Bay 基于 Espressif Systems 的 ESP32 微控制器构建。板载的蓝牙和 WiFi 功能允许通过 ZimaOS 或其他 IoT 设备独立控制照明。ESP32 专门用于控制灯光，并与 ZimaCube 的所有网络和存储功能隔离。此外，ESP32 还充当一个小型 Web 服务器，提供 OTA（空中下载）固件更新，以自定义灯光效果。
### 自定义 ZimaCube 7th Bay 照明
有两种方式可以自定义 ZimaCube 7th Bay 照明效果：
1. 使用官方固件协议，通过在 ZimaOS 上编写脚本进行 DIY 灯光控制。
2. 开发你自己的 ESP32 固件和协议，以便完全控制 7th Bay 灯带。
### 每种方法的优缺点：
**方法 1**：
- 优点：简单、快速实现，利用现有功能，风险低。
- 缺点：功能和性能有限。

**方法 2**：
- 优点：完全控制，高灵活性，独立操作，优化性能。
- 缺点：开发难度高，开发周期长。
# 如何编写灯光控制脚本
### 7th Bay 固件协议介绍
**WiFi 连接**：ESP32 创建一个 WiFi 网络，ZimaOS 连接以进行远程控制和 OTA 更新。

**JSON 控制**：使用 JSON 命令控制灯光效果，提供灵活性和简单的自定义。

**OTA 更新**：支持 OTA 更新，允许在无需物理接触设备的情况下进行固件更新。

**多种照明效果**：支持多种预定义的照明效果，例如呼吸效果、常亮模式、自定义模式等。

### 灯光控制方法
**连接到 ZimaCube 的 Wi-Fi**
1. 连接到 Wi-Fi 网络：
- - Wi-Fi 名称: "ZimaCube"
- - Wi-Fi 密码: "homecloud"

**使用颜色选择器**
为了便于颜色选择，使用以下在线颜色选择器工具：[在线颜色选择器](https://www.w3schools.com/colors/colors_picker.asp)。

**步骤**：
1. 打开在线颜色选择器。
2. 使用鼠标选择所需颜色。
3. 颜色选择器界面将显示相应的 HSV（色调、饱和度、亮度）值。
4. 记录这些 HSV 值并将其转换为适合 JSON 数据的范围：
- - **色调 (H)**：h = (色调值 / 360) * 255
- - **饱和度 (S)**：s = (饱和度值 / 100) * 255
- - **亮度 (V)**：v = (亮度 / 100) * 255

**示例**：
在颜色选择器中选择橙色提供以下 HSV 值：
- **色调 (H)**：30
- **饱和度 (S)**：100
- **亮度 (V)**：100

转换的值：
- **色调 (H)**：h = (30 / 360) * 255 ≈ 21
- **饱和度 (S)**：s = 255
- **亮度 (V)**：v = 255

将这些值应用于 JSON 数据进行灯光控制。

**控制模式**
**模式 1：呼吸模式**
在呼吸模式下，灯带显示单一颜色渐变效果。调整速度和颜色参数以控制效果。
- **速度**：范围 0 ~ 10
- **颜色参数**：
- - **色调 (H)**：范围 0 ~ 255
- - **饱和度 (S)**：范围 0 ~ 255
- - **亮度 (V)**：范围 0 ~ 255

**示例 JSON 数据**：
```language
{
  "id": 1,  // 呼吸模式的 ID
  "speed": 4,  // 颜色过渡速度，范围 0-10
  "data": [
    {"h": 21, "s": 255, "v": 255}
  ]
}
```
*** 发送数据到 ESP32:***

1. ESP32 创建一个默认 WiFi 网络，ZimaOS 连接。验证连接：
```language
ping 172.16.1.1
```
2. 向 `172.16.1.1` 发送 HTTP POST 请求，携带 JSON 数据：
```language
curl -X POST -H "Content-Type: application/json" -d @yourfile.json http://172.16.1.1/post
```
3. 检查灯光效果。

**模式 2：常亮模式**
在常亮模式下，灯带保持单一颜色。

**颜色参数：**
- **色调 (H)**：范围 0 ~ 255
- **饱和度 (S)**：范围 0 ~ 255
- **亮度 (V)**：范围 0 ~ 255

**示例 JSON 数据**：
```language
{
  "id": 2,
  "data": [
    {"h": 21, "s": 255, "v": 255}
  ]
}
```
*** 发送数据到 ESP32:***

1. ESP32 创建一个默认 WiFi 网络，ZimaOS 连接。验证连接：

```language
ping 172.16.1.1
```

2. 向 `172.16.1.1` 发送 HTTP POST 请求，携带 JSON 数据：

```language
curl -X POST -H "Content-Type: application/json" -d @yourfile.json http://172.16.1.1/post
```

3. 检查灯光效果。

**模式 3 和 4**
- 正在开发中。

**模式 5：自定义模式**
在自定义模式下，可以单独控制每个灯的颜色和亮度。

- 颜色参数：
- - 色调 (H)：范围 0 ~ 255
- - 饱和度 (S)：范围 0 ~ 255
- - 亮度 (V)：范围 0 ~ 255

**示例 JSON 数据**：
```language
{
  "id": 5,  // 自定义模式的 ID
  "data": [
    // 每个对象代表一个灯光的颜色和亮度设置
    {"h": 0, "s": 255, "v": 255},  // 灯 1 红色
    {"h": 85, "s": 255, "v": 255},  // 灯 2 绿色
    {"h": 168, "s": 255, "v": 255},  // 灯 3 蓝色
    {"h": 42, "s": 255, "v": 255},  // 灯 4 黄色
    {"h": 212, "s": 255, "v": 255},  // 灯 5 紫色
    {"h": 128, "s": 255, "v": 255},  // 灯 6 青色
    {"h": 21, "s": 255, "v": 255},  // 灯 7 橙色
    {"h": 128, "s": 255, "v": 255},  // 灯 8 青色
    {"h": 212, "s": 255, "v": 255},  // 灯 9 紫色
    {"h": 42, "s": 255, "v": 255},  // 灯 10 黄色
    {"h": 168, "s": 255, "v": 255},  // 灯 11 蓝色
    {"h": 85, "s": 255, "v": 255},   // 灯 12 绿色
    {"h": 0, "s": 255, "v": 255}   // 灯 13 红色
  ]
}
```
*** 发送数据到 ESP32:***

1. ESP32 创建一个默认 WiFi 网络，ZimaOS 连接。验证连接：

```language
ping 172.16.1.1
```

2. 向 `172.16.1.1` 发送 HTTP POST 请求，携带 JSON 数据：

```language
curl -X POST -H "Content-Type: application/json" -d @yourfile.json http://172.16.1.1/post
```

3. 检查灯光效果。
# 如何开发自己的 7th Bay 固件
### 介绍
使用 Windows 计算机，我们演示如何开发自己的 ESP32 固件和灯光效果，以及如何上传新的固件。

### 硬件要求
- ZimaCube 的 7th Bay
- Type-C 数据线
- Windows 计算机

### 硬件信息
- LED 数量：13
- GPIO 2：连接到 WS2812B 灯带的数据线
- 5V 和 GND：连接到 ESP32 开发板的电源和接地。

### ESP32 详情：
- ESP32 框图：[下载](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/ESP32-C3Dimensions.png)
- ESP32 原理图：[下载](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/ESP32_C3Schematic.png)
- ESP32 Altium Designer 文件：[下载](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/Super%20Mini-ESP32C3-Form%20Factor.PcbDoc)
### 使用指南
**系统要求**
- 操作系统：Windows 10
- 必要工具：Arduino IDE

**安装步骤**
1. 安装 Arduino IDE：[下载](https://www.arduino.cc/en/software)

2. 安装 ESP32 板
![](https://manage.icewhale.io/api/static/docs/1727168990232_image.png)
3. 下载并安装库：
- Adafruit_NeoPixel
- ArduinoJson
- Metro
- 将它们放置在 Arduino IDE 安装的库文件夹中。

**开发配置**
1. 打开 Arduino IDE。
2. 选择板：工具 -> 板 -> ESP32 -> ESP32C3 开发模块
3. 选择正确的端口：工具 -> 端口
4. 编译并上传代码到 ESP32：点击上传按钮
5. 上传成功结果：
![](https://manage.icewhale.io/api/static/docs/1727169097528_image.png)

**OTA 更新教程**
1. 连接 WiFi
- - 将计算机连接到 WiFi 网络：
- - - 名称：“ZimaCube”
- - - 密码：“homecloud”
2. 输入 URL
- - 打开浏览器并访问 `172.16.1.1`
3. 上传固件
- - 从以下地址获取固件：[固件下载](https://github.com/IceWhaleTech/7th-bay/tree/main/Firmware)