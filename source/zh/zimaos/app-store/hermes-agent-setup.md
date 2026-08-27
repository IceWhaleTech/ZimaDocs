---
title: 如何配置 Hermes Agent
description: 在 ZimaOS 上配置 Hermes Agent 的分步指南——涵盖自定义模型提供商设置、Telegram 机器人集成以及 Web Dashboard 访问，并提供常见问题排查方法。
type: Docs
author: icewhale123456
tip: Top bar fixed format, do not delete. description is the article description, if not filled, the first paragraph of the content will be extracted
---

## 概述

本教程将指导您在已部署 Hermes Agent 的设备上配置模型服务和消息平台，实现通过 Telegram 与 AI 模型进行交互。以 Telegram 为例，涵盖从模型提供商配置到机器人验证的完整流程。

> **注意：** 在大多数情况下，您可以直接通过 Hermes WebUI 配置模型和消息服务。如果找不到对应选项，请参考本教程在容器终端中完成配置。

### 环境要求
- **硬件：** ZimaBlade / ZimaBoard / ZimaCube
- **软件：** ZimaOS
- **网络：** 设备必须能够访问互联网，并可连接 Telegram API。建议使用有线网络以获得更稳定的连接。

### 目标

完成 Hermes Agent 的初始配置，包括：
- 连接自定义模型提供商
- 创建并绑定 Telegram 机器人，实现与 AI 的私聊交互
- 通过 Web Dashboard 查看和管理 Hermes 状态

### 前置条件
- 主机设备的 IP 地址，用于替换后续命令中的 `<ip>`
- 一个 AI 模型 API Key，并具备基本使用经验
- 一个 Telegram 账号

### 关键步骤

1. 安装 Hermes：在 ZimaOS App Store 中搜索并安装
2. SSH 登录到 ZimaOS 主机并获取 root 权限
3. 以 `hermes` 用户身份进入 Hermes 容器并激活虚拟环境
4. 启动配置向导，选择模型提供商并填写相关参数
5. 配置 Telegram 通道：创建机器人获取 Token，在 Hermes 中填写并设置用户访问权限
6. 在 Telegram 中发送 `/start` 验证配置，确认机器人能够正确响应
7. 访问 Web Dashboard 查看运行状态

## 详细步骤

### SSH 登录到 ZimaOS 主机

建议通过 SSH 登录 ZimaOS 主机，以便复制和粘贴命令。

```bash
ssh <username>@<ip>
```

示例：

```bash
ssh zima@192.168.50.20
```

如果是首次连接，请在确认提示中输入 `yes` 并按 Enter。

### 获取容器执行权限

如果当前用户无法直接执行 Docker 命令进入容器，请先切换到 root：

```bash
sudo -i
```

切换后，终端提示符应显示您已拥有 root 权限。此 root 权限仅用于在 ZimaOS 主机上进入容器。

### 进入 Hermes 容器

以 `hermes` 用户身份进入容器：

```bash
docker exec -it -u hermes hermes bash
```

