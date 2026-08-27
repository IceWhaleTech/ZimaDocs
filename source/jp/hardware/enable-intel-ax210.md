---
title: ZimaOSでIntel AX210 Wi-Fiモジュールを有効にする方法は？
description:  
type: Docs
author: admin
tip: 上部バーの固定形式は削除しないでください。descriptionは記事の説明です。未記入の場合、コンテンツの最初の段落の文が切り取られます。
---

**🎯 目的**
ZimaOS上でAX210 Wi-Fiカードを有効にし、グラフィカルインターフェースなしでワイヤレスネットワークに接続します。

## ZimaOS v1.4.2以降
Intel AX210はWi-Fi 6Eをサポートする高性能ワイヤレスカードです。多くのZimaデバイスユーザーはこれをワイヤレス接続に依存しています。このガイドでは、コマンドライン専用環境でAX210を有効にし、Wi-Fiに接続する手順を説明します。
👉 [最新バージョンのZimaOSをダウンロードするにはこちらをクリック](https://github.com/IceWhaleTech/ZimaOS)

## ステップ 1: AX210が認識されているか確認する
次のコマンドを実行します：
```language
lspci | grep -i network

```
次のような出力が表示されるはずです：

`Intel Corporation Wi-Fi 6E AX210...`

![ターミナル出力は、lspciを介してZimaOSでのIntel AX210 Wi-Fiの検出を確認します。](https://manage.icewhale.io/api/static/docs/1751615644136_image.png)

検出されていない場合は、カードが正しいM.2 E-keyスロットに挿入されていることと、ハードウェアが機能していることを確認してください。
## ステップ 2: nmtuiを使用してWi-Fiに接続する
ZimaOSには`nmtui`コマンドラインツールが含まれています。次のコマンドで起動します：
```language
sudo nmtui
```
次に：
- `Activate a connection`を選択
- Wi-Fiネットワーク（SSID）を選択
- パスワードを入力してEnterを押します

| ![](https://manage.icewhale.io/api/static/docs/1751616098976_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616105026_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616124786_image.png) |
| :---------------: | :---------------: | :---------------: |

## ステップ 3: IPアドレスと接続状況を確認する
ワイヤレスインターフェースの状態を確認します：
```language
ip a
```
![Linuxにおけるip aコマンドのターミナル出力。ネットワークインターフェースの構成（IPアドレスやステータスを含む）を表示します。](https://manage.icewhale.io/api/static/docs/1751616224099_image.png)

🖥️ **オプション:** ZimaOSダッシュボードでネットワーク設定を表示および管理する
ZimaOSのWeb UI（ダッシュボード）を使用している場合、そこでネットワーク設定を表示および構成することもできます。
例：
<p align="center">
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616926003_image.png)" width="45%" />
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616939282_image.png)" width="45%" />
</p>

🎉 **これで完了です！**
あなたのAX210 Wi-Fiカードは今や接続され、ZimaOSで使用できる準備が整いました。

質問がある場合は、サポートメールにお問い合わせください: <support@icewhale.org>