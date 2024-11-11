---
title: Explorando OMV
---

# Primeiro Login

## Método de Login

![método de login omv](/images/Small-body-Big-applications-(OMV+Zima)/menthod-of-login.jpeg)

Para fazer login no OMV pela primeira vez, digite **`openmediavault.local/`** no seu navegador

{% note info %}
**Nome de Usuário**: `admin`
**Senha**: `openmediavault` (Os usuários podem alterar a senha padrão após o primeiro login)

{% endnote %}

## Painel

![Painel OMV](/images/Small-body-Big-applications-OMV-First-Experience/omv-dashboard.jpeg)

**Os usuários podem personalizar o layout do Painel através das configurações (botão em forma de engrenagem) no canto superior direito.**

![Mudar Painel OMV](/images/Small-body-Big-applications-OMV-First-Experience/change-dashboard.jpeg)

# Três elementos da Inicialização

## Grupos/Usuários

**Usuários -> Grupo -> Criar**

![Criar Usuários OMV](/images/Small-body-Big-applications-OMV-First-Experience/omv-creat-users.jpeg)

**Ao criar um novo grupo de usuários, o usuário pode adicionar o ID do usuário recém-criado a este grupo de usuários.**

![Criar ID de Usuários OMV](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-users-id.jpeg)

**Usuários -> Usuários -> Criar**

![Criar Permissões OMV](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions.jpeg)

**O novo usuário pertence ao grupo de usuários por padrão, mas os usuários também podem personalizar o grupo de usuários de acordo com suas necessidades reais para diferenciar seu uso.**

![Criar Permissões OMV com grupos](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-groups.jpeg)

**As permissões da pasta compartilhada definem os direitos de acesso do novo usuário à pasta compartilhada (por favor, consulte o conteúdo do tutorial sobre a pasta compartilhada)**

![Criar Permissões OMV com Pastas Compartilhadas](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-%20share-folders.jpeg)

## Pastas Compartilhadas

**Armazenamento - Sistemas de Arquivos - Montagem de partições Ext3/4 (Montar)**
**OMV suporta a montagem direta de partições Ext3 ou Ext4 existentes; se o disco rígido atualmente conectado não tiver tais partições, a gestão do disco relevante (particionamento ou formatação) pode ser realizada nas partições existentes do disco rígido**

{% note danger %}
**As partições montadas são um pré-requisito para novas pastas compartilhadas**
{% endnote %}

![Criar Pastas Compartilhadas OMV](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders.jpeg)

**Armazenamento -> Pastas Compartilhadas -> Criar**

![Criar Pastas Compartilhadas OMV](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders1.jpeg)

**Os usuários podem optar por criar uma nova pasta compartilhada na partição montada e definir os direitos de acesso apropriados (leitura/escrita)**

![Criar Permissões de Pastas Compartilhadas OMV](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders-permissions.jpeg)

## Gestão de Plugins

**Sistema -> Gestão de Atualizações -> Atualizações**

![Atualizações do Sistema OMV](/images/Small-body-Big-applications-OMV-First-Experience/omv-system-upadtes.jpeg)

{% note danger %}
**As atualizações do sistema são geralmente patches oficiais do sistema ou conteúdos atualizados do OMV, portanto, é recomendado operar isso após a inicialização.**
{% endnote %}

**Sistema -> Plugins**

Como mencionado no início deste artigo, OMV é uma solução de armazenamento conectado à rede (NAS) baseada em Debian Linux para um ambiente doméstico ou pequeno escritório, e sua biblioteca de plugins oficial pode atender à maioria das necessidades diárias dos usuários. 

![Instalação de Plugins do Sistema OMV](/images/Small-body-Big-applications-OMV-First-Experience/omv-plugins-install.jpeg)

{% note primary %}
**Recomendação de instalação obrigatória de plugins** 

