---
title: AX210 Wi-Fi カード ユーザーガイド
seo_title: "ZimaBoard の AX210 Wi-Fi：インストールと設定ガイド"
description: "Intel AX210 Wi-Fi 6E カードを ZimaBoard に取り付けて有効にします。ハードウェアの取り付け、ドライバー設定、無線ネットワーク接続を詳しく説明します。"
type: Docs
author: admin
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## 1. はじめに
[Intel® Wi-Fi 6E AX210（Gig+）アダプター](https://shop.zimaspace.com/products/intel-ax210-wifi-6e-pcie-card-zimaboard)は、Wi-Fi 6E 技術に対応するよう設計されています。2.4GHz、5GHz、6GHz 帯のデュアルストリーム Wi-Fi と Bluetooth® 5.3 に対応します。Intel® Core™ プロセッサーと優れた Intel の無線技術を組み合わせることで、Intel® Wi-Fi 6E AX210 モジュールは、自宅、職場、外出先での接続体験を大幅に向上させます。

## 2. 仕様
![AX210 Wi-Fi カードの仕様](https://manage.icewhale.io/api/static/docs/1755248064574_copyImage.png)

## 3. 使用方法
**クイック操作手順：
A. AX210 カードを ZimaBoard に挿入します。
B. AX210 ドライバーを更新します。
C. CasaOS システムを開き、Wi-Fi に接続します。**

**STA モード**
**必要な機器：**
- ZimaBlade / ZimaBoard × 1
- AX210 Wi-Fi カード × 1
- Ethernet ケーブル × 1
- 電源アダプター × 1
**オプション：**
- miniDP ケーブル × 1
- モニター × 1
- キーボード × 1
**接続図**
![接続図](https://manage.icewhale.io/api/static/docs/1755248150818_image.png)
### ステップ 1：AX210 Wi-Fi カードが検出されているか確認する
1. ターミナルからデバイスにアクセスします。
![ターミナル](https://manage.icewhale.io/api/static/docs/1755248310999_copyImage.png)
![ログインターミナル](https://manage.icewhale.io/api/static/docs/1755248335646_image.png)

2. `su` で root モードに切り替えます
![root モード](https://manage.icewhale.io/api/static/docs/1755248357144_image.png)

3. `lspci` コマンドを実行します
![lspci の結果](https://manage.icewhale.io/api/static/docs/1755248383004_image.png)

   Intel デバイスが一覧に表示されれば、ZimaBoard に接続されていることを確認できます。

### ステップ 2：AX210 ドライバーをインストールする
<mark style="background-color: #fff9bd">注：
 ZimaBoard または ZimaBlade にプリインストールされた CasaOS のカーネルバージョンが **5.10** の場合は、直接**ステップ 3**へ進めます。
 このバージョンは[提供されているリンク](../help-center/restore-factory-settings)から入手することもできます。</mark>
1. カーネルバージョンを確認します。6.10 未満の場合はアップグレードをおすすめします。このガイドでは backports カーネルを使用します。
![カーネルバージョン](https://manage.icewhale.io/api/static/docs/1755248568547_image.png)

2. backports リポジトリを追加します。
```language
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" | sudo tee -a /etc/apt/sources.list
```


3. パッケージリストを更新します。
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249083029_image.png)

4. Debian アーカイブキーリングをインストールします。
```language
sudo apt install -y debian-archive-keyring
```
![ライセンス](https://manage.icewhale.io/api/static/docs/1755249117075_image.png)

5. パッケージリストをもう一度更新します。
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249154038_image.png)

6. カーネルをアップグレードし、ファームウェアをインストールします。
```language
sudo apt install -y -t bookworm-backports linux-image-amd64 firmware-iwlwifi
```
![カーネルとドライバーのダウンロード](https://manage.icewhale.io/api/static/docs/1755249240618_image.png)

7. 再起動します。
```language
sudo reboot
```
再起動後、カーネルバージョンが 6.12 以上であることを確認します。
![](https://manage.icewhale.io/api/static/docs/1755249301302_image.png)

### ステップ 3：`nmtui` で Wi-Fi に接続する
`nmtui` ツールを使用して接続します。
```language
sudo nmtui
```

システムが `nmtui` コマンドを認識しない場合は、下の**nmtui のインストール**セクションを参照してください。

1. **Activate a connection** を選択します。
![ネットワークマネージャーの GUI/TUI](https://manage.icewhale.io/api/static/docs/1755249412290_image.png)

2. Wi-Fi ネットワーク（SSID）を選びます。
![Wi-Fi の選択](https://manage.icewhale.io/api/static/docs/1755249456648_image.png)

3. パスワードを入力し、Enter を押します。
![無線ネットワークで要求される認証またはパスワード](https://manage.icewhale.io/api/static/docs/1755249476230_image.png)

4. IP アドレスと接続を確認します
設定を保存して `nmtui` を終了し、`ip a` で無線インターフェースの状態を確認します。

```language
ip a
```
![IP アドレスの確認](https://manage.icewhale.io/api/static/docs/1755249580916_image.png)

  GUI 版 CasaOS を使用している場合は、Wi-Fi メニューを開き、接続するネットワークを選ぶだけです。

![](https://manage.icewhale.io/api/static/docs/1755249604651_image.png)

### 対応するルーター OS
- **OpenWRT**
  1. AX210 の公式ドライバーである iwlwifi をインストールします。
  2. Intel の[公式 Web サイト](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html 383)からファームウェアをダウンロードします。
  3. iwlwifi-ty-59.601f3a66.0.tgz を展開し、ファイルを /lib/firmware/ にコピーします。
  4. lspci コマンドで AX210 のパスを確認します。
  5. /sys/bus/pci/devices に移動すると、デバイス ID が表示されます。
  6. ディレクトリに入り、pwd コマンドで絶対パスを取得します。
  7. /etc/config/wireless を編集します。
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
  8. 再起動します。ドライバーが正常に動作することを確認できます。

## ネットワーク速度テスト
![iperf3](https://manage.icewhale.io/api/static/docs/1755249878561_image.png)


## AP モード（2.4 GHz のみ）

1. 必要なパッケージをインストールします。
   `sudo apt update`
   `sudo apt install hostapd iw`
2. 無線ネットワークを設定します。
   `/etc/hostapd/hostapd.conf` を編集します。
```language
interface=wlp1s0  # Replace according to your network adapter name
driver=nl80211
ssid=mylove   # Replace "YourSSID" with your desired network name
hw_mode=a
channel=36      # Select your preferred channel
country_code=US
ieee80211ac=1
wmm_enabled=1
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP
wpa_passphrase=YourPassphrase  # Replace "YourPassphrase" with your Wi-Fi password
logger_stdout=-1
logger_stdout_level=2
```
3. hostapd を起動します。
   `sudo systemctl start hostapd`
![](https://manage.icewhale.io/api/static/docs/1755250711162_image.png)

4. 別のデバイスから接続し、Wi-Fi ネットワークをテストします。
![](https://manage.icewhale.io/api/static/docs/1755250706664_image.png)

## nmtui のインストール

`nmtui` は `network-manager` パッケージに含まれています。
```language
sudo apt install network-manager
```

実際に試してみませんか。必要なコンポーネントは[当社のストア](https://shop.zimaspace.com/)で入手できます。
