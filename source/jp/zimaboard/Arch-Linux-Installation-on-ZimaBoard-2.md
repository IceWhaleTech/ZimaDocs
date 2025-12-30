---
title: 文章タイトル
description: 
type: Docs
author: admin
tip: 上部メタ情報を削除しないでください。descriptionは記事の説明で、未記入の場合は最初の段落が抜粋されます。
---
## 段落タイトル
## **I. 概要**

Arch Linux は、そのミニマルな設計、ローリングリリースモデル、および高いカスタマイズ性により、長年にわたり開発者や上級ユーザーに好まれてきました。

ZimaBoard 2 は x86 ベースのシングルボードサーバで、性能と拡張性のバランスが取れており、ホームサーバ、自家ホスティングサービス、開発やテスト環境で Arch Linux を展開するのに適したプラットフォームです。

本記事は ZimaBoard 2 に Arch Linux をインストールし、基本的なシステム設定を行うための完全な手順を示します。手順は明確で再現可能となるよう記載しており、このプラットフォームに初めて Arch Linux を導入するユーザー向けの実用的なリファレンスになります。

* * *

## **II. 準備**

1.  ### ハードウェアチェックリスト
    

*   **ZimaBoard 2 本体**
*   > ⚠️ 本ガイドではシステムをオンボード eMMC にインストールします。インストール中に eMMC のパーティション作成とフォーマットが行われます。重要なデータが保存されていないことを必ず確認してください。
+>

*   **HDMI モニタ + USB キーボード**
    

 *   **USB フラッシュドライブ（≥ 8 GB）**（インストーラー起動用）

 *   >⚠️ ブートメディア作成時に USB ドライブはフォーマットされ、既存のデータは消去されます。重要なファイルは事前にバックアップしてください。
+>    

*   **有線ネットワーク接続**（推奨。インストール中にインターネット接続が必要です）
    
2.  ### ソフトウェア準備
    

* **ブート用 USB を作成するための PC**（Windows、macOS、または Linux）
    
