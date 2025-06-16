---
title: ZimaOSでのPi-holeデプロイメントガイド
description: 
type: Docs
author: icewhale123456
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明です。未入力の場合は、最初の段落の内容を切り取ります。
---
### はじめに
Pi-holeは、広告をブロックし、プライバシーを保護する強力なネットワークレベルのツールです。このチュートリアルでは、ZimaOS上にPi-holeをインストールし、設定する方法について説明します。これにより、家庭のネットワークがよりクリーンで効率的になります。

---
### 前提条件
- ZimaOSがインストールされたデバイス。
- ZimaOSのWebインターフェースまたはSSHにアクセスできること。
- ネットワークと管理者権限が設定されていること。

---
### ステップ 1: Docker Pi-holeのインストール
1. ZimaOSのWebインターフェースにアクセスします。
2. **App Store**に入り、Pi-holeを検索してインストールします。
![](https://manage.icewhale.io/api/static/docs/1734678654109_image.png)

3. 「インストール」をクリックします。
4. Pi-holeにログインする前に、アプリケーションの設定インターフェースをクリックし、パスワードを確認します（サンプルのパスワードは「your_password」）。

| ![](https://manage.icewhale.io/api/static/docs/1734678694677_image.png) | ![](https://manage.icewhale.io/api/static/docs/1734678703824_image.png) |
| - | - |

5. アプリケーションをクリックし、パスワードを入力してインターフェースにアクセスします。
![](https://manage.icewhale.io/api/static/docs/1734678749177_image.png)

![](https://manage.icewhale.io/api/static/docs/1734678754268_image.png)

---
### ステップ 2: ネットワークの設定
**2.1 ルーターのDNS設定の変更**
利点: ルーターのDNS設定を変更すると、ネットワーク内のすべてのデバイスがPi-holeを使用して広告を自動的にブロックするようになります。各デバイスを手動で設定する必要はありません。
1. ルーターの管理インターフェースにログインします。
2. ルーターのDNSサーバーのアドレスを、Pi-holeを実行しているZimaOSデバイスのローカルIPアドレスに設定します。
- 例: ZimaOSのローカルIPが`10.0.201.187`の場合、DNSサーバーのアドレスを`10.0.201.187`に設定します。

**2.2 クライアントデバイスのDNS設定を手動で設定**
- ネットワーク全体の設定を変更したくない場合は、単一のデバイスでカスタムDNSアドレスをZimaOSのIPに設定することができます。

**WindowsデバイスのDNS設定**
1. 設定ウィンドウで「その他のアダプターのオプション」を見つけ、編集をクリックします。
![](https://manage.icewhale.io/api/static/docs/1734679538566_image.png)

2. 「インターネットプロトコルバージョン4 (TCP/IPv4)」を見つけてダブルクリックします。
3. 以下の内容を入力します：
- 優先DNSサーバー: 10.0.201.187（Pi-holeサーバーのIP）。
- 代替DNSサーバー: 1.1.1.1（Cloudflare DNS）または8.8.8.8（Google DNS、バックアップ）。
![](https://manage.icewhale.io/api/static/docs/1734679557759_image.png)

4. 「OK」をクリックして設定を保存します。
ヒント: 広告ブロックが機能しない場合は、DNSキャッシュをクリアしてみてください：
コマンドプロンプトで次のコマンドを実行します：
```
ipconfig /flushdns
```

これにより、デバイスは新しいDNS設定を使用します。

---
### ステップ 3: 設定の最適化（オプション）
**3.1 より多くの広告フィルタリストを有効にする**
1. Pi-holeのダッシュボードで、「Adlists」に移動します。
![](https://manage.icewhale.io/api/static/docs/1734679945680_image.png)

2. さらに広告ブロックリストを追加します。例えば：
- [StevenBlack/hosts](https://github.com/StevenBlack/hosts)
- [oisd.nl](https://oisd.nl/)
コピーしたURLを「Address」に貼り付け、「comment」にコメントを入力し、「add」をクリックして追加します。
![](https://manage.icewhale.io/api/static/docs/1734680053090_image.png)

**3.2 DNSキャッシュとプライバシー強化の設定**
1. 設定 > DNS で、信頼できる上流DNSサーバー（例：CloudflareやGoogle）を選択します。
![](https://manage.icewhale.io/api/static/docs/1734680136362_image.png)

2. セキュリティ向上のためにDNSSECを有効にします。
![](https://manage.icewhale.io/api/static/docs/1734680141523_image.png)

---
### ステップ 4: 広告ブロックのテスト
1. 広告が多いウェブサイト（ニュースポータルなど）にアクセスします。
2. 広告が正常にブロックされているか確認します。
3. Pi-holeのダッシュボードで、ブロックされたリクエストの数を確認します。
![](https://manage.icewhale.io/api/static/docs/1734680159332_image.png)

---
### 結論
これで、ZimaOSにPi-holeを正常にデプロイしました。広告のないインターネット体験をお楽しみください！Pi-holeはネットワークの速度を向上させるだけでなく、プライバシーを保護します。必要に応じて設定を調整したり、さらに多くの機能を追加したりしてください。質問があれば、ぜひコミュニティでディスカッションしてください！

### よくある質問 (F&Q)
1. インストールをクリックして、ポートの競合を避けます。ポートを変更するだけです。
![](https://manage.icewhale.io/api/static/docs/1734680182479_image.png)

ポート10443は通常、Pi-holeのHTTPS管理インターフェースに使用されます。ポートを変更しても、Pi-holeのコアDNS機能には影響ありません。
ポート67を変更することはお勧めしません。DHCPサービスの正常な動作に影響を与え、クライアントが自動的にIPアドレスを取得できなくなるためです。ポート競合が発生した場合、最良の解決策は競合しているサービスを無効にすることです。
- まず、コマンドラインインターフェースでポート67を占有しているプロセスを見つけ、次のコマンドを使用します：
```
sudo ss -ulnp | grep :67
```

![](https://manage.icewhale.io/api/static/docs/1734680210741_image.png)

- 次のコマンドを使用して競合するプロセスを終了させ、インストールが成功することを確認します：
```
sudo kill -9 <PID>
```