---
title: Configurar Emby en ZimaOS
seo_title: "Servidor Emby en ZimaOS: instala y configura tu biblioteca multimedia"
description: "Instala Emby en ZimaOS y configura tu biblioteca multimedia. Cubre la instalación desde la App Store, el asistente de configuración, el nombrado de archivos y el mapeo de carpetas adicionales."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Emby tiene soporte nativo en el App Catalog de ZimaOS. Consulta la [página de Emby en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.emby) para conocer los detalles más recientes de la app.

Emby convierte una carpeta de archivos de vídeo en algo que se comporta como un servicio de streaming. Lee tus películas y series, obtiene pósteres y sinopsis, y reproduce en un teléfono, un navegador o una app de TV.

La instalación en sí lleva unos minutos desde la App Store de ZimaOS. La mayor parte del trabajo real es decidir dónde viven tus archivos y decirle a Emby cómo leerlos.

## Antes de instalar

Emby necesita dos ubicaciones en tus unidades. Una guarda su propia configuración y carátulas. La otra guarda tus archivos de vídeo.

Configura primero tu almacenamiento. Si tus unidades aún no están configuradas, [Elige tu configuración de almacenamiento](../storage-setup "Elige tu configuración de almacenamiento con opciones RAID adaptadas a tus necesidades") cubre las opciones RAID y de disco único y cuál conviene a una biblioteca multimedia en crecimiento.

Después comprueba dónde van los datos de las apps. Las apps escriben en la unidad del sistema por defecto, y un servidor multimedia llena esa unidad rápidamente una vez que se acumulan carátulas y metadatos. [Dónde guardan sus datos las apps](../docker-app-paths "Comprende las rutas de los contenedores Docker y dónde guardan sus datos las apps de ZimaOS") muestra cómo apuntar los datos de las apps a tu matriz de almacenamiento antes de instalar nada.

## Instalar Emby

Abre la App Store desde el panel de ZimaOS y busca Emby. Aparece un único resultado, clasificado en Media en la Zima App Store.

![Resultados de búsqueda de la App Store de ZimaOS con la tarjeta de la app Emby en la categoría Media](/images/app-store/emby-app-store-search.webp)

El paquete de ZimaOS llega con su almacenamiento ya mapeado. Las películas viven en `/DATA/Media/Movies` y las series en `/DATA/Media/TV Shows`, ambas accesibles desde la app Files, y Emby las lee como `/data/movies` y `/data/tvshows` desde dentro del contenedor.

Haz clic en Install y espera a que el contenedor se descargue. Emby aparece en tu panel cuando está listo, y al hacer clic en el icono se abre la interfaz web.

![Icono de la app Emby en el panel de ZimaOS junto a Files, Backup, ZVM e Immich](/images/app-store/emby-installed-on-dashboard.webp)

## Completa el asistente de configuración

El primer arranque te guía por un asistente breve. Ninguna de las opciones es difícil de cambiar después, así que no hace falta darles demasiadas vueltas.

**Idioma.** Elige tu idioma de visualización. Controla la interfaz de Emby, no el idioma de los metadatos de tu biblioteca, que se configura por biblioteca más adelante.

![Pantalla de bienvenida del asistente de Emby con el selector de idioma de visualización preferido](/images/app-store/emby-wizard-language.webp)

**Usuario y contraseña.** Crea tu primera cuenta. Es una cuenta de Emby almacenada en tu servidor, separada de tu inicio de sesión de ZimaOS. Todos en casa pueden tener su propia cuenta después, cada una con su propio historial de reproducción.

![Pantalla del asistente de Emby para crear la primera cuenta de usuario con usuario y contraseña](/images/app-store/emby-wizard-first-user.webp)

**Terminar.** Entre la pantalla de usuario y esta, el asistente te pide configurar una biblioteca, que las dos secciones siguientes cubren en detalle. Una vez hecho, Emby confirma la configuración, inicia su primer escaneo y el botón Finish te lleva al panel.

![Pantalla final del asistente de Emby que confirma la configuración con el botón Finish](/images/app-store/emby-wizard-finished.webp)

## Nombra tus archivos antes de añadirlos

Emby identifica tus medios leyendo los nombres de archivos y carpetas y comparándolos con bases de datos en línea. Los buenos nombres te dan pósteres y descripciones correctos en el primer escaneo. Los nombres descuidados te dan una biblioteca llena de huecos que tendrás que arreglar a mano.

Copia tus archivos en la carpeta Media de tu almacenamiento con este diseño.

```text
/DATA/Media/
  Movies/
    Arrival (2016)/
      Arrival (2016).mkv
    Dune (2021)/
      Dune (2021).mkv
  TV Shows/
    Severance/
      Season 01/
        Severance S01E01.mkv
        Severance S01E02.mkv
```

