---
title: RAIDトラブルシューティングガイドの作成
description:
type: “Docs”
tip: トップバーの固定フォーマットは削除しないでください、descriptionは記事の説明であり、未入力の場合は内容の最初の段落の文字を切り取ります
---
# RAIDの作成に関する問題を扱う際は、以下のトラブルシューティング手順に従うことをお勧めします。

## ハードドライブの数を確認する
RAID設定の基本要件を満たすために、少なくとも2台のハードドライブが利用可能であることを確認してください。
![](https://manage.icewhale.io/api/static/docs/1722484339854_image.png)
## ディスクの健康状態を確認する
![](https://manage.icewhale.io/api/static/docs/1722484363590_image.png)
## 各ディスクのフォーマットが成功しているか確認する
各ハードドライブを個別にフォーマットし、フォーマットプロセスがエラーなく正常に完了することを確認します。
![](https://manage.icewhale.io/api/static/docs/1722484386621_image.png)
## マウントポイントを確認する
RAIDのマウントポイントにファイルが既に存在しないことを確認します。マウントポイントは、RAIDのスムーズな構成を確保するために空である必要があります。ファイルが存在する場合は、バックアップを取り、マウントポイントをクリアします。
![](https://manage.icewhale.io/api/static/docs/1722484409099_image.png)
## システムの再起動
上記の確認が完了したら、システムを再起動し、再度RAIDの作成を試みます。
![](https://manage.icewhale.io/api/static/docs/1722484430867_image.png)