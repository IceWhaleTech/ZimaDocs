---
title: ディスクのインストール
description: "ZimaCube HDDインターフェース使用ガイド。SATAおよびNVMeドライブの接続方法、ドライブの健康状態の確認方法、NASのストレージ容量を最大化する方法を学びます。"
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /jp/zimacube/hdd-interface-guide.html
---
## デバイスのロック解除
1. **フロントパネルを取り外す**
ZimaCubeシャーシの内部コンポーネントにアクセスするため、フロントパネルを慎重に取り外します。
{% note warn Tips %}
フロントパネルはマグネットで固定されています。取り外すには、角を押して持ち上げるだけです。
{% endnote %}

3. **ボタンを押してハンドルのロックを解除する**
ハードドライブベイにある黄色のボタンを確認して押します。これにより、ハードドライブトレイのロック機構が解除されます。
4. **トレイを引き出す**
ハードドライブトレイのハンドルが飛び出したら、ゆっくりと引いて、ハードドライブトレイをベイからスライドさせて取り出します。

## SATAディスクのインストール
### 3.5インチハードディスクのインストール
1. **ハードドライブトレイを準備する：**
- ハードドライブトレイを取り外して準備します。
2. **3.5インチハードドライブを挿入する：**
- 3.5インチハードドライブをトレイに置き、ハードドライブ側面のネジ穴とトレイのネジ穴を合わせます。
3. **ハードドライブを固定する：**
- 付属の6-32ネジを使用してハードドライブを固定します。適切に取り付けるため、ZimaCubeに付属するネジを使用することを推奨します。
- ネジを締め、表面が平らで均一になるようにしてください。

### 2.5インチハードディスクのインストール
1. **ハードドライブトレイを準備する：**
- ハードドライブトレイを取り外して準備します。
2. **2.5インチハードドライブを挿入する：**
- 2.5インチハードドライブをトレイに置き、ハードドライブ側面のネジ穴とトレイのネジ穴を合わせます。
3. **ハードドライブを固定する：**
- 付属のM3ネジを使用してハードドライブを固定します。適切に取り付けるため、ZimaCubeに付属するネジを使用することを推奨します。
- ネジを締め、表面が平らで均一になるようにしてください。

## M.2 NVMeディスクのインストール
M.2 NVMe/PCIeドライブの取り付け方法

1. **7番目のベイを準備する：**
7番目のベイを取り外して準備します。
2. **PCIe SSDを挿入する：**
- M.2インターフェースを合わせ、NVMe SSDを30～45度の角度でスロットにゆっくり差し込み、その後平らに押し下げます。
（正しく取り付けられると、カチッという音がして固定されます。無理に押し込まないでください。簡単に入らない場合は、位置合わせを再確認して調整してください。）
3. **M.2 NVMe/PCIe SSDを固定する：**
- 適切なネジを使用してSSDを固定します。
- 

{% note warn Tips %}
**M key** は通常PCIe x2/x4をサポートします。
{% endnote %}

![What’s the Difference of M.2 B key or M key](https://manage.icewhale.io/api/static/docs/1734673960689_image.png)


## 互換性リスト
| <center>Compatible</center> | <center>Brand</center> | <center>Level</center> | <center>Type</center> | <center>Serial</center> | <center>No</center> | <center>Capacity</center> | <center>Note</center> |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD2002FFSX</center> | <center>2T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD4005FFBX</center> | <center>4T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD6005FFBX</center> | <center>6T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD8005FFBX</center> | <center>8T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD102KFBX</center> | <center>10T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD121KFBX</center> | <center>12T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD142KFGX</center> | <center>14T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD161KFGX</center> | <center>16T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD181KFGX</center> | <center>18T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD201KFGX</center> | <center>20T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD221KFGX</center> | <center>22T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red(®)Pro</center> | <center>WD240KFGX</center> | <center>24T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center>WD20EFZX</center> | <center>2T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center>WD30EFZX</center> | <center>3T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center>WD40EFPX</center> | <center>4T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center>WD60EFPX</center> | <center>6T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center>WD80EFPX</center> | <center>8T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center>WD101EFBX</center> | <center>10T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center>WD120EFBX</center> | <center>12T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center>WD140EFGX</center> | <center>14T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>HDD</center> | <center>Red Plus</center> | <center></center> | <center></center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>Enterprise</center> | <center>HDD</center> | <center>Purple</center> | <center></center> | <center>4T</center> | <center></center> |
| <center>Yes</center> | <center>SEAGATE</center> | <center>Enterprise</center> | <center>HDD</center> | <center>EXOS</center> | <center>X20</center> | <center>20T</center> | <center></center> |
| <center>Depends</center> | <center>SEAGATE</center> | <center>NAS</center> | <center>HDD</center> | <center>Ironwolf/Ironwolf Pro</center> | <center></center> | <center>10T/14T/20T</center> | <center>Recommended for use only in Zimacube 2</center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>Gaming</center> | <center>SSD</center> | <center>Black</center> | <center>SN770</center> | <center>1T</center> | <center></center> |
| <center>Depends</center> | <center>WD (HGST)</center> | <center>Enterprise</center> | <center>HDD</center> | <center>Ultrastar</center> | <center>0f27610</center> | <center>8T</center> | <center>Need to shield pin3</center> |
| <center>Depends</center> | <center>WD</center> | <center>Enterprise</center> | <center>HDD</center> | <center>Ultrastar</center> | <center>HC 520</center> | <center>8T</center> | <center>Need to shield pin3</center> |
| <center>Depends</center> | <center>WD</center> | <center>Enterprise</center> | <center>HDD</center> | <center>Ultrastar</center> | <center>HC 520</center> | <center>12T</center> | <center>Need to shield pin3</center> |
| <center>Depends</center> | <center>SEAGATE</center> | <center>NAS</center> | <center>HDD</center> | <center>Ironwolf Pro</center> | <center></center> | <center>4T</center> | <center></center> |
| <center>NO</center> | <center>SEAGATE</center> | <center>NAS</center> | <center>HDD</center> | <center>Ironwolf</center> | <center></center> | <center>4T</center> | <center></center> |
| <center>Yes</center> | <center>WD (HGST)</center> | <center>Enterprise</center> | <center>SSD</center> | <center></center> | <center>SN200</center> | <center>3.8TB</center> | <center>Need to shield pin3</center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>SSD</center> | <center>Red</center> | <center>WDS250G1R0C</center> | <center>250G</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>SSD</center> | <center>Red</center> | <center>WDS500G1R0C</center> | <center>500G</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>SSD</center> | <center>Red</center> | <center>WDS100T1R0C</center> | <center>1T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>SSD</center> | <center>Red</center> | <center>WDS200T1R0C</center> | <center>2T</center> | <center></center> |
| <center>Yes</center> | <center>Western Digital</center> | <center>NAS</center> | <center>SSD</center> | <center>Red</center> | <center>WDS400T1R0C</center> | <center>4T</center> | <center></center> |

More to come...