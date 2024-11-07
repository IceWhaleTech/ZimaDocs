---
title: 更多RAID选项
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# RAID阵列设置
简而言之，RAID是一种在长时间使用后为磁盘提供冗余备份的解决方案。虽然如今许多人选择云存储和多个本地存储备份解决方案，但RAID仍然是NAS行业主流的存储配置技术，它提升了数据存储的可靠性和性能。通过将多个磁盘驱动器合并为一个或多个单元，它提高了容错性和读写速度。

ZimaOS将复杂的技术与简单的体验结合在一起。在创建和维护RAID空间时，您无需经历复杂的配置。只需简单的五次点击即可完成设置。

## ZimaOS RAID创建过程
接下来，我们将以三块磁盘的RAID 5设置为案例，了解如何在ZimaOS上创建和使用RAID：
1. 打开设置面板，找到创建RAID的按钮。点击“创建”。
提示：如果您只需要直接挂载和使用您的磁盘，那么“发现新硬盘”将是您的选择。
![](https://manage.icewhale.io/api/static/docs/1727161448346_image.png)
2. 根据您的需求，选择相应的RAID选项。以下是三种RAID类型特点的简单解释：
![](https://manage.icewhale.io/api/static/docs/1727161467120_image.png)
3. 选择适合您需求的RAID选项。
![](https://manage.icewhale.io/api/static/docs/1727161792442_image.png)
4. 修改您的阵列名称并确认。
![](https://manage.icewhale.io/api/static/docs/1727161810070_image.png)
5. 稍等片刻以进行初始化；根据您的磁盘大小，这可能需要几秒钟到几分钟。
![](https://manage.icewhale.io/api/static/docs/1727161825483_image.png)
6. 完成设置并开始使用您的RAID存储空间。
![](https://manage.icewhale.io/api/static/docs/1727161840983_image.png)
## 更多配置

通过在ZimaOS上配置RAID，您可以有效增强数据安全性和系统性能。根据您的具体需求选择合适的RAID级别，实现性能与数据保护之间的最佳平衡。对于大多数用户来说，RAID 1或RAID 5都是不错的选择，这取决于您的空间需求和安全需求。

此外，对于对ZimaOS默认RAID选项不满意的用户，该系统还支持ZFS进行自定义存储空间配置。