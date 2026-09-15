---
title: Cómo ejecutar RomM en ZimaOS
seo_title: "RomM en ZimaOS: gestor de biblioteca de ROMs autogestionado"
description: Instala RomM desde la App Store de ZimaOS — organiza, explora y comparte tu colección de ROMs en una biblioteca autogestionada en tu propio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

RomM tiene soporte nativo en el App Catalog de ZimaOS. Consulta la [página de RomM en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.romm) para conocer los detalles más recientes de la app.

RomM es un gestor de biblioteca de ROMs autogestionado: escanea tu colección de juegos, obtiene carátulas y metadatos, y te ofrece una biblioteca basada en navegador que puedes explorar y compartir desde cualquier dispositivo de tu red.

## Prerrequisitos

- Una instalación de ZimaOS en funcionamiento.
- Tu biblioteca organizada según la [estructura de carpetas](https://docs.romm.app/latest/getting-started/folder-structure/ "Guía de RomM sobre la estructura de carpetas esperada para la biblioteca de ROMs") esperada.

## App Catalog

1. Encuentra RomM en el App Catalog de ZimaOS. Abre **App Store** → busca "RomM".

![Página de la app RomM en la App Store de ZimaOS con el botón de instalación y la categoría Media](/images/app-store/romm-app-store.webp)

2. **¡Ya está listo para usar!**

![Icono de la app RomM en el panel de ZimaOS tras completarse la instalación](/images/app-store/romm-installed-dashboard.webp)

## Configuración

Los siguientes pasos **NO son necesarios** — puedes empezar de inmediato con la configuración **PREDETERMINADA**.

ZimaOS admite varios métodos de configuración, incluida la edición mediante formulario y la edición secundaria en YAML.

![Ajustes del contenedor RomM con las pestañas Form y YAML y las variables de entorno](/images/app-store/romm-config-form.webp)

## Importar ROMs

Importar ROMs en ZimaOS es muy fácil — solo arrastra y suelta. Abre ZimaOS Files, navega hasta el directorio donde está configurada tu biblioteca (por defecto es `AppData/romm/library/roms`) y arrastra tus archivos para subirlos. RomM los recoge y los añade a tu biblioteca con carátulas y metadatos.

## RomM, RetroArch y Batocera

Estas tres herramientas cubren partes distintas del juego retro:

- **RomM** organiza la colección — escanea tus archivos, obtiene carátulas y metadatos, y te da una biblioteca compartible para explorar. No es el emulador en sí.
- **[RetroArch](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.retroarch "Página de la app RetroArch en la App Store de ZimaOS")** ejecuta los juegos — es el frontend de emulación que corre ROMs de decenas de sistemas.
- **[Batocera](./batocera-arcade-setup "Convierte una ZimaBoard en una consola arcade retro con Batocera")** convierte un dispositivo entero en una consola — es un sistema operativo retro dedicado en el que arranca una ZimaBoard, en lugar de una app en ZimaOS.

Una configuración habitual es mantener la colección ordenada en RomM en ZimaOS y jugar en un dispositivo con RetroArch o Batocera.

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar RomM en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
