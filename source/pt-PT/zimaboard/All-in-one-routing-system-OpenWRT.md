---
title: Sistema de roteamento tudo-em-um - Instalar OpenWRT
typora-root-url: ..
---

# Apresentando o OpenWRT

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/openwrt-logo.svg)

Tributo à grande [Documentação do OpenWRT](https://oldwiki.archive.openwrt.org/start), este artigo documenta apenas a instalação do OpenWRT na ZimaBoard. Atualmente, há outro artigo sobre como escrever o sistema OpenWRT para a eMMC da ZimaBoard.

**OpenWRT é o melhor companheiro para a versão de login com pen drive ZimaBoard - 5 passos para gravar o seu firmware OpenWRT favorito**

{% note dinfo %}
**Tópicos**

Com uma performance entre Raspberry Pi e MicroServer e um posicionamento de preço, o melhor uso da ZimaBoard para muitos gamers é sem dúvida ser um roteador x86 OpenWRT / pfSense personalizável de cem dólares, com poder computacional suficiente. Assim, com base neste simples tutorial, demonstraremos como criar um disco de inicialização USB e, após alguns passos, fazer login no OpenWRT.
{% endnote %}

## **Preparação**

1. PC Host
2. ZimaBoard (Acesso à mesma LAN que o PC)
3. Pen Drive
4. Teclado 
5. Adaptador Minidp para HDMI ou DP
6. Monitor
7. Cabo Ethernet 
8. Imagem do OpenWrt (Ou baixe o espelho recomendado pela equipe através deste link)
9. balenaEther (Ou qualquer uma das suas ferramentas habituais de criação de imagem de pen drive)

# Passos de operação

## 1. Criando um sistema OpenWRT em uma pen drive
Para passos detalhados, consulte Instalação do Sistema de Terceiros Universal

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-creat-mirror.png)

## 2. Conectando Equipamentos Relacionados

**ZimaBoard via cabo miniDP para HDMI / DP, acesso à exibição, Teclado USB à ZimaBoard**

![sistema de roteador openwrt zimaboard conectar](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-zimaboard-connect.png)

## 3. Entrar no BIOS

**Insira a pen drive na ZimaBoard, inicie e clique em “DEL” para acessar a página do BIOS**

![Entrar no BIOS OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-to-bios.png)

## 4. Seleção no BIOS

**Na opção de Boot, configure a pen drive USB como Opção de Boot #1, salve as configurações e reinicie. Após o boot, entre na pen drive OpenWRT**

![Escolher Boot OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-choose-boot.png)

## 5. Encontrar o IP e fazer login no OpenWRT

**Configure as informações de endereço IP do seu sistema OpenWRT e use um navegador de PC para acessar a página Luci do OpenWRT**

![Fazer Login em OpenWRT Luci](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-openwrt-luci.png)

# Login Bem Sucedido !!!!!

![Instalação Completa do OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-complete-install-openwrt.jpeg)

# Resumo

**Conseguir fazer o OpenWRT funcionar em uma pen drive é uma maneira relativamente simples. Mas, como um gamer aspirante, você pode consultar o seguinte tutorial se desejar gravar seu sistema OpenWrt em uma eMMC da ZimaBoard. Se você estiver interessado em executar serviços de software mais interessantes para melhoria de rede e gerenciamento de dados em nuvem doméstica no OpenWRT, confira este link!**

**Claro, há outros métodos, e o endereço de download do firmware OpenWRT também é fornecido aqui—— [Endereço de Download do Firmware](https://supes.top/?version=22.03&target=x86%2F64&id=generic)**
**Por favor, não abuse pelo amor ao poder**


[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)