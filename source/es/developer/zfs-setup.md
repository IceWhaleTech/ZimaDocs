---
title: ZFS en ZimaCube
description:
type: “Docs”
tip: La barra superior tiene formato fijo, por favor no la elimines, la descripción es para el artículo, si no se llena se tomará el texto de la primera parte del contenido.
---
# Establecer el grupo de almacenamiento
Conecta una unidad externa a ZimaCube. Utiliza la herramienta lsblk para listar todas las unidades. Puedes encontrar la unidad que acabas de conectar controlando las variables.
![](https://manage.icewhale.io/api/static/docs/1727160959998_image.png)
Aquí, mi unidad USB se muestra como sda.
Usa este comando para crear un grupo de almacenamiento.
```language
# Es posible que primero debas eliminar todos los datos en tu disco:
dd if=/dev/zero of=/dev/sda bs=1M count=10

# Dado que el directorio raíz es de solo lectura en la mayoría de los casos en ZimaOS,
# crea manualmente un directorio bajo /media para montar.
mkdir /media/pool1

# Crea tu grupo:
zpool create -m /media/pool1 pool1 /dev/sda -f

# Además, es posible que necesites estos comandos para posteriores eliminaciones:
zpool export pool1
zpool destroy pool1
```
![](https://manage.icewhale.io/api/static/docs/1727161209903_image.png)
## Establecer ZFS en el grupo de almacenamiento
```language
# Crear ZFS en el grupo de almacenamiento creado:
zfs create pool1/zfs

# Usa el comando a continuación para mostrar zfs list
zfs list
```
![](https://manage.icewhale.io/api/static/docs/1727161245558_image.png)
Elegí crear el grupo de almacenamiento y ZFS en el directorio /media para que puedas usar fácilmente ZFS en ZimaOS.