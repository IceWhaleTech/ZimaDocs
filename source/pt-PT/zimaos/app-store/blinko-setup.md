---
title: Como implementar o Blinko no ZimaOS
seo_title: "Executar o Blinko no ZimaOS: notas com IA autoalojadas no seu servidor doméstico"
description: Instale o Blinko a partir da App Store do ZimaOS em minutos — capture pensamentos fugazes em cartões, pesquise-os com IA em linguagem natural e guarde cada nota nas suas próprias unidades.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O Blinko é suportado nativamente no App Catalog do ZimaOS e pode ser instalado em apenas 3 minutos — o ZimaOS é patrocinador oficial do projeto Blinko, e o seu README inclui um botão "Run on ZimaOS". Consulte a [página do Blinko na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.blinko) para conhecer os detalhes mais recentes da app.

O Blinko é uma app de notas em cartões, de código aberto e autoalojada. Conhece o problema que resolve: as ideias chegam em momentos aleatórios — uma reunião, um trajeto, um duche — e quando abre uma app de notas pesada, o pensamento já desapareceu. O Blinko captura esses pensamentos fugazes no instante em que surgem, como pequenos cartões. E como vive no seu servidor doméstico, um assistente de IA pode pesquisar as suas notas por significado: pergunte "o que anotei sobre o projeto na semana passada?" e ele encontra a resposta em tudo o que já escreveu.

A comunidade descreve-o como "10 vezes melhor do que uma nota do telemóvel": um Obsidian mais leve com recuperação por IA e uma caixa de entrada do Notion autoalojada. Todas as suas notas ficam nas suas unidades, não na nuvem dos outros.

## Pré-requisitos

- Um servidor doméstico ZimaOS em funcionamento.

## App Catalog

1. Encontre o Blinko no App Catalog do ZimaOS. Abra a **App Store** → procure por "Blinko".

![Resultados de pesquisa da App Store mostrando o cartão da app Blinko e o seu botão de instalação](/images/app-store/blinko-app-store.png)

2. Clique em **Instalar** e aguarde um momento.

![Lista de apps no painel do ZimaOS com o Blinko mostrado como instalado](/images/app-store/blinko-installed.png)

3. **Está pronto a usar!**

A app corre na porta 1111 com a sua própria base de dados, e o ZimaOS guarda todas as suas notas na localização de dados de apps das suas unidades — sobrevivem a atualizações e reinstalações.

## Primeiro arranque

Abra o Blinko a partir do cartão da app. Na primeira visita, registe a sua conta — a primeira conta torna-se administradora.

![Ecrã de primeira execução do Blinko para registar a conta de administrador](/images/app-store/blinko-first-run.png)

Uma vez lá dentro, abra as definições e mude o idioma da interface se quiser (chinês simplificado e inglês estão disponíveis) e comece a escrever. Crie um cartão, dê-lhe uma etiqueta e guarde — é todo o ciclo.

![Editor de notas do Blinko com um novo cartão a ser escrito](/images/app-store/blinko-note.png)

## Ative as funções de IA (opcional)

O passo seguinte **NÃO é necessário** — sem IA, o Blinko já é uma app de notas completa. Mas as notas de captura rápida têm um destino conhecido: escreve coisas e depois não as encontra. A IA corrige exatamente isso — a pesquisa semântica encontra qualquer cartão por significado meses depois, a etiquetagem automática mantém tudo organizado sem esforço, e a expansão pós-captura transforma cinco palavras apontadas numa nota completa guardada como comentário. É isso que transforma uma pilha de cartões num segundo cérebro pesquisável. Para o ativar:

1. Abra as **Definições** e procure a secção do fornecedor de IA.

2. Escolha um fornecedor: OpenAI, Anthropic, Google AI, Grok ou um servidor local de Ollama no seu hardware — o que já usar.

3. Preencha as quatro capacidades do modelo: chat, embeddings, imagem e voz. Alguns fornecedores cobrem as quatro com uma chave; com outros, deixe vazia a capacidade de que não precisa.

4. Clique em **Testar ligação**. Quando passar, aparece um diálogo de IA no canto da interface e a pesquisa em linguagem natural começa a funcionar.

![Definições do fornecedor de IA no Blinko com o teste de ligação aprovado](/images/app-store/blinko-ai-settings.png)

> **Dica de privacidade:** se quiser ajuda da IA sem enviar as suas notas para lado nenhum, aponte o Blinko para um servidor local de Ollama — tudo fica no seu servidor doméstico.

## Dicas da comunidade

Formas como a comunidade do Blinko usa realmente a app, recolhidas de histórias de utilizadores:

- **Três tipos de cartão, livremente convertíveis.** Escreva um pensamento fugaz como cartão rápido, um texto longo como nota e as tarefas como lista de afazeres. Qualquer cartão pode ser convertido noutro tipo mais tarde — muito mais fácil do que mover ficheiros entre pastas.
- **Deixe a IA comentar, não reescrever.** Quando a IA expande ou aperfeiçoa um cartão, o texto gerado é guardado como comentário, sem se misturar com as suas palavras originais. A sua voz continua a ser sua, e pode rever a sugestão depois.
- **Revisão diária.** Use a revisão diária para voltar aos cartões que capturou hoje — a comunidade trata-a como a ponte entre a "captura rápida" e as "notas reais".
- **Os seus dados são seus.** Cada cartão vive como texto simples na pasta de dados da app nas suas unidades. Faça uma cópia de segurança dessa pasta e toda a sua biblioteca de notas fica segura.

## Ligações de referência

Para mais detalhes, consulte a documentação oficial do Blinko:

- Introdução e funcionalidades – [https://docs.blinko.space/en/introduction](https://docs.blinko.space/en/introduction "Documentação oficial de introdução e funcionalidades do Blinko")
- Instalação e atualizações – [https://docs.blinko.space/en/install](https://docs.blinko.space/en/install "Guia oficial de instalação e atualização do Blinko")
- Como usar a IA – [https://docs.blinko.space/en/how-to-use/ai/ai-setting](https://docs.blinko.space/en/how-to-use/ai/ai-setting "Guia oficial de configuração de IA do Blinko")
- Código-fonte – [repositório no GitHub](https://github.com/blinkospace/blinko "Repositório oficial do Blinko no GitHub")
