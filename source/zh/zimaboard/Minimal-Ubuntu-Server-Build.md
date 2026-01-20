---
title: Ubuntu LTS 最小化安装、镜像磁盘和 Docker 引擎  
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

> 本教程最初由 **<u>ZaNgA</u>** 创建，我们感谢他的贡献。

本教程将引导你设置 **ZimaBoard** 作为一个紧凑且可靠的家庭实验室或边缘服务器：

1. 在 ZimaBoard 上安装 **最新的 Ubuntu LTS（最小化）**
2. 使用 `mdadm` 配置 **两个 SATA 磁盘为 RAID-1 镜像**
3. 安装并验证 **Docker 引擎**

本指南假设你对基本的 Linux 命令行有一定了解，并使用 **Ubuntu Server LTS**（最小化版，无 GUI）。

---

## 1. 前提条件

### 硬件

* ZimaBoard（任何型号）
* USB 键盘 + HDMI 显示器 **或** 串口/SSH 访问
* USB 闪存驱动器（≥ 4 GB）
* 2× SATA 磁盘（SSD 或 HDD，推荐使用相同大小）
* SATA 电源和数据线（ZimaBoard 配件中包含）

### 软件

* Ubuntu Server **最新的 LTS** ISO（最小化版）
* 镜像工具：**Balena Etcher**，**Rufus**，或 `dd`

---

## 2. 下载 Ubuntu Server LTS（最小化版）

1. 访问官方 Ubuntu 下载页面
2. 下载 **Ubuntu Server LTS**（例如 24.04 LTS）
3. 无需额外的软件包 — 服务器 ISO 已经是最小化版

---

## 3. 创建启动 USB

在 Linux 上：

```bash
sudo dd if=ubuntu-24.04-live-server-amd64.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

将 `/dev/sdX` 替换为你的 USB 设备。

在 Windows/macOS 上：

* 使用 **Balena Etcher** 或 **Rufus**

---

## 4. 在 ZimaBoard 上安装 Ubuntu

1. 将 USB 闪存驱动器插入 ZimaBoard
2. 开机并按 **DEL** 或 **F7** 进入 BIOS
3. 设置 USB 为首选启动设备
4. 保存并重启

### 安装选项

* 语言和键盘：根据需要选择
* 网络：DHCP（默认）
* 代理：留空
* 镜像：默认 Ubuntu 镜像

### 存储配置（重要）

* 选择 **自定义存储布局**
* 将 Ubuntu 安装到 **仅内置 eMMC**
* **暂时不要格式化 SATA 磁盘**

典型布局：

* `/` 在 eMMC 上
* 不使用交换空间（可选）

继续安装并重启。

---

## 5. 激活 Ubuntu Pro（免费计划）

Ubuntu Pro 提供扩展的安全维护（ESM）和额外的加固功能。对于个人和小规模使用，**Ubuntu Pro 对于最多 5 台机器是免费的**。

### 5.1 获取免费 Ubuntu Pro 令牌

1. 访问 Ubuntu Pro 网站
2. 使用 Ubuntu One 账户登录
3. 复制你的 **Ubuntu Pro 令牌**

---

### 5.2 绑定 Ubuntu Pro

在 ZimaBoard 上：

```bash
sudo pro attach <YOUR_TOKEN_HERE>
```

验证状态：

```bash
pro status
```

你应该看到 `esm-infra` 和 `esm-apps` 已启用。

---

### 5.3 启用推荐的服务

```bash
sudo pro enable esm-infra esm-apps
```

可选（推荐用于服务器）：

```bash
sudo pro enable livepatch
```

> Livepatch 允许在不重启的情况下进行内核安全修复。

---

### 5.4 更新系统

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 6. 更新基础系统

登录并更新：

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 7. 识别 SATA 磁盘

列出块设备：

```bash
lsblk -o NAME,SIZE,TYPE,MODEL
```

示例：

```
sda   1.8T 磁盘  Samsung_SSD
sdb   1.8T 磁盘  Samsung_SSD
mmcblk0 32G 磁盘 eMMC
```

我们将镜像 **/dev/sda** 和 **/dev/sdb**。

---

## 8. 安装 RAID 工具

```bash
sudo apt install -y mdadm
```

安装过程中，当系统询问是否自动启动 RAID 数组时选择 **是**。

---

## 9. 创建 RAID-1 镜像

### 擦除现有签名（推荐）

```bash
sudo wipefs -a /dev/sda
sudo wipefs -a /dev/sdb
```

### 创建数组

```bash
sudo mdadm --create /dev/md0 \
  --level=1 \
  --raid-devices=2 \
  /dev/sda /dev/sdb
```

监控同步进度：

```bash
cat /proc/mdstat
```

---

## 10. 创建文件系统

格式化数组（例如：ext4）：

```bash
sudo mkfs.ext4 /dev/md0
```

创建挂载点：

```bash
sudo mkdir -p /srv/data
```

挂载：

```bash
sudo mount /dev/md0 /srv/data
```

---

## 11. 持久化 RAID 配置

### 保存 mdadm 配置

```bash
sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf
sudo update-initramfs -u
```

### 持久化挂载

获取 UUID：

```bash
blkid /dev/md0
```

编辑 `/etc/fstab`：

```bash
sudo nano /etc/fstab
```

添加：

```
UUID=<uuid>  /srv/data  ext4  defaults,nofail  0  2
```

测试：

```bash
sudo umount /srv/data
sudo mount -a
```

---

## 12. 安装 Docker 引擎

### 安装依赖项

```bash
sudo apt install -y ca-certificates curl gnupg
```

### 添加 Docker GPG 密钥

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

### 添加 Docker 仓库

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 安装 Docker

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## 13. 安装后 Docker 设置

允许你的用户在不使用 sudo 的情况下运行 Docker：

```bash
sudo usermod -aG docker $USER
newgrp docker
```

测试 Docker：

```bash
docker run --rm hello-world
```

---

## 14. （可选）使用 RAID 存储用于 Docker

推荐用于容器和卷：

```bash
sudo systemctl stop docker
sudo mkdir -p /srv/data/docker
sudo rsync -aHAX /var/lib/docker/ /srv/data/docker/
```

编辑 Docker 配置：

```bash
sudo nano /etc/docker/daemon.json
```

添加：

```json
{
  "data-root": "/srv/data/docker"
}
```

重启 Docker：

```bash
sudo systemctl start docker
```

---

## 15. 健康检查与维护

检查 RAID 状态：

```bash
cat /proc/mdstat
sudo mdadm --detail /dev/md0
```

启用 SMART 监控：

```bash
sudo apt install -y smartmontools
sudo smartctl -a /dev/sda
```

---

## 16. Docker Compose 基础与示例

Docker Compose 是在 ZimaBoard 上定义和管理多容器应用的推荐方式。

### 安装 Docker Compose 插件

如果你已经按照上面的 Docker 引擎部分安装了，那么 Compose 插件已经安装好。
验证：

```bash
docker compose version
```

---

## 17.1 创建标准目录结构

使用 RAID-1 数组作为持久化数据存储是最佳实践：

```bash
sudo mkdir -p /srv/data/compose
sudo chown -R $USER:$USER /srv/data/compose
```

每