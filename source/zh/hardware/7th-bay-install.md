---
title: 如何安装和拆卸第 7 硬盘仓
description: "本指南分步介绍如何在 ZimaCube 第 7 硬盘仓中安装和拆卸硬盘，包括拆卸面板、操作螺丝以及安全取放硬盘的方法。"
type: Docs
author: Lauren Pan
tip: 请勿删除此前置信息块。description 字段用于文章摘要；如果留空，将改用第一段内容。
---

ZimaCube 共有七个硬盘仓。第 7 硬盘仓位于前面板后方，与六个主硬盘仓相互独立，适合安装 2.5 英寸 SSD 或薄型机械硬盘。

本指南将介绍如何在第 7 硬盘仓中安装硬盘，以及日后更换硬盘时如何将其拆下。

## 开始前

- 关闭 ZimaCube，并拔下电源线。
- 第 7 硬盘仓支持 2.5 英寸 SATA 硬盘，最适合安装厚度为 7 mm 的 SSD 或薄型 HDD。
- 准备一把十字螺丝刀。

## 安装硬盘

**步骤 1：拆下前面板。** 握住前面板底部边缘并向前拉。前面板由卡扣固定，没有螺丝。

![](https://manage.icewhale.io/api/static/docs/1722418820491_image.png)

**步骤 2：取出第 6 硬盘仓。** 第 6 硬盘仓会挡住第 7 硬盘仓。将第 6 硬盘仓托架从机箱中拉出。

![](https://manage.icewhale.io/api/static/docs/1722418858886_image.png)

**步骤 3：拧下第 7 硬盘仓支架。** 逆时针转动螺丝，松开覆盖第 7 硬盘仓插槽的支架。

![](https://manage.icewhale.io/api/static/docs/1722418913222_image.png)

**步骤 4：拉出第 7 硬盘仓托架。** 将托架从机箱中水平拉出。

![](https://manage.icewhale.io/api/static/docs/1722418964759_image.png)
![](https://manage.icewhale.io/api/static/docs/1722418974044_image.png)

**步骤 5：将硬盘固定到托架上。** 对齐螺丝孔，然后使用四颗螺丝固定硬盘。

![](https://manage.icewhale.io/api/static/docs/1722419028169_image.png)

**步骤 6：推回托架并拧紧螺丝。** 将第 7 硬盘仓托架推回原位，然后顺时针拧紧支架螺丝。

![](https://manage.icewhale.io/api/static/docs/1722419069919_image.png)

**步骤 7：重新插入第 6 硬盘仓托架，并将前面板扣回原位。**

## 拆卸硬盘

按照相反顺序执行上述步骤。首先关机并拔下电源线，然后拆下前面板、第 6 硬盘仓和第 7 硬盘仓支架。拉出托架，拧下硬盘固定螺丝，再重新装回各部件。

## 安装后

启动 ZimaCube。新硬盘应显示在 ZimaOS 的 **Storage > Disks** 中。如果没有显示，请尝试重新插拔托架，确保硬盘仓后部的 SATA 接口接触牢固。

随后，你可以格式化该硬盘、将其加入 RAID 阵列，或将其用作独立存储卷。有关如何选择配置，请参阅 **[RAID 选项概览](../zimaos/raid-options)**。
