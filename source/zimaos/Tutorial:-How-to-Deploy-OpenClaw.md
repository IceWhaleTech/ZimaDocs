---
title: How to Deploy OpenClaw
description: This guide explains deploying OpenClaw on CasaOS/ZimaOS devices, configuring a custom AI model, linking a Telegram bot, and accessing the Web UI to manage and interact with the AI.
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 1. Overview

This tutorial guides you through deploying OpenClaw on a device running CasaOS, completing the basic configuration, and enabling AI model interaction via Telegram. Using a Telegram bot as the example, this tutorial covers the entire process from model provider setup to bot pairing.

### 1.1 Environment

- Software：CasaOS v0.4.15 / ZimaOS v1.5.4 (latest)

- Network：Must  The device must be connected to the internet and able to reach the Telegram API. A wired connection is recommended for stability.

### 1.2 Goals

Complete the initial OpenClaw setup, including:

- Connecting a custom AI model provider

- Creating and linking a Telegram bot to enable AI chat via direct messages

- Viewing and managing OpenClaw status through the Web UI
### 1.3 Usage Notes

- **Continuous Operation:** OpenClaw is designed to run 24/7. Place your ZimaBlade in a well-ventilated area with a stable ambient temperature to ensure reliable long-term performance and prevent thermal throttling.

- **Storage Expansion:** The ZimaBlade's built-in storage is limited. If you plan to use memory or logging features extensively, it is strongly recommended to attach an external drive for storing conversation history and application data.

### 1.3 Prerequisites

- Your device's IP address, used to replace the `<ip>` placeholder in commands.
  
  See Step 3 at https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade for how to find it.

- An AI model API Key and basic familiarity with how to use it.

- A Telegram account.

> **Note:** In the OpenClaw configuration interface, use the **Space bar** to select an option and **Enter** to confirm.

### 1.4 Steps at a Glance

- Install OpenClaw from the CasaOS / ZimaOS App Store.

- Open a terminal — connect via SSH (recommended) or use the CasaOS terminal.

- Switch to administrator mode: run `su` and enter the default password `casaos`.

- Enter the OpenClaw container: `docker exec -it openclaw bash`

- Launch the configuration wizard: `node /app/dist/index.js config`

- Configure the model provider: select **Model**, choose **custom provider**, then enter the Base URL, API Key, and model ID.

- Configure the Telegram channel: select **Channels → Configure/link → Telegram**, create a bot via BotFather, enter the Token, and set the DM policy to **Pairing** (recommended).

- Complete pairing: send `/start` to your bot in Telegram to receive a pairing code, then run `openclaw pairing approve telegram <pairing-code>` in the terminal.

- Access the Web UI at `https://<ip>:24190?token=casaos`.

---

## 2. Detailed Steps

### 2.1 Open a Terminal

After installing OpenClaw via the CasaOS Web UI, open a terminal to begin configuration. There are two ways to do this:

**A. SSH from your computer (recommended — easier to copy and paste commands)**

