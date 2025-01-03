---
title: ZimaBoard CasaOS 工場リカバリ
---

# 準備

公式のZimaBoard CasaOSイメージをダウンロードしてください

- [**ZimaBoard CasaOSイメージ -832/432**](https://drive.google.com/file/d/1b-k7d1LzPHNUtem-hOrHB5dDt0_AC6mK/view)

- [**ZimaBoard CasaOSイメージ -216**](https://drive.google.com/file/d/1PFw1JXoimwUvOX9kgkmOSUM0evi_GGxv/view)
## USBスティックを使用してイメージを作成する

**事前に準備する**

- コンピュータに[BalenaEtcher](https://www.balena.io/etcher/)をダウンロードしてインストールする
- 公式のZimaBoard CasaOSイメージをダウンロードする

ZimaBoardに関連する準備。

- ZimaBoardと電源アダプター
- USBドライブ（8GB以上、データは消去されます）
- miniDP to DP/HDMIアダプタ（モニターに接続するために使用）
- モニター
- キーボード
- USBハブ（オプション、USBポートが足りない場合）

## USBドライブを使用してインストールする

### [BalenaEtcher](https://www.balena.io/etcher/)を開く

![Balenaetcherを開く](/images/Restore-factory-settings/open-balenaetcher.png)

### システムイメージを選択 

![イメージを選択](/images/Restore-factory-settings/choose-image.png)

### 挿入したUSBドライブを選択

![USBを選択](/images/Restore-factory-settings/choose-usb.png)

### 「Flash!」をクリック 

**プロセス中にシステムパスワードの入力を求められる場合がありますので、入力してOKをクリックしてください。**

![BalenaetcherでFlashをクリック](/images/Restore-factory-settings/click-flash.png)

![コンピュータアカウントとパスワードを入力](/images/Restore-factory-settings/enter-password.png)

**全体のプロセスは数分かかります。システムイメージのサイズとUSBドライブの読み書き速度によります。**

![フラッシュ待機中](/images/Restore-factory-settings/waiting-flash.png)

### 完了！ 

**USBドライブを取り出し、準備完了です！**

![USBドライバ作成完了](/images/Restore-factory-settings/complete-flash.png)

## **インストール用USBドライブからブートする**

### ZimaBoardにアクセサリーを接続

USBドライブ、モニター、キーボード、`USBハブ` **（オプション）**、`マウス` **（オプション）**、`ネットワークケーブル` **（推奨）**をZimaBoardに接続します。

![接続図](/images/Restore-factory-settings/connection-diagram.png)

### 電源を入れてブートデバイスを選択

電源を接続し、**F11**を連続して押します。

## **インストールを開始する**

**1. ブートデバイスメニューでUEFIで始まるUSBドライブを選択します。**

![UEFIブートを選択](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

**2. 数分待つ**

![ブート待機中](/images/Restore-factory-settings/witting-boot.png)

**3. 最初のものを選択**

![mmcblk0を選択](/images/Restore-factory-settings/select-mmcblk0.png)

**4. `y`を入力**

![CasaOSをインストール中](/images/Restore-factory-settings/enter-yes.png)

**5. 数分待つ**

![CasaOSインストーラー待機中](/images/Restore-factory-settings/witting-install.png)

**6. 最初のものを選択**

![シャットダウンを選択](/images/Restore-factory-settings/select-poweroff.png)

**カウントダウンが終了したらインストールが完了します！！！！**

# 動画短編チュートリアル

{% youtuber video SMV3wG1YbUk %}
https://www.youtube.com/embed/SMV3wG1YbUk
{% endyoutuber %}

**注意**: ストレージを選択する際は、正しいディスクを選ぶように注意してください。

オペレーティングシステムとストレージベンダーは、ストレージスペースのサイズを異なって計算するため、システムをインストールする際に表示される容量はハードウェア容量とは異なります。ディスクの種類とおおよそのサイズによって違いを確認できます。
ZimaBoardの内蔵ストレージタイプはeMMCで、オペレーティングシステム内ではMMCデバイスとして認識されることがあります。

**注意****！ 外付けハードディスクにOSをインストールする場合、BIOSでブートシーケンスを変更するか、ブート時にブートデバイスを選択する必要があるかもしれません。**