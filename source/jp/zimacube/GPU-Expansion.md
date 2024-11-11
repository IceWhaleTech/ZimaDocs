以下是您要求的日语翻译：

---
title: GPU拡張
description:
type: "Docs"
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明です。記入しない場合、最初の段落の内容が自動的に取得されます。
---
# はじめに
  ZimaCubeは、プロフェッショナルな作業ニーズに対応できるコンピュータデバイスです。モジュール設計により、ユーザーは個々の要件に応じてハードウェアを拡張でき、Graphics Processing Unit（GPU）のインストールも可能です。GPUは、大規模なグラフィック処理や並列計算タスクを扱う必要があるユーザーにとって非常に重要です。

# インストールガイドとアプリケーション例
## 1. GPUのインストール手順
### ステップ1: IOシールドを取り外す。
  - GPUをインストールする前に、PCIeスロットからIOシールドを取り外します。

| ![](https://manage.icewhale.io/api/static/docs/1728614816722_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614828318_image.png)|
|:---:|:---:|
### ステップ2: GPUを正しい方向で取り付ける。
  - GPUが正しく整列していることを確認し、金色のフィンガーをPCIeスロットに合わせます。
  - GPUをスロットにやさしく挿入し、完全に固定されるまで押し込みます。

| ![](https://manage.icewhale.io/api/static/docs/1728614909590_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614920088_image.png)|
|:---:|:---:|
#### ヒント：
  - GPUを取り付けたり取り外したりする際は、PCIeスロットのクリップを押してください。これにより、GPUが確実に固定または解放されます。
![](https://manage.icewhale.io/api/static/docs/1728614946501_copyImage.png)
## 2. アプリケーション例: GPUトランスコーディングとAIアプリケーション
### ハードウェアトランスコーディング:

GPUを使用してハードウェアトランスコーディングを行うと、メディア処理のパフォーマンスが大幅に向上します。たとえば、Plex Media Serverは、ZimaOS上のGPUを使用して効率的なハードウェアトランスコーディングを実現できます（注：PlexのプロフェッショナルGPU版をダウンロードしてください）。
![](https://manage.icewhale.io/api/static/docs/1728615170049_image.png)
- ハードウェアトランスコーディングデバイスの選択: 不明（NVIDIA）
- 保存をクリックしてトランスコーディングを開始

| ![](https://manage.icewhale.io/api/static/docs/1728615235531_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615252888_image.png)|
|:---:|:---:|

| Before： |      After： |
| - | - |
| ![](https://manage.icewhale.io/api/static/docs/1728615297358_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615306943_image.png)|

ZimaOSが現在サポートしているNvidia GPUのリストについては、以下のリンクをご参照ください：https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html
### AIアプリケーション例:
ZimaOSでは、Open WebUIを使用して高度なAI会話クライアントを体験できます。
これには最新の言語モデル（Llama3やGemmaなど）を含み、OpenAIのAPIとも互換性があります。さらに、Open WebUIはZimaCube Pro Creatorの内蔵NVIDIA 2000 Ada GPUを使用して処理の遅延を減少させます。
最も重要なのは、すべてのデータ（ログイン情報を含む）がデバイスにローカルで保存されることです。Open WebUIは、外部からのリクエストを行わず、ユーザーの承認のもとで厳密な機密性を保護し、プライバシーとセキュリティを強化します。

![](https://manage.icewhale.io/api/static/docs/1728615600750_094e8811-903b-4bb0-8053-548119f56272.gif)
- バージョンにはStable Diffusionが統合されています。

![](https://manage.icewhale.io/api/static/docs/1728615658463_2.gif)

- 当社のAppStoreにはTasking AIやAnything AIなどの他のAIアプリもあります。

![](https://manage.icewhale.io/api/static/docs/1728615689023_image.png)
Tasking AIは、AI技術を活用して、ユーザーが日常業務をより効率的に整理し管理できるインテリジェントなタスク管理ツールです。タスクの優先順位付け、リマインダー、タスクの自動化などを行い、仕事や生活の効率を向上させます。

Anything AIは、多機能なAIアプリケーションで、テキスト生成、言語翻訳、音声認識など、さまざまな実用的なAIツールとサービスを提供します。強力なAI技術を活用して、ユーザーの日常の仕事や生活を簡素化することを目指しています。

これらのAIアプリケーションを使うことで、人工知能の利点を最大限に活用し、仕事の効率と生活の質を向上させることができます！
## 3. 注意事項
  - 電源オフ：ZimaCubeの電源が完全に切れていることを確認し、作業を行う前に静電気によるデバイスへのダメージを避けるために自分自身をアース接続してください。
  - 優しく取り扱う：GPUを取り付けたり取り外したりする際には、過度な力を加えないようにしてください。これにより、GPUの損傷を防ぎます。
  - 清潔：取り付けや取り外しの際にスロットやデバイスがほこりや異物で汚れていないことを確認してください。これにより、接触不良を避けることができます。
  - ドライバのインストール：最適なパフォーマンスと安定性を実現するために、正しいドライバをインストールしてください。

## 4. 結論
  このガイドにより、ZimaCubeにGPUをインストールする方法と、そのさまざまなアプリケーションでの重要性について理解できたことを願っています。インストールを試み、さらにGPU機能を探索して、作業効率と生活の質を向上させることをお勧めします。
  
  ご意見をお聞かせいただけることを楽しみにしています！

# 互換性リスト
ZimaCubeは、通常高さ64.41 mm（2.536インチ）の**ロープロファイル**グラフィックスカードをサポートしています。PCIeスロットは最大**75W**の電力を提供するため、このサイズおよび電力範囲内のグラフィックスカードを選択することをお勧めします。これにより、ZimaCubeのコンパクトなデザインと電力制限との互換性が確保されます。 
**他のグラフィックスカードは、正常な動作のために外部電源が必要になる場合があります。**

{% note warn Note: %}
このリストは、ZimaOSでサポートされているドライバに基づいて作成されており、「確認済み」のモデルにはその旨が記載されています。別のグラフィックスカードモデルで**Assist**を正常に動作させた場合は、右上隅の「改善」機能を使用してリストの更新にご協力ください。ご協力ありがとうございます。
{% endnote %}

| **カテゴリ**                        | **モデル**                                                       |
| :-------------------------------- | ------------------------------------------------------------ |
| GeForce RTX 40シリーズ（ノートPC） | GeForce RTX 4090 Laptop GPU, GeForce RTX 4080 Laptop GPU, GeForce RTX 4070 Laptop GPU, GeForce RTX 4060 Laptop GPU, GeForce RTX 4050 Laptop GPU |
| GeForce RTX 40シリーズ             | NVIDIA GeForce RTX