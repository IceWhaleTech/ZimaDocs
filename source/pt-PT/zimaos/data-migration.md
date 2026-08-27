---
title: Mover dados entre unidades
seo_title: "Mover dados entre unidades no ZimaOS: Docker, dados de aplicações e pastas"
description: "Mova imagens Docker, dados de aplicações e pastas de utilizador entre espaços de armazenamento do ZimaOS com a ferramenta Data Migration integrada."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Quando uma unidade fica cheia, não é necessário reinstalar nada. A ferramenta de migração integrada move imagens Docker, dados de aplicações e pastas de utilizador para outro espaço de armazenamento, mantendo tudo a funcionar.

## O que pode mover

- Imagens Docker
- Dados de aplicações Docker
- Bases de dados do utilizador (Gallery, Downloads, Documents, Media e Backup)

## Como mover

![Página Settings do ZimaOS com a entrada Data Migration e a lista de pastas de armazenamento](https://manage.icewhale.io/api/static/docs/1727178430378_image.png)

1. Abra **Settings > Data Migration**.
2. Selecione o item que pretende migrar e clique no botão **Modify Location** à direita.

![Página Data Migration com o botão Modify Location junto a cada item selecionável](https://manage.icewhale.io/api/static/docs/1727178444256_image.png)

3. Escolha o novo espaço de armazenamento e clique em **Next**.

![Assistente Data Migration com a seleção do espaço de armazenamento e o botão Next](https://manage.icewhale.io/api/static/docs/1727178450237_image.png)

4. Selecione a caixa "I acknowledge and confirm this action" e clique em **Start Migration**.

![Ecrã de confirmação do Data Migration com a caixa de aceitação e o botão Start Migration](https://manage.icewhale.io/api/static/docs/1727178455511_image.png)

5. O progresso é apresentado em ecrã inteiro e não é possível realizar outras operações durante a migração.

![Ecrã de progresso do Data Migration com o estado da migração em ecrã inteiro](https://manage.icewhale.io/api/static/docs/1727178460307_image.png)

6. Quando terminar, uma janela de contexto apresenta os detalhes da migração.

![Janela de conclusão do Data Migration com os detalhes da migração terminada](https://manage.icewhale.io/api/static/docs/1727178465734_image.png)

## Relacionado

- **[Caminhos de armazenamento das aplicações](./docker-app-paths "Onde as aplicações guardam dados nas unidades e como os mover")** — compreenda onde ficam os dados antes de os transferir
- **[Configuração do armazenamento](./storage-setup "Escolha uma configuração de armazenamento com opções RAID adequadas às suas necessidades")** — planeie os espaços de armazenamento
