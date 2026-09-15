---
title: 在 ZimaOS 上安装和使用 Adminer
seo_title: "ZimaOS 上的 Adminer：安装并访问 SQLite 数据库"
description: "从 ZimaOS 应用商店安装 Adminer，挂载数据库目录，并检查 Emby 媒体库等 SQLite 数据库。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Adminer 是一款轻量、基于浏览器的数据库管理器，支持 SQLite、MySQL、PostgreSQL 等数据库系统。查看 [Adminer 应用商店页面](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.adminer)了解最新的应用详情。本指南介绍如何从 ZimaOS 应用商店安装 Adminer，并让它访问 SQLite 数据库目录，以 Emby 为例。

> **重要：** Adminer 提供对应用数据的直接访问。修改前请先备份数据库，避免把 Adminer 直接暴露到公网，在了解应用数据库结构之前只使用只读查询。

## 开始之前

- ZimaOS 已安装并运行。
- 你可以访问 ZimaOS Web 界面和应用商店。
- 如果要检查现有的 SQLite 数据库，你需要知道哪个主机目录包含其 `.db` 文件。
- 在执行写入操作之前，你有数据库的当前备份。

你也可以在没有现成数据库的情况下安装 Adminer，之后再配置目录挂载。

## 安装 Adminer

1. 打开 ZimaOS **App Store**。
2. 搜索 **Adminer**。
3. 打开 Adminer 详情页并点击 **Install**。
4. 等待安装完成，确认 Adminer 出现在 ZimaOS 桌面上。

![ZimaOS 应用商店中 Developer 分类下的 Adminer 应用页面](/images/app-store/adminer-app-store.webp)

## 让 Adminer 访问数据库目录

1. 在 ZimaOS 桌面上，打开 Adminer 应用卡片右上角的菜单。
2. 选择 **Manage Adminer** 打开容器配置页面。

![Edit Adminer 页面中的服务配置、网络和 8080 端口](/images/app-store/adminer-config-page.webp)

3. 展开 **Volumes**，找到 **Mount**，添加一个挂载。
4. 将挂载类型设置为 **Bind mount**。
5. 在 **Host** 下选择包含数据库文件的目录。对于默认的 Emby 安装，该目录通常是 `/DATA/AppData/emby/config/data`。
6. 在 **Container** 下输入 `/config/data`。
7. 点击 **Save**，如果 ZimaOS 没有自动重启 Adminer，手动重启。

![Adminer 卷设置中挂载到容器内的 Emby 数据文件夹](/images/app-store/adminer-volumes-bind.webp)

对于其他应用，把 Emby 的主机路径替换成该应用的数据库目录。只挂载 Adminer 需要的目录，而不是授予更宽泛的存储路径访问权限。

## 打开 SQLite 数据库

1. 从 ZimaOS 桌面打开 Adminer。
2. 如果所安装的 Adminer 镜像支持，选择 **SQLite** 作为数据库系统。
3. 浏览到挂载目录，选择数据库文件，例如 `/config/data/library.db`。
4. 输入该 Adminer 镜像要求的凭据并登录。

不同 Adminer 镜像和版本处理 SQLite 身份验证的方式可能不同。Adminer v4+ 要求 SQLite 连接使用密码——官方镜像不允许空白密码登录。如果所装镜像拒绝空白密码的 SQLite 连接，可以使用面板密码插件或社区镜像，例如 `finwo/adminer`（用 `nopassword` 登录）。不要削弱无关应用的凭据，也不要公开暴露 Adminer。长期使用前请检查镜像的更新和安全状态。

## 示例：检查 Emby 的媒体库数据库

将默认 Emby 数据目录挂载到 `/config/data` 后，你可能会看到这些文件：

- `library.db` 包含媒体库元数据。
- `users.db` 包含用户账号数据。

使用 **SQL Command** 页面运行只读检查。要检查 SQLite 数据库完整性，运行：

```sql
PRAGMA integrity_check;
```

返回 `ok` 表示 SQLite 未发现完整性错误。要抽查一小部分 Emby 媒体名称和存储路径，运行：

```sql
SELECT Name, Path FROM MediaItems LIMIT 20;
```

数据库结构可能随应用版本变化。如果表或列缺失，先确认结构再修改查询。除非你有一个经过测试的备份并了解后果，否则避免执行 `UPDATE`、`DELETE` 或结构变更。

## 连接其他类型的数据库

MySQL 和 PostgreSQL 是网络数据库服务，而不是独立文件。要连接它们，Adminer 需要到数据库主机的网络访问、正确的端口和有效的数据库凭据。仅靠卷挂载是不够的。

如果数据库运行在另一个容器中，请确认两个容器能通过合适的 Docker 网络互相通信。不要为了让 Adminer 连接而把数据库端口公开暴露。

## 安全与维护提示

- 将 Adminer 限制在受信任的本地网络或其他安全的访问方式内。
- 编辑数据库前先备份，替换数据库文件前先停止源应用。
- 使用社区维护的 Adminer 镜像前，检查其发布时间和安全状态。
- 不再需要直接数据库访问时，停止或移除 Adminer。

## 参考

- [Adminer 官方网站](https://www.adminer.org/ "Adminer 官方站点")
- [SQLite PRAGMA 参考](https://www.sqlite.org/pragma.html "SQLite PRAGMA 命令官方参考")

## 需要帮助？

如果你在 ZimaOS 上安装或使用 Adminer 时遇到任何问题，欢迎加入 [ZimaSpace Discord 社区](https://discord.gg/f9nzbmpMtU "加入 ZimaSpace Discord 社区获取 ZimaOS 支持")。我们的团队和社区成员很乐意提供帮助。
