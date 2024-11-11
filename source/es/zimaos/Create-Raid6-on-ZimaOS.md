---
title: ¿Cómo crear RAID6 en ZimaOS?
description: 
type: "Docs"
tip: Formato de encabezado fijo, por favor no lo elimine, description es la descripción del artículo, si no se llena, se tomará el primer párrafo del contenido.
---
## Introducción
Actualmente, ZimaOS soporta RAID0/1/5, pero entendemos que muchos usuarios requieren RAID6 para una mayor redundancia. Para abordar esto, hemos preparado una guía paso a paso para crear RAID6 a través de la línea de comandos. Por favor, siga las instrucciones a continuación.
¡Esperamos poder acelerar nuestro soporte para más niveles de RAID en el futuro!

{% note warn Tips %}
Si el sistema se reinicia, deberá volver a ensamblar el conjunto RAID6.
{% endnote %}


## Requisitos previos

1. Necesitará al menos cuatro discos duros.
2. Necesita aprender cómo acceder a la página de línea de comandos haciendo clic en [esto](https://www.zimaspace.com/docs/zimaos/How-to-Open-SSH-in-ZimaOS.html).
3. Necesita ejecutar los comandos en el tutorial con privilegios de superusuario (privilegios de root). Puede usar `sudo ` para elevar privilegios, como `sudo mkfs.ext4 /dev/md0 `
4. Use el comando lsblk para verificar los discos duros disponibles.
   ![](https://manage.icewhale.io/api/static/docs/1729218009483_98dae94c-9b29-4042-a508-537aa6d1d554.jpeg)

5. Si MOUNTPOINTS tiene un punto de montaje, debe cancelarlo con el siguiente comando.
   ![](https://manage.icewhale.io/api/static/docs/1729145392591_image.png)
   ```command
   umount /dev/sda
   ```
   


## Pasos para crear RAID6

1. Cree el conjunto RAID6 con al menos cuatro discos usando el siguiente comando:
   ```
   mdadm -Cv /dev/md0 --level=6 --name=foldername --raid-devices=4 /dev/sda /dev/sdb /dev/sdc /dev/sdd --run --homehost=zimaos
   ```
   `/dev/md0` es el nombre del nuevo dispositivo RAID.

   `--level=6` indica que está creando un conjunto RAID6.

   `--name=foldername` especifica el nombre del conjunto RAID.

   `--raid-devices=4` indica al sistema que use cuatro discos duros.

   `/dev/sda /dev/sdb /dev/sdc /dev/sdd` son los discos que participan en el conjunto.

   ![](https://manage.icewhale.io/api/static/docs/1729219387443_img_v3_02fp_8fce2dd8-56af-4706-b5de-96cea3b8162g.jpg)


2. Formatee el RAID usando el siguiente comando:
   ```
   mkfs.ext4 /dev/md0
   ```
   ![](https://manage.icewhale.io/api/static/docs/1729219416289_img_v3_02fp_7340f5ef-7892-4696-8707-cdda424461cg.jpg)


3. Cree un directorio para montar el RAID:

   ```
   cd /media
   mkdir foldername
   ```

4. Monte el RAID usando el siguiente comando:

   ```
   mount -t ext4 /dev/md0 /media/foldername
   ```
5. Una vez creado, ingrese la ruta en el archivo basado en la web para mostrarlo

   ![](https://manage.icewhale.io/api/static/docs/1729220708308_img_v3_02fp_245f1382-835d-4827-8852-f6ab8b166d8g.jpg)

   ![](https://manage.icewhale.io/api/static/docs/1729220715773_img_v3_02fp_1b36a2a6-e9a5-45d0-acc2-9b3345b3224g.jpg)

   
## Aviso:
Si el sistema se reinicia, deberá volver a ensamblar el conjunto RAID6:
```
mdadm -Av /dev/md0 /dev/sda /dev/sdb /dev/sdc /dev/sdd
mount /dev/md0 /media/foldername
```