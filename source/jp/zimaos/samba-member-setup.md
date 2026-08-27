---
title: 複数ユーザーとのSamba
description:
type: "Docs"
tip: 上部バーの固定形式は削除しないでください、descriptionは記事の説明です。未記入の場合は内容の最初の段落を切り取ります。
---

## Sambaは何ができる？

### Sambaの3つの役割
<img align="right" src="https://manage.icewhale.io/api/static/docs/1728713979484_image.png" alt="Sambaの3つの役割">

---

## 「マネージャー」として共有を作成する方法は？（マネージャーロードマップ）

**1. ファイルを選択し、「Sambaを共有」をクリックします。**

---

**2. パーミッションを設定します**

| 1. 役割を選択 <br><br> a. メンバー:<br> 1. 新しいメンバーを作成<br>2. 新しいメンバーを選択<br><br> b. ゲスト:<br>ファイルのアドレスを持っている人は誰でもアクセスできます。 | ![](https://manage.icewhale.io/api/static/docs/1728719197031_image.png) |
| -------- | ----- |
| 2. パーミッションを選択<br><br> **パーミッション「読み取り」:** <br> ダウンロードのみ。<br> **パーミッション「読み書き」:** <br> すべての操作を行えます（ダウンロード、アップロード、名前の変更、削除）。 | ![](https://manage.icewhale.io/api/static/docs/1728719216869_image.png)|

---

**3. 共有を作成する**

| 1. 「作成」をクリック | <img align="right" src="https://manage.icewhale.io/api/static/docs/1728638375493_image.png" alt="共有を作成"> |
| -------- | ----- |
| 2. OSに基づいて「アドレス」を選択し、「コピー」します。それをメンバーまたはゲストに送信します。 | <img align="right" src="https://manage.icewhale.io/api/static/docs/1728638496968_image.png" alt="アドレスを送信"> |

---

**4. 共有ファイルを管理する**

共有を管理する方法は2つあります：

| 1. 「共有」をクリック | <img align="right" src="https://manage.icewhale.io/api/static/docs/1728638620287_image.png" alt="共有ボタン"> |
| -------- | ----- |
| 2. 「Samba経由で共有」というページで、ファイルにカーソルを合わせてパーミッションを編集します。<br><br> 「保存」をクリックして変更を確認します。<br> アドレスは常に表示されます。 | <img align="right" src="https://manage.icewhale.io/api/static/docs/1728638763045_image.png" alt="Samba経由で共有"><br><img align="right" src="https://manage.icewhale.io/api/static/docs/1728638801741_image.png" alt="パーミッションの編集"> |
| 3. 右クリックしてコンテキストメニューから「Sambaを管理」を選択します。  | ![](https://manage.icewhale.io/api/static/docs/1728714108676_image.png) |

---

**5. 共有作成のロードマップ**
<img align="right" src="https://manage.icewhale.io/api/static/docs/1728714127575_image.png" alt="共有のロードマップ">

---

## 「マネージャー」としてメンバーを管理する方法は？（ロードマップ）

<img align="right" src="https://manage.icewhale.io/api/static/docs/1728714150294_image.png" alt="メンバー管理のロードマップ">

---

**6. メンバーを管理する**

***「設定 - メンバー」ページで：***

| 1. 新しいメンバーアカウントを作成 | <img align="right" src="https://manage.icewhale.io/api/static/docs/1728639235564_image.png" alt="メンバーを作成"> |
| -------- | ----- |
| 2. アカウントを編集または削除します。<br> **新しいパスワードを設定**または**アカウントを削除**します。 | <img align="right" src="https://manage.icewhale.io/api/static/docs/1728639475546_image.png" alt="メンバーの編集"><img align="right" src="https://manage.icewhale.io/api/static/docs/1728639486206_image.png" alt="メンバーを削除"><img align="right" src="https://manage.icewhale.io/api/static/docs/1728639504689_image.png" alt="メンバーのパスワード"><img align="right" src="https://manage.icewhale.io/api/static/docs/1728639516436_image.png" alt="編集の確認"> |

---

## 「メンバー」としてSambaを使用する方法は？

**OSに対するアドレスの互換性を確認します。**

### 1. Windows OSの場合

1. 「ファイルエクスプローラー」を開く。  
<img align="left" src="https://manage.icewhale.io/api/static/docs/1728370332527_4.1.png" alt="ファイルエクスプローラー">

2. 検索ボックスにアドレスを入力します。  
<img align="left" src="https://manage.icewhale.io/api/static/docs/1728370346032_4.2.png" alt="アドレスを入力">

3. アカウント名とパスワードを入力します。  
4. 「OK」をクリックします。  
<img align="left" src="https://manage.icewhale.io/api/static/docs/1728370367682_4.3.png" alt="資格情報を入力">

5. 接続に成功しました。  
<img align="left" src="https://manage.icewhale.io/api/static/docs/1728370378592_4.4.png" alt="接続成功">

---

### 2. Mac OSの場合

1. メニューバーの「移動」-「サーバーに接続」をクリックします。  
![](https://manage.icewhale.io/api/static/docs/1728716756088_image.png)

2. アドレスを入力します。  
3. 「接続」をクリックします。  
![](https://manage.icewhale.io/api/static/docs/1728716774112_image.png)

4. さらに続行するには「接続」をクリックします。  
![](https://manage.icewhale.io/api/static/docs/1728716793165_image.png)

5. メンバーのアカウントとパスワードを入力 <br> 「接続」をクリックします。

![](https://manage.icewhale.io/api/static/docs/1728717010704_image.png)

6. 接続に成功しました。

![](https://manage.icewhale.io/api/static/docs/1728716826383_image.png)

7. 問題が発生した場合は、ファイルマネージャーでパーミッションを確認してください。

![](https://manage.icewhale.io/api/static/docs/1728717094721_image.png)

![](https://manage.icewhale.io/api/static/docs/1728716835239_image.png)

---
<br>

## 「ゲスト」としてSambaを使用する方法

**OSに対するアドレスの互換性を確認します。**

### 1. Windows OSの場合

1. 「ファイルエクスプローラー」を開く。  
<img align="left" src="https://manage.icewhale.io/api/static/docs/1728370332527_4.1.png" alt="ファイルエクスプローラー">

2. 検索ボックスにアドレスを入力します。  
<img align="left" src="https://manage.icewhale.io/api/static/docs/1728370346032_4.2.png" alt="アドレスを入力">

3. アカウント名とパスワードを入力します。  
4. 「OK」をクリックします。  
<img align="left" src="https://manage.icewhale.io/api/static/docs/1728370367682_4.3.png" alt="資格情報を入力">

5. 接続に成功しました。  
<img align="left" src="https://manage.icewhale.io/api/static/docs/1728370378592_4.4.png" alt="接続成功">

### 2. Mac OSの場合

1. メニューバーの「移動」-「サーバーに接続」をクリックします。  
![](https://manage.icewhale.io/api/static/docs/1728716756088_image.png)

2. アドレスを入力します。  
3. 「接続」をクリックします。  
![](https://manage.icewhale.io/api/static/docs/1728716774112_image.png)

4. さらに続行するには「接続」をクリックします。  
![](https://manage.icewhale.io/api/static/docs/1728716793165_image.png)

5. 「接続」をクリックします。  

![](https://manage.icewhale.io/api/static/docs/1728716808184_image.png)

6. 接続に成功しました。  

![](https://manage.icewhale.io/api/static/docs/1728717283253_image.png)

7. 問題が発生した場合は、ファイルマネージャーでパーミッションを確認してください。  

![](https://manage.icewhale.io/api/static/docs/1728716835239_image.png)