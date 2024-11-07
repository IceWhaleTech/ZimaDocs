---
title: ZimaOSでRAID6を作成する方法
description: 
type: "Docs"
tip: トップバーの固定形式は削除しないでください。descriptionは記事の説明であり、入力しない場合は内容の最初の段落が切り取られます。
---
## はじめに
現在、ZimaOSはRAID0/1/5をサポートしていますが、多くのユーザーが冗長性を向上させるためにRAID6を必要としていることを理解しています。それに応じて、コマンドラインを使用してRAID6を作成する手順を準備しました。以下の指示に従ってください。
将来的により多くのRAIDレベルのサポートを加速できることを楽しみにしています！

{% note warn Tips %}
システムが再起動されると、RAID6アレイを再構成する必要があります。
{% endnote %}


## 前提条件

1. 少なくとも4つのハードディスクが必要です。
2. [こちら](https://www.zimaspace.com/docs/zimaos/How-to-Open-SSH-in-ZimaOS.html)をクリックしてコマンドラインページにアクセスする方法を学ぶ必要があります。
3. チュートリアルのコマンドをスーパーユーザー特権（root権限）で実行する必要があります。`sudo`を使用して特権を昇格させることができます。例えば、`sudo mkfs.ext4 /dev/md0`
4. コマンドlsblkを使用して利用可能なハードディスクを確認してください。
   ![](https://manage.icewhale.io/api/static/docs/1729218009483_98dae94c-9b29-4042-a508-537aa6d1d554.jpeg)

5. MOUNTPOINTSにマウントポイントがある場合は、以下のコマンドで解除する必要があります。
   ![](https://manage.icewhale.io/api/static/docs/1729145392591_image.png)
   ```command
   umount /dev/sda
   ```


## RAID6を作成する手順

1. 以下のコマンドを使用して、少なくとも4つのドライブでRAID6アレイを作成します：
   ```
   mdadm -Cv /dev/md0 --level=6 --name=foldername --raid-devices=4 /dev/sda /dev/sdb /dev/sdc /dev/sdd --run --homehost=zimaos
   ```
   `/dev/md0`は新しいRAIDデバイスの名前です。

   `--level=6`はRAID6アレイを作成していることを示しています。

   `--name=foldername`はRAIDアレイの名前を指定します。

   `--raid-devices=4`はシステムに4つのハードディスクを使用するよう指示します。

   `/dev/sda /dev/sdb /dev/sdc /dev/sdd`はアレイに参加しているドライブです。

   ![](https://manage.icewhale.io/api/static/docs/1729219387443_img_v3_02fp_8fce2dd8-56af-4706-b5de-96cea3b8162g.jpg)


2. 以下のコマンドを使用してRAIDをフォーマットします：
   ```
   mkfs.ext4 /dev/md0
   ```
   ![](https://manage.icewhale.io/api/static/docs/1729219416289_img_v3_02fp_7340f5ef-7892-4696-8707-cdda424461cg.jpg)


3. RAIDをマウントするためのディレクトリを作成します：

   ```
   cd /media
   mkdir foldername
   ```

4. 以下のコマンドを使用してRAIDをマウントします：

   ```
   mount -t ext4 /dev/md0 /media/foldername
   ```
5. 作成後、Webベースのファイルにパスを入力して表示します。

   ![](https://manage.icewhale.io/api/static/docs/1729220708308_img_v3_02fp_245f1382-835d-4827-8852-f6ab8b166d8g.jpg)

   ![](https://manage.icewhale.io/api/static/docs/1729220715773_img_v3_02fp_1b36a2a6-e9a5-45d0-acc2-9b3345b3224g.jpg)

   
## 注意：
システムが再起動されると、RAID6アレイを再構成する必要があります：
```
mdadm -Av /dev/md0 /dev/sda /dev/sdb /dev/sdc /dev/sdd
mount /dev/md0 /media/foldername
```