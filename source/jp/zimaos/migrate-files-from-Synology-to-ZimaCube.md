---
title: SynologyからZimaCubeへ、すべてのファイルを移行！
description:
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください、descriptionは記事の説明です、空白の場合は内容の最初の段落の文字が切り取られます
---
# ZimaOSの世界へようこそ！他ブランドのキャンプから来た新しい友達、こんにちは、Synologyの方々！

ZimaOSはNAS愛好者、プロユーザー、スタジオユーザーにとって革命的な存在です。その直感的なインターフェースは、データのバックアップと管理を簡素化し、重要なファイルが常に安全であることを保証します。ZimaOSはDockerアプリケーションのインストールに優れており、ほんの数クリックでプロセスを効率化します。
![](https://manage.icewhale.io/api/static/docs/1722482124812_image.png)

ZimaOSを体験するためにZimaCubeを最初のハードウェアとして選んでいただき、光栄に思います。SynologyデバイスからZimaCubeへのファイル移行を迅速に行うために、このチュートリアルを準備しました。

もちろん、ZimaCubeへのファイル移行は非常に簡単です。それでは始めましょう。

>このチュートリアルは、ZimaOSがインストールされた他のデバイスにも適用できます。

## SMB/SAMBAが私たちの方法になります
SMB（Server Message Block）は、ネットワーク上でファイルやその他のサービスを共有するためにWindowsシステムに組み込まれているプロトコルです。SAMBAはSMBプロトコルを実装しており、* nix系システムのファイル共有方法を豊かにします。

ZimaOSとSynology DSMはどちらも、SAMBAまたは自己実装を通じてSMBをうまく実装/互換性があり、ファイルの共有と転送が非常に便利です。

## ZimaOSでDSMから共有をマウントする
>Synologyの設定の最初に、多くのユーザーはディレクトリを作成する際に共有を設定しましたが、一部のユーザーはディレクトリを作成するときに共有機能を与えませんでした。したがって、移行する前に、新しい共有ディレクトリを作成し、移行したいデータをこの共有ディレクトリに移動する必要があるかもしれません。

ZimaOSのダッシュボードに移動し、Filesアプリを起動します。次に、FilesアプリのUIの左側のナビゲーションバーで、Storageの横にある「+」サインを見つけてクリックし、「LAN Storage」をクリックします。
![](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)
ポップアップウィンドウで、Synology DMSのIPアドレスを入力します。私のは10.0.0.11ですが、デバイスの正しいIPアドレスを入力する必要があります。今、接続ボタンをクリックしてください。
![](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)
>DSMの共有アカウントがGuestではなく、ユーザーとパスワードで特に設定されたアカウントの場合、ここで正しいDSMアカウントとパスワードを入力する必要があります。

## ZimaOSでSynology DSMからファイルをコピー＆ペースト
接続ボタンをクリックして成功裏に接続されると、SynologyはStorageの下にネットワークデバイスとして表示されます。そして右側に、Synologyの共有ディレクトリが表示されます。
![](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)
共有ディレクトリに移動し、移行したいファイルとディレクトリを選択します。すべてのファイルを選択するにはCtrl + Aを押してください。その後、右上のコピーのボタンをクリックします。

![](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

今、ZimaOSのストレージエリアに移動します。ターゲットディレクトリに行き、右上の`Paste xx items`ボタンを選択します。

[![](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)


> コピー＆ペーストするファイルの**合計ボリューム**よりも、宛先ストレージプールの**残り容量**が大きいことを確認する必要があります。

今、ファイル移行が完了するのを待っています。移行が完了したら、ZimaOSがデータ管理にもたらす便利さを体験してください！