---
title: Cómo desplegar Blinko en ZimaOS
seo_title: "Ejecutar Blinko en ZimaOS: notas con IA autoalojadas en tu servidor doméstico"
description: Instala Blinko desde la App Store de ZimaOS en minutos — captura pensamientos fugaces en tarjetas, búscalos con IA en lenguaje natural y guarda cada nota en tus propias unidades.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Blinko tiene soporte nativo en el App Catalog de ZimaOS y puede instalarse en solo 3 minutos — ZimaOS es patrocinador oficial del proyecto Blinko, y su README incluye un botón "Run on ZimaOS". Consulta la [página de Blinko en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.blinko) para conocer los detalles más recientes de la app.

Blinko es una app de notas en tarjetas, de código abierto y autoalojada. Conoces el problema que resuelve: las ideas llegan en momentos aleatorios — una reunión, un trayecto, una ducha — y para cuando abres una app de notas pesada, el pensamiento ya se ha ido. Blinko captura esos pensamientos fugaces en el instante en que aparecen, como pequeñas tarjetas. Y como vive en tu servidor doméstico, un asistente de IA puede buscar en tus notas por significado: pregunta "¿qué anoté sobre el proyecto la semana pasada?" y encuentra la respuesta en todo lo que has escrito.

La comunidad lo describe como "10 veces mejor que una nota del teléfono": un Obsidian más ligero con recuperación por IA y una bandeja de entrada de Notion autoalojada. Todas tus notas se quedan en tus unidades, no en la nube de otros.

## Prerrequisitos

- Un servidor doméstico ZimaOS en funcionamiento.

## App Catalog

1. Encuentra Blinko en el App Catalog de ZimaOS. Abre **App Store** → busca "Blinko".

![Resultados de búsqueda de App Store mostrando la tarjeta de la app Blinko y su botón de instalación](/images/app-store/blinko-app-store.png)

2. Haz clic en **Instalar** y espera un momento.

![Lista de apps en el panel de ZimaOS con Blinko mostrado como instalado](/images/app-store/blinko-installed.png)

3. **¡Ya está listo para usar!**

La app se ejecuta en el puerto 1111 con su propia base de datos, y ZimaOS guarda todas tus notas en la ubicación de datos de apps de tus unidades — sobreviven a actualizaciones y reinstalaciones.

## Primer arranque

Abre Blinko desde la tarjeta de la app. En la primera visita, registra tu cuenta — la primera cuenta se convierte en administradora.

![Pantalla de primera ejecución de Blinko para registrar la cuenta de administrador](/images/app-store/blinko-first-run.png)

Una vez dentro, abre los ajustes y cambia el idioma de la interfaz si quieres (hay chino simplificado e inglés), y empieza a escribir. Crea una tarjeta, ponle una etiqueta y guárdala — ese es todo el ciclo.

![Editor de notas de Blinko con una tarjeta nueva en proceso](/images/app-store/blinko-note.png)

## Activa las funciones de IA (opcional)

El siguiente paso **NO es necesario** — sin IA, Blinko ya es una app de notas completa. Pero las notas de captura rápida tienen un destino conocido: escribes cosas y luego no las encuentras. La IA arregla exactamente eso — la búsqueda semántica encuentra cualquier tarjeta por significado meses después, el etiquetado automático mantiene todo organizado sin esfuerzo, y la expansión posterior convierte cinco palabras apuntadas en una nota completa guardada como comentario. Eso convierte una pila de tarjetas en un segundo cerebro consultable. Para activarlo:

1. Abre **Configuración** y busca la sección del proveedor de IA.

2. Elige un proveedor: OpenAI, Anthropic, Google AI, Grok o un servidor local de Ollama en tu hardware — el que ya uses.

3. Rellena las cuatro capacidades del modelo: chat, embeddings, imagen y voz. Algunos proveedores cubren las cuatro con una clave; con otros, deja vacía la capacidad que no necesites.

4. Haz clic en **Probar conexión**. Cuando pase, aparecerá un diálogo de IA en la esquina de la interfaz y la búsqueda en lenguaje natural empezará a funcionar.

![Ajustes del proveedor de IA en Blinko con la prueba de conexión superada](/images/app-store/blinko-ai-settings.png)

> **Consejo de privacidad:** si quieres ayuda de la IA sin enviar tus notas a ningún sitio, apunta Blinko a un servidor local de Ollama — todo se queda en tu servidor doméstico.

## Consejos de la comunidad

Formas en las que la comunidad de Blinko usa realmente la app, recogidas de historias de usuarios:

- **Tres tipos de tarjeta, libremente convertibles.** Escribe un pensamiento fugaz como tarjeta rápida, un texto largo como nota y las tareas como lista de pendientes. Cualquier tarjeta puede convertirse en otro tipo después — mucho más fácil que mover archivos entre carpetas.
- **Deja que la IA comente, no que reescriba.** Cuando la IA expande o pule una tarjeta, el texto generado se guarda como comentario, sin mezclarse con tus palabras originales. Tu voz sigue siendo tuya, y puedes revisar la sugerencia después.
- **Revisión diaria.** Usa la revisión diaria para volver a las tarjetas que capturaste hoy — la comunidad la trata como el puente entre "captura rápida" y "notas reales".
- **Tus datos son tuyos.** Cada tarjeta vive como texto plano en la carpeta de datos de la app en tus unidades. Haz una copia de seguridad de esa carpeta y toda tu biblioteca de notas está a salvo.

## Enlaces de referencia

Para más detalles, consulta la documentación oficial de Blinko:

- Introducción y funciones – [https://docs.blinko.space/en/introduction](https://docs.blinko.space/en/introduction "Documentación oficial de introducción y funciones de Blinko")
- Instalación y actualizaciones – [https://docs.blinko.space/en/install](https://docs.blinko.space/en/install "Guía oficial de instalación y actualización de Blinko")
- Cómo usar la IA – [https://docs.blinko.space/en/how-to-use/ai/ai-setting](https://docs.blinko.space/en/how-to-use/ai/ai-setting "Guía oficial de configuración de IA de Blinko")
- Código fuente – [repositorio de GitHub](https://github.com/blinkospace/blinko "Repositorio oficial de Blinko en GitHub")
