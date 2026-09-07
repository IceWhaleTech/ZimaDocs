---
title: Cópia de segurança do computador
seo_title: "Cópia de segurança de Mac e Windows para o ZimaOS: Finder, Explorador e sincronização agendada"
description: "Efetue uma cópia de segurança do computador para o ZimaOS com o ZimaClient. Inicie sessão uma vez, aceda a pastas partilhadas no Finder ou Explorador e proteja as pastas importantes."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

A mesma cópia de segurança que protege o telemóvel também funciona no computador. Instale o cliente de ambiente de trabalho, inicie sessão uma vez e as pastas importantes continuarão a ser guardadas no seu próprio dispositivo.

## Antes de começar

O dispositivo ZimaOS tem de estar ligado e conectado à rede. Na primeira ligação, o computador e o dispositivo devem estar na mesma rede. Tenha consigo a conta e a palavra-passe do ZimaOS. Se acabou de desembalar o dispositivo, siga primeiro o guia **[Começar](./get-started "Configurar o ZimaOS desde o primeiro arranque com o ZimaClient e a criação de conta")**.

## Instalar o ZimaClient

Transfira o ZimaClient para **[Windows ou macOS](https://www.zimaspace.com/zimaos/download "Transferir a aplicação de ambiente de trabalho ZimaClient para Windows e macOS")** e abra-o.

## Iniciar sessão e estabelecer ligação

1. Abra o ZimaClient. A aplicação procura na rede local e apresenta os dispositivos NAS com ZimaOS que encontrar. Selecione o seu e clique para estabelecer ligação.

![Ecrã de descoberta de dispositivos do ZimaClient com os dispositivos NAS que executam ZimaOS encontrados na rede local](/images/guides/zimaclient-desktop-discovery.webp)

2. Selecione o dispositivo e inicie sessão com a sua conta ZimaOS. Assinale **memorizar palavra-passe** para manter a sessão iniciada.

![Ecrã de início de sessão do ZimaClient para computador com os campos de nome de utilizador e palavra-passe da conta ZimaOS](/images/guides/zimaclient-desktop-sign-in.webp)

3. Configure a montagem predefinida para que o espaço de armazenamento apareça na secção de rede do Finder no macOS ou do Explorador de Ficheiros no Windows. Depois de montado, comporta-se como uma unidade USB sempre ligada. O software de edição de vídeo e outras aplicações do computador podem abrir ficheiros diretamente a partir do NAS como se estivessem num disco local.

![Ecrã do ZimaClient para computador onde se configura a montagem de armazenamento predefinida para o Finder e o Explorador de Ficheiros](/images/guides/computer-zimaclient-mount.webp)

Após o primeiro início de sessão, o computador fica associado ao dispositivo.

{% note tip Acesso remoto %}
O acesso remoto é configurado automaticamente durante o primeiro início de sessão. Depois disso, o portátil acede ao NAS a partir de qualquer lugar através do canal ponto a ponto encriptado, sem mais configurações, desde que tenha ativado o acesso remoto em **Definições > Rede** no dispositivo ZimaOS.
{% endnote %}

## Aceder a pastas partilhadas no Finder

Depois de estabelecer ligação, o armazenamento ZimaOS aparece diretamente no Finder no macOS e no Explorador de Ficheiros no Windows. Percorra as pastas partilhadas como qualquer outra pasta do computador e arraste ficheiros nos dois sentidos sem utilizar uma interface Web.

![Janela do Finder no macOS com pastas partilhadas do ZimaOS acessíveis como pastas locais](/images/guides/computer-finder-smb.png)

A partilha de ficheiros está ativa por predefinição através da **[partilha de ficheiros SMB](./smb-troubleshooting "Partilhar ficheiros através de SMB para que apareçam no Finder e no Explorador de Ficheiros")** e é protegida pela sua conta ZimaOS.

## Escolher as pastas a copiar

Escolha as pastas importantes do computador: documentos, projetos e fotografias.

1. No ZimaClient, clique em **Cópia de segurança**.
2. Clique em **Adicionar diretório de cópia de segurança**.
3. Selecione as pastas que pretende copiar.

Só precisa de as selecionar uma vez. A partir daí, o ZimaClient mantém-nas protegidas automaticamente, em segundo plano e no horário definido. Não precisa de se lembrar de executar a tarefa.

![Ecrã do ZimaClient para computador onde se selecionam as pastas a incluir na cópia de segurança](/images/guides/computer-zimaclient-folders.png)

## Escolher o destino

Direcione a cópia para um espaço de armazenamento próprio —um único disco ou um conjunto RAID— e nunca para a unidade do sistema ZimaOS. A unidade do sistema é normalmente a mais pequena e as pastas do computador enchem-na depressa. Consulte **[Configuração de armazenamento](./storage-setup "Escolher a configuração de armazenamento com opções RAID adequadas às suas necessidades")** para planear os espaços de armazenamento.

![Seletor de destino do ZimaClient para computador com os espaços de armazenamento disponíveis para a cópia de segurança](/images/guides/computer-zimaclient-destination.png)

## Iniciar a cópia de segurança

Confirme e inicie. A primeira cópia é a mais demorada porque transfere tudo o que selecionou. As cópias seguintes transferem apenas o que mudou.

![Confirmação da cópia de segurança no ZimaClient para computador com o botão de início](/images/guides/computer-zimaclient-start.png)

## Restaurar ficheiros

Recuperar os ficheiros é tão simples como copiá-los.

Abra o armazenamento ZimaOS no Finder ou no Explorador de Ficheiros e arraste os ficheiros de volta para o computador. A cópia de pastas protege os ficheiros onde está o seu trabalho. Num Mac, a **[cópia de segurança com o Time Machine](./time-machine-backup "Efetuar uma cópia de segurança do Mac para o NAS através da rede com o Time Machine")** acrescenta a recuperação completa do sistema.

Antes de confiar numa cópia de segurança, restaure um ficheiro e abra-o. Uma cópia que nunca testou é um plano que nunca testou.

## Velocidade da cópia de segurança

Em teoria, um computador ligado por Wi-Fi de 5 GHz atinge cerca de 100 MB/s. Numa casa típica, as transferências reais por Wi-Fi ficam entre 40 e 80 MB/s, dependendo do router e da saturação do espectro. O NAS acompanha esse ritmo sem esforço e o ZimaOS transfere grandes lotes de ficheiros pequenos com a mesma fluidez dos vídeos grandes, pelo que as pastas de projetos cheias de ficheiros minúsculos não são mais lentas do que os filmes.

Os fatores que realmente alteram o valor, por ordem de impacto, são:

1. **Cabo ou Wi-Fi.** Um cabo gigabit fornece entre 110 e 125 MB/s de forma estável e previsível. O Wi-Fi partilha o ar com todos os dispositivos da casa e perde velocidade com a distância e as paredes.
2. **O router.** É a melhoria individual mais importante. Em testes da comunidade, trocar o router fornecido pelo ISP por um modelo razoável fez a mesma transferência Wi-Fi passar de 18 MB/s para cerca de 90 MB/s.
3. **Distância e interferências.** Estar perto do router em 5 GHz é melhor do que estar longe, e um canal congestionado por vizinhos e dispositivos IoT reduz o tempo de transmissão disponível.
4. **Tudo o resto tem pouco impacto.** A porta de rede do dispositivo, os discos internos e a combinação de ficheiros raramente são o ponto de estrangulamento depois de resolver os três primeiros fatores.

Se o computador tiver Thunderbolt, a **[ligação direta por Thunderbolt](./thunderbolt-direct-connect "Ligar o computador ao ZimaOS através de Thunderbolt para obter a velocidade máxima")** ultrapassa amplamente o Wi-Fi e só fica limitada pelas unidades instaladas no dispositivo.

Para a primeira cópia grande, ligue o cabo e deixe-a terminar.

## Problemas comuns

**A cópia de segurança foi interrompida.** O ZimaOS retoma automaticamente no ponto onde parou. Volte a estabelecer ligação e continuará.

**Substituiu o computador.** Instale o ZimaClient, inicie sessão com a mesma conta ZimaOS e adicione novamente as pastas. Os dados no NAS permanecem intactos.

**O destino está a ficar sem espaço.** Direcione a cópia para um espaço de armazenamento maior ou utilize a ferramenta integrada em **[Migração de dados](./data-migration "Mover imagens Docker, dados de aplicações e pastas entre unidades no ZimaOS")** para libertar espaço.

## Sugestões práticas

{% note tip %}
- Antes de substituir um computador, abra o ZimaClient uma vez e deixe-o concluir uma última cópia de segurança.
- Uma pasta sincronizada com a nuvem não é uma cópia de segurança: eliminar um ficheiro localmente elimina-o em todo o lado. Uma cópia de segurança mantém versões e escreve apenas para a frente.
{% endnote %}

## Seguinte

- **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** — a mesma simplicidade para o telemóvel que leva no bolso
- **[Estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteger os dados com a regra de cópia de segurança 3-2-1 no NAS")** — uma única cópia não é um plano
