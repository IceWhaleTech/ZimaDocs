---
title: Cómo ejecutar Karakeep en ZimaOS
seo_title: "Karakeep en ZimaOS: gestor de marcadores autogestionado con etiquetado por IA"
description: Instala Karakeep desde la App Store de ZimaOS — guarda todo en una biblioteca de marcadores autogestionada con etiquetado y resumen automáticos por IA en tu propio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Karakeep tiene soporte nativo en el App Catalog de ZimaOS. Consulta la [página de Karakeep en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.karakeep) para conocer los detalles más recientes de la app.

**Karakeep** (anteriormente Hoarder) es una app de código abierto para "guardar todo" que usa IA para etiquetar y resumir automáticamente los enlaces, notas e imágenes que le lanzas. Diseñada con la autogestión como prioridad, mantiene tu biblioteca de marcadores en tu propio hardware en lugar de en la nube del fabricante del navegador.

## Prerrequisitos

- Una instalación de ZimaOS en funcionamiento.
- *(Opcional)* Una clave de API compatible con OpenAI. Si quieres usar otro proveedor de IA (por ejemplo, un modelo local para inferencia privada), consulta la guía de [diferentes proveedores de IA](https://docs.karakeep.app/configuration/different-ai-providers "Guía de Karakeep para configurar distintos proveedores de IA").

## App Catalog

1. Encuentra Karakeep en el App Catalog de ZimaOS. Abre **App Store** → busca "Karakeep" → **Install**.

![Página de la app Karakeep en la App Store de ZimaOS con el botón de instalación](/images/app-store/karakeep-app-store.webp)

2. **¡Ya está listo para usar!**

![Icono de Karakeep con la insignia New en el panel de ZimaOS tras la instalación](/images/app-store/karakeep-installed-dashboard.webp)

Abre Karakeep y podrás empezar a guardar enlaces de inmediato — pega un enlace, escribe una nota o suelta una imagen en el cuadro **NEW ITEM**.

![Interfaz de Karakeep con el cuadro New Item para pegar enlaces, notas o imágenes](/images/app-store/karakeep-ui-new-item.webp)

![Vista de inicio de Karakeep con las tarjetas Get Started y Zima junto al cuadro New Item](/images/app-store/karakeep-ui-content.webp)

## Opcional: Configura tu dominio (NEXTAUTH_URL)

Por defecto, Karakeep asume que se ejecuta en `http://localhost:xxxx`. Si lo abres desde otro dispositivo — o a través de un dominio — los enlaces dentro de la app (incluido el botón de **cerrar sesión**) seguirán apuntando a `localhost` y fallarán.

Para solucionarlo, establece la variable de entorno `NEXTAUTH_URL` con la dirección exacta que usas para abrir Karakeep (la dirección IP con la que inicias sesión en ZimaOS):

![Variables de entorno de Karakeep con NEXTAUTH_URL configurada con la dirección del dispositivo](/images/app-store/karakeep-nexauth-env.webp)

Luego **guarda** y reinicia la app.

## Opcional: Activa el etiquetado automático con IA

Karakeep puede etiquetar y resumir automáticamente tus enlaces guardados usando IA. Abre **Manager** e introduce tu clave de API de OpenAI en **Advanced**.

![Ajustes de Karakeep con la sección Advanced (Show more) para la clave de API de IA](/images/app-store/karakeep-advanced-config.webp)

![Variables de Karakeep con la entrada OPENAI_API_KEY rellenada y resaltada](/images/app-store/karakeep-openai-api-key.webp)

**Ahora** tu Karakeep puede gestionar el etiquetado y el resumen automáticos — solo tienes que pegar un enlace, escribir una nota o subir una imagen.

![Página de resumen de Karakeep con el resumen y las etiquetas generados automáticamente en un enlace guardado](/images/app-store/karakeep-auto-tag-result.webp)

### Usa un LLM local en su lugar

Enviar tus enlaces a una API en la nube es opcional. Karakeep admite proveedores compatibles con OpenAI y Ollama, así que puedes mantener el etiquetado y el resumen completamente en tu propio dispositivo.

Configura estas variables en el contenedor de Karakeep en lugar de una clave de API en la nube:

```text
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://<your-zimaos-ip>:11434/v1
INFERENCE_TEXT_MODEL=gemma3
INFERENCE_IMAGE_MODEL=llava
```

Dos cosas que debes hacer bien:

- La dirección debe ser accesible desde dentro del contenedor de Karakeep — usa tu IP de ZimaOS, no `localhost`.
- Descarga primero los modelos en el servidor Ollama, o el etiquetado fallará cuando llegue el primer enlace.

Para ejecutar el propio servidor LLM en ZimaOS, consulta [Inferencia de LLM local](../local-llm-inference "Despliega un servidor de IA privado en tu NAS ZimaOS en cinco pasos"). Para otros proveedores y ajustes avanzados de modelos, consulta la guía oficial de [diferentes proveedores de IA](https://docs.karakeep.app/configuration/different-ai-providers "Guía de Karakeep para configurar distintos proveedores de IA").

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar Karakeep en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
