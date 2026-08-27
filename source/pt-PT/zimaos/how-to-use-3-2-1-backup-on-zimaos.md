---
title: Cópia de segurança 3-2-1 no ZimaOS
seo_title: "Plano de cópias de segurança do ZimaOS: estratégia 3-2-1 para os dados do NAS"
description: "Crie um plano de cópias de segurança completo no ZimaOS com a regra 3-2-1. Copie pastas, unidades USB e armazenamento na nuvem numa única tarefa, agende execuções automáticas e mantenha uma cópia externa."
type: Docs
author: vicky
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Os discos rígidos falham, os ficheiros são eliminados por engano e as casas sofrem inundações. Um plano de cópias de segurança é o que separa esses momentos da perda de tudo.

Primeiro, é importante esclarecer uma coisa: RAID não é uma cópia de segurança. O RAID protege contra a falha de uma única unidade enquanto o dispositivo continua a funcionar. Não protege contra eliminações acidentais, ransomware ou uma sobretensão que danifique a máquina inteira. Um verdadeiro plano de cópias de segurança também abrange esses riscos.

## A regra 3-2-1

A regra 3-2-1 é a resposta padrão à pergunta sobre quantas cópias de segurança são suficientes.

- **3 cópias** dos dados: o original e duas cópias de segurança, para que uma única falha não destrua tudo.
- **2 tipos de suporte diferentes**: por exemplo, as unidades do dispositivo e uma unidade USB externa, para diversificar o risco.
- **1 cópia externa**: num local fisicamente separado, para que um incêndio ou roubo em casa não leve todas as cópias.

## Configurar uma tarefa de cópia de segurança

O ZimaOS inclui uma aplicação Backup que trata de tudo isto num só lugar.

1. Abra a aplicação **Backup** a partir do painel.

![Ambiente de trabalho do ZimaOS com o ícone da aplicação Backup para abrir a ferramenta de cópia de segurança](https://manage.icewhale.io/api/static/docs/1755069939384_copyImage.png)

2. Clique em **Adicionar nova cópia de segurança** para abrir o assistente de criação de tarefas.

![Assistente de criação de tarefas de cópia de segurança com o botão Adicionar nova cópia de segurança](https://manage.icewhale.io/api/static/docs/1755069940811_copyImage.png)

3. Escolha a origem dos dados: **Nuvem** (Google Drive, Dropbox e outros), **LAN** (pastas partilhadas de outros dispositivos), **USB** (unidades externas) ou **Zima** (ficheiros guardados neste dispositivo).

As cópias de **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** e **[Cópia de segurança do computador](./computer-backup "Efetuar uma cópia de segurança do computador para o ZimaOS através do Finder, Explorador ou sincronização")** chegam ao armazenamento como pastas normais, pelo que podem ser incluídas numa tarefa como qualquer outro conteúdo guardado no dispositivo.

![Seleção da origem dos dados da cópia de segurança com as opções Nuvem, LAN, USB e Zima](https://manage.icewhale.io/api/static/docs/1755069942195_copyImage.png)

4. Se escolheu uma origem na nuvem, inicie sessão e autorize o acesso.

![Ecrã de início de sessão da conta Google para autorizar o acesso à cópia de segurança na nuvem](https://manage.icewhale.io/api/static/docs/1755069943543_copyImage.png)

![Passo de autorização do armazenamento na nuvem no assistente de tarefas de cópia de segurança](https://manage.icewhale.io/api/static/docs/1755069944297_copyImage.png)

5. Selecione as pastas que pretende copiar ou toda a estrutura de diretórios.

![Ecrã de seleção de conteúdos da cópia de segurança para escolher pastas ou diretórios completos](https://manage.icewhale.io/api/static/docs/1755069945701_copyImage.png)

6. Defina o destino: um disco local, outro dispositivo Zima, uma unidade externa ou a nuvem.

![Opções de destino da cópia de segurança para discos locais, outros dispositivos NAS, USB ou nuvem](https://manage.icewhale.io/api/static/docs/1755069947027_copyImage.png)

7. Clique em **Iniciar**. A cópia de segurança é executada com o progresso apresentado em tempo real.

![Tarefa de cópia de segurança em execução com o progresso apresentado em tempo real](https://manage.icewhale.io/api/static/docs/1755069948294_copyImage.png)

Está disponível no [YouTube](https://www.youtube.com/watch?v=pUVMsS1tcyY) um vídeo com os mesmos passos.

## Automatizar as cópias de segurança

Um plano de cópias de segurança só funciona se for executado sem ter de se lembrar de o iniciar.

- A **cópia agendada** é executada automaticamente no intervalo definido.
- Podem ser executadas **várias tarefas** em paralelo sem interferências, para que as fotografias, os documentos e os dados das aplicações tenham cada um o seu próprio horário.
- A **retoma e tolerância a falhas** continua uma transferência interrompida em vez de recomeçar.

![Lista de tarefas da aplicação Backup com várias tarefas de cópia de segurança em execução simultânea](https://manage.icewhale.io/api/static/docs/1755069949757_copyImage.png)

## A sincronização na nuvem não é uma cópia de segurança

Uma pasta sincronizada com a nuvem não é uma cópia de segurança. A sincronização replica as alterações nos dois sentidos, pelo que eliminar um ficheiro localmente o elimina em todo o lado. Uma cópia de segurança mantém versões e escreve apenas para a frente. Quando utilizar a nuvem no seu plano, escolha o destino na nuvem da aplicação Backup para obter versões e pontos de restauro, em vez de replicar os seus erros.

A nuvem também serve como cópia externa no plano 3-2-1. Consulte **[Ligar unidades na nuvem](./cloud-drive-connect "Ligar o Google Drive, Dropbox ou OneDrive ao ZimaOS para efetuar cópias de segurança")** para trabalhar com armazenamento na nuvem.

## Restaurar e verificar

Uma cópia de segurança que nunca restaurou é um plano que nunca testou. Quando a primeira cópia terminar, restaure um ficheiro e abra-o. Dez minutos de verificação agora são preferíveis a descobrir um problema silencioso no dia em que realmente precisar da cópia.

## Seguinte

- **[Opções RAID](./raid-options "Explicação dos níveis RAID e JBOD com instruções de configuração passo a passo")** — o que o RAID protege e o que não protege
- **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** — incluir os dados do telemóvel no plano
- **[Mover dados entre unidades](./data-migration "Mover imagens Docker, dados de aplicações e pastas entre unidades no ZimaOS")** — quando uma unidade fica cheia
