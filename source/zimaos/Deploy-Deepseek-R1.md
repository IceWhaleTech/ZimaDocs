---
title: Deploy Deepseek R1 on ZimaOS
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
The launch of **Deepseek** has garnered widespread attention, with its robust performance and open-source ethos enabling more individuals to experience cutting-edge large language models. Eager to personally explore the powerful capabilities of Deepseek? **ZimaOS** simplifies and streamlines the deployment and utilization of large models!
This comprehensive tutorial will guide you through the seamless one-click deployment of the Deepseek R1 model on ZimaOS via OpenWebUI, empowering you to quickly establish your own local AI assistant.
## Getting Started
For AI newcomers, you might be wondering: Why choose Deepseek R1:14B and ZimaOS? And what exactly is OpenWebUI?
![](https://manage.icewhale.io/api/static/docs/1739950777131_image.png)
**Deepseek R1:14B: High Performance with Low Resource Requirements**
The Deepseek R1 series stands out for its exceptional performance and open-source nature. The 14B version delivers robust language capabilities while maintaining lower resource demands, making it ideal for deployment on personal devices or NAS systems.
![](https://manage.icewhale.io/api/static/docs/1739950805989_image.png)
**OpenWebUI: User-Friendly Interface, Ready to Use**
OpenWebUI offers a clean and intuitive web interface, allowing you to effortlessly deploy and interact with large language models. Access your AI assistant anytime, anywhere, directly through your browser.
![](https://manage.icewhale.io/api/static/docs/1739950829035_image.png)
**ZimaOS: Simplified Deployment with Data Security**
ZimaOS excels in ease of use and data security. With its App Store and OpenWebUI integration, deploying Deepseek R1:14B is as simple as installing a mobile app—no complex Docker configurations required. Once deployed, your AI assistant can be accessed by all devices on your local network, ensuring "deploy once, use everywhere."
In this tutorial, we’ll use the **ZimaCube Pro Creator Pack** and the **Deepseek R1:14B model** as examples. The ZimaCube Pro Creator Pack comes pre-installed with ZimaOS and is equipped with an NVIDIA RTX 2000 Ada professional GPU, boasting 16GB of VRAM—more than enough to smoothly run Deepseek R1:14B and even larger models.

For users with other x86 hardware, you’ll need the following:
**A device with a GPU featuring at least 16GB of VRAM**: Running large models requires a significant amount of GPU memory.
**Install ZimaOS**: Visit the [ZimaOS installation guide](https://www.zimaspace.com/docs/zimacube/How-to-Install-ZimaOS) to download and set up ZimaOS on your device.

## Installation and Deployment
**Log in to ZimaOS and Open the App Store**: Search for "Open WebUI" in the search bar. Locate and install the Open WebUI application. Once installed, click the Open WebUI icon in the app list to launch it.
![](https://manage.icewhale.io/api/static/docs/1739950989104_image.png)
![](https://manage.icewhale.io/api/static/docs/1739950995830_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951002382_image.png)
**Configure the Model.** On your first launch of OpenWebUI, you’ll need to configure it:
- Register and log in to your account.
- In the chat interface, click "Select a model" in the top-left corner.
- Enter "deepseek-r1:14b" and select "Pull 'deepseek-r1:14b' from [Ollama.com](https://ollama.com/)."

Wait patiently for the model file to download.
![](https://manage.icewhale.io/api/static/docs/1739951092182_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951098726_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951105561_image.png)
## Start Using Deepseek
Now, all you need to do is enter your prompt in the chat interface, send it, and wait for the model’s response.

Click "New Chat" in the left navigation bar of the Open WebUI interface. Enter the task you’d like the model to help you with in the dialog box. Click "Send," and Deepseek R1:14B will generate a response for you.
![](https://manage.icewhale.io/api/static/docs/1739951128451_image.png)
Feel free to engage in multi-turn conversations with Deepseek R1:14B and explore its capabilities!

## The Value and Applications of Edge AI
Edge-side large models are reshaping the mobile intelligence experience with **security + efficiency**!
![](https://manage.icewhale.io/api/static/docs/1739951166823_image.png)
Leveraging localized data processing and low-latency response, they provide a trusted technical foundation for privacy protection, offline work, and personalized services. Deepseek R1:14B and similar edge AI models already cover scenarios such as knowledge management, creative brainstorming, and programming assistance.

With ZimaOS’s simplified deployment solution, you can effortlessly own a dedicated large model without professional configuration, achieving **"installation as easy as a mobile app, deploy once and use everywhere."** Combined with smart home control and near-field data analysis capabilities, it has the potential to become an all-around intelligent companion for work and life.

## Conclusion
We hope this tutorial has equipped you with the knowledge to deploy large models on ZimaOS using OpenWebUI with just one click. The combination of ZimaOS and Deepseek R1:14B opens the door to the world of local AI. Start your local AI journey today!

If you encounter any issues during use, feel free to let us know at any time. You can also join our [community](https://community.zimaspace.com/) and [Discord](https://discord.com/invite/uuNfKzG5) to discuss more about AI and ZimaOS. We look forward to your feedback!

## Related Links
**ZimaOS**：https://github.com/IceWhaleTech/ZimaOS
**Deepseek**：https://www.deepseek.com/
**OpenWebUI**：https://github.com/open-webui/open-webui
**ZimaCube Pro Creator Pack**: https://shop.zimaspace.com/products/zimacube-pro-creator-pack