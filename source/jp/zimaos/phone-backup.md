---
title: スマートフォンのバックアップ
seo_title: "ZimaOS でスマートフォンをバックアップ：写真とファイルを自動保存"
description: "ZimaClient でスマートフォンを ZimaOS にバックアップします。写真とファイルの自動バックアップ、iOS アルバムの選択、独自ストレージの指定に対応し、すべてを 1 つのライブラリで閲覧できます。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

写真をバックアップするかどうかで悩む人はあまりいません。本当に困るのは数年後、引き出しに古いスマートフォンが 3 台たまり、ライブラリと一緒にクラウド料金もいつの間にか増えていたときです。自分のデバイスなら別の結末を選べます。これまで使ったすべてのスマートフォンの写真が 1 つのライブラリに集まり、物語全体が 1 か所に残ります。

## 始める前に

ZimaOS デバイスの電源を入れ、ネットワークに接続してください。初回接続時は、スマートフォンとデバイスを同じ Wi-Fi に接続します。ZimaOS のアカウントとパスワードを用意してください。開梱したばかりのデバイスでは、先に**[スタートガイド](./get-started "ZimaClient とアカウント作成を使用して、初回起動から ZimaOS をセットアップする")**に従ってください。

## ZimaClient をインストール

App Store から **[iOS](https://www.zimaspace.com/zimaos/download "App Store から ZimaClient iOS アプリをダウンロードする")**版、または Google Play から **[Android](https://www.zimaspace.com/zimaos/download "Google Play から ZimaClient Android アプリをダウンロードする")**版の ZimaClient を入手し、開きます。

## サインインして接続

1. ZimaClient を開きます。ローカルネットワークをスキャンし、見つかった ZimaOS 搭載 NAS デバイスを一覧表示します。

![ローカルネットワークで見つかった ZimaOS 搭載 NAS デバイスを表示する ZimaClient のデバイス検出画面](/images/guides/zimaclient-device-discovery.jpg)

2. 自分のデバイスをタップし、ZimaOS アカウントでサインインします。

![ZimaOS アカウントのユーザー名とパスワード欄がある ZimaClient のサインイン画面](/images/guides/zimaclient-sign-in.jpg)

最初のサインイン後、スマートフォンがデバイスにリンクされます。

{% note tip リモートアクセス %}
リモートアクセスは自動設定されるため、自宅を離れていてもバックアップが続きます。ただし、ZimaOS デバイスの**設定 > ネットワーク**でリモートアクセス機能を有効にしておく必要があります。
{% endnote %}

複数の ZimaOS デバイスを使用している場合は、それぞれにカスタムアイコンを設定すると、ホームサーバーをひと目で見分けられます。ZimaOS ダッシュボードで**設定 > 一般**を開き、**デバイス情報**の横にある設定ボタンをクリックします。個性のあるアイコンを選んでください。私たちの 1 台はクラシックなアルバムジャケットのパルサー波をまとっています。ホームサーバーはデータで脈打ち続けるからです。

<div style="display:flex; align-items:stretch; gap:16px;">
  <img src="/docs/images/guides/zimaclient-device-icons.png" alt="カスタムデバイスアイコンを表示する ZimaOS の設定内一般ページ。1 つはパルサー波のアルバムジャケット風" style="flex:0 0 62%; max-width:62%; height:auto;">
  <img src="/docs/images/guides/zimaclient-phone-device-icon.jpg" alt="設定後のカスタムアイコン付き ZimaOS NAS デバイスを表示するスマートフォン版 ZimaClient 画面" style="flex:0 0 30%; max-width:30%; object-fit:cover; object-position:top;">
</div>

## バックアップするものを選ぶ

iOS の写真ライブラリから必要なアルバムを選びます。ライブラリ全体ではなく特定のアルバムだけを選べるため、必要に応じてスクリーンショットやダウンロードをバックアップから除外できます。

まずバックアップ設定で対象を決めます。次にアルバムを確認し、大切なものを選択します。

<div style="display:flex; align-items:flex-start; justify-content:center; gap:40px;">
  <img src="/docs/images/guides/zimaclient-album-backup-setting.png" alt="写真バックアップに含める内容のオプションを表示する ZimaClient バックアップ設定ページ" style="flex:0 0 42%; max-width:42%; height:auto;">
  <img src="/docs/images/guides/zimaclient-album-selection.png" alt="チェックボックス付きで iOS 写真アルバムを一覧表示する ZimaClient アルバム選択画面" style="flex:0 0 42%; max-width:42%; height:auto;">
</div>

## 保存先を選ぶ

デフォルトの保存先は自動的に作成されます。独自のストレージスペースを用意したら、ZimaOS のシステムドライブではなく、RAID アレイや専用ディスクへバックアップを保存してください。システムドライブは通常最も容量が小さく、写真ですぐにいっぱいになります。ストレージスペースの計画については、**[ストレージ設定](./storage-setup "ニーズに合った RAID オプションでストレージ構成を選ぶ")**を参照してください。

## バックアップを開始

確認して開始します。最初のバックアップでは選択全体を転送するため、最も時間がかかります。それ以降は変更分のみを転送します。

![初回実行前に開始ボタンを表示する ZimaClient のバックアップ確認画面](/images/guides/zimaclient-backup-start.webp)

スマートフォンから見ると、バックアップは次のように表示されます。写真プレビューと、詳細表示で開いた写真です。

<div style="display:flex; align-items:flex-start; justify-content:center; gap:40px;">
  <img src="/docs/images/guides/zimaclient-photo-preview.webp" alt="スマートフォンから閲覧できるバックアップ済み写真を表示する ZimaClient 写真プレビュー" style="flex:0 0 42%; max-width:42%; height:auto;">
  <img src="/docs/images/guides/zimaclient-photo-detail.webp" alt="バックアップ済み写真を全画面で開いた ZimaClient の写真詳細表示" style="flex:0 0 42%; max-width:42%; height:auto;">
</div>

バックアップオプションはさらに充実しています。iOS の Live Photos は動きを保ったまま転送されます。自動バックアップとモバイルデータ経由のバックアップは簡単なスイッチで切り替えられ、保存先の空き容量も同じ画面に表示されるため、残り容量を常に把握できます。

<img src="/docs/images/guides/zimaclient-more-options.png" alt="Live Photo 対応、バックアップスイッチ、保存先の空き容量を表示する ZimaClient バックアップオプション" style="display:block; margin:0 auto; width:35%; height:auto;">

## フォルダーをリンクする

**フォルダーをリンク**オプションは、ZimaOS 上にすでに存在するフォルダーをバックアップの対象として指定します。スマートフォン以外のコンテンツを同じライブラリへ参加させる方法です。

すでに持っているフォルダーを考えてみてください。プロ用カメラやアクションカメラの映像、古いスマートフォンのバックアップ、以前のコンピューターからコピーしたアーカイブなどです。それらをリンクすると、コンテンツがスマートフォンの ZimaClient に表示され、ほかのバックアップ内容と一緒に整理されます。1 つのライブラリで、すべてを閲覧できます。

## バックアップ速度

正常なローカルネットワークでは、スマートフォンは理論上 50 MB/s 以上の転送帯域を使い切れます。実際の速度は主に 1 つ、Wi-Fi によって決まります。

**Wi-Fi の品質が最大の要因です。** ルーターに近い場所での 5 GHz 接続は、別の部屋からの 2.4 GHz 接続より大幅に高速です。距離、壁、混雑したチャネルはいずれも速度を下げます。ルーターの近くで 5 GHz を使うことが、ほかのどの設定より効果的です。

それ以外がボトルネックになることはほとんどありません。デバイスのネットワークポートはスマートフォンの Wi-Fi 経路より高速なので、転送を妨げません。ハードドライブは 100 MB/s 以上で読み書きでき、スマートフォンの接続が送れる速度を十分上回ります。実際には、スマートフォン自体の性能も影響しません。

{% note tip ZimaOS の小容量ファイル最適化 %}
写真ライブラリの大部分は小さなファイルで構成されており、ZimaOS はまさにその処理に最適化されています。受信側の高度な小容量ファイル最適化により、スクリーンショット、短いクリップ、連写写真のまとまりも、大きな動画と同じように滑らかに転送されます。
{% endnote %}

実用上の結論は、最初の大容量バックアップではスマートフォンをルーターの近くに置き、完了まで待つことです。

## 実用的なヒント

{% note tip %}
- データ容量制限を避けるため、最初の大容量バックアップはモバイル通信ではなく Wi-Fi で実行します。
- スマートフォンを交換する前に ZimaClient を一度開き、最後のバックアップが完了するまで待ちます。
- 家族はそれぞれ自分の ZimaOS アカウントでサインインするため、各自の写真は個別のライブラリに残ります。
- バックアップが止まった場合は、ルーターに近づくことでほとんど解決します。
{% endnote %}

## 次へ

- **[コンピューターのバックアップ](./computer-backup "Finder、エクスプローラー、同期を使用してコンピューターを ZimaOS にバックアップする")** — ノートパソコンも取り込む
- **[写真](./photos "タイムライン、地図、コレクションで ZimaOS の写真ライブラリを閲覧する")** — 取り込んだライブラリを閲覧する
- **[3-2-1 バックアップ戦略](./how-to-use-3-2-1-backup-on-zimaos "NAS で 3-2-1 バックアップルールを使用してデータを守る")** — 1 つのバックアップだけでは計画にならない
