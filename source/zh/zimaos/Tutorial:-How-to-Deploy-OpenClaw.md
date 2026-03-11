---
title: 如何部署 OpenClaw  
description: 本指南解释了如何在 CasaOS/ZimaOS 设备上部署 OpenClaw，配置自定义 AI 模型，链接 Telegram 机器人，并访问 Web UI 以管理和与 AI 互动。  
type: 文档  
author: icewhale123456  
tip: 顶部栏固定格式请勿删除，description 为文章描述，未填写时将截取内容最前一段文字  
---  

## 1. 概述

本教程将指导您如何在运行 CasaOS 的设备上部署 OpenClaw，完成基本配置，并通过 Telegram 启用 AI 模型互动。本教程以 Telegram 机器人为例，涵盖了从模型提供商设置到机器人配对的整个过程。

### 1.1 环境

- 软件：CasaOS v0.4.15 / ZimaOS v1.5.4（最新版本）

- 网络：设备必须连接到互联网，并能够访问 Telegram API。建议使用有线连接以确保稳定。

### 1.2 目标

完成初始 OpenClaw 设置，包括：

- 连接自定义 AI 模型提供商

- 创建并链接 Telegram 机器人，通过直接消息启用 AI 聊天

- 通过 Web UI 查看和管理 OpenClaw 状态

### 1.3 前提条件

- 您设备的 IP 地址，用于替换命令中的 `<ip>` 占位符。

  请参阅 https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade 第 3 步了解如何查找 IP。

- AI 模型 API 密钥及基本使用方法。

- 一个 Telegram 账户。

> **注意：** 在 OpenClaw 配置界面中，使用 **空格键** 选择选项，使用 **回车键** 确认。

### 1.4 快速步骤概览

- 从 CasaOS / ZimaOS 应用商店安装 OpenClaw。

- 打开终端 — 通过 SSH 连接（推荐）或使用 CasaOS 终端。

- 切换到管理员模式：运行 `su` 并输入默认密码 `casaos`。

- 进入 OpenClaw 容器：`docker exec -it openclaw bash`

- 启动配置向导：`node /app/dist/index.js config`

- 配置模型提供商：选择 **Model**，选择 **custom provider**，然后输入基础 URL、API 密钥和模型 ID。

- 配置 Telegram 渠道：选择 **Channels → Configure/link → Telegram**，通过 BotFather 创建一个机器人，输入 Token，并将 DM 策略设置为 **Pairing**（推荐）。

- 完成配对：在 Telegram 里向您的机器人发送 `/start`，收到配对代码后，在终端中运行 `openclaw pairing approve telegram <pairing-code>`。

- 访问 Web UI：`https://<ip>:24190?token=casaos`。

---

## 2. 详细步骤

### 2.1 打开终端

在 CasaOS Web UI 安装 OpenClaw 后，打开终端开始配置。可以通过以下两种方式：

**A. 从计算机 SSH 连接（推荐 — 便于复制粘贴命令）**

