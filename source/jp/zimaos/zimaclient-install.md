---
title: ZimaClientをダウンロードしてインストールする
seo_title: "Windows、macOS、iOS、AndroidにZimaClientをインストール"
description: "WindowsまたはMacにZimaClientをインストールし、どこからでもZimaCubeへ接続します。リモートアクセス、ファイル閲覧、デバイス接続の設定方法を説明します。"
type: Docs
tip: このFront Matterブロックは削除しないでください。descriptionフィールドは記事の概要に使用され、空の場合は最初の段落が代わりに使用されます。
---
## はじめに
ZimaClientは目立たず動作するクライアントとして設計されていますが、機能は豊富です。気付かない場所で重要な処理を静かに、自然に実行します。

リモートアクセスは特に重要な機能です。ZimaCubeを有効化して接続すると、LAN、Thunderbolt、外部ネットワーク、モバイルホットスポットのどの環境でも、Web UIを開くための最速経路を自動的に選択します。
友人とZimaOSサービスを共有する場合にも利用できます。OpenWebUIやゲームサーバーなど一部のサービスは、アプリ独自の認証を使用し、ZimaOSへログインせずにアクセスできます。

Peer Drop、Back up、Open in Finderなどの機能へすばやく移動する項目も用意しています。
クライアントはまだ初期段階にあるため、新しいアイデアを歓迎します。

次の手順でZimaClientをダウンロードしてインストールします。
### 1. ZimaClientをダウンロードする
メインデバイスで次のリンクを開き、インストールパッケージをダウンロードします。
https://www.zimaspace.com/zimaos/download
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. macOSへのインストール
- ダウンロードが完了したら、インストールパッケージをダブルクリックして開きます。
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- ZimaClientを“Applications”フォルダーへドラッグし、インストールが終わるまで待ちます。
- インストール後、“Launchpad”からZimaClientを実行します。
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
注意：
ZimaClientは**メニューバーにアイコンを表示**します。アイコンをクリックしてクライアントを開きます。

ZimaClientでZimaCubeへ接続する方法は、この[ドキュメント](./remote-access)を参照してください。
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Windowsへのインストール
- ダウンロード後、ZimaClientのインストールパッケージをダブルクリックして実行します。
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- インストール後、タスクバーにZimaClientのアイコンが表示されます。アイコンをクリックして使用します。

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### よくある質問
**1. インストール中に次の画面で止まった場合：**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- https://www.zerotier.com/download/ からZeroTierをダウンロードしてインストールし、インターネット接続も確認します。
- ZimaClientをもう一度実行します。

<br>

**2. macOSでZimaClientが実行中と表示されるのに画面に現れない場合：**
- macOSの“アクティビティモニタ”を開き、Zima、Zima Helper、zima-client-backupなど、Zima関連のプロセスを探します。
- 関連プロセスをすべて終了します。
- Launchpadを開き直し、ZimaClientを実行します。
<br>

**3. リモートアクセスでプライバシーが損なわれることはありますか？**
ありません。ZimaClientとZimaOSが、ノートパソコンとZimaCubeの間にP2P接続を自動的に確立します。データは暗号化され、2台のデバイス間で直接転送されます。
ZimaCube上で運用するネットワークコントローラーを使用し、ZeroTierのグローバル公開サーバーはデバイス検出にだけ利用します。仮想ネットワークはZimaCubeが完全に管理し、IceWhaleにもZeroTierにも管理権限はありません。データのプライバシーと主権を最優先しているため、疑問があればお問い合わせください。
今後も継続的に監視し、改善します。
<br>

**4. ログを取得してデバッグに協力する方法**
エラーが発生したら、可能であればすぐにスクリーンショットを撮り、ZimaClientを終了します。
次の場所からログを取得します。
macOS：
`~/Library/Application Support/Zima/logs`
Windows：
`%AppData%\Zima\logs`
すべてのログファイルを圧縮し、問題の説明とスクリーンショットを添えてjohn@icewhale.orgへ送信してください。
