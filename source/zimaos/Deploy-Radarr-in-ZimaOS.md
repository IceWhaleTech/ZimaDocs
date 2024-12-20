---
title: Deploy Radarr in ZimaOS
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
### What is Radarr?

Radarr is an open source media management tool designed for movie lovers. It can help users automatically search, download and manage movie resources. Under the integrated environment of ZimaOS, Radarr not only provides powerful functions, but also creates a seamless user experience for users through optimized performance and convenient operation.

### Feature highlights

- **Automated management**
Radarr can monitor your specified movie directory and automatically download or replace movie resources for you according to preset quality and format standards.

- **Powerful search function**
With integrated seed and NZB indexers, Radarr can quickly find qualified movie resources and work seamlessly with download tools such as qBittorrent or Deluge.

- **Intelligent renaming**
Supports intelligent renaming of downloaded files according to user needs to keep the file library neat and tidy.

- **Advanced filtering rules**
Users can set detailed download filtering rules based on conditions such as resolution, file size, video encoding, etc.

- **Multi-language support**
Supports multi-language movie names and metadata, allowing users to easily manage a global movie resource library.

### Differences between Sonarr and Radarr:
- **Sonarr** obtains episode information from TV series databases (such as TVDB or TMDB), including episode name, episode data, release date, etc.
Sonarr is the best choice when you want to track updates of a TV series and automatically download new episodes. For example, if you subscribe to the full season of a show, Sonarr will automatically obtain resources based on the release of the episodes.
- **Radarr** obtains movie information from movie databases (such as TMDB or IMDB), including movie name, release year, director, actors, etc.
Radarr is very suitable for building a movie library or collecting specific movies. For example, you can add upcoming movies to Radarr, and it will automatically download them for you when the resources are available.
### Usage scenarios on ZimaOS
Through the application store provided by ZimaOS, users can easily install and configure Radarr and use it in the following scenarios:
1. **Build a private movie library**
With NAS storage devices, automatically organize and manage massive movie resources.
2. **Integration with qBittorrent and Jackett**
Call qBittorrent or Jackett through Radarr to automate the entire movie acquisition process.
3. **Remote management and access**
With the remote access function of ZimaOS, users can manage movie resources anytime and anywhere.
### Installation and configuration guide
1. Install Radarr
- Search for "Radarr" in the ZimaOS application store.
- Click the "Install" button and wait for the system to complete the deployment.
![](https://manage.icewhale.io/api/static/docs/1734684801723_image.png)

2. Configure Radarr
- Open the Radarr web interface, the default address is http://[device IP]:7878, and configure the authentication requirements.
![](https://manage.icewhale.io/api/static/docs/1734684812731_image.png)

- Set the download directory, media library directory, and preferred quality standards.

| ![](https://manage.icewhale.io/api/static/docs/1734684844643_image.png) | ![](https://manage.icewhale.io/api/static/docs/1734684853319_image.png) |
| - | - |


- Configure the download client (such as qBittorrent) and enter the relevant connection information.
![](https://manage.icewhale.io/api/static/docs/1734684862167_image.png)

3. Add indexer
- Add supported torrent or NZB index sources (such as Jackett) in "Settings" -> "Indexer".
![](https://manage.icewhale.io/api/static/docs/1734684878417_image.png)

- After configuration, Radarr will automatically retrieve movie resources.
4. Get Started
- Add target movies, and Radarr will automatically search and download according to preset conditions.
![](https://manage.icewhale.io/api/static/docs/1734684901105_image.png)

- Manage existing resources to ensure that your movie library is always up to date and optimal.
### F&Q
- **Unable to connect to the download client?**
Check whether the client's API Key and network settings are correct.
- **Cannot find resources?**
Make sure the indexer is configured correctly and the search criteria are not too strict.
- **File renaming does not work?**
Check whether the file directory has the correct read and write permissions.
### Summary
Radarr is an indispensable movie management tool on ZimaOS. Whether you are an audio and video enthusiast or a media collector, Radarr can help you automate the management of movie resources, improve efficiency and simplify operations. By combining Radarr and ZimaOS, you can easily create your perfect movie library!