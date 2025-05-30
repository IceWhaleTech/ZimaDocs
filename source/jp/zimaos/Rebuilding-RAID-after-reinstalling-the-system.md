---
title: 文章タイトル
description: 
type: Docs
author: admin
tip: 上部バーの固定形式は削除しないでください。descriptionは記事の説明であり、入力しない場合は内容の最初の段落の文字が切り取られます。
---
## 目的
このチュートリアルは、`Files`アプリケーションを使用して`local-storage.db`ファイルをダウンロードおよび置き換える方法を案内し、システムを再インストールした後にRAID構成データを移行または復元できるようにします。
## 操作手順
1. **local-storage.dbファイルをダウンロード**
  a. ZimaCubeの`Files`にアクセスします。
  b. `Files`でアクセスパスを`/ZimaOS-HD/.casaos/db`に設定します。
  c. `local-storage.db`ファイルを見つけてローカルデバイスにダウンロードします。
2. **システムを再インストール**
  a. ZimaCubeを安全にシャットダウンし、デバイスが完全に電源オフであることを確認します。
  b. 必要に応じてシステムSSDドライブを交換し、ZimaOSを再インストールします。
  c. ZimaCubeを起動し、ZimaOSが正常にインストールされて実行されていることを確認します。
3. **local-storage.dbファイルをアップロードおよび置き換え**
  a. `Files`を開き、再度`/ZimaOS-HD/.casaos/db`ディレクトリに移動します。
  b. 現在のディレクトリで`local-storage.db`ファイルを見つけて`local-storage.db.bak`に名前を変更してバックアップを保持します。
  c. ステップ1でダウンロードした`local-storage.db`ファイルを現在のディレクトリにアップロードします。
4. **ZimaCubeを再起動:**
  ファイルを置き換えた後、ZimaCubeデバイスを再起動してすべての変更が有効になることを確認します。
## 注意事項
- エラーによるデータ損失を避けるために、進む前に重要なデータをすべてバックアップしてください。
- インストールや設定に問題が発生した場合は、ネットワーク接続を確認するか、技術サポートに連絡してください。