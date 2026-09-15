---
title: ZimaOS でローカル LLM 推論をデプロイする
seo_title: "ZimaOS NAS でプライベート AI を実行：検証済み 35B MoE セットアップ"
description: "ZimaCube をプライベート AI サーバーに変える——AI エージェントにセットアップを任せるか、Qwen3.6-35B-A3B と llama.cpp による検証済みの手動手順に従います。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

ZimaOS NAS をプライベート AI サーバーに変えましょう。クラウドも API 料金もなく、すべてが自分のドライブに留まります。

**エンジンであり、チャットボットではありません。** このガイドがデプロイするのは OpenAI 互換の API サーバーです——`http://<your-nas-ip>:8080/v1` のエンドポイントはチャットウィンドウではありません。チャットボットはそのクライアントの 1 つにすぎません。より大きな価値は、LAN 上のすべての AI アプリとエージェントがこの 1 つのエンドポイントに接続できることです。[DeepSeek Harness](./app-store/deepseek-harness-setup "ZimaOS アプリストアから DeepSeek Harness をインストールして最初のワークスペースを作成") や任意のコーディングエージェントをそこに向ければ、チャットだけでなくエージェント自体が完全に自分のハードウェア上でローカルに動作します。

**パフォーマンスは実測値であり、理論値ではありません。** RTX PRO 2000 GPU を搭載した ZimaCube は、35B の Mixture-of-Experts モデルで **65〜70 tokens/s** の回答速度を出します——返信は読むより速く流れてきます。1 週間分の会議メモの要約、自分のドキュメントを横断した質問応答、スマートホームエージェントのリクエスト対応：自分の質問を読み終える前に、返信がもう流れ始めています。仕事をしているカードの消費電力はわずか 70 W——デスクトップゲーミング PC の数分の一です。この速度なら、日常的なエージェント作業の大半——そしてその背後にある個人データ——を完全に自分のハードウェア上に留められます。

## はじめる前に

- 空き PCIe スロットと **NVIDIA GPU** を備えた ZimaOS デバイス——Compute Capability 8.0 以上、VRAM 16 GB 以上。以下のセットアップは RTX PRO 2000 搭載の ZimaCube で検証済みです。
- **ZimaOS 1.7 以降**。カードを挿すと NVIDIA ドライバーが自動的に有効になります。
- カードの確認：ターミナルを開いて `nvidia-smi` を実行します。カードが表示されれば準備完了です。

> カードが認識されない場合は、物理的な取り付けについて [GPU 拡張](../hardware/gpu-expansion "AI とトランスコーディング用のグラフィックカードを ZimaCube に追加") をご覧ください。

## パス A：AI エージェントに任せる

ZimaOS に DeepSeek Harness（または別のコーディングエージェント）があるなら、セットアップ全体が会話になります。

1. **アプリストアから DeepSeek Harness をインストール**——[DeepSeek Harness のデプロイ](./app-store/deepseek-harness-setup "ZimaOS アプリストアから DeepSeek Harness をインストールして最初のワークスペースを作成") をご覧ください。

2. **エージェントに必要な権限を与えます。**

   - フォルダー認可でドライブ上で作業できるようになります。
   - Docker ソケット認可でシステムレベルのコンテナ管理が可能になります。

   どちらも DeepSeek Harness ガイドの使用上の注意でカバーされています。

   このタスクはエージェントにソフトウェアのセットアップと設定だけを依頼するもので、データは関与しません。セットアップ中はソケットレベルを許可し、気になるなら後で取り消してください。

3. **会話を始めて、分かっていることを共有します。** 以下をチャットに貼り付け、エージェントが成功を報告するまで会話を続けます：

   > この ZimaOS ホストにローカル LLM サーバーをセットアップしてください。必要な情報は以下の通りです：
   >
   > - **モデル：** Qwen3.6-35B-A3B、GGUF 形式、IQ3_XXS 量子化。Hugging Face のリポジトリ `unsloth/Qwen3.6-35B-A3B-GGUF` から `hf` CLI で `Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf`（約 12.3 GB）をダウンロードします。
   > - **エンジン：** コンテナイメージ `ghcr.io/ggml-org/llama.cpp:server-cuda` から llama.cpp サーバーを実行します。コンパイルは不要です。
   > - **GPU：** すべてのレイヤーを GPU に置きます（`--n-gpu-layers 99`）。この NAS クラスのマシンでモデルが CPU にフォールバックすると、速度が崩壊します。
   > - **設定：** 16 GB カードで 128K コンテキスト、flash attention オン、サンプリング温度 0.7。温度を 0 にしないでください——貪欲サンプリングではこのモデルが永遠に繰り返します。
   > - **検証：** OpenAI 互換エンドポイントが `http://<host-ip>:8080/v1` で応答する必要があります。短い chat completion を送って確認し、コンテナ名と実施内容の要約を報告してください。
   >
   > 失敗した場合は、何を試して何のエラーが出たかを説明してください。システム全体の変更は事前に私に確認してください。

