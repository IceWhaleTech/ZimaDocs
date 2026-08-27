---
title: ZimaCube 自动开机方案
description: "通过本指南分步配置 BIOS，让 ZimaCube 在断电恢复后自动开机。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

默认情况下，ZimaCube 接通电源后仍需按下电源按钮才能启动。如果设备放在储物间等不便操作的位置，或者希望它在断电恢复后自动启动，可以使用两种方法进行设置。

本指南介绍 BIOS 设置方法。如果你的 BIOS 中没有 **Restore on AC Power Loss** 选项，请改用 **[跳线设置方法](./auto-power-on-setup)**。

## BIOS 设置方法

1. 关闭 ZimaCube，并连接键盘和显示器。
2. 开机后在启动过程中反复按 **F11** 进入启动菜单，然后选择 **Enter Setup** 打开 BIOS。
3. 使用方向键进入 **Advanced** 选项卡。
4. 找到 **Restore on AC Power Loss** 或名称相近的选项。具体位置会因 BIOS 版本而异，通常位于 Advanced > Power Management 或 Advanced > Chipset Configuration 下。
5. 将该选项设置为 **Power On**。
6. 按 **F10** 保存并退出。

保存后，拔下电源线，等待几秒钟再重新接通。此时 ZimaCube 应该会自动启动，无需按下电源按钮。

如果找不到 **Restore on AC Power Loss** 选项，说明当前 BIOS 版本可能不支持该功能。请使用上方链接中的跳线设置方法；该方法适用于所有 ZimaCube 型号。

## 如何选择

- **BIOS 设置方法**：设置更快，无需打开机箱，适用于大多数在 2024 年年中之后出货的 ZimaCube。
- **跳线设置方法**：不受 BIOS 版本限制，适用于所有 ZimaCube。需要打开顶盖，并移动主板上的小型塑料跳线帽。
