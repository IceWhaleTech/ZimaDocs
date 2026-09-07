---
title: ZimaOS on AMD Ryzen AI MAX+ 395 NPU
seo_title: "ZimaOS on AMD Ryzen AI MAX+ 395 NPU: Hands-On Test and Real-World Limits"
description: "A hands-on evaluation of the AMD Ryzen AI MAX+ 395 XDNA2 NPU on ZimaOS (kernel 6.18.9). Covers NPU enablement, firmware and driver version locks, and whether NPU-based AI inference is usable on Linux today."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Overview

This article documents a hands-on attempt to run a small AI model on the NPU of an AMD Ryzen AI MAX+ 395 processor while running ZimaOS on kernel `6.18.9`. It walks through enabling the XDNA2 NPU, validating it at the driver level, and trying every realistic inference path. The result is a clear picture of what the NPU can and cannot do on Linux today, and why.

## TL;DR

The AMD XDNA2 NPU inference software stack on Linux has not passed the engineering-validation threshold and cannot yet be used as a production environment. Every blocker comes from AMD software maturity on the Linux side, not from the hardware itself.

| Dimension | Verdict | One-line basis |
|---|---|---|
| NPU hardware | Mature | Production IP, correctly detected and compute-capable on this host |
| Windows software stack | Mature | Official ONNX Runtime EP and whisper.cpp both work |
| Linux software stack | Not production-ready | Driver/firmware/runtime version chain is broken; official frameworks absent |
| Highest state reached locally | Enabled + programmable + executes operators + real-model prefill | Full model generation is locked by the driver version |

On Windows the NPU is a product; on Linux it is a developer playground. For production, use the iGPU/dGPU (ROCm or Vulkan) for AI inference and mark the NPU path as "re-evaluate once the AMD Linux stack matures." Today you can bring up the compute driver and run operators, but version breaks between firmware, driver and runtime, plus the absence of official frameworks, keep the NPU from working as a complete product on Linux.

## Test environment

- Processor: AMD Ryzen AI MAX+ 395 (Strix Halo), XDNA2 NPU rated at 50 TOPS
- Platform: ZimaOS 1.7 or later, kernel `6.18.9`
- PCI device ID of the NPU: `0x1022:0x17f0`

Objective: run a small model on the NPU of this host.

## Detection and enablement

Detection: `lspci` confirms an XDNA2 NPU. The kernel `amdxdna` driver module loads, but `/dev/accel/accel0` is not created because the firmware is missing. The driver expects `amdnpu/17f0_11/npu.sbin`, which does not exist anywhere on disk.

Enablement: XRT was built from source as version `2.21.75` (the Ubuntu repository only ships `2.13`), with a container used for the build. After working around two pitfalls the NPU is recognized:

```text
$ xrt-smi examine
XRT  Version: 2.21.75 · amdxdna Version: 6.18.9 · NPU Firmware Version: 1.0.0.166
|BDF            |Name         |
|[0000:c7:00.1] |RyzenAI-npu5 |
```

There were two pitfalls.

1. The container must be started with `--ulimit memlock=-1`; the default 8 MB limit causes device mapping to fail.
2. The host must reserve hugepages and mount `/dev/hugepages`. Host firmware is managed by the ZimaOS `zimaos-driver` package under `/opt/zimaos/drivers/firmware/`.

## Low-level verification

Programmable access through pyxrt:

```text
$ python3 verify_pyxrt.py
device: <pyxrt.device object at 0x7f46d2a039f0>  ·  pyxrt roundtrip: OK
```

IRON/axpy operator execution (mlir-aie 1.4.2, all 160 tests pass):

```text
$ python -m pytest test.py -x -q
============================= 160 passed in 36.22s =============================
```

The NPU is fully enabled, programmably addressable, and truly executes AIE operators. This is the baseline of the NPU capability on this host.

## Attempt 1: Official ONNX Runtime Execution Provider - not enabled on Linux

Research from AMD official documentation and official issue trackers:

- The [ONNX Runtime Vitis-AI Execution Provider documentation](https://onnxruntime.ai/docs/execution-providers/Vitis-AI-ExecutionProvider.html "Official ONNX Runtime Vitis-AI Execution Provider documentation") states "Ryzen AI Linux support is not enabled in this release" — the provider is Windows-only for AMD64.
- AMD official issues #319/#333/#341 all remain open with no response (missing `voe` module / missing `onnxruntime_providers_ryzenai.so`).
- The AMD Ryzen AI 1.8 release notes state: "Model generation is not supported on Linux in this release."

**Conclusion**: the official inference-framework path does not exist on Linux x86_64. This route is ruled out.

## Attempt 2: FastFlowLM - locked by the firmware/driver protocol

The image builds successfully (463 MB) and Llama-3.2-1B-NPU2 downloads correctly, but inference aborts immediately:

```text
$ flm run llama3.2:1b
[FLM]  Prefill chunk 1/1 with 46 tokens
[ERROR]  Insertion error: runlist failed execution (ERT_CMD_STATE_ABORT)
```

`validate` reports the precise reason (firmware and driver versions both fail):

```text
$ fastflowlm validate -j
{ "fw_build": 166, "fw_major": 1, "fw_minor": 0, "fw_ok": false,
  "drm_version": "0.1", "kernel_ok": false, "ready": false }
```

Reading the FastFlowLM `main.cpp` source confirms its hard requirements: firmware must be at least `1.1.0.0`, and the `amdxdna` device DRM version must be at least `0.6` (the mainline driver reports `0.1`).

## Firmware upgrade experiment: the protocol deadlock

A newer firmware `npu.sbin.1.1.2.65` (built-in "Release 1.1.2.65", which is greater than or equal to 1.1.0.0) was located in the amd-ipu-staging branch of the kernel-firmware/drm-firmware GitLab project. After installing it, the probe fails:

```text
$ dmesg | grep -iE "amdxdna.*protocol"
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_check_protocol: Incompatible firmware protocol major 7 minor 2
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_hw_start: firmware is not alive
```

Reading the mainline kernel source in `aie2_check_protocol`: the firmware protocol major must equal the driver `protocol_major`. The mainline `6.18.9` driver (npu5) uses protocol **6.12**; firmware `1.1.2.65` speaks protocol **7**, so they are incompatible. The change was rolled back and the XRT/pyxrt environment is intact.

**Key finding**: the driver protocol version is broken across releases. New firmware (protocol 7) needs a new driver (protocol 7), which needs a kernel that does not ship in any stable branch yet. Kernel source confirms protocol 7 support exists only in unreleased master (future 6.20/7.0); the 6.18/6.19 stable kernels do not have it.

## Attempt 3: Out-of-tree driver - the custom ZimaOS kernel will not load it

To obtain a protocol-7 driver, the mainline `6.18.9` header tree was built from kernel.org and the upstream xdna-driver `amdxdna.ko` was compiled with an exact vermagic match. Loading it fails:

```text
$ insmod amdxdna.ko
insmod: ERROR: could not insert module ...: Unknown symbol in module
$ dmesg | grep amdxdna
amdxdna: Unknown symbol drm_gem_shmem_pin_locked (err -2)
amdxdna: Unknown symbol drm_gem_shmem_vmap_locked (err -2)  ... (13 drm_gem_shmem_* symbols missing in total)
```

**Root cause**: the ZimaOS kernel is a Buildroot custom build whose `drm_shmem_helper` does not match mainline `6.18.9` source, so the AMD official out-of-tree driver ABI does not line up. This was rolled back. With this, the FastFlowLM route is fully closed (firmware, driver and kernel form a broken chain).

## Attempt 4: IRON Llama - a breakthrough on prefill, then a final wall on decode

A different route was taken with the mlir-aie/IRON near-metal toolchain, which does not depend on FastFlowLM or protocol 7. The environment was built from the amd/IRON repository (mlir_aie 1.4.2.dev16 plus a CPU-only torch and operator dependencies), and the model was downloaded through ModelScope to avoid needing an HF token.

Compilation: all AIE operators (RMSNorm/GEMM/GEMV/RoPE/Softmax/FFN) compile successfully.

Prefill succeeds - a full transformer forward pass executes on the NPU and correctly produces the first token:

```text
$ python llama_npu.py model.safetensors tokenizer.model --num-tokens 1 --prompt-len 13
SCENE I. King John
[Prefill] Time to first token: 2.022 s   [Total] Tokens per second: 0.495
```

Decode fails, blocked at two layers:

First, the XRT API (2.21.75) is missing:

```text
AttributeError: 'pyxrt.run' object has no attribute 'get_ctrl_scratchpad_bo'
```

Second, after self-compiling a pyxrt 2.26 module (XRT 2.26 libs extracted from the FastFlowLM image plus a targeted xdna-driver source build, verified compatible with the mainline driver: `get_ctrl_scratchpad_bo: True` and device/BO communication pass), the fused kernel still fails to execute:

```text
RuntimeError: DRM_IOCTL_AMDXDNA_EXEC_CMD IOCTL failed (err=-22): Invalid argument
$ dmesg | grep amdxdna
amdxdna 0000:c7:00.1: [drm] *ERROR* amdxdna_cmd_submit: HW Context is not ready
```

Reading the driver source in `amdxdna_ctx.c`: submission requires the hwctx state `READY`; the decode fused kernel loads hwctx through ELF, a new path that the mainline `6.18.9` driver cannot bring to READY.

**Conclusion**: prefill (real model forward pass) on the NPU is achieved; decode (full generation) is locked by the driver version — the same wall as FastFlowLM.

## Software-stack analysis by layer

| Layer | Maturity | Key conclusion | Evidence |
|---|---|---|---|
| Hardware (XDNA2) | Ready | Production IP, all 8 columns detected and compute-capable | Detection & enablement |
| Kernel driver (amdxdna) | Limited | Protocol 6.12 works; protocol 7 never enters a stable kernel; out-of-tree driver will not load | Detection / upgrade experiment / out-of-tree driver |
| Firmware | Limited | 1.0.x is bound to protocol 6, 1.1.x to protocol 7; new firmware needs a new driver | Firmware upgrade experiment |
| Userspace runtime (XRT) | Limited | 2.21 and 2.26 are split; new APIs depend on new versions | IRON Llama |
| Inference framework | Not ready | Official EP not enabled on Linux; FastFlowLM depends on a version coincidence; IRON is near-metal and not end-to-end | Attempts 1, 2, 4 |
| Model format | Limited | No universal format or deployment pipeline; every vendor has a proprietary compile chain | Attempts 2, 4 |
| System integration | Limited | Strong distribution binding; the ZimaOS custom kernel and read-only /lib/modules lock upgrades | Detection / out-of-tree driver |

## Blockers and root causes

1. **Protocol deadlock**: new firmware (protocol 7), a new driver (protocol 7) and a stable kernel (no protocol 7) do not form a closed loop.
2. **No official framework**: the ONNX Runtime Vitis-AI EP is explicitly not enabled on Linux x86_64, and official issues go unanswered with no roadmap.
3. **Distribution binding**: the ZimaOS custom kernel DRM layer differs from mainline, so even the AMD official out-of-tree driver cannot load.
4. **Ecosystem fragmentation**: there is no standard model format or deployment pipeline; model compilation depends on each vendor's proprietary toolchain.
5. **Debugging experience**: errors (EINVAL, protocol mismatch, "hwctx not ready") have no official troubleshooting path and are worked out by the community.

## Platform maturity comparison

| Dimension | Windows | Linux (current) |
|---|---|---|
| Official ONNX EP | Ready | Not enabled |
| NPU inference frameworks (whisper.cpp and similar) | Ready | "Planned" |
| Driver/firmware version management | Vendor-managed | Fragmented across distributions |
| Production usability | Ready | Not past engineering validation |

## Conclusion and recommendations

**Technical conclusion**: the NPU hardware is mature and the Windows software stack is mature. The Linux software stack (driver protocol evolution, official frameworks, version management) is in active development and has not passed engineering validation. The highest state reached locally is enable + programmable + execute operators + real-model prefill; full model generation is not achievable. The blocker is software, not hardware, and should in theory lift as the AMD Linux stack matures.

Recommendations:

1. **Production selection**: on Linux, do not depend on NPU inference. Use the iGPU/dGPU (ROCm or Vulkan) for AI inference — llama.cpp with Vulkan already runs 14B to 35B models on this host.
2. **NPU roadmap**: mark it "re-evaluate once the AMD Linux stack matures."
3. **If you insist on the NPU**: it is only suitable for prototyping or low-power edge validation and requires expert-level IRON development; it is not a production path.
4. **Technical reserve**: this environment (IRON, pyxrt 2.26, models, kernel header tree) is archived and can be retried quickly after a kernel upgrade.

**Unlock conditions (checklist)**:

- [ ] A stable kernel (6.20/7.0 or later) ships protocol-7 amdxdna
- [ ] AMD releases a Linux onnxruntime-vitisai / voe wheel
- [ ] ZimaOS upgrades its kernel (FastFlowLM or IRON decode may then work directly)
- [ ] whisper.cpp NPU-offload gains Linux support

## Appendix: verified assets (for reuse after a kernel upgrade)

| Asset | Location |
|---|---|
| IRON environment (mlir_aie 1.4.2.dev16 + torch) | container `npu-dev`, `/work/ironenv2/` |
| Self-built pyxrt 2.26 | `/work/pyxrt_build/build/` |
| XRT 2.26 libs (isolated) | `/work/xrt226/` |
| Llama-3.2-1B model | `/DATA/npu-dev/llama-3.2-1b/` |
| Kernel header tree | `/DATA/npu-dev/kernel-src/` |
| FastFlowLM image and model cache | `/DATA/npu-dev/fastflowlm/`, `/DATA/npu-dev/flm-cache/` |
| Firmware/driver backup and rollback scripts | `/DATA/npu-dev/fw-backup/` |
