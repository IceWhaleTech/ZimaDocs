---
title: Configurar Python
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo, se não preenchida, será cortada a primeira parte do conteúdo
---
# Modificar /etc/profile
Adicione as seguintes duas linhas ao perfil
```language
export HOME="/DATA"
export PATH="/DATA/.local/bin:/opt/bin:$PATH"
```
Execute Atualizar
`source /etc/profile`
# Instalar opkg
`wget -O - http://bin.entware.net/x64-k3.2/installer/generic.sh | /bin/sh`
# Questões relacionadas ao git
## Instalar git-http
`opkg install git-http`
# Como puxar projetos do GitHub sem senha
Como puxar projetos do GitHub sem senha
Devido a alguns problemas, o git não consegue encontrar a chave pública ssh normalmente. Portanto, podemos usar a ferramenta gh para evitar a senha.
Baixe o gh para `/opt/bin` (gerido pelo pacote opkg). Em seguida, faça login na conta com gh.
Ao puxar o projeto, use o terceiro método gh pull, para que git e pull possam ser.
## Python
ZimaOS instalou Python 3.12.5
![](https://manage.icewhale.io/api/static/docs/1727164432814_image.png)
Recomenda-se usar o ambiente virtual nevn para desenvolvimento
```language
mkdir project
cd project
python -m venv .
source ./bin/activate
```
# Modificar a configuração do vscode
Adicione a seguinte configuração à configuração do modo de código
```language
"remote.SSH.serverInstallPath": {
        "XXX.XXX.XXX.XXX": "/DATA",
    },
```
![](https://manage.icewhale.io/api/static/docs/1727164529080_image.png)