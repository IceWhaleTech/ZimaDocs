---
title: ¿Cómo crear un centro de medios en casa con ZimaCube y DLNA?
description: 
type: Docs
author: admin
tip: El formato fijo de la barra superior no debe eliminarse, la descripción es la descripción del artículo, si no se llena, se cortará el texto al principio.
---
## Introducción
En esta era digital, los sistemas de entretenimiento en el hogar se están volviendo cada vez más inteligentes e interconectados. Como un dispositivo de almacenamiento en la nube personal de alto rendimiento, ZimaCube no solo proporciona una solución de almacenamiento de gran capacidad, sino que también soporta el protocolo DLNA (Digital Living Network Alliance), permitiéndole compartir y reproducir cualquier contenido multimedia en su red doméstica de manera sencilla.

Este tutorial le guiará sobre cómo configurar ZimaCube como un servidor DLNA y utilizar XX TV como cliente para lograr una experiencia de reproducción de medios sin interrupciones.

Antes de comenzar, asegúrese de haber descargado e instalado la última versión de ZimaOS: https://github.com/IceWhaleTech/ZimaOS/releases

## Paso 1: Abrir Configuración e ingresar al "modo desarrollador"
![](https://manage.icewhale.io/api/static/docs/1738831331021_image.png)

## Paso 2: Habilitar DLNA
En la interfaz de "**modo desarrollador**", busque el interruptor "**DLNA**" y asegúrese de que esté habilitado.
![](https://manage.icewhale.io/api/static/docs/1738831393315_image.png)

## Paso 3: Configurar la configuración de DLNA
Haga clic en "**Configuración DLNA**" para ingresar a la interfaz de configuración. Puede modificar las siguientes dos opciones:
- **Nombre amigable:** El predeterminado es "Servidor DLNA ZimaCube", puede personalizar un nombre que le convenga mejor.
- **Ruta de Medios:** La ruta predeterminada es `/media`, puede **modificarla a otras rutas de almacenamiento** según sea necesario.

| ![](https://manage.icewhale.io/api/static/docs/1738831857738_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738831871432_image.png) |
| - | - |

Después de completar la modificación, haga clic en el botón "**Guardar**".

## Paso 4: Reproducir contenido en la TV
1. Abra un dispositivo de TV o aplicación de reproductor que soporte DLNA
![](https://manage.icewhale.io/api/static/docs/1738831977224_image.png)
2. Busque los dispositivos DLNA en la red y encuentre "Servidor DLNA ZimaCube".
![](https://manage.icewhale.io/api/static/docs/1738832005480_image.png)
3. Navegue por el archivo multimedia compartido y seleccione Reproducir.

| ![](https://manage.icewhale.io/api/static/docs/1738832059024_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832067952_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832081469_image.png) |
| - | - | - |

## Solución de problemas
Si tiene problemas con la conexión o la reproducción, verifique los siguientes puntos:
- Asegúrese de que ZimaCube y la TV estén en la misma LAN.
- Verifique si el formato del archivo multimedia es compatible con el dispositivo de TV.
- Asegúrese de que hay archivos multimedia reproducibles en la carpeta compartida.

## Notas adicionales
Dado que diferentes marcas de televisores inteligentes pueden tener interfaces y funciones diferentes, consulte la guía de uso de DLNA para su marca de TV.

## Resumen
Con pasos sencillos, ahora puede compartir y disfrutar fácilmente de videos y música en HD en su red doméstica. ¡Esperamos que esto le ayude a construir un sistema de entretenimiento inteligente en casa!