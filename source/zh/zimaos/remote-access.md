---
title: 远程访问
seo_title: "ZimaOS 远程访问：随时随地连接家中服务器"
description: "随时随地访问 ZimaOS 数据。了解如何通过 Cloudflare 隧道和 ZimaClient 设置远程访问，在外出时安全管理文件。"
type: Docs
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---
## 随时访问数据
你是否曾想在旅行时查看家中的安防摄像头或访问家庭服务器文件，却因数据无法连接而受阻？社区成员 Grandil 曾在挪威访问位于爱尔兰的服务器并成功连接 ZimaOS，即使使用移动网络漫游，连接依然流畅。你可以在[这里](https://www.youtube.com/watch?v=ZDmO2h0tE0c)查看他的体验。

在快节奏的生活中，无论个人还是企业用户，高效访问数据都至关重要。远程数据访问可以提高效率、保障安全，并突破地理位置限制。

### 下载 ZimaClient
如果尚未使用 ZimaClient 连接 ZimaCube，请在主要设备上访问 https://www.zimaspace.com/zimaos/download 下载客户端。
![](https://manage.icewhale.io/api/static/docs/1728381740811_image.png)
### 成功连接设备
1. 确保 ZimaCube 已开机并连接网络。
2. 打开 ZimaClient，然后选择 Scan and Connect Zima。
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728439070524_image.png" alt="图片 1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728439097159_image.png" alt="图片 2" style="height: 200px; object-fit: cover;" />
</div>

3. 从列表中选择 ZimaCube 的 IP 地址，然后单击 Connect。按照提示创建用户名和密码。
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728381985338_image.png" alt="图片 1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728381994632_image.png" alt="图片 2" style="height: 200px; object-fit: cover;" />
</div>

**成功连接设备后**，你会在这里看到 ZimaCube 以及 Connect via... 等连接信息，这表示远程访问已经配置完成。
![](https://manage.icewhale.io/api/static/docs/1728459310497_image.png)

*请注意，如果在 ZimaOS 设置中关闭了远程访问，将无法建立连接。*
![](https://manage.icewhale.io/api/static/docs/1728459277560_image.png)

### 使用远程访问
首次成功连接后，设备会自动保存连接信息。无论你身在何处，只需打开 ZimaClient，即可快速建立远程连接。
离开家庭局域网后，ZimaCube 的远程访问状态如下所示：
![](https://manage.icewhale.io/api/static/docs/1728382289343_image.png)

### 从第二台主要设备访问
如果办公室中有**第二台**电脑，但 ZimaCube 不在身边，仍可使用 Connect ID。请在[这里](./features#Second-host-device-access)了解更多信息。


### 参考说明
笔记本电脑与 ZimaCube 之间的连接由 ZimaClient 应用和 ZimaOS 自动建立，并通过 P2P 通信完成。两端之间的数据传输会被加密，确保所有数据都在设备之间直接传输。

此外，首次通过 ZimaClient 成功连接 ZimaOS 时，远程访问通道便已配置完成。之后，你可以随时随地使用这台设备访问 ZimaOS。
