---
title: TrueNASのインストール
description:
type: “Docs”
tip: トップバーの固定フォーマットは削除しないでください、descriptionは記事の説明です。記入しない場合、内容の最初の段落が切り取られます
---
# ZimaCubeにTrueNASをインストールするガイド
![](https://manage.icewhale.io/api/static/docs/1727244342954_image.png)
## ハードウェア環境：
1X ZimaCube N100プロトタイプ V2.0
1X モニター
1X HDMI/DPケーブル
1X キーボード
1X イーサネットケーブル
1X USBフラッシュドライブ（インストールディスクとして使用）

![](https://manage.icewhale.io/api/static/docs/1727244553488_image.png)

## 簡単な操作手順の説明：
  - TrueNAS.isoイメージファイルをダウンロードし、Rufusを使用してこのファイルをUSBフラッシュドライブに書き込み、インストールディスクを作成します。
  - インストールディスクをZimaCube N100プロトタイプ V2.0に挿入し、インストールが完了したら取り出します。
  - ZimaCube N100プロトタイプ V2.0を再起動します。
  - TrueNASにログインし、使用します。
## 詳細なインストール手順
### ステップ1：イメージファイルをダウンロード
  以下の公式リンクをクリックしてください：
  https://www.truenas.com/download-truenas-core/
  ![](https://manage.icewhale.io/api/static/docs/1727244630367_image.png)
### ステップ2：インストールUSBディスクを作成
  Rufusを使用し、USBディスクデバイスを選択し、isoファイルを追加します；
  ![](https://manage.icewhale.io/api/static/docs/1727244652725_image.png)
### ステップ3：ZimaCubeにTrueNasをインストール
![](https://manage.icewhale.io/api/static/docs/1727244670117_image.png)
#### 3.1 eMMCインストールを選択
![](https://manage.icewhale.io/api/static/docs/1727244696012_image.png)
#### 3.2 パスワードを設定
![](https://manage.icewhale.io/api/static/docs/1727244712012_image.png)
#### 3.3 インストール成功
![](https://manage.icewhale.io/api/static/docs/1727244726567_image.png)
#### 3.4 ZimaCubeを再起動
![](https://manage.icewhale.io/api/static/docs/1727244747055_image.png)
### ステップ4：IPを読み取りTrueNasにアクセス 
![](https://manage.icewhale.io/api/static/docs/1727244760285_image.png)
## これでZimaCubeでTrueNASを使用できます！
![](https://manage.icewhale.io/api/static/docs/1727244829586_image.png)