---
title: ZimaCube BIOS の更新方法
description: "USB メモリを使用して ZimaCube の BIOS を更新します。N100 および Pro モデル向けのダウンロードリンク、詳しい手順、トラブルシューティングを紹介します。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

BIOS を更新すると、ハードウェアの互換性に関する問題の修正、システム安定性の向上、新機能の追加が可能です。新しいバージョンで解決される特定の問題が発生している場合、またはサポートチームから案内された場合にのみ BIOS を更新してください。

停電などで更新処理が中断されると、マザーボードが起動できなくなる可能性があります。開始する前に、ZimaCube が信頼できる電源に接続されていることを確認してください。

## 必要なもの

- 空の FAT32 形式の USB メモリ
- Mini DisplayPort で接続したモニター
- USB キーボード
- ZimaCube のモデルに対応する BIOS パッケージ（下記参照）

## ステップ 1：モデルを確認する

ダウンロードする前に、使用している ZimaCube のモデルを確認してください。モデル名はデバイス底面のラベルに記載されており、次のいずれかです。

| モデル | BIOS パッケージ |
|---|---|
| **ZimaCube N100** | [Google Drive リンク](https://drive.google.com/file/d/1yd8Z2fJNr69TLyy6381JzVSHP_Af0awQ/view?usp=drive_link) |
| **ZimaCube Pro 1235u** | [Google Drive リンク](https://drive.google.com/file/d/1hQI2oe0C9CIsylP0vjdP3tZSljgslkx8/view?usp=drive_link) |
| **Resizable BAR 対応 ZimaCube Pro 1235u** | [Google Drive リンク](https://drive.google.com/file/d/1i0cm2QHK2e4oNNmQU-0-pnABuqp4HR8N/view?usp=drive_link) |

Resizable BAR 機能は ZimaCube 2 の BIOS にすでに含まれているため、そのモデルではこの機能のための更新は不要です。

## ステップ 2：USB メモリを準備する

1. USB メモリを **FAT32** でフォーマットします。
2. 上の表から、使用しているモデルの BIOS パッケージをダウンロードします。
3. ダウンロードしたアーカイブを展開します。中に `EFI` フォルダーがあることを確認してください。
4. `EFI` フォルダー全体を USB メモリのルートにコピーします。

![](https://manage.icewhale.io/api/static/docs/1779788907886_image.png)

## ステップ 3：USB から起動する

1. USB メモリ、キーボード、モニターを ZimaCube に接続します。
2. 電源を入れ、起動メニューが表示されるまで **F11** を繰り返し押します。
3. 矢印キーで **UEFI:（使用する USB メモリ）**を選び、Enter を押します。

![](https://manage.icewhale.io/api/static/docs/1729233125821_image.png)

## ステップ 4：更新を実行する

BIOS の更新は自動的に開始され、進行状況の画面が表示されます。処理中は電源を切ったり USB メモリを抜いたりしないでください。通常は 2 分以内に完了します。

![](https://manage.icewhale.io/api/static/docs/1729233155418_image.png)

## ステップ 5：完了する

更新が完了すると、確認画面が表示されます。

![](https://manage.icewhale.io/api/static/docs/1729233179864_image.png)

電源ボタンを押してシャットダウンし、USB メモリを取り外します。もう一度電源ボタンを押して通常どおり起動します。

BIOS 更新後の最初の起動は、ハードウェアを再初期化するため通常より時間がかかる場合があります。これは正常です。

## トラブルシューティング

- **起動メニューが表示されない**：別の USB ポートを試してください。BIOS 更新には背面の USB 2.0 ポートが最も安定する傾向があります。F11 の代わりに **Delete** または **F2** も試してください。
- **起動メニューで USB メモリが検出されない**：USB メモリが FAT32 でフォーマットされ、EFI フォルダーが別のフォルダー内ではなくルートに置かれていることを確認してください。
- **更新が停止したように見える**：フリーズしたと判断する前に、少なくとも 5 分待ってください。一部の BIOS 更新では手順の間に長い停止時間があります。
- **更新後にシステムが起動しない**：**[CMOS リセット](./resets-cmos)**の手順を実行して BIOS のデフォルト設定を復元してください。
