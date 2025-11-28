---
title: ZimaBoard 2へのOpenWrtインストール
description: 
type: Docs
author: admin
tip: 上部のバーの固定フォーマットは削除しないでください。descriptionは記事の説明です。入力しない場合は最初の段落の内容が自動的に取り込まれます。
---
## 1.はじめに

![OpenWrtの公式ロゴ](https://manage.icewhale.io/api/static/docs/1764298451910_The_official_logo_of_openwrt.png)

OpenWrtは、家庭用ルーター、企業用ルーター、ソフトルーター、NASデバイス、その他のネットワーク機器で広く使用されているオープンソースのLinuxベースのルーターOSです。高い柔軟性とカスタマイズ性を提供し、ユーザーはネットワークデバイスを小さなLinuxサーバーを操作するように管理できます。

OpenWrtの主な特徴は以下の通りです：

* **オープンソースで透明性あり**：ブラックボックスコンポーネントなしで完全に制御可能。
* **高い拡張性**：VPN、AdGuard、Dockerなどの追加パッケージをインストール可能。
* **高パフォーマンス**：ギガビットネットワークや強力なソフトルーター向けに最適。
* **柔軟なネットワーキング**：VLAN、マルチWAN、バイパスルーティングなどの高度な機能をサポート。

このチュートリアルでは、ZimaBoard 2を使用して高性能なソフトルーターを構築し、OpenWrtのインストール手順を詳しく説明します。

* * *

## **2.準備**

インストール手順がスムーズに進むよう、以下のハードウェアとツールを事前に準備してください：

* **ZimaBoard 2デバイス**
* **USBドライブ（≥16GB）**：ブータブルインストーラーを作成するため
  {% note warn Tips %}
  フラッシュ作業はUSBドライブ上のすべてのデータを消去します。重要なファイルは事前にバックアップしてください！
  {% endnote %}
* **PC（Windows / macOS）**：ファームウェアをダウンロードし、USBドライブにフラッシュするため
* **モニター + MiniDP to HDMI/DPアダプター + キーボード + イーサネットケーブル**

* * *

## 3.インストール手順

### **ステップ1：OpenWrtのブータブルUSBドライブの作成**

**ファームウェアのダウンロード**

*   公式ダウンロードページにアクセス：[OpenWrt公式ファームウェアをダウンロード](https://firmware-selector.openwrt.org/?version=24.10.4&target=x86%2F64&id=generic)
    
*   推奨されるイメージタイプを選択：**COMBINED-EFI (SQUASHFS)** バージョンを選択します。これはx86\_64デバイス向けの完全なブータブルイメージで、UEFIブートをサポートし、ZimaBoard 2のBIOS環境に完全に対応しています。
    
    ![OpenWrt公式ファームウェアをダウンロード](https://manage.icewhale.io/api/static/docs/1764302027764_Download_the_official_firmware_of_openwrt.png)
   

### ステップ2：balenaEtcherを使用してUSBドライブにイメージをフラッシュ

**1.空のUSBドライブをPCに準備**

  {% note warn Tips %}
  フラッシュ作業はUSBドライブ上のすべてのデータを消去します。重要なファイルは事前にバックアップしてください！
  {% endnote %}

**2.USBドライブをPCに挿入**

![balenaEtcherでの書き込み](https://manage.icewhale.io/api/static/docs/1764309100941_balenaEtcher_burning.png)

**3. balenaEtcherを開く**（インストールされていない場合は、[公式ウェブサイト](https://etcher.balena.io/)からダウンロードできます。）

**4. フラッシュを開始**

*   **Flash from file**をクリックし、ダウンロードしたOpenWrt x86イメージを選択
*   **Select target**をクリックし、USBドライブを選択
*   フラッシュ作業は通常**1〜3分**かかりますので、少し待ってください

**5. フラッシュ完了 — USBドライブを取り外す**

　　Etcherが**「Flash Complete!」**と表示したら、安全にUSBドライブを取り外してください。これでUSBドライブはブータブルOpenWrtインストールメディアに変わりました。

![balenaEtcherの書き込み完了](https://manage.icewhale.io/api/static/docs/1764299872754_The_burning_of_balenaEtcher_is_complete.png)

### **ステップ3：ZimaBoard 2をUSBドライブから起動**

**1. ハードウェアを準備し接続**

*   作成したOpenWrtブータブルUSBドライブをZimaBoard 2のUSBポートに挿入
*   イーサネットケーブルを使って、**LANポート（電源コネクタに最も近いポート）**をコンピュータに接続
*   電源を接続し、キーボードとモニター（または他の操作方法）が準備できていることを確認

**2. ブートメニューに入る**

*   ZimaBoard 2の電源ボタンを押して起動
*   起動画面が表示されたら、**F11**キーを繰り返し押して**ブートメニュー**に入る

**3. USBドライブをブートデバイスとして選択**

*   ブートメニューで矢印キーを使ってUSBドライブを選択
*   **Enter**キーを押して、USBドライブから起動を確認

![起動シーケンスオプション](https://manage.icewhale.io/api/static/docs/1764300015325_Startup_sequence_option.png)

**4. OpenWrtが正常に起動したことを確認**

*   正常に動作していれば、ZimaBoard 2はUSBドライブから起動し、OpenWrtシステム（通常はコマンドラインインターフェース）に入ります。

![openwrtの起動成功](https://manage.icewhale.io/api/static/docs/1764300101135_openwrt_has_been_launched_successfully.png)

### **ステップ4：ブラウザでOpenWrtウェブインターフェースにアクセス**

**1. コンピュータがZimaBoard 2に接続されていることを確認**

*   コンピュータからのイーサネットケーブルは、ZimaBoard 2の**LANポート（電源コネクタに最も近いポート）**に接続されている必要があります
*   コンピュータのネットワークアダプタは**IPアドレスを自動的に取得する（DHCP）**に設定する必要があります
*   OpenWrtは通常、コンピュータに**192.168.1.x**の範囲内（例：192.168.1.100）のアドレスを割り当てます

**2. ブラウザでOpenWrt管理ページを開く** コンピュータで任意のブラウザ（Chrome、Edge、Firefoxなど）を開き、URLバーに以下のアドレスを入力：

    http://192.168.1.1

**3. OpenWrtにログイン** デフォルトのユーザー名：**root** デフォルトのパスワード：**password**

![openwrtログインインターフェース](https://manage.icewhale.io/api/static/docs/1764301256473_openwrt_login_interface.png)

![](https://manage.icewhale.io/api/static/docs/1764301317557_The_main_interface_of_openwrt.png)

## **4.最終メモ**

これで、ZimaBoard 2にOpenWrtをインストールする基本的な手順は完了です。

ファームウェアをダウンロードしてブータブルUSBドライブを作成し、それから起動してウェブインターフェースに正常にログインすることで、このコンパクトなボードを強力なソフトルーターに変えました。

ここからは、必要に応じてセットアップをカスタマイズできます。例えば：

*   PPPoEの設定やバイパス（ブリ