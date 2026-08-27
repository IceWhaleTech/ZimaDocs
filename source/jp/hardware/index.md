---
title: ハードウェア概要
seo_title: "Zima ハードウェア比較：ZimaCube、ZimaBoard、ZimaBlade"
description: "ZimaCube、ZimaBoard、ZimaBlade の CPU、メモリ、ドライブベイ、ネットワーク、拡張仕様を比較し、セットアップやサードパーティ OS のガイドを確認できます。"
type: "Docs"
author: Lauren Pan
tip: このフロントマターブロックは削除しないでください。description は記事の要約に使用され、空欄の場合は本文の最初の段落が使用されます。
---

Zima には、異なる利用者を想定した 3 つのハードウェア製品ラインがあります。このページでは、所有している端末の確認や、目的に合うモデルの選択ができます。

## 端末を比較

| | ZimaCube 2 | ZimaBoard 2 | ZimaBlade |
|---|---|---|---|
| **おすすめ用途** | プロ向け NAS、メディア制作、ローカル AI | ホームサーバー、ネットワーク、実験 | 入門 NAS、初めての DIY 構築 |
| **CPU** | Intel i3-1215U / i5-1235U（Pro） | Intel N150（4 コア、最大 3.6 GHz） | Intel Celeron N3350（3760）/ 4 コア（7700） |
| **メモリ** | 8 GB DDR5（最大 64 GB） | 8 GB / 16 GB LPDDR5（オンボード） | DDR3L SODIMM x1、最大 16 GB |
| **ドライブベイ** | SATA x6 + M.2 NVMe x4 | SATA 3.0 x2 + 32/64 GB eMMC | SATA 3.0 x2 |
| **ネットワーク** | 2.5 GbE x2（Pro は 10 GbE も搭載） | 2.5 GbE x2 | 1 GbE x1 |
| **Thunderbolt** | 全モデル TB4 x2 | なし | なし |
| **PCIe** | PCIe 4.0 x16 + PCIe 3.0 x8 | PCIe 3.0 x2 | PCIe 2.0 x4 x1 |

## 端末をセットアップ

開封したばかりの場合は、端末に合ったクイックスタートから始めてください。

- **[ZimaCube クイックスタート](./quick-start "ZimaCube を開封し、電源を接続して ZimaOS にアクセスする")** — 開封、配線、初回アクセスを行います
- **[ZimaBoard の電源を入れる](./zimaboard-quick-start "ZimaBoard を初回起動して設定する")** — 初回起動と基本設定を行います
- **[ZimaBlade の電源を入れる](./power-on-zimablade "HDD スタンドを取り付けて ZimaBlade を初回起動する")** — HDD スタンドと初回起動を設定します

## ハードウェアの詳細

起動後は、以下のページでポート、拡張スロット、内部構造を確認できます。

- **[ZimaCube ハードウェア詳細](./hardware-details "ZimaCube のポートとインターフェースを詳しく確認する")** — すべてのポートと接続部を確認します
- **[ZimaBoard ハードウェアインターフェース](./hardware-interface "ZimaBoard のピン配列とコネクターを確認する")** — ピン配列とコネクターを確認します
- **[ZimaCube PC 直接接続](./pc-direct "Thunderbolt で ZimaCube を PC に直接接続する")** — ZimaCube を PC に直接つなぎます
- **[ZimaCube GPU 拡張](./gpu-expansion "ZimaCube に専用 GPU を追加する")** — 専用グラフィックカードを追加します
- **[ZimaCube RAID SSD 拡張](./raid-ssd-expansion "キャッシュまたは高速 RAID 用 SSD を追加する")** — SSD キャッシュや高速ストレージを追加します
- **[DIY ファンガイド](./zimacube-fan-diy "ZimaCube の冷却ファンを交換、アップグレードする")** — 冷却ファンを交換します

## 互換性

実際に検証した対応機器と機能をまとめています。

