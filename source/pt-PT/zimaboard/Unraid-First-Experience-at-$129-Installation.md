---
title: A Primeira Experiência com Unraid a $129 - Instalação
---

# Introduzindo o Unraid

![introduzir unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-introduce-unraid.png)

O Unraid OS permite que aficionados por mídia sofisticada, gamers e outros usuários intensivos de dados tenham controle total sobre seus dados, mídia, aplicações e desktops, usando praticamente qualquer combinação de hardware.

# Primeira Opção - Software Oficial de Criação de Imagem

## Instalação Usando um Pen Drive USB

Prepare um pen drive USB (superior a 1G) e formate-o no formato FAT32. Altere o nome para UNRAID (Mac)

![Pen drive USB Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive.png)

![Pen drive USB Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive1.png)

![Pen drive USB Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive2.png)

![Pen drive USB Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive3.png)

## Baixe o [Criador USB Oficial](https://unraid.net/download)

![Criador Unraid Oficial](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-usb-creator.png)

## Baixe a [Imagem Oficial](https://unraid.net/download)

![Baixar imagem oficial Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-image.png)

## Abra o Criador USB e Grave o UnraidOS

Selecione as seguintes opções de acordo com a especificação:

![gravar unraid os](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-unraid-os.png)

**Clique em 'Gravar' e aguarde.**

![gravar imagem unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image.png)

![gravar imagem unraid concluída](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image-done.png)

# Segunda Opção - Gravando a Imagem do Sistema Manualmente

## Modificar "make_bootable"

**Baixe o pacote de imagem e extraia todos os arquivos, depois copie os arquivos extraídos para o diretório raiz do seu pen drive USB**

> **Dicas:**
>
> O formato do pen drive USB também precisa ser FAT32
>
> Sistemas Windows precisam executar o arquivo make_bootable.bat a partir do pen drive USB como administrador
>
> Sistemas Linux executam o arquivo make_bootable_linux

![alterar Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-click-boottable.png)

## Completar o Burn-in

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in.png)

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in1.png)

## Instalando o UnraidOS no ZimaBoard

## Inicialize a partir do Pen Drive USB de Instalação

![Iniciar Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot.png)

## Escolha o SO

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot-choose-unraidos.png)

> ## Seletor de Modo de Inicialização (Syslinux)
> 
> Após configurar seu BIOS, você será apresentado ao menu de inicialização do Unraid Server OS. Há uma série de opções disponíveis para você selecionar:
>
> **unRAID OS (Headless)**
>
> O modo de inicialização padrão para o Unraid Server OS. O modo headless utiliza menos memória do que o modo desktop, mas depende do uso de outro dispositivo para acessar o WebGUI para gerenciamento.
>
> **Modo Unraid OS GUI (Desktop)**
>
> O modo desktop carrega uma interface leve de desktop com um menu de inicialização rápida para acessar o WebGUI, documentação do produto e utilitários Linux úteis, incluindo um shell bash, midnight commander e htop. Este modo pode ser útil para usuários que tentam diagnosticar problemas de conectividade de rede ou para usuários que não têm um dispositivo separado para usar na conexão com o WebGUI.
>
> **unRAID OS Modo Seguro (Headless)**
>
> Use este modo de inicialização para diagnosticar se Plug-ins estão causando problemas de estabilidade no seu sistema.

![entrar no unraid OS](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-log-in-unraid-with-ip.png)

# Conectando-se ao WebGUI do Unraid

Existem dois métodos para se conectar ao WebGUI no Unraid:

- Inicializar o Unraid no modo GUI e fazer login (nome de usuário é **`root`**, sem senha por padrão); ou

- Abra um navegador da web no seu Mac ou PC e navegue até **`http://tower.local`** Nota: se você configurou um nome de host diferente no Criador de Pen Drives USB, use esse nome em vez de **`tower`**.

![painel do usuário do Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-unraid-dashborad.png)

Esta é a interface principal do UNRAID. Muitas informações podem ser vistas nesta página, como status do sistema, informações da placa-mãe, uso do CPU, rede, informações do disco, informações do usuário, etc.


[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)