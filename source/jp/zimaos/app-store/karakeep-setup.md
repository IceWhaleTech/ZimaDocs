---
title: ZimaOS で Karakeep を実行する方法
seo_title: "ZimaOS の Karakeep：AI タグ付け付きセルフホスト型ブックマーク管理"
description: ZimaOS アプリストアから Karakeep をインストール——AI による自動タグ付けと要約を備えたセルフホスト型ブックマークライブラリにすべてを保存します。
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

Karakeep は ZimaOS アプリカタログでネイティブにサポートされています。最新のアプリ情報については [Karakeep アプリストアページ](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.karakeep)をご覧ください。

**Karakeep**（旧 Hoarder）は、投げ込んだリンク、メモ、画像を AI で自動的にタグ付け・要約するオープンソースの "Bookmark Everything" アプリです。セルフホスティングを第一級市民として設計されており、ブックマークライブラリをブラウザベンダーのクラウドではなく自分のハードウェア上に保持します。

## 前提条件

- 稼働中の ZimaOS インストール。
- *（任意）* OpenAI 互換の API キー。別の AI プロバイダー（プライベート推論のためのローカルモデルなど）を使用したい場合は、[different AI providers](https://docs.karakeep.app/configuration/different-ai-providers "Karakeep の異なる AI プロバイダー設定ガイド") ガイドをご覧ください。

## アプリカタログ

1. ZimaOS アプリカタログで Karakeep を見つけます。**App Store** を開き、"Karakeep" を検索して **Install** をクリックします。

![インストールボタンが表示された ZimaOS アプリストアの Karakeep アプリページ](/images/app-store/karakeep-app-store.webp)

2. **すぐに使えます！**

![インストール後に New バッジが付いた ZimaOS ダッシュボードの Karakeep アイコン](/images/app-store/karakeep-installed-dashboard.webp)

Karakeep を開けばすぐにブックマークを始められます——**NEW ITEM** ボックスにリンクを貼り付けたり、メモを書いたり、画像をドロップしたりできます。

![リンク、メモ、画像を貼り付けるための New Item ボックスがある Karakeep インターフェース](/images/app-store/karakeep-ui-new-item.webp)

![New Item ボックスの横に Get Started と Zima カードが表示された Karakeep ホーム画面](/images/app-store/karakeep-ui-content.webp)

## 任意：ドメインの設定（NEXTAUTH_URL）

デフォルトでは、Karakeep は自分が `http://localhost:xxxx` で動作していると想定します。別のデバイスから——あるいはドメイン経由で——開くと、アプリ内のリンク（**ログアウト**ボタンを含む）が `localhost` を指したままになり失敗します。

これを修正するには、`NEXTAUTH_URL` 環境変数を Karakeep を開くために使用する正確なアドレス（ZimaOS にログインする IP アドレス）に設定します：

![デバイスのアドレスに設定された NEXTAUTH_URL が表示された Karakeep 環境変数](/images/app-store/karakeep-nexauth-env.webp)

その後**保存**してアプリを再起動します。

## 任意：AI 自動タグ付けの有効化

Karakeep は AI を使って保存したリンクを自動的にタグ付け・要約できます。**Manager** を開き、**Advanced** で OpenAI API キーを入力します。

![AI API キーを入力する Advanced (Show more) セクションがある Karakeep 設定](/images/app-store/karakeep-advanced-config.webp)

![入力済みでハイライトされた OPENAI_API_KEY エントリがある Karakeep 変数](/images/app-store/karakeep-openai-api-key.webp)

**これで** Karakeep が自動タグ付けと要約を処理できるようになりました。あとはリンクを貼り付けたり、メモを書いたり、画像をアップロードしたりするだけです。

![保存したリンクに自動生成された要約とタグが表示された Karakeep 概要ページ](/images/app-store/karakeep-auto-tag-result.webp)

### 代わりにローカル LLM を使う

リンクをクラウド API に送ることは必須ではありません。Karakeep は OpenAI 互換プロバイダーと Ollama に対応しているため、タグ付けと要約を完全に自分のデバイス上に留めることができます。

クラウド API キーの代わりに、Karakeep コンテナで以下の変数を設定します：

```text
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://<your-zimaos-ip>:11434/v1
INFERENCE_TEXT_MODEL=gemma3
INFERENCE_IMAGE_MODEL=llava
```

正しく設定すべき点が 2 つあります：

- アドレスは Karakeep コンテナ内から到達可能でなければなりません——`localhost` ではなく ZimaOS の IP を使用してください。
- 事前に Ollama サーバーでモデルをプルしておいてください。そうしないと最初のリンクが届いた時点でタグ付けが失敗します。

LLM サーバー自体を ZimaOS で実行するには、[ローカル LLM 推論](../local-llm-inference "5 つのステップで ZimaOS NAS にプライベート AI サーバーをデプロイ") をご覧ください。その他のプロバイダーと高度なモデル設定については、公式の [different AI providers](https://docs.karakeep.app/configuration/different-ai-providers "Karakeep の異なる AI プロバイダー設定ガイド") ガイドをご覧ください。

## ヘルプが必要ですか？

ZimaOS での Karakeep のインストールや使用で問題が発生した場合は、[ZimaSpace Discord コミュニティ](https://discord.gg/f9nzbmpMtU "ZimaOS サポートのための ZimaSpace Discord コミュニティに参加")にご参加ください。チームとコミュニティメンバーが喜んでお手伝いします。
