---
title: ZimaBoardとBatocera.linuxで75インチ4Kアーケードマシンを作成
---
>**ストーリー:**
 まだまだ多くのレトロゲームがあり、それらの印象的な名前やスクリーンショットを1つずつ眺めることは、時間を遡ることのようです。自分の子供時代の情熱や欲望に戻るようなものです。このチュートリアルは、あなたの初期の頃に戻ることを目的としています。

**この文書を読んで、ZimaBoardの他の使い方や多様な使用方法についての概要を学びましょう。**
> **Batoceraを選ぶ理由：**
    - > **Batocera**は、私たちのZimaBoardを魅力的なレトロコンソールに変える最も簡単な方法の1つであり、複数のエミュレーターと数百のゲームを楽しむことができます。
    - > **Batocera**の利点の1つは、ZimaBoardや他の互換デバイスの内部ストレージメモリを変更しないことです。Batoceraを使用したくないときは、メモリまたはカードを取り外すことで、私たちのマシンは変更なしに元の状態に戻ります。試すことのできる[EmuELEC](https://androidpctv.com/、tutorial-emuelec-turns-your-android-tv-box-into-a-retro-console/)に似たシステムもあります。

# 1. [BATOCERA.LINUX](https://batocera.org/)とは？

![Batoceraを紹介](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera.png)

**[Batocera](https://batocera.org/)ソフトウェアは、Debianディストリビューションに基づいており、さまざまなマシンの数十のエミュレーターを整理してプレイするためにゲームのカバーやその他のエクストラを読み込むことを可能にするエミュレーターのグループです。これらのゲームをプレイするには、```ROMSまたはISO```が必要です。これらのシステムのいくつかは、エミュレートするためにマシンのBIOSイメージも必要とします。**

**Batoceraは、```Android```、```PC```、```MacOS```のあらゆる種類のコンピュータ、```Raspberry Pi```ボード、そして多くの**ポータブルレトロコンソール**をサポートしています…それらには専用のディストリビューションがあります。Batoceraのインストールは簡単で設定も簡単で、そのインターフェースは快適で使いやすく、サポートされているエミュレーターのリストは非常に豊富です。**

- 基本的にサポートされているエミュレーター: AMIGA, MSX, NES, SNES, GBA, MG, DREAMCAST, NDS, PS1, CPS1/2/3…
- 高性能ハードウェアのみサポート: PS2, PS3, GAMECUBE, 3DS, WII/U, SWITCH, XBOX…
- [Batoceraでエミュレートされているシステムの完全なリスト。](https://batocera.org/compatibility.php)
- [Batocera wiki](https://wiki.batocera.org/)

![Batoceraを紹介](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera2.png)

# 2.USBペンドライブまたはmicroSDにBatoceraをインストール

## 事前に準備すること

![Batocera Linux](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare.png)

![Batoceraを紹介](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare2.jpeg)

## Batoceraイメージの作成

**Batoceraをインストールするには、私たちのデバイス用の**IMG.GZ**ファイルが必要です。このファイルをダウンロードするには、Batoceraのウェブサイトにアクセスし、コンピュータに保存するだけです。その後、balenaEtcherソフトウェアを使用して、システムを変更せずに実行できるブートドライブを作成します。**

- **[BatoceraイメージファイルIMG.GZをダウンロード。](https://batocera.org/download)**
- **[イメージを焼くためのBalenaをダウンロード](https://www.balena.io/etcher)**
- **[Batocera用BIOSパックをダウンロード](https://github.com/Abdess/retroarch_system/releases/download/RetroArch-v1.9.13/Batocera_V33.zip)**

## Batocera用のブートドライブを作成

**必要なファイルをダウンロードしたら、Balenaプログラムを実行してこのシステムをブートするための```SDメモリまたはUSBドライブ```を生成できます。USBドライブでデバイスが動作しない場合は、SDカードを使用することをお勧めします。いずれにせよ、この方法で使用する場合は、できるだけ高速なドライブを用意する必要があります。**

**- ステップ1**

**できるだけ速い[マイクロSDカードまたはUSBドライブ](https://amzn.to/3tcdzSh)が必要です。最低でも16 GBとPCカードリーダーを用意します。**

**- ステップ2**

**Balenaを開き、「ファイルからフラッシュ」をクリックし、ダウンロードしたBatoceraを選択します。**

![Balenaetcherを開く](/images//Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

**- ステップ3**

**ブートするために必要な```SDメモリまたはUSBドライブ```を選択します。** 

![USBドライブを選択](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

**- ステップ4**

**変換を開始するためにホストパスワードを入力します。**

![USBドライブを選択](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

# 3.ZimaBoardを電源オン

## ZimaBoardの初回ブート

**ZimaBoardの電源がオフの状態で、Batocera用に準備した```SDカードまたはUSBドライブ```を挿入します。**

![ZimaBoardにUSBを接続](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-connect-usb.png)

**ブート中、長押ししてBIOSインターフェースに入ります。```Uディスクブート```を選択します。**

![USBディスクを選択するZimaBoardのブート](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-select-the-u-disk.jpeg)

**最後に、Batoceraインターフェースに入ります。**

![Batoceraに入る](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-enter-batocera.png)

# 4. Batoceraの使い方を始める

## 使用ルールの取り扱い

![Batoceraホットキー](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-in-game-batocera-hotkeys.png)

Batoceraはすべてのグリップに適しているわけではありませんが、マーケットに出回っている主流のグリップの使用ルールには合致しています。

## プレイ
**Batoceraには、自由に利用でき、法的に配布できる選択された```フリーROM - ゲーム```が同梱されています。**

![ZimaBoardでBatoceraをプレイ](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-play.jpeg)

# 5. その他の設定

**自分のROMやBIOSファイルを追加したい場合は、まずBatoceraにアクセスする必要があります。**

## ZimaBoardのIPアドレスを見つける 

**- ステップ1 スペースバーを押します。**

**- ステップ2 NETWORK SETTINGSを見つけて、Enterを押します。**

![Batocera設定ネットワーク](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings.jpeg)

**- ステップ3 IPアドレスを見つけます。**

![Batocera設定ネットワーク](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings1.jpeg)

**- ステップ4 コンピュータを使ってZimaBoardにリンクします。** 

![Batocera設定ネットワーク](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings2.jpeg)

**- ステップ5 フォルダに移動するためにConnectをクリックします。**

![Batocera設定ネットワーク](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings3.jpeg)

![Batocera設定ネットワークの画像](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings4.jpeg)

**- ステップ6 ダウンロードしたROMまたはBIOSを適切なフォルダに配置します。** 

詳細なドキュメンテーションについては、**[公式チュートリアル](https://wiki.batocera.org/add_games_bios)**を参照してください。

## 元のシステムでBatoceraを上書きする

**- ステップ1 スペースバーを押して、`SYSTEM SETTINGS`を探します。**

![Batoceraシステム](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings.jpeg)

**- ステップ2 `INSTALL BATOCERA ON A NEW DISK`を選択します。**

![Batoceraシステム](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings2.jpeg)

**- ステップ3 TARGET DEVICE `16 or 32G` TARGECT ARCHITECTUREを選択し、`X86_64`を選択、`ARE YOU SURE？`で`yes`を選択します。**

**最後に、`INSTALL`をクリックします。**

![Batoceraシステム](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings3.jpeg)

[![Discordカード](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)