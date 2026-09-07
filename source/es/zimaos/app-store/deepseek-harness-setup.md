---
title: Cómo desplegar DeepSeek Harness en ZimaOS
seo_title: "Desplegar DeepSeek Harness en ZimaOS: convierte tu servidor doméstico en un agente de IA físico"
description: Instala DeepSeek Harness desde la App Store de ZimaOS con un clic, conecta cualquier proveedor de modelos de IA, autoriza una carpeta del host para los datos del agente y contrólalo desde tu teléfono.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

DeepSeek Harness tiene soporte nativo en el App Catalog de ZimaOS y toda la configuración lleva solo unos minutos. Consulta la [página de DeepSeek Harness en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.dsh-harness) para conocer los detalles más recientes de la app.

DeepSeek Harness (dsh) es el agente de IA de código abierto de DeepSeek — piensa en él como un programador servicial que vive en tu servidor doméstico. Hablas con él en el navegador, describes lo que quieres y él planifica y hace el trabajo en una carpeta de tu NAS. No necesitas conocimientos de programación: el agente hace la parte técnica por ti.

Instalado en ZimaOS, funciona 24/7 en tu propio hardware. Lo controlas desde tu teléfono a través de ZimaClient y tus proyectos se quedan en tus unidades, no en la nube.

## Prerrequisitos

- Un servidor doméstico ZimaOS en funcionamiento.
- Hardware mínimo: una CPU de doble núcleo y al menos 2 GB de memoria.
- Una clave API de cualquier proveedor de modelos de IA — DeepSeek, OpenAI (GPT), Anthropic, OpenRouter o cualquier otro proveedor de terceros funcionan, y también los modelos de inferencia local en tu propio hardware (lo cubre el próximo tutorial de esta serie). Consigue una clave en un minuto en la sección Añadir un proveedor de modelos de abajo.

## App Catalog

1. Encuentra DeepSeek Harness en el App Catalog de ZimaOS. Abre **App Store** → busca "DeepSeek Harness".

![Resultados de búsqueda de App Store mostrando la tarjeta de la app DeepSeek Harness y su botón de instalación](/images/app-store/dsh-app-store.webp)

2. Haz clic en **Instalar** y espera un momento.

![Lista de apps en el panel de ZimaOS con DeepSeek Harness mostrado como instalado](/images/app-store/dsh-installed.webp)

3. **¡Ya está listo para usar!**

## Autoriza un directorio de datos

El agente necesita una carpeta en tus unidades para guardar sus workspaces. Haz esto justo después de instalarlo:

1. En la tarjeta de la app, haz clic en el menú de opciones de la esquina superior derecha para abrir los ajustes del contenedor.

2. En la sección **Volúmenes** (o asignación de rutas), añade una regla de volumen: establece la **Ruta del contenedor** en `/root/` y la **Ruta del host** en la carpeta que quieras usar para los datos del agente, por ejemplo `/media/SSD-Storage/DSH`.

![Sección Volúmenes de los ajustes de la app con la carpeta de datos del agente asignada desde la raíz del contenedor a una carpeta del host](/images/app-store/dsh-volumes.webp)

3. Reinicia el contenedor — no hace falta reiniciar el NAS. A partir de ahora, cada workspace que cree el agente caerá directamente en esa carpeta de tus unidades.

## Crea tu primer workspace

Abre DeepSeek Harness desde la tarjeta de la app — tu navegador muestra la Web UI. Crea tu primer workspace; gracias a la autorización de carpeta anterior, todo lo que crea el agente se guarda directamente en tus unidades.

![Creando el primer workspace en la Web UI de DeepSeek Harness](/images/app-store/dsh-workspace.webp)

## Añade un proveedor de modelos

Ve a **Configuración > Modelos** y añade un proveedor, luego pega tu clave API:

