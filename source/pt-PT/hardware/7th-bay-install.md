---
title: Como instalar e remover a 7.ª baía
description: "Guia passo a passo para instalar e remover uma unidade da 7.ª baía do ZimaCube. Inclui a remoção do painel, instruções para os parafusos e o manuseamento seguro da unidade."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

O ZimaCube tem sete baías para unidades. A 7.ª baía encontra-se atrás do painel frontal, separada das seis baías principais. Foi concebida para um SSD de 2,5 polegadas ou um disco rígido de perfil baixo.

Este guia explica como instalar uma unidade na 7.ª baía e como removê-la quando precisar de a substituir.

## Antes de começar

- Encerre o ZimaCube e desligue o cabo de alimentação.
- A 7.ª baía suporta unidades SATA de 2,5 polegadas. Um SSD com 7 mm de espessura ou um HDD de perfil baixo é a opção mais adequada.
- Irá precisar de uma chave de fendas Phillips.

## Instalar uma unidade

**Passo 1: Remova o painel frontal.** Segure a extremidade inferior do painel frontal e puxe-o para a frente. O painel está preso por clipes de pressão, sem parafusos.

![](https://manage.icewhale.io/api/static/docs/1722418820491_image.png)

**Passo 2: Remova a 6.ª baía.** A 6.ª baía bloqueia o acesso à 7.ª. Puxe o tabuleiro da 6.ª baía para fora do chassis.

![](https://manage.icewhale.io/api/static/docs/1722418858886_image.png)

**Passo 3: Desaperte o suporte da 7.ª baía.** Rode os parafusos no sentido contrário ao dos ponteiros do relógio para soltar o suporte que cobre a ranhura da 7.ª baía.

![](https://manage.icewhale.io/api/static/docs/1722418913222_image.png)

**Passo 4: Retire o tabuleiro da 7.ª baía.** Puxe-o a direito para fora do chassis.

![](https://manage.icewhale.io/api/static/docs/1722418964759_image.png)
![](https://manage.icewhale.io/api/static/docs/1722418974044_image.png)

**Passo 5: Monte a unidade no tabuleiro.** Alinhe os orifícios e fixe a unidade com quatro parafusos.

![](https://manage.icewhale.io/api/static/docs/1722419028169_image.png)

**Passo 6: Volte a inserir o tabuleiro e aperte os parafusos.** Empurre o tabuleiro da 7.ª baía até à posição correta e aperte os parafusos do suporte no sentido dos ponteiros do relógio.

![](https://manage.icewhale.io/api/static/docs/1722419069919_image.png)

**Passo 7: Volte a inserir o tabuleiro da 6.ª baía e encaixe novamente o painel frontal.**

## Remover uma unidade

Siga os mesmos passos pela ordem inversa. Primeiro, desligue o equipamento e retire o cabo de alimentação; em seguida, remova o painel frontal, a 6.ª baía e o suporte da 7.ª baía. Retire o tabuleiro, desaperte a unidade e volte a montar o conjunto.

## Após a instalação

Ligue o ZimaCube. A nova unidade deverá aparecer no ZimaOS, em **Storage > Disks**. Se não aparecer, volte a encaixar o tabuleiro: o conector SATA na parte posterior da baía tem de ficar firmemente ligado.

A partir daqui, pode formatar a unidade, adicioná-la a uma matriz RAID ou utilizá-la como um volume independente. Consulte a **[Descrição geral das opções de RAID](../zimaos/raid-options)** para decidir como a configurar.
