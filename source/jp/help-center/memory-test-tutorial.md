---
title: メモリテストチュートリアル
description: 
type: "Docs"
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明ですが、記入しない場合は内容の最初の段落が切り取られます。
---
# マザーボードが正しく起動できない場合、または使用中に画面の歪みやフリーズが発生した場合は、以下の手順に従ってメモリの問題をトラブルシューティングしてください。
## ハードウェア環境：
1X ZimaCube
1X モニター
1X HDMI/DPケーブル
1X キーボード
1X USBフラッシュドライブ
## ステップ1: Memtest86イメージをダウンロードする
まず、Memtest86のイメージファイルをダウンロードする必要があります。以下のリンクからダウンロードできます：
https://www.memtest86.com/download.htm
![](https://manage.icewhale.io/api/static/docs/1729233669049_image.png)
## ステップ2: イメージをUSBドライブにインストールする
ダウンロードが完了したら、イメージファイルをUSBドライブに書き込む必要があります。このプロセスにはRufusツールを使用することをお勧めします。手順は以下の通りです：
1. Rufusをダウンロードしてインストールします。
2. Rufusを開き、ダウンロードしたMemtest86のイメージファイルを選択します。
3. USBドライブを挿入し、ターゲットデバイスとして選択します。
4. "START"ボタンをクリックして書き込みプロセスを開始します。
![](https://manage.icewhale.io/api/static/docs/1729233702813_image.png)
## ステップ3: ZimaCubeを起動し、USBからブートする
1. Memtest86イメージを含むUSBドライブをZimaCubeのUSBポートに挿入します。
2. キーボードを接続し、F11を連続して押し、USBから起動するオプションを選択します。
![](https://manage.icewhale.io/api/static/docs/1729233729784_image.png)
3. Memtestインターフェースに入ったら、「テスト開始」を選択します。
![](https://manage.icewhale.io/api/static/docs/1729233755009_image.png)
![](https://manage.icewhale.io/api/static/docs/1729233761336_image.png)
![](https://manage.icewhale.io/api/static/docs/1729233768385_image.png)
## ステップ4: フィードバック結果に基づいてメモリに問題があるかどうかを判断する
PASSインターフェースが表示される場合、メモリに問題はありません。
![](https://manage.icewhale.io/api/static/docs/1729233805061_image.png)
上記の方法を用いて、メモリに安定性の問題があるかどうかを判断し、さらにマザーボードの問題をトラブルシューティングできます！ 同時に、技術サポートのメールサポート@icewhale.orgにお問い合わせいただき、テスト結果を添付してさらなる支援を受けることができます。