- **DeepSeek** — regístrate en la [plataforma DeepSeek](https://platform.deepseek.com/ "Plataforma DeepSeek para claves API y facturación") y copia tu clave
- **GPT (OpenAI)** — tu clave de OpenAI
- **OpenRouter** — una clave para muchos modelos
- Un servidor de modelos en tu propio hardware — lo cubre el próximo tutorial de esta serie

![Página de configuración de la Web UI de DeepSeek Harness con un proveedor de modelos añadido y su clave API guardada](/images/app-store/dsh-models.webp)

## Tu primera tarea

Ahora dale al agente su primer trabajo real. Describe la app que quieres con palabras sencillas — el ejemplo de abajo pide un monitor de recursos que muestre en tiempo real la CPU, la memoria, el disco y la red de tu host ZimaOS, ejecutándose como una app en contenedor.

![Una sesión en la Web UI de DeepSeek Harness con la tarea del monitor de recursos y el plan del agente](/images/app-store/dsh-first-task.webp)

Míralo trabajar: la sesión muestra el plan, el código y el resultado — sin que escribas una sola línea.

![Grabación de pantalla del agente planificando y escribiendo la app del monitor de recursos en el workspace](/images/app-store/dsh-work-demo.webp)

Tras unas pocas rondas de conversación, el agente convierte la idea en una app real — sin necesidad de conocimientos de programación por tu parte. El resultado es un gestor de recursos a nivel de sistema que funciona todo el día, vigilando la salud del disco, la seguridad de la red y el ciclo de vida de los contenedores en tu ZimaOS.

![Grabación de pantalla del gestor de recursos terminado mostrando métricas en vivo de disco, red y contenedores](/images/app-store/dsh-resource-manager.webp)

## Accede a DeepSeek Harness desde el móvil

Accede a DeepSeek Harness mediante la app móvil ZimaClient — conexión P2P directa con tu servidor doméstico, sin relay en la nube y sin configuración de VPN. Funciona desde casa o fuera.

| ![App móvil ZimaClient mostrando la lista de apps de la App Store en un teléfono](/images/app-store/dsh-phone-apps.png) | ![Web UI de DeepSeek Harness abierta a través de ZimaClient en un teléfono mostrando una sesión activa](/images/app-store/dsh-phone-ui.png) |
| - | - |

Con la conexión P2P puedes consultar el progreso de tu agente y todos tus servicios alojados en cualquier momento y lugar — la misma Web UI, directamente en tu teléfono.

## Tu servidor doméstico ahora es un agente

Esa es toda la configuración. Tu servidor doméstico ya no es solo una caja de almacenamiento — es un agente físico que vive en tu propio hardware:

- **Control desde tu teléfono** — abre la Web UI a través de ZimaClient desde cualquier lugar y revisa sesiones, resultados o envía una tarea nueva. Tu agente está a un toque, en casa o fuera.
- **Vibe coding sin escribir código** — describe una función con palabras sencillas y deja que el agente la planifique y escriba en un workspace que vive en tus unidades, no en la nube.
- **Automatización del hogar** — dale cualquier tarea en torno a tu servidor doméstico: ordenar y organizar archivos, generar informes a partir de tus datos, automatizar trabajos repetitivos. Se ejecuta en el propio NAS, así que sigue trabajando a todas horas.
- **Diagnostica una app rota** — cuando Jellyfin deja de transmitir o Home Assistant se apaga, pega los síntomas y deja que el agente lea los registros y la configuración directamente en el NAS para encontrar y arreglar la causa. Se acabó adivinar dentro de una caja negra.
- **Mantén tu pila de apps** — el agente lee tus archivos Docker Compose y te acompaña en actualizaciones, cambios de configuración y migraciones, para que tu pila autoalojada siga siendo mantenible durante años — no solo hasta la próxima actualización.

## Notas de uso

- **Dale su propio hardware.** El agente funciona mejor como agente de sandbox físico en un dispositivo dedicado — mantenlo lejos de tu NAS principal con todos tus datos, para que los experimentos en el sandbox nunca toquen lo que importa.
- **Dos niveles de autorización.** Una autorización de carpeta da al agente acceso a datos en ZimaOS. Autorizar el socket de Docker es un segundo nivel mucho más alto — da al agente gestión de contenedores a nivel de sistema, cerca del control de nivel SSH. Concede cada nivel deliberadamente, y solo concede el nivel de socket cuando una tarea lo necesite de verdad.

![Página de ajustes de la app mostrando la autorización del volumen del socket de Docker para el contenedor de DeepSeek Harness](/images/app-store/dsh-docker-socket.webp)
- **Establece el permiso de sandbox en acceso total.** Dentro de dsh, establece el permiso de ejecución del sandbox en acceso total para que el agente pueda ejecutar tareas sin pedir aprobación en cada paso.

![Ajuste del permiso de sandbox en la Web UI de DeepSeek Harness establecido en acceso total](/images/app-store/dsh-sandbox-permission.webp)
- **Todo lo que escribe el agente es visible en Files.** Gracias a la asignación del workspace, todo el código fuente que escribe el agente cae en la carpeta autorizada — navega y revísalo en ZimaOS Files en cualquier momento.

## Próximos pasos

- **Inferencia local:** apunta el proveedor a un servidor de modelos en tu propio hardware y ejecuta el agente totalmente sin conexión — el próximo tutorial de esta serie.
- **Automatizar servicios con dsh:** crea y ejecuta servicios de automatización en ZimaOS — un tutorial posterior de esta serie.

## Enlaces de referencia

Para más detalles, consulta la documentación oficial de DeepSeek Harness:

- Instalación y todas las rutas de despliegue – [guía de instalación](https://github.com/sdkwork-ai/deepseek-harness-desktop/blob/master/INSTALL.md "Guía oficial de instalación de DeepSeek Harness")
- Uso de la Web UI – [guía de la Web UI](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md "Guía oficial de la Web UI de DeepSeek Harness")
- Proveedores de modelos – [guía de proveedores](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md "Guía oficial de proveedores de modelos de DeepSeek Harness")
- Código fuente – [repositorio de GitHub](https://github.com/deepseek-ai/deepseek-harness "Repositorio oficial de DeepSeek Harness en GitHub")

Lecturas adicionales en el Tech AI Hub de ZimaSpace:

- [10 Best DeepSeek Harness Plugins 2026](https://shop.zimaspace.com/blogs/tech-ai-hub/10-best-deepseek-harness-plugins-2026 "Guía del Tech AI Hub de ZimaSpace sobre los mejores plugins de DeepSeek Harness")
- [DE Minimal and Creator Explained](https://shop.zimaspace.com/blogs/tech-ai-hub/de-minimal-and-creator-explained "Explicación del Tech AI Hub de ZimaSpace sobre DE Minimal y Creator")
