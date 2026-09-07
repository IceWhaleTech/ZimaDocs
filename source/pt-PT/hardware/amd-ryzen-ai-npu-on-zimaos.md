---
title: ZimaOS na NPU AMD Ryzen AI MAX+ 395
seo_title: "ZimaOS na NPU AMD Ryzen AI MAX+ 395: teste prático e limites reais"
description: "Uma avaliação prática da NPU AMD Ryzen AI MAX+ 395 (XDNA2) no ZimaOS (kernel 6.18.9). Aborda a ativação da NPU, os bloqueios de versão de firmware e controladores, e se a inferência de IA baseada na NPU é utilizável hoje no Linux."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

Este artigo documenta uma tentativa prática de executar um pequeno modelo de IA na NPU de um processador AMD Ryzen AI MAX+ 395 com o ZimaOS no kernel `6.18.9`. Percorre a ativação da NPU XDNA2, a sua validação ao nível do controlador e o teste de todos os caminhos de inferência realistas. O resultado é uma imagem clara do que a NPU pode e não pode fazer hoje no Linux, e porquê.

## TL;DR

A pilha de software de inferência da NPU AMD XDNA2 no Linux não passou o limiar de validação de engenharia e ainda não pode ser usada como ambiente de produção. Todos os bloqueios vêm da maturidade do software da AMD no lado Linux, não do hardware em si.

| Dimensão | Veredito | Base numa linha |
|---|---|---|
| Hardware da NPU | Maduro | IP de produção, corretamente detetado e capaz de computar neste host |
| Pilha de software do Windows | Madura | O EP oficial do ONNX Runtime e o whisper.cpp funcionam |
| Pilha de software do Linux | Não pronta para produção | A cadeia controlador/firmware/runtime está partida; faltam as frameworks oficiais |
| Estado mais alto alcançado localmente | Ativada + programável + executa operadores + prefill de modelo real | A geração completa do modelo está bloqueada pela versão do controlador |

No Windows a NPU é um produto; no Linux é um campo de jogos para programadores. Para produção, use a iGPU/dGPU (ROCm ou Vulkan) para a inferência de IA e marque o caminho da NPU como "reavaliar quando a pilha da AMD no Linux amadurecer". Hoje consegue levantar o controlador de computação e executar operadores, mas as ruturas de versão entre firmware, controlador e runtime, juntamente com a ausência de frameworks oficiais, impedem que a NPU funcione como um produto completo no Linux.

## Ambiente de teste

- Processador: AMD Ryzen AI MAX+ 395 (Strix Halo), NPU XDNA2 com 50 TOPS nominais
- Plataforma: ZimaOS 1.7 ou posterior, kernel `6.18.9`
- ID do dispositivo PCI da NPU: `0x1022:0x17f0`

Objetivo: executar um pequeno modelo na NPU deste host.

## Deteção e ativação

Deteção: o `lspci` confirma uma NPU XDNA2. O módulo do kernel `amdxdna` carrega, mas o `/dev/accel/accel0` não é criado porque falta o firmware. O controlador espera `amdnpu/17f0_11/npu.sbin`, que não existe em lado nenhum do disco.

Ativação: o XRT foi compilado a partir do código-fonte como versão `2.21.75` (o repositório do Ubuntu só traz a `2.13`), usando um contentor para a compilação. Depois de contornar duas armadilhas, a NPU fica reconhecida:

```text
$ xrt-smi examine
XRT  Version: 2.21.75 · amdxdna Version: 6.18.9 · NPU Firmware Version: 1.0.0.166
|BDF            |Name         |
|[0000:c7:00.1] |RyzenAI-npu5 |
```

Houve duas armadilhas.

1. O contentor tem de arrancar com `--ulimit memlock=-1`; o limite predefinido de 8 MB faz falhar o mapeamento do dispositivo.
2. O host tem de reservar hugepages e montar `/dev/hugepages`. O firmware do host é gerido pelo pacote `zimaos-driver` do ZimaOS em `/opt/zimaos/drivers/firmware/`.

## Verificação de baixo nível

Acesso programável através do pyxrt:

```text
$ python3 verify_pyxrt.py
device: <pyxrt.device object at 0x7f46d2a039f0>  ·  pyxrt roundtrip: OK
```

