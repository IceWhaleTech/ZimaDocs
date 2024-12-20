翻译：

---
title: SynologyとSMB共有をリンクする  
description:  
type: “Docs”  
tip: 頂部の固定フォーマットは削除しないでください。descriptionは記事の説明です。記入しない場合、最初の段落が自動的に表示されます。  
---  

# NASからファイルを共有および取得する方法？ SAMBAは最も重要な方法かもしれません  
ネットワーク接続型ストレージ（NAS）について話すとき、私たちはファイルを1か所に保存し、管理し、どこからでもアクセスできるようにしたいと考えています。しかし、それはどうなっているのでしょうか？  
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)  
ZimaOSのWebUIを使用すれば、美しく整理されたインターフェースとスムーズな体験でデータにアクセスできます。しかし、作業がファイル参照に関するものであったり、ファイルシステム階層での複雑な操作が必要な場合、NASドライブをSMB/SAMBAのような技術を使ってクライアントシステムにマウントする方が良い方法です。  
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)  
SMB（Server Message Block）は、ネットワークを通じてファイルやその他のサービスを共有するためにWindowsシステムに組み込まれたプロトコルです。SAMBAはこのSMBプロトコルを実装し、*nix系システムのファイル共有方法を強化します。ZimaOSにはSAMBAが組み込まれており、ファイル共有や転送が非常に便利になります。以下では、便宜上SMBおよびSAMBAについて説明します。  
## ZimaOSで共有フォルダを作成する  
ZimaOSのダッシュボードで「ファイル」アプリを起動し、共有したいファイルを含む目的のフォルダを見つけます。フォルダを右クリックし、「共有」を選択します。  
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)  
ダイアログウィンドウが表示され、共有フォルダを対応するシステムにマウントするために必要なURLが表示されます。  
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)  
これら2つのURLは、プロユーザー向けにドライブを手動でマウントするためのものです。さらに、[Zimaクライアント](https://findzima.com/)を対応するシステムにインストールすると、マウント作業を簡単に行えます。  
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)  
## WindowsでSMB共有フォルダをマウントする  
[findzima](https://findzima.com/)からZima-latest setup.exeをダウンロードし、開きます。インストールプロセスが始まり、インストール後にZimaクライアントが自動的に起動します。タスクバーの右側にZimaのアイコンが表示され、接続されていない状態では疑問符のアイコンが表示されます。  
アイコンを右クリックし、「スキャンしてZimaに接続」を選択します。  
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)  
Zimaデバイスを見つけ、接続をクリックします。  
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)  
Zima.exeがWebUIのユーザー名とパスワードを入力してログインするように促します。その後、Zima.exeアイコンは疑問符からZIMAマークに変わり、ログイン状態に入ったことを示します。  
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)  
Zimaアイコンを右クリックし、「ファイルエクスプローラーで開く」を選択すると、共有フォルダがWindowsシステムにマウントされ、自動的に開きます！  

> 注：正常に動作するためには、WindowsとZimaOSが同じローカルエリアネットワーク（LAN）に接続されている必要があります。  
## macOSでSMB共有フォルダをマウントする  
上記と同様に、[findzima](https://findzima.com/)にMacユーザー向けのzimaアプリも用意しています。Mac用のzimaアプリの使い方はWindows版とほぼ同じです。上記の内容を参照してください。  

ファイルアプリで共有フォルダを作成した後、表示されたURLを思い出しましたか？macOSでは、先ほど取得したURLを使用して手動でマウントします！  
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)  
MacのFinderを開き、CMD+Kを押し、対応するURLを入力ボックスにコピー＆ペーストします。  
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)  
「接続」をクリックします。今のところ、ダイアログで「ゲスト」を選び、「接続」をクリックします。  

> ZimaOS v1.2.3のユーザーは、「登録ユーザー」を選び、正しいユーザー名とパスワードを入力してください。  
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)  
これで、共有フォルダが開き、Finderアプリの左側のカラムに表示されます。  
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)  
> Windowsエクスプローラー用のURLはどうでしょうか？zimaの自動マウントと手動でURLを使ってドライブをマウントする違いは何ですか？  

現在、SMB共有はゲストアカウントを使用しています。将来のバージョンでは、複数のユーザーに対応した共有機能を導入し、権限管理を強化する予定です。これにより、より多様なニーズに対応できることを願っています。  
## LANだけではない  
実際、LANだけでなく、直接ネットワークやWANでも、Zimaデバイスに簡単に接続し、共有ディレクトリをネットワークドライブとしてマッピングできます。関連するチュートリアルを公開予定です。引き続きご注目ください。  

使用中に問題が発生した場合は、いつでもお知らせください。また、[コミュニティ](https://community.zimaspace.com/)や[Discord](https://discord.com/invite/uuNfKzG5)に参加して、NASやZimaOSについてさらに議論することもできます。フィードバックをお待ちしています！