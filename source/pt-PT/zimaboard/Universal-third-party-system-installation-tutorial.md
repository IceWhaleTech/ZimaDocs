---
title: Instalação do Sistema Universal de Terceiros
typora-root-url: ..
---
## Razão

**Muitos usuários não sabem como instalar o sistema após o download. Não conhecem os passos claros da instalação, etc. Este artigo irá ajudar os usuários a resolver o problema de instalação do sistema.**

## Imagem de Produção Universal

**O que você precisa fazer no seu computador para se preparar.**
- Baixar e instalar o [balenaEtcher](https://www.balena.io/etcher/) no seu computador
- Baixar a imagem do sistema que você deseja instalar, no texto [Ubuntu Server](https://ubuntu.com/download/server)
  

**Preparação relacionada ao ZimaBoard.**

- ZimaBoard e adaptador de energia
- Um pen drive USB (A capacidade precisa ser maior que a imagem do sistema que você deseja instalar)
- Um adaptador miniDP para DP/HDMI (Usado para conectar a um monitor)
- Um monitor
- Um teclado
- Um hub USB (Opcional, se a porta USB não for suficiente)
- Um mouse (Opcional)
  - Será conveniente se o instalador do sistema que você deseja instalar vier com uma interface gráfica interativa. A maioria dos sistemas operacionais de desktop terá uma, os sistemas operacionais de servidor geralmente não possuem.)
- Um cabo de rede (Recomendado)
  - Conveniente para você completar a configuração da rede e instalar as atualizações de segurança e recursos mais recentes ao mesmo tempo que instala o sistema.)

# Criar um pen drive USB de instalação

## 1. Abra o balenaEtcher


![Abrir Balenaetcher](/images/Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

## 2. Clique em “Flash from file” e selecione a imagem do sistema que você baixou anteriormente.

![Usando Balenaetcher Escrever Imagem em USB](/images/Installing-Ubuntu-System/intall-ubuntu-system-choose-image-in-balenaetcher.png)


![Usando Balenaetcher Escrever Imagem em USB](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-image-in-balenaetcher1.png)

## 3. Clique em “Select target” e selecione seu pen drive USB inserido na caixa de diálogo.

![Usando Balenaetcher Escrever Imagem em USB](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-usb-disk.png)

## 4. Clique em “Flash!” e aguarde a conclusão.
Você pode ser solicitado a inserir sua senha do sistema durante o processo, apenas insira e clique em OK.

![Digite sua Conta e Senha do Computador](/images/Installing-Ubuntu-System/install-ubuntu-system-enter-password.png)

Todo o processo levará alguns minutos, dependendo do tamanho da sua imagem do sistema e da velocidade de leitura/escrita do seu pen drive USB.

![Aguardando Balenaetcher Flash](/images/Installing-Ubuntu-System/install-ubuntu-system-makeing-image.png)

## 5. Conclusão! Remova o pen drive USB, e você está pronto para começar!

![Completar Criação de USB Boot](/images/Installing-Ubuntu-System/install-ubuntu-system-image-complete.png)

## Sistema de Inicialização Universal

Após conectar o ZimaBoard, pressione a **`tecla F11`** / **`tecla Delete`** ininterruptamente. Quando inserimos o pen drive de boot, ele exibirá automaticamente a tecla USB, selecione a tecla USB e pressione a tecla Enter.

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)