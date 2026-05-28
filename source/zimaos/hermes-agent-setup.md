---
title: How to Configure Hermes Agent
description: Step-by-step guide for configuring Hermes Agent on ZimaOS — covers custom model provider setup, Telegram bot integration, and Web Dashboard access, with troubleshooting for common issues.
type: Docs
author: icewhale123456
tip: Top bar fixed format, do not delete. description is the article description, if not filled, the first paragraph of the content will be extracted
---

## Overview

This tutorial guides you through configuring model services and messaging platforms on a device with Hermes Agent deployed, enabling AI model interaction via Telegram. Using Telegram as an example, it covers the complete workflow from model provider configuration to bot verification.

> **Note:** In most cases, you can configure models and messaging directly through the Hermes WebUI. If the corresponding options are not found, refer to this tutorial to complete the configuration in the container terminal.

### Environment
- **Hardware:** ZimaBlade / ZimaBoard / ZimaCube
- **Software:** ZimaOS
- **Network:** The device must have internet access and be able to reach the Telegram API. A wired connection is recommended for stability.

### Objectives

Complete the initial setup of Hermes Agent, including:
- Connecting a custom model provider
- Creating and binding a Telegram bot for private chat with AI
- Viewing and managing Hermes status via the Web Dashboard

### Prerequisites
- The host device's IP address, used to replace `<ip>` in subsequent commands
- An AI model API Key with basic familiarity in using it
- A Telegram account

### Key Steps

1. Install Hermes: Search and install from the ZimaOS App Store
2. SSH into the ZimaOS host and obtain root privileges
3. Enter the Hermes container as the `hermes` user and activate the virtual environment
4. Launch the configuration wizard, select a model provider, and fill in the parameters
5. Configure the Telegram channel: create a bot to obtain a Token, enter it in Hermes, and set user access permissions
6. Send `/start` in Telegram to verify the configuration and confirm the bot responds correctly
7. Access the Web Dashboard to view the running status

## Detailed Steps

### SSH into the ZimaOS Host

SSH login to the ZimaOS host is recommended for easy copy and paste of commands.

```bash
ssh <username>@<ip>
```

Example:

```bash
ssh zima@192.168.50.20
```

If this is your first connection, type `yes` at the confirmation prompt and press Enter.

### Obtain Container Execution Privileges

If the current user cannot directly execute Docker commands to enter the container, switch to root first:

```bash
sudo -i
```

After switching, the terminal prompt should indicate that you have root privileges. These root privileges are only used for entering containers on the ZimaOS host.

### Enter the Hermes Container

Enter the container as the `hermes` user:

```bash
docker exec -it -u hermes hermes bash
```

