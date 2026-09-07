---
title: Cómo desplegar Komga en ZimaOS
seo_title: "Ejecutar Komga en ZimaOS: servidor de cómics y libros electrónicos para tu servidor doméstico"
description: Instala Komga desde la App Store de ZimaOS en minutos — sube cómics y libros electrónicos, autoriza una carpeta de biblioteca y léelos desde cualquier dispositivo, incluido tu teléfono.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Komga tiene soporte nativo en el App Catalog de ZimaOS y puede instalarse en solo 3 minutos. Consulta la [página de Komga en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.komga) para conocer los detalles más recientes de la app.

Komga es un servidor multimedia gratuito y de código abierto para cómics, manga y libros electrónicos. Organiza tus archivos PDF y EPUB en bibliotecas con metadatos automáticos, ofrece un lector web limpio en cualquier navegador y admite OPDS para apps de lectura de terceros. Instalado en ZimaOS, tu biblioteca se queda en tus propias unidades y está disponible desde cualquier dispositivo — incluido tu teléfono a través de ZimaClient.

## Prerrequisitos

- Un servidor doméstico ZimaOS en funcionamiento.
- Tus archivos PDF o EPUB almacenados en una carpeta local de tu servidor doméstico ZimaOS.

## App Catalog

1. Encuentra Komga en el App Catalog de ZimaOS. Abre **App Store** → busca "Komga".

![Resultados de búsqueda de App Store mostrando la tarjeta de la app Komga y su botón de instalación](/images/app-store/komga-app-store.png)

2. **¡Ya está listo para usar!**

![Lista de apps en el panel de ZimaOS con Komga mostrado como instalado](/images/app-store/komga-installed.png)

## Sube archivos mediante ZimaOS Files

Usa ZimaOS Files para subir o copiar tus archivos PDF o EPUB directamente. Abre ZimaOS Files, crea una carpeta nueva y arrastra y suelta tus archivos PDF o EPUB para subirlos directamente al directorio.

![Ventana de ZimaOS Files con una carpeta komga-library creada para subir cómics y libros electrónicos](/images/app-store/komga-files.png)

## Autoriza a Komga para cargar datos

Los siguientes pasos **NO son necesarios** — puedes empezar de inmediato con la configuración PREDETERMINADA.

Si quieres personalizar todos los ajustes del contenedor, puedes configurarlos mediante las opciones de la esquina superior derecha de la app.

![Página de la app Komga en ZimaOS con el menú de opciones de la esquina superior derecha para los ajustes del contenedor](/images/app-store/komga-settings.png)

ZimaOS admite varios métodos de configuración, incluida la edición basada en formularios y la edición secundaria en YAML.

En el formulario de configuración de Komga en ZimaOS, navega a la sección **Volúmenes** (o asignación de rutas) y añade una nueva regla de volumen: establece la **Ruta del contenedor** en `/data` (el directorio de medios predeterminado dentro de Komga) y la **Ruta del host** en la carpeta local de tu dispositivo ZimaOS donde están almacenados tus cómics. Mira la captura de abajo para ver un ejemplo rellenado.

![Sección Volúmenes de los ajustes de la app Komga con la ruta de medios del contenedor asignada a una carpeta del host](/images/app-store/komga-volumes.png)

## Añade una biblioteca en Komga

1. Primera visita: crea una cuenta de administrador.

![Pantalla de primera ejecución de Komga para crear una cuenta de administrador con correo y contraseña](/images/app-store/komga-admin.png)

2. Después de iniciar sesión, haz clic en el botón "+" junto a Libraries en la barra lateral.

![Diálogo Añadir biblioteca en Komga con un nombre y la ruta de la carpeta raíz rellenados](/images/app-store/komga-library.png)

3. Establece el intervalo de escaneo de archivos.

![Ajustes del escáner en el diálogo Añadir biblioteca de Komga con el intervalo de escaneo en cada hora](/images/app-store/komga-scan.png)

> Mantén todas las demás pestañas en sus ajustes predeterminados y continúa.

4. Haz clic en "Add" para terminar.

Komga escaneará e importará automáticamente todos los cómics, revistas o libros electrónicos almacenados en esa carpeta.

![Página de libros de Komga tras añadir una biblioteca mostrando cómics y series añadidos recientemente](/images/app-store/komga-books.png)

## Accede a Komga desde el móvil

Accede a Komga mediante la app móvil ZimaClient — conexión P2P directa con tu servidor doméstico, sin relay en la nube y sin configuración de VPN. Funciona desde casa o fuera.

| ![App móvil ZimaClient con la lista de apps y el icono de Komga en un teléfono](/images/app-store/komga-phone-apps.png) | ![Biblioteca de Komga abierta a través de ZimaClient en un teléfono mostrando una página de series de cómics](/images/app-store/komga-phone-library.png) | ![Página de detalle de un libro electrónico en Komga en un teléfono con botones de leer y descargar](/images/app-store/komga-phone-reader.png) |
| - | - | - |

## Enlaces de referencia

Para más detalles, consulta la documentación oficial de Komga:

- Ajustes avanzados de bibliotecas – [https://komga.org/docs/guides/libraries/](https://komga.org/docs/guides/libraries/ "Guía oficial de Komga sobre configuración y escaneo de bibliotecas")
- Ajustes y gestión del servidor – [https://komga.org/docs/guides/server-settings/](https://komga.org/docs/guides/server-settings/ "Guía oficial de Komga sobre ajustes y gestión del servidor")
- Configuración de proxy inverso y HTTPS – [https://komga.org/docs/installation/https/](https://komga.org/docs/installation/https/ "Guía oficial de Komga sobre configuración de HTTPS y proxy inverso")
