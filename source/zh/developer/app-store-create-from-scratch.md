---
title: 从零创建 ZimaOS 应用商店
seo_title: "为 Docker、自托管家庭服务器和 Homelab 创建 ZimaOS 应用商店"
description: "从零搭建兼容 ZimaOS 的 Docker 应用商店，面向 self-hosted 家庭服务器、Homelab 和 NAS OS，生成 v2 产物并发布静态文件。"
type: Docs
author: IceWhaleTech
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

本指南用于为家庭服务器、Homelab 或 NAS OS 创建兼容 ZimaOS 的 Docker 和 self-hosted 应用目录，涵盖最小源文件、v2 构建流程和静态发布方式。

如果你正在创建一个新的 ZimaOS 兼容第三方商店，从这页开始。

如果你已经有 v1 zip 格式的商店，先看 [迁移策略](./app-store-v1-v2-migration)。迁移通常可以复用大部分现有 `Apps/` 目录，路径更短。

## 最小源码文件

一个使用 v2 协议的新商店从这些文件开始：

- `store-config.json`：商店身份与商店级本地化文本。
- `supported-languages.json`：构建时考虑的候选语言列表。
- `Apps/<AppName>/docker-compose.yml`：每个应用一个源码 compose。
- 应用资源，例如 `icon.svg`、`thumbnail.png`、`screenshot-1.png`。

`scripts/build_dist.sh` 不是协议必需项，但推荐用于本地构建。CI 可以直接调用 `IceWhaleTech/build-appstore-action`。

## 搭建路径

1. 按 [仓库结构](./app-store-repository-structure) 创建目录。
2. 添加 `store-config.json`，设置稳定的 `store_id`、本地化 `name`、`maintainer` 和可选描述。
3. 添加 `supported-languages.json`，列出希望构建系统考虑的语言。
4. 在 `Apps/` 下为每个应用创建一个目录。
5. 将 Docker 运行时配置写在标准 Compose 字段中。
6. 将商店展示和安装相关元数据写在顶层 `x-casaos` 中。
7. 运行构建 action 或 `./scripts/build_dist.sh`。
8. 将生成的 `dist/` 发布到静态托管。

## 第一个应用自检

每个应用的源码 compose 至少应包含：

- 顶层 Compose `name`
- `services`
- 顶层 `x-casaos.id`
- `x-casaos.main`
- `x-casaos.index`
- `x-casaos.port_map`
- `x-casaos.icon`
- `x-casaos.title`
- `x-casaos.category`

推荐补充的元数据：

- `tagline`
- `description`
- `author`
- `developer`
- `architectures`
- `version`
- 有公开地址时填写 `website`、`repo`、`support` 或 `docs`

## 发布目标

使用 v2 协议的商店以静态文件形式被客户端消费。任何 HTTPS 静态托管都可以：

- GitHub Pages
- Cloudflare Pages
- Netlify
- 自托管 Nginx
- 能原样提供生成文件的 CDN 或对象存储

构建时的 `base-url` 应该设置为 `dist/` 最终可访问的公开 URL。生成的应用文件路径和资源路径会使用这个 URL。

## 下一步

1. [仓库结构](./app-store-repository-structure)
2. [商店配置](./app-store-config)
3. [Compose 与应用元数据](./app-store-compose-x-casaos)
4. [构建产物](./app-store-build-output)
5. [CI/CD 总览](./app-store-ci-cd)

