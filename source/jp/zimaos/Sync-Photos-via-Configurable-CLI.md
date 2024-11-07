---
title: CLIを使ってZimaOSを徘徊する方法
description:
type: “Docs”
tip: 上部バーは固定形式のため削除しないでください。descriptionは記事の説明であり、未入力の場合は内容の最初の段落を切り取ります。
---
ZimaOS 3は、NAS愛好者、プロユーザー、スタジオユーザーにとって革新的な存在です。その直感的なインターフェースはデータのバックアップと管理を簡素化し、重要なファイルが常に安全であることを保証します。ZimaOSは、数回のクリックでDockerアプリケーションのインストールをスムーズに行うことができます。

ZimaOSの華やかなUIの背後には何があるのか、考えたことはありますか？今日は、別のインターフェースを使用してZimaOSにアクセスします。
![](https://manage.icewhale.io/api/static/docs/1727176855906_image.png)

> GUI（グラフィカルユーザーインターフェース）は、アイコンとメニューを使った視覚的なインタラクティブ体験を提供し、直感的なナビゲーションのために設計されており、すべてのスキルレベルのユーザーに使いやすさで対応しています。一方、CLI（コマンドラインインターフェース）は、テキスト主体のインターフェースであり、コマンドを実行するために使用され、専門家にとってその効率性とスクリプト機能のために好まれています。
>
![](https://manage.icewhale.io/api/static/docs/1727176878586_image.png)
## ZimaOSでCLIに入る3つの方法

### 方法1: キーボードと画面を使用する

Zimaデバイスをキーボードと画面に接続します。起動すると、ZimaOSは画面上にこのようなインターフェースを表示します：
![](https://manage.icewhale.io/api/static/docs/1727177117363_image.png)
**Alt+F2**を押すと、ログインページに入ります。ここで、rootと入力してEnterを押します。このページに初めて入る場合、パスワードは不要で、直接ZimaOSのCLIに入ることができます。rootアカウントのパスワードを設定することをお勧めします。passwd-rootと入力すると、このツールがrootのパスワードを設定するように促します。SSHログインにはrootのパスワードが必要であることを心に留めておいてください。

### 方法2: SSHクライアントを使用する

SSHは広く使用されているリモートアクセス方法です。ZimaOSもSSHを使用してアクセスできます。

再度、SSHログインにはrootのパスワードが必要です。上記の内容を参照してください。

ターミナルを開きます。ここでは、Windowsターミナルを例示します。**ssh root@あなたのZimaOSのIP**と入力し、**Enter**を押します。キーのフィンガープリントを信頼するように求められ、パスワードを入力します。その後、SSHを介してZimaOSのCLIに入ります。
![](https://manage.icewhale.io/api/static/docs/1727177214909_image.png)
### 方法3: ttydBridgeアプリを使用する

これはZimaOSでCLIを使用するための推奨された方法です。ZimaデバイスのIP経由でZimaOSのWebUIにログインします。ZimaOSのWebUIで、アプリストアからttydBridgeをインストールすることができます。
![](https://manage.icewhale.io/api/static/docs/1727177258550_image.png)
インストール後、ダッシュボードからttydBridgeを起動し、ユーザー名とパスワードの入力を要求されます。WebUIにログインしているため、ttydBridgeのユーザー名にはデフォルトのadmin、パスワードにはpasswordを入力できます。すると、美しいCLIが表示されます：
![](https://manage.icewhale.io/api/static/docs/1727177269954_image.png)
### 違いと一般的なコマンド
安全上の理由から、ほとんどのシステムフォルダは読み取り専用であり、rootとしてログインした場合でも、ZimaOSのファイルシステムは他のlinuxディストリビューションとは異なります。

ユーザーデータやアプリデータは/DATAに保存されます。/DATAのサブディレクトリ内でファイルやフォルダを作成、削除、修正するためのコマンドを自由に使用してください。もちろん、これらの実験を行うために/DATA内に新しいサブフォルダを作成することをお勧めします。

ここでは、一般的に使用されるいくつかのコマンドとツールを共有します。
![](https://manage.icewhale.io/api/static/docs/1727177290437_image.png)
![](https://manage.icewhale.io/api/static/docs/1727177297428_image.png)
![](https://manage.icewhale.io/api/static/docs/1727177303590_image.png)
これらのコマンドはすべてZimaOSで正常に動作します。この表がZimaOSでCLIがどのように機能するかを理解する手助けになりますように。

使用中に問題が発生した場合は、いつでもお気軽にお知らせください。下にコメントしていただければ大丈夫です。また、DockerアプリやZimaOSについてもっと話し合うために、[Discord](https://discord.com/invite/uuNfKzG5)に参加することもできます。皆様からのフィードバックを楽しみにしています！