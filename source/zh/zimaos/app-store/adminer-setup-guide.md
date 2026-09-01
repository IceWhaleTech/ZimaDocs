---
title: 在 ZimaOS 上安装和使用 Adminer
seo_title: "ZimaOS Adminer 指南：安装并访问 SQLite 数据库"
description: "从 ZimaOS App Store 安装 Adminer，挂载数据库目录，并检查 Emby 媒体库等 SQLite 数据库。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Adminer 是一款轻量级的浏览器数据库管理工具，支持 SQLite、MySQL、PostgreSQL 等数据库系统。本指南将以 Emby 为例，介绍如何从 ZimaOS App Store 安装 Adminer，并授权它访问 SQLite 数据库目录。

> **重要提示：** Adminer 可以直接访问应用数据。进行任何更改前，请先备份数据库；不要将 Adminer 直接暴露到公共互联网；在了解应用的数据库结构前，请仅执行只读查询。

## 开始之前

- ZimaOS 已安装并正常运行。
- 您可以访问 ZimaOS Web 界面和 App Store。
- 如果要检查现有 SQLite 数据库，您已知其 `.db` 文件所在的主机目录。
- 执行写入操作前，您已拥有数据库的最新备份。

即使当前没有数据库，您也可以先安装 Adminer，之后再配置目录挂载。

## 安装 Adminer

1. 打开 ZimaOS **App Store**。
2. 搜索 **Adminer**。
3. 打开 Adminer 应用详情页，然后单击 **Install**。
4. 等待安装完成，并确认 ZimaOS 仪表盘中出现 Adminer。

![ZimaOS App Store 中的 Adminer 应用详情页](/images/guides/adminer-app-store.webp)

## 授权 Adminer 访问数据库目录

1. 在 ZimaOS 仪表盘中，打开 Adminer 应用卡片右上角的菜单。
2. 选择 **Manage Adminer**，进入容器配置页面。
3. 展开 **Volumes**，找到 **Mount** 并添加一个挂载项。
4. 将挂载类型设为 **Bind mount**。
5. 在 **Host** 中选择数据库文件所在目录。对于默认的 Emby 安装，该目录通常为 `/DATA/AppData/emby/config/data`。
6. 在 **Container** 中输入 `/config/data`。
7. 单击 **Save**；如果 ZimaOS 没有自动重启 Adminer，请手动重启。

![在 Adminer 容器设置中挂载 Emby 数据库目录](/images/guides/adminer-volume-mount.webp)

如果要检查其他应用，请将 Emby 主机路径替换为对应应用的数据库目录。只挂载 Adminer 实际需要的目录，不要授予它访问更大范围存储路径的权限。

## 打开 SQLite 数据库

1. 从 ZimaOS 仪表盘打开 Adminer。
2. 如果当前安装的 Adminer 镜像支持，请选择 **SQLite** 作为数据库系统。
3. 浏览已挂载的目录，选择数据库文件，例如 `/config/data/library.db`。
4. 输入当前 Adminer 镜像要求的凭据，然后登录。

不同 Adminer 镜像和版本处理 SQLite 身份验证的方式可能不同。如果当前镜像拒绝无密码的 SQLite 连接，不要因此降低其他应用的凭据安全性，也不要公开暴露 Adminer。请选择支持该数据库的 Adminer 镜像或身份验证配置，并在长期使用前检查其更新状态和安全状况。

## 示例：检查 Emby 媒体库数据库

将 Emby 默认数据目录挂载到 `/config/data` 后，您可能会看到以下文件：

- `library.db` 包含媒体库元数据。
- `users.db` 包含用户账户数据。

在 **SQL Command** 页面中执行只读检查。要检查 SQLite 数据库完整性，请运行：

```sql
PRAGMA integrity_check;
```

如果返回 `ok`，表示 SQLite 未发现完整性错误。要查看少量 Emby 媒体名称及其存储路径，请运行：

```sql
SELECT Name, Path FROM MediaItems LIMIT 20;
```

应用版本变化可能导致数据库结构发生改变。如果表或字段不存在，请先确认数据库结构，再调整查询。除非您拥有经过验证的备份并清楚了解后果，否则请避免执行 `UPDATE`、`DELETE` 或修改数据库结构。

## 连接其他类型的数据库

MySQL 和 PostgreSQL 是网络数据库服务，而不是独立文件。要连接这些数据库，Adminer 需要能够通过网络访问数据库主机，并使用正确的端口和有效的数据库凭据。仅挂载目录无法建立连接。

如果数据库运行在另一个容器中，请确认两个容器可以通过适当的 Docker 网络通信。不要仅为了让 Adminer 建立连接而将数据库端口暴露到公共网络。

## 安全与维护建议

- 将 Adminer 限制在可信本地网络或其他安全访问方式中。
- 编辑数据库前先创建备份；替换数据库文件前先停止源应用。
- 使用社区维护的 Adminer 镜像前，检查其发布日期和安全维护状态。
- 不再需要直接访问数据库时，请停止或移除 Adminer。

## 参考资料

- [Adminer 官方网站](https://www.adminer.org/)
- [SQLite PRAGMA 参考文档](https://www.sqlite.org/pragma.html)

## 需要帮助？

如果您在 ZimaOS 上安装或使用 Adminer 时遇到问题，可以加入 ZimaSpace Discord 社区。IceWhale 团队和社区成员可以协助您排查配置问题。

[加入 ZimaSpace Discord](https://discord.gg/f9nzbmpMtU)
