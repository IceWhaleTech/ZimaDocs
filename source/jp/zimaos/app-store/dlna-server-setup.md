---
title: ZimaCubeとDLNAを使ってホームメディアセンターを作成する方法
description: 
type: Docs
author: admin
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明であり、未記入の場合は内容の最初の段落の文字をカットします。
---
## はじめに
このデジタル時代において、家庭用エンターテインメントシステムはますますインテリジェントで相互接続されています。高性能なパーソナルクラウドストレージデバイスであるZimaCubeは、大容量のストレージソリューションを提供するだけでなく、DLNA（デジタルリビングネットワークアライアンス）プロトコルもサポートしており、家庭内ネットワーク内であらゆるマルチメディアコンテンツを簡単に共有して再生できます。

このチュートリアルでは、ZimaCubeをDLNAサーバーとして設定し、XX TVをクライアントとして使用してシームレスなメディア再生体験を実現する方法を説明します。

開始する前に、最新のZimaOSをダウンロードしてインストールしてください: https://github.com/IceWhaleTech/ZimaOS/releases
## ステップ1: 設定を開き、「開発者モード」に入る
![](https://manage.icewhale.io/api/static/docs/1738831331021_image.png)
## ステップ2: DLNAを有効にする
「**開発者モード**」のインターフェースで、「**DLNA**」スイッチを見つけて、必ず有効にしてください。
![](https://manage.icewhale.io/api/static/docs/1738831393315_image.png)
## ステップ3: DLNA設定を構成する
「**DLNA構成**」をクリックして設定インターフェースに入ります。以下の2つのオプションを変更できます:
- **フレンドリー名:** デフォルトは「ZimaCube DLNA Server」で、より適した名前にカスタマイズできます。
- **メディアパス:** デフォルトのパスは`/media`で、必要に応じて**他のストレージパスに変更**できます。


| ![](https://manage.icewhale.io/api/static/docs/1738831857738_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738831871432_image.png) |
| - | - |

変更を完了したら、「**保存**」ボタンをクリックします。
## ステップ4: TVでコンテンツを再生する
1. DLNAをサポートするTVデバイスまたはプレイヤーアプリを開きます。
![](https://manage.icewhale.io/api/static/docs/1738831977224_image.png)
2. ネットワーク上のDLNAデバイスを検索し、「ZimaCube DLNA Server」を見つけます。
![](https://manage.icewhale.io/api/static/docs/1738832005480_image.png)
3. 共有されたメディアファイルをブラウズし、再生を選択します。

| ![](https://manage.icewhale.io/api/static/docs/1738832059024_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832067952_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832081469_image.png) |
| - | - | - |

## トラブルシューティング
接続や再生に問題がある場合は、以下の点を確認してください:
- ZimaCubeとTVが同じLANに接続されていることを確認してください。
- メディアファイルの形式がTVデバイスと互換性があるか確認してください。
- 共有フォルダに再生可能なメディアファイルがあることを確認してください。

## 追加の注意事項
異なるブランドのスマートTVでは異なるインターフェースや機能があるため、お使いのTVブランドのDLNA使用ガイドを参照してください。

## まとめ
簡単なステップで、家庭内ネットワークでHDビデオや音楽を簡単に共有して楽しむことができます。これがスマートホームエンターテインメントシステムの構築に役立つことを願っています！