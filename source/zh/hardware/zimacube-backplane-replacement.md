---
title: ZimaCube 背板更换指南
description: "分步指南，介绍如何拆卸并更换 ZimaCube 硬盘背板，涵盖所需工具、安全提示、扁平排线处理以及更换后的验证。"
type: Docs
tip: 请勿删除此 front matter 块。description 字段用于文章摘要；若留空，将改用第一段。
---

本指南适用于 ZimaCube 系列，介绍如何拆卸和更换硬盘背板。请按顺序操作；重新组装时按拆卸步骤反向进行。

## 所需工具

- M3 十字螺丝刀（用于背板和支架螺丝）
- H2 六角螺丝刀（用于侧板螺丝）
- 镊子或塑料撬棒（推荐，用于撬开卡扣式面板和剥离黑色胶带）

## 重要提示

{% note warn 断电并放电 %}
更换背板前，请关闭设备电源并拔掉电源线。等待约 30 秒让残余电量耗尽，以避免触电或损坏元件。
{% endnote %}

{% note warn 防静电 %}
在接触元件前，先触摸金属表面或佩戴防静电手环，以免损坏背板。
{% endnote %}

- 不同位置的螺丝长度可能不同。请分类放好，确保每颗螺丝装回正确的位置。
- 扁平排线（FPC）很脆弱。撕胶带、抬起锁扣以及插拔排线时动作要轻，以免撕裂排线或弄断锁扣。
- 插拔连接器时，请握住连接器本体，切勿拉扯线缆。
- 扁平排线有防呆设计，只能单向插入。拆卸前请拍照记录方向，重新安装时对准防呆缺口，切勿强行插入无法就位的连接器。

## 拆卸步骤

### 1. 关机并取出硬盘

1. 关闭设备电源并拔掉电源线。
2. 取出所有硬盘托架（包括第七盘位托架），并妥善放置。

![ZimaCube 内部结构，可见硬盘托架与散热片](/images/zimacube-backplane-replacement/remove-drives.webp)

### 2. 拆下侧板并打开顶盖

1. 拆下机箱两侧的固定螺丝（每侧 4 颗）。

![红框标出的侧面螺丝](/images/zimacube-backplane-replacement/side-screws.webp)

2. 打开顶盖。
3. 向上抬起侧板，为后续线缆操作留出空间。

### 3. 拆下后面板与支架

1. 后面板为卡扣式安装，直接撬开并取下即可。

![拆下后面板后露出的风扇](/images/zimacube-backplane-replacement/rear-panel.webp)

2. 拆下后支架上的 6 颗螺丝（位于卡扣式面板后方，用于固定风扇和背板），并拔下两个风扇连接器。

![红框标出的后支架螺丝与风扇连接器](/images/zimacube-backplane-replacement/bracket-screws.webp)

### 4. 断开背板供电线缆

1. 拔下左侧的背板供电线缆。

![红框标出的背板供电线缆](/images/zimacube-backplane-replacement/power-cable.webp)

### 5. 取下扁平排线

1. 小心撕下扁平排线上的黑色胶带。
2. 逐一抬起两个扁平排线连接器的锁扣，然后轻轻拔出排线。
3. 每根排线的两端处理方式相同。保持方向一致（连接器有防呆设计），重新安装时对准防呆缺口。

![背板上标注 BP CON1、2P、8P 的扁平排线连接器](/images/zimacube-backplane-replacement/flat-cables.webp)

### 6. 拆下旧背板

1. 拆下背板上的 3 颗螺丝。

![红框标出的背板 3 颗螺丝](/images/zimacube-backplane-replacement/remove-backplane.webp)

2. 轻轻取出旧背板。

## 安装新背板

### 1. 安装新背板并重新连接线缆

1. 将新背板放到位并对齐螺丝孔。
2. 用 3 颗背板螺丝固定。
3. 重新连接扁平排线：将 CON1 和 CON2 排线插入对应插槽，与背板和主板上的标签匹配。对准防呆缺口插入，按下锁扣，再重新贴上黑色胶带。

> 如何区分两根排线（见下图）：CON1 是较长的排线，CON2 较短，排线上均有标注。标有 "BP" 的一端插入背板，标有 "MB" 的一端插入主板。

{% note info 扁平排线通用 %}
扁平排线是通用的，一代和二代 Cube 均可使用。
{% endnote %}

![标注 BP CON1、BP CON2 的背板插槽](/images/zimacube-backplane-replacement/con1-con2-slots.webp)

![主板上 CON1 与 CON2 的连接位置](/images/zimacube-backplane-replacement/con1-con2-positions.webp)

![标注 BP 与 MB 端的两根扁平排线](/images/zimacube-backplane-replacement/con1-con2-cables.webp)

### 2. 按相反顺序重新组装

1. 重新插上左侧的背板供电线缆。
2. 装回后支架，重新连接两个风扇线缆，并拧紧 6 颗螺丝。
3. 将后面的卡扣式面板卡回原位。
4. 装回两侧面板。
5. 盖上顶盖。
6. 拧紧机箱两侧的螺丝（每侧 4 颗）。
7. 装回所有硬盘托架（包括第七盘位托架）。

### 3. 开机并验证

接通电源并开机，确认风扇正常转动、所有盘位均被正确识别。

在终端运行 `lspci`：如果看到下图中圈出的两部分内容，说明更换成功。

![终端运行 lspci 显示的 ASMedia 设备](/images/zimacube-backplane-replacement/lspci-verify.webp)
