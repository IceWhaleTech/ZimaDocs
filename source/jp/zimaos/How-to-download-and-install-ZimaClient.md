---
title: ZimaClientのダウンロードとインストール方法
description: 
type: "Docs"
tip: 上部バーの固定フォーマットは削除しないでください、descriptionは記事の説明であり、未入力の場合は内容の最初の段落を切り取ります。
---
## はじめに:
ZimaClientはサイレントクライアントとして設計されていますが、その機能は十分に充実しており、核心的な体験は、あなたが気づかない場所でも静かに自然に発生します。

リモートアクセスは最も重要な機能の一つです。ZimaCubeを有効にして接続すると、あらゆるネットワークシナリオ（LAN、Thunderbolt、外部ネットワーク、ホットスポット）で最速の接続を常に見つけてwebUIを開きます。
これは、ZimaOSのサービスを友達と共有することにも適用されます。OpenWebUIやゲームサーバーなどの一部のサービスには、アプリの独自の認証機能を使用してログインせずにアクセスできます。

同時に、Peer Drop、バックアップ、Finderで開くなどの機能への迅速なアクセスも提供しています。
もちろん、私たちはまだ初期段階にあり、より多くのクライアントのアイデアを歓迎しています。

ZimaClientをダウンロードしてインストールするには、以下の手順に従ってください:
### 1. ZimaClientのダウンロード
ホスティングデバイスで次のリンクを訪れて、ZimaClientのインストールパッケージをダウンロードしてください:
https://find.zimaspace.com/
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. Mac OSインストールガイド
- ダウンロードが完了したら、ダウンロードしたインストールパッケージをダブルクリックして開きます。
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- ZimaClientを「アプリケーション」フォルダにドラッグアンドドロップし、インストールが完了するまでお待ちください。
- インストールが完了したら、「Launchpad」を見つけてクリックし、ZimaClientを実行します。
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
注意:
ZimaClientは **タスクバーにアイコンを表示し**、アイコンをクリックすることでクライアントを開いて操作できます。

ZimaClientを介してZimaCubeに接続する方法については、こちらの[文書](https://www.zimaspace.com/docs/zimaos/Romote-Access.html)をご参照ください。
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Windowsインストールガイド
- ダウンロードが完了したら、ZimaClientのインストールパッケージをダブルクリックして実行します。
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- インストールが完了すると、ZimaClientはタスクバーにアイコンを表示し、アイコンをクリックすることでクライアントを使用できます。

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### よくある質問
**1. インストール中に次の画面でスタックした場合、次の手順をお試しください:**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- https://www.zerotier.com/download/にアクセスしてダウンロードおよびインストールし、インターネット接続が有効であることを確認します。
- 再度ZimaClientを実行してみてください。

<br>

**2. ZimaClientがmacOSに表示されないが実行中であることを示す場合、問題をトラブルシューティングするための手順は次のとおりです:**
- macOSの「アクティビティモニタ」を開き、Zima関連のプロセス（例：Zima、Zima Helper、zima-client-backupなど）を検索して見つけます。
- 関連するすべてのプロセスを閉じます。
- Launchpadを再度開き、ZimaClientを実行します。
<br>

**3. リモートアクセスは私のプライバシーを危険にさらしますか？**
決してありません！ノートパソコンとZimaCube間の接続は、ZimaクライアントアプリケーションとZimaOSによって自動的に確立され、P2P通信を使用して接続が確立されます。2つの間のデータ転送は暗号化されており、すべてのデータ転送がピアツーピアであることを保証します。
ZimaCubeでは自己展開型のネットワークコントローラを使用しており、ZeroTierのグローバルパブリックディスカバリサーバーのみを使用しています。仮想ネットワークの制御は完全にZimaCubeの制御下にあります。IceWhaleやZeroTierには管理権限はありません。データプライバシーと主権は私たちの最優先事項であり、質問があれば気軽に挑戦してください。
これらの問題を引き続き監視および最適化していきます。
<br>

**4. ログにアクセスしてデバッグを手伝う方法**
エラー/問題が発生した場合は、すぐにスクリーンショットを撮り（該当する場合）、Zimaクライアントを終了します。
次の場所からログを取得します:
macOS:
`~/Library/Application Support/Zima/logs`
Windows:
`%AppData%\Zima\logs`
すべてのログファイルをパックし、john@icewhale.orgに送信してください。問題を説明し、スクリーンショット（該当する場合）を提供します。