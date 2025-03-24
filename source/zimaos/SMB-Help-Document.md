---
title: SMB Help Document
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Core issues
-**Incorrect authentication method:** entered directly `smb://IP` When connecting, the system defaults to using anonymous or system users, resulting in authentication failure and excessively long connection response times.
-**MacOS 14. x version cache issue:** After the first authentication fails, even if the correct account and password are entered later, the connection cannot be established. You must bypass macOS cache by entering a username with inconsistent case to re authenticate. For example, if the correct account password is `zimaos/zimaos`, first input 
`smb://zimaos:zimaos1@10.0.0.99/ZimaOS-HD`(password error) after failure, enter again 
`smb://zimaos:zimaos@10.0.0.99/ZimaOS-HD`still unable to connect. must enter
`smb://Zimaos:zimaos @10.0.0.99/ZimaOS-HD`(or continue to change the case of the username).

## Server SMB service status check
1. Ensure that the SMB service on the server has started properly.
- When the server is not started, Windows and macOS will display corresponding error prompts.
![](https://manage.icewhale.io/api/static/docs/1742798542938_image.png)
![](https://manage.icewhale.io/api/static/docs/1742798548818_image.png)

- When entering the wrong username for anonymous login, the folder appears blank.
- When entering the correct username but entering the wrong password, there will be a password error prompt.
2.The current connected account name can be determined through commands to confirm the login status.

## Client solution
### Windows 10/11
1. Clear existing connection records:
- `net use \\%IP%\ /delete /y`
- Example: `net use \\10.0.0.99\ /delete /y`
2. Save connection credentials:
- `cmdkey /add:% IP% /user:%USERNAME% /pass:%PASSWORD%`
- Example: `cmdkey /add:10.0.0.99 /user:zimaos /pass:zimaos`
3. Map network drivers:
- `net use \\%IP%\ /USER:% USERNAME% %PASSWORD% /PERSISTENT:YES`
- Example: `net use \\10.0.0.99\ /USER:zimaos zimaos /PERSISTENT:YES`
4. Windows connection SMB script:
- You can combine the above commands into a batch file for easy and quick execution.
Windows connection smb script
`@echo off
echo Please enter the following details:
set /p IP=Enter IP Address: 
set /p USERNAME=Enter Username: 
set /p PASSWORD=Enter Password: 

:: Delete previous network drive if exists
net use \\%IP%\ /delete /y

:: Save credentials using cmdkey
cmdkey /add:%IP% /user:%USERNAME% /pass:%PASSWORD%

:: Map the network drive
net use \\%IP%\ /USER:%USERNAME% %PASSWORD% /PERSISTENT:YES

:: Open the network share
start explorer \\%IP%\

:: Pause for a moment to allow explorer to open the folder
timeout /t 2 /nobreak > NUL

:: Refresh the folder window using PowerShell
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
    Write-Host \"Window not found.\"
}
"

echo Commands executed successfully.
pause`
### MacOS
1. Connect using Finder:
- Press `Command+K` to open the 'Connect Server' window.
- Input `smb://USERNAME:PASSWORD @IP/PATH`.
- Example: `smb://zimaos:zimaos @1.0.0.99/ZimaoS-HD`.
2. Resolve macOS 14. x cache issue:
- If the first authentication fails, try changing the case of the username, for example: `smb://Zimaos:zimaos @1.0.0.99/ZimaoS-HD`.
