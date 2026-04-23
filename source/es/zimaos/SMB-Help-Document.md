---
title: Documento de ayuda SMB
description: "Solucione problemas y configure el uso compartido de archivos SMB en ZimaOS. Cubre la configuración de clientes Windows, Mac y Linux, problemas de permisos y problemas de conexión."
type: Docs
author: admin
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /es/zimaos/smb-troubleshooting.html
---
## Problemas principales
-**Método de autenticación incorrecto:** al ingresar directamente `smb://IP` al conectarse, el sistema usa por defecto usuarios anónimos o del sistema, lo que provoca fallos de autenticación y tiempos de respuesta de conexión excesivamente largos.
-**Problema de caché en macOS 14.x:** después de que la primera autenticación falla, aunque se ingresen posteriormente la cuenta y contraseña correctas, no se puede establecer la conexión. Debe omitir la caché de macOS ingresando un nombre de usuario con mayúsculas/minúsculas inconsistentes para volver a autenticarse. Por ejemplo, si la cuenta y contraseña correctas son `zimaos/zimaos`, primero ingrese
`smb://zimaos:zimaos1@10.0.0.99/ZimaOS-HD`(contraseña incorrecta); tras el fallo, ingrese nuevamente
`smb://zimaos:zimaos@10.0.0.99/ZimaOS-HD`y seguirá sin poder conectarse. Debe ingresar
`smb://Zimaos:zimaos @10.0.0.99/ZimaOS-HD`(o continuar cambiando las mayúsculas/minúsculas del nombre de usuario).

## Verificación del estado del servicio SMB en el servidor
1. Asegúrese de que el servicio SMB en el servidor se haya iniciado correctamente.
- Cuando el servidor no está iniciado, Windows y macOS mostrarán los mensajes de error correspondientes.
![](https://manage.icewhale.io/api/static/docs/1742798542938_image.png)
![](https://manage.icewhale.io/api/static/docs/1742798548818_image.png)

- Al ingresar un nombre de usuario incorrecto para el inicio de sesión anónimo, la carpeta aparece vacía.
- Al ingresar el nombre de usuario correcto pero una contraseña incorrecta, aparecerá un mensaje de error de contraseña.
2. El nombre de la cuenta conectada actualmente puede determinarse mediante comandos para confirmar el estado de inicio de sesión.

## Solución para el cliente
### Windows 10/11
1. Borrar registros de conexión existentes:
- `net use \\%IP%\ /delete /y`
- Ejemplo: `net use \\10.0.0.99\ /delete /y`
2. Guardar credenciales de conexión:
- `cmdkey /add:% IP% /user:%USERNAME% /pass:%PASSWORD%`
- Ejemplo: `cmdkey /add:10.0.0.99 /user:zimaos /pass:zimaos`
3. Mapear unidades de red:
- `net use \\%IP%\ /USER:% USERNAME% %PASSWORD% /PERSISTENT:YES`
- Ejemplo: `net use \\10.0.0.99\ /USER:zimaos zimaos /PERSISTENT:YES`
4. Script de conexión SMB para Windows:
- Puede combinar los comandos anteriores en un archivo batch para una ejecución rápida y sencilla.
Script de conexión SMB para Windows
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
    [DllImport("user32.dll")]
    public static extern bool SendMessage(IntPtr hWnd, int Msg, IntPtr wParam, IntPtr lParam);
}
'@
\$HWND = (Get-Process | Where-Object { \$_.MainWindowTitle -match '%IP%' }).MainWindowHandle
if (\$HWND -ne [IntPtr]::Zero) {
    [WinAPI]::SendMessage(\$HWND, 0x0111, [IntPtr]0x702C, [IntPtr]0)
} else {
    Write-Host "Window not found."
}
"

echo Commands executed successfully.
pause`
### MacOS
1. Conectarse usando Finder:
- Presione `Command+K` para abrir la ventana "Conectarse al servidor".
- Ingrese `smb://USERNAME:PASSWORD @IP/PATH`.
- Ejemplo: `smb://zimaos:zimaos @1.0.0.99/ZimaoS-HD`.
2. Resolver el problema de caché en macOS 14.x:
- Si la primera autenticación falla, intente cambiar las mayúsculas/minúsculas del nombre de usuario, por ejemplo: `smb://Zimaos:zimaos @1.0.0.99/ZimaoS-HD`.
