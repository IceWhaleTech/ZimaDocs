---
title: Proxmox VEにISOイメージを使用してZimaOSをインストールする
description: 
type: Docs
author: icewhale123456
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明で、記入しない場合は内容の最初の段落を切り取ります。
---
**ZimaOS ISOイメージ** の公式リリースにより、**Proxmox VE (PVE)** のような仮想化環境でZimaOSをより簡単にインストールして展開できるようになりました。  
このISOイメージは**仮想マシンインストール向けに最適化されており**、物理的なハードウェアなしでZimaOSを展開し、そのコア機能を迅速に探索できます。  
このインストール方法は、**テスト、学習、評価、および軽量な使用シナリオ**に最適です。

## はじめに
Proxmox VE (PVE) にZimaOSをインストールするということは、ZimaOSを物理ハードウェアに直接インストールするのではなく、**ISOイメージを使用して仮想マシンとして実行する**ということです。このアプローチにより、標準の仮想化環境内でZimaOSシステムとWebベースの管理インターフェースを体験できます。  
PVEにZimaOSを展開することで、既存のサーバーやホームラボで迅速に孤立したZimaOSインスタンスを作成できます。ベアメタルインストールと比較して、この方法にはいくつかの利点があります：
- より高速なセットアップと低い学習曲線
- 物理ハードウェアインストールに比べてリスクが低い
- スナップショットとバックアップによる環境の複製が簡単
- 柔軟なリソース割り当て（CPU、メモリ、ストレージ）
特に、**機能評価、ソリューション検証、および軽量サービス展開**に適しています。

---

## 必要条件
### ハードウェアおよび環境要件
- 動作しているアクセス可能なProxmox VE (PVE) 環境
- 仮想化サポートが有効なx86_64 CPU  
  推奨最小構成：
  - CPU: 2コア以上（4コア推奨）
  - メモリ: 4GB以上（8GB推奨）
  - ストレージ: 少なくとも32GBの空きディスクスペース

### ソフトウェアおよびシステム要件
- ZimaOS ISOインストールイメージ
- Proxmox VE 6.x / 7.x / 8.x / 9.x
- 仮想マシンブートモード: UEFI
- VM BIOSタイプ: OVMF（UEFI）

---

## インストール手順

{% note warn 注意: %}
 このチュートリアルに必要なZimaOS ISOイメージは、以下からダウンロードできます：
https://github.com/IceWhaleTech/ZimaOS/releases
{% endnote %}

### ZimaOS ISOイメージをアップロード
1. Proxmox VEのWebインターフェースにログイン
2. **local → ISO Images → Upload** に移動
![](https://manage.icewhale.io/api/static/docs/1767616598247_copyImage.png)
3. ダウンロードした**ZimaOS ISOイメージ**を選択し、**Upload**をクリック
![](https://manage.icewhale.io/api/static/docs/1767616612358_image.png)

### 仮想マシンを作成
1. **Create VM**ボタンをクリック
![](https://manage.icewhale.io/api/static/docs/1767616679913_image.png)
2. OSページでZimaOS ISOイメージを選択
![](https://manage.icewhale.io/api/static/docs/1767616694612_image.png)
3. システムページで：
  - BIOSをUEFIに設定
  - Add EFI Diskのチェックを外す
![](https://manage.icewhale.io/api/static/docs/1767616715004_image.png)
4. **CPU**ページで、CPUコアの数を調整

{% note warn  %} **目的**: より多くのCPUコアを割り当てることで、マルチスレッドのパフォーマンスが向上し、負荷時のスムーズな動作が確保されます。  
**推奨**: 4CPUコア以上
{% endnote %}

![](https://manage.icewhale.io/api/static/docs/1767616752746_image.png)
5. **Memory**ページで、メモリサイズを調整
{% note warn  %} **目的**: より多くのメモリを割り当てることで、ZimaOSは追加のサービスを実行でき、マルチタスクのパフォーマンスが向上し、頻繁な操作時の遅延を減らします。  
**推奨**: 8GB（8192MB）以上
{% endnote %}

![](https://manage.icewhale.io/api/static/docs/1767616800421_image.png)

### ZimaOSをインストール
1. 仮想マシンを作成した後、**Start**をクリック
![](https://manage.icewhale.io/api/static/docs/1767616824433_image.png)
2. **Console**をクリックしてVMコンソールを開く
![](https://manage.icewhale.io/api/static/docs/1767616843275_image.png)
3. `Enter`を押してZimaOSインストールプロセスを開始
![](https://manage.icewhale.io/api/static/docs/1767616860449_image.png)
4. `Install ZimaOS`を選択し、`Enter`を押す
![](https://manage.icewhale.io/api/static/docs/1767616872278_image.png)
5. インストール先のディスクを選択し、`Enter`を押す
![](https://manage.icewhale.io/api/static/docs/1767616901998_image.png)
6. 選択したディスクを確認し、`Yes`を選んで`Enter`を押す
![](https://manage.icewhale.io/api/static/docs/1767616916757_image.png)
7. 再度確認してインストールを進める
![](https://manage.icewhale.io/api/static/docs/1767616933805_image.png)
8. インストールが完了すると、完了画面が表示されます
![](https://manage.icewhale.io/api/static/docs/1767616945992_image.png)

---
### ISOイメージを削除
1. Proxmox VEインターフェースに戻る
2. 仮想マシンを選択し、**CD**を選択して**Edit**をクリック
![](https://manage.icewhale.io/api/static/docs/1767616981489_image.png)
3. **Do not use any media**を選択して**OK**をクリック
![](https://manage.icewhale.io/api/static/docs/1767616998638_image.png)
4. 変更後、設定が以下のように表示されます
![](https://manage.icewhale.io/api/static/docs/1767617011570_image.png)

---

### ZimaOSを起動してアクセス
1. ZimaOS仮想マシンを起動
2. ConsoleをクリックしてVMコンソールにアクセス
3. システムのブートが完了するまで待機
4. コンソールにIPアドレスが表示されます  
ブラウザを開き、IPアドレスを入力してZimaOSのWeb管理インターフェースにアクセスします。
![](https://manage.icewhale.io/api/static/docs/1767617057004_image.png)

---

## ZimaOSの探索を続ける

ZimaOSが仮想マシンで実行されているので、システムのセットアップ、ストレージ管理、アプリケーションの展開方法を自分のペースで探索できます。  
次のガイドでさらに学ぶことができます：

👉[ZimaOSの始め方](https://www.zimaspace.com/docs/zimaos/Get-Started)

このガイドを通じて、ZimaOS環境を最大限に活用するための次のステップを踏むことができます。
