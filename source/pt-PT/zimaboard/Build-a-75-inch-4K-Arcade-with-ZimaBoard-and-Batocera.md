---
title: Construa uma máquina arcade 4K de 75 polegadas com ZimaBoard e Batocera.linux
---
>**História:**
 Existem ainda tantos jogos retrô por aí, e navegar por eles um a um, com seus nomes e capturas de tela memoráveis, é como voltar no tempo. É como voltar à sua própria infância e paixões) Este tutorial nos levará de volta aos seus primeiros dias.

**Leia este documento para aprender sobre outras maneiras de usar o ZimaBoard e obter uma visão geral rápida da diversidade de uso do ZimaBoard**
> **Razões para escolher Batocera:**
    - > **Batocera** é uma das maneiras mais fáceis de transformar nosso ZimaBoard em um console retrô atraente com múltiplos emuladores e centenas de jogos para aproveitar.
    - > Um dos pontos positivos do **Batocera** é que ele não modifica a memória de armazenamento interno do ZimaBoard ou de outros dispositivos compatíveis. Remova a memória ou o cartão que usamos quando não queremos usar o Batocera, e nossa máquina retornará ao seu estado original sem qualquer modificação. Existe um sistema semelhante ao [EmuELEC](https://androidpctv.com/tutorial-emuelec-turns-your-android-tv-box-into-a-retro-console/) que também podemos experimentar.

# 1. O QUE É [BATOCERA.LINUX](https://batocera.org/) ?

![Introduzir Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera.png)

**O software [Batocera](https://batocera.org/), baseado na distribuição Debian, é um conjunto de emuladores que nos permite carregar jogos com suas capas e outros extras para jogar de forma organizada dezenas de emuladores de diferentes máquinas. Para jogá-los, você precisa dos ```ROMS ou ISO``` dos jogos. Alguns desses sistemas também requerem as imagens BIOS da máquina a ser emulada.**

**O Batocera também suporta computadores de ```Android```, ```PC``` ou ```MacOS``` de todos os tipos, placas ```Raspberry Pi``` e muitos **consoles retrô portáteis**… para os quais existem distribuições exclusivas. A instalação do Batocera é simples e fácil de configurar, sua interface é agradável e fácil de usar, e a lista de emuladores suportados é enorme.**

- Emuladores básicos suportados: AMIGA, MSX, NES, SNES, GBA, MG, DREAMCAST, NDS, PS1, CPS1/2/3…
- Suportado apenas em hardware poderoso: PS2, PS3, GAMECUBE, 3DS, WII/U, SWITCH, XBOX…
- [Lista completa de sistemas emulados no Batocera.](https://batocera.org/compatibility.php)
- [Wiki do Batocera](https://wiki.batocera.org/)

![Introduzir Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera2.png)

# 2.INSTALAR BATOCERA EM PENDRIVE USB OU MICROSD

## Coisas a Preparar com Antecedência

![Batocera Linux](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare.png)

![Introduzir Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare2.jpeg)

## Criando uma Imagem do Batocera

**Para instalar o **Batocera** precisamos do arquivo **IMG.GZ** para o nosso dispositivo. Para baixá-lo, só precisamos entrar no site do Batocera e salvá-lo em nosso computador. Então, graças ao software balenaEtcher, criaremos o disco de boot que nos permitirá executar o sistema sem modificar nosso dispositivo.**

- **[Baixar arquivo de imagem Batocera IMG.GZ.](https://batocera.org/download)**
- **[Baixar Balena para gravar a imagem](https://www.balena.io/etcher)**
- **[Baixar pacote BIOS para Batocera](https://github.com/Abdess/retroarch_system/releases/download/RetroArch-v1.9.13/Batocera_V33.zip)**

## Criar um disco de boot para Batocera

**Após baixar os arquivos necessários, podemos gerar o ```cartão SD ou pendrive USB``` para iniciar este sistema, executando o programa Balena. Se não funcionar no nosso dispositivo via pendrive, é recomendável usar um cartão SD; em qualquer caso, devemos ter a unidade mais rápida possível se formos usá-la com este método.**

**- passo1**

**Precisamos de um [cartão microSD ou pendrive USB](https://amzn.to/3tcdzSh) o mais rápido possível, com pelo menos 16 GB e um leitor de cartão de PC.**

**- passo2**

**Abra seu Balena e clique em Flash a partir do arquivo e selecione o Batocera que você acabou de baixar.**

![Abrir balenaetcher](/images//Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

**- passo3**

**Selecione o ```cartão SD ou pendrive USB``` que você precisa para iniciar** 

![escolha a unidade usb](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

**- passo4**

**Digite sua senha de host para iniciar a conversão**

![escolha a unidade usb](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

# 3.Ligue o ZimaBoard

## Primeiro boot no ZimaBoard

**Com o ZimaBoard desligado, inserimos o micro ```cartão SD ou pendrive USB``` preparado com o Batocera.**

![Zimaboard Conectar Usb](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-connect-usb.png)

**Ao iniciar, pressione longamente para entrar na interface do Bios, selecione o ```boot pelo USB```**

![Zimaboard Boot Selecione O Disco USB](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-select-the-u-disk.jpeg)

**Finalmente, você está na interface do Batocera**

![Entrar no Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-enter-batocera.png)

# 4. Começando a usar o Batocera

## Regras de uso

![Teclas de Atalho Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-in-game-batocera-hotkeys.png)

Batocera pode não ser adequado para todos os controles, mas satisfaz as regras de uso dos controles mainstream no mercado.

## Jogar
**O Batocera vem com uma seleção de ```ROMs - jogos gratuitos``` que estão disponíveis gratuitamente e que podem ser distribuídos legalmente.**

![Jogar Batocera Com Zimaboard](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-play.jpeg)

# 5.Outras Configurações

**Se você quiser adicionar seus próprios arquivos ROM e BIOS, primeiro deve acessar o Batocera**

## Encontrar um Endereço IP do ZimaBoard 

**- Passo1 Pressione a barra de espaço**

**- Passo2 Encontre as CONFIGURAÇÕES DE REDE e entre**

![Batocera Configuração Rede](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings.jpeg)

**- Passo 3 Encontre o endereço IP**

![Batocera Configuração Rede](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings1.jpeg)

**- Passo 4 Conecte-se ao ZimaBoard usando seu computador** 

![Batocera Configuração Rede](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings2.jpeg)

**- Passo 5 Clique em Conectar para ir à pasta**

![Batocera Configuração Rede](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings3.jpeg)

![Batocera Configuração Rede](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings4.jpeg)

**- Passo 6 Coloque a Rom ou BIOS que você baixou na pasta apropriada** 

Por favor, consulte o **[tutorial oficial](https://wiki.batocera.org/add_games_bios)** para documentação detalhada.

## Sobrescrever o Batocera com o Sistema Original

**- Passo1 Pressione a barra de espaço e procure `CONFIGURAÇÕES DO SISTEMA`**

![Sistema Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings.jpeg)

**- Passo2 Selecione `INSTALAR BATOCERA EM UM NOVO DISCO`**

![Sistema Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings2.jpeg)

**- Passo 3 DISPOSITIVO ALVO `16 ou 32G` ARQUITETURA ALVO Escolha `X860_64` VOCÊ TEM CERTEZA? escolha `sim`**

**Finalmente clique em `INSTALAR`**

![Sistema Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings3.jpeg)

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)