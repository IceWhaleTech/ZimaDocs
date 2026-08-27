---
title: ZimaCube RAID SSD 扩展
description: "为 ZimaCube 添加 SSD，将其用于 RAID 缓存或高速存储池。本指南介绍 M.2 NVMe 和 SATA SSD 的安装、在 ZimaOS 中配置 RAID 以及优化性能的方法。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

除六个 HDD 硬盘仓外，ZimaCube 还支持最多四个内置 SSD。你可以将这些 SSD 用作 RAID 缓存以加快 HDD 访问速度，也可以创建专用高速存储池，供需要低延迟的应用使用。

## SSD 安装位置

ZimaCube 机箱内部提供两类 SSD 插槽：

- 主板上的 **4 个 M.2 NVMe 插槽**（PCIe 3.0 x4），支持 2280 规格的 NVMe 硬盘。
- **2 个 2.5 英寸 SATA SSD 硬盘仓**，取出前部硬盘托架后即可操作。

NVMe 的延迟远低于 SATA，因此 M.2 插槽更适合安装缓存盘。2.5 英寸硬盘仓则适合创建高速大容量存储池。

## 安装 M.2 NVMe SSD

开始前，请关闭 ZimaCube 并拔下电源线。

1. 拧下机箱后部的手拧螺丝，将面板向后滑动并取下顶盖。
2. 找到主板上的两个 M.2 插槽。它们位于 CPU 散热器与 PCIe 扩展插槽之间。
3. 以 30 度角将 M.2 硬盘插入插槽，然后向下按平，使其贴合固定柱。
4. 使用 SSD 随附的小螺丝，或固定柱上预装的螺丝固定硬盘。
5. 重新安装顶盖。

启动后，硬盘应显示在 ZimaOS 的 Storage > Disks 中。如果某块硬盘没有显示，请确认它已完全插入插槽。

## 安装 2.5 英寸 SATA SSD

1. 从 ZimaCube 前部拉出一个空硬盘托架。
2. 使用 ZimaCube 随附的四颗螺丝，将 2.5 英寸 SSD 固定在托架上。
3. 将托架推回硬盘仓，直到其卡入到位。
4. 该硬盘会自动显示在 ZimaOS 中。

## 使用 SSD 配置 RAID

安装 SSD 后，可以通过 ZimaOS Web 界面设置 RAID：

1. 进入 **Storage > RAID**。
2. 选择要加入阵列的硬盘。你可以混用 SSD 和 HDD，但为了获得最佳性能，建议使用 SSD 单独组建阵列。
3. 选择 RAID 级别。对于 SSD，RAID 0 性能最高，但不提供冗余；RAID 1 会在两块硬盘上镜像数据，以提高安全性。
4. 单击 **Create**，等待阵列创建完成。大容量硬盘可能需要几分钟。

有关 RAID 选项的更多信息，请参阅 **[RAID 选项概览](../zimaos/raid-options)**。

## 将 SSD 用作缓存

如果使用 HDD 作为主存储，可以将 SSD 配置为读写缓存，加快常用文件的访问速度。在 ZimaOS 中，缓存需要按共享文件夹进行设置：

1. 进入 **Storage > Shared Folders**。
2. 选择一个文件夹，然后单击 **Edit**。
3. 在 **Cache** 下拉菜单中选择 SSD。
4. 设置缓存模式：writeback 可提供最佳性能，writethrough 则更注重数据安全。
5. 单击 **Save**。

对于大多数家庭 NAS 工作负载，一块 256 GB NVMe SSD 足以承担缓存任务。如果有多个用户并需要处理大型媒体文件，可以考虑使用 512 GB 或 1 TB 缓存盘。

## 检查硬盘健康状态

SSD 的写入周期有限。ZimaOS 会在 **Storage > Disks > [select drive] > Health** 中显示硬盘健康信息。请定期检查；如果磨损程度接近 80%，应计划更换硬盘。
