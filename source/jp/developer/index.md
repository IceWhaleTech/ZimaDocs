---
title: 開発概要
seo_title: "ZimaOS 開発者ガイド：ZFS、RAID、ネットワーク、ZimaOS API"
description: "Docker とセルフホストアプリ、home server と homelab のストレージ、ネットワーク、SSH、NAS OS API、App Store 公開、プロジェクトへの貢献を扱う ZimaOS 開発者向け文書です。"
type: "Docs"
author: Lauren Pan
tip: このフロントマターブロックは削除しないでください。description は記事の要約に使用され、空欄の場合は本文の最初の段落が使用されます。
---

システムの内部まで詳しく扱いたい方のためのセクションです。ストレージ、ネットワーク、ZimaOS API など、上級ユーザーと開発者に必要な内容をまとめています。

## ストレージとファイルシステム

ZimaOS は ZFS、RAID、NFS、iSCSI を標準でサポートします。以下のガイドから構成方法を確認できます。

- **[ZFS 設定](./zfs-setup "スナップショットとチェックサムに対応する ZFS を設定する")** — ZFS プールを作成、管理します
- **[RAID オプション概要](../zimaos/raid-options "RAID レベルと JBOD を比較する")** — 用途に合う RAID レベルを選びます
- **[RAID 6 を作成](./raid6-setup "二重パリティ保護を持つ RAID 6 を作成する")** — RAID 6 を順番に設定します
- **[RAID を再構築](./raid-rebuild-after-reinstall "ZimaOS 再インストール後に RAID を復旧する")** — OS 再インストール後にアレイを戻します
- **[NFS ファイル共有](./nfs-on-zimaos "Linux と macOS 向けに NFS 共有を設定する")** — Linux と macOS へファイルを共有します
- **[iSCSI 利用ガイド](./iscsi-guide "NAS にブロックレベルの iSCSI ストレージを設定する")** — iSCSI の基本構成です
- **[iSCSI 設定](./iscsi-setup "ZimaOS の iSCSI を詳しく設定する")** — 詳細な設定手順です
- **[Rsync バックアップクローン](./rsync-backup-clones "rsync でドライブやデータセットを複製する")** — データ全体を複製します
- **[Synology SMB 接続](./synology-smb-connect "ZimaOS を Synology NAS に SMB で接続する")** — 既存の Synology へ接続します
- **[QTS 双方向同期](./zimaos-qts-two-way-sync-guide "ZimaOS と QNAP QTS のフォルダーを同期する")** — QNAP と双方向で同期します
- **[暗号化フォルダー](./folder-encryption "ZimaOS のファイルシステム層でフォルダーを暗号化する")** — 機密データを保護します

## ネットワークとプロトコル

正しいネットワーク設定は、他のすべてのサービスを高速で安定したものにします。

- **[ネットワーク設定](./networking "ネットワークインターフェース、ルーティング、固定 IP を設定する")** — インターフェースと固定アドレスを設定します
- **[SSH を有効化](./how-to-open-ssh-in-zimaos "ZimaOS で SSH と基本的なリモートアクセスを設定する")** — SSH を有効にします
- **[SSH 高度な設定](./ssh-setup "鍵認証、ポート変更、セキュリティ設定で SSH を強化する")** — 鍵認証とセキュリティを設定します
- **[ネットワーク転送速度](./nas-transfer-speed-troubleshooting "NAS の転送速度低下を調査、改善する")** — ボトルネックを見つけて修正します

## 開発

Docker アプリ、Python スクリプト、ZimaOS 本体への貢献など、ZimaOS の上に機能を構築できます。

- **[Python 環境](./python-setup "ZimaOS に Python のスクリプト、オートメーション環境を作る")** — Python を実行できるようにします
- **[貢献ガイド](./how-to-contribute "ZimaOS にコード、文書、フィードバックを提供する")** — プロジェクトへの参加方法です
- **[コミュニティの貢献](./contributions "利用者から提供されたドライバーや改善を見る")** — コミュニティによる改善を確認します

## App Store 開発

ZimaOS home server 向けの Docker とセルフホストアプリを作成し、homelab のアプリカタログや他の NAS OS 環境向けストアを公開します。

- **[アプリを構築、公開](./docker-app-publishing "ZimaOS App Store 向け Docker アプリを適応、公開する")** — 個別アプリをストア向けに準備します
- **[App Store を作成](./app-store-create-from-scratch "ZimaOS、home server、homelab 向け Docker App Store を作成する")** — v2 対応ストアを構築します
- **[Docker Compose と x-casaos](./app-store-compose-x-casaos "Docker Compose と x-casaos メタデータを設定する")** — 実行時とメタデータのフィールドを確認します
- **[App Store CI/CD](./app-store-ci-cd "Docker App Store を検証、構築、公開する")** — 検証、成果物、静的ホスティングを自動化します
- **[v1 から v2 へ移行](./app-store-v1-v2-migration "CasaOS または ZimaOS App Store を v2 へ移行する")** — 互換性を保ちながら移行します
- **[開発者 FAQ](./app-store-faq "Docker App Store 管理者向け FAQ")** — ID、ローカライズ、ホスティング、ビルド、互換性を確認します

## ZimaOS API

API を使用すると、独自のコードからファイル操作、ユーザー管理、システム設定を自動化できます。

- **[ZimaOS API ガイド](./openapi-developer-guide "ZimaOS API の認証、エンドポイント、統合例を見る")** — 認証、エンドポイント、統合例です
- **[ZimaOS API エクスプローラー](./openapi-live-preview "ブラウザーで ZimaOS API を試す")** — API 呼び出しをその場で実行します

## バージョン履歴

サイドバーから v1.2.2 以降のすべての ZimaOS リリースノートを確認できます。

## 次のステップ

今必要な内容から始めてください。残りの資料はいつでも参照できます。

- ZimaOS を設定：**[ZimaOS 概要](../zimaos/ "ZimaOS のインストール、ストレージ、共有ガイドを見る")** — インストール、ストレージ、システム設定
- アプリを実行：**[App Store 概要](../zimaos/app-store/ "メディア、自宅ホスト、AI のアプリカテゴリを見る")** — メディアサーバー、自宅ホストアプリ、AI エージェント
