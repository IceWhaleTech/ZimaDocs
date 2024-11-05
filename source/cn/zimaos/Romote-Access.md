---
title: Remote Access
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# Data On-the-Go
Ever wished you could check your home security cameras or access files from your home server while traveling, but were hindered by inaccessible data? Community member Grandil successfully accessed ZimaOS from Norway, connecting to servers in Ireland, and despite being on mobile roaming, experienced a seamless connection. See his review [here](https://www.youtube.com/watch?v=ZDmO2h0tE0c).

In our fast-paced lives, efficient data access is vital for both personal and business use. Remote data access enhances productivity, ensures security, and overcomes geographical barriers.

## Download the Zima Client
If you have not yet connected to ZimaCube using ZimaClient
Please visit https://find.zimaspace.com/ on your host device to download the client
![](https://manage.icewhale.io/api/static/docs/1728381740811_image.png)
## Successfully connect to your device
1. Make sure your ZimaCube device is turned on and connected to the network.
2. Open the Zima client and select Scan and Connect Zima.
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728439070524_image.png" alt="图片1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728439097159_image.png" alt="图片2" style="height: 200px; object-fit: cover;" />
</div>

3. Select your ZimaCube device IP from the list and click Connect.Follow the prompts to create a username password
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728381985338_image.png" alt="图片1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728381994632_image.png" alt="图片2" style="height: 200px; object-fit: cover;" />
</div>

Now that **you have successfully connected to the device**, when you see the ZImaCube here (either Connect via ...), it means that you have configured the “Configuration”. you have configured “Remote Access”.
![](https://manage.icewhale.io/api/static/docs/1728459310497_image.png)

*In particular, if you have turned off remote access in the ZimaOS settings, you will not be able to connect.*
![](https://manage.icewhale.io/api/static/docs/1728459277560_image.png)

## Enjoy Remote Access
After the first successful connection, your device will automatically save the connection information. No matter where you are, just open the Zima client. You can quickly establish a remote connection.
When you leave the home LAN, the remote access status of ZimaCube is as follows:
![](https://manage.icewhale.io/api/static/docs/1728382289343_image.png)

## Second host device access:
If you have the **second** computer in the office, but the zimacube is not with you, you can still use Connect ID. Find more in [here](https://www.zimaspace.com/docs/zimaos/Features.html#Second-host-device-access).


## For your reference
The connection between your laptop and the ZimaCube is established automatically by the Zima Client application and ZimaOS, utilizing P2P communication to establish the connection. The data transfer between the two is encrypted, ensuring that all data transfers are peer-to-peer.

Additionally when you successfully connect to ZimaOS for the first time via the Zima Client, your remote access channel is already configured. This means that you can use this device to access ZimaOS from anywhere at any time.
