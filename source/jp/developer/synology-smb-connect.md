---
title: SynologyとSMB共有をリンクする
description:
type: “Docs”
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明で、未記入の場合は内容の最初の段落の文字を切り取ります。
---
# NASからファイルを共有して取得するには？SAMBAが最も重要な方法かもしれません
ネットワーク接続ストレージについて話すとき、私たちはファイルが一か所に保存され、管理され、どこからでもアクセスできることを望みます。でも、それはどのように実現されるのでしょうか？
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)
ZimaOSのWebUIにアクセスすることで、データに常にアクセスできます。ここには美しく整理されたインターフェースと流暢な体験があります。しかし、あなたの仕事がファイルの参照を含む場合や、ファイルシステム階層でのより複雑な操作が必要な場合は、SMB/SAMBAといった技術を通じてNASドライブをクライアントシステムにマウントする方が良い方法です。
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)
SMB（Server Message Block）は、ネットワーク経由でファイルやその他のサービスを共有するためにWindowsシステムに組み込まれたプロトコルです。SAMBAはSMBプロトコルを実装しており、*nix系システムのファイル共有方法を豊かにします。ZimaOSはSAMBAを搭載しており、ファイルの共有と転送を非常に便利にしています。以下の内容では、便宜上SMBとしてSMBとSAMBAの両方について説明します。
## ZimaOSで共有フォルダーを作成する
ZimaOSのダッシュボードでファイルアプリを起動し、共有したいファイルを含む対象フォルダーを見つけます。フォルダーを右クリックして「共有」を選択します。
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)
ダイアログウィンドウが表示され、対応するシステムで共有フォルダーをマウントするために必要なURLが示されます。
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)
これらの2つのURLは、プロユーザーがドライブを手動でマウントするためのものです。さらに、対応するシステムで[Zimaクライアント](https://findzima.com/)を使用すると、マウントプロセスが簡単になります。
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)
## WindowsでSMB共有フォルダーをマウントする
[getzima](https://findzima.com/)からZima-latest setup.exeをダウンロードし、開きます。これによりインストールプロセスが開始され、インストール後にZimaクライアントが自動的に起動します。タスクバーの右側にあるZimaアイコンを見つけます。接続されていない状態のため、?（疑問符）として表示されます。
アイコンを右クリックして「スキャンしてZimaに接続」を選択します。
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)
Zimaデバイスを見つけて「接続」をクリックします。
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)
Zima.exeがWebUIのユーザー名とパスワードを入力してログインするように求めます。その後、zima.exeアイコンは疑問符からZIMAマークに変わります。これは、zima.exeがログイン状態に入ったことを意味します。
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)
zimaアイコンを右クリックし、「ファイルエクスプローラーで開く」を選択すると、共有フォルダーがWindowsシステムにマウントされ、自動的に開かれます！

> 注意: 正常に動作するためには、あなたのWindowsとZimaOSが同じローカルエリアネットワーク(LAN)に接続されている必要があります。
## macOSでSMB共有フォルダーをマウントする
上記のように、[findzima](https://findzima.com/)でMacユーザー向けにzimaアプリも準備しています。Mac zimaアプリの使用方法は、Windowsのものとほぼ同じです。上記の内容を参考にしてください。

共有フォルダーを作成した後にFilesアプリが表示するメッセージを覚えていますか？macOSでは、手動でマウントするために先ほど得たURLを使用します！
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)
MacのFinderを開いてCMD+Kを押し、対応するURLを入力ボックスにコピー＆ペーストします。
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)
「接続」をクリックします。現在のプロンプトダイアログで、「ゲスト」を選択し、「接続」をクリックします。

> ZimaOS v1.2.3のユーザーは、「登録ユーザー」を選択し、正しいユーザー名とパスワードを入力してください。
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)
これで、共有フォルダーが開かれ、Finderアプリの左列に表示されます。
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)
> WindowsエクスプローラーのURLはどうなりますか？zimaの自動マウントと手動でURLを介してドライブをマウントすることの違いは何ですか？

現在、私たちのSMB共有はゲストアカウントを使用しています。将来のバージョンでは、共有機能に複数のユーザーを導入し、権限管理を強化する予定です。これが皆さんのより多様なニーズに応えることを願っています。
## LANだけではない
実際には、LANだけでなく、直接ネットワークやWANでも、Zimaデバイスに簡単に接続し、共有ディレクトリをネットワークドライブとしてマッピングできます。関連するチュートリアルをリリースする予定です。ご注目いただきありがとうございます。

使用中に問題が発生した場合は、いつでもお気軽にお問い合わせください。また、NASやZimaOSについてさらに議論するために、[コミュニティ](https://community.zimaspace.com/)や[Discord](https://discord.com/invite/uuNfKzG5)に参加することもできます。皆様のフィードバックをお待ちしております！