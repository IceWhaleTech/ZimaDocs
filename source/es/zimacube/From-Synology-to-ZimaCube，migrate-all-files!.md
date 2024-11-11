---
title: ¡De Synology a ZimaCube, migra todos los archivos!
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, por favor no la elimine, la descripción es para el artículo, si no se completa, se tomará el texto del primer párrafo
---
# ¡Bienvenido al mundo de ZimaOS! Quiero decir, ¡nuevos amigos que han venido de otras marcas como Synology, hola!

ZimaOS es un cambio de juego para entusiastas de NAS, usuarios profesionales y usuarios de estudio. Su interfaz intuitiva simplifica la copia de seguridad y gestión de datos, asegurando que tus archivos críticos siempre estén seguros. ZimaOS sobresale en la instalación de aplicaciones Docker, simplificando el proceso con solo unos clics.
![](https://manage.icewhale.io/api/static/docs/1722482124812_image.png)

Estamos honrados de que hayas elegido ZimaCube como el primer hardware para experimentar ZimaOS. Para ayudar a todos a transferir rápidamente archivos desde dispositivos Synology a ZimaCube, hemos preparado este tutorial.

Por supuesto, transferir archivos a ZimaCube es muy fácil. Empecemos.

>Este tutorial también es aplicable a otros dispositivos con ZimaOS instalado.

## SMB/SAMBA será nuestro método
SMB (Server Message Block) es un protocolo integrado en el sistema Windows para compartir archivos y otros servicios a través de la red. SAMBA implementa el protocolo SMB, que enriquece los métodos de compartición de archivos de sistemas *nix-like.

Tanto ZimaOS como Synology DSM están bien implementados/compatibles con SMB, ya sea a través de SAMBA o auto-implementación, lo que hace que compartir y transferir archivos sea muy conveniente.

## Montar recursos compartidos desde DSM en ZimaOS
>Al comienzo de la configuración de Synology, muchos usuarios configuran la compartición al crear directorios; algunos usuarios no proporcionaron la función de compartición al crear directorios. Por lo tanto, antes de migrar, es posible que necesites crear un nuevo directorio compartido y luego mover los datos que deseas migrar a este directorio compartido.

Ve al panel de control de ZimaOS y lanza la aplicación Archivos. Luego, en la barra de navegación izquierda de la interfaz de usuario de la aplicación Archivos, encuentra el signo “+” junto a Almacenamiento y haz clic en él, luego haz clic en “Almacenamiento LAN”.
![](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)
En la ventana emergente, ingresa la dirección IP de Synology DMS. La mía aquí es 10.0.0.11 y necesitas llenar la dirección IP correcta de tu dispositivo. Ahora haz clic en el botón Conectar.
![](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)
>Si tu cuenta compartida de DSM no es una cuenta de Invitado, sino una cuenta específicamente configurada con un usuario y contraseña, necesitas ingresar la cuenta y contraseña correctas de DSM aquí.

## Copiar y pegar archivos desde Synology DSM en ZimaOS
Cuando haces clic en el botón Conectar y te conectas exitosamente, Synology aparecerá como un dispositivo de red bajo Almacenamiento. Y en el lado derecho, aparecerá el directorio compartido de Synology.
![](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)
Ve al directorio compartido y selecciona los archivos y directorios que queremos migrar. Puedes presionar Ctrl + A para seleccionar todos los archivos. Luego, haz clic en el botón Copiar en la esquina superior derecha.

![](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

Ahora ingresa al área de almacenamiento de ZimaOS. Ve al directorio objetivo y selecciona el botón `Pegar xx elementos` en la esquina superior derecha.

[![](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)


> Necesitas asegurarte de que la **capacidad restante** de el grupo de almacenamiento de destino sea mayor que el **volumen total** de los archivos que se van a copiar y pegar.

Ahora, espera a que la migración de archivos se complete. Después de que la migración esté completa, ¡por favor experimenta la conveniencia que ZimaOS aporta a tu gestión de datos!