---
title: 大規模言語モデルの手動ダウンロード方法
seo_title: "ZimaOSでLLMモデルを手動ダウンロードしてオフラインAIを実現"
description: "PCでLLMモデルをダウンロードし、USBまたはLANでZimaOS NASへ移動する——ネットワークが限られたデバイス向けのオフライン手順。"
type: Docs
author: Lauren Pan
tip: トップバーの固定フォーマットは削除しないでください、descriptionは記事の説明であり、記入しない場合は内容の最初の段落が切り取られます
---

## 概要

[ローカルLLM推論](../local-llm-inference "検証済み35B MoE構成でZimaOS NAS上にプライベートAIを実行する")ガイドでは、Hugging Faceから直接モデルを取得します。NASの接続が良好ならこれが最速です。このページではオフラインの方法を紹介します：PCでモデルをダウンロードし、USBまたはLANでNASへ移動します。

以下の手順はメインガイドと同じモデル——`Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf`（約12.3GB）——と同じ保存先フォルダを使用します。この「ダウンロード＋転送」パターンは、どのGGUFモデルにも使えます。

## 始める前に

- インターネットに接続できるPC
- PCとNASの両方に約13GBの空き容量
- USBドライブ、またはLAN経由でアクセスできるNAS

## ステップ1：PCでモデルをダウンロード

Hugging Face CLIが最も簡単です。中断したダウンロードも再開できます：

```bash
pip install -U huggingface_hub
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

ブラウザで[モデルページ](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Hugging FaceのQwen3.6-35B-A3B GGUFモデルページ")からダウンロードすることもできます。

## ステップ2：モデルをNASへ移動

**USBの場合：**`models/llm`フォルダをUSBドライブにコピーしてNASに接続し、ZimaOS FilesでNASの`models/llm`ディレクトリへ移動します（存在しない場合は作成してください）。

**LANの場合：**PCから`scp`でファイルを送ります。先にNAS側で保存先フォルダを作成します：

```bash
ssh <ユーザー名>@<NASのIP> mkdir -p models/llm
scp models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf <ユーザー名>@<NASのIP>:models/llm/
```

## ステップ3：ファイルを検証

大きなファイルのダウンロードは静かに破損することがあります。NAS上でサイズとチェックサムを確認します：

```bash
ls -lh models/llm
sha256sum models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf
```

[モデルページ](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Hugging FaceのQwen3.6-35B-A3B GGUFモデルページ")のファイル情報と照合してください。ファイルは約12.3GBのはずです。

## ステップ4：セットアップを続ける

モデルは`models/llm`に配置されました。[ローカルLLM推論](../local-llm-inference "検証済み35B MoE構成でZimaOS NAS上にプライベートAIを実行する")ガイドが想定する場所とまったく同じです。そのガイドのダウンロード手順をスキップして、サーバーの起動に進んでください。

## 参考リンク

- Hugging Face – [huggingface_hub CLIドキュメント](https://huggingface.co/docs/huggingface_hub "huggingface_hub CLI公式ドキュメント")
- unsloth – [Qwen3.6-35B-A3B-GGUFモデルカード](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Hugging FaceのQwen3.6-35B-A3B GGUFモデルページ")
