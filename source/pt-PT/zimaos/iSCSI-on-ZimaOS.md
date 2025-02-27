---
title: Começando com iSCSI no ZimaOS
description: 
type: Docs
author: admin
tip: Formato fixo na barra superior, não delete. A descrição é para o artigo, se não preenchida, será cortada a primeira parte do conteúdo.
---
O ZimaOS oferece uma variedade de protocolos de compartilhamento de rede para atender diferentes necessidades de armazenamento e compartilhamento de arquivos, incluindo NFS, SAMBA e iSCSI:

**[NFS (Network File System)](https://www.zimaspace.com/docs/zimaos/NFS-on-ZimaOS)**: Ideal para compartilhamento de arquivos em sistemas Unix/Linux, suporta acesso de alta concorrência e compartilhamento de arquivos entre plataformas.

**SAMBA**: Oferece excelente compatibilidade. Suporta gerenciamento avançado de permissões e transmissão criptografada, sendo uma escolha ideal para ambientes multiplataforma.

**iSCSI (Internet Small Computer System Interface)**: Mapeia dispositivos de armazenamento remotos para discos locais via redes IP, tornando-o adequado para cenários de armazenamento de blocos de alto desempenho, como ambientes de virtualização e armazenamento de banco de dados.

Esses protocolos de compartilhamento de rede garantem que os usuários possam escolher a solução mais adequada com base em suas necessidades.

Este tutorial fornece um guia sobre como configurar e usar o iSCSI no ZimaOS, ajudando você a alcançar rapidamente um compartilhamento eficiente de armazenamento em bloco. Antes de começar, vamos explicar alguns conceitos.

## Target, targetcli e Iniciador iSCSI.
Um **target** é o que você irá configurar no lado do servidor. Aqui, o servidor é **ZimaOS**. E **targetcli** é a ferramenta usada para realizar a configuração.

No computador cliente, é necessário usar o **Iniciador iSCSI** para se conectar ao **target** no servidor. Neste tutorial, tomaremos o Windows como exemplo.

## Lado do ZimaOS
### Configurar o Target iSCSI
1. Primeiro, entre no terminal web do ZimaOS e obtenha privilégios de root.
2. Dashboard do ZimaOS -> Configurações -> Geral -> Modo de desenvolvedor -> Terminal baseado na web
3. Faça login e mude para o root
```language
sudo -i
```
inicie o targetcli
```language
targetcli
```
Agora, você está no targetcli
```language
/>
```
**Criar um target:**
Navegue até o diretório iscsi
```language
/> cd iscsi
```
crie um target iSCSI
```language
/iscsi> create
```
↓Este é o resultado:
```language
Created target iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
Você pode precisar remover o target algum dia, esta operação removerá o target inteiro, incluindo todas as ACLs, LUNs e portals
```language
/iscsi> delete iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df
```
Você também pode especificar um nome ao criar um target:
```language
/iscsi> create iqn.2025-03.com.icewhale:888
```
↓Este é o resultado
```language
Created target iqn.2025-03.com.icewhale:888.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
### Backstore e Criação
Os Backstores iSCSI são criados para uso de armazenamento pelo target. Primeiro, vamos entrar no diretório backstores.
Navegue até os backstores
```language
/> cd /backstores
```
Existem quatro tipos de backstore.
**Criando um backstore com um arquivo:**
```language
/backstores> cd fileio 
/backstores/fileio> create file1 /media/myRAID5/disk1.img 200M write_back=false
Created fileio file1 with size 209715200
```
↑Este é o resultado do sistema
**Criando um backstore com um objeto de armazenamento em bloco:**
```language
/backstores> cd block
/backstores/block> create name=block_backend dev=/dev/sdf

Created block storage object block_backend using /dev/sdf.
```
↑Este é o resultado
Você pode usar lsblk para identificar dispositivos de bloco.
**Criando backstore com outros tipos:**
Criando backstore com objeto de armazenamento pscsi
```language
/backstores> cd pscsi
/backstores> create name=pscsi_backend dev=/dev/sr0
```
ou criando backstore com RAM
```language
/backstores> cd ramdisk
/backstores> create name=rd_backend size=1GB
```
### LUN conecta o target e backstores
Entre nos luns de um iqn
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/luns
```
conecte o backstore a este target
```language
/iscsi/iqn.20...888/tpg1/luns> create /backstores/fileio/file1

Created LUN 0
```
↑Este é o resultado
### Listas de Controle de Acesso
Precisamos criar uma ACL para conceder acesso ao iniciador.
Navegue até o diretório de acls do iqn
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/acls
```
Torne este iniciador_iqn_name acessível, você precisará encontrar ou definir o iniciador_iqn_name na máquina cliente
```language
/iscsi/iqn.20...888/tpg1/acls> create iqn.1991-05.com.microsoft:desktop-44sqg6u
```
↓Este é o resultado
```language
Created Node ACL for iqn.1991-05.com.microsoft:desktop-44sqg6u
Created mapped LUN 0.
```
## Lado do Windows
No Windows, conectar-se a um target iSCSI é fácil.

Digite Iniciador iSCSI na barra de pesquisa e clique no ícone que aparecer.
![](https://manage.icewhale.io/api/static/docs/1740639156824_image.png)
Você pode precisar habilitar essa função primeiro, conforme a janela de prompt.

No painel de Propriedades do Iniciador iSCSI, você pode encontrar o `initiator_iqn_name` na aba de Configuração.
![](https://manage.icewhale.io/api/static/docs/1740639189242_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639196492_image.png)
Na aba de Targets, insira o IP do servidor e clique em `Conectar rapidamente...`.
Escolha o nome correto e clique em `Conectar`.
![](https://manage.icewhale.io/api/static/docs/1740639240986_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639249479_image.png)
Na barra de pesquisa, digite `Gerenciamento de Disco` e o ícone `Criar e formatar...` aparecerá. Clique e entre, você encontrará o dispositivo de armazenamento recém-conectado.
![](https://manage.icewhale.io/api/static/docs/1740639298524_image.png)
Inicialize o Disco e use-o como um disco local! 
![](https://manage.icewhale.io/api/static/docs/1740639317499_image.png)
Para saber como inicializar um disco no Windows, consulte este [artigo](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/initialize-new-disks). 
Este é o uso básico do `targetcli`. Para um tutorial detalhado, consulte a [documentação da Redhat](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/managing_storage_devices/configuring-an-iscsi-target_managing-storage-devices#configuring-an-iscsi-target_managing-storage-devices). Se você encontrar algum problema durante o uso, não hesite em nos avisar a qualquer momento. Você também pode se juntar à nossa [comunidade](https://community.zimaspace.com/) e [Discord](https://discord.com/invite/uuNfKzG5) para discutir mais sobre NAS e ZimaOS. Aguardamos o seu feedback!
