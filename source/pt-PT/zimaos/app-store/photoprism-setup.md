---
title: Como executar o PhotoPrism no ZimaOS
seo_title: "PhotoPrism no ZimaOS: galeria de fotos autoalojada com IA"
description: Instale o PhotoPrism a partir da App Store do ZimaOS — uma galeria de fotos privada com IA, etiquetagem automática, pesquisa inteligente e álbuns no seu próprio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O PhotoPrism tem suporte nativo no App Catalog do ZimaOS. Consulte a [página do PhotoPrism na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.photoprism) para obter os detalhes mais recentes da aplicação.

O PhotoPrism é uma galeria de fotos autoalojada com IA — mantém as suas fotos privadas no seu próprio dispositivo ZimaOS, oferecendo ao mesmo tempo a etiquetagem automática, a pesquisa inteligente e os álbuns que esperaria de um serviço na nuvem. Sem subscrição, sem limites de armazenamento e sem ninguém a esquadrinhar as suas memórias.

## Porquê o PhotoPrism?

- **As suas fotos continuam suas** — tudo vive no seu próprio disco ZimaOS, não na nuvem de outra pessoa.
- **A IA organiza por si** — rostos, locais e objetos são etiquetados automaticamente, para encontrar qualquer foto por pesquisa em vez de percorrer.
- **Gratuito e ilimitado** — sem subscrição, a capacidade só é limitada pelo seu disco e os seus originais nunca são comprimidos.
- **Sem dependência** — as suas fotos são ficheiros normais em `/DATA/Gallery`, pelo que pode fazer cópias de segurança ou migrá-las a qualquer momento.

## Pré-requisitos

- Uma instalação do ZimaOS em funcionamento.
- Uma porta livre para a interface web (por predefinição: **2342**).

## App Catalog

1. Encontre o PhotoPrism no App Catalog do ZimaOS. Abra a **App Store** → procure por "PhotoPrism" → clique em **Install**.

![Página da aplicação PhotoPrism na App Store do ZimaOS com instalação e instalação personalizada](/images/app-store/photoprism-app-store.webp)

2. **Está pronto a usar!**

![Ícone do PhotoPrism no painel do ZimaOS após a conclusão da instalação](/images/app-store/photoprism-installed-dashboard.webp)

## Configuração

Os passos seguintes **NÃO são necessários** — pode começar imediatamente com a configuração **PREDEFINIDA**.

O ZimaOS suporta vários métodos de configuração, incluindo edição por formulário e edição secundária em YAML. As definições principais que pode querer ajustar:

- **Volumes** — onde são guardadas as suas fotos e os dados do PhotoPrism. A sua biblioteca de fotos vive em `/DATA/Gallery` no ZimaOS (montada em `/photoprism/originals`), e a base de dados, o índice, a cache e as miniaturas são guardados em `/DATA/AppData/photoprism/storage` (montado em `/photoprism/storage`). Mantenha a pasta de armazenamento fora da pasta de originais.
- **Porta** — a porta externa para aceder à interface web (por predefinição: 2342).

![Definições do contentor PhotoPrism com a porta 2342 e os mapeamentos de volumes](/images/app-store/photoprism-config-form.webp)

## Configuração inicial

Após a instalação, clique no ícone do PhotoPrism. Aparece uma janela com a conta e a palavra-passe predefinidas — use o nome de utilizador e a palavra-passe aí mostrados para iniciar sessão.

![Janela de dicas do PhotoPrism com o nome de utilizador e a palavra-passe de administrador predefinidos](/images/app-store/photoprism-default-credentials.webp)

Depois de iniciar sessão, está pronto. Para alterar a conta ou a palavra-passe predefinidas mais tarde, abra **Settings → Account**.

![Definições de conta do PhotoPrism com opções de alteração de palavra-passe e autenticação de dois fatores](/images/app-store/photoprism-account-settings.webp)

## Usar o PhotoPrism

1. Adicione as suas fotos — coloque as suas imagens em `/DATA/Gallery` (ou carregue-as a partir da interface web) e depois inicie a indexação a partir do separador **Library**. O PhotoPrism organiza-as e etiqueta-as automaticamente com IA.

![Separador Library do PhotoPrism com opções de reanálise completa e limpeza antes da indexação](/images/app-store/photoprism-library-index.webp)

2. Navegue — abra a subpágina **Calendar** para navegar pelas fotos por data, ou use a **Search** para encontrar fotos por palavra-chave, localização ou objetos detetados por IA.
3. Organize e partilhe — crie álbuns na subpágina **Albums** para organizar as suas fotos e partilhá-las com família ou amigos.

## Experimente a seguir

Quando as suas fotos estiverem indexadas, abra o PhotoPrism e experimente — sem etiquetagem manual:

- **Pesquise algo natural** — escreva "cat", "beach" ou "birthday" e o PhotoPrism encontra todas as correspondências em segundos.
- **Abra People** — veja as suas fotos agrupadas automaticamente por rosto.
- **Abra Places** — veja as suas fotos fixadas num mapa do mundo.
- **Abra Moments** — o PhotoPrism agrupa automaticamente as suas fotos em eventos e viagens.

## Guias relacionados

- Quer cópia de segurança automática do telemóvel além de uma galeria? Consulte [Cópia de segurança de fotos com o Immich](./immich-photo-backup "Faça cópias de segurança automáticas das fotos do telemóvel com o Immich no ZimaOS") e [Sincronizar fotos com o Immich](./sync-photos-with-immich "Mantenha as fotos do telemóvel sincronizadas com um servidor Immich no ZimaOS").

Não sabe qual escolher? Escolha o Immich quando o objetivo principal for a cópia de segurança automática do telemóvel; escolha o PhotoPrism quando quiser uma biblioteca com IA sobre uma pasta de ficheiros que gere por si.

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o PhotoPrism no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.gg/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
