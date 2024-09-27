---
title: Setup Python
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Modify /etc/profile
Add the following two lines to the profile
```language
export HOME="/DATA"
export PATH="/DATA/.local/bin:/opt/bin:$PATH"
```
Execute Refresh
`source /etc/profile`
# Install opkg
`wget -O - http://bin.entware.net/x64-k3.2/installer/generic.sh | /bin/sh`
# Git related issues
## Install git-http
`opkg install git-http`
# How to pull GitHub projects without password
How to pull GitHub projects without password
Due to some problems, git cannot find ssh public key normally. So we can use gh tool to avoid password.
Download gh to `/opt/bin` (managed by opkg package). Then log in to the account with gh.
When pulling the project, use the third gh pull method, so that git and pull can be.
## Python
ZimaOS has installed Python 3.12.5
![](https://manage.icewhale.io/api/static/docs/1727164432814_image.png)
It is recommended to use the nevn virtual environment for development
```language
mkdir project
cd project
python -m venv .
source ./bin/activate
```
# Modify the configuration of vscode
Add the following configuration to the code mode configuration
```language
"remote.SSH.serverInstallPath": {
        "XXX.XXX.XXX.XXX": "/DATA",
    },
```
![](https://manage.icewhale.io/api/static/docs/1727164529080_image.png)
