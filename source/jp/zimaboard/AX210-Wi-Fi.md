---
title: AX210 Wi-Fiカード ユーザーガイド
description: 
type: Docs
author: admin
tip: 上部バーの固定形式は削除しないでください、descriptionは記事の説明で、入力しない場合は最初の段落が表示されます。
---
## 1. はじめに
Intel® Wi-Fi 6E AX210 (Gig+) アダプターは、Wi-Fi 6E 技術に対応するように設計されています。この製品は、2.4GHz、5GHz、6GHz帯域でのデュアルストリームWi-FiとBluetooth® 5.3をサポートしています。Intel® Core™ プロセッサと優れたIntel無線技術を組み合わせることで、Intel® Wi-Fi 6E AX210モジュールは、家庭、仕事、外出先での接続体験を大幅に向上させます。

## 2. 仕様
![AX210 Wi-Fiカード仕様](https://manage.icewhale.io/api/static/docs/1755248064574_copyImage.png)

## 3. 使用方法
**クイック操作手順：  
A. AX210カードをZimaBoardに挿入します。  
B. AX210ドライバーを更新します。  
C. CasaOSシステムを開き、Wi-Fiに接続します。**  
### 3.1 STAモード
**必要な機器：**
- ZimaBlade / ZimaBoard × 1
- AX210 Wi-Fiカード × 1
- イーサネットケーブル × 1
- 電源アダプター × 1  
**オプション：**
- miniDPケーブル × 1
- モニター × 1
- キーボード × 1  
**接続図**
![接続図](https://manage.icewhale.io/api/static/docs/1755248150818_image.png)

#### ステップ1: AX210 Wi-Fiカードが検出されているか確認
1. ターミナルを使用してデバイスにアクセスします。  
![ターミナル](https://manage.icewhale.io/api/static/docs/1755248310999_copyImage.png)  
![ログインターミナル](https://manage.icewhale.io/api/static/docs/1755248335646_image.png)

2. `su`でrootモードに切り替えます。  
![rootモード](https://manage.icewhale.io/api/static/docs/1755248357144_image.png)

3. `lspci`コマンドを実行します。  
![lspciの結果](https://manage.icewhale.io/api/static/docs/1755248383004_image.png)

   Intelデバイスがリストに表示されれば、ZimaBoardに接続されていることが確認できます。

#### ステップ2: AX210ドライバーをインストール
<mark style="background-color: #fff9bd">注：  
ZimaBoardまたはZimaBladeにプリインストールされているCasaOSのカーネルバージョンが**5.10**の場合、**ステップ3**に直接進むことができます。  
このバージョンは[提供されたリンク](https://www.zimaspace.com/docs/zimaboard/Restore-factory-settings)から取得することもできます。</mark>

1. カーネルバージョンを確認します。6.10未満の場合、アップグレードをお勧めします。このガイドではバックポートカーネルを使用します。  
![カーネルバージョン](https://manage.icewhale.io/api/static/docs/1755248568547_image.png)

2. バックポートリポジトリを追加します：  
```language
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" | sudo tee -a /etc/apt/sources.list
```

3. パッケージリストを更新します：  
```language
sudo apt update
```  
![apt update](https://manage.icewhale.io/api/static/docs/1755249083029_image.png)

4. Debianアーカイブのキーリングを追加します：  
```language
sudo apt install -y debian-archive-keyring
```  
![ライセンス](https://manage.icewhale.io/api/static/docs/1755249117075_image.png)

5. 再度パッケージリストを更新します：  
```language
sudo apt update
```  
![apt update](https://manage.icewhale.io/api/static/docs/1755249154038_image.png)

6. カーネルをアップグレードし、ファームウェアをインストールします：  
```language
sudo apt install -y -t bookworm-backports linux-image-amd64 firmware-iwlwifi
```  
![カーネルとドライバのダウンロード](https://manage.icewhale.io/api/static/docs/1755249240618_image.png)

7. 再起動します：  
```language
sudo reboot
```
再起動後、カーネルバージョンが6.12以上であることを確認してください。  
![](https://manage.icewhale.io/api/static/docs/1755249301302_image.png)

#### ステップ3: `nmtui`を使用してWi-Fiに接続
`nmtui`ツールを使用して接続します。  
```language
sudo nmtui
```

システムが`nmtui`コマンドを認識しない場合は、**FAQ**セクションを参照してインストール手順を確認してください。

1. **Activate a connection**を選択します。  
![ネットワークマネージャGUI/TUi](https://manage.icewhale.io/api/static/docs/1755249412290_image.png)

2. Wi-Fiネットワーク（SSID）を選択します。  
![Wi-Fi選択](https://manage.icewhale.io/api/static/docs/1755249456648_image.png)

3. パスワードを入力し、Enterを押します。  
![無線ネットワークの認証/パスワード要求](https://manage.icewhale.io/api/static/docs/1755249476230_image.png)

4. IPアドレスと接続状態を確認します。  
`nmtui`ツールを終了し、`ip a`を使用してワイヤレスインターフェースの状態を確認します：  
```language
ip a
```  
![IPアドレスを確認](https://manage.icewhale.io/api/static/docs/1755249580916_image.png)

GUI版のCasaOSを使用している場合は、Wi-Fiメニューを開き、希望するネットワークを選択してください。

![](https://manage.icewhale.io/api/static/docs/1755249604651_image.png)

#### 対応するルーターオペレーティングシステム
- **OpenWRT**
  1. ax210の公式ドライバーであるiwlwifiをインストールします。
  2. intelの[公式ウェブサイト](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html 383)からファームウェアをダウンロードします。
  3. iwlwifi-ty-59.601f3a66.0.tgzを解凍し、/lib/firmwareにコピーします。
  4. `lspci`コマンドでax210のパスを確認します。
  5. `/sys/bus/pci/devices`に移動し、デバイスIDを確認します。
  6. 辞書に入り、`pwd`コマンドで絶対パスを取得します。
  7. `/etc/config/wireless`を編集します。  
```language
config wifi-device 'radio0'
        option type 'mac80211'
        option country 'US'
        option cell_density '0'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'

config wifi-device 'radio1'
        option type 'mac80211'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'
        option band '5g'
        option htmode 'HE80'
        option cell_density '0'
        option country 'US'
```
  8. 再起動します！これでドライバーが正常に動作するはずです。

#### FAQ
- **ZimaデバイスからLANデバイスへのネットワーク速度テスト**  
![iperf3](https://manage.icewhale.io/api/static/docs/1755249878561_image.png)

- **APモード（2.4 GHzのみ）**

- 1. 必要なパッケージをインストールします：  
     `sudo apt update`  
     `sudo apt install hostapd iw`
- 2. 無線ネットワークを設定します：  
     `/etc/hostapd/hostapd.conf`を