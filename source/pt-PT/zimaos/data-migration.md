---
title: Migração de dados
seo_title: "Migração de dados do ZimaOS: mova Docker, dados de aplicações e pastas entre unidades"
description: "Mova imagens Docker, dados de aplicações e pastas de utilizador entre espaços de armazenamento do ZimaOS com a ferramenta Data Migration integrada."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---
Quando uma unidade fica cheia, ou quando a troca por uma maior, não precisa de reinstalar nada. A ferramenta integrada Data Migration transfere categorias inteiras de dados para outro espaço de armazenamento numa única execução.

## O que pode mover

A ferramenta trabalha com três categorias:

- **Imagens Docker.** Os pacotes sobre os quais as suas aplicações correm. Esta categoria cresce mais depressa quando continua a instalar aplicações.
- **Dados de aplicações Docker.** Tudo o que as suas aplicações instaladas escreveram, movido em bloco.
- **Pastas de utilizador.** Fotografias, Transferências, Documentos, Multimédia e Cópias de segurança.

Trabalha ao nível da categoria, não aplicação a aplicação. Se quiser mover uma única aplicação ou perceber onde vivem os seus ficheiros, consulte **[Caminhos de armazenamento das aplicações](./docker-app-paths "Veja onde as aplicações guardam dados e como os mover")**.

## Quando os contentores enchem a unidade do sistema

A unidade do sistema é normalmente a mais pequena e os contentores escrevem nela por defeito. As imagens Docker e os dados das aplicações crescem em silêncio até as atualizações falharem e as aplicações se comportarem de forma estranha.

Definir cedo a localização dos dados das aplicações é a forma de o prevenir, e **[Caminhos de armazenamento das aplicações](./docker-app-paths "Veja onde as aplicações guardam dados e como os mover")** explica como. Se a unidade do sistema já está cheia, a ferramenta Data Migration resolve-o numa execução: migre as imagens Docker e os dados das aplicações para o seu espaço de armazenamento e a unidade do sistema fica livre.

## Quando migra dados de RAID

Substituir unidades num array RAID, ou passar para um array maior, segue o mesmo caminho. Migre cada categoria para o novo espaço de armazenamento, uma de cada vez. Quando a última terminar, o array antigo fica livre para ser reformado. As aplicações continuam a funcionar durante todo o processo e a migração não reinstala nem reconfigura nada.

## Como mover

1. Abra **Definições > Data Migration**.

![Página de Definições do ZimaOS com a entrada Data Migration e as pastas de armazenamento listadas](/images/guides/data-migration-entry.webp)

2. Selecione o item que pretende migrar e clique no botão **Modify Location** à direita.

![Página Data Migration com o botão Modify Location junto a cada item selecionável](/images/guides/data-migration-modify-location.webp)

3. Escolha o novo espaço de armazenamento e clique em **Next**.

![Assistente Data Migration com a seleção do espaço de armazenamento e o botão Next](/images/guides/data-migration-choose-space.webp)

4. Confirme como os conflitos são tratados. Quando um ficheiro já existe no destino, escolha o que acontece: ignorá-lo, substituí-lo ou manter ambos. Escolha também se os ficheiros originais permanecem na unidade antiga ou são removidos após uma migração verificada. Depois marque a caixa de aceitação e clique em **Start Migration**.


5. O progresso é apresentado em ecrã inteiro e não podem ser realizadas outras operações durante a migração.

![Ecrã de progresso da Data Migration com o estado da migração em ecrã inteiro](/images/guides/data-migration-progress.webp)

6. Quando termina, uma janela mostra os detalhes da migração. Em migrações grandes, a ferramenta fornece um relatório completo dos resultados.

![Janela de conclusão da Data Migration com os detalhes da migração terminada](/images/guides/data-migration-done.webp)

![Página de relatório da Data Migration com os resultados completos de uma migração grande](/images/guides/data-migration-report.webp)

## Limitações

A ferramenta migra as três categorias acima. As partições do sistema e os dados fora dessas categorias não fazem parte dela.

## Relacionado

- **[Caminhos de armazenamento das aplicações](./docker-app-paths "Veja onde as aplicações guardam dados e como os mover")** — movimentos por aplicação e onde vivem os dados das aplicações
- **[Configuração do armazenamento](./storage-setup "Escolha as unidades e a configuração de armazenamento adequadas")** — planeie os seus espaços de armazenamento
- **[Ligar outro NAS](./synology-to-zimacube-migration "Ligue outro NAS ao ZimaOS para mover ficheiros ou fazer cópias entre dispositivos")** — os dados entre dispositivos passam pela aplicação Files
- **[Estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")** — os anéis externo e de segundo dispositivo do seu plano
