---
title:Instalação do Arch Linux no ZimaBoard 2
description: 
type: Docs
author: admin
tip: Não remova o cabeçalho; description é a descrição do artigo. Se estiver vazio, será extraído o primeiro parágrafo.
---
## **I. Visão geral**

O Arch Linux tem sido há muito tempo a escolha de desenvolvedores e usuários avançados devido ao seu design minimalista, modelo de lançamento contínuo (rolling release) e alto grau de personalização.

O ZimaBoard 2 é um servidor de placa única baseado em x86 que equilibra desempenho e expansibilidade, sendo uma excelente plataforma para implantar Arch Linux em cenários como servidores domésticos, serviços self-hosted e ambientes de desenvolvimento ou teste.

Este artigo fornece um passo a passo completo para instalar o Arch Linux no ZimaBoard 2 e realizar configurações básicas do sistema. Os passos são apresentados de forma clara e reprodutível, servindo como referência prática para usuários que implantam Arch Linux nesta plataforma pela primeira vez.

* * *

## **II. Preparação**

1.  ### Lista de hardware

*   **Placa principal ZimaBoard 2**
*   > ⚠️ Neste guia, o sistema será instalado no eMMC onboard. O processo de instalação particionará e formatará o eMMC. Garanta que não haja dados importantes nele.
>

*   **Monitor HDMI + teclado USB**

*   **Pendrive USB (≥ 8 GB)** (para criar o instalador bootável)

*   >⚠️ O pendrive será formatado durante a criação da mídia bootável. Todos os dados existentes serão apagados. Faça backup de arquivos importantes antes.
>

*   **Conexão de rede via cabo** (recomendada, pois é necessário acesso à internet durante a instalação)

2.  ### Preparação de software

* **Um computador para criar o USB bootável** (Windows, macOS ou Linux)

