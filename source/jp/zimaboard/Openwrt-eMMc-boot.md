---
title: ZimaBoard eMMC バーンインバージョンに最適な相棒、OpenWRT
---

# トピック

ZimaBoardの性能はRaspberry PiとMicroServerの中間に位置し、価格帯もそれに見合ったもので、多くのゲーマーにとってZimaBoardの最適な使い方は、間違いなく数百ドルでカスタマイズ可能なOpenWRT / pfSense x86ルーターを、十分な演算能力で実現することです。

このチュートリアルに基づき、ZimaBoardのプリビルドシステムの使用方法を示します。数ステップで、おなじみのルーティングシステムを操作するための道を開きます。

# 準備

1. PCホスト x1
2. ZimaBoard x1（PCと同じLANに接続）
3. お好きなx86 OpenWrtイメージ、またはこのリンクからチームが推奨するイメージをダウンロード

> **ヒント：**
>1. このチュートリアルは、OpenWRTをZimaBoardのeMMCに直接インストールし、プリインストールされているオペレーティングシステムを上書きおよび削除します。元のシステムのユーザーデータは必ず保存およびバックアップしてください！
>2. OpenWRTイメージ、例：.imgサフィックスの付いたイメージファイル！.gzファイルが含まれている場合

# 操作手順

## システムにログイン

PCから```casaos.local```経由でZimaBoardのCasaOSパネルにログイン

![Openwrt eMMc Boot Log In CasaOS](/images/Openwrt-emmc-boot/openwrt-emmc-boot-log-in-casaos.png)


## OpenWRTイメージをアップロード
**1. PCで準備したOpenWRTイメージをZimaBoardのストレージにアップロード**
  a. ファイルアプリをクリックし、ディレクトリを選択してアップロードボタンをクリック

**2. ローカルパスから、OpenWRTイメージをアップロードを選択**

![Upload The OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image.png)

**3. アップロードが完了するのを待ちます**

![Upload The OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image2.png)

## OpenWRTシステムをeMMCに書き込む
1. DDコマンドを使用してOpenWRTイメージをZimaBoardのeMMCに書き込みます
    a. ターミナル経由でZimaBoardシステムにログインし、PC上でSSH（ターミナルの出力接続、マシンのIPアドレスを知っている必要があります）

![OpenWRT Connect SSH](/images/Openwrt-emmc-boot/openwrt-emmc-boot-connect-ssh.png)

2. CasaOSのアカウントとパスワードでログイン
{% note danger %}
デフォルトアカウントパスワード
   アカウント： `casaos`
   パスワード： `casaos`
{% endnote %}

3. lsblkを入力して、ターゲットのeMMC名（mmcblk0であるべき）を確認します

![](/images/Openwrt-emmc-boot/openwrt-emmc-boot-find-emmc-name.png)

4. イメージファイルを解凍します（OpenWrtファイルがzipアーカイブの場合）
```
gzip -d [.gzまたは.img.gzのイメージ名]
```
![Unzip OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-unzip-image-file.png)

5. 解凍が正常に行われているか確認します！イメージファイルに異常がないことを確認してください

  ```
  ls -lh
  ```
- 以下のDDコマンドを入力して、ZimaBoardにアップロードしたOpenWrtイメージをeMMCに書き込みます！

  1. イメージパスがアップロードしたフォルダの場所およびファイル名と一致していることを確認してください！
  2. 書き込むイメージが.img拡張子を持っていることを確認してください！zipファイルではありません！

    ```bash
    sudo dd if=/DATA/[upload path]/[name.img] of=/dev/mmcblk0 bs=1024k status=progress
    ```
- DDコマンドが実行された後、ZimaBoardの電源を切り、再度電源を入れます。

## OpenWrtシステムにログイン
**1. OpenWrtシステムのIPアドレス情報を設定し、PCブラウザを使用してOpenWrt Luciページにログインします**

    {% note danger %}
    OpenWrt IPアドレス設定コマンドに関するチュートリアルは以下に添付されています
    https://openwrt.org/docs/guide-user/network/openwrt_as_routerdevice
    {% endnote %}

**2. 再起動し、OpenWrtシステムにログインします**
   
![Enter To Openwrt Luci](/images/Openwrt-emmc-boot/openwrt-emmc-boot-enter-to-openwrt-luci.png)

# まとめ
私は、各ZimaBoardで完全に独立したシステムとサービスを運用することを好みます。したがって、USBメモリでZimaBoardでOpenWRTを起動するよりも、この方法ははるかに簡単です。もし、ZimaBoardで同時にデュアルシステムを運用したい場合は、USBメモリを作成し、BIOS構成を通じてZimaBoardがログインしているシステムを切り替えることを検討してください。

OpenWRTシステムでCasaOSを運用したい方は、チュートリアルをチェックしてください！

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)