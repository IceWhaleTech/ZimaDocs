---
title: ZimaOSでTime Machineバックアップを作成する
seo_title: "NASへのTime Machineバックアップ：ZimaOSでMacをバックアップ"
description: "Time Machineを使用してMacをZimaOSへバックアップします。Time Machine用のSamba共有を設定し、macOSのシステム設定から接続します。"
type: Docs
author: admin
tip: このFront Matterブロックは削除しないでください。descriptionフィールドは記事の概要に使用され、空の場合は最初の段落が代わりに使用されます。
---

Macを使用している場合、Time Machineは使い慣れたバックアップ機能です。保存先をZimaOSデバイスに設定すれば、追加のサブスクリプションなしで、家にあるすべてのMacを完全に自動バックアップできます。

## 手順1：ZimaOSに共有フォルダーを設定する

1. ZimaOSダッシュボードを開き、**Files** ページに移動します。
2. バックアップ先として使用するフォルダーを探すか、**Time Machine** などの新しいフォルダーを作成します。
3. フォルダーを右クリックし、**Share via Samba** を選択します。

![フォルダーのShare via Sambaオプションを表示するZimaOS Filesのコンテキストメニュー](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)

4. ポップアップでフォルダー名と場所を確認し、**Configure for Time Machine** をオンにします。認証には既定のZimaOSユーザーが使用されます。ほかのユーザーを追加することもできます。

![Configure for Time Machineを選択したSamba共有のポップアップ](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)

5. **Create** をクリックします。

![Time Machineバックアップ用のZimaOS共有フォルダー作成完了画面](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)

## 手順2：MacでTime Machineを接続する

1. **システム設定** を開き、**Time Machine** に移動します。

![Time Machineのバックアップオプションを表示するmacOSのシステム設定](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)

2. **バックアップディスクを追加** をクリックします。

![バックアップディスクを追加ボタンを表示するTime Machine設定](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)

3. ZimaOSで作成した共有フォルダーを選択し、**ディスクを設定** をクリックします。

![ZimaOSの共有フォルダーを選択したTime Machineのディスク一覧](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)

4. 求められたら、ZimaOSのユーザー名とパスワードを入力します。

![Time Machine共有へ接続するユーザー名とパスワードを求めるmacOS画面](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)

## 手順3：バックアップを開始する

MacとZimaOSデバイスを同じネットワークに接続すると、Time Machineが保存先フォルダーを検出し、自動的にバックアップを開始します。

![最初のバックアップが進行しているTime Machine画面](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)

{% note tip トラブルシューティング %}
バックアップに失敗した場合は、ネットワーク接続を確認し、デバイスでSMBサービスが有効になっていることを確認してください。macOSでパスワードを入力できない場合は、いったん空白部分をクリックしてから、パスワード欄をもう一度クリックします。
{% endnote %}

## ファイルを復元する

ファイルを取り戻す必要がある場合は、Time Machineの画面から復元します。詳しい手順はAppleのガイドを参照してください：[MacでTime Machineを使ってバックアップした項目を復元する](https://support.apple.com/ja-jp/guide/mac-help/mh11422/mac)。

## 次に読む

- **[3-2-1バックアップ戦略](./how-to-use-3-2-1-backup-on-zimaos "NASのデータを3-2-1バックアップルールで保護する")** — Time Machineは計画の一部です。オフサイトコピーも追加してください
- **[コンピューターのバックアップ](./computer-backup "Finder、エクスプローラー、同期機能でコンピューターをZimaOSにバックアップする")** — 家にあるすべてのコンピューター向けのバックアップ方法
