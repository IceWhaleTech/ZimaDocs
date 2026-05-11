---
title: 如何部署 OpenClaw
description: 本指南介绍如何在 CasaOS/ZimaOS 设备上部署 OpenClaw、配置自定义 AI 模型、关联 Telegram 机器人，以及访问 Web UI 来管理和与 AI 交互。
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## 1. 概述

本教程将指导你在运行 CasaOS/ZimaOS 的设备上部署 OpenClaw，完成基础配置，并通过 Telegram 启用 AI 模型交互。教程以 Telegram 机器人为例，涵盖从模型提供商设置到机器人配对的完整流程。

### 1.1 目标

- 完成 OpenClaw 的初始设置，包括：

- 连接自定义 AI 模型提供商

- 创建并关联 Telegram 机器人，以通过私信实现 AI 聊天

- 通过 Web UI 查看和管理 OpenClaw 状态

### 1.2 环境

- 推荐硬件配置： 
  - 4 GB RAM
  - 20 GB 存储空间

- 软件：CasaOS v0.4.15 / ZimaOS v1.5.4（最新版本）

- 网络：设备必须连接互联网，并能够访问 Telegram API。推荐使用有线网络以获得更稳定的连接。

### 1.3 使用说明

- **持续运行：** OpenClaw 设计为 24/7 持续运行。请将你的 ZimaBlade 放置在通风良好、环境温度稳定的位置，以确保长期稳定运行并防止因过热而降频。

- **存储扩展：** ZimaBlade 的内置存储空间有限。如果你计划大量使用记忆或日志功能，强烈建议连接外部存储设备来保存聊天记录和应用数据。

### 1.3 前置条件

- 你的设备 IP 地址，用于替换命令中的 `<ip>` 占位符。
  
  关于如何查找 IP 地址，请参考 https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade 中的步骤 3。

- 一个 AI 模型 API Key，以及对其基本使用方法的了解。

- 一个 Telegram 账号。

> **注意：** 在 OpenClaw 配置界面中，使用 **空格键** 选择选项，使用 **Enter** 确认。

### 1.4 快速步骤概览

- 从 CasaOS / ZimaOS 应用商店安装 OpenClaw。

- 打开终端 —— 通过 SSH 连接（推荐）或直接使用终端。

- 切换到管理员模式：运行 `su` 并输入默认密码 `casaos`。

- 进入 OpenClaw 容器：`docker exec -it openclaw bash`

- 启动配置向导：`node /app/dist/index.js config`

- 配置模型提供商：选择 **Model**，选择 **custom provider**，然后输入 Base URL、API Key 和模型 ID。

- 配置 Telegram 渠道：选择 **Channels → Configure/link → Telegram**，通过 BotFather 创建机器人，输入 Token，并将 DM 策略设置为 **Pairing**（推荐）。

- 完成配对：在 Telegram 中向你的机器人发送 `/start` 获取配对码，然后在终端中运行 `openclaw pairing approve telegram <pairing-code>`。

- 通过 `https://<ip>:24190?token=casaos` 访问 Web UI。

---

## 2. 详细步骤（以 CasaOS 为例）

### 2.1 打开终端

通过 CasaOS Web UI 安装 OpenClaw 后，打开终端开始配置。你可以通过以下两种方式操作：

**A. 从电脑通过 SSH 连接（推荐 —— 更方便复制粘贴命令）**

