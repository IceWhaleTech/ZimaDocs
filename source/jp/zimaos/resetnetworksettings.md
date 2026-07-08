---
title: ネットワーク設定をリセット
description: "ネットワークの変更によって接続の問題が発生した場合に、USBドライブを使用してZimaOSのネットワーク設定と固定IP構成をリセットする方法。"
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

ZimaOSで固定IPを設定しており、ネットワークの変更によりネットワークIP設定をリセットする必要がある場合は、このチュートリアルを使用して設定済みのIPバインディングをリセットできます。

{% note warn  %} 
**注意:** 以下のUSBリセット手順を試す前に、まず別のネットワークポートに接続し、ZimaClientを使用して再度ネットワークを検索してください。
{% endnote %}

### USBドライブをフォーマットする
Windowsでは、USBドライブを右クリックし、exFATを選択してフォーマットできます。  
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

Macでは、ディスク管理ツールでディスクを選択し、消去操作を実行してください。  
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### _ResetNetwork ファイルを作成する
ディスクのルートディレクトリにファイルを作成し、名前を`_ResetNetwork`にしてください。拡張子は付けず、ファイルは空のままにしてください。  
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### ZimaOSに挿入し、20秒待ちます。
以下のいずれかの状態になれば成功です。

- ディスプレイにIPアドレスが変更されたことが表示される。
- USBドライブ内の`_ResetNetwork`ファイルが削除されている。