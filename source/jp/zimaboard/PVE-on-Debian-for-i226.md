---
title: PVEにおけるNIC問題の修正
description: Intel NICにおけるPVE環境でのカーネルパニックおよびネットワークの不安定性問題を解決する。
type: Docs
author: icewhale123456
tip: トップバーの固定形式は削除しないでください。descriptionは記事の説明で、記入しない場合は内容の最初の段落が自動で表示されます。
---
## i226 NIC用のDebian上でのProxmox VEの実行

### 1. 解決策の概要

この解決策は、ZimaBoard 2プラットフォームでIntel i226シリーズNICを使用したProxmox VE仮想化環境の展開に関するものです。目標は、高バージョンLinuxカーネルにおけるPCIe ASPM電力管理によって引き起こされるNICドライバのNULLポインタ逆参照問題を解決し、カーネルパニックやシステムの応答なしを回避することです。

- **ハードウェアプラットフォーム**: ZimaBoard 2  
- **ソフトウェアバージョン**: Debian 12.8.0  
- **ネットワーク環境**: プロセス全体で有線接続を使用することを推奨します。ルーターのサブネット情報（このガイドのサブネット例: `10.0.0.1/16`）を準備してください。  
- **核心目的**: i226 NICの高バージョンLinuxカーネルにおけるASPM電力管理の競合およびカーネルパニック（Kernel Panic）の問題を解決し、安定した仮想化環境を構築すること。  
- **前提知識**: PCIe ASPM（特にL1サブステート）がIntel i226-V NICで有効になると、物理リンクのアップ/ダウンイベント、ドライバのリロード、またはリンクの再交渉時にigcドライバでNULLポインタ逆参照が発生することがあり、これがカーネルパニックやシステムのフリーズを引き起こします。この解決策は、「Debianベース+PVEカーネル」の展開モデルを採用しており、Proxmoxカーネルを導入する前に電力管理とファームウェア環境を調整し、高いハードウェア互換性とチューニングの柔軟性を実現します。

#### 主な操作手順

1. Debian 12.8のインストール: ネットワークインストールISOを使用し、ディスク全体を使用してUEFIブートを行います。  
2. ASPMの無効化: `/etc/default/grub`を編集し、`GRUB_CMDLINE_LINUX_DEFAULT`に`pcie_aspm=off`を追加し、`update-grub`を実行して再起動します。  
3. 基本設定: 国内ミラーに切り替え、`firmware-intel-misc`をインストール。IP設定を一時的に構成し、接続テストを行います。  
4. Proxmoxの準備: `/etc/hosts`を設定し、Proxmoxのno-subscriptionリポジトリとGPGキーを追加します。  
5. Proxmoxのインストール: `apt install proxmox-ve postfix open-iscsi`を実行。`pve-firmware`との競合があれば、`dpkg --force-overwrite`を使って強制インストールし、`apt install -f`で依存関係を修正します。  
6. ブリッジネットワークの設定: `/etc/network/interfaces`を編集し、物理NIC（例: `enp1s0`）をブリッジ`vmbr0`に追加、静的IPとゲートウェイを設定してネットワークを再起動します。  
7. アクセスの確認: 再起動後、`https://<IP>:8006`にアクセスします。

### 2. 操作手順

以下のコマンドは、Debianシステムでrootまたはsudo権限で実行されます。

#### 2.1 Debianのインストールと作成

ベースシステムの安定性と制御性を確保するため、この解決策ではDebian 12.8を基盤として使用します。

