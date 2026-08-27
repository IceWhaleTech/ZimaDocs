---
title: 应用商店仓库结构
seo_title: "ZimaOS Docker 应用商店仓库结构与 NAS OS 发布目录"
description: "组织 Docker Compose、应用元数据、图片资源和生成产物，为 ZimaOS、家庭服务器及 Homelab 构建自托管应用商店。"
type: Docs
author: IceWhaleTech
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

清晰的仓库结构有助于在 self-hosted 家庭服务器、Homelab 和 NAS OS 场景中验证、构建并发布 Docker 应用。

这一页说明使用 v2 协议的商店最小源码结构，以及它如何映射到构建产物。

## 源码目录

源码仓库是你日常编辑和提交的内容：

```text
my-appstore/
├── Apps/
│   └── MyApp/
│       ├── docker-compose.yml
│       ├── icon.svg
│       ├── thumbnail.png
│       └── screenshot-1.png
├── store-config.json
└── supported-languages.json
```

如果需要本地开发脚本，也可以添加：

```text
scripts/
└── build_dist.sh
```

## 根目录必需文件

- `store-config.json`：v2 必需的商店身份文件。
- `supported-languages.json`：本仓库工作流需要的候选语言列表。
- `Apps/`：应用源码目录。

旧版 v1 商店通常还会有 `category-list.json`、`recommend-list.json` 和 v1 打包相关文件。需要兼容 v1 时可以继续保留它们，但 v2 客户端消费的是构建后的 `dist/` 文件。

## 构建产物目录

构建会把源码转成可部署的静态产物：

```text
dist/
├── index.json
├── index.zh_CN.json
├── store.json
├── store.zh_CN.json
└── apps/
    └── com.example.myapp/
        ├── docker-compose.yml
        ├── docker-compose.amd64.yml
        ├── meta.json
        ├── meta.zh_CN.json
        └── assets/
            ├── icon.svg
            ├── icon.png
            ├── thumbnail.webp
            └── screenshot-1.webp
```

## 各部分职责

- `Apps/`：可编辑的应用定义、源码 compose 和源码资源。
- `store-config.json`：商店身份与商店级本地化。
- `supported-languages.json`：构建时考虑的候选语言。
- `scripts/build_dist.sh`：可选的本地构建辅助脚本。
- `dist/`：生成的协议产物，不应手写维护。
- `dist/apps/<app-id>/`：生成后的应用输出目录，其中 `<app-id>` 是规范化后的顶层 `x-casaos.id`。
- `dist/store/main.zip`：工作流仍然构建 v1 时的可选旧版产物。

## 一个简单原则

编辑仓库根目录下的源码文件，把 `dist/` 当作构建产物。

字段级规则继续阅读：

- [商店配置](./app-store-config)
- [Compose 与应用元数据](./app-store-compose-x-casaos)
- [构建产物](./app-store-build-output)

