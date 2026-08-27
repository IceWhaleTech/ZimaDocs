---
title: SMBヘルプドキュメント
description: 
type: Docs
author: admin
tip: 上部バーの固定形式は削除しないでください。descriptionは記事の説明です。記入しない場合、最初の段落が自動的に抽出されます。
---
## 主な問題
-**認証方法が間違っている:** `smb://IP`を直接入力して接続すると、システムは匿名またはシステムユーザーを使用するため、認証に失敗し、接続応答が非常に遅くなります。
-**MacOS 14.xバージョンのキャッシュ問題:** 最初の認証が失敗した後、正しいアカウントとパスワードを入力しても接続できません。macOSのキャッシュをバイパスするには、ユーザー名の大文字と小文字を変更して再認証を行う必要があります。例えば、正しいアカウントとパスワードが`zimaos/zimaos`の場合、最初に
`smb://zimaos:zimaos1@10.0.0.99/ZimaOS-HD`（パスワードエラー）を入力し、失敗した後、再度
`smb://zimaos:zimaos@10.0.0.99/ZimaOS-HD`と入力しても接続できません。その場合、`smb://Zimaos:zimaos@10.0.0.99/ZimaOS-HD`（またはユーザー名の大文字と小文字を変更し続ける）を入力する必要があります。

## サーバーのSMBサービス状態の確認
1. サーバー上でSMBサービスが正常に起動していることを確認してください。
- サーバーが起動していない場合、WindowsおよびmacOSはそれぞれのエラープロンプトを表示します。
| ![](https://manage.icewhale.io/api/static/docs/1742797263676_image.png) | ![](https://manage.icewhale.io/api/static/docs/1742797274843_image.png) |
- 匿名ログインのために間違ったユーザー名を入力すると、フォルダが空白で表示されます。
- 正しいユーザー名を入力し、間違ったパスワードを入力すると、パスワードエラープロンプトが表示されます。
2. 現在接続しているアカウント名は、コマンドを使用して確認できます。

## クライアント解決策
### Windows 10/11
1. 既存の接続記録を削除:
- `net use \\%IP%\ /delete /y`
- 例: `net use \\10.0.0.99\ /delete /y`
2. 接続資格情報を保存:
- `cmdkey /add:%IP% /user:%USERNAME% /pass:%PASSWORD%`
- 例: `cmdkey /add:10.0.0.99 /user:zimaos /pass:zimaos`
3. ネットワークドライブをマップ:
- `net use \\%IP%\ /USER:%USERNAME% %PASSWORD% /PERSISTENT:YES`
- 例: `net use \\10.0.0.99\ /USER:zimaos zimaos /PERSISTENT:YES`
4. Windows接続SMBスクリプト:
- 上記のコマンドをバッチファイルにまとめて、簡単に迅速に実行できます。
Windows接続smbスクリプト
```language
@echo off
echo 次の詳細を入力してください：
set /p IP=IPアドレスを入力してください： 
set /p USERNAME=ユーザー名を入力してください： 
set /p PASSWORD=パスワードを入力してください： 

:: 既存のネットワークドライブを削除
net use \\%IP%\ /delete /y

:: cmdkeyで資格情報を保存
cmdkey /add:%IP% /user:%USERNAME% /pass:%PASSWORD%

:: ネットワークドライブをマップ
net use \\%IP%\ /USER:%USERNAME% %PASSWORD% /PERSISTENT:YES

:: ネットワーク共有を開く
start explorer \\%IP%\

:: エクスプローラーがフォルダを開くのを待つ
timeout /t 2 /nobreak > NUL

:: PowerShellを使用してフォルダウィンドウを更新
powershell -Command "
Add-Type -TypeDefinition @'
using System.Runtime.InteropServices;
public class WinAPI {
    [DllImport(\"user32.dll\")]
    public static extern bool SendMessage(IntPtr hWnd, int Msg, IntPtr wParam, IntPtr lParam);
}
'@
\$HWND = (Get-Process | Where-Object { \$_.MainWindowTitle -match '%IP%' }).MainWindowHandle
if (\$HWND -ne [IntPtr]::Zero) {
    [WinAPI]::SendMessage(\$HWND, 0x0111, [IntPtr]0x702C, [IntPtr]0)
} else {
    Write-Host \"ウィンドウが見つかりません。\"
}
"

echo コマンドが正常に実行されました。
pause
```
### MacOS
1. Finderを使用して接続:
- `Command+K`を押して「サーバーに接続」ウィンドウを開きます。
- `smb://USERNAME:PASSWORD@IP/PATH`を入力します。
- 例: `smb://zimaos:zimaos@1.0.0.99/ZimaoS-HD`。
2. MacOS 14.xのキャッシュ問題を解決:
- 最初の認証が失敗した場合、ユーザー名の大文字と小文字を変更してみてください。例えば: `smb://Zimaos:zimaos@1.0.0.99/ZimaoS-HD`。

