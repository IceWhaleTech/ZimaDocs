---
title: Funcionalidades do ZimaOS
seo_title: "Funcionalidades do ZimaOS: acesso remoto, armazenamento, RAID e App Store"
description: "Uma visita ao painel do ZimaOS. Acesso remoto, partilha de ficheiros, gestão de armazenamento, opções RAID, máquinas virtuais e App Store com instalação de aplicações Docker num clique."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Se acabou de seguir o guia **[Começar](./get-started "Configurar o ZimaOS desde o primeiro arranque com o ZimaClient e a criação de conta")**, o dispositivo está online e pronto. O acesso remoto está ativo, o armazenamento está partilhado e a conta está configurada. Aquele primeiro momento em que todo o painel ganha vida é genuinamente satisfatório.

Esta página apresenta o que o ZimaOS pode fazer e indica onde encontrar os guias detalhados de cada funcionalidade. Pense nela como um mapa: se algo lhe chamar a atenção, siga a ligação para saber mais.

## Aceda ao dispositivo a partir de qualquer lugar

A maioria dos dispositivos NAS obriga a configurar o reencaminhamento de portas ou uma VPN para estabelecer ligação fora de casa. O ZimaOS não. Na primeira ligação através do ZimaClient, é criado automaticamente um canal ponto a ponto encriptado. A partir daí, pode aceder ao dispositivo a partir de qualquer lugar.

Os seus dados permanecem privados. A ligação é encriptada de ponta a ponta, sem qualquer servidor de terceiros pelo meio. Pode desativar o acesso remoto nas Definições sempre que quiser.

Não recolhemos nem armazenamos os seus ficheiros pessoais, registos de ligação ou dados de utilização, nem temos acesso a eles. O acesso remoto funciona através de um canal ponto a ponto encriptado. Não existe qualquer servidor de terceiros entre si e o dispositivo. As nossas práticas de privacidade estão totalmente documentadas e abertas à análise da comunidade.

**[Política de privacidade](../help-center/privacy-policy "Política de privacidade do ZimaOS sobre o tratamento dos seus dados e ligações")**

<table style="width:100%; table-layout:fixed;">
  <tr>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885802_zimaclient-ios-v-1-6-dash.png" alt="Ecrã do painel do ZimaClient para iOS com o estado do dispositivo, a utilização do armazenamento e as informações do sistema" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885801_zimaclient-ios-v-1-6-files.png" alt="Ecrã de ficheiros do ZimaClient para iOS com as pastas partilhadas e os ficheiros do servidor doméstico" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885803_zimaclient-ios-v-1-6-app.png" alt="Ecrã de aplicações do ZimaClient para iOS com as aplicações instaladas e o respetivo estado de execução" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885804_zimaclient-ios-v-1-6-photos.png" alt="Ecrã de fotografias do ZimaClient para iOS com a fototeca sincronizada a partir do servidor doméstico" style="max-width:100%; height:auto;">
    </td>
  </tr>
</table>

**[Acesso remoto](./remote-access "Configurar o acesso remoto para poder aceder ao servidor doméstico a partir de qualquer lugar")** · **[Transferir o ZimaClient](./zimaclient-install "Instalar e configurar o ZimaClient no computador e no telemóvel para aceder ao dispositivo")**

## Guarde, partilhe e proteja os seus ficheiros

A configuração do armazenamento depende da utilização que dará ao dispositivo.

Para a maioria das casas, recomendamos começar com duas unidades idênticas em RAID 1. Os dados são espelhados nas duas unidades, pelo que não perde nada se uma delas falhar. Os ficheiros aparecem no Finder e no Explorador de Ficheiros de todos os computadores da casa, sem os tempos de carregamento nem as mensalidades associados ao armazenamento na nuvem. Se quiser uma cópia externa dos ficheiros mais importantes, a aplicação Files pode ligar-se ao Google Drive, Dropbox ou OneDrive para efetuar cópias seletivas.

A música, as fotografias e os vídeos são transmitidos diretamente do dispositivo para qualquer ecrã da rede. Como camada adicional de proteção, a aplicação Files pode efetuar uma cópia seletiva das pastas mais importantes para o Google Drive, Dropbox ou OneDrive.

