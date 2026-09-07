---
title: ZimaOS 概要
seo_title: "ZimaOS セットアップガイド：ストレージ、共有、バックアップ、システム設定"
description: "NAS 向けの ZimaOS セットアップガイド：システムのインストール、ストレージと Photos ライブラリの設定、バックアップ、クラウドドライブ接続、リモートアクセスと設定の管理。"
type: "Docs"
author: Lauren Pan
tip: このフロントマターブロックは削除しないでください。description は記事の要約に使用され、空欄の場合は本文の最初の段落が使用されます。
---

ZimaOS を無理なく使い始められるように、必要なガイドをまとめました。開封したばかりの方も、しばらく使っている方も、目的に合った入口をここから選べます。

## セットアップとストレージ

初回起動後はここから始めてください。まずは基本となる設定を整えます。

- **[はじめに](./get-started "ZimaClient、アカウント作成、初回起動から ZimaOS を設定する")** — 言語、ネットワーク、アカウントを設定します
- **[機能概要](./features "リモートアクセス、ストレージ、アプリを含む ZimaOS の機能を確認する")** — Data Station、アプリ管理、設定の全体像を確認します
- **[ストレージ設定](./storage-setup "用途に合わせてドライブとストレージ構成を選ぶ")** — 用途に合うドライブ構成を選びます
- **[RAID オプション](./raid-options "RAID レベルと JBOD を比較し、設定手順を確認する")** — RAID 構成の詳細なリファレンスです
- **[アプリの保存先](./docker-app-paths "アプリデータの保存場所と移動方法を確認する")** — アプリデータを保存するドライブを設定します

## 同期とバックアップ

基本設定が完了したら、データを取り込み、保存先とバックアップ方法を決めます。

- **[スマートフォンのバックアップ](./phone-backup "ZimaClient で写真やファイルを ZimaOS に自動バックアップする")** — スマートフォンの写真とファイルを自動保存します
- **[コンピューターのバックアップ](./computer-backup "Finder、エクスプローラー、同期機能でコンピューターを ZimaOS にバックアップする")** — ノート PC のアクセスと定期バックアップを設定します
- **[写真](./photos "ZimaOS で写真ライブラリを閲覧、検索、再発見する")** — 撮ったものすべてのライブラリ
- **[Photos 対応フォーマット](./photos-supported-formats "サムネイルとメタデータの動作を含む、ZimaOS Photos がインデックスするフォーマット一覧")** — Photos が読み取り・再生できるもの
- **[クラウドドライブの接続](./cloud-drive-connect "Google Drive、Dropbox、OneDrive を ZimaOS に接続する")** — クラウドサービスからデータを取り込みます
- **[ほかのNASを接続する](./synology-to-zimacube-migration "Synology NASをZimaOSに接続してファイルを移行またはデバイス間バックアップする")** — ファイルを移行するか、バックアップ計画に組み込む
- **[ドライブ間のデータ移行](./data-migration "Docker イメージ、アプリデータ、フォルダーを ZimaOS のドライブ間で移動する")** — ドライブの空き容量が不足したときに内蔵ツールで移動します
- **[3-2-1 バックアップ](./how-to-use-3-2-1-backup-on-zimaos "3-2-1 ルールで NAS のデータを保護する")** — 重要なデータ全体を守るバックアップ計画です

## アクセスと共有

データの準備ができたら、必要なユーザーや端末から安全にアクセスできるようにします。

- **[リモートアクセス](./remote-access "外出先からホームサーバーへ接続できるようにする")** — 自宅の外から ZimaOS にアクセスします
- **[Tailscale と WireGuard](./app-store/tailscale-wireguard-remote-access "Tailscale または WireGuard でホームサーバーへのリモートアクセスを構築する")** — 標準プロトコルの方法
- **[ZimaClient のダウンロード](./zimaclient-install "デスクトップとモバイルに ZimaClient をインストールする")** — クライアントをインストールしてファイルを閲覧します
- **[Thunderbolt 直接接続](./thunderbolt-direct-connect "コンピューターを Thunderbolt で ZimaOS に接続して最高速度を得る")** — コンピューターと NAS を結ぶ最速のケーブル
- **[SMB ファイル共有](./smb-troubleshooting "Finder とエクスプローラーに表示される SMB 共有を設定する")** — ローカルネットワークでファイルを共有します
- **[リンクで共有](./share-via-link "アカウントなしで開けるファイル共有リンクを作成する")** — ファイルを共有するためのリンクを発行します
- **[Samba マルチユーザー設定](./samba-member-setup "Samba 共有にユーザー単位のアクセス権を設定する")** — ユーザーごとに共有権限を割り当てます

## インストール方法

ハードウェアや導入環境に合った方法で ZimaOS をインストールします。

- **[ZimaOS のインストール](./how-to-install-zimaos "ZimaOS を最初からインストールする手順")** — イメージを USB ドライブに書き込み、端末を起動します
- **[Proxmox へのインストール](./install-zimaos-on-proxmox-ve "Proxmox VE 上の仮想マシンとして ZimaOS を実行する")** — ZimaOS を仮想マシンで動かします
- **[CasaOS から移行](./casaos-to-zimaos-migration "ホームサーバー環境を CasaOS から ZimaOS に移行する")** — 既存の CasaOS 環境を移します
- **[パスワードのリセット](./password-recovery "ZimaOS アカウントのパスワードを復旧または変更する")** — パスワードを復旧、変更します

## システム

端末を安定して運用するための設定と復旧手順です。

- **[UPS 設定](./ups-setup "UPS を NAS に接続して停電から保護する")** — 突然の停電に備えます
- **[システム復旧](./system-recovery "障害やリセット後に ZimaOS を復旧する")** — システム障害後に ZimaOS を復元します
- **[ネットワーク設定のリセット](./reset-network-settings "接続の問題を解決するために ZimaOS のネットワーク設定をリセットする")** — リセットで接続の問題を解決します
- **[オフラインインストール](./offline-install "インターネット接続なしで ZimaOS をインストールする")** — オフライン環境で導入します
- **[検索機能](./zimaos-search "ZimaOS の検索で NAS 内のファイルをすばやく探す")** — ストレージ全体からファイルを検索します
- **[Time Machine バックアップ](./time-machine-backup "ネットワーク経由で Mac を ZimaOS にバックアップする")** — Mac を ZimaOS にバックアップします

---

## 次のステップ

すべてを一度に覚える必要はありません。今取り組んでいる内容に合うページへ進んでください。

- 端末を比較：**[ハードウェア概要](../hardware/ "ZimaCube、ZimaBoard、ZimaBlade を比較する")** — 3 つの製品ラインを比較します
- アプリを実行：**[App Store 概要](./app-store/ "メディア、自宅ホスト、AI のアプリカテゴリを見る")** — メディアサーバー、自宅ホストアプリ、AI エージェント
- さらに詳しく：**[開発概要](../developer/ "ZFS、RAID、ネットワーク、ZimaOS API を学ぶ")** — ZFS、RAID、ネットワーク、ZimaOS API
