---
title: ZimaOS-Search如何工作
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除, description为文章描述，不填时将截取内容最前一段文字
---
## 系统工作原理
### 三层架构设计
1. **实时文件监控层**
- 实时感知文件系统变化（创建/重命名/删除）
文件名索引（二级响应）
文件内容索引（凌晨低峰时段统一处理）
- 索引更新的异步批处理（读取、写入、删除，独立协程）
- 每日午夜进行全量审计，确保最终一致性
2. 智能索引构建层
- 雪花算法生成文档ID（每秒生成40w+）
- 自动格式识别支持70+文件类型
3. 多模态搜索层
  - 四维联合搜索：
全文搜索（名称/内容/标签/摘要）
文件名模糊匹配
文件名精确匹配
语义搜索（目前仅支持图片）

## 核心优势
### 🚀快速索引构建
- 测试数据：总大小65.5GB，文件数量200000
- 设备配置：4核N100 CPU，500GB HDD

| **索引** | **传统方案（类似系统）** | **本系统** | **增幅倍数** |
| - | - | - | - |
| **文件名索引时间** | 18分钟 | 1.4秒 | 771倍 |
| **文件内容索引时间（选择Office和PDF文档）** | 1小时23分钟 | 2分21秒 | **35.2倍** |
| **索引内存使用** | 176MB | 26MB | **6.77倍** |
| **索引磁盘占用** | 156MB | 28MB | **5.6倍** |
| **后端服务数量** | 7 | 2 | **3.5倍** |
### 💡智能资源调度
- **按需加载机制**：根据实际使用需求下载模型文件，启动轻量快速
- **动态限流策略**：
  单次处理限制：100000文档/类型
  最大处理时间：5分钟/类型
- **写入障碍保护**：防止高频写入导致CPU飙升
## 适用场景
- **知识库管理**：快速定位文档
- **多媒体档案**：通过内容搜索图片/视频
- **合规审计**：准确跟踪文档变更历史
- **团队协作**：跨格式内容关联检索
全文搜索支持格式和处理方法表

| 类别 | 格式扩展名 | 处理方法 | 备注 |
| - | - | - | - |
| **文本类** | .txt .md .log .htm .html .mht .mhtml .xml | 1. 直接读取 2. 基于文本密度的HTML提取 | 代码文件默认不被索引 |
| **PDF文档** | .pdf | 1. Pdfium直接解析 2. 影像使用Tesseract OCR | 限制：≤200页，OCR结果≤800KB |
| **电子书** | .epub .fb2 .djvu | Doconverter转换为txt格式 | .djvu处理扫描文档 |
| **Word文档** | .doc .docm .docx .docxf .dot .dotm .dotx .fodt .odt .ott .oxps .rtf .stw .sxw .wps .wpt .xps | 转换为docx后解析 | 支持WPS全系列格式 |
| **表格文档** | .csv .et .ett .fods .ods .ots .sxc .xls .xlsb .xlsm .xlsx .xlt .xltm .xltx | 转换为CSV后读取 |  |
| **PPT文档** | .dps .dpt .fodp .odp .otp .pot .potm .potx .pps .ppsm .ppsx .ppt .pptm .pptx .sxi | 分析转换为pptx |  |
| **IWork文档** | .pages .numbers .key | Iwork2text转换（支持OCR识别） |  |
| **图片**★ | .bmp .raw .jpg .jpeg .jpe .jfif .png .gif .tif .tiff .webp .mat .pbm .pgm .ppm .pfm .pnm .fits .fit .fts .exr .hdr .v .vips | 使用MiniCPM-o-2.6模型进行OCR识别 | 限制：每张≤20MB |
| **视频**★ | .mp4 .wmv .mkv .avi .mov .webm .flv .mpeg .mpg .3gp .asf .rm .rmv .rmvb .m4v .swf | 使用Faster Whisper Large v3进行字幕提取 |  |
| **音频**★ | .mp3 .aac .wav .flac .ogg .m4a .aiff .wma .ape | 使用Faster Whisper-Large-v3进行语音转录 |  |
| **CAD文档** | .dwg .dxf | 当前不支持内容解析 | 仅索引元数据 |
| **压缩文件** | .zip .rar .7z .sz .xz .gz .tar .bz2 .br .zz .zst .lz4 | 当前不支持内容解压和解析 | 仅索引压缩包元数据 |

> 注：带★的格式需要启用ZimaOS AI模块，完整的处理能力依赖于硬件配置。系统会不断更新支持的格式列表，请参见官方文档获取最新的格式支持信息。
> 
### 🌐 AI增强搜索
- 图片处理：MiniCPM-o-2.6 OCR+标签识别
- 音频和视频处理：Whisper-large-v3字幕生成
- 语义分析：MiniLM-L6语义向量化
- 参考文档：[启用ZimaOS AI搜索](https://www.zimaspace.com/docs/zimaos/Enable-AI)
