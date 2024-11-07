---
title: OpenWRT 是 ZimaBoard eMMC 烧录版的完美伴侣
---

# 主题

ZimaBoard 的性能介于 Raspberry Pi 和 MicroServer 之间，价格定位合理，对于许多玩家来说，ZimaBoard 最好的用途无疑是成为一台价值百美元的可定制的 OpenWRT / pfSense x86 路由器，具备足够的计算能力。

根据本教程，我们将演示如何使用 ZimaBoard 的预构建系统。经过几步操作，这将为您熟悉的路由系统提供一个实践的平台。

# 准备

1. PC 主机 x1
2. ZimaBoard x1（连接到与 PC 相同的局域网）
3. 您喜欢的 x86 OpenWrt 映像或通过此链接下载团队推荐的映像


> **提示：**
>1. 本教程将直接在 ZimaBoard 的 eMMC 上安装 OpenWRT，覆盖并删除预装操作系统。请务必保存并备份您的原始系统用户数据！
>2. OpenWRT 映像，例如具有 .img 后缀的映像文件！如果是 .gz


# 操作步骤

## 登录系统

在 PC 上，通过 ```casaos.local``` 登录 ZimaBoard 的 CasaOS 面板

![Openwrt eMMc Boot Log In CasaOS](/images/Openwrt-emmc-boot/openwrt-emmc-boot-log-in-casaos.png)


## 上传 OpenWRT 映像
**1. 将您在 PC 上准备好的 OpenWRT 映像上传到 ZimaBoard 存储**
  a. 点击文件应用程序，选择一个目录，点击上传文件按钮

**2. 从本地路径中，选择上传您的 OpenWRT 映像**

![Upload The OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image.png)

**3. 等待上传完成**

![Upload The OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image2.png)

## OpenWRT 系统写入 eMMC
1. 使用 DD 命令将 OpenWRT 映像写入 ZimaBoard 的 eMMC
    a. 通过终端 SSH 登录 ZimaBoard 系统（终端输出连接，需要知道您机器的 IP 地址）

![OpenWRT Connect SSH](/images/Openwrt-emmc-boot/openwrt-emmc-boot-connect-ssh.png)

2. 使用您的 CasaOS 账户和密码登录
{% note danger %}
默认账户密码
   账户： `casaos`
   密码：`casaos`
{% endnote %}

3. 输入 lsblk 并检查以确认您获取到目标 eMMC 名称，应该是 mmcblk0

![](/images/Openwrt-emmc-boot/openwrt-emmc-boot-find-emmc-name.png)

4. 解压缩映像文件（如果您的 OpenWrt 文件是 zip 压缩包）
```
gzip -d [.gz 或 .img.gz 映像名称]
```
![Unzip OpenWRT Image](/images/Openwrt-emmc-boot/openwrt-emmc-boot-unzip-image-file.png)

5. 检查解压缩是否成功！确保映像文件没有异常

  ```
  ls -lh
  ```
- 输入以下 DD 命令将上传到 ZimaBoard 的 OpenWrt 映像写入 eMMC！

  1. 确保您的映像路径与您上传的文件夹位置和文件名匹配！
  2. 确保您写入的映像具有 .img 扩展名！而不是 zip 文件！

    ```bash
    sudo dd if=/DATA/[上传路径]/[name.img] of=/dev/mmcblk0 bs=1024k status=progress
    ```
- 执行完 DD 命令后，关闭电源并重新上电 ZimaBoard。

## 登录 OpenWrt 系统
**1. 配置您的 OpenWrt 系统 IP 地址信息，并使用 PC 浏览器登录 OpenWrt Luci 页面**

    {% note danger %}
    附带关于 OpenWrt IP 地址配置命令的教程
    https://openwrt.org/docs/guide-user/network/openwrt_as_routerdevice
    {% endnote %}

**2. 重启并登录您的 OpenWrt 系统**
   
![Enter To Openwrt Luci](/images/Openwrt-emmc-boot/openwrt-emmc-boot-enter-to-openwrt-luci.png)

# 总结
我更喜欢在每个 ZimaBoard 上运行一个完全独立的系统和服务。因此，这比在 ZimaBoard 上通过 USB 设备启动 OpenWRT 的方式要简单得多。如果您有兴趣让您的 ZimaBoard 同时运行双系统，请考虑制作一个 USB 设备并通过 BIOS 配置切换 ZimaBoard 登录的系统。

对于有兴趣在您的 OpenWRT 系统上运行 CasaOS 的用户，请查看该教程！

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)