---
title: ZimaOS 上的 AMD Ryzen AI MAX+ 395 NPU
seo_title: "ZimaOS 上 AMD Ryzen AI MAX+ 395 NPU：实测表现与真实上限"
description: "在 ZimaOS（内核 6.18.9）上实测 AMD Ryzen AI MAX+ 395 的 XDNA2 NPU：NPU 启用、固件与驱动版本锁、以及 Linux 上 NPU 推理目前是否可用。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概述

本文记录了一次在运行 ZimaOS（内核 6.18.9）的主机上，尝试在 AMD Ryzen AI MAX+ 395 处理器的 NPU 上运行小模型的完整过程：从启用 XDNA2 NPU、在驱动层验证，到逐一尝试现实可行的推理路径。结果能清晰地展示这颗 NPU 在 Linux 上目前能做什么、不能做什么，以及为什么。

## 结论先行

AMD XDNA2 NPU 在 Linux 上的推理软件栈未达工程验证（EVT）门槛，暂不能作为可用的生产环境。阻塞全部来自 AMD 在 Linux 侧的软件成熟度，与硬件本身无关。

| 维度 | 判断 | 一句话依据 |
|---|---|---|
| NPU 硬件 | 成熟 | 量产 IP，本机正常识别、可计算 |
| Windows 侧软件栈 | 成熟 | 官方 ONNX EP / whisper.cpp 均可用 |
| Linux 侧软件栈 | 未达 EVT | 驱动、固件、运行时版本三连环断裂，官方框架缺位 |
| 本机实测上限 | 启用 + 可编程 + 执行算子 + 真模型 prefill | 完整模型生成被驱动版本锁死 |

NPU 在 Windows 上是产品，在 Linux 上是开发者实验场。生产选型应使用 iGPU/GPU（ROCm/Vulkan）承担 AI 推理；NPU 路线应标记为“待 AMD Linux 栈成熟后重新评估”。目前虽然能成功调用计算驱动并执行算子，但驱动、固件和运行时之间的版本断裂，加上官方框架缺位，让它在 Linux 下并不能作为一个完整可用的产品。

## 测试环境

- 处理器：AMD Ryzen AI MAX+ 395（Strix Halo），XDNA2 NPU，标称 50 TOPS
- 平台：ZimaOS 1.7 及以上版本，内核 6.18.9
- NPU 的 PCI 设备 ID：`0x1022:0x17f0`

目标：在这台机器的 NPU 上跑一个小模型。

## 检测与启用

**检测**：`lspci` 确认存在 XDNA2 NPU。内核 `amdxdna` 驱动模块已加载，但 `/dev/accel/accel0` 未生成——因为缺固件。驱动要求 `amdnpu/17f0_11/npu.sbin`，全盘找不到。

**启用**：自编译 XRT 2.21.75。Ubuntu 仓库只有 2.13 旧版，因此走源码构建，用容器解决。踩掉两个坑后识别成功：

```text
$ xrt-smi examine
XRT  Version: 2.21.75 · amdxdna Version: 6.18.9 · NPU Firmware Version: 1.0.0.166
|BDF            |Name         |
|[0000:c7:00.1] |RyzenAI-npu5 |
```

有两个坑。

1. 容器必须加 `--ulimit memlock=-1`（默认 8MB 会导致设备映射失败）。
2. 需宿主预留 hugepages，并挂载 `/dev/hugepages`。宿主固件由 ZimaOS 的 `zimaos-driver` 管理（`/opt/zimaos/drivers/firmware/`）。

## 底层验证

pyxrt 可编程访问：

```text
$ python3 verify_pyxrt.py
device: <pyxrt.device object at 0x7f46d2a039f0>  ·  pyxrt roundtrip: OK
```

IRON/axpy 算子执行（mlir-aie 1.4.2，160 个测试全过）：

```text
$ python -m pytest test.py -x -q
============================= 160 passed in 36.22s =============================
```

NPU 完全启用、可编程调用、真实执行 AIE 算子。这是本机 NPU 能力的基线。

## 尝试一：官方 ONNX Runtime EP —— Linux 未启用

调研（AMD 官方文档 + 官方 issue 现状）：

