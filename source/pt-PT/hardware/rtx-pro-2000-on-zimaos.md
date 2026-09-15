---
title: Teste de desempenho de inferência de LLM local da NVIDIA RTX PRO 2000
seo_title: "Inferência LLM da NVIDIA RTX PRO 2000 no ZimaOS: 65–70 t/s verificados"
description: "Um benchmark prático da NVIDIA RTX PRO 2000 Blackwell 16 GB num ZimaCube com ZimaOS: velocidade de descodificação do llama.cpp com Qwen3.6-35B-A3B MoE, limites de contexto, consumo de energia e a configuração recomendada."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

Este artigo documenta um benchmark prático da NVIDIA RTX PRO 2000 Blackwell 16 GB — a opção oficial de GPU do ZimaCube Creator — a executar inferência de LLM local no ZimaOS 1.7.1. Cobre benchmarks sintéticos, geração de conversa real, validação de contexto longo e consumo de energia, e termina com o modelo e a configuração de implementação recomendados.

Para o percurso de implementação em cinco passos, consulte [Inferência de LLM local](../zimaos/local-llm-inference "Execute uma IA privada no seu NAS ZimaOS com uma configuração 35B MoE verificada"). Para a instalação física, consulte [Expansão de GPU](./gpu-expansion "Adicione uma placa gráfica ao seu ZimaCube para IA e transcodificação").

## TL;DR

| Conclusão | Resultado |
|---|---|
| Consegue executar LLMs locais | Sim — CUDA 13.0 / Compute Capability 12.0 totalmente suportado |
| Melhor modelo | **Qwen3.6-35B-A3B (quantização IQ3_XXS)** |
| Velocidade de descodificação | **Cerca de 65–70 tokens por segundo** |
| Contexto longo | 64K estável, 128K viável |
| Face a um modelo denso de 27B | Apenas 18–23 t/s — o modelo MoE é cerca de 3.5 vezes mais rápido |
| O verdadeiro estrangulamento | 16 GB de VRAM, não o cálculo nem a energia |

Numa frase: a RTX PRO 2000 é uma das melhores placas de 16 GB para inferência local de agentes — 70 W, arquitetura Blackwell e, com um modelo MoE, descodifica várias vezes mais rápido do que um modelo denso de pegada semelhante.

## Ambiente de teste

### Hardware

| Componente | Especificação |
|---|---|
| Dispositivo | NAS ZimaCube (modelo de entrada de primeira geração, hardware oficial ZimaOS) |
| SO | ZimaOS 1.7.1 |
| CPU | Intel N100 (4 núcleos, 0.7–3.4 GHz) |
| Memória | 16 GB (cerca de 15 GB utilizáveis) + 5.2 GB de swap |
| GPU | **NVIDIA RTX PRO 2000 Blackwell** |
| VRAM | 16 GB GDDR7 |
| CUDA | 13.0, controlador 580.105.08 — ativado automaticamente pelo ZimaOS 1.7.1 ao inserir a placa |
| Compute capability | 12.0 (sm_120, Blackwell) |
| Limite de energia | 70 W |

Este é um dispositivo com GPU forte e CPU fraca. O N100 é um núcleo de eficiência de baixo consumo, por isso cada modelo tem de caber inteiro na VRAM. No momento em que a inferência transborda para a CPU, a velocidade desmorona.

O dispositivo testado é o ZimaCube de entrada de primeira geração. Num ZimaCube 2, a CPU mais forte só pode melhorar os resultados — os números do lado da GPU mantêm-se porque a placa é idêntica.

### Software

| Software | Versão / notas |
|---|---|
| Motor de inferência | llama.cpp (compilado a partir do código-fonte com o backend CUDA sm_120; use CUDA 12.8 para compilar — o 13.1 tem problemas conhecidos com os kernels MMQ) |
| Servidor | llama-server (API compatível com OpenAI) |
| Formato do modelo | GGUF (incluindo a quantização Unsloth Dynamic) |

A RTX PRO 2000 é uma placa Blackwell (sm_120). Precisa de um runtime CUDA e de um backend de inferência recentes — lançamentos pré-compilados antigos do llama.cpp podem não reconhecer a placa.

## Metodologia

