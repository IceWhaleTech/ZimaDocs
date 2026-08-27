---
title: ZimaBladeを使い始める
description: "ZimaBladeのハードウェアガイドです。3760と7700を比較し、使用開始に必要なものと詳しいセットアップ手順を確認できます。"
type: Docs
author: Lauren Pan
tip: このFront Matterブロックは削除しないでください。descriptionフィールドは記事の概要に使用され、空の場合は最初の段落が代わりに使用されます。
---

ZimaBladeは、私たちにとって特に愛着のある製品です。製品の中で最も小さく、価格は少し豪華な外食と同じくらいです。それでも、CasaOSやDockerをはじめ、ZimaCubeと同じソフトウェア環境を実行できます。

2つのモデルを用意しています。3760はデュアルコアのボードで、Pi-hole、VPN、軽量NASを余裕を持って処理できます。7700はクアッドコアプロセッサーを搭載し、Plex、複数のDockerコンテナ、Home Assistantを同時に動かせる性能を備えています。

| | ZimaBlade 3760 | ZimaBlade 7700 |
|---|---|---|
| **CPU** | Intel Celeron N3350（デュアルコア） | Intel Celeronクアッドコア（N3450 / J3455 / E3950） |
| **RAM** | SODIMM DDR3L × 1、最大16 GB | SODIMM DDR3L × 1、最大16 GB |
| **ストレージ** | オンボード32 GB eMMC | オンボード32 GB eMMC |
| **ネットワーク** | Gigabit Ethernet × 1 | Gigabit Ethernet × 1 |
| **USB** | USB-C × 1、USB 3.0 × 1、USB 2.0 × 2 | USB-C × 1、USB 3.0 × 1、USB 2.0 × 2 |
| **SATA** | SATA 3.0 × 2 | SATA 3.0 × 2 |
| **PCIe** | PCIe 2.0 x4 × 1 | PCIe 2.0 x4 × 1 |
| **映像出力** | Mini DisplayPort 1.2（4K@60Hz） | Mini DisplayPort 1.2（4K@60Hz） |
| **適した用途** | Pi-hole、VPN、軽量NAS | Plex、Docker、Home Assistant、より高負荷な用途 |

どちらのモデルもx86プロセッサーを使用しているため、ARMとの互換性を気にせず、各種Dockerイメージをそのまま利用できます。

## セットアップ

ZimaBladeを入手したら、まず詳しい **[電源投入ガイド](./power-on-zimablade "ZimaBladeの電源を入れて初期設定を完了する")** を参照してください。メモリーモジュールの取り付け、ドライブの接続、起動、CasaOSの設定を、各手順の写真とともに説明しています。

ZimaBladeにはCasaOSがプリインストールされています。代わりにZimaOSを使用する場合は、**[ZimaOSのインストール](../zimaos/how-to-install-zimaos "デバイスにZimaOSを最初からインストールする手順")** を参照してください。ほかのZimaデバイスと同じ手順でインストールできます。

## 構築できるもの

小型ながら、ZimaBladeではZimaBoardやZimaCubeと同じアプリを実行できます。メディアサーバー、セルフホストアプリ、AIエージェントのアイデアについては、**[App Storeの概要](../zimaos/app-store/ "メディア、セルフホストアプリ、AIのApp Storeカテゴリーを見る")** を参照してください。

## サードパーティ製OS

x86アーキテクチャーのため、Ubuntu、Debian、OpenWrtなど、ほかのOSもインストールできます。一般的な手順は **[サードパーティ製OSガイド](./third-party-os-install "このガイドを使用してZimaハードウェアに任意のOSをインストールする")** で説明しています。

## 問題が発生した場合

このボードには電源LEDがありません。画面が黒いままでも、故障と判断しないでください。30秒ほど待ってから、ルーターに新しいデバイスが表示されていないか確認します。多くの場合、表示がないだけで正常に動作しています。

画面が表示されない原因は、Mini DisplayPortアダプターとの相性であることが一般的です。HDMIアダプターより、MiniDPからDPへ直接接続するケーブルのほうが安定する傾向があります。ドライブが表示されない場合は、SATAケーブルを差し直すとほとんど解決します。IPアドレスが分からない場合は、ルーターのDHCPクライアント一覧を確認するのが最も早い方法です。