- [onnxruntime 官方文档](https://onnxruntime.ai/docs/execution-providers/Vitis-AI-ExecutionProvider.html "官方 ONNX Runtime Vitis-AI Execution Provider 文档")：VitisAI EP 标注 "Ryzen AI Linux support is not enabled in this release"，AMD64 上仅 Windows 可用。
- AMD 官方 issue #319/#333/#341 全部处于 OPEN 且无回应（缺 `voe` 模块 / 缺 `onnxruntime_providers_ryzenai.so`）。
- AMD Ryzen AI 1.8 release notes：该版本 Linux 上不支持 model generation。

**结论**：官方推理框架路径在 Linux x86_64 上不存在，排除。

## 尝试二：FastFlowLM —— 被固件/驱动协议锁死

镜像构建成功（463MB）+ Llama-3.2-1B-NPU2 下载成功，但推理即中止：

```text
$ flm run llama3.2:1b
[FLM]  Prefill chunk 1/1 with 46 tokens
[ERROR]  Insertion error: runlist failed execution (ERT_CMD_STATE_ABORT)
```

`validate` 给出精确原因（固件与驱动版本双重不达标）：

```text
$ fastflowlm validate -j
{ "fw_build": 166, "fw_major": 1, "fw_minor": 0, "fw_ok": false,
  "drm_version": "0.1", "kernel_ok": false, "ready": false }
```

读其源码 `main.cpp` 确认硬性要求：固件必须 ≥ `1.1.0.0`；amdxdna 设备的 DRM 版本必须 ≥ `0.6`（主线驱动报告为 `0.1`）。

## 固件升级实验：协议 7 固件需要协议 7 驱动，闭环断裂

从 GitLab `kernel-firmware/drm-firmware` 的 amd-ipu-staging 分支找到新固件 `npu.sbin.1.1.2.65`（内置 "Release 1.1.2.65"，≥ 1.1.0.0）。装上升级后 probe 失败：

```text
$ dmesg | grep -iE "amdxdna.*protocol"
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_check_protocol: Incompatible firmware protocol major 7 minor 2
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_hw_start: firmware is not alive
```

读主线内核源码 `aie2_check_protocol`：固件的 protocol major 必须等于驱动的 `protocol_major`。主线 6.18.9 驱动（npu5）协议 = **6.12**；`1.1.2.65` 固件 = **协议 7** → 不兼容。已回滚，XRT/pyxrt 环境完好。

**关键发现**：驱动协议版本演进断裂——新固件（协议 7）需要新驱动（协议 7），而新驱动需要的协议 7 支持尚未进入任何稳定内核。查内核源码确认协议 7 支持只存在于未发布的 master（未来的 6.20/7.0）；6.18/6.19 稳定版均没有。

## 尝试三：树外驱动 —— ZimaOS 自定义内核加载不了

为获得协议 7 驱动，从 kernel.org 编出主线 6.18.9 头文件树，编译 xdna-driver 上游的 `amdxdna.ko`（vermagic 精确匹配），加载：

```text
$ insmod amdxdna.ko
insmod: ERROR: could not insert module ...: Unknown symbol in module
$ dmesg | grep amdxdna
amdxdna: Unknown symbol drm_gem_shmem_pin_locked (err -2)
amdxdna: Unknown symbol drm_gem_shmem_vmap_locked (err -2)  ...（共 13 个 drm_gem_shmem_* 符号缺失）
```

**根因**：ZimaOS 内核是 Buildroot 定制构建，其 `drm_shmem_helper` 与主线 6.18.9 源码不一致，AMD 官方树外驱动的 ABI 对不上。已回滚。至此 FastFlowLM 路线彻底关闭（固件→驱动→内核三连环断裂）。

## 尝试四：IRON Llama —— prefill 突破 + decode 最终墙

换路线：使用 mlir-aie/IRON 近金属工具链，它不依赖 FastFlowLM 或协议 7。从 amd/IRON 仓库搭环境（mlir_aie 1.4.2.dev16 + torch CPU + 算子依赖），模型经 ModelScope 下载，免去 HF token。

编译：全部 AIE 算子（RMSNorm/GEMM/GEMV/RoPE/Softmax/FFN）编译成功。

**prefill 成功**（完整 transformer 前向在 NPU 上执行，正确生成首个 token）：

```text
$ python llama_npu.py model.safetensors tokenizer.model --num-tokens 1 --prompt-len 13
SCENE I. King John
[Prefill] Time to first token: 2.022 s   [Total] Tokens per second: 0.495
```

**decode 失败**（连续生成被两层卡住）：

① 先缺 XRT API（2.21.75）：

```text
AttributeError: 'pyxrt.run' object has no attribute 'get_ctrl_scratchpad_bo'
```

② 自编 pyxrt 2.26 模块（从 fastflowlm 镜像抽取 XRT 2.26 libs + 对 xdna-driver 源码定向编译，已验证与主线驱动兼容：`get_ctrl_scratchpad_bo: True`，设备/BO 通信通过）后，fused 内核执行仍失败：

```text
RuntimeError: DRM_IOCTL_AMDXDNA_EXEC_CMD IOCTL failed (err=-22): Invalid argument
$ dmesg | grep amdxdna
amdxdna 0000:c7:00.1: [drm] *ERROR* amdxdna_cmd_submit: HW Context is not ready
```

读驱动源码 `amdxdna_ctx.c`：提交要求 hwctx 状态为 `READY`；decode 的 fused 内核经 ELF 加载 hwctx，这是一条新路径，主线 6.18.9 驱动无法让其达到 READY。

**结论**：prefill（真模型前向）在 NPU 上达成；decode（完整生成）被驱动版本锁死——与 FastFlowLM 是同一堵墙。

## 技术栈分层分析

| 层 | 成熟度 | 关键结论 | 对应证据 |
|---|---|---|---|
| 硬件层（XDNA2） | 成熟 | 量产 IP，8 列正常识别、可计算 | 检测与启用 |
| 内核驱动层（amdxdna） | 有限 | 协议 6.12 可用；协议 7 不进稳定内核；树外驱动加载不了 | 检测 / 固件升级实验 / 树外驱动 |
| 固件层 | 有限 | 1.0.x 绑定协议 6、1.1.x 绑定协议 7；新固件需新驱动 | 固件升级实验 |
| 用户态运行时（XRT） | 有限 | 2.21 与 2.26 版本割裂；新 API 依赖新版本 | IRON Llama |
| 推理框架层 | 未就绪 | 官方 EP 在 Linux 未启用；FastFlowLM 依赖版本巧合；IRON 近金属、非端到端 | 尝试一/二/四 |
| 模型格式层 | 有限 | 无通用格式或部署管线，各家专有编译链 | 尝试二/四 |
| 系统集成层 | 有限 | 发行版绑定严重；ZimaOS 定制内核 + 只读 /lib/modules 锁死升级 | 检测 / 树外驱动 |

## 阻塞点与根因归纳

1. **协议死锁**：新固件（协议 7）、新驱动（协议 7）、稳定内核（不支持协议 7）三者不闭环。
2. **官方框架缺位**：onnxruntime VitisAI EP 在 Linux x86_64 明确未启用，官方 issue 长期无回应、无路线图。
3. **发行版绑定**：ZimaOS 定制内核的 DRM 层与主线不一致，连 AMD 官方树外驱动都加载不了。
4. **生态割裂**：无标准模型格式或部署管线，模型编译依赖各家专有工具链。
5. **调试体验**：报错（EINVAL、协议不匹配、hwctx not ready）没有官方排障路径，全靠社区摸索。

## 平台成熟度对比

| 维度 | Windows | Linux（当前） |
|---|---|---|
| 官方 ONNX EP | 可用 | 未启用 |
| NPU 推理框架（whisper.cpp 等） | 可用 | "planned" |
| 驱动/固件版本管理 | 厂商统一 | 各发行版割裂 |
| 生产可用性 | 可用 | 未达工程验证 |

## 结论与决策建议

**技术结论**：NPU 硬件成熟、Windows 侧软件栈成熟。Linux 侧软件栈（驱动协议演进、官方框架、版本管理）处于开发阶段，未达工程验证。本机实测上限为：启用 + 可编程 + 执行算子 + 真模型 prefill；完整模型生成不可行。阻塞是软件问题（非硬件），理论上会随 AMD Linux 栈成熟而解除。

决策建议：

1. **生产选型**：Linux 上不要依赖 NPU 推理；用 iGPU/GPU（ROCm/Vulkan）承担 AI 推理——本机 llama.cpp + Vulkan 已在跑 14B~35B 模型。
2. **NPU 路线**：标记“待 AMD Linux 栈成熟后重新评估”。
3. **若坚持 NPU**：仅适合原型或低功耗边缘验证，需要专家级 IRON 开发，不是生产路径。
4. **技术储备**：本次环境（IRON、pyxrt 2.26、模型、内核头文件树）已存档，内核升级后可快速重试。

**观察点（解锁条件）**：

- [ ] 稳定内核（≥6.20/7.0）含协议 7 的 amdxdna
- [ ] AMD 发布 Linux 版 onnxruntime-vitisai / voe wheel
- [ ] ZimaOS 升级内核（届时 FastFlowLM / IRON decode 可能直接可用）
- [ ] whisper.cpp NPU 卸载支持 Linux

## 附录：实测资产清单（供内核升级后复用）

| 资产 | 位置 |
|---|---|
| IRON 环境（mlir_aie 1.4.2.dev16 + torch） | 容器 `npu-dev`，`/work/ironenv2/` |
| 自编 pyxrt 2.26 | `/work/pyxrt_build/build/` |
| XRT 2.26 libs（隔离） | `/work/xrt226/` |
| Llama-3.2-1B 模型 | `/DATA/npu-dev/llama-3.2-1b/` |
| 内核头文件树 | `/DATA/npu-dev/kernel-src/` |
| FastFlowLM 镜像 + 模型缓存 | `/DATA/npu-dev/fastflowlm/`、`/DATA/npu-dev/flm-cache/` |
| 固件/驱动备份与回滚脚本 | `/DATA/npu-dev/fw-backup/` |
