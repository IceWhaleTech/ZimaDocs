---
title: 使用ISO镜像在Proxmox VE上安装ZimaOS
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
**W**ith the official release of the** ZimaOS ISO image**, you can now install and deploy ZimaOS more easily in virtualized environments such as** Proxmox VE (PVE)**.
 This ISO image is **specifically optimized for virtual machine installation**, allowing you to deploy ZimaOS without physical hardware and quickly explore its core features.
This installation method is ideal for **testing, learning, evaluation, and lightweight usage scenarios**.

## 简介
在Proxmox VE (PVE)上安装ZimaOS意味着通过**ISO镜像将ZimaOS作为虚拟机运行**，而不是直接在物理硬件上安装。这个方法可以让你在标准虚拟化环境中体验完整的ZimaOS系统和基于Web的管理界面。
通过在PVE上部署ZimaOS，你可以快速在现有的服务器或家庭实验室上创建一个独立的ZimaOS实例。与裸机安装相比，这种方法有几个明显的优势：
- 更快的设置，较低的学习曲线
- 与直接安装硬件相比，风险更小
- 易于使用快照和备份复制环境
- 灵活的资源分配（CPU、内存、存储）
这特别适合**功能评估、解决方案验证和轻量级服务部署**。

---

## 要求
硬件与环境要求
- 一个正常运行并可访问的Proxmox VE (PVE)环境
- 启用了虚拟化支持的x86_64 CPU
推荐最低配置：
- CPU：2个核心或更多（推荐4个核心）
- 内存：4 GB或更多（推荐8 GB）
- 存储：至少32 GB的可用磁盘空间

软件与系统要求
- ZimaOS ISO安装镜像
- Proxmox VE 6.x / 7.x / 8.x / 9.x
- 虚拟机启动模式：UEFI
- 虚拟机BIOS类型：OVMF (UEFI)

---

## 安装步骤
注意：
 该教程所需的ZimaOS ISO镜像可以从以下链接下载：
https://github.com/IceWhaleTech/ZimaOS/releases

### 上传ZimaOS ISO镜像
1. 登录Proxmox VE Web界面
2. 导航至 **local → ISO Images → Upload**
![](https://manage.icewhale.io/api/static/docs/1767616598247_copyImage.png)
3. 选择下载的 **ZimaOS ISO镜像** 并点击 **Upload**
![](https://manage.icewhale.io/api/static/docs/1767616612358_image.png)

### 创建虚拟机
1. 点击 **Create VM** 按钮
![](https://manage.icewhale.io/api/static/docs/1767616679913_image.png)
2. 在OS页面，选择ZimaOS ISO镜像
![](https://manage.icewhale.io/api/static/docs/1767616694612_image.png)
3. 在系统页面：
  - 设置BIOS为UEFI
  - 取消勾选“添加EFI磁盘”
![](https://manage.icewhale.io/api/static/docs/1767616715004_image.png)
4. 在**CPU**页面，调整CPU核心数量
**目的**：
 分配更多的CPU核心有助于提升多线程性能，并确保在负载下的平稳运行。
**推荐**：4个或更多CPU核心
![](https://manage.icewhale.io/api/static/docs/1767616752746_image.png)
5. 在**内存**页面，调整内存大小
**目的**：
 更多的内存允许ZimaOS运行更多的服务，提高多任务性能，并减少频繁操作时的卡顿。
**推荐**：8 GB（8192 MB）或更多
![](https://manage.icewhale.io/api/static/docs/1767616800421_image.png)

### 安装ZimaOS
1. 创建虚拟机后，点击 **Start**
![](https://manage.icewhale.io/api/static/docs/1767616824433_image.png)
2. 点击 **Console** 打开虚拟机控制台
![](https://manage.icewhale.io/api/static/docs/1767616843275_image.png)
3. 按 **Enter** 启动ZimaOS安装过程
![](https://manage.icewhale.io/api/static/docs/1767616860449_image.png)
4. 选择 **Install ZimaOS** 并按 **Enter**
![](https://manage.icewhale.io/api/static/docs/1767616872278_image.png)
5. 选择目标磁盘进行安装，并按 **Enter**
![](https://manage.icewhale.io/api/static/docs/1767616901998_image.png)
6. 确认选择的磁盘，选择 **Yes** 并按 **Enter**
![](https://manage.icewhale.io/api/static/docs/1767616916757_image.png)
7. 再次确认以继续安装
![](https://manage.icewhale.io/api/static/docs/1767616933805_image.png)
8. 安装完成后，将显示完成界面
![](https://manage.icewhale.io/api/static/docs/1767616945992_image.png)

---

### 移除ISO镜像
1. 返回Proxmox VE界面
2. 选择虚拟机，点击 **CD**，然后点击 **Edit**
![](https://manage.icewhale.io/api/static/docs/1767616981489_image.png)
3. 选择 **Do not use any media** 并点击 **OK**
![](https://manage.icewhale.io/api/static/docs/1767616998638_image.png)
4. 更改后，配置应显示如下
![](https://manage.icewhale.io/api/static/docs/1767617011570_image.png)

---

### 启动并访问ZimaOS
1. 启动ZimaOS虚拟机
2. 点击 **Console** 访问虚拟机控制台
3. 等待系统启动完成
4. 控制台中将显示IP地址
打开浏览器，输入该IP地址访问ZimaOS Web管理界面。
![](https://manage.icewhale.io/api/static/docs/1767617057004_image.png)

---

## 继续探索ZimaOS

现在，ZimaOS已经在你的虚拟机中运行，你可以根据自己的节奏继续探索它的功能和工作流程。  
要了解如何开始进行系统设置、存储管理和应用部署，请访问以下指南：

👉** [开始使用ZimaOS ](https://www.zimaspace.com/docs/zimaos/Get-Started) ** 

本指南将帮助你迈出下一步，充分利用你的ZimaOS环境。
