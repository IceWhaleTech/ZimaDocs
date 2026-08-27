---
title: Referência de configuração RAID
seo_title: "Configuração RAID no ZimaOS: explicação de RAID 0, 1, 5, 6 e JBOD"
description: "Guia detalhado de configuração RAID para o ZimaOS. Explica RAID 0, 1, 5, 6 e JBOD com tabelas comparativas, instruções passo a passo e respostas a perguntas frequentes."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

O RAID combina várias unidades para melhorar a fiabilidade, o desempenho ou ambos. Distribui os dados entre as unidades para permitir maiores velocidades de leitura e escrita, mantendo-os intactos mesmo que uma unidade falhe. O JBOD limita-se a unir vários discos num volume contínuo, aproveitando ao máximo a capacidade total.

Se este tema for novo para si e apenas pretender saber qual configuração se adequa à sua situação, comece por **[Configuração de armazenamento](./storage-setup "Escolher a configuração de armazenamento com opções RAID adequadas às suas necessidades")**. Esse guia apresenta a decisão sem pressupor conhecimentos prévios. Esta página é a referência técnica.

## O que faz cada opção

Em termos simples, cada nível significa o seguinte.

- **RAID 0 (rápido)**: distribui os dados pelas unidades para obter a máxima velocidade e capacidade. Não oferece redundância. Se uma unidade falhar, todos os dados são perdidos. É adequado para dados temporários ou quando a velocidade é mais importante do que a segurança.
- **RAID 1 (seguro)**: espelha os dados em duas unidades. Se uma falhar, a outra continua a funcionar. É simples, fiável e a opção clássica para um NAS doméstico. Por definição, está limitado a duas unidades.
- **RAID 5 (equilibrado)**: distribui dados e paridade por três ou mais unidades. Tolera a falha de uma unidade, utiliza o espaço de forma eficiente e permite crescer através da adição de unidades ao longo do tempo. É a opção habitual para pequenas empresas e bibliotecas em crescimento.
- **RAID 6 (estável)**: semelhante ao RAID 5, mas com paridade dupla. Tolera a falha de duas unidades. Requer quatro ou mais unidades. É indicado para configurações em que o tempo de inatividade tem um custo elevado.
- **JBOD**: concatena os discos num grande volume sem redundância. Oferece a capacidade máxima, mas, se um disco falhar, perde-se todo o volume. Em geral, não o recomendamos para dados importantes.

Consulte a imagem abaixo para obter uma comparação visual.

![Visão geral das opções RAID do ZimaOS com RAID 0, 1, 5, 6 e JBOD lado a lado para comparação](https://manage.icewhale.io/api/static/docs/1755075585086_copyImage.png)





## Passos detalhados para criar RAID 5

O RAID 5 é ideal para quem procura um equilíbrio entre eficiência de armazenamento, desempenho e proteção contra a falha de uma unidade. Requer pelo menos três discos. Segue-se um guia passo a passo para criar um conjunto RAID 5 através da interface atualizada do ZimaOS.



1.  Abra **Definições > Armazenamento**. Verá uma lista dos discos atuais e das operações disponíveis.


![Página de armazenamento das Definições do ZimaOS com a lista dos discos atuais e das operações disponíveis](https://manage.icewhale.io/api/static/docs/1755075586219_copyImage.png)

2.  Clique em **Combinar** para abrir o menu de combinação de discos.


![Página de armazenamento do ZimaOS com o botão Combinar para abrir o menu de combinação de discos](https://manage.icewhale.io/api/static/docs/1755075587914_copyImage.png)

3.  Selecione **RAID 5** e clique em **Seguinte**.


![Menu de combinação de discos do ZimaOS com RAID 5 selecionado entre as opções RAID disponíveis](https://manage.icewhale.io/api/static/docs/1755075589691_copyImage.png)

4.  **Selecione três discos disponíveis**. O sistema calculará a capacidade estimada; depois, clique em **“Seguinte”**.


![Assistente de criação RAID do ZimaOS com três discos selecionados e a capacidade estimada do conjunto](https://manage.icewhale.io/api/static/docs/1755075591241_copyImage.png)

5.  **Configure e atribua um nome ao conjunto**: introduza um nome, por exemplo “RAID5”, selecione os protocolos pretendidos e clique em **“Criar”** para iniciar a inicialização.


![Ecrã de configuração do conjunto de armazenamento do ZimaOS com o campo de nome e as opções de protocolo antes da criação](https://manage.icewhale.io/api/static/docs/1755075592784_copyImage.png)

6.  **Criação concluída**: o sistema efetuará a distribuição dos dados, apresentará o progresso até terminar e mostrará o estado do conjunto como **“Saudável”**.


![Ecrã de conclusão da criação de armazenamento do ZimaOS com o novo conjunto no estado Saudável](https://manage.icewhale.io/api/static/docs/1755075594884_copyImage.png)

7.  **Já pode utilizar o RAID 5.** Após a criação, a paridade será ativada automaticamente. Durante este processo, as velocidades de leitura dos discos podem ser afetadas, mas a utilização normal não será interrompida.


![Página de armazenamento do ZimaOS com o novo conjunto RAID 5 pronto e a paridade ativada automaticamente](https://manage.icewhale.io/api/static/docs/1755075596383_copyImage.png)

## Escolher um nível RAID

Ainda está indeciso? Esta referência rápida resume os compromissos.

![Quadro de referência rápida dos níveis RAID do ZimaOS com os compromissos entre capacidade, velocidade e redundância](https://manage.icewhale.io/api/static/docs/1755075597233_copyImage.png)

Para obter recomendações por cenário, comece por **[Configuração de armazenamento](./storage-setup "Escolher a configuração de armazenamento com opções RAID adequadas às suas necessidades")**.

## Outros níveis RAID

Os passos para RAID 0, 1 e 6 são os mesmos; apenas diferem a opção selecionada e o número mínimo de discos. O RAID 6 requer pelo menos quatro unidades e tolera duas falhas.

## ZFS

O ZimaOS também suporta o sistema de ficheiros ZFS para quem pretende instantâneos, somas de verificação e integridade de dados avançada. Consulte o **[guia de configuração do ZFS](../developer/zfs-setup "Configurar o ZFS no ZimaOS para obter instantâneos, somas de verificação e integridade de dados")** na secção Desenvolvimento.

## Perguntas frequentes

**Porque demora tanto tempo a criação de um RAID?**

O tempo de inicialização depende da capacidade e da velocidade das unidades. As unidades maiores demoram mais. O conjunto permanece utilizável durante o processo, embora as velocidades de leitura possam ser reduzidas até a inicialização terminar.

## Seguinte

O RAID protege contra a falha de uma unidade, não contra eliminações acidentais ou desastres. Combine-o com a estratégia de **[cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteger os dados com a regra de cópia de segurança 3-2-1 no NAS")** para obter uma proteção completa. Se ainda não decidiu qual a configuração adequada às suas necessidades, comece por **[Configuração de armazenamento](./storage-setup "Escolher a configuração de armazenamento com opções RAID adequadas às suas necessidades")**.
