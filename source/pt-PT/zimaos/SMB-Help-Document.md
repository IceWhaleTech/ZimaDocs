---
title: Documento de Ajuda SMB
description: 
type: Docs
author: admin
tip: O formato fixo na barra superior não deve ser excluído. A descrição é para o artigo; se não for preenchida, será capturada a primeira parte do conteúdo.
---
## Problemas principais
- **Método de autenticação incorreto:** ao digitar diretamente `smb://IP` ao se conectar, o sistema usa, por padrão, usuários anônimos ou do sistema, resultando em falha de autenticação e tempos de resposta excessivamente longos.
- **Problema de cache na versão MacOS 14.x:** Após a falha de autenticação inicial, mesmo se a conta e a senha corretas forem inseridas posteriormente, a conexão não pode ser estabelecida. É necessário contornar o cache do macOS inserindo um nome de usuário com a diferença de maiúsculas e minúsculas para reautenticar. Por exemplo, se a conta e a senha corretas forem `zimaos/zimaos`, insira primeiro 
`smb://zimaos:zimaos1@10.0.0.99/ZimaOS-HD` (erro de senha) e após a falha, insira novamente 
`smb://zimaos:zimaos@10.0.0.99/ZimaOS-HD` e ainda assim não conseguirá conectar. Deve-se então inserir
`smb://Zimaos:zimaos@10.0.0.99/ZimaOS-HD` (ou continuar mudando a caixa do nome de usuário).

## Verificação do status do serviço SMB no servidor
1. Certifique-se de que o serviço SMB no servidor foi iniciado corretamente.
- Quando o servidor não está iniciado, o Windows e o macOS exibem as mensagens de erro correspondentes.
| ![](https://manage.icewhale.io/api/static/docs/1742797263676_image.png) | ![](https://manage.icewhale.io/api/static/docs/1742797274843_image.png) |
- Quando o nome de usuário errado é inserido para login anônimo, a pasta aparece em branco.
- Quando o nome de usuário correto é inserido, mas a senha está errada, aparecerá a mensagem de erro de senha.
2. O nome da conta conectada atualmente pode ser determinado através de comandos para confirmar o status de login.

## Solução para o cliente
### Windows 10/11
1. Limpar registros de conexão existentes:
- `net use \\%IP%\ /delete /y`
- Exemplo: `net use \\10.0.0.99\ /delete /y`
2. Salvar credenciais de conexão:
- `cmdkey /add:%IP% /user:%USERNAME% /pass:%PASSWORD%`
- Exemplo: `cmdkey /add:10.0.0.99 /user:zimaos /pass:zimaos`
3. Mapear unidades de rede:
- `net use \\%IP%\ /USER:%USERNAME% %PASSWORD% /PERSISTENT:YES`
- Exemplo: `net use \\10.0.0.99\ /USER:zimaos zimaos /PERSISTENT:YES`
4. Script de conexão SMB do Windows:
- Você pode combinar os comandos acima em um arquivo de lote para execução rápida e fácil.
Script de conexão SMB do Windows:
```language
@echo off
echo Por favor, insira os seguintes detalhes:
set /p IP=Digite o endereço IP: 
set /p USERNAME=Digite o nome de usuário: 
set /p PASSWORD=Digite a senha: 

:: Apagar a unidade de rede anterior, se existir
net use \\%IP%\ /delete /y

:: Salvar credenciais usando cmdkey
cmdkey /add:%IP% /user:%USERNAME% /pass:%PASSWORD%

:: Mapear a unidade de rede
net use \\%IP%\ /USER:%USERNAME% %PASSWORD% /PERSISTENT:YES

:: Abrir o compartilhamento de rede
start explorer \\%IP%\

:: Pausar por um momento para permitir que o Explorer abra a pasta
timeout /t 2 /nobreak > NUL

:: Atualizar a janela da pasta usando PowerShell
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
    Write-Host \"Janela não encontrada.\"
}
"

echo Comandos executados com sucesso.
pause
```
### MacOS
1. Conectar usando o Finder:
- Pressione `Command+K` para abrir a janela 'Conectar ao servidor'.
- Insira `smb://USERNAME:PASSWORD@IP/PATH`.
- Exemplo: `smb://zimaos:zimaos@1.0.0.99/ZimaoS-HD`.
2. Resolver o problema de cache no macOS 14.x:
- Se a primeira autenticação falhar, tente alterar a caixa do nome de usuário, por exemplo: `smb://Zimaos:zimaos@1.0.0.99/ZimaoS-HD`.

