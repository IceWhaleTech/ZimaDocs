---
title: 2 ZimaBlades, 1 Cluster? O PVE torna o seu serviço Migrável!
type: "Docs"
tip: Formato fixo da barra superior, não exclua
---
Imagine o seu servidor doméstico a executar serviços essenciais como VPN, transcodificação de mídia, DNS ou até mesmo um servidor de jogos. Já pensou em migrar esses serviços para uma nova máquina algum dia? A migração de serviços entre máquinas diferentes é uma necessidade comum, e seria ainda melhor se pudesse migrar automaticamente os serviços para um novo dispositivo em caso de falha do servidor. Como podemos alcançar isso com o ZimaBlade?

![](https://manage.icewhale.io/api/static/docs/1720063069079_copyImage.jpeg)

[ZimaBlade](https://shop.zimaspace.com/products/zimablade-single-board-server-for-cyber-native) é um servidor compacto, mas poderoso. O PVE (Proxmox Virtual Environment) é uma solução de gestão de virtualização de servidores. Pode utilizar o ZimaBlade com o PVE para gerir máquinas virtuais, containers e clusters altamente disponíveis.

![](https://manage.icewhale.io/api/static/docs/1720063069927_copyImage.png)

  

Hoje, vamos configurar o nosso Cluster PVE utilizando 2 unidades ZimaBlade para realizar a migração de serviços.

  

Aqui está o que você precisa:

*   2 Kits ZimaBlade: [ZimaBlade Single Board Server](https://shop.zimaspace.com/products/zimablade-single-board-server-for-cyber-native)
    
*   2 Discos Rígidos (SATA)
    
*   Adicionalmente:
    
    *   1 Pen Drive para criar a mídia de instalação do PVE
        
    *   1 Hub USB para poder ligar tanto o teclado como o pen drive ao ZimaBlade
        
    *   2 Cabos RJ45 com conexões LAN para rede
        
    *   1 Teclado e Monitor para a configuração inicial
        

## Instalando o Sistema PVE

Aqui estão os passos simples para instalar o PVE no ZimaBlade:

  

Usando o `Rufus`, escreva o arquivo ISO do PVE para um pen drive. Pode precisar desses recursos:

Obtenha o Rufus: [Rufus Download](https://rufus.ie/)

Obtenha o ISO do PVE: [Proxmox Download](https://www.proxmox.com/en/downloads)

Escreva o PVE para o pen drive para criar a mídia de instalação PVE:

*   Insira o pen drive numa máquina Windows e execute o programa Rufus nessa máquina.
    
*   No Rufus, em "Device", selecione o pen drive que acabou de inserir.
    
*   Em "Boot selection", clique no botão SELECT para escolher o arquivo ISO do PVE no seu disco.
    

![](https://manage.icewhale.io/api/static/docs/1720063070516_copyImage.png)

*   Clique no botão START para escrever o arquivo de instalação para o pen drive.
    

  

Instale a memória, ligue os cabos de Ethernet e vídeo ao ZimaBlade. Para um guia passo a passo detalhado sobre como instalar a memória e outros componentes no ZimaBlade, consulte este tutorial abrangente: [Configurar um NAS com ZimaBlade](https://www.zimaspace.com/docs/docs/How-to-set-up-a-NAS-with-ZimaBlade.html).

  

Agora, vamos instalar o PVE:

*   Remova com segurança o pen drive da máquina Windows e conecte-o, juntamente com o teclado, ao Hub USB.
    
*   Conecte o Hub USB ao ZimaBlade.
    
*   Ligue o monitor.
    
*   Conecte a fonte de alimentação ao ZimaBlade, e então pressione rapidamente e repetidamente a tecla DEL no teclado para entrar na BIOS do ZimaBlade.
    

![](https://manage.icewhale.io/api/static/docs/1720063071163_copyImage.jpeg)

*   Use as teclas de seta no teclado para navegar na BIOS e encontrar o menu "Save & Exit".
    
*   Em "Boot Override", localize o seu pen drive e pressione Enter.
    
*   Agora você entrará na interface de instalação do PVE.
    

  

Ao instalar o PVE nas 2 unidades ZimaBlade, tenha em mente os seguintes pontos:

*   Instale o PVE no armazenamento externo (não no eMMC interno).
    
*   Certifique-se de que as configurações de localidade estão consistentes. Aqui está um exemplo:

![](https://manage.icewhale.io/api/static/docs/1720063616916_image.png)

*   Use nomes de host diferentes para cada ZimaBlade.
    
*   Atribua manualmente diferentes endereços IP para cada ZimaBlade (dependendo da sua configuração de LAN). Aqui está um exemplo:

  ![](https://manage.icewhale.io/api/static/docs/1720063563445_image.png)

Siga as instruções e aguarde a conclusão da instalação.

Criar Cluster PVE
-------------

Escolha uma das suas unidades ZimaBlade e acesse a interface web do PVE em `https://PVE1IP:8006`:

![](https://manage.icewhale.io/api/static/docs/1720063072977_copyImage.png)

  

Clique em "Cluster", depois em "Create Cluster". Dê um nome ao seu cluster e clique em "Create":

![](https://manage.icewhale.io/api/static/docs/1720063073525_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063074070_copyImage.png)

Após ver "TASK OK", feche a janela, clique em "Join Information", e depois clique em "Copy Information":

![](https://manage.icewhale.io/api/static/docs/1720063074636_copyImage.png)

Agora, acesse a interface web do PVE na segunda unidade ZimaBlade em `https://PVE2IP:8006`:

![](https://manage.icewhale.io/api/static/docs/1720063075226_copyImage.png)

Clique em "Cluster", depois em "Join Cluster", cole as informações de junção que você copiou anteriormente, insira a senha root da outra unidade ZimaBlade e clique em "Join Cluster":

![](https://manage.icewhale.io/api/static/docs/1720063075739_copyImage.png)

Agora, esta máquina faz parte do Cluster. Se tiver mais máquinas, os passos são os mesmos. Depois de adicionar vários nós ao Cluster, ao fazer login na interface web do PVE em qualquer ZimaBlade, será possível ver a presença dos outros nós.

![](https://manage.icewhale.io/api/static/docs/1720063076277_copyImage.png)

Agora, pode instalar máquinas virtuais e serviços em qualquer nó!

Caso de Uso do Cluster: Migração de Serviços
-----------------------------------

Para migrar um serviço que está a ser executado em um nó para outro nó no Cluster:

*   Escolha um nó para instalar o sistema. Aqui, vou usar o Debian como exemplo.
    
    *   Para um tutorial em vídeo detalhado sobre como instalar um sistema no PVE, confira o nosso vídeo: [Como Instalar um Sistema no PVE](https://www.youtube.com/watch?v=K4pOkBwJMg8)
        
*   Uma vez instalado, clique no botão "Start" à direita para iniciar a máquina virtual.
    
*   De outra máquina Windows na mesma rede LAN, faça ping nesta máquina virtual.
    

![](https://manage.icewhale.io/api/static/docs/1720063076945_copyImage.png)

*   Agora, vou migrar a máquina virtual do PVE2 para o PVE1. Siga os passos para completar a migração do serviço.
    

![](https://manage.icewhale.io/api/static/docs/1720063077580_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063078124_copyImage.png)

*   Durante o processo de migração, o serviço original continuará a ser executado.
    

![](https://manage.icewhale.io/api/static/docs/1720063078794_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063079381_copyImage.png)

*   Após uma breve interrupção, a migração do serviço está concluída, e o ping será retomado.
    

![](https://manage.icewhale.io/api/static/docs/1720063080183_copyImage.png)

*   Feito! Você migrou com sucesso a sua máquina virtual.
    

Outros Recursos
---------------

A migração de serviços é apenas o começo. Com o Ceph, pode migrar automaticamente os serviços para outros nós no Cluster quando um nó falhar! Em futuros artigos, mostraremos o processo completo de configuração para ZimaBlade + Cluster + Ceph + HA.

  

Se tiver algum problema durante o uso, não hesite em nos contactar a qualquer momento. Pode também juntar-se à nossa [comunidade](https://icewhale.community/) e ao [Discord](https://discord.gg/uuNfKzG5) para discutir mais sobre PVE e ZimaBlade. Aguardamos o seu feedback!
