---
title: Como configurar um NAS com ZimaBlade
description: "Ligue pela primeira vez o seu servidor de placa única ZimaBlade. Guia de desembalagem que inclui as ligações de hardware, o processo de arranque e o acesso inicial ao sistema."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
Um NAS é um refúgio digital onde residem os seus valiosos dados.
--------------------------------------------------------------

O ZimaBlade é um servidor compacto de placa única que transforma as suas necessidades de armazenamento numa experiência NAS simples. E não apenas na Terra: talvez até em Marte, um dia! Quer seja um entusiasta experiente de Linux ou um curioso explorador de tecnologia, configurar o seu pequeno refúgio de dados com o ZimaBlade é muito fácil. Vamos começar!

![](https://manage.icewhale.io/api/static/docs/1719988281769_copyImage.png)

**O que precisa:**

*   ZimaBlade: Seu confiável servidor de placa única!

*   SO-DIMM DDR3L: O módulo de memória do ZimaBlade.

*   Adaptador de corrente Type-C de 12V 3A: Para alimentar o ZimaBlade.

*   Cabo MiniDP: Para ligar o ecrã.

*   Um a Dois HDD ou SSD (Interface SATA): Seus heróis de armazenamento.

*   Conector RJ45 com ligação LAN: Para ligar o ZimaBlade à rede.

*   Teclado USB: Para a configuração inicial.

*   Ecrã: Para acompanhar o arranque e a configuração.


Pode encontrar todos os acessórios na nossa [Loja Zima](https://shop.zimaspace.com/collections/zima-accessories?utm_source=head&utm_medium=menu).

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

**Ligue o ZimaBlade à unidade. Neste exemplo, utilizamos um HDD:**

Para funcionar corretamente, a unidade precisa de dados e alimentação fornecidos pelo ZimaBlade. Utilize o cabo SATA incluído na embalagem, que transporta ambos.

![](https://manage.icewhale.io/api/static/docs/1719988728728_5.png)


**Conecte o ZimaBlade usando um RJ45:**
![](https://manage.icewhale.io/api/static/docs/1719988748568_6.png)


**Ligue o ZimaBlade a um teclado (USB) e a um ecrã (miniDP):**
![](https://manage.icewhale.io/api/static/docs/1719988770426_7.png)


**Conecte o ZimaBlade à fonte de alimentação:**
![](https://manage.icewhale.io/api/static/docs/1719988789048_8.png)


Use o cabo type-C incluído no pacote do ZimaBlade.

> A interface type-C do ZimaBlade suporta USB PD 3.1.
>
> Para uso de longo prazo com um HDD, considere utilizar uma fonte de alimentação externa.

## Passo 3: Inicializar e obter o IP

Assim que ligar a alimentação, o dispositivo arranca automaticamente. E depois... pronto! Já está dentro!

![](https://manage.icewhale.io/api/static/docs/1724748313259_image.png)



Ser-lhe-á pedido que introduza a conta predefinida `casaos` e a palavra-passe `casaos` para iniciar sessão.




**Agora, obtenha o endereço IP do ZimaBlade:**

Escreva `ip addr` e prima `Enter` para ver o endereço IP. Será semelhante a `192.x.x.x` ou `10.0.x.x`, consoante a configuração da LAN.


![](https://manage.icewhale.io/api/static/docs/1724748361255_image.png)


Anote o endereço IP da interface de rede física `enp2s0` (por exemplo, `10.0.179.111`), pois poderá ser utilizado em futuros inícios de sessão.
> Os endereços IP `127.x.x.x` (loopback) são para comunicação interna, `10.x.x.x` (interface física) é para conexões de rede, e `172.x.x.x` (Docker) é para rede de contêiner.

## Passo 4: Começar a utilizar o CasaOS

Abra um navegador no telemóvel ou no computador e visite o endereço IP que acabou de anotar.

Siga as instruções para criar uma conta na interface Web.
![](https://manage.icewhale.io/api/static/docs/1719988936857_Arc_MyleHxojSb.png)

Depois de criar a conta, iniciará sessão na interface Web do CasaOS.
<br>

**Agora, configure o disco.** O CasaOS detetará a unidade ligada. Clique no botão de configuração do armazenamento e, em seguida, no botão "Criar armazenamento".
![](https://manage.icewhale.io/api/static/docs/1720065540546_image.png)
![](https://manage.icewhale.io/api/static/docs/1719988986725_Arc_Xe3iywhbjm.png)

Escolha a opção adequada às suas necessidades. A unidade está agora pronta para ser utilizada como armazenamento.
![](https://manage.icewhale.io/api/static/docs/1719989035890_Arc_0Jjnl9skw3.png)

**Utilize a aplicação "Ficheiros" para carregar e aceder aos seus ficheiros!**
![](https://manage.icewhale.io/api/static/docs/1719989056324_Arc_gdroRMM9ST.png)

**Seu ZimaBlade NAS está configurado! Aproveite!**



Se encontrar algum problema durante a utilização, contacte-nos a qualquer momento. Também pode juntar-se à nossa [comunidade](https://community.zimaspace.com/) e ao [Discord](https://discord.gg/uuNfKzG5) para conversar sobre NAS e ZimaBlade. Aguardamos os seus comentários!