*   [\- 公式 Arch Linux ISO イメージ (2025.12.01)](https://archlinux.org/download/)
    
*   **ブータブル USB 作成ツール**（いずれかを選択）：
    
    *   **balenaEtcher**（クロスプラットフォーム、GUI、推奨）
        
    *   **Rufus**（Windows 向け）
        

* * *

## **III. ブータブル USB の作成（balenaEtcher を例に）**

![balenaEtcher burning process](https://manage.icewhale.io/api/static/docs/1766567149666_copyImage.png)

> ⚠️ ブータブル USB を作成するとフラッシュドライブがフォーマットされ、既存データは消去されます。重要なファイルは事前にバックアップしてください。

1. USB フラッシュドライブを差し込みます。 
    
2. **balenaEtcher** を起動します。
    
3. **“Flash from file”** をクリックし、ダウンロードした `archlinux-2025.12.01-x86_64.iso` を選択します。
    
4. **“Select target”** をクリックして USB ドライブを選択します（誤ったデバイスを選ばないよう注意）。
    
5. **“Flash!”** をクリックし、書き込みが完了するまで待ちます。
    
6. USB ドライブを安全に取り外します。
    

![balenaEtcher burning complete](https://manage.icewhale.io/api/static/docs/1766567150367_copyImage.png)  

* * *

## **IV. ZimaBoard 2 を USB から起動する**

1. 作成した Arch Linux ブータブル USB を ZimaBoard 2 の USB ポートに挿入します。
    
2. HDMI モニタ、キーボード、イーサネットケーブルを接続します。
    
3. 電源を入れます。**ZIMA** ロゴが表示されたら、**F11** を繰り返し押して **Boot Menu** に入ります。
    
4. 矢印キーで USB ドライブを選択します。
    
5. **Enter** を押して USB から起動します。
    

![boot options](https://manage.icewhale.io/api/static/docs/1766567151194_copyImage.png)

* * *

## **V. インストール環境に入り初期設定を行う**

1.  ### Arch Linux インストール環境へのブート
    
ブートメニューで最初の項目を選択します：

    Arch Linux install medium (x86_64)

![arch startup options](https://manage.icewhale.io/api/static/docs/1766567151645_copyImage.png)

ブートが完了すると root シェルに入ります：

    root@archiso ~ #

![
Arch installation environment](https://manage.icewhale.io/api/static/docs/1766567152384_copyImage.png)

これで Arch Linux のインストール環境に入っています。

* * *

2.  ### ネットワークインターフェースの確認
    
まず、システムがネットワークインターフェースを検出しているか確認します：

    ip link

`enp*` のようなインターフェースが表示されれば、ネットワークインターフェースは正常に認識されています。

* * *

3.  ### ネットワーク接続のテスト
    
次にネット接続をテストします：

    ping archlinux.org

ping が成功すればネット接続は正常です。テストを停止するには `Ctrl + C` を押します。

![Network connectivity test](https://manage.icewhale.io/api/static/docs/1766567153730_copyImage.png)

* * *

4.  ### システム時刻の同期
    
インストールを進める前に、NTP を有効にして正しい時刻に同期しておくことを推奨します。

NTP を有効にするコマンド：

    timedatectl set-ntp true

同期状態を確認するには：

    timedatectl

時刻が正しく表示されていれば同期は完了しています。

![Synchronize system time](https://manage.icewhale.io/api/static/docs/1766567154188_copyImage.png)

* * *

5.  ### ディスクのパーティショニング（GPT）
    
本ガイドではシステムを **オンボード eMMC デバイス** にインストールする前提です。

> ⚠️ インストール手順はオンボード eMMC のパーティション作成とフォーマットを行います。重要なデータが eMMC に含まれていないことを事前に必ず確認してください。

* * *

#### ディスク情報の表示

    lsblk

上記コマンドでディスクとパーティションをツリー形式で確認します：

![View disk information](https://manage.icewhale.io/api/static/docs/1766567155139_copyImage.png)

#### `cfdisk` で GPT パーティションテーブルを作成する

##### パーティションツールを起動：

    cfdisk /dev/mmcblk0

![Enter the partition tool](https://manage.icewhale.io/api/static/docs/1766567156058_copyImage.png)

##### パーティションテーブルの種類を選択

初回起動時にパーティションテーブルの種類を選択するよう求められます。`GPT` を選択してください。

![Select partition table type](https://manage.icewhale.io/api/static/docs/1766567156700_copyImage.png)

##### 最初のパーティションを作成（EFI システムパーティション）

###### ① 新規パーティション作成

`cfdisk` のメイン画面で以下を操作します：

1. **→（右矢印）** を使用
2. 画面下部メニューで **[NEW]** を選択

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567157176_copyImage.png)

3. **Enter** を押して新規パーティションを作成します。
    

###### ② パーティションサイズを指定

サイズ入力を求められたら `512M` を入力します。

![Input 512M](https://manage.icewhale.io/api/static/docs/1766567157797_copyImage.png)

その後 **Enter** を押します。

###### ③ パーティションタイプの設定

新しいパーティションが作成されたら：

1. そのパーティションが選択されていることを確認
2. **→（右矢印）** で下部メニューへ移動
3. **[Type]** を選択
4. **Enter** を押す

![View partition type](https://manage.icewhale.io/api/static/docs/1766567158616_copyImage.png)

###### ④ EFI システムタイプを選ぶ

パーティションタイプ一覧から **EFI System** を見つけ、**Enter** で確定します。

![Select partition type](https://manage.icewhale.io/api/static/docs/1766567159383_copyImage.png)

###### ⑤ 結果の確認

メイン画面に戻ると次のようなエントリが表示されるはずです：

`/dev/mmcblk0p1 512M EFI System`

![Confirm partition results](https://manage.icewhale.io/api/static/docs/1766567160155_copyImage.png)

* * *

##### 2 番目のパーティションを作成（スワップ）

###### ① 空き領域を選択

**↓** を使って `Free space 28.6G` を選択します。

###### ② 新規パーティション作成

* **→（右矢印）** を使い下部メニューへ移動
* **[NEW]** を選択
* **Enter** を押す

###### ③ サイズ指定

サイズ入力で `2G` を入力します。

![Enter 2G](https://manage.icewhale.io/api/static/docs/1766567161097_copyImage.png)

###### ④ タイプを Linux swap に設定

* 作成された約 2 GB のパーティションを選択
* **[Type]** を選ぶ
* **Linux swap** を指定

![Set the partition type to Linux swap.](https://manage.icewhale.io/api/static/docs/1766567162104_copyImage.png)

* * *

##### 3 番目のパーティションを作成（ルート）

###### ① 残りの空き領域を選択

`Free space 26.6G` が表示されているはずです。これを選択します。

![Create the third partition (Root).](https://manage.icewhale.io/api/static/docs/1766567162844_copyImage.png)

###### ② 新規パーティション作成

* **→（右矢印）** を使って下部メニューへ移動
* **[NEW]** を選択
* **Enter** を押す

![
Select the 3rd partition (Root).](https://manage.icewhale.io/api/static/docs/1766567163775_copyImage.png)

###### ③ 残り全てを使用

サイズ指定を求められたら何も入力せず **Enter** を押し、残り全領域を使用します。

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567164682_copyImage.png)

###### ④ パーティションタイプの設定

作成後のデフォルトタイプは **Linux filesystem** です。通常は変更せずにそのままにします。

![Default partition type](https://manage.icewhale.io/api/static/docs/1766567165509_copyImage.png)

* * *

##### パーティションテーブルを書き込み、終了する

###### 書き込み

* **[Write]** を選択

![Write to partition table](https://manage.icewhale.io/api/static/docs/1766567166450_copyImage.png)

* **Enter** を押す
* 確認プロンプトで `yes` を入力

![Confirm writing](https://manage.icewhale.io/api/static/docs/1766567167219_copyImage.png)  

###### `cfdisk` を終了

* **[Quit]** を選択

![Exit cfdisk](https://manage.icewhale.io/api/static/docs/1766567168020_copyImage.png)

* **Enter** を押す

* * *

##### パーティション概要

これでディスクのパーティショニングが完了しました。レイアウトは次の通りです：

| Size |Partition | type |
| - | - | - |
| mmcblk0p1| 512M | EFI System |
| mmcblk0p2 | 2G | Linux swap |
| mmcblk0p3 | 26.6G | Linux filesystem |

![Partition completed](https://manage.icewhale.io/api/static/docs/1766567168969_copyImage.png)

ここまでで、Arch Linux インストール中の最もミスが起きやすい工程を完了したことになります。

* * *

6.  ### パーティションのフォーマット
    
簡単な説明：

* **フォーマット（Formatting）** = パーティションを初期化してファイルシステムを作成すること
* **マウント（Mounting）** = システムにそのパーティションの使用方法を教えること

* * *

#### ① EFI パーティションを FAT32 でフォーマット

次のコマンドで `mmcblk0p1` をフォーマットします：

    mkfs.fat -F32 /dev/mmcblk0p1

![Format partition](https://manage.icewhale.io/api/static/docs/1766567169740_copyImage.png)

#### ② スワップ領域の初期化と有効化

    mkswap /dev/mmcblk0p2
    swapon /dev/mmcblk0p2

![Initialize and enable partitions](https://manage.icewhale.io/api/static/docs/1766567170625_copyImage.png)

#### ③ ルートパーティションを ext4 でフォーマット

    mkfs.ext4 /dev/mmcblk0p3

![Format root partition](https://manage.icewhale.io/api/static/docs/1766567171361_copyImage.png)

* * *

7.  ### パーティションのマウント
    
#### ルートパーティションを `/mnt` にマウント

    mount /dev/mmcblk0p3 /mnt

#### EFI パーティションを作成してマウント

    mkdir /mnt/boot
    mount /dev/mmcblk0p1 /mnt/boot

![Create and mount the EFI partition](https://manage.icewhale.io/api/static/docs/1766567172129_copyImage.png)

* * *

## VI. Arch Linux のインストール（pacstrap）

1.  ### `pacstrap` を実行
    
    pacstrap /mnt base linux linux-firmware networkmanager sudo vim

**パラメータ説明（参考）：**

* **base**：最小限の Arch Linux システム
* **linux**：標準の Linux カーネル
* **linux-firmware**：ハードウェア用ファームウェア（必須）
* **networkmanager**：ネットワーク管理ツール
* **sudo**：root 以外のユーザーに権限を付与するため
* **vim**：後続の設定で使用するテキストエディタ

このステップではパッケージのダウンロードとインストールが行われます。所要時間はネットワーク速度に依存し、処理中は大量の出力が表示されるのが通常です。

![Execute pacstrap](https://manage.icewhale.io/api/static/docs/1766567172894_copyImage.png)

![pacstrap execution complete](https://manage.icewhale.io/api/static/docs/1766567174214_copyImage.png)

* * *

2.  ### `fstab` ファイルの生成
    
新システム用のファイルシステムマウント表を生成します：

    genfstab -U /mnt >> /mnt/etc/fstab

![Generate fstab file](https://manage.icewhale.io/api/static/docs/1766567175220_copyImage.png)

* * *

3.  ### 新しくインストールしたシステムに入る（chroot）
    
* 新システムの環境へ切り替えます：

`arch-chroot /mnt`

* 切り替えに成功すると、プロンプトが次のように変わります：

`[root@arch /]#`

**これによりインストール環境を抜け、新しくインストールした Arch Linux システム内に入ったことを示します。**

![Enter the newly installed system (chroot)](https://manage.icewhale.io/api/static/docs/1766567175932_copyImage.png)

* * *

## VII. 基本的なシステム設定

1.  ### タイムゾーンの設定
    
香港を例に：

    ln -sf /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime

ハードウェアクロックを同期（非常に重要）：

    hwclock --systohc

![Synchronizing hardware clock](https://manage.icewhale.io/api/static/docs/1766567176716_copyImage.png)

動作確認（任意）：

時刻が **UTC+8（香港時間）** と表示されれば設定は成功しています。

![Hardware clock synchronization successful](https://manage.icewhale.io/api/static/docs/1766567177777_copyImage.png)

* * *

2.  ### ロケール（言語）の設定
    
#### ① locale リストの編集

ロケール設定ファイルを開きます：

    vim /etc/locale.gen

![Set language](https://manage.icewhale.io/api/static/docs/1766567178733_copyImage.png)

希望する言語の行の先頭にある `#` を外してコメントを解除します。例：英語（米国）の場合：

    en_US.UTF-8 UTF-8

![Set language en_US](https://manage.icewhale.io/api/static/docs/1766567179497_copyImage.png)

保存して終了：

* **Esc** を押す
* `:wq` を入力
* **Enter** を押す

#### ② ロケールを生成

    locale-gen

![Generate locale](https://manage.icewhale.io/api/static/docs/1766567180239_copyImage.png)  

3.  ### ホスト名の設定
    
システムのホスト名を設定します。任意の名前に変更可能ですが、ここでは例として `arch` を使用します。

    echo "arch" > /etc/hostname

![Set system hostname](https://manage.icewhale.io/api/static/docs/1766567180931_copyImage.png)

続いて `hosts` ファイルを設定します：

    vim /etc/hosts

![vim hosts](https://manage.icewhale.io/api/static/docs/1766567181830_copyImage.png)

ファイルの内容を次のように編集してください：

    127.0.0.1   localhost
    ::1         localhost
    127.0.1.1   arch.localdomain arch

![hosts example](https://manage.icewhale.io/api/static/docs/1766567182309_copyImage.png)

⚠️ ホスト名が `arch` でない場合は、上記の `arch` を実際に設定したホスト名に置き換えてください。

保存して終了：

* **Esc** を押す
* `:wq` を入力
* **Enter** を押す

* * *

4.  ### root パスワードの設定
    
`root` ユーザーのログインパスワードを設定します：

    passwd

システムはパスワードを 2 回入力するよう促します：

1. 新しいパスワードを入力
2. 確認のため再度入力

⚠️ パスワード入力中は端末に何も表示されません（`*` も表示されません）。これは正常です。両方の入力が一致していることを確認してください。

完了後、そのパスワードで `root` としてログインできます。

![Set root password](https://manage.icewhale.io/api/static/docs/1766567182798_copyImage.png)

* * *

5.  ### ネットワークサービスの有効化
    
NetworkManager を起動時に自動実行するよう有効化します：

    systemctl enable NetworkManager

![Enable network services](https://manage.icewhale.io/api/static/docs/1766567183538_copyImage.png)

![Network service enabled successfully](https://manage.icewhale.io/api/static/docs/1766567184534_copyImage.png)

* * *

## VIII. systemd-boot ブートローダのインストールと設定

1.  ### systemd-boot のインストール
    
次のコマンドを実行します：

    bootctl install

![Install systemd-boot](https://manage.icewhale.io/api/static/docs/1766567185486_copyImage.png)

* * *

2.  ### Arch Linux のブートエントリを作成
    
次のファイルを作成する必要があります：

`/boot/loader/entries/arch.conf`

このファイルは systemd-boot に対して次の情報を伝えます：

* カーネルの場所
* initramfs の場所
* ルートファイルシステムのあるパーティション

#### ① ルートパーティションの PARTUUID を取得

    blkid /dev/mmcblk0p3

次のような出力が得られるはずです：

    /dev/mmcblk0p3: PARTUUID="12345678-9abc-def0-1234-56789abcdef0"

> 引用符内の値をメモしてコピーしてください。

![Write down PARTUUID.](https://manage.icewhale.io/api/static/docs/1766567186422_copyImage.png)

* * *

#### ② ブートエントリ設定ファイルを作成

    vi /boot/loader/entries/arch.conf

![Create startup configuration file](https://manage.icewhale.io/api/static/docs/1766567187080_copyImage.png)

挿入モードに入り（`i` を押す）、以下の内容を入力します：

⚠️ `YOUR_PARTUUID` を前の手順で取得した実際の値に置き換えてください。

    title   Arch Linux
    linux   /vmlinuz-linux
    initrd  /initramfs-linux.img
    options root=PARTUUID=YOUR_PARTUUID rw

![arch.conf example](https://manage.icewhale.io/api/static/docs/1766567187556_copyImage.png)

保存して終了：

* **Esc** を押す
* `:wq` を入力
* **Enter** を押す

* * *

## IX. インストールの完了と再起動

### chroot からの退出

chroot 環境を終了します：`exit`

![Exit the chroot environment](https://manage.icewhale.io/api/static/docs/1766567188512_copyImage.png)

### システムの再起動

`reboot`

> ⚠️ 再起動する前にインストールメディア（USB ドライブ / ISO）を必ず取り外してください。

![Restart the system](https://manage.icewhale.io/api/static/docs/1766567189421_copyImage.png)

* * *

### インストール完了

正常に起動すると、次のような画面が表示されるはずです：

![Installation completed](https://manage.icewhale.io/api/static/docs/1766567190046_copyImage.png)

🎉 以上で **Arch Linux** の基本インストールは完了です。システムはクリーンで拡張可能な出発点になります。

### 次に検討する事項：

* ネットワークの追加設定
* デスクトップ環境の導入

さらなる案内は公式 Arch Wiki を参照してください：[https://wiki.archlinux.org/title/General\_recommendations](https://wiki.archlinux.org/title/General_recommendations)

この基盤の上に必要な設定を順次構築していけます。
