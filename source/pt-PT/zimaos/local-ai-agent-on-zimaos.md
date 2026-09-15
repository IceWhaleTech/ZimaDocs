---
title: Agente de IA local no ZimaOS
seo_title: "Agente de IA local no ZimaOS: ligue o DeepSeek Harness ao seu servidor LLM local"
description: "Ligue o DeepSeek Harness ao seu servidor LLM local no ZimaOS e inicie a sua primeira tarefa totalmente local — processamento de dados, automação ou monitorização de casa inteligente, sem nuvem envolvida."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

Tem duas peças a correr no seu NAS: o [DeepSeek Harness](./app-store/deepseek-harness-setup "Instale o DeepSeek Harness a partir da App Store do ZimaOS e crie o seu primeiro espaço de trabalho"), um agente de programação, e um [servidor LLM local](./local-llm-inference "Execute uma IA privada no seu NAS ZimaOS com uma configuração 35B MoE verificada") que responde a 65–70 tokens por segundo. Este guia liga os dois e inicia a sua primeira tarefa totalmente local.

A partir daí, o seu agente não tem fatura de API, nem limites de velocidade, nem dados a sair de casa. Execute quantas tarefas quiser — processamento de dados, automação, monitorização de casa inteligente — 24 horas por dia no seu próprio hardware.

## Antes de começar

- Um servidor LLM local em funcionamento. Se ainda não tem um, [Implementar inferência de LLM local no ZimaOS](./local-llm-inference "Execute uma IA privada no seu NAS ZimaOS com uma configuração 35B MoE verificada") põe-no de pé em cinco passos.
- DeepSeek Harness instalado e um espaço de trabalho criado — consulte [Implementar o DeepSeek Harness](./app-store/deepseek-harness-setup "Instale o DeepSeek Harness a partir da App Store do ZimaOS e crie o seu primeiro espaço de trabalho").
- O endereço IP do seu NAS e a porta do servidor, normalmente a `8080`.

## Ligue o agente ao seu servidor local

1. Abra o DeepSeek Harness e vá a **Settings > Models**.

2. Adicione um fornecedor de modelos:

| Campo | Valor |
|---|---|
| Base URL | `http://<your-nas-ip>:8080/v1` |
| API key | Qualquer marcador de posição, como `sk-none` — o servidor não autentica |

3. Clique em **Fetch available models**. O DeepSeek Harness consulta o servidor local e lista os modelos que serve. O modelo local aparece na lista, pronto a usar.

4. O comportamento do modelo foi medido, não adivinhado — consulte o [teste de desempenho da RTX PRO 2000](../hardware/rtx-pro-2000-on-zimaos "Relatório completo de benchmark da NVIDIA RTX PRO 2000 no ZimaOS") para ver todas as conclusões. Um ponto importa na utilização: a temperatura é definida no arranque do servidor (o guia de implementação usa 0.7 — nunca 0, a amostragem gananciosa faz o modelo repetir-se para sempre).

5. **O contexto começa em 128K.** As conversas dos agentes crescem, e a janela nativa deste modelo é de 256K. Arranque o servidor com um contexto de 128K numa placa de 16 GB (apertado mas viável, verificado em 14.8 GB), ou alcance os 256K completos com KV q4 numa placa de 20 GB — a página da [RTX 4000 SFF Ada](../hardware/rtx-4000-ada-on-zimaos "Relatório completo de benchmark da NVIDIA RTX 4000 SFF Ada no ZimaOS") tem o comando verificado.

6. No diálogo de chat, selecione o modelo local antes de enviar. A partir daí, cada conversa corre no seu próprio hardware. Envie uma mensagem curta e confirme que a resposta chega. Se quiser a prova de que veio da sua própria máquina, veja os registos do servidor enquanto responde.

## Inicie a sua primeira tarefa

Escolha uma, cole-a numa sessão e deixe o agente trabalhar. Cada prompt abaixo é um ponto de partida — o agente planeia os detalhes e você dirige na conversa.

**Processe dados locais.**

> Percorra a pasta Documents no NAS, liste o que lá está, agrupe os ficheiros por tema e escreva um índice resumo em Markdown. Não modifique nem apague ficheiros sem me perguntar primeiro.

**Automatize uma tarefa recorrente.**

> Configure um trabalho diário às 23:00 que verifique a pasta Downloads, mova os ficheiros com mais de 30 dias para uma pasta Archive ordenada por meses e escreva um registo curto do que moveu.

**Vigie o seu hardware com um alerta estilo casa inteligente.**

> Monitorize a temperatura do disco e o espaço livre deste NAS. Se a temperatura passar os 55 °C ou o espaço livre descer abaixo de 10%, escreva um relatório de saúde e torne-o visível para eu poder rever.

## Mantenha-o em funcionamento 24/7

O agente corre no próprio NAS, por isso as tarefas longas continuam a funcionar com o portátil fechado. Verifique o progresso a partir do telemóvel com o ZimaClient — a mesma interface web, em qualquer lugar. O [guia do DeepSeek Harness](./app-store/deepseek-harness-setup "Instale o DeepSeek Harness a partir da App Store do ZimaOS e crie o seu primeiro espaço de trabalho") cobre o acesso móvel e a autorização de pastas de que o agente precisa para tarefas com ficheiros.

## Quando algo não funciona

- **As respostas repetem-se para sempre.** A temperatura está a 0 — veja a nota acima.
- **A velocidade caiu de repente.** Parte do modelo caiu para a CPU. O [guia de LLM local](./local-llm-inference "Execute uma IA privada no seu NAS ZimaOS com uma configuração 35B MoE verificada") tem a lista completa de correções.
- **O agente não chega ao modelo.** Abra `http://<your-nas-ip>:8080/v1/models` num navegador da sua LAN. Uma lista JSON significa que o servidor está ativo e o problema está no campo Base URL; um erro significa que o próprio servidor precisa de um reinício.

## Ligações de referência

- DeepSeek Harness – [guia de instalação e implementação](./app-store/deepseek-harness-setup "Instale o DeepSeek Harness a partir da App Store do ZimaOS e crie o seu primeiro espaço de trabalho")
- Servidor LLM local – [guia de implementação](./local-llm-inference "Execute uma IA privada no seu NAS ZimaOS com uma configuração 35B MoE verificada")
