---
title: 如何在 ZimaOS 中使用 UPS（不间断电源）
description: 学习如何在 ZimaOS 1.5.3 及更高版本中连接、启用和配置 USB UPS，以便在停电时让您的 NAS 安全关闭，避免数据丢失。
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description 为文章描述，不填时将截取内容最前一段文字
---
## 介绍
从 **ZimaOS v1.5.3** 开始，ZimaOS 正式支持 **UPS（不间断电源）**，允许您的 NAS 在停电时继续运行，并在需要时安全关闭。连接兼容的 USB UPS 后，ZimaOS 可以实现以下功能：
- 读取 UPS 电池电量、电压及预计运行时间  
- 在停电时保持 NAS 运行一段时间  
- 根据您的设置执行受控关机  

您可以在此下载最新版本的 ZimaOS：https://github.com/IceWhaleTech/ZimaOS/releases  

本指南将向您展示如何在 ZimaOS 中 **连接**、**启用** 和 **配置** UPS。

---
## 准备工作
开始前，请准备以下设备：
- 运行 ZimaOS v1.5.3 或更高版本的 NAS 或服务器  
- 支持 USB 通信的 UPS（例如常见的 APC 或 Santak 消费级 USB UPS）

---
## 第一步 – 连接 UPS 硬件
![ZimaOS 设备通过 USB 数据线和电源适配器连接 UPS，并插入标准电源插座。](https://manage.icewhale.io/api/static/docs/1766748897632_image.png)
1. 将 ZimaOS 设备及其电源适配器连接到 UPS 输出插座。  
2. 使用 USB 数据线将 UPS 连接到 ZimaOS 设备。  

---
## 第二步 – 启用停电保护（UPS）
![ZimaOS（IceWhale）通用设置页面，显示配置选项](https://manage.icewhale.io/api/static/docs/1766749473078_image.png)
1. 在浏览器中打开 ZimaOS 网页界面。  
2. 进入 设置 → 通用 → 停电保护（UPS）  
3. 将其切换为开启状态。  

---
## 第三步 – 选择 UPS 类型和设备
在 UPS 配置窗口中，您需要指定 ZimaOS 如何与 UPS 通信以及使用哪台 UPS。
![UPS 配置页面选择 USB 连接的 UPS 型号](https://manage.icewhale.io/api/static/docs/1766749743361_image.png)
您将看到以下字段：
| 设置 | 描述 |
|------|------|
| **UPS 类型** | 选择通信方式。目前 ZimaOS 仅支持 **USB-UPS**。 |
| **UPS 设备** | 选择 ZimaOS 检测到的 UPS 型号。 |

---
## 第四步 – 设置停电行为
在同一 UPS 设置窗口中，您可以决定在停电时 ZimaOS 应该如何处理。  
![ZimaOS 中的 UPS 停电保护设置](https://manage.icewhale.io/api/static/docs/1766751218471_image.png)
有两种关机模式：
### 电池低电量关机
在此模式下，当 UPS 电池电量 **低于 15%** 时，ZimaOS 会自动关闭系统。  
此选项使用简单，主要用于在电池即将耗尽时保护数据和硬件。  

### 自定义时间
在此模式下，当 UPS 切换至电池供电时，ZimaOS 会启动计时器，并在设定时间到达后执行安全关机。  

**注意**：15% 的安全阈值依然适用：
- 如果在自定义时间结束前电池电量降至 15%，ZimaOS 会立即关机，不会继续等待。  

此选项适合以下情况：
- 避免因短时电力波动频繁关机  
- 在停电持续时间较长且电池降至 15% 时，仍确保系统安全关闭  

---
点击 `确认` 应用配置。

从此以后，每当 UPS 处于电池供电状态时，ZimaOS 都会遵循所选关机策略。

---
## 第五步 – 在 ZimaOS 中验证 UPS 状态
配置完成后，您可以检查 ZimaOS 是否正确读取 UPS 数据。
![状态界面显示实时情况](https://manage.icewhale.io/api/static/docs/1766751527944_image.png)
在 UPS 状态或配置页面，您应该看到如下信息：
- **电池百分比**，例如：电池 98%  
- **预计剩余运行时间**，例如：预计 59 分钟  
- **电压**，例如：13.5 V  

如果这些数值可见并随时间更新，则表示停电保护已 **启用**。  

停电时：
1. UPS 会继续为 ZimaOS 设备供电  
2. ZimaOS 会按照您选择的关机规则执行  
3. 这有助于降低磁盘损坏、文件系统错误、数据丢失以及服务因突然断电而崩溃的风险  

您的 NAS 现在获得了 **真正的停电保护**，运行更加安全可靠。

---
## 使用建议

| 建议 | 原因 |
|------|------|
| 使用 **自定义时间** 配置延迟关机 | 防止因短暂或临时停电频繁关机 |
| 将 UPS 与网络交换机或路由器同时连接 | 避免启动后网络断电导致 NAS 无法访问 |
| 定期检查 UPS 电池健康状况 | 电池容量随长期使用可能下降，影响备份运行时间 |

---
## 支持设备列表
[ZimaOS 支持的 UPS 设备兼容性列表](https://www.zimaspace.com/docs/zimaos/zimaos-ups-compatibility-list)  

该列表并非详尽无遗，可能会随时更新。  
如果您的 UPS 未列出，并不意味着不支持。

---
## 获取帮助
如果在使用 ZimaOS 与 UPS 配合时遇到任何问题，请联系 ZimaOS 开发团队 `feedback@zimaos.com`