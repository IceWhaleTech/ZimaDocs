---
title: ZimaOSのインストール方法
description:
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明であり、記入しない場合は内容の最初の段落のテキストが切り取られます。
---
ZimaOSはNASオペレーティングシステムです。ここでは、ZimaOS V1.2.2を成功裏にインストールするための詳細な手順を示します。

## ステップ1: ZimaOS V1.2.2イメージをダウンロード
まず、ZimaOS V1.2.2のイメージファイルをダウンロードする必要があります。以下のリンクからダウンロードできます。

https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.2/zimaos_zimacube-1.2.2_installer.img

## ステップ2: イメージをUSBドライブにフラッシュ
ダウンロードが完了したら、イメージファイルをUSBドライブにフラッシュする必要があります。このプロセスにはBalena Etcherツールを使用することをお勧めします。手順は以下の通りです。

1. Balena Etcherをダウンロードしてインストールします。
2. Balena Etcherを開き、ダウンロードしたZimaOSのイメージファイルを選択します。
3. USBドライブを挿入し、ターゲットデバイスとして選択します。
4. “Flash”ボタンをクリックしてフラッシュプロセスを開始します。
![](https://manage.icewhale.io/api/static/docs/1722420534282_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420544771_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420558005_image.png)
## ステップ3: ZimaCubeを起動し、インストールを開始
1. フラッシュしたZimaOSイメージのUSBドライブをZimaCubeのUSBポートに挿入します。
2. USBから起動を選択します。
![](https://manage.icewhale.io/api/static/docs/1722420609193_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420617802_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420630615_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420644847_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420663108_image.png)
## ステップ4: インストールを完了
インストールプロセスが完了すると、システムはUSBドライブを取り外すように求めます。この時点で、USBドライブを取り外し、ZimaCubeを再起動する必要があります。システムは自動的にZimaOS V1.2.2に起動します。
![](https://manage.icewhale.io/api/static/docs/1722420697254_image.png)
## ステップ5: IPアドレスを取得し、ZimaOSにアクセス
![](https://manage.icewhale.io/api/static/docs/1722420740564_image.png)
![](https://manage.icewhale.io/api/static/docs/1722420752348_image.png)
おめでとうございます！ZimaCubeにZimaOS V1.2.2を成功裏にインストールしました。これで、ZimaOSが提供する豊富な機能を探索し、利用することができます。

詳細については、ZimaOS GitHubリポジトリをご覧ください。