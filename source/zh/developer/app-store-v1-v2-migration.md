---
title: 从 v1 迁移应用商店到 v2
seo_title: "将 CasaOS 或 ZimaOS Docker 应用商店从 v1 迁移到 v2"
description: "把 CasaOS 或 ZimaOS Docker 应用商店从 v1 打包格式迁移到 v2 静态协议，同时保留旧客户端兼容能力。"
type: Docs
author: IceWhaleTech
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

当现有 CasaOS 或 ZimaOS Docker 应用商店服务于家庭服务器或 Homelab 用户，并准备迁移到 v2 NAS OS 协议时，请使用本策略。

这一部分面向已经有 v1 zip 格式 CasaOS/ZimaOS 应用商店，并希望用最小改动支持 v2 的维护者。

重点是：通常不需要从零重做每个应用。保留现有 `Apps/` 目录，规范源码元数据，添加 v2 的商店级文件，然后从同一个仓库同时产出 v2 和可选 v1 产物。

## v1 到 v2 的变化

| 主题 | v1 商店 | v2 商店 |
|---|---|---|
| 分发方式 | zip 或 sysroot 包 | `dist/` 下的静态文件 |
| 客户端入口 | `main.zip` 等旧版包 | `store.json` 和 `index.json` |
| 商店身份 | 没有必需的商店级身份文件 | 必需 `store-config.json` |
| 语言列表 | 通常从应用内容中隐式得到 | 由 `supported-languages.json` 声明，有字段时才生成 |
| 应用身份 | 常依赖 compose/name 约定 | 必需顶层 `x-casaos.id` |
| 元数据 | `appfile.json` 加 `x-casaos` | 顶层 `x-casaos`，构建后拆到 compose 和 `meta.json` |
| 分类 | 旧版/自由分类，例如 `Utilities` | 标准化 v2 分类 |
| 更新方式 | 整包刷新 | 通过 `content_hash` 做应用级增量更新 |
| 兼容方式 | v1 客户端消费 zip | 继续构建 `dist/store/main.zip` 来保留 v1 兼容 |

## 最小迁移模型

1. 继续以 `Apps/<App>/docker-compose.yml` 作为应用源码。
2. 将应用展示元数据移动或确认在顶层 `x-casaos` 中。
3. 给每个应用添加稳定的 `x-casaos.id`。
4. 将 `en_us` 这类 locale key 规范为 `en_US`。
5. 将应用分类规范到 v2 分类列表。
6. 添加 `store-config.json` 和 `supported-languages.json`。
7. 按需补充 `version`、`update_at`、`release_notes` 等 v2 可选展示字段。
8. 构建 v2 `dist/`。
9. 如果仍需支持旧客户端，继续构建 v1 zip。

## 兼容模式

当前仓库会同时构建两类产物：

- v2：`dist/store.json`、`dist/index.json`、`dist/apps/<app-id>/...`
- v1：`dist/store/main.zip`

这里的 `<app-id>` 是每个应用顶层 `x-casaos.id` 规范化后的值。

这是已有商店最稳妥的迁移方式。新客户端可以订阅 v2 静态 URL，旧客户端可以继续使用 v1 产物，直到你决定停止维护。

## 可以保留什么

需要兼容 v1 时，这些旧版文件或目录可以继续存在：

- `Apps/`
- 现有 compose 运行时配置
- 图标、缩略图、截图等应用资源
- v1 打包仍然使用的 `category-list.json` 和 `recommend-list.json`
- v1 打包 workflow 步骤

v2 不需要你手写维护 `dist/` 文件。

## 必须修改什么

v2 至少需要：

- 根目录 `store-config.json`
- 根目录 `supported-languages.json`
- 每个应用 compose 中的顶层 `x-casaos.id`
- 支持的 v2 分类
- 规范 locale key，例如 `en_US`、`zh_CN`、`de_DE`
- v2 构建和发布工作流

## v2 新增的版本号和其他展示字段

完成上面的必需改动后，迁移就已经可以成立。不过 `version` 在新版商店里是必填字段。其余字段则用于增强应用详情页、列表和更新信息展示。

这些字段都写在顶层 `x-casaos` 下，有信息时建议补充：

| 字段 | 源码类型 | 迁移说明 |
|---|---|---|
| `version` | `string` | **新增，且必填。** 用于应用版本追踪、升级沟通，并增强商店展示。 |
| `update_at` | `string` | **新增，可选。** 应用更新日期，建议 `YYYY-MM-DD`，例如 `"2026-03-01"`，可增强商店展示。 |
| `release_notes` | `object` | **新增，可选。** 源码中是 locale-keyed 更新日志对象，每个 locale 的值是纯字符串；构建后输出为 `release_note`。 |
| `website` | `string` | **新增，可选。** 官方网站地址，可增强商店展示。 |
| `repo` | `string` | **新增，可选。** 源码仓库地址，可增强商店展示。 |
| `support` | `string` | **新增，可选。** 支持地址，可增强商店展示。 |
| `docs` | `string` | **新增，可选。** 文档地址，可增强商店展示。 |

示例：

```yaml
x-casaos:
  version: "1.0.0"
  update_at: "2026-03-01"
  release_notes:
    en_US: "First v2-compatible release."
  website: "https://example.com"
  repo: "https://github.com/example/myapp"
  support: "https://github.com/example/myapp/issues"
  docs: "https://docs.example.com"
```

## 下一步

1. [最小改动清单](./app-store-v1-v2-migration-checklist)
2. [商店配置](./app-store-config)
3. [Compose 与应用元数据](./app-store-compose-x-casaos)
4. [构建产物](./app-store-build-output)
5. [复用官方 Actions](./app-store-github-actions)

