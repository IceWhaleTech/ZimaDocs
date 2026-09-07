---
title: ZimaOS の機能
seo_title: "ZimaOS の機能：リモートアクセス、ストレージ、RAID、App Store"
description: "ZimaOS ダッシュボードのツアー。リモートアクセス、ファイル共有、ストレージ管理、RAID オプション、仮想マシン、Docker アプリをワンクリックでインストールできる App Store を紹介します。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

**[スタートガイド](./get-started "ZimaClient とアカウント作成を使用して、初回起動から ZimaOS をセットアップする")**を終えたばかりなら、デバイスはオンラインになり、準備が整っています。リモートアクセスが開通し、ストレージが共有され、アカウントも設定済みです。ダッシュボードのすべてが初めてつながる瞬間には、確かな満足感があります。

ここでは ZimaOS でできることと、各機能の詳しいガイドを紹介します。このページを地図だと考えてください。気になるものがあれば、リンクをたどって詳しく確認できます。

## どこからでもデバイスにアクセス

多くの NAS では、自宅の外から接続するためにポート転送や VPN の設定が必要です。ZimaOS では必要ありません。ZimaClient で初めて接続すると、暗号化されたピアツーピアチャネルが自動的に作成されます。それ以降は、どこからでもデバイスにアクセスできます。

データのプライバシーは守られます。接続はエンドツーエンドで暗号化され、途中に第三者のサーバーはありません。リモートアクセスは、いつでも設定から無効にできます。

当社がお客様の個人ファイル、接続ログ、利用データを収集、保存、閲覧することはありません。リモートアクセスは暗号化されたピアツーピアチャネルで動作し、お客様とデバイスの間に第三者のサーバーは存在しません。当社のプライバシーに関する取り組みはすべて文書化され、コミュニティが確認できるよう公開されています。

**[プライバシーポリシー](../help-center/privacy-policy "データと接続の取り扱いに関する ZimaOS のプライバシーポリシー")**

<table style="width:100%; table-layout:fixed;">
  <tr>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885802_zimaclient-ios-v-1-6-dash.png" alt="デバイスの状態、ストレージ使用量、システム情報を表示する ZimaClient iOS のダッシュボード画面" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885801_zimaclient-ios-v-1-6-files.png" alt="ホームサーバー上の共有フォルダーとファイルを一覧表示する ZimaClient iOS のファイル画面" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885803_zimaclient-ios-v-1-6-app.png" alt="インストール済みアプリと実行状態を表示する ZimaClient iOS のアプリ画面" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885804_zimaclient-ios-v-1-6-photos.png" alt="ホームサーバーから同期された写真ライブラリを表示する ZimaClient iOS の写真画面" style="max-width:100%; height:auto;">
    </td>
  </tr>
</table>

**[リモートアクセス](./remote-access "どこからでもホームサーバーにアクセスできるようリモートアクセスを設定する")** · **[ZimaClient をダウンロード](./zimaclient-install "デバイスへのアクセス用にデスクトップとモバイルで ZimaClient をインストールして設定する")**

## ファイルを保存、共有、保護

ストレージの設定方法は、デバイスの用途によって異なります。

ほとんどの家庭では、同じドライブ 2 台による RAID 1 から始めることをおすすめします。データは両方のドライブにミラーリングされるため、片方が故障しても失われません。ファイルは家中の各コンピューターの Finder やエクスプローラーに表示され、クラウドストレージのようなアップロード待ちや月額料金もありません。重要なファイルのオフサイトコピーも必要な場合は、Files アプリを Google Drive、Dropbox、OneDrive に接続して、必要なものだけをバックアップできます。

音楽、写真、動画はデバイスからネットワーク上のどの画面にも直接ストリーミングされます。さらに保護を強化するため、Files アプリから重要なフォルダーだけを Google Drive、Dropbox、OneDrive にバックアップできます。