El año entre paréntesis importa para las películas. Los remakes comparten título, y el año es lo que los separa. Para las series, el patrón SxxExx es lo que Emby lee para colocar un episodio en la temporada correcta.

Mantén películas y series en carpetas de nivel superior separadas. Cada una se convierte en su propia biblioteca en Emby, con sus propias reglas de metadatos.

## Crea tu primera biblioteca

El asistente llega a una pantalla llamada Setup Media Libraries sin nada todavía. Haz clic en New Library para abrir el diálogo donde la defines.

![Pantalla de biblioteca del asistente de Emby sin bibliotecas y con el botón New Library](/images/app-store/emby-wizard-new-library.webp)

Elige Movies como tipo de contenido y deja el nombre de visualización como está. En Folders, `/data/movies` ya aparece listado y apunta a la carpeta Movies que acabas de llenar, así que no hay nada que buscar.

![Diálogo New Library de Emby con tipo de contenido, carpeta mapeada y ajustes de biblioteca](/images/app-store/emby-new-library-settings.webp)

Configura después el idioma y el país de los metadatos. Esto decide en qué idioma Emby solicita títulos y sinopsis, y es independiente del idioma de la interfaz que elegiste en el asistente.

Deja activada la monitorización en tiempo real. Emby vigila la carpeta y recoge los archivos nuevos en cuanto llegan, así que no tienes que lanzar un escaneo cada vez que añades una película.

Más abajo, activa Import collection information from metadata downloaders. Emby agrupará las películas que pertenecen a una saga, de modo que las tres de El Señor de los Anillos queden juntas en lugar de dispersas alfabéticamente.

La última decisión es dónde se guardan las carátulas. Emby ofrece tres opciones que no son excluyentes entre sí.

| Opción | Qué hace | Cuándo usarla |
|-|-|-|
| Guardar imágenes multimedia en la carpeta multimedia | Escribe pósteres y fondos junto a los archivos de vídeo | Quieres que las carátulas viajen con los archivos, u otro reproductor lee las mismas carpetas |
| Mantener una copia en caché en la carpeta de metadatos | Guarda las carátulas dentro de la carpeta de datos de Emby | Opción por defecto. Mantiene tus carpetas multimedia limpias y carga rápido |
| Predescargar imágenes de internet | Obtiene las carátulas durante el escaneo en lugar de bajo demanda | Biblioteca grande donde quieres que la navegación sea instantánea desde la primera apertura |

Haz clic en OK para guardar la biblioteca. Emby empieza a escanear y los pósteres comienzan a rellenarse en uno o dos minutos con una colección normal.

Termina el asistente y abre Movies en la barra lateral izquierda. Cada archivo que Emby ha emparejado está ahí con su póster, año y sinopsis ya adjuntos.

![Biblioteca Movies de Emby tras el primer escaneo con una película y su póster](/images/app-store/emby-first-movie-scanned.webp)

## Añade contenido de otras carpetas

Emby solo ve las carpetas mapeadas en su contenedor, que en ZimaOS son `/data/movies` y `/data/tvshows`. Todo lo demás queda invisible, ya sea una unidad USB, un segundo pool de almacenamiento o una carpeta en cualquier otro lugar del sistema. Esta es la razón más habitual por la que una biblioteca vuelve vacía.

Mapear una lleva un minuto. Vuelve al panel de ZimaOS, haz clic derecho en el icono de Emby y elige Manage.

![Menú de la app de ZimaOS abierto sobre Emby con las opciones Manage, Logs, Stop y Restart](/images/app-store/emby-app-manage-menu.webp)

El panel se abre en Volumes, donde las carpetas que Emby ya lee aparecen como montajes bind. Haz clic en el icono más junto a Mount para una fila nueva y usa el botón de carpeta del lado Host para elegir lo que quieres añadir.

![Ajustes del contenedor Emby en ZimaOS con el selector de carpeta del host abierto sobre una unidad](/images/app-store/emby-app-add-bind-mount.webp)

La columna Container de la derecha es el nombre que ve Emby. Dale algo reconocible bajo `/data`, guarda y deja que la app se reinicie.

![Nuevo montaje bind en los ajustes de la app Emby con su ruta de contenedor resaltada](/images/app-store/emby-app-container-path.webp)

De vuelta en Emby, abre Settings desde el icono de engranaje arriba a la derecha. Bajo Emby Server en la barra lateral izquierda, haz clic en Library y luego en la biblioteca Movies para editarla.

![Ajustes del servidor Emby en la página Library con la biblioteca Movies y su ruta](/images/app-store/emby-settings-library.webp)

Haz clic en Add junto a Folders. El diálogo Select Path lista las rutas que existen dentro del contenedor, así que desplázate hasta el nombre que diste al nuevo montaje y confirma. Se une a la carpeta que ya estaba, y ambas alimentan la misma biblioteca.

