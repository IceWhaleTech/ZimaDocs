---
title: Configurar o Emby no ZimaOS
seo_title: "Servidor Emby no ZimaOS: instale e configure a sua biblioteca multimédia"
description: "Instale o Emby no ZimaOS e configure a sua biblioteca multimédia. Abrange a instalação na App Store, o assistente de configuração, a nomeação de ficheiros e o mapeamento de pastas adicionais."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O Emby tem suporte nativo no App Catalog do ZimaOS. Consulte a [página do Emby na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.emby) para obter os detalhes mais recentes da aplicação.

O Emby transforma uma pasta de ficheiros de vídeo em algo que se comporta como um serviço de streaming. Lê os seus filmes e séries, obtém cartazes e sinopses e reproduz para um telemóvel, um navegador ou uma aplicação de TV.

A instalação em si demora alguns minutos a partir da App Store do ZimaOS. A maior parte do trabalho real é decidir onde vivem os seus ficheiros e dizer ao Emby como os ler.

## Antes de instalar

O Emby precisa de dois locais nos seus discos. Um guarda a sua própria configuração e arte. O outro guarda os seus ficheiros de vídeo.

Configure primeiro o seu armazenamento. Se os seus discos ainda não estão configurados, [Escolha a sua configuração de armazenamento](../storage-setup "Escolha a sua configuração de armazenamento com opções RAID adequadas às suas necessidades") aborda as opções RAID e de disco único e qual se adequa a uma biblioteca multimédia em crescimento.

Depois verifique onde vão os dados das aplicações. As aplicações escrevem no disco do sistema por predefinição, e um servidor multimédia enche esse disco rapidamente quando a arte e os metadados se acumulam. [Onde as aplicações guardam os seus dados](../docker-app-paths "Compreenda os caminhos dos contentores Docker e onde as aplicações do ZimaOS guardam os seus dados") mostra como apontar os dados das aplicações para a sua matriz de armazenamento antes de instalar seja o que for.

## Instalar o Emby

Abra a App Store a partir do painel do ZimaOS e procure por Emby. Aparece um único resultado, na categoria Media da Zima App Store.

![Resultados de pesquisa da App Store do ZimaOS com o cartão da aplicação Emby na categoria Media](/images/app-store/emby-app-store-search.webp)

O pacote do ZimaOS chega com o seu armazenamento já mapeado. Os filmes vivem em `/DATA/Media/Movies` e as séries em `/DATA/Media/TV Shows`, ambos acessíveis a partir da aplicação Files, e o Emby lê-os como `/data/movies` e `/data/tvshows` a partir de dentro do contentor.

Clique em Install e aguarde que o contentor seja transferido. O Emby aparece no seu painel quando estiver pronto, e clicar no ícone abre a interface web.

![Ícone da aplicação Emby no painel do ZimaOS ao lado de Files, Backup, ZVM e Immich](/images/app-store/emby-installed-on-dashboard.webp)

## Percorra o assistente de configuração

O primeiro arranque guia-o por um assistente curto. Nenhuma das escolhas é difícil de mudar mais tarde, por isso não há necessidade de pensar demasiado nelas.

**Idioma.** Escolha o seu idioma de visualização. Isto controla a interface do Emby, não o idioma dos metadados da sua biblioteca, que define por biblioteca mais tarde.

![Ecrã de boas-vindas do assistente do Emby com o menu de idioma de visualização preferido](/images/app-store/emby-wizard-language.webp)

**Utilizador e palavra-passe.** Crie a sua primeira conta. É uma conta Emby guardada no seu servidor, separada do seu início de sessão do ZimaOS. Todos em casa podem ter a sua própria conta mais tarde, cada uma com o seu próprio histórico de visualização.

![Ecrã do assistente do Emby para criar a primeira conta de utilizador com nome de utilizador e palavra-passe](/images/app-store/emby-wizard-first-user.webp)

**Concluir.** Entre o ecrã de utilizador e este, o assistente pede-lhe para configurar uma biblioteca, que as duas secções seguintes cobrem em detalhe. Uma vez feito, o Emby confirma a configuração, inicia a sua primeira análise e o botão Finish deixa-o no painel.

![Ecrã final do assistente do Emby a confirmar a conclusão da configuração com o botão Finish](/images/app-store/emby-wizard-finished.webp)

## Dê nome aos seus ficheiros antes de os adicionar

O Emby identifica os seus meios lendo os nomes dos ficheiros e pastas e comparando-os com bases de dados online. Bons nomes dão-lhe cartazes e descrições corretos na primeira análise. Nomes soltos dão-lhe uma biblioteca cheia de espaços em branco que corrige à mão.

Copie os seus ficheiros para a pasta Media no seu armazenamento usando este esquema.

```text
/DATA/Media/
  Movies/
    Arrival (2016)/
      Arrival (2016).mkv
    Dune (2021)/
      Dune (2021).mkv
  TV Shows/
    Severance/
      Season 01/
        Severance S01E01.mkv
        Severance S01E02.mkv
```