Press **Win + X** on your computer to open the quick-access menu and select **Terminal**.
Run the following command:
```bash
   ssh <username>@<ip>
```
   For example: `ssh casaos@10.0.1.7`
   ![Terminal showing the SSH command being entered](https://manage.icewhale.io/api/static/docs/1773220372637_image.png)
If this is your first time connecting, you will see the prompt:
```
   Are you sure you want to continue connecting (yes/no)?
```
   Type `yes` and press Enter.

**B. Input directly on ZimaBlade**

Connect a keyboard and monitor directly to the ZimaBlade and use the local terminal.

---

### 2.2 Switch to Administrator Mode

Run the following command and press Enter:
```bash
   su
```
Enter the default password `casaos`.
   > The password will not be displayed as you type — this is normal.

![Terminal showing the prompt has switched to the root user](https://manage.icewhale.io/api/static/docs/1773220537700_image.png)

You now have the administrator privileges required to modify system settings.

---

### 2.3 Enter the Configuration Wizard

**Step 1 — Enter the OpenClaw container:**
```bash
docker exec -it openclaw bash
```
![Terminal prompt changed to root@openclaw:/app](https://manage.icewhale.io/api/static/docs/1773220664655_image.png)

When the prompt changes to `root@openclaw:/app`, you have successfully entered the container. All subsequent configuration must be performed from within this container. If you accidentally exit, simply run this command again.

**Step 2 — Launch the configuration wizard:**
```bash
node /app/dist/index.js config
```
![The configuration wizard's initial screen](https://manage.icewhale.io/api/static/docs/1773220692606_image.png)


**Step 3 — Select the Gateway location:**

When prompted with **Where will the Gateway run?**, select **Local (this machine)**.
![Local (this machine) highlighted in the selection menu](https://manage.icewhale.io/api/static/docs/1773220726788_image.png)

The highlighted option is the currently selected one. Press **Enter** to confirm.

---

### 2.4 Configure the Model

#### 1. Select a Provider

In **Select sections to configure**, choose **Model**.
  ![Cursor on the Model option](https://manage.icewhale.io/api/static/docs/1773220763191_image.png)


In **Model / auth provider**, select **custom provider**.
![custom provider highlighted](https://manage.icewhale.io/api/static/docs/1773220810816_image.png)

#### 2. Enter Model Parameters

Enter the **Base URL** (e.g., `https://api.openai.com/v1`).
![Base URL input field](https://manage.icewhale.io/api/static/docs/1773220830104_image.png)

Enter your **API Key**.
  ![API Key input field](https://manage.icewhale.io/api/static/docs/1773220843480_image.png)

Select the **API format**.
![API format selection menu](https://manage.icewhale.io/api/static/docs/1773220866935_image.png)

Select the **Model ID** you want to use.
![Model ID selection list](https://manage.icewhale.io/api/static/docs/1773220891482_image.png)

---

### 2.5 Configure a Channel (Telegram Example)

#### 1. Open Channel Settings

In **Select sections to configure**, choose **Channels**.
![Cursor on the Channels option](https://manage.icewhale.io/api/static/docs/1773220923167_image.png)


Select **Configure / link**.
![Channels submenu showing "Telegram: needs token" status](https://manage.icewhale.io/api/static/docs/1773220933540_image.png)

Select **Telegram** from the list.
![Telegram selected in the channel list](https://manage.icewhale.io/api/static/docs/1773220953934_image.png)

#### 2. Get a Bot Token

Open a conversation with **@BotFather** on Telegram and send `/newbot` to start creating a bot.
BotFather will ask you to provide:

 > **Bot Name:** The display name for your bot
**Username:** A unique handle that must end in `bot` 

Once created, BotFather will return an **HTTP API Token** 
![BotFather conversation](https://manage.icewhale.io/api/static/docs/1773221077004_image.png)

> **Save this Token** — you will need it in the next step.

#### 3. Enter the Bot Token

Select **Enter Telegram bot token**.
![Token input option in the menu](https://manage.icewhale.io/api/static/docs/1773221116186_image.png)

Paste or type the Token you received from BotFather.
  ![Token input field](https://manage.icewhale.io/api/static/docs/1773221130505_image.png)


#### 4. Set the DM Access Policy

When asked **Configure DM access policies now? (default: pairing)**, select **Yes**.
![Policy configuration prompt](https://manage.icewhale.io/api/static/docs/1773221160225_image.png)

In **Telegram DM policy**, select **Pairing (recommended)**.
![Pairing option highlighted](https://manage.icewhale.io/api/static/docs/1773221182974_image.png)

Return to **Select sections to configure** and choose **Continue (Done)** to finish the Telegram setup.
  ![Continue (Done) option highlighted](https://manage.icewhale.io/api/static/docs/1773221202944_image.png)

#### 5. Complete Pairing

Open your bot's chat in Telegram and send `/start`. Wait for the bot to reply with a pairing code.
![Telegram conversation showing the bot's pairing code reply](https://manage.icewhale.io/api/static/docs/1773221237858_image.png)

In the terminal, run the following command, replacing `<your-pairing-code>` with the code you received:

```bash
   openclaw pairing approve telegram <your-pairing-code>
```

A success message confirms that pairing is complete. You can now chat with the AI directly through your Telegram bot.

---

### 2.6 Access the Web Interface

Once configuration is complete, open a browser and navigate to:

```
https://<ip>:24190?token=casaos
```

Replace `<ip>` with your device's IP address. This page lets you view OpenClaw's running status, logs, and current configuration.

Finally, enjoy OpenClaw!