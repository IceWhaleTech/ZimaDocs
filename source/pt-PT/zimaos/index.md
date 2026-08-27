---
title: Visão geral do ZimaOS
seo_title: "Guias do ZimaOS: armazenamento, partilha, cópias de segurança e sistema"
description: "Guias de configuração do ZimaOS para principiantes, incluindo instalação, partilha de ficheiros, cópias de segurança, ligação à nuvem e gestão do NAS."
type: "Docs"
author: Lauren Pan
tip: Não remova este bloco de metadados. O campo description é utilizado como resumo do artigo; se ficar vazio, será usado o primeiro parágrafo.
---

Reunimos estes guias para o ajudar a ficar à vontade com o ZimaOS, quer tenha acabado de abrir a caixa, quer já o utilize há algum tempo.

## Configuração e armazenamento

Comece aqui depois do primeiro arranque. Primeiro, trate das definições fundamentais.

- **[Primeiros passos](./get-started "Configure o ZimaOS desde o primeiro arranque com o ZimaClient e a criação da conta")** — defina o idioma, a rede e a conta
- **[Visão geral das funcionalidades](./features "Conheça o acesso remoto, o armazenamento e as aplicações do ZimaOS")** — explore o Data Station, a gestão de aplicações e as definições
- **[Configuração do armazenamento](./storage-setup "Escolha as unidades e a configuração de armazenamento adequadas")** — selecione as unidades certas para a sua utilização
- **[Opções de RAID](./raid-options "Compare níveis RAID e JBOD com instruções de configuração")** — consulte a referência detalhada de RAID
- **[Caminhos de armazenamento das aplicações](./docker-app-paths "Veja onde as aplicações guardam dados e como os mover")** — escolha a unidade onde ficam os dados das aplicações

## Sincronização e cópias de segurança

Depois da configuração inicial, importe os conteúdos e decida onde cada tipo de dados deve ficar.

- **[Cópia de segurança do telemóvel](./phone-backup "Faça cópias automáticas das fotografias e dos ficheiros do telemóvel com o ZimaClient")** — proteja automaticamente os dados do telemóvel
- **[Cópia de segurança do computador](./computer-backup "Copie o computador para o ZimaOS através do Finder, Explorador ou sincronização")** — configure o acesso e as cópias agendadas do portátil
- **[Ligar unidades na nuvem](./cloud-drive-connect "Ligue o Google Drive, Dropbox ou OneDrive ao ZimaOS")** — importe dados dos principais serviços de nuvem
- **[Migrar de outro NAS](./synology-to-zimacube-migration "Migre ficheiros de um NAS Synology para o ZimaOS por etapas")** — siga o percurso recomendado a partir de Synology
- **[Transferência manual de Synology](./from-synology-to-zimacube-migrate-all-files "Monte partilhas do Synology DSM em Files e copie os ficheiros")** — procedimento manual através de SMB
- **[Mover dados entre unidades](./data-migration "Mova imagens Docker, dados de aplicações e pastas entre unidades")** — utilize a ferramenta integrada quando uma unidade fica cheia
- **[Cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja o NAS com a regra de cópia de segurança 3-2-1")** — crie um plano que proteja todos os dados importantes
- **[Cópia com Time Machine](./time-machine-backup "Faça cópias do Mac para o ZimaOS através da rede")** — proteja o Mac com o Time Machine

## Acesso e partilha

Quando os dados estiverem organizados, disponibilize-os com segurança aos utilizadores e dispositivos certos.

- **[Acesso remoto](./remote-access "Configure o acesso remoto ao servidor doméstico")** — ligue-se ao ZimaOS fora de casa
- **[Transferir o ZimaClient](./zimaclient-install "Instale o ZimaClient no computador e no telemóvel")** — instale o cliente para navegar nos ficheiros
- **[Partilha de ficheiros SMB](./smb-troubleshooting "Partilhe ficheiros por SMB no Finder e no Explorador")** — disponibilize ficheiros na rede local
- **[Partilhar por ligação](./share-via-link "Crie ligações de partilha que não exigem uma conta")** — envie ficheiros através de uma ligação
- **[Samba com vários utilizadores](./samba-member-setup "Defina permissões por utilizador nas partilhas Samba")** — atribua níveis de acesso diferentes

## Métodos de instalação

Escolha a forma de instalar o ZimaOS que melhor corresponde ao hardware e ao ambiente.

- **[Instalar o ZimaOS](./how-to-install-zimaos "Instale o ZimaOS de raiz, passo a passo")** — grave a imagem numa unidade USB e arranque o dispositivo
- **[Instalar no Proxmox](./install-zimaos-on-proxmox-ve "Execute o ZimaOS como máquina virtual no Proxmox VE")** — utilize o ZimaOS numa máquina virtual
- **[Migrar do CasaOS](./casaos-to-zimaos-migration "Transfira o servidor doméstico do CasaOS para o ZimaOS")** — migre a configuração existente
- **[Obter o ID de rede](./remote-id "Encontre o ID de rede do ZimaOS e ligue outros dispositivos")** — consulte o identificador único do dispositivo
- **[Repor a palavra-passe](./password-recovery "Recupere ou altere a palavra-passe da conta ZimaOS")** — recupere o acesso à conta

## Sistema

Mantenha o dispositivo estável e preparado para recuperar de uma falha.

- **[Configuração de UPS](./ups-setup "Ligue uma UPS ao NAS para proteção contra falhas de energia")** — evite danos provocados por cortes inesperados
- **[Recuperação do sistema](./system-recovery "Restaure o ZimaOS depois de uma falha ou reposição")** — recupere o sistema quando algo corre mal
- **[Instalação offline](./offline-install "Instale o ZimaOS sem ligação à Internet")** — implemente o sistema num ambiente isolado
- **[Função de pesquisa](./zimaos-search "Encontre rapidamente ficheiros em todo o NAS")** — pesquise em todas as unidades

---

## Próximo passo

Não precisa de aprender tudo de uma vez. Continue pelo caminho que corresponde ao que pretende fazer agora.

- Comparar dispositivos: **[Visão geral do hardware](../hardware/ "Compare ZimaCube, ZimaBoard e ZimaBlade")** — consulte as três linhas de produto
- Executar aplicações: **[Visão geral da Loja de aplicações](./app-store/ "Explore aplicações multimédia, autoalojadas e de IA")** — servidores multimédia, aplicações autoalojadas e agentes de IA
- Aprofundar: **[Visão geral de desenvolvimento](../developer/ "Aprenda sobre ZFS, RAID, redes e a API do ZimaOS")** — ZFS, RAID, redes e API do ZimaOS
