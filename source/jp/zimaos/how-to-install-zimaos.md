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

仮想マシンにインストールする場合は、[Proxmox VEへのZimaOSインストール手順](./install-zimaos-on-proxmox-ve)を参照してください。

---

## 必要なもの
- **Zimaデバイス** または25 GB以上のストレージを搭載する一般的なx86-64機器。
- 4 GB以上を推奨するUSBメモリー。
- [ZimaOS USB Creator](https://www.zimaspace.com/zimaos/download) または [balenaEtcher](https://etcher.balena.io/)。

---

## 準備
ZimaOSを起動するには、BIOSでUEFI起動モードを有効にし、Secure Bootを無効にします。

### 手順1：ZimaOSインストールイメージを準備する
ZimaOS USB Creatorは、アプリで選択したバージョンをダウンロードします。balenaEtcherを使用する場合は、[ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases)から末尾が `_installer.img` のファイルをダウンロードしてください。`.raucb` は更新パッケージであり、USBインストール用のイメージではありません。

### 手順2：起動可能なZimaOS USBメモリーを作成する
次のいずれかの方法で作成し、手順3に進んでください。

> 画像内のバージョン番号、ファイル名、ドライブ名、画面の詳細は一例です。

> イメージを書き込むと、選択したUSBメモリーの全データが消去されます。重要なファイルをバックアップし、ドライブ名と容量を確認してから進んでください。

#### 方法A：ZimaOS USB Creator

1. USBメモリーを挿入し、**ZimaOS USB Creator** を開きます。**Choose operating system** でインストールするZimaOSのバージョンを選び、**Next** をクリックします。

![USB CreatorでZimaOSのバージョンを選択する](/images/guides/usb-creator-select-os.webp)

2. USBメモリーを選択します。名前と容量を確認し、**Exclude system drives** を選択したまま **Next** をクリックします。

![USB CreatorでUSBメモリーを選択する](/images/guides/usb-creator-select-storage.webp)

3. 概要画面でOSイメージとストレージデバイスを確認し、**Write** をクリックします。

![イメージと書き込み先のUSBメモリーを確認する](/images/guides/usb-creator-review-write.webp)

4. **Erase this device?** ダイアログで対象ドライブを確認し、**Erase and write** をクリックします。

![USBメモリーの消去と書き込みを確認する](/images/guides/usb-creator-erase-warning.webp)

5. 管理者認証を求められた場合は認証します。USB Creatorがイメージをダウンロードして書き込む間、USBメモリーを接続したまま待ちます。

![USB Creatorがイメージをダウンロードして書き込む画面](/images/guides/usb-creator-writing-progress.webp)

6. **Write complete!** が表示されると、USBメモリーは自動的に取り出されています。**Finish** をクリックし、安全に取り外します。

![USB Creatorの書き込み完了画面](/images/guides/usb-creator-write-complete.webp)

#### 方法B：balenaEtcher

1. [balenaEtcher](https://etcher.balena.io/)をダウンロードしてインストールします。

2. Etcherを開き、**Flash from file** をクリックして、手順1でダウンロードした `_installer.img` ファイルを選択します。

![balenaEtcherでZimaOSのインストールイメージを選択する](/images/guides/zimaos-etcher-select-image.webp)

3. **Select target** をクリックしてUSBメモリーを選び、名前と容量を確認します。

![balenaEtcherで書き込み先USBメモリーを選択する](/images/guides/zimaos-etcher-select-target.webp)

4. **Flash!** をクリックし、必要に応じてアクセスを許可します。書き込みと検証が完了するまで待ちます。

5. Etcherに完了と表示されたら、USBメモリーを安全に取り外し、次の手順3に進みます。

![balenaEtcherによるZimaOSイメージの書き込み完了](/images/guides/zimaos-etcher-complete.webp)

### 手順3：USBからデバイスを起動する
1. 起動可能なUSBメモリーをデバイスに挿入します。BIOSまたはブートメニューを開き、USBメモリーから起動します。
2. ZimaOS Installerのようこそ画面で **Start** をクリックします。

![Startボタンが表示されたZimaOS Installerのようこそ画面](/images/guides/zimaos-installer-welcome.webp)

3. インストーラーの言語を選び、**Continue** をクリックします。

![ZimaOS Installerの言語選択画面](/images/guides/zimaos-installer-choose-language.webp)

4. ZimaOSのインストール先ディスクを選びます。名前、パス、容量をよく確認してください。**選択したディスクの全データが消去されます**。確認後、**Continue** をクリックします。

![ZimaOSのインストール先ディスクを選択する画面](/images/guides/zimaos-installer-choose-disk.webp)

5. 対象ディスクとインストール前の確認結果を確認し、**Continue** をクリックします。

![対象ディスクとインストール前の確認結果](/images/guides/zimaos-installer-ready.webp)

6. 消去の警告画面でディスクをもう一度確認し、**Erase and install** をクリックします。

![選択したディスクの消去を確認する画面](/images/guides/zimaos-installer-erase-confirmation.webp)

7. インストーラーがZimaOSを書き込んでいる間は、デバイスの電源を切らないでください。

![ZimaOSのインストール進行状況](/images/guides/zimaos-installer-progress.webp)

### 手順4：ZimaOSのインストールを完了する
インストール完了画面が表示されたら、USBメモリーを取り外してから **Restart** をクリックします。デバイスはインストール先ディスクから起動し、ZimaOSが立ち上がります。

![Restartボタンが表示されたZimaOSのインストール完了画面](/images/guides/zimaos-installer-complete.webp)

### 手順5：ZimaOSへアクセスする
再起動後、デバイスの画面にシステム情報とZimaOSへのアクセス方法が表示されます。画像内のシリアル番号とIPアドレスは隠しています。実際にはご自身のデバイスに表示されたアドレスを使用してください。

![シリアル番号とIPアドレスを隠した、システム情報とアクセス方法を表示するZimaOSの画面](/images/guides/zimaos-console-access.webp)

接続には、ネットワーク上のデバイスを検出できる **ZimaClient** が便利です。ZimaClientをダウンロードし、[ZimaOSクイックスタートガイド](./get-started)を参照してください。

または、デバイスに表示されたIPアドレスをブラウザーに入力して **ZimaOS Web UI** を開くこともできます。

次の画像は、ZimaCubeで表示される初期画面の例です。言語を選び、プライバシーポリシーを確認してから進んでください。ほかのデバイスでは画面が異なる場合があります。

![言語とプライバシーポリシーの項目があるZimaCubeの初期設定画面](/images/guides/zimaos-zimacube-welcome.webp)

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
