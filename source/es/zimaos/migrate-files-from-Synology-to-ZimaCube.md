---
title: ¡De Synology a ZimaCube, migra todos los archivos!
description:
type: "Docs"
tip: El formato fijo de la barra superior no debe eliminarse, la descripción es para la descripción del artículo; si no se completa, se tomará el primer párrafo del contenido.
---
# ¡Bienvenido al mundo de ZimaOS! Quiero decir, nuevos amigos que han venido de otras marcas como Synology, ¡hola!

ZimaOS es un cambio de juego para los entusiastas de NAS, usuarios profesionales y usuarios de estudio. Su interfaz intuitiva simplifica la copia de seguridad y gestión de datos, asegurando que tus archivos críticos estén siempre seguros. ZimaOS se destaca en la instalación de aplicaciones Docker, simplificando el proceso con solo unos clics.
![](https://manage.icewhale.io/api/static/docs/1722482124812_image.png)

Nos sentimos honrados de que hayas elegido ZimaCube como el primer hardware para experimentar ZimaOS. Para ayudar a todos a transferir rápidamente archivos de dispositivos Synology a ZimaCube, hemos preparado este tutorial.

Por supuesto, transferir archivos a ZimaCube es muy fácil. Comencemos.

>Este tutorial también es aplicable a otros dispositivos con ZimaOS instalado.

## SMB/SAMBA será nuestro método
SMB (Server Message Block) es un protocolo integrado en el sistema Windows para compartir archivos y otros servicios a través de la red. SAMBA implementa el protocolo SMB, lo que enriquece los métodos de compartición de archivos en sistemas tipo *nix.

Tanto ZimaOS como Synology DSM están bien implementados/compatibles con SMB, ya sea a través de SAMBA o mediante una implementación propia, lo que hace que la compartición y transferencia de archivos sea muy conveniente.

## Montar compartidos desde DSM en ZimaOS
>Al principio de la configuración de Synology, muchos usuarios configuraron el uso compartido al crear directorios; algunos usuarios no habilitaron la función de uso compartido al crear directorios. Por lo tanto, antes de migrar, es posible que necesites crear un nuevo directorio compartido y luego mover los datos que deseas migrar a este directorio compartido.

Ve al Tablero de ZimaOS y abre la App de Archivos. Luego, en la barra de navegación izquierda de la interfaz de usuario de la App de Archivos, encuentra el signo “+” junto a Almacenamiento y haz clic en él, luego haz clic en “Almacenamiento LAN”.
![](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)
En la ventana emergente, ingresa la dirección IP de Synology DMS. La mía es 10.0.0.11 aquí y necesitas llenar la dirección IP correcta de tu dispositivo. Ahora haz clic en el botón Conectar.
![](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)
>Si tu cuenta compartida de DSM no es un Invitado, sino una cuenta específicamente configurada con un usuario y contraseña, necesitas ingresar la cuenta y la contraseña correcta de DSM aquí.

## Copiar y pegar archivos desde Synology DSM en ZimaOS
Cuando haces clic en el botón Conectar y te conectas con éxito, Synology aparecerá como un dispositivo de red bajo Almacenamiento. Y, en el lado derecho, aparecerá el directorio compartido de Synology.
![](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)
Ve al directorio compartido y selecciona los archivos y directorios que queremos migrar. Puedes presionar Ctrl + A para seleccionar todos los archivos. Luego, haz clic en el botón Copiar en la esquina superior derecha.

![](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

Ahora ingresa al área de almacenamiento de ZimaOS. Ve al directorio de destino y selecciona el botón `Pegar xx elementos` en la esquina superior derecha.

[![](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)

> Debes asegurarte de que la **capacidad restante** del grupo de almacenamiento de destino sea mayor que el **volumen total** del archivo que se va a copiar y pegar.

Ahora, espera a que se complete la migración de archivos. Después de que la migración se complete, ¡por favor experimenta la conveniencia que ZimaOS trae a tu gestión de datos!