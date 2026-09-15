---
title: Guia de substituição da placa posterior do ZimaCube
description: "Guia passo a passo para remover e substituir a placa posterior dos discos rígidos do ZimaCube, incluindo ferramentas, notas de segurança, manuseamento dos cabos planos e verificação após a substituição."
type: Docs
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Este guia aplica-se à série ZimaCube e explica como remover e substituir a placa posterior dos discos rígidos. Siga os passos pela ordem indicada; para voltar a montar, inverta os passos de desmontagem.

## Ferramentas necessárias

- Chave de fendas Phillips M3 (para os parafusos da placa posterior e do suporte)
- Chave hexagonal H2 (para os parafusos dos painéis laterais)
- Pinça ou espátula de plástico (recomendado, para abrir o painel com clipes e descolar a fita preta)

## Notas importantes

{% note warn Desligue e descarregue a energia %}
Antes de substituir a placa posterior, desligue o dispositivo e retire o cabo de alimentação. Aguarde cerca de 30 segundos para que a energia residual se dissipe, de modo a evitar choques elétricos ou danos nos componentes.
{% endnote %}

{% note warn Proteção ESD %}
Toque numa superfície metálica ou use uma pulseira antiestática antes de manusear os componentes, para evitar danificar a placa posterior.
{% endnote %}

- Os parafusos de locais diferentes podem ter comprimentos diferentes. Mantenha-os organizados para que cada um volte ao lugar correto.
- Os cabos planos (FPC) são frágeis. Descole a fita, levante os trincos e ligue ou desligue com cuidado para evitar rasgar o cabo ou partir um trinco.
- Ao ligar ou desligar conectores, segure o conector em si. Nunca puxe pelos fios.
- Os cabos planos têm uma orientação única. Tire uma fotografia para registar a orientação antes de os remover, alinhe com o encaixe ao reinstalar e nunca force um conector que não encaixe.

## Passos de desmontagem

### 1. Desligue e remova os discos

1. Desligue o dispositivo e retire o cabo de alimentação.
2. Remova todas as gavetas de discos (incluindo a da sétima baía) e coloque-as de lado em segurança.

![Estrutura interna do ZimaCube com as gavetas de discos e o dissipador visíveis](/images/zimacube-backplane-replacement/remove-drives.webp)

### 2. Remova os painéis laterais e abra a tampa superior

1. Remova os parafusos de fixação de ambos os lados do chassis (4 por lado).

![Parafusos laterais marcados com caixas vermelhas](/images/zimacube-backplane-replacement/side-screws.webp)

2. Abra a tampa superior.
3. Levante os painéis laterais para cima, para dar espaço ao acesso aos cabos mais tarde.

### 3. Remova o painel traseiro e o suporte

1. O painel traseiro está montado com clipes. Basta fazer alavanca para o abrir e remover.

![Painel traseiro removido, deixando ver as ventoinhas](/images/zimacube-backplane-replacement/rear-panel.webp)

2. Remova os 6 parafusos do suporte traseiro (localizados atrás do painel com clipes, que fixam as ventoinhas e a placa posterior) e desligue os dois conectores das ventoinhas.

![Parafusos do suporte traseiro e conectores das ventoinhas marcados](/images/zimacube-backplane-replacement/bracket-screws.webp)

### 4. Desligue o cabo de alimentação da placa posterior

1. Desligue o cabo de alimentação da placa posterior do lado esquerdo.

![Cabo de alimentação da placa posterior marcado com uma caixa vermelha](/images/zimacube-backplane-replacement/power-cable.webp)

### 5. Remova os cabos planos

1. Descole com cuidado a fita preta dos cabos planos.
2. Levante os trincos de ambos os conectores dos cabos planos, um de cada vez, e puxe suavemente os cabos.
3. Ambas as extremidades de cada cabo são manuseadas da mesma forma. Mantenha a orientação (o conector tem um encaixe) e alinhe com o encaixe ao reinstalar.

![Conectores dos cabos planos na placa posterior identificados como BP CON1, 2P e 8P](/images/zimacube-backplane-replacement/flat-cables.webp)

### 6. Remova a placa posterior antiga

1. Remova os 3 parafusos da placa posterior.

![Os três parafusos da placa posterior marcados com caixas vermelhas](/images/zimacube-backplane-replacement/remove-backplane.webp)

2. Levante suavemente a placa posterior antiga.

## Instale a nova placa posterior

### 1. Instale a nova placa posterior e volte a ligar os cabos

1. Coloque a nova placa posterior na posição e alinhe os orifícios dos parafusos.
2. Fixe-a com os 3 parafusos da placa posterior.
3. Volte a ligar os cabos planos: insira os cabos CON1 e CON2 nas ranhuras correspondentes, fazendo corresponder as etiquetas da placa posterior e da placa-mãe. Alinhe com o encaixe, insira, pressione o trinco e volte a aplicar a fita preta.

> Como distinguir os dois cabos (ver figuras abaixo): CON1 é o cabo mais comprido e CON2 o mais curto, cada um com etiqueta no próprio cabo. A extremidade marcada "BP" liga-se à placa posterior e a extremidade marcada "MB" liga-se à placa-mãe.

{% note info Os cabos planos são universais %}
Os cabos planos são universais e funcionam com os Cube de primeira e de segunda geração.
{% endnote %}

![Ranhuras da placa posterior identificadas como BP CON1 e BP CON2](/images/zimacube-backplane-replacement/con1-con2-slots.webp)

![Posições de ligação de CON1 e CON2 na placa-mãe](/images/zimacube-backplane-replacement/con1-con2-positions.webp)

![Os dois cabos planos com as extremidades BP e MB identificadas](/images/zimacube-backplane-replacement/con1-con2-cables.webp)

### 2. Volte a montar pela ordem inversa

1. Volte a ligar o cabo de alimentação da placa posterior do lado esquerdo.
2. Reinstale o suporte traseiro, volte a ligar os dois cabos das ventoinhas e aperte os 6 parafusos.
3. Volte a encaixar o painel traseiro com clipes.
4. Reinstale os dois painéis laterais.
5. Volte a colocar a tampa superior.
6. Aperte os parafusos de ambos os lados do chassis (4 por lado).
7. Reinstale todas as gavetas de discos (incluindo a da sétima baía).

### 3. Ligue e verifique

Ligue a alimentação, ligue o dispositivo e confirme que as ventoinhas giram normalmente e que todas as baías são detetadas corretamente.

Execute `lspci` no terminal: se vir as duas partes assinaladas na imagem abaixo, a substituição foi bem-sucedida.

![Saída do terminal do lspci a mostrar os dispositivos ASMedia](/images/zimacube-backplane-replacement/lspci-verify.webp)
