---
title: ZimaOS で Blinko をデプロイする方法
seo_title: "ZimaOS で Blinko を動かす：ホームサーバー上のセルフホスト AI ノート"
description: ZimaOS アプリストアから Blinko を数分でインストール — ひらめきをカードで記録し、AI の自然言語検索で探し出し、すべてのノートを自分のドライブに保管します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

Blinko は ZimaOS アプリカタログでネイティブにサポートされており、わずか 3 分でインストールできます。ZimaOS は Blinko プロジェクトの公式スポンサーで、Blinko の README には「Run on ZimaOS」ボタンが掲載されています。最新のアプリ情報は [Blinko の App Store ページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.blinko)をご覧ください。

Blinko はオープンソースのセルフホスト型カードノートアプリです。解決する問題は誰もが知っているものです。アイデアは会議中、通勤中、シャワー中など思いがけない瞬間に浮かびますが、重いノートアプリを開く頃には消えてしまっています。Blinko はそのひらめきを浮かんだ瞬間に小さなカードとして記録します。そしてホームサーバー上で動くため、AI アシスタントがノートを意味で検索できます。「先週プロジェクトについて何を書いたっけ？」と尋ねれば、これまでに書いたすべての中から答えを見つけ出します。

コミュニティの評価は「スマホのメモより 10 倍便利」— より軽量な Obsidian に AI 検索とセルフホストの Notion 受信箱を組み合わせたものです。すべてのノートは他人のクラウドではなく、自分のドライブに残ります。

## 前提条件

- 稼働中の ZimaOS ホームサーバー。

## アプリカタログ

1. ZimaOS アプリカタログで Blinko を探します。**App Store** を開き、「Blinko」を検索します。

![App Store の検索結果に Blinko のアプリカードとインストールボタンが表示されている](/images/app-store/blinko-app-store.png)

2. **インストール**をクリックして少し待ちます。

![ZimaOS ダッシュボードのアプリ一覧で Blinko がインストール済みと表示されている](/images/app-store/blinko-installed.png)

3. **すぐに使えます！**

アプリはポート 1111 で動作し、専用のデータベースを備えています。ZimaOS はすべてのノートをドライブ上のアプリデータ保存場所に保存するため、アプリの更新や再インストールでも失われません。

## 初回起動

アプリカードから Blinko を開きます。初回アクセス時にアカウントを登録します — 最初に登録したアカウントが管理者になります。

![Blinko の初回起動画面。管理者アカウントを登録する](/images/app-store/blinko-first-run.png)

中に入ったら、必要に応じて設定からインターフェースの言語を切り替えます（簡体字中国語と英語に対応）。あとは書き始めるだけです。カードを作成し、タグを付けて保存する — これがすべての操作です。

![Blinko のノートエディターで新しいカードを作成している](/images/app-store/blinko-note.png)

## AI 機能を有効にする（任意）

以下の手順は**必須ではありません** — AI なしでも Blinko は完全なノートアプリです。しかしクイックキャプチャ型のノートにはよく知られた運命があります。書き留めたものが後で見つからないのです。AI が修正するのはまさにそこです — 意味検索が数か月前のカードを意味で見つけ出し、自動タグ付けが整理を不要にし、キャプチャ後処理が走り書きの 5 語をコメントとして保存される完全なノートへ展開します。これがカードの山を検索可能なセカンドブレインに変えます。有効化するには：

1. **設定**を開き、AI プロバイダーのセクションを探します。

2. プロバイダーを選びます：OpenAI、Anthropic、Google AI、Grok、または自分のハードウェア上のローカル Ollama サーバー — すでに使っているもので構いません。

3. 4 つのモデル機能を入力します：チャット、埋め込み、画像、音声。1 つのキーで 4 つすべてをカバーできるプロバイダーもあれば、不要な機能は空欄のままで構いません。

4. **接続テスト**をクリックします。成功すると、インターフェースの隅に AI ダイアログが表示され、自然言語検索が動き始めます。

![Blinko の AI プロバイダー設定。接続テストに合格している](/images/app-store/blinko-ai-settings.png)

> **プライバシーのヒント：**ノートをどこにも送らずに AI の支援を受けたい場合は、Blinko をローカルの Ollama サーバーに向けてください — すべてがホームサーバー内に留まります。

## コミュニティのヒント

ユーザーの体験談から集めた、Blinko コミュニティの実際の使い方：

- **3 種類のカードを自由に変換。**ひらめきはクイックカード、長い文章はノート、タスクは ToDo リストとして書きます。どのカードも後から別のタイプに変換できます — フォルダー間でファイルを移動するよりずっと簡単です。
- **AI にはコメントさせ、書き換えさせない。**AI がカードを展開・推敲するとき、生成されたテキストはコメントとして保存され、元の言葉に混ざりません。あなたの声はあなたのままで、提案は後で確認できます。
- **デイリーレビュー。**デイリーレビューで今日記録したカードを振り返ります — コミュニティはこれを「クイックキャプチャ」から「本当のノート」への橋と位置づけています。
- **データは常に自分のもの。**すべてのカードはドライブ上のアプリデータフォルダーにプレーンテキストで保存されます。そのフォルダーをバックアップすれば、ノートライブラリ全体が安全です。

## 参考リンク

詳細は Blinko の公式ドキュメントをご覧ください。

- 紹介と機能 – [https://docs.blinko.space/en/introduction](https://docs.blinko.space/en/introduction "Blinko 公式紹介・機能ドキュメント")
- インストールと更新 – [https://docs.blinko.space/en/install](https://docs.blinko.space/en/install "Blinko 公式インストール・更新ガイド")
- AI の使い方 – [https://docs.blinko.space/en/how-to-use/ai/ai-setting](https://docs.blinko.space/en/how-to-use/ai/ai-setting "Blinko 公式 AI 設定ガイド")
- ソースコード – [GitHub リポジトリ](https://github.com/blinkospace/blinko "Blinko 公式 GitHub リポジトリ")
