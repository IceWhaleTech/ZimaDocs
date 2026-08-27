---
title: Primeros pasos con ZimaBlade
description: "Guía de hardware de ZimaBlade. Compara los modelos 3760 y 7700, descubre qué necesitas para empezar y consulta instrucciones de configuración detalladas."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Tengo un cariño especial por ZimaBlade. Es el dispositivo más pequeño que fabricamos y cuesta aproximadamente lo mismo que una buena cena fuera de casa. Aun así, ejecuta la misma plataforma de software que ZimaCube: CasaOS, Docker y todo lo demás.

Fabricamos dos versiones. La 3760 es una placa de doble núcleo capaz de ejecutar Pi-hole, una VPN y un NAS ligero sin esfuerzo. La 7700 incorpora un procesador de cuatro núcleos que ofrece margen suficiente para utilizar Plex, varios contenedores Docker y Home Assistant al mismo tiempo.

| | ZimaBlade 3760 | ZimaBlade 7700 |
|---|---|---|
| **CPU** | Intel Celeron N3350 (doble núcleo) | Intel Celeron de cuatro núcleos (N3450 / J3455 / E3950) |
| **RAM** | 1 × SODIMM DDR3L, hasta 16 GB | 1 × SODIMM DDR3L, hasta 16 GB |
| **Almacenamiento** | 32 GB eMMC integrados | 32 GB eMMC integrados |
| **Red** | 1 × Gigabit Ethernet | 1 × Gigabit Ethernet |
| **USB** | 1 × USB-C, 1 × USB 3.0, 2 × USB 2.0 | 1 × USB-C, 1 × USB 3.0, 2 × USB 2.0 |
| **SATA** | 2 × SATA 3.0 | 2 × SATA 3.0 |
| **PCIe** | 1 × PCIe 2.0 x4 | 1 × PCIe 2.0 x4 |
| **Vídeo** | Mini DisplayPort 1.2 (4K@60Hz) | Mini DisplayPort 1.2 (4K@60Hz) |
| **Uso recomendado** | Pi-hole, VPN, NAS ligero | Plex, Docker, Home Assistant y usos más exigentes |

Ambos modelos utilizan un procesador x86, por lo que las imágenes de Docker funcionan directamente y no tendrás que preocuparte por la compatibilidad con ARM.

## Configuración

Si acabas de recibir tu ZimaBlade, empieza por el tutorial detallado **[Encendido](./power-on-zimablade "Enciende ZimaBlade y completa la configuración inicial")**. Explica cómo instalar el módulo de memoria, conectar unidades, arrancar y configurar CasaOS, con fotografías de cada paso.

ZimaBlade se entrega con CasaOS preinstalado. Si prefieres ejecutar ZimaOS, consulta la guía **[Instalar ZimaOS](../zimaos/how-to-install-zimaos "Guía paso a paso para instalar ZimaOS desde cero en tu dispositivo")**; el proceso es el mismo que para cualquier dispositivo Zima.

## Qué puedes crear

A pesar de su tamaño, ZimaBlade ejecuta las mismas aplicaciones que ZimaBoard y ZimaCube. Consulta el **[Resumen de App Store](../zimaos/app-store/ "Explora las categorías de App Store para contenido multimedia, aplicaciones autoalojadas e IA")** para descubrir ideas de servidores multimedia, aplicaciones autoalojadas y agentes de IA.

## Sistemas operativos de terceros

Al utilizar una arquitectura x86, puedes instalar otros sistemas operativos, como Ubuntu, Debian u OpenWrt. La **[Guía de sistemas operativos de terceros](./third-party-os-install "Instala cualquier sistema operativo en el hardware Zima con esta guía")** explica el proceso general.

## Si algo sale mal

La placa no tiene LED de encendido, por lo que no debes darla por averiada si la pantalla permanece en negro. Espera medio minuto y busca un dispositivo nuevo en el router; normalmente está funcionando, aunque no muestre ninguna señal visible.

La falta de imagen suele deberse a un adaptador Mini DisplayPort poco compatible. Los cables directos de MiniDP a DP suelen funcionar mejor que los adaptadores HDMI. Si las unidades no aparecen, vuelve a conectar los cables SATA; casi siempre resuelve el problema. Si no encuentras la dirección IP, la lista de clientes DHCP del router es la forma más rápida de localizarla.
