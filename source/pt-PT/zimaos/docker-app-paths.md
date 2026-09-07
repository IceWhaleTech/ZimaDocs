---
title: Onde as aplicações guardam os dados
seo_title: "Onde as aplicações do ZimaOS guardam os dados: caminhos Docker"
description: "Saiba onde as aplicações do ZimaOS guardam dados nas unidades. Compreenda o mapeamento de caminhos dos contentores Docker, as localizações de configuração e como mover dados entre unidades."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Quando instala uma aplicação a partir da App Store, esta guarda os ficheiros algures nas unidades. Saber onde ficam ajuda a incluir as pastas certas nas cópias de segurança, a mover dados para uma unidade maior e a evitar surpresas se uma aplicação desaparecer após uma atualização.

As aplicações da App Store são executadas em contentores. Dentro do contentor, a aplicação tem o seu próprio sistema de ficheiros, mas os dados importantes são mapeados para pastas reais nas unidades, fora do contentor. Se eliminar o contentor, os ficheiros permanecem. As funcionalidades nativas do ZimaOS, como Files e VM, não são contentores; esta explicação aplica-se apenas às aplicações da App Store.

## Manter os dados das aplicações fora da unidade do sistema

Antes de instalar aplicações, recomendamos que direcione os dados para o espaço criado no tutorial **[Configuração do armazenamento](./storage-setup "Escolha uma configuração de armazenamento com opções RAID adequadas às suas necessidades")**.

A unidade do sistema é normalmente pequena. Se todas as aplicações guardarem dados nela, fica cheia rapidamente. Fotografias sincronizadas pelo Immich, multimédia catalogada pelo Plex e documentos indexados pelo Paperless ficam, por predefinição, na unidade do sistema. Quando esta fica cheia, as atualizações falham, as aplicações comportam-se de forma anormal e o dispositivo abranda.

Definir desde o início o armazenamento principal como destino mantém tudo organizado: a unidade do sistema contém o sistema operativo e o conjunto de armazenamento contém os dados. Se uma unidade ficar cheia, pode mover aplicações individuais sem reinstalar.

![Página Settings Apps do ZimaOS com App data location apontado para o armazenamento principal](/images/guides/app-data-path-config.png)

Aceda a **Settings > Apps**, localize **App data location** e selecione o espaço criado. O ZimaOS move os dados por si.

O Plex, um servidor multimédia, mostra como funciona.

## Exemplo do Plex

Ao instalar o Plex, o ZimaOS configura duas pastas.

![Cartão do Plex na App Store do ZimaOS com o botão de instalação e os detalhes](/images/guides/plex-app-store-card.png)

**Config.** Contém definições, base de dados e preferências. No contentor é `/config`. Nas unidades fica sob App data location: `/DATA/AppData/plex/config` por predefinição ou no espaço escolhido. Mantém-se após reinstalações e atualizações.

**Media.** Contém filmes e séries. No contentor é `/media`. Nas unidades corresponde à pasta Media do espaço de armazenamento. Coloque aí os vídeos para o Plex os ler diretamente.

Pode ver e alterar os caminhos nas definições da aplicação no ZimaOS. Cada caminho de volume tem um botão de edição.

![Definições do Plex no ZimaOS com os caminhos config e media e botões de edição](/images/guides/plex-volume-path-settings.png)

## Por que motivo é importante

Há duas razões práticas para conhecer os caminhos.

Primeiro, faça cópias das pastas nas unidades, não do interior do contentor. O contentor é descartável; os dados nas unidades não são.

Segundo, se uma unidade ficar cheia, pode apontar os dados da aplicação para outra unidade. Mova a pasta e atualize o caminho nas definições, sem reinstalar.

## Limpar a cache das aplicações

Com o tempo, as aplicações acumulam cache que pode ocupar espaço sem dar por isso. A página **Settings > Apps** apresenta o espaço utilizado por cada aplicação. Se alguma crescer inesperadamente, limpe aí a cache. A aplicação continua a funcionar e recupera o espaço.

![Página Settings Apps do ZimaOS com aplicações instaladas, utilização do disco e opções de limpeza da cache](/images/guides/app-data-cleanup.png)

## A seguir

- **[Configuração do armazenamento](./storage-setup "Escolha uma configuração de armazenamento com opções RAID adequadas às suas necessidades")** — decida que unidades guardam os dados
- **[Migração de dados](./data-migration "Mova imagens Docker, dados de aplicações e pastas entre unidades no ZimaOS")** — utilize a ferramenta integrada quando uma unidade ficar cheia
- **[Descrição geral da App Store](./app-store/ "Explore as categorias da App Store para multimédia, aplicações autoalojadas e IA")** — veja que aplicações pode instalar
