---
title: ZimaCubeをThunderboltケーブルで接続する方法
description: 
type: "Docs"
tip: 上部のバーの固定フォーマットは削除しないでください。descriptionは記事の説明であり、記入しない場合は内容の最初の段落の文字を切り取ります。
---

コンピュータをThunderboltケーブルを使用してZimaCubeに接続し、より高速な接続速度を得たい場合は、次の手順に従ってください：

## Mac
- まだZimaClientを使用してZimaCubeに接続していない場合は、[ドキュメント](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client)を参照して[ZimaClient](https://find.zimaspace.com/)をダウンロードしてインストールしてください。ZimaClientは、最初のスキャン中にThunderbolt接続のデバイスを優先的に特定します。

![](https://manage.icewhale.io/api/static/docs/1728443998198_image.png)


1. Thunderboltケーブルの一端をZimaCubeの背面パネルのThunderboltポート（2つのポートのいずれか）に接続し、もう一端をあなたのコンピュータのThunderboltポートに接続します。
   - a. Thunderboltケーブル：Thunderbolt 3またはThunderbolt 4標準ケーブルが必要で、短いケーブルはより良い伝送の安定性と速度を提供します。
   - b. 注：ZimaCube Proの前面パネルポートはThunderbolt機能をサポートしておらず、ZimaCube自体はThunderbolt機能をサポートしていません。

| ![](https://manage.icewhale.io/api/static/docs/1728444041984_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444057975_image.png) |
|:---:|:---:|
| 1.1 ThunderboltケーブルをZimaCubeの背面パネルに接続 | 1.2 もう一端をコンピュータのThunderboltポートに接続 |


2. ケーブルを接続すると、ZimaClientは自動的に適応し、Thunderbolt接続に切り替えます。
   - まだZimaClientを使用してZimaCubeに接続していない場合は、[ドキュメント](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client)を参照して[ZimaClient](https://find.zimaspace.com/)をダウンロードしてインストールしてください。

| ![](https://manage.icewhale.io/api/static/docs/1728444146303_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444152947_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444159320_image.png) |
|:---:|:---:|:---:|
| 1. Thunderboltケーブルを挿入する前 <br> 例：IPアドレス 10.0.187.209 | 2. 約2分待つ <br> Thunderboltケーブルが挿入されたものとして認識されます。 | 3. Thunderboltケーブルの接続に成功 <br> 例：IPアドレス 169.254.1.1 |

3. Thunderboltケーブル接続から得られた新しいIPアドレスに基づいて、ダッシュボードを再度開き、Samba共有を設定し、対応する機能を使用します。
   - 注：ThunderboltケーブルとLANケーブルが接続されているときは、異なる2つのIPアドレスに配置されます。コンピュータ上でThunderboltケーブルに対応するIPアドレスにアクセスする必要があります。そうすることで、より高速なThunderbolt伝送の恩恵を受けることができます。
     
| ![](https://manage.icewhale.io/api/static/docs/1728444289229_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444304099_image.png) |
|:---:|:---:|
|  ダッシュボードを再度開く |  Samba共有を再設定する |

## Windows
- まだZimaClientを使用してZimaCubeに接続していない場合は、[ドキュメント](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client)を参照して[ZimaClient](https://find.zimaspace.com/)をダウンロードしてインストールしてください。ZimaClientは、最初のスキャン中にThunderbolt接続のデバイスを優先的に特定します。
1. ThunderboltケーブルをZimaCubeの背面パネルのThunderboltコネクタ（2つのコネクタのいずれか）に接続し、もう一端をWindows PCのThunderboltコネクタに接続します。
  - a. Thunderboltケーブル：Thunderbolt 3、Thunderbolt 4標準ケーブルが必要で、短いほど伝送の安定性と速度が向上します。
  - b. 注：ZimaCube Proの前面パネルのインターフェースはThunderbolt機能をサポートしておらず、ZimaCube自体もThunderbolt機能をサポートしていません。

| ![](https://manage.icewhale.io/api/static/docs/1729589901877_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729589918266_image.png) |
|:---:|:---:|
|  電源ケーブルがZimaCubeの背面パネルのThunderboltコネクタに接続されます。 |  ケーブルのもう一端がコンピュータのThunderboltコネクタに接続されます |


2. ケーブルを接続すると、ZimaClientは自動的に適応し、Thunderbolt接続に切り替えます。
  - まだZimaClientを使用してZimaCubeに接続していない場合は、ドキュメントを参照してZimaClientをダウンロードしてインストールしてください。
  - クライアントを開くと、あなたのデバイスがThunderbolt経由でZimaCubeに正常に接続されていることがわかります。
  - 接続するをクリックします。

| ![](https://manage.icewhale.io/api/static/docs/1729590200515_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729590218016_image.png) |
| - | - |


3. Thunderboltケーブルを正常に接続しました。
![](https://manage.icewhale.io/api/static/docs/1729590231315_image.png)

4. 新しいThunderboltケーブル接続のIPアドレスに基づいて、ダッシュボードを再度開き、Samba共有などを設定し、対応する機能を使用します。
- 注：ThunderboltケーブルとLANケーブルが接続可能な場合、それぞれ異なる2つのIPアドレスに配置されます。コンピュータ上でThunderboltケーブルの対応するIPアドレスにアクセスしない限り、Thunderboltケーブルでのより高速な転送は行われません。

## 拡張読み物
  1. MacOS FinderおよびWindows ExplorerでZimaCubeのファイルにアクセスして変更する方法については、[詳細](https://www.zimaspace.com/docs/zimaos/Using-Samba-as-a-Member)を参照してください。
  2. ZimaCubeでThunderbolt接続によって達成できる最速の転送速度については、[ZimaCube Thunderbolt接続転送速度分析](https://www.zimaspace.com/docs/zimacube/Transfer-Speeds-Over-Thunderbolt)を参照してください。

## トラブルシューティング（未完成）
1. クライアントが表示されない場合は、MacとWindowsのネットワーク設定を確認してください。
2. ZimaCubeがグラフィックカードに接続されている場合は、ZimaCubeを再起動してから再試行してください。

## FAQ
**1. ZimaCubeとは何ですか？外部USBストレージデバイスとどう異なりますか？**
   - a. ZimaCubeは個人向けのクラウドデバイスであり、同じ速度条件下でDAS接続を超えます。NASおよびDASの両方の機能を持ち、Thunderbolt 4ケーブルを介して個人のコンピュータに迅速に接続できますが、ZimaCube自体は独立したインターネット接続を維持します。
   - b. USBストレージデバイスとは異なり、ZimaCubeには独自のマザーボードとCPUがあり、単なるストレージデバイスではありません。そのため、Thunderboltケーブルを介して個人コンピュータに接続すると、Thunderboltネットワーク接続を確立し、USBストレージデバイスではなくThunderboltブリッジデバイスとして表示されます。ZimaCubeを個人コンピュータに接続しても、ZimaCubeの動作やインターネット接続に影響を与えず、NASとDASの両方として同時に動作します。
   - c. ZimaCubeをThunderboltブリッジを介して個人コンピュータに接続しても、外部USBストレージデバイスに比べて速度が遅くなることはありません。接続速度は主にケーブルとハードディスクによって決まります。ただし、ZimaCubeがLANおよびThunderboltケーブルに同時に接続されている場合、個人用コンピュータはどちらの方法でもZimaCubeに接続できます。ZimaClientがインストールされていると、速い接続に自動的に切り替わります。手動で接続すると、ZimaCubeはネットワーク上に2つのIP（デバイス）として表示されます。

**2. Thunderbolt 4はZimaCube Proで最も速い接続ですか？**
   - はい。

**3. ZimaCube ProにはThunderbolt経由でしか使用できない機能がありますか？**
   - TB4は、外部ディスプレイ、ストレージデバイス、USB周辺機器、PCIeデバイス、ネットワーキング、充電など、すべての拡張機能をサポートしています。

**4. Thunderbolt 4を使用する際、追加のドライバーをインストールする必要がありますか？**
   - ZimaCubeにインストールされたZimaOSにはすでにドライバーが含まれています。
   - クライアントはドライバーがインストールされており、最新であることを確認する必要があります。

**5. Thunderbolt 4とLANの両方が接続されているとき、ファイル転送速度がLAN速度と同じになるのはなぜですか？なぜThunderbolt 4ではないのですか？（Mac）**
   - ThunderboltとLANの両方が接続されている場合、macOSはデフォルトでLANネットワークを使用します。
   - これはmacOSのシステムメカニズムの問題です。ZimaOSはこれを最適化するために取り組んでいます。その間、LANネットワークを切断し、TB4のみを接続することをお勧めします。

**6. SMBまたはファイル共有を介したファイル転送速度が非常に遅い場合、どうすればよいですか？**
   - ZimaClientをインストールしてください。ZimaClientは自動的により高速な接続に切り替わります。切り替えた後は、Thunderbolt接続を使用していることを確認するために「Finder/Explorerで開く」を再度クリックしてください。

**7. ZimaCube ProでのThunderbolt 4の実際の速度はどれくらいですか？**
   - スピードテストは20Gbpsに達することがありますが、実際の転送速度はハードディスクの制限、ファイルサイズ、およびプロトコルにより低下する場合があります。

**8. ZimaCube Proで最適なThunderbolt 4速度を達成するにはどうすればよいですか？**
   - a. 正規のThunderbolt 4ケーブルを購入してください。
   - b. ZimaCube内のハードドライブおよびRAID構成が、20Gbpsを超える読み書き速度をサポートできることを確認してください。
   - c. macOSでは、Samba転送速度がFinderによって制限される可能性があります。
   - d. 多くの小さなファイルを転送する際には、速度が制限される場合があります。

**9. Thunderbolt 4とUSBインターフェースの違いは何ですか？**
   - 参照してください：[Intelの比較](https://www.intel.com/content/www/us/en/architecture-and-technology/thunderbolt/thunderbolt-4-vs-usb-c.html)

**10. Thunderbolt 4インターフェースが有効にできない場合のトラブルシューティング手順は何ですか？**
   - a. デバイスとケーブルがTB4をサポートしているか確認してください。特にケーブルに注意してください。
   - b. PCに接続したときにThunderboltデバイスを検出できますか？
   - c. ZimaCubeは他のThunderboltデバイスやドックに接続できますか？

**11. Thunderbolt 4インターフェースとデバイスは互換性がありますか？**
   - TB4はTB3との後方互換性があります。

**12. ZimaCube ProのThunderbolt 4ポートはデイジーチェーン接続をサポートしていますか？**
   - はい。

**13. ZimaCube Proを通常の外部ハードドライブのように直接Thunderboltストレージデバイスとして使用できますか？**
   - いいえ、USBストレージデバイスとは異なり、ZimaCubeは独自のマザーボードとCPUを持っており、データ転送はそれらを通過します。

**14. Mac/PCの2つのThunderbolt 4ポートを介して複数のケーブルを接続しても速度は向上しますか？**
   - いいえ、TB Networkingはデュアルイーサネットケーブルのようなリンクアグリゲーションをサポートしていません。