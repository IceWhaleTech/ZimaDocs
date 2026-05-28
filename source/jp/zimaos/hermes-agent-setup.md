---
title: Hermes Agent の設定方法
description: ZimaOS 上で Hermes Agent を設定するためのステップバイステップガイド — カスタムモデルプロバイダーの設定、Telegram ボット統合、Web ダッシュボードへのアクセス、および一般的な問題のトラブルシューティングを含みます。
type: Docs
author: icewhale123456
tip: Top bar fixed format, do not delete. description is the article description, if not filled, the first paragraph of the content will be extracted
---

## 概要

このチュートリアルでは、Hermes Agent がデプロイされたデバイス上でモデルサービスとメッセージングプラットフォームを設定し、Telegram 経由で AI モデルと対話できるようにする方法を説明します。Telegram を例として、モデルプロバイダーの設定からボット検証までの完全なワークフローを紹介します。

> **注:** 多くの場合、Hermes WebUI から直接モデルやメッセージングを設定できます。該当するオプションが見つからない場合は、このチュートリアルを参照してコンテナターミナル内で設定を完了してください。

### 環境
- **ハードウェア:** ZimaBlade / ZimaBoard / ZimaCube
- **ソフトウェア:** ZimaOS
- **ネットワーク:** デバイスはインターネットに接続でき、Telegram API にアクセス可能である必要があります。安定性のため、有線接続を推奨します。

### 目的

Hermes Agent の初期設定を完了します。内容は以下の通りです：
- カスタムモデルプロバイダーへの接続
- AI とプライベートチャットするための Telegram ボットの作成と紐付け
- Web ダッシュボード経由での Hermes ステータスの表示と管理

### 前提条件
- ホストデバイスの IP アドレス（後続コマンド内の `<ip>` を置き換えるために使用）
- 基本的な利用方法を理解している AI モデル API Key
- Telegram アカウント

### 主な手順

1. Hermes をインストール：ZimaOS App Store から検索してインストール
2. ZimaOS ホストへ SSH 接続し、root 権限を取得
3. `hermes` ユーザーとして Hermes コンテナに入り、仮想環境を有効化
4. 設定ウィザードを起動し、モデルプロバイダーを選択してパラメータを入力
5. Telegram チャンネルを設定：ボットを作成して Token を取得し、Hermes に入力してユーザーアクセス権限を設定
6. Telegram で `/start` を送信して設定を検証し、ボットが正常に応答することを確認
7. Web ダッシュボードへアクセスして稼働状況を確認

## 詳細手順

### ZimaOS ホストへ SSH 接続

コマンドを簡単にコピー＆ペーストできるため、ZimaOS ホストへの SSH ログインを推奨します。

```bash
ssh <username>@<ip>
```

例：

```bash
ssh zima@192.168.50.20
```

初回接続時には確認プロンプトで `yes` と入力し、Enter を押してください。

### コンテナ実行権限を取得

現在のユーザーで Docker コマンドを直接実行してコンテナへ入れない場合は、まず root に切り替えます：

```bash
sudo -i
```

切り替え後、ターミナルプロンプトに root 権限が表示されます。この root 権限は ZimaOS ホスト上でコンテナへ入るためにのみ使用されます。

### Hermes コンテナへ入る

`hermes` ユーザーとしてコンテナへ入ります：

```bash
docker exec -it -u hermes hermes bash
```

