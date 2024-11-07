---
title: 如何理解ZimaOS上Docker应用的路径
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Docker和ZimaOS
Docker是一个平台，使用户能够自动化在轻量级容器中部署、扩展和管理应用程序。这些容器将应用程序及其所有依赖项打包在一起，确保在各种环境下的一致性能。Docker的效率在于其能够隔离应用程序，使它们更具可移植性和可扩展性。

![](https://manage.icewhale.io/api/static/docs/1722494286724_image.png)
在谈到Docker应用时，ZimaOS真的令人印象深刻，只需几次点击就能简化流程。ZimaOS对于NAS爱好者、专业用户和工作室用户来说也是一个颠覆性的变化。其直观的界面简化了数据备份和管理。

![](https://manage.icewhale.io/api/static/docs/1722494305565_image.png)
但是，当您在ZimaOS上使用Docker应用时，您真的理解路径吗？您能区分ZimaOS路径和Docker应用路径吗？

# Docker如何组织路径
当您运行Docker容器时，它在其自己的文件系统中操作，与主机系统相隔离。以下是Docker如何组织路径的一般概述：

- 容器文件系统：在Docker容器内部，文件系统与主机机器隔离。运行在容器中的应用程序看到自己的根文件系统，通常以/开始。例如，如果您有一个应用程序在容器内部的/app/data中存储数据，则该路径仅存在于该容器的文件系统中。

- 卷：为了在容器的生命周期之外持久化数据，Docker使用卷。卷是位于容器文件系统外的目录或文件，通常位于主机系统上，可以在容器之间共享。它们通常会挂载到容器的特定路径中。

![](https://manage.icewhale.io/api/static/docs/1722494354267_image.png)
还有其他数据共享模式，您可以在此处了解。

# Plex的示例
![](https://manage.icewhale.io/api/static/docs/1722494383898_image.png)
让我们以plex，一个流行的媒体服务器应用程序，作为例子，来了解如何在ZimaOS中使用Docker组织路径。

**Docker应用**：Plex作为Docker应用在ZimaOS的应用商店中分发。当您从ZimaOS的应用商店安装Plex时，ZimaOS会为各种目录指定几个路径：

- 容器中的/config：该目录保存Plex的配置文件。在ZimaOS上，其卷路径是/ZIMA/AppData/plex/config，在ZimaOS上挂载到容器的/config，以确保配置在容器重启时保持不变。

- 容器中的/media：这是Plex访问您的媒体文件的地方。此外，媒体文件的卷路径是/ZIMA/Media，在ZimaOS上挂载到容器的/media。

请记住，我们希望文件存储在主机上。这样，即使容器被停止或重建，数据也会保持完整。
![](https://manage.icewhale.io/api/static/docs/1722494441184_image.png)
您可以通过点击Plex的设置找到详细的配置。此外，在此页面上，卷路径可以通过点击卷路径旁边的灰色图标轻松修改。

![](https://manage.icewhale.io/api/static/docs/1722494459333_image.png)
通过了解Docker路径以及它们如何与像Plex这样的应用程序集成，NAS爱好者和家庭实验室用户可以有效地管理他们的应用程序，以一种将容器化的灵活性与持久存储的可靠性相结合的方式。