O ano entre parênteses importa para os filmes. Os remakes partilham um título, e o ano é o que os separa. Para as séries, o padrão SxxExx é o que o Emby lê para colocar um episódio na temporada certa.

Mantenha filmes e TV em pastas de nível superior separadas. Cada uma torna-se a sua própria biblioteca no Emby, com as suas próprias regras de metadados.

## Crie a sua primeira biblioteca

O assistente chega a um ecrã chamado Setup Media Libraries ainda vazio. Clique em New Library para abrir o diálogo onde a define.

![Ecrã de biblioteca do assistente do Emby sem bibliotecas e com o botão New Library](/images/app-store/emby-wizard-new-library.webp)

Escolha Movies como tipo de conteúdo e deixe o nome de visualização como está. Em Folders, `/data/movies` já está listado e aponta para a pasta Movies que acabou de encher, por isso não há nada para procurar.

![Diálogo New Library do Emby com tipo de conteúdo, pasta mapeada e definições de biblioteca](/images/app-store/emby-new-library-settings.webp)

Defina a seguir o idioma e o país dos metadados. Isto decide em que idioma o Emby pede títulos e sinopses, e é independente do idioma da interface que escolheu no assistente.

Deixe a monitorização em tempo real ligada. O Emby vigia a pasta e apanha os ficheiros novos assim que chegam, por isso não tem de desencadear uma análise sempre que adiciona um filme.

Mais abaixo, ligue a importação de informações de coleções dos descarregadores de metadados. O Emby agrupará os filmes que pertencem a uma série, para que os três filmes do Senhor dos Anéis fiquem juntos em vez de espalhados alfabeticamente.

A última decisão é onde a arte fica guardada. O Emby dá-lhe três opções que não são mutuamente exclusivas.

| Opção | O que faz | Quando usar |
|-|-|-|
| Guardar imagens multimédia na pasta multimédia | Escreve cartazes e fundos ao lado dos ficheiros de vídeo | Quer que a arte viaje com os ficheiros, ou outro leitor lê as mesmas pastas |
| Manter uma cópia em cache na pasta de metadados | Guarda a arte dentro da própria pasta de dados do Emby | Escolha predefinida. Mantém as pastas multimédia limpas e carrega rápido |
| Pré-descarregar imagens da internet | Obtém a arte durante a análise em vez de a pedido | Biblioteca grande onde quer que a navegação pareça instantânea desde a primeira abertura |

Clique em OK para guardar a biblioteca. O Emby começa a analisar e os cartazes começam a preencher-se num ou dois minutos numa coleção normal.

Termine o assistente e abra Movies na barra lateral esquerda. Cada ficheiro que o Emby correspondeu está lá com o seu cartaz, ano e sinopse já anexados.

![Biblioteca Movies do Emby após a primeira análise com um filme e o seu cartaz](/images/app-store/emby-first-movie-scanned.webp)

## Adicionar meios de outras pastas

O Emby só vê as pastas mapeadas no seu contentor, que no ZimaOS são `/data/movies` e `/data/tvshows`. Tudo o resto permanece invisível, seja uma unidade USB, um segundo pool de armazenamento ou uma pasta noutro local do sistema. Esta é a razão mais comum para uma biblioteca voltar vazia.

Mapear uma demora um minuto. Volte ao painel do ZimaOS, clique com o botão direito no ícone do Emby e escolha Manage.

![Menu da aplicação do ZimaOS aberto sobre o Emby com as opções Manage, Logs, Stop e Restart](/images/app-store/emby-app-manage-menu.webp)

O painel abre em Volumes, onde as pastas que o Emby já lê estão listadas como montagens bind. Clique no ícone mais ao lado de Mount para uma nova linha e use o botão de pasta do lado Host para escolher o que quer adicionar.

![Definições do contentor Emby no ZimaOS com o seletor de pasta do anfitrião aberto sobre uma unidade](/images/app-store/emby-app-add-bind-mount.webp)

A coluna Container à direita é o nome que o Emby vê. Dê-lhe algo reconhecível sob `/data`, guarde e deixe a aplicação reiniciar.

![Nova montagem bind nas definições da aplicação Emby com o seu caminho de contentor realçado](/images/app-store/emby-app-container-path.webp)

De volta ao Emby, abra Settings a partir do ícone de engrenagem no canto superior direito. Sob Emby Server na barra lateral esquerda, clique em Library e depois na biblioteca Movies para a editar.

![Definições do servidor Emby na página Library com a biblioteca Movies e o caminho](/images/app-store/emby-settings-library.webp)

Clique em Add ao lado de Folders. O diálogo Select Path lista os caminhos que existem dentro do contentor, por isso desloque-se até ao nome que deu à nova montagem e confirme. Junta-se à pasta que já estava lá, e ambas alimentam a mesma biblioteca.

![Definições da biblioteca Movies do Emby com o botão Add acima da lista de pastas mapeadas](/images/app-store/emby-library-add-folder.webp)

![Diálogo Select Path do Emby com as pastas do contentor incluindo a nova montagem](/images/app-store/emby-select-path-dialog.webp)

![Definições da biblioteca Movies do Emby com a pasta predefinida e a pasta adicionada](/images/app-store/emby-library-both-folders.webp)

Uma pasta adicionada desta forma comporta-se exatamente como a que veio com a aplicação. A monitorização em tempo real, os metadados e a arte funcionam todos da mesma forma.

Guarde as definições e abra Movies a partir da barra lateral. Os ficheiros da pasta que acabou de mapear ficam ao lado do que já estava analisado.

![Biblioteca Movies do Emby com dezenas de filmes e cartazes após a nova análise](/images/app-store/emby-movies-library-full.webp)

## Transcodificação por hardware

A transcodificação é o que acontece quando um cliente não consegue reproduzir o ficheiro tal como está — o Emby converte-o em tempo real. Só com CPU, uma transmissão 4K pode ocupar todos os núcleos; com uma GPU, a mesma tarefa quase não se nota.

A transcodificação por hardware é uma funcionalidade do Emby Premiere. Se os seus clientes conseguem reproduzir os seus ficheiros diretamente, pode não precisar dela de todo.

Para a ativar:

1. Abra **Settings** → **Transcoding** do Emby.
2. Ligue **Enable hardware acceleration when available**.
3. Escolha o descodificador que corresponde à sua GPU: **Intel Quick Sync Video** para os gráficos integrados do ZimaCube, ou **NVIDIA NVENC** para uma placa dedicada instalada na ranhura GPU.
4. Guarde, inicie uma transmissão e confirme no painel que a sessão de reprodução mostra descodificação por hardware.

Para instalar uma GPU dedicada, consulte [Expansão de GPU](../../hardware/gpu-expansion "Adicione uma placa gráfica ao seu ZimaCube para IA e transcodificação"). Para um exemplo prático de transcodificação por GPU no ZimaOS, consulte [Transcodificação por GPU no Plex](./plex-and-gpu-transcoding "Ative a transcodificação por GPU para o Plex no seu dispositivo ZimaOS").

## Quando algo não funciona

**A biblioteca está vazia após uma análise.** O Emby lê apenas os caminhos mapeados no seu contentor. Abra as definições da aplicação no ZimaOS e confirme que a sua pasta multimédia está na lista de volumes. Adicione-a se faltar e execute Scan Library Files a partir da página da biblioteca do Emby.

**Os cartazes e títulos estão errados.** Isto é quase sempre um problema de nomes. Renomeie o ficheiro para Título (Ano) e volte a analisar. Para os teimosos, clique no item, escolha Identify e procure o título correto à mão.

**A reprodução gagueja ou fica em buffer.** Abra o painel enquanto o ficheiro está a reproduzir. Uma sessão de transcodificação significa que o cliente não consegue ler o formato original, por isso defina esse cliente para reprodução direta ou guarde o ficheiro num formato que ele trate nativamente. Se a transcodificação for inevitável, consulte a secção Transcodificação por hardware acima. Uma sessão de reprodução direta que ainda gagueja aponta para a rede.

**Os ficheiros novos não aparecem.** A monitorização em tempo real falha ficheiros copiados por SMB em algumas configurações. Desencadeie Scan Library Files manualmente e, se acontecer sempre, agende uma análise em Settings e Scheduled Tasks.

**O Emby está inacessível após um reinício.** Dê ao contentor um minuto para arrancar. Se continuar em baixo, verifique o estado do contentor em Settings e Apps no ZimaOS e confirme que o armazenamento que guarda a sua configuração está montado.

## Guias relacionados

O Emby combina bem com ferramentas que mantêm a biblioteca a encher-se sozinha:

- [Configuração do Radarr](./radarr-setup "Automatize as transferências de filmes e mantenha a sua biblioteca multimédia atual") — vigia os novos lançamentos e arruma-os nas pastas que o Emby já lê
- [Configuração do Jellyfin](./media-server-setup-with-jellyfin "Configure o servidor multimédia Jellyfin de código aberto no seu NAS") — a alternativa de código aberto sem nível pago
- [Configuração do Plex](./plex-setup-guide "Configure bibliotecas e reprodução do Plex no seu servidor doméstico") — a opção com o suporte de dispositivos mais amplo
- [Servidor DLNA](./dlna-server-setup "Transmita para TVs e leitores antigos por DLNA a partir do seu NAS") — para TVs antigas anteriores às lojas de aplicações
- [Descrição geral da App Store](../app-store/ "Navegue pelas categorias da App Store de meios, aplicações autoalojadas e IA") — o resto do que corre no ZimaOS

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o Emby no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.gg/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
