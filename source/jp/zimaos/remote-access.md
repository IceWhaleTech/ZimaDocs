---
title: リモートアクセス
seo_title: "ZimaOSのリモートアクセス：どこからでも自宅サーバーに接続"
description: "どこからでもZimaOSのデータにアクセスできます。CloudflareトンネルとZimaClientによるリモートアクセスを設定し、外出先から安全にファイルを管理します。"
type: Docs
tip: このFront Matterブロックは削除しないでください。descriptionフィールドは記事の概要に使用され、空の場合は最初の段落が代わりに使用されます。
---
## 外出先からデータを利用する
旅行中に自宅の防犯カメラを確認したり、自宅サーバーのファイルへアクセスしたりしたくても、データに接続できず困ったことはありませんか。コミュニティメンバーのGrandilは、ノルウェーからアイルランドのサーバーへ接続してZimaOSを利用し、モバイルローミング中でも快適に接続できました。レビューは[こちら](https://www.youtube.com/watch?v=ZDmO2h0tE0c)から確認できます。

変化の速い現代では、個人利用でも業務利用でも、効率よくデータへアクセスできることが重要です。リモートアクセスは生産性を高め、安全性を確保し、場所の制約をなくします。

### ZimaClientをダウンロードする
まだZimaClientでZimaCubeに接続していない場合は、メインデバイスから https://www.zimaspace.com/zimaos/download にアクセスしてクライアントをダウンロードしてください。
![](https://manage.icewhale.io/api/static/docs/1728381740811_image.png)
### デバイスへ接続する
1. ZimaCubeの電源が入っており、ネットワークに接続されていることを確認します。
2. ZimaClientを開き、Scan and Connect Zimaを選択します。
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728439070524_image.png" alt="画像1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728439097159_image.png" alt="画像2" style="height: 200px; object-fit: cover;" />
</div>

3. 一覧からZimaCubeのIPアドレスを選択し、Connectをクリックします。画面の案内に従ってユーザー名とパスワードを作成します。
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728381985338_image.png" alt="画像1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728381994632_image.png" alt="画像2" style="height: 200px; object-fit: cover;" />
</div>

**デバイスへの接続に成功すると**、ここにZimaCubeとConnect via...などの表示が現れ、リモートアクセスが設定済みであることを確認できます。
![](https://manage.icewhale.io/api/static/docs/1728459310497_image.png)

*ZimaOSの設定でリモートアクセスを無効にしている場合は接続できません。*
![](https://manage.icewhale.io/api/static/docs/1728459277560_image.png)

### リモートアクセスを利用する
最初の接続に成功すると、接続情報がデバイスに自動保存されます。どこにいてもZimaClientを開くだけで、すぐにリモート接続を確立できます。
自宅のLANから離れたとき、ZimaCubeのリモートアクセス状態は次のように表示されます。
![](https://manage.icewhale.io/api/static/docs/1728382289343_image.png)

### 2台目のメインデバイスからアクセスする
オフィスに**2台目**のコンピューターがあり、ZimaCubeが手元にない場合でも、Connect IDを使用できます。詳しくは[こちら](./features#Second-host-device-access)を参照してください。


### 参考情報
ノートパソコンとZimaCubeの接続は、ZimaClientアプリとZimaOSによって自動的に確立されます。P2P通信を使用し、両者のデータ転送は暗号化されるため、すべてのデータがデバイス間で直接転送されます。

また、ZimaClientを使用してZimaOSへ初めて正常に接続した時点で、リモートアクセス用の通信経路も設定されます。それ以降は、このデバイスからいつでも、どこからでもZimaOSへアクセスできます。
