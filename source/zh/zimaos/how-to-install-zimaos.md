---
title: 如何安装 ZimaOS
description: "按照本指南分步安装 ZimaOS，包括下载镜像、写入 USB 设备、完成安装，以及通过 ZimaClient 或 IP 地址登录。"
type: Docs
author: admin
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

## 你将了解
ZimaOS 是一款为通用 x86-64 设备设计的轻量级 NAS 操作系统。
本指南提供完整步骤，帮助你快速、顺利地**下载、写入并安装 ZimaOS**。

如需安装到虚拟机，请参照[在 Proxmox VE 上安装 ZimaOS](./install-zimaos-on-proxmox-ve)。

---

## 所需设备
- 一台 **Zima 设备**或至少有 25 GB 存储空间的通用 x86-64 设备。
- 一个容量不低于 4 GB 的 USB 设备。
- [ZimaOS USB Creator](https://www.zimaspace.com/zimaos/download) 或 [balenaEtcher](https://etcher.balena.io/)。

---

## 开始安装
要启动 ZimaOS，需要在 BIOS 中启用 UEFI 启动模式并关闭 Secure Boot。

### 步骤 1：准备 ZimaOS 安装镜像
ZimaOS USB Creator 会下载你在应用中选择的版本。如果使用 balenaEtcher，请从 [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases) 下载以 `_installer.img` 结尾的文件。`.raucb` 是更新包，不能用作 USB 安装镜像。

### 步骤 2：制作可启动的 ZimaOS USB 安装盘
选择下面任意一种方式制作安装盘，然后继续步骤 3。

> 截图中的版本号、文件名、设备名称和界面细节仅为示例。

> 写入镜像会清除所选 USB 设备中的全部数据。请先备份重要文件，并核对设备名称和容量后再继续。

#### 方式 A：ZimaOS USB Creator

1. 插入 USB 设备，打开 **ZimaOS USB Creator**。在 **Choose operating system** 中选择要安装的 ZimaOS 版本，然后点击 **Next**。

![在 USB Creator 中选择 ZimaOS 版本](/images/guides/usb-creator-select-os.webp)

2. 选择 USB 设备。核对名称和容量，保持选中 **Exclude system drives**，然后点击 **Next**。

![在 USB Creator 中选择 USB 设备](/images/guides/usb-creator-select-storage.webp)

3. 在摘要页面检查操作系统镜像和存储设备，然后点击 **Write**。

![检查镜像和目标 USB 设备](/images/guides/usb-creator-review-write.webp)

4. 在 **Erase this device?** 对话框中再次核对目标设备，然后点击 **Erase and write**。

![确认清除并写入目标 USB 设备](/images/guides/usb-creator-erase-warning.webp)

5. 如果系统请求管理员授权，请按提示完成授权。等待 USB Creator 下载并写入镜像，期间保持 USB 设备连接。

![USB Creator 正在下载并写入镜像](/images/guides/usb-creator-writing-progress.webp)

6. 出现 **Write complete!** 后，设备已自动弹出。点击 **Finish**，即可安全拔下 USB 设备。

![USB Creator 写入完成界面](/images/guides/usb-creator-write-complete.webp)

#### 方式 B：balenaEtcher

1. 下载并安装 [balenaEtcher](https://etcher.balena.io/)。

2. 打开 Etcher，点击 **Flash from file**，选择步骤 1 下载的 `_installer.img` 文件。

![在 balenaEtcher 中选择 ZimaOS 安装镜像](/images/guides/zimaos-etcher-select-image.webp)

3. 点击 **Select target**，选择 USB 设备并核对名称和容量。

![在 balenaEtcher 中选择目标 USB 设备](/images/guides/zimaos-etcher-select-target.webp)

4. 点击 **Flash!**，按提示授权访问，等待写入和校验完成。

5. Etcher 提示完成后，安全弹出 USB 设备，然后继续下面的步骤 3。

![balenaEtcher 已完成 ZimaOS 镜像写入](/images/guides/zimaos-etcher-complete.webp)

### 步骤 3：从 USB 启动设备
1. 将可启动 USB 设备插入目标设备。进入 BIOS 或启动菜单，选择从 USB 设备启动。
2. 在 ZimaOS Installer 欢迎界面点击 **Start**。

![带有 Start 按钮的 ZimaOS Installer 欢迎界面](/images/guides/zimaos-installer-welcome.webp)

3. 选择安装程序的语言，点击 **Continue**。

![选择 ZimaOS Installer 的语言](/images/guides/zimaos-installer-choose-language.webp)

4. 选择要安装 ZimaOS 的磁盘。仔细核对磁盘名称、路径和容量：**该磁盘上的所有数据都将被清除**。确认后点击 **Continue**。

![选择 ZimaOS 的安装目标磁盘](/images/guides/zimaos-installer-choose-disk.webp)

5. 查看目标磁盘和安装前检查结果，然后点击 **Continue**。

![查看目标磁盘和安装前检查结果](/images/guides/zimaos-installer-ready.webp)

6. 在清除数据的警告界面再次核对磁盘，然后点击 **Erase and install**。

![确认清除所选磁盘的数据](/images/guides/zimaos-installer-erase-confirmation.webp)

7. 安装程序写入 ZimaOS 时，保持设备通电。

![ZimaOS 安装进度](/images/guides/zimaos-installer-progress.webp)

### 步骤 4：完成 ZimaOS 安装
出现安装完成界面后，先拔下 USB 设备，再点击 **Restart**。设备会从已安装的磁盘启动，进入 ZimaOS。

![带有 Restart 按钮的 ZimaOS 安装完成界面](/images/guides/zimaos-installer-complete.webp)

### 步骤 5：访问 ZimaOS
重新启动后，设备屏幕会显示系统信息和访问 ZimaOS 的方式。截图中的序列号和 IP 地址已遮挡，请使用你自己设备上显示的地址。

![显示系统信息和访问方式的 ZimaOS 屏幕，序列号和 IP 地址已遮挡](/images/guides/zimaos-console-access.webp)

使用 **ZimaClient** 连接最方便，它可以发现网络中的设备。下载 ZimaClient 并参照[ZimaOS 快速入门指南](./get-started)操作。

也可以在浏览器中输入设备屏幕上显示的 IP 地址，打开 **ZimaOS Web UI**。

下图展示的是 ZimaCube 上的初始页面。选择语言并阅读隐私政策后，再按照页面提示继续。其他设备显示的页面可能不同。

![带有语言和隐私政策选项的 ZimaCube 初始设置页面](/images/guides/zimaos-zimacube-welcome.webp)

🎉 **恭喜！** ZimaOS 已成功安装，现在可以开始探索各项 NAS 功能。

---

## 安装 ZimaOS 后的下一步

在智能服务器上安装 ZimaOS 后，可以开始搭建个人云和家庭服务器。
你可以尝试：

- 🔧 **设置 RAID 或存储池**以保护数据。
- 📂 **启用文件共享（SMB/FTP）**，在设备之间访问文件。
- 🎞️ **运行媒体服务器（Plex、Jellyfin）**，串流播放电影和音乐。
- 🐳 从 ZimaOS App Store 直接**部署 Docker 应用**。
- ☁️ 将重要数据**备份到外部硬盘或云端**。

👉 准备使用更多功能？
- 继续阅读 **[开始使用](./get-started)**，完成首次启动设置
- 设置 **[远程访问](./remote-access)**，随时随地连接设备
- 加入 **[社区论坛](https://community.zimaspace.com/)**

💡 建议收藏本指南以便日后查看。ZimaOS 新版本通常会带来性能改进和新应用。
