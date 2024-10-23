---
title: ZimaCube Transfer Speeds Over Thunderbolt Connections Explained
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
This guide focuses on the fastest file transfer speeds achieved over a Thunderbolt connection on the ZimaCube, providing users with specific data from performance tests and optimization tips.
Ensure that you have referred to the [How to connect ZimaCube via Thunderbolt Cable](https://www.zimaspace.com/docs/zimaos/Thunderbolt-PC-Direct).

## High Speed Transfers via Thunderbolt Network Bridge

### 1. Samba Network Bridge Transfers
Ensure that you have referred to the help file - [Samba with Multi-User](https://www.zimaspace.com/docs/zimaos/Using-Samba-as-a-Member).
In the ZimaOS system, you can transfer via Samba shared folder. In this configuration, the Thunderbolt Network Bridge can significantly increase transfer speeds.
**Performance data: Using the Samba network bridge, it takes only 5 seconds to upload a 13GB file, and the transfer speed reaches <u>2GB/s</u>, which far exceeds the speed of traditional network transfer methods.**
![](https://manage.icewhale.io/api/static/docs/1729592792338_image.png)
- This extreme transfer speed has obvious advantages in large file transfer scenarios, especially for professional users who need to process large amounts of data quickly.

### 2. ZimaOS User Interface File Transfer

In addition to the Samba network bridge, users can also transfer files directly through the ZimaOS user interface. With the latest optimization, the file upload speed through Thunderbolt can reach <u>600MB/s</u>.
![](https://manage.icewhale.io/api/static/docs/1729593331553_image.png)
Although it is a bit slower than the Samba method, we are still optimizing this transfer method and will further improve the transfer efficiency in future versions! Note: The current version is v1.2.5.

## If your transfer speeds are not as fast as expected
If you are using the Thunderbolt connection for file transfers that do not meet the above speeds, we recommend referring to the FAQ help document at the end of this article - [How to connect your ZimaCube via the Thunderbolt cable](https://www.zimaspace.com/docs/zimaos/Thunderbolt-PC-Direct). By following the steps in the troubleshooting guide you can further optimize the transfer performance and ensure you get the best possible file transfer speed experience.