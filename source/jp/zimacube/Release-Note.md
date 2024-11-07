---
title: タイトル
description:
type: “Docs”
tip: トップバーの固定フォーマットは削除しないでください。descriptionは記事の説明であり、未記入の場合は最初の段落の内容を切り取ります。
---

私たちは、コミュニティユーザーの皆様の積極的な参加と貴重な提案に心より感謝申し上げます。これにより、ZimaOSを継続的に改善し洗練させることができています！もっとアイデアを共有していただけると嬉しいです！

ヒント

もしソフトウェアに問題が見つかった場合は、Discordに参加して20,000人のZimaコミュニティメンバーからサポートを受けることができます.-[IceWhale](https://discord.com/invite/f9nzbmpMtU)
# ZimaOS v1.2.3
![](https://manage.icewhale.io/api/static/docs/1724749372699_image.png)
## 修正
RAIDストレージに関連する体験の問題を修正 @scottyman2k@orochikun

システムのインストールまたはアップグレードの失敗を修正 @Secarius@Bmorg

SSDが認識されないまたは誤配置される問題を修正 @Scyto@artophe@Vinney

異常なCPUリソース使用に関する問題を修正 @jojo@goultron

ユーザーを作成できない、SSHが使用できない、システムディスクの容量表示エラーの問題を修正 @applegeek@Halogen

ファイルでは、サムネイルが5倍速で表示されるようになりました

ZVMでは、作成ボタンを連続でクリックした際の仮想マシンの二重作成の問題を修正 @cfouche

PeerDropにログイン認証が追加され、セキュリティが向上

ポート53が解放され、Pi-holeまたはAdGuard Homeが正常に動作することを保証 @oldintynazar

## 新機能

ZimaOSの新しいユーザーには、ZimaOS HDおよびすべてのストレージスペースに対してSamba共有がデフォルトで有効になり、ZimaOSアカウントとパスワードで保護されます

ZimaOSを現在のバージョンにアップグレードした後にパスワードを変更すると、上記のSamba共有が有効になります

ZimaOSシステムパスワードが変更されると、Samba共有のパスワードも同期で変更されます

RAID5では、新しいハードディスクを追加してスペースを拡張できます

RAID5内の1つのディスクが損傷しても、データを読み取ることができます

ファイルでは、ストレージスペースの容量が左側のカラムに追加されます

ファイルでは、新しいZimaロゴが左上に追加され、クリック後にダッシュボードに戻ることができます

ZVM、Assist、およびApp設定では、ファイルセレクターにストレージスペースのサイドバーが追加され、より便利にファイルパスを選択できます

設定では、「パワーライトが常にオン」のスイッチが追加され、常に点灯しているパワーライトをアクティブにオフにできます @Sabitech

設定では、ZimaCubeProの10GイーサネットポートとThunderboltポートの動作状態表示が追加されました

Mac FinderとWindows Explorerのネットワーク機能でZimaCubeが自動的にスキャンされる確率が向上しました

ZFSストレージがZimaOS上で動作することを許可する @Brucio

## 削除
ZimaOSアカウントのユーザー名はもはや変更できません

## ダウンロード
:zap: ZimaOS V1.1をインストールしたユーザーは、ダッシュボードの左上隅にある赤い点をクリックして更新を開始してください。

:zap: インストーラー: https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3_installer.img

:zap: 手動アップグレード: https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3.raucb