4. **ブラウザで検証します。** `http://<your-nas-ip>:8080/v1/models` を開きます——モデルの JSON リストが表示されればサーバーは稼働しています。

   問題が起きた場合は、下の「うまくいかないとき」のメモをエージェントに見せて会話を続けます。

**完全なプライバシーのための最後のステップ：** エージェントのモデル設定で、モデルプロバイダーを新しいローカルエンドポイントに切り替えます。以降、エージェントは自分のモデル、自分のハードウェアで動作します——ループ全体が自宅で完結します。

## パス B：手動セットアップ

5 つのステップをターミナルで進めます。

### ステップ 1：GPU を取り付ける

ケースを開けてカードを PCIe スロットに差し込めば完了です——このカードに電源ケーブルは不要です。

詳しい手順：[GPU 拡張](../hardware/gpu-expansion "AI とトランスコーディング用のグラフィックカードを ZimaCube に追加")。

### ステップ 2：エンジンイメージをプルする

コンテナ化された llama.cpp サーバーには sm_80〜120 向けの CUDA カーネルが同梱されているため、コンパイルは不要です：

```bash
docker pull ghcr.io/ggml-org/llama.cpp:server-cuda
```

### ステップ 3：モデルを入手する

**Qwen3.6-35B-A3B** の **IQ3_XXS** 量子化 GGUF ファイルをダウンロードします——約 12.3 GB。モデル全体が 16 GB の VRAM に収まり、128K コンテキストの余裕を残せるサイズとして選ばれています。

デバイスのインターネットが限られている場合は、[大規模言語モデルを手動でダウンロードする方法](./app-store/llm-manual-download "ZimaOS でオフライン使用するために LLM モデルを手動ダウンロード") をご覧ください。

```bash
mkdir -p models/llm
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

### ステップ 4：サーバーを起動する

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

`--n-gpu-layers 99` はすべてのレイヤーを GPU 上に保持します。NAS クラスの CPU ではこれは必須です——モデルが CPU に溢れた瞬間、速度が崩壊します。

### ステップ 5：挨拶する

サーバーは `http://<your-nas-ip>:8080/v1` で OpenAI 互換 API を公開します：

```python
from openai import OpenAI
client = OpenAI(base_url="http://<nas-ip>:8080/v1", api_key="sk-none")
resp = client.chat.completions.create(
    model="Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf",
    messages=[{"role": "user", "content": "Summarize my Documents folder"}],
    temperature=0.7,
    max_tokens=2048,
)
print(resp.choices[0].message.content)
```

セットアップはこれだけです。ノートアプリの AI 検索、写真整理ツール、自分のスクリプト——何を向けても、それぞれが自分のハードウェア上で動くようになります。

## 検証済みの数値

ZimaOS を実行する ZimaCube に RTX PRO 2000 を搭載して測定：

| 項目 | 結果 |
|---|---|
| 回答速度 | 65〜70 tokens/s——読むより速い。同じカードの 27B 密モデルは 18〜23。MoE アーキテクチャが理由です |
| コンテキスト | 64K は快適——長編小説 1 冊分。128K は実用可——自分のドキュメントの小さな文庫。256K は 16 GB に収まりません |
| 電力 | 負荷時 55〜70 W、アイドル時 6〜12 W——ゲーミングノートより低く、静かで電源を入れているのを忘れるほど。24/7 運用向き |
| 安定性 | マルチターン会話と長文ドキュメント検索を検証済み |

## うまくいかないとき

- **サーバーが起動しない。** `nvidia-smi` を実行して GPU がリストされることを確認します。次に `docker logs llm-server` でログを読みます——最初の数行に欠けている部分が書かれていることがほとんどです。
- **起動時にポートが競合する。** ログにポートバインドエラーが表示されます。NAS 上の別のアプリがすでに 8080 を使っています——8080 はセルフホスティングの世界では非常に一般的なポートです。空いているホストポートを選び、すべてのクライアントをそちらに向けます——たとえばコンテナを `-p 8088:8080` で起動し、Base URL として `http://<your-nas-ip>:8088/v1` を使います。
- **速度が突然落ちた。** モデルの一部が CPU にフォールバックしました。`--n-gpu-layers 99` を維持し、代わりに Ollama を使う場合は `ollama ps` で GPU/CPU の分担を確認します——Ollama は黙ってオフロードします。
- **モデルが永遠に繰り返す。** 温度を 0 に設定しています。このモデルファミリーには **0.6〜0.7** が必要です。貪欲サンプリングはモデルを壊します。
- **回答が途中で止まる。** 思考のための余裕が尽きました。モデルは回答の前に思考し、思考トークンも上限にカウントされます——`max_tokens` は **2048 以上**に保ちます。

## 参考リンク

- llama.cpp – [GitHub リポジトリ](https://github.com/ggml-org/llama.cpp "GitHub 上の llama.cpp のソースコードとリリース")
- llama.cpp サーバー – [サーバードキュメント](https://github.com/ggml-org/llama.cpp/tree/master/tools/server "llama.cpp HTTP サーバーのドキュメント")
