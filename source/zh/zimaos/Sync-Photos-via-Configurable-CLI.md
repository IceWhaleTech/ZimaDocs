---
title: 如何使用CLI在ZimaOS上漫游
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
ZimaOS 3是NAS爱好者、专业用户和工作室用户的游戏规则改变者。其直观的界面简化了数据备份和管理，确保您的关键文件始终安全。ZimaOS在Docker应用程序安装方面表现出色，只需几次点击即可简化该过程。

您是否想过ZimaOS华丽UI背后的内容？今天，我们将使用另一种界面来访问我们的ZimaOS。
![](https://manage.icewhale.io/api/static/docs/1727176855906_image.png)

> GUI（图形用户界面）提供了带有图标和菜单的可视互动体验，旨在便于直观导航，迎合所有技能水平用户的使用方便。而CLI（命令行界面）则是一个基于文本的界面，用于执行命令，因其高效性和脚本功能而受到专家的青睐。
>
![](https://manage.icewhale.io/api/static/docs/1727176878586_image.png)
## 在ZimaOS上进入CLI的三种方法

### 方法1：使用键盘和屏幕

将Zima设备连接到键盘和屏幕。当您启动时，ZimaOS将在屏幕上显示如下界面：
![](https://manage.icewhale.io/api/static/docs/1727177117363_image.png)
按**Alt+F2**，您将进入登录页面。现在，输入root并按Enter。如果这是您第一次进入该页面，您将不需要密码直接进入ZimaOS的CLI。我们建议您为root账户设置一个密码。输入passwd-root，该工具将提示您设置root的密码。请记住，root的密码对于SSH登录是必需的。

### 方法2：使用SSH客户端

SSH是一种广泛使用的远程访问方法。ZimaOS也可以通过SSH访问。

同样，root的密码对于SSH登录是必需的。请参阅上面的内容。

打开终端。这里我们以Windows终端为例。输入**ssh root@youZimaOSIP**并按**Enter**。您将被提示信任一个密钥指纹并输入密码。之后，您将通过SSH进入ZimaOS的CLI。
![](https://manage.icewhale.io/api/static/docs/1727177214909_image.png)
### 方法3：使用ttydBridge应用

这是在ZimaOS上使用CLI的推荐方法。通过Zima设备的IP登录ZimaOS的WebUI。在ZimaOS的WebUI中，我们可以从应用商店安装ttydBridge。
![](https://manage.icewhale.io/api/static/docs/1727177258550_image.png)
安装后，从仪表板启动ttydBridge，它会提示您输入用户名和密码。由于您已经登录到我们的WebUI，您可以输入默认的admin作为用户名和密码作为ttydBridge的密码。现在，您将看到一个美观的CLI，如下所示：
![](https://manage.icewhale.io/api/static/docs/1727177269954_image.png)
### 差异与常用命令
出于安全原因，即使您以root身份登录，大多数系统文件夹也是只读的，这使ZimaOS的文件系统与其他Linux发行版有所不同。

用户数据和应用数据将放在/DATA中。请随意使用命令在/DATA的子目录中创建、删除或修改文件和文件夹。当然，我们建议您在/DATA内部创建一个新的子文件夹来进行这些实验。

在这里，我们还与您分享一些常用的命令和工具。
![](https://manage.icewhale.io/api/static/docs/1727177290437_image.png)
![](https://manage.icewhale.io/api/static/docs/1727177297428_image.png)
![](https://manage.icewhale.io/api/static/docs/1727177303590_image.png)
这些命令在ZimaOS上都能正常工作。我们希望这个表格能帮助您更好地理解CLI在ZimaOS上的工作方式。

如果您在使用过程中遇到任何问题，请随时告诉我们。只需在下面评论。您也可以加入我们的[Discord](https://discord.com/invite/uuNfKzG5)以讨论有关Docker应用和ZimaOS的更多内容。我们期待您的反馈！