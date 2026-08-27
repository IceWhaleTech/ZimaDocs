---
title: ドライブ間でデータを移動する
seo_title: "ZimaOSでドライブ間のデータを移動：Docker、アプリデータ、フォルダー"
description: "ZimaOSに組み込まれたData Migrationツールを使用して、Dockerイメージ、アプリデータ、ユーザーフォルダーを別のストレージ領域へ移動します。"
type: Docs
author: Lauren Pan
tip: このFront Matterブロックは削除しないでください。descriptionフィールドは記事の概要に使用され、空の場合は最初の段落が代わりに使用されます。
---

ドライブの空き容量がなくなっても、再インストールする必要はありません。組み込みの移行ツールを使用すると、Dockerイメージ、アプリデータ、ユーザーフォルダーを、動作を維持したまま別のストレージ領域へ移動できます。

## 移動できるデータ

- Dockerイメージ
- Dockerアプリケーションデータ
- ユーザーデータベース（Gallery、Downloads、Documents、Media、Backup）

## 移動手順

![ストレージフォルダーの一覧とData Migration項目を表示するZimaOSのSettings画面](https://manage.icewhale.io/api/static/docs/1727178430378_image.png)

1. **Settings > Data Migration** を開きます。
2. 移行する項目を選択し、右側の **Modify Location** ボタンをクリックします。

![選択可能な各項目の横にModify LocationボタンがあるData Migration画面](https://manage.icewhale.io/api/static/docs/1727178444256_image.png)

3. 新しいストレージ領域を選択し、**Next** をクリックします。

![ストレージ領域の選択とNextボタンを表示するData Migrationウィザード](https://manage.icewhale.io/api/static/docs/1727178450237_image.png)

4. "I acknowledge and confirm this action" のチェックボックスをオンにし、**Start Migration** をクリックします。

![確認用チェックボックスとStart Migrationボタンを表示するData Migration確認画面](https://manage.icewhale.io/api/static/docs/1727178455511_image.png)

5. 進行状況が全画面で表示され、移行中はほかの操作を実行できません。

![移行状態を全画面で表示するData Migration進行状況画面](https://manage.icewhale.io/api/static/docs/1727178460307_image.png)

6. 完了すると、移行の詳細がポップアップに表示されます。

![完了した移行の詳細を表示するData Migration完了ポップアップ](https://manage.icewhale.io/api/static/docs/1727178465734_image.png)

## 関連情報

- **[アプリの保存先](./docker-app-paths "アプリがドライブ上のどこにデータを保存し、どのように移動するかを確認する")** — 移動する前にアプリデータの保存場所を確認する
- **[ストレージ設定](./storage-setup "用途に合ったRAIDオプションでストレージ構成を選択する")** — ストレージ領域を計画する
