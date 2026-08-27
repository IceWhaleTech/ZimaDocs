---
title: ZimaBoard 2 を使い始める
description: "ZimaBoard 2 シングルボードサーバーを開梱してセットアップします。ハードウェアの概要、初回起動、周辺機器の接続、システムダッシュボードへのアクセスを説明します。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## はじめに
**ZimaBoard 2 — 新しいルールを切り拓く**
メイカーとクリエイターのために設計された**超高性能シングルボードサーバー**です。コンパクトながら高性能で、**ミニ NAS**、**ホームサーバー**、**セルフホストプラットフォーム**、**ソフトウェアルーター**として使用でき、**ローカル AI** 推論や**クラスター**展開にも対応します。
 **デュアル 2.5GbE**、**PCIe** スロット、**デュアル SATA 3.0**、**USB 3.1** 拡張により、ZimaBoard 2 で自分専用の高性能なプライベートデジタルハブを構築できます。

 ## 特長
- **Intel® N150 クアッドコア CPU**、最大 **3.6 GHz** で軽快なパフォーマンスを実現。
- **8GB** または **16GB LPDDR5x** メモリでマルチタスクに対応。
- **32GB** または **64GB eMMC** でシステムを高速起動。
- 高速ネットワーク用の **2 × 2.5GbE LAN ポート**。
- 2.5"/3.5" HDD/SSD を直接接続できる、電源付きの **2 × SATA 3.0**。
- 高速周辺機器や外付けドライブ用の **2 × USB 3.1**。
- **10GbE NIC**、**NVMe アダプター**、**GPU** を装着できる **1 × PCIe 3.0 スロット**。
- **4K@60Hz** 出力に対応する **1 × Mini DisplayPort 1.4**。
- 静かで安定した動作を実現する**ファンレスのパッシブ冷却**。

## インターフェース
![ZimaBoard 2 のインターフェース図。デュアル 2.5GbE、USB 3.1、MiniDP、DC 電源、PCIe、SATA。](https://manage.icewhale.io/api/static/docs/1756795953605_zimaboard2-interface-pinout.png)


## ストレージと PCIe デバイスを接続する
### 2.5"/3.5" SATA HDD/SSD
- 付属の **SATA データケーブル + 電源ケーブル**を使用して、ドライブをボードの SATA ポートに接続します。
- ドライブを適切な **NAS ブラケット**または外付けトレイに取り付けます。
<mark>*ヒント：2 台の **3.5" ドライブ**は起動時に大きな電流を必要とするため、**安定した 12V/5A** 電源を使用してください。*</mark>
### PCIe 拡張カード
- **10GbE NIC**、**NVMe アダプター**、または**低消費電力のディスクリート GPU**を取り付けます（詳しくは GPU 互換性リストを参照してください）。
- GPU に外部電源が必要な場合は、適切なケーブルを用意し、電源容量が十分であることを確認してください（同じ互換性資料を参照）。

## 初回起動とネットワーク
- **電源アダプター**を ZimaBoard 2 に接続します。
- **Ethernet ケーブル**をルーターまたはスイッチに接続します。
<img src="https://manage.icewhale.io/api/static/docs/1756796033890_zimaboard2-power-network.png"
     alt="2.5GbE Ethernet と 12V 電源が接続され、電源 LED が点灯した ZimaBoard 2 背面 I/O。ミニ NAS の初回起動設定。"
     width="50%" />

- ZimaBoard 2 は、プリインストールされた **ZimaOS** で**自動起動**し、IP アドレスを自動取得します。
  - https://www.zimaspace.com/zimaos/download にアクセスして **ZimaClient** をダウンロードし、スキャンしてデバイスページを直接開きます。
  - または、ルーターの **DHCP リスト**か、接続した**ディスプレイ**で IP を確認します。
  - デバイスの検出と管理を簡単にする **Zima App** も利用できます。

## [ZimaOS にサインインして使用する](../zimaos/get-started)
- デバイスの IP、ZimaClient、またはアプリからログインページを開きます。
- アカウントを作成し、言語、タイムゾーン、ネットワークなどの初期設定を完了します。
- 安定性とアプリ互換性を高めるため、システムを最新の ZimaOS に更新します。

## さらに高度なオプション
- **サードパーティ OS をインストール**：Linux ディストリビューション、OpenWrt、[UnRAID](./unraid-install) など。
- **WOL（Wake on LAN）を有効化**：BIOS と OS で有効にします（[WOL を有効にするチュートリアル](./wake-on-lan-setup)を参照）。
- **Wi-Fi モジュールを使用**：ZimaOS または選択した OS 向けのドライバー／セットアップガイドに従います（[チュートリアル：AX210 ユーザーガイド](./ax210-wifi-6e)）。
- **冷却モジュールを追加**：高負荷のワークロードを予定している場合は、冷却モジュールの取り付けガイドを参照してください。
-  **3D モデルをダウンロード**：[Google Drive](https://drive.google.com/file/d/1paE2loHLjRjftefT0xsKo4lIFok9-Itc/view?usp=sharing)

## よくある質問
- **ZimaOS を復旧または再インストールするにはどうすればよいですか？**
 ZimaOS 復旧／再インストールガイドを参照し、起動メディアを作成してインストーラーを実行してください。
- **CMOS をクリア／初期化するにはどうすればよいですか？**
 電源を切り、リセットボタンを押すか、バッテリーを数秒間取り外してから電源を戻し、BIOS のデフォルト設定を読み込みます。詳しくは CMOS 初期化ガイドを参照してください。
