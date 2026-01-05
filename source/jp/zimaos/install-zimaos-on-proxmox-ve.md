---
title: Proxmox VEにZimaOSをISOイメージを使用してインストールする方法
description: 
type: Docs
author: icewhale123456
tip: トップバーのフォーマットは固定されていますので、削除しないでください。descriptionは記事の説明です。記入しない場合は、記事の最初の段落を引用します。
---
**ZimaOS ISOイメージ**の公式リリースにより、**Proxmox VE (PVE)**のような仮想化環境にZimaOSをより簡単にインストールして展開できるようになりました。このISOイメージは**仮想マシンのインストールに特化して最適化**されており、物理的なハードウェアなしでZimaOSを展開し、その主要な機能を迅速に探索できます。このインストール方法は**テスト、学習、評価、軽量使用シナリオ**に最適です。

## はじめに
Proxmox VE（PVE）にZimaOSをインストールすることは、物理的なハードウェアに直接インストールするのではなく、**ISOイメージを使用して仮想マシンとしてZimaOSを実行**することを意味します。このアプローチにより、標準的な仮想化環境内でZimaOSのシステムとWebベースの管理インターフェースを体験できます。
ZimaOSをPVEに展開することで、既存のサーバーやホームラボに迅速にZimaOSインスタンスを作成できます。ベアメタルインストールと比較して、この方法にはいくつかの利点があります：
- より高速なセットアップと学習曲線の短縮
- 物理ハードウェアへのインストールに比べてリスクが低い
- スナップショットとバックアップを使用した簡単な環境複製
- 柔軟なリソース割り当て（CPU、メモリ、ストレージ）
特に**機能評価、ソリューションの検証、軽量サービスの展開**に適しています。
---

## 要件
### ハードウェアおよび環境要件
- 稼働中でアクセス可能なProxmox VE (PVE) 環境
- 仮想化サポートが有効なx86_64 CPU
推奨される最小構成：
- CPU：2コア以上（推奨4コア）
- メモリ：4GB以上（推奨8GB）
- ストレージ：少なくとも32GBの空きディスク容量

### ソフトウェアおよびシステム要件
- ZimaOS ISOインストールイメージ
- Proxmox VE 6.x / 7.x / 8.x / 9.x
- 仮想マシンの起動モード：UEFI
- VM BIOSタイプ：OVMF（UEFI）

---
## インストール手順
注意：
このチュートリアルに必要なZimaOS ISOイメージは、以下からダウンロードできます：
https://github.com/IceWhaleTech/ZimaOS/releases

### ZimaOS ISOイメージをアップロードする
1. Proxmox VEのWebインターフェースにログインします
2. **local → ISO Images → Upload** に移動します
![](https://manage.icewhale.io/api/static/docs/1767616598247_copyImage.png)
3. ダウンロードした**ZimaOS ISOイメージ**を選択し、**Upload**をクリックします
![](https://manage.icewhale.io/api/static/docs/1767616612358_image.png)

### 仮想マシンを作成する
1. **Create VM**ボタンをクリックします
![](https://manage.icewhale.io/api/static/docs/1767616679913_image.png)
2. **OS**ページで、ZimaOS ISOイメージを選択します
![](https://manage.icewhale.io/api/static/docs/1767616694612_image.png)
3. **System**ページで：
   - BIOSをUEFIに設定します
   - Add EFI Diskのチェックを外します
![](https://manage.icewhale.io/api/static/docs/1767616715004_image.png)
4. **CPU**ページで、CPUコア数を調整します  
**目的**：  
より多くのCPUコアを割り当てることで、マルチスレッド性能が向上し、負荷時のスムーズな操作が確保されます。  
**推奨**：4CPUコア以上
![](https://manage.icewhale.io/api/static/docs/1767616752746_image.png)
5. **Memory**ページで、メモリサイズを調整します  
**目的**：  
より多くのメモリがあれば、ZimaOSは追加のサービスを実行でき、マルチタスク性能が向上し、頻繁な操作時の遅延を減らすことができます。  
**推奨**：8GB（8192MB）以上
![](https://manage.icewhale.io/api/static/docs/1767616800421_image.png)

### ZimaOSをインストールする
1. 仮想マシン作成後、**Start**をクリックします
![](https://manage.icewhale.io/api/static/docs/1767616824433_image.png)
2. **Console**をクリックして、VMのコンソールを開きます
![](https://manage.icewhale.io/api/static/docs/1767616843275_image.png)
3. **Enter**を押して、ZimaOSのインストールプロセスを開始します
![](https://manage.icewhale.io/api/static/docs/1767616860449_image.png)
4. **Install ZimaOS**を選択し、**Enter**を押します
![](https://manage.icewhale.io/api/static/docs/1767616872278_image.png)
5. インストール先のディスクを選択し、**Enter**を押します
![](https://manage.icewhale.io/api/static/docs/1767616901998_image.png)
6. 選択したディスクを確認し、Yesを選択して**Enter**を押します
![](https://manage.icewhale.io/api/static/docs/1767616916757_image.png)
7. インストールを進めるためにもう一度確認を求められたら、**Enter**を押します
![](https://manage.icewhale.io/api/static/docs/1767616933805_image.png)
8. インストールが完了すると、完了画面が表示されます
![](https://manage.icewhale.io/api/static/docs/1767616945992_image.png)

---
### ISOイメージを取り外す
1. Proxmox VEインターフェースに戻ります
2. 仮想マシンを選択し、**CD**を選んで**Edit**をクリックします
![](https://manage.icewhale.io/api/static/docs/1767616981489_image.png)
3. **Do not use any media**を選択し、**OK**をクリックします
![](https://manage.icewhale.io/api/static/docs/1767616998638_image.png)
4. 変更後、構成が以下のように表示されます
![](https://manage.icewhale.io/api/static/docs/1767617011570_image.png)

---

### ZimaOSを起動してアクセスする
1. ZimaOS仮想マシンを起動します
2. **Console**をクリックしてVMのコンソールにアクセスします
3. システムの起動が完了するまで待機します
4. IPアドレスがコンソールに表示されます
Webブラウザを開き、IPアドレスを入力してZimaOSのWeb管理インターフェースにアクセスします。
![](https://manage.icewhale.io/api/static/docs/1767617057004_image.png)

---

## ZimaOSの探索を続ける

ZimaOSが仮想マシンで実行されているので、引き続きその機能やワークフローを自分のペースで探索できます。  
システムセットアップ、ストレージ管理、アプリケーションの展開を始める方法については、以下のガイドをご覧ください：

👉 **[ZimaOSの開始方法](https://www.zimaspace.com/docs/zimaos/Get-Started)**

このガイドは、次のステップを進め、ZimaOS環境を最大限に活用する手助けをします。
