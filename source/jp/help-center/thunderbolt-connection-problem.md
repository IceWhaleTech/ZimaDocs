---
title: Thunderbolt接続問題の確認
description: 
type: Docs
author: icewhale123456
tip: 上部バーの固定フォーマットは削除しないでください、descriptionは記事の説明で、未入力の場合は内容の最初の段落を切り取ります
---
Thunderbolt接続後に反応がない場合、以下の項目に従って確認できます。

1. ZimaCubeがProバージョンであることを確認してください
ZimaCube Proバージョンのみ、Thunderbolt機能を持っています。背面パネルの電源近くに2つのThunderboltインターフェースがあるか確認してください。以下の図のようになります。
![](https://manage.icewhale.io/api/static/docs/1731392263987_image.png)

2. クライアントにThunderboltポートがあることを確認してください
一般的に、ThunderboltにはThunderboltロゴがあり、対応するハードウェア情報を照会して、それがThunderboltインターフェースであることを確認できます。
![](https://manage.icewhale.io/api/static/docs/1731392292731_image.png)

3. Thunderboltケーブルを確認してください
Thunderboltケーブルには一般的に特別なロゴがあり、ハードウェアがThunderbolt通信をサポートしているかどうかも確認できます。
![](https://manage.icewhale.io/api/static/docs/1731392311295_image.png)

4. ZimaCubeがThunderboltハードウェアを認識していることを確認してください (lspci)
‘lspci | grep Thunderbolt’コマンドを実行し、結果は以下の通りです。
![](https://manage.icewhale.io/api/static/docs/1731392323684_image.png)

5. ZimaCubeのThunderboltポートがハードウェアを認識できることを確認してください
- タイプC USBを見つけてZimaCubeに接続し、ZimaOSで認識されるかどうかを確認してください。
- タイプCディスプレイを探し、接続後に正常に動画を出力できるか確認してください。

上記のトラブルシューティング手順に従っても問題が解決しない場合は、再度ご連絡いただき、トラブルシューティングのステップをお知らせください。