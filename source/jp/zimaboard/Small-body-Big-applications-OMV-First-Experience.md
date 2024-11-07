---
title: OMVの探求
---

# 初回ログイン

## ログイン方法

![omvのログイン方法](/images/Small-body-Big-applications-(OMV+Zima)/menthod-of-login.jpeg)

OMVに初めてログインするには、ブラウザに**`openmediavault.local/ `**と入力します。

{% note info %}
**ユーザー名**: `admin`
**パスワード**: `openmediavault`（ユーザーは初回ログイン後にデフォルトのパスワードを変更できます）

{% endnote %}

## ダッシュボード

![Omvダッシュボード](/images/Small-body-Big-applications-OMV-First-Experience/omv-dashboard.jpeg)

**ユーザーは、右上の設定（ギア型ボタン）を通じてダッシュボードのレイアウトをカスタマイズできます。**

![OMVダッシュボードの変更](/images/Small-body-Big-applications-OMV-First-Experience/change-dashboard.jpeg)

# 初期化の三要素

## グループ/ユーザー

**ユーザー -> グループ -> 作成**

![Omvユーザー作成](/images/Small-body-Big-applications-OMV-First-Experience/omv-creat-users.jpeg)

 **新しいユーザーグループを作成するとき、ユーザーは新しく作成したユーザーIDをこのユーザーグループに追加できます。**

 ![OmvユーザーID作成](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-users-id.jpeg)

**ユーザー -> ユーザー -> 作成**

![Omvの権限作成](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions.jpeg)

 **新しいユーザーはデフォルトでユーザーグループに属しますが、ユーザーは実際のニーズに応じてユーザーグループをカスタマイズして使用を区別できます。**

 ![グループ付きのOmvの権限作成](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-groups.jpeg)

  **共有フォルダの権限は、新しいユーザーの共有フォルダへのアクセス権を設定します（共有フォルダのチュートリアル内容を参照してください）**
![共有フォルダ付きのOmvの権限作成](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-%20share-folders.jpeg)

## 共有フォルダ

**ストレージ - ファイルシステム - Ext3/4パーティションのマウント（マウント）**
  **OMVは既存のExt3またはExt4パーティションの直接マウントをサポートします。現在接続されているハードディスクにそのようなパーティションがない場合は、ハードディスクの既存のパーティションに対して関連するディスク管理（パーティショニングまたはフォーマット）が行えます。**

{% note danger %}
**マウントされたパーティションは、新しい共有フォルダの前提条件です**
{% endnote %}

![Omv共有フォルダ作成](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders.jpeg)

**ストレージ -> 共有フォルダ -> 作成**

![Omv共有フォルダ作成1](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders1.jpeg)

**ユーザーはマウントされたパーティションに新しい共有フォルダを作成し、適切なアクセス権（読み書き）を設定することを選択できます。**

![Omv共有フォルダの権限作成](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders-permissions.jpeg)

## プラグイン管理

**システム -> 更新管理 -> 更新**

![Omvシステム更新](/images/Small-body-Big-applications-OMV-First-Experience/omv-system-upadtes.jpeg)

{% note danger %}
**システム更新は通常、公式システムパッチまたはOMVの更新内容であるため、初期化後に操作することをお勧めします。**
{% endnote %}

**システム -> プラグイン**

この記事の冒頭で述べたように、OMVは家庭環境や小規模オフィス向けのDebian Linuxベースのネットワーク接続ストレージ（NAS）ソリューションであり、公式プラグインライブラリはユーザーの日常的なアプリケーション要求のほとんどに対応できます。
![Omvシステムプラグインのインストール](/images/Small-body-Big-applications-OMV-First-Experience/omv-plugins-install.jpeg)

{% note primary %}
**必須プラグインの推奨**

