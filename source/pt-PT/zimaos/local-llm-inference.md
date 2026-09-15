---
title: Implementar inferência de LLM local no ZimaOS
seo_title: "Execute uma IA privada no seu NAS ZimaOS: configuração verificada de 35B MoE"
description: "Transforme o seu ZimaCube num servidor de IA privado — deixe um agente de IA fazer a configuração ou siga os passos manuais verificados com Qwen3.6-35B-A3B e llama.cpp."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

Transforme o seu NAS ZimaOS num servidor de IA privado. Sem nuvem, sem fatura de API, tudo fica nos seus discos.

**Um motor, não um chatbot.** Este guia implementa um servidor de API compatível com OpenAI — o endpoint em `http://<your-nas-ip>:8080/v1` não é uma janela de chat. Um chatbot é apenas um dos seus clientes. O maior valor: todas as aplicações de IA e agentes da sua LAN podem ligar-se a este único endpoint. Aponte o [DeepSeek Harness](./app-store/deepseek-harness-setup "Instale o DeepSeek Harness a partir da App Store do ZimaOS e crie o seu primeiro espaço de trabalho") ou qualquer agente de programação para ele, e o próprio agente — não apenas os seus chats — corre totalmente em local no seu próprio hardware.

**O desempenho é medido, não teórico.** Um ZimaCube com uma GPU RTX PRO 2000 responde a **65–70 tokens por segundo** com um modelo de mistura de especialistas de 35B — as respostas fluem mais depressa do que consegue lê-las. Condense uma semana de notas de reuniões, responda a perguntas sobre os seus próprios documentos, atenda os pedidos do seu agente de casa inteligente: a resposta já está a fluir enquanto ainda está a ler a sua própria pergunta. A placa que faz o trabalho consome apenas 70 W — uma fração de um PC de jogos de secretária. A esta velocidade, a maior parte do trabalho rotineiro de agentes — e os dados pessoais por trás dele — pode ficar totalmente no seu próprio hardware.

## Antes de começar

- Um dispositivo ZimaOS com uma ranhura PCIe livre e uma **GPU NVIDIA** — Compute Capability 8.0 ou mais recente, 16 GB de VRAM ou mais. A configuração abaixo foi verificada num ZimaCube com uma RTX PRO 2000.
- **ZimaOS 1.7 ou posterior**, que ativa o controlador NVIDIA automaticamente quando a placa é inserida.
- Verifique a placa: abra um terminal e execute `nvidia-smi`. Se vir a placa, está pronto.

> Se a placa não for reconhecida, consulte [Expansão de GPU](../hardware/gpu-expansion "Adicione uma placa gráfica ao seu ZimaCube para IA e transcodificação") para a instalação física.

## Caminho A: deixe um agente de IA fazê-lo

Se tem o DeepSeek Harness (ou outro agente de programação) no seu ZimaOS, toda a configuração se torna uma conversa.

1. **Instale o DeepSeek Harness** a partir da App Store — consulte [Implementar o DeepSeek Harness](./app-store/deepseek-harness-setup "Instale o DeepSeek Harness a partir da App Store do ZimaOS e crie o seu primeiro espaço de trabalho").

2. **Dê ao agente as permissões de que precisa.**

   - Uma autorização de pasta permite-lhe trabalhar nos seus discos.
   - A autorização do socket Docker permite a gestão de contentores ao nível do sistema.

   Ambas estão cobertas nas notas de utilização do guia do DeepSeek Harness.

   A tarefa só pede ao agente que instale e configure software — os seus dados ficam de fora. Conceda o nível de socket para a configuração; revogue-o depois, se preferir.

3. **Inicie uma conversa e partilhe o que sabemos.** Cole o seguinte no chat e continue a falar até o agente reportar sucesso:

   > Configure um servidor LLM local neste anfitrião ZimaOS. Aqui está tudo o que precisa:
   >
   > - **Modelo:** Qwen3.6-35B-A3B, formato GGUF, quantização IQ3_XXS. Descarregue `Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf` (cerca de 12,3 GB) do repositório Hugging Face `unsloth/Qwen3.6-35B-A3B-GGUF` usando a CLI `hf`.
   > - **Motor:** execute o servidor llama.cpp a partir da imagem de contentor `ghcr.io/ggml-org/llama.cpp:server-cuda`. Não há nada para compilar.
   > - **GPU:** mantenha todas as camadas na GPU (`--n-gpu-layers 99`). Se o modelo cair para a CPU nesta máquina de classe NAS, a velocidade desmorona.
   > - **Definições:** contexto de 128K numa placa de 16 GB, flash attention ativado, temperatura de amostragem 0.7. Nunca coloque a temperatura a 0 — a amostragem gananciosa faz este modelo repetir-se para sempre.
   > - **Verifique:** o endpoint compatível com OpenAI deve responder em `http://<host-ip>:8080/v1`. Envie uma conclusão de chat curta para confirmar e depois reporte o nome do contentor e um resumo do que fez.
   >
   > Se algo falhar, explique o que tentou e o que diz o erro. Pergunte-me antes de alterar seja o que for ao nível do sistema.

