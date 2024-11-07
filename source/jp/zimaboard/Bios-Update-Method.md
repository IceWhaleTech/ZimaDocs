---
title: ZimaBoard BIOSアップデート方法
description: 
type: "Docs"
tip: 上部バーの固定形式は削除しないでください。descriptionは記事の説明であり、入力しない場合は内容の最初の段落が切り取られます。
---
## 前準備：
- USBフラッシュドライブ（内容未使用）X1
- モニター X1
- キーボード X1
- MiniDP X1
## ステップ1: BIOSインストーラをダウンロード
**リンク:**
{% note warn 警告 %}
J3455 CPUを搭載したzimaboard832用のBIOSアップデートパッケージはありません
{% endnote %}

| モデル | CPU | ダウンロードリンク |
| - | - | - |
| ZimaBoard 232 | N3350 | [https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link](https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link) |
| ZimaBoard 432 | N3450 | [https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link](https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link) |
| ZimaBoard 832 | N3450 | [https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link](https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link) |
## ステップ2: USBフラッシュドライブを準備
USBドライブをFAT32形式にフォーマットし、ZimaBoardのモデル番号に従ってインストールパッケージを開き、EFIフォルダーを空のUSBドライブにコピーします。
|![](https://manage.icewhale.io/api/static/docs/1729154067524_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729154081840_image.png) |
| - | - |
## ステップ3: BIOSを更新
USBフラッシュドライブ、キーボード、モニターをZimaBoardに接続し、電源を入れた後、F11を連続して押して選択画面に入り、キーボードを操作してUEFIを選択します：
![](https://manage.icewhale.io/api/static/docs/1729154195372_image.png)
## ステップ4: インストールを開始
![](https://manage.icewhale.io/api/static/docs/1729154235770_image.png)

## ステップ5: インストール完了
![](https://manage.icewhale.io/api/static/docs/1729154248434_image.png)