---
title: ZimaOSをインストールする方法
description: "ZimaOSのインストール手順を説明します。イメージのダウンロード、USBへの書き込み、インストール、ZimaClientまたはIPアドレスでのログインを含みます。"
type: Docs
author: admin
tip: このFront Matterブロックは削除しないでください。descriptionフィールドは記事の概要に使用され、空の場合は最初の段落が代わりに使用されます。
---

## このガイドで分かること
ZimaOSは一般的なx86-64機器向けに設計された軽量NAS OSです。
このガイドでは、ZimaOSをすばやく正しく **ダウンロード、書き込み、インストール** する手順を説明します。

---

## 必要なもの
- **Zimaデバイス** または25 GB以上のストレージを搭載する一般的なx86-64機器。
- 4 GB以上を推奨するUSBメモリー。

---

## 準備
ZimaOSを起動するには、BIOSでUEFI起動モードを有効にし、Secure Bootを無効にします。

### 手順1：ZimaOSインストールイメージをダウンロードする
公式GitHubリリースページから最新のZimaOS `.img` ファイルをダウンロードします。
👉 [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases)


### 手順2：起動可能なUSBメモリーを作成する
ZimaOSイメージをUSBメモリーへ書き込みます。最も簡単なツールは **Balena Etcher** です。

1. [Balena Etcher](https://etcher.balena.io/#download-etcher)をダウンロードしてインストールします。
2. Etcherを開き、ZimaOSの`.img`ファイルを選択します。
3. USBメモリーを挿入し、書き込み先として選択します。
4. **Flash** をクリックして書き込みを開始します。

![ZimaOSインストールイメージを開いたBalena Etcher](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)
![ZimaOSイメージの書き込み先USBデバイスを選択するBalena Etcher](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)
![USBデバイスへのZimaOSイメージ書き込み完了画面](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)



### 手順3：USBからデバイスを起動する
1. 起動可能なUSBメモリーをデバイスに挿入します。
2. BIOSまたはブートメニューを開き、**Boot from USB** を選択します。

![ZimaOSのインストールまたは再起動を選択するインストーラーのメインメニュー](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)

![ZimaOSのインストール先デバイスまたは領域を選択するクイックインストールメニュー](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)

![インストール前の確認でYesを選択する画面](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)

![インストールを中止できる最後の確認でYesを選択する画面](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)

![インストールの進行状況を表示する画面](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)


### 手順4：ZimaOSのインストールを完了する
画面の指示に従ってZimaOSをインストールします。
指示が表示されたらUSBメモリーを取り外し、デバイスを再起動します。
これで **ZimaOS** が自動的に起動します。
![USBデバイスを取り外して再起動する画面](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)



### 手順5：ZimaOSへアクセスする
再起動後は、**ZimaClient** を使用するのが最も簡単です。ネットワーク上のデバイスを自動検出し、ZimaOSへすばやく接続できます。

👉 ZimaClientをダウンロードし、次のガイドを参照してください：[ZimaOSクイックスタートガイド](./get-started)

![ZimaOS Web UIのようこそ画面](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)


ネットワーク上でIPアドレスを確認し、ブラウザーへ入力して **ZimaOS Web UI** を開くこともできます。
![IPアドレスとOSバージョンを表示するZimaOS情報画面](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)


🎉 **インストール完了です。** ZimaOSのNAS機能を使用できます。

---

## ZimaOSで次に行うこと

スマートサーバーにZimaOSをインストールしたら、個人用クラウドや自宅サーバーを構築できます。
次のような使い方があります。

- 🔧 データを保護するため **RAIDまたはストレージプールを設定** します。
- 📂 デバイス間の **ファイル共有（SMB/FTP）を有効化** します。
- 🎞️ **メディアサーバー（Plex、Jellyfin）を実行** して映画や音楽をストリーミングします。
- 🐳 ZimaOS App Storeから **Dockerアプリを導入** します。
- ☁️ 重要なデータを **外付けドライブまたはクラウドへバックアップ** します。

👉 さらに機能を利用するには：
- **[使い始める](./get-started)** で初回起動の設定を続ける
- **[リモートアクセス](./remote-access)** を設定してどこからでも接続する
- **[コミュニティフォーラム](https://community.zimaspace.com/)** に参加する

💡 今後の更新に備えて、このガイドをブックマークしてください。ZimaOSの新しいリリースには、性能改善や新しいアプリが含まれることがあります。