- **[UPS 互換性リスト](./ups-compatibility-list "Zima 端末で動作確認された UPS を見る")** — 動作確認済みの UPS です
- **[対応ディスク形式](./supported-disk-formats "Zima 端末が読み書きできるファイルシステムを見る")** — 対応するファイルシステムです
- **[対応ネットワークアダプター（英語）](../../hardware/compatible-network-adapters "ZimaCube でテスト済みのネットワークアダプターを見る")** — 動作確認済みの NIC です
- **[Intel AX210 Wi-Fi](./enable-intel-ax210 "ZimaOS で Intel AX210 Wi-Fi モジュールを有効にする")** — ZimaOS で AX210 を有効にします
- **[AX210 Wi-Fi モジュール](./ax210-wifi-6e "ZimaBoard に Intel AX210 Wi-Fi モジュールを取り付ける")** — ZimaBoard に AX210 を取り付けます
- **[BIOS 設定](./bios-configuration "Zima 端末の BIOS を開いて設定する")** — BIOS を開いて調整します
- **[Wake-on-LAN を有効化](./enable-wol-on-zimacube "Wake-on-LAN で ZimaCube を遠隔起動する")** — ZimaCube を遠隔起動します
- **[ZimaBoard の Wake-on-LAN](./wake-on-lan-setup "ZimaBoard の Wake-on-LAN を設定する")** — ZimaBoard を遠隔起動します

## サードパーティ OS

ZimaOS はプリインストールされていますが、ハードウェアはロックされていません。コミュニティでは Unraid、TrueNAS、OpenWrt なども利用されています。

- **[Unraid を実行](./install-unraid "ZimaCube に Unraid をインストールする")** — ZimaCube に Unraid を導入します
- **[TrueNAS を実行](./install-truenas "ZimaCube に ZFS ベースの TrueNAS をインストールする")** — ZimaCube に TrueNAS を導入します
- **[ZimaBoard で Unraid を実行](./unraid-install "ZimaBoard に Unraid をインストールする")** — ZimaBoard に Unraid を導入します
- **[OpenWrt を実行](./openwrt-x86-install "ZimaBoard を OpenWrt ルーターにする")** — ZimaBoard をホームルーターにします
- **[USB から OpenWrt を実行](./openwrt-usb-install "USB ドライブから OpenWrt を起動する")** — USB ドライブから OpenWrt を起動します
- **[OpenWrt eMMC 起動](./openwrt-emmc-boot "OpenWrt を ZimaBoard 内蔵 eMMC にインストールする")** — 内蔵ストレージへ導入します
- **[OMV をインストール](./openmediavault-install "ZimaBoard に OpenMediaVault をインストールする")** — NAS 向けの OpenMediaVault を導入します
- **[OMV を設定](./openmediavault-setup "OpenMediaVault の初期設定を行う")** — インストール後の基本設定です
- **[Arch Linux をインストール](./arch-linux-installation-on-zimaboard-2 "ZimaBoard 2 に Arch Linux をインストールする")** — ZimaBoard 2 で Arch Linux を実行します
- **[Ubuntu Server を設定](./minimal-ubuntu-server-build "ZimaBoard 2 に最小構成の Ubuntu Server を構築する")** — 軽量なサーバー環境を作ります
- **[サードパーティ OS ガイド](./third-party-os-install "Zima ハードウェアに任意の OS をインストールする")** — 汎用的な OS インストール手順です

## 次のステップ

ハードウェアが分かれば、その後の設定も選びやすくなります。

- ZimaOS を設定：**[ZimaOS 概要](../zimaos/ "ZimaOS のインストール、ストレージ、共有ガイドを見る")** — インストール、ストレージ、システム設定
- アプリを実行：**[App Store 概要](../zimaos/app-store/ "メディア、自宅ホスト、AI のアプリカテゴリを見る")** — メディアサーバー、自宅ホストアプリ、AI エージェント
