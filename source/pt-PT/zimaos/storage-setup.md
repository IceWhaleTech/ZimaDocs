---
title: Escolher a configuração de armazenamento
seo_title: "Configuração de armazenamento no ZimaOS: escolha RAID, NAS ou ZFS para o seu servidor doméstico"
description: "Como configurar o armazenamento no ZimaOS. Compare disco único, RAID e ZFS para diferentes utilizações: NAS doméstico, servidor de aplicações, agente de IA e partilha de ficheiros numa pequena empresa."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

A forma de configurar as unidades depende do que está a construir. Um servidor multimédia doméstico precisa de um armazenamento diferente do utilizado por um agente de IA que funciona todo o dia.

A configuração do armazenamento depende da utilização do dispositivo. Apresentamos quatro caminhos comuns. Não precisa de saber previamente o que é RAID.

## Casos de utilização comuns

- **Dados da família** — comece com RAID 1 e evolua para RAID 5 à medida que a biblioteca cresce
- **Servidor de aplicações** — SSD para velocidade e RAID para a biblioteca multimédia
- **Agente de IA** — uma única unidade fiável, com cópias de segurança regulares
- **Pequena empresa** — RAID 5, equilibrando capacidade e disponibilidade

![Painel de armazenamento do ZimaOS nas Definições com uma visão geral dos discos, espaços de armazenamento e opções](/images/guides/storage-dashboard-overview.png)

### Fotografias, vídeos e ficheiros da família

Pretende um único local para tudo o que a família cria: fotografias de todos os telemóveis, vídeos domésticos e documentos. O dispositivo fica na sala e é utilizado por todos em casa.

Comece com duas unidades idênticas em RAID 1. Os dados são espelhados. Se uma unidade falhar, não perde nada.

**[Ligue unidades na nuvem](./cloud-drive-connect "Ligar o Google Drive, Dropbox ou OneDrive ao ZimaOS para efetuar cópias de segurança")** para adicionar flexibilidade. Retire grandes bibliotecas multimédia do Google Drive ou iCloud para reduzir os custos de subscrição. Mantenha uma terceira cópia externa dos ficheiros insubstituíveis como parte de uma estratégia de cópia de segurança 3-2-1. Divida os projetos partilhados entre o armazenamento local e a nuvem para que os colaboradores possam aceder ao que precisam.

Se a biblioteca ultrapassar a capacidade de duas unidades, o RAID 5 com três ou mais unidades permite continuar a crescer mantendo a proteção.

### Servidor de aplicações e anfitrião Docker

Está a executar o Jellyfin, Paperless, Pi-hole e algumas outras aplicações. Para certos dados, valoriza mais a velocidade do que a redundância; para outros, acontece o contrário.

Um único SSD para os dados das aplicações proporciona um arranque rápido dos contentores e um acesso ágil aos ficheiros. Coloque os conteúdos multimédia e os documentos num conjunto RAID 1 ou RAID 5 separado, onde a redundância é importante.

### Servidor de agentes de IA

Está a executar o OpenClaw ou o Hermes. O agente funciona 24 horas por dia, escrevendo registos e memória. Como os dados são principalmente texto, a capacidade raramente é o problema. O mais importante é a fiabilidade.

Um único SSD, um HDD básico ou até a unidade do sistema funcionam bem. Os dados são sobretudo texto: registos, ficheiros de memória e configurações. Efetue cópias de segurança regularmente. Se executar vários agentes juntamente com outras aplicações, o RAID 1 em dois SSD custa um pouco mais, mas elimina um ponto único de falha.

### Partilha de ficheiros numa pequena empresa

Algumas pessoas num escritório ou estúdio precisam de acesso partilhado aos ficheiros dos projetos. A velocidade é importante durante o dia de trabalho. A redundância é sempre importante.

O RAID 5 com três ou mais unidades equilibra capacidade, velocidade e proteção. Uma unidade pode falhar sem que ninguém dê por isso. A principal vantagem é poder adicionar mais unidades ao longo do tempo, à medida que as necessidades de armazenamento aumentam, sem reconstruir tudo de raiz.

## Como configurar

O ZimaOS trata da configuração. Quando liga um novo disco, é apresentada uma notificação a pedir que o configure.

![Notificação do ZimaOS que pede para configurar um novo disco quando a unidade é detetada](/images/guides/storage-new-disk-notification.png)

1. Aceda a **Definições > Armazenamento**.
2. Clique em **Combinar** para abrir o assistente de configuração de discos.

![Assistente de configuração de armazenamento do ZimaOS aberto a partir do botão Combinar, com as opções de configuração dos discos](/images/guides/storage-combine-wizard.png)

3. Escolha a configuração e selecione as unidades.
4. Atribua um nome ao conjunto e confirme.

![Ecrã de criação de armazenamento do ZimaOS onde seleciona as unidades, atribui um nome ao conjunto e confirma a configuração](/images/guides/storage-create-name.png)

## Depois da criação

Depois de configurar o armazenamento, verá o conjunto e o respetivo estado em **Definições > Armazenamento**. Um conjunto em bom estado apresenta um indicador verde. Nesta página, pode verificar o estado dos discos, a capacidade disponível e as velocidades de leitura e escrita.

![Página de estado do armazenamento do ZimaOS com o estado do conjunto, a capacidade disponível e as velocidades de leitura e escrita](/images/guides/storage-disk-status.png)

Se uma unidade de um conjunto RAID falhar, o estado muda para degradado. Os dados permanecem totalmente acessíveis e as operações de leitura e escrita continuam normalmente. Substitua a unidade avariada e o ZimaOS orientá-lo-á durante o processo de reconstrução.

Os discos individuais e as unidades USB apresentam uma vista de estado mais simples com a respetiva condição e capacidade. Não é necessária gestão RAID.

As unidades USB seguem a mesma lógica dos HDD e SSD internos: ligue uma e poderá utilizá-la como armazenamento, adicioná-la a um conjunto ou expandir o espaço existente.

Para obter instruções detalhadas sobre cada nível RAID, consulte **[Opções RAID](./raid-options "Explicação dos níveis RAID e JBOD com instruções de configuração passo a passo")**. Se pretender utilizar ZFS para instantâneos e integridade de dados avançada, o **[guia de configuração do ZFS](../developer/zfs-setup "Configurar o ZFS no ZimaOS para obter instantâneos, somas de verificação e integridade de dados")**, na secção Desenvolvimento, apresenta o processo.

Depois de configurar o armazenamento, o passo seguinte é importar os dados. **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** e **[Cópia de segurança do computador](./computer-backup "Efetuar uma cópia de segurança do computador para o ZimaOS através do Finder, Explorador ou sincronização")** abrangem os dispositivos que utiliza todos os dias. **[Mover dados entre unidades](./data-migration "Mover imagens Docker, dados de aplicações e pastas entre unidades no ZimaOS")** está disponível quando uma unidade fica cheia. **[Caminhos de armazenamento das aplicações](./docker-app-paths "Onde as aplicações guardam os dados nas unidades e como movê-los")** permite direcionar cada aplicação para a unidade certa.
