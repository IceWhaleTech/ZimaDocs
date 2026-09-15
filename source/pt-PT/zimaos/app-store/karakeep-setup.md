---
title: Como executar o Karakeep no ZimaOS
seo_title: "Karakeep no ZimaOS: gestor de marcadores autoalojado com etiquetagem por IA"
description: Instale o Karakeep a partir da App Store do ZimaOS — guarde tudo numa biblioteca de marcadores autoalojada com etiquetagem e resumo automáticos por IA no seu próprio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O Karakeep tem suporte nativo no App Catalog do ZimaOS. Consulte a [página do Karakeep na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.karakeep) para obter os detalhes mais recentes da aplicação.

O **Karakeep** (anteriormente Hoarder) é uma aplicação de código aberto para "guardar tudo" que usa IA para etiquetar e resumir automaticamente as ligações, notas e imagens que lhe atira. Construída com o autoalojamento como prioridade, mantém a sua biblioteca de marcadores no seu próprio hardware em vez da nuvem do fornecedor do navegador.

## Pré-requisitos

- Uma instalação do ZimaOS em funcionamento.
- *(Opcional)* Uma chave de API compatível com OpenAI. Se quiser usar outro fornecedor de IA (por exemplo, um modelo local para inferência privada), consulte o guia de [diferentes fornecedores de IA](https://docs.karakeep.app/configuration/different-ai-providers "Guia do Karakeep para configurar diferentes fornecedores de IA").

## App Catalog

1. Encontre o Karakeep no App Catalog do ZimaOS. Abra a **App Store** → procure por "Karakeep" → **Install**.

![Página da aplicação Karakeep na App Store do ZimaOS com o botão de instalação](/images/app-store/karakeep-app-store.webp)

2. **Está pronto a usar!**

![Ícone do Karakeep com o distintivo New no painel do ZimaOS após a instalação](/images/app-store/karakeep-installed-dashboard.webp)

Abra o Karakeep e pode começar a guardar marcadores de imediato — cole uma ligação, escreva uma nota ou largue uma imagem na caixa **NEW ITEM**.

![Interface do Karakeep com a caixa New Item para colar ligações, notas ou imagens](/images/app-store/karakeep-ui-new-item.webp)

![Vista inicial do Karakeep com os cartões Get Started e Zima ao lado da caixa New Item](/images/app-store/karakeep-ui-content.webp)

## Opcional: Defina o seu domínio (NEXTAUTH_URL)

Por predefinição, o Karakeep assume que corre em `http://localhost:xxxx`. Se o abrir a partir de outro dispositivo — ou através de um domínio — as ligações dentro da aplicação (incluindo o botão de **terminar sessão**) continuarão a apontar para `localhost` e falharão.

Para corrigir isto, defina a variável de ambiente `NEXTAUTH_URL` para o endereço exato que usa para abrir o Karakeep (o endereço IP com que inicia sessão no ZimaOS):

![Variáveis de ambiente do Karakeep com NEXTAUTH_URL definida para o endereço do dispositivo](/images/app-store/karakeep-nexauth-env.webp)

Depois **guarde** e reinicie a aplicação.

## Opcional: Ativar a etiquetagem automática com IA

O Karakeep pode etiquetar e resumir automaticamente as suas ligações guardadas usando IA. Abra o **Manager** e introduza a sua chave de API da OpenAI em **Advanced**.

![Definições do Karakeep com a secção Advanced (Show more) para a chave de API de IA](/images/app-store/karakeep-advanced-config.webp)

![Variáveis do Karakeep com a entrada OPENAI_API_KEY preenchida e realçada](/images/app-store/karakeep-openai-api-key.webp)

**Agora** o seu Karakeep pode tratar da etiquetagem e do resumo automáticos — só precisa de colar uma ligação, escrever uma nota ou carregar uma imagem.

![Página de resumo do Karakeep com resumo e etiquetas gerados automaticamente numa ligação guardada](/images/app-store/karakeep-auto-tag-result.webp)

### Use um LLM local em vez disso

Enviar as suas ligações para uma API na nuvem é opcional. O Karakeep suporta fornecedores compatíveis com OpenAI e Ollama, pelo que pode manter a etiquetagem e o resumo totalmente no seu próprio dispositivo.

Defina estas variáveis no contentor do Karakeep em vez de uma chave de API na nuvem:

```text
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://<your-zimaos-ip>:11434/v1
INFERENCE_TEXT_MODEL=gemma3
INFERENCE_IMAGE_MODEL=llava
```

Duas coisas a acertar:

- O endereço tem de ser acessível a partir de dentro do contentor do Karakeep — use o IP do seu ZimaOS, não `localhost`.
- Descarregue primeiro os modelos no servidor Ollama, ou a etiquetagem falhará quando chegar a primeira ligação.

Para executar o próprio servidor LLM no ZimaOS, consulte [Inferência de LLM local](../local-llm-inference "Implemente um servidor de IA privado no seu NAS ZimaOS em cinco passos"). Para outros fornecedores e definições avançadas de modelos, consulte o guia oficial de [diferentes fornecedores de IA](https://docs.karakeep.app/configuration/different-ai-providers "Guia do Karakeep para configurar diferentes fornecedores de IA").

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o Karakeep no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.gg/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
