---
title: ZimaBladeでNASを設定する方法
description:
type: “Docs”
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明で、未記入の場合は内容の最初の段落が切り取られます。
---
NASは、あなたの貴重なデータ資産が存在するデジタルの聖域です。
--------------------------------------------------------------

ZimaBladeは、ストレージニーズをシームレスなNAS体験に変えるコンパクトなシングルボードサーバーです。そして地球だけでなく、いつかは火星でも！あなたが経験豊富なLinux愛好者であろうと、好奇心旺盛なテック探検者であろうと、ZimaBladeを使用してポケットサイズのデータ聖域NASを設定するのは簡単です。それでは、このチュートリアルに飛び込んでみましょう！

![](https://manage.icewhale.io/api/static/docs/1719988281769_copyImage.png)

**必要なもの:**

*   ZimaBlade: あなたの信頼できるシングルボードサーバー！
    
*   SO-DIMM DDR3L: ZimaBladeに電力を供給するメモリモジュール。
    
*   Type-C 12V 3A電源アダプター: ZimaBladeを充電し続けます。
    
*   MiniDPケーブル: ディスプレイを接続するため。
    
*   1〜2台のHDDまたはSSD (SATAインターフェース): あなたのストレージヒーロー。
    
*   RJ45コネクタとLAN接続: ZimaBladeをネットワーク接続します。
    
*   USBキーボード: 初期設定用。
    
*   スクリーン: ブートと設定の進行状況を見るため。
    

アクセサリーはすべて私たちの[Zimaストア](https://shop.zimaspace.com/collections/zima-accessories?utm_source=head&utm_medium=menu)で見つけることができます。

[また、クイックスタート動画もご覧ください。](https://www.youtube.com/watch?v=--G4T5aGGEM) では、始めましょう！

## ステップ1: SO-DIMMを取り付ける

ZimaBladeから黒いカバーを取り外し、透明なカバーを開けます：

![](https://manage.icewhale.io/api/static/docs/1719988660694_2.png)


ドライバーを使って透明なカバーを開けます：

![](https://manage.icewhale.io/api/static/docs/1719988685607_3.png)


カチッと音がするまでSO-DIMMを挿入します。

![](https://manage.icewhale.io/api/static/docs/1719988701892_4.png)


すべてのカバーを元に戻します。

## ステップ2: 接続

**ZimaBladeをドライブに接続します。ここではHDDを例にします：**

正しく動作するためには、ドライブはZimaBladeからデータと電源を必要とします。ZimaBladeパッケージに含まれるSATAケーブルを使用して、データと電源をZimaBladeから得ます。

![](https://manage.icewhale.io/api/static/docs/1719988728728_5.png)


**RJ45を使用してZimaBladeを接続します：**
![](https://manage.icewhale.io/api/static/docs/1719988748568_6.png)


**USBキーボードと画面（MiniDP）をZimaBladeに接続します：**
![](https://manage.icewhale.io/api/static/docs/1719988770426_7.png)


**電源アダプターをZimaBladeに接続します：**
![](https://manage.icewhale.io/api/static/docs/1719988789048_8.png)


ZimaBladeパッケージに含まれるType-Cケーブルを使用してください。

> ZimaBladeのType-CインターフェースはUSB PD 3.1をサポートしています。
> 
> HDDを長期間使用する場合は、外部電源の使用を検討してください。

## ステップ3: ブートとIP取得

電源を入れると、デバイスが自動的に起動します。そして... ボン！あなたは入っています！

![](https://manage.icewhale.io/api/static/docs/1724748313259_image.png)


デフォルトのアカウント `casaos` とパスワード `casaos` を入力してログインするよう促されます。


  

**さあ、ZimaBladeのIPアドレスを取得します：**

`ip addr` と入力して `Enter` を押すとIPアドレスが表示されます。例えば `192.x.x.x` または `10.0.x.x` のようになります。（LAN構成によります。）

![](https://manage.icewhale.io/api/static/docs/1724748361255_image.png)


物理ネットワークインターフェース `enp2s0` のIPアドレス（例: `10.0.179.111`）がメモされ、必要に応じて今後のログイン試行に使用されます。
> IPアドレス `127.x.x.x` （ループバック）は内部通信用、`10.x.x.x` （物理インターフェース）はネットワーク接続用、`172.x.x.x` （Docker）はコンテナネットワーキング用です。

## ステップ4: あなたのNASがここにあります！

電話やデスクトップコンピュータでブラウザを開き、先ほどメモしたIPアドレスにアクセスしてください。

指示に従ってWeb UIアカウントを作成します。
![](https://manage.icewhale.io/api/static/docs/1719988936857_Arc_MyleHxojSb.png)

アカウントを作成した後、CasaOS Web UIにログインします。
<br>

**さあ、ディスクを設定します。** CasaOSは接続されたディスクを検出します。ストレージ設定ボタンをクリックし、「ストレージ作成」ボタンをクリックします。
![](https://manage.icewhale.io/api/static/docs/1720065540546_image.png)
![](https://manage.icewhale.io/api/static/docs/1719988986725_Arc_Xe3iywhbjm.png)

必要に応じたオプションを選択します。あなたのドライブは今、ストレージとして使用できる準備が整いました。
![](https://manage.icewhale.io/api/static/docs/1719989035890_Arc_0Jjnl9skw3.png)

**「ファイル」アプリを使用してファイルをアップロードおよびアクセスします！**
![](https://manage.icewhale.io/api/static/docs/1719989056324_Arc_gdroRMM9ST.png)

**あなたのZimaBlade NASが設定されました！楽しんでください！**

  

使用中に問題が発生した場合は、いつでもお気軽にお問い合わせください。また、NASやZimaBladeに関する議論のために、私たちの[コミュニティ](https://community.zimaspace.com/)や[Discord](https://discord.gg/uuNfKzG5)にも参加してください。あなたのフィードバックをお待ちしております！