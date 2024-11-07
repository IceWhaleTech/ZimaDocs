---
title: ZimaCubeの自動電源オンソリューション
description:
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明です。未記入の場合、内容の最初の段落のテキストを切り取ります。
---
# 要件の説明
現在、ZimaCubeは電源に接続された後、電源ボタンを押して起動する必要があります。一部のユーザーは、電源供給時に自動起動機能を望んでいます。

# 解決策
メインボードのジャンパーピンを修正します。

# 詳細手順
## ステップ1: ZimaCubeがシャットダウンしていることを確認し、プラグを抜いてください

## ステップ2: ZimaCubeのトップカバーを開ける
![](https://manage.icewhale.io/api/static/docs/1722413156672_image.png)

## ステップ3: AUTO-PWR1を探す
![](https://manage.icewhale.io/api/static/docs/1722413204344_image.png)

## ステップ4: ジャンパーピンを修正する
ジャンパーキャップの位置を移動します。AUTOの近くの2つのピンは、接続後に電源ボタンを押す必要があることを示し、PWR1の近くの2つのピンは、接続後に自動起動することを示します。

以下は、電源オフ後に電源ボタンを押す必要がある位置です：
![](https://manage.icewhale.io/api/static/docs/1722413242930_image.png)

以下は、接続後に自動起動する位置です：
![](https://manage.icewhale.io/api/static/docs/1722413266760_image.png)
あなたのニーズに応じて位置を変更できます。