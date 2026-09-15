---
title: Como Baixar Manualmente o Grande Modelo de Linguagem
seo_title: "Baixar Modelos LLM Manualmente no ZimaOS para IA Offline"
description: "Baixe modelos LLM num PC e mova-os para o seu NAS ZimaOS por USB ou LAN — o caminho offline para dispositivos com internet limitada."
type: Docs
author: Lauren Pan
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, se não preenchida irá capturar o texto do início do conteúdo
---

## Visão geral

O guia de [Inferência LLM local](../local-llm-inference "Execute uma IA privada no seu NAS ZimaOS com uma configuração 35B MoE verificada") baixa o modelo diretamente do Hugging Face — o caminho mais rápido quando o seu NAS tem uma boa ligação. Esta página cobre o caminho offline: baixe o modelo num PC e mova-o para o NAS por USB ou pela sua LAN.

Os passos abaixo usam o mesmo modelo do guia principal — `Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf`, cerca de 12,3 GB — e a mesma pasta de destino. O padrão de download e transferência funciona com qualquer modelo GGUF.

## Antes de começar

- Um PC com acesso à internet
- Cerca de 13 GB de espaço livre no PC e o mesmo no NAS
- Uma pen USB, ou o NAS acessível pela sua LAN

## Passo 1: Baixe o modelo no seu PC

A CLI do Hugging Face é a forma mais simples — retoma downloads interrompidos:

```bash
pip install -U huggingface_hub
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

Também pode baixar a partir da [página do modelo](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Página do modelo Qwen3.6-35B-A3B GGUF no Hugging Face") num navegador.

## Passo 2: Mova o modelo para o NAS

**Por USB:** copie a pasta `models/llm` para a pen, ligue-a ao NAS e, no ZimaOS Files, mova a pasta para o diretório `models/llm` do NAS (crie-o se não existir).

**Por LAN:** envie o ficheiro a partir do PC com `scp`. Crie primeiro a pasta de destino no NAS:

```bash
ssh <utilizador>@<ip-do-seu-nas> mkdir -p models/llm
scp models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf <utilizador>@<ip-do-seu-nas>:models/llm/
```

## Passo 3: Verifique o ficheiro

Downloads grandes podem corromper-se silenciosamente. No NAS, verifique o tamanho e o checksum:

```bash
ls -lh models/llm
sha256sum models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf
```

Compare ambos com a ficha do ficheiro na [página do modelo](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Página do modelo Qwen3.6-35B-A3B GGUF no Hugging Face") — o ficheiro deve ter cerca de 12,3 GB.

## Passo 4: Continue a configuração

O modelo está agora em `models/llm` — exatamente onde o guia de [Inferência LLM local](../local-llm-inference "Execute uma IA privada no seu NAS ZimaOS com uma configuração 35B MoE verificada") o espera. Salte o passo de download desse guia e continue com o arranque do servidor.

## Ligações de referência

- Hugging Face – [documentação da CLI huggingface_hub](https://huggingface.co/docs/huggingface_hub "Documentação oficial da CLI huggingface_hub")
- unsloth – [ficha do modelo Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Página do modelo Qwen3.6-35B-A3B GGUF no Hugging Face")
