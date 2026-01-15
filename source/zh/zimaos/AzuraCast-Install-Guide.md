---
title: 在 ZimaOS 上通过命令行安装 AzuraCast 的完整指南
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除, description 为文章描述，不填时将截取内容最前一段文字
---
> _本指南改编自社区成员 **Muditha Liyanagama** 的原文，[在 ZimaOS 上通过命令行安装 AzuraCast 的完整指南](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-azuracast-on-zimaos-via-the-command-line/7818)，我们对他们的工作表示衷心的感谢。_

## 介绍
**AzuraCast** 是一款强大的自托管的全能型网络广播管理套件。它允许你运行多个在线广播电台，管理播放列表，配置 AutoDJ，并探索许多其他创意广播选项。

之前，我写过一个使用 ZimaOS 图形界面安装 AzuraCast 的指南。然而，经过进一步测试，我发现图形界面方法不稳定，而且使用这种方式安装时，AzuraCast 的网页更新无法正常工作。

在本指南中，我将向你展示一种更可靠的方法：通过命令行在 ZimaOS 上安装 AzuraCast。这个方法要稳定得多，网页更新也能正常工作。

本教程适用于家庭或私人使用，可以在本地网络内或通过 Tailscale 访问。如果你计划将 AzuraCast 实例暴露到公共互联网，你可能需要配置额外的网络和安全设置。

此方法已在 **Zimaboard 1** 和 **Zimaboard 2** 上进行了测试。

让我们开始吧。

### 步骤 1：启用开发者模式和 SSH 访问
![setting page and open the Developer mode window](https://manage.icewhale.io/api/static/docs/1768468645225_image.png)

![enable SSH access and open the web-based terminal](https://manage.icewhale.io/api/static/docs/1768468682300_image.png)

1. 进入 ZimaOS **设置** → **常规** → **开发者模式**
2. 点击 **查看**
3. 启用 **SSH 访问**
4. 点击 **基于 Web 的终端**

一个新的浏览器标签页将打开，显示 ZimaOS 终端界面。

### 步骤 2：以 Root 用户登录终端
在终端中：

1. 输入你的 **登录用户名** → 按 **Enter**
2. 输入你的 **密码** → 按 **Enter**
3. 输入：`sudo -i`
4. 按 **Enter**
5. 再次输入你的 **密码** → 按 **Enter**

现在你已经以 root 用户身份登录。

![go into the terminal and login with root account](https://manage.icewhale.io/api/static/docs/1768468838713_image.png)

### 步骤 3：创建 AzuraCast 安装目录
AzuraCast 应该安装在 AppData 目录下。

#### 1. 进入你的 AppData 文件夹
（示例路径 — 你的路径可能不同）

`cd /ZimaOS-HD/AppData`

#### 2. 创建 AzuraCast 目录
`mkdir azuracast`

#### 3. 进入该目录
`cd /ZimaOS-HD/AppData/azuracast`

### 步骤 4：下载并运行 AzuraCast 安装程序
运行以下命令：
```language
curl -fsSL https://raw.githubusercontent.com/AzuraCast/AzuraCast/main/docker.sh > docker.sh
chmod a+x docker.sh
./docker.sh install
```
这将在当前目录中启动 AzuraCast 的安装。

安装过程中，你将被要求选择多个选项，包括端口号。
**推荐**：保持所有默认值，除非你确定要更改它们。

安装完成后，AzuraCast 服务和网页更新功能将会部署。

### 步骤 5：修复端口冲突（如果有的话）
如果某些必需的端口已被占用，安装程序会显示一个错误，指明哪些端口发生冲突。

#### 1. 停止 AzuraCast 服务
`docker compose down`

等待所有服务停止。

#### 2. 编辑 Docker Compose 文件
`nano docker-compose.yml`

编辑时：

只更改左侧（**发布端口**）
不要更改右侧（**目标端口**）

**示例：**
```language
8080:80 ← 如果需要更改 8080，保持 80 不变
```

#### 3. 保存文件
按：

1. Ctrl + X
2. Y
3. Enter

#### 4. 重新部署 AzuraCast
`docker-compose up -d`

你可能需要多次重复此过程，因为 Docker 通常一次只报告一个端口冲突。解决一个冲突后，可能会检测到另一个。

解决所有冲突后，AzuraCast 将完全部署。

### 步骤 6：访问 AzuraCast 网页界面
打开浏览器并访问：

`http://YOUR_SERVER_IP:80`

如果你更改了发布端口，将 80 替换为你选择的端口号。

---

**<u>重要事项</u>**
使用此方法时，有几个限制需要注意：

- 这种安装 **无法通过 ZimaOS 图形界面管理**。
- 通过图形界面编辑或停止它可能会导致崩溃。
- ZimaOS 仪表板 **不会显示 AzuraCast 的 CPU 或 RAM 使用情况**。
- 所有管理和故障排除必须通过 **命令行** 或使用像 **Portainer** 这样的第三方图形界面应用程序进行。

然而，尽管存在这些限制：

- 这种安装方法 **更稳定**
- AzuraCast **网页更新工作正常**
- 更适合长期的个人或家庭广播服务器