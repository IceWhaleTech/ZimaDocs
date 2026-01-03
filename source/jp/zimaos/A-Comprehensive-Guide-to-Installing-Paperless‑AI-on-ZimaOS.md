こちらが日本語に翻訳された内容です：

---
title: ZimaOSにPaperless‑AIをインストールするための包括的ガイド
description: 
type: Docs
author: admin
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明です。記入しない場合は、記事の最初の段落を自動的に抜粋します。
---
> _元々IceWhaleコミュニティのフォーラムに公開されたもの_ _**Muditha Liyanagama**_ _による:_ _[https://community.zimaspace.com/](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ai-on-zimaos/7557)_

ZimaOSとZimaboardの愛好者の皆さん、こんにちは！

ZimaOSコミュニティとIce‑Whaleチームは素晴らしいサポートを提供していますが、明確で詳細なインストールガイドを見つけるのは時に難しいことがあります。もし、簡単でステップバイステップのアプローチを好む方—特に小さくても厄介な技術的な障害を乗り越えるための—このガイドはあなたのために設計されています。

これは、ZimaOSとZimaboardに関する私の連載記事の3番目の記事です。このガイドがあなたのセットアッププロセスを簡単にし、時間を節約できることを願っています。

このガイドでは、家庭用に必要なすべての基本機能を備えたPaperless‑AIのインストール方法について説明します。これにより、ローカルネットワークまたはTailscale経由でアクセスできます。もしインターネット経由でPaperless‑AIにアクセスする予定がある場合は、いくつかの設定を調整する必要があるかもしれません。Paperless‑NGXはすでに同じマシンにインストールされている必要があります。なぜなら、Paperless‑AIはそれに依存しているからです。（まだインストールしていない場合は、私の[Paperless‑NGXインストールガイド](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474)を先に読むことをお勧めします。）

私はこのインストールを、以下のハードウェアとソフトウェアでZimaboard 2で行いました：

• CPU: Intel(R) N150, 4コア, 2.90 GHz, 4スレッド

• RAM: 16 GB 6400 MHz LPDDR5

• GPU: Intel Alder Lake‑N グラフィックス

• オペレーティングシステム: ZimaOS v1.5.3 Plus

さあ、始めましょう

**セクション01: 修正されたDocker Composeファイルの準備**

私は公式のPaperless‑AI GitHubページを参照し、元のDocker Composeファイルをいくつか調整してZimaOSに便利に使えるようにしました。ZimaOSにカスタムアプリとしてインポートした後、インストール前にいくつかの修正が必要です。

以下が修正されたDocker Composeファイルです：

    name: paperless-ai
    services:
      paperless-ai:
        cap_drop:
          - ALL
        cpu_shares: 90
        command: []
        container_name: paperless-ai
        deploy:
          resources:
            limits:
              memory: 16508313600
            reservations:
              devices: []
        environment:
          - PAPERLESS_AI_PORT=3000
          - PGID=1000
          - PUID=999
          - RAG_SERVICE_ENABLED=true
          - RAG_SERVICE_URL=http://192.168.68.81:8005
        image: clusterzx/paperless-ai:latest
        labels:
          icon: https://i.imgur.com/LGVPJ8g.png
        ports:
          - target: 3000
            published: "3009"
            protocol: tcp
        restart: unless-stopped
        security_opt:
          - no-new-privileges=true
        volumes:
          - type: bind
            source: /media/Storage/AppData/paperless-ai/app/data
            target: /app/data
          - type: bind
            source: /media/Storage/AppData/paperless-ai/var/lib/paperless-ai
            target: /var/lib/paperless-ai
        devices: []
        cap_add: []
        network_mode: bridge
        privileged: false
    x-casaos:
      author: self
      category: self
      hostname: ""
      icon: https://i.imgur.com/LGVPJ8g.png
      index: /
      is_uncontrolled: false
      port_map: "3009"
      scheme: http
      store_app_id: paperless-ai
      title:
        custom: paperless-ai
        en_us: paperless-ai

**セクション02: ZimaOSへのカスタムアプリのインポート**

1.  ZimaOSにサインインし、ダッシュボードの右上隅にあるプラスアイコンをクリックします。
    
2.  「カスタマイズしたアプリをインストール」を選択します。
    
3.  ポップアップウィンドウで、右上隅の「インポート」をクリックします。
    
4.  新しいウィンドウが表示されます。「Docker Compose」タブに移動し、YAMLファイルをテキストエリアに貼り付けて、「送信」をクリックします。
    
5.  他のポップアップで指示や警告が表示されたら、「OK」をクリックします。

**セクション03: インストール前に必要な設定を編集**

**ボリューム** 正しいフォルダパスを設定します：/app/data /var/lib/paperless-ai

**環境変数：PUIDとPGIDの設定** これらの値は、Paperless‑AIが使用するシステム権限を決定します。誤って設定すると、タグ付け、名前変更、ファイル管理に問題が発生し、修正するために完全な再インストールが必要になることがあります。正しいPUIDとPGIDを確認する方法：

1.  ZimaOS設定を開きます。
    
2.  「一般」セクションに移動し、「開発者モード」を有効にします。
    
3.  「表示」メニューを開き、「SSHアクセス」を有効にします。
    
4.  Webベースのターミナルを起動し、ZimaOSのユーザー名とパスワードでサインインします。
    
5.  以下のコマンドを実行します。 “username” を実際のユーザー名に置き換えてください： id -u username id -g username
    
6.  出力結果をメモします。これらの数字がPUID（ユーザーID）とPGID（グループID）です。それらを環境変数に入力します。（例：私のPGIDは1000、PUIDは999でした。）

**RAGサービスURL** RAG_SERVICE_URLを既存のPaperless‑NGXインストールのURLに更新します。すべての設定が正しく行われたら、「インストール」をクリックします。

**セクション04: インストール後の設定**

初期設定

Paperless‑AIには便利な内蔵セットアップガイドがあります。重要なステップは以下の通りです：

1.  Paperless‑AIを起動し、管理者アカウントを作成します。
    
2.  ログインして接続設定を構成します。
    
3.  AI設定を開き、希望するAIプロバイダを選択します。APIキーを入力します。
    
4.  最良の結果を得るために、AIプロバイダとして「カスタム」を選択し、Base URLとModelを手動で設定します。私はOpenAI、Mistral AI、Google Geminiをテストしましたが、すべて問題なく動作しました。
    
5.  高度な設定とプロンプトの説明を構成します。
    
6.  「保存」をクリックします。自動的なドキュメント処理に関する警告が表示された場合は、「はい、続行」をクリックします。Paperless‑AIが再起動し、Paperless‑NGXからドキュメントの分析を開始します。

**セクション05: ドキュメント処理のパフォーマンス**

Paperless‑NGXに多くのドキュメントがある場合、初期処理に時間がかかることがあります。

_参考までに：_

*   私はZimaboard 2で約9,000件のドキュメントを処理しました。完全な処理には約3日かかりました。長時間かかったにもかかわらず、システムはCPUと