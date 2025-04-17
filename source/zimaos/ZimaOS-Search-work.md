---
title: How does ZimaOS-Search work
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## System Architecture Overview
### Three-Layer Design
1. **Real-Time File Monitoring Layer**
- Real-time detection of file system changes (creation/renaming/deletion) 
Filename indexing (milisecond-level response)
File content indexing (processed uniformly during off-peak hours at midnight)
- Asynchronous batch processing for index updates (separate coroutines for read, write, and delete operations)
- Full audit at 12:00 AM daily to ensure eventual consistency
2. Intelligent Indexing Layer
- Snowflake algorithm for generating document IDs (capable of generating 400,000+ IDs per second)
- Automatic format recognition supporting over 70 file types
3. Multimodal Search Layer
  - Four-dimensional combined search: 
    Full-text search (name/content/tags/summary)
    Filename fuzzy matching
    Filename exact matching
    Semantic search (currently supports images only)
## Core Advantages
### 🚀Ultra-Fast Index Building
- Test data: Total size 65.5GB, 200,000 files
- Hardware configuration: 4-core N100 CPU, 500GB HDD

| **Metric** | **Traditional Solution (Similar System)** | **This system** | **Improvement Multiple** | **Notes** |
| - | - | - | - | - |
| File name indexing time | 18 minutes | 1.4 senconds | 771x | - |
| File content indexing time (Office & PDF documents only) | 1hour 23minutes | 2 minutes 21 seconds | 35.2x | - |
| Index memory usage | 176MB | 26MB | 6.77x | Reduces to 17MB after 1 minute of inactivity, releasing one service |
| Index disk usage | 156MB | 28MB | 5.6x | - |
| Number of background services | 7 | 2 | 3.5x | Reduces to 1 service after 1 minute of inactivity |
### 💡Intelligent Resource Scheduling
- **On-demand loading mechanism**: Model files are downloaded based on actual usage needs, enabling lightweight and fast startup
- **Dynamic throttling strategy**:
  Maximum documents processed per session: 100,000 per type
  Maximum processing time: 5 minutes per type
- **Write barrier protection**: Prevents CPU spikes caused by high-frequency writes
## Use Cases
- **Knowledge Base Management**: Quickly locate documents
- **Multimedia Archiving**: Search for images/videos vy content
- **Compliance Auditing**: Accurately track file change history
- **Team collaboration**: Cross-format content association retrieval
**Full-Text Search Supported Formats and Processing Methods Table**
  
| **Category** | **File Extensions** | **Processing Method** | **Notes** |
| - | - | - | - |
| Text Files | .txt .md .log .htm .html .mht .mhtml .xml | 1. Direct reading 2. HTML based on text density extraction | Code files not indexed by default |
| PDF Documents | .pdf | 1. Direct parsing with pdfium 2. Scanned copies use tesseract OCR | Limit: ≤ 200 pages, OCR result ≤ 800KB |
| E-books | .epub .fb2 .djvu | Convert to txt via doconverter | djvu treated as scanned document |
| Word Documents | .doc .docm .docx .docxf .dot .dotm .dotx .fodt .odt .ott .oxps .rtf .stw .sxw .wps .wpt .xps | Convert to docx via doconverter, then parse | Supports all WPS formats |
| Spreadsheet Documents | .csv .et .ett .fods .ods .ots .sxc .xls .xlsb .xlsm .xlsx .xlt .xltm .xltx | Convert to CSV via doconverter, then read | - |
| Presentation Documents | .dps .dpt .fodp .odp .otp .pot .potm .potx .pps .ppsm .ppsx .ppt .pptm .pptx .sxi | Convert to pptx via doconverter, then parse | - |
| IWork Documents | .pages .numbers .key | Convert via iwork2text (supports OCR recognition)| - |
| Images★ | .bmp .raw .jpg .jpeg .jpe .jfif .png .gif .tif .tiff .webp .mat .pbm .pgm .ppm .pfm .pnm .fits .fit .fts .exr .hdr .v .vips | OCR recognition using MiniCPM-o-2.6 model | Limit: ≤20MB per image |
| Videos★ | .mp4 .wmv .mkv .avi .mov .webm .flv .mpeg .mpg .3gp .asf .rm .rmv .rmvb .m4v .swf | Subtitle extraction using faster-whisper-large-v3 | - |
| Audio★ | .mp3 .aac .wav .flac .ogg .m4a .aiff .wma .ape | Speech-to-text using faster-whisper-large-v3 | - |
| CAD Document | .dwg .dxf | Metadata indexing only (content parsing not supported) | - |
| Compressed Files | .zip .rar .7z .sz .xz .gz .tar .bz2 .br .zz .zst .lz4 | Metadata indexing only (content decompression not supported) | - |

> Note: Formats marked with ★ require the ZimaOS-AI module to be enabled. Full processing capability depends on hardware configuration. The system continuously updates the supported format list; refer to official documentation for the latest support.
> 
### 🌐 AI-Enhanced Search
- Image processing: MiniCPM-o-2.6 OCR + tag recognition
- Audio/video processing: Whisper-large-v3 subtitle generation
- Semantic analysis: MiniLM-L6 semantic vectorization
- Reference document: [Enable AI search for ZimaOS](https://www.zimaspace.com/docs/zimaos/Enable-AI)