**- Gerenciador de arquivos: [Filebrowser](https://filebrowser.org/)**
**- Netbook: [Onedrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage)**
**- Gerenciador de Imagens: [Photoprism](https://photoprism.app/)**
**- Push de aeroporto: [Shairport](https://github.com/mikebrady/shairport-sync)**
**- Compartilhamento de partição do sistema OMV: sharerootfs (se o usuário quiser experimentar e usar o emmc do Zima como uma pasta compartilhada sem um disco rígido externo)**
**- Gerenciador de Máquinas Virtuais: [Kvm](https://www.linux-kvm.org/page/Main_Page)**
**- Navegador de terminal SSH: [Wetty](https://github.com/butlerx/wetty)**

{% endnote %}

## Dicas para uso

### Tempo de logout automático

![Tempo de logout automático do Sistema OMV](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-automatic-logout-times.jpeg)

No processo de uso diário, a maioria dos usuários descobrirá que, após um curto período, eles precisam reinserir suas credenciais de login. Isso ocorre porque o tempo de logout automático padrão do OMV é de apenas 5 minutos. **`Sistema - Oficina - Logout automático.`** Defina o tempo um pouco mais longo para resolver esse problema.

### Fuso Horário

![Fuso Horário do Sistema OMV](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-a-times-zone.jpeg)

Alguns usuários descobrem que, ao usar a sincronização de dados, configuraram para sincronizar dados toda a tarde. No entanto, na verdade, sincroniza dados bem cedo pela manhã. Isso acontece porque os usuários não definiram seu próprio fuso horário. Para resolver isso, vá em **`Sistema - Data & Hora - Fuso Horário`**

### Lembretes

![Aviso de lembrete do Sistema OMV](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-reminder-notice.jpeg)

O pequeno sino no canto superior direito da área de trabalho do OMV frequentemente exibe notificações redundantes, que os usuários costumam achar irritantes, pois são irrelevantes. O usuário simplesmente precisa ir a **`Sistema - Notificação - Notificações`** para desligar notificações que não são relevantes para eles.

### Endereço IP fixo

![Endereço IP fixo do Sistema OMV](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-fixed-ip-address.jpeg)

Para alguns usuários, por causa de fatores ambientais da LAN, o endereço OMV sempre mudará. Você pode usar o Host (openmediavault.local/) para acessar a página de gerenciamento, mas a operação real do aplicativo ainda não é muito conveniente. Portanto, os usuários devem ir em **`Rede -> Interface`** para modificar o IP da interface de rede existente do endereço IP variável DHCP padrão para o endereço IP fixo estático. 

**`SMB/CIFS`**
**O serviço SMB** é uma das aplicações NAS mais básicas; usuários que utilizam o OMV pela primeira vez encontrarão a dificuldade de não conseguir criar o serviço SMB corretamente. Na verdade, os usuários só precisam seguir os passos deste guia para completar a inicialização dos três elementos das configurações da pasta compartilhada, e a criação do serviço SMB pode ser facilmente corrigida (da mesma forma que o serviço NFS).

### SMB/CIFS

![Sistema OMV SMB/CIFS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-smb-cifs.jpeg)

**O serviço SMB é uma das aplicações NAS mais básicas, e os usuários que utilizam o OMV pela primeira vez encontrarão a dificuldade de não conseguir criar o serviço SMB corretamente; na verdade, os usuários só precisam seguir os passos deste guia para completar a inicialização dos três elementos das configurações da pasta compartilhada, e a criação do serviço SMB pode ser facilmente corrigida (da mesma forma que o serviço NFS).**

# OMV Avançado

## Biblioteca de Plugins da Comunidade

**Além dos plugins oficiais que acompanham o sistema, o OMV também possui uma grande biblioteca de plugins de comunidade construídos/manutidos por fãs, dos quais o mais importante é o suporte total ao Docker.**

**a)** Os usuários podem usar o plugin oficial Wetty [Serviços - Wetty] recomendado no artigo anterior

![Plugins da Comunidade OMV](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins.jpeg)

**b)** Abra a versão web do navegador SSH do Wetty e faça login inserindo a conta root e a senha configurada durante a instalação do sistema.

**c)** Faça login e digite:**<code>`wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash`<code>**

![Plugins da Comunidade OMV](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins1.jpeg)

**d)** Assim que o repositório de plugins da comunidade for instalado, os usuários podem instalar o Docker

![Plugins da Comunidade OMV](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins2.jpeg)

## Docker e CasaOS

**a)** Faça login no SSH do Wetty com a senha da conta root e entre. **<code>`wget -qO- https://get.casaos.io | sudo bash`<code>**

![Sistema OMV com CasaOS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos.jpeg)

**b)** Após a conclusão da instalação, os usuários devem lembrar do endereço de login do CasaOS.

![Sistema OMV com CasaOS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos1.jpeg)

**c)** Acesse a página inicial do CasaOS, e os usuários podem desfrutar facilmente de uma coleção personalizada de aplicativos Docker.

![Sistema OMV com CasaOS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos2.jpeg)

# Resumo

**Como uma solução de armazenamento conectado à rede (NAS) baseada em Debian Linux para ambientes domésticos ou pequenos escritórios, o sistema do OMV é pequeno o suficiente para ajudar os usuários a atender às suas necessidades diárias com sua própria biblioteca de plugins, além de uma grande biblioteca Docker e nosso CasaOS adaptado ao usuário, em comparação com outros grandes sistemas NAS no mercado, como Synology, QNAP e UNAS.**

[![Cartão Discord](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)