---
title: i226用のDebianでのPVEの実行
description: i226 NICに対してDebian上でProxmox VEを実行する
type: Docs
author: icewhale123456
tip: 上部バーの固定形式は削除しないでください。descriptionは記事の説明であり、記入しない場合は内容の最初の段落が自動的に表示されます。
---
## i226 NIC用のDebianでProxmox VEを実行する

### 1. 解決策の概要

この解決策は、Intel i226シリーズのNICを搭載したZimaBoard 2プラットフォームでProxmox VE仮想化環境を展開するために設計されています。目標は、高バージョンのLinuxカーネルでPCIe ASPM電力管理によって引き起こされるNICドライバのヌルポインタ逆参照の問題を解決し、カーネルパニックやシステムの応答なしの状態を回避することです。

- **ハードウェアプラットフォーム**: ZimaBoard 2  
- **ソフトウェアバージョン**: Debian 12.8.0  
- **ネットワーク環境**: このプロセス全体で有線接続を使用することを推奨します。ルーターのサブネット情報（例: 本ガイドでのサブネット：`10.0.0.1/16`）を準備してください。  
- **主な目的**: 高バージョンのLinuxカーネル下でのi226 NICのASPM電力管理の競合とカーネルパニックの問題を解決し、安定した仮想化環境を構築すること。  
- **前提知識**: PCIe ASPM（特にL1サブステート）がIntel i226-V NICで有効になっていると、物理リンクのアップ/ダウンイベントやドライバのリロード、リンクの再交渉時にigcドライバでヌルポインタ逆参照が発生することがよくあります。これによりカーネルパニックやシステムフリーズが発生します。この解決策は「Debianベース + PVEカーネル」の展開モデルを採用し、Proxmoxカーネルを導入する前に電力管理とファームウェア環境を制約し、調整し、より高いハードウェア互換性と調整の柔軟性を実現します。

#### 主要操作手順

1. Debian 12.8をインストール: ネットワークインストールISO、ディスク全体使用、UEFIブート。  
2. ASPMを無効化: `/etc/default/grub`を編集し、`GRUB_CMDLINE_LINUX_DEFAULT`に`pcie_aspm=off`を追加し、`update-grub`を実行して再起動。  
3. 基本設定: 国内ミラーに切り替え、`firmware-intel-misc`をインストール; 一時的にIPを設定し、接続をテスト。  
4. Proxmox準備: `/etc/hosts`を設定し、ProxmoxのサブスクリプションなしリポジトリとGPGキーを追加。  
5. Proxmoxインストール: `apt install proxmox-ve postfix open-iscsi`を実行; `pve-firmware`に衝突があれば、`dpkg --force-overwrite`で強制インストールし、`apt install -f`で依存関係を修正。  
6. ブリッジネットワークの設定: `/etc/network/interfaces`を編集し、物理NIC（例: `enp1s0`）をブリッジ`vmbr0`に追加、静的IP/ゲートウェイを設定し、ネットワークを再起動。  
7. アクセス確認: 再起動後、`https://<IP>:8006`にアクセス。

### 2. 操作手順

以下のコマンドは、Debianシステムでrootまたはsudo権限を持つユーザーで実行します。

#### 2.1 Debianのインストールと作成

基盤となるシステムの安定性と管理可能性を確保するため、この解決策ではDebian 12.8を基盤として使用します。

1. **ソフトウェアリソースのダウンロード**  
   - Debian 12.8.0: [https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso](https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso)  
   - 書き込みツール balenaEtcher: [https://etcher.balena.io/](https://etcher.balena.io/)

2. **ブータブルUSBドライブの作成**  
   - 最低8GBのUSBドライブを挿入します。  
   - balenaEtcherを開き、ターゲットデバイスとしてUSBドライブを選択。  
   - 「Flash from file」をクリックし、ダウンロードした`debian-12.8.0-amd64-netinst.iso`を選択。  
   - 「Flash!」をクリックし、完了を待ってからUSBドライブを安全に取り出します。

3. **BIOSブート**  
   - 用意したUSBドライブをZimaBoardのUSBポートに挿入。  
   - 電源を入れ、**F11**キーを繰り返し押します（一部の機種ではESCやDeleteキーですが、ZimaBoard 2はF11がデフォルトです）。  
   - ブートメニューで、「UEFI」付きのUSBドライブのエントリを選択。

4. **インストール手順概要**  
   Debianの青いウェルカム画面に入った後、以下のガイドラインに従って進めます。  
   - インストールモード: **Graphical Install**を選択することを推奨（初心者に最適）。  
   - 言語と地域: 「English」または希望の言語を選択し、キーボードは「American English」を選択。  
   - ディスクのパーティション設定: **"Use entire disk"**を選択し、ZimaBoardの内蔵eMMCまたはインストール済みのSSDを選び、パーティションスキームは**"All files in one partition"**を選択。

#### 2.2 クリーンインストールされたDebianシステムでのNICのデバッグ

1. **PCIe先進電力管理（ASPM）の無効化**  
   ```bash
   nano /etc/default/grub
   ```
   以下の行を修正:
   ```
   GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pcie_aspm=off"
   ```
   保存して終了し、GRUBを更新して再起動:
   ```bash
   update-grub
   reboot
   ```

2. **より安定したDNSサーバへの切り替え（仮）**  
   ```bash
   nano /etc/resolv.conf
   ```
   以下を追加:
   ```
   nameserver 223.5.5.5
   nameserver 114.114.114.114
   ```

3. **ファームウェアのインストール**  
   ```bash
   # キャッシュのクリア
   rm -rf /var/lib/apt/lists/*
   # 更新してIntel NICファームウェアをインストール
   apt update
   apt install firmware-intel-misc -y
   ```

4. **NICインターフェースの一時的設定**  
   この例では、インターフェース名は`enp8s0`、ルーターアドレスは`10.0.0.1`です。  
   ```bash
   # 既存のIP設定をフラッシュ
   ip addr flush dev enp8s0
   # インターフェースを下げる
   ip link set enp8s0 down
   # IPアドレスとゲートウェイを設定
   ip addr add 10.0.1.100/16 dev enp8s0
   ip route add default via 10.0.0.1
   # インターフェースを上げる
   ip link set enp8s0 up
   ```

5. **接続確認**  
   ```bash
   ping -I enp8s