---
title: ZimaOS でローカル AI エージェントを動かす
seo_title: "ZimaOS のローカル AI エージェント：DeepSeek Harness をローカル LLM サーバーに接続する"
description: "ZimaOS 上のローカル LLM サーバーに DeepSeek Harness を接続し、初めての完全ローカルタスクを始めましょう——データ処理、自動化、スマートホーム監視をクラウドなしで。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

NAS の上で 2 つのパーツが動いています：[DeepSeek Harness](./app-store/deepseek-harness-setup "ZimaOS アプリストアから DeepSeek Harness をインストールして最初のワークスペースを作成")（コーディングエージェント）と、65〜70 tokens/s で応答する[ローカル LLM サーバー](./local-llm-inference "検証済み35B MoE構成でZimaOS NAS上にプライベートAIを実行する")です。このガイドでは両者を接続し、初めての完全ローカルタスクを開始します。

その時点から、エージェントに API 料金もレート制限もなく、データが家の外に出ることもありません。データ処理、自動化、スマートホーム監視——好きなだけタスクを、自分のハードウェアの上で 24 時間動かせます。

## はじめる前に

- 稼働中のローカル LLM サーバー。まだない場合は、[ZimaOS でローカル LLM 推論をデプロイする](./local-llm-inference "検証済み35B MoE構成でZimaOS NAS上にプライベートAIを実行する")が 5 ステップで立ち上げます。
- DeepSeek Harness がインストール済みで、ワークスペースを作成済みであること——[DeepSeek Harness のデプロイ](./app-store/deepseek-harness-setup "ZimaOS アプリストアから DeepSeek Harness をインストールして最初のワークスペースを作成")をご覧ください。
- NAS の IP アドレスとサーバーポート。通常は `8080` です。

## エージェントをローカルサーバーに接続する

1. DeepSeek Harness を開き、**Settings > Models** に移動します。

2. モデルプロバイダーを追加します：

| フィールド | 値 |
|---|---|
| Base URL | `http://<your-nas-ip>:8080/v1` |
| API key | `sk-none` など任意のプレースホルダー——サーバーは認証しません |

3. **Fetch available models** をクリックします。DeepSeek Harness がローカルサーバーに問い合わせ、サーバーが提供するモデルを一覧表示します。ローカルモデルがリストに現れ、すぐに使えるようになります。

4. モデルの挙動は推測ではなく実測されています——詳細は [RTX PRO 2000 性能テスト](../hardware/rtx-pro-2000-on-zimaos "ZimaOS での NVIDIA RTX PRO 2000 の完全なベンチマークレポート")をご覧ください。使う上で重要なのは 1 点だけです：温度はサーバー起動時に設定されます（デプロイガイドは 0.7 を使用——0 にしないでください。貪欲サンプリングではモデルが永遠に繰り返します）。

5. **コンテキストは 128K から始まります。** エージェントの会話は成長し、このモデルのネイティブウィンドウは 256K です。16 GB カードでは 128K コンテキストでサーバーを起動し（タイトですが実用可能、14.8 GB で検証済み）、20 GB カードでは KV q4 でフルの 256K に到達します——[RTX 4000 SFF Ada](../hardware/rtx-4000-ada-on-zimaos "ZimaOS での NVIDIA RTX 4000 SFF Ada の完全なベンチマークレポート")のページに検証済みのコマンドがあります。

6. チャットダイアログで、送信前にローカルモデルを選択します。以降のすべての会話は自分のハードウェアの上で動きます。短いメッセージを送って、返信が届くことを確認します。自分のマシンから来た証拠が欲しければ、回答中にサーバーログを眺めましょう。

## 最初のタスクを始める

1 つ選んでセッションに貼り付け、エージェントに作業させます。以下の各プロンプトは出発点です——詳細はエージェントが計画し、あなたは会話の中で舵を取ります。

**ローカルデータを処理する。**

> NAS の Documents フォルダを走査し、中身を一覧にして、ファイルをトピックごとにグループ化し、Markdown で要約インデックスを書いてください。私に確認せずにファイルを変更・削除しないでください。

**繰り返しの雑務を自動化する。**

> 毎日 23:00 に実行するジョブを設定してください：Downloads フォルダをチェックし、30 日より古いファイルを月ごとに整理した Archive フォルダへ移動し、何を移動したかの短いログを書きます。

**スマートホーム風のアラートでハードウェアを監視する。**

> この NAS のディスク温度と空き容量を監視してください。温度が 55 °C を超えるか空き容量が 10% を下回ったら、ヘルスレポートを書いて私が確認できるように見せてください。

## 24時間365日動かし続ける

エージェントは NAS 自体の上で動くため、ノートパソコンを閉じても長時間のタスクは動き続けます。進捗は ZimaClient でスマホから確認できます——同じ Web UI がどこにでもあります。[DeepSeek Harness ガイド](./app-store/deepseek-harness-setup "ZimaOS アプリストアから DeepSeek Harness をインストールして最初のワークスペースを作成")では、モバイルアクセスと、ファイルタスクにエージェントが必要とするフォルダー認可をカバーしています。

## うまくいかないとき

- **返信が永遠に繰り返す。** 温度が 0 になっています——上の注意をご覧ください。
- **速度が突然落ちた。** モデルの一部が CPU にフォールバックしました。[ローカル LLM ガイド](./local-llm-inference "検証済み35B MoE構成でZimaOS NAS上にプライベートAIを実行する")に完全な修正リストがあります。
- **エージェントがモデルに到達できない。** LAN 上のブラウザで `http://<your-nas-ip>:8080/v1/models` を開きます。JSON リストが返ればサーバーは稼働しており、問題は Base URL フィールドにあります。エラーならサーバー自体の再起動が必要です。

## 参考リンク

- DeepSeek Harness – [インストールとデプロイのガイド](./app-store/deepseek-harness-setup "ZimaOS アプリストアから DeepSeek Harness をインストールして最初のワークスペースを作成")
- ローカル LLM サーバー – [デプロイガイド](./local-llm-inference "検証済み35B MoE構成でZimaOS NAS上にプライベートAIを実行する")
