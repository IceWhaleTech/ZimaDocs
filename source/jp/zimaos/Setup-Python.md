---
title: Pythonのセットアップ
description:
type: “Docs”
tip: トップバーの固定フォーマットは削除しないでください、descriptionは記事の説明であり、未入力の場合は内容の最初の段落のテキストが切り取られます
---
# /etc/profileの修正
プロファイルに以下の2行を追加します
```language
export HOME="/DATA"
export PATH="/DATA/.local/bin:/opt/bin:$PATH"
```
リフレッシュを実行します
`source /etc/profile`
# opkgのインストール
`wget -O - http://bin.entware.net/x64-k3.2/installer/generic.sh | /bin/sh`
# Git関連の問題
## git-httpのインストール
`opkg install git-http`
# パスワードなしでGitHubプロジェクトをプルする方法
パスワードなしでGitHubプロジェクトをプルする方法
いくつかの問題により、Gitは通常ssh公開鍵を見つけることができません。したがって、ghツールを使用してパスワードを回避します。
ghを`/opt/bin`にダウンロードします（opkgパッケージによって管理されます）。その後、ghを使用してアカウントにログインします。
プロジェクトをプルするときは、3番目のghプル方式を使用することで、Gitとプルが可能になります。
## Python
ZimaOSはPython 3.12.5をインストール済みです
![](https://manage.icewhale.io/api/static/docs/1727164432814_image.png)
開発にはnevn仮想環境の使用をお勧めします
```language
mkdir project
cd project
python -m venv .
source ./bin/activate
```
# vscodeの設定を修正
コードモード設定に以下の設定を追加します
```language
"remote.SSH.serverInstallPath": {
        "XXX.XXX.XXX.XXX": "/DATA",
    },
```
![](https://manage.icewhale.io/api/static/docs/1727164529080_image.png)