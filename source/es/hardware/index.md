---
title: Resumen de hardware
seo_title: "Comparación de hardware Zima: ZimaCube, ZimaBoard y ZimaBlade"
description: "Compara CPU, memoria, bahías, red y expansión de ZimaCube, ZimaBoard y ZimaBlade. Incluye guías de configuración, compatibilidad y sistemas de terceros."
type: "Docs"
author: Lauren Pan
tip: No elimines este bloque de metadatos. El campo description se utiliza como resumen del artículo; si se deja vacío, se usará el primer párrafo.
---

Zima ofrece tres líneas de hardware, cada una diseñada para un tipo de usuario diferente. Esta página te ayudará a identificar tu dispositivo o a elegir el modelo que necesitas.

## Comparar dispositivos

| | ZimaCube 2 | ZimaBoard 2 | ZimaBlade |
|---|---|---|---|
| **Ideal para** | NAS profesional, producción multimedia, IA local | Servidor doméstico, redes, experimentación | NAS de entrada, primer proyecto DIY |
| **CPU** | Intel i3-1215U / i5-1235U (Pro) | Intel N150 (cuatro núcleos, hasta 3,6 GHz) | Intel Celeron N3350 (3760) / cuatro núcleos (7700) |
| **RAM** | 8 GB DDR5 (hasta 64 GB) | 8 GB / 16 GB LPDDR5 (soldada) | 1 SODIMM DDR3L, hasta 16 GB |
| **Bahías** | 6 SATA + 4 M.2 NVMe | 2 SATA 3.0 + eMMC de 32/64 GB | 2 SATA 3.0 |
| **Red** | 2 puertos 2.5 GbE (Pro añade 10 GbE) | 2 puertos 2.5 GbE | 1 puerto 1 GbE |
| **Thunderbolt** | 2 TB4 en todos los modelos | No | No |
| **PCIe** | PCIe 4.0 x16 + PCIe 3.0 x8 | PCIe 3.0 x2 | 1 PCIe 2.0 x4 |

## Configurar el dispositivo

Si acabas de abrir la caja, empieza con la guía rápida correspondiente.

- **[Inicio rápido de ZimaCube](./quick-start "Desembala ZimaCube, conecta la alimentación y accede a ZimaOS")** — desembalaje, conexiones y primer acceso
- **[Encender ZimaBoard](./zimaboard-quick-start "Realiza el primer arranque y la configuración inicial de ZimaBoard")** — primer arranque e inicialización
- **[Encender ZimaBlade](./power-on-zimablade "Instala el soporte de discos y arranca ZimaBlade")** — soporte de discos y primer arranque

## Detalles de hardware

Después del arranque, estas páginas explican los puertos, las ranuras de expansión y la distribución interna.

- **[Detalles de hardware de ZimaCube](./hardware-details "Consulta todos los puertos e interfaces de ZimaCube")** — descripción completa de puertos y conexiones
- **[Interfaces de ZimaBoard](./hardware-interface "Consulta los pines, conectores e interfaces de ZimaBoard")** — pines y conectores
- **[Conexión directa al PC](./pc-direct "Conecta ZimaCube directamente al ordenador mediante Thunderbolt")** — conexión directa al ordenador
- **[Expansión de GPU](./gpu-expansion "Añade una tarjeta gráfica dedicada a ZimaCube")** — aumenta la capacidad de procesamiento gráfico
- **[Expansión RAID con SSD](./raid-ssd-expansion "Añade SSD para caché o almacenamiento RAID rápido")** — incorpora caché o almacenamiento de alto rendimiento
- **[Guía de ventilador DIY](./zimacube-fan-diy "Sustituye o mejora el ventilador de ZimaCube")** — actualiza la refrigeración

## Compatibilidad

Consulta los dispositivos y las funciones que hemos probado directamente.

- **[Lista de compatibilidad de UPS](./ups-compatibility-list "Consulta los UPS verificados con dispositivos Zima")** — modelos de UPS confirmados
- **[Formatos de disco compatibles](./supported-disk-formats "Consulta los sistemas de archivos que Zima puede leer y escribir")** — formatos admitidos de forma nativa
- **[Adaptadores de red compatibles](./compatible-network-adapters "Consulta los adaptadores de red probados con ZimaCube")** — tarjetas de red verificadas
- **[Intel AX210 Wi-Fi](./enable-intel-ax210 "Activa el módulo Intel AX210 en ZimaOS")** — habilita AX210 en el sistema
- **[Módulo AX210 para ZimaBoard](./ax210-wifi-6e "Instala el módulo Intel AX210 en ZimaBoard")** — añade Wi-Fi a ZimaBoard
- **[Configuración de BIOS](./bios-configuration "Accede y ajusta la BIOS del dispositivo Zima")** — revisa los ajustes del firmware
- **[Activar Wake-on-LAN](./enable-wol-on-zimacube "Enciende ZimaCube de forma remota con Wake-on-LAN")** — arranque remoto de ZimaCube
- **[Wake-on-LAN para ZimaBoard](./wake-on-lan-setup "Configura Wake-on-LAN en ZimaBoard")** — arranque remoto de ZimaBoard

## Sistemas operativos de terceros

ZimaOS viene preinstalado, pero el hardware no está bloqueado. La comunidad también utiliza Unraid, TrueNAS, OpenWrt y otros sistemas.

- **[Ejecutar Unraid](./install-unraid "Instala Unraid en ZimaCube")** — configura Unraid en ZimaCube
- **[Ejecutar TrueNAS](./install-truenas "Instala TrueNAS basado en ZFS en ZimaCube")** — configura TrueNAS en ZimaCube
- **[Unraid en ZimaBoard](./unraid-install "Instala Unraid en un servidor ZimaBoard")** — utiliza Unraid en ZimaBoard
- **[Ejecutar OpenWrt](./openwrt-x86-install "Convierte ZimaBoard en un router con OpenWrt")** — crea un router doméstico
- **[OpenWrt mediante USB](./openwrt-usb-install "Arranca OpenWrt desde una unidad USB")** — ejecuta OpenWrt sin instalarlo internamente
- **[OpenWrt desde eMMC](./openwrt-emmc-boot "Instala OpenWrt en el eMMC interno de ZimaBoard")** — utiliza el almacenamiento interno
- **[Instalar OMV](./openmediavault-install "Instala OpenMediaVault en ZimaBoard")** — despliega un sistema orientado a NAS
- **[Configurar OMV](./openmediavault-setup "Realiza la configuración inicial de OpenMediaVault")** — primeros pasos después de la instalación
- **[Instalar Arch Linux](./arch-linux-installation-on-zimaboard-2 "Instala Arch Linux en ZimaBoard 2")** — utiliza Arch en ZimaBoard 2
- **[Configurar Ubuntu Server](./minimal-ubuntu-server-build "Crea un Ubuntu Server mínimo en ZimaBoard 2")** — instala un servidor ligero
- **[Guía de sistemas de terceros](./third-party-os-install "Instala cualquier sistema operativo en hardware Zima")** — procedimiento genérico de instalación

## Siguiente paso

Cuando conoces el hardware, resulta más fácil elegir el resto de la configuración.

- Configurar ZimaOS: **[Resumen de ZimaOS](../zimaos/ "Consulta la instalación, el almacenamiento y el uso compartido")** — instalación, almacenamiento y sistema
- Ejecutar aplicaciones: **[Resumen de la tienda de apps](../zimaos/app-store/ "Explora aplicaciones multimedia, autoalojadas y de IA")** — multimedia, autoalojamiento y agentes de IA
