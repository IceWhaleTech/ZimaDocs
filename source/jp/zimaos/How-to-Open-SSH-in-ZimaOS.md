---
title: ZimaOSでSSHを開く方法
description:
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明であり、未記入の場合は内容の最初の段落が切り取られます。
---
# デフォルトではSSHは無効になっています。デバイスにキーボードとマウスを接続してください。ルートパスワードを作成するよう求めるメッセージが表示されます。次にSSHを有効にします。
![](https://manage.icewhale.io/api/static/docs/1722492895687_image.png)
## 1. モニターとキーボードを接続する：
最初に、デバイスにモニターとキーボードを接続します。
## 2. 設定モードに入る：
デバイスの電源を入れた後、通常はコマンドラインまたは設定インターフェースにアクセスするAlt + F2キーの組み合わせを押します。
## 3. ルートユーザーとしてログインする：

コマンドプロンプトで、rootと入力してルートユーザーとしてログインします。
## 4. ルートユーザーパスワードを変更する：

passwd-rootというコマンドを入力してルートパスワード設定のプロセスを開始します。

プロンプトに従って新しいパスワードを入力し、確認します。文字、数字、特殊文字の組み合わせを含む強力なパスワードを選択することを確認してください。
## 5. SSHサービスを有効にする：
![](https://manage.icewhale.io/api/static/docs/1722493052627_image.png)
これらの詳細な手順に従うことで、SSHを正常に有効にし、ルートパスワードを設定することができ、ネットワーク内の他のコンピュータからデバイスに安全にアクセスできるようになります。