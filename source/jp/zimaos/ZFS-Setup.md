---
title: ZFS on ZimaCube
description:
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください、descriptionは記事の説明です。記入しない場合、最初の段落の内容が切り取られます。
---
# ストレージプールの確立
ZimaCubeに外部ドライブを接続します。lsblkツールを使用してすべてのドライブをリストします。接続したばかりのドライブを変数を制御して見つけることができます。
![](https://manage.icewhale.io/api/static/docs/1727160959998_image.png)
ここでは、私のUSBドライブがsdaとして表示されています。
ストレージプールを作成するには、以下のコマンドを使用します。
```language
# まず、ディスク上のすべてのデータを削除する必要があるかもしれません：
dd if=/dev/zero of=/dev/sda bs=1M count=10

# ZimaOSでは、ほとんどの状況でルートディレクトリが読み取り専用なので、
# 手動で/midiaの下にマウント用のディレクトリを作成します。
mkdir /media/pool1

# プールを作成します：
zpool create -m /media/pool1 pool1 /dev/sda -f

# また、後で削除するためにこれらも必要になるかもしれません：
zpool export pool1
zpool destroy pool1
```
![](https://manage.icewhale.io/api/static/docs/1727161209903_image.png)
## ストレージプール上にZFSを確立
```language
# 作成したストレージプール上にZFSを作成します：
zfs create pool1/zfs

# 以下のコマンドを使用してzfsリストを表示します
zfs list
```
![](https://manage.icewhale.io/api/static/docs/1727161245558_image.png)
私は、ZimaOSでZFSを簡単に使用できるように、/mediaディレクトリにストレージプールとzfsを作成することにしました。