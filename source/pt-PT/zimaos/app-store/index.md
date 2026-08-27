---
title: Visão geral da Loja de aplicações
seo_title: "Loja de aplicações do ZimaOS: multimédia, autoalojamento e IA no NAS"
description: "Descubra o que pode criar com um NAS Zima: servidores multimédia, aplicações autoalojadas, agentes de IA e servidores de jogos executados no seu hardware."
type: "Docs"
author: Lauren Pan
tip: Não remova este bloco de metadados. O campo description é utilizado como resumo do artigo; se ficar vazio, será usado o primeiro parágrafo.
---

Gostamos de ver o que as pessoas criam com estas máquinas. Ao longo dos anos, a comunidade transformou dispositivos Zima em centros multimédia, bloqueadores de anúncios, assistentes de IA e servidores de jogos. Sempre que pensamos já ter visto tudo, surge uma nova ideia.

Executar os seus próprios serviços dá-lhe controlo real: o hardware é seu, os dados ficam consigo e ninguém pode retirar o serviço ou alterar o preço.

## Servidor multimédia

É aqui que a maioria das pessoas começa. Transforme o NAS num centro de streaming para filmes, séries, música e fotografias em qualquer ecrã da casa.

- **[Servidor multimédia Jellyfin](./media-server-setup-with-jellyfin "Configure o Jellyfin para transmitir filmes, séries e música a partir do NAS")** — gratuito, de código aberto e compatível com muitos dispositivos
- **[Servidor multimédia Plex](./plex-setup-guide "Instale o Plex Media Server e transmita a biblioteca para qualquer dispositivo")** — interface cuidada e aplicações para praticamente todas as plataformas
- **[Transcodificação Plex por GPU](./plex-and-gpu-transcoding "Ative a transcodificação por hardware para reproduzir 4K sem interrupções")** — utilize aceleração de hardware para conteúdo 4K
- **[Servidor Emby](./setup-emby-server "Configure o Emby Media Server para transmitir entre dispositivos")** — uma opção intermédia entre Jellyfin e Plex
- **[Sincronização de fotografias com Immich](./sync-photos-with-immich "Sincronize as fotografias do telemóvel com o NAS através do Immich")** — uma alternativa autoalojada ao Google Photos
- **[Cópia de fotografias com Immich](./immich-photo-backup "Configure o Immich em detalhe para proteger a biblioteca")** — definições avançadas de cópia de segurança
- **[Servidor DLNA](./dlna-server-setup "Transmita conteúdo para televisores antigos e dispositivos DLNA")** — compatibilidade com leitores DLNA
- **[Servidor de câmaras NVR](./nvr-camera-server "Ligue câmaras de segurança ao NAS com deteção de objetos por IA")** — vigilância e deteção de objetos no seu servidor
- **[Sincronização de fotografias em massa](./cli-guide "Sincronize milhares de fotografias através da linha de comandos")** — ideal para bibliotecas de grande dimensão

## Aplicações autoalojadas

Estas são algumas das aplicações mais utilizadas pela comunidade. Cada uma substitui um serviço de subscrição por outro que controla.

- **[Sincronização com Syncthing](./syncthing-setup "Mantenha pastas sincronizadas entre dispositivos com Syncthing")** — sincronize computadores e telemóveis
- **[Bloqueador de anúncios Pi-hole](./pi-hole-setup "Bloqueie anúncios em toda a rede com Pi-hole")** — proteja automaticamente todos os dispositivos
- **[Gestão de documentos](./paperless-ngx-install "Gira e pesquise documentos digitalizados com Paperless-ngx")** — transforme papel num arquivo pesquisável
- **[Processamento de documentos com IA](./paperless-ai-install "Classifique e etiquete documentos automaticamente")** — adicione classificação automática ao Paperless
- **[Gestor de filmes Radarr](./radarr-setup "Automatize as transferências e a gestão de filmes")** — escolha os filmes e deixe o Radarr tratar do resto
- **[Rádio na Internet](./azuracast-install "Execute a sua própria estação com AzuraCast")** — crie e gira uma estação online
- **[Monitorização de servidores](./zabbix-install-guide "Monitorize servidores e redes com o Zabbix")** — acompanhe o estado da infraestrutura
- **[Transferência de torrents](./webtorrent-feature "Transfira torrents diretamente para o armazenamento do NAS")** — guarde as transferências no NAS
- **[Guia de configuração do Syncthing](./syncthing-install "Configure opções avançadas do Syncthing")** — ajustes detalhados para vários dispositivos

## IA e aprendizagem automática

Executar IA no seu próprio hardware evita que os dados saiam de casa. A comunidade tem avançado rapidamente nesta direção.

- **[Ativar pesquisa com IA](./enable-ai "Pesquise ficheiros com linguagem natural no servidor doméstico")** — encontre conteúdo através de perguntas normais
- **[Implementar DeepSeek R1](./deploy-deepseek-r1 "Execute o DeepSeek R1 localmente no servidor de agentes")** — utilize um modelo potente em hardware Zima
- **[Transferir modelos de IA](./llm-manual-download "Transfira modelos para instalações offline")** — prepare ambientes isolados ou com pouca largura de banda
- **[Descrição de fotografias com IA](./frigate-ollama-setup "Etiquete e descreva fotografias automaticamente com IA")** — organize a biblioteca de forma automática
- **[Agente OpenClaw](./openclaw-agent-setup "Execute o OpenClaw continuamente e converse através do Telegram")** — um agente sempre disponível no Telegram
- **[Agente Hermes](./hermes-agent-setup "Execute um agente Hermes que aprende e guarda memórias")** — um agente que aprende consigo

## Projetos criativos

Alguns projetos não cabem numa categoria simples e, por isso, acabam por ser os mais surpreendentes.

- **[Arcade Batocera](./batocera-arcade-setup "Transforme o dispositivo Zima numa consola retro com Batocera")** — crie uma consola de jogos clássicos
- **[Servidor Minecraft](./minecraft-friendship-service "Aloje um mundo persistente de Minecraft")** — administre o seu próprio mundo
- **[Streaming Oculus VR](./oculus-quest-media-server "Transmita jogos PC VR sem fios para Oculus Quest")** — jogue no Quest a partir do PC
- **[Migração de cluster PVE](./zimablade-cluster-pve "Mova serviços entre hosts de um cluster Proxmox")** — migre serviços entre hosts
- **[Executar PVE em Debian](./pve-on-debian-for-i226 "Execute Proxmox VE em Debian com adaptadores Intel i226")** — configuração para NIC Intel i226
- **[Lojas de aplicações da comunidade](./awesome-third-party-stores "Explore lojas de aplicações mantidas pela comunidade")** — fontes de aplicações de terceiros
- **[Visão geral de aplicações autoalojadas](./self-hosted-apps "Conheça mais opções de autoalojamento num servidor doméstico")** — mais ideias para ZimaBoard
- **[Jellyfin no ZimaBoard](./jellyfin-setup "Configure o Jellyfin num servidor ZimaBoard")** — guia específico para este hardware

## Próximo passo

Comece com uma aplicação e avance gradualmente. Parte da diversão está em transformá-la num serviço verdadeiramente seu.

- Especificações: **[Visão geral do hardware](../../hardware/ "Compare ZimaCube, ZimaBoard e ZimaBlade")** — detalhes das três linhas de produto
- Aprofundar: **[Visão geral de desenvolvimento](../../developer/ "Aprenda sobre ZFS, RAID, redes e a API do ZimaOS")** — ZFS, RAID, redes e API do ZimaOS