1. **ソフトウェアリソースのダウンロード**  
   - Debian 12.8.0: [https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso](https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso)  
   - バーレナEtcherツール: [https://etcher.balena.io/](https://etcher.balena.io/)

2. **ブータブルUSBドライブの作成**  
   - 少なくとも8GBのUSBドライブを挿入します。  
   - balenaEtcherを開き、USBドライブをターゲットデバイスとして選択します。  
   - 「ファイルからフラッシュ」をクリックし、ダウンロードした`debian-12.8.0-amd64-netinst.iso`を選択します。ソフトウェアが自動的にディスクを選択します。  
   - 「フラッシュ！」をクリックして完了まで待ち、USBドライブを安全に取り外します。

3. **BIOSブート**  
   - 準備したUSBドライブをZimaBoardのUSBポートに挿入します。  
   - 電源を入れ、**F11**キーを繰り返し押します（一部の機種ではESCまたはDeleteキーを使用する場合もありますが、ZimaBoard 2はデフォルトでF11です）。  
   - ブートメニューで、「UEFI」と名前に付いたUSBドライブエントリを選択します。

4. **インストール手順の概要**  
   Debianの青いウェルカム画面に入った後、以下のガイドラインに従ってください:  
   - インストールモード: **グラフィカルインストール**を選択することを推奨します（初心者に最も使いやすい）。  
   - 言語と地域: 「英語」または好ましい言語を選択し、キーボードは「アメリカ英語」を選択します。  
   - ディスクのパーティション設定: **「ディスク全体を使用」**を選択し、ZimaBoard内蔵のeMMCまたはインストールしたSSDを選択、その後**「すべてのファイルを1つのパーティションに」**としてパーティションスキームを設定します。

#### 2.2 クリーンDebianシステムでのNICのデバッグ

1. **PCIe高度電力管理（ASPM）の無効化**  
   ```bash
   nano /etc/default/grub
   ```
   以下の行を変更します:
   ```
   GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pcie_aspm=off"
   ```
   保存して終了後、GRUBを更新して再起動します:
   ```bash
   update-grub
   reboot
   ```

2. **安定したDNSサーバーへの切り替え（仮）**  
   ```bash
   nano /etc/resolv.conf
   ```
   以下を追加します:
   ```
   nameserver 223.5.5.5
   nameserver 114.114.114.114
   ```

3. **ファームウェアのインストール**  
   ```bash
   # キャッシュをクリア
   rm -rf /var/lib/apt/lists/*
   # 更新してIntel NICファームウェアをインストール
   apt update
   apt install firmware-intel-misc -y
   ```

4. **NICインターフェースの仮設定**  
   この例では、インターフェース名は`enp8s0`、ルーターアドレスは`10.0.0.1`です。  
   ```bash
   # 既存のIP設定をクリア
   ip addr flush dev enp8s0
   # インターフェースをダウン
   ip link set enp8s0 down
   # IPアドレスとゲートウェイを設定
   ip addr add 10.0.1.100/16 dev enp8s0
   ip route add default via 10.0.0.1
   # インターフェースをアップ
   ip link set enp8s0 up
   ```

5. **接続テスト**  
   ```bash
   ping -I enp8s0 8.8.8.8
   ```
   成功すれば、NICは正常に機能しています。

#### 2.3 Proxmox VEカーネルのインストール

1. **ホストファイルの設定**  
   ```bash
   # ホスト名を確認（この例ではホスト名は"debian"です）
   hostname
   nano /etc/hosts
   ```
   ファイルに以下を追加:
   ```
   127.0.0.1       localhost
   10.0.1.21       debian.proxmox.com debian
   ```

2. **Proxmoxソフトウェアリポジトリの追加**  
   ```bash
   # curlがない場合はインストール
   apt update && apt install curl -y
   # GPGキーを追加
   curl -fSsL http://download.proxmox.com/debian/proxmox-release-bookworm.gpg -o /etc/apt/trusted.gpg.d/proxmox-release-bookworm.gpg
   # pve-no-subscription.listを編集
   nano /etc/apt/sources.list.d/pve-no-subscription.list
   # 以下を追加
   deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription
   ```

3. **PVEカーネルとコアコンポーネントのインストール**  
   ```bash
   # 更新してフルアップグレードを実行
   apt update
   apt full-upgrade -y
   # Proxmox VEのコアパッケージをインストール
   apt install proxmox-ve postfix open-iscsi -y
   ```
   - インストール中にPostfix設定ウィンドウが表示されたら、Tabキーで「ローカルのみ」を選択し続行。

   前回インストールしたDebianファームウェアパッケージと`pve-firmware`が競合する可能性があります。上書きします:
   ```bash
   dpkg -i --force-overwrite /var/cache/apt/archives/pve-firmware_*.deb
   # 残りの依存関係問題を修正し、必要であればコアパッケージを再インストール
   apt install -f
   apt install proxmox-ve
   ```

   インストール後、再起動しカーネルバージョンを確認します:
   ```bash
   reboot
   # 再起動後
   uname -a
   ```
   出力に`6.8.x-pve`が表示されれば、インストールは成功です。

#### 2.4 ネットワークの設定

`proxmox-ve`をインストールすると、元のネットワーク管理ツールが削除され、Proxmoxのネットワークモデルが導入されます。そのため、メインインターフェースの手動設定が必要です。

インターフェースファイルを編集します:
```bash
nano /etc/network/interfaces
```

物理NICが`enp1s0`で、静的IP`10.0.1.21/16`とゲートウェイ`10.0.0.1`を設定する場合、ファイルを以下のように変更します:
```
iface enp1s0 inet manual

auto vmbr0
iface vmbr0 inet static
    address 10.0.1.21/16
    gateway 10.0.0.1
    bridge-ports enp1s0
    bridge-stp off
    bridge-fd 0
```

保存して終了し、ネットワークを再起動します:
```bash
systemctl restart networking
```

#### 2.5 検証とWebインターフェースアクセス

Webブラウザを開き、次のアドレスにアクセスします:
```
https://10.0.1.21:8006
```
「詳細設定」をクリックし、「10.0.1.21に進む（安全でない）」を選択後、Debianシステムのroot資格情報でログインします。Proxmox VEのWebインターフェースにアクセスできるはずです。

### 3. トラブルシューティング

**Q: 公式のダウンロードソースが遅い、またはアクセスできない場合は？**  

- **Debian**: [公式ミラーリスト](https://www.debian.org/mirror/list)を訪れ、自国または地域のミラーを選択し、チュートリアル内の`deb.debian.org`および`security.debian.org`をそのミラーのドメインに置き換えてください。  
- **Proxmox**: Proxmoxには公式ミラーリストはありませんが、よく知られたサードパーティのミラーを使用するか、「proxmox mirror」を検索してミラーアドレスを探してください。  

ソースを更新した後、`apt update`を実行して変更を適用します。