---
title: Checking the Thunderbolt connection problem
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
If there is no response after Thunderbolt connection, you can check according to the following items

1. Confirm that ZimaCube is the Pro version
Only the ZimaCube Pro version has the Thunderbolt function. You can see two Thunderbolt interfaces near the power supply on the back panel, as shown in the figure below.
![](https://manage.icewhale.io/api/static/docs/1731392263987_image.png)

2. Confirm that the client has a Thunderbolt port
Generally, Thunderbolt will have a Thunderbolt logo, or query the corresponding hardware information to confirm that it is a Thunderbolt interface.
![](https://manage.icewhale.io/api/static/docs/1731392292731_image.png)

3. Confirm the Thunderbolt line
Thunderbolt lines generally have special logos, and you can also check whether the hardware supports Thunderbolt transmission.
![](https://manage.icewhale.io/api/static/docs/1731392311295_image.png)

4. Confirm that ZimaCube recognizes Thunderbolt hardware (lspci)
Execute the command ‘lspci | grep Thunderbolt’, and the result is as follows
![](https://manage.icewhale.io/api/static/docs/1731392323684_image.png)

5. Confirm that the ZimaCube Thunderbolt port can recognize hardware
- Find a type-c USB and plug it into ZimaCube, and check whether it can be recognized in ZimaOS.
- Find a type-c display and see if it can output video normally after plugging it in.

If the problem still cannot be solved according to the above troubleshooting steps, please contact us again and let us know the troubleshooting step.