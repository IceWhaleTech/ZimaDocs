---
title: App Store 概要
seo_title: "ZimaOS App Store：NAS でメディアサーバー、自宅ホストアプリ、AI を実行"
description: "Zima NAS でできることを紹介します。家庭用メディアサーバー、自宅ホストアプリ、AI エージェント、ゲームサーバーを自分のハードウェアで実行できます。"
type: "Docs"
author: Lauren Pan
tip: このフロントマターブロックは削除しないでください。description は記事の要約に使用され、空欄の場合は本文の最初の段落が使用されます。
---

Zima 端末から生まれるさまざまなプロジェクトを見るのは、とても楽しいことです。コミュニティはこれまでに、メディアセンター、広告ブロッカー、AI アシスタント、ゲームサーバーなどを作ってきました。もうすべて見たと思うたびに、新しい使い方が登場します。

自分でサービスを動かすと、ハードウェアもデータも自分の管理下に置けます。突然サービスを終了されたり、料金を変更されたりする心配もありません。

## メディアサーバー

多くの方はここから始めます。NAS をストリーミングサーバーにして、映画、テレビ、音楽、写真を家中の画面で楽しめます。

- **[写真の一括同期](./cli-guide "コマンドラインで大量の写真を NAS に同期する")** — 数千枚の写真をまとめて移動するときに便利です
- **[Immich 写真バックアップ](./immich-photo-backup "写真ライブラリ向けに Immich を詳しく設定する")** — Immich のバックアップ設定をさらに深めます
- **[Jellyfin メディアサーバー](./media-server-setup-with-jellyfin "Jellyfin で NAS の映画、テレビ、音楽を配信する")** — 無料のオープンソースで、多くの端末に対応します
- **[NVR カメラサーバー](./nvr-camera-server "監視カメラを NAS に接続して AI 物体検出を使う")** — 監視カメラと AI 物体検出を組み合わせます
- **[Immich 写真同期](./sync-photos-with-immich "自宅ホストの Immich でスマートフォンの写真を NAS に同期する")** — Google Photos の自宅ホスト代替です
- **[Plex メディアサーバー](./plex-setup-guide "Plex Media Server を導入してライブラリを配信する")** — 洗練された画面と豊富なクライアントがあります
- **[DLNA サーバー](./dlna-server-setup "古いテレビや DLNA 端末へメディアを配信する")** — DLNA 対応機器へストリーミングします
- **[Plex GPU トランスコード](./plex-and-gpu-transcoding "Plex の GPU ハードウェア変換で 4K を滑らかに再生する")** — ハードウェアアクセラレーションで 4K を再生します
- **[Emby サーバー](./setup-emby-server "Emby Media Server を設定して各端末へ配信する")** — Jellyfin と Plex の中間にあたる選択肢です
- **[Komga](./komga-setup "ZimaOS で Komga をコミック・電子書籍サーバーとして動かす")** — コミック、漫画、電子書籍向けのメディアサーバーです

## 自宅ホストアプリ

コミュニティで特によく使われるアプリです。サブスクリプションサービスを、自分で管理できるサービスに置き換えられます。

- **[Syncthing でファイル同期](./syncthing-setup "自宅ホストの Syncthing で端末間のフォルダーを同期する")** — PC とスマートフォンのフォルダーを同期します
- **[Pi-hole 広告ブロッカー](./pi-hole-setup "ホームサーバーの Pi-hole でネットワーク全体の広告をブロックする")** — ネットワーク内の全端末で広告を自動遮断します
- **[文書管理](./paperless-ngx-install "Paperless-ngx でスキャン文書を管理、検索する")** — 紙の文書を検索可能な資料にします
- **[AI 文書処理](./paperless-ai-install "Paperless-AI で文書を自動分類、タグ付けする")** — Paperless に自動分類を追加します
- **[Radarr 映画管理](./radarr-setup "Radarr で映画の取得と管理を自動化する")** — 見たい映画を指定すると残りを自動化できます
- **[インターネットラジオ](./azuracast-install "AzuraCast で自分のインターネットラジオ局を運営する")** — 自分のラジオ局を構築します
- **[サーバー監視](./zabbix-install-guide "Zabbix ダッシュボードでサーバーとネットワークを監視する")** — サーバーとネットワークの状態を確認します
- **[Torrent ダウンローダー](./webtorrent-feature "WebTorrent で NAS に直接ダウンロードする")** — ダウンロードデータを NAS に直接保存します
- **[Syncthing 設定ガイド](./syncthing-install "複数端末向けに Syncthing を詳しく設定する")** — より高度な Syncthing 設定です

