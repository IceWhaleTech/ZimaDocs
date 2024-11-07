---
title: ZimaCube通过Thunderbolt连接的传输速度说明
description:
type: "文档"
tip: 顶部栏固定格式请勿删除，description为文章描述，不填时将截取内容最前一段文字
---
本指南重点介绍ZimaCube通过Thunderbolt连接所实现的最快文件传输速度，为用户提供性能测试的具体数据和优化建议。
请确保您已参考[如何通过Thunderbolt电缆连接ZimaCube](https://www.zimaspace.com/docs/zimaos/Thunderbolt-PC-Direct)。

## 通过Thunderbolt网络桥进行高速传输

### 1. Samba网络桥传输
确保您已参考帮助文件 - [与多用户使用Samba](https://www.zimaspace.com/docs/zimaos/Using-Samba-as-a-Member)。
在ZimaOS系统中，您可以通过Samba共享文件夹进行传输。在此配置下，Thunderbolt网络桥可以显著提高传输速度。
**性能数据：使用Samba网络桥，上传一个13GB的文件仅需5秒，传输速度达到<u>2GB/s</u>，远超传统网络传输方法的速度。**
![](https://manage.icewhale.io/api/static/docs/1729592792338_image.png)
- 这种极端的传输速度在大文件传输场景中明显具有优势，特别对于需要快速处理大量数据的专业用户。

### 2. ZimaOS用户界面文件传输

除了Samba网络桥，用户还可以通过ZimaOS用户界面直接传输文件。经过最新优化，通过Thunderbolt的文件上传速度可以达到<u>600MB/s</u>。
![](https://manage.icewhale.io/api/static/docs/1729593331553_image.png)
尽管速度比Samba方法稍慢，但我们仍在优化此传输方法，并将在未来版本中进一步提高传输效率！注意：当前版本为v1.2.5。

## 如果您的传输速度未达到预期
如果您使用Thunderbolt连接进行文件传输的速度未能达到上述标准，建议您参考本文最后的常见问题帮助文档 - [如何通过Thunderbolt电缆连接ZimaCube](https://www.zimaspace.com/docs/zimaos/Thunderbolt-PC-Direct)。通过遵循故障排除指南中的步骤，您可以进一步优化传输性能，确保获得最佳的文件传输速度体验。