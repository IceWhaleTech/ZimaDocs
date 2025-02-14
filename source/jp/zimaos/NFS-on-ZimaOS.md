以下是翻译后的内容：

---
title: ZimaOSでのNFSの使用方法
description: 
type: Docs
author: admin
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明です。入力しない場合、最初の段落の内容が自動的に使用されます。
---
ネットワークファイル共有プロトコルを使用すると、コンピューターのファイルやディレクトリをネットワーク上の他のデバイスと共有できます。一般的なプロトコルには、SAMBA、NFS、FTPがあります。  
ネットワーク共有の利点:
| **側面** | **USBコピー** | **メッセージアプリ** | **ネットワーク共有** |
| - | - | - | - |
| **ストレージ** | ローカルの複製 | 複数のコピー | **集中型、重複なし** |
| **管理** | 手動、エラーのリスク | チャットに分散 | **集中管理** |
| **メディア利用** | 完全なコピーが必要 | 完全にダウンロードする必要あり | **ストリーミング対応** |
| **コラボレーション** | 物理的な転送 | ファイルサイズ制限あり | **リアルタイムで複数アクセス** |

ZimaOSは現在、SAMBAのCLIおよびGUIサポートを提供しています。1.3.2以降のバージョンでは、NFS機能も統合されています（CLIレベル）。このチュートリアルでは、ZimaOSでNFSを使用してフォルダーを共有し、Windows、macOS、Ubuntuからアクセスする方法を示します。  
まず、共有用のフォルダーを作成または見つける必要があります。ここでは`/DATA/C/demo`を例として使用します。  
## 設定ファイルの編集  
`vi`を使用して`/etc/exports`ファイルを編集します。これはNFSの設定ファイルです。

```language
# 最初にZimaOSのウェブターミナルにアクセスし、root権限を取得する必要があります。
# ZimaOSダッシュボード -> 設定 -> 一般設定 
# -> 開発者モード -> ウェブベースのターミナル
# ログインしてrootに切り替え
sudo -i

# 設定ファイルを編集
vi /etc/exports

# /etc/exportsにこの行を貼り付け
/DATA/C/demo *(rw,sync,no_subtree_check)

# 最初の列は共有するフォルダ（例：/DATA/C/demo）を指定
# 2番目の列は以下を定義
    # アクセス権を持つサブネット
        # 例：10.0.0.0/8
        # * はすべてのネットワークからのアクセスを許可する
    # ネットワークユーザーに読み書きの権限を許可（rw）
    # 書き込み方法、通常はsyncかasync（この場合はsync）
    # no_subtree_checkはサブツリーの制限なしに共有ディレクトリへの完全アクセスを許可
# 詳細はこちらを参照：https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/5/html/deployment_guide/s1-nfs-server-config-exports#s1-nfs-server-config-exports
```
再起動後でも自動的に動作します。  
## 設定ファイルを有効にする  
```language
# 場合によっては、
# 設定を有効にするためにこのコマンドを実行する必要があります。
systemctl restart nfs-server

# または
exportfs -a
```
## NFSフォルダーの使用（マウント/アンマウント）  
### ZimaOS/Ubuntuでの使用
```language
# ZimaOS 1.3.2-beta2およびUbuntu 22.04.5 LTSでテスト済み
# クライアントマシンで
# ターミナルを開く
# 最初にrootに切り替え
# マウント用のディレクトリを作成
sudo -i
mkdir /mnt/demo

# NFSフォルダーをマウント
# このIPはサーバーのIP
mount 10.0.0.71:/DATA/C/demo /mnt/demo

# 共有を表示して使用できます

# いつかマウントを解除したい場合
# マウントされたフォルダーを確認
df -h
# または
mount | grep nfs

# NFSフォルダーをアンマウント
umount /mnt/demo
```
### macOSでの使用
```language
# M4チップ搭載のmacOS Sequoiaでテスト済み
# マウント用のディレクトリを作成
mkdir ~/demo

# NFSフォルダーをマウント
# sudoを使用してマウントする必要があります
# パスワードの入力を求められます
sudo mount -t nfs -o resvport 10.0.0.71:/DATA/C/demo ~/demo

# フォルダを開いて使用する
open .

# いつかマウントを解除したい場合
# マウントされたフォルダーを確認
df -h
# または
mount | grep nfs

# NFSフォルダーをアンマウント
sudo umount /mnt/demo
```
### Windowsでの使用
```language
# Windows 11でテスト済み
# 最初にCMDを入力する必要がある場合があります
# Windows 11ではデフォルトでPowershellにいることがあるため
cmd

# W: を空いている文字に変更する必要があります
mount \\10.0.0.71\DATA\C\demo W:

# 共有を表示して使用できます

# いつかマウントを解除したい場合
# マウントされたフォルダーを確認
net use

# NFSフォルダーをアンマウント
net use W: /delete
```
Windowsでのマウント後のスクリーンショット:
![](https://manage.icewhale.io/api/static/docs/1739500988306_image.png)
## 便利なコマンド  
以下は、さらに必要になるかもしれないコマンドです。
```language
# ZimaOSサーバー上で
# nfs-serviceの状態を確認
systemctl status nfs-server

# /etc/exportsの行を削除またはコメントアウトして共有を無効にする
# これを実行して設定を反映させる
exportfs -a
# または
systemctl restart nfs-server
```
使用中に問題が発生した場合は、お気軽にお知らせください。また、[コミュニティ](https://community.zimaspace.com/)や[Discord](https://discord.com/invite/uuNfKzG5)に参加して、NASやZimaOSについてさらに議論することもできます。フィードバックをお待ちしています！