---
title: Como configurar um NAS com ZimaBlade
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é para a descrição do artigo, se não preenchido, será extraído o primeiro parágrafo do conteúdo
---
NAS é um refúgio digital onde seus preciosos ativos de dados residem.
--------------------------------------------------------------

ZimaBlade é um servidor pequeno e compacto que transforma suas necessidades de armazenamento em uma experiência de NAS sem costura. E não apenas na Terra, mas até mesmo em Marte um dia! Seja você um entusiasta experiente do Linux ou um curioso explorador da tecnologia, configurar seu santuário de dados em miniatura NAS com o ZimaBlade é muito fácil. Vamos mergulhar neste tutorial!

![](https://manage.icewhale.io/api/static/docs/1719988281769_copyImage.png)

**O que você precisa:**

*   ZimaBlade: Seu confiável servidor de placa única!
    
*   SO-DIMM DDR3L: O módulo de memória que alimenta seu ZimaBlade.
    
*   Adaptador de Alimentação Type-C 12V 3A: Mantenha seu ZimaBlade ligado.
    
*   Cabo MiniDP: Para conectar seu display.
    
*   Um a Dois HDD ou SSD (Interface SATA): Seus heróis de armazenamento.
    
*   Conector RJ45 com Conexão LAN: Para manter seu ZimaBlade em rede.
    
*   Teclado USB: Para a configuração inicial.
    
*   Tela: Para que você possa ver o que está acontecendo durante a inicialização e configuração.
    

Você pode encontrar todos os acessórios em nossa [Loja Zima](https://shop.zimaspace.com/collections/zima-accessories?utm_source=head&utm_medium=menu).

[Além disso, dê uma olhada em nosso vídeo de início rápido.](https://www.youtube.com/watch?v=--G4T5aGGEM) Vamos começar!

## Passo 1: Instalar SO-DIMM

Remova a tampa preta do ZimaBlade e abra a tampa transparente:

![](https://manage.icewhale.io/api/static/docs/1719988660694_2.png)


Use uma chave de fenda para abrir a tampa transparente:

![](https://manage.icewhale.io/api/static/docs/1719988685607_3.png)


Insira o SO-DIMM até ouvir um clique.

![](https://manage.icewhale.io/api/static/docs/1719988701892_4.png)


Recoloque todas as tampas.

## Passo 2: Conectar

**Conecte o ZimaBlade à sua unidade. Aqui, usamos um HDD como exemplo:**

Para funcionar corretamente, sua unidade precisa de dados e de fornecimento de energia do ZimaBlade. Use o cabo SATA incluído no pacote do ZimaBlade, que obtém tanto dados quanto energia do ZimaBlade.

![](https://manage.icewhale.io/api/static/docs/1719988728728_5.png)


**Conecte o ZimaBlade usando um RJ45:**
![](https://manage.icewhale.io/api/static/docs/1719988748568_6.png)


**Conecte o ZimaBlade a um teclado (USB) e a uma tela (miniDP):**
![](https://manage.icewhale.io/api/static/docs/1719988770426_7.png)


**Conecte o ZimaBlade à fonte de alimentação:**
![](https://manage.icewhale.io/api/static/docs/1719988789048_8.png)


Use o cabo type-C incluído no pacote do ZimaBlade.

> A interface type-C do ZimaBlade suporta USB PD 3.1.
> 
> Para uso de longo prazo com um HDD, considere utilizar uma fonte de alimentação externa.

## Passo 3: Inicializar e obter o IP

Uma vez que você conecta a energia, o dispositivo será iniciado automaticamente. E então... boom! Você está dentro!

![](https://manage.icewhale.io/api/static/docs/1724748313259_image.png)



Você será solicitado a inserir a conta padrão `casaos` e a senha `casaos` para fazer login.


  

**Agora, obtenha o endereço IP do ZimaBlade:**

Digite `ip addr` e pressione `Enter` para ver o endereço IP. Será algo como `192.x.x.x` ou `10.0.x.x`. (dependendo da sua configuração de LAN.)


![](https://manage.icewhale.io/api/static/docs/1724748361255_image.png)


O endereço IP da interface de rede física `enp2s0` (ex: `10.0.179.111`) foi anotado, e será usado para futuras tentativas de login, se necessário.
> Os endereços IP `127.x.x.x` (loopback) são para comunicação interna, `10.x.x.x` (interface física) é para conexões de rede, e `172.x.x.x` (Docker) é para rede de contêiner.

## Passo 4: Seu NAS está aqui!

Abra um navegador no seu celular ou computador e visite o endereço IP que você acabou de anotar.

Siga as instruções para criar uma conta na interface Web.
![](https://manage.icewhale.io/api/static/docs/1719988936857_Arc_MyleHxojSb.png)

Depois de criar a conta, você será logado na interface Web do CasaOS.
<br>

**Agora, configure seu disco.** O CasaOS detectará o disco conectado. Clique no botão de configuração de armazenamento, em seguida, clique no botão "Criar Armazenamento".
![](https://manage.icewhale.io/api/static/docs/1720065540546_image.png)
![](https://manage.icewhale.io/api/static/docs/1719988986725_Arc_Xe3iywhbjm.png)

Escolha a opção apropriada para suas necessidades. Seu disco agora está pronto para ser usado como armazenamento.
![](https://manage.icewhale.io/api/static/docs/1719989035890_Arc_0Jjnl9skw3.png)

**Use o aplicativo "Arquivos" para fazer upload e acessar seus arquivos!**
![](https://manage.icewhale.io/api/static/docs/1719989056324_Arc_gdroRMM9ST.png)

**Seu ZimaBlade NAS está configurado! Aproveite!**

  

Se você encontrar algum problema durante o uso, sinta-se à vontade para nos informar a qualquer momento. Você também pode se juntar à nossa [comunidade](https://community.zimaspace.com/) e [Discord](https://discord.gg/uuNfKzG5) para discutir mais sobre NAS e ZimaBlade. Aguardamos seu feedback!