---
title: ZimaOSへのSyncthingのインストール方法ガイド
description:  
type: Docs  
author: admin  
tip: 上部のバーの固定フォーマットは削除しないでください。descriptionは記事の説明で、記入しない場合は最初の段落が表示されます。  
---  
> _元々IceWhaleコミュニティフォーラムにて公開された記事_ _**Muditha Liyanagama (コミュニティ貢献者)**:_ _[https://community.zimaspace.com](https://community.zimaspace.com/t/a-simple-guide-to-installing-syncthing-on-zimaos/7456?utm_source=chatgpt.com)_

こんにちは、ZimaOSとZimaboardの愛好者の皆さん！

ZimaOSコミュニティとIce-whaleチームは素晴らしいサポートを提供していますが、明確で整理された詳細なインストールガイドを見つけるのは時々難しいことがあります。特にトラブルシューティングの際に簡単で順を追ったアプローチを好む私たちのために、このガイドを作成しました。これがZimaOSとZimaboardに関する記事シリーズの最初のものです。皆さんの役に立つことを願っています。

私は次の仕様のZimaboard2にこのインストールを行いました：

* **CPU:** Intel(R) N150 4コア 2.90 GHz 4スレッド  
* **RAM:** 16 GB 6400 MHz LPDDR5  
* **GPU:** Intel Corporation Alder Lake-N \[Intel Graphics\]  
* **OS:** ZimaOS v1.5.3 Plus  

Syncthingのインストールを始めましょう。

### **ステップ1: アプリストアにアクセス**

1. ZimaOSインターフェースにサインインします。  
2. **アプリストア**に移動します。  

![app_store](https://manage.icewhale.io/api/static/docs/1767081086850_copyImage.png)  

### **ステップ2: Syncthingを見つけて選択**

1. アプリストアの検索バーに「Syncthing」と入力します。  
2. 検索結果から**Syncthing (バックアップ)**を選択します。  

![synctin](https://manage.icewhale.io/api/static/docs/1767081087737_copyImage.png)  

### **ステップ3: カスタムインストール**

1. **インストール**ボタンを見つけますが、直接クリックせずにその隣の小さな**下矢印**をクリックします。  
2. **カスタムインストール**を選択します。  

![custom_install](https://manage.icewhale.io/api/static/docs/1767081088482_copyImage.png)  

### **ステップ4: インストール前の重要な設定**

ここでは、Syncthingが正しく動作するための重要なパラメーターを設定します。

* **Syncthingフォルダパス:**  
  これはSyncthingが同期するファイルを管理する主な場所です。このパス内で作成したサブフォルダは同期のためにアクセス可能になります。  
  **重要な注意:** マウントされたディスクのルートやシステムフォルダ（Gallery、Media、Documentなど）をSyncthingフォルダパスとして使用することはできません。これらのパスでSyncthingを実行するには通常rootユーザーの権限が必要で、セキュリティ上推奨されません。  

* **PGIDとPUID:**  
  これらはSyncthingが使用するユーザー権限を指示する重要な識別子です。誤って設定すると同期に問題が発生し、完全なアンインストールと再インストールが必要になる場合があります。  
  **PGIDとPUIDを見つける方法:**  

1. ZimaOSで**設定**に移動します。  
2. **一般設定**に進みます。  
3. **開発者モード**を有効にします。  
4. **表示**に進みます。  
5. **SSHアクセス**を有効にします。  
6. **Webベースの端末**をクリックします。  
7. ZimaOSのユーザー名とパスワードでサインインします。  
8. 端末に次のコマンドを入力し、Enterを押します。**ユーザー名**の部分を実際のZimaOSのユーザー名に置き換えてください。  
   `id -u ユーザー名`  
   `id -g ユーザー名`

このコマンドの出力に**PUID（ユーザーID）**と**PGID（グループID）**が表示されます。これらの番号をSyncthingのカスタムインストール画面にある**環境変数**セクションに慎重にコピー＆ペーストしてください。私の場合、PGIDは1000でPUIDは999でした。

![set](https://manage.icewhale.io/api/static/docs/1767081089336_copyImage.png)

* **再確認:** 次に進む前に、すべての設定を慎重に確認してください。Syncthingフォルダパスが有効で、PGIDとPUIDの値が正しく入力されていることを確認してください。  
* **インストール:** 設定に自信が持てたら、**インストール**ボタンをクリックします。

### **ステップ5: インストール後 - 同期のベストプラクティス**

Syncthingが正常にインストールされた後：

* フォルダを同期する際は、**必ずSyncthing自体で目的のフォルダパスを作成してください**。  
* **ZimaOSのデフォルトのファイルブラウザで直接目的のフォルダを作成しないでください。** これを行うと予期しない同期の問題が発生することがあります。

この詳細なガイドが、ZimaOSデバイスでSyncthingをスムーズにインストールできる手助けになることを願っています！同期をお楽しみください！
