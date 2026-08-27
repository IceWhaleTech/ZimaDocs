---
title: Expansão RAID com SSD no ZimaCube
description: "Adicione SSD ao ZimaCube para cache RAID e conjuntos de armazenamento rápidos. Inclui a instalação de SSD M.2 NVMe e SATA, a configuração de RAID no ZimaOS e a otimização do desempenho."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Além das seis baías para HDD, o ZimaCube suporta até quatro SSD internos. Pode utilizar estes SSD para cache RAID e acelerar o acesso aos HDD, ou criar um conjunto de armazenamento rápido dedicado a aplicações que exijam baixa latência.

## Onde instalar os SSD

O ZimaCube tem dois tipos de ranhura para SSD no interior do chassis:

- **4 ranhuras M.2 NVMe** (PCIe 3.0 x4) na placa principal, compatíveis com unidades NVMe de tamanho 2280.
- **2 baías para SSD SATA de 2,5 polegadas**, acessíveis pela parte frontal depois de remover os tabuleiros das unidades.

As ranhuras M.2 são a melhor opção para unidades de cache, uma vez que o NVMe tem uma latência muito inferior ao SATA. As baías de 2,5 polegadas são adequadas para um conjunto rápido de armazenamento de grande capacidade.

## Instalar SSD M.2 NVMe

Antes de começar, encerre o ZimaCube e desligue o cabo de alimentação.

1. Desaperte os parafusos manuais na parte posterior, faça deslizar o painel para trás e remova a tampa superior.
2. Localize as duas ranhuras M.2 na placa principal. Encontram-se entre o dissipador da CPU e a ranhura de expansão PCIe.
3. Introduza a unidade M.2 na ranhura com um ângulo de 30 graus e pressione-a depois contra o espaçador até ficar plana.
4. Fixe a unidade com o pequeno parafuso fornecido com o SSD ou com o parafuso pré-instalado no espaçador.
5. Volte a colocar a tampa superior.

Depois do arranque, as unidades deverão aparecer no ZimaOS, em Storage > Disks. Se uma unidade não aparecer, confirme que está totalmente encaixada na ranhura.

## Instalar SSD SATA de 2,5 polegadas

1. Retire um dos tabuleiros vazios da parte frontal do ZimaCube.
2. Monte o SSD de 2,5 polegadas no tabuleiro com os quatro parafusos fornecidos com o ZimaCube.
3. Faça deslizar o tabuleiro para dentro da baía até encaixar.
4. A unidade aparecerá automaticamente no ZimaOS.

## Configurar RAID com SSD

Depois de instalar os SSD, pode configurar o RAID através da interface Web do ZimaOS:

1. Aceda a **Storage > RAID**.
2. Selecione as unidades que pretende incluir na matriz. Pode combinar SSD e HDD, mas, para obter o melhor desempenho, mantenha os SSD numa matriz própria.
3. Escolha um nível RAID. Para SSD, o RAID 0 oferece o melhor desempenho, mas não tem redundância; o RAID 1 replica os dados em duas unidades para maior segurança.
4. Clique em **Create** e aguarde a criação da matriz. O processo pode demorar vários minutos com unidades de grande capacidade.

Para obter mais informações sobre as opções disponíveis, consulte a **[Descrição geral das opções de RAID](../zimaos/raid-options)**.

## Utilizar SSD como cache

Se utilizar HDD como armazenamento principal, pode utilizar um SSD como cache de leitura e escrita para acelerar os ficheiros acedidos com frequência. No ZimaOS, esta opção é configurada por pasta partilhada:

1. Aceda a **Storage > Shared Folders**.
2. Selecione uma pasta e clique em **Edit**.
3. Em **Cache**, escolha o SSD na lista pendente.
4. Defina o modo de cache: writeback para obter o melhor desempenho ou writethrough para privilegiar a segurança dos dados.
5. Clique em **Save**.

Um único SSD NVMe de 256 GB é suficiente para colocar em cache a maioria das cargas de trabalho de um NAS doméstico. Para uma configuração com vários utilizadores e ficheiros multimédia de grande dimensão, considere uma unidade de cache de 512 GB ou 1 TB.

## Verificar o estado das unidades

Os SSD suportam um número limitado de ciclos de escrita. O ZimaOS apresenta as informações de estado em **Storage > Disks > [select drive] > Health**. Verifique-as periodicamente; se o nível de desgaste se aproximar dos 80%, planeie a substituição da unidade.
