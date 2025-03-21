---
title: ZimaOS 和 QTS 双向同步指南：WebDAV + Zerotier 设置
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
![](https://manage.icewhale.io/api/static/docs/1742550303202_image.png)
## 实际痛点：跨 NAS 同步挑战
最近有用户询问：“我们的团队同时使用 ZimaOS 和 QNAP QTS 系统。手动传输文件每天耗费超过 2 小时。我们如何能够实现自动双向同步？”本指南正是为了解决这个问题而来。
## 为什么选择 WebDAV + Zerotier？
![](https://manage.icewhale.io/api/static/docs/1742550364111_image.png)
图 1：通过 WebDAV 和 Zerotier 实现的跨系统文件同步架构
### 关键词：ZimaOS 和 QTS 双向同步
- WebDAV : 跨平台文件协作协议
- Zerotier : 无需公共 IP 的 NAT 穿透虚拟 LAN 工具
- 优势 : 配置简单，自动同步和可恢复同步
## 分步实施
### 步骤 1：在 ZimaOS 上配置 WebDAV
1. 安装应用 : 在 ZimaOS 应用商店中搜索“WebDAV”
![](https://manage.icewhale.io/api/static/docs/1742550445278_image.png)
2. 关键参数（图 2）：
  - 认证信息：默认 `casaos` 
  - 同步目录：通过“选择目录图标”（第二个红色圆圈）选择目标文件夹
  - 端口：注意自定义端口（例如，`5005`）
![](https://manage.icewhale.io/api/static/docs/1742550489305_image.png)
图 2：ZimaOS WebDAV 配置界面
### 步骤 2：建立 Zerotier 网络
1. 获取网络 ID :
  - ZimaOS 控制面板 → 设置 → 网络 → 远程访问 → 启用 → 点击“NetworkID”进行复制
![](https://manage.icewhale.io/api/static/docs/1742550534267_image.png)
2. 安装 Zerotier 并启用 SSH。（相关文章资源可在文章下方找到）
3. QNAP 配置：
  - SSH 进入 QTS 并运行：
`zerotier-cli join [ZimaOS NetworkID]`
4. 验证连接性：
  - 获取 ZimaOS Zerotier IP：网络 → 虚拟网络 → 静态 IP
  - 使用 `ping [ZimaOS Zerotier IP]` 测试连接
### 步骤 3：创建 HBS 3 同步任务
1. 设置同步：
  - 从 QTS 应用中心安装“HBS 3”
  - 启动 HBS 3 并选择同步 → 双向同步任务 → 添加 WebDAV 账户
![](https://manage.icewhale.io/api/static/docs/1742550603938_image.png)
2. 优化：
  - 选择“冲突策略”以重命名本地文件
  - 将“任务调度频率”设置为 30 ~ 300 秒
## 结论与资源
![](https://manage.icewhale.io/api/static/docs/1742550646713_image.png)
您已完成：
✅ 实时跨系统同步
✅ 无需公共 IP 的 NAT 穿透
✅ 自动文件双向同步
如果在使用过程中遇到任何问题，请随时告知我们。您也可以加入我们的 [社区](https://community.zimaspace.com/) 和 [Discord](https://discord.gg/uuNfKzG5) 以讨论更多关于 NAS 和 ZimaOS 的内容。期待您的反馈！

进一步阅读：
[Zerotier 官方手册](https://docs.zerotier.com/qnap/)
[在 QNAP 上启用 SSH 访问](https://www.qnap.com.cn/zh-cn/how-to/faq/article/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-ssh-%E8%AE%BF%E9%97%AE-qnap-nas)
[保持 ZimaOS 和 Synology DSM 之间的文件同步](https://www.youtube.com/watch?v=n8ajxo6Uh3c)