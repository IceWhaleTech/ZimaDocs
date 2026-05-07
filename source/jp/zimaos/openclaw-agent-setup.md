---
title: OpenClaw のデプロイ方法
description: このガイドでは、CasaOS/ZimaOS デバイスでの OpenClaw のデプロイ、カスタム AI モデルの設定、Telegram ボットのリンク、Web UI を通じた AI の管理・操作方法について説明します。
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## 1. 概要

このチュートリアルでは、CasaOS/ZimaOS を実行しているデバイスに OpenClaw をデプロイし、基本設定を完了させ、Telegram を通じて AI モデルとやり取りできるようにする手順を説明します。Telegram ボットを例として、モデルプロバイダーの設定からボットのペアリングまでの全プロセスをカバーします。

### 1.1 目標

- OpenClaw の初期セットアップを完了する:

- カスタム AI モデルプロバイダーに接続する

- Telegram ボットを作成・リンクして、ダイレクトメッセージで AI とチャットできるようにする

- Web UI を通じて OpenClaw の状態を表示・管理する

### 1.2 環境

- 推奨ハードウェア仕様:
  - 4 GB RAM
  - 20 GB ストレージ

- ソフトウェア：CasaOS v0.4.15 / ZimaOS v1.5.4 (最新)

- ネットワーク：デバイスはインターネットに接続され、Telegram API にアクセス可能である必要があります。安定性のため、有線接続を推奨します。

### 1.3 使用上の注意

- **連続稼働:** OpenClaw は 24/7 の運用を前提に設計されています。ZimaBlade を通気性の良い場所に設置し、安定した周囲温度を保つことで、長期的な信頼性と熱によるパフォーマンス低下を防ぎます。

- **ストレージの拡張:** ZimaBlade の内蔵ストレージは限られています。メモリやログ機能を多用する場合は、会話履歴やアプリケーションデータを保存するための外付けドライブの使用を強く推奨します。

### 1.3 前提条件

- コマンド内の `<ip>` プレースホルダーを置き換えるためのデバイスの IP アドレス
  
  IP の確認方法は、https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade の Step 3 を参照してください。

- AI モデル API キーと基本的な使用方法の理解

- Telegram アカウント

> **注意:** OpenClaw の設定画面では、**スペースバー**でオプションを選択し、**Enter**で確定します。

### 1.4 手順の概要

- CasaOS / ZimaOS のアプリストアから OpenClaw をインストール

- ターミナルを開く — SSH 接続（推奨）または直接ターミナルを使用

- 管理者モードに切り替え: `su` を実行し、デフォルトパスワード `casaos` を入力

- OpenClaw コンテナに入る: `docker exec -it openclaw bash`

- 設定ウィザードを起動: `node /app/dist/index.js config`

- モデルプロバイダーを設定: **Model** を選択 → **custom provider** を選択 → Base URL、API Key、モデル ID を入力

- Telegram チャンネルを設定: **Channels → Configure/link → Telegram** を選択 → BotFather でボットを作成 → トークンを入力 → DM ポリシーを **Pairing**（推奨）に設定

- ペアリング完了: Telegram ボットに `/start` を送信してペアリングコードを取得 → ターミナルで `openclaw pairing approve telegram <pairing-code>` を実行

- Web UI にアクセス: `https://<ip>:24190?token=casaos`

---

## 2. 詳細手順（CasaOS の例）

### 2.1 ターミナルを開く

CasaOS の Web UI から OpenClaw をインストールした後、設定を開始するためにターミナルを開きます。方法は 2 通りあります:

**A. コンピュータから SSH 接続（推奨 — コマンドのコピー＆ペーストが簡単）**

