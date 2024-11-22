---
title: ネットワーク設定のリセット
description: 
type: Docs
author: icewhale123456
tip: 上部バーの固定形式は削除しないでください、descriptionは記事の説明であり、未入力の場合は内容の最初の段落が切り取られます
---
## シナリオ
ZimaOSで静的IPを設定した場合、ネットワークの変更によりネットワークIP設定をリセットする必要がある場合は、このチュートリアルを使用して設定されたIPバインディングをリセットできます。
### USBドライブのフォーマット
Windowsでのフォーマットは、USBドライブを右クリックしてexFATを選択して行えます。
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

Macのフォーマットは、ディスク管理ツールでディスクを選択し、消去操作を行います。
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### _ResetNetworkファイルの作成
ディスクのルートディレクトリにファイルを作成し、名前を`_ResetNetwork`と付けます。拡張子をつけないことを忘れず、ファイルは空である必要があります。
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### ZimaOSに挿入し、20秒待ちます。
次の条件のいずれかが満たされれば成功と見なされます。
- 画面にIPが変更されたことが表示される。
- USBドライブ内の`_ResetNetwork`ファイルが削除された。