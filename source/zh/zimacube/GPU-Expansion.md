---
title: GPU扩展
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
### GPU扩展

#### 介绍
ZimaCube是一款可以满足您专业工作需求的计算设备。通过其模块化设计，用户可以根据个人需求扩展硬件，包括安装图形处理单元（GPU）。GPU对需要处理大量图形处理和并行计算任务的用户至关重要。

#### 安装指南与应用示例

##### 1. GPU安装步骤
###### 步骤1：移除I/O挡板
- 在安装GPU之前，从PCIe插槽移除I/O挡板。

| ![](https://manage.icewhale.io/api/static/docs/1728614816722_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614828318_image.png)|
|:---:|:---:|
###### 步骤2：将GPU安装到正确位置
- 确保GPU对齐正确，将金手指与PCIe插槽匹配。
- 小心将GPU插入插槽，直到完全固定。

| ![](https://manage.icewhale.io/api/static/docs/1728614909590_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614920088_image.png)|
|:---:|:---:|
##### 小贴士：
- 安装或拆卸GPU时，按住PCIe插槽上的卡夹，确保GPU安全固定或释放。
![](https://manage.icewhale.io/api/static/docs/1728614946501_copyImage.png)

##### 2. 应用示例：GPU转码与AI应用
###### 硬件转码：
利用GPU进行硬件转码，可以大大提高媒体处理性能。例如，Plex媒体服务器可以使用ZimaOS上的GPU实现高效的硬件转码（注：下载Plex的专业GPU版本）。

![](https://manage.icewhale.io/api/static/docs/1728615170049_image.png)
- 选择硬件转码设备：未知（NVIDIA）
- 点击保存开始转码

| ![](https://manage.icewhale.io/api/static/docs/1728615235531_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615252888_image.png)|
|:---:|:---:|

| 转码前： | 转码后： |
| - | - |
| ![](https://manage.icewhale.io/api/static/docs/1728615297358_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615306943_image.png)|

有关ZimaOS当前支持的Nvidia GPU列表，请参见当前的NVIDIA GPU部分：[NVIDIA支持的芯片](https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html)

###### AI应用示例：
在ZimaOS上，您可以使用Open WebUI体验先进的AI对话客户端。
它支持最新的语言模型，包括但不限于Llama3和Gemma，并兼容OpenAI的API。此外，Open WebUI将调用ZimaCube Pro Creator内置的NVIDIA 2000 Ada GPU，以减少处理延迟。
最重要的是，所有您的数据（包括登录信息）都将本地存储在您的设备上。Open WebUI确保在您的授权下严格保密，没有外部请求，保护您的隐私并增强安全性。

![](https://manage.icewhale.io/api/static/docs/1728615600750_094e8811-903b-4bb0-8053-548119f56272.gif)
- 此版本已集成Stable Diffusion。

![](https://manage.icewhale.io/api/static/docs/1728615658463_2.gif)

- 我们的AppStore中还有其他AI应用，如Tasking AI和Anything AI。

![](https://manage.icewhale.io/api/static/docs/1728615689023_image.png)
Tasking AI是一个智能任务管理工具，利用AI技术帮助用户更高效地组织和管理日常任务。它能够智能优先排序、提醒和自动化任务，提高工作和生活效率。

Anything AI是一款多功能AI应用，提供各种实用的AI工具和服务，包括文本生成、语言翻译和语音识别。它通过强大的AI技术，简化了用户的日常工作和生活。

通过这些AI应用，您可以充分利用人工智能的优势，提升工作效率和生活质量！

##### 3. 注意事项
- 关机：在进行任何操作之前，确保ZimaCube已完全关机，并接地以避免静电损坏设备。
- 轻拿轻放：安装或拆卸GPU时避免用力过猛，以防损坏。
- 清洁：安装或拆卸时，确保插槽和设备没有灰尘或异物，以避免接触不良。
- 驱动安装：安装正确的驱动程序，以确保最佳性能和稳定性。

##### 4. 结论
本指南旨在帮助您成功安装GPU并了解其在各种应用中的重要性。我们鼓励您尝试安装并探索更多GPU功能，以提升工作效率和生活质量。

期待听到您的使用体验！

#### 兼容性列表
ZimaCube支持**低调**显卡，通常高度约为64.41毫米（2.536英寸）。PCIe插槽提供最多**75W**的功率，因此建议选择在此尺寸和功率范围内的显卡，以确保与ZimaCube紧凑设计和功率限制的兼容性。
**请注意，其他显卡可能需要外部电源才能正常运行。**

{% note warn 提示： %}
我们根据ZimaOS支持的驱动程序编制了此列表，已“验证”的型号已标明。如果您成功运行了**Assist**的其他显卡型号，请通过右上角的“改进”功能帮助我们更新此列表。感谢您的贡献。
{% endnote %}

| **类别**                          | **型号**                                                       |
| :-------------------------------- | ------------------------------------------------------------ |
| GeForce RTX 40系列（笔记本） | GeForce RTX 4090 Laptop GPU, GeForce RTX 4080 Laptop GPU, GeForce RTX 4070 Laptop GPU, GeForce RTX 4060 Laptop GPU, GeForce RTX 4050 Laptop GPU |
| GeForce RTX 40系列             | NVIDIA GeForce RTX 4090 D, NVIDIA GeForce RTX 4090, NVIDIA GeForce RTX 4080, NVIDIA GeForce RTX 4070 Ti, NVIDIA GeForce RTX 4070, NVIDIA GeForce RTX 4060 Ti（已验证）, NVIDIA GeForce RTX 4060 |
| GeForce RTX 30系列（笔记本） | GeForce RTX 3080 Ti Laptop GPU, GeForce RTX 3080 Laptop GPU, GeForce RTX 3070 Ti Laptop GPU, GeForce RTX 3070 Laptop GPU, GeForce RTX 3060 Laptop GPU, GeForce RTX 3050 Ti Laptop GPU, GeForce RTX 3050 Laptop GPU |
| GeForce RTX 30系列             | GeForce RTX 3090 Ti, GeForce RTX 3090, GeForce RTX 3080 Ti, GeForce RTX 3080, GeForce RTX 3070 Ti, GeForce RTX 3070, GeForce RTX 3060 Ti（已验证）, GeForce RTX 3060, GeForce RTX 3050 |
| GeForce RTX 20系列（笔记本） | GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060, GeForce RTX 2050 |
| GeForce RTX 20系列             | GeForce RTX 2080 Ti, GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060 SUPER, GeForce RTX 2060 |
| GeForce MX500系列（笔记本）  | GeForce MX570, GeForce MX550                                 |
| GeForce MX400系列（笔记本）  | GeForce MX450                                                |
| GeForce MX300系列（笔记本）  | GeForce MX350, GeForce MX330                                 |
| GeForce MX200系列（笔记本）  | GeForce MX250, GeForce MX230                                 |
| GeForce MX100系列（笔记本）  | GeForce MX150, GeForce MX130, GeForce MX110                  |
| GeForce GTX 16系列（笔记本） | GeForce GTX 1660 Ti, GeForce GTX 1650 Ti, GeForce GTX 1650   |
| GeForce 16系列                 | GeForce GTX 1660 SUPER, GeForce GTX 1650 SUPER, GeForce GTX 1660 Ti, GeForce GTX 1660, GeForce GTX 1650, GeForce GTX 1630 |
| GeForce 10系列                 | GeForce GTX 1080 Ti, GeForce GTX 1080, GeForce GTX 1070 Ti, GeForce GTX 1070, GeForce GTX 1060, GeForce GTX 1050 Ti, GeForce GTX 1050, GeForce GT 1030, GeForce GT 1010 |
| GeForce 10系列（笔记本）     | GeForce GTX 1080, GeForce GTX 1070, GeForce GTX 1060, GeForce GTX 1050 Ti