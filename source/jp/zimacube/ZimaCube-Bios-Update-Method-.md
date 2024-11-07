---
title: ZimaCube BIOS更新方法 
description: 
type: "Docs"
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明であり、未入力の場合は内容の最初の段落をキャプチャします
---
## 前準備：
- USBフラッシュドライブ（内容なし） X1
- モニター X1
- キーボード X1
- MiniDP X1
## ステップ1：BIOSインストールパッケージのダウンロード

|ZimaCube N100|https://drive.google.com/file/d/1yd8Z2fJNr69TLyy6381JzVSHP_Af0awQ/view?usp=drive_link |
| - | - |
| ZimaCube Pro 1235u |https://drive.google.com/file/d/1hQI2oe0C9CIsylP0vjdP3tZSljgslkx8/view?usp=drive_link |

## ステップ2：USBフラッシュドライブの準備
USBフラッシュドライブをFAT32フォーマットでフォーマットし、ZimaCubeのモデル番号に従ってインストールパッケージをダウンロードし解凍し、EFIフォルダを空のUSBフラッシュドライブにコピーします。
| ![](https://manage.icewhale.io/api/static/docs/1729233074284_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729233088117_image.png) |
| - | - |
## ステップ3：BIOSの更新
USBフラッシュドライブ、キーボード、モニターをZimaCubeに接続し、電源を入れてF11キーを連続的に押して選択画面に入り、キーボードを操作してUEFIを選択します：
![](https://manage.icewhale.io/api/static/docs/1729233125821_image.png)
## ステップ4：インストールの開始
![](https://manage.icewhale.io/api/static/docs/1729233155418_image.png)
## ステップ5：インストール完了
![](https://manage.icewhale.io/api/static/docs/1729233179864_image.png)

*BIOSの更新が成功したら、電源ボタンを押して機械をオフにし、USBフラッシュドライブを抜き、次に電源ボタンを短く押してオンにします。BIOSの更新は完了です。*