4. **Verifique no seu navegador.** Abra `http://<your-nas-ip>:8080/v1/models` — uma lista JSON de modelos significa que o servidor está ativo.

   Se algo correu mal, mostre ao agente as notas da secção «Quando algo não funciona» e continue a conversa.

**Um último passo para a privacidade total:** mude o fornecedor de modelos do agente para o seu novo endpoint local nas definições de modelo. A partir daí, o agente corre no seu próprio modelo no seu próprio hardware — todo o ciclo fica em casa.

## Caminho B: configuração manual

Cinco passos, diretos pelo terminal.

### Passo 1: Instale a GPU

Abra a caixa, assente a placa na ranhura PCIe, feito — a placa não precisa de cabo de alimentação.

Percorrido completo: [Expansão de GPU](../hardware/gpu-expansion "Adicione uma placa gráfica ao seu ZimaCube para IA e transcodificação").

### Passo 2: Descarregue a imagem do motor

O servidor llama.cpp em contentor inclui os kernels CUDA para sm_80–120, pelo que não há nada para compilar:

```bash
docker pull ghcr.io/ggml-org/llama.cpp:server-cuda
```

### Passo 3: Obtenha o modelo

Descarregue o ficheiro GGUF do **Qwen3.6-35B-A3B** em quantização **IQ3_XXS** — cerca de 12,3 GB, escolhido para que o modelo completo caiba em 16 GB de VRAM com espaço para um contexto de 128K.

Se o seu dispositivo tem internet limitada, consulte [Como descarregar manualmente o modelo de linguagem de grande dimensão](./app-store/llm-manual-download "Descarregue modelos LLM manualmente para uso offline no ZimaOS").

```bash
mkdir -p models/llm
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

### Passo 4: Inicie o servidor

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

`--n-gpu-layers 99` mantém todas as camadas na GPU. Em CPUs de classe NAS isto não é opcional — no momento em que o modelo transborda para a CPU, a velocidade desmorona.

### Passo 5: Diga olá

O servidor expõe uma API compatível com OpenAI em `http://<your-nas-ip>:8080/v1`:

```python
from openai import OpenAI
client = OpenAI(base_url="http://<nas-ip>:8080/v1", api_key="sk-none")
resp = client.chat.completions.create(
    model="Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf",
    messages=[{"role": "user", "content": "Summarize my Documents folder"}],
    temperature=0.7,
    max_tokens=2048,
)
print(resp.choices[0].message.content)
```

É toda a configuração. Aponte qualquer coisa para ele — a pesquisa de IA de uma aplicação de notas, um organizador de fotos, os seus próprios scripts — e cada um deles passa a correr no seu próprio hardware.

## Números verificados

Medido num ZimaCube a correr ZimaOS com a RTX PRO 2000:

| O quê | Resultado |
|---|---|
| Velocidade de resposta | 65–70 tokens/s — mais depressa do que consegue ler. Um modelo denso de 27B na mesma placa chega a 18–23; a arquitetura MoE é a razão |
| Contexto | 64K confortável — o contexto de um romance longo; 128K viável — uma pequena biblioteca dos seus próprios documentos; 256K não cabe em 16 GB |
| Potência | 55–70 W sob carga, 6–12 W em repouso — menos que um portátil de jogos, silencioso ao ponto de esquecer que está ligado. Adequado para 24/7 |
| Estabilidade | Conversas de múltiplos turnos e recuperação de documentos longos verificadas |

## Quando algo não funciona

- **O servidor nunca arranca.** Execute `nvidia-smi` e confirme que a GPU está listada. Depois leia os registos com `docker logs llm-server` — as primeiras linhas costumam nomear a peça em falta.
- **Conflito de porta ao arrancar.** Os registos mostram um erro de ligação de porta: outra aplicação no NAS já usa a 8080, uma porta muito comum no mundo do self-hosting. Escolha uma porta de host livre e aponte todos os clientes para ela — por exemplo, inicie o contentor com `-p 8088:8080` e use `http://<your-nas-ip>:8088/v1` como URL base.
- **A velocidade caiu de repente.** Parte do modelo caiu para a CPU. Mantenha `--n-gpu-layers 99` e, se usar o Ollama em vez disso, execute `ollama ps` para ver a divisão GPU/CPU — o Ollama descarrega silenciosamente.
- **O modelo repete-se para sempre.** Colocou a temperatura a 0. Esta família de modelos precisa de **0.6–0.7**; a amostragem gananciosa parte-o.
- **As respostas param a meio da frase.** Ficou sem espaço para pensar. O modelo pensa antes de responder, e os tokens de pensamento contam para o limite — mantenha `max_tokens` em **2048 ou mais**.

## Ligações de referência

- llama.cpp – [Repositório do GitHub](https://github.com/ggml-org/llama.cpp "Código-fonte e releases do llama.cpp no GitHub")
- Servidor llama.cpp – [documentação do servidor](https://github.com/ggml-org/llama.cpp/tree/master/tools/server "Documentação do servidor HTTP do llama.cpp")