**- ファイルマネージャ： [Filebrowser](https://filebrowser.org/)**
**- ネットブック： [Onedrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage)**
**- 画像マネージャ： [Photoprism](https://photoprism.app/)**
**- エアポートプッシュ： [Shairport](https://github.com/mikebrady/shairport-sync)**
**- OMVシステムパーティション共有： sharerootfs（外部ハードディスクなしでZimaのemmcを共有フォルダとして体験したいユーザー向け）**
**- 仮想マシンマネージャ： [Kvm](https://www.linux-kvm.org/page/Main_Page)**
**- SSHターミナルブラウザ： [Wetty](https://github.com/butlerx/wetty)**

{% endnote %}

## 使用のヒント

### 自動ログアウト時間

![Omvシステム自動ログアウト時間](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-automatic-logout-times.jpeg)

日常の使用中、ほとんどのユーザーは、短時間の後にログイン資格情報を再入力しなければならないことに気づくことでしょう。これは、OMVのデフォルトの自動ログアウト時間がわずか5分であるためです。 **`システム - ワークベンチ - 自動ログアウト。`**この問題を解決するために、時間を少し長めに設定します。

### タイムゾーン

![Omvシステムタイムゾーン](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-a-times-zone.jpeg)

一部のユーザーは、データ同期を行う際に、毎日午後にデータを同期するように設定したのに、実際には早朝にデータが同期されてしまうことを見つけます。これは、ユーザーが自分のタイムゾーンを設定していないためです。この問題を解決するには、**`システム - 日付と時刻 - タイムゾーン`**に進みます。

### リマインダー

![Omvシステムリマインダー通知](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-reminder-notice.jpeg)

OMVのデスクトップの右上にある小さなベルは、しばしば冗長な通知をポップアップさせ、ユーザーはそれが関連性がないためにしばしば迷惑だと感じます。ユーザーは**`システム - 通知 - 通知`**に移動して、自分にとって関連性のない通知をオフにするだけです。

### 固定IPアドレス

![Omvシステム固定IPアドレス](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-fixed-ip-address.jpeg)

一部のユーザーにとって、LANの環境要因により、OMVのアドレスが常に変わることがあります。管理ページにアクセスするにはホスト（openmediavault.local/）を使用できますが、実際のアプリケーション操作はあまり便利ではありません。したがって、ユーザーは**`ネットワーク -> インターフェース`**に進み、既存のネットワークインターフェースのIPをデフォルトのDHCPの可変IPアドレスからStaticの固定IPアドレスに変更する必要があります。**`SMB/CIFS`**
**SMBサービス**は、最も基本的なNASアプリケーションの1つです。OMVの初回ユーザーは、正しくSMBサービスを作成できないという困難に直面します。実際、ユーザーはこのガイドの手順に従って共有フォルダ設定の初期化の三要素を完了すれば、SMBサービスの作成を容易に修正できます（NFSサービスを開くのと同じです）。

### SMB/CIFS

![OmvシステムSMB/CIFS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-smb-cifs.jpeg)

**SMBサービスは最も基本的なNASアプリケーションの一つであり、初回のOMVを使用するユーザーはSMBサービスを正しく作成できないという困難に直面します。実際、ユーザーはこのガイドの手順に従って、共有フォルダ設定の初期化の三要素を完了すれば、SMBサービスの作成を容易に修正できます（NFSサービスを開くのと同じです）。**

# OMVアドバンスプレイ

## コミュニティプラグインライブラリ

**公式のプラグインに加えて、OMVにはファンが構築/管理した大規模なコミュニティプラグインライブラリがあり、その中でもDockerの完全サポートが最も重要です。**

**a)** ユーザーは、前の記事で推奨された公式プラグインのWetty [サービス（Services） - Wetty] を使用できます。

![Omvシステムコミュニティプラグイン](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins.jpeg)

**b)** WettyのSSHブラウザのWebバージョンを開き、システムインストール中に設定したrootアカウントとパスワードを入力してログインします。

**c)** ログインして入力します：**<code>`wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash`<code>**

![Omvシステムコミュニティプラグイン1](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins1.jpeg)

**d)** コミュニティプラグインリポジトリがインストールされると、ユーザーはDockerをインストールできます。

![Omvシステムコミュニティプラグイン2](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins2.jpeg)

## DockerとCasaOS

**a)** WettyのSSHでrootアカウントパスワードを使用してログインし、次を入力します。  
**<code>`wget -qO- https://get.casaos.io | sudo bash`<code>**

![OmvシステムCasaOS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos.jpeg)

**b)** インストールが完了したら、ユーザーはCasaOSのログインアドレスを忘れないようにしなければなりません。

![OmvシステムCasaOS1](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos1.jpeg)

**c)** CasaOSのホームページにアクセスし、ユーザーは簡単にカスタマイズされたDockerアプリケーションコレクションを楽しむことができます。

![OmvシステムCasaOS2](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos2.jpeg)

# まとめ

**Debian Linuxベースのネットワーク接続ストレージ（NAS）ソリューションとして家庭環境や小規模オフィス向けに設計されたOMVのシステムは、公式のプラグインライブラリと、他の大規模NASシステム（Synology、QNAP、UNASなど）と比較して、ユーザーのニーズを満たすのに十分な小ささを備えています。また、大規模なDockerライブラリとユーザーに合わせたCasaOSも提供されています。**

[![Discordカード](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)