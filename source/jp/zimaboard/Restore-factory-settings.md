---
title: ZimaBoard CasaOS 工場リカバリ
---

# 準備

公式のZimaBoard CasaOSイメージをダウンロード

- [**ZimaBoard CasaOSイメージ -832/432**](https://drive.google.com/file/d/1b-k7d1LzPHNUtem-hOrHB5dDt0_AC6mK/view)

- [**ZimaBoard CasaOSイメージ -216**](https://drive.google.com/file/d/1PFw1JXoimwUvOX9kgkmOSUM0evi_GGxv/view)

## USBスティックを使用してイメージを作成

**事前に準備**

- コンピュータに[BalenaEtcher](https://www.balena.io/etcher/)をダウンロードしてインストールします。
- 公式のZimaBoard CasaOSイメージをダウンロードします。

ZimaBoard関連の準備。

- ZimaBoardと電源アダプター
- USBドライブ（8GB以上、データは消去されます）
- miniDPからDP/HDMIアダプター（モニターに接続するために使用）
- モニター
- キーボード
- USBハブ（オプション、USBポートが不足している場合）

## USBドライブを使用してインストール

### [BalenaEtcher](https://www.balena.io/etcher/)を開く

![BalenaEtcherを開く](/images/Restore-factory-settings/open-balenaetcher.png)

### システムイメージを選択 

![イメージを選ぶ](/images/Restore-factory-settings/choose-image.png)

### 挿入したUSBドライブを選択

![USBを選ぶ](/images/Restore-factory-settings/choose-usb.png)

### 「Flash!」をクリック 

**プロセス中にシステムパスワードを入力するよう求められることがありますので、入力してOKをクリックしてください。**

![BalenaEtcherでクリックしてフラッシュ](/images/Restore-factory-settings/click-flash.png)

![あなたのコンピュータのアカウントとパスワードを入力](/images/Restore-factory-settings/enter-password.png)

**全過程は数分かかりますが、システムイメージのサイズとUSBドライブの読み書き速度に依存します。**

![フラッシュが待機中](/images/Restore-factory-settings/waiting-flash.png)

### 完了！

**USBドライブを取り外し、準備完了です！**

![USBドライブの作成が完了](/images/Restore-factory-settings/complete-flash.png)

## **インストールUSBドライブからブート**

### ZimaBoardにアクセサリーを接続

USBドライブ、モニター、キーボード、`USBハブ` **（オプション）**、`マウス` **（オプション）**、`ネットワークケーブル` **（推奨）**をZimaBoardに接続します。

![接続図](/images/Restore-factory-settings/connection-diagram.png)

### 電源を入れ、ブートデバイスを選択

電源を接続し、**F11**を連続的に押します。

## **インストールを開始**

**1. ブートデバイスメニューでUEFIから始まるUSBドライブを選択します。**

![UEFIブートを選ぶ](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

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

**カウントダウン後にインストールが完了します！！！！**

# 動画ショートチュートリアル

{% youtuber video SMV3wG1YbUk %}
https://www.youtube.com/embed/SMV3wG1YbUk
{% endyoutuber %}

**注意**：ストレージを選択する際は、正しいディスクを選択するように注意してください。

オペレーティングシステムとストレージベンダーはストレージサイズを異なる方法で計算するため、システムをインストールする際に表示される容量はハードウェアの容量と同じではありません。ディスクの種類とおおよそのサイズで区別できます。
ZimaBoardの内蔵ストレージタイプはeMMCで、オペレーティングシステム内ではMMCデバイスとして認識されることがあります。

**注意****！ 外部ハードディスクにOSをインストールする場合、BIOSでブートシーケンスを変更する必要があるか、ブート時にブートデバイスを選択する必要があります。**