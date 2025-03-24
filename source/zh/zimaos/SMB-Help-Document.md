---
title: SMB帮助文档
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字
---
## 核心问题
- **认证方式错误：** 直接输入`smb://IP`连接时，系统默认使用匿名或系统用户，导致认证失败并且连接响应时间过长。
- **MacOS 14.x版本缓存问题：** 第一次认证失败后，即使之后输入正确的账号和密码，连接仍然无法建立。必须通过输入大小写不一致的用户名绕过macOS缓存重新认证。例如，正确的账号密码是`zimaos/zimaos`，第一次输入 
`smb://zimaos:zimaos1@10.0.0.99/ZimaOS-HD`（密码错误）失败后，再次输入 
`smb://zimaos:zimaos@10.0.0.99/ZimaOS-HD`仍然无法连接。必须输入
`smb://Zimaos:zimaos@10.0.0.99/ZimaOS-HD`（或者继续改变用户名的大小写）。

## 服务器SMB服务状态检查
1. 确保服务器上的SMB服务已经正确启动。
- 当服务器未启动时，Windows和macOS会显示相应的错误提示。
| ![](https://manage.icewhale.io/api/static/docs/1742797263676_image.png) | ![](https://manage.icewhale.io/api/static/docs/1742797274843_image.png) |
- 输入错误的用户名进行匿名登录时，文件夹会显示为空白。
- 输入正确的用户名但密码错误时，会出现密码错误提示。
2. 可以通过命令确定当前连接的账户名，以确认登录状态。

## 客户端解决方案
### Windows 10/11
1. 清除现有的连接记录：
- `net use \\%IP%\ /delete /y`
- 示例：`net use \\10.0.0.99\ /delete /y`
2. 保存连接凭证：
- `cmdkey /add:% IP% /user:%USERNAME% /pass:%PASSWORD%`
- 示例：`cmdkey /add:10.0.0.99 /user:zimaos /pass:zimaos`
3. 映射网络驱动器：
- `net use \\%IP%\ /USER:% USERNAME% %PASSWORD% /PERSISTENT:YES`
- 示例：`net use \\10.0.0.99\ /USER:zimaos zimaos /PERSISTENT:YES`
4. Windows连接SMB脚本：
- 可以将以上命令合并为批处理文件，方便快捷执行。
Windows连接SMB脚本
```language
@echo off
echo 请填写以下信息：
set /p IP=请输入IP地址: 
set /p USERNAME=请输入用户名: 
set /p PASSWORD=请输入密码: 

:: 删除之前的网络驱动器，如果存在
net use \\%IP%\ /delete /y

:: 使用cmdkey保存凭证
cmdkey /add:%IP% /user:%USERNAME% /pass:%PASSWORD%

:: 映射网络驱动器
net use \\%IP%\ /USER:%USERNAME% %PASSWORD% /PERSISTENT:YES

:: 打开网络共享
start explorer \\%IP%\

:: 暂停片刻，允许资源管理器打开文件夹
timeout /t 2 /nobreak > NUL

:: 使用PowerShell刷新文件夹窗口
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
    Write-Host \"未找到窗口.\"
}
"

echo 命令执行成功。
pause
```
### MacOS
1. 使用Finder连接：
- 按`Command+K`打开“连接服务器”窗口。
- 输入`smb://USERNAME:PASSWORD@IP/PATH`。
- 示例：`smb://zimaos:zimaos@1.0.0.99/ZimaoS-HD`。
2. 解决macOS 14.x缓存问题：
- 如果第一次认证失败，可以尝试改变用户名的大小写，例如：`smb://Zimaos:zimaos@1.0.0.99/ZimaoS-HD`。