1. **Benchmark sintético**: `llama-bench` com descarga total na GPU (`-ngl 99`), testando o processamento de prompts (512/2048 tokens) e a geração de tokens (128/512 tokens).
2. **Geração real**: `llama-cli` com `--temp 0.7`, modo de turno único, semente aleatória fixa, perguntas e respostas reais em chinês.
3. **Vários turnos e contexto longo**: conversas de vários turnos e recuperação de agulha no palheiro através da API do llama-server compatível com OpenAI.
4. **Capacidade de contexto**: carregar o modelo com 64K / 128K de contexto e medir o uso de VRAM.

### Modelos testados

| Modelo | Arquitetura | Parâmetros totais | Parâmetros ativos | Quantização | Tamanho |
|---|---|---|---|---|---|
| Qwen3.8-27B | Denso | 27.3B | 27.3B (todos ativos) | Q3_K_XL / Q2_K_XL / IQ2_XXS | 8.4–12.5 GiB |
| Qwen3.6-35B-A3B | MoE híbrido | 34.7B | Cerca de 3B | IQ3_XXS / Q2_K_XL | 11.4–12.3 GiB |

O Qwen3.6-35B-A3B é uma arquitetura híbrida: 10 camadas de atenção completa e 30 camadas SSM (Mamba) + MoE, 256 especialistas com 8 ativos por token. Está orientada para cenários de agentes e programação.

## Resultados do benchmark

### Sintético (llama-bench, descarga total na GPU, tokens/s)

| Modelo (quantização) | Tamanho | Prefill pp2048 | Descodificação tg512 |
|---|---|---|---|
| Qwen3.8-27B Q3_K_XL | 12.51 GiB | 670 | 17.9 |
| Qwen3.8-27B Q2_K_XL | 9.93 GiB | 670 | 20.7 |
| Qwen3.8-27B IQ2_XXS | 8.38 GiB | 570 | 23.1 |
| **Qwen3.6-35B-A3B IQ3_XXS** | 12.29 GiB | 1490 | **68.1** |
| **Qwen3.6-35B-A3B Q2_K_XL** | 11.44 GiB | 1564 | **74.4** |

### Geração real (llama-cli, --temp 0.7, perguntas e respostas em chinês)

| Quantização | Velocidade de geração |
|---|---|
| IQ3_XXS | **64.7 t/s** |
| Q2_K_XL | **70.3 t/s** |

### Validação de vários turnos e de contexto longo

| Teste | Resultado |
|---|---|
| Retenção de contexto em vários turnos | Passou — o turno 2 recordou corretamente informação anterior |
| Recuperação de agulha no palheiro | Passou — recuperou conteúdo anterior |
| Estabilidade em chamadas repetidas | Passou — estável em cerca de 63 t/s |

### Adequação a cargas de trabalho de agentes

A arquitetura híbrida do Qwen3.6-35B-A3B está orientada para cenários de agentes e programação, e as medições confirmam-no: a retenção de contexto em vários turnos e a recuperação de agulha no palheiro passam ambas, e as chamadas repetidas mantêm-se estáveis em cerca de 63 t/s. Para um agente de programação estilo DeepSeek Harness ou Codex, é uma velocidade interativa fluida, e os 35B de parâmetros totais dão ao modelo uma capacidade de raciocínio e programação que um modelo denso pequeno não tem.

A limitação nesta placa de 16 GB é o contexto. As conversas dos agentes crescem e, embora 64K seja confortável, 128K fica apertado. Se as suas cargas de trabalho de agente precisarem da janela nativa de 256K do modelo, a [RTX 4000 SFF Ada](./rtx-4000-ada-on-zimaos "Relatório completo de benchmark da NVIDIA RTX 4000 SFF Ada no ZimaOS") de 20 GB consegue-o com quantização KV q4.

## Porque é que o modelo MoE é 3.5 vezes mais rápido do que um 27B denso

Esta é a conclusão mais valiosa do teste.

- Um **modelo denso** lê todos os 27B de pesos por cada token gerado, por isso a velocidade de descodificação fica limitada pela largura de banda da memória. A largura de banda efetiva de descodificação medida é de cerca de 224 GiB/s, o que deixa um modelo de 27B em 18–23 t/s.
- O **modelo MoE** ativa apenas 8 de 256 especialistas (cerca de 3B de parâmetros) por token, lendo uma ordem de grandeza menos de pesos e contornando o estrangulamento da largura de banda. É assim que chega aos 65–70 t/s.

Em dispositivos com VRAM limitada, o MoE é a melhor forma de obter simultaneamente capacidade de parâmetros e velocidade de descodificação.

