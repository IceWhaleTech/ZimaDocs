---
title: 在ZimaOS上安装Paperless-ngx的完整指南  
description:  
type: Docs  
author: icewhale123456  
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字  
---  
> _最初由_ _**Muditha Liyanagama**_ _发布在 IceWhale 社区论坛上:_ _[https://community.zimaspace.com/](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474)_  

大家好，ZimaOS 和 Zimaboard 的爱好者们！  

我注意到，尽管 ZimaOS 社区和 Ice-whale 团队提供了出色的支持，但有时找到清晰、组织良好、详细的安装指南仍然是一个挑战。对于那些喜欢直接、一步一步方法的人，特别是在处理一些小而常常令人沮丧的技术问题时，这个指南就是为你们设计的。这篇文章是我正在开发的关于 ZimaOS 和 Zimaboard 系列文章中的第二篇，我真诚希望它能对你们有所帮助。  

本指南重点介绍如何安装 Paperless-ngx，并配置其家庭使用的基本功能，可以在你的本地网络或 Tailscale 网络中访问。如果你的目的是将 Paperless-ngx 实例暴露到公共互联网，则以下的一些配置可能需要调整。  

我在一台 Zimaboard 2 上进行了此安装，规格如下：  

* **CPU：** Intel(R) N150 4 核 2.90 GHz 4 线程  
* **RAM：** 16 GB 6400 MHz LPDDR5  
* **GPU：** Intel Corporation Alder Lake-N \[Intel Graphics\]  
* **操作系统：** ZimaOS v1.5.3 Plus  

让我们开始安装 Paperless-ngx 吧！  

### **步骤 1：访问应用商店**

1. 登录到你的 ZimaOS 网络界面。  
2. 导航到 **应用商店**。  

### **步骤 2：查找并选择 Paperless-ngx**

1. 在应用商店的搜索栏中，输入 Paperless-ngx。  
2. 从搜索结果中选择 **Paperless-ngx (BigBearCasaOS)**。  

### **步骤 3：自定义安装**

1. 找到 **安装** 按钮。不要直接点击它，而是点击旁边的小箭头。  
2. 选择 **自定义安装**。  

### **步骤 4：安装前的关键配置**

这是我们为 Paperless-ngx 正常运行设置基本参数的关键阶段。  

在 **Volumes** 部分，进行以下更改。（如果你更喜欢默认设置，可以保持不变。请参阅下面的图片作为参考。）  

* **为** /usr/src/paperless/consume **设置自定义卷路径**：强烈建议为你的消费文件夹定义一个特定且用户友好的路径，这将使文档管理变得更简单。  

![Configuration Path](https://manage.icewhale.io/api/static/docs/1767274710302_copyImage.png)  

添加以下环境变量。（请参阅下面的图片作为参考。）  

* **PAPERLESS_ADMIN_USER**：将默认值更改为你首选的管理员用户名。  
* **PAPERLESS_ADMIN_PASSWORD**：将默认值更改为你首选的管理员密码。  
* _这些参数将在安装过程中创建你的管理员帐户._  
* **PAPERLESS_CONSUMER_DELETE_ORIGINALS: true**：  
* _此参数启用在文件被处理并吸收到 Paperless-ngx 后，自动删除 /consume 文件夹中的文件。_  
* **PAPERLESS_CONSUMER_RECURSIVE: true**：  
* _此参数启用对 /consume 文件夹中子文件夹及其内容的递归消费。_  
* **PAPERLESS_OCR_CLEAN: clean-final**：  
* **PAPERLESS_OCR_LANGUAGES: <3-letter code for OCR support languages separated by spaces (e.g., eng sin)>**：  
* _这些配置启用 Paperless-ngx 的基本 OCR 功能。然而，特定的 clean-final 设置和所需的 OCR 语言需要在安装后通过 Paperless-ngx 图形用户界面（GUI）进一步启用和配置。_  
* **PAPERLESS_CSRF_TRUSTED_ORIGINS:** _**http://your_server**_ _**address:port**_  
* **PAPERLESS_URL:** _**http://your_server**_ _**address:port**_  
* _这些配置至关重要。不要在 URL 末尾添加斜杠（**/**）。错误地设置这些参数会导致在尝试登录时出现 “Forbidden (403) CSRF verification failed. Request aborted” 错误消息._  
* **注意：** 用你的 Zimaboard 的 IP 地址或主机名替换（例如，192.168.1.100）。用 Paperless-ngx 将使用的端口替换（通常默认为 8000，但你可以在 ZimaOS 应用商店配置中验证这一点）。  

![Confirm path](https://manage.icewhale.io/api/static/docs/1767274711098_copyImage.png)  

保持其他所有设置不变。  

**再次检查：** 在继续之前，仔细检查你的所有设置。一旦你确信所有参数正确，点击 **安装** 按钮。  

### **安装后配置和操作**

安装完成后，登录到你的 Paperless-ngx 界面，并按如下方式配置 OCR 设置：  

1. 导航到 **应用配置** —> **OCR 设置**。  
2. 将 **Clean** 设置为 clean-final。  
3. 启用 **Deskew**。  
4. 将 **Language** 设置为你所需的 OCR 支持语言的 3 字母代码，多个语言之间用加号（+）隔开（例如，eng+sin）。  
5. 点击 **保存**。  

![OCR Settings](https://manage.icewhale.io/api/static/docs/1767274711641_copyImage.png)  

接下来，返回到 ZimaOS 的 **应用仪表盘**，并重启 **Paperless-ngx**。  

![restart](https://manage.icewhale.io/api/static/docs/1767274712173_copyImage.png)  

**重要操作提示：** 每当你向 /consume 文件夹中添加大量文档进行处理时，建议重启 Paperless-ngx。不这样做可能会导致文件权限问题，并妨碍文档处理。或者，你可以直接通过 Paperless-ngx GUI 上传文档，通常不需要重启。  