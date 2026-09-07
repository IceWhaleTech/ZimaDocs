---
title: ZimaOS で DeepSeek Harness をデプロイする方法
seo_title: "ZimaOS で DeepSeek Harness をデプロイ：ホームサーバーを物理 AI エージェントに"
description: ZimaOS アプリストアから DeepSeek Harness をワンクリックでインストールし、任意の AI モデルプロバイダーを接続し、エージェントのデータ用にホストフォルダーを承認して、スマートフォンから操作します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

DeepSeek Harness は ZimaOS アプリカタログでネイティブにサポートされており、セットアップ全体は数分で完了します。最新のアプリ情報は [DeepSeek Harness の App Store ページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.dsh-harness)をご覧ください。

DeepSeek Harness（dsh）は DeepSeek のオープンソース AI エージェントです。ホームサーバーに住む親切なプログラマーを思い浮かべてください。ブラウザーで話しかけ、やりたいことを説明すると、NAS 上のフォルダーで計画を立てて作業を完了します。プログラミングの知識は不要です。技術的な部分はエージェントが代わりにやってくれます。

ZimaOS にインストールすると、自分のハードウェア上で 24 時間 365 日稼働します。ZimaClient を通じてスマートフォンから操作でき、プロジェクトはクラウドではなく自分のドライブに置かれます。

## 前提条件

- 稼働中の ZimaOS ホームサーバー。
- 最小ハードウェア要件：デュアルコア CPU と 2 GB 以上のメモリ。
- 任意の AI モデルプロバイダーの API キー — DeepSeek、OpenAI（GPT）、Anthropic、OpenRouter、その他のサードパーティプロバイダーがすべて利用でき、自分のハードウェア上のローカル推論モデルも利用できます（本シリーズの次のチュートリアルで扱います）。キーは下の「モデルプロバイダーを追加する」セクションで 1 分で入手できます。

## アプリカタログ

1. ZimaOS アプリカタログで DeepSeek Harness を探します。**App Store** を開き、「DeepSeek Harness」を検索します。

![App Store の検索結果に DeepSeek Harness のアプリカードとインストールボタンが表示されている](/images/app-store/dsh-app-store.webp)

2. **インストール**をクリックして少し待ちます。

![ZimaOS ダッシュボードのアプリ一覧で DeepSeek Harness がインストール済みと表示されている](/images/app-store/dsh-installed.webp)

3. **すぐに使えます！**

## データディレクトリを承認する

エージェントがワークスペースを保存するには、ドライブ上のフォルダーが必要です。インストール直後に実行してください。

1. アプリカードで右上のオプションメニューをクリックし、コンテナ設定を開きます。

2. **ボリューム**（またはパスマッピング）セクションでボリュームルールを追加します。**コンテナパス**を `/root/` に、**ホストパス**をエージェントのデータに使いたいフォルダー（例: `/media/SSD-Storage/DSH`）に設定します。

![アプリ設定のボリュームセクションで、エージェントのデータフォルダーがコンテナのルートからホストフォルダーにマッピングされている](/images/app-store/dsh-volumes.webp)

3. コンテナを再起動します — NAS の再起動は不要です。これ以降、エージェントが作成するすべてのワークスペースはドライブ上のそのフォルダーに直接保存されます。

## 最初のワークスペースを作成する

アプリカードから DeepSeek Harness を開きます — ブラウザーに Web UI が表示されます。最初のワークスペースを作成します。上記のフォルダー承認により、エージェントが作成するものはすべてドライブに直接保存されます。

![DeepSeek Harness Web UI で最初のワークスペースを作成している](/images/app-store/dsh-workspace.webp)

## モデルプロバイダーを追加する

**設定 > モデル**でプロバイダーを追加し、API キーを貼り付けます。

