---
title: OpenClawのデプロイ方法
description: このガイドでは、CasaOS/ZimaOSデバイスでのOpenClawのデプロイ方法、カスタムAIモデルの設定、Telegramボットの連携、およびWeb UIを通じたAIの管理と操作方法について説明します。
type: Docs
author: icewhale123456
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明です。未記入の場合は内容の最初の段落が使用されます。
---
## 1. 概要

このチュートリアルでは、CasaOSを実行しているデバイスにOpenClawをデプロイし、基本設定を完了し、Telegramを介してAIモデルと対話できるようにする方法を案内します。Telegramボットを例として、モデルプロバイダーの設定からボットのペアリングまでの全工程をカバーします。

### 1.1 環境

- ソフトウェア：CasaOS v0.4.15 / ZimaOS v1.5.4（最新）

- ネットワーク：デバイスはインターネットに接続され、Telegram APIにアクセスできる必要があります。安定性のため、有線接続を推奨します。

### 1.2 目標

OpenClawの初期セットアップを完了します。内容は以下の通りです：

- カスタムAIモデルプロバイダーの接続

- Telegramボットを作成・連携して直接メッセージでAIとチャット可能にする

- Web UIを通じてOpenClawの状態を確認・管理

### 1.3 前提条件

- デバイスのIPアドレス（コマンド内の `<ip>` プレースホルダーを置き換えるために使用）
  
  確認方法は https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade のStep 3を参照。

- AIモデルのAPIキーと基本的な使用方法の理解

- Telegramアカウント

> **注意:** OpenClaw設定画面では、**スペースバー**で選択し、**Enter**で確定します。

### 1.4 手順概要

- CasaOS / ZimaOSのアプリストアからOpenClawをインストール

- ターミナルを開く — SSH接続（推奨）またはCasaOSターミナルを使用

- 管理者モードに切り替え：`su` を実行し、デフォルトパスワード `casaos` を入力

- OpenClawコンテナに入る：`docker exec -it openclaw bash`

- 設定ウィザードを起動：`node /app/dist/index.js config`

- モデルプロバイダーを設定：**Model** を選択、**custom provider** を選び、Base URL、APIキー、モデルIDを入力

- Telegramチャンネルを設定：**Channels → Configure/link → Telegram** を選択、BotFatherでボットを作成、Tokenを入力し、DMポリシーを **Pairing** に設定（推奨）

- ペアリング完了：Telegramでボットに `/start` を送信してペアリングコードを取得し、ターミナルで `openclaw pairing approve telegram <pairing-code>` を実行

- Web UI にアクセス：`https://<ip>:24190?token=casaos`

---

## 2. 詳細手順

### 2.1 ターミナルを開く

CasaOS Web UIからOpenClawをインストール後、設定を開始するためにターミナルを開きます。方法は2つあります：

**A. コンピュータからSSH接続（推奨 — コマンドのコピー＆ペーストが簡単）**

コンピュータで **Win + X** を押してクイックアクセスメニューを開き、**ターミナル** を選択。
次のコマンドを実行：
```bash
ssh <username>@<ip>
```
例：`ssh casaos@10.0.1.7`
初回接続時には以下のプロンプトが表示されます：
```
Are you sure you want to continue connecting (yes/no)?
```
`yes` と入力して Enter を押します。

**B. ZimaBladeで直接入力**

キーボードとモニターをZimaBladeに接続し、ローカルターミナルを使用。

---

### 2.2 管理者モードに切り替え

次のコマンドを実行して Enter：
```bash
su
```
デフォルトパスワード `casaos` を入力。
> 入力中はパスワードが表示されません — 正常です。

これでシステム設定を変更する管理者権限が得られます。

---

### 2.3 設定ウィザードに入る

**ステップ1 — OpenClawコンテナに入る：**
```bash
docker exec -it openclaw bash
```

プロンプトが `root@openclaw:/app` に変われば、コンテナに正常に入りました。以降の設定はこのコンテナ内で行います。誤って終了しても、このコマンドを再度実行すれば再度入れます。

**ステップ2 — 設定ウィザードを起動：**
```bash
node /app/dist/index.js config
```

**ステップ3 — ゲートウェイの場所を選択：**

`Where will the Gateway run?` と表示されたら **Local (this machine)** を選択。
選択中の項目がハイライト表示されます。 **Enter** で確定。

---

### 2.4 モデルの設定

#### 1. プロバイダーを選択

`Select sections to configure` で **Model** を選択。

`Model / auth provider` で **custom provider** を選択。

#### 2. モデルパラメータを入力

**Base URL** を入力（例：`https://api.openai.com/v1`）。

**API Key** を入力。

**API形式** を選択。

使用する **Model ID** を選択。

---

### 2.5 チャンネルの設定（Telegram例）

#### 1. チャンネル設定を開く

`Select sections to configure` で **Channels** を選択。

**Configure / link** を選択。

リストから **Telegram** を選択。

#### 2. ボットトークンを取得

Telegramで **@BotFather** と会話し、`/newbot` を送信してボット作成を開始。
BotFatherは以下を求めます：

 > **Bot Name:** ボットの表示名
**Username:** `bot` で終わる一意のハンドル名

作成後、BotFatherが **HTTP API Token** を返します。

> このTokenを保存してください — 次のステップで使用します。

#### 3. ボットトークンを入力

**Enter Telegram bot token** を選択。

BotFatherから受け取ったTokenを貼り付けまたは入力。

#### 4. DMアクセスポリシーを設定

`Configure DM access policies now? (default: pairing)` の質問に **Yes** を選択。

`Telegram DM policy` で **Pairing (recommended)** を選択。

`Select sections to configure` に戻り **Continue (Done)** を選択してTelegram設定を完了。

#### 5. ペアリングを完了

Telegramでボットのチャットを開き `/start` を送信。ボットからのペアリングコードを待つ。

ターミナルで以下を実行（ `<your-pairing-code>` を取得したコードに置き換え）：
```bash
openclaw pairing approve telegram <your-pairing-code>
```

成功メッセージが表示されればペアリング完了。Telegramボットを通じてAIと直接チャット可能になります。

---

### 2.6 Webインターフェースにアクセス

設定完了後、ブラウザで以下にアクセス：
```
https://<ip>:24190?token=casaos
```

`<ip>` をデバイスのIPアドレスに置き換えます。このページでOpenClawの稼働状況、ログ、現在の設定を確認可能です。

これでOpenClawをお楽しみください！