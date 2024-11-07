---
title: オールインワンルーティングシステム - OpenWRTのインストール
typora-root-url: ..
---

# OpenWRTの紹介

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/openwrt-logo.svg)

偉大な[OpenWRTドキュメント](https://oldwiki.archive.openwrt.org/start)に敬意を表して、この文書ではZimaBoardへのOpenWRTのインストールだけを記録します。現在、ZimaBoardのeMMC用にOpenWRTシステムを書くための別の記事もあります。

**OpenWRTはZimaBoard USBスティックログインバージョンの最良の相棒です - お気に入りのOpenWRTホームブレッドファームウェアを焼くための5ステップ**


{% note dinfo %}
**トピック**

Raspberry PiとMicroServerの間のパフォーマンスと価格ポジショニングを持ち、多くのゲーマーにとってZimaBoardを最もよく活用する方法は間違いなく、十分な計算能力を持つカスタマイズ可能な100ドルのOpenWRT/pfSense x86ルーターになることです。したがって、この簡単なチュートリアルに基づいて、USBスティックブートディスクの作成方法を示し、数ステップ後にOpenWRTにログインします。
{% endnote %}

## **準備**

1. PCホスト
2. ZimaBoard（PCと同じLANにアクセス）
3. Uディスク
4. キーボード
5. MiniDPからHDMIまたはDPアダプター
6. モニター
7. イーサネットケーブル
8. OpenWrtイメージ（またはこのリンクからチームが推奨するミラーをダウンロード）
9. balenaEther（または通常使用しているUディスクイメージ作成ツールのいずれか）

# 操作手順

## 1. USBスティックにOpenWRTシステムを作成する
詳細な手順については、ユニバーサルサードパーティシステムインストールを参照してください。

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-creat-mirror.png)

## 2. 関連機器の接続

**MiniDPからHDMI / DPケーブルでZimaBoardを接続し、表示にアクセスし、USBキーボードをZimaBoardに接続**

![openwrtルーターシステムzimaboard接続](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-zimaboard-connect.png)

## 3. BIOSに入る

**USBスティックをZimaBoardに挿入し、起動して「DEL」をクリックしてBIOSページにログイン**

![OpenWRT BIOSに入る](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-to-bios.png)

## 4. BIOSでの選択

**ブートオプションでUSBフラッシュドライブをブートオプション#1として設定し、設定を保存して再起動します。再起動後、USBドライブOpenWRTに入ります。**

![OpenWRTブートを選択](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-choose-boot.png)

## 5. IPを見つけてOpenWRTにログイン

**OpenWRTシステムのIPアドレス情報を設定し、PCブラウザを使用してOpenWRT Luciページにログイン**

![OpenWRT Luciにログイン](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-openwrt-luci.png)

# ログイン成功！！！！

![OpenWRTのインストール完了](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-complete-install-openwrt.jpeg)

# まとめ

**USBスティックでOpenWRTを実行することは比較的簡単な方法です。しかし、志を持つゲーマーとして、ZimaBoardのeMMCにOpenWrtシステムを書き込みたい場合は、以下のチュートリアルを参照できます。ネットワークの強化やホームクラウドデータ管理のためにOpenWRTでより興味深いソフトウェアサービスを実行することに興味がある場合は、このリンクをチェックしてください！**

**もちろん、他の方法もあり、OpenWRTファームウェアのダウンロードアドレスもここに提供されています—— [ファームウェアダウンロードアドレス](https://supes.top/?version=22.03&target=x86%2F64&id=generic)**
**権力のために乱用しないでください。**


[![Discordカード](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)