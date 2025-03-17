---
title: 記事のタイトル
description: 
type: Docs
author: admin
tip: 上部バーの固定フォーマットは削除しないでください, descriptionは記事の説明で、未記入の場合は内容の最初の段落の文字が切り取られます
---
## 「アカウント初期化失敗」エラーの修正：クイックガイド

---

### **オプション1: ZimaOSの再インストール**  
**必要なツール**:  
- 空のUSBドライブ（≥4GB）  
- キーボード  

**手順**:  
- [このリンク](https://www.zimaspace.com/docs/jp/zimacube/How-to-Install-ZimaOS)を参照して、インストールを完了してください。

---

### **オプション2: コマンドライン修復**  
**必要なツール**:  
- HDMI/DP/Type-Cモニター
- キーボード  

**手順**:  
1. **コマンドラインモードにログイン**  
   - モニターを接続する > Alt+F2を押す > `root`と入力してコマンドラインモードにログイン

2. **システムファイルを修復**:  
   - 次を実行してください
```language
cat /etc/release.yaml
```

   - 次を実行してください
```language
rm -rf /var/lib/casaos/db/user.db && systemctl restart zimaos-user 
```
   - 完了！これで再度zimaosにログインしてみてください

ご支援ありがとうございます！