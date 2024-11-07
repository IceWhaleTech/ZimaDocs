---
title: 7番ベイの利用
description:
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください、descriptionは記事の説明で、記入しない場合は内容の最初の段落が切り取られます
---
# 7番ベイの取り付けと取り外し
## 準備:
ZimaCubeの電源がオフで、プラグが抜かれていることを確認します。
インストールするハードドライブを準備します。
## 具体的手順:
ステップ1: ケースの前面パネルを取り外します。
![](https://manage.icewhale.io/api/static/docs/1722418820491_image.png)
ステップ2: 6番ベイを取り外します。
![](https://manage.icewhale.io/api/static/docs/1722418858886_image.png)
ステップ3: 時計回りに回して、第7ドライブを固定しているネジを外します。
![](https://manage.icewhale.io/api/static/docs/1722418913222_image.png)
ステップ4: 7番ベイを取り外します。
![](https://manage.icewhale.io/api/static/docs/1722418964759_image.png)
![](https://manage.icewhale.io/api/static/docs/1722418974044_image.png)
ステップ5: 自由にSSDを7番ベイに取り付けます。
![](https://manage.icewhale.io/api/static/docs/1722419028169_image.png)
ステップ6: 7番ベイを正しい位置に押し込み、ネジを時計回りに締めます。
![](https://manage.icewhale.io/api/static/docs/1722419069919_image.png)

# ZimaCube 7番点灯ファームウェアのアップグレード方法
*OTA（Over-The-Air）アップデート中のesp32の故障を防ぐために、ここで有線更新方法を紹介します。*
## 3ステップ解決策
1. WiFiに接続
コンピュータでWiFiに接続します
名前: "ZimaCube"
パスワード: "homecloud"
2. URLを入力
ブラウザに入力: 172.16.1.1
3. ファームウェアをアップロード
[https://drive.google.com/file/d/1h8LKvZ47gdMmpJzu6CFK3awjGFX5ayRE/view?usp=drive_link](https://drive.google.com/file/d/1h8LKvZ47gdMmpJzu6CFK3awjGFX5ayRE/view?usp=drive_link)

## バックアッププラン

**更新前の準備**
- コンピュータ
- データケーブルタイプC
- ディスク7
- 圧縮パッケージをダウンロードして解凍
[https://drive.google.com/file/d/15nPalLy-2ieNQ84dT1gchBzLqtEfM--8/view?usp=drive_link](https://drive.google.com/file/d/15nPalLy-2ieNQ84dT1gchBzLqtEfM--8/view?usp=drive_link)

**更新を開始**
3.1 データケーブルタイプCを使用して、コンピュータを7番ディスクのチップ上のタイプCに接続します
3.2 コンピュータでリンク[espressif.github.io](espressif.github.io)を開きます
3.3 '接続'をクリック
![](https://manage.icewhale.io/api/static/docs/1730360675989_image.png)

3.4 接続するシリアルポートを選択
![](https://manage.icewhale.io/api/static/docs/1730360689217_image.png)

3.5 'DIY'をクリック
![](https://manage.icewhale.io/api/static/docs/1730360715808_image.png)

3.6 'ファイルを追加'を2回クリック
![](https://manage.icewhale.io/api/static/docs/1730360989529_image.png)

3.7 バーニングアドレスを変更し、ファイルを選択
*具体的なバーニングアドレスは図に示されており、解凍後に3つのファイルを順に選択します*
![](https://manage.icewhale.io/api/static/docs/1730360997291_image.png)

3.8 'プログラム'をクリックしてバーニングを開始
![](https://manage.icewhale.io/api/static/docs/1730361017895_image.png)

3.9 バーニングが完了したら、RSTリセットボタンを押し、ファームウェアが正常に更新されたことを確認します。