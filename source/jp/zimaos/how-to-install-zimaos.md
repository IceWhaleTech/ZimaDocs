---
title: ZimaOSのインストール方法  
description: このステップバイステップガイドでZimaOSをインストールする方法を学びましょう。イメージのダウンロード、USBへのフラッシュ、インストール手順、そしてZimaClientまたはIPアドレス経由でのログイン方法を含みます。  
type: Docs  
author: admin  
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明です。未入力の場合は本文冒頭の段落が自動的に抽出されます。  
---

## 学べること
ZimaOSは、ZimaCubeやその他のホームサーバーデバイス向けに設計された軽量NASオペレーティングシステムです。  
このガイドでは、**ZimaOSをダウンロード、フラッシュ、インストール**するための完全なステップバイステップ手順を提供し、素早く確実に導入できるようにします。

---

## 必要なもの
- **Zimaデバイス**、または25GB以上のストレージを持つ汎用x86-64デバイス。  
- フラッシュドライブ（推奨4GB以上）。  

---

## 準備
ZimaOSを起動するには、BIOSでUEFIブートモードを有効にし、Secure Bootを無効にする必要があります。  

### ステップ1: ZimaOSインストールイメージのダウンロード
まず、公式GitHubリリースページから最新のZimaOS `.img`ファイルをダウンロードしてください。  
👉 [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases)

### ステップ2: ブータブルUSBドライブの作成
ZimaOSイメージをUSBドライブにフラッシュする必要があります。最も簡単なツールは **Balena Etcher** です。  

1. [**Balena Etcher**](https://etcher.balena.io/#download-etcher) をダウンロードしてインストール  
2. Etcherを開き、ZimaOSの`.img`ファイルを選択  
3. USBドライブを挿入し、ターゲットとして選択  
4. **Flash**をクリックしてイメージの書き込みを開始  

![balena etcher tool open zimaos installer image file](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)
![balena etcher select flash device as a target to install zimaos](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)
![flash zimaso image to flash device completed](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)

### ステップ3: USBからデバイスを起動
1. 作成したブータブルUSBをデバイスに挿入  
2. BIOS/ブートメニューに入り、**Boot from USB**を選択  
![main memu of zimaos installation tool to choose install zimaos or reboot](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)
![quick install memu to select a device or space or location to install zimaos](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)
![confirmation before istalling and choose yes.](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)
![last chance to abort install and choose yes.]](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)
![Installation progress bar displayed. Please wait patiently at this time.](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)

### ステップ4: ZimaOSインストール完了
画面の指示に従ってZimaOSをインストールしてください。  
システムからの案内に従い、USBドライブを取り外してデバイスを再起動します。  
その後、自動的に**ZimaOS**が起動します。  
![remove the flash device and reboot](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)

### ステップ5: ZimaOSへアクセス
再起動後、最も簡単なログイン方法は**ZimaClient**を使用することです。ZimaClientはネットワーク上のデバイスを自動検出し、素早くZimaOSにアクセスできます。  

👉 ZimaClientをダウンロードして、こちらのガイドに従ってください: [ZimaOS クイックスタートガイド](https://www.zimaspace.com/docs/zimaos/Get-Started)  

![welcome to zimacos webgui](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)

または、ネットワーク上のIPアドレスを確認し、それをWebブラウザに入力して**ZimaOS Web UI**にアクセスすることもできます。  
![zimaos key information show on the screen include ip address os version](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)

🎉 **おめでとうございます！**  
ZimaOSをデバイスに正常にインストールできました。これでNAS機能を自由に探索できます。  

---

## ZimaOSでの次のステップ

ZimaOSをスマートサーバーにインストールしたら、パーソナルクラウドやホームサーバーの構築を始められます。  
次のアイデアを参考にしてください：  

- 🔧 **RAIDやストレージプールの設定**でデータを保護  
- 📂 **ファイル共有 (SMB/FTP)** を有効化して複数デバイスで利用  
- 🎞️ **メディアサーバー (Plex, Jellyfin)** を稼働させて映画や音楽をストリーミング  
- 🐳 **Dockerアプリをデプロイ**してZimaOSアプリストアから直接利用  
- ☁️ **重要なデータを外付けドライブやクラウドにバックアップ**  

👉 さらに多くの機能を活用する準備はできましたか？  
- [ZimaOS ドキュメント](https://github.com/IceWhaleTech/ZimaOS/wiki) を参照  
- [コミュニティフォーラム](https://github.com/IceWhaleTech/ZimaOS/discussions) に参加  
- [アプリストア](https://github.com/IceWhaleTech/ZimaOS) を探索して環境を拡張  

💡 **プロのヒント**: このガイドをブックマークしてください。新しいZimaOSリリースには、パフォーマンス改善や新しいアプリが追加されることがよくあります。  

今日からZimaOSの旅を始め、より速く、シンプルで、信頼できるNAS体験を楽しみましょう！ 🚀