![终端：进入 Hermes 容器](https://manage.icewhale.io/api/static/docs/1779967418108_image.png)

当终端提示符发生变化后，说明您已进入 Hermes 容器。后续所有配置操作都必须在容器内部执行。如果中途意外退出容器，只需重新执行该命令即可。

激活 Hermes 虚拟环境：

```bash
source /opt/hermes/.venv/bin/activate
```

![终端：激活虚拟环境](https://manage.icewhale.io/api/static/docs/1779967433450_image.png)

激活后，即可在当前 Shell 中直接使用 `hermes` 命令。

### 启动配置向导

在容器中运行：

```bash
hermes setup
```

![终端：hermes setup](https://manage.icewhale.io/api/static/docs/1779967453363_image.png)

选择 **Quick setup** 开始配置。高亮项为当前选中项，按 **Enter** 确认。

### 配置模型服务

1. 选择对应的模型提供商。这里以自定义提供商为例：

![终端：选择模型提供商](https://manage.icewhale.io/api/static/docs/1779967561032_image.png)

2. 输入 **Base URL** 和 **API Key**：

![终端：输入 Base URL 和 API Key](https://manage.icewhale.io/api/static/docs/1779967580671_image.png)

3. 选择 **API 兼容模式**：

![终端：选择 API 兼容模式](https://manage.icewhale.io/api/static/docs/1779967596242_image.png)

4. 选择要使用的模型：

![终端：选择模型](https://manage.icewhale.io/api/static/docs/1779967618229_image.png)

5. 输入上下文长度。可直接按 Enter 自动检测：

![终端：输入上下文长度](https://manage.icewhale.io/api/static/docs/1779967635993_image.png)

6. 设置显示名称：

![终端：设置显示名称](https://manage.icewhale.io/api/static/docs/1779967649446_image.png)

7. 选择终端后端。保持默认设置即可：

![终端：选择终端后端](https://manage.icewhale.io/api/static/docs/1779967667150_image.png)

### 配置消息平台（以 Telegram 为例）

1. 选择在 Hermes 容器终端中配置消息服务，或输入以下命令：

```bash
hermes gateway setup
```

![终端：hermes gateway setup](https://manage.icewhale.io/api/static/docs/1779967687091_image.png)

2. 选择对应的平台：

![终端：选择平台](https://manage.icewhale.io/api/static/docs/1779967700131_image.png)

#### 创建 Telegram 机器人

- 打开 Telegram，搜索并与 **@BotFather** 开始聊天
- 发送 `/newbot`
- 设置显示名称，例如 `Hermes Agent`
- 设置一个以 `bot` 结尾的唯一用户名，例如 `my_zima_hermes_bot`
- 保存 BotFather 返回的 **API Token**

**请妥善保管您的 Bot Token。** 任何拥有此 Token 的人都可以控制您的机器人。

![Telegram：通过 BotFather 创建机器人](https://manage.icewhale.io/api/static/docs/1779967716705_image.png)

#### 获取 Telegram User ID

Hermes 使用数字形式的 Telegram User ID 进行访问控制。向 **@userinfobot** 或 **@get_id_bot** 发送任意消息，并保存返回的数字 User ID。

![Telegram：获取 User ID](https://manage.icewhale.io/api/static/docs/1779967741377_image.png)

#### 输入配置信息

1. 在 Hermes 容器中输入 Telegram Bot Token：

![终端：输入 Bot Token](https://manage.icewhale.io/api/static/docs/1779967757562_image.png)

2. 输入允许访问的 Telegram User ID：

![终端：输入允许访问的 User ID](https://manage.icewhale.io/api/static/docs/1779967777379_image.png)

3. 选择是否允许该 Telegram User ID 访问家庭频道：

![终端：允许访问家庭频道](https://manage.icewhale.io/api/static/docs/1779967831434_image.png)

4. 完成消息平台配置：

![终端：完成消息平台配置](https://manage.icewhale.io/api/static/docs/1779967845729_image.png)

5. Telegram 配置完成后，Hermes 会提示您重启 Gateway。确认提示以使 Gateway 应用最新配置：

![终端：重启 Gateway](https://manage.icewhale.io/api/static/docs/1779967857430_image.png)

#### 群组聊天说明（可选）

Telegram 默认启用隐私模式（Privacy Mode）。在群组中，机器人默认只能看到命令、对其消息的回复以及部分系统消息。

如果 Hermes 在私聊中正常工作，但在群组中没有响应：

- 直接 @ 机器人
- 将机器人提升为群管理员
- 或在 BotFather 中关闭群组隐私模式，然后将机器人移出群组并重新添加

### 使用方法

打开 Telegram，向您的机器人发送 `/start`。随后发送一条普通消息，确认 Hermes 能够正确回复。

![Telegram：与机器人聊天](https://manage.icewhale.io/api/static/docs/1779967878149_image.png)

### 打开 Web Dashboard

在浏览器中访问以下 URL：

```
http://<ip>:9119
```

示例：

```
http://192.168.50.20:9119
```

您可以在 Dashboard 中查看运行状态、检查会话以及修改模型设置。

### 后续重新配置

如果需要再次修改配置，请按照以下步骤操作。

重新进入容器：

```bash
docker exec -it -u hermes hermes bash
```

在容器中激活虚拟环境：

```bash
source /opt/hermes/.venv/bin/activate
```

修改模型配置：

```bash
hermes model
```

修改 Telegram 或其他消息网关：

```bash
hermes gateway setup
```

当 Hermes 提示重启 Gateway 时，请确认提示。完成后退出容器：

```bash
exit
```

---

## 故障排查

### `/opt/data` 权限错误

这通常是因为之前以 root 身份运行 Hermes Gateway，导致 `$HERMES_HOME` 中遗留了归属于 root 的文件。

首先，以 `hermes` 用户身份重新进入容器：

```bash
docker exec -it -u hermes hermes bash
```

如果权限错误仍然存在，请在 ZimaOS Dashboard 中查看 Hermes 日志。仅在需要修复文件所有权时，临时进入 root Shell。

### Telegram 机器人无响应

请先检查 ZimaOS Dashboard 中的 Hermes 日志，然后依次确认以下内容：

- Bot Token 是否正确
- 您的数字 Telegram User ID 是否在允许列表中
- 容器是否能够访问 `api.telegram.org`
- 如果在群组中使用，Privacy Mode 和群组权限是否配置正确