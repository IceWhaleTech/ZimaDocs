---
title: NVRカメラサーバー
description:
type: “Docs”
tip: トップバーの固定フォーマットは削除しないでください、descriptionは記事の説明であり、未記入の場合は内容の最初の段落を切り取ります
---
# はじめに
このチュートリアルでは、Kerberos.ioとZimaBoardを使用して、CasaOS上に家庭用ビデオ監視システムを作成する方法を案内します。CasaOSのDockerカスタムインストール機能を使用して、インストールと設定プロセスを簡素化し、RTSPカメラの設定方法についても詳しく説明します。
## 1. 準備
- ZimaBoard X 1台
- ZimaBoardが電源とインターネットに接続されており、CasaOSがインストールされていることを確認してください
- RTSP対応IPカメラ
## 2. カメラのRTSPリンクを取得する
異なるメーカーのカメラは、RTSPリンクの取得方法が異なるため、カメラのユーザーマニュアルやメーカーの公式ウェブサイトを参照して関連する指示を確認するか、カメラの管理インターフェースにログインしてRTSPリンクを見つけてください。このチュートリアルでは、TP-LinkおよびTuyaブランドのカメラを正常にテストし、Kerberos.ioとの互換性を確認しました。さらに、Hikvision、Ezviz、Dahua、eufy、Youseeなどのブランドのカメラとの互換性も期待しています。
## 3. Kerberos.ioを設定する
### ステップ1: CasaOSにログイン
1. ZimaBoardが電源とインターネットに接続されており、CasaOSがインストールされていることを確認してください。
2. CasaOSのウェブインターフェースにアクセスします（通常はhttp://<あなたのZimaBoard IP>）。
### ステップ2: CasaOSを使用してDockerをインストール
1. アプリストアを開く
![](https://manage.icewhale.io/api/static/docs/1727083688403_image.png)
2. カスタムインストールをクリック
![](https://manage.icewhale.io/api/static/docs/1727083742110_image.png)
3. インポートをクリック
![](https://manage.icewhale.io/api/static/docs/1727083761139_image.png)
4. 次のコードを入力フィールドに貼り付けてDockerを設定します
version: '3'  # Docker Composeファイルのバージョン

services:
  kerberos:
    image: kerberos/kerberos  # kerberos/kerberosイメージを使用
    container_name: kerberos  # コンテナ名
    ports:
      - "8080:80"  # ホストポート8080をコンテナポート80にマップ
    volumes:
      - ./config:/config  # ホストのconfigディレクトリをコンテナの/configにマウント
      - ./recordings:/etc/opt/kerberosio/capture  # ホストのrecordingsディレクトリをコンテナの/etc/opt/kerberosio/captureにマウント
    restart: unless-stopped  # コンテナの再起動ポリシー：手動で停止されない限り自動的に再起動
    environment:
      - TZ=Europe/London  # コンテナのタイムゾーンをEurope/Londonに設定
      - KERBEROSIO_SETTINGS_PORT=80  # Kerberosサービスリスニングポートを80に設定
      - KERBEROSIO_SETTINGS_RECORDSTREAM="/config/recordings"  # 録画ストリームの場所を/config/recordingsに設定
![](https://manage.icewhale.io/api/static/docs/1727083935343_image.png)
5. 提交をクリック
6. 'tag'にlatsetを、'title'にkerberosを入力
![](https://manage.icewhale.io/api/static/docs/1727083963029_image.png)
7. 提出してインストールが完了するのを待つ
### ステップ3: Kerberos.ioを設定する
1. ブラウザでhttp://<あなたのZimaBoard IP>:8080を開いてKerberos.ioの設定インターフェースに入ります。
![](https://manage.icewhale.io/api/static/docs/1727084036342_image.png)
2. アカウントとパスワードを作成し、Kerberos.ioにログインします。
![](https://manage.icewhale.io/api/static/docs/1727084057212_image.png)
3. '設定'をクリック
![](https://manage.icewhale.io/api/static/docs/1727084077776_image.png)
4. ‘IPカメラ’を選択
![](https://manage.icewhale.io/api/static/docs/1727084096179_image.png)
5. 取得したRTSP URLを入力、例: rtsp://admin:Hjj12345@10.0.171.52/stream1。
![](https://manage.icewhale.io/api/static/docs/1727084126856_image.png)
6. 解像度とフレームレートを設定、例: 720x480。
7. 設定が完了したら、Kerberosインターフェースでキャプチャされた画像とビデオを確認できます
![](https://manage.icewhale.io/api/static/docs/1727084148176_image.png)
![](https://manage.icewhale.io/api/static/docs/1727084153287_image.png)
8. メインインターフェースで監視状態をリアルタイムで確認することもできます
![](https://manage.icewhale.io/api/static/docs/1727084172190_image.png)
9. このシステムは、特定のエリアをリアルタイムで監視する必要があるユーザーに適しています。特に家庭や小規模オフィスのシナリオで。このシステムは現在1台のカメラの設定のみをサポートしていますが、その簡単なインストール、効率的なパフォーマンス、および良好なブランド互換性のおかげで、信頼性のある監視ソリューションとなっています。