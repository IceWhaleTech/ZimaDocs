---
title: 从 CasaOS 迁移到 ZimaOS
description: 从 CasaOS 迁移到 ZimaOS 的分步指南。学习如何传输文件、使用 CTOZ 迁移 Docker 应用，以及顺利设置你的新家庭服务器。
type: Docs
author: Lauren
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
本指南聚焦于仅用**两个简单步骤完成 CasaOS 到 ZimaOS 的迁移**。如果你对完整的系统对比感兴趣，可以查看这篇博客 – [链接]。

准备好从 **CasaOS** 升级到更强大的 **ZimaOS** 吗？别担心——迁移过程比你想象的更简单！为了帮助你更清晰地规划，我们将迁移分成了**三个阶段**，你可以根据需要选择：

- 📁 **文件传输**：就像在电脑里复制文件一样，你可以通过局域网共享，将整个资料库从 CasaOS 移动到 ZimaOS——电影、照片备份、工作文档，统统搞定。这是最基础的一步。（当然，如果你只想迁移应用，可以跳过这一部分。）
- 🚀 **应用迁移**：像 Jellyfin 或 Immich 这样的应用已经完全配置好了？借助一个很棒的开源工具 **CTOZ**，你几乎可以“一键”迁移应用及其数据和设置——无需从头重新配置。
- ⚙️ **高级配置**：对于深度自定义的系统设置或特殊容器，目前还没有完全自动化方案。但我们会指引你手动备份和恢复路径。对大多数用户来说，在新系统上进行全新设置可能反而更顺畅。

大致了解了吗？很好——接下来我们将逐步深入讲解，带你完成一个流畅、无忧的升级过程。



## 步骤 1：文件数据迁移（通过局域网共享）

将个人文件和应用数据从 **CasaOS 迁移到 ZimaOS** 最直接高效的方法就是**局域网共享（SMB 协议）**。这种方式无需额外工具，操作简单，传输速度快——非常适合迁移**大型文件，如电影、照片、文档**，甚至 **AppData** 目录。

**快速迁移步骤：**

**1\. 在 CasaOS 中开启共享**  
打开 CasaOS 文件管理器，选择要迁移的目录（如主数据存储盘或 AppData 文件夹），设置为共享，并确认已启用共享。