Execução do operador IRON/axpy (mlir-aie 1.4.2, os 160 testes passam):

```text
$ python -m pytest test.py -x -q
============================= 160 passed in 36.22s =============================
```

A NPU está totalmente ativada, é programável e executa mesmo operadores AIE. Esta é a linha de base da capacidade da NPU neste host.

## Tentativa 1: EP oficial do ONNX Runtime - não ativado no Linux

Investigação a partir da documentação oficial da AMD e dos issue trackers oficiais:

- A [documentação do Execution Provider Vitis-AI do ONNX Runtime](https://onnxruntime.ai/docs/execution-providers/Vitis-AI-ExecutionProvider.html "Documentação oficial do Execution Provider Vitis-AI do ONNX Runtime") indica "Ryzen AI Linux support is not enabled in this release" — o provider só está disponível no Windows para AMD64.
- Os issues oficiais da AMD #319/#333/#341 continuam abertos sem resposta (falta o módulo `voe` / falta o `onnxruntime_providers_ryzenai.so`).
- As notas da versão AMD Ryzen AI 1.8 indicam: "Model generation is not supported on Linux in this release."

**Conclusão**: o caminho da framework de inferência oficial não existe no Linux x86_64. Esta via fica descartada.

## Tentativa 2: FastFlowLM - bloqueado pelo protocolo firmware/controlador

A imagem compila corretamente (463 MB) e o Llama-3.2-1B-NPU2 é descarregado sem problemas, mas a inferência aborta de imediato:

```text
$ flm run llama3.2:1b
[FLM]  Prefill chunk 1/1 with 46 tokens
[ERROR]  Insertion error: runlist failed execution (ERT_CMD_STATE_ABORT)
```

O `validate` informa o motivo exato (as versões de firmware e de controlador falham ambas):

```text
$ fastflowlm validate -j
{ "fw_build": 166, "fw_major": 1, "fw_minor": 0, "fw_ok": false,
  "drm_version": "0.1", "kernel_ok": false, "ready": false }
```

A leitura do código-fonte `main.cpp` do FastFlowLM confirma os seus requisitos estritos: o firmware tem de ser pelo menos `1.1.0.0`, e a versão DRM do dispositivo `amdxdna` tem de ser pelo menos `0.6` (o controlador mainline reporta `0.1`).

## Experiência de atualização do firmware: o impasse do protocolo

Foi localizado um firmware mais recente `npu.sbin.1.1.2.65` (incorpora "Release 1.1.2.65", maior ou igual a 1.1.0.0) no ramo amd-ipu-staging do projeto kernel-firmware/drm-firmware do GitLab. Depois de o instalar, o probe falha:

```text
$ dmesg | grep -iE "amdxdna.*protocol"
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_check_protocol: Incompatible firmware protocol major 7 minor 2
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_hw_start: firmware is not alive
```

Lendo o código-fonte do kernel mainline em `aie2_check_protocol`: o protocol major do firmware tem de ser igual ao `protocol_major` do controlador. O controlador mainline `6.18.9` (npu5) usa o protocolo **6.12**; o firmware `1.1.2.65` fala o protocolo **7**, pelo que são incompatíveis. A alteração foi revertida e o ambiente XRT/pyxrt ficou intacto.

**Descoberta-chave**: a versão do protocolo do controlador está partida entre releases. O firmware novo (protocolo 7) precisa de um controlador novo (protocolo 7), que precisa de um kernel que ainda não é distribuído em nenhum ramo estável. O código-fonte do kernel confirma que o suporte do protocolo 7 só existe no master não publicado (futuro 6.20/7.0); os kernels estáveis 6.18/6.19 não o têm.

## Tentativa 3: controlador out-of-tree - o kernel personalizado do ZimaOS não o carrega

Para obter um controlador de protocolo 7, compilou-se a árvore de cabeçalhos mainline `6.18.9` a partir do kernel.org e compilou-se o `amdxdna.ko` upstream do xdna-driver com uma correspondência exata de vermagic. O carregamento falha:

```text
$ insmod amdxdna.ko
insmod: ERROR: could not insert module ...: Unknown symbol in module
$ dmesg | grep amdxdna
amdxdna: Unknown symbol drm_gem_shmem_pin_locked (err -2)
amdxdna: Unknown symbol drm_gem_shmem_vmap_locked (err -2)  ... (13 drm_gem_shmem_* symbols missing in total)
```

**Causa raiz**: o kernel do ZimaOS é uma compilação personalizada do Buildroot cujo `drm_shmem_helper` não coincide com o código-fonte mainline `6.18.9`, pelo que a ABI do controlador out-of-tree oficial da AMD não encaixa. Isto foi revertido. Com isto, a via do FastFlowLM fica completamente fechada (firmware, controlador e kernel formam uma cadeia partida).

## Tentativa 4: IRON Llama - um avanço no prefill e um muro final no decode

Foi tomada uma via diferente com a cadeia de ferramentas near-metal mlir-aie/IRON, que não depende do FastFlowLM nem do protocolo 7. O ambiente foi construído a partir do repositório amd/IRON (mlir_aie 1.4.2.dev16 mais torch apenas-CPU e dependências de operadores), e o modelo foi descarregado através do ModelScope para evitar precisar de um token do HF.

Compilação: todos os operadores AIE (RMSNorm/GEMM/GEMV/RoPE/Softmax/FFN) compilam com sucesso.

O prefill funciona — um forward pass completo de transformer executa na NPU e produz corretamente o primeiro token:

```text
$ python llama_npu.py model.safetensors tokenizer.model --num-tokens 1 --prompt-len 13
SCENE I. King John
[Prefill] Time to first token: 2.022 s   [Total] Tokens per second: 0.495
```

O decode falha, bloqueado em duas camadas:

Primeiro, falta na API do XRT (2.21.75):

```text
AttributeError: 'pyxrt.run' object has no attribute 'get_ctrl_scratchpad_bo'
```

Segundo, depois de autocompilar um módulo pyxrt 2.26 (libs do XRT 2.26 extraídas da imagem do FastFlowLM mais uma compilação dirigida do código-fonte do xdna-driver, verificada como compatível com o controlador mainline: `get_ctrl_scratchpad_bo: True` e a comunicação dispositivo/BO passa), o kernel fundido continua sem executar:

```text
RuntimeError: DRM_IOCTL_AMDXDNA_EXEC_CMD IOCTL failed (err=-22): Invalid argument
$ dmesg | grep amdxdna
amdxdna 0000:c7:00.1: [drm] *ERROR* amdxdna_cmd_submit: HW Context is not ready
```

Lendo o código-fonte do controlador em `amdxdna_ctx.c`: o envio exige o estado de hwctx `READY`; o kernel fundido de decode carrega o hwctx através de ELF, um caminho novo que o controlador mainline `6.18.9` não consegue levar a READY.

**Conclusão**: o prefill (forward pass de um modelo real) na NPU é conseguido; o decode (geração completa) está bloqueado pela versão do controlador — o mesmo muro que o FastFlowLM.

## Análise da pilha de software por camadas

| Camada | Maturidade | Conclusão-chave | Evidência |
|---|---|---|---|
| Hardware (XDNA2) | Pronta | IP de produção, as 8 colunas detetadas e capazes de computar | Deteção e ativação |
| Controlador do kernel (amdxdna) | Limitada | O protocolo 6.12 funciona; o protocolo 7 nunca entra num kernel estável; o controlador out-of-tree não carrega | Deteção / experiência de atualização / out-of-tree |
| Firmware | Limitada | O 1.0.x está ligado ao protocolo 6, o 1.1.x ao protocolo 7; o firmware novo precisa de um controlador novo | Experiência de atualização do firmware |
| Runtime de espaço de utilizador (XRT) | Limitada | O 2.21 e o 2.26 estão divididos; as APIs novas dependem de versões novas | IRON Llama |
| Framework de inferência | Não pronta | O EP oficial não está ativado no Linux; o FastFlowLM depende de uma coincidência de versões; o IRON é near-metal e não é de ponta a ponta | Tentativas 1, 2, 4 |
| Formato do modelo | Limitada | Não há formato universal nem pipeline de implementação; cada fornecedor tem a sua própria cadeia de compilação proprietária | Tentativas 2, 4 |
| Integração de sistema | Limitada | Forte dependência da distribuição; o kernel personalizado do ZimaOS e o `/lib/modules` só de leitura bloqueiam as atualizações | Deteção / out-of-tree |

## Bloqueios e causas raiz

1. **Impasse de protocolo**: o firmware novo (protocolo 7), um controlador novo (protocolo 7) e um kernel estável (sem protocolo 7) não formam um ciclo fechado.
2. **Sem framework oficial**: o EP Vitis-AI do ONNX Runtime não está explicitamente ativado no Linux x86_64, e os issues oficiais continuam sem resposta e sem roteiro.
3. **Dependência da distribuição**: a camada DRM do kernel personalizado do ZimaOS difere do mainline, pelo que nem o controlador out-of-tree oficial da AMD consegue carregar.
4. **Fragmentação do ecossistema**: não há um formato de modelo nem um pipeline de implementação padrão; a compilação do modelo depende da cadeia de ferramentas proprietária de cada fornecedor.
5. **Experiência de depuração**: os erros (EINVAL, incompatibilidade de protocolo, "hwctx not ready") não têm um caminho oficial de resolução e são resolvidos pela comunidade.

## Comparação de maturidade por plataforma

| Dimensão | Windows | Linux (atual) |
|---|---|---|
| EP oficial do ONNX | Pronto | Não ativado |
| Frameworks de inferência NPU (whisper.cpp e semelhantes) | Prontos | "Planned" |
| Gestão de versões de controlador/firmware | Gerida pelo fornecedor | Fragmentada entre distribuições |
| Usabilidade em produção | Pronta | Não passa a validação de engenharia |

## Conclusão e recomendações

**Conclusão técnica**: o hardware da NPU é maduro e a pilha de software do Windows é madura. A pilha de software do Linux (evolução do protocolo do controlador, frameworks oficiais, gestão de versões) está em desenvolvimento ativo e não passou a validação de engenharia. O estado mais alto alcançado localmente é ativar + programar + executar operadores + prefill de um modelo real; a geração completa do modelo não é possível. O bloqueio é de software, não de hardware, e em teoria deverá levantar-se à medida que a pilha da AMD no Linux amadurecer.

Recomendações:

1. **Seleção para produção**: no Linux, não dependa da inferência na NPU. Use a iGPU/dGPU (ROCm ou Vulkan) para a inferência de IA — o llama.cpp com Vulkan já executa modelos de 14B a 35B neste host.
2. **Roteiro da NPU**: marque-a como "reavaliar quando a pilha da AMD no Linux amadurecer".
3. **Se insistir na NPU**: só serve para protótipos ou validação de borda de baixo consumo e exige desenvolvimento IRON de nível especialista; não é um caminho de produção.
4. **Reserva técnica**: este ambiente (IRON, pyxrt 2.26, modelos, árvore de cabeçalhos do kernel) está arquivado e pode ser novamente tentado rapidamente após uma atualização do kernel.

**Condições de desbloqueio (checklist)**:

- [ ] Um kernel estável (6.20/7.0 ou posterior) inclui amdxdna de protocolo 7
- [ ] A AMD publica uma wheel de onnxruntime-vitisai / voe para Linux
- [ ] O ZimaOS atualiza o seu kernel (o FastFlowLM ou o decode do IRON podem então funcionar diretamente)
- [ ] O whisper.cpp com descarga para a NPU ganha suporte no Linux

## Apêndice: ativos verificados (para reutilizar após uma atualização do kernel)

| Ativo | Localização |
|---|---|
| Ambiente IRON (mlir_aie 1.4.2.dev16 + torch) | contentor `npu-dev`, `/work/ironenv2/` |
| pyxrt 2.26 autocompilado | `/work/pyxrt_build/build/` |
| Libs do XRT 2.26 (isoladas) | `/work/xrt226/` |
| Modelo Llama-3.2-1B | `/DATA/npu-dev/llama-3.2-1b/` |
| Árvore de cabeçalhos do kernel | `/DATA/npu-dev/kernel-src/` |
| Imagem e cache de modelos do FastFlowLM | `/DATA/npu-dev/fastflowlm/`, `/DATA/npu-dev/flm-cache/` |
| Cópias de segurança de firmware/controlador e scripts de rollback | `/DATA/npu-dev/fw-backup/` |
