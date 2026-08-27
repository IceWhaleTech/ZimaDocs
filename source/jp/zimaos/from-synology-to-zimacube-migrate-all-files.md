---
title: Synologyからの手動転送
seo_title: "Synologyから手動転送：DSM共有をマウントしてZimaOSへファイルをコピー"
description: "Synology DSMからZimaOSへファイルを手動転送します。FilesでDSM共有をLAN Storageとしてマウントし、容量とアカウントを確認しながら順番にコピーします。"
type: Docs
author: Lauren Pan
tip: このFront Matterブロックは削除しないでください。descriptionフィールドは記事の概要に使用され、空の場合は最初の段落が代わりに使用されます。
---

このページでは、Synologyデバイスからファイルを移動する手順を詳しく説明します。推奨方法と段階的な移行方針を先に確認する場合は、**[ほかのNASから移行する](./synology-to-zimacube-migration "Synology NASからZimaOSへファイルを段階的に移動する")** を参照してください。

## FilesにDSM共有をマウントする

ここではSMBが共通の通信方式になります。Synology DSMとZimaOSはどちらもSMBに対応しているため、追加ツールなしでネットワーク経由の直接転送が可能です。

作業前に、移動するフォルダーがDSMで共有されていることを確認します。共有されていない場合はDSMで新しい共有ディレクトリを作成し、転送するデータを移動してください。

1. ZimaOSダッシュボードでFilesアプリを開きます。
2. 左側のStorageの横にあるプラス記号をクリックし、**LAN Storage** を選択します。

![Storageの横のプラス記号とLAN Storageを表示するZimaOS Files](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)

3. ポップアップにSynologyデバイスのIPアドレスを入力し、**Connect** をクリックします。共有アカウントにユーザー名とパスワードがある場合は、それらも入力します。

![Synology DSMのIPアドレスを入力するZimaOS Filesの接続画面](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)

接続すると、SynologyデバイスがStorageのネットワークデバイスとして表示され、右側に共有ディレクトリが並びます。

![接続したSynologyデバイスと共有ディレクトリを表示するZimaOS Files](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)

## ファイルをコピーする

1. 共有ディレクトリを開き、移動するファイルとフォルダーを選択します。すべて選択することもできます。
2. 右上の **Copy** をクリックします。

![ファイルを選択しCopyボタンを表示するZimaOS FilesのSynology共有ディレクトリ](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

3. ZimaOSストレージ内の保存先へ移動し、**Paste** をクリックします。

![右上にPasteボタンを表示するZimaOSストレージのディレクトリ](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)

{% note warn 容量の確認 %}
保存先の空き容量がコピーするデータの合計サイズより大きいことを確認し、転送が終わるまで待ちます。
{% endnote %}

## 移行後

新しいデバイスへ移したファイルは、**[3-2-1バックアップ計画](./how-to-use-3-2-1-backup-on-zimaos "NASのデータを3-2-1バックアップルールで保護する")** で保護してください。移行直後のライブラリは、二度と失いたくない大切なデータです。
