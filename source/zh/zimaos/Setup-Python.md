---
title: 设置 Python
description:
type: “文档”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# 修改 /etc/profile
在 profile 中添加以下两行
```language
export HOME="/DATA"
export PATH="/DATA/.local/bin:/opt/bin:$PATH"
```
执行刷新
`source /etc/profile`
# 安装 opkg
`wget -O - http://bin.entware.net/x64-k3.2/installer/generic.sh | /bin/sh`
# Git 相关问题
## 安装 git-http
`opkg install git-http`
# 如何在不输入密码的情况下拉取 GitHub 项目
如何在不输入密码的情况下拉取 GitHub 项目
由于一些问题，git 通常无法找到 ssh 公钥。因此我们可以使用 gh 工具来避免输入密码。
将 gh 下载到 `/opt/bin`（由 opkg 包管理）。然后使用 gh 登录账户。
在拉取项目时，使用第三种 gh pull 方法，以便 git 和 pull 可以正常工作。
## Python
ZimaOS 已安装 Python 3.12.5
![](https://manage.icewhale.io/api/static/docs/1727164432814_image.png)
建议使用 nevn 虚拟环境进行开发
```language
mkdir project
cd project
python -m venv .
source ./bin/activate
```
# 修改 vscode 的配置
在代码模式配置中添加以下配置
```language
"remote.SSH.serverInstallPath": {
        "XXX.XXX.XXX.XXX": "/DATA",
    },
```
![](https://manage.icewhale.io/api/static/docs/1727164529080_image.png)