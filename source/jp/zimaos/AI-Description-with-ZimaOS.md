---
title: Frigate+OlamaスクリーンAIの実装とZimaOSの使用
description: 
type: Docs
author: admin
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明です。記入しない場合、最初の段落の内容が自動的に表示されます。
---
## 背景
日常生活において、監視カメラは家庭や企業にとって重要なツールとなっています。しかし、従来の監視システムは通常、画像を記録するだけで、単に動きを検出する機能しかなく、画像の内容に関する詳細な説明を提供することはできません。これにより、ユーザーは動画を視聴したり通知を受け取ったりする際に、何が起こったのかを自分で判断する必要があります。
Frigateは、画像内の人、車、動物などの対象を識別し、関連するイベントをトリガーする効率的なオープンソースのビデオ分析ツールです。しかし、その機能は主に「見る」レベルにとどまり、直接的に「何が起こったか」を伝えることはできません。
この不足を補うために、私たちはOllamaというツールを導入しました。このツールは自然言語での説明を生成することができます。これにより、Frigateが検出した視覚的なコンテンツを「誰かが庭に入った」や「車がドアの前に駐車した」といった明確なテキスト説明に変換できます。
このチュートリアルでは、ZimaOSを使用してFrigateとOllamaを組み合わせ、実用的な視覚的説明システムを作成する方法を説明します。家庭のセキュリティを改善したり、小さなプロジェクトにインテリジェントな機能を追加したりする場合、このソリューションはあなたのニーズを満たすことができます。
## ハードウェアの準備
1. **RTSPプロトコルに対応したカメラ**
Frigateにリアルタイムのビデオストリーム入力を提供します。
2. **ZimaBoard2対応のグラフィックカード**
AIモデル推論をローカルで加速するために使用されます（例えば、NVIDIAシリーズのグラフィックカード）。参考グラフィックカード https://www.zimaspace.com/docs/zh/zimacube/GPU-Expansion
3. **容量6GB以上のハードドライブ**
AIモデルファイル、ビデオスナップショット、システムデータを保存するために使用されます。
## ソフトウェアのインストール
このシステムのソフトウェアインストールは以下の3つのステップに分かれます：
1. データ移行
2. OllamaのインストールとLLaVAモデルの設定
3. Frigateのインストールと設定
### ステップ1: データ移行
AIモデルはサイズが大きいため、事前に独立したハードドライブをインストールして、Dockerのデータディレクトリや個人データをハードドライブに移行することをお勧めします。これにより、ダウンロード中の失敗やストレージ容量不足を防ぎ、システムの安定した動作と十分なストレージ容量を確保できます。
> 重要なファイルをバックアップして、データ損失を防止してください。データ移行にはリスクが伴う場合があります!!!
#### グラフィックカードをハードドライブに接続し、デバイスを起動してオペレーティングシステムに入ります。
![](https://manage.icewhale.io/api/static/docs/1745202079506_image.png)
#### データ移行
1. 左上のメニューアイコンをクリックします。
2. **「アプリ」**をクリックします。
3. 関連するアプリケーションまたはデータ管理項目を見つけ、**「移行」**ボタンをクリックして移行が完了するのを待ちます。
![](https://manage.icewhale.io/api/static/docs/1745202168758_image.png)
### ステップ1: OllamaのインストールとLLaVAモデルの設定
サポートされているモデルの詳細については、[Frigateの公式ドキュメント](https://docs.frigate.video/configuration/genai/)および[Ollamaの公式サイト](https://ollama.com/)をご覧ください。
#### Ollamaのインストール
1. **アプリストア**を開き、検索バーに**「Ollama」**と入力します。
2. グラフィックカードの種類に応じて適切なバージョンをインストールします（例えば、NVIDIAをサポートするバージョンなど）。
![](https://manage.icewhale.io/api/static/docs/1745202389678_image.png)
#### LLaVAモデルの設定
1. **Olamaターミナル**を開き、右上のメニューアイコンをクリックします。
2. **「設定」**を選択して設定インターフェースに入ります。
![](https://manage.icewhale.io/api/static/docs/1745203245150_image.png)
3. **「ターミナル」**アイコンをクリックしてコマンドライン制御インターフェースに入ります。
![](https://manage.icewhale.io/api/static/docs/1745203281707_image.png)
4. 以下のコマンドをコマンドラインに入力して、モデルをダウンロードし、llava-llama3をインストールします。
```language
ollama pull llava-llama3
```
![](https://manage.icewhale.io/api/static/docs/1745203346880_image.png)
5. **「成功」**という文字が表示された場合、モデルのダウンロードが完了し、Ollamaの準備が整いました。
![](https://manage.icewhale.io/api/static/docs/1745203380348_image.png)
6. Ollamaを起動した後、**実行中のIPアドレスとポート番号**（例：`http://10.0.1.3:11434`）を記録します。これは後でFrigateの設定に使用します。
![](https://manage.icewhale.io/api/static/docs/1745203428242_image.png)
### ステップ3: Frigateのインストールと設定
#### Frigateのインストール
1. メインインターフェースの右上にある**「プラス」**ボタンをクリックします。
2. 「カスタマイズアプリのインストール」を選択します。
![](https://manage.icewhale.io/api/static/docs/1745203508399_image.png)
3. 「インポート」ボタンをクリックします。
4. 以下のfrigate.yaml設定ファイルをインポートします。
> name: pure_grace
services:
  frigate:
    cpu_shares: 90
    command: []
    container_name: frigate
    deploy:
      resources:
        limits:
          memory: 7766M
    devices:
      - /dev/bus/usb:/dev/bus/usb
      - /dev/apex_0:/dev/apex_0
      - /dev/video11:/dev/video11
      - /dev/dri/renderD128:/dev/dri/renderD128
    image: ghcr.io/blakeblackshear/frigate:0.15.0
    labels:
      icon: https://icon.casaos.io/main/all/frigate.png
    ports:
      - target: 8971
        published: "8971"
        protocol: tcp
      - target: 8554
        published: "8554"
        protocol: tcp
      - target: 8555
        published: "8555"
        protocol: tcp
      - target: 8555
        published: "8555"
        protocol: udp
    privileged: true
    restart: unless-stopped
    shm_size: "67108864"
    volumes:
      - type: bind
        source: /etc/localtime
        target: /etc/localtime
      - type: bind
        source: /DATA/AppData/frigate/config
        target: /config
      - type: bind
        source: /DATA/Media
        target: /media/frigate
    cap_add: []
    environment: []
    network_mode: bridge
x-casaos:
  author: self
  category: self
  hostname: ""
  icon: https://icon.casaos.io/main/all/frigate.png
  index: /
  is_uncontrolled: false
  port_map: "8971"
  scheme: https
  store_app_id: pure_grace
  tips: null
  title:
    custom: ""
    en_us: frigate

5. 「送信」をクリックします。
![](https://manage.icewhale.io/api/static/docs/1745203744283_image.png)
6. 「インストール」をクリックしてインストールが完了するのを待ちます。
![](https://manage.icewhale.io/api/static/docs/1745203764783_image.png)
#### Frigateのアカウントとパスワードを取得
Frigateを起動後、ログでデフォルトのアカウントとパスワードを確認し、記録してください。
![](https://manage.icewhale.io/api/static/docs/1745203839741_image.png)
1. **Frigateターミナル**を開き、右上の**メニューアイコン**をクリックします。
2. **「設定」**を選択して設定インターフェースに入ります。
![](https://manage.icewhale.io/api/static/docs/1745203882560_image.png)
3. アプリ内の**「ターミナル」**アイコンをクリックします。
4. **「ログ」**タブに切り替えて、起動ログを表示します。
5. 右上の**「全画面」**ボタンをクリックして、デフォルトのユーザー名とパスワードを簡単に見つけることができます。
![](https://manage.icewhale.io/api/static/docs/1745203925603_image.png)
6. アカウントとパスワードの情報が表示されるので、記録してください。
![](https://manage.icewhale.io/api/static/docs/1745203946052_image.png)
#### Frigateの設定
1. 先ほど取得したアカウントとパスワードを入力し、システムにログインします。
![](https://manage.icewhale.io/api/static/docs/1745203986368_image.png)
2. 左メニューの**「設定」**ボタンをクリックします。
3. **「構成エディタ」**を選択して構成ファイル編集インターフェースに入ります。
![](https://manage.icewhale.io/api/static/docs/1745204019481_image.png)
4. 構成エディタで、カメラ関連の設定を追加または変更します。以下の設定例を参考にしてください：

```language
mqtt:
  enabled: false

cameras:
  abc: # カメラの名前、カスタマイズ可能
    genai:
      enabled: true
      use_snapshot: True
      objects:
        - person

    ffmpeg:
      inputs:
        - path: rtsp://admin:HTC123456@10.0.171.52/stream1  # カメラのRTSPアドレス、デバイスのURLに置き換えてください
          roles:
            - detect
    detect:
      enabled: true
      width: 1280
      height: 720
      fps: 10
      max_disappeared: 10

    motion:
      enabled: true
      mask: []
      threshold: 25

    snapshots:
      enabled: true
      timestamp: true
      bounding_box: true
      retain:
        default: 3

semantic_search:
  enabled: true
  reindex: False

genai:
  enabled: true
  provider: ollama
  base_url: http://10.0.1.12:11434   # Ollamaサービスの実行中のホストアドレスとポート
  model: llava-llama3 # 画像とテキスト分析に使用するマルチモーダルモデル
  prompt: "Describe what the {label} is doing in these images from camera {camera}. Focus on actions and possible intent."
  object_prompts:
    person: "What is this person doing?" # 「person」を分析するための特定のプロンプト
    car: "What is this car doing? Is it parked, circling, or doing something unusual?"
version: 0.15-1
```
**必ず、`rtsp`リンクを自分のカメラアドレスに置き換え、OllamaのIPとポートを実際の実行アドレス（例：`http://10.0.1.3:11434`）に設定してください。さもないと、Frigateはビデオストリームにアクセスしたり、AIモデルを接続して分析を行ったりできません。**
![](https://manage.icewhale.io/api/static/docs/1745204529636_image.png)
5. 設定が完了したら、「保存」をクリックし、Frigateが自動的に新しい設定を適用して実行を開始します。
Frigateが監視画面で人物オブジェクトを検出すると、自動的にスナップショットを撮影し、AIモデルを呼び出して対応する画像の説明を生成します。検出するオブジェクト、使用するモデル、プロンプトの内容を実際のアプリケーションシナリオに合わせて自由に調整することができ、よりインテリジェントでパーソナライズされた監視体験を作成できます。
## 構築完了
![](https://manage.icewhale.io/api/static/docs/1745204647915_image.png)
これで、FrigateとOllamaを使用したインテリジェント監視システムの構築が完了しました。リアルタイム画面を通じて検出効果を確認するか、ログとスナップショットページに入ってAI分析が正常に動作しているかを確認できます。
さらに体験を最適化するために、通知サービスにアクセスしたり、モデルのパラメータを調整したり、カメラを追加したりしてみてください。