![CasaOS 文件应用界面](https://manage.icewhale.io/api/static/docs/1758012883305_copyImage.png)

**2\. 在 ZimaOS 文件管理器中连接 CasaOS 共享目录**  
确保两台设备在同一局域网内。在 **ZimaOS 文件管理器**中，新增网络存储，输入 **CasaOS IP 地址**和账号凭据，连接到共享文件夹。

  

![ZimaOS 映射 CasaOS 共享](https://manage.icewhale.io/api/static/docs/1758013661424_copyImage.png)

**3\. 一键迁移或备份到 ZimaOS**  
在 **ZimaOS 文件管理器**中，使用 **迁移功能**或内置的 **备份功能**，将 CasaOS 的共享文件夹直接迁移或备份到 ZimaOS。

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758013956988_Clip_20250916_171221.png" alt="在 ZimaOS 中迁移" />
    </td>
    <td valign="middle" style="width:50%; ">
      <ul>
<li>右键点击已连接的<strong>CasaOS 共享文件夹</strong></li>
<li>点击<strong>迁移</strong>按钮</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758014844720_Clip_20250916_172717.png" alt="在 ZimaOS 中迁移"/>
    </td>
    <td valign="middle" style="width:50%; ">
      <ul>
<li>选择<strong>目标目录</strong></li>
<li>设置冲突处理方式及是否保留原数据（推荐使用默认设置）</li>
<li>最后点击<strong>开始</strong></li>
      </ul>
    </td>
  </tr>
</table>
迁移任务将开始！完成后，**ZimaOS** 还会生成一份详细的 **数据迁移报告**，确保你的文件被可靠传输并校验无误。

![ZimaOS 的数据迁移报告](https://manage.icewhale.io/api/static/docs/1758016357148_Clip_20250916_175232.png)

💡 更棒的是——这种方法不仅限于 **CasaOS**！  
你的 **TrueNAS、Unraid、Synology DSM**，甚至 **macOS 文件夹**，只要通过 **SMB** 共享，都可以被 **ZimaOS** 识别并挂载。这意味着无论你是进行重要数据的**跨系统备份**，还是合并多台设备的文件，ZimaOS 都能让这一过程可靠又简便。

## 步骤 2：将 CasaOS 应用迁移到 ZimaOS（CTOZ 一键迁移工具）

文件传输完成后，下一步是在 **ZimaOS** 上重新安装和配置应用容器。为简化流程，社区开发了开源的 **CTOZ 迁移工具**（即 CasaOS to ZimaOS），它能自动实现应用数据和配置的一键迁移。

**CTOZ 工具**涵盖了**应用配置和数据迁移**——包括 CasaOS 的 **AppData 目录**及对应的 **Docker Compose (YAML) 文件**。迁移完成后，CTOZ 会基于这些 YAML 文件在 ZimaOS 上自动重装应用。这意味着大多数通过 CasaOS 安装的容器化应用，连同它们的数据，都能无缝带到新系统继续使用。

需要注意：由于 **CasaOS 和 ZimaOS 的系统架构不同**，CTOZ 仅迁移**容器及其数据**，不涉及系统级别配置（将在后文介绍）。  
**使用 CTOZ 工具的基本步骤：**
 1. **下载并安装 CTOZ** – 只需三步即可将任意 Docker CLI 或 Docker Compose 应用导入 ZimaOS。

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015524613_Clip_20250916_173835.png" alt="在 ZimaOS 中安装自定义应用" />
    </td>
    <td valign="middle" style="width:50%; ">
点击应用中心右上角的“安装自定义应用”。
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015579134_Clip_20250916_173932.png" alt="导入 Docker YAML 文件以安装容器应用" />
    </td>
    <td valign="middle" style="width:50%; ">点击“导入”按钮。
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015602609_Clip_20250916_173956.png" alt="在 ZimaOS 中通过 CLI 安装 Docker 容器应用" />
      <br>
<img src="https://manage.icewhale.io/api/static/docs/1758015617501_Clip_20250916_174011.png" alt="在 ZimaOS 中配置 Docker 容器应用" />
    </td>
    <td valign="middle" style="width:50%; ">在输入框中填写来自 GitHub 页面 https://github.com/LinkLeong/ctoz 的<strong>Docker CLI 或 Compose 信息</strong>，然后点击<strong>提交</strong>。  
最后点击<strong>安装</strong>并等待完成。  
<br><strong>注意：</strong>
<ul><li>你可以根据需要自定义端口或应用图标信息。</li></ul>
    </td>
  </tr>
</table>



2. **选择应用并执行迁移**
<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015843288_Clip_20250916_174353.png" alt="ZimaOS 中的 CTOZ 应用" />
    </td>
    <td valign="middle" style="width:50%; ">
      点击 CTOZ
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015882431_Clip_20250916_174433.png" alt="CTOZ 界面" />
    </td>
    <td valign="middle" style="width:50%; ">
选择“在线迁移”
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015907960_Clip_20250916_174458.png" alt="CTOZ 界面" />
    </td>
    <td valign="middle" style="width:50%; ">
在地址栏中输入 CasaOS 与 ZimaOS 的有效<strong>局域网地址</strong>。  
输入账号凭据，然后点击<strong>开始迁移</strong>。  
<strong>任务管理器</strong>会显示应用迁移的实时状态，操作系统中的<strong>网络小组件</strong>也会同步显示应用数据和程序的传输进度。
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015954163_Clip_20250916_174547.png" alt="CTOZ 任务状态界面" />
    </td>
    <td valign="middle" style="width:50%; ">
迁移任务正在进行中——只需等待完成！
    </td>
  </tr>
</table>

迁移完成后，登录 **ZimaOS Web 界面**，检查应用列表和设置。你会发现迁移的应用已完整安装在 ZimaOS 中。打开每个应用的设置页面，确认数据路径是否正确指向迁移后的文件夹（CTOZ 通常会保持一致，但如有需要可以手动调整）。然后启动应用，验证性能和数据完整性。在大多数情况下，你的应用将在 ZimaOS 上无缝运行，就像什么都没改变一样。  

## 使用 CTOZ 工具的注意事项
- **处理迁移失败**：  
即使应用迁移失败，**AppData 文件始终会成功传输**。如果目标 ZimaOS 已存在同名文件夹，CTOZ 会在新文件夹名后添加数字以避免覆盖。至于 Docker 安装部分，如果 CTOZ 无法自动完成，你可以手动使用导出的 **Docker Compose YAML** 文件，并通过应用商店的“手动导入”选项加载到 ZimaOS。简而言之：数据是安全的，只需手动重装容器即可。
- **应用导入状态延迟**：  
在 ZimaOS 前端，应用的安装/导入状态可能不会立即刷新。迁移完成后，CTOZ 会查询所有应用的状态，这需要一些时间。如果没有马上看到变化，请稍等并刷新。确认应用实际运行后再继续。
- **确保 CasaOS 版本兼容**：  
如前所述，CasaOS 必须为 **≥ 0.4.4** 才能与 CTOZ 正常配合。这是因为新版本的 CasaOS 使用了标准化的 Docker Compose 配置，工具正是依赖于此。如果你的 CasaOS 版本过旧，请先升级，以避免迁移问题。

借助 **CTOZ 工具**，大多数 Docker 应用的迁移变得简单高效。在在线模式下，几乎就是**一键迁移**；在离线或单机环境中，导出/导入功能能避免你手动搬运文件和配置。对普通用户来说，完成以上两个步骤后，你的**文件和应用就已完整迁移到 ZimaOS**。  

## 其他系统配置与数据检查

除了文件和应用数据外，你可能还会在意系统配置或特殊容器数据。这些目前需要**手动迁移或重新配置**：

-  **系统和用户设置**：由于 **CasaOS 与 ZimaOS 在系统层面存在差异**（如用户账号、网络配置、存储挂载、共享设置），这些不会自动迁移。我们建议在 ZimaOS 中手动重新配置。  

-  **非标准容器**：如果你在 **CasaOS 应用商店之外**（例如通过 CLI）部署了 **Docker 容器**，**CTOZ 工具无法迁移**。这种情况下，请手动备份和恢复数据：在 CasaOS 中找到容器的数据卷或 AppData 目录，通过文件共享或外置硬盘复制，然后在 ZimaOS 中重新部署容器或镜像并重新挂载数据卷。由于 **ZimaOS 同样基于 Docker**，你可以使用相同的 Docker 命令或 Compose 文件。只需确保配置（端口、卷路径等）与旧环境一致，数据即可被正确读取。  

这种迁移属于**高级操作**。大多数用户并不需要，因为 **ZimaOS 开箱即用**，且往往比 CasaOS 的手动调整更简洁。  

## 结论：迁移难度与社区展望

通过覆盖文件、应用和配置，本指南为你勾勒出一条**完整的 CasaOS 到 ZimaOS 迁移路径**。前两类——文件和应用容器——最为直接。借助 **ZimaOS 文件管理（局域网共享 + 迁移功能）**以及社区开发的 **CTOZ 工具**，大多数用户都能轻松迁移关键数据和服务。其他配置检查相对复杂但可选；很多情况下，在 ZimaOS 中直接重新配置更为简单。总体而言，从 CasaOS 到 ZimaOS 的迁移在大多数场景下**顺畅且可行**。  

如果在迁移过程中遇到问题或有建议，我们鼓励你加入官方的 **社区论坛或 Discord**，与开发团队及有经验的用户交流。开发者也欢迎参与贡献——无论是改进迁移工具，还是扩展 ZimaOS 生态系统。  