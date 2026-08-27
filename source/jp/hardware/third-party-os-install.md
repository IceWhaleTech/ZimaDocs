---
title: ユニバーサルサードパーティシステムインストール
typora-root-url: ..
---
## 理由

**多くのユーザーは、システムをダウンロードした後のインストール方法を知らない。明確なインストール手順も知らない。この文章は、ユーザーがシステムのインストールに関する問題を解決するのを助ける。**

## ユニバーサルプロダクションミラー

**コンピュータで準備する必要があること。**
- コンピュータに[balenaEtcher](https://www.balena.io/etcher/)をダウンロードしてインストールする
- インストールしたいシステムイメージをダウンロードする、テキストでは[Ubuntu Server](https://ubuntu.com/download/server)
  

**ZimaBoardに関する準備。**

- ZimaBoardと電源アダプター
- USBドライブ（インストールしたいシステムイメージよりも大容量である必要があります）
- MiniDP to DP/HDMIアダプター（モニターに接続するために使用）
- モニター
- キーボード
- USBハブ（オプション、USBポートが不足している場合）
- マウス（オプション）
  - インストールしたいシステムインストーラーにGUIインタラクティブインターフェースが付属している場合は便利です。ほとんどのデスクトップOSにはありますが、サーバーOSには一般的にはありません。）
- ネットワークケーブル（推奨）
  - システムをインストールしながらネットワーク設定を完了し、最新のセキュリティおよび機能のアップデートを同時にインストールするのに便利です。）

# インストールUSBスティックを作成する

## 1. balenaEtcherを開く


![Open Balenaetcher](/images/Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

## 2. “ファイルからフラッシュ”をクリックし、先にダウンロードしたシステムイメージを選択します。

![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/intall-ubuntu-system-choose-image-in-balenaetcher.png)


![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-image-in-balenaetcher1.png)

## 3. “ターゲットを選択”をクリックし、ダイアログボックスで挿入したUSBドライブを選択します。

![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-usb-disk.png)

## 4. “フラッシュ！”をクリックし、完了するのを待ちます。
プロセスの間にシステムパスワードの入力を求められることがありますので、入力してOKをクリックしてください。

![Enter you Computer Account And Password](/images/Installing-Ubuntu-System/install-ubuntu-system-enter-password.png)

全プロセスには数分かかります、システムイメージのサイズとUSBドライブの読み書き速度によって異なります。

![Waitting Balenaetcher Flash](/images/Installing-Ubuntu-System/install-ubuntu-system-makeing-image.png)

## 5. 完了！ USBドライブを取り外し、準備完了です！

![Complete Create Usb Boot](/images/Installing-Ubuntu-System/install-ubuntu-system-image-complete.png)

## ユニバーサルスタートアップシステム

ZimaBoardが接続された後、**`F11キー`** / **`Deleteキー`** を連続して押します。USBブートディスクを挿入すると、自動的にUSBキーが表示され、USBキーを選択してEnterキーを押します。

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)