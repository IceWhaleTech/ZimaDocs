---
title: 如何使用 Time Machine 将文件从我的 Mac 备份到 ZimaCube？
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
想要保护你的 Mac 文件吗？使用 ZimaOS 的新 Time Machine 功能，你可以轻松地将文件备份到 ZimaCube。这一强大的功能不仅快速简单，而且确保你的重要数据始终受到保护。以下是快速设置备份的简单步骤。

在开始之前，请确保你已经下载并安装了最新版本的 ZimaOS: https://github.com/IceWhaleTech/ZimaOS/releases

## 第一步：设置 ZimaOS 共享文件夹
1. 打开你的 ZimaOS 仪表盘（例如，通过 `http://<你的_nas_ip>` 访问）。
2. 转到 **文件** 页面。
3. 找到你想用作备份目的地的文件夹，例如 **Time Machine**。
4. 右击该文件夹并选择 **通过 Samba 共享**。
![](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)
5. 在弹出的窗口中：
- 确认文件夹名称和存储位置正确。
- 勾选 **为 Time Machine 配置选项**。
- 请记住：你的默认用户将用于 Time Machine 身份验证。
- （可选）点击 **+ 添加**，为其他用户分配访问权限。
![](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)
6. 点击创建以完成共享文件夹设置。
  ![](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)
## 第二步：在你的 Mac 上设置 Time Machine
1. 打开 **系统偏好设置** 或 **系统设置**（macOS Ventura 及更高版本）。
2. 点击 **Time Machine**。
![](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)
3. 选择 **添加备份磁盘...**。
![](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)
4. 在磁盘列表中，找到并选择之前在 ZimaOS 上配置的共享文件夹（例如：**Time Machine**）。点击 **设置磁盘**。
![](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)
5. 根据提示输入你的用户名和密码以完成磁盘配置。
![](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)
## 第三步：开始备份
1. 确保你的 Mac 和 ZimaCube 在同一个局域网中。
2. Time Machine 将自动识别目标文件夹并开始备份。
![](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)
## 注意事项
**存储空间**：确保 ZimaCube 有足够的可用空间以满足备份要求。
**网络连接**：如果备份失败，请检查网络连接并确认 ZimaCube 的 SMB 服务已启用。
**权限密码输入问题**：在输入密码时，macOS 可能无法输入。如果遇到此问题，请先点击空白区域，然后再次点击密码输入框并重试。

## 总结
按照上述步骤，你已经成功将 Mac 文件备份到 ZimaCube，为你的数据安全增加了一道坚实的屏障。如果在操作过程中有任何问题，请随时联系我们的支持团队 <feedback@zimaos.com>。让 ZimaOS 为你的工作和生活提供更高效的保护！

## 进一步阅读：
**如何使用 Time Machine 恢复文件**：macOS 用户指南：[在 Mac 上恢复使用 Time Machine 备份的项目](https://support.apple.com/zh-cn/guide/mac-help/mh11422/11.0/mac/11.0)