![Ajustes de la biblioteca Movies de Emby con el botón Add sobre la lista de carpetas mapeadas](/images/app-store/emby-library-add-folder.webp)

![Diálogo Select Path de Emby con las carpetas del contenedor incluido el nuevo montaje](/images/app-store/emby-select-path-dialog.webp)

![Ajustes de la biblioteca Movies de Emby con la carpeta por defecto y la carpeta añadida](/images/app-store/emby-library-both-folders.webp)

Una carpeta añadida de esta forma se comporta exactamente como la que venía con la app. La monitorización en tiempo real, los metadatos y las carátulas funcionan igual.

Guarda los ajustes y abre Movies desde la barra lateral. Los archivos de la carpeta que acabas de mapear aparecen junto a lo que ya estaba escaneado.

![Biblioteca Movies de Emby con decenas de películas y pósteres tras el nuevo escaneo](/images/app-store/emby-movies-library-full.webp)

## Transcodificación por hardware

La transcodificación es lo que ocurre cuando un cliente no puede reproducir el archivo tal cual — Emby lo convierte sobre la marcha. Solo con CPU, una transmisión 4K puede saturar todos los núcleos; con una GPU, la misma tarea apenas se nota.

La transcodificación por hardware es una función de Emby Premiere. Si tus clientes pueden reproducir tus archivos directamente, puede que no la necesites en absoluto.

Para activarla:

1. Abre **Settings** → **Transcoding** de Emby.
2. Activa **Enable hardware acceleration when available**.
3. Elige el decodificador que coincida con tu GPU: **Intel Quick Sync Video** para los gráficos integrados del ZimaCube, o **NVIDIA NVENC** para una tarjeta dedicada instalada en la ranura GPU.
4. Guarda, inicia una reproducción y confirma en el panel que la sesión muestra decodificación por hardware.

Para instalar una GPU dedicada, consulta [Expansión de GPU](../../hardware/gpu-expansion "Añade una tarjeta gráfica a tu ZimaCube para IA y transcodificación"). Para un ejemplo práctico de transcodificación por GPU en ZimaOS, consulta [Transcodificación con GPU en Plex](./plex-and-gpu-transcoding "Activa la transcodificación por GPU para Plex en tu dispositivo ZimaOS").

## Cuando algo no funciona

**La biblioteca está vacía tras un escaneo.** Emby solo lee las rutas mapeadas en su contenedor. Abre los ajustes de la app en ZimaOS y confirma que tu carpeta de medios está en la lista de volúmenes. Añádela si falta y ejecuta Scan Library Files desde la página de biblioteca de Emby.

**Los pósteres y títulos son incorrectos.** Casi siempre es un problema de nombres. Renombra el archivo como Título (Año) y vuelve a escanear. Para los rebeldes, haz clic en el elemento, elige Identify y busca el título correcto a mano.

**La reproducción se entrecorta o se queda en búfer.** Abre el panel mientras se reproduce el archivo. Una sesión de transcodificación significa que el cliente no puede leer el formato original, así que configura ese cliente para reproducción directa o guarda el archivo en un formato que maneje de forma nativa. Si la transcodificación es inevitable, consulta la sección Transcodificación por hardware más arriba. Una sesión de reproducción directa que sigue entrecortándose apunta a la red.

**Los archivos nuevos no aparecen.** La monitorización en tiempo real pierde archivos copiados por SMB en algunas configuraciones. Ejecuta Scan Library Files manualmente y, si ocurre siempre, programa un escaneo en Settings y Scheduled Tasks.

**Emby es inaccesible tras un reinicio.** Dale al contenedor un minuto para arrancar. Si sigue caído, comprueba el estado del contenedor en Settings y Apps de ZimaOS y confirma que el almacenamiento que guarda su configuración está montado.

## Guías relacionadas

Emby combina bien con herramientas que mantienen la biblioteca llenándose sola:

- [Configuración de Radarr](./radarr-setup "Automatiza las descargas de películas y mantén tu biblioteca multimedia al día") — vigila los estrenos y archiva los archivos en las carpetas que Emby ya lee
- [Configuración de Jellyfin](./media-server-setup-with-jellyfin "Configura el servidor multimedia Jellyfin de código abierto en tu NAS") — la alternativa de código abierto sin nivel de pago
- [Configuración de Plex](./plex-setup-guide "Configura bibliotecas y reproducción de Plex en tu servidor doméstico") — la opción con el soporte de dispositivos más amplio
- [Servidor DLNA](./dlna-server-setup "Transmite a televisores y reproductores antiguos por DLNA desde tu NAS") — para televisores antiguos anteriores a las tiendas de apps
- [Descripción general de la App Store](../app-store/ "Explora las categorías de la App Store de medios, apps autogestionadas e IA") — el resto de lo que se ejecuta en ZimaOS

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar Emby en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
