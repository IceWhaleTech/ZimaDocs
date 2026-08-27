---
title: 从其他 NAS 迁移
seo_title: "从其他 NAS 迁移到 ZimaOS：Synology 迁移指南"
description: "通过 Files 的 LAN Storage 将文件从 Synology NAS 迁移到 ZimaOS，并采用分阶段方式，让两台设备在迁移期间都能继续运行。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

更换 NAS 品牌并不意味着必须从头开始。文件可以保持原样迁移，而且在适应新设备期间，旧设备仍能继续运行。本页介绍推荐的迁移方式；完整操作步骤请查看下方链接中的手动迁移指南。

## 推荐方式

最简单的方式是使用 Files 应用。它会通过网络连接旧设备，让你按照自己的时间安排复制所需内容。

1. 在旧设备上，确认准备迁移的文件夹已经共享。
2. 在 ZimaOS Files 中，将旧设备添加为 LAN Storage。
3. 先复制最常用的文件夹，再将它们粘贴到 ZimaOS 存储空间中。

有关包含截图的完整步骤，请参阅 **[Synology 手动传输](./from-synology-to-zimacube-migrate-all-files "在 ZimaOS Files 中挂载 Synology DSM 共享，并分步复制文件")**。

## 按自己的节奏迁移

你不必在某个期限前一次性完成切换。分阶段迁移通常比全部同时转移更稳妥。

先迁移每天使用的文件夹。它们在新设备上可用后，再按照自己的节奏处理其余内容。直到最后一次复制完成前，旧设备都可以继续提供文件服务。

迁移完成后，建议立即设置 **[3-2-1 备份方案](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")**。刚完成迁移的文件是最重要的数据之一，而只保留一份副本并不能算作备份方案。

## 下一步

- **[Synology 手动传输](./from-synology-to-zimacube-migrate-all-files "在 ZimaOS Files 中挂载 Synology DSM 共享，并分步复制文件")** — 详细的手动操作指南
- **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** — 保护刚刚迁移的文件
- **[手机备份](./phone-backup "使用 ZimaClient 将手机自动备份到 ZimaOS")** — 将家庭中的其他数据也迁入 ZimaOS
