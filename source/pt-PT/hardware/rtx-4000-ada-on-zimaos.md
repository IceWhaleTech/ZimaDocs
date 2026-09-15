---
title: Teste de desempenho de inferência de LLM local da NVIDIA RTX 4000 SFF Ada
seo_title: "Inferência LLM da NVIDIA RTX 4000 SFF Ada no ZimaOS: contexto de 256K a 74.5 t/s"
description: "Um benchmark prático da NVIDIA RTX 4000 SFF Ada 20 GB num ZimaCube com ZimaOS: llama.cpp em contentor com Qwen3.6-35B-A3B, contabilidade de memória do contexto de 256K, descodificação especulativa MTP, consumo de energia e a configuração recomendada."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

Este artigo documenta um benchmark prático da NVIDIA RTX 4000 SFF Ada Generation 20 GB — uma placa de 70 W sem conector de alimentação externo que cabe no ZimaCube — a executar inferência de LLM local no ZimaOS 1.7.1 através de um servidor llama.cpp em contentor. Os 20 GB de VRAM são a diferença-chave face à [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Relatório completo de benchmark da NVIDIA RTX PRO 2000 no ZimaOS") de 16 GB: desbloqueiam a janela de contexto nativa de 256K do modelo.

Para o percurso de implementação em cinco passos, consulte [Inferência de LLM local](../zimaos/local-llm-inference "Execute uma IA privada no seu NAS ZimaOS com uma configuração 35B MoE verificada").

## TL;DR

| Conclusão | Resultado |
|---|---|
| Implementação | Em contentor — `ghcr.io/ggml-org/llama.cpp:server-cuda`, sem compilação local |
| Melhor modelo | **Qwen3.6-35B-A3B, unsloth UD-IQ3_XXS (13.21 GB)** |
| Velocidade de descodificação | **74.5 t/s** (Q3_K_S chega a 83.3 t/s mas custa mais 2.3 GB) |
| Contexto | **Contexto nativo de 256K alcançado** com quantização KV q4 |
| Descodificação especulativa MTP | Testada e abandonada — aceitação 62–72% mas o ganho de descodificação é pequeno e instável |
| Energia | 69.8 W no muro dos 70 W, 83 °C a plena carga |

Numa frase: com 20 GB de VRAM, a RTX 4000 SFF Ada executa o mesmo modelo MoE de 35B que o nível de 16 GB mas com a janela de contexto completa de 256K — a configuração recomendada cabe em 14.5 GB com margem de sobra.

## Ambiente de teste

| Componente | Especificação |
|---|---|
| GPU | NVIDIA RTX 4000 SFF Ada Generation, Compute Capability 8.9, 20475 MiB |
| Dispositivo | ZimaCube (ranhura PCIe compatível, 70 W sem alimentação externa) |
| SO | ZimaOS 1.7.1 — controlador 580.105.08 ativado automaticamente ao inserir a placa |
| Runtime | Docker + nvidia-container-toolkit, verificado `--gpus all` |
| Motor | `ghcr.io/ggml-org/llama.cpp:server-cuda` (imagem de 4.3 GB, kernels CUDA sm_80–120 incluídos, sem compilação local) |
| Formato do modelo | GGUF |

Salvo indicação em contrário, os benchmarks usam llama-bench com `-p 512 -n 256 -r 3` (prompt de 512 tokens, geração de 256 tokens, média de 3 execuções).

## Resultados do benchmark

### Comparação de quantizações (llama-bench, 512/256)

A origem da quantização decide se o modelo mantém a sua **camada MTP (previsão do próximo token)**: as quantizações `prithivMLmods/...-MTP-GGUF` mantêm o MTP, enquanto as quantizações UD de `unsloth/...-GGUF` o removem (o carregamento reporta `model doesn't contain MTP layers`).

| Quantização | Tamanho | MTP | Descodificação t/s | Prefill t/s | Notas |
|---|---|---|---|---|---|
| Q3_K_S (K-quant padrão) | 15.55 GB | Sim | **83.3** | 1692.6 | Melhor ajuste dos kernels CUDA |
| **IQ3_XXS (unsloth UD)** | **13.21 GB** | Não | **74.5** | **1771.2** | Descodificação 10.6% mais lenta, poupa 2.3 GB |

A placa de 20 GB deve usar **IQ3_XXS**: deixa espaço para o contexto de 256K com KV q4. Q3_K_S a 15.55 GB nem sequer consegue carregar numa placa de 16 GB.

A escolha do modelo é a mesma do nível de 16 GB: o Qwen3.6-35B-A3B é o modelo mais forte que cabe nesta classe de placa, e a sua arquitetura MoE híbrida foi pensada para cenários de agentes e programação — a análise completa da largura de banda está na página da [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Relatório completo de benchmark da NVIDIA RTX PRO 2000 no ZimaOS"). Para cargas sérias de programação e bases de conhecimento, o nível 122B / Flash é o passo seguinte e requer placas maiores.

### Teste A/B de interruptores de otimização (llama-bench, 512/256, média de 3 execuções)

| Configuração | Prefill | Descodificação |
|---|---|---|
| Linha de base (sem otimizações) | 1713.3 | 83.7 |
| + flash-attn | 1295.6 (−24%) | 84.2 |
| + KV q8 | 1692.6 | 83.3 |
| + ubatch 2048 | **2312.9 (+36%)** | — |

### Flash attention e contexto longo

| Prompt | Prefill com fa=on |
|---|---|
| 4096 | 1691.7 |
| 8192 | 1635.1 |
| 16384 | 1580.8 |

Com fa=off, mesmo 4096 tokens falham com `failed to create context`. A flash attention é um requisito obrigatório para contextos longos com este modelo.

### Contabilidade de memória do contexto de 256K

| Configuração | Resultado | VRAM |
|---|---|---|
| KV f16 + 256K | Sem memória | >20 GB |
| KV q8 + 256K (sem MTP) | Funciona | ~18.35 GB (Q3_K_S) / 16186 MiB (IQ3_XXS) |
| KV q4 + 256K (sem MTP) | Funciona | **14906 MiB (IQ3_XXS)** |
| KV q4 + 256K + MTP | Funciona (Q3_K_S) | 18894 MiB |

### Descodificação especulativa MTP

| Medição | Resultado |
|---|---|
| Taxa de aceitação real (registos do servidor) | **62–72%** |
| Ganho de descodificação, respostas curtas naturais | +3.9% |
| Ganho de descodificação, 256 tokens fixos, temp=0.8 | +26.1% |
| Ganho de descodificação, gananciosa temp=0 | −10.1% |

O MTP fica rejeitado para o nível de 20 GB: a aceitação é alta, mas a descodificação está limitada pela largura de banda — o modelo MoE tem de ler cerca de 3B de especialistas ativos por token, de qualquer forma. O ganho é pequeno e instável, por isso a recomendação é saltar o MTP.

### Carga de trabalho de agente: DeepSeek Harness com contexto longo

Medido com uma sessão real de agente do DeepSeek Harness como carga de trabalho:

| Contexto total | Descodificação t/s |
|---|---|
| 76K | 39.2 |
| 101K | 33.0 |

A descodificação abranda à medida que o contexto cresce (leituras de KV maiores e mais atenção). É o custo inerente do contexto longo, não uma falha — sem overflow, sem truncagem. Mesmo a cerca de 100K de contexto, cerca de 33 t/s continuam fluidos para um agente em streaming. Para agentes de programação estilo DeepSeek Harness e Codex, esta janela de 256K é a razão para escolher esta placa em vez do nível de 16 GB.

### Consumo e temperatura (carga total)

| Elemento | Valor |
|---|---|
| Consumo de energia | 69.8 W (no limite dos 70 W) |
| Temperatura | 83 °C (normal; o limiar de throttling é ~90 °C+) |
| Utilização | 96–100% |
| Ajuste do limite de energia | Não ajustável (`-pl` rejeitado, exit 4) |

## Porque é que o MTP não ajuda aqui

Na [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Relatório completo de benchmark da NVIDIA RTX PRO 2000 no ZimaOS") de 16 GB, a descodificação está limitada pela largura de banda da memória em cerca de 65–70 t/s. A 4000 SFF Ada tem mais largura de banda (320 GB/s), o que eleva a descodificação para 74–83 t/s — mas a mesma lógica de largura de banda do MoE continua a aplicar-se: cada token tem de ler os ~3B de especialistas ativos. O MTP adiciona um modelo de rascunho por cima e, com uma aceitação de 62–72%, o ganho real é de uns pontos percentuais em texto natural e negativo com amostragem gananciosa. A memória aproveita-se melhor em KV q4 e na janela de 256K.

## Configuração recomendada (nível de 20 GB)

| Elemento | Valor |
|---|---|
| Quantização | Qwen3.6-35B-A3B **UD-IQ3_XXS** (13.21 GB) |
| Flash attention | Ativa |
| Cache KV | q4_0 |
| Contexto | 256K |
| ubatch | 2048 |
| MTP | Saltar |
| VRAM | **14906 MiB (14.56 GB, ~5.5 GB de margem)** |

Arranque o servidor com um comando:

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 262144 --n-gpu-layers 999 \
  -fa on --cache-type-k q4_0 --cache-type-v q4_0
```

O serviço expõe um endpoint compatível com OpenAI em `http://<host-ip>:8080/v1` (a API key é um marcador de posição, o servidor não autentica). Qualquer cliente ou agente em formato OpenAI pode ligar-se diretamente.

## Comparação de níveis

| Nível | Combinação | VRAM |
|---|---|---|
| 20 GB | IQ3_XXS + 256K + KV q4 | 14.5 GB |
| 20 GB | Q3_K_S + 256K + KV q4 + MTP | 18.45 GB (apertado) |
| 16 GB | IQ3_XXS + 128K + KV q4 | ~14 GB (Q3_K_S fica sem memória ao carregar) |

## Limitações

1. Os pontos de dados do MTP e a degradação em contexto longo são amostras únicas; a variância não foi estritamente avaliada. A matriz de otimização (tabela A/B) é uma média de 3 execuções.
2. Apenas o nível de placa única de 20 GB foi verificado em hardware. Os níveis de 16/24/32 GB seguem a matriz de compatibilidade teórica e não estão cobertos por estas medições.
3. NVFP4 (apenas Blackwell), EAGLE e o ajuste do limite de energia não estão disponíveis nesta placa e não foram incluídos.
