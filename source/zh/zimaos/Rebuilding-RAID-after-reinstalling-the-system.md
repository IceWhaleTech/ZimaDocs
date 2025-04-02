---
title: 文章标题
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## 目的
本教程将指导您使用 `Files` 应用程序下载并替换 `local-storage.db` 文件，使您能够在重新安装系统后迁移或恢复 RAID 配置数据。
## 操作步骤
1. **下载 local-storage.db 文件**
  a. 在 ZimaCube 上访问 `Files`。
  b. 在 `Files` 中，将访问路径设置为 `/ZimaOS-HD/.casaos/db`。
  c. 找到 `local-storage.db` 文件并下载到您的本地设备。
2. **重新安装系统**
  a. 安全关闭 ZimaCube，确保设备完全断电。
  b. 根据需要更换系统 SSD 驱动器并重新安装 ZimaOS。
  c. 启动 ZimaCube，确保 ZimaOS 安装成功并正常运行。
3. **上传并替换 local-storage.db 文件**
  a. 打开 `Files`，再次导航到 `/ZimaOS-HD/.casaos/db` 目录。
  b. 在当前目录中找到 `local-storage.db` 文件，并将其重命名为 `local-storage.db.bak` 以保留备份。
  c. 将步骤 1 中下载的 `local-storage.db` 文件上传到当前目录。
4. **重启 ZimaCube：**
  替换文件后，重启 ZimaCube 设备以确保所有更改生效。
## 注意事项
- 确保在继续之前备份所有重要数据，以避免因错误导致的数据丢失。
- 如果在安装或配置过程中遇到问题，请检查您的网络连接或联系技术支持。