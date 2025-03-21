---
title: ZimaOS & QTS 双方向同期ガイド
description: 
type: Docs
author: admin
tip: トップバーの固定フォーマットは削除しないでください、descriptionは記事の説明であり、未入力の場合は内容の最初の段落の文字が切り取られます
---
![](https://manage.icewhale.io/api/static/docs/1742550303202_image.png)
## 実際の痛点: クロスNAS同期の課題
最近、ユーザーから「私たちのチームはZimaOSとQNAP QTSシステムの両方を利用しています。手動でファイルを転送するのに毎日2時間以上かかります。双方向の同期を自動化するにはどうすればよいですか？」という質問がありました。このガイドはまさにその問題を解決します。
## なぜWebDAV + Zerotier？
![](https://manage.icewhale.io/api/static/docs/1742550364111_image.png)
図1: WebDAVとZerotierを介したクロスシステムファイル同期のアーキテクチャ
### キーワード: ZimaOSとQTSの双方向同期
- WebDAV : クロスプラットフォームのファイルコラボレーションプロトコル
- Zerotier : 公開IPを必要とせずにNATを横断するための仮想LANツール
- 利点 : 簡単な設定、自動同期および再開可能な同期
## ステップバイステップの実装
### ステップ1: ZimaOSでWebDAVを設定する
1. アプリのインストール : ZimaOSアプリストアで「WebDAV」を検索
![](https://manage.icewhale.io/api/static/docs/1742550445278_image.png)
2. 重要なパラメータ (図2):
  - 資格情報: デフォルトは`casaos`
  - 同期ディレクトリ: 「ディレクトリアイコンを選択」(2番目の赤い円)でターゲットフォルダーを選択
  - ポート: カスタムポートに注意 (例: `5005`)
![](https://manage.icewhale.io/api/static/docs/1742550489305_image.png)
図2: ZimaOS WebDAV設定インターフェース
### ステップ2: Zerotierネットワークを確立する
1. ネットワークIDを取得 :
  - ZimaOSダッシュボード → 設定 → ネットワーク → リモートアクセス → 有効にする → 「NetworkID」をクリックしてコピー
![](https://manage.icewhale.io/api/static/docs/1742550534267_image.png)
2. Zerotierをインストールし、SSHを有効にします。(関連リソースは記事の下部にあります)
3. QNAPの設定 :
  - QTSにSSH接続して、次のコマンドを実行:
`zerotier-cli join [ZimaOS NetworkID]`
4. 接続を確認 :
  - ZimaOS Zerotier IPを取得: ネットワーク → 仮想ネットワーク → 静的IP
  - `ping [ZimaOS Zerotier IP]`でテスト
### ステップ3: HBS 3同期タスクを作成
1. 同期を設定 :
  - QTSアプリセンターから「HBS 3」をインストール
  - HBS 3を起動し、Sync → 双方向同期ジョブ → WebDAVアカウントを追加
![](https://manage.icewhale.io/api/static/docs/1742550603938_image.png)
2. 最適化 :
  - '競合ポリシー'を選択してローカルファイルの名前を変更
  - 'ジョブスケジュール頻度'を30秒〜300秒に設定
## 結論とリソース
![](https://manage.icewhale.io/api/static/docs/1742550646713_image.png)
あなたは達成しました:
✅ リアルタイムのクロスシステム同期
✅ 公開IPなしでのNAT貫通
✅ 自動化された双方向のファイル同期
使用中に問題が発生した場合は、いつでもお気軽にご連絡ください。また、[コミュニティ](https://community.zimaspace.com/)や[Discord](https://discord.gg/uuNfKzG5)に参加して、NASやZimaOSについての議論を楽しんでください。あなたのフィードバックをお待ちしています！

さらなるリーディング:
[QNAPのZerotier公式マニュアル](https://docs.zerotier.com/qnap/)
[QNAPでのSSHアクセスを有効にする方法](https://www.qnap.com.cn/zh-cn/how-to/faq/article/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-ssh-%E8%AE%BF%E9%97%AE-qnap-nas)
[ZimaOSとSynology DSM間でファイルを同期させる方法](https://www.youtube.com/watch?v=n8ajxo6Uh3c)