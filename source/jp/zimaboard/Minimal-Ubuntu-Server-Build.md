---
title: ZimaBoard チュートリアル: Ubuntu LTS Minimal、ミラーリングディスク、Dockerエンジン
description: 
type: Docs
author: icewhale123456
tip: 上部のバーは固定形式で削除しないでください。descriptionは記事の説明で、記入しない場合は内容の最初の段落を切り取ります。
---

>This guide was originally created by **ZaNgA**. We gratefully acknowledge his contribution.

このチュートリアルでは、**ZimaBoard**をコンパクトで信頼性の高いホームラボまたはエッジサーバーとしてセットアップする方法を紹介します。

1. **最新のUbuntu LTS (Minimal)** をZimaBoardにインストール
2. `mdadm`を使用して、**2つのSATAディスクをRAID-1ミラー**として構成
3. **Dockerエンジン**をインストールして検証

このガイドは基本的なLinuxコマンドラインの知識を前提としており、**Ubuntu Server LTS**（最小限、GUIなし）を使用します。

---

## 1. 必要条件

### ハードウェア

* ZimaBoard（任意のモデル）
* USBキーボード + HDMIモニター **または** シリアル/SSHアクセス
* USBフラッシュドライブ（4GB以上）
* 2× SATAディスク（SSDまたはHDD、同じサイズを推奨）
* SATA電源およびデータケーブル（ZimaBoardに含まれている）

### ソフトウェア

* Ubuntu Server **最新LTS** ISO（最小限）
* イメージングツール: **Balena Etcher**、**Rufus**、または`dd`

---

## 2. Ubuntu Server LTS (Minimal) をダウンロード

1. Ubuntuの公式ダウンロードページにアクセス
2. **Ubuntu Server LTS**（例: 24.04 LTS）をダウンロード
3. 追加パッケージは不要 — サーバーISOはすでに最小限

---

## 3. ブート可能なUSBを作成

Linuxで:

```bash
sudo dd if=ubuntu-24.04-live-server-amd64.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

`/dev/sdX`をUSBデバイスに置き換えます。

Windows/macOSで:

* **Balena Etcher**または**Rufus**を使用

---

## 4. ZimaBoardにUbuntuをインストール

1. USBスティックをZimaBoardに挿入
2. 電源を入れて、**DEL**または**F7**を押してBIOSに入る
3. USBを最初のブートデバイスとして設定
4. 設定を保存して再起動

### インストーラーの選択肢

* 言語とキーボード: 任意
* ネットワーク: DHCP（デフォルト）
* プロキシ: 空白のまま
* ミラー: デフォルトのUbuntuミラー

### ストレージ設定（重要）

* **カスタムストレージレイアウト**を選択
* Ubuntuは**内部eMMC**にのみインストール
* **SATAディスクはまだフォーマットしない**

一般的なレイアウト:

* `/`はeMMC
* スワップなし（オプション）

インストールを進めて再起動します。

---

## 5. Ubuntu Proを有効化（無料プラン）

Ubuntu Proは、拡張セキュリティメンテナンス（ESM）および追加のハードニング機能を提供します。個人および小規模な使用には、**Ubuntu Proは最大5台のマシンまで無料**です。

### 5.1 無料のUbuntu Proトークンを取得

1. Ubuntu Proウェブサイトにアクセス
2. Ubuntu Oneアカウントでサインイン
3. **Ubuntu Proトークン**をコピー

---

### 5.2 Ubuntu Proをアタッチ

ZimaBoardで:

```bash
sudo pro attach <YOUR_TOKEN_HERE>
```

ステータスを確認:

```bash
pro status
```

`esm-infra`と`esm-apps`が有効になっていることを確認してください。

---

### 5.3 推奨サービスの有効化

```bash
sudo pro enable esm-infra esm-apps
```

オプション（サーバーに推奨）:

```bash
sudo pro enable livepatch
```

> Livepatchにより、再起動なしでカーネルのセキュリティ修正が可能になります。

---

### 5.4 システムを更新

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 6. ベースシステムを更新

ログインして更新:

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 7. SATAディスクを識別

ブロックデバイスのリスト:

```bash
lsblk -o NAME,SIZE,TYPE,MODEL
```

例:

```
sda   1.8T disk  Samsung_SSD
sdb   1.8T disk  Samsung_SSD
mmcblk0 32G disk eMMC
```

**/dev/sda**と**/dev/sdb**をミラーリングします。

---

## 8. RAIDツールをインストール

```bash
sudo apt install -y mdadm
```

インストール中に、RAIDアレイを自動的に開始するか尋ねられたら**Yes**を選択。

---

## 9. RAID-1ミラーを作成

### 既存の署名を消去（推奨）

```bash
sudo wipefs -a /dev/sda
sudo wipefs -a /dev/sdb
```

### アレイを作成

```bash
sudo mdadm --create /dev/md0 \
  --level=1 \
  --raid-devices=2 \
  /dev/sda /dev/sdb
```

同期進行状況を監視:

```bash
cat /proc/mdstat
```

---

## 10. ファイルシステムを作成

アレイをフォーマット（例: ext4）:

```bash
sudo mkfs.ext4 /dev/md0
```

マウントポイントを作成:

```bash
sudo mkdir -p /srv/data
```

マウント:

```bash
sudo mount /dev/md0 /srv/data
```

---

## 11. RAID設定を永続化

### mdadm設定を保存

```bash
sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf
sudo update-initramfs -u
```

### マウントを永続化

UUIDを取得:

```bash
blkid /dev/md0
```

`/etc/fstab`を編集:

```bash
sudo nano /etc/fstab
```

追加:

```
UUID=<uuid>  /srv/data  ext4  defaults,nofail  0  2
```

テスト:

```bash
sudo umount /srv/data
sudo mount -a
```

---

## 12. Dockerエンジンをインストール

### 依存関係をインストール

```bash
sudo apt install -y ca-certificates curl gnupg
```

### Docker GPGキーを追加

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

### Dockerリポジトリを追加

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Dockerをインストール

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## 13. インストール後のDocker設定

ユーザーがsudoなしでDockerを実行できるようにする:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Dockerをテスト:

```bash
docker run --rm hello-world
```

---

## 14. (オプション) Docker用にRAIDストレージを使用

コンテナとボリュームに推奨:

```bash
sudo systemctl stop docker
sudo mkdir -p /srv/data/docker
sudo rsync -aHAX /var/lib/docker/ /srv