---
title: ZimaBoard 2 に OpenWrt をインストール
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 1. はじめに

![The official logo of openwrt](https://manage.icewhale.io/api/static/docs/1763713194262_copyImage.png)

OpenWrtは、家庭用ルーター、企業用ルーター、ソフトルーター、NASデバイスなどのネットワーク機器で広く使用されているオープンソースのLinuxベースのルーターOSです。高い柔軟性とカスタマイズ性を提供し、ユーザーはネットワーク機器を小規模なLinuxサーバーのように管理できます。

OpenWrtの主な特徴は以下の通りです：

*   **オープンソースで透明性が高い**：ブラックボックスコンポーネントなしで完全に制御可能。
    
*   **高い拡張性**：VPN、AdGuard、Dockerなどの追加パッケージをインストール可能。
    
*   **高性能**：ギガビットネットワークや高性能ソフトルーターハードウェアに適している。
    
*   **柔軟なネットワーキング**：VLAN、マルチWAN、バイパスルーティングなどの高度な機能に対応。
    

このチュートリアルでは、ZimaBoard 2を使用して高性能ソフトルーターを構築する方法を示し、OpenWrtのインストールプロセスを段階的にガイドします。

* * *

# **2. 準備**

スムーズなインストールを行うために、以下のハードウェアとツールを事前に準備してください：

**1.ZimaBoard 2デバイス**

**2.USBドライブ (≥16GB)** ブータブルインストーラー作成用

フラッシュ中にUSBドライブ内のデータはすべて消去されます。重要なファイルは事前にバックアップしてください！

**3.PC (Windows / macOS)** ファームウェアのダウンロードおよびUSBドライブへの書き込み用

**4.モニター + MiniDP to HDMI/DPアダプタ + キーボード + イーサネットケーブル**

* * *

# 3. インストール手順

## **ステップ1：OpenWrtブータブルUSBドライブの作成**

**ファームウェアのダウンロード**

*   公式ダウンロードページにアクセス：[OpenWrt公式ファームウェアのダウンロード](https://firmware-selector.openwrt.org/?version=24.10.4&target=x86%2F64&id=generic)
    
*   推奨イメージタイプを選択：**COMBINED-EFI (SQUASHFS)** バージョンを選択。x86\_64デバイス向けの完全ブータブルイメージで、UEFIブートに対応し、ZimaBoard 2 BIOS環境と完全互換。
    
    ![Download the official firmware of openwrt](https://manage.icewhale.io/api/static/docs/1763713196060_copyImage.png)
    

## ステップ2：balenaEtcherでUSBドライブにイメージを書き込む

1. コンピュータ上で空のUSBドライブを準備

フラッシュ中にUSBドライブ内のデータはすべて消去されます。重要なファイルは事前にバックアップしてください！

2. USBドライブをPCに挿入

![balenaEtcher burning](https://manage.icewhale.io/api/static/docs/1763713196652_copyImage.png)

3. balenaEtcherを開く（未インストールの場合は[公式サイト](https://etcher.balena.io/)からダウンロード可能）

4. フラッシュ開始

*   **Flash from file** をクリックし、ダウンロードしたOpenWrt x86イメージを選択
    
*   **Select target** をクリックし、USBドライブを選択
    
*   フラッシュには通常 **1〜3分** かかります。完了までしばらく待機
    

5. フラッシュ完了 — USBドライブを取り外す

  Etcherで **「Flash Complete!」** が表示されたら、安全にUSBドライブを取り外せます。これでUSBドライブはブータブルなOpenWrtインストールメディアになりました。

![The burning of balenaEtcher is complete](https://manage.icewhale.io/api/static/docs/1763713197464_copyImage.png)

## **ステップ3：USBドライブからZimaBoard 2を起動**

**1. ハードウェアの準備と接続**

*   作成したOpenWrtブータブルUSBドライブをZimaBoard 2のUSBポートの1つに挿入
    
*   イーサネットケーブルで **LANポート（電源コネクタに最も近いポート）** をPCに接続
    
*   電源を接続し、キーボードとモニター（または他の操作方法）を準備
    

**2. ブートメニューに入る**

*   電源ボタンを押してZimaBoard 2を起動
    
*   ブート画面が表示されたら、**F11** を繰り返し押して **Boot Menu** に入る
    

**3. USBドライブをブートデバイスとして選択**

*   Boot Menuで矢印キーを使用してUSBドライブを選択
    
*   **Enter** を押して確認し、USBドライブからブート
    

![Startup sequence option](https://manage.icewhale.io/api/static/docs/1763713198322_copyImage.png)

**4. OpenWrtが正常に起動したことを確認**

*   正常に動作していれば、ZimaBoard 2はUSBドライブからブートし、OpenWrtシステムに入ります（通常はコマンドラインインターフェイス）
    

![openwrt has been launched successfully](https://manage.icewhale.io/api/static/docs/1763713201272_copyImage.png)

## **ステップ4：ブラウザからOpenWrt Webインターフェイスにアクセス**

**1. PCがZimaBoard 2に接続されていることを確認**

*   PCからのイーサネットケーブルは **LANポート（電源コネクタに最も近いポート）** に接続
    
*   PCのネットワークアダプタは **IPアドレスを自動取得 (DHCP)** に設定
    
*   通常、OpenWrtはPCに **192.168.1.x** の範囲のアドレスを割り当てます（例：192.168.1.100）
    

**2. ブラウザでOpenWrt管理ページを開く** PCで任意のブラウザ（Chrome、Edge、Firefoxなど）を開き、URLバーに以下を入力：

    http://192.168.1.1

**3. OpenWrtにログイン** デフォルトユーザー名：**root** デフォルトパスワード：**password**

![openwrt login interface](https://manage.icewhale.io/api/static/docs/1763713201956_copyImage.png)

![The main interface of openwrt](https://manage.icewhale.io/api/static/docs/1763713203997_copyImage.png)

# **4. 最後の注意点**

これで、ZimaBoard 2へのOpenWrtの基本インストールプロセスが完了しました。

ファームウェアのダウンロード、ブータブルUSBドライブの作成、USBドライブからの起動、Webインターフェイスへのログインまで、コンパクトなボードを強力なソフトルーターに変換しました。

ここからは、以下のようにニーズに応じてカスタマイズ可能です：

*   PPPoEの設定やバイパス（ブリッジ）ルーターの構築
    
*   共通プラグインのインストール（Docker、広告ブロックツール、プロキシサービスなど）
    
*   リモートアクセス、NAS、メディアサーバーの設定など
    

**ZimaBoard 2 + OpenWrt** の組み合わせは無限の可能性を提供します—このチュートリアルはその始まりに過ぎません。

作業中に問題が発生した場合は、状況やエラーメッセージをコミュニティで共有してサポートを受けてください。