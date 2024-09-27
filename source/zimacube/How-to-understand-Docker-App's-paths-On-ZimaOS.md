---
title: How to understand Docker App's paths On ZimaOS
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Docker and ZimaOS
Docker is platform that enables users to automate the deployment, scaling, and management of applications in lightweight containers. These containers bundle an application with all its dependencies, ensuring consistent performance across various environments. Docker’s efficiency lies in its ability to isolate applications, making them more portable and scalable.

![](https://manage.icewhale.io/api/static/docs/1722494286724_image.png)
ZimaOS is really impressive when we talk about Docker apps, streamlining the process with just a few clicks. ZimaOS is also a game-changer for NAS enthusiasts, pro users and studio users. Its intuitive interface simplifies data backup and management.

![](https://manage.icewhale.io/api/static/docs/1722494305565_image.png)
But do you really understand the path when using Dockers apps on ZimaOS? Can you distinguish between the ZimaOS path and the Docker apps path?

# How Docker Organizes Paths
When you run a Docker container, it operates within its own filesystem, separate from the host system. Here’s a general overview of how Docker organizes paths:

- Container Filesystem: Inside a Docker container, the file system is isolated from the host machine. Applications running in a container see their own root filesystem, which typically starts from /. For instance, if you have an application that stores data in /app/data within the container, this path exists solely within that container’s filesystem.

- Volumes: To persist data beyond the lifecycle of a container, Docker uses volumes. Volumes are directories or files outside the container’s filesystem, usually located on the host system, and can be shared between containers. They are often mounted into containers at specific paths.

![](https://manage.icewhale.io/api/static/docs/1722494354267_image.png)
There are other data sharing modes, which you can learn here.

# The Example of Plex
![](https://manage.icewhale.io/api/static/docs/1722494383898_image.png)
Let’s take plex, a popular media server application, as an example to understand how paths are organized within ZimaOS using Docker.

**Docker App**: Plex is distributed as a Docker app in ZimaOS’ app store. When you install Plex from ZimaOS’ app store, ZimaOS will specify several paths for various directories:

- /config in container: this directory holds Plex’s configuration files. On ZimaOS, its volume path is /DATA/AppData/plex/config on ZimaOS, which is mounted to container’s /config to ensure configurations persist across container restarts.

- /media in container: this is where Plex accesses your media files. Also, media files’ volume path is /DATA/Media on ZimaOS and it is mounted to containers’s /media.

Keep in mind that we want files stored in the host. This way, even if a container is stopped or recreated, the data remains intact.
![](https://manage.icewhale.io/api/static/docs/1722494441184_image.png)
You can find the detailed configuration by clicking Plex’s Settings. Besides, on this page, the volume path can be easily modified by clicking the grey icon next to the volume path.

![](https://manage.icewhale.io/api/static/docs/1722494459333_image.png)
By understanding Docker paths and how they integrate with applications like Plex, NAS enthusiasts and Homelabbers can efficiently manage their applications in a way that combines the flexibility of containerization with the reliability of persistent storage.