*   [\- Imagem ISO oficial do Arch Linux (2025.12.01)](https://archlinux.org/download/)

*   **Ferramentas para criar USB bootável** (escolha uma):

    *   **balenaEtcher** (multiplataforma, interface gráfica, recomendado)
    *   **Rufus** (para usuários Windows)

* * *

## **III. Criando o USB bootável (exemplo com balenaEtcher)**

![balenaEtcher burning process](https://manage.icewhale.io/api/static/docs/1766567149666_copyImage.png)

> ⚠️ Criar o pendrive bootável formatará a unidade e apagará todos os dados. Faça backup antes.

1. Insira o pendrive USB.
2. Abra o **balenaEtcher**.
3. Clique em **“Flash from file”** e selecione o `archlinux-2025.12.01-x86_64.iso` baixado.
4. Clique em **“Select target”** e escolha seu pendrive (verifique para não selecionar o dispositivo errado).
5. Clique em **“Flash!”** e aguarde até o término da gravação.
6. Ejete o pendrive com segurança.

![balenaEtcher burning complete](https://manage.icewhale.io/api/static/docs/1766567150367_copyImage.png)

* * *

## **IV. Inicializando o ZimaBoard 2 a partir do USB**

1. Insira o pendrive bootável do Arch Linux em uma porta USB do ZimaBoard 2.
2. Conecte o monitor HDMI, teclado e cabo Ethernet.
3. Ligue o dispositivo. Quando o logotipo **ZIMA** aparecer, pressione repetidamente **F11** para entrar no **Boot Menu**.
4. Use as setas para selecionar seu pendrive USB.
5. Pressione **Enter** para confirmar e inicializar a partir do USB.

![boot options](https://manage.icewhale.io/api/static/docs/1766567151194_copyImage.png)

* * *

## **V. Entrando no ambiente de instalação e configuração inicial**

1.  ### Inicializar no ambiente de instalação do Arch Linux

No menu de boot, selecione a primeira opção:

    Arch Linux install medium (x86_64)

![arch startup options](https://manage.icewhale.io/api/static/docs/1766567151645_copyImage.png)

Após a inicialização, você terá um shell como root:

    root@archiso ~ #

![Arch installation environment](https://manage.icewhale.io/api/static/docs/1766567152384_copyImage.png)

Isso indica que você está no ambiente de instalação do Arch Linux.

* * *

2.  ### Verificar interfaces de rede

Primeiro, verifique se o sistema detectou uma interface de rede:

    ip link

Se você vir uma interface como **enp***, a placa de rede foi detectada corretamente.

* * *

3.  ### Testar conectividade de rede

Teste a conexão de rede:

    ping archlinux.org

Se o ping responder, a rede está funcionando. Pressione `Ctrl + C` para interromper o teste.

![Network connectivity test](https://manage.icewhale.io/api/static/docs/1766567153730_copyImage.png)

* * *

4.  ### Sincronizar o horário do sistema

Antes de prosseguir, recomenda-se habilitar a sincronização de tempo por rede para garantir horário correto.

Ative NTP:

    timedatectl set-ntp true

Verifique o status de sincronização:

    timedatectl

Se o horário estiver correto, a sincronização foi concluída.

![Synchronize system time](https://manage.icewhale.io/api/static/docs/1766567154188_copyImage.png)

* * *

5.  ### Particionamento de disco (GPT)

Este guia assume que o sistema será instalado no **dispositivo eMMC onboard**.

> ⚠️ O processo de instalação particionará e formatará o eMMC onboard. Certifique-se de que não há dados importantes antes de prosseguir.

* * *

#### Visualizar informações de disco

    lsblk

Execute o comando acima para ver discos e partições em formato de árvore:

![View disk information](https://manage.icewhale.io/api/static/docs/1766567155139_copyImage.png)

#### Criar tabela de partição GPT usando `cfdisk`

##### Inicie a ferramenta de particionamento:

    cfdisk /dev/mmcblk0

![Enter the partition tool](https://manage.icewhale.io/api/static/docs/1766567156058_copyImage.png)

##### Selecione o tipo de tabela de partição

Ao entrar no `cfdisk` pela primeira vez, será solicitado o tipo de tabela. Selecione: `GPT`

![Select partition table type](https://manage.icewhale.io/api/static/docs/1766567156700_copyImage.png)

##### Criar a primeira partição (EFI)

###### ① Criar nova partição

No menu principal do `cfdisk`:

1. Use a seta para a direita (→).
2. Mova o cursor para o menu inferior e selecione **[NEW]**.
3. Pressione **Enter** para criar a partição.

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567157176_copyImage.png)

###### ② Especificar o tamanho

Quando for solicitado o tamanho, insira: `512M`

![Input 512M](https://manage.icewhale.io/api/static/docs/1766567157797_copyImage.png)

Pressione **Enter**.

###### ③ Definir o tipo de partição

Após criar a partição:

1. Certifique-se de que a nova partição está selecionada.
2. Use a seta para a direita (→) para ir ao menu inferior.
3. Selecione **[Type]**.
4. Pressione **Enter**.

![View partition type](https://manage.icewhale.io/api/static/docs/1766567158616_copyImage.png)

###### ④ Escolher EFI System

Na lista de tipos de partição:

1. Use as setas ↑ / ↓.
2. Localize **EFI System**.
3. Pressione **Enter** para confirmar.

![Select partition type](https://manage.icewhale.io/api/static/docs/1766567159383_copyImage.png)

###### ⑤ Verificar o resultado

No menu principal você deverá ver algo como:

`/dev/mmcblk0p1 512M EFI System`

![Confirm partition results](https://manage.icewhale.io/api/static/docs/1766567160155_copyImage.png)

* * *

##### Criar a segunda partição (Swap)

###### ① Selecionar espaço livre

Use a seta ↓ para selecionar: `Free space 28.6G`

###### ② Criar nova partição

* Use a seta para a direita (→) para ir ao menu inferior.
* Destaque **[NEW]**.
* Pressione **Enter**.

###### ③ Especificar o tamanho

Quando solicitado, digite: `2G`

![Enter 2G](https://manage.icewhale.io/api/static/docs/1766567161097_copyImage.png)

###### ④ Definir tipo para Linux swap

* Selecione a partição recém-criada de ~2 GB.
* Entre em **[Type]**.
* Escolha **Linux swap**.

![Set the partition type to Linux swap.](https://manage.icewhale.io/api/static/docs/1766567162104_copyImage.png)

* * *

##### Criar a terceira partição (root)

###### ① Selecionar o espaço restante

Você deverá ver: `Free space 26.6G`. Mantenha esta seleção.

![Create the third partition (Root).](https://manage.icewhale.io/api/static/docs/1766567162844_copyImage.png)

###### ② Criar nova partição

* Use a seta para a direita (→) para ir ao menu inferior.
* Selecione **[NEW]**.
* Pressione **Enter**.

![Select the 3rd partition (Root).](https://manage.icewhale.io/api/static/docs/1766567163775_copyImage.png)

###### ③ Usar todo o espaço restante

Quando for solicitado o tamanho: **não digite nada**; pressione Enter para usar todo o espaço restante.

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567164682_copyImage.png)

###### ④ Definir tipo de partição

A partição criada terá por padrão o tipo **Linux filesystem**. Na maioria dos casos não é necessário alterar.

![Default partition type](https://manage.icewhale.io/api/static/docs/1766567165509_copyImage.png)

* * *

##### Gravar a tabela e sair

###### Gravar a tabela

* Selecione **[Write]**.
* Pressione **Enter**.
* Quando solicitado, digite: `yes`

![Write to partition table](https://manage.icewhale.io/api/static/docs/1766567166450_copyImage.png)

![Confirm writing](https://manage.icewhale.io/api/static/docs/1766567167219_copyImage.png)

###### Sair do `cfdisk`

* Selecione **[Quit]**.
* Pressione **Enter**.

![Exit cfdisk](https://manage.icewhale.io/api/static/docs/1766567168020_copyImage.png)

* * *

##### Resumo de particionamento

Neste ponto o particionamento está completo. Você deve ter a seguinte disposição:

| Size |Partition | type |
| - | - | - |
| mmcblk0p1| 512M | EFI System |
| mmcblk0p2 | 2G | Linux swap |
| mmcblk0p3 | 26.6G | Linux filesystem |

![Partition completed](https://manage.icewhale.io/api/static/docs/1766567168969_copyImage.png)

Até aqui você completou a etapa mais propensa a erros do processo de instalação do Arch Linux.

* * *

6.  ### Formatar partições

Em termos simples:

* **Formatar** = limpar uma partição e prepará-la para uso
* **Montar** = informar ao sistema como usar essas partições

* * *

#### ① Formatar a partição EFI (FAT32)

Execute o comando abaixo para formatar `mmcblk0p1`:

    mkfs.fat -F32 /dev/mmcblk0p1

![Format partition](https://manage.icewhale.io/api/static/docs/1766567169740_copyImage.png)

#### ② Inicializar e ativar a partição swap

    mkswap /dev/mmcblk0p2
    swapon /dev/mmcblk0p2

![Initialize and enable partitions](https://manage.icewhale.io/api/static/docs/1766567170625_copyImage.png)

#### ③ Formatar a partição root (ext4)

    mkfs.ext4 /dev/mmcblk0p3

![Format root partition](https://manage.icewhale.io/api/static/docs/1766567171361_copyImage.png)

* * *

7.  ### Montar partições

#### Montar a partição root em `/mnt`

    mount /dev/mmcblk0p3 /mnt

#### Criar e montar a partição EFI

    mkdir /mnt/boot
    mount /dev/mmcblk0p1 /mnt/boot

![Create and mount the EFI partition](https://manage.icewhale.io/api/static/docs/1766567172129_copyImage.png)

* * *

## VI. Instalando Arch Linux (pacstrap)

1.  ### Executar `pacstrap`

    pacstrap /mnt base linux linux-firmware networkmanager sudo vim

**Explicação dos parâmetros (para referência):**

* **base**: sistema mínimo do Arch Linux
* **linux**: kernel padrão do Linux
* **linux-firmware**: firmware de hardware (necessário)
* **networkmanager**: ferramenta de gerenciamento de rede
* **sudo**: gestão de privilégios para usuários não-root
* **vim**: editor de texto (usado para configurações posteriores)

Esse passo irá baixar e instalar pacotes; a duração depende da velocidade da rede. É normal haver muito output durante o processo.

![Execute pacstrap](https://manage.icewhale.io/api/static/docs/1766567172894_copyImage.png)

![pacstrap execution complete](https://manage.icewhale.io/api/static/docs/1766567174214_copyImage.png)

* * *

2.  ### Gerar o arquivo `fstab`

Gere a tabela de montagem do sistema para o novo sistema:

    genfstab -U /mnt >> /mnt/etc/fstab

![Generate fstab file](https://manage.icewhale.io/api/static/docs/1766567175220_copyImage.png)

* * *

3.  ### Entrar no sistema recém-instalado (chroot)

* Troque para o ambiente do sistema recém-instalado:

`arch-chroot /mnt`

* Após a troca, o prompt ficará semelhante a:

`[root@arch /]#`

**Isso indica que você saiu do ambiente de instalação e agora está dentro do sistema Arch Linux recém-instalado.**

![Enter the newly installed system (chroot)](https://manage.icewhale.io/api/static/docs/1766567175932_copyImage.png)

* * *

## VII. Configuração básica do sistema

1.  ### Definir fuso horário

Usando Hong Kong como exemplo:

    ln -sf /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime

Sincronize o relógio de hardware (muito importante):

    hwclock --systohc

![Synchronizing hardware clock](https://manage.icewhale.io/api/static/docs/1766567176716_copyImage.png)

Verificação rápida (opcional)

Se o horário aparecer como **UTC+8 (Hong Kong)**, a configuração foi bem-sucedida.

![Hardware clock synchronization successful](https://manage.icewhale.io/api/static/docs/1766567177777_copyImage.png)

* * *

2.  ### Configurar locale (idioma)

#### ① Editar a lista de locales

Abra o arquivo de configuração de locale:

    vim /etc/locale.gen

![Set language](https://manage.icewhale.io/api/static/docs/1766567178733_copyImage.png)

Encontre o idioma desejado e descomente a linha correspondente (remova o `#` no início). Exemplo para inglês (EUA):

    en_US.UTF-8 UTF-8

![Set language en_US](https://manage.icewhale.io/api/static/docs/1766567179497_copyImage.png)

Salve e saia:

* Pressione **Esc**
* Digite `:wq`
* Pressione **Enter**

#### ② Gerar locales

    locale-gen

![Generate locale](https://manage.icewhale.io/api/static/docs/1766567180239_copyImage.png)

3.  ### Definir o hostname

Defina o hostname do sistema. Substitua por qualquer nome que desejar; aqui usamos `arch` como exemplo:

    echo "arch" > /etc/hostname

![Set system hostname](https://manage.icewhale.io/api/static/docs/1766567180931_copyImage.png)

Em seguida, configure o arquivo `hosts`:

    vim /etc/hosts

![vim hosts](https://manage.icewhale.io/api/static/docs/1766567181830_copyImage.png)

Altere o arquivo para:

    127.0.0.1   localhost
    ::1         localhost
    127.0.1.1   arch.localdomain arch

![hosts example](https://manage.icewhale.io/api/static/docs/1766567182309_copyImage.png)

⚠️ Se o seu hostname não for `arch`, substitua `arch` acima pelo hostname que você definiu.

Salve e saia do Vim:

* Pressione **Esc**
* Digite `:wq`
* Pressione **Enter**

* * *

4.  ### Definir senha do root

Defina uma senha de login para o usuário `root`:

    passwd

O sistema solicitará a senha duas vezes:

1. Digite a nova senha
2. Digite novamente para confirmar

⚠️ Nenhum caractere (nem mesmo `*`) será exibido enquanto você digita a senha — isso é normal. Certifique-se de que ambas as entradas coincidam.

Após concluir, você poderá fazer login como `root` com essa senha.

![Set root password](https://manage.icewhale.io/api/static/docs/1766567182798_copyImage.png)

* * *

5.  ### Habilitar serviço de rede

Habilite o NetworkManager para iniciar automaticamente no boot:

    systemctl enable NetworkManager

![Enable network services](https://manage.icewhale.io/api/static/docs/1766567183538_copyImage.png)

![Network service enabled successfully](https://manage.icewhale.io/api/static/docs/1766567184534_copyImage.png)

* * *

## VIII. Instalar e configurar o carregador de boot systemd-boot

1.  ### Instalar systemd-boot

Execute:

    bootctl install

![Install systemd-boot](https://manage.icewhale.io/api/static/docs/1766567185486_copyImage.png)

* * *

2.  ### Criar entrada de boot para Arch Linux

Você precisa do seguinte arquivo:

`/boot/loader/entries/arch.conf`

Este arquivo informa ao systemd-boot:

* Onde está o kernel
* Onde está o initramfs
* Em qual partição está o sistema root

#### ① Obter o PARTUUID da partição root

    blkid /dev/mmcblk0p3

Você verá saída semelhante a:

    /dev/mmcblk0p3: PARTUUID="12345678-9abc-def0-1234-56789abcdef0"

> Copie e anote o valor entre aspas.

![Write down PARTUUID.](https://manage.icewhale.io/api/static/docs/1766567186422_copyImage.png)

* * *

#### ② Criar o arquivo de entrada de boot

    vi /boot/loader/entries/arch.conf

![Create startup configuration file](https://manage.icewhale.io/api/static/docs/1766567187080_copyImage.png)

Entre no modo de inserção (pressione **i**) e insira o conteúdo a seguir:

⚠️ Substitua `YOUR_PARTUUID` pelo valor real obtido no passo anterior.

    title   Arch Linux
    linux   /vmlinuz-linux
    initrd  /initramfs-linux.img
    options root=PARTUUID=YOUR_PARTUUID rw

![arch.conf example](https://manage.icewhale.io/api/static/docs/1766567187556_copyImage.png)

Salve e saia:

* Pressione **Esc**
* Digite `:wq`
* Pressione **Enter**

* * *

## IX. Finalizar instalação e reiniciar

### Sair do chroot

Saia do ambiente chroot: `exit`

![Exit the chroot environment](https://manage.icewhale.io/api/static/docs/1766567188512_copyImage.png)

### Reiniciar o sistema

`reboot`

> ⚠️ Antes de reiniciar, **remova a mídia de instalação** (pendrive / ISO).

![Restart the system](https://manage.icewhale.io/api/static/docs/1766567189421_copyImage.png)

* * *

### Instalação concluída

Após um boot bem-sucedido, você deverá ver uma tela semelhante a esta:

![Installation completed](https://manage.icewhale.io/api/static/docs/1766567190046_copyImage.png)

🎉 Neste ponto, a instalação básica do **Arch Linux** está concluída. O sistema é agora uma base limpa, funcional e extensível.

### Próximos passos recomendados:

* Configurar rede
* Instalar um ambiente de área de trabalho

Consulte a Arch Wiki oficial para mais orientações: [https://wiki.archlinux.org/title/General\_recommendations](https://wiki.archlinux.org/title/General_recommendations)

Todas as configurações adicionais podem ser construídas progressivamente sobre esta base.