请打开 **Terminal**。
运行以下命令：
```bash
   ssh <username>@<ip>
```
   例如：`ssh casaos@10.0.1.7`
   ![显示正在输入 SSH 命令的终端](https://manage.icewhale.io/api/static/docs/1773220372637_image.png)
如果这是你第一次连接，将会看到以下提示：
```
   Are you sure you want to continue connecting (yes/no)?
```
   输入 `yes` 并按 Enter。

**B. 直接在 ZimaBlade 上输入**

将键盘和显示器直接连接到 ZimaBlade，并使用本地终端。

---

### 2.2 切换到管理员模式

运行以下命令并按 Enter：
```bash
   su
```
输入默认密码 `casaos`。

   > 输入密码时不会显示字符 —— 这是正常现象。
> 如果你使用的是 ZimaOS，则无需输入密码。

![显示已切换为 root 用户的终端](https://manage.icewhale.io/api/static/docs/1773220537700_image.png)

现在你已经拥有修改系统设置所需的管理员权限。

---

### 2.3 进入配置向导

**步骤 1 —— 进入 OpenClaw 容器：**
```bash
docker exec -it openclaw bash
```
![终端提示符变为 root@openclaw:/app](https://manage.icewhale.io/api/static/docs/1773220664655_image.png)

当提示符变为 `root@openclaw:/app` 时，表示你已成功进入容器。后续所有配置都必须在该容器内完成。如果你意外退出，只需再次运行此命令。

**步骤 2 —— 启动配置向导：**
```bash
node /app/dist/index.js config
```
![配置向导初始界面](https://manage.icewhale.io/api/static/docs/1773220692606_image.png)


**步骤 3 —— 选择 Gateway 运行位置：**

当出现 **Where will the Gateway run?** 提示时，选择 **Local (this machine)**。
![菜单中高亮显示 Local (this machine)](https://manage.icewhale.io/api/static/docs/1773220726788_image.png)

高亮项即为当前选中的选项。按 **Enter** 确认。

---

### 2.4 配置模型

#### 1. 选择提供商

在 **Select sections to configure** 中，选择 **Model**。
  ![光标位于 Model 选项](https://manage.icewhale.io/api/static/docs/1773220763191_image.png)


在 **Model / auth provider** 中，选择 **custom provider**。
![高亮显示 custom provider](https://manage.icewhale.io/api/static/docs/1773220810816_image.png)

#### 2. 输入模型参数

输入 **Base URL**（例如：`https://api.openai.com/v1`）。
![Base URL 输入框](https://manage.icewhale.io/api/static/docs/1773220830104_image.png)

输入你的 **API Key**。
  ![API Key 输入框](https://manage.icewhale.io/api/static/docs/1773220843480_image.png)

选择 **API format**。
![API format 选择菜单](https://manage.icewhale.io/api/static/docs/1773220866935_image.png)

选择你要使用的 **Model ID**。
![Model ID 选择列表](https://manage.icewhale.io/api/static/docs/1773220891482_image.png)

---

### 2.5 配置渠道（以 Telegram 为例）

#### 1. 打开渠道设置

在 **Select sections to configure** 中，选择 **Channels**。
![光标位于 Channels 选项](https://manage.icewhale.io/api/static/docs/1773220923167_image.png)


选择 **Configure / link**。
![Channels 子菜单显示 “Telegram: needs token” 状态](https://manage.icewhale.io/api/static/docs/1773220933540_image.png)

从列表中选择 **Telegram**。
![在渠道列表中选中 Telegram](https://manage.icewhale.io/api/static/docs/1773220953934_image.png)

#### 2. 获取机器人 Token

在 Telegram 中与 **@BotFather** 开启对话，并发送 `/newbot` 开始创建机器人。
BotFather 会要求你提供：

 > **Bot Name：** 机器人的显示名称  
**Username：** 唯一用户名，必须以 `bot` 结尾

创建完成后，BotFather 会返回一个 **HTTP API Token**
![BotFather 对话界面](https://manage.icewhale.io/api/static/docs/1773221077004_image.png)

> **请保存此 Token** —— 下一步会用到。

#### 3. 输入机器人 Token

选择 **Enter Telegram bot token**。
![菜单中的 Token 输入选项](https://manage.icewhale.io/api/static/docs/1773221116186_image.png)

粘贴或输入你从 BotFather 获取的 Token。
  ![Token 输入框](https://manage.icewhale.io/api/static/docs/1773221130505_image.png)


#### 4. 设置 DM 访问策略

当出现 **Configure DM access policies now? (default: pairing)** 提示时，选择 **Yes**。
![策略配置提示](https://manage.icewhale.io/api/static/docs/1773221160225_image.png)

在 **Telegram DM policy** 中，选择 **Pairing (recommended)**。
![高亮显示 Pairing 选项](https://manage.icewhale.io/api/static/docs/1773221182974_image.png)

返回 **Select sections to configure**，选择 **Continue (Done)** 完成 Telegram 设置。
  ![高亮显示 Continue (Done) 选项](https://manage.icewhale.io/api/static/docs/1773221202944_image.png)

#### 5. 完成配对

在 Telegram 中打开你的机器人聊天窗口并发送 `/start`。等待机器人回复配对码。
![Telegram 对话中显示机器人返回的配对码](https://manage.icewhale.io/api/static/docs/1773221237858_image.png)

在终端中运行以下命令，将 `<your-pairing-code>` 替换为你收到的配对码：

```bash
   openclaw pairing approve telegram <your-pairing-code>
```

当看到成功提示信息时，即表示配对完成。现在你可以直接通过 Telegram 机器人与 AI 聊天。

---

### 2.6 访问 Web 界面

完成配置后，打开浏览器并访问：

```
https://<ip>:24190?token=casaos
```

将 `<ip>` 替换为你的设备 IP 地址。
首次打开 Web UI 时，你可能会在 Gateway 仪表板上看到 **“pairing required”** 提示，而不是直接连接。
![](https://manage.icewhale.io/api/static/docs/1778125516229_image.png)
这是新版 OpenClaw 的预期行为。必须先在容器内部批准 Web UI 设备。

![](https://manage.icewhale.io/api/static/docs/1778125603653_image.png)

#### 1. 进入 OpenClaw 容器
运行：
```bash
docker exec -it openclaw bash
```
#### 2. 查看待批准设备
在容器内运行：
```bash
node /app/dist/index.js devices list
```
如果存在未配对设备，OpenClaw 将显示一个 request_id。
#### 3. 批准设备
运行以下命令，并将 <request_id> 替换为上面显示的实际 ID：
```bash
node /app/dist/index.js devices approve <request_id>
```
批准成功后，刷新 Web UI 页面并重新连接。
**“pairing required”** 警告应会消失，仪表板将正常连接。
最后，尽情享受 OpenClaw 吧！