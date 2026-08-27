---
title: RAID 配置参考
seo_title: "ZimaOS RAID 配置：RAID 0、1、5、6 和 JBOD 详解"
description: "详细介绍 ZimaOS 的 RAID 配置。通过对比表、分步设置说明和常见问题解答，讲解 RAID 0、1、5、6 及 JBOD。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

RAID 将多块硬盘组合起来，以提升可靠性、性能，或同时提升两者。它会将数据分布到多块硬盘上，从而实现更高的读写速度，并在一块硬盘发生故障时保持数据完整。JBOD 则只是将多块硬盘连接成一个连续卷，最大限度利用总容量。

如果你刚接触这些概念，只想知道哪种配置适合自己的场景，请先阅读**[存储设置](./storage-setup "根据你的需求选择合适的 RAID 和存储配置")**。该页面不要求任何预备知识，会引导你完成选择。本页则是技术参考。

## 各选项的作用

用简单的方式解释，每个级别的含义如下。

- **RAID 0（快速）**：将数据分散到多块硬盘上，以获得最大速度和容量。不提供冗余；只要一块硬盘故障，所有数据都会丢失。适合临时数据，或速度比安全性更重要的场景。
- **RAID 1（安全）**：在两块硬盘上镜像数据。一块故障时，另一块仍可继续工作。简单可靠，是家庭 NAS 的经典选择。按照设计，它仅限两块硬盘。
- **RAID 5（均衡）**：将数据和奇偶校验分布在三块或更多硬盘上。可承受一块硬盘故障，空间利用率较高，还能通过逐步添加硬盘进行扩容。适合小型企业和不断增长的资料库。
- **RAID 6（稳定）**：与 RAID 5 类似，但使用双重奇偶校验，可承受两块硬盘故障。需要四块或更多硬盘。适合无法承受长时间停机的场景。
- **JBOD**：将多块硬盘串联成一个大卷，不提供冗余。容量最大，但只要一块硬盘故障，整个卷都会丢失。我们通常不建议将它用于重要数据。

下图提供了直观对比。

![ZimaOS RAID 选项概览，将 RAID 0、1、5、6 和 JBOD 并列比较](https://manage.icewhale.io/api/static/docs/1755075585086_copyImage.png)





## 创建 RAID 5 的详细步骤

RAID 5 适合希望在存储效率、性能和单盘故障保护之间取得平衡的用户。它至少需要三块硬盘。下面介绍如何使用更新后的 ZimaOS 界面创建 RAID 5 阵列。



1.  打开**设置 > 存储**。你会看到当前硬盘和可用操作的列表。


![ZimaOS“设置”中的存储页面，列出当前硬盘和可用存储操作](https://manage.icewhale.io/api/static/docs/1755075586219_copyImage.png)

2.  点击**组合**，打开硬盘组合菜单。


![ZimaOS 存储页面上的“组合”按钮，用于打开硬盘组合菜单](https://manage.icewhale.io/api/static/docs/1755075587914_copyImage.png)

3.  选择 **RAID 5**，然后点击**下一步**。


![ZimaOS 硬盘组合菜单，在可用 RAID 选项中选择了 RAID 5](https://manage.icewhale.io/api/static/docs/1755075589691_copyImage.png)

4.  **选择三块可用硬盘**。系统会计算预计容量，然后点击**“下一步”**。


![ZimaOS RAID 创建向导，已选择三块硬盘并显示预计阵列容量](https://manage.icewhale.io/api/static/docs/1755075591241_copyImage.png)

5.  **配置阵列并命名**：输入阵列名称，例如“RAID5”，勾选所需协议，然后点击**“创建”**开始初始化。


![ZimaOS 存储阵列设置界面，在创建前显示名称字段和协议选项](https://manage.icewhale.io/api/static/docs/1755075592784_copyImage.png)

6.  **创建完成**：系统会执行数据条带化；持续查看进度直至完成，阵列状态将显示为**“健康”**。


![ZimaOS 存储创建完成界面，显示新阵列的状态为“健康”](https://manage.icewhale.io/api/static/docs/1755075594884_copyImage.png)

7.  **现在可以使用 RAID 5 了。** 创建后会自动启用奇偶校验。此过程中硬盘读取速度可能受到影响，但正常使用不会中断。


![ZimaOS 存储页面，新 RAID 5 阵列已可使用，奇偶校验已自动启用](https://manage.icewhale.io/api/static/docs/1755075596383_copyImage.png)

## 选择 RAID 级别

还没决定？这份快速参考总结了不同方案之间的取舍。

![ZimaOS RAID 级别快速参考图，总结容量、速度和冗余之间的取舍](https://manage.icewhale.io/api/static/docs/1755075597233_copyImage.png)

如需按场景查看建议，请先阅读**[存储设置](./storage-setup "根据你的需求选择合适的 RAID 和存储配置")**。

## 其他 RAID 级别

RAID 0、1 和 6 的操作步骤相同，只是所选选项和最低硬盘数量不同。RAID 6 至少需要四块硬盘，并可承受两块硬盘同时故障。

## ZFS

对于希望使用快照、校验和及高级数据完整性功能的用户，ZimaOS 也支持 ZFS 文件系统。请参阅“开发者”部分的 **[ZFS 设置指南](../developer/zfs-setup "在 ZimaOS 上设置 ZFS，以获得快照、校验和及数据完整性功能")**。

## 常见问题

**为什么创建 RAID 需要很长时间？**

初始化时间取决于硬盘容量和速度。容量越大的硬盘耗时越长。初始化过程中仍可使用阵列，但读取速度可能会降低，直到初始化完成。

## 下一步

RAID 可以防止硬盘故障，但不能防止意外删除或灾难。请将它与 **[3-2-1 备份](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份原则保护数据")**策略结合，获得完整保护。如果你还未决定哪种配置适合自己，请先阅读**[存储设置](./storage-setup "根据你的需求选择合适的 RAID 和存储配置")**。
