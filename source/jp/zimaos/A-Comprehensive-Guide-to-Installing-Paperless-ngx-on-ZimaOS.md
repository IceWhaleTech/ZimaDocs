---
title: ZimaOSへのPaperless-ngxインストールガイド
description: 
type: Docs
author: icewhale123456
tip: トップバーの固定フォーマットを削除しないでください。descriptionは記事の説明で、記入しない場合は最初の段落が切り取られます。
---
> _元々、IceWhale Community Forumにて公開された_ _**Muditha Liyanagama**_ _による記事:_ _[https://community.zimaspace.com/](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474)_

こんにちは、ZimaOSとZimaboardの愛好者の皆さん！

ZimaOSコミュニティとIceWhaleチームの素晴らしいサポートは提供されていますが、明確で整理されたインストールガイドを見つけることが時には難しいと感じています。特に、テクニカルな問題を解決する際に簡単でステップバイステップのアプローチを好む方々のために、このガイドを作成しました。このガイドは、ZimaOSとZimaboardに関するシリーズ記事の第二弾で、皆さんのお役に立てれば幸いです。

このガイドは、家庭内で使用するためのPaperless-ngxのインストール方法に焦点を当てています。ローカルネットワークまたはTailscaleネットワーク内でアクセス可能です。もしインターネット上でPaperless-ngxを公開する予定の場合、以下の設定のいくつかは調整が必要です。

私は、以下の仕様を持つZimaboard 2にてインストールを行いました：

*   **CPU:** Intel(R) N150 4コア 2.90 GHz 4スレッド
    
*   **RAM:** 16 GB 6400 MHz LPDDR5
    
*   **GPU:** Intel Corporation Alder Lake-N \[Intel Graphics\]
    
*   **OS:** ZimaOS v1.5.3 Plus
    

Paperless-ngxのインストールを始めましょう！

### **ステップ 1: アプリストアへのアクセス**

1.  ZimaOSのウェブインターフェースにサインインします。
    
2.  **アプリストア**に移動します。
    

### **ステップ 2: Paperless-ngxの検索と選択**

1.  アプリストアの検索バーに「Paperless-ngx」と入力します。
    
2.  検索結果から**Paperless-ngx (BigBearCasaOS)**を選択します。
    

### **ステップ 3: カスタムインストール**

1.  **インストール**ボタンを探します。直接クリックするのではなく、隣の小さな下矢印をクリックします。
    
2.  **カスタムインストール**を選択します。
    

### **ステップ 4: インストール前の重要な設定**

ここでは、Paperless-ngxが正しく動作するために必要な基本的なパラメータを設定します。

**Volumes**セクションで、以下の変更を行います。（デフォルト設定のままで良い場合は変更しなくて構いません。参考画像をご覧ください。）

*   **/usr/src/paperless/consumeのカスタムボリュームパスの設定**: 消費フォルダの特定の、使いやすいパスを定義することを強くお勧めします。これにより、ドキュメントの管理がより簡単になります。
    

![Configuration Path](https://manage.icewhale.io/api/static/docs/1767274710302_copyImage.png)

以下の環境変数を追加します。（参考画像をご覧ください。）

*   **PAPERLESS_ADMIN_USER**: デフォルトの値を好みの管理者ユーザー名に変更します。
    
*   **PAPERLESS_ADMIN_PASSWORD**: デフォルトの値を好みの管理者パスワードに変更します。
    
*   _これらのパラメータは、インストール時に管理者アカウントを作成します。_
    
*   **PAPERLESS_CONSUMER_DELETE_ORIGINALS: true**:
    
*   _このパラメータは、ファイルが処理され、Paperless-ngxに取り込まれた後、/consumeフォルダから自動的に削除されることを有効にします。_
    
*   **PAPERLESS_CONSUMER_RECURSIVE: true**:
    
*   _このパラメータは、/consumeフォルダ内のサブフォルダとその内容も処理するための再帰的な消費を有効にします。_
    
*   **PAPERLESS_OCR_CLEAN: clean-final**:
    
*   **PAPERLESS_OCR_LANGUAGES: <OCRサポート言語の3文字コードをスペースで区切って入力（例：eng sin）>**:
    
*   _これらの設定は、Paperless-ngxの基本的なOCR機能を有効にします。ただし、特定の_ _clean-final_ _設定とOCR言語は、インストール後にPaperless-ngxのGUI内でさらに設定と有効化が必要です。_
    
*   **PAPERLESS_CSRF_TRUSTED_ORIGINS:** _**http://your_server**_ _**address:port**_
    
*   **PAPERLESS_URL:** _**http://your_server**_ _**address:port**_
    
*   _これらの設定は非常に重要です。URLの末尾にスラッシュ（/__**/**__）を付けないでください。これらのパラメータが不正確だと、「Forbidden (403) CSRF verification failed. Request aborted」というエラーメッセージが表示され、サインインできなくなります。_
    
*   **注意:** ZimaboardのIPアドレスまたはホスト名に置き換えてください（例：192.168.1.100）。Paperless-ngxが使用するポート番号も置き換えてください（通常はデフォルトで8000ですが、ZimaOSアプリストアの設定で確認できます）。
    

![Confirm path](https://manage.icewhale.io/api/static/docs/1767274711098_copyImage.png)

その他の設定は変更しないでください。

**再確認:** 進行する前に、すべての設定を慎重に確認してください。設定が正しいと確信したら、**インストール**ボタンをクリックします。

### **インストール後の設定と操作**

インストール後、Paperless-ngxインターフェースにサインインし、OCR設定を以下のように構成します：

1.  **アプリケーション設定** —> **OCR設定**に移動します。
    
2.  **Clean**をclean-finalに設定します。
    
3.  **Deskew**を有効にします。
    
4.  **言語**に希望するOCRサポート言語の3文字コードをプラス記号（+）で区切って入力します（例：eng+sin）。
    
5.  **保存**をクリックします。
    

![OCR Settings](https://manage.icewhale.io/api/static/docs/1767274711641_copyImage.png)

次に、ZimaOSの**アプリケーションダッシュボード**に戻り、**Paperless-ngx**を再起動します。

![restart](https://manage.icewhale.io/api/static/docs/1767274712173_copyImage.png)

**重要な運用ノート:** 大量のドキュメントを/consumeフォルダに追加する場合は、Paperless-ngxを再起動することをお勧めします。再起動しないと、ファイルの権限の問題が発生し、ドキュメントの処理ができなくなることがあります。もしくは、Paperless-ngxのGUIを通じて直接ドキュメントをアップロードする方法もあり、この場合は通常再起動は必要ありません。