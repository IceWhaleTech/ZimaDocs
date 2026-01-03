---
title: 在ZimaOS上安装Paperless‑AI的全面指南  
description:  
type: Docs  
author: admin  
tip: 顶部栏固定格式请勿删除, description为文章描述，不填时将截取内容最前一段文字  
---  
> _原文发表于IceWhale社区论坛_ _**Muditha Liyanagama**_ _：_ _[https://community.zimaspace.com/](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ai-on-zimaos/7557)_

大家好，ZimaOS和Zimaboard的爱好者们！

虽然ZimaOS社区和Ice‑Whale团队提供了很好的支持，但有时很难找到清晰、详细的安装指南。如果你喜欢简单明了的逐步指导——特别是针对那些小但让人烦恼的技术难题——这篇指南是为你准备的。

这是我关于ZimaOS和Zimaboard系列文章的第三篇。我希望它能让你的设置过程变得更加简单，并节省你的时间。

本指南将讲解如何安装Paperless‑AI，并涵盖了家庭使用所需的所有基本功能，既可以从本地网络访问，也可以通过Tailscale访问。如果你打算通过公共互联网访问Paperless‑AI，可能需要调整一些配置。Paperless‑NGX必须已经安装在同一台机器上，因为Paperless‑AI依赖于它。（如果你还没有设置好，建议先阅读我的[Paperless‑NGX安装指南](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474)）

我是在一台Zimaboard 2上进行的这次安装，硬件和软件配置如下：

• CPU：Intel(R) N150，4核，2.90 GHz，4线程  
• RAM：16 GB 6400 MHz LPDDR5  
• GPU：Intel Alder Lake‑N Graphics  
• 操作系统：ZimaOS v1.5.3 Plus  

让我们开始吧

**第01节：准备修改后的Docker Compose文件**

我参考了官方的Paperless‑AI GitHub页面，并对原始Docker Compose文件进行了若干调整，使其更方便在ZimaOS上使用。将其导入ZimaOS作为自定义应用后，你还需要做一些修改才能开始安装。

以下是你将使用的修改版Docker Compose文件：

    name: paperless-ai
    services:
      paperless-ai:
        cap_drop:
          - ALL
        cpu_shares: 90
        command: []
        container_name: paperless-ai
        deploy:
          resources:
            limits:
              memory: 16508313600
            reservations:
              devices: []
        environment:
          - PAPERLESS_AI_PORT=3000
          - PGID=1000
          - PUID=999
          - RAG_SERVICE_ENABLED=true
          - RAG_SERVICE_URL=http://192.168.68.81:8005
        image: clusterzx/paperless-ai:latest
        labels:
          icon: https://i.imgur.com/LGVPJ8g.png
        ports:
          - target: 3000
            published: "3009"
            protocol: tcp
        restart: unless-stopped
        security_opt:
          - no-new-privileges=true
        volumes:
          - type: bind
            source: /media/Storage/AppData/paperless-ai/app/data
            target: /app/data
          - type: bind
            source: /media/Storage/AppData/paperless-ai/var/lib/paperless-ai
            target: /var/lib/paperless-ai
        devices: []
        cap_add: []
        network_mode: bridge
        privileged: false
    x-casaos:
      author: self
      category: self
      hostname: ""
      icon: https://i.imgur.com/LGVPJ8g.png
      index: /
      is_uncontrolled: false
      port_map: "3009"
      scheme: http
      store_app_id: paperless-ai
      title:
        custom: paperless-ai
        en_us: paperless-ai

**第02节：将自定义应用导入ZimaOS**

1.  登录ZimaOS，点击仪表盘右上角的加号图标。  
2.  选择“安装自定义应用”。  
3.  在弹出窗口中，点击右上角的“导入”按钮。  
4.  会弹出一个新窗口，切换到“Docker Compose”标签，将YAML文件粘贴到文本区域，然后点击“提交”。  
5.  当弹出窗口出现提示或警告时，点击“确定”。  

![安装自定义应用](https://manage.icewhale.io/api/static/docs/1767457548038_copyImage.png)

![导入Compose](https://manage.icewhale.io/api/static/docs/1767457548475_copyImage.png)

![提交](https://manage.icewhale.io/api/static/docs/1767457548976_copyImage.png)

![确认窗口](https://manage.icewhale.io/api/static/docs/1767457549511_copyImage.png)

**第03节：安装前需要编辑的设置**

**Volumes** 设置适当的文件夹路径：/app/data 和 /var/lib/paperless-ai

**环境变量：设置PUID和PGID** 这些值决定了Paperless‑AI将使用的系统权限。如果设置不正确，可能会遇到标记、重命名或文件管理方面的问题，甚至需要重新安装才能解决。要找到正确的PUID和PGID：

1.  打开ZimaOS设置。  
2.  进入常规设置并启用开发者模式。  
3.  打开视图菜单并启用SSH访问。  
4.  启动基于Web的终端，并使用你的ZimaOS用户名和密码登录。  
5.  执行以下命令，将“username”替换为你的实际用户名：id -u username id -g username  
6.  记下输出结果。这些数字就是你的PUID（用户ID）和PGID（组ID）。将它们输入到环境变量中的相应字段。（例如，我的PGID是1000，PUID是999。）

**RAG服务URL** 将RAG_SERVICE_URL更新为你现有Paperless‑NGX安装的URL。配置完成后，点击安装。

![正确配置](https://manage.icewhale.io/api/static/docs/1767457550083_copyImage.png)

**第04节：安装后的配置**

**初始设置**

Paperless‑AI包含一个非常实用的内置设置向导。以下是一些必要的步骤：

1.  启动Paperless‑AI并创建一个管理员账户。  
2.  登录并配置连接设置。  
3.  打开AI配置，选择你喜欢的AI提供商，并输入API密钥。  
4.  为了获得最佳效果，选择“自定义”作为AI提供商，并手动设置Base URL和Model。我测试过OpenAI、Mistral AI和Google Gemini，效果都非常好。  
5.  配置高级设置和提示描述。  
6.  点击保存。如果系统提示你是否自动处理文档，点击“是，继续”。Paperless‑AI将重启并开始分析来自Paperless‑NGX的文档。  

![创建管理员账户](https://manage.icewhale.io/api/static/docs/1767457550603_copyImage.png)

![输入你的API密钥](https://manage.icewhale.io/api/static/docs/1767457551058_copyImage.png)

![设置Base URL和Model](https://manage.icewhale.io/api/static/docs/1767457551609_copyImage.png)

**第05节：文档处理性能**

如果你在Paperless‑NGX中存储了大量文档，初始处理阶段可能会花费一些时间。

_参考：_

*   我在Zimaboard 2上处理了近9,000个文档，整个过程花费了大约3天。尽管时间很长，但系统在后台运行时对CPU和RAM的占用都很轻，运行非常流畅。  

**结论** 通过这种设置，你将拥有一个强大的、私有的AI增强文档系统，在你的Zimaboard上平稳运行。一旦Paperless‑AI配置完成，它将显著提升搜索、标记和文档分析功能，并且一切都在你自己的环境中安全运行。

如果你觉得这篇指南对你有帮助，请给我一些反馈。

祝好运！