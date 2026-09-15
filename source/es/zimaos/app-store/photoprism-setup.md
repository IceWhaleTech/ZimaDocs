---
title: Cómo ejecutar PhotoPrism en ZimaOS
seo_title: "PhotoPrism en ZimaOS: galería de fotos autogestionada con IA"
description: Instala PhotoPrism desde la App Store de ZimaOS — una galería de fotos privada con IA, etiquetado automático, búsqueda inteligente y álbumes en tu propio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

PhotoPrism tiene soporte nativo en el App Catalog de ZimaOS. Consulta la [página de PhotoPrism en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.photoprism) para conocer los detalles más recientes de la app.

PhotoPrism es una galería de fotos autogestionada impulsada por IA: mantiene tus fotos privadas en tu propio dispositivo ZimaOS a la vez que te ofrece el etiquetado automático, la búsqueda inteligente y los álbumes que esperarías de un servicio en la nube. Sin suscripción, sin límites de almacenamiento y sin que nadie escanee tus recuerdos.

## ¿Por qué PhotoPrism?

- **Tus fotos siguen siendo tuyas** — todo vive en tu propia unidad ZimaOS, no en la nube de otra persona.
- **La IA organiza por ti** — caras, lugares y objetos se etiquetan automáticamente, así encuentras cualquier foto buscando en lugar de desplazándote.
- **Gratis e ilimitado** — sin suscripción, la capacidad solo está limitada por tu disco y tus originales nunca se comprimen.
- **Sin dependencia** — tus fotos son archivos normales en `/DATA/Gallery`, así que puedes hacer copias de seguridad o migrarlas en cualquier momento.

## Prerrequisitos

- Una instalación de ZimaOS en funcionamiento.
- Un puerto libre para la interfaz web (por defecto: **2342**).

## App Catalog

1. Encuentra PhotoPrism en el App Catalog de ZimaOS. Abre **App Store** → busca "PhotoPrism" → haz clic en **Install**.

![Página de la app PhotoPrism en la App Store de ZimaOS con instalación e instalación personalizada](/images/app-store/photoprism-app-store.webp)

2. **¡Ya está listo para usar!**

![Icono de PhotoPrism en el panel de ZimaOS tras completarse la instalación](/images/app-store/photoprism-installed-dashboard.webp)

## Configuración

Los siguientes pasos **NO son necesarios** — puedes empezar de inmediato con la configuración **PREDETERMINADA**.

ZimaOS admite varios métodos de configuración, incluida la edición mediante formulario y la edición secundaria en YAML. Los ajustes principales que quizás quieras modificar:

- **Volúmenes** — dónde se almacenan tus fotos y los datos de PhotoPrism. Tu biblioteca de fotos vive en `/DATA/Gallery` en ZimaOS (montada en `/photoprism/originals`), y la base de datos, el índice, la caché y las miniaturas se almacenan en `/DATA/AppData/photoprism/storage` (montado en `/photoprism/storage`). Mantén la carpeta de almacenamiento fuera de la carpeta de originales.
- **Puerto** — el puerto externo para acceder a la interfaz web (por defecto: 2342).

![Ajustes del contenedor PhotoPrism con el puerto 2342 y los mapeos de volúmenes](/images/app-store/photoprism-config-form.webp)

## Configuración inicial

Después de la instalación, haz clic en el icono de PhotoPrism. Aparecerá una ventana emergente con la cuenta y la contraseña por defecto — usa el nombre de usuario y la contraseña que se muestran allí para iniciar sesión.

![Ventana de consejos de PhotoPrism con el usuario y la contraseña de administrador por defecto](/images/app-store/photoprism-default-credentials.webp)

Una vez dentro, ya puedes empezar. Para cambiar más adelante la cuenta o la contraseña por defecto, abre **Settings → Account**.

![Ajustes de cuenta de PhotoPrism con opciones de cambio de contraseña y doble factor](/images/app-store/photoprism-account-settings.webp)

## Usar PhotoPrism

1. Añade tus fotos — coloca tus imágenes en `/DATA/Gallery` (o súbelas desde la interfaz web) y luego inicia la indexación desde la pestaña **Library**. PhotoPrism las organiza y etiqueta automáticamente con IA.

![Pestaña Library de PhotoPrism con opciones de reescaneo completo y limpieza antes de indexar](/images/app-store/photoprism-library-index.webp)

2. Explora — abre la subpágina **Calendar** para explorar fotos por fecha, o usa **Search** para encontrar fotos por palabra clave, ubicación u objetos detectados por IA.
3. Organiza y comparte — crea álbumes en la subpágina **Albums** para organizar tus fotos y compartirlas con familiares o amigos.

## Prueba esto a continuación

Cuando tus fotos estén indexadas, abre PhotoPrism y prueba lo siguiente — sin etiquetado manual:

- **Busca algo natural** — escribe "cat", "beach" o "birthday" y PhotoPrism encuentra todas las coincidencias en segundos.
- **Abre People** — ve tus fotos agrupadas automáticamente por cara.
- **Abre Places** — ve tus fotos fijadas en un mapa del mundo.
- **Abre Moments** — PhotoPrism agrupa automáticamente tus fotos en eventos y viajes.

## Guías relacionadas

- ¿Quieres copia de seguridad automática del teléfono además de una galería? Consulta [Copia de seguridad de fotos con Immich](./immich-photo-backup "Haz copias de seguridad automáticas de las fotos del teléfono con Immich en ZimaOS") y [Sincronizar fotos con Immich](./sync-photos-with-immich "Mantén las fotos del teléfono sincronizadas con un servidor Immich en ZimaOS").

¿No sabes cuál elegir? Elige Immich cuando el objetivo principal sea la copia de seguridad automática del teléfono; elige PhotoPrism cuando quieras una biblioteca con IA sobre una carpeta de archivos que gestionas tú mismo.

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar PhotoPrism en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
