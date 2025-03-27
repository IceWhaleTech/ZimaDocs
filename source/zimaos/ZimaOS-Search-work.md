---
title: How does ZimaOS-Search work
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## System working principle
### Three layer architecture design
1. **Real time file monitoring layer**
- Real time perception of file system changes (create/rename/delete)
File name index (second level response)
File content index (unified processing during low peak hours in the early morning)
- Asynchronous batch processing of index updates (read, write, delete, independent coroutines)
- Daily full audit at midnight to ensure final consistency
2. Intelligent index construction layer
- Snowflake algorithm generates document ID (40w+/second generation capability)
- Automatic format recognition supports 70+file types
3. Multimodal search layer
  -Four dimensional joint search:
Full text search (name/content/tag/abstract)
Fuzzy matching of file names
Accurate matching of file names
Semantic search (currently only supports images)

## Core advantages
### 🚀Rapid index construction
- Test data: Total size 65.5GB, number of files 200000
- Equipment configuration: 4-core N100 CPU, 500GB HDD

| **Index** | **Traditional solution (for a similar system)** | **This system** | **Increase multiplier** |
| - | - | - | - |
| **File name index time** | 18 minutes | 1.4S | 771 times |
| **File content indexing time (select Office&PDF documents)** | 1h 23minutes | 2min21S | **35.2times** |
| **Index memory usage** | 176MB | 26MB | **6.77times** |
| **Index disk occupancy** | 156MB | 28MB | **5.6times** |
| **Number of backend services** | 7 | 2 | **3.5times** |
### 💡Intelligent resource scheduling
- **On demand loading mechanism**: Model files are downloaded according to actual usage needs, with lightweight and fast startup
- **Dynamic current limiting strategy**:
  Single processing limit: 100000 documents/type
  Maximum processing time: 5 minutes/type
- **Write barrier protection**: prevents high-frequency writing from causing CPU surge
## Applicable scenarios
- **Knowledge Base Management**: Quickly locate documents
- **Multimedia Archive**: Search for images/videos through content
- **Compliance Audit**: Accurately Track Document Change History
- **Team collaboration**: Cross format content association retrieval
Full text search support format and processing method table

| Category | Format extension | Handling method | Notes |
| - | - | - | - |
| **Text category** | .txt .md .log .htm .html .mht .mhtml .xml | 1. Direct read 2. HTML based on text density extraction | Code files are not indexed by default |
| **PDF Document** | .pdf | 1. Pdfium direct parsing 2. The photocopy uses Tesseract OCR | Limit: ≤ 200 pages, OCR result ≤ 800KB |
| **e-book** | .epub .fb2 .djvu | Doconverter to txt conversion | . djvu processes scanned documents |
| **Word Document** | .doc .docm .docx .docxf .dot .dotm .dotx .fodt .odt .ott .oxps .rtf .stw .sxw .wps .wpt .xps | Convert doconverter to docx and parse it | Support WPS full range format |
| **Table Document** | .csv .et .ett .fods .ods .ots .sxc .xls .xlsb .xlsm .xlsx .xlt .xltm .xltx | Convert doconverter to CSV and read it |  |
| **PPT Document** | .dps .dpt .fodp .odp .otp .pot .potm .potx .pps .ppsm .ppsx .ppt .pptm .pptx .sxi | Analysis of converting doconverter to pptx |  |
| **IWork Document** | .pages .numbers .key | Iwork2text conversion (supports OCR recognition) |  |
| **Picture**★ | .bmp .raw .jpg .jpeg .jpe .jfif .png .gif .tif .tiff .webp .mat .pbm .pgm .ppm .pfm .pnm .fits .fit .fts .exr .hdr .v .vips | OCR recognition using MiniCPM-o-2.6 model | Restrictions: ≤ 20MB per sheet |
| **Video**★ | .mp4 .wmv .mkv .avi .mov .webm .flv .mpeg .mpg .3gp .asf .rm .rmv .rmvb .m4v .swf | Faster Whisper Large v3 Subtitle Extraction |  |
| **Audio**★ | .mp3 .aac .wav .flac .ogg .m4a .aiff .wma .ape | Faster Whisper-Large-v3 voice transcription |  |
| **CAD Document** | .dwg .dxf | Content parsing is not currently supported | Only index metadata |
| **Compressed File** | .zip .rar .7z .sz .xz .gz .tar .bz2 .br .zz .zst .lz4 | Content decompression and parsing are not currently supported | Index only compressed packet metadata |

> Note: The format marked with ★ requires the ZimaOS AI module to be enabled, and the complete processing capability depends on the hardware configuration. The system continuously updates the support list, please refer to the official documentation for the latest format support.
> 
### 🌐 AI enhanced search
- Image processing: MiniCPM-o-2.6 OCR+label recognition
- Audio and video processing: Whisper-large-v3 subtitle generation
- Semantic analysis: MiniLM-L6 semantic vectorization
- Reference document: [Enable AI search for ZimaOS](https://www.zimaspace.com/docs/zimaos/Enable-AI)