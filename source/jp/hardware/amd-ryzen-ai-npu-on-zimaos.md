---
title: ZimaOS で AMD Ryzen AI MAX+ 395 の NPU を試す
seo_title: "ZimaOS で AMD Ryzen AI MAX+ 395 の NPU を試す：実測と現実的な限界"
description: "ZimaOS（カーネル 6.18.9）上で AMD Ryzen AI MAX+ 395 の XDNA2 NPU を実機検証：NPU の有効化、ファームウェアとドライバーのバージョン固定、そして Linux で NPU ベースの AI 推論が今日使えるかどうかを解説します。"
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## 概要

この記事は、カーネル `6.18.9` の ZimaOS を実行するホスト上で、AMD Ryzen AI MAX+ 395 プロセッサの NPU で小さな AI モデルを動かす試みを記録したものです。XDNA2 NPU の有効化、ドライバーレベルでの検証、現実的な推論経路のすべてを試した過程を追います。その結果、この NPU が Linux 上で今日何ができて何ができないのか、そしてその理由が明確になります。

## TL;DR

AMD XDNA2 NPU の Linux 向け推論ソフトウェアスタックは、エンジニアリング検証の閾値を超えておらず、まだ本番環境として使用できません。すべての障壁はハードウェアそのものではなく、Linux 側の AMD ソフトウェアの成熟度に起因しています。

| 観点 | 判定 | 1 行の根拠 |
|---|---|---|
| NPU ハードウェア | 成熟 | 量産 IP。このホストで正しく検出され、計算可能 |
| Windows ソフトウェアスタック | 成熟 | 公式 ONNX Runtime EP と whisper.cpp が動作 |
| Linux ソフトウェアスタック | 本番未対応 | ドライバー・ファームウェア・ランタイムのバージョン連鎖が破綻。公式フレームワーク不在 |
| ローカルで到達した最高状態 | 有効化 + プログラマブル + 演算子実行 + 実モデル prefill | 完全なモデル生成はドライバーバージョンにロックされている |

NPU は Windows では製品、Linux では開発者の遊び場です。本番では AI 推論に iGPU/dGPU（ROCm または Vulkan）を使い、NPU 経路は「AMD の Linux スタックが成熟したら再評価」とマークしてください。現時点ではコンピュートドライバーの起動と演算子の実行まではできますが、ファームウェア・ドライバー・ランタイム間のバージョン断絶と公式フレームワークの不在により、NPU は Linux 上で完全な製品としては機能しません。

## テスト環境

- プロセッサ: AMD Ryzen AI MAX+ 395（Strix Halo）、XDNA2 NPU、定格 50 TOPS
- プラットフォーム: ZimaOS 1.7 以降、カーネル `6.18.9`
- NPU の PCI デバイス ID: `0x1022:0x17f0`

目標: このホストの NPU 上で小さなモデルを動かすこと。

## 検出と有効化

検出: `lspci` で XDNA2 NPU を確認。カーネルモジュール `amdxdna` はロードされますが、ファームウェアが存在しないため `/dev/accel/accel0` は作成されません。ドライバーは `amdnpu/17f0_11/npu.sbin` を期待しますが、このファイルはディスクのどこにも存在しません。

有効化: XRT をソースからビルドしてバージョン `2.21.75` にしました（Ubuntu リポジトリには `2.13` しかありません）。ビルドにはコンテナを使用。2 つの落とし穴を回避した後、NPU が認識されます：

```text
$ xrt-smi examine
XRT  Version: 2.21.75 · amdxdna Version: 6.18.9 · NPU Firmware Version: 1.0.0.166
|BDF            |Name         |
|[0000:c7:00.1] |RyzenAI-npu5 |
```

落とし穴は 2 つありました。

1. コンテナは `--ulimit memlock=-1` で起動する必要があります。デフォルトの 8 MB 制限ではデバイスマッピングが失敗します。
2. ホストで hugepages を予約し、`/dev/hugepages` をマウントする必要があります。ホストのファームウェアは ZimaOS の `zimaos-driver` パッケージ（`/opt/zimaos/drivers/firmware/`）が管理しています。

## 低レベル検証

pyxrt によるプログラマブルアクセス：

```text
$ python3 verify_pyxrt.py
device: <pyxrt.device object at 0x7f46d2a039f0>  ·  pyxrt roundtrip: OK
```

