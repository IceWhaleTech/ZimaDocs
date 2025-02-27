---
title: ZimaOSでのiSCSIの開始
description: 
type: Docs
author: admin
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明で、記入しない場合は最初の段落が自動的に選ばれます。
---
ZimaOSは、NFS、SAMBA、iSCSIなど、さまざまなネットワーク共有プロトコルを提供し、異なるストレージおよびファイル共有のニーズに対応しています。

**[NFS (Network File System)](https://www.zimaspace.com/docs/zimaos/NFS-on-ZimaOS)**: Unix/Linuxシステムでのファイル共有に最適で、高い同時アクセスとクロスプラットフォームファイル共有をサポートします。

**SAMBA**: 優れた互換性を提供し、高度な権限管理と暗号化された転送をサポートします。クロスプラットフォーム環境に最適な選択肢です。

**iSCSI (Internet Small Computer System Interface)**: IPネットワークを介してリモートストレージデバイスをローカルディスクにマッピングし、仮想化環境やデータベースストレージなど、高性能なブロックストレージシナリオに適しています。

これらのネットワーク共有プロトコルにより、ユーザーは自分のニーズに最適なソリューションを選択できます。

このチュートリアルでは、ZimaOSでiSCSIを設定し使用する方法について説明し、効率的なブロックストレージ共有を迅速に実現する手助けをします。始める前に、いくつかの概念を説明します。

## ターゲット、targetcli、iSCSIイニシエーター
**ターゲット**はサーバー側で設定するものです。ここでのサーバーは**ZimaOS**です。そして、**targetcli**はその設定を行うためのツールです。

クライアントマシンでは、**iSCSIイニシエーター**を使用して、サーバー上の**ターゲット**に接続する必要があります。このチュートリアルでは、Windowsを例に説明します。

## ZimaOS側
### iSCSIターゲットの設定
1. まず、ZimaOSのウェブターミナルにアクセスし、root権限を取得します。
2. ZimaOSダッシュボード -> 設定 -> 一般 -> 開発者モード -> Webベースのターミナル
3. ログイン後、rootに切り替えます
```language
sudo -i
```
targetcliを起動
```language
targetcli
```
これで、targetcliに入ります
```language
/>
```
**ターゲットを作成する:**
iscsiディレクトリに移動します
```language
/> cd iscsi
```
iSCSIターゲットを作成
```language
/iscsi> create
```
↓以下のような出力が表示されます：
```language
Created target iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
将来的にターゲットを削除する必要がある場合、この操作でターゲット全体、ACL、LUN、ポータルが削除されます
```language
/iscsi> delete iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df
```
ターゲットを作成する際に名前を指定することもできます：
```language
/iscsi> create iqn.2025-03.com.icewhale:888
```
↓以下のような出力が表示されます：
```language
Created target iqn.2025-03.com.icewhale:888.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
### バックストアと作成
iSCSIバックストアは、ターゲット用のストレージとして作成されます。まず、バックストアのディレクトリに移動します。
バックストアに移動
```language
/> cd /backstores
```
バックストアには4種類があります。
**ファイルを使ってバックストアを作成:**
```language
/backstores> cd fileio 
/backstores/fileio> create file1 /media/myRAID5/disk1.img 200M write_back=false
Created fileio file1 with size 209715200
```
↑これがシステムの出力です
**ブロックストレージオブジェクトを使ってバックストアを作成:**
```language
/backstores> cd block
/backstores/block> create name=block_backend dev=/dev/sdf

Created block storage object block_backend using /dev/sdf.
```
↑これが出力です
lsblkを使ってブロックデバイスを識別できます。
**他のタイプでバックストアを作成:**
pscsiストレージオブジェクトを使ってバックストアを作成
```language
/backstores> cd pscsi
/backstores> create name=pscsi_backend dev=/dev/sr0
```
またはRAMを使ってバックストアを作成
```language
/backstores> cd ramdisk
/backstores> create name=rd_backend size=1GB
```
### LUNでターゲットとバックストアをリンク
特定のiqnのLUNに移動
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/luns
```
バックストアをターゲットにリンク
```language
/iscsi/iqn.20...888/tpg1/luns> create /backstores/fileio/file1

Created LUN 0
```
↑これが出力です
### アクセス制御リスト
イニシエーターへのアクセスを許可するために、ACLを作成する必要があります。
iqnのaclディレクトリに移動
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/acls
```
このイニシエーター_iqn_nameをアクセス可能にするには、クライアントマシンでイニシエーター_iqn_nameを確認または定義する必要があります
```language
/iscsi/iqn.20...888/tpg1/acls> create iqn.1991-05.com.microsoft:desktop-44sqg6u
```
↓これが出力です
```language
Created Node ACL for iqn.1991-05.com.microsoft:desktop-44sqg6u
Created mapped LUN 0.
```
## Windows側
Windowsでは、iSCSIターゲットへの接続は簡単です。

検索バーに「iSCSI Initiator」と入力し、表示されるアイコンをクリックします。
![](https://manage.icewhale.io/api/static/docs/1740639156824_image.png)
プロンプトウィンドウに従って、この機能を最初に有効にする必要があるかもしれません。

iSCSIイニシエーターのプロパティパネルで、「構成」タブに`initiator_iqn_name`が表示されます。
![](https://manage.icewhale.io/api/static/docs/1740639189242_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639196492_image.png)
「ターゲット」タブで、サーバーのIPを入力し、「クイック接続...」をクリックします。
適切な名前を選択して「接続」をクリックします。
![](https://manage.icewhale.io/api/static/docs/1740639240986_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639249479_image.png)
検索バーに「ディスクの管理」と入力すると、「ディスクの作成とフォーマット」のアイコンが表示されます。それをクリックして進み、接続したストレージデバイスが表示されます。
![](https://manage.icewhale.io/api/static/docs/1740639298524_image.png)
ディスクを初期化して、ローカルディスクのように使用できます！
![](https://manage.icewhale.io/api/static/docs/1740639317499_image.png)
Windowsでのディスク初期化方法については、[こちらの記事](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/initialize-new-disks)を参照してください。 
これは`targetcli`の基本的な使い方です。詳細なチュートリアルについては、[Red Hatのドキュメント](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/managing_storage_devices/configuring-an-iscsi-target_managing-storage-devices#configuring-an-iscsi-target_managing-storage-devices)を参照してください。使用中に問題が発生した場合は、いつでもお知らせください。また、[コミュニティ](https://community.zimaspace.com/)や[Discord](https://discord.com/invite/uuNfKzG5)に参加して、NASやZimaOSについてもっと議論しましょう。皆さんからのフィードバックをお待ちしています！
