---
title: iSCSI 使用チュートリアル
description: 
type: "Docs"
tip: 上部バーの固定フォーマットを削除しないでください。description は記事の説明であり、記入しない場合は内容の最初の段落の文字が切り取られます。
---

iSCSI（Internet Small Computer System Interface）は、ネットワーク上でSCSIコマンドを送信するためのプロトコルであり、ストレージデバイスがネットワーク経由で通信できるようにし、直接接続されたストレージと類似の機能を提供します。ストレージリソースを仮想化し、中央集権的な管理、ネットワーク共有、およびリモートアクセスを実現し、データセンター、仮想化環境、バックアップおよび復元などのシナリオに適しています。このチュートリアルでは、ZimaOSでiSCSIを構成および使用する方法を学び、ストレージ管理の効率を向上させ、ネットワークストレージアーキテクチャを簡素化し、柔軟なデータアクセス方法を実現します。

## 前提条件
1. 使用するハードディスクは使用中でないこと
2. クライアントのIQNを確認すること

## 操作手順
### サーバー
*ZimaOSが1.2.5以上にアップグレードされていることを確認してください。*

1. コマンド `sudo -i` を使用してスーパーユーザーモードに入り、targetcliを開始します。
```
targetcli
```

![](https://manage.icewhale.io/api/static/docs/1730362966225_image.png)

2. LUNを作成します。ここでは `/dev/sde` をストレージバックエンドとして使用します（ここではsdeを使用しています。`lsblk`を使用してデバイスの状態を確認し、`sda`または`sdb`に変更できます）。
```
cd backstores/block
create myblockdev /dev/sde
```

![](https://manage.icewhale.io/api/static/docs/1730362990127_image.png)

3. iSCSIターゲットを作成します（`iqn.2024-10.com.zima:target1`は一例です）。
```
cd /iscsi
create iqn.2024-10.com.zima:target1
```

![](https://manage.icewhale.io/api/static/docs/1730363013870_image.png)

4. ターゲットにLUNを追加します。
```
cd iqn.2024-10.com.zima:target1/tpg1/luns
create /backstores/block/myblockdev
```

![](https://manage.icewhale.io/api/static/docs/1730363050568_image.png)

5. ACL（アクセス制御リスト）を設定して接続を許可します。ここでのIQNはクライアントと一致する必要があります（iSCSI Initiatorを開くと、構成タブにあります）。
```
cd ../acls
create iqn.1993-08.org.debian:01:bb1e6772dfb6
```

![](https://manage.icewhale.io/api/static/docs/1730363186571_image.png)

### クライアント
**Windows**
1. iSCSI Initiatorを開き、DiscoveryタブでDiscover Portalをクリックします。
![](https://manage.icewhale.io/api/static/docs/1730363629547_image.png)

2. IPアドレスを設定し、OKをクリックします。
![](https://manage.icewhale.io/api/static/docs/1730363646462_image.png)

3. Targetsタブで接続をクリックします。
![](https://manage.icewhale.io/api/static/docs/1730363656977_image.png)

4. コンピュータ管理を開き、ストレージ > ディスク管理をクリックすると、新しく接続されたiSCSIボリュームが表示されます。
![](https://manage.icewhale.io/api/static/docs/1730363667742_image.png)

**Linux**
1. iSCSIターゲットを検出します。
```
iscsiadm -m discovery -t sendtargets -p <IP_ADDRESS>
```

`<IP_ADDRESS>`をサーバーのIPアドレスに置き換えます。
![](https://manage.icewhale.io/api/static/docs/1730363793486_image.png)

2. iSCSIターゲットにログインします。
```
iscsiadm -m node --login
```
![](https://manage.icewhale.io/api/static/docs/1730363899468_image.png)