![Terminal: entering Hermes container](https://manage.icewhale.io/api/static/docs/1779967418108_image.png)

ターミナルプロンプトが変わったら、Hermes コンテナに入っています。以降の設定操作はすべてコンテナ内で実行する必要があります。途中で誤ってコンテナを終了した場合は、このコマンドを再実行してください。

Hermes 仮想環境を有効化します：

```bash
source /opt/hermes/.venv/bin/activate
```

![Terminal: activating virtual environment](https://manage.icewhale.io/api/static/docs/1779967433450_image.png)

有効化後、現在のシェルで `hermes` コマンドを直接使用できます。

### 設定ウィザードを起動

コンテナ内で以下を実行します：

```bash
hermes setup
```

![Terminal: hermes setup](https://manage.icewhale.io/api/static/docs/1779967453363_image.png)

設定を開始するには **Quick setup** を選択します。ハイライトされた項目が現在選択されているオプションです。**Enter** を押して確定します。

### モデルサービスを設定

1. 対応するモデルプロバイダーを選択します。ここではカスタムプロバイダーを例として使用します：
![Terminal: selecting model provider](https://manage.icewhale.io/api/static/docs/1779967561032_image.png)

2. **Base URL** と **API Key** を入力します：
![Terminal: entering Base URL and API Key](https://manage.icewhale.io/api/static/docs/1779967580671_image.png)

3. **API compatibility mode** を選択します：
![Terminal: selecting API compatibility mode](https://manage.icewhale.io/api/static/docs/1779967596242_image.png)

4. 使用したいモデルを選択します：
![Terminal: selecting model](https://manage.icewhale.io/api/static/docs/1779967618229_image.png)

5. コンテキスト長を入力します。自動検出する場合はそのまま Enter を押します：
![Terminal: entering context length](https://manage.icewhale.io/api/static/docs/1779967635993_image.png)

6. 表示名を設定します：
![Terminal: setting display name](https://manage.icewhale.io/api/static/docs/1779967649446_image.png)

7. ターミナルバックエンドを選択します。デフォルト設定のままで問題ありません：
![Terminal: choosing terminal backend](https://manage.icewhale.io/api/static/docs/1779967667150_image.png)

### メッセージングプラットフォームを設定（Telegram の例）

1. Hermes コンテナターミナルでメッセージング設定を選択するか、以下のコマンドを入力します：

```bash
hermes gateway setup
```

![Terminal: hermes gateway setup](https://manage.icewhale.io/api/static/docs/1779967687091_image.png)

2. 対応する Platform を選択します：
![Terminal: selecting platform](https://manage.icewhale.io/api/static/docs/1779967700131_image.png)

#### Telegram ボットを作成

- Telegram を開き、**@BotFather** を検索してチャットを開始
- `/newbot` を送信
- 表示名を設定（例：`Hermes Agent`）
- `bot` で終わる一意のユーザー名を設定（例：`my_zima_hermes_bot`）
- BotFather が返した **API Token** を保存

**Bot Token は安全に保管してください。** このトークンを知っている人は誰でもボットを操作できます。
![Telegram: BotFather creating a bot](https://manage.icewhale.io/api/static/docs/1779967716705_image.png)

#### Telegram User ID を取得

Hermes はアクセス制御に数値の Telegram User ID を使用します。**@userinfobot** または **@get_id_bot** に任意のメッセージを送信し、返された数値 User ID を保存してください。
![Telegram: getting user ID](https://manage.icewhale.io/api/static/docs/1779967741377_image.png)

#### 設定詳細を入力

1. Hermes コンテナに Telegram Bot Token を入力します：
![Terminal: entering bot token](https://manage.icewhale.io/api/static/docs/1779967757562_image.png)

2. アクセスを許可する Telegram User ID を入力します：
![Terminal: entering allowed user IDs](https://manage.icewhale.io/api/static/docs/1779967777379_image.png)

3. この Telegram User ID にホームチャンネルへのアクセスを許可するか選択します：
![Terminal: allowing home channel access](https://manage.icewhale.io/api/static/docs/1779967831434_image.png)

4. メッセージングプラットフォーム設定を完了します：
![Terminal: completing messaging setup](https://manage.icewhale.io/api/static/docs/1779967845729_image.png)

5. Telegram 設定完了後、Hermes は Gateway の再起動を求めます。確認して Gateway に最新設定を適用させます：
![Terminal: restarting gateway](https://manage.icewhale.io/api/static/docs/1779967857430_image.png)

#### グループチャットに関する注意（任意）

Telegram Privacy Mode はデフォルトで有効になっています。グループ内では、ボットは通常、コマンド、自分宛ての返信、一部のシステムメッセージのみを見ることができます。

Hermes がプライベートチャットでは動作するが、グループで応答しない場合：
- ボットを直接 @メンションする
- ボットをグループ管理者に昇格させる
- または BotFather でグループプライバシーモードを無効化し、その後ボットをグループから削除して再追加する

### 使用方法

Telegram を開き、ボットに `/start` を送信します。その後通常のメッセージを送信し、Hermes が正常に応答することを確認してください。
![Telegram: chatting with bot](https://manage.icewhale.io/api/static/docs/1779967878149_image.png)

### Web ダッシュボードを開く

ブラウザで以下の URL にアクセスします：

```
http://<ip>:9119
```

例：

```
http://192.168.50.20:9119
```

Dashboard では、稼働状況の確認、セッションの検査、モデル設定の変更が可能です。

### 後から再設定する

再度設定を変更するには、以下の手順に従ってください。

再度コンテナへ入ります：

```bash
docker exec -it -u hermes hermes bash
```

コンテナ内で仮想環境を有効化します：

```bash
source /opt/hermes/.venv/bin/activate
```

モデルを変更：

```bash
hermes model
```

Telegram またはその他のメッセージングゲートウェイを変更：

```bash
hermes gateway setup
```

Hermes が Gateway の再起動を求めたら確認してください。完了後はコンテナを終了します：

```bash
exit
```

---

## トラブルシューティング

### `/opt/data` 権限エラー

これは通常、以前に root として Hermes Gateway を実行したことが原因で、`$HERMES_HOME` に root 所有のファイルが残っている場合に発生します。

まず、`hermes` ユーザーとして再度コンテナへ入ります：

```bash
docker exec -it -u hermes hermes bash
```

権限エラーが続く場合は、ZimaOS Dashboard で Hermes ログを確認してください。ファイル所有権を修正する必要がある場合のみ、一時的に root シェルへ入ってください。

### Telegram ボットが応答しない

ZimaOS Dashboard で Hermes ログを確認し、その後以下を順番に確認してください：
- Bot Token が正しい
- 数値の Telegram User ID が許可リストに含まれている
- コンテナが `api.telegram.org` にアクセスできる
- グループで使用している場合、Privacy Mode とグループ権限が正しく設定されている