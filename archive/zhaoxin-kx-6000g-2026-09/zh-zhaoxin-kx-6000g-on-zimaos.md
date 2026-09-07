---
title: ZimaOS 上的兆芯 KX-6000G
seo_title: "ZimaOS 上兆芯 KX-6000G：VA-API 硬转码与真实性能实测"
description: "在 ZimaOS 上实测兆芯 KX-6000G：编译并加载 cx4 显卡驱动、VA-API 硬解/硬编能力、转码吞吐，以及这颗核显能否胜任真实的 NAS 媒体处理负载。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

本文记录了一次对运行 ZimaOS 的兆芯 KX-6000G 处理器的实测评估。集成的 Glenfly GT10C0 级别图形核心使用官方兆芯驱动驱动起来，并用真实的转码测试测量了它的 VA-API 硬件解码/编码能力。目的只有一个实际的问题：这块平台在 ZimaOS 下能否胜任 NAS 的媒体转码机？

兆芯官方驱动包来自[兆芯官网驱动下载中心](https://www.zhaoxin.com/qdxz.aspx?nid=31&typeid=153)。它以 `.deb` 形式提供，同时包含源码。

## 结论先行

- 整体平台性能相当于 2012–2014 年前后入门级 x86/GPU 水平，不适合作为 NAS 主力。
- 在 ZimaOS 上能用官方驱动跑通 VA-API 硬解/硬编：H.264、HEVC 8bit/10bit、MPEG2/4、VC1、JPEG 都支持，只是配置稍麻烦。
- 未识别标准 VP9 / AV1，主流网络视频只能软解，ffmpeg 实际无法调用硬件路径。
- 单路 1080p60 无字幕/滤镜的硬转码约 1.03x~1.16x 实时，零拷贝硬解管线正常；CPU 上传/软硬混合链路约 0.8x，基本不具备多路或复杂处理能力。大约只够满足一个用户勉强看 1080p60 的视频，还不包括拖动进度条；一旦加入硬压字幕就基本无法使用。

## 测试环境

- CPU：兆芯 KX-6000G
- OS：ZimaOS 1.6.2，Linux 内核 6.18.9
- 驱动来源：兆芯官方驱动（`.deb` 内含源码）。内核态 `cx4.ko` 由 `.deb` 内的源码、ZimaOS 上提取的 `/proc/config.gz`，结合官方 vanilla 的 `linux-6.18.9` tarball 编译得出。
- 用户态驱动：在纯净的 Ubuntu 24.04 LTS 容器内安装官方 `.deb` 驱动包。

## 驱动安装

### 内核态驱动（cx4.ko）

#### 提取并准备内核环境

- 在 ZimaOS 上提取 `/proc/config.gz`，并确认内核版本为 `6.18.9`。在开发机上下载并解压官方 `linux-6.18.9.tar.xz`，然后将提取出的 config 命名为 `.config` 放进内核源码根目录。
- 为生成完整的符号字典，先在内核源码目录下编译核心与模块（解决 `Module.symvers` 缺失和 `modpost` 报错）：

```bash
make oldconfig
make modules_prepare
make -j$(nproc) vmlinux   # 编译内核主体，生成 vmlinux.o
make -j$(nproc) modules   # 编译模块，生成 Module.symvers
```

#### 编译内核态驱动

进入解包好的驱动源码目录，其结构大致如下：

```text
.
├── control.tar.gz
├── cx4-linux-graphics-driver-dri-glvnd_26.00.49_amd64.deb
├── data.tar.xz
├── debian-binary
├── etc
│   ├── modprobe.d
│   │   └── cx4_gfx.conf
│   └── OpenCL
│       └── vendors
│           └── cx4.icd
├── KX-6000G-Linux OS_x64-26.00.49_Release_Note.html
└── usr
    ├── lib
    │   ├── x86_64-linux-gnu
    │   │   ├── cx4_builtins.bc
    │   │   ├── cx4_driocl.so
    │   │   ├── cx4libclc
    │   │   ├── cx4oclasm.so
    │   │   ├── cx4oclcompiler.so
    │   │   ├── dri
    │   │   ├── gbm
    │   │   ├── libcx4arb_compiler.so
    │   │   ├── libcx4bec.so
    │   │   ├── libcx4GLSLCompiler.so
    │   │   ├── libcx4keinterface_v2.so.0 -> libcx4keinterface_v2.so.0.0.0
    │   │   ├── libcx4keinterface_v2.so.0.0.0
    │   │   ├── libcx4_mgmt_interface.so
    │   │   ├── libcx4spirv2nir.so
    │   │   ├── libEGL_cx4.so.0.0.0
    │   │   ├── libglapi_cx4.so.0.0.0
    │   │   ├── libGLX_cx4.so.0.0.0
    │   │   ├── libvulkan_cx4.so
    │   │   └── vdpau
    │   └── xorg
    │       └── modules
    ├── share
    │   ├── drirc.d
    │   │   └── 01-cx4_drv.conf
    │   ├── glvnd
    │   │   └── egl_vendor.d
    │   ├── initramfs-tools
    │   │   └── hooks
    │   ├── vulkan
    │   │   └── icd.d
    │   └── X11
    │       └── xorg.conf.d
    └── src
        └── cx4-26.00.49
            ├── cbios
            ├── core
            ├── cx4.ko
            ├── cx4.mod
            ├── cx4.mod.c
            ├── cx4.mod.o
            ├── cx4.o
            ├── dkms.conf
            ├── Kconfig
            ├── linux
            ├── Makefile
            ├── modules.order
            ├── Module.symvers
            ├── shared
            └── zx_version.h

30 directories, 34 files
```

- 在 `src/cx4-26.00.49`（安装后即 `/usr/src/cx4-26.00.49`）目录内，借助上面准备好的内核环境编译：

```bash
make -C /path/to/linux-6.18.9 M=$PWD modules
```

编译成功后会在当前目录产出最终的内核模块 `cx4.ko`。

#### 安装

- 在 `insmod` 之前，必须先在 ZimaOS 终端内拉起内核自带的四个图形与显存辅助模块，否则安装时会报 `Unknown symbol in module` 依赖问题：

```bash
modprobe drm_kms_helper
modprobe drm_display_helper
modprobe drm_client_lib
modprobe drm_ttm_helper
insmod /tmp/cx4.ko
```

加载完成后，`lsmod | grep cx4` 即可看到驱动已成功运行，系统也生成了物理节点 `/dev/dri/card0` 和 `/dev/dri/renderD128`。

### 用户态驱动

为了让 ffmpeg 能调用硬解，需要在容器里安装兆芯的用户态驱动。用脚本直接起一个容器：

```bash
#!/bin/bash

CONTAINER_NAME="zhaoxin"
HOST_DIR=$(pwd)

if [ "$(docker ps -aq -f name=^${CONTAINER_NAME}$)" ]; then
    docker rm -f "$CONTAINER_NAME" > /dev/null
fi

docker run -d \
    --name "$CONTAINER_NAME" \
    --device /dev/dri:/dev/dri \
    -v "$HOST_DIR":/tests \
    ubuntu:24.04 \
    sleep infinity
```

然后在容器内：

```bash
apt update && apt install -y ./cx4-linux-graphics-driver-dri-glvnd_26.00.49_amd64.deb && apt install -y vainfo ffmpeg
```

## 性能测试结果

分别针对以下场景进行了测试：

- 1080p HEVC 10-bit → H.264 硬件转码
- 1080p HEVC 8-bit → H.264 硬件转码
- 零拷贝硬解管线验证
- 宿主机到显存传输带宽压测（hwupload）

### vainfo 硬件能力输出

```text
libva info: VA-API version 1.20.0
libva info: Trying to open /usr/lib/x86_64-linux-gnu/dri/cx4_drv_video.so
libva info: Found init function __vaDriverInit_1_0
[cx4 video info] cx4 VA driver: 26.00.49 on 05/07/2026
[cx4 video info] cx4 VA driver: VA VERSION 1.1.0
[cx4 video info] select vendor id: 1d17 - cx4 @ init L66
libva info: va_openDriver() returns 0
vainfo: VA-API version: 1.20 (libva 2.12.0)
vainfo: Driver version: cx4
vainfo: Supported profile and entrypoints
      VAProfileMPEG2Simple            :        VAEntrypointVLD
      VAProfileMPEG2Main              :        VAEntrypointVLD
      VAProfileMPEG4Simple            :        VAEntrypointVLD
      VAProfileMPEG4AdvancedSimple    :        VAEntrypointVLD
      <unknown profile>               :        VAEntrypointVLD
      <unknown profile>               :        VAEntrypointEncSlice
      VAProfileH264Main               :        VAEntrypointVLD
      VAProfileH264Main               :        VAEntrypointEncSlice
      VAProfileH264High               :        VAEntrypointVLD
      VAProfileH264High               :        VAEntrypointEncSlice
      VAProfileH264ConstrainedBaseline:        VAEntrypointVLD
      VAProfileH264ConstrainedBaseline:        VAEntrypointEncSlice
      VAProfileVC1Simple              :        VAEntrypointVLD
      VAProfileVC1Main                :        VAEntrypointVLD
      VAProfileVC1Advanced            :        VAEntrypointVLD
      VAProfileJPEGBaseline           :        VAEntrypointVLD
      VAProfileJPEGBaseline           :        VAEntrypointEncPicture
      VAProfileNone                   :        VAEntrypointVideoProc
      VAProfileHEVCMain               :        VAEntrypointVLD
      VAProfileHEVCMain               :        VAEntrypointEncSlice
      VAProfileHEVCMain10             :        VAEntrypointVLD
      VAProfileHEVCMain10             :        VAEntrypointEncSlice
      VAProfileH264MultiviewHigh      :        VAEntrypointVLD
      VAProfileH264MultiviewHigh      :        VAEntrypointEncSlice
      VAProfileH264StereoHigh         :        VAEntrypointVLD
      VAProfileH264StereoHigh         :        VAEntrypointEncSlice
      <unknown profile>               :        VAEntrypointVLD
      <unknown profile>               :        VAEntrypointVLD
```

系统到硬件之间的通信管道在软件层面已经打通，驱动没有问题。

在 VA-API 中，`VAEntrypointVLD` 表示硬件解码能力，某格式后面出现它即代表支持该格式硬解；同理 `VAEntrypointEncSlice` 表示硬件编码能力。可以看到：H.264 支持 Main 和 High 档次的硬解与硬编；HEVC 支持 `VAProfileHEVCMain`（8bit）和 `VAProfileHEVCMain10`（10bit）的硬解与硬编。同时也支持 MPEG-2、MPEG-4、VC-1 和 JPEG 的硬解。

但是，`vainfo` 中完全没有出现 VP9 和 AV1 这两个在主流网络媒体中属于核心格式的名字。哪怕是 Intel 的 N100 都已经原生支持 8K AV1 硬件解码。这颗 iGPU 一旦需要处理这类网络视频，系统就一定会退回 CPU 软件解码。

### 1080p HEVC 10-bit → H.264 硬件转码

输入源：`hevc (Main 10) (hvc1 / 0x31637668), yuv420p10le, 1920x1080, 5024 kb/s, 60 fps`

测试命令：

```text
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 -hwaccel_output_format vaapi -i test_1080p.mp4 -c:v h264_vaapi -b:v 5M -y output_1080p.mp4
```

关键输出：

```text
Stream mapping:
  Stream #0:0 -> #0:0 (hevc (native) -> h264 (h264_vaapi))
...
[h264_vaapi @ 0x5562630afb00] Driver does not support some wanted packed headers (wanted 0xd, found 0x10).
[h264_vaapi @ 0x5562630afb00] Driver does not support packed sequence headers, but a global header is requested.
...
frame= 1797 fps= 62 q=-0.0 Lsize=   36585kB time=00:00:29.93 bitrate=10012.4kbits/s speed=1.03x
```

`speed=1.03x` 显示转码速度只比实时稍快——勉强够一个用户看 1080p60 的视频。稍微拖动进度条，或两个人一起看，硬件性能就会完全跟不上。起初怀疑是退回到了 CPU 软解，因此换用更兼容的 8-bit HEVC 源再测。

### 1080p HEVC 8-bit → H.264 硬件转码

输入源：`hevc (Main) (hvc1 / 0x31637668), yuv420p, 1920x1080, 5023 kb/s, 60 fps`

测试命令：

```bash
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 -hwaccel_output_format vaapi -i test_1080p-8bit.mp4 -c:v h264_vaapi -b:v 5M -y output-8bit.mp4
```

关键输出：

```text
Stream mapping:
  Stream #0:0 -> #0:0 (hevc (native) -> h264 (h264_vaapi))
...
frame= 1797 fps= 70 q=-0.0 Lsize=   36580kB time=00:00:29.93 bitrate=10011.1kbits/s speed=1.16x
```

即便是 8-bit，单路极限测出来也只有 `speed=1.16x`，和 10-bit 的 1.03x 在实际体感上没有本质区别。由于仍然感觉像是在软解，接下来走零拷贝硬解管线验证。

### 零拷贝硬解管线验证

测试命令（开启 debug 日志）：

```bash
ffmpeg -loglevel debug -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 -hwaccel_output_format vaapi -i test_1080p-8bit.mp4 -c:v h264_vaapi -b:v 5M -y output-8bit.mp4
```

关键输出：

```text
[h264_vaapi @ 0x558a51918fc0] Input surface is 0x4000015.
[h264_vaapi @ 0x558a51918fc0] Recon surface is 0x400001a.
[h264_vaapi @ 0x558a51918fc0] Output buffer is 0x8000004.
...
[h264_vaapi @ 0x558a51918fc0] Output packet: pts 1785, dts 1785, size 23520 bytes.
...
[in#0/mov,mp4,m4a,3gp,3g2,mj2 @ 0x558a519159c0]   Input stream #0:0 (video): 1797 packets read (18806105 bytes); 1797 frames decoded; 0 decode errors;
```

`Input surface is 0x4000015/0x4000014`——这里的 `0x400001x` 是驱动返回的 `VASurfaceID`。这证明解码器解出来的画面直接以物理句柄的方式在显卡内部送入了 `h264_vaapi` 编码器，中间没有任何拷贝开销。

状态码 `00000000` 在 VA-API 规范中定义为 `VA_STATUS_SUCCESS`，证明 VPU 驱动与硬件之间没有错误重试或异常等待。最后一行确认 1797 帧全部完成解码且解码错误为 0：这 30 秒的视频从头到尾都在执行硬解，从来没有退回到 CPU 软解。

这也印证了上面的 1.03x~1.16x 是编码/解码管线的真实硬件上限，而不是软解回退。

### 宿主机到显存传输带宽压测（hwupload）

类似字幕硬压制、Photos 中视频编辑与裁剪的预览和导出，以及 YOLO 等模型的运行，都依赖 CPU 与 hwupload 之间的物理带宽。在很多软硬混合管线中，hwupload 的传输带宽很大程度上决定了用户体验。直接看结果。

测试命令：

```bash
ffmpeg -init_hw_device vaapi=cx4:/dev/dri/renderD128 -filter_hw_device cx4 -i test_1080p-8bit.mp4 -vf "format=nv12,hwupload" -c:v h264_vaapi -b:v 5M -y output-8bit.mp4
```

关键输出：

```text
Stream mapping:
  Stream #0:0 -> #0:0 (hevc (native) -> h264 (h264_vaapi))
...
frame= 1797 fps= 48 q=-0.0 Lsize=   36584kB time=00:00:29.93 bitrate=10012.1kbits/s speed=0.807x
```

速度直接掉到了很低的 `0.807x`（实际上最初更低，只有 0.7x 左右，后来才慢慢升到 0.8x）。这意味着视频只要涉及任何 CPU 处理后的上传步骤（例如外挂字幕），播放端就会因为转码跟不上而当场卡死。

## Photos

Photos 的测试结果无法量化，只能靠肉眼看。Photos 的神经网络索引交给 CPU 处理，实际体感中大约需要 5–7 分钟才能处理完单张照片；照片一多甚至需要一整个晚上。后续有新照片加入时，也需要非常漫长的时间才能全部索引完。

## 第三方评测参考

以下参考提供了关于 KX-6000G 平台的外部背景信息。

### Tom's Hardware

[Zhaoxin KX-6000G benchmarks surface: Chinese-made chips perform like CPUs from the late 2000s, but use less power](https://www.tomshardware.com/pc-components/cpus/alleged-zhaoxin-kx-6000g-benchmarks-surface-chinese-made-chips-perform-like-cpus-from-the-late-2000s-but-uses-less-power)

标题定调就很鲜明：芯片性能相当于 2000 年代末的 CPU，唯一亮点是功耗控制比较好。多核性能大约与 i3-4010U 和 i5-5015U 持平，大约是 15 年前的主流 x86 水平。

### Notebookcheck

[Zhaoxin KaiXian KX-6000G Processor Benchmarks and Specs](https://www.notebookcheck.net/Zhaoxin-KaiXian-KX-6000G-Processor-Benchmarks-and-Specs.921388.0.html)

唯一有真实实测跑分的来源，数据大致如下：

- x86 兼容四核，15W TDP，基于 VIA/S3 Graphics 架构，核心代号陆家嘴，台积电 16nm 工艺
- 主频 2.0–3.3GHz，L2 缓存 4MB，没有 L3 缓存，4 核 4 线程
- 集成 Glenfly GT-10C0 级别核显，支持 DX11/12、OpenCL 1.2、OpenGL 4.6
- Geekbench 在统信 UOS 20 Pro / 12GB 下实测：单核 380，多核 1012——甚至打不过 Intel N50，更不用说 N100 和 N150

### Wccftech —— 核显性能对比

明确提到 GT10C0 核显的性能相当于 NVIDIA GT 630——一款 2012 年的入门独显，与 IT 之家的说法一致。

### IT之家

[来源文章](https://www.ithome.com/0/632/391.htm)

- GPU 频率 500MHz，显存位宽 64/128bit，FP32 浮点性能 1.5 TFLOPS（但该数据与它自己“3DMark11 相当于 GT 630”的结论存在矛盾，疑有误）
- 3DMark11 跑分相当于 NVIDIA GT 630 独显；FP32 略小于 GTX 1050
- 支持 DirectX 11/12（存疑）、OpenGL 4.5、OpenCL 1.2；宣称支持 4K 高清显示与视频播放，但实际情况不尽如人意

### 快科技（MyDrivers）

[来源文章](https://news.mydrivers.com/1/848/848956.htm)

- glmark2 总分 3116，不少单项跑过 4000fps，最高超过 5000fps
- 7-Zip 多核成绩超 12000 分，相比四核 KX-6000 上涨近 30%
- 功耗控制明显优于四核 KX-6000

### Chips and Cheese

[The weird and wacky world of VIA, part 2: Zhaoxin's not-quite electric boogaloo](https://chipsandcheese.com/p/the-weird-and-wacky-world-of-via-part-2-zhaoxins-not-quite-electric-boogaloo)

[Zhaoxin, part 3: a sort of anti-climax](https://chipsandcheese.com/p/zhaoxin-part-3-a-sort-of-anti-climax)

Chips and Cheese 没有直接测试 KX-6000G，他们测试的是同一架构（陆家嘴）下的 KX-6640MA。

- L2 带宽无法维持每核每周期 8 字节的读取吞吐。内存控制器从 FSB 移到片内以改善延迟，但单、双通道内存的性能差异极小，说明核心本身无法利用带宽。
- 分支预测器的 L0 BTB 有亮点，但整体仍属于低功耗核心水平。
- 核心宽度反而比上代缩窄了，原因大概率是降低功耗与面积以便制造 8 核芯片——文章类比 ARM A73 从 A72 的 3-wide 降到 2-wide，是同样的面积/功耗考量。
- ROB/寄存器文件从 65 条目缩减到 48 条目，放弃了 Isaiah 的独立寄存器文件，回到 P6 风格的 ROB+RRF 统一寄存器文件。文章称“几乎所有现代高性能 CPU 都使用与 ROB 解耦的寄存器文件，这是一个令人费解的选择”。唯一的补救是未跳转分支不消耗 ROB 条目：最多 64 条未跳转分支可并行执行 2 个长延迟 load。
- 执行端口与运算单元：2 个 ALU 端口；IMUL 延迟 16bit 2 cycles / 64bit 9 cycles；向量整数 ALU 从 1×128bit 增加到 2×128bit，并新增一条 load 管道；但 FP 加法器延迟从 Isaiah 的 2 cycles 恶化到 3 cycles。
- AVX 实现只是兼容性噱头，实际上是性能陷阱，这与本机的编解码测试结果强相关：256-bit AVX 指令被 decode 成两条 128-bit micro-ops，吞吐相比 SSE 没有优势，ROB 占用超过 2 个条目使乱序重排能力降到不足一半，且执行延迟额外增加。芯片官方支持 AVX 但不支持 AVX2，FMA 指令直接 fault。不过 256-bit 整数指令的延迟意外地可用，惩罚较小。整体甚至打不过 15 年前的 Intel Core 2 T7100。
- 相关背景：陆家嘴架构实际上来源于千禧年时就已经被 NVIDIA 等 3D 显卡厂商挤出市场的 S3 Graphics。兆芯/格兰菲 Arise 时代仍在用 S3 Graphics 架构，主要是为了兼容 Win7/XP，同时依旧只有祖传的 2 个计算单元，所以达不到可玩的水平。

关于该平台的另一篇中文分析文章可参见[知乎专栏](https://www.zhihu.com/tardis/jm/art/2003793386981839658)。
