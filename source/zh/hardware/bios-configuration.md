---
title: BIOS 配置
seo_title: "ZimaCube BIOS 配置：启动顺序、风扇和电源"
description: "配置 ZimaCube BIOS 设置，包括进入 BIOS、更改启动顺序、调整风扇曲线、设置电源选项以及启用硬件功能。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

通过 ZimaCube BIOS，你可以控制启动顺序、风扇转速、电源行为和硬件设置。大多数用户不需要修改 BIOS，但其中有几项设置值得了解。

## 进入 BIOS

1. 为 ZimaCube 连接键盘和显示器。
2. 启动设备。
3. 在启动画面中反复按 **F11**，直到显示启动菜单。
4. 选择 **Enter Setup** 打开 BIOS 界面。

如果 F11 无效，请尝试按 **Delete** 或 **F2**；具体按键取决于 BIOS 版本。

## 启动顺序

如果需要从 USB 设备启动，例如安装或恢复操作系统，请更改启动顺序：

1. 在 BIOS 中进入 **Boot** 选项卡。
2. 找到 **Boot Option Priorities**。
3. 使用 +/- 键将 USB 设备移到列表顶部。
4. 按 **F10** 保存并退出。

此后 ZimaCube 会优先尝试从 USB 启动。操作完成后，请记得恢复原来的启动顺序，或在重新启动前移除 USB 设备。

## 风扇控制

ZimaCube 配有两个系统风扇。你可以在 BIOS 中调整其运行方式：

1. 进入 **Advanced > Hardware Monitor**。
2. 找到 **CPU Fan Settings** 和 **System Fan Settings**。
3. 选择运行模式：
   - **Standard**：温度升高时提高风扇转速，适合日常使用。
   - **Silent**：降低风扇转速以减少噪声。如果 ZimaCube 放在生活空间内且不会长时间高负载运行，可使用此模式。
   - **Full Speed**：提供最大散热能力。如果 ZimaCube 位于高温环境或需要持续高负载运行，可使用此模式。
4. 按 **F10** 保存。

## 电源设置

- **Restore on AC Power Loss**：决定断电后恢复供电时的行为。如果希望 ZimaCube 在来电后自动启动，请设置为 **Power On**。详情请参阅 **[自动开机指南](./auto-power-on)**。
- **Wake on LAN**：如果希望通过网络远程启动 ZimaCube，请启用此选项。在 BIOS 中启用后，还需要在 ZimaOS 中进行配置。请参阅 **[启用 Wake-on-LAN](./enable-wol-on-zimacube)**。

## 硬件配置

除非有明确的修改理由，否则大多数硬件设置都应保留默认值：

- **VT-d / Virtualization Technology**：默认启用。如果计划运行虚拟机，请保持开启。
- **SATA Mode**：应设置为 **AHCI**。除非清楚更改后的影响，否则不要修改；在没有正确配置的情况下切换到 RAID 模式，可能导致硬盘无法读取。
- **Above 4G Decoding**：用于支持 GPU 等大型 PCIe 设备。如果要安装独立显卡，请启用此选项。

如果更改设置后系统无法启动，请参阅 **[CMOS 重置指南](../help-center/resets-cmos)**，恢复 BIOS 默认设置。
