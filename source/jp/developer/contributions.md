---
title: コミュニティユーザーによる提案ドライバーが実装されました
description: ZimaOSのドライバーはコミュニティの意見から成長し、ロードマップを形作っています。本ドキュメントでは、サポートされているハードウェアと今後の作業のリアルタイムで拡張されるリストを示します。次に欲しいものはフォーラムやDiscordで共有してください。
type: “Docs”
tip: 上部バーの固定フォーマットは削除しないでください。descriptionは記事の説明です。未記入の場合、内容の最初の段落が使用されます。
---

あなたのリクエストや会話は、単なる「提案箱」に入るだけではなく、**私たちの開発ロードマップそのもの**です。私たちは常に皆さんのニーズを聞き、そこから構築を続けています。

以下の進捗をご覧ください：コミュニティからの入力によって推進され、ZimaOSによって統合された、リアルタイムで拡張されるドライバーのコレクションです。皆さんと一緒に、お気に入りのハードウェアが正しくサポートされるようにしています。


<hr>

**次期バージョンでの予定:**
- Intel Wireless シリーズ: ax101 ax200 ax201 (@sargents79 [提案開始](https://community.zimaspace.com/t/wifi-drivers-for-beelink-me-mini/5632))

- NordVPNアプリに対応する netfilter_xt_match_comment カーネルモジュール (@jaskid @Khapra [提案開始](https://community.zimaspace.com/t/how-to-install-xt-comment-module-on-zimaos/4588))


<hr>

**実装済みの提案:**

- Intel x540 NIC (@cor, @Vector-Maker [提案開始](https://community.zimaspace.com/t/support-for-intel-10gb-network-cards-on-zimaos/3833))

- Mellanox 25G NIC (@scyto [提案開始](https://discord.com/channels/884667213326463016/988764540445556756/1286494532485120124))

- Thunderbolt eGPU (@scyto 提案 `thunderbolt.host_reset=false`)  
  Thunderbolt Network (@scyto 提案 `mtu=65520`)

- LSI RAID アダプター、LSI Logic MegaRAID SAS RAID、LSI HBA (@carlosmcenter [提案開始](https://community.zimaspace.com/t/zimaos-problem-hardware-control-lsi-9207-sas/5280/3))

- Coral Apex (Frigate)、Coral用ガスケット (@juliovillamizar [提案開始](https://community.zimaspace.com/t/how-install-coral-apex-drivers-pci-working-for-frigate-on-zimaos/5004/8))

- Intel 40G ファイバ NIC x710 (@Emanuele [提案開始](https://discord.com/channels/884667213326463016/1251135424303337524/1330264864765116447))

- ATHEROS ATH9K (AR93xx) (@longwordnet 提案開始)


<hr>

**その他実装済みドライバー:**

- Ugreen ax900 USB 無線 NIC (AIC8800)  
- RTL88X2BU  
- RTL8821CU  
- Intel 82599 NIC  
- Realtek rtl8126 5G NIC

皆さんの声こそが最も重要な要素です。ここに挙げたドライバーや機能は、コミュニティからのシンプルなリクエストから始まりました—そして私たちはさらなるリクエストにも応えます。次に接続したいハードウェアは何ですか？どの機能があれば ZimaOS の体験が完璧になりますか？

ぜひビジョンを共有してください。私たちは全てのプラットフォームでフィードバックを積極的に監視・対応しています。リクエストはこちらで受け付けています：

- 公式フォーラム: community.zimaspace.com  
- Discord: https://www.zimaboard.com/discord  
- X (旧Twitter): [https://x.com/ZimaSpace](https://bit.ly/3Irgbph)  
- Facebook: [https://www.facebook.com/zimaboard](https://bit.ly/4gscTP2)

皆さんの入力が直接、私たちの開発を動かします。共に作り続けましょう。