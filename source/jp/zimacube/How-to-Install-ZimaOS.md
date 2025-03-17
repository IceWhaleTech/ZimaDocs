---
title: ZimaOSのインストール方法
description:
type: “Docs”
tip: 上部バー固定フォーマットの削除はしないでください、descriptionは記事の説明で、未記入の場合は内容の最初の段落を切り取ります
---
ZimaOSはNASオペレーティングシステムです。ここでは、ZimaOS V1.2.2を成功裏にインストールするための詳細な手順を示します。

## ステップ1: ZimaOSイメージのダウンロード
最初に、最新のZimaOSの`.img`ファイルをダウンロードする必要があります。以下のリンクからイメージをダウンロードできます。

https://github.com/IceWhaleTech/ZimaOS/releases

## ステップ2: USBドライブにイメージを書き込む
ダウンロードが完了したら、イメージファイルをUSBドライブに書き込む必要があります。このプロセスには、Balena Etcherツールを使用することをお勧めします。手順は以下の通りです：

1. Balena Etcherをダウンロードしてインストールします。
2. Balena Etcherを開き、ダウンロードしたZimaOSイメージファイルを選択します。
3. USBドライブを挿入し、ターゲットデバイスとして選択します。
4. “Flash”ボタンをクリックして書き込みプロセスを開始します。
![](https://manage.icewhale.io/api/static/docs/1722420534282_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420544771_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420558005_image.png)
## ステップ3: ZimaCubeを起動し、インストールを開始する
1. 書き込まれたZimaOSイメージが入ったUSBドライブをZimaCubeのUSBポートに挿入します。
2. USBから起動を選択します。
![](https://manage.icewhale.io/api/static/docs/1722420609193_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420617802_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420630615_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420644847_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420663108_image.png)
## ステップ4: インストールを完了させる
インストールプロセスが完了すると、システムはUSBドライブを取り外すように促します。この時点でUSBドライブを取り外し、ZimaCubeを再起動する必要があります。システムは自動的にZimaOS V1.2.2にブートします。
![](https://manage.icewhale.io/api/static/docs/1722420697254_image.png)
## ステップ5: IPアドレスを取得し、ZimaOSにアクセスする
![](https://manage.icewhale.io/api/static/docs/1722420740564_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420752348_image.png)
おめでとうございます！あなたはZimaCubeにZimaOSを成功裏にインストールしました。これでZimaOSが提供する豊富な機能を探索し、利用し始めることができます。

詳細については、ZimaOS GitHubリポジトリをご覧ください。