---
title: ZimaCubeにUnRAIDをインストールする方法
description:
type: “Docs”
tip: トップバーの固定形式は削除しないでください。descriptionは記事の説明であり、未記入の場合は内容の最初の段落を切り取ります。
---
# ZimaCubeにTrueNASをインストールするガイド
![](https://manage.icewhale.io/api/static/docs/1727249736896_image.png)
## ハードウェア環境：
1X ZimaCube  
1X モニター  
1X DP  
1X キーボード  
1X イーサネットケーブル  
1 X USBフラッシュドライブ（インストールディスクとして）  
![](https://manage.icewhale.io/api/static/docs/1727249911617_image.png)
## 詳細なインストールプロセス
### ステップ1: USBフラッシュドライブをフォーマット
**a. USBスティック（1G以上が必要）を準備し、FAT32形式でフォーマットします。名前はUNRAIDに変更します（Mac用）**
![](https://manage.icewhale.io/api/static/docs/1727249967953_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249974644_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249981977_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249988198_image.png)
**b. 正式な[USBクリエイター](https://unraid.net/download)をダウンロードします**
![](https://manage.icewhale.io/api/static/docs/1727250152598_image.png)
**c. [公式イメージ](https://unraid.net/download)をダウンロードします**
![](https://manage.icewhale.io/api/static/docs/1727250193523_image.png)
**d. USBクリエイターを開いてUnraid OSを書き込みます**
仕様に従って次のオプションを選択します
![](https://manage.icewhale.io/api/static/docs/1727250248143_image.png)
**書き込みをクリックし、待ちます**
![](https://manage.icewhale.io/api/static/docs/1727250272215_image.png)
![](https://manage.icewhale.io/api/static/docs/1727250278309_image.png)
### ステップ2: ZimaCubeにUnraidをインストール
**a. インストールUSBスティックから起動します**
![](https://manage.icewhale.io/api/static/docs/1727250302063_image.png)
**b. OSを選択します**
![](https://manage.icewhale.io/api/static/docs/1727250317388_image.png)
**c. IPを取得します**
![](https://manage.icewhale.io/api/static/docs/1727250333338_image.png)
## UnraidのwebGuiに接続する
UnraidのwebGuiに接続する方法は2つあります：
  - GUIモードでUnraidを起動し、ログインします（ユーザー名は `root`、デフォルトではパスワードなし）；または
  - MacまたはPCからウェブブラウザを開き、`http://tower.local` に移動します。注：USBフラッシュクリエイターで別のホスト名を設定した場合は、その名前を使用してください。
![](https://manage.icewhale.io/api/static/docs/1727250410689_image.png)
## ZimaCubeでUNRAIDを使用できるようになりました！
![](https://manage.icewhale.io/api/static/docs/1727250432285_image.png)