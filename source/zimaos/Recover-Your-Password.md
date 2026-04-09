---
title: How to recover your password
description: "Recover your forgotten ZimaOS password and regain access to your system. Step-by-step guide using recovery mode or SSH to reset credentials."
type: "Docs"
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
### If you forget your ZimaOS password, please follow the steps below:
1. Connect ZimaCube to a monitor via HDMI cable
![](https://manage.icewhale.io/api/static/docs/1728367816858_1.1.jpeg)

2. Setting SSH password on ZimaCube via keyboard
![](https://manage.icewhale.io/api/static/docs/1728367843555_1.2.png)

3. Enter the user reset command
```
rm -fr /var/lib/casaos/db/user.db
```

4. Restart your device
![](https://manage.icewhale.io/api/static/docs/1728367919089_1.3.png)

5. Re-enter ZimaOS for initialization
![](https://manage.icewhale.io/api/static/docs/1728367926499_1.4.png)
