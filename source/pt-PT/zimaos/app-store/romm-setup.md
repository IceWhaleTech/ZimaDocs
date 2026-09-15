---
title: Como executar o RomM no ZimaOS
seo_title: "RomM no ZimaOS: gestor de biblioteca de ROMs autoalojado"
description: Instale o RomM a partir da App Store do ZimaOS — organize, navegue e partilhe a sua coleção de ROMs numa biblioteca autoalojada no seu próprio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O RomM tem suporte nativo no App Catalog do ZimaOS. Consulte a [página do RomM na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.romm) para obter os detalhes mais recentes da aplicação.

O RomM é um gestor de biblioteca de ROMs autoalojado — analisa a sua coleção de jogos, obtém capas e metadados e oferece uma biblioteca baseada no navegador que pode navegar e partilhar a partir de qualquer dispositivo da sua rede.

## Pré-requisitos

- Uma instalação do ZimaOS em funcionamento.
- A sua biblioteca organizada na [estrutura de pastas](https://docs.romm.app/latest/getting-started/folder-structure/ "Guia do RomM sobre a estrutura de pastas esperada para a biblioteca de ROMs") esperada.

## App Catalog

1. Encontre o RomM no App Catalog do ZimaOS. Abra a **App Store** → procure por "RomM".

![Página da aplicação RomM na App Store do ZimaOS com o botão de instalação e a categoria Media](/images/app-store/romm-app-store.webp)

2. **Está pronto a usar!**

![Ícone da aplicação RomM no painel do ZimaOS após a conclusão da instalação](/images/app-store/romm-installed-dashboard.webp)

## Configuração

Os passos seguintes **NÃO são necessários** — pode começar imediatamente com a configuração **PREDEFINIDA**.

O ZimaOS suporta vários métodos de configuração, incluindo edição por formulário e edição secundária em YAML.

![Definições do contentor RomM com os separadores Form e YAML e as variáveis de ambiente](/images/app-store/romm-config-form.webp)

## Importar ROMs

Importar ROMs no ZimaOS é muito fácil — basta arrastar e largar. Abra o ZimaOS Files, navegue até ao diretório onde a sua biblioteca está configurada (por predefinição é `AppData/romm/library/roms`) e arraste os seus ficheiros para carregar. O RomM apanha-os e adiciona-os à sua biblioteca com capas e metadados.

## RomM, RetroArch e Batocera

Estas três ferramentas cobrem partes diferentes dos jogos retro:

- **RomM** organiza a coleção — analisa os seus ficheiros, obtém capas e metadados e dá-lhe uma biblioteca partilhável para navegar. Não é o emulador em si.
- **[RetroArch](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.retroarch "Página da aplicação RetroArch na App Store do ZimaOS")** joga os jogos — é o frontend de emulação que corre ROMs de dezenas de sistemas.
- **[Batocera](./batocera-arcade-setup "Transforme uma ZimaBoard numa consola arcade retro com o Batocera")** transforma um dispositivo inteiro numa consola — é um sistema operativo retro dedicado no qual arranca uma ZimaBoard, em vez de uma aplicação no ZimaOS.

Uma configuração comum é manter a coleção arrumada no RomM no ZimaOS e jogar num dispositivo RetroArch ou Batocera.

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o RomM no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.gg/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
