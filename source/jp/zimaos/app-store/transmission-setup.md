---
title: Transmission で Torrent をダウンロードする
seo_title: "ZimaOS の Transmission で Torrent を NAS にダウンロードする"
description: "ZimaOS App Store から Transmission をインストールし、Torrent またはマグネットリンクを追加して NAS に保存する手順です。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Transmission はブラウザーから操作できる BitTorrent クライアントです。ZimaOS ではダウンロードを NAS ストレージに直接保存し、ローカルネットワーク上のブラウザーから管理できます。

> 使用または共有する法的権利があるコンテンツだけをダウンロードしてください。

## Transmission をインストールする

1. ZimaOS ダッシュボードを開き、**App Store** を選択します。
2. **Transmission** を検索し、アプリを選択して **Install** をクリックします。
3. アプリが起動するまで待ち、ZimaOS ダッシュボードから Transmission を開きます。
4. インストール画面に表示された認証情報でサインインします。現在の App Store の初期値は次のとおりです。

| ユーザー名 | パスワード |
| --- | --- |
| `casaos` | `casaos` |

App Store パッケージは Web インターフェースをポート `9091` で公開し、ZimaOS の `/DATA/Downloads` フォルダーを Transmission 内の `/downloads` に割り当てます。手動で開く場合は `http://ZIMAOS-IP:9091/transmission/web/` を使用します。

![転送リストが空の Transmission Web Interface](/images/app-store/transmission-dashboard.png)

信頼できるローカルネットワークの外部からアクセスできるようにする前に、認証情報を更新してください。Transmission アプリアイコンの右上にある三点メニューをクリックして **Settings** を開き、`USER` と `PASS` の値を変更して保存し、アプリを再起動します。リバースプロキシで公開する場合は HTTPS を使用します。

## Torrent またはマグネットリンクを追加する

1. 左上の **Open** をクリックします。
2. `.torrent` ファイルを選ぶか、HTTP(S) の Torrent URL またはマグネットリンクを **Or enter a URL** に貼り付けます。
3. **Destination folder** を `/downloads/complete` に設定するか、`/downloads` 内の別のフォルダーを指定します。ZimaOS ホスト側のパスではなく、Transmission に表示されるコンテナ内のパスを使用してください。
4. すぐにダウンロードを始める場合は **Start when added** を選択したまま、**Add** をクリックします。

![初期ダウンロードフォルダーを表示した Transmission の Add Torrents ダイアログ](/images/app-store/transmission-add-torrent.png)

### Debian 公式 Torrent を試す

Debian は合法的に試せるダウンロードを[公式 BitTorrent イメージページ](https://cdimage.debian.org/debian-cd/current/amd64/bt-cd/)で公開しています。ページを開き、最新の `amd64-netinst.iso.torrent` ファイルのリンクをコピーして **Or enter a URL** に貼り付け、**Add** をクリックします。

![Transmission でダウンロード中の Debian netinst ISO](/images/app-store/transmission-debian-download.png)

転送行には進行状況、残り時間、接続中のピア、現在の速度が表示されます。初期設定の割り当てでは、完了したファイルは ZimaOS の **Files > Downloads > complete** に保存されます。

## ダウンロードを管理する

- 転送を選択し、**Start** または **Stop** で状態を切り替えます。
- **Inspector** でファイル、ピア、トラッカー、転送ごとの制限を確認します。
- **Delete** で転送を削除します。ダウンロード済みデータも削除するか確認してください。
- リスト上部のフィルターで、稼働中、ダウンロード中、シード中、一時停止、完了、エラーの転送を絞り込みます。

## トラブルシューティング

- **ブラウザーに `401 Unauthorized` と表示される:** Transmission のアプリ設定で `USER` と `PASS` を確認し、アプリを再起動します。
- **ピアが見つからない、または速度が遅い:** Torrent が稼働中であることを確認し、必要に応じてファイアウォールやルーターでピアポート `51413` を許可します。
- **Transmission がファイルを書き込めない:** 保存先を `/downloads` 内に設定し、ZimaOS でアプリのストレージ権限を確認します。
- **完了したファイルが見つからない:** Transmission に表示される保存先を確認します。初期フォルダー `/downloads/complete` は ZimaOS の **Files > Downloads > complete** に対応します。
