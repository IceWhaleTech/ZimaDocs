---
title: ZimaCube BIOS 更新方法
description: "使用 USB 闪存盘更新 ZimaCube BIOS。提供适用于 N100 和 Pro 型号的分步说明、下载链接以及故障排查方法。"
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

更新 BIOS 可以修复硬件兼容性问题、提升系统稳定性并增加新功能。仅当你遇到了新版 BIOS 能解决的具体问题，或我们的支持团队建议更新时，才应更新 BIOS。

如果更新过程因断电等原因中断，主板可能会无法启动。开始前，请确保 ZimaCube 已连接到可靠的电源。

## 所需物品

- 一个空的、已格式化为 FAT32 的 USB 闪存盘
- 一台通过 Mini DisplayPort 连接的显示器
- 一个 USB 键盘
- 与你的 ZimaCube 型号对应的 BIOS 软件包（见下文）

## 步骤 1：确认型号

下载前先确认你使用的 ZimaCube 型号。型号名称印在设备底部的标签上，应为以下型号之一：

| 型号 | BIOS 软件包 |
|---|---|
| **ZimaCube N100** | [Google Drive 链接](https://drive.google.com/file/d/1yd8Z2fJNr69TLyy6381JzVSHP_Af0awQ/view?usp=drive_link) |
| **ZimaCube Pro 1235u** | [Google Drive 链接](https://drive.google.com/file/d/1hQI2oe0C9CIsylP0vjdP3tZSljgslkx8/view?usp=drive_link) |
| **支持 Resizable BAR 的 ZimaCube Pro 1235u** | [Google Drive 链接](https://drive.google.com/file/d/1i0cm2QHK2e4oNNmQU-0-pnABuqp4HR8N/view?usp=drive_link) |

ZimaCube 2 的 BIOS 已内置 Resizable BAR 功能，该型号无需为此进行更新。

## 步骤 2：准备 USB 闪存盘

1. 将 USB 闪存盘格式化为 **FAT32**。
2. 从上表下载与你的型号对应的 BIOS 软件包。
3. 解压下载的压缩包。解压后应能看到一个 `EFI` 文件夹。
4. 将整个 `EFI` 文件夹复制到 USB 闪存盘的根目录。

![](https://manage.icewhale.io/api/static/docs/1779788907886_image.png)

## 步骤 3：从 USB 启动

1. 将 USB 闪存盘、键盘和显示器连接到 ZimaCube。
2. 开机并反复按 **F11**，直到出现启动菜单。
3. 使用方向键选择 **UEFI:（你的 USB 闪存盘）**，然后按 Enter。

![](https://manage.icewhale.io/api/static/docs/1729233125821_image.png)

## 步骤 4：执行更新

BIOS 更新会自动开始，并显示进度界面。更新过程中请勿关闭电源或拔出 USB 闪存盘；通常不到两分钟即可完成。

![](https://manage.icewhale.io/api/static/docs/1729233155418_image.png)

## 步骤 5：完成更新

更新完成后，你会看到确认界面。

![](https://manage.icewhale.io/api/static/docs/1729233179864_image.png)

按电源按钮关机，拔出 USB 闪存盘，然后再次按电源按钮正常启动。

BIOS 更新后的首次启动可能比平时更久，因为系统正在重新初始化硬件。这属于正常现象。

## 故障排查

- **未出现启动菜单**：尝试其他 USB 接口。后置 USB 2.0 接口通常更适合 BIOS 更新。也可以尝试按 **Delete** 或 **F2**，而不是 F11。
- **启动菜单未检测到 USB 闪存盘**：确认闪存盘已格式化为 FAT32，并且 EFI 文件夹位于根目录，而不是其他文件夹内。
- **更新看似卡住**：至少等待五分钟后再判断是否已经停止。某些 BIOS 更新会在步骤之间长时间暂停。
- **更新后系统无法启动**：尝试执行 **[CMOS 重置](./resets-cmos)**步骤，恢复 BIOS 默认设置。
