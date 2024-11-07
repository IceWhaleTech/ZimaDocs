---
title: 如何在 Zimaboard 上启用 Wake-on-LAN (WOL)
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
LAN Wake-on-LAN (WOL) 是系统和计算机处理的重要部分，尤其是当您处理像 Zimaboard 这样的单板服务器 (SBS) 时。
为了满足您的需求，我们的 Zimaboard 产品开箱即用地支持 WOL，您只需要启用它。
通过 BIOS 在 Zimaboard 上启用 LAN Wake-on-LAN (WOL) 是一个三步过程。
- 第一步是通过 BIOS 配置 WOL
- 第二步是启用系统服务中的 WOL，并记下 MAC 地址和其他信息
- 第三步是下载适当的 WakeOnLine 软件并配置新设备。

以下是具体步骤：

### BIOS 设置
1. 打开系统电源并按 **Delete** 键进入 BIOS。
2. 使用键盘上的方向键导航到 **Advanced** 选项卡，然后选择 **Power Management Configuration** 项目。确保 **Wake on PME** 选项设置为 **Enabled**。按 **F10** 并点击 **OK** 保存设置，系统将自动重启。
   ![](https://manage.icewhale.io/api/static/docs/1730194172109_image.png)
   ![](https://manage.icewhale.io/api/static/docs/1730194187655_image.png)

### 启用系统服务

1. 我们的 ZimaBoard 预装了 CasaOS 系统。在这里，可以利用 SSH 工具控制命令行，并使用您的用户名和密码连接。
使用命令 `ip a` 列出系统中所有网络接口及其状态。网络接口名称通常像 `eth0`、`enp2s0`、`wlan0` 等。您可以根据您连接的网络接口识别合适的接口名称：
同时，在后续步骤中使用 Windows 上的 WakeMeOnLan 时，确保使用正确的目标地址。通常，广播地址是整个子网的广播 IP 地址。例如，如果 ZimaBoard 的 IP 地址是 `10.0.192.211`，则广播地址应为 `10.0.255.255`。因此，也应注意广播地址。 
![](https://manage.icewhale.io/api/static/docs/1730195494901_copyImage.jpeg)

2. 运行以下命令以更新您的包管理器并安装 ethtool 工具：
```
sudo apt update
sudo apt install ethtool
```

3. 我在这里启用的网络接口是 `enp3s0`。默认情况下，网络接口的 WOL 是禁用的。您可以使用以下命令检查 WOL 是否已启用：
```
sudo ethtool enp3s0
```
其中 `enp3s0` 应该是您启用的网络接口名称，如下所示
![](https://manage.icewhale.io/api/static/docs/1730196409296_image.png)
`Wake-on: d` 意味着 WOL 当前被禁用。

4. 要启用 Wake-on-LAN 功能，需要运行以下命令：
```
sudo ethtool -s enp3s0 wol g
```
  该命令将启用魔术数据包（g），支持通过魔术数据包唤醒 ZimaBoard。
  运行此命令后，您可以再次使用以下命令确认 WOL 是否已启用：
```
sudo ethtool enp3s0
```

| ![](https://manage.icewhale.io/api/static/docs/1730196776593_image.png) | ![](https://manage.icewhale.io/api/static/docs/1730196793376_image.png) |
| - | - |
| 运行此命令 | `Wake-on` 的状态应更改为 `g`，表示 WOL 已成功启用 |


5. 通过 systemd 创建启动脚本
- 创建一个 systemd 服务，以便在系统启动时自动运行 ethtool 命令以启用 WOL。服务是最简单的。
- 创建一个新的服务文件：
```
sudo nano /etc/systemd/system/wol.service
```
- 在文件中输入以下内容：
```
[Unit]
Description=Enable Wake-on-LAN on enp3s0

[Service]
Type=oneshot
ExecStart=/sbin/ethtool -s enp3s0 wol g

[Install]
WantedBy=multi-user.target
```
![](https://manage.icewhale.io/api/static/docs/1730197095005_image.png)
- 按 `Ctel+O` 保存，然后按 `Enter`，再按 `Ctrl+X` 关闭文件，然后使用以下命令启用服务：
```
sudo systemctl enable wol.service
```

- 重启系统并检查 Wake-on 设置是否仍为 `g`：
```
sudo systemctl start wol.service
```

上述方法可以确保 WOL 设置在重启后自动启用。

6. 成功后，通过网页关闭计算机，或输入 `sudo shutdown now` 关闭计算机
![](https://manage.icewhale.io/api/static/docs/1730197245860_image.png)

### Wake on LAN

**Windows 测试**
1. 下载 [WakeMeOnLan](https://sourceforge.net/projects/wakemeonlan/) 软件（当然还有很多其他选择，这里我们使用这个软件进行测试）
2. 打开软件并在文件下点击 `Add New Computer`
![](https://manage.icewhale.io/api/static/docs/1730197626956_image.png)
3. 在 IP 地址中输入之前的广播地址。例如，如果 ZimaBoard 的 IP 地址是 `10.0.192.211`，则广播地址应为 `10.0.255.255`。填写 MAC 地址即可。不要填写其他信息。点击 `OK`。
4. 选择要唤醒的设备，点击右上角的 `Wake Up Selected Computers`，观察是否可以唤醒并启动。
![](https://manage.icewhale.io/api/static/docs/1730197821740_image.png)
{% note warn 提示 %}
如果您需要在其他设备（如 Android、iOS、MacOS 等）上远程唤醒，可以在线搜索相关软件。由于基本步骤没有太大不同，所以我在这里不再详细说明。祝您好运。
{% endnote %}