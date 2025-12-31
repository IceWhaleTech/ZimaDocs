---
title:在ZimaOS上安装Syncthing的简易指南
description:  
type: Docs  
author: admin  
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字  
---  

> _最初由_ _**Muditha Liyanagama (社区贡献者)**_ _在IceWhale社区论坛发布:_ _[https://community.zimaspace.com/t/a-simple-guide-to-installing-syncthing-on-zimaos/7456](https://community.zimaspace.com/t/a-simple-guide-to-installing-syncthing-on-zimaos/7456?utm_source=chatgpt.com)_

大家好，ZimaOS和Zimaboard的爱好者们！

我发现，尽管ZimaOS社区和Ice-whale团队提供了出色的支持，但有时很难找到清晰、组织良好且详细的安装指南。对于那些更喜欢直截了当、一步步进行操作的朋友，特别是在解决那些令人沮丧的小问题时，这篇指南就是为你们准备的。这是我计划写的关于ZimaOS和Zimaboard系列文章的第一篇，希望它对你有所帮助。

我在一台Zimaboard2上进行了此安装，配置如下：

* **CPU**：Intel(R) N150 4核心 2.90 GHz 4线程  
* **RAM**：16 GB 6400 MHz LPDDR5  
* **GPU**：Intel Corporation Alder Lake-N \[Intel Graphics\]  
* **操作系统**：ZimaOS v1.5.3 Plus  

让我们开始安装Syncthing吧

### **步骤1：访问应用商店**

1. 登录ZimaOS界面。  
2. 导航到**应用商店**。  

![app_store](https://manage.icewhale.io/api/static/docs/1767081086850_copyImage.png)  

### **步骤2：查找并选择Syncthing**

1. 在应用商店的搜索框中输入Syncthing。  
2. 从搜索结果中选择**Syncthing (备份)**。  

![synctin](https://manage.icewhale.io/api/static/docs/1767081087737_copyImage.png)  

### **步骤3：自定义安装**

1. 找到**安装**按钮。不要直接点击它，而是点击它旁边的小**向下箭头**。  
2. 选择**自定义安装**。  

![custom_install](https://manage.icewhale.io/api/static/docs/1767081088482_copyImage.png)  

### **步骤4：安装前的关键配置**

在此步骤中，我们将设置Syncthing正常工作所需的基本参数。

* **Syncthing文件夹路径**：  
这是Syncthing将管理你的同步文件的主要位置。你在该路径下创建的任何子文件夹都可以进行同步。  

* **重要提示**：你不能将任何已挂载磁盘的根目录或系统文件夹（如Gallery、Media、Document等）用作Syncthing文件夹路径，因为使用这些路径运行Syncthing通常需要root用户权限，这在安全方面是不推荐的。  

* **PGID和PUID**：  
这些是关键标识符，告诉Syncthing使用哪个用户权限。设置不正确可能会导致同步问题，甚至可能需要完全卸载并重新安装才能修复。  

* **如何找到你的PGID和PUID**：  

1. 在ZimaOS中，进入**设置**。  
2. 导航到**常规**。  
3. 启用**开发者模式**。  
4. 进入**视图**。  
5. 点击**SSH访问**以启用它。  
6. 点击**基于Web的终端**。  
7. 使用你的ZimaOS用户名和密码登录。  
8. 登录后，输入以下命令，并在每个命令后按Enter。**记得将** _username_ **替换为你实际的ZimaOS用户名。** _id -u username_ _id -g username_  

命令输出将显示你的**PUID**（用户ID）和**PGID**（组ID）。**小心地复制并粘贴这些数字**到Syncthing自定义安装界面中相应的**环境变量**部分，正如示例图所示。对我而言，PGID是1000，PUID是999。  

![set](https://manage.icewhale.io/api/static/docs/1767081089336_copyImage.png)

* **再三检查**：在继续之前，**仔细检查你的所有设置**。确保Syncthing文件夹路径有效，并且你的PGID和PUID值已正确输入。  
* **安装**：一旦你确信所有设置正确，点击**安装**按钮。  

### **步骤5：安装后 - 同步最佳实践**

Syncthing成功安装后：

* 在同步文件夹时，**始终通过Syncthing本身创建目标文件夹路径**。  
* **不要直接通过ZimaOS的默认文件浏览器创建目标文件夹**。这样做有时可能会导致意外的同步问题。  

希望这篇详细的指南能让你在ZimaOS设备上安装Syncthing的过程顺利并成功！祝你同步愉快！
