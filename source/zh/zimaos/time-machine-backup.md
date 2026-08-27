---
title: 在 ZimaOS 上使用 Time Machine 备份
seo_title: "将 Time Machine 备份保存到 NAS：使用 ZimaOS 备份 Mac"
description: "使用 Time Machine 将 Mac 备份到 ZimaOS。为 Time Machine 设置 Samba 共享，并从 macOS 系统设置中连接。"
type: Docs
author: admin
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

如果你使用 Mac，Time Machine 就是最熟悉的备份工具。将备份目标设置为 ZimaOS 设备后，家中的每台 Mac 都能获得完整的自动备份，而且无需额外订阅。

## 步骤 1：在 ZimaOS 上设置共享文件夹

1. 打开 ZimaOS 仪表板，然后进入 **Files** 页面。
2. 找到或创建准备用作备份目标的文件夹，例如 **Time Machine**。
3. 右键单击该文件夹，然后选择 **Share via Samba**。

![ZimaOS Files 右键菜单显示文件夹的 Share via Samba 选项](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)

4. 在弹窗中确认文件夹名称和位置，并选中 **Configure for Time Machine**。系统会使用默认 ZimaOS 用户进行身份验证，你也可以添加其他用户。

![Samba 共享弹窗中已选中 Configure for Time Machine](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)

5. 单击 **Create**。

![用于 Time Machine 备份的 ZimaOS 共享文件夹创建完成](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)

## 步骤 2：在 Mac 上连接 Time Machine

1. 打开**系统设置**，然后进入 **Time Machine**。

![macOS 系统设置显示 Time Machine 备份选项](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)

2. 单击**添加备份磁盘**。

![Time Machine 设置显示添加备份磁盘按钮](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)

3. 选择刚刚在 ZimaOS 上创建的共享文件夹，然后单击**设置磁盘**。

![Time Machine 磁盘列表中已选择 ZimaOS 共享文件夹](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)

4. 按照提示输入 ZimaOS 用户名和密码。

![macOS 提示输入访问 Time Machine 共享所需的用户名和密码](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)

## 步骤 3：开始备份

当 Mac 与 ZimaOS 设备位于同一网络时，Time Machine 会找到目标文件夹并自动开始备份。

![Time Machine 界面显示首次备份正在进行](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)

{% note tip 故障排查 %}
如果备份失败，请检查网络连接，并确认设备上的 SMB 服务已启用。如果 macOS 不允许输入密码，请先单击空白区域，再次单击密码输入框。
{% endnote %}

## 恢复文件

需要找回文件时，可从 Time Machine 界面进行恢复。Apple 指南提供了详细说明：[在 Mac 上恢复使用 Time Machine 备份的项目](https://support.apple.com/zh-cn/guide/mac-help/mh11422/11.0/mac/11.0)。

## 下一步

- **[3-2-1 备份策略](./how-to-use-3-2-1-backup-on-zimaos "使用 NAS 上的 3-2-1 备份规则保护数据")** — Time Machine 是整个方案中的一环，还应添加异地副本
- **[电脑备份](./computer-backup "通过 Finder、文件资源管理器或同步任务将电脑备份到 ZimaOS")** — 为家中的每台电脑选择合适的备份方式