IRON/axpy 演算子の実行（mlir-aie 1.4.2、160 テストすべて合格）：

```text
$ python -m pytest test.py -x -q
============================= 160 passed in 36.22s =============================
```

NPU は完全に有効化され、プログラマブルにアドレス指定でき、実際に AIE 演算子を実行します。これがこのホストにおける NPU 能力のベースラインです。

## 試行 1：公式 ONNX Runtime EP —— Linux では未有効

AMD 公式ドキュメントと公式 issue トラッカーからの調査：

- [ONNX Runtime Vitis-AI Execution Provider ドキュメント](https://onnxruntime.ai/docs/execution-providers/Vitis-AI-ExecutionProvider.html "公式 ONNX Runtime Vitis-AI Execution Provider ドキュメント")には「Ryzen AI Linux support is not enabled in this release」とあり、このプロバイダーは AMD64 では Windows 専用です。
- AMD 公式 issue #319/#333/#341 はすべて OPEN のまま応答なし（`voe` モジュール欠落 / `onnxruntime_providers_ryzenai.so` 欠落）。
- AMD Ryzen AI 1.8 リリースノート：「Model generation is not supported on Linux in this release.」

**結論**: 公式推論フレームワーク経路は Linux x86_64 には存在しません。このルートは除外されます。

## 試行 2：FastFlowLM —— ファームウェア/ドライバープロトコルにロックされる

イメージのビルドは成功（463 MB）、Llama-3.2-1B-NPU2 のダウンロードも成功しましたが、推論は即座に中断します：

```text
$ flm run llama3.2:1b
[FLM]  Prefill chunk 1/1 with 46 tokens
[ERROR]  Insertion error: runlist failed execution (ERT_CMD_STATE_ABORT)
```

`validate` が正確な理由を報告します（ファームウェアとドライバーの両方がバージョン不適合）：

```text
$ fastflowlm validate -j
{ "fw_build": 166, "fw_major": 1, "fw_minor": 0, "fw_ok": false,
  "drm_version": "0.1", "kernel_ok": false, "ready": false }
```

FastFlowLM の `main.cpp` ソースを読むと、その必須要件が確認できます：ファームウェアは最低 `1.1.0.0`、`amdxdna` デバイスの DRM バージョンは最低 `0.6`（メインラインドライバーは `0.1` を報告）。

## ファームウェアアップグレード実験：プロトコルの行き詰まり

kernel-firmware/drm-firmware GitLab プロジェクトの amd-ipu-staging ブランチで、より新しいファームウェア `npu.sbin.1.1.2.65`（「Release 1.1.2.65」を内蔵、1.1.0.0 以上）が見つかりました。インストール後、probe が失敗します：

```text
$ dmesg | grep -iE "amdxdna.*protocol"
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_check_protocol: Incompatible firmware protocol major 7 minor 2
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_hw_start: firmware is not alive
```

メインラインカーネルソースの `aie2_check_protocol` を読むと：ファームウェアのプロトコル major はドライバーの `protocol_major` と等しくなければなりません。メインライン `6.18.9` ドライバー（npu5）はプロトコル **6.12** を使用し、ファームウェア `1.1.2.65` はプロトコル **7** を話すため、互換性がありません。変更はロールバックされ、XRT/pyxrt 環境は無傷です。

**重要な発見**: ドライバーのプロトコルバージョンはリリース間で破綻しています。新しいファームウェア（プロトコル 7）には新しいドライバー（プロトコル 7）が必要で、そのドライバーにはまだどの安定ブランチにも入っていないカーネルが必要です。カーネルソースから、プロトコル 7 のサポートは未リリースの master（将来の 6.20/7.0）にのみ存在し、6.18/6.19 安定版にはないことが確認できます。

## 試行 3：ツリー外ドライバー —— ZimaOS のカスタムカーネルではロードできない

プロトコル 7 のドライバーを得るため、kernel.org からメインライン `6.18.9` のヘッダーツリーをビルドし、上流 xdna-driver の `amdxdna.ko` を vermagic 完全一致でコンパイルしました。ロードは失敗します：

```text
$ insmod amdxdna.ko
insmod: ERROR: could not insert module ...: Unknown symbol in module
$ dmesg | grep amdxdna
amdxdna: Unknown symbol drm_gem_shmem_pin_locked (err -2)
amdxdna: Unknown symbol drm_gem_shmem_vmap_locked (err -2)  ... (13 drm_gem_shmem_* symbols missing in total)
```

**根本原因**: ZimaOS カーネルは Buildroot のカスタムビルドで、その `drm_shmem_helper` がメインライン `6.18.9` ソースと一致しないため、AMD 公式ツリー外ドライバーの ABI が合いません。これはロールバックされました。これで FastFlowLM ルートは完全に閉じました（ファームウェア・ドライバー・カーネルが壊れた連鎖を形成）。

## 試行 4：IRON Llama —— prefill で突破口、decode で最終的な壁

FastFlowLM やプロトコル 7 に依存しない mlir-aie/IRON ニアメタルツールチェーンで別ルートを取りました。環境は amd/IRON リポジトリから構築し（mlir_aie 1.4.2.dev16 + CPU 専用 torch + 演算子依存関係）、モデルは HF トークンを避けるため ModelScope 経由でダウンロードしました。

コンパイル: すべての AIE 演算子（RMSNorm/GEMM/GEMV/RoPE/Softmax/FFN）がコンパイルに成功。

Prefill は成功 —— 完全な transformer フォワードパスが NPU 上で実行され、最初のトークンを正しく生成します：

```text
$ python llama_npu.py model.safetensors tokenizer.model --num-tokens 1 --prompt-len 13
SCENE I. King John
[Prefill] Time to first token: 2.022 s   [Total] Tokens per second: 0.495
```

Decode は失敗し、2 つの層でブロックされます：

まず、XRT API（2.21.75）に欠落があります：

```text
AttributeError: 'pyxrt.run' object has no attribute 'get_ctrl_scratchpad_bo'
```

次に、pyxrt 2.26 モジュールを自前ビルド（FastFlowLM イメージから抽出した XRT 2.26 libs + xdna-driver ソースの狙い撃ちビルド。メインラインドライバーとの互換性を検証済み：`get_ctrl_scratchpad_bo: True`、デバイス/BO 通信も通過）した後でも、fused カーネルの実行は失敗します：

```text
RuntimeError: DRM_IOCTL_AMDXDNA_EXEC_CMD IOCTL failed (err=-22): Invalid argument
$ dmesg | grep amdxdna
amdxdna 0000:c7:00.1: [drm] *ERROR* amdxdna_cmd_submit: HW Context is not ready
```

ドライバーソース `amdxdna_ctx.c` を読むと：送信には hwctx 状態 `READY` が必要です。decode の fused カーネルは ELF 経由で hwctx をロードしますが、これは新しい経路であり、メインライン `6.18.9` ドライバーは READY に到達させることができません。

**結論**: NPU 上での prefill（実モデルのフォワードパス）は達成。decode（完全な生成）はドライバーバージョンにロックされています —— FastFlowLM と同じ壁です。

## レイヤー別ソフトウェアスタック分析

| レイヤー | 成熟度 | 主要な結論 | 根拠 |
|---|---|---|---|
| ハードウェア（XDNA2） | 準備完了 | 量産 IP。8 列すべて検出され、計算可能 | 検出と有効化 |
| カーネルドライバー（amdxdna） | 限定的 | プロトコル 6.12 は動作。プロトコル 7 は安定カーネルに入らず。ツリー外ドライバーはロード不可 | 検出 / アップグレード実験 / ツリー外ドライバー |
| ファームウェア | 限定的 | 1.0.x はプロトコル 6、1.1.x はプロトコル 7 に縛られる。新しいファームウェアには新しいドライバーが必要 | ファームウェアアップグレード実験 |
| ユーザー空間ランタイム（XRT） | 限定的 | 2.21 と 2.26 が分裂。新しい API は新しいバージョンに依存 | IRON Llama |
| 推論フレームワーク | 未準備 | 公式 EP は Linux で未有効。FastFlowLM はバージョン一致に依存。IRON はニアメタルでエンドツーエンドではない | 試行 1、2、4 |
| モデル形式 | 限定的 | 汎用形式やデプロイパイプラインが存在しない。各ベンダーが独自コンパイルチェーンを持つ | 試行 2、4 |
| システム統合 | 限定的 | ディストリビューションへの強い依存。ZimaOS のカスタムカーネルと読み取り専用 /lib/modules がアップグレードをロック | 検出 / ツリー外ドライバー |

## 障壁と根本原因

1. **プロトコルの行き詰まり**: 新しいファームウェア（プロトコル 7）、新しいドライバー（プロトコル 7）、安定カーネル（プロトコル 7 なし）が閉ループを形成しない。
2. **公式フレームワーク不在**: ONNX Runtime Vitis-AI EP は Linux x86_64 で明示的に未有効。公式 issue は応答なし、ロードマップなし。
3. **ディストリビューション依存**: ZimaOS のカスタムカーネルの DRM 層がメインラインと異なるため、AMD 公式ツリー外ドライバーすらロードできない。
4. **エコシステムの断片化**: 標準のモデル形式やデプロイパイプラインがなく、モデルコンパイルは各ベンダーの独自ツールチェーンに依存。
5. **デバッグ体験**: エラー（EINVAL、プロトコル不一致、「hwctx not ready」）に公式のトラブルシューティング経路がなく、コミュニティが解決している。

## プラットフォーム成熟度の比較

| 観点 | Windows | Linux（現状） |
|---|---|---|
| 公式 ONNX EP | 準備完了 | 未有効 |
| NPU 推論フレームワーク（whisper.cpp など） | 準備完了 | 「Planned」 |
| ドライバー/ファームウェアのバージョン管理 | ベンダー管理 | ディストリビューションごとに断片化 |
| 本番での可用性 | 準備完了 | エンジニアリング検証を超えていない |

## 結論と推奨事項

**技術的結論**: NPU ハードウェアは成熟しており、Windows ソフトウェアスタックも成熟しています。Linux ソフトウェアスタック（ドライバープロトコルの進化、公式フレームワーク、バージョン管理）は活発に開発中で、エンジニアリング検証を通過していません。ローカルで到達した最高状態は「有効化 + プログラマブル + 演算子実行 + 実モデル prefill」であり、完全なモデル生成は不可能です。障壁はハードウェアではなくソフトウェアであり、理論上は AMD の Linux スタックの成熟とともに解消されるはずです。

推奨事項：

1. **本番選定**: Linux では NPU 推論に依存しないでください。AI 推論には iGPU/dGPU（ROCm または Vulkan）を使用してください —— llama.cpp + Vulkan はすでにこのホストで 14B から 35B のモデルを実行しています。
2. **NPU ロードマップ**: 「AMD の Linux スタックが成熟したら再評価」とマークしてください。
3. **どうしても NPU を使う場合**: プロトタイピングまたは低電力エッジ検証のみに適しており、専門家レベルの IRON 開発が必要です。本番経路ではありません。
4. **技術的備蓄**: この環境（IRON、pyxrt 2.26、モデル、カーネルヘッダーツリー）はアーカイブ済みで、カーネルアップグレード後にすぐ再試行できます。

**アンロック条件（チェックリスト）**：

- [ ] 安定カーネル（6.20/7.0 以降）がプロトコル 7 の amdxdna を搭載
- [ ] AMD が Linux 向け onnxruntime-vitisai / voe wheel をリリース
- [ ] ZimaOS がカーネルをアップグレード（FastFlowLM または IRON decode が直接動く可能性）
- [ ] whisper.cpp の NPU オフロードが Linux をサポート

## 付録：検証済みアセット（カーネルアップグレード後の再利用用）

| アセット | 場所 |
|---|---|
| IRON 環境（mlir_aie 1.4.2.dev16 + torch） | コンテナ `npu-dev`、`/work/ironenv2/` |
| 自前ビルドの pyxrt 2.26 | `/work/pyxrt_build/build/` |
| XRT 2.26 libs（隔離） | `/work/xrt226/` |
| Llama-3.2-1B モデル | `/DATA/npu-dev/llama-3.2-1b/` |
| カーネルヘッダーツリー | `/DATA/npu-dev/kernel-src/` |
| FastFlowLM イメージとモデルキャッシュ | `/DATA/npu-dev/fastflowlm/`、`/DATA/npu-dev/flm-cache/` |
| ファームウェア/ドライバーのバックアップとロールバックスクリプト | `/DATA/npu-dev/fw-backup/` |
