---
title: 小さなサイズ、大きなアプリケーション (OMV+ZimaBoard)
---
# OMVの紹介

![introduce openmediavault](/images/Small-body-Big-applications-(OMV+Zima)/introduce-openmediavault.png)

**OpenMediaVault (OMV)は、家庭環境や小規模オフィスでの使用のためのDebian Linuxベースのネットワーク接続ストレージ(NAS)ソリューションであり、初心者ユーザーでも簡単にインストールおよび管理できる、シンプルで使いやすいアウト・オブ・ボックスソリューションです。SSH、SMB、DAAPメディアサーバー、RSyncなどの多くの標準データアプリケーションサービスが含まれています。また、KVM、Dockerなどの追加アプリケーション拡張のためのモジュラー設計フレームワーク機能で強化することもできます。一方、ZimaBoardの小さなサイズとOMVの小さなサイズはユーザーに便利さを提供します。サイズは本当に重要ではありません！**

# OMVインストール準備

- OMVインストール用の [**イメージファイル**](https://www.openmediavault.org/download.html) （最新の公式OMV6の安定バージョンをダウンロードすることを推奨）
- 最低1Gの容量を持つUSBメモリースティック
- モニターと接続するためのminiDPケーブル
- ネットワークケーブル：ZimaBoardのminiDPポート近くのネットワークポートに接続
- キーボード：USB経由で接続されたキーボードで十分

# 注意事項

- イメージの書き込みに失敗した場合は、Diskgeniusなどのディスクツールを使用してUSBメモリーのパーティションとフォーマット情報をクリアします。再度イメージを書き込んでみてください。

- OMVのインストールプロセスは多くの場所でネットワーク環境を必要とするため、ユーザーはZimaをスムーズなインターネット接続のあるルーターまたはスイッチに接続することが重要です。

# OMV新規インストール

## BIOSの設定

**1. USBメモリーを挿入し、miniDPケーブルでモニターを接続し、キーボードを接続し、ZimaBoardの電源を入れ、Delキーを連打してBIOSに入ります。**
**2. デフォルトでは、ZimaBoardのBIOSは自分のeMMCを優先するブートディスクとして使用します。このように表示されます**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/setup-of-bios.jpeg)

**3. Bootのセクションで、Boot Option #1をUSBメモリーのパーティション1に調整します。次のように表示されます："UEFI:Legend ZhenJBFast 1100"はOMV6イメージがあるパーティションであり、"UEFI:Legend ZhenJBFast 1100、パーティション1"はUSBメモリーの残りの空きスペースです。`UEFI:Legend ZhenJBFast 1100、パーティション1"`はUSBメモリーの残りのスペースで、ユーザーはブートの選択肢として`"UEFI:Legend ZhenJBFast 1100"`を選択する必要があります。**
**4. Save & Exitを押した後、ZimaBoardは再起動し、OMV6インストール画面に進みます。**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/chosse-uefi-boot.jpeg)

## インストール手順

**1. インストールを初期化するために、Installを選択してEnterを押します**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/install-omv.png)

**2. インストールプロセスの言語を選択します；デフォルトは英語です**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/select-language.png)

**3. デフォルトでは、ZimaBoardはデュアルネットワークポートを持ち、enp2s0はminiDPポート近くのもので、enp3s0は電源供給近くのものです**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-lan-port.jpeg)

**4. インストーラーがOMVのインストールパスを選択するようにユーザーに求めた場合は、「MMC/SD CARD」に設定されていることを確認してください**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-emmc.jpeg)

**5. インストーラーは、ZimaBoard内部のハードディスクの空き容量がすべてクリアされ、再パーティション化されることを確認するようにユーザーに求めます**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/partition-disks.jpeg)

**6. 次に、インストーラーはrootアカウントの初期パスワードを設定するようにユーザーに求めます**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/Initialize-password.jpeg)

{% note danger %}
**ヒント:**
  このアカウントのパスワードセットを記憶しておく必要があります。その後のバックグラウンド設定操作に必要です。
{% endnote  %}

**7. インストーラーがDebianイメージソースを選択するようにユーザーに求めた場合は、ユーザーの現在の国または地域を選択し、それに適したイメージソースを選択してください。こちらの選択は、OMVのさまざまなプラグインの日常的なアップデート/インストール速度に大きな影響を与えますので、注意が必要です。**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-image.jpeg)

**8. 以下の画像に進むと、OVMの新規インストールが完了し、ユーザーはUSBドライブを取り外した後にOMVの再起動を続行できます。**

![setup-of-bios](/images/Small-body-Big-applications-(OMV+Zima)/usb-drive-boot.jpeg)

{% note danger %}

**注:**

- インストールプロセス中に間違った選択または設定が行われた場合は、キャンセルボタンを押すことでインストール進行ディレクトリに戻り、ユーザーがリセットする必要がある進行ページを選択できます。
- 新しいインストールが完了した後、OMVが再起動する前にUSBフラッシュドライブが取り外されると、BIOSは自動的にeMMCのOMVブートパーティションを優先ブートディスクとして使用するため、ユーザーは再度BIOSに入ってブートオプションを設定する必要はありません。

{% endnote  %}

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)