---
title: Pesquisar no Photos sem GPU
seo_title: "Pesquisa no ZimaOS Photos: encontrar objetos e texto sem GPU"
description: "Encontra fotografias por objetos ou texto com o ZimaOS Photos, mesmo sem GPU. Consulta o estado de preparação, experimenta pesquisas de objetos e OCR e explora as 80 categorias de objetos suportadas."
type: Docs
author: Vicky
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

No [Photos](./photos), introduz o nome de um objeto presente numa fotografia ou o texto que aparece numa imagem para encontrar fotografias relacionadas. **Podes utilizar estas pesquisas mesmo que o teu dispositivo não tenha GPU.**

Ao utilizares o Photos no ZimaOS, o sistema descarrega automaticamente, em segundo plano, os modelos necessários para o reconhecimento de objetos e texto. Ambos os tipos de reconhecimento são executados localmente no teu dispositivo. Mantém o dispositivo ligado à Internet enquanto os modelos necessários são descarregados.

Depois de adicionares fotografias à biblioteca, o Photos analisa automaticamente os objetos e o texto que contêm e cria um índice de pesquisa. Quando a análise correspondente estiver concluída, podes pesquisar pelo conteúdo descrito abaixo sem te lembrares dos nomes dos ficheiros ou das datas.

Consulta o progresso do processamento em **Definições → Pesquisa → Estado de preparação da pesquisa**. A análise do conteúdo pode continuar depois de a importação das fotografias terminar.

A análise decorre gradualmente em segundo plano. As fotografias cujo reconhecimento e indexação correspondentes já estejam concluídos podem aparecer nos resultados antes de toda a biblioteca ser processada. As pesquisas de objetos e texto aqui descritas não exigem a ativação da **Compreensão visual profunda**, nem é necessário esperar que o seu processamento termine.

![Definições de pesquisa do Photos com o progresso de preparação e a opção de compreensão visual profunda](/images/guides/photos-search-readiness.webp)

As definições de pesquisa mostram o progresso do processamento e a opção de compreensão visual profunda. Esta opção utiliza uma GPU; as pesquisas básicas de objetos e texto funcionam sem a ativar.

## Quando te lembras do que estava na fotografia

Introduz o nome do objeto na caixa de pesquisa. O Photos encontra imagens nas quais esse tipo de objeto tenha sido reconhecido.

- Para encontrar fotografias de gatos, pesquisa **gato**.
- Para encontrar um bolo que fotografaste, pesquisa **bolo**.
- Para encontrar fotografias que contenham uma mala de viagem, pesquisa **mala de viagem**.

Podes pesquisar animais comuns, veículos, alimentos, mobiliário e objetos do dia a dia, como cães, bicicletas, pizza, sofás e telemóveis.

Começa pelo nome de um objeto concreto. Por exemplo, para encontrar a fotografia de um bolo de aniversário, experimenta primeiro **bolo**.

![Photos a apresentar resultados de pesquisa com bolos](/images/guides/photos-search-objects.webp)

## Quando te lembras do que estava escrito na imagem

Podes encontrar capturas de ecrã, recibos, menus, letreiros e documentos fotografados através do texto reconhecido nas imagens.

- Para encontrar um recibo, pesquisa o **nome da loja** nele impresso.
- Para encontrar uma captura de ecrã de um anúncio de evento, pesquisa o **nome do evento**.
- Para encontrar um menu que fotografaste, pesquisa **桂花拿铁** (latte de osmanto) se essas palavras aparecerem nele.

Introduz alguns caracteres que apareçam efetivamente na imagem. O reconhecimento suporta caracteres chineses comuns, inglês e números. Escolher um texto distintivo ajuda a reduzir o número de resultados.

![Demonstração animada da pesquisa de imagens pelo texto reconhecido no Photos](/images/guides/photos-search-text.webp)

## Antes de pesquisares

Depois de as fotografias serem adicionadas à biblioteca, o Photos analisa o conteúdo visual e o texto em segundo plano. **As fotografias novas têm de concluir a análise correspondente antes de as poderes encontrar através desse conteúdo.**

Objetos demasiado pequenos ou tapados e texto desfocado ou com reflexos podem ser mais difíceis de reconhecer. Se não aparecerem resultados, experimenta outro nome de objeto ou outro excerto de texto da imagem.

Este artigo aborda o reconhecimento de objetos comuns e de texto em imagens. Estas funcionalidades não identificam pessoas ou animais de estimação pelo nome com base na aparência, nem interpretam descrições complexas de ações ou emoções. Se um nome aparecer como texto na imagem, podes tentar pesquisar esse texto.

## Cobertura completa do reconhecimento

O reconhecimento básico de objetos do Photos abrange as seguintes **80 categorias**. Utiliza-as como pistas para encontrar fotografias.

| Grupo | Objetos reconhecidos |
|---|---|
| Pessoas | Pessoa |
| Animais | Pássaro, gato, cão, cavalo, ovelha, vaca, elefante, urso, zebra, girafa |
| Veículos | Bicicleta, carro, motociclo, avião, autocarro, comboio, camião, barco |
| Objetos de rua | Semáforo, boca de incêndio, sinal de stop, parquímetro, banco |
| Objetos pessoais | Mochila, guarda-chuva, mala de mão, gravata, mala de viagem |
| Material desportivo | Frisbee, esquis, prancha de snowboard, bola desportiva, papagaio de papel, taco de basebol, luva de basebol, skate, prancha de surf, raquete de ténis |
| Louça e recipientes | Garrafa, copo de vinho, chávena, garfo, faca, colher, tigela |
| Alimentos | Banana, maçã, sanduíche, laranja, brócolos, cenoura, cachorro-quente, pizza, dónute, bolo |
| Mobiliário e casa | Cadeira, sofá, planta em vaso, cama, mesa de jantar, sanita |
| Eletrónica | Televisor, portátil, rato, comando à distância, teclado, telemóvel |
| Equipamento de cozinha | Micro-ondas, forno, torradeira, lava-loiça, frigorífico |
| Outros objetos do dia a dia | Livro, relógio, jarra, tesoura, urso de peluche, secador de cabelo, escova de dentes |

Estas são categorias de objetos. Por exemplo, **bola desportiva** não significa que o Photos distinga todos os tipos de bola, e **planta em vaso** não significa que identifique espécies de plantas.

Que outros conteúdos podes pesquisar em dispositivos que cumpram os requisitos de hardware da compreensão visual profunda? Iremos abordar esse tema num artigo separado.
