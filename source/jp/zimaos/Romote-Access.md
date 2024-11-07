---
title: リモートアクセス
description: 
type: "Docs"
tip: 上部バーの固定形式は削除しないでください、descriptionは記事の説明です。空白の場合は内容の最初の段落のテキストが切り取られます
---
# 外出先でのデータ
旅行中に自宅のセキュリティカメラをチェックしたり、自宅サーバーからファイルにアクセスできたらいいなと思ったことはありませんか？データがアクセスできなくて困っていたかもしれません。コミュニティメンバーのGrandilさんはノルウェーからZimaOSに成功裏にアクセスし、アイルランドのサーバーに接続し、モバイルローミング中にもかかわらずシームレスな接続を体験しました。彼のレビューは[こちらを参照](https://www.youtube.com/watch?v=ZDmO2h0tE0c)。

私たちの速いペースの生活において、効率的なデータアクセスは個人用でもビジネス用でも重要です。リモートデータアクセスは生産性を向上させ、安全性を確保し、地理的障壁を乗り越えます。

## Zimaクライアントのダウンロード
ZimaClientを使用してZimaCubeにまだ接続していない場合は、
ホストデバイスでhttps://find.zimaspace.com/にアクセスしてクライアントをダウンロードしてください。
![](https://manage.icewhale.io/api/static/docs/1728381740811_image.png)
## デバイスに成功裏に接続する
1. ZimaCubeデバイスが電源が入っており、ネットワークに接続されていることを確認してください。
2. Zimaクライアントを開き、「スキャンしてZimaに接続」を選択します。
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728439070524_image.png" alt="画像1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728439097159_image.png" alt="画像2" style="height: 200px; object-fit: cover;" />
</div>

3. リストからZimaCubeデバイスのIPを選択し、「接続」をクリックします。プロンプトに従ってユーザー名とパスワードを作成します。
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728381985338_image.png" alt="画像1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728381994632_image.png" alt="画像2" style="height: 200px; object-fit: cover;" />
</div>

**デバイスに成功裏に接続しました**。ここでZImaCubeが見える場合（「接続する...」経由）、これは「設定」が構成されていることを意味します。あなたは「リモートアクセス」を構成しました。
![](https://manage.icewhale.io/api/static/docs/1728459310497_image.png)

*特に、ZimaOS設定でリモートアクセスをオフにしている場合、接続できません。*
![](https://manage.icewhale.io/api/static/docs/1728459277560_image.png)

## リモートアクセスを楽しむ
最初の接続が成功すると、デバイスは接続情報を自動的に保存します。どこにいても、Zimaクライアントを開くだけで迅速にリモート接続を確立できます。
自宅LANを離れると、ZimaCubeのリモートアクセスステータスは次のとおりです。
![](https://manage.icewhale.io/api/static/docs/1728382289343_image.png)

## 第二のホストデバイスへのアクセス：
オフィスに**二台目**のコンピュータがある場合、しかしZimaCubeが手元にない場合、Connect IDを使用できます。詳しくは[こちらを参照](https://www.zimaspace.com/docs/zimaos/Features.html#Second-host-device-access)。

## 参考のために
ノートパソコンとZimaCube間の接続は、ZimaClientアプリケーションとZimaOSによって自動的に確立され、P2P通信を利用して接続が行われます。二者間のデータ転送は暗号化されており、すべてのデータ転送はピアツーピアです。

また、Zima Clientを介して初めてZimaOSに接続するとき、リモートアクセスチャンネルがすでに構成されています。これは、このデバイスを使用して、いつでもどこでもZimaOSにアクセスできることを意味します。