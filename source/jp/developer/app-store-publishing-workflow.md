---
title: App Store の公開ワークフロー
seo_title: "ZimaOS Docker App Store を GitHub Pages と CDN に公開する"
description: "ホームサーバーや Homelab のユーザー向けに、ZimaOS 互換 Docker App Store を GitHub Pages、GitHub Releases、CDN へ公開します。"
type: Docs
author: IceWhaleTech
tip: この front matter ブロックを削除しないでください。description は記事の概要に使用され、空の場合は最初の段落が使用されます。
---

この公開ワークフローは、ZimaOS ホームサーバーと Homelab が利用できるように、Docker App Store を静的ホスティングへ配信します。

このページでは、タグ付きリリースの公開に使用する [`.github/workflows/release-store.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release-store.yml) を説明します。

## 目的

リリース準備が整ったビルド出力を公開配信先へデプロイします。

## トリガー

- `v*` に一致するタグの push
- 手動の `workflow_dispatch`

手動実行では `purge_only` を指定すると、ストアを再ビルドまたは再デプロイせずに、直近の `gh-pages` デプロイで変更されたファイルを更新できます。

## 主な段階

1. リポジトリのソースをチェックアウトします。
2. ビルドキャッシュを復元します。
3. v2 プロトコルの `dist/` をビルドします。
4. 従来の v1 zip 出力をビルドします。
5. リリースバンドルを作成します。
6. リリース成果物とレポートをアップロードします。
7. ビルドキャッシュを保存します。
8. リリース summary を書き込みます。
9. `dist/` を `gh-pages` にデプロイします。
10. デプロイで変更されたファイルを収集し、jsDelivr のキャッシュエントリを更新します。
11. バンドルを添付した GitHub Release を作成します。

キャッシュ更新は `gh-pages` へのデプロイ後に実行されます。前後の `gh-pages` リビジョンを比較し、ストアのエントリポイントを必ず含め、パスをバッチに分けて jsDelivr へ送信します。更新スクリプトは purge 結果をポーリングし、一時的な HTTP エラーを再試行します。jsDelivr がレート制限または失敗を報告した場合は明示的に失敗します。その後、配信元と CDN 応答のハッシュを比較するため、purge 要求が受理されただけの状態を、キャッシュ更新完了と誤認しません。

## 公開される出力

現在、このワークフローは次を公開または添付します。

- v2 プロトコル用の `gh-pages` 静的 `dist/` 出力
- v1 互換用の `main.zip`
- ダウンロード用の zip リリースバンドル
- トラブルシューティング用の JSON ビルドレポート

## 重要な理由

サードパーティストアのリポジトリを公式公開手順に合わせる場合、このワークフローが最も近いリファレンスです。

公式リポジトリが次をどのように分けているかを示します。

- ビルド時の成果物
- 公開時のデプロイ
- 手動ダウンロード用のリリース添付ファイル

## 関連するビルドワークフロー

公開を行わないビルドワークフローは、[ビルドワークフロー](./app-store-build-workflow)で説明しています。

外部リポジトリを設計する場合は、[公式アクションの再利用](./app-store-github-actions)で推奨方法を確認してください。
