---
title: Reset Network Settings
description: 
type: Docs
author: icewhale123456
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明で、未記入の場合は内容の最初の段落が抽出されます。
---
ZimaOSで静的IPを設定しており、ネットワーク変更によりIP設定をリセットする必要がある場合は、このチュートリアルを使用して設定されたIPバインディングをリセットできます。

{% note warn  %} 
**注意:** 以下のUSBリセット手順を試す前に、別のネットワークポートに接続してからZimaClientを使用してネットワークを再検索してください。
{% endnote %}

### USBドライブをフォーマットする
WindowsではUSBドライブを右クリックしてexFATを選択し、フォーマットできます
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

Macではディスクユーティリティでディスクを選択し、消去操作を行います
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### _ResetNetwork ファイルを書き込む
ディスクのルートディレクトリにファイルを作成し、名前を `_ResetNetwork` とします。拡張子を付けず、ファイルは空にしてください。
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### ZimaOSに挿入し、20秒待つ
以下のいずれかの条件が満たされれば、成功とみなされます。
- ディスプレイにIPが変更されたことが表示される
- USBドライブ内の `_ResetNetwork` ファイルが削除されている