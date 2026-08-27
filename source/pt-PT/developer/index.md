---
title: Visão geral de desenvolvimento
seo_title: "Guia de desenvolvimento do ZimaOS: ZFS, RAID, redes e API"
description: "Documentação do ZimaOS sobre aplicações Docker e autoalojadas, armazenamento para home server e homelab, redes, SSH, API de NAS OS, publicação da App Store e contribuições."
type: "Docs"
author: Lauren Pan
tip: Não remova este bloco de metadados. O campo description é utilizado como resumo do artigo; se ficar vazio, será usado o primeiro parágrafo.
---

Esta secção destina-se a quem pretende trabalhar por baixo da superfície. Reúne sistemas de armazenamento, redes, a API do ZimaOS e tudo o que um utilizador avançado ou programador precisa.

## Armazenamento e sistemas de ficheiros

O ZimaOS inclui suporte para ZFS, RAID, NFS e iSCSI. Estes guias explicam como começar.

- **[Configuração de ZFS](./zfs-setup "Configure ZFS com instantâneos, somas de verificação e integridade de dados")** — crie e gira pools ZFS
- **[Visão geral de RAID](../zimaos/raid-options "Compare níveis RAID e JBOD")** — escolha o nível adequado
- **[Criar RAID 6](./raid6-setup "Crie RAID 6 com proteção de dupla paridade")** — configure o conjunto passo a passo
- **[Reconstruir RAID](./raid-rebuild-after-reinstall "Recupere o RAID depois de reinstalar o ZimaOS")** — restaure o conjunto após reinstalar o sistema
- **[Partilha de ficheiros NFS](./nfs-on-zimaos "Partilhe ficheiros com clientes Linux e macOS através de NFS")** — configure recursos para Linux e macOS
- **[Guia de iSCSI](./iscsi-guide "Configure armazenamento iSCSI ao nível de blocos")** — crie armazenamento de blocos no NAS
- **[Configuração de iSCSI](./iscsi-setup "Configure iSCSI em detalhe no ZimaOS")** — percorra todas as definições
- **[Clones de cópia com Rsync](./rsync-backup-clones "Clone unidades ou conjuntos de dados completos com rsync")** — duplique dados completos
- **[Ligar Synology por SMB](./synology-smb-connect "Ligue o ZimaOS a um NAS Synology existente")** — utilize partilhas SMB do Synology
- **[Sincronização bidirecional com QTS](./zimaos-qts-two-way-sync-guide "Mantenha pastas sincronizadas entre ZimaOS e QNAP")** — sincronize dados com QNAP
- **[Pastas encriptadas](./folder-encryption "Encripte pastas sensíveis ao nível do sistema de ficheiros")** — proteja dados confidenciais

## Redes e protocolos

Uma rede bem configurada melhora a velocidade e a fiabilidade de todos os outros serviços.

- **[Configuração de rede](./networking "Configure interfaces, rotas e endereços IP estáticos")** — ajuste as interfaces e o endereçamento
- **[Ativar SSH](./how-to-open-ssh-in-zimaos "Ative SSH e configure o acesso remoto básico")** — abra o serviço SSH
- **[Configuração avançada de SSH](./ssh-setup "Proteja SSH com chaves, portas e definições de segurança")** — utilize autenticação por chaves e reforço de segurança
- **[Velocidade de transferência](./nas-transfer-speed-troubleshooting "Encontre e resolva transferências lentas na rede do NAS")** — localize os estrangulamentos

## Desenvolvimento

Crie sobre o ZimaOS através de aplicações Docker, scripts Python ou contribuições diretas para o projeto.

- **[Ambiente Python](./python-setup "Configure Python para scripts e automatização")** — execute automatizações no ZimaOS
- **[Guia de contribuição](./how-to-contribute "Contribua com código, documentação ou comentários")** — participe no projeto
- **[Contribuições da comunidade](./contributions "Consulte controladores e melhorias enviados por utilizadores")** — reveja melhorias da comunidade

## Desenvolvimento da App Store

Crie aplicações Docker e autoalojadas para um home server com ZimaOS, mantenha um catálogo de homelab ou publique uma loja compatível com outro ambiente NAS OS.

- **[Criar e publicar aplicações](./docker-app-publishing "Adapte e empacote uma aplicação Docker para o ZimaOS")** — prepare uma aplicação individual para a loja
- **[Criar uma App Store](./app-store-create-from-scratch "Crie uma loja Docker para ZimaOS, home servers e homelabs")** — construa uma loja compatível com v2
- **[Docker Compose e x-casaos](./app-store-compose-x-casaos "Configure Docker Compose e metadados x-casaos")** — consulte os campos de execução e metadados
- **[CI/CD da App Store](./app-store-ci-cd "Valide, compile e publique uma loja Docker")** — automatize validação, artefactos e alojamento
- **[Migrar da v1 para a v2](./app-store-v1-v2-migration "Migre uma loja CasaOS ou ZimaOS para o protocolo v2")** — mantenha a compatibilidade durante a migração
- **[FAQ para programadores](./app-store-faq "Perguntas frequentes para responsáveis por lojas Docker")** — ID, idiomas, alojamento, compilação e compatibilidade

## API do ZimaOS

A API permite automatizar operações de ficheiros, utilizadores e definições do sistema a partir do seu próprio código.

- **[Guia da API do ZimaOS](./openapi-developer-guide "Consulte autenticação, endpoints e exemplos de integração")** — autenticação, interfaces e exemplos
- **[Explorador da API](./openapi-live-preview "Teste chamadas da API do ZimaOS no navegador")** — execute pedidos em tempo real

## Histórico de versões

A barra lateral inclui as notas de todas as versões do ZimaOS desde a v1.2.2 até à mais recente.

## Próximo passo

Comece pelo que precisa agora; o resto da documentação continuará disponível quando quiser aprofundar.

- Configurar o ZimaOS: **[Visão geral do ZimaOS](../zimaos/ "Consulte instalação, armazenamento e partilha")** — instalação, armazenamento e sistema
- Executar aplicações: **[Visão geral da Loja de aplicações](../zimaos/app-store/ "Explore aplicações multimédia, autoalojadas e de IA")** — multimédia, autoalojamento e agentes de IA