![Terminal: entering Hermes container](https://manage.icewhale.io/api/static/docs/1779967418108_image.png)


Once the terminal prompt changes, you have entered the Hermes container. All subsequent configuration operations must be performed inside the container. If you accidentally exit the container midway, simply re-run this command.

Activate the Hermes virtual environment:

```bash
source /opt/hermes/.venv/bin/activate
```
![Terminal: activating virtual environment](https://manage.icewhale.io/api/static/docs/1779967433450_image.png)

After activation, the `hermes` command can be used directly in the current shell.

### Launch the Configuration Wizard

Run inside the container:

```bash
hermes setup
```
![Terminal: hermes setup](https://manage.icewhale.io/api/static/docs/1779967453363_image.png)


Select **Quick setup** to begin configuration. The highlighted item is the currently selected option; press **Enter** to confirm.

### Configure the Model Service

1. Select the corresponding model provider. A custom provider is used here as an example:
![Terminal: selecting model provider](https://manage.icewhale.io/api/static/docs/1779967561032_image.png)


2. Enter the **Base URL** and **API Key**:
![Terminal: entering Base URL and API Key](https://manage.icewhale.io/api/static/docs/1779967580671_image.png)

3. Choose the **API compatibility mode**:
![Terminal: selecting API compatibility mode](https://manage.icewhale.io/api/static/docs/1779967596242_image.png)

4. Select the model you want to use:
![Terminal: selecting model](https://manage.icewhale.io/api/static/docs/1779967618229_image.png)

5. Enter the context length. You can press Enter directly for auto-detection:
![Terminal: entering context length](https://manage.icewhale.io/api/static/docs/1779967635993_image.png)

6. Set the display name:
![Terminal: setting display name](https://manage.icewhale.io/api/static/docs/1779967649446_image.png)

7. Choose the terminal backend. The default setting is fine:
![Terminal: choosing terminal backend](https://manage.icewhale.io/api/static/docs/1779967667150_image.png)

### Configure Messaging Platform (Telegram Example)

1. Choose to configure messaging in the Hermes container terminal, or enter the following command:

```bash
hermes gateway setup
```
![Terminal: hermes gateway setup](https://manage.icewhale.io/api/static/docs/1779967687091_image.png)

2. Select the corresponding Platform:
![Terminal: selecting platform](https://manage.icewhale.io/api/static/docs/1779967700131_image.png)

#### Create a Telegram Bot

- Open Telegram, search for and start a chat with **@BotFather**
- Send `/newbot`
- Set a display name, e.g. `Hermes Agent`
- Set a unique username ending with `bot`, e.g. `my_zima_hermes_bot`
- Save the **API Token** returned by BotFather

**Keep your Bot Token safe.** Anyone with this token can control your bot.
![Telegram: BotFather creating a bot](https://manage.icewhale.io/api/static/docs/1779967716705_image.png)

#### Get Your Telegram User ID

Hermes uses a numeric Telegram User ID for access control. Send any message to **@userinfobot** or **@get_id_bot** and save the numeric User ID returned.
![Telegram: getting user ID](https://manage.icewhale.io/api/static/docs/1779967741377_image.png)

#### Enter Configuration Details

1. Enter the Telegram Bot Token in the Hermes container:
![Terminal: entering bot token](https://manage.icewhale.io/api/static/docs/1779967757562_image.png)

2. Enter the Telegram User IDs allowed to access:
![Terminal: entering allowed user IDs](https://manage.icewhale.io/api/static/docs/1779967777379_image.png)

3. Choose to allow this Telegram User ID to access the home channel:
![Terminal: allowing home channel access](https://manage.icewhale.io/api/static/docs/1779967831434_image.png)

4. Complete the Messaging Platform configuration:
![Terminal: completing messaging setup](https://manage.icewhale.io/api/static/docs/1779967845729_image.png)

5. After Telegram setup is complete, Hermes will prompt you to restart the Gateway. Confirm the prompt to let the Gateway apply the latest configuration:
![Terminal: restarting gateway](https://manage.icewhale.io/api/static/docs/1779967857430_image.png)

#### Group Chat Notes (Optional)

Telegram Privacy Mode is enabled by default. In groups, the bot can only see commands, replies to its messages, and certain system messages by default.

If Hermes works in private chat but does not respond in groups:
- Directly @ the bot
- Promote the bot to group admin
- Or disable group privacy mode in BotFather, then remove and re-add the bot to the group

### Usage

Open Telegram and send `/start` to your bot. Then send a regular message to confirm Hermes replies correctly.
![Telegram: chatting with bot](https://manage.icewhale.io/api/static/docs/1779967878149_image.png)

### Open the Web Dashboard

Access the following URL in your browser:

```
http://<ip>:9119
```

Example:

```
http://192.168.50.20:9119
```

From the Dashboard you can view the running status, inspect sessions, and modify model settings.

### Reconfiguring Later

To modify the configuration again, follow the steps below.

Enter the container again:

```bash
docker exec -it -u hermes hermes bash
```

Activate the virtual environment inside the container:

```bash
source /opt/hermes/.venv/bin/activate
```

Modify the model:

```bash
hermes model
```

Modify Telegram or other messaging gateways:

```bash
hermes gateway setup
```

When Hermes prompts you to restart the Gateway, confirm the prompt. Exit the container when done:

```bash
exit
```

---

## Troubleshooting

### `/opt/data` Permission Error

This is usually caused by running Hermes Gateway as root previously, which left root-owned files in `$HERMES_HOME`.

First, re-enter the container as the `hermes` user:

```bash
docker exec -it -u hermes hermes bash
```

If the permission error persists, check the Hermes logs in the ZimaOS Dashboard. Only temporarily enter a root shell when you need to fix file ownership.

### Telegram Bot Not Responding

Check the Hermes logs in the ZimaOS Dashboard, then verify the following in order:
- The Bot Token is correct
- Your numeric Telegram User ID is in the allowlist
- The container can reach `api.telegram.org`
- If using in a group, Privacy Mode and group permissions are configured correctly
