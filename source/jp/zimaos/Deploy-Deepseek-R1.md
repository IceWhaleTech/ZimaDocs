---
title: ZimaOS に Deepseek R1 をデプロイ
description: 
type: Docs
author: admin
tip: 上部バーの固定フォーマットは削除しないでください。description は記事の説明であり、記入しない場合は内容の最初の段落が切り取られます。
---
**Deepseek** の発売は広く注目されており、その優れたパフォーマンスとオープンソースの精神が、より多くの人々に最先端の大規模言語モデルを体験させています。Deepseek の強力な機能を個人的に探求したいですか？ **ZimaOS** は、大規模なモデルのデプロイと活用を簡素化し、効率化します！
この包括的なチュートリアルでは、OpenWebUI を通じて ZimaOS に Deepseek R1 モデルをワンクリックでデプロイする方法を説明し、迅速に独自のローカル AI アシスタントを構築する手助けをします。
## 始めに
AI に不慣れな方々は、次のように考えるかもしれません: なぜ Deepseek R1:14B と ZimaOS を選ぶべきなのか？ また、OpenWebUI とは一体何なのでしょうか？
![](https://manage.icewhale.io/api/static/docs/1739950777131_image.png)
**Deepseek R1:14B: 高パフォーマンスと低リソース要件**
Deepseek R1 シリーズは、その卓越したパフォーマンスとオープンソースの特性で際立っています。14B バージョンは、強力な言語能力を提供しつつ、リソースの要求を抑え、個人のデバイスや NAS システムへのデプロイに最適です。
![](https://manage.icewhale.io/api/static/docs/1739950805989_image.png)
**OpenWebUI: 使いやすいインターフェース、すぐに使える**
OpenWebUI は、クリーンで直感的な Web インターフェースを提供し、大規模な言語モデルのデプロイと操作を簡単に行えます。ブラウザーを通じて、いつでもどこでも AI アシスタントにアクセス可能です。
![](https://manage.icewhale.io/api/static/docs/1739950829035_image.png)
**ZimaOS: デプロイが簡単、データセキュリティも万全**
ZimaOS は、使いやすさとデータセキュリティに優れています。App Store と OpenWebUI の統合により、Deepseek R1:14B のデプロイは、モバイルアプリをインストールするのと同じくらい簡単で、複雑な Docker の設定は必要ありません。デプロイ後は、ローカルネットワーク上のすべてのデバイスから AI アシスタントにアクセスでき、「一度デプロイして、どこでも使える」環境を提供します。
このチュートリアルでは、**ZimaCube Pro Creator Pack** と **Deepseek R1:14B モデル** を例に説明します。ZimaCube Pro Creator Pack には ZimaOS が事前にインストールされており、NVIDIA RTX 2000 Ada プロフェッショナル GPU が搭載され、16GB の VRAM を備えているため、Deepseek R1:14B やそれ以上の大規模なモデルもスムーズに実行できます。

他の x86 ハードウェアを使用する場合、次の条件が必要です：
**16GB 以上の VRAM を搭載した GPU を持つデバイス**: 大規模モデルを実行するには、多くの GPU メモリが必要です。
**ZimaOS のインストール**: [ZimaOS のインストールガイド](https://www.zimaspace.com/docs/zimacube/How-to-Install-ZimaOS) を訪れ、デバイスに ZimaOS をダウンロードして設定してください。

## インストールとデプロイ
**ZimaOS にログインし、App Store を開く**: 検索バーで「Open WebUI」を検索し、Open WebUI アプリケーションを見つけてインストールします。インストール後、アプリリストから Open WebUI アイコンをクリックして起動します。
![](https://manage.icewhale.io/api/static/docs/1739950989104_image.png)
![](https://manage.icewhale.io/api/static/docs/1739950995830_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951002382_image.png)
**モデルの設定。** 初回起動時に OpenWebUI を設定する必要があります：
- アカウントに登録し、ログインします。
- チャットインターフェースで、左上の「モデルを選択」をクリックします。
- 「deepseek-r1:14b」と入力し、「[Ollama.com](https://ollama.com/) から 'deepseek-r1:14b' をプル」を選択します。

モデルファイルがダウンロードされるまで待ちます。
![](https://manage.icewhale.io/api/static/docs/1739951092182_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951098726_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951105561_image.png)
## Deepseek の使用開始
今すぐ、チャットインターフェースにプロンプトを入力して送信し、モデルからの返答を待ちます。

Open WebUI インターフェースの左側のナビゲーションバーで「新しいチャット」をクリックし、モデルに手伝ってもらいたいタスクをダイアログボックスに入力します。 「送信」をクリックすると、Deepseek R1:14B が応答を生成します。
![](https://manage.icewhale.io/api/static/docs/1739951128451_image.png)
Deepseek R1:14B とマルチターンで会話を楽しんで、その能力を探索してみてください！

## エッジ AI の価値と応用
エッジサイドの大規模モデルは、**セキュリティ + 効率** でモバイルインテリジェンス体験を再定義しています！
![](https://manage.icewhale.io/api/static/docs/1739951166823_image.png)
ローカライズされたデータ処理と低遅延応答を活用することで、プライバシー保護、オフライン作業、パーソナライズサービスに信頼できる技術基盤を提供します。Deepseek R1:14B と同様のエッジ AI モデルは、すでに知識管理、クリエイティブブレインストーミング、プログラミング支援などのシナリオをカバーしています。

ZimaOS の簡素化されたデプロイメントソリューションにより、プロフェッショナルな設定なしで専用の大規模モデルを手軽に所有でき、**「モバイルアプリのように簡単にインストールし、一度デプロイしてどこでも使用できる」** ことが実現します。スマートホームの制御や近距離データ解析機能と組み合わせることで、仕事や生活においてオールラウンドなインテリジェントなコンパニオンになる可能性を秘めています。

## 結論
このチュートリアルが、OpenWebUI を使用して ZimaOS 上に大規模モデルをワンクリックでデプロイするための知識を提供できたことを願っています。ZimaOS と Deepseek R1:14B の組み合わせにより、ローカル AI の世界への扉が開かれました。今すぐローカル AI の旅を始めてください！

使用中に問題が発生した場合は、いつでもご連絡ください。また、[コミュニティ](https://community.zimaspace.com/) や [Discord](https://discord.com/invite/uuNfKzG5) に参加して、AI や ZimaOS についてさらに議論できます。フィードバックをお待ちしています！

## 関連リンク
**ZimaOS**： https://github.com/IceWhaleTech/ZimaOS
**Deepseek**： https://www.deepseek.com/
**OpenWebUI**： https://github.com/open-webui/open-webui
**ZimaCube Pro Creator Pack**: https://shop.zimaspace.com/products/zimacube-pro-creator-pack
