---
title: Zhaoxin KX-6000G on ZimaOS
seo_title: "Zhaoxin KX-6000G on ZimaOS: VA-API Transcoding and Real-World Performance"
description: "A hands-on test of the Zhaoxin KX-6000G on ZimaOS: building and loading the cx4 graphics driver, VA-API hardware decode/encode capabilities, transcoding throughput, and whether the iGPU can keep up with real NAS media workloads."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

This article documents a hands-on evaluation of a Zhaoxin KX-6000G processor running ZimaOS. The integrated Glenfly GT10C0-class graphics core was brought up with the official Zhaoxin driver, and its VA-API hardware decode/encode capability was measured with real transcoding tests. The goal is to answer one practical question: can this platform serve as a NAS media-transcoding box under ZimaOS?

The Zhaoxin official driver package is available from the [Zhaoxin download center](https://www.zhaoxin.com/qdxz.aspx?nid=31&typeid=153). It ships as a `.deb` that also contains source code.

## TL;DR

- Overall platform performance is roughly at the level of entry-level x86/GPU hardware from around 2012-2014, and is not suitable as a primary NAS workhorse.
- On ZimaOS, the official driver does get VA-API hardware decode and encode working: H.264, HEVC 8-bit/10-bit, MPEG-2/4, VC-1 and JPEG are all supported, although setup is a bit involved.
- VP9 and AV1 are not recognized, so mainstream web video can only be software-decoded; in practice ffmpeg has no hardware path for them.
- A single 1080p60 stream without subtitles or filters hardware-transcodes at about 1.03x to 1.16x real time, and the zero-copy decode pipeline is intact. The CPU-upload / mixed software-hardware path runs at about 0.8x, so multi-stream or complex processing is out of reach. It is only enough for roughly one user watching a 1080p60 video without scrubbing; hard-burning subtitles makes it essentially unusable.

## Test environment

- CPU: Zhaoxin KX-6000G
- OS: ZimaOS 1.6.2, Linux kernel 6.18.9
- Driver source: official Zhaoxin driver (`.deb` containing source). The kernel-mode `cx4.ko` was compiled by combining the source inside the `.deb` with `/proc/config.gz` from ZimaOS and the official vanilla `linux-6.18.9` tarball.
- Userspace driver: installed inside a clean Ubuntu 24.04 LTS container using the official Zhaoxin `.deb`.

## Driver installation

### Kernel-mode driver (cx4.ko)

#### Prepare the kernel build environment

- Extract `/proc/config.gz` on ZimaOS and confirm the kernel version is `6.18.9`. On a development machine, download and extract the official `linux-6.18.9.tar.xz`, then place the extracted config as `.config` in the kernel source root.
- To generate a complete symbol dictionary, build the core and modules in the kernel source directory first (this resolves missing `Module.symvers` and `modpost` errors):

```bash
make oldconfig
make modules_prepare
make -j$(nproc) vmlinux   # builds the kernel image, producing vmlinux.o
make -j$(nproc) modules   # builds modules, producing Module.symvers
```

#### Compile the kernel-mode driver

Enter the extracted driver source directory. It looks roughly like this:

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

- In the `src/cx4-26.00.49` directory (which becomes `/usr/src/cx4-26.00.49` after installation), build against the kernel environment prepared above:

```bash
make -C /path/to/linux-6.18.9 M=$PWD modules
```

A successful build produces the final kernel module `cx4.ko` in the current directory.

#### Install

- Before `insmod`, the four graphics and video-memory helper modules built into the kernel must be loaded on ZimaOS, otherwise installation fails with `Unknown symbol in module` dependency errors:

```bash
modprobe drm_kms_helper
modprobe drm_display_helper
modprobe drm_client_lib
modprobe drm_ttm_helper
insmod /tmp/cx4.ko
```

After loading, `lsmod | grep cx4` shows the driver is running and the system has created the device nodes `/dev/dri/card0` and `/dev/dri/renderD128`.

### Userspace driver

For ffmpeg to be able to use hardware decoding, the Zhaoxin userspace driver must be installed in a container. Start the container with a helper script:

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

Then, inside the container:

```bash
apt update && apt install -y ./cx4-linux-graphics-driver-dri-glvnd_26.00.49_amd64.deb && apt install -y vainfo ffmpeg
```

## Performance test results

The following scenarios were tested:

- 1080p HEVC 10-bit to H.264 hardware transcoding
- 1080p HEVC 8-bit to H.264 hardware transcoding
- Zero-copy decode pipeline verification
- Host-to-VRAM bandwidth stress test (hwupload)

### vainfo hardware capability output

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

The communication path between the system and the hardware is fully open at the software level; the driver works.

In VA-API terms, `VAEntrypointVLD` means hardware decode and `VAEntrypointEncSlice` means hardware encode. Reading the list: H.264 Main and High profiles are supported for both decode and encode; HEVC is supported for `VAProfileHEVCMain` (8-bit) and `VAProfileHEVCMain10` (10-bit) decode and encode. MPEG-2, MPEG-4, VC-1 and JPEG decode are also supported.

However, VP9 and AV1 never appear in `vainfo`, even though both are core formats for mainstream web media. Even an Intel N100 natively supports 8K AV1 hardware decode. For this iGPU, any such network video forces the system back to CPU software decoding.

### 1080p HEVC 10-bit to H.264 hardware transcode

Input: `hevc (Main 10) (hvc1 / 0x31637668), yuv420p10le, 1920x1080, 5024 kb/s, 60 fps`

Command:

```text
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 -hwaccel_output_format vaapi -i test_1080p.mp4 -c:v h264_vaapi -b:v 5M -y output_1080p.mp4
```

Key output:

```text
Stream mapping:
  Stream #0:0 -> #0:0 (hevc (native) -> h264 (h264_vaapi))
...
[h264_vaapi @ 0x5562630afb00] Driver does not support some wanted packed headers (wanted 0xd, found 0x10).
[h264_vaapi @ 0x5562630afb00] Driver does not support packed sequence headers, but a global header is requested.
...
frame= 1797 fps= 62 q=-0.0 Lsize=   36585kB time=00:00:29.93 bitrate=10012.4kbits/s speed=1.03x
```

`speed=1.03x` shows the transcode runs only slightly faster than real time - barely enough for one user watching a 1080p60 video. Scrubbing or a second viewer would immediately overwhelm it. One hypothesis was that it had fallen back to CPU software decoding, so a more compatible 8-bit HEVC source was tried next.

### 1080p HEVC 8-bit to H.264 hardware transcode

Input: `hevc (Main) (hvc1 / 0x31637668), yuv420p, 1920x1080, 5023 kb/s, 60 fps`

Command:

```bash
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 -hwaccel_output_format vaapi -i test_1080p-8bit.mp4 -c:v h264_vaapi -b:v 5M -y output-8bit.mp4
```

Key output:

```text
Stream mapping:
  Stream #0:0 -> #0:0 (hevc (native) -> h264 (h264_vaapi))
...
frame= 1797 fps= 70 q=-0.0 Lsize=   36580kB time=00:00:29.93 bitrate=10011.1kbits/s speed=1.16x
```

Even on 8-bit, the single-stream ceiling measured only `speed=1.16x`, not materially different from the 10-bit result of 1.03x in real-world use. Since it still felt like software decoding, the zero-copy decode pipeline was verified next.

### Zero-copy decode pipeline verification

Command (with debug logging):

```bash
ffmpeg -loglevel debug -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 -hwaccel_output_format vaapi -i test_1080p-8bit.mp4 -c:v h264_vaapi -b:v 5M -y output-8bit.mp4
```

Key output:

```text
[h264_vaapi @ 0x558a51918fc0] Input surface is 0x4000015.
[h264_vaapi @ 0x558a51918fc0] Recon surface is 0x400001a.
[h264_vaapi @ 0x558a51918fc0] Output buffer is 0x8000004.
...
[h264_vaapi @ 0x558a51918fc0] Output packet: pts 1785, dts 1785, size 23520 bytes.
...
[in#0/mov,mp4,m4a,3gp,3g2,mj2 @ 0x558a519159c0]   Input stream #0:0 (video): 1797 packets read (18806105 bytes); 1797 frames decoded; 0 decode errors;
```

`Input surface is 0x4000015/0x4000014` - the `0x400001x` values are the `VASurfaceID` returned by the driver. This proves the decoded frames are handed directly from the decoder to the `h264_vaapi` encoder as physical handles inside the GPU, with no copying overhead in between.

The status code `00000000` is `VA_STATUS_SUCCESS` in the VA-API spec, showing no error retries or abnormal waits between the VPU driver and the hardware. The final line confirms all 1797 frames decoded with 0 decode errors. The 30-second clip ran hardware decode from start to finish and never fell back to CPU software decoding.

This confirms the 1.03x-1.16x results above are the real hardware ceiling of the encode/decode pipeline, not a software fallback.

### Host-to-VRAM bandwidth stress test (hwupload)

Pipelines that depend on CPU + hwupload physical bandwidth - hard subtitle burning, Photos video editing/crop previews and exports, YOLO-style models - depend heavily on the hwupload transfer bandwidth. Here the results speak for themselves.

Command:

```bash
ffmpeg -init_hw_device vaapi=cx4:/dev/dri/renderD128 -filter_hw_device cx4 -i test_1080p-8bit.mp4 -vf "format=nv12,hwupload" -c:v h264_vaapi -b:v 5M -y output-8bit.mp4
```

Key output:

```text
Stream mapping:
  Stream #0:0 -> #0:0 (hevc (native) -> h264 (h264_vaapi))
...
frame= 1797 fps= 48 q=-0.0 Lsize=   36584kB time=00:00:29.93 bitrate=10012.1kbits/s speed=0.807x
```

Speed drops to a dismal `0.807x` (it started even lower, around 0.7x, before climbing to about 0.8x). Any video that involves a CPU-processed upload step - for example external subtitles - stalls at the playback end because the transcode cannot keep up.

## Photos

Photos results cannot be quantified and were judged by eye. Photos leaves its neural-network indexing to the CPU; in practice it took about 5-7 minutes to index a single photo, and with many photos indexing could take an entire night. When new photos are added later, they also take a very long time to be indexed.

## Third-party review references

These references provide additional context on the KX-6000G platform.

### Tom's Hardware

[Zhaoxin KX-6000G benchmarks surface: Chinese-made chips perform like CPUs from the late 2000s, but use less power](https://www.tomshardware.com/pc-components/cpus/alleged-zhaoxin-kx-6000g-benchmarks-surface-chinese-made-chips-perform-like-cpus-from-the-late-2000s-but-uses-less-power)

The headline is blunt: performance is comparable to CPUs from the late 2000s, with power draw as the main strength. Multi-core performance roughly matches an i3-4010U or i5-5015U - around the mainstream x86 level of 15 years ago.

### Notebookcheck

[Zhaoxin KaiXian KX-6000G Processor Benchmarks and Specs](https://www.notebookcheck.net/Zhaoxin-KaiXian-KX-6000G-Processor-Benchmarks-and-Specs.921388.0.html)

The only source with actual measured benchmarks, roughly as follows:

- x86-compatible quad-core, 15W TDP, based on a VIA/S3 Graphics-derived architecture, core codename Luzhou (陆家嘴), TSMC 16nm process
- 2.0-3.3 GHz, 4 MB L2 cache, no L3 cache, 4 cores / 4 threads
- Integrated Glenfly GT-10C0-class GPU core with DX11/12, OpenCL 1.2, OpenGL 4.6 support
- Geekbench measured on UOS 20 Pro / 12 GB: single-core 380, multi-core 1012 - below even the Intel N50, let alone the N100 or N150

### Wccftech - integrated GPU comparison

States that the GT10C0 GPU core performs about like an NVIDIA GT 630, a 2012 entry-level discrete GPU, which matches the IT之家 conclusion.

### IT之家

[Source article](https://www.ithome.com/0/632/391.htm)

- GPU clock 500 MHz, memory bus 64/128-bit, FP32 performance 1.5 TFLOPS (this conflicts with its own 3DMark11 conclusion of GT 630 equivalence and is suspected to be an error)
- 3DMark11 score roughly equivalent to an NVIDIA GT 630 discrete GPU; FP32 slightly below a GTX 1050
- DirectX 11/12 (uncertain), OpenGL 4.5, OpenCL 1.2 support; 4K display and video playback are claimed but do not live up to expectations in practice

### MyDrivers (快科技)

[Source article](https://news.mydrivers.com/1/848/848956.htm)

- glmark2 total 3116, several individual tests above 4000 fps, peak over 5000 fps
- 7-Zip multi-core score over 12000, up nearly 30% versus the quad-core KX-6000
- Power draw is clearly better controlled than the quad-core KX-6000

### Chips and Cheese

[The weird and wacky world of VIA, part 2: Zhaoxin's not-quite electric boogaloo](https://chipsandcheese.com/p/the-weird-and-wacky-world-of-via-part-2-zhaoxins-not-quite-electric-boogaloo)

[Zhaoxin, part 3: a sort of anti-climax](https://chipsandcheese.com/p/zhaoxin-part-3-a-sort-of-anti-climax)

Chips and Cheese did not test the KX-6000G directly; they tested the KX-6640MA, which shares the same architecture (Luzhou).

- L2 bandwidth cannot sustain 8 bytes per core per cycle of read throughput. Moving the memory controller from FSB to on-die improved latency, but the difference between single- and dual-channel memory performance is tiny, suggesting the core itself cannot make use of the bandwidth.
- The branch predictor's L0 BTB is a bright spot, but overall this is still a low-power-core design.
- The core width actually narrowed versus the previous generation, presumably to reduce power and die area for an 8-core part - the article compares this to ARM's A73 dropping from A72's 3-wide to 2-wide for the same reasons.
- The ROB/register file was cut from 65 entries to 48, abandoning Isaiah's separate register file and returning to a P6-style unified ROB+RRF. The article calls the decoupling of the register file from the ROB (as used by almost all modern high-performance CPUs) "a puzzling choice." The one saving grace is that untaken branches do not consume ROB entries, with up to 64 untaken branches letting two long-latency loads run in parallel.
- Execution ports and ALUs: 2 ALU ports; IMUL latency 2 cycles at 16-bit / 9 cycles at 64-bit; the vector integer ALU grew from 1x128-bit to 2x128-bit with one new load pipe, but FP adder latency worsened from Isaiah's 2 cycles to 3 cycles.
- AVX support is effectively a compatibility gimmick and a performance trap, which strongly correlates with the codec results here: 256-bit AVX instructions are decoded into two 128-bit micro-ops with no throughput advantage over SSE, consume more than 2 ROB entries (cutting out-of-order capacity by more than half), and add extra execution latency. The chip officially supports AVX but not AVX2, and FMA instructions fault directly. Even 256-bit integer instruction latency is unexpectedly usable with a small penalty. Overall it loses even to a 15-year-old Intel Core 2 T7100.
- Related background: the Luzhou architecture ultimately descends from S3 Graphics, whose 3D technology had already been pushed out of the market by NVIDIA and others around the turn of the millennium. The Zhaoxin/Glenfly Arise era still used the S3 Graphics architecture, mainly for Win7/XP compatibility, and still only had two legacy compute units, so it cannot reach playable levels.

A further Chinese-language write-up on the same platform is available at the [ZhiHu article](https://www.zhihu.com/tardis/jm/art/2003793386981839658).
