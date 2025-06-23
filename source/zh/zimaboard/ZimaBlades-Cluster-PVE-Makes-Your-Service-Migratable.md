---
title: 2 ZimaBlades, 1 集群？PVE使你的服务可迁移！
type: “文档”
tip: 顶部栏固定格式请勿删除
---
想象一下你的家庭服务器上运行着像VPN、媒体转码、DNS，甚至是游戏服务器等重要服务。你是否曾经想过有一天将这些服务迁移到一台新机器上？在不同机器之间迁移服务是一个常见的需求，如果服务器发生故障时，你能自动迁移服务到新设备，那就更好了。我们如何通过ZimaBlade实现这一目标？

![](https://manage.icewhale.io/api/static/docs/1720063069079_copyImage.jpeg)

[ZimaBlade](https://shop.zimaspace.com/products/zimablade-single-board-server-for-cyber-native)是一款紧凑且强大的服务器计算机。PVE（Proxmox Virtual Environment）是一种服务器虚拟化管理解决方案。你可以使用ZimaBlade结合PVE来管理虚拟机、容器和高度可用的集群。

![](https://manage.icewhale.io/api/static/docs/1720063069927_copyImage.png)

今天，我们将使用2个ZimaBlade单元来设置PVE集群，以实现服务迁移。

以下是你需要的物品：

*   2个ZimaBlade套件：[ZimaBlade单板服务器](https://shop.zimaspace.com/products/zimablade-single-board-server-for-cyber-native)
    
*   2个硬盘（SATA）
    
*   另外：
    
    *   1个USB驱动器，用于创建PVE安装介质
        
    *   1个USB集线器，以便你将键盘和USB驱动器连接到ZimaBlade
        
    *   2根RJ45网线用于网络连接
        
    *   1个键盘和显示器，用于初始设置
        

## 安装PVE系统

以下是将PVE安装到ZimaBlade上的简单步骤：

使用`Rufus`将PVE ISO文件写入USB驱动器。你可能需要以下资源：

获取Rufus：[Rufus下载](https://rufus.ie/)

获取PVE ISO：[Proxmox下载](https://www.proxmox.com/en/downloads)

将PVE写入USB驱动器，创建PVE安装介质：

*   将USB驱动器插入Windows主机并启动Rufus程序。
    
*   在Rufus中，选择“设备”并选择刚插入的USB驱动器。
    
*   在“启动选择”中，点击选择按钮，选择磁盘上的PVE ISO文件。
    

![](https://manage.icewhale.io/api/static/docs/1720063070516_copyImage.png)

*   点击“开始”按钮，将安装文件写入USB驱动器。
    

  

安装内存，连接以太网和视频电缆到ZimaBlade。关于如何安装内存和其他组件的详细步骤，请参考此完整教程：[使用ZimaBlade设置NAS](https://www.zimaspace.com/docs/docs/How-to-set-up-a-NAS-with-ZimaBlade.html)。

  

现在，开始安装PVE：

*   从Windows机器上安全卸下USB驱动器，并将其与键盘一起插入USB集线器。
    
*   将USB集线器连接到ZimaBlade。
    
*   开启显示器。
    
*   连接电源到ZimaBlade，然后迅速反复按键盘上的DEL键进入ZimaBlade BIOS。
    

![](https://manage.icewhale.io/api/static/docs/1720063071163_copyImage.jpeg)

*   使用键盘上的箭头键在BIOS中导航，找到“保存并退出”菜单。
    
*   在“启动覆盖”下，找到你的USB驱动器并按回车。
    
*   你现在将进入PVE安装界面。
    

  

在2个ZimaBlade单元上安装PVE时，请记住以下几点：

*   将PVE安装到外部存储上（而不是内部eMMC）。
    
*   确保它们具有一致的区域设置。以下是示例：

![](https://manage.icewhale.io/api/static/docs/1720063616916_image.png)

*   为每个ZimaBlade使用不同的主机名。
    
*   为每个ZimaBlade手动分配不同的IP地址（根据你的LAN配置）。以下是示例：

  ![](https://manage.icewhale.io/api/static/docs/1720063563445_image.png)

按照提示操作，等待安装完成。

创建PVE集群
-------------

选择任一ZimaBlade单元，访问PVE WebUI，地址为`https://PVE1IP:8006`：

![](https://manage.icewhale.io/api/static/docs/1720063072977_copyImage.png)

  

点击“集群”，然后点击“创建集群”。为你的集群命名，然后点击“创建”：

![](https://manage.icewhale.io/api/static/docs/1720063073525_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063074070_copyImage.png)

在看到“任务成功”后，关闭窗口，点击“加入信息”，然后点击“复制信息”：

![](https://manage.icewhale.io/api/static/docs/1720063074636_copyImage.png)

接下来，访问第二个ZimaBlade上的PVE WebUI，地址为`https://PVE2IP:8006`：

![](https://manage.icewhale.io/api/static/docs/1720063075226_copyImage.png)

点击“集群”，然后点击“加入集群”，粘贴之前复制的加入信息，输入另一个ZimaBlade的root密码，然后点击“加入集群”：

![](https://manage.icewhale.io/api/static/docs/1720063075739_copyImage.png)

现在，这台机器已经成为集群的一部分。如果你有更多的机器，操作步骤相同。一旦多个节点加入集群，登录任意ZimaBlade的PVE WebUI时，都可以看到其他节点。

![](https://manage.icewhale.io/api/static/docs/1720063076277_copyImage.png)

现在，你可以在任意节点上安装虚拟机和服务！

集群使用案例：服务迁移
---------------------

要将一个节点上运行的服务迁移到集群中的另一个节点：

*   选择一个节点安装系统。这里我将以Debian为例。
    
    *   如果你需要关于如何在PVE中安装系统的详细视频教程，请查看我们的教程：[如何在PVE中安装系统](https://www.youtube.com/watch?v=K4pOkBwJMg8)
        
*   安装完成后，点击右侧的“启动”按钮启动虚拟机。
    
*   从同一局域网中的另一台Windows机器，ping该虚拟机。
    

![](https://manage.icewhale.io/api/static/docs/1720063076945_copyImage.png)

*   现在，我将把虚拟机从PVE2迁移到PVE1。按照步骤完成服务迁移。
    

![](https://manage.icewhale.io/api/static/docs/1720063077580_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063078124_copyImage.png)

*   在迁移过程中，原服务将继续运行。
    

![](https://manage.icewhale.io/api/static/docs/1720063078794_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063079381_copyImage.png)

*   经历短暂的中断后，服务迁移完成，ping测试恢复。
    

![](https://manage.icewhale.io/api/static/docs/1720063080183_copyImage.png)

*   完成！你已经成功迁移了虚拟机。
    

其他资源
------------

服务迁移仅仅是开始。通过Ceph，你可以在一个节点故障时，自动将服务迁移到集群中的其他节点！在未来的文章中，我们将展示ZimaBlade + 集群 + Ceph + 高可用性的完整设置过程。

  

如果在使用过程中遇到任何问题，请随时告诉我们。你也可以加入我们的[社区](https://icewhale.community/)和[Discord](https://discord.gg/uuNfKzG5)，讨论更多关于PVE和ZimaBlade的内容。我们期待你的反馈！