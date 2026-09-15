---
title: Descargar torrents con Transmission
seo_title: "Transmission en ZimaOS: descarga torrents en tu NAS"
description: "Instala Transmission desde la App Store de ZimaOS, añade un torrent o enlace magnet y guarda las descargas en tu NAS."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Transmission es un cliente BitTorrent con interfaz web. En ZimaOS, guarda las descargas directamente en el almacenamiento del NAS y permite administrarlas desde cualquier navegador de la red local.

> Descarga solo contenido que tengas derecho legal a usar o compartir.

## Instalar Transmission

1. Abre el panel de ZimaOS y selecciona **App Store**.
2. Busca **Transmission**, selecciona la aplicación y haz clic en **Install**.
3. Espera a que la aplicación esté en ejecución y abre Transmission desde el panel de ZimaOS.
4. Inicia sesión con las credenciales que aparecen en la pantalla de instalación. Los valores predeterminados actuales de la App Store son:

| Usuario | Contraseña |
| --- | --- |
| `casaos` | `casaos` |

El paquete de la App Store expone la interfaz web en el puerto `9091` y asigna la carpeta `/DATA/Downloads` de ZimaOS a `/downloads` dentro de Transmission. Para abrir la aplicación de forma manual, usa `http://IP-DE-ZIMAOS:9091/transmission/web/`.

![Interfaz web de Transmission con la lista de transferencias vacía](/images/app-store/transmission-dashboard.png)

Antes de permitir el acceso desde fuera de tu red local de confianza, actualiza las credenciales: haz clic en los tres puntos de la esquina superior derecha del icono de la app Transmission, abre **Settings**, cambia los valores `USER` y `PASS`, guarda y reinicia la aplicación. Usa HTTPS si publicas la interfaz mediante un proxy inverso.

## Añadir un torrent o enlace magnet

1. Haz clic en **Open** en la esquina superior izquierda.
2. Selecciona un archivo `.torrent` o pega una URL HTTP(S) de torrent o un enlace magnet en **Or enter a URL**.
3. Define **Destination folder** como `/downloads/complete` o elige otra carpeta dentro de `/downloads`. Usa la ruta del contenedor que muestra Transmission, no la ruta del host de ZimaOS.
4. Mantén seleccionada la opción **Start when added** para iniciar la descarga de inmediato y haz clic en **Add**.

![Cuadro Add Torrents de Transmission con la carpeta de descarga predeterminada](/images/app-store/transmission-add-torrent.png)

### Probar un torrent oficial de Debian

Debian publica descargas de prueba legales en su [página oficial de imágenes BitTorrent](https://cdimage.debian.org/debian-cd/current/amd64/bt-cd/). Abre la página, copia el enlace del archivo `amd64-netinst.iso.torrent` actual, pégalo en **Or enter a URL** y haz clic en **Add**.

![Imagen netinst de Debian descargándose en Transmission](/images/app-store/transmission-debian-download.png)

La fila de la transferencia muestra el progreso, el tiempo restante, los pares conectados y la velocidad actual. Con la asignación predeterminada, los archivos terminados aparecen en **Files > Downloads > complete** en ZimaOS.

## Administrar descargas

- Selecciona una transferencia y usa **Start** o **Stop** para controlarla.
- Usa **Inspector** para consultar archivos, pares, trackers y límites de cada transferencia.
- Usa **Delete** para quitar una transferencia. Confirma si también quieres borrar los datos descargados.
- Usa los filtros situados encima de la lista para mostrar transferencias activas, en descarga, compartiendo, pausadas, terminadas o con errores.

## Solución de problemas

- **El navegador devuelve `401 Unauthorized`:** Comprueba los valores `USER` y `PASS` en los ajustes de Transmission y reinicia la aplicación.
- **La descarga no encuentra pares o sigue lenta:** Confirma que el torrent esté activo y permite el puerto `51413` en el firewall o router cuando sea necesario.
- **Transmission no puede escribir el archivo:** Mantén el destino dentro de `/downloads` y revisa los permisos de almacenamiento de la aplicación en ZimaOS.
- **No encuentras un archivo terminado:** Comprueba el destino que muestra Transmission. La carpeta predeterminada `/downloads/complete` corresponde a **Files > Downloads > complete** en ZimaOS.
