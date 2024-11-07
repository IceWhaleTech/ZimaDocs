---
title: Unraidの最初の体験 - $129でのインストール
---

# Unraidの紹介

![introduce unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-introduce-unraid.png)

Unraid OSは、洗練されたメディア愛好家、ゲーマー、その他のデータ集約型ユーザーが、ほぼ任意のハードウェアの組み合わせを使用して、データ、メディア、アプリケーション、デスクトップを完全に制御できるようにします。

# 第一の選択肢 - 公式ソフトウェアの焼き付けイメージ

## USBスティックを使用したインストール

1G以上のUSBスティックを準備し、FAT32フォーマットでフォーマットします。名前をUNRAIDに変更します（Mac）。

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive1.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive2.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive3.png)

## 公式 [USBクリエーター](https://unraid.net/download) をダウンロード

![Creator Unraid Offical](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-usb-creator.png)

## [公式イメージ](https://unraid.net/download) をダウンロード

![Download Unraid offical image](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-image.png)

## USBクリエーターを開いてUnraidOSを書き込む

仕様に応じて以下のオプションを選択します：

![write unraid os](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-unraid-os.png)

**「書き込み」をクリックして待機します。**

![write unraid image](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image.png)

![write unraid image done](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image-done.png)

# 第二の選択肢 - システムイメージを手動で書き込む

## "make_bootable"を修正する

**イメージパッケージをダウンロードしてすべてのファイルを抽出し、抽出したファイルをUSBスティックのルートディレクトリにコピーします**

> **ヒント：**
>
> USBスティックのフォーマットもFAT32である必要があります。
>
> Windowsシステムでは、USBスティックからmake_bootable.batファイルを管理者として実行する必要があります。
>
> Linuxシステムではmake_bootable_linuxファイルを実行します。

![change Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-click-boottable.png)

## 焼き付け完了

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in.png)

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in1.png)

## ZimaBoardにUnraidOSをインストール

## インストールUSBスティックから起動

![Boot Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot.png)

## OSの選択

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot-choose-unraidos.png)

> ## ブートモードセレクター (Syslinux)
> 
> BIOSを設定した後、Unraid Server OSのブートメニューが表示されます。選択可能な複数のオプションがあります：
>
> **unRAID OS (ヘッドレス)**
>
> Unraid Server OSの標準ブートモード。ヘッドレスモードは、デスクトップモードよりもメモリを少なく使用しますが、管理のためにWebGUIにアクセスするためには別のデバイスの使用を依存します。
>
> **Unraid OS GUIモード (デスクトップ)**
>
> デスクトップモードは、WebGUI、製品ドキュメント、便利なLinuxユーティリティ（bashシェル、midnight commander、htopなど）にアクセスするためのクイックランチメニューを持つ軽量デスクトップインターフェースを読み込みます。このモードは、ネットワーク接続の問題を診断しようとしているユーザーや、WebGUIに接続するための別のデバイスを持っていないユーザーに役立つかもしれません。
>
> **unRAID OSセーフモード (ヘッドレス)**
>
> プラグインがシステムの安定性に問題を引き起こしているか診断するためにこのブートモードを使用します。

![log in unraid OS](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-log-in-unraid-with-ip.png)

# Unraid WebGUIへの接続

UnraidのWebGUIに接続する方法は2つあります：

- GUIモードでUnraidを起動し、ログインする（ユーザー名は**`root`**、デフォルトではパスワードはありません）；または

- MacまたはPCからWebブラウザを開き、**`http://tower.local`**に移動します。注意：USBフラッシュクリエーターで異なるホスト名を設定した場合は、**`tower`**の代わりにその名前を使用してください。

![Unraid user dashboard](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-unraid-dashborad.png)

これがUNRAIDのメインインターフェースです。このページでは、システムの状況、マザーボード情報、CPU使用率、ネットワーク、ディスク情報、ユーザー情報など、多くの情報を見ることができます。

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)