---
title: Visão geral do hardware
seo_title: "Comparação de hardware Zima: ZimaCube, ZimaBoard e ZimaBlade"
description: "Compare CPU, memória, baías, rede e expansão do ZimaCube, ZimaBoard e ZimaBlade. Inclui guias de configuração, compatibilidade e sistemas de terceiros."
type: "Docs"
author: Lauren Pan
tip: Não remova este bloco de metadados. O campo description é utilizado como resumo do artigo; se ficar vazio, será usado o primeiro parágrafo.
---

A Zima tem três linhas de hardware, cada uma concebida para um tipo de utilizador diferente. Esta página ajuda-o a identificar o seu dispositivo ou a escolher o modelo adequado.

## Comparar dispositivos

| | ZimaCube 2 | ZimaBoard 2 | ZimaBlade |
|---|---|---|---|
| **Ideal para** | NAS profissional, produção multimédia, IA local | Servidor doméstico, redes, experimentação | NAS de entrada, primeiro projeto DIY |
| **CPU** | Intel i3-1215U / i5-1235U (Pro) | Intel N150 (quatro núcleos, até 3,6 GHz) | Intel Celeron N3350 (3760) / quatro núcleos (7700) |
| **RAM** | 8 GB DDR5 (até 64 GB) | 8 GB / 16 GB LPDDR5 (soldada) | 1 SODIMM DDR3L, até 16 GB |
| **Baías** | 6 SATA + 4 M.2 NVMe | 2 SATA 3.0 + eMMC de 32/64 GB | 2 SATA 3.0 |
| **Rede** | 2 portas 2.5 GbE (Pro acrescenta 10 GbE) | 2 portas 2.5 GbE | 1 porta 1 GbE |
| **Thunderbolt** | 2 TB4 em todos os modelos | Não | Não |
| **PCIe** | PCIe 4.0 x16 + PCIe 3.0 x8 | PCIe 3.0 x2 | 1 PCIe 2.0 x4 |

## Configurar o dispositivo

Se acabou de abrir a caixa, comece pelo guia rápido do seu modelo.

- **[Início rápido do ZimaCube](./quick-start "Desembale o ZimaCube, ligue a alimentação e aceda ao ZimaOS")** — desembalagem, ligações e primeiro acesso
- **[Ligar o ZimaBoard](./zimaboard-quick-start "Faça o primeiro arranque e a configuração inicial do ZimaBoard")** — primeiro arranque e inicialização
- **[Ligar o ZimaBlade](./power-on-zimablade "Instale o suporte de discos e arranque o ZimaBlade")** — suporte de discos e primeiro arranque

## Detalhes de hardware

Depois do arranque, estas páginas explicam as portas, as ranhuras de expansão e a disposição interna.

- **[Detalhes de hardware do ZimaCube](./hardware-details "Consulte todas as portas e interfaces do ZimaCube")** — descrição completa das ligações
- **[Interfaces do ZimaBoard](./hardware-interface "Consulte os pinos, conectores e interfaces do ZimaBoard")** — pinos e conectores
- **[Ligação direta ao PC](./pc-direct "Ligue o ZimaCube diretamente ao computador por Thunderbolt")** — ligação direta ao computador
- **[Expansão de GPU](./gpu-expansion "Adicione uma placa gráfica dedicada ao ZimaCube")** — aumente a capacidade gráfica
- **[Expansão RAID com SSD](./raid-ssd-expansion "Adicione SSD para cache ou armazenamento RAID rápido")** — acrescente cache ou armazenamento de alto desempenho
- **[Guia de ventoinha DIY](./zimacube-fan-diy "Substitua ou melhore a ventoinha do ZimaCube")** — atualize a refrigeração

## Compatibilidade

Consulte os dispositivos e funcionalidades que testámos diretamente.

- **[Lista de compatibilidade de UPS](./ups-compatibility-list "Consulte as UPS verificadas com dispositivos Zima")** — modelos de UPS confirmados
- **[Formatos de disco suportados](./supported-disk-formats "Consulte os sistemas de ficheiros que os dispositivos Zima podem ler e escrever")** — formatos suportados nativamente
- **[Adaptadores de rede compatíveis](./compatible-network-adapters "Consulte os adaptadores de rede testados com ZimaCube")** — placas de rede verificadas
- **[Intel AX210 Wi-Fi](./enable-intel-ax210 "Ative o módulo Intel AX210 no ZimaOS")** — ative o AX210 no sistema
- **[Módulo AX210 para ZimaBoard](./ax210-wifi-6e "Instale o módulo Intel AX210 no ZimaBoard")** — adicione Wi-Fi ao ZimaBoard
- **[Configuração da BIOS](./bios-configuration "Aceda e ajuste a BIOS do dispositivo Zima")** — reveja as definições de firmware
- **[Ativar Wake-on-LAN](./enable-wol-on-zimacube "Ligue o ZimaCube remotamente com Wake-on-LAN")** — arranque remoto do ZimaCube
- **[Wake-on-LAN para ZimaBoard](./wake-on-lan-setup "Configure Wake-on-LAN no ZimaBoard")** — arranque remoto do ZimaBoard

## Sistemas operativos de terceiros

O ZimaOS vem pré-instalado, mas o hardware não está bloqueado. A comunidade também utiliza Unraid, TrueNAS, OpenWrt e outros sistemas.

- **[Executar Unraid](./install-unraid "Instale o Unraid no ZimaCube")** — configure o Unraid no ZimaCube
- **[Executar TrueNAS](./install-truenas "Instale o TrueNAS baseado em ZFS no ZimaCube")** — configure o TrueNAS no ZimaCube
- **[Unraid no ZimaBoard](./unraid-install "Instale o Unraid num servidor ZimaBoard")** — utilize o Unraid no ZimaBoard
- **[Executar OpenWrt](./openwrt-x86-install "Transforme o ZimaBoard num router com OpenWrt")** — crie um router doméstico
- **[OpenWrt por USB](./openwrt-usb-install "Arranque o OpenWrt a partir de uma unidade USB")** — execute o sistema sem o instalar internamente
- **[OpenWrt em eMMC](./openwrt-emmc-boot "Instale o OpenWrt no eMMC interno do ZimaBoard")** — utilize o armazenamento interno
- **[Instalar OMV](./openmediavault-install "Instale o OpenMediaVault no ZimaBoard")** — implemente um sistema orientado a NAS
- **[Configurar OMV](./openmediavault-setup "Faça a configuração inicial do OpenMediaVault")** — primeiros passos após a instalação
- **[Instalar Arch Linux](./arch-linux-installation-on-zimaboard-2 "Instale o Arch Linux no ZimaBoard 2")** — utilize Arch no ZimaBoard 2
- **[Configurar Ubuntu Server](./minimal-ubuntu-server-build "Crie um Ubuntu Server mínimo no ZimaBoard 2")** — instale um servidor leve
- **[Guia de sistemas de terceiros](./third-party-os-install "Instale qualquer sistema operativo em hardware Zima")** — procedimento genérico de instalação

## Próximo passo

Quando conhece o hardware, torna-se mais fácil escolher o resto da configuração.

- Configurar o ZimaOS: **[Visão geral do ZimaOS](../zimaos/ "Consulte instalação, armazenamento e partilha")** — instalação, armazenamento e sistema
- Executar aplicações: **[Visão geral da Loja de aplicações](../zimaos/app-store/ "Explore aplicações multimédia, autoalojadas e de IA")** — multimédia, autoalojamento e agentes de IA