**Terminal** を開き、以下のコマンドを実行:
```bash
   ssh <username>@<ip>
```
例: `ssh casaos@10.0.1.7`
![Terminal showing the SSH command being entered](https://manage.icewhale.io/api/static/docs/1773220372637_image.png)
初めて接続する場合、以下のプロンプトが表示されます:
```
   Are you sure you want to continue connecting (yes/no)?
```
`yes` と入力し Enter を押します。

**B. ZimaBlade で直接入力**

キーボードとモニターを ZimaBlade に接続し、ローカルターミナルを使用します。

---

### 2.2 管理者モードに切り替える

以下のコマンドを実行して Enter を押します:
```bash
   su
```
デフォルトパスワード `casaos` を入力

> 入力中はパスワードは表示されません — 正常です。
> ZimaOS を使用している場合、パスワードは不要です。

![Terminal showing the prompt has switched to the root user](https://manage.icewhale.io/api/static/docs/1773220537700_image.png)

これでシステム設定を変更するための管理者権限を取得しました。

---

### 2.3 設定ウィザードに入る

**ステップ 1 — OpenClaw コンテナに入る:**
```bash
docker exec -it openclaw bash
```
![Terminal prompt changed to root@openclaw:/app](https://manage.icewhale.io/api/static/docs/1773220664655_image.png)

プロンプトが `root@openclaw:/app` に変わったら、コンテナ内に正常に入ったことになります。以降の設定はすべてこのコンテナ内で行う必要があります。誤って退出した場合は、再度このコマンドを実行してください。

**ステップ 2 — 設定ウィザードを起動:**
```bash
node /app/dist/index.js config
```
![The configuration wizard's initial screen](https://manage.icewhale.io/api/static/docs/1773220692606_image.png)

**ステップ 3 — Gateway の実行場所を選択:**

**Where will the Gateway run?** と表示されたら、**Local (this machine)** を選択。
![Local (this machine) highlighted in the selection menu](https://manage.icewhale.io/api/static/docs/1773220726788_image.png)

選択中の項目がハイライトされます。**Enter** を押して確定。

---

### 2.4 モデルの設定

#### 1. プロバイダーを選択

**Select sections to configure** で **Model** を選択
  ![Cursor on the Model option](https://manage.icewhale.io/api/static/docs/1773220763191_image.png)

**Model / auth provider** で **custom provider** を選択
![custom provider highlighted](https://manage.icewhale.io/api/static/docs/1773220810816_image.png)

#### 2. モデルパラメータを入力

**Base URL** を入力 (例: `https://api.openai.com/v1`)
![Base URL input field](https://manage.icewhale.io/api/static/docs/1773220830104_image.png)

**API Key** を入力
  ![API Key input field](https://manage.icewhale.io/api/static/docs/1773220843480_image.png)

**API format** を選択
![API format selection menu](https://manage.icewhale.io/api/static/docs/1773220866935_image.png)

使用する **Model ID** を選択
![Model ID selection list](https://manage.icewhale.io/api/static/docs/1773220891482_image.png)

---

### 2.5 チャンネルの設定（Telegram の例）

#### 1. チャンネル設定を開く

**Select sections to configure** で **Channels** を選択
![Cursor on the Channels option](https://manage.icewhale.io/api/static/docs/1773220923167_image.png)

**Configure / link** を選択
![Channels submenu showing "Telegram: needs token" status](https://manage.icewhale.io/api/static/docs/1773220933540_image.png)

リストから **Telegram** を選択
![Telegram selected in the channel list](https://manage.icewhale.io/api/static/docs/1773220953934_image.png)

#### 2. ボットトークンを取得

Telegram の **@BotFather** と会話を開始し、`/newbot` を送信してボットを作成
BotFather から以下を求められます:

 > **Bot Name:** ボットの表示名
**Username:** `bot` で終わるユニークなハンドル

作成が完了すると、BotFather は **HTTP API Token** を返します
![BotFather conversation](https://manage.icewhale.io/api/static/docs/1773221077004_image.png)

> **このトークンを保存** — 次のステップで使用します。

#### 3. ボットトークンを入力

**Enter Telegram bot token** を選択
![Token input option in the menu](https://manage.icewhale.io/api/static/docs/1773221116186_image.png)

BotFather から受け取ったトークンを貼り付けまたは入力
  ![Token input field](https://manage.icewhale.io/api/static/docs/1773221130505_image.png)

#### 4. DM アクセスポリシーを設定

**Configure DM access policies now? (default: pairing)** と聞かれたら **Yes** を選択
![Policy configuration prompt](https://manage.icewhale.io/api/static/docs/1773221160225_image.png)

**Telegram DM policy** で **Pairing (recommended)** を選択
![Pairing option highlighted](https://manage.icewhale.io/api/static/docs/1773221182974_image.png)

**Select sections to configure** に戻り **Continue (Done)** を選択して Telegram 設定を完了
  ![Continue (Done) option highlighted](https://manage.icewhale.io/api/static/docs/1773221202944_image.png)

#### 5. ペアリングを完了

Telegram でボットのチャットを開き `/start` を送信。ボットがペアリングコードを返信するのを待つ
![Telegram conversation showing the bot's pairing code reply](https://manage.icewhale.io/api/static/docs/1773221237858_image.png)

ターミナルで以下のコマンドを実行（`<your-pairing-code>` を受け取ったコードに置換）:

```bash
   openclaw pairing approve telegram <your-pairing-code>
```

成功メッセージが表示されればペアリング完了。これで Telegram ボットを通じて AI と直接チャットできます。

---

### 2.6 Web インターフェイスにアクセス

設定完了後、ブラウザを開き以下にアクセス:

```
https://<ip>:24190?token=casaos
```

`<ip>` をデバイスの IP アドレスに置換
Web UI を初めて開くと、Gateway ダッシュボードで **“pairing required”** メッセージが表示される場合があります
![](https://manage.icewhale.io/api/static/docs/1778125516229_image.png)
これは新しい OpenClaw バージョンでの想定動作です。Web UI デバイスは最初にコンテナ内から承認する必要があります。

![](https://manage.icewhale.io/api/static/docs/1778125603653_image.png)

#### 1. OpenClaw コンテナに入る
```bash
docker exec -it openclaw bash
```
#### 2. 保留中デバイスの一覧を表示
コンテナ内で:
```bash
node /app/dist/index.js devices list
```
未ペアリングのデバイスがあれば、OpenClaw が request_id を表示
#### 3. デバイスを承認
以下のコマンドを実行し、`<request_id>` を表示された実際の ID に置換:
```bash
node /app/dist/index.js devices approve <request_id>
```
承認が成功したら Web UI を更新して再接続
**“pairing required”** 警告が消え、ダッシュボードが通常通り接続されます
最後に、OpenClaw をお楽しみください！