按 **Win + X** 打开快速访问菜单，选择 **Terminal**。  
运行以下命令：  
```bash
   ssh <username>@<ip>
```
例如：`ssh casaos@10.0.1.7`  
![终端显示 SSH 命令正在输入](https://manage.icewhale.io/api/static/docs/1773220372637_image.png)  
如果是第一次连接，您会看到提示：  
```
   Are you sure you want to continue connecting (yes/no)?
```
输入 `yes` 并按回车。

**B. 直接在 ZimaBlade 上输入**

将键盘和显示器连接到 ZimaBlade，使用本地终端。

---

### 2.2 切换到管理员模式

运行以下命令并按回车：  
```bash
   su
```
输入默认密码 `casaos`。  
> 密码输入时不会显示，这是正常的。

![终端显示提示已切换到 root 用户](https://manage.icewhale.io/api/static/docs/1773220537700_image.png)

现在，您已获得修改系统设置所需的管理员权限。

---

### 2.3 进入配置向导

**步骤 1 — 进入 OpenClaw 容器：**  
```bash
docker exec -it openclaw bash
```
![终端提示符已切换到 root@openclaw:/app](https://manage.icewhale.io/api/static/docs/1773220664655_image.png)

当提示符变为 `root@openclaw:/app` 时，表示您已成功进入容器。所有后续配置必须在此容器内进行。如果意外退出，只需重新运行此命令。

**步骤 2 — 启动配置向导：**  
```bash
node /app/dist/index.js config
```
![配置向导的初始界面](https://manage.icewhale.io/api/static/docs/1773220692606_image.png)

**步骤 3 — 选择网关位置：**

当提示 **Where will the Gateway run?** 时，选择 **Local (this machine)**。  
![Local (this machine) 在选择菜单中被突出显示](https://manage.icewhale.io/api/static/docs/1773220726788_image.png)

选中的选项会被高亮显示。按 **回车键** 确认。

---

### 2.4 配置模型

#### 1. 选择提供商

在 **Select sections to configure** 中，选择 **Model**。  
![光标指向 Model 选项](https://manage.icewhale.io/api/static/docs/1773220763191_image.png)

在 **Model / auth provider** 中，选择 **custom provider**。  
![custom provider 被突出显示](https://manage.icewhale.io/api/static/docs/1773220810816_image.png)

#### 2. 输入模型参数

输入 **Base URL**（例如 `https://api.openai.com/v1`）。  
![Base URL 输入框](https://manage.icewhale.io/api/static/docs/1773220830104_image.png)

输入您的 **API Key**。  
![API Key 输入框](https://manage.icewhale.io/api/static/docs/1773220843480_image.png)

选择 **API 格式**。  
![API 格式选择菜单](https://manage.icewhale.io/api/static/docs/1773220866935_image.png)

选择您要使用的 **Model ID**。  
![Model ID 选择列表](https://manage.icewhale.io/api/static/docs/1773220891482_image.png)

---

### 2.5 配置频道（以 Telegram 为例）

#### 1. 打开频道设置

在 **Select sections to configure** 中，选择 **Channels**。  
![光标指向 Channels 选项](https://manage.icewhale.io/api/static/docs/1773220923167_image.png)

选择 **Configure / link**。  
![Channels 子菜单显示 "Telegram: needs token" 状态](https://manage.icewhale.io/api/static/docs/1773220933540_image.png)

选择 **Telegram**。  
![在频道列表中选择 Telegram](https://manage.icewhale.io/api/static/docs/1773220953934_image.png)

#### 2. 获取机器人 Token

在 Telegram 中与 **@BotFather** 开始对话并发送 `/newbot` 创建一个新机器人。  
BotFather 会要求您提供：

> **Bot 名称：** 机器人的显示名称  
**用户名：** 必须以 `bot` 结尾的唯一标识符

创建后，BotFather 会返回一个 **HTTP API Token**  
![BotFather 对话](https://manage.icewhale.io/api/static/docs/1773221077004_image.png)

> **保存此 Token** — 您将在下一步中使用它。

#### 3. 输入机器人 Token

选择 **Enter Telegram bot token**。  
![Token 输入选项](https://manage.icewhale.io/api/static/docs/1773221116186_image.png)

粘贴或输入从 BotFather 获取的 Token。  
![Token 输入框](https://manage.icewhale.io/api/static/docs/1773221130505_image.png)

#### 4. 设置 DM 访问策略

当提示 **Configure DM access policies now? (default: pairing)** 时，选择 **Yes**。  
![策略配置提示](https://manage.icewhale.io/api/static/docs/1773221160225_image.png)

在 **Telegram DM policy** 中，选择 **Pairing (recommended)**。  
![Pairing 选项被突出显示](https://manage.icewhale.io/api/static/docs/1773221182974_image.png)

返回到 **Select sections to configure**，选择 **Continue (Done)** 完成 Telegram 设置。  
![Continue (Done) 选项被突出显示](https://manage.icewhale.io/api/static/docs/1773221202944_image.png)

#### 5. 完成配对

打开 Telegram 中机器人对话框并发送 `/start`，等待机器人回复配对代码。  
![Telegram 对话框显示机器人的配对代码回复](https://manage.icewhale.io/api/static/docs/1773221237858_image.png)

在终端中运行以下命令，将 `<your-pairing-code>` 替换为您收到的配对代码：

```bash
   openclaw pairing approve telegram <your-pairing-code>
```

成功消息确认配对完成。现在，您可以通过 Telegram 机器人直接与 AI 聊天。

---

### 2.6 访问 Web 界面

配置完成后，打开浏览器并导航至：

```
https://<ip>:24190?token=casaos
```

将 `<ip>` 替换为您设备的 IP 地址。此页面可以让您查看 OpenClaw 的运行状态、日志和当前配置。

最后，享受 OpenClaw！
