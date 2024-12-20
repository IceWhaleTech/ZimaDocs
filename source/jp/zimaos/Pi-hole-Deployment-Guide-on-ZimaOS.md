以下是您的内容翻译成日语，并保留原有格式：

---
title: SynologyとSMB共有のリンク
description:
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明です。記入しない場合、最初の段落の文字が自動的に取得されます。
---
# NASからファイルを共有して取得する方法：SAMBAが最も重要な方法かもしれません
ネットワーク接続ストレージ（NAS）について話すとき、私たちはファイルを一箇所に保存し、管理し、どこからでもアクセスできるようにしたいと考えます。しかし、実際にはどうやってそれを実現するのでしょうか？
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)
ZimaOSのWebUIにアクセスすれば、整理されたインターフェースとスムーズな体験を得ることができます。しかし、作業がファイルの参照を含む場合や、ファイルシステム階層のより複雑な操作が必要な場合、SMB/SAMBAのような技術を使ってNASドライブをクライアントシステムにマウントする方法がより良い方法となります。
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)
SMB（Server Message Block）は、ネットワーク越しにファイルやその他のサービスを共有するためにWindowsシステムに組み込まれているプロトコルです。SAMBAは、*nix系システムでSMBプロトコルを実装しており、ファイル共有の方法を豊富にしています。ZimaOSはSAMBAを装備しており、ファイルの共有や転送が非常に便利です。以下では、便宜上、SMBとSAMBAを両方ともSMBとして説明します。
## ZimaOSで共有フォルダを作成する
ZimaOSのダッシュボードで「Files」アプリを起動し、共有したいファイルを含むフォルダを探します。フォルダを右クリックし、「Share」を選択します。
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)
ダイアログウィンドウが表示され、対応するシステムで共有フォルダをマウントするためのURLが提示されます。
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)
これらの2つのURLは、プロユーザーが手動でドライブをマウントするためのものです。また、[Zimaクライアント](https://findzima.com/)を対応するシステムにインストールすれば、マウントのプロセスが簡単になります。
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)
## WindowsでSMB共有フォルダをマウントする
[findzima](https://findzima.com/)からZima-latest setup.exeをダウンロードし、開きます。インストールプロセスが開始され、インストール後にZimaクライアントが自動的に起動します。タスクバーの右側にZimaアイコンが表示されますが、接続されていない状態では「？」マークが表示されます。
アイコンを右クリックし、「Scan and Connect to Zima」を選択します。
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)
Zimaデバイスを探し、「Connect」をクリックします。
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)
Zima.exeがWebUIのユーザー名とパスワードの入力を求めてきます。その後、Zima.exeアイコンが「？」からZIMAマークに変わり、ログイン状態になります。
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)
Zimaアイコンを右クリックし、「Open in File Explorer」を選択すると、共有フォルダがWindowsシステムにマウントされ、自動的に開きます！

> 注：正常に動作させるためには、WindowsとZimaOSが同じローカルエリアネットワーク（LAN）内にある必要があります。
## macOSでSMB共有フォルダをマウントする
上記のように、Macユーザー向けにも[findzima](https://findzima.com/)でzimaアプリを提供しています。Macのzimaアプリの使用方法は、Windows版とほぼ同じです。上記の内容を参照してください。

共有フォルダを作成後、Filesアプリが表示するURLを覚えていますか？ macOSでは、手動でマウントするために、先ほど取得したURLを使用します！
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)
MacのFinderを開き、CMD+Kを押して、対応するURLを入力ボックスにコピー＆ペーストします。
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)
「Connect」をクリックします。プロンプトダイアログでは、「Guest」を選択して「Connect」をクリックします。

> ZimaOS v1.2.3のユーザーは、「Registered User」を選択し、正しいユーザー名とパスワードを入力してください。
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)
これで、共有フォルダが開かれ、Finderアプリの左側の列に表示されます。
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)
> Windows Explorer用のURLについてはどうですか？ Zimaの自動マウントと、URLを使って手動でドライブをマウントする違いは何ですか？

現在、当社のSMB共有はゲストアカウントを使用しています。将来のバージョンでは、共有機能に複数のユーザーを導入し、権限管理を強化する予定です。これにより、より多様なニーズに対応できるようになることを期待しています。
## LANだけではない
実際、LANだけでなく、直接接続のネットワークやWANでも、Zimaデバイスを簡単に接続し、共有ディレクトリをネットワークドライブとしてマッピングできます。関連するチュートリアルを公開予定ですので、引き続きご注目ください。

使用中に問題が発生した場合は、いつでもお知らせください。また、[コミュニティ](https://community.zimaspace.com/)や[Discord](https://discord.com/invite/uuNfKzG5)に参加して、NASやZimaOSについてさらに議論することができます。皆様のフィードバックをお待ちしております！