## A VRAM é o único limite rígido

- A quantização IQ3_XXS do 35B-A3B ocupa apenas 12.3 GiB, deixando cerca de 2.4 GB de margem em 16 GB.
- Quantizações superiores (Q4 são cerca de 19–20 GB) ou modelos maiores excedem os 16 GB. Assim que a descarga para a CPU entra em ação, o N100 arrasta a velocidade para níveis inutilizáveis.
- «O MoE mais forte que cabe em 16 GB» é o teto de desempenho deste dispositivo.

## Consumo de energia

Medido a plena carga de geração, a placa consome cerca de 55–70 W (no limite de 70 W sem o exceder) e 6–12 W em repouso. Para um NAS ligado 24/7, a eficiência é excelente.

## Capacidade de contexto

| Contexto | VRAM usada | Margem | Veredito |
|---|---|---|---|
| 64K | 13.5 GB | 2.4 GB | Confortável, recomendado |
| 128K | 14.8 GB | 1.1 GB | Viável, apertado |
| ~150K | ~15.6 GB | ~0.3 GB | Limite teórico |
| 256K (nativo do modelo) | >16 GB | — | Não cabe |

A sobrecarga de contexto é mínima (cerca de 22 MiB por cada 1K tokens) porque apenas as 10 camadas de atenção precisam de cache KV; as camadas SSM mantêm um estado constante.

## Conclusão e recomendações

### Melhor modelo

**Recomendado: Qwen3.6-35B-A3B (quantização IQ3_XXS, 3.06 bpw)**

1. É o maior e mais forte modelo que cabe inteiro em 16 GB de VRAM.
2. Descodificar a cerca de 65 t/s — 3.5 vezes um modelo denso de 27B — basta para uma experiência de agente fluida.
3. Os 35B de parâmetros totais trazem muito mais conhecimento, raciocínio e capacidade de programação do que qualquer modelo denso da mesma pegada.
4. IQ3_XXS é o ponto doce entre qualidade e velocidade. Q2_K_XL é cerca de 8% mais rápido, mas a perda de qualidade de 2 bits é mais notória.

Numa placa de 16 GB, este é o teto do nível. Para cargas sérias de programação e bases de conhecimento, o nível 122B / Flash é o passo seguinte — não cabe em 16 GB e pertence a placas maiores.

### Notas de utilização

1. **Amostre a 0.6–0.7, nunca com amostragem gananciosa (temp=0).** A amostragem gananciosa faz este modelo de raciocínio degenerar em repetição infinita.
2. **É um modelo de raciocínio.** Emite uma cadeia de pensamento antes da resposta, e os tokens de pensamento contam para o limite. Mantenha `max_tokens` em 2048 ou mais, ou a resposta é cortada a meio do pensamento.
3. **Campos de resposta.** A resposta final está em `content`; o rasto de raciocínio está em `reasoning_content` (o mesmo campo de extensão do DeepSeek).

### Casos de utilização

- Agentes locais: programação, orquestração de tarefas, chamadas a ferramentas
- Assistente de IA privado e perguntas e respostas RAG sobre uma base de conhecimento num NAS
- Inferência local de baixo consumo, sempre ligada
- Não adequado para: contextos além de 128K, ou modelos maiores com quantização alta

## Implementação (servidor compatível com OpenAI)

Use o mesmo servidor em contentor do guia de implementação — nada para compilar, a imagem inclui kernels CUDA até sm_120:

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

O servidor expõe uma API compatível com OpenAI que as principais frameworks de agentes (o SDK da OpenAI e outras) podem chamar diretamente:

```python
from openai import OpenAI
client = OpenAI(base_url="http://<zima-cube-ip>:8080/v1", api_key="sk-none")
resp = client.chat.completions.create(
    model="/models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf",
    messages=[{"role": "user", "content": "Hello"}],
    temperature=0.7,
    max_tokens=2048,          # mantenha-o grande, ou o pensamento come o limite
)
print(resp.choices[0].message.content)             # resposta final
print(resp.choices[0].message.reasoning_content)   # rasto de raciocínio (opcional)
```

## Apêndice: perfil de GPU verificado

```text
NVIDIA RTX PRO 2000 Blackwell
Compute Capability: 12.0 (sm_120)
VRAM: 16311 MiB (15848 MiB usable by CUDA)
Driver: 580.105.08 / CUDA 13.0
Power limit: 70 W
```
