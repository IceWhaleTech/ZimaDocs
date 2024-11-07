---
title: 如何通过Thunderbolt线连接ZimaCube
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

如果您想通过Thunderbolt线将计算机连接到ZimaCube以获得更快的连接速度，可以按照以下步骤进行操作：

## Mac
- 如果您还没有使用ZimaClient连接到ZimaCube，请参考[文档](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client)下载并安装[ZimaClient](https://find.zimaspace.com/)。ZimaClient将在初始扫描过程中优先识别具有Thunderbolt连接的设备。

![](https://manage.icewhale.io/api/static/docs/1728443998198_image.png)

1. 将Thunderbolt线的一端连接到ZimaCube后面板上的Thunderbolt端口（两个端口中的任意一个），另一端连接到计算机的Thunderbolt端口。
   - a. Thunderbolt线：需要使用Thunderbolt 3或Thunderbolt 4标准线；更短的线缆提供更好的传输稳定性和速度。
   - b. 注意：ZimaCube Pro的前面板端口不支持Thunderbolt功能，ZimaCube本身也不支持Thunderbolt功能。

| ![](https://manage.icewhale.io/api/static/docs/1728444041984_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444057975_image.png) |
|:---:|:---:|
| 1.1 将Thunderbolt线连接到ZimaCube的后面板 | 1.2 将另一端连接到计算机的Thunderbolt端口。 |


2. 插入线缆后，ZimaClient将自动适应并切换到Thunderbolt连接。
   - 如果您还没有使用ZimaClient连接到ZimaCube，请参考[文档](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client)下载并安装[ZimaClient](https://find.zimaspace.com/)。

| ![](https://manage.icewhale.io/api/static/docs/1728444146303_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444152947_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444159320_image.png) |
|:---:|:---:|:---:|
| 1. 在插入Thunderbolt线之前 <br> 例如：IP地址 10.0.187.209 | 2. 等待约2分钟 <br> Thunderbolt线将被识别为已插入。 | 3. 成功连接Thunderbolt线 <br> 例如：IP地址 169.254.1.1 |

3. 基于Thunderbolt线连接的新IP地址，重新打开仪表板，设置Samba共享，并使用相应的功能。
   - 注意：当Thunderbolt线和LAN线均已连接时，它们将处于两个不同的IP地址。您需要在计算机上访问对应于Thunderbolt线的IP地址，以便享受更快的Thunderbolt传输。

| ![](https://manage.icewhale.io/api/static/docs/1728444289229_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444304099_image.png) |
|:---:|:---:|
| 重新打开仪表板 | 重新配置Samba共享 |

## Windows
- 如果您还没有使用ZimaClient连接到ZimaCube，请参考[文档](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client)下载并安装[ZimaClient](https://find.zimaspace.com/)。ZimaClient将在初始扫描过程中优先识别具有Thunderbolt连接的设备。
1. 使用Thunderbolt线连接到ZimaCube后面板上的Thunderbolt接口（任一接口），另一端连接到您的Windows PC的Thunderbolt接口。
  - a. Thunderbolt线：需要使用Thunderbolt 3、Thunderbolt 4标准线，线缆越短，传输稳定性和速度越好。
  - b. 注意：ZimaCube Pro前面板接口不支持Thunderbolt功能，ZimaCube不支持Thunderbolt功能。

| ![](https://manage.icewhale.io/api/static/docs/1729589901877_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729589918266_image.png) |
|:---:|:---:|
| 电缆连接到ZimaCube后面板的Thunderbolt接口。 |  电缆的另一端连接到计算机的Thunderbolt接口 |


2. 一旦插入线缆，ZimaClient将自动适应并切换到Thunderbolt连接。
  - 如果您尚未使用ZimaClient连接到ZimaCube，请首先参考文档下载并安装ZimaClient。
  - 打开客户端，您将看到您的设备已成功通过Thunderbolt连接到ZimaCube。
  - 点击进行连接。

| ![](https://manage.icewhale.io/api/static/docs/1729590200515_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729590218016_image.png) |
| - | - |


3. 成功连接Thunderbolt线
![](https://manage.icewhale.io/api/static/docs/1729590231315_image.png)

4. 基于Thunderbolt线连接的新IP地址，重新打开仪表板，设置Samba共享等，并使用相应的功能。
- 注意：当Thunderbolt线和LAN线都可连接时，它们将位于两个不同的IP地址；仅在计算机上访问Thunderbolt线的对应IP地址时，才会通过更快的Thunderbolt线进行传输。

## 延伸阅读
  1. 如何在MacOS Finder和Windows Explorer中访问和修改ZimaCube上的文件，请参考[更多](https://www.zimaspace.com/docs/zimaos/Using-Samba-as-a-Member).
  2. 了解通过Thunderbolt连接在ZimaCube上可以实现的最快传输速度，请参考：[ZimaCube Thunderbolt连接传输速度分析](https://www.zimaspace.com/docs/zimacube/Transfer-Speeds-Over-Thunderbolt).

## 故障排除（待完成）
1. 如果客户端未显示，请检查Mac和Windows上的网络设置。
2. 如果ZimaCube插入了显卡，请尝试重启ZimaCube，然后再尝试一次。

## 常见问题
**1. 什么是ZimaCube？它与外部USB存储设备有什么不同？**
   - a. ZimaCube是个人云设备，在相似速度条件下超越DAS连接。它兼具NAS和DAS能力，允许通过Thunderbolt 4线快速连接到个人计算机，同时保持ZimaCube的独立互联网连接。
   - b. 与USB存储设备不同，ZimaCube拥有自己的主板和CPU；它不仅仅是一个存储设备。因此，当通过Thunderbolt线连接到个人计算机时，它会建立Thunderbolt网络连接，并作为Thunderbolt桥接设备而不是USB存储设备显示。将ZimaCube连接到个人计算机不会影响ZimaCube的操作或其互联网连接；它可以同时作为NAS和DAS运行。
   - c. 通过Thunderbolt桥将ZimaCube连接到个人计算机不会比外部USB存储设备速度慢。连接速度主要取决于线缆和硬盘。然而，如果ZimaCube同时连接到LAN和Thunderbolt线，个人计算机可以通过任一方法连接到ZimaCube。在安装了ZimaClient的情况下，它会自动切换到更快的连接。如果手动连接，ZimaCube将在网络上显示为两个IP（设备）。

**2. Thunderbolt 4是ZimaCube Pro上最快的连接吗？**
   - 是的。

**3. ZimaCube Pro上是否有仅通过Thunderbolt才能使用的功能？**
   - TB4支持所有扩展功能，如外部显示器、存储设备、USB外设、PCIe设备、网络和充电。

**4. 使用Thunderbolt 4时，是否需要安装额外的驱动程序？**
   - ZimaOS已安装在ZimaCube上，已经有驱动程序。
   - 客户端必须确保驱动程序已安装并保持更新。

**5. 为什么在连接了Thunderbolt 4和LAN的情况下，文件传输速度与我的LAN速度相同？为什么没有Thunderbolt 4？（Mac）**
   - 当同时连接Thunderbolt和LAN时，macOS默认使用LAN网络而不是TB4。
   - 这是macOS的系统机制问题。ZimaOS正在优化此问题。在此期间，建议断开LAN网络，只通过TB4连接。

**6. 如果通过SMB或文件共享传输速度非常慢，我该怎么办？**
   - 安装ZimaClient。ZimaClient会自动切换到更快的连接。切换后，请记得再次点击“在Finder/Explorer中打开”，以确保您正在使用Thunderbolt连接。

**7. ZimaCube Pro上Thunderbolt 4的实际速度是多少？**
   - 速度测试可以达到20Gbps，但由于硬盘限制、文件大小和协议，实际传输速度可能会下降。

**8. 如何在ZimaCube Pro上实现最佳的Thunderbolt 4速度？**
   - a. 购买正版Thunderbolt 4线缆。
   - b. 确保ZimaCube内部的硬盘和RAID配置可以支持大于20Gbps的读写速度。
   - c. 在macOS中，Samba传输速度可能受到Finder的限制。
   - d. 在传输大量小文件时，速度可能会受到限制。

**9. Thunderbolt 4和USB接口有什么区别？**
   - 请参考：[Intel对比](https://www.intel.com/content/www/us/en/architecture-and-technology/thunderbolt/thunderbolt-4-vs-usb-c.html)

**10. 如果无法启用Thunderbolt 4接口，故障排除步骤是什么？**
   - a. 检查设备和线缆是否支持TB4，特别是线缆。
   - b. 插入时PC能否检测到Thunderbolt设备？
   - c. ZimaCube能否连接到其他Thunderbolt设备或扩展坞？

**11. Thunderbolt 4接口和设备是否向后兼容？**
   - TB4向后兼容TB3。

**12. ZimaCube Pro的Thunderbolt 4端口是否支持菊花链连接？**
   - 是的。

**13. 我可以将ZimaCube Pro作为直接的Thunderbolt存储设备使用吗，就像普通的外部硬盘一样？**
   - 不可以，ZimaCube与USB存储设备不同，拥有自己的主板和CPU，数据传输必须经过它们。

**14. 通过两个Thunderbolt 4端口连接多个电缆到Mac/PC是否会增加速度？**
   - 不会，TB网络不支持像双以太网电缆那样的链路聚合。