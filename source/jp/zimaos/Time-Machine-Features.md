---
title: MacからZimaCubeにTime Machineを使ってファイルをバックアップするには？
description: 
type: Docs
author: admin
tip: トップバーの固定フォーマットは削除しないでください、descriptionは記事の説明です。未記入の場合、内容の最初の段落の文字が切り取られます。
---
Macのファイルを安全に保ちたいですか？ZimaOSの新しいTime Machine機能を使えば、簡単にファイルをZimaCubeにバックアップできます。この強力な機能は、迅速かつ簡単で、重要なデータを常に保護します。バックアップを迅速に設定するための簡単な手順は以下の通りです。

始める前に、最新バージョンのZimaOSをダウンロードしてインストールしてください：https://github.com/IceWhaleTech/ZimaOS/releases

## ステップ1: ZimaOS共有フォルダの設定
1. ZimaOSのダッシュボードを開きます（例：`http://<あなたの_nas_ip>`にアクセス）。
2. **ファイル**ページに移動します。
3. バックアップ先として使用するフォルダを見つけます。例えば、**Time Machine**です。
4. フォルダを右クリックして、**Sambaで共有**を選択します。
![](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)
5. ポップアップウィンドウで：
- フォルダ名とストレージ位置が正しいことを確認します。
- **Time Machineオプション**を設定します。
- 注意: デフォルトのユーザーがTime Machineの認証に使用されます。
- （オプション）**+追加**をクリックして、他のユーザーにアクセス権を割り当てます。
![](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)
6. 作成をクリックして、共有フォルダの設定を完了します。
  ![](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)
## ステップ2: MacでのTime Machineの設定
1. **システム環境設定**または**システム設定**（macOS Ventura以降）を開きます。
2. **Time Machine**をクリックします。
![](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)
3. **バックアップディスクを追加...**を選択します。
![](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)
4. ディスクリストで、ZimaOSで以前に設定した共有フォルダ（例：**Time Machine**）を見つけて選択します。**ディスクを設定**をクリックします。
![](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)
5. プロンプトに従ってユーザー名とパスワードを入力して、ディスクの設定を完了します。
![](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)
## ステップ3: バックアップの開始
1. MacとZimaCubeが同じLAN内にあることを確認します。
2. Time Machineはターゲットフォルダを自動的に識別し、バックアップを開始します。
![](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)
## 注意事項
**ストレージスペース**：ZimaCubeにバックアップ要件を満たすのに十分な空きスペースがあることを確認してください。
**ネットワーク接続**：バックアップが失敗した場合は、ネットワーク接続を確認し、ZimaCubeのSMBサービスが有効であることを確認してください。
**権限パスワード入力の問題**：パスワード入力時、macOSが入力できない場合があります。この問題が発生した場合は、まず空のスペースをクリックし、その後にパスワード入力ボックスを再度クリックして、再試行してください。

## まとめ
上記の手順に従って、MacのファイルをZimaCubeに正常にバックアップし、データセキュリティに対する堅固なバリアを追加しました。操作中に質問がある場合は、ぜひサポートチームまでご連絡ください <feedback@zimaos.com>。ZimaOSがあなたの仕事と生活により効率的な保護を提供します！

## さらなる読み物：
**Time Machineを使用してファイルを復元する方法**：macOSユーザーガイド：[MacでTime Machineを使用してバックアップされたアイテムを復元](https://support.apple.com/zh-cn/guide/mac-help/mh11422/11.0/mac/11.0)