---
title: 自部署应用
description:
typora-root-url: ..
---
# 理由

**为了满足安装用户自定义应用程序的需求，CasaOS为用户提供了多种安装方式。本文档将帮助您查找更多Docker应用程序，并通过简单的复制即用。建议的搜索网站是**[linuxserver.io](https://www.linuxserver.io/)****

# linuxserver.io

![Linuxserver](/images/Self-Deploying-Applications/application-introduce-linuxserver.png)

如他们的官方网站所述。
我们是一群来自世界各地的志同道合的爱好者，建立并维护互联网上最大的Docker镜像集合，核心理念是自由和开源软件。我们的主要目标是提供易于使用且简化的Docker镜像，以及清晰简明的文档。
**是的，我认为他们做到了这一点！**

# 搜索所需的Docker镜像

**步骤1** 打开LinuxServer并点击 **[’fleet’](https://fleet.linuxserver.io/)**

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet1.png)

**步骤2** 在 **[’fleet’](https://fleet.linuxserver.io/)** 中搜索您想要的应用程序

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet.png)

# 安装应用程序

**示例：** 在CasaOS上安装 **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)** 并使用它

## 什么是 **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)**？

![Appriseapi](/images/Self-Deploying-Applications/applicatin-appriseapi-logo.png)

Apprise允许您向几乎所有当前流行的通知服务发送通知，例如Telegram、Discord、Slack、Amazon SNS、Gotify等。此API提供了一个简单的网关，通过HTTP接口直接访问它。 Apprise API在CasaOS上的安装。

## 搜索Docker CLI
前往Apprise API Hub并复制相应的Docker CLI -apprise-api

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-docker-cli.png)

## 按顺序遵循这些步骤

打开CasaOS并进入用户定义的安装屏幕，粘贴并等待安装。

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps1.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps2.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps3.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps4.png)

## 复制Apprise API Docker CLI 

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps5.png)

## 粘贴Apprise API Docker CLI 

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps6.png)

## 添加Web UI端口

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps7.png)

## 等待安装

这可能需要几分钟

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps8.png)

## 安装成功并可点击使用

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-using-appriseapi.png)

**注意**
自动填充仅帮助您完成部分配置的信息，包括：
- Web UI的端口和路径
- 卷或文件的挂载位置
- 主机的端口映射
- 可选配置项
这些包括但不限于这些情况，仍需由您确认或修改。欢迎在Discord服务器上提出对这项功能的改进建议！

# 结论

以上是 **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)** 的安装方法，其他应用程序同样适用。但请注意：每个应用本身需要特定的条件。

在安装过程中，需要在Docker Hub界面检查几个部分。

**例如**

- 支持的架构
  确定应用程序支持的架构。如果不支持，请检查上面的Tags（包含更新版本的历史）
- 参数：
  容器镜像在运行时使用传递的参数进行限制，一些应用也在此处显示了默认密码。

更多信息——https://docs.linuxserver.io/images/docker-airsonic-advanced#docker-cli-click-here-for-more-info

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)