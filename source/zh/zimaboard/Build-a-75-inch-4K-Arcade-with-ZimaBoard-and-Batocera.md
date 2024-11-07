---
title: 使用ZimaBoard和Batocera.linux构建75英寸4K街机
---
> **故事：**
  仍然有很多复古游戏在等待我们去探索，逐一浏览它们的经典名字和截图，就像回到过去。这就像回到你自己童年时期的激情与愿望。这个教程将带我们回到你早年的日子。

**阅读本文档以了解其他使用ZimaBoard的方法，并快速概述ZimaBoard的多样性**
> **选择Batocera的理由：**
    - > **Batocera**是将我们的ZimaBoard转变为一个具有多个模拟器和数百款游戏的吸引人复古控制台的最简单方法之一。
    - > **Batocera**的一个积极点是，它不会修改ZimaBoard或其他兼容设备的内部存储。我们在不想使用Batocera时，只需移除所用的内存或卡片，我们的机器将恢复到未经修改的原始状态。还有一个类似于[EmuELEC](https://androidpctv.com/tutorial-emuelec-turns-your-android-tv-box-into-a-retro-console/)的系统我们也可以尝试。

# 1. 什么是[BATOCERA.LINUX](https://batocera.org/)？

![介绍Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera.png)

**[Batocera](https://batocera.org/)软件基于Debian发行版，是一组模拟器，允许我们以有序的方式加载带封面的游戏和其他附加内容，可以同时使用数十个不同机器的模拟器。玩这些游戏，需要游戏的```ROMS或ISO```。一些系统还需要模拟机器的BIOS图像。**

**Batocera还支持所有类型的```Android```、```PC``` 和```MacOS```计算机、```Raspberry Pi```板，以及许多**便携式复古控制台**……这些都具有专属发行版。Batocera的安装简单，易于配置，界面友好且易于使用，支持的模拟器列表庞大。**

- 支持的基本模拟器：AMIGA、MSX、NES、SNES、GBA、MG、DREAMCAST、NDS、PS1、CPS1/2/3…
- 仅在强大硬件上支持：PS2、PS3、GAMECUBE、3DS、WII/U、SWITCH、XBOX…
- [Batocera支持的系统完整列表。](https://batocera.org/compatibility.php)
- [Batocera wiki](https://wiki.batocera.org/)

![介绍Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera2.png)

# 2. 在USB闪存或microSD上安装BATOCERA

## 准备的事项

![Batocera Linux](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare.png)

![介绍Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare2.jpeg)

## 制作Batocera镜像

**要安装 **Batocera**，我们需要设备的**IMG.GZ**文件。下载它，我们只需进入Batocera网站并将其保存到计算机上。然后借助balenaEtcher软件，我们将创建一个启动盘，以允许我们在不修改设备的情况下运行系统。**

- **[下载Batocera镜像文件IMG.GZ。](https://batocera.org/download)**
- **[下载Balena来烧录镜像](https://www.balena.io/etcher)**
- **[下载Batocera BIOS包](https://github.com/Abdess/retroarch_system/releases/download/RetroArch-v1.9.13/Batocera_V33.zip)**

## 创建Batocera的启动盘

**下载必要的文件后，我们可以生成用于启动此系统的```SD内存或USB驱动器```，运行Balena程序。如果在我们的设备上使用USB驱动器无法工作，建议使用SD卡；无论如何，如果我们要使用这种方法，必须拥有尽可能快的驱动器。**

**- 步骤1**

**我们需要一张 [microSD卡或USB驱动器](https://amzn.to/3tcdzSh)，尽可能快，至少16GB，以及一台PC读卡器。**

**- 步骤2**

**打开Balena，点击"文件闪存"，然后选择刚下载的Batocera。**

![打开balenaetcher](/images//Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

**- 步骤3**

**选择您需要启动的```SD内存或USB驱动器```** 

![选择USB驱动器](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

**- 步骤4**

**输入您的主机密码以启动转化**

![选择USB驱动器](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

# 3. 开启ZimaBoard电源

## ZiamBoard第一次开机

**在ZimaBoard关闭的情况下，我们插入已经准备好的带有Batocera的micro ```SD卡或USB驱动器```。**

![Zimaboard连接USB](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-connect-usb.png)

**启动时，长按以进入BIOS界面，选择```U盘启动```**

![Zimaboard启动选择USB磁盘](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-select-the-u-disk.jpeg)

**最后，您进入Batocera界面**

![进入Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-enter-batocera.png)

# 4. 开始使用Batocera

## 操作使用规则

![Batocera快捷键](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-in-game-batocera-hotkeys.png)

Batocera可能并不适合所有控制器，但它符合市场上主流控制器的使用规则。

## 玩
**Batocera附带了一系列可以自由访问和合法传播的```免费ROM-游戏```。**

![在Zimaboard上玩Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-play.jpeg)

# 5. 其他配置

**如果您想添加自己的ROM和BIOS文件，必须先访问Batocera**

## 查找ZiamBoard的IP地址 

**- 步骤1 按空格键**

**- 步骤2 找到网络设置并进入**

![Batocera设置网络](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings.jpeg)

**- 步骤3 查找IP地址**

![Batocera设置网络](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings1.jpeg)


**- 步骤4 使用计算机链接到ZimaBoard** 

![Batocera设置网络](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings2.jpeg)

**- 步骤5 点击连接以进入文件夹**

![Batocera设置网络](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings3.jpeg)

![Batocera设置网络](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings4.jpeg)

**- 步骤6 将您下载的ROM或BIOS放入相应的文件夹中** 

请参阅**[官方教程](https://wiki.batocera.org/add_games_bios)**以获取详细文档

## 用原系统覆盖Batocera

**- 步骤1 按空格键并寻找`系统设置`**

![Batocera系统](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings.jpeg)

**- 步骤2 选择`在新磁盘上安装BATOCERA`**

![Batocera系统](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings2.jpeg)

**- 步骤3 目标设备`16或32G`目标架构选择`X860_64`您确定吗？选择`是`**

**最后点击`安装`**

![Batocera系统](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings3.jpeg)

[![Discord卡片](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)