---
title: 在 ZimaOS 上部署 Deepseek R1
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
**Deepseek** 的发布引起了广泛关注，其强大的性能和开源精神使更多人能够体验前沿的大型语言模型。想亲自探索 Deepseek 的强大能力吗？**ZimaOS** 简化并优化了大型模型的部署和使用！
本教程将引导你通过 OpenWebUI 在 ZimaOS 上实现 Deepseek R1 模型的一键部署，帮助你快速建立自己的本地 AI 助手。
## 入门
对于 AI 新手，你可能会想知道：为什么选择 Deepseek R1:14B 和 ZimaOS？OpenWebUI 到底是什么？
![](https://manage.icewhale.io/api/static/docs/1739950777131_image.png)
**Deepseek R1:14B：高性能、低资源需求**
Deepseek R1 系列因其卓越的性能和开源特性脱颖而出。14B 版本提供强大的语言能力，同时保持较低的资源需求，适合在个人设备或 NAS 系统上部署。
![](https://manage.icewhale.io/api/static/docs/1739950805989_image.png)
**OpenWebUI：用户友好的界面，随时可用**
OpenWebUI 提供一个干净直观的 Web 界面，让你轻松部署和与大型语言模型互动。你可以随时通过浏览器访问你的 AI 助手。
![](https://manage.icewhale.io/api/static/docs/1739950829035_image.png)
**ZimaOS：简化部署，确保数据安全**
ZimaOS 在易用性和数据安全方面表现突出。通过其应用商店和 OpenWebUI 集成，部署 Deepseek R1:14B 就像安装手机应用一样简单，无需复杂的 Docker 配置。一旦部署完成，你的 AI 助手可以在本地网络上的所有设备上访问，实现“部署一次，随处使用”。
在本教程中，我们将使用 **ZimaCube Pro Creator Pack** 和 **Deepseek R1:14B 模型** 作为示例。ZimaCube Pro Creator Pack 已预装 ZimaOS，配备 NVIDIA RTX 2000 Ada 专业 GPU，拥有 16GB VRAM——足以平稳运行 Deepseek R1:14B 及更大的模型。

对于其他 x86 硬件用户，你需要：
**一台 GPU 至少具有 16GB VRAM 的设备**：运行大型模型需要大量 GPU 内存。
**安装 ZimaOS**：访问 [ZimaOS 安装指南](https://www.zimaspace.com/docs/zimacube/How-to-Install-ZimaOS) 下载并设置 ZimaOS。

## 安装与部署
**登录 ZimaOS 并打开应用商店**：在搜索栏中搜索 "Open WebUI"。找到并安装 Open WebUI 应用。安装完成后，点击应用列表中的 Open WebUI 图标以启动它。
![](https://manage.icewhale.io/api/static/docs/1739950989104_image.png)
![](https://manage.icewhale.io/api/static/docs/1739950995830_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951002382_image.png)
**配置模型。** 在第一次启动 OpenWebUI 时，你需要进行以下配置：
- 注册并登录到你的账户。
- 在聊天界面，点击左上角的“选择模型”。
- 输入 "deepseek-r1:14b" 并选择“从 [Ollama.com](https://ollama.com/) 拉取 'deepseek-r1:14b'。”

耐心等待模型文件下载。
![](https://manage.icewhale.io/api/static/docs/1739951092182_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951098726_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951105561_image.png)
## 开始使用 Deepseek
现在，你只需要在聊天界面输入提示，发送后等待模型的响应。

在 Open WebUI 界面的左侧导航栏中点击“新建聊天”。在对话框中输入你希望模型帮助的任务，点击“发送”，Deepseek R1:14B 会为你生成响应。
![](https://manage.icewhale.io/api/static/docs/1739951128451_image.png)
可以随时与 Deepseek R1:14B 进行多轮对话，探索其强大功能！

## 边缘 AI 的价值与应用
边缘侧大型模型正在通过 **安全性 + 高效性** 重塑移动智能体验！
![](https://manage.icewhale.io/api/static/docs/1739951166823_image.png)
通过本地数据处理和低延迟响应，它们为隐私保护、离线工作和个性化服务提供了可信的技术基础。Deepseek R1:14B 及类似的边缘 AI 模型已涵盖知识管理、创意头脑风暴、编程辅助等场景。

通过 ZimaOS 的简化部署解决方案，你可以毫不费力地拥有一个专用的大型模型，无需专业配置，轻松实现 **“像安装手机应用一样简单的安装，一次部署，随处使用。”** 结合智能家居控制和近场数据分析能力，它有潜力成为工作和生活的全能智能伴侣。

## 结论
希望本教程能帮助你了解如何通过 OpenWebUI 一键部署大型模型到 ZimaOS。ZimaOS 和 Deepseek R1:14B 的结合为本地 AI 的世界打开了一扇大门。今天就开始你的本地 AI 之旅吧！

如果在使用过程中遇到任何问题，随时告诉我们。你还可以加入我们的 [社区](https://community.zimaspace.com/) 和 [Discord](https://discord.com/invite/uuNfKzG5) 讨论更多关于 AI 和 ZimaOS 的话题。期待你的反馈！

## 相关链接
**ZimaOS**：https://github.com/IceWhaleTech/ZimaOS  
**Deepseek**：https://www.deepseek.com/  
**OpenWebUI**：https://github.com/open-webui/open-webui  
**ZimaCube Pro Creator Pack**: https://shop.zimaspace.com/products/zimacube-pro-creator-pack  
