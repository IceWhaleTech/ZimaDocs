---
title: Ligar unidades na nuvem
seo_title: "Unidades na nuvem no ZimaOS: ligue o Google Drive, Dropbox e OneDrive"
description: "Ligue o Google Drive, Dropbox e OneDrive ao ZimaOS. Monte pastas na nuvem no Files, trabalhe entre o armazenamento local e remoto e utilize a nuvem como cópia externa do seu plano 3-2-1."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

As unidades na nuvem fazem bem o seu trabalho: estão disponíveis em todo o lado, são fiáveis e outras pessoas já partilham ficheiros consigo através delas. O dispositivo ZimaOS é bom no resto: velocidade na sua própria rede, capacidade real e dados sob o seu controlo. Ao ligar os dois ambientes, ganha flexibilidade para mover os dados à medida que as necessidades mudam. Transfira parte dos dados da nuvem para o NAS e reduza o plano da subscrição, ou utilize a nuvem como cópia externa cifrada do NAS. É o utilizador que decide onde fica cada elemento.

## Montar unidades na nuvem no Files

A aplicação Files liga-se diretamente ao **Google Drive**, **Dropbox** e **OneDrive**. Depois de estabelecer a ligação, as pastas na nuvem aparecem junto ao armazenamento local.

1. Abra o **Files** no painel do ZimaOS.
2. Adicione uma unidade na nuvem a partir da lista de armazenamento.
3. Inicie sessão na conta da nuvem e autorize o acesso.

![ZimaOS Files com as opções para ligar o Google Drive, Dropbox e OneDrive](/images/guides/files-cloud-drive-mount.png)

Depois da ligação, a unidade na nuvem aparece junto aos espaços de armazenamento e pode explorar as pastas como quaisquer outras.

![Barra lateral do ZimaOS Files com uma unidade na nuvem ligada junto aos espaços locais](/images/guides/files-cloud-drive-list.png)

## Trabalhar entre o armazenamento local e a nuvem

Com a nuvem montada, alternar entre os dois ambientes deixa de ser uma tarefa separada.

Abra um ficheiro na nuvem, edite-o e volte a guardá-lo. Arraste uma pasta local para a unidade na nuvem quando pretender outra cópia. Transfira ficheiros da nuvem quando precisar deles no armazenamento local rápido. Ao mover dados suficientes para o dispositivo, poderá muitas vezes mudar para um plano de nuvem mais económico. O Files verifica os dados durante a transferência, evitando que uma grande migração termine com ficheiros danificados sem aviso.

Para mover dados de uma unidade na nuvem para o armazenamento local:

1. No Files, abra a unidade na nuvem e selecione a pasta a mover.

![ZimaOS Files com uma pasta na nuvem selecionada para migração](/images/guides/files-cloud-migrate-select.png)

2. Escolha o espaço de armazenamento de destino.

![Diálogo de migração do ZimaOS Files para escolher o armazenamento de destino](/images/guides/files-cloud-migrate-destination.png)

3. Inicie a transferência. O progresso é apresentado em tempo real.

![Progresso de migração do ZimaOS Files com a transferência em tempo real](/images/guides/files-cloud-migrate-progress.png)

4. Quando terminar, o Files verifica o resultado e confirma que os ficheiros estão intactos.

![Migração do ZimaOS Files concluída e verificada, com os ficheiros intactos](/images/guides/files-cloud-migrate-verified.png)

## A cópia externa

Uma unidade na nuvem ligada assume uma segunda função no plano de cópias de segurança: torna-se a cópia externa da sua **[estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")**.

O armazenamento local contém a cópia de trabalho, uma segunda unidade contém a cópia local e a nuvem guarda uma cópia cifrada que sobrevive a um incêndio ou a uma inundação. É a mesma nuvem que já utiliza, agora dedicada a uma função que desempenha particularmente bem.

## A seguir

- **[Estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")** — crie o plano de proteção completo
- **[Cópia de segurança do telemóvel](./phone-backup "Crie automaticamente uma cópia de segurança do telemóvel no ZimaOS com o ZimaClient")** — traga também os dados do telemóvel para casa
