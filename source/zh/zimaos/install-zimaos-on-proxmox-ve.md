---
title: 在Proxmox VE上使用ISO镜像安装ZimaOS  
description:  
type: Docs  
author: icewhale123456  
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字  
---  
**随着ZimaOS ISO镜像的正式发布**，现在可以在虚拟化环境中更轻松地安装和部署ZimaOS，例如**Proxmox VE (PVE)**。  
该ISO镜像**特别针对虚拟机安装进行了优化**，允许您在没有物理硬件的情况下部署ZimaOS，并快速探索其核心功能。  
这种安装方法非常适合**测试、学习、评估和轻量级使用场景**。

## 简介  
在Proxmox VE (PVE)上安装ZimaOS意味着将ZimaOS作为**虚拟机使用ISO镜像**运行，而不是直接安装到物理硬件上。  
这种方法让您能够在标准的虚拟化环境中体验完整的ZimaOS系统和基于Web的管理界面。  
通过在PVE上部署ZimaOS，您可以快速在现有服务器或家庭实验室中创建一个独立的ZimaOS实例。与裸机安装相比，这种方法有几个优点：  
- 设置速度更快，学习曲线更低  
- 相较于直接硬件安装，风险更小  
- 通过快照和备份轻松复制环境  
- 灵活的资源分配（CPU、内存、存储）  
尤其适合**功能评估、解决方案验证和轻量级服务部署**。

---

## 系统要求  
硬件和环境要求  
- 一个正在运行并可访问的Proxmox VE (PVE)环境  
- 启用了虚拟化支持的x86_64 CPU  
  推荐的最低配置：  
  - CPU：2核或更多（推荐4核）  
  - 内存：4GB或更多（推荐8GB）  
  - 存储：至少32GB的可用磁盘空间  

软件和系统要求  
- ZimaOS ISO安装镜像  
- Proxmox VE 6.x / 7.x / 8.x / 9.x  
- 虚拟机启动模式：UEFI  
- 虚拟机BIOS类型：OVMF (UEFI)

---

## 安装步骤  

{% note warn Note: %}
  本教程所需的ZimaOS ISO镜像可以从以下链接下载：  
  https://github.com/IceWhaleTech/ZimaOS/releases  
{% endnote %}

### 上传ZimaOS ISO镜像  
1. 登录Proxmox VE Web界面  
2. 导航至**local → ISO Images → Upload**  
![](https://manage.icewhale.io/api/static/docs/1767616598247_copyImage.png)  
3. 选择已下载的**ZimaOS ISO镜像**并点击**Upload**  
![](https://manage.icewhale.io/api/static/docs/1767616612358_image.png)

### 创建虚拟机  
1. 点击**创建VM**按钮  
![](https://manage.icewhale.io/api/static/docs/1767616679913_image.png)  
2. 在操作系统页面，选择ZimaOS ISO镜像  
![](https://manage.icewhale.io/api/static/docs/1767616694612_image.png)  
3. 在系统页面：  
  - 设置BIOS为UEFI  
  - 取消勾选**添加EFI磁盘**  
![](https://manage.icewhale.io/api/static/docs/1767616715004_image.png)  
4. 在**CPU**页面，调整CPU核数

{% note warn  %} **目的**：分配更多的CPU核心可以提高多线程性能，帮助在负载下保持顺畅运行。  
**推荐**：4个或更多CPU核心  
{% endnote %}

![](https://manage.icewhale.io/api/static/docs/1767616752746_image.png)  
5. 在**内存**页面，调整内存大小  
{% note warn  %} **目的**：更多的内存可以让ZimaOS运行更多的服务，提升多任务性能，并减少频繁操作时的卡顿。  
**推荐**：8GB（8192MB）或更多  
{% endnote %}

![](https://manage.icewhale.io/api/static/docs/1767616800421_image.png)

### 安装ZimaOS  
1. 创建虚拟机后，点击**启动**  
![](https://manage.icewhale.io/api/static/docs/1767616824433_image.png)  
2. 点击**控制台**以打开虚拟机控制台  
![](https://manage.icewhale.io/api/static/docs/1767616843275_image.png)  
3. 按`Enter`开始ZimaOS安装过程  
![](https://manage.icewhale.io/api/static/docs/1767616860449_image.png)  
4. 选择**Install ZimaOS**并按`Enter`  
![](https://manage.icewhale.io/api/static/docs/1767616872278_image.png)  
5. 选择目标磁盘进行安装并按`Enter`  
![](https://manage.icewhale.io/api/static/docs/1767616901998_image.png)  
6. 选择**Yes**确认磁盘并按`Enter`  
![](https://manage.icewhale.io/api/static/docs/1767616916757_image.png)  
7. 再次确认以继续安装  
![](https://manage.icewhale.io/api/static/docs/1767616933805_image.png)  
8. 安装完成后，会显示完成屏幕  
![](https://manage.icewhale.io/api/static/docs/1767616945992_image.png)

---

### 移除ISO镜像  
1. 返回Proxmox VE界面  
2. 选择虚拟机，点击**CD**并选择**编辑**  
![](https://manage.icewhale.io/api/static/docs/1767616981489_image.png)  
3. 选择**不使用任何媒体**并点击**确定**  
![](https://manage.icewhale.io/api/static/docs/1767616998638_image.png)  
4. 修改后，配置应该如下所示  
![](https://manage.icewhale.io/api/static/docs/1767617011570_image.png)

---

### 启动并访问ZimaOS  
1. 启动ZimaOS虚拟机  
2. 点击**控制台**以访问虚拟机控制台  
3. 等待系统完成启动  
4. 控制台中将显示IP地址  
打开浏览器并输入IP地址，访问ZimaOS Web管理界面。  
![](https://manage.icewhale.io/api/static/docs/1767617057004_image.png)

---

## 继续探索ZimaOS  

现在，ZimaOS已经在虚拟机中运行，您可以继续按自己的节奏探索其功能和工作流程。  
要了解如何开始系统设置、存储管理和应用部署，请访问以下指南：

👉[开始使用ZimaOS](https://www.zimaspace.com/docs/zimaos/Get-Started)  

这份指南将帮助您迈出下一步，充分利用您的ZimaOS环境。
