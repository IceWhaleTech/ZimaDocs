---
title: Dónde guardan sus datos las aplicaciones
seo_title: "Dónde guardan sus datos las aplicaciones de ZimaOS: rutas de Docker"
description: "Descubre dónde guardan sus datos las aplicaciones de ZimaOS. Comprende la asignación de rutas de contenedores Docker, las ubicaciones de configuración y cómo mover datos entre unidades."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Cuando instalas una aplicación desde App Store, esta guarda sus archivos en alguna ubicación de las unidades. Saber dónde se encuentran te permite incluir las carpetas correctas en las copias de seguridad, trasladar los datos a una unidad más grande y evitar sorpresas si una aplicación desaparece después de actualizarse.

Las aplicaciones de App Store se ejecutan dentro de contenedores. La aplicación dispone de su propio sistema de archivos dentro del contenedor, pero los datos importantes se asignan a carpetas reales de las unidades, fuera del contenedor. Si eliminas el contenedor, los archivos permanecen. Las funciones nativas de ZimaOS, como Files y VM, no son contenedores; esta información solo se aplica a las aplicaciones de App Store.

## Mantén los datos de las aplicaciones fuera de la unidad del sistema

Antes de instalar nada, recomendamos dirigir los datos de las aplicaciones al espacio creado en el tutorial **[Configuración del almacenamiento](./storage-setup "Elige una configuración de almacenamiento con opciones RAID adaptadas a tus necesidades")**.

La unidad del sistema suele ser pequeña. Si todas las aplicaciones escriben allí, se llena rápidamente. Las fotos sincronizadas con Immich, el contenido multimedia catalogado por Plex y los documentos indexados por Paperless se guardan en ella de forma predeterminada. Cuando se llena, las actualizaciones fallan, las aplicaciones se comportan de forma extraña y todo el dispositivo se ralentiza.

Si configuras desde el principio el almacenamiento principal como ubicación de los datos, el sistema se mantiene ordenado: la unidad del sistema gestiona el sistema operativo y el conjunto de almacenamiento guarda los datos. Si una unidad se llena más adelante, puedes mover aplicaciones concretas sin reinstalarlas.

![Página Settings Apps de ZimaOS con App data location configurado en el almacenamiento principal](/images/guides/app-data-path-config.png)

Abre **Settings > Apps**, busca **App data location** y selecciona el espacio que has creado. ZimaOS moverá los datos automáticamente.

Veamos cómo funciona con Plex, el servidor multimedia.

## Ejemplo con Plex

Al instalar Plex, ZimaOS configura dos carpetas.

![Tarjeta de Plex en ZimaOS App Store con el botón de instalación y los detalles](/images/guides/plex-app-store-card.png)

**Config.** Contiene los ajustes, la base de datos y las preferencias. Dentro del contenedor es `/config`. En las unidades se encuentra bajo App data location: `/DATA/AppData/plex/config` de forma predeterminada o en el espacio que hayas elegido. Se conserva al reinstalar y actualizar.

**Media.** Contiene las películas y series. Dentro del contenedor es `/media`. En las unidades corresponde a la carpeta Media del espacio de almacenamiento. Coloca allí los vídeos para que Plex los lea directamente.

Puedes consultar y modificar estas rutas en los ajustes de la aplicación en ZimaOS. Cada ruta de volumen tiene un botón de edición.

![Ajustes de Plex en ZimaOS con las rutas de los volúmenes config y media y sus botones de edición](/images/guides/plex-volume-path-settings.png)

## Por qué es importante

Hay dos motivos prácticos para conocer las rutas.

En primer lugar, incluye en las copias de seguridad las carpetas de las unidades, no el contenido interno del contenedor. El contenedor es reemplazable; los datos de las unidades no.

En segundo lugar, si una unidad comienza a llenarse, puedes dirigir los datos de la aplicación a otra. Mueve la carpeta y actualiza la ruta en los ajustes, sin reinstalar.

## Limpiar la caché de las aplicaciones

Con el tiempo, las aplicaciones acumulan caché y pueden ocupar espacio sin que lo notes. La página **Settings > Apps** muestra cuánto utiliza cada aplicación. Si alguna crece de forma inesperada, borra su caché desde allí. La aplicación seguirá funcionando y recuperarás el espacio.

![Página Settings Apps de ZimaOS con las aplicaciones instaladas, el uso de disco y las opciones para limpiar caché](/images/guides/app-data-cleanup.png)

## Siguiente paso

- **[Configuración del almacenamiento](./storage-setup "Elige una configuración de almacenamiento con opciones RAID adaptadas a tus necesidades")** — decide qué unidades guardarán los datos
- **[Mover datos entre unidades](./data-migration "Mueve imágenes Docker, datos de aplicaciones y carpetas entre unidades en ZimaOS")** — utiliza la herramienta integrada cuando una unidad se llene
- **[Resumen de App Store](./app-store/ "Explora las categorías de App Store para contenido multimedia, aplicaciones autoalojadas e IA")** — descubre qué aplicaciones puedes instalar
