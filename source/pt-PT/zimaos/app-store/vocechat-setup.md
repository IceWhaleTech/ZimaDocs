---
title: Como executar o VoceChat no ZimaOS
seo_title: "VoceChat no ZimaOS: servidor de chat de equipa autoalojado"
description: Instale o VoceChat a partir da App Store do ZimaOS — um servidor de chat leve e privado com chats de grupo, partilha de ficheiros e um widget incorporável no seu próprio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O VoceChat tem suporte nativo no App Catalog do ZimaOS. Consulte a [página do VoceChat na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.vocechat) para obter os detalhes mais recentes da aplicação.

O VoceChat é um servidor de chat autoalojado e leve — oferece-lhe chats de grupo privados, mensagens diretas, partilha de ficheiros, menções @, bots e um widget de chat incorporável, tudo a correr no seu próprio hardware em vez da nuvem de um fornecedor de mensagens.

## Pré-requisitos

- Uma instalação do ZimaOS em funcionamento.
- Uma porta livre para o servidor de chat (por predefinição: **3009**).

## App Catalog

1. Encontre o VoceChat no App Catalog do ZimaOS. Abra a **App Store** → procure por "VoceChat".

![Página da aplicação VoceChat na App Store do ZimaOS com o botão de instalação](/images/app-store/vocechat-app-store.webp)

2. **Está pronto a usar!**

![Ícone do VoceChat no painel do ZimaOS após a conclusão da instalação](/images/app-store/vocechat-installed-dashboard.webp)

## Configuração

Os passos seguintes **NÃO são necessários** — pode começar imediatamente com a configuração **PREDEFINIDA**.

O ZimaOS suporta vários métodos de configuração, incluindo edição por formulário e edição secundária em YAML.

![Definições do contentor VoceChat com a porta 3009 e a montagem do volume de dados](/images/app-store/vocechat-config-form.webp)

As definições principais que pode querer ajustar:

- **Volumes** — onde são guardados o seu histórico de chat e os ficheiros carregados (por predefinição: `/DATA/AppData/vocechat/home/vocechat-server/data`, montado em `/home/vocechat-server/data`).
- **Porta** — a porta externa para aceder à interface web (por predefinição: 3009).

## Configuração inicial

No ZimaOS, a configuração inicial é igualmente simples — sem ficheiros de configuração para editar. Após a instalação, abra o VoceChat e siga o assistente de configuração:

1. Defina um nome para o seu servidor.
2. Crie a sua conta de administrador (e-mail + palavra-passe).
3. Escolha o modo de registo (registo aberto ou apenas por convite).

![Ecrã de boas-vindas do VoceChat com opções para convidar colegas e atualizar](/images/app-store/vocechat-first-run-welcome.webp)

Quando terminar, partilhe a ligação de convite com a sua família ou equipa e comece a conversar de imediato. O VoceChat também oferece aplicações oficiais para iOS/Android e um widget de chat incorporável para o seu site.

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o VoceChat no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.com/invite/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
