---
title: パスワードを回復する方法
description: 
type: "Docs"
tip: 上部バーの固定フォーマットは削除しないでください、descriptionは記事の説明で、未入力の場合は内容の最初の段落を切り取ります。
---
### ZimaOSのパスワードを忘れた場合は、以下の手順に従ってください：
1. HDMIケーブルを介してZimaCubeをモニターに接続します
![](https://manage.icewhale.io/api/static/docs/1728367816858_1.1.jpeg)

2. キーボードを使用してZimaCubeでSSHパスワードを設定します
![](https://manage.icewhale.io/api/static/docs/1728367843555_1.2.png)

3. ユーザーリセットコマンドを入力します
```
rm -fr /var/lib/casaos/db/user.db
```

4. デバイスを再起動します
![](https://manage.icewhale.io/api/static/docs/1728367919089_1.3.png)

5. 初期化のためにZimaOSに再度入ります
![](https://manage.icewhale.io/api/static/docs/1728367926499_1.4.png)