- **DeepSeek** — [DeepSeek プラットフォーム](https://platform.deepseek.com/ "API キーと請求のための DeepSeek プラットフォーム")で登録してキーをコピーします
- **GPT (OpenAI)** — OpenAI キーを使用します
- **OpenRouter** — 1 つのキーで多数のモデルを利用できます
- 自分のハードウェア上のモデルサーバー — 本シリーズの次のチュートリアルで扱います

![DeepSeek Harness Web UI の設定ページで、モデルプロバイダーが追加され API キーが保存されている](/images/app-store/dsh-models.webp)

## 最初のタスク

エージェントに最初の本物の仕事を任せましょう。欲しいアプリを平易な言葉で説明します — 下の例は、ZimaOS ホストの CPU、メモリ、ディスク、ネットワークをリアルタイムに表示するリソースモニターをコンテナアプリとして作るよう依頼しています。

![DeepSeek Harness Web UI のセッションに、リソースモニターのタスクとエージェントの計画が表示されている](/images/app-store/dsh-first-task.webp)

作業の様子を見てみましょう。セッションには計画、コード、結果が表示されます — あなたは 1 行もコードを書きません。

![エージェントがワークスペースでリソースモニターアプリを計画し作成する画面の録画](/images/app-store/dsh-work-demo.webp)

数回のやり取りの後、エージェントはアイデアを実際のアプリに変えます — あなたの側にコーディングの知識は不要です。完成するのはシステムレベルのリソースマネージャーで、24 時間稼働し、ZimaOS のディスク健全性、ネットワークセキュリティ、コンテナのライフサイクルを見守ります。

![完成したリソースマネージャーがディスク、ネットワーク、コンテナのライブメトリクスを表示する画面の録画](/images/app-store/dsh-resource-manager.webp)

## モバイルから DeepSeek Harness にアクセスする

ZimaClient モバイルアプリから DeepSeek Harness にアクセスします — ホームサーバーへの直接 P2P 接続で、クラウドリレーも VPN 設定も不要です。自宅でも外出先でも使えます。

| ![ZimaClient モバイルアプリで App Store のアプリ一覧が表示されている](/images/app-store/dsh-phone-apps.png) | ![ZimaClient 経由でスマートフォンに開いた DeepSeek Harness Web UI でアクティブなセッションが表示されている](/images/app-store/dsh-phone-ui.png) |
| - | - |

P2P 接続により、エージェントの作業進捗とすべてのセルフホストサービスをいつでもどこでも確認できます — 同じ Web UI がそのままスマートフォンに。

## ホームサーバーはエージェントになった

セットアップは以上です。ホームサーバーはもはや単なるストレージボックスではなく、自分のハードウェアに住む物理エージェントです。

- **スマートフォンから操作** — どこからでも ZimaClient で Web UI を開き、セッションの確認、結果のレビュー、新しいタスクの送信ができます。エージェントは自宅でも外出先でもワンタップの距離です。
- **コードを書かないバイブコーディング** — 機能を平易な言葉で説明すれば、エージェントがワークスペースで計画してコードを書きます。コードはクラウドではなく自分のドライブに残ります。
- **ホームオートメーション** — ホームサーバー周りのあらゆるタスクを任せられます。ファイルの整理、データからのレポート生成、繰り返し作業の自動化。NAS 自体の上で動くため、24 時間働き続けます。
- **壊れたアプリの診断** — Jellyfin のストリーミングが止まったり Home Assistant が落ちたりしたら、症状を貼り付けるだけで、エージェントが NAS 上でログと設定を読み、原因を見つけて修正します。ブラックボックスの中で推測する必要はもうありません。
- **アプリスタックのメンテナンス** — エージェントが Docker Compose ファイルを読み、アップグレード、設定変更、移行を一緒に進めます。セルフホストスタックは次のアップデートまでではなく、何年もメンテナンス可能な状態を保てます。

## 使用上の注意

- **専用ハードウェアを与える。**エージェントは物理サンドボックスエージェントとして専用デバイスで動かすのが最適です。大量のデータを置いたメイン NAS から離しておけば、サンドボックス内の実験が大事なものに触れることはありません。
- **2 つのレベルの承認。**フォルダー承認はエージェントに ZimaOS 上のデータアクセスを与えます。Docker ソケットの承認は 2 つ目の、はるかに高いレベルです — システムレベルのコンテナ管理、SSH レベルの制御に近い権限をエージェントに与えます。各レベルは慎重に付与し、ソケットレベルはタスクが本当に必要とする場合にのみ付与してください。

![アプリ設定ページで DeepSeek Harness コンテナへの Docker ソケットボリュームの承認が表示されている](/images/app-store/dsh-docker-socket.webp)
- **サンドボックス権限をフルアクセスに設定する。**dsh 内でサンドボックスの実行権限をフルアクセスに設定すると、エージェントは各ステップで承認を求めることなくタスクを実行できます。

![DeepSeek Harness Web UI でサンドボックス権限がフルアクセスに設定されている](/images/app-store/dsh-sandbox-permission.webp)
- **エージェントが書くものはすべて Files で見える。**ワークスペースのマッピングにより、エージェントが書くすべてのソースコードは承認済みフォルダーに保存されます — いつでも ZimaOS Files で閲覧・確認できます。

## 次のステップ

- **ローカル推論:** プロバイダーを自分のハードウェア上のモデルサーバーに向ければ、エージェントは完全にオフラインで動きます — 本シリーズの次のチュートリアル。
- **dsh でサービスを自動化:** ZimaOS 上で自動化サービスを構築・運用します — 本シリーズの後続チュートリアル。

## 参考リンク

詳細は DeepSeek Harness の公式ドキュメントをご覧ください。

- インストールとすべてのデプロイ方法 – [インストールガイド](https://github.com/sdkwork-ai/deepseek-harness-desktop/blob/master/INSTALL.md "DeepSeek Harness 公式インストールガイド")
- Web UI の使い方 – [Web UI ガイド](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md "DeepSeek Harness Web UI 公式ガイド")
- モデルプロバイダー – [プロバイダーガイド](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md "DeepSeek Harness モデルプロバイダー公式ガイド")
- ソースコード – [GitHub リポジトリ](https://github.com/deepseek-ai/deepseek-harness "DeepSeek Harness 公式 GitHub リポジトリ")

ZimaSpace Tech AI Hub の関連記事：

- [10 Best DeepSeek Harness Plugins 2026](https://shop.zimaspace.com/blogs/tech-ai-hub/10-best-deepseek-harness-plugins-2026 "ZimaSpace Tech AI Hub の DeepSeek Harness ベストプラグインガイド")
- [DE Minimal and Creator Explained](https://shop.zimaspace.com/blogs/tech-ai-hub/de-minimal-and-creator-explained "ZimaSpace Tech AI Hub の DE Minimal と Creator の解説")
