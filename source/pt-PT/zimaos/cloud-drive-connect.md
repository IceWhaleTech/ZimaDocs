---
title: Ligar unidades na nuvem
seo_title: "Unidades na nuvem no ZimaOS: ligue o Google Drive, Dropbox e OneDrive"
description: "Ligue o Google Drive, Dropbox e OneDrive ao ZimaOS. Monte pastas na nuvem no Files, trabalhe entre o armazenamento local e remoto e utilize a nuvem como cópia externa do seu plano 3-2-1."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

As unidades na nuvem fazem bem o seu trabalho: estão disponíveis em todo o lado, são fiáveis e outras pessoas já partilham ficheiros consigo através delas. O dispositivo ZimaOS é bom no resto: velocidade na sua própria rede, capacidade real e dados sob o seu controlo. Ao ligar os dois ambientes, ganha flexibilidade para mover os dados à medida que as necessidades mudam. Transfira parte dos dados da nuvem para o NAS e reduza o plano da subscrição, ou utilize a nuvem como cópia externa do NAS. É o utilizador que decide onde fica cada elemento.

## Montar unidades na nuvem no Files

A aplicação Files liga-se diretamente ao **Google Drive**, ao **Dropbox** e ao **OneDrive**. Três passos e as suas pastas na nuvem aparecem ao lado do armazenamento local.

### Passo 1: Adicionar uma unidade na nuvem

Abra o **Files** no painel do ZimaOS e adicione uma unidade na nuvem a partir da lista de armazenamento.

![Aplicação Files do ZimaOS com as opções de ligação ao Google Drive, Dropbox e OneDrive](/images/guides/files-cloud-drive-mount.png)

### Passo 2: Autorizar o seu dispositivo

Inicie sessão com a sua conta na nuvem e autorize o acesso. O que autoriza é o seu dispositivo ZimaOS, não um terceiro. Cada pedido começa no seu próprio hardware e circula diretamente entre o seu dispositivo e o seu fornecedor de nuvem. Nada passa por terceiros, pelo que a privacidade e a segurança do acesso ficam nas suas mãos.

![Ecrã de autorização do Files do ZimaOS para ligar o seu dispositivo à conta na nuvem](/images/guides/files-cloud-drive-authorize.png)

### Passo 3: Gerir tudo a partir do seu dispositivo

Depois de ligada, a unidade aparece no Files ao lado dos espaços de armazenamento locais. O seu dispositivo ZimaOS torna-se o único local para gerir tudo entre as suas nuvens: cópia automática, migração em lote ou acesso direto, tudo num único painel.

![Files do ZimaOS com unidades na nuvem ao lado do armazenamento local para gestão unificada](/images/guides/files-cloud-drive-list.png)

## Trabalhar entre o local e a nuvem

Com a nuvem montada, mover dados entre os dois mundos deixa de ser um projeto.

Abra um ficheiro a partir da nuvem, edite-o e guarde-o de novo. Arraste uma pasta local para a unidade na nuvem quando quiser uma cópia noutro local. Se transferir dados suficientes para o dispositivo, pode muitas vezes mudar para um plano de nuvem mais barato. A transferência é executada no Files com verificação, pelo que uma migração grande não termina com ficheiros corrompidos em silêncio.

Veja aqui uma transferência de uma unidade na nuvem para o armazenamento local, passo a passo.

### Passo 1: Selecionar a pasta

No Files, abra a unidade na nuvem e selecione a pasta que pretende mover.

![Files do ZimaOS com uma pasta na nuvem selecionada para migração](/images/guides/files-cloud-migrate-select.png)

### Passo 2: Escolher o destino

Escolha o espaço de armazenamento de destino.

![Diálogo de migração do Files do ZimaOS para escolher o espaço de armazenamento de destino](/images/guides/files-cloud-migrate-destination.png)

### Passo 3: Confirmar conflitos e originais

Antes de a transferência começar, o Files pede-lhe para confirmar duas escolhas.

- **Conflitos.** Quando um ficheiro já existe no destino, escolha o que acontece: ignorá-lo, substituí-lo ou manter ambos.
- **Originais.** Escolha se os ficheiros originais permanecem na unidade na nuvem ou são removidos após uma migração verificada.

### Passo 4: Iniciar e verificar

Inicie a transferência. O progresso é apresentado em tempo real. Quando termina, o Files verifica o resultado e confirma que os ficheiros estão intactos.

![Progresso da migração do Files do ZimaOS com a transferência em tempo real](/images/guides/files-cloud-migrate-progress.png)

![Migração do Files do ZimaOS concluída com verificação a confirmar que os ficheiros estão intactos](/images/guides/files-cloud-migrate-verified.png)

## Várias contas e desligação

Uma única conta raramente conta a história toda. Pode ligar mais do que uma conta do mesmo serviço e cada uma aparece no Files como a sua própria entrada. Dois Google Drive ou dois OneDrive funcionam lado a lado como qualquer outro espaço de armazenamento.

![Files do ZimaOS com duas contas do mesmo serviço na nuvem listadas como entradas separadas](/images/guides/files-cloud-multi-account.png)

Quando uma unidade na nuvem tiver cumprido a sua função, remova-a do Files. A ligação fecha-se e os dados na nuvem permanecem onde estavam, no fornecedor. Tudo o que já copiou para o armazenamento local permanece local.

![Files do ZimaOS com a opção de remover uma unidade na nuvem ligada](/images/guides/files-cloud-disconnect.png)

## A cópia externa

Uma unidade na nuvem ligada assume uma segunda função no plano de cópias de segurança: torna-se a cópia externa da sua **[estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")**.

O armazenamento local contém a cópia de trabalho, uma segunda unidade contém a cópia local e a nuvem guarda uma cópia externa que sobrevive a um incêndio ou a uma inundação. É a mesma nuvem que já utiliza, agora dedicada a uma função que desempenha particularmente bem.

## A seguir

- **[Estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")** — crie o plano de proteção completo
- **[Cópia de segurança do telemóvel](./phone-backup "Crie automaticamente uma cópia de segurança do telemóvel no ZimaOS com o ZimaClient")** — traga também os dados do telemóvel para casa
