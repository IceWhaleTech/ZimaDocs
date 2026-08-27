---
title: ZimaboardでのWake-on-LAN (WOL)の有効化方法
description: 
type: "Docs"
tip: トップバーの固定フォーマットは削除しないでください、descriptionは記事の説明です。未入力の場合は内容の最初の段落を切り取ります。
---
LAN Wake-on-LAN (WOL)は、特にZimaboardのようなSBS（シングルボードサーバー）を扱う場合において、システムやコンピュータの処理において非常に重要な部分です。
お客様のニーズに応えるために、当社のZimaboard製品は、WOLを標準でサポートしており、設定を有効にするだけで使用できます。
ZimaboardでのLAN Wake-on-LAN (WOL)をBIOSを通じて有効にするには、3つのステップがあります。
- 最初のステップはBIOSを通じてWOLを設定することです。
- 第二のステップは、システムサービスでWOLを有効にし、MACアドレスやその他の情報をメモすることです。
- 第三のステップは、適切なWakeOnLineソフトウェアをダウンロードし、新しいデバイスを設定することです。

以下に具体的な手順を示します：

### BIOS設定
1. システムの電源を入れ、**Delete**キーを押してBIOSに入ります。
2. キーボードの矢印キーを使用して**Advanced**タブに移動し、**Power Management Configuration**項目を選択します。**Wake on PME**オプションが**Enabled**に設定されていることを確認します。**F10**を押して設定を保存し、システムは自動的に再起動します。
   ![](https://manage.icewhale.io/api/static/docs/1730194172109_image.png)
   ![](https://manage.icewhale.io/api/static/docs/1730194187655_image.png)

### システムサービスの有効化

1. 私たちのZimaBoardはCasaOSシステムがプリインストールされています。ここでは、SSHツールを利用してコマンドラインを制御し、自分のユーザー名とパスワードを使用して接続します。
コマンド`ip a`を使用して、システム内のすべてのネットワークインターフェースとその状態を表示します。ネットワークインターフェース名は通常`eth0`、`enp2s0`、`wlan0`などの形式です。接続しているネットワークインターフェースに基づいて適切なインターフェース名を特定できます：
同時に、次のステップでWindowsのWakeMeOnLanを使用する際、正しいターゲットアドレスを使用することを確認してください。通常、ブロードキャストアドレスはサブネット全体のブロードキャストIPアドレスです。たとえば、ZimaBoardのIPアドレスが`10.0.192.211`である場合、ブロードキャストアドレスは`10.0.255.255`である必要があります。したがって、ブロードキャストアドレスにも注意が必要です。
![](https://manage.icewhale.io/api/static/docs/1730195494901_copyImage.jpeg)

2. 次のコマンドを実行してパッケージマネージャーを更新し、ethtoolツールをインストールします：
```
sudo apt update
sudo apt install ethtool
```

3. ここで有効にしたネットワークインターフェースは`enp3s0`です。デフォルトでは、ネットワークインターフェースのWOLは無効です。次のコマンドを使用してWOLが有効かどうかを確認できます：
```
sudo ethtool enp3s0
```
ここで`enp3s0`は有効にしたネットワークインターフェースの名前である必要があります。以下のように表示されるはずです。
![](https://manage.icewhale.io/api/static/docs/1730196409296_image.png)
`Wake-on: d`は現在WOLが無効であることを意味します。

4. Wake-on-LAN機能を有効にするには、次のコマンドを実行します：
```
sudo ethtool -s enp3s0 wol g
```
このコマンドはマジックパケット（g）を有効にし、ZimaBoardがマジックパケットで起動できるようにします。
このコマンドを実行した後、再度次のコマンドを使用してWOLが有効になっているか確認できます：
```
sudo ethtool enp3s0
```

| ![](https://manage.icewhale.io/api/static/docs/1730196776593_image.png) | ![](https://manage.icewhale.io/api/static/docs/1730196793376_image.png) |
| - | - |
| このコマンドを実行中 | `Wake-on`の状態が`g`に変わるはずで、WOLが正常に有効になったことを示します |


5. systemdを通じてスタートアップスクリプトを作成します
- システム起動時にethtoolコマンドを自動で実行してWOLを有効にするsystemdサービスを作成します。サービスは最もシンプルです。
- 新しいサービスファイルを作成します：
```
sudo nano /etc/systemd/system/wol.service
```
- ファイルに次の内容を入力します：
```
[Unit]
Description=Enable Wake-on-LAN on enp3s0

[Service]
Type=oneshot
ExecStart=/sbin/ethtool -s enp3s0 wol g

[Install]
WantedBy=multi-user.target
```
![](https://manage.icewhale.io/api/static/docs/1730197095005_image.png)
- `Ctel+O`を押して保存し、次に`Enter`を押し、`Ctrl+X`でファイルを閉じて、次のコマンドを使用してサービスを有効にします：
```
sudo systemctl enable wol.service
```

- システムを再起動し、Wake-on設定が`g`のままであるか確認します：
```
sudo systemctl start wol.service
```

上記の方法により、再起動後にWOL設定が自動的に有効になることが保証されます。

6. 成功したら、ウェブページでコンピュータをシャットダウンするか、`sudo shutdown now`を入力してコンピュータをシャットダウンします。
![](https://manage.icewhale.io/api/static/docs/1730197245860_image.png)

### Wake on LAN

**Windowsテスト**
1. [WakeMeOnLan](https://sourceforge.net/projects/wakemeonlan/)ソフトウェアをダウンロードします（もちろん、他にも多くの選択肢がありますが、ここではこのソフトウェアをテストに使用します）。
2. ソフトウェアを開き、ファイルの下にある`Add New Computer`をクリックします。
![](https://manage.icewhale.io/api/static/docs/1730197626956_image.png)
3. 前述のブロードキャストアドレスをIPアドレスに入力します。たとえば、ZimaBoardのIPアドレスが`10.0.192.211`である場合、ブロードキャストアドレスは`10.0.255.255`である必要があります。MACアドレスは通常通りに記入します。他の情報は記入しないでください。`OK`をクリックします。
4. 起こすデバイスを選択し、右上の`Wake Up Selected Computers`をクリックし、起動できるかどうか確認します。
![](https://manage.icewhale.io/api/static/docs/1730197821740_image.png)
{% note warn Tips %}
他のデバイス（Android、iOS、MacOSなど）でリモートウェイクアップが必要な場合は、関連するソフトウェアをオンラインで検索してください。基本的な手順はそれほど異ならないため、詳しくは触れません。あなたの成功を祈っています。
{% endnote %}