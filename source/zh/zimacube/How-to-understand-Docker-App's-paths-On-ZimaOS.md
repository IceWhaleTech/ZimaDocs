---
title: 如何理解 ZimaOS 上 Docker App 的路径
description:
type: “文档”
tip: 顶部栏固定格式请勿删除，description 为文章描述，不填时将截取内容最前一段文字
---
# Docker 和 ZimaOS
Docker 是一个让用户能够自动化部署、扩展和管理轻量级容器中应用程序的平台。这些容器将应用程序及其所有依赖项打包在一起，确保在各种环境中都能保持一致的性能。Docker 的效率在于其能够隔离应用程序，使其更具可移植性和可扩展性。

![](https://manage.icewhale.io/api/static/docs/1722494286724_image.png)
在谈到 Docker 应用时，ZimaOS 确实令人印象深刻，只需点击几下就能简化整个过程。ZimaOS 对于 NAS 爱好者、专业用户和工作室用户来说也是一个颠覆者。其直观的界面简化了数据备份和管理。

![](https://manage.icewhale.io/api/static/docs/1722494305565_image.png)
但您真的理解在 ZimaOS 上使用 Docker 应用时的路径吗？您能区分 ZimaOS 路径和 Docker 应用路径吗？

# Docker 如何组织路径
当您运行 Docker 容器时，它在自己的文件系统中操作，与主机系统分离。以下是 Docker 如何组织路径的一般概述：

- 容器文件系统：在 Docker 容器内部，文件系统与主机分离。运行在容器中的应用程序只能看到自己的根文件系统，该文件系统通常以 / 开头。例如，如果您有一个应用程序在容器内的 /app/data 存储数据，那么该路径仅存在于该容器的文件系统中。

- 卷：为了使数据在容器生命周期之外持久化，Docker 使用卷。卷是位于容器文件系统外的目录或文件，通常位于主机系统上，并且可以在容器之间共享。它们通常以特定路径挂载到容器中。

![](https://manage.icewhale.io/api/static/docs/1722494354267_image.png)
还有其他数据共享模式，您可以在这里了解更多。

# Plex 的示例
![](https://manage.icewhale.io/api/static/docs/1722494383898_image.png)
让我们以 Plex，一个流行的媒体服务器应用程序为例，来理解在 ZimaOS 中如何使用 Docker 组织路径。

**Docker 应用**：Plex 作为 Docker 应用在 ZimaOS 的应用商店中发布。当您从 ZimaOS 的应用商店安装 Plex 时，ZimaOS 会为各个目录指定几个路径：

- 容器中的 /config：此目录保存 Plex 的配置文件。在 ZimaOS 中，其卷路径为 /DATA/AppData/plex/config，该路径挂载到容器的 /config，以确保配置在容器重启时保持不变。

- 容器中的 /media：这是 Plex 访问您媒体文件的地方。此外，媒体文件的卷路径为 /DATA/Media，并挂载到容器的 /media。

请记住，我们希望文件存储在主机中。这样，即使容器被停止或重新创建，数据仍然保持完整。
![](https://manage.icewhale.io/api/static/docs/1722494441184_image.png)
您可以通过点击 Plex 的设置找到详细的配置。此外，在此页面上，卷路径可以通过点击卷路径旁边的灰色图标轻松修改。

![](https://manage.icewhale.io/api/static/docs/1722494459333_image.png)
通过理解 Docker 路径及其与像 Plex 的应用程序集成的方式，NAS 爱好者和家庭实验室用户可以有效地管理他们的应用程序，将容器化的灵活性与持久存储的可靠性相结合。