![ディスク一覧と、ドライブを組み合わせて RAID ストレージを作成するオプションを表示する ZimaOS のストレージ設定ページ](https://manage.icewhale.io/api/static/docs/1786262061523_zimaos-storage-settings.png)

小規模事業を運営している場合や、かけがえのない家族の記録を保存している場合、RAID 5 なら 1 台のドライブ故障に備えながら、より多くの使用可能容量を確保できます。3 台から始め、後で追加できます。故障したディスクを交換している間もデータはオンラインのままです。ZimaOS はほかの用途向けに RAID 0、RAID 1、RAID 6 にも対応しています。

スナップショット、チェックサム、高度なデータ整合性が必要な場合は、**[ZFS](../developer/zfs-setup "スナップショット、チェックサム、データ整合性のために ZimaOS で ZFS を設定する")**も利用できます。

ストレージを設定すると、ローカルネットワークに自動的に表示されます。Mac では Finder、Windows ではエクスプローラーに表示されます。アクセスは ZimaOS アカウントで保護されます。家族やチームメンバーごとに、読み取り／書き込み権限が異なるアカウントを作成できます。

**[ストレージ設定](./storage-setup "ニーズに合った RAID オプションでストレージ構成を選ぶ")** · **[SMB ファイル共有](./smb-troubleshooting "SMB でファイルを共有し、Finder とエクスプローラーに表示する")** · **[クラウドドライブを接続](./cloud-drive-connect "Google Drive、Dropbox、OneDrive を ZimaOS に接続してバックアップする")** · **[RAID オプション](./raid-options "RAID レベルと JBOD の説明、および詳しい設定手順")** · **[データ移行](./data-migration "Docker イメージ、アプリデータ、フォルダーを ZimaOS のドライブ間で移動する")**


## ワンクリックでアプリをインストール

ここでデバイスは、単なるファイル置き場からホームサーバーへと変わります。ZimaOS 1.7 では App Store が大幅に拡充されました。

**ワンクリックインストール。** 数百のアプリをワンクリックで利用でき、Docker の知識は必要ありません。Pi-hole をインストールしてホームネットワーク全体の広告をブロックしたり、Jellyfin をインストールして独自のストリーミングサーバーを運用したりできます。カテゴリとおすすめを備えた閲覧しやすいインターフェースで、必要なものを簡単に見つけられます。

**すべてを一か所で管理。** インストールしたアプリはすべて 1 つのページにまとまります。設定ファイルに触れずに、実行中のアプリの確認、更新のチェック、基本設定の変更ができます。問題が起きたときは、必要に応じて内蔵ログとターミナルを利用できます。

**上級ユーザー向け。** 任意の Docker Compose YAML ファイルをインポートし、設定を直接編集して、複数コンテナのスタックをライフサイクル全体にわたって制御できます。ZimaOS が Docker レイヤーを処理するため、構築したいものに集中できます。

コミュニティは、さらに数百のアプリを提供する複数のサードパーティストアを管理しています。自分のハードウェア、自分のアプリ、自分のルール。サブスクリプションや他人のクラウドに依存するものはありません。

**[App Store の概要](./app-store/ "メディア、セルフホストアプリ、AI の App Store カテゴリを確認する")** — メディアストリーミング、セルフホストアプリ、AI、クリエイティブな構築

## まずデータを取り込む

App Store が魅力的なのは分かります。すでに眺めて、試したいものを 3 つ選んでいるかもしれません。それでも、最初のセットアップをやり直せるなら、私は何かをインストールする前にストレージを整えます。後の面倒を避けられるからです。

まずドライブから始めます。1 台のディスクが最も簡単です。同じドライブ 2 台の RAID 1 なら、複雑さを増やさず冗長性を確保できます。保護しながら容量を増やしたい場合、RAID 5 は 3 台以上のディスクに拡張できます。USB ドライブは追加容量やポータブルストレージに使えます。**[ストレージ設定](./storage-setup "ニーズに合った RAID オプションでストレージ構成を選ぶ")**ページでは各用途に推奨構成を対応させ、**[RAID オプション](./raid-options "RAID レベルと JBOD の説明、および詳しい設定手順")**を技術リファレンスとして利用できます。

次に、アプリデータの保存先を決めます。インストールする各アプリは、デバイス上のどこかにファイルを保存します。**[アプリのストレージパス](./docker-app-paths "アプリがドライブのどこにデータを保存し、どう移動するか")**ガイドでは、保存場所と、後から大きなドライブへデータを移す方法を説明します。早めに設定しておけば、後でアプリデータを移行する手間を省けます。

続いてコンテンツを取り込みます。**[スマートフォンのバックアップ](./phone-backup "ZimaClient でスマートフォンを ZimaOS に自動バックアップする")**と**[コンピューターのバックアップ](./computer-backup "Finder、エクスプローラー、同期を使用してコンピューターを ZimaOS にバックアップする")**は、毎日使うデバイスに対応します。**[別の NAS から移行](./synology-to-zimacube-migration "段階的な方法で Synology NAS から ZimaOS にファイルを移動する")**と**[クラウドドライブを接続](./cloud-drive-connect "Google Drive、Dropbox、OneDrive を ZimaOS に接続してバックアップする")**は、最も一般的な 2 つのデータ元に対応します。

これらを含む各種ガイドは、設定とストレージの下にある **[ZimaOS の概要](./ "セットアップ、ストレージ、共有に関する ZimaOS ドキュメントの概要")**に整理されています。その後は、好きなものをインストールしてください。もう十分準備できています。
