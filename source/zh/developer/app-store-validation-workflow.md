---
title: 应用商店验证工作流
seo_title: "使用 GitHub Actions 验证 ZimaOS Docker 应用"
description: "在应用合并到 ZimaOS 兼容商店前，验证 Docker Compose 语法、x-casaos 元数据和 v2 构建产物。"
type: Docs
author: IceWhaleTech
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

验证流程可以防止错误的 Docker Compose 和应用元数据进入家庭服务器或 NAS OS 用户环境。

Validator 工作流定义在 [`.github/workflows/validator.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/validator.yml)。

## 作用

它在合并前校验源码输入，并尽早发现回归。

## 触发条件

- PR 的 `opened` 和 `synchronize`
- 手动 `workflow_dispatch`

## 主要检查项

1. 通过仓库内 `validate-compose` action 校验应用源码文件。
2. 上传结构化校验报告 artifact。
3. 恢复共享构建缓存。
4. 通过仓库内 `build-store-v2` action 执行完整的 v2 构建校验。
5. 上传构建校验报告并写入 job summary。
6. 如果 compose 校验或 v2 构建校验失败，则让整个工作流失败。

## 涉及到的仓库内 action

- `validate-compose`：检查顶层 `name`、`x-casaos.id` 和 `docker compose config -q`
- `build-store-v2`：对公开 `IceWhaleTech/build-appstore-action` 的仓库内包装
- `write-job-summary`：把 JSON 报告渲染到 GitHub Actions summary

## 为什么重要

这个工作流保护的是源码仓库的输入契约：

- compose 语法必须有效
- 命名必须符合仓库要求
- 整个仓库必须仍然可以成功构建出有效 `dist/`

## 什么时候看这页

以下场景会用到这页：

- PR 校验失败
- 你想知道哪些源码规则已经被自动化强制执行
- 你想参考官方仓库为自己的第三方商店设计 CI

