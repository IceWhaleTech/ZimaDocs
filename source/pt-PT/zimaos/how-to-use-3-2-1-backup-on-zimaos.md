---
title: Cópia de segurança 3-2-1 no ZimaOS
seo_title: "Plano de cópias de segurança do ZimaOS: estratégia 3-2-1 para os dados do NAS"
description: "Crie um plano de cópias de segurança completo no ZimaOS com a regra 3-2-1. Copie pastas, unidades USB e armazenamento na nuvem numa única tarefa, agende execuções automáticas e mantenha uma cópia externa."
type: Docs
author: vicky
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Os discos falham, os ficheiros são apagados por acidente e as casas sofrem inundações. Um plano de cópias de segurança é o que fica entre esses momentos e perder tudo.

Uma coisa a deixar clara primeiro: o RAID não é uma cópia de segurança. O RAID protege-o da falha de um único disco enquanto o dispositivo continua a funcionar. Não faz nada contra a eliminação acidental, o ransomware ou um pico de energia que leve a máquina inteira. Um verdadeiro plano de cópias também cobre tudo isso.

## A regra 3-2-1

A regra 3-2-1 é a resposta padrão à questão de quantas cópias são suficientes.

- **3 cópias** dos seus dados: o original mais duas cópias, para que nenhuma falha única destrua tudo.
- **2 tipos de suporte diferentes**: como os discos do seu dispositivo mais um disco USB externo, para diversificar o risco.
- **1 cópia externa**: num local fisicamente separado, para que um incêndio ou roubo em casa não leve todas as cópias.

O ZimaOS suporta esta estratégia ao nível do sistema. Uma única aplicação cobre todos os anéis do plano.

## Uma aplicação, todas as direções

A regra 3-2-1 pede cópias em locais diferentes. A maioria das configurações NAS responde juntando três ou quatro ferramentas diferentes: uma para cópias USB, outra para sincronizar com a nuvem, outra para transferências LAN. O ZimaOS adota uma abordagem diferente.

A aplicação Backup funciona com uma ideia simples de origem-destino. Escolha de onde vêm os dados: **Cloud**, **LAN**, **USB** ou **Zima**. Escolha para onde vão: um disco local, outro dispositivo Zima, uma unidade externa ou a nuvem. Cada combinação é uma tarefa, um agendamento, um percurso.

Essa única abstração cobre todo o plano 3-2-1: a cópia de trabalho, o segundo suporte e o anel externo. Não aprende quatro ferramentas. Aprende uma.

## Configurar uma tarefa de cópia

1. Inicie a aplicação **Backup** a partir do painel.

![Ambiente de trabalho do ZimaOS com o ícone da aplicação Backup](https://manage.icewhale.io/api/static/docs/1755069939384_copyImage.png)

2. Clique em **Add new backup** para abrir o assistente de criação de tarefas.

![Assistente de criação de tarefas de cópia com o botão Add new backup](https://manage.icewhale.io/api/static/docs/1755069940811_copyImage.png)

3. Escolha a origem dos dados: **Cloud** (Google Drive, Dropbox e mais), **LAN** (pastas partilhadas de outros dispositivos), **USB** (unidades externas) ou **Zima** (ficheiros guardados neste dispositivo).

As cópias de **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** e **[Cópia de segurança do computador](./computer-backup "Efetuar uma cópia de segurança do computador para o ZimaOS através do Finder, Explorador ou sincronização")** ficam no armazenamento como pastas normais, pelo que cabem numa tarefa de cópia como qualquer outra coisa do dispositivo.

![Seleção de origem de dados com as opções Cloud, LAN, USB e Zima](https://manage.icewhale.io/api/static/docs/1755069942195_copyImage.png)

4. Se escolheu uma origem na nuvem, inicie sessão e autorize o acesso.

5. Selecione as pastas que pretende copiar, ou toda a estrutura de diretórios.

![Ecrã de seleção de conteúdo para escolher pastas ou diretórios completos](https://manage.icewhale.io/api/static/docs/1755069945701_copyImage.png)

6. Defina o destino: um disco local, outro dispositivo Zima, uma unidade externa ou a nuvem.

![Opções de destino para discos locais, outros NAS, USB ou nuvem](https://manage.icewhale.io/api/static/docs/1755069947027_copyImage.png)

7. Clique em **Start**. A cópia é executada com o progresso em tempo real.

![Tarefa de cópia em execução com o progresso em tempo real](https://manage.icewhale.io/api/static/docs/1755069948294_copyImage.png)

Está disponível um vídeo com os mesmos passos no [YouTube](https://www.youtube.com/watch?v=pUVMsS1tcyY).

## Copiar automaticamente

Um plano de cópias só funciona se correr sem precisar de se lembrar de o lançar.

- **Cópia agendada** corre sozinha no intervalo que definir.
- **Várias tarefas** podem correr lado a lado sem interferir, para que fotografias, documentos e dados de aplicações tenham cada um o seu agendamento.
- **Retoma e tolerância a falhas** continua uma transferência interrompida em vez de recomeçar do zero.

![Lista de tarefas da aplicação Backup com várias tarefas a correr em simultâneo](https://manage.icewhale.io/api/static/docs/1755069949757_copyImage.png)

## Uma origem, muitos destinos

Algumas pastas merecem mais do que uma cópia. Fotografias de família, documentos de trabalho, registos financeiros — quando os dados são insubstituíveis, a regra 3-2-1 pede que estejam em vários sítios ao mesmo tempo.

A aplicação Backup resolve isto com uma origem e muitos destinos. Aponte cada tarefa para a mesma pasta e dê a cada tarefa o seu próprio destino:

- **Segundo suporte:** a mesma pasta para outro disco local ou outro dispositivo Zima na LAN.
- **Anel externo:** a mesma pasta para a nuvem.

![Lista de tarefas da aplicação Backup com duas tarefas que copiam a mesma pasta para destinos diferentes](/images/guides/backup-one-source-many-destinations.png)

Cada tarefa mantém a sua própria agenda, pelo que os dois anéis podem correr a ritmos diferentes — a cópia local todas as noites, a cópia na nuvem uma vez por semana. As tarefas são independentes, por isso um problema num destino nunca impede o outro de correr.

## Sincronizar com a nuvem não é uma cópia

Uma pasta sincronizada com a nuvem não é uma cópia de segurança. A sincronização espelha as alterações em ambas as direções, pelo que apagar um ficheiro localmente apaga-o em todo o lado. Uma cópia guarda versões e apenas escreve para a frente. Quando usar a nuvem no seu plano de cópias, use o destino de nuvem da aplicação Backup para obter versões e pontos de restauro, não um espelho dos seus erros.

A nuvem também ganha o seu lugar como cópia externa do seu plano 3-2-1. Consulte **[Ligar unidades na nuvem](./cloud-drive-connect "Ligue o Google Drive, Dropbox ou OneDrive ao ZimaOS")** para trabalhar com armazenamento na nuvem.

## Restaurar e verificar

Uma cópia que nunca restaurou é um plano que nunca testou. Depois da primeira cópia, restaure um ficheiro e abra-o. Dez minutos de verificação agora valem mais do que descobrir um problema silencioso no dia em que precisa mesmo da cópia.

## A seguir

- **[Opções de RAID](./raid-options "Compare níveis RAID e JBOD com instruções de configuração")** — o que o RAID protege e o que não protege
- **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** — coloque os dados do telemóvel no plano
- **[Ligar outro NAS](./synology-to-zimacube-migration "Ligue outro NAS ao ZimaOS para mover ficheiros ou fazer cópias entre dispositivos")** — o anel LAN do plano
