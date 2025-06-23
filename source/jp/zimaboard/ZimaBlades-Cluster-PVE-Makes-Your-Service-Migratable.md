---
title: 2 ZimaBlades、1 クラスター？ PVE によってサービスを移行可能に！
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください
---
VPN、メディアトランスコード、DNS、またはゲームサーバーなどの重要なサービスを実行している自宅サーバーを想像してみてください。これらのサービスをいつか新しいマシンに移行することを考えたことはありますか？異なるマシン間でのサービスの移行は一般的なニーズであり、サーバーが故障した場合に自動的にサービスを新しいデバイスに移行できれば、さらに便利です。ZimaBladeを使ってこれを実現する方法は？

![](https://manage.icewhale.io/api/static/docs/1720063069079_copyImage.jpeg)

[ZimaBlade](https://shop.zimaspace.com/products/zimablade-single-board-server-for-cyber-native) はコンパクトでありながら強力なサーバーコンピュータです。PVE（Proxmox Virtual Environment）はサーバー仮想化管理ソリューションです。ZimaBlade と PVE を組み合わせて、仮想マシン、コンテナ、そして高可用性クラスターの管理が可能です。

![](https://manage.icewhale.io/api/static/docs/1720063069927_copyImage.png)

  

今回は、2 台の ZimaBlade を使って PVE クラスターを設定し、サービスの移行を実現する方法を説明します。

  

必要なもの：

*   2 台の ZimaBlade キット: [ZimaBlade シングルボードサーバー](https://shop.zimaspace.com/products/zimablade-single-board-server-for-cyber-native)
    
*   2 台のハードドライブ（SATA）
    
*   その他：
    
    *   PVE インストールメディアを作成するための USB ドライブ
        
    *   キーボードと USB ドライブを ZimaBlade に接続するための USB ハブ
        
    *   ネットワーキング用の RJ45 ケーブル 2 本
        
    *   初期設定のためのキーボードとモニター
        

## PVE システムのインストール

ZimaBlade に PVE をインストールするための簡単な手順は以下の通りです：

  

`Rufus` を使用して PVE ISO ファイルを USB ドライブに書き込みます。以下のリソースが必要になる場合があります：

Rufus を取得: [Rufus ダウンロード](https://rufus.ie/)

PVE ISO を取得: [Proxmox ダウンロード](https://www.proxmox.com/en/downloads)

PVE を USB ドライブに書き込んで PVE インストールメディアを作成します：

*   USB ドライブを Windows ホストに挿入し、そのホストで Rufus プログラムを起動します。
    
*   Rufus の「デバイス」欄で、挿入した USB ドライブを選択します。
    
*   「ブート選択」の「SELECT」ボタンをクリックして、PVE ISO ファイルをディスクから選択します。
    

![](https://manage.icewhale.io/api/static/docs/1720063070516_copyImage.png)

*   「START」ボタンをクリックして、インストールファイルを USB ドライブに書き込みます。
    

  

メモリをインストールし、Ethernet とビデオケーブルを ZimaBlade に接続します。ZimaBlade にメモリやその他のコンポーネントをインストールする詳細な手順については、こちらのチュートリアルを参照してください：[ZimaBlade で NAS をセットアップする方法](https://www.zimaspace.com/docs/docs/How-to-set-up-a-NAS-with-ZimaBlade.html)。

  

次に、PVE をインストールします：

*   USB ドライブを Windows マシンから安全に取り外し、USB ハブにキーボードと共に接続します。
    
*   USB ハブを ZimaBlade に接続します。
    
*   モニターの電源を入れます。
    
*   ZimaBlade に電源を接続し、すばやく繰り返し DEL キーを押して ZimaBlade BIOS に入ります。
    

![](https://manage.icewhale.io/api/static/docs/1720063071163_copyImage.jpeg)

*   キーボードの矢印キーを使って BIOS 内を移動し、「Save & Exit」メニューを探します。
    
*   「Boot Override」内で USB ドライブを見つけて Enter キーを押します。
    
*   これで PVE インストール UI に入ります。
    

  

2 台の ZimaBlade に PVE をインストールする際の注意点：

*   PVE は外部ストレージにインストールします（内部 eMMC にはインストールしないでください）。
    
*   ロケール設定が一致していることを確認してください。以下は一例です：

![](https://manage.icewhale.io/api/static/docs/1720063616916_image.png)

*   各 ZimaBlade に異なるホスト名を設定します。
    
*   各 ZimaBlade に手動で異なる IP アドレスを割り当てます（LAN の設定に応じて）。以下は一例です：

  ![](https://manage.icewhale.io/api/static/docs/1720063563445_image.png)

プロンプトに従ってインストールを完了させてください。

PVE クラスターの作成
-------------

任意の ZimaBlade を選び、`https://PVE1IP:8006` で PVE WebUI にアクセスします：

![](https://manage.icewhale.io/api/static/docs/1720063072977_copyImage.png)

  

「Cluster」をクリックし、「Create Cluster」を選択します。クラスターに名前を付け、「Create」をクリックします：

![](https://manage.icewhale.io/api/static/docs/1720063073525_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063074070_copyImage.png)

「TASK OK」が表示されたら、ウィンドウを閉じ、「Join Information」をクリックし、「Copy Information」をクリックします：

![](https://manage.icewhale.io/api/static/docs/1720063074636_copyImage.png)

次に、2 台目の ZimaBlade の PVE WebUI に `https://PVE2IP:8006` でアクセスします：

![](https://manage.icewhale.io/api/static/docs/1720063075226_copyImage.png)

「Cluster」をクリックし、「Join Cluster」を選択します。先ほどコピーしたジョイン情報を貼り付け、他の ZimaBlade の root パスワードを入力して「Join Cluster」をクリックします：

![](https://manage.icewhale.io/api/static/docs/1720063075739_copyImage.png)

これで、このマシンはクラスターの一部になります。さらにマシンを追加する場合も、同様の手順を踏んでください。複数のノードがクラスターに参加すると、PVE WebUI にログインすることで他のノードが表示されます。

![](https://manage.icewhale.io/api/static/docs/1720063076277_copyImage.png)

これで、任意のノードに仮想マシンやサービスをインストールできます！

クラスターの使用例: サービス移行
---------------------

サービスをクラスター内の別のノードに移行するには：

*   1 台のノードにシステムをインストールします。ここでは Debian を例として使用します。
    
    *   PVE にシステムをインストールする詳細な動画チュートリアルは、こちらをご覧ください: [PVE にシステムをインストールする方法](https://www.youtube.com/watch?v=K4pOkBwJMg8)
        
*   インストールが完了したら、右側の「Start」ボタンをクリックして仮想マシンを起動します。
    
*   同じ LAN 内の別の Windows マシンから、この仮想マシンを ping します。
    

![](https://manage.icewhale.io/api/static/docs/1720063076945_copyImage.png)

*   ここで、仮想マシンを PVE2 から PVE1 に移行します。移行手順を踏んでサービス移行を完了させます。
    

![](https://manage.icewhale.io/api/static/docs/1720063077580_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063078124_copyImage.png)

*   移行中も元のサービスは動作し続けます。
    

![](https://manage.