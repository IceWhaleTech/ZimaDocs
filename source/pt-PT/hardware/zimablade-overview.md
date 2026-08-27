---
title: Começar a utilizar o ZimaBlade
description: "Guia de hardware do ZimaBlade. Compare os modelos 3760 e 7700, saiba o que é necessário para começar e consulte instruções de configuração detalhadas."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Tenho um carinho especial pelo ZimaBlade. É o equipamento mais pequeno que fabricamos e custa aproximadamente o mesmo que um bom jantar fora. Ainda assim, executa o mesmo conjunto de software que o ZimaCube: CasaOS, Docker e tudo o resto.

Produzimos duas versões. O 3760 é uma placa de dois núcleos que executa Pi-hole, VPN e um NAS leve sem dificuldade. O 7700 utiliza um processador de quatro núcleos, oferecendo margem suficiente para executar simultaneamente Plex, vários contentores Docker e Home Assistant.

| | ZimaBlade 3760 | ZimaBlade 7700 |
|---|---|---|
| **CPU** | Intel Celeron N3350 (dois núcleos) | Intel Celeron de quatro núcleos (N3450 / J3455 / E3950) |
| **RAM** | 1 × SODIMM DDR3L, até 16 GB | 1 × SODIMM DDR3L, até 16 GB |
| **Armazenamento** | 32 GB eMMC integrados | 32 GB eMMC integrados |
| **Rede** | 1 × Gigabit Ethernet | 1 × Gigabit Ethernet |
| **USB** | 1 × USB-C, 1 × USB 3.0, 2 × USB 2.0 | 1 × USB-C, 1 × USB 3.0, 2 × USB 2.0 |
| **SATA** | 2 × SATA 3.0 | 2 × SATA 3.0 |
| **PCIe** | 1 × PCIe 2.0 x4 | 1 × PCIe 2.0 x4 |
| **Vídeo** | Mini DisplayPort 1.2 (4K@60Hz) | Mini DisplayPort 1.2 (4K@60Hz) |
| **Mais adequado para** | Pi-hole, VPN, NAS leve | Plex, Docker, Home Assistant e utilizações mais exigentes |

Ambos os modelos utilizam um processador x86, pelo que as imagens Docker funcionam diretamente, sem problemas de compatibilidade com ARM.

## Configuração

Se acabou de receber o ZimaBlade, comece pelo guia detalhado **[Ligar](./power-on-zimablade "Ligue o ZimaBlade e conclua a configuração inicial")**. Abrange a instalação do módulo de memória, a ligação de unidades, o arranque e a configuração do CasaOS, com fotografias de todos os passos.

O ZimaBlade é fornecido com o CasaOS pré-instalado. Se preferir utilizar o ZimaOS, consulte o guia **[Instalar o ZimaOS](../zimaos/how-to-install-zimaos "Guia passo a passo para instalar o ZimaOS de raiz no seu dispositivo")**; o processo é igual ao de qualquer dispositivo Zima.

## O que pode criar

Apesar do tamanho, o ZimaBlade executa as mesmas aplicações que o ZimaBoard e o ZimaCube. Consulte a **[Descrição geral da App Store](../zimaos/app-store/ "Explore as categorias da App Store para multimédia, aplicações autoalojadas e IA")** para obter ideias de servidores multimédia, aplicações autoalojadas e agentes de IA.

## Sistemas operativos de terceiros

Por utilizar a arquitetura x86, pode instalar outros sistemas operativos, como Ubuntu, Debian ou OpenWrt. O **[Guia de sistemas operativos de terceiros](./third-party-os-install "Instale qualquer sistema operativo no hardware Zima com este guia")** explica o processo geral.

## Se algo correr mal

A placa não tem LED de alimentação, por isso não presuma que está avariada se o ecrã continuar preto. Aguarde cerca de meio minuto e procure um novo dispositivo no router; normalmente está a funcionar, apenas sem qualquer indicação visível.

A ausência de imagem costuma dever-se a um adaptador Mini DisplayPort incompatível. Os cabos diretos de MiniDP para DP tendem a funcionar melhor do que os adaptadores HDMI. Se as unidades não aparecerem, volte a encaixar os cabos SATA; isso resolve quase sempre o problema. Se não encontrar o endereço IP, a lista de clientes DHCP do router é a forma mais rápida de o localizar.
