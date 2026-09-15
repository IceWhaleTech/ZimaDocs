---
title: 使用 Transmission 下载种子
seo_title: "在 ZimaOS 上使用 Transmission 将种子下载到 NAS"
description: "从 ZimaOS 应用商店安装 Transmission，添加种子或磁力链接，并将下载内容保存到 NAS。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Transmission 是一款提供浏览器界面的 BitTorrent 客户端。在 ZimaOS 上，它可以把下载内容直接保存到 NAS，并允许你通过局域网内的任意浏览器管理任务。

> 请只下载你有权使用或分享的内容。

## 安装 Transmission

1. 打开 ZimaOS 仪表盘，选择 **应用商店**。
2. 搜索 **Transmission**，选择应用并点击**安装**。
3. 等待应用进入运行状态，然后从 ZimaOS 仪表盘打开 Transmission。
4. 使用安装页面显示的凭据登录。当前应用商店的默认值为：

| 用户名 | 密码 |
| --- | --- |
| `casaos` | `casaos` |

应用商店版本通过 `9091` 端口提供 Web 界面，并把 ZimaOS 的 `/DATA/Downloads` 文件夹映射为 Transmission 容器内的 `/downloads`。如需手动打开，请访问 `http://ZIMAOS-IP:9091/transmission/web/`。

![任务列表为空的 Transmission Web 界面](/images/app-store/transmission-dashboard.png)

在允许受信任局域网以外的设备访问前，请先更新登录凭据：点击 Transmission 应用图标右上角的三个点，打开 **Settings**，修改 `USER` 和 `PASS` 的值，保存并重启应用。如果通过反向代理发布此界面，请使用 HTTPS。

## 添加种子或磁力链接

1. 点击左上角的 **Open**。
2. 选择一个 `.torrent` 文件，或把 HTTP(S) 种子地址或磁力链接粘贴到 **Or enter a URL**。
3. 把 **Destination folder** 设为 `/downloads/complete`，或选择 `/downloads` 下的其他文件夹。这里应填写 Transmission 显示的容器路径，不要填写 ZimaOS 主机路径。
4. 如需立即开始下载，请保持 **Start when added** 处于选中状态，然后点击 **Add**。

![Transmission 的 Add Torrents 对话框及默认下载文件夹](/images/app-store/transmission-add-torrent.png)

### 使用 Debian 官方种子测试

Debian 在[官方 BitTorrent 镜像页面](https://cdimage.debian.org/debian-cd/current/amd64/bt-cd/)提供可合法下载的测试内容。打开该页面，复制当前 `amd64-netinst.iso.torrent` 文件的链接，将其粘贴到 **Or enter a URL**，然后点击 **Add**。

![Transmission 正在下载 Debian netinst ISO](/images/app-store/transmission-debian-download.png)

任务行会显示下载进度、剩余时间、已连接节点和当前速度。使用默认映射时，下载完成的文件会出现在 ZimaOS 的**文件 > Downloads > complete** 中。

## 管理下载任务

- 选择任务，然后使用 **Start** 或 **Stop** 控制任务状态。
- 使用 **Inspector** 查看文件、节点、Tracker 和单个任务的限制。
- 使用 **Delete** 删除任务，并确认是否同时删除已下载的数据。
- 使用列表上方的筛选器查看活动、下载中、做种、暂停、已完成或出错的任务。

## 故障排查

- **浏览器返回 `401 Unauthorized`：** 检查 Transmission 应用设置中的 `USER` 和 `PASS`，然后重启应用。
- **任务没有节点或速度很慢：** 确认种子处于活动状态，并在需要时允许防火墙或路由器使用节点端口 `51413`。
- **Transmission 无法写入文件：** 把目标位置保留在 `/downloads` 下，并检查 ZimaOS 中的应用存储权限。
- **找不到已完成的文件：** 检查 Transmission 显示的目标位置。默认的 `/downloads/complete` 对应 ZimaOS 中的**文件 > Downloads > complete**。