## エージェントと推論

AI を自分のハードウェアで実行すれば、データを家の外へ送る必要がありません。コミュニティでも活発に開拓されている分野です。

- **[DeepSeek Harness](./deepseek-harness-setup "ホームサーバーで DeepSeek Harness を物理 AI エージェントとして動かす")** — ホームサーバーに住む物理 AI エージェント。バイブコーディングやタスクの自動化ができます
- **[AI 検索を有効化](./enable-ai "自然言語でファイルを探せる AI 検索を有効にする")** — すべてのファイルを自然言語で検索します
- **[DeepSeek R1 を導入](./deploy-deepseek-r1 "エージェントサーバーに DeepSeek R1 を導入してローカル実行する")** — Zima ハードウェアで高性能 LLM を実行します
- **[AI モデルをダウンロード](./llm-manual-download "オフライン環境向けに AI モデルをダウンロードする")** — オフラインや低帯域の環境に適しています
- **[AI 写真説明](./frigate-ollama-setup "AI で写真へ自動的にタグと説明を付ける")** — 写真ライブラリを自動整理します
- **[OpenClaw エージェント](./openclaw-agent-setup "OpenClaw を常時稼働させ、Telegram から会話する")** — Telegram でいつでも話せる AI エージェントです
- **[Hermes エージェント](./hermes-agent-setup "学習し、情報を記憶する Hermes エージェントを実行する")** — 利用者について学び、記憶を保つエージェントです

## クリエイティブな構築例

決まったカテゴリに収まらない、意外性のあるプロジェクトです。

- **[Batocera アーケード](./batocera-arcade-setup "Batocera で Zima 端末をレトロゲーム機にする")** — Zima 端末をレトロゲーム機に変えます
- **[Minecraft サーバー](./minecraft-friendship-service "自分のサーバーで Minecraft ワールドを運営する")** — 常時稼働する Minecraft ワールドを作ります
- **[Oculus VR ストリーミング](./oculus-quest-media-server "PC VR ゲームを Oculus Quest に無線配信する")** — PC VR を Quest へストリーミングします
- **[PVE クラスター移行](./zimablade-cluster-pve "Proxmox クラスターでホスト間のサービスを移行する")** — Proxmox ホスト間でサービスを移動します
- **[Debian で PVE を実行](./pve-on-debian-for-i226 "Intel i226 向けに Debian 上で Proxmox VE を実行する")** — Intel i226 NIC 向けの Proxmox VE 構成です
- **[コミュニティ App Store](./awesome-third-party-stores "コミュニティが管理する NAS 向け App Store を見る")** — コミュニティ作成のアプリソースです
- **[自宅ホストアプリ概要](./self-hosted-apps "ホームサーバーでアプリを自宅ホストする方法を見る")** — ZimaBoard での自宅ホストをさらに学びます
- **[ZimaBoard の Jellyfin](./jellyfin-setup "ZimaBoard に Jellyfin メディアサーバーを設定する")** — ZimaBoard ハードウェア向けのガイドです

## 次のステップ

何を作る場合でも、まずは 1 つのアプリから始めてください。自分のサービスへ育てていく過程も楽しみの一つです。

- ハードウェア仕様：**[ハードウェア概要](../../hardware/ "ZimaCube、ZimaBoard、ZimaBlade を比較する")** — 3 つの製品ラインの詳細
- さらに詳しく：**[開発概要](../../developer/ "ZFS、RAID、ネットワーク、ZimaOS API を学ぶ")** — ZFS、RAID、ネットワーク、ZimaOS API
