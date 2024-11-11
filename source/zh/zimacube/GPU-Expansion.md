---
title: GPU扩展  
description:  
type: “Docs”  
tip: 顶部栏固定格式请勿删除, description为文章描述，不填时将截取内容最前一段文字  
---  

# 介绍  
ZimaCube 是一款可以满足您专业工作需求的计算设备。通过其模块化设计，用户可以根据个人需求扩展硬件，包括安装图形处理单元（GPU）。GPU 对于需要处理大量图形处理和并行计算任务的用户至关重要。

# 安装指南和应用示例  
## 1. GPU 安装步骤  
### 第一步：移除 IO 屏蔽片。  
  - 在安装 GPU 之前，请移除 PCIe 插槽上的 IO 屏蔽片。

| ![](https://manage.icewhale.io/api/static/docs/1728614816722_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728614828318_image.png) |  
|:---:|:---:|  
### 第二步：按正确的方向安装 GPU。  
  - 确保 GPU 对齐正确，将金手指与 PCIe 插槽匹配。  
  - 轻轻插入 GPU 直到完全固定。

| ![](https://manage.icewhale.io/api/static/docs/1728614909590_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728614920088_image.png) |  
|:---:|:---:|  
#### 提示：  
  - 在安装或拆卸 GPU 时，按下 PCIe 插槽上的夹扣。这样可以确保 GPU 固定或释放到位。  
![](https://manage.icewhale.io/api/static/docs/1728614946501_copyImage.png)  
## 2. 应用示例：GPU 转码和 AI 应用  
### 硬件转码：  

利用 GPU 进行硬件转码可以大幅提高媒体处理性能。例如，Plex 媒体服务器可以利用 ZimaOS 上的 GPU 实现高效的硬件转码（注意：请下载 Plex 的专业 GPU 版本）。  
![](https://manage.icewhale.io/api/static/docs/1728615170049_image.png)  
- 选择硬件转码设备：未知（NVIDIA）  
- 点击保存开始转码

| ![](https://manage.icewhale.io/api/static/docs/1728615235531_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728615252888_image.png) |  
|:---:|:---:|  

| 转码前： | 转码后： |  
| - | - |  
| ![](https://manage.icewhale.io/api/static/docs/1728615297358_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728615306943_image.png) |  

有关当前 ZimaOS 支持的 Nvidia GPU 列表，请参阅当前 NVIDIA GPU 部分：[https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html](https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html)  
### AI 应用示例：  
在 ZimaOS 上，您可以使用 Open WebUI 体验先进的 AI 对话客户端。  
它支持最新的语言模型，包括但不限于 Llama3 和 Gemma，并兼容 OpenAI 的 API。此外，Open WebUI 将调用 ZimaCube Pro Creator 内置的 NVIDIA 2000 Ada GPU 来减少处理延迟。  
最重要的是，您的所有数据（包括登录详情）都保存在本地设备上。Open WebUI 在您的授权下确保严格保密，不会发送外部请求，保护您的隐私并增强安全性。

![](https://manage.icewhale.io/api/static/docs/1728615600750_094e8811-903b-4bb0-8053-548119f56272.gif)  
- 该版本已集成 Stable Diffusion。

![](https://manage.icewhale.io/api/static/docs/1728615658463_2.gif)

- 我们的 AppStore 中还有其他 AI 应用，例如 Tasking AI 和 Anything AI。

![](https://manage.icewhale.io/api/static/docs/1728615689023_image.png)  
Tasking AI 是一款智能任务管理工具，利用 AI 技术帮助用户更高效地组织和管理日常任务。它可以智能地优先排序、提醒和自动化任务，提高工作和生活效率。

Anything AI 是一款多功能的 AI 应用，提供多种实用的 AI 工具和服务，包括文本生成、语言翻译和语音识别等。它旨在通过强大的 AI 技术简化用户的日常工作和生活。

通过这些 AI 应用，您可以充分利用人工智能的优势，提高工作效率和生活质量！  
## 3. 注意事项  
  - 断电：在进行任何操作之前，请确保 ZimaCube 完全断电，并接地以避免静电损坏设备。  
  - 轻拿轻放：安装或拆卸 GPU 时避免用力过猛，以免损坏设备。  
  - 清洁：安装或拆卸时，请确保插槽和设备无灰尘或异物，以避免接触不良。  
  - 驱动安装：请安装正确的驱动程序，以确保最佳性能和稳定性。

## 4. 总结  
  本指南应能帮助您成功安装 GPU 于 ZimaCube，并理解它在各种应用中的重要性。我们鼓励您尝试安装并探索更多 GPU 功能，以提高工作效率和生活质量。  
  我们期待听到更多关于您使用的经验！

# 兼容性列表  
ZimaCube 支持 **低剖面** 图形卡，通常高度约为 64.41 mm（2.536 英寸）。PCIe 插槽提供最高 **75W** 的功率，因此建议选择在此尺寸和功率范围内的图形卡，以确保与 ZimaCube 紧凑设计和功率限制的兼容性。  
**请注意，其他图形卡可能需要外部电源才能正常运行。**

{% note warn Note: %}
我们已根据 ZimaOS 支持的驱动程序编制了此列表，并标注了“已验证”型号。如果您成功在其他图形卡型号上运行了 **Assist**，请通过右上角的“改进”功能帮助我们更新此列表。感谢您的贡献。
{% endnote %}

| **类别**                            | **型号**                                                       |  
| :--------------------------------- | ------------------------------------------------------------ |  
| GeForce RTX 40 系列（笔记本）        | GeForce RTX 4090 Laptop GPU, GeForce RTX 4080 Laptop GPU, GeForce RTX 4070 Laptop GPU, GeForce RTX 4060 Laptop GPU, GeForce RTX 4050 Laptop GPU |  
| GeForce RTX 40 系列                 | NVIDIA GeForce RTX 4090 D, NVIDIA GeForce RTX 4090, NVIDIA GeForce RTX 4080, NVIDIA GeForce RTX 4070 Ti, NVIDIA GeForce RTX 4070, NVIDIA GeForce RTX 4060 Ti（已验证），NVIDIA GeForce RTX 4060 |  
| GeForce RTX 30 系列（笔记本）        | GeForce RTX 3080 Ti Laptop GPU, GeForce RTX 3080 Laptop GPU, GeForce RTX 3070 Ti Laptop GPU, GeForce RTX 3070 Laptop GPU, GeForce RTX 3060 Laptop GPU, GeForce RTX 3050 Ti Laptop GPU, GeForce RTX 3050 Laptop GPU |  
| GeForce RTX 30 系列                 | GeForce RTX 3090 Ti, GeForce RTX 3090, GeForce RTX 3080 Ti, GeForce RTX 3080, GeForce RTX 3070 Ti, GeForce RTX 3070, GeForce RTX 3060 Ti（已验证），GeForce RTX 3060, GeForce RTX 3050 |  
| GeForce RTX 20 系列（笔记本）        | GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060, GeForce RTX 2050 |  
| GeForce RTX 20 系列                 | GeForce RTX 2080 Ti, GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060 SUPER, GeForce RTX 2060 |  
| GeForce MX500 系列（笔记本）        | GeForce MX570, GeForce MX550                                 |  
| GeForce MX400 系列（笔记本）        | GeForce MX450                                                |  
| GeForce MX300 系列（笔记本）        | GeForce MX350, GeForce MX330                                 |  
| GeForce MX200 系列（笔记本）        | GeForce MX250, GeForce MX230                                 |  
| GeForce MX100 系列（笔记本）        | GeForce MX150, GeForce MX130, GeForce MX110                  |  
| GeForce GTX 16 系列（笔记本）       | GeForce GTX