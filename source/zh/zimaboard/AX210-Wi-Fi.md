---
title: AX210 Wi-Fi 卡用户指南
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除, description为文章描述，不填时将截取内容最前一段文字
---
## 1. 介绍
Intel® Wi-Fi 6E AX210 (Gig+) 适配器设计用于支持 Wi-Fi 6E 技术。该产品支持在 2.4GHz、5GHz 和 6GHz 频段的双流 Wi-Fi，以及蓝牙® 5.3。结合 Intel® Core™ 处理器和卓越的 Intel 无线创新，Intel® Wi-Fi 6E AX210 模块可以显著提升您在家中、工作中或外出时的连接体验。

## 2. 规格
![AX210 Wi-Fi 卡规格](https://manage.icewhale.io/api/static/docs/1755248064574_copyImage.png)

## 3. 使用说明
**快速操作步骤：  
A. 将 AX210 卡插入 ZimaBoard。  
B. 更新 AX210 驱动程序。  
C. 打开 CasaOS 系统并连接 Wi-Fi。**

### 3.1 STA 模式
**所需设备：**
- ZimaBlade / ZimaBoard × 1
- AX210 Wi-Fi 卡 × 1
- 以太网线 × 1
- 电源适配器 × 1
**可选：**
- miniDP 电缆 × 1
- 显示器 × 1
- 键盘 × 1

**连接示意图**
![连接示意图](https://manage.icewhale.io/api/static/docs/1755248150818_image.png)

#### 步骤 1：检查 AX210 Wi-Fi 卡是否被检测到
1. 通过终端访问设备。
![终端](https://manage.icewhale.io/api/static/docs/1755248310999_copyImage.png)
![登录终端](https://manage.icewhale.io/api/static/docs/1755248335646_image.png)

2. 切换到 root 模式 `su`
![root 模式](https://manage.icewhale.io/api/static/docs/1755248357144_image.png)

3. 运行命令 `lspci`
![lspci 结果](https://manage.icewhale.io/api/static/docs/1755248383004_image.png)

   您应该看到列出 Intel 设备，确认其已连接到 ZimaBoard。

#### 步骤 2：安装 AX210 驱动程序
<mark style="background-color: #fff9bd">注意：  
如果您使用的是预装在 ZimaBoard 或 ZimaBlade 上的 CasaOS，且内核版本为 **5.10**，您可以直接跳到 **步骤 3**。  
您还可以从 [提供的链接](https://www.zimaspace.com/docs/zimaboard/Restore-factory-settings) 获取此版本。</mark>

1. 检查您的内核版本。如果低于 6.10，建议升级。在本指南中，我们将使用 backports 内核。
![内核版本](https://manage.icewhale.io/api/static/docs/1755248568547_image.png)

2. 添加 backports 仓库：
```language
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" | sudo tee -a /etc/apt/sources.list
```

3. 更新软件包列表：
```language
sudo apt update
```
![apt 更新](https://manage.icewhale.io/api/static/docs/1755249083029_image.png)

4. 安装 Debian 存档密钥：
```language
sudo apt install -y debian-archive-keyring
```
![许可证](https://manage.icewhale.io/api/static/docs/1755249117075_image.png)

5. 再次更新软件包列表：
```language
sudo apt update
```
![apt 更新](https://manage.icewhale.io/api/static/docs/1755249154038_image.png)

6. 升级内核并安装固件：
```language
sudo apt install -y -t bookworm-backports linux-image-amd64 firmware-iwlwifi
```
![下载内核和驱动](https://manage.icewhale.io/api/static/docs/1755249240618_image.png)

7. 重启：
```language
sudo reboot
```
重启后，确认内核版本为 6.12 或更高。
![](https://manage.icewhale.io/api/static/docs/1755249301302_image.png)

#### 步骤 3：使用 `nmtui` 连接 Wi-Fi
我们将使用 `nmtui` 工具来连接。
```language
sudo nmtui
```

如果系统无法识别 `nmtui` 命令，请参阅 **常见问题** 部分的安装说明。

1. 选择 **激活连接**。
![网络管理器 GUI/TUi](https://manage.icewhale.io/api/static/docs/1755249412290_image.png)

2. 选择您的 Wi-Fi 网络（SSID）。
![选择 Wi-Fi](https://manage.icewhale.io/api/static/docs/1755249456648_image.png)

3. 输入密码并按回车。
![无线网络需要身份验证/密码](https://manage.icewhale.io/api/static/docs/1755249476230_image.png)

4. 验证 IP 地址和连接状态  
保存并退出 `nmtui` 工具，并使用 `ip a` 检查无线接口的状态：
```language
ip a
```
![查找 IP 地址](https://manage.icewhale.io/api/static/docs/1755249580916_image.png)

如果您使用的是 CasaOS 的 GUI 版本，只需打开 Wi-Fi 菜单并选择您希望连接的网络。

![](https://manage.icewhale.io/api/static/docs/1755249604651_image.png)

#### 兼容的路由器操作系统
- **OpenWRT**
  1. 您需要安装 iwlwifi，这是 AX210 的官方驱动程序。
  2. 访问英特尔 [官方网站](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html 383) 下载固件。
  3. 解压 iwlwifi-ty-59.601f3a66.0.tgz 并将文件复制到 /lib/firmware/。
  4. 使用 lspci 命令检查 AX210 路径。
  5. 进入 /sys/bus/pci/devices，您将看到设备 ID。
  6. 进入目录并使用 pwd 命令获取绝对路径。
  7. 编辑 /etc/config/wireless
```language
config wifi-device 'radio0'
        option type 'mac80211'
        option country 'US'
        option cell_density '0'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'

config wifi-device 'radio1'
        option type 'mac80211'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'
        option band '5g'
        option htmode 'HE80'
        option cell_density '0'
        option country 'US'
```
  8. 重启！您将发现驱动程序运行正常。

#### 常见问题
- **从 Zima 设备到 LAN 设备的网络速度测试**
![iperf3](https://manage.icewhale.io/api/static/docs/1755249878561_image.png)

- **AP 模式（仅支持 2.4 GHz）**

  1. 安装所需的包：
     `sudo apt update`
     `sudo apt install hostapd iw`
  2. 配置无线网络：
     编辑 `/etc/hostapd/hostapd.conf`
```language
interface=wlp1s0  # 根据您的网卡名称进行替换
driver=nl80211
ssid=mylove   # 将 YourSSID 替换为您想要的网络名称
hw_mode=a
channel=36      # 选择您希望的频道
country_code=US
ieee80211ac=1
wmm_enabled=1
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP
wpa_passphrase=YourPassphrase  # 将 YourPassphrase 替换为您的 Wi-Fi 密码
logger_stdout=-1
logger_stdout_level=2
```
  3. 启动 hostapd：
    ` sudo systemctl start hostapd`
![](https://manage.icewhale.io/api/static/docs/1755250711162_image.png)

  4. 从另一台设备连接并测试您的 Wi-Fi 网络。![](https://manage.icewhale.io/api/static/docs/1755250706664_image.png)

- **安装 nmtui 工具**
  `nmtui` 包含在 `network-manager` 软件包中：
```language
sudo apt install network-manager
```