![Página de definições de armazenamento do ZimaOS com a lista de discos e as opções para combinar unidades em armazenamento RAID](https://manage.icewhale.io/api/static/docs/1786262061523_zimaos-storage-settings.png)

Se gere uma pequena empresa ou guarda arquivos familiares insubstituíveis, o RAID 5 oferece mais espaço utilizável e mantém a proteção contra a falha de uma unidade. Comece com três unidades e adicione mais posteriormente. Os dados permanecem online mesmo durante a substituição de um disco avariado. O ZimaOS também suporta RAID 0, RAID 1 e RAID 6 para outros cenários.

Se pretender instantâneos, somas de verificação e integridade de dados avançada, também pode utilizar o **[ZFS](../developer/zfs-setup "Configurar o ZFS no ZimaOS para obter instantâneos, somas de verificação e integridade de dados")**.

Depois de configurado, o armazenamento aparece automaticamente na rede local. Num Mac, aparece no Finder; no Windows, no Explorador de Ficheiros. O acesso é protegido pela sua conta ZimaOS. Pode criar contas separadas para familiares ou colegas de equipa, cada uma com as respetivas permissões de leitura e escrita.

**[Configuração de armazenamento](./storage-setup "Escolher a configuração de armazenamento com opções RAID adequadas às suas necessidades")** · **[Partilha de ficheiros SMB](./smb-troubleshooting "Partilhar ficheiros através de SMB para que apareçam no Finder e no Explorador de Ficheiros")** · **[Ligar unidades na nuvem](./cloud-drive-connect "Ligar o Google Drive, Dropbox ou OneDrive ao ZimaOS para efetuar cópias de segurança")** · **[Opções RAID](./raid-options "Explicação dos níveis RAID e JBOD com instruções de configuração passo a passo")** · **[Migração de dados](./data-migration "Mover imagens Docker, dados de aplicações e pastas entre unidades no ZimaOS")**


## Instale aplicações com um clique

É aqui que o dispositivo deixa de servir apenas para guardar ficheiros e se transforma num servidor doméstico. A App Store foi significativamente ampliada no ZimaOS 1.7.

**Instalação com um clique.** Estão disponíveis centenas de aplicações com um único clique, sem necessidade de conhecimentos de Docker. Instale o Pi-hole para bloquear anúncios em toda a rede doméstica ou o Jellyfin para executar o seu próprio servidor de streaming. A interface foi concebida para explorar, com categorias e recomendações que ajudam a encontrar o que procura.

**Faça toda a gestão num só lugar.** Todas as aplicações instaladas ficam numa única página. Pode ver quais estão em execução, procurar atualizações e ajustar definições básicas sem tocar num ficheiro de configuração. Se algo correr mal, os registos integrados e o terminal estão disponíveis quando precisar deles.

**Para utilizadores avançados.** Importe qualquer ficheiro YAML do Docker Compose, edite diretamente as configurações e execute conjuntos de vários contentores com controlo total do ciclo de vida. O ZimaOS gere a camada do Docker para que se possa concentrar no que está a criar.

A comunidade mantém várias lojas de terceiros com centenas de aplicações adicionais. O seu hardware, as suas aplicações, as suas regras. Nada depende de uma subscrição nem da nuvem de outra pessoa.

**[Visão geral da App Store](./app-store/ "Explorar as categorias da App Store para multimédia, aplicações autoalojadas e IA")** — streaming multimédia, aplicações autoalojadas, IA e projetos criativos

## Importe primeiro os seus dados

Sei que a App Store é tentadora. Provavelmente já a percorreu e escolheu três coisas que quer experimentar. No entanto, se pudesse repetir a minha primeira configuração, trataria do armazenamento antes de instalar qualquer coisa. Evita uma dor de cabeça mais tarde.

Comece pelas unidades. Um único disco é o caminho mais simples. Duas unidades idênticas em RAID 1 oferecem redundância sem complexidade. O RAID 5 abrange três ou mais discos quando precisa de mais espaço com proteção. As unidades USB servem como espaço adicional ou armazenamento portátil. A página **[Configuração de armazenamento](./storage-setup "Escolher a configuração de armazenamento com opções RAID adequadas às suas necessidades")** associa cada cenário a uma configuração recomendada, enquanto **[Opções RAID](./raid-options "Explicação dos níveis RAID e JBOD com instruções de configuração passo a passo")** funciona como referência técnica.

Em seguida, decida onde ficam os dados das aplicações. Cada aplicação que instala guarda os seus ficheiros algures no dispositivo. O guia **[Caminhos de armazenamento das aplicações](./docker-app-paths "Onde as aplicações guardam os dados nas unidades e como movê-los")** mostra onde e explica como mover esses dados mais tarde para uma unidade maior. Configurar isto desde o início evita migrar dados das aplicações posteriormente.

Depois, importe os seus conteúdos. **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** e **[Cópia de segurança do computador](./computer-backup "Efetuar uma cópia de segurança do computador para o ZimaOS através do Finder, Explorador ou sincronização")** abrangem os dispositivos que utiliza todos os dias. **[Migrar de outro NAS](./synology-to-zimacube-migration "Mover ficheiros de um NAS Synology para o ZimaOS através de uma abordagem faseada")** e **[Ligar unidades na nuvem](./cloud-drive-connect "Ligar o Google Drive, Dropbox ou OneDrive ao ZimaOS para efetuar cópias de segurança")** tratam das duas origens mais comuns.

Estes e outros guias estão organizados na **[Visão geral do ZimaOS](./ "Visão geral da documentação do ZimaOS sobre configuração, armazenamento e partilha")**, em Configuração e armazenamento. Depois disso, instale o que quiser. Já fez por merecer.
