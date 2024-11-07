---
title: ZimaCubeの自動電源オンソリューション
description:
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください、descriptionは記事の説明であり、未記入の場合は最初の段落の内容を切り取ります
---
# 要件説明
現在、ZimaCubeは接続されると電源ボタンを押して起動する必要があります。一部のユーザーは、電源が供給されると自動的に起動する機能を望んでいます。

# ソリューション
マザーボードのジャンパーピンを変更します。

# 詳細手順
## ステップ1: ZimaCubeの電源を切り、プラグを抜いてください

## ステップ2: ZimaCubeの上蓋を開ける
![](https://manage.icewhale.io/api/static/docs/1722413156672_image.png)

## ステップ3: AUTO-PWR1を見つける
![](https://manage.icewhale.io/api/static/docs/1722413204344_image.png)

## ステップ4: ジャンパーピンを変更する
ジャンパーキャップの位置を移動します。AUTOの近くの2つのピンは、接続後に電源ボタンを押す必要があることを示し、PWR1の近くの2つのピンは、接続後に自動的に起動することを示します。

以下は、電源オフ後に電源ボタンを押して起動する必要がある位置です：
![](https://manage.icewhale.io/api/static/docs/1722413242930_image.png)

以下は、接続後に自動的に起動する位置です：
![](https://manage.icewhale.io/api/static/docs/1722413266760_image.png)
ニーズに応じて位置を変更できます。