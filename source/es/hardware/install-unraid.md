---
title: Cómo instalar UnRAID en ZimaCube
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, por favor no la elimine, la descripción es para el artículo y no se completará si no se llena, se cortará el primer párrafo del contenido
---
# Guía de instalación de TrueNAS en ZimaCube
![](https://manage.icewhale.io/api/static/docs/1727249736896_image.png)
## Entorno de hardware：
1X ZimaCube
1X Monitor
1X DP
1X Teclado
1X Cable Ethernet
1X Unidad flash USB (como disco de instalación)
![](https://manage.icewhale.io/api/static/docs/1727249911617_image.png)
## Proceso de instalación detallado
### Paso 1: Formatear la unidad flash USB
**a. Prepare una memoria USB (debe ser mayor de 1G) y formatee en formato FAT32, cambie el nombre a UNRAID (Mac)**
![](https://manage.icewhale.io/api/static/docs/1727249967953_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249974644_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249981977_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249988198_image.png)
**b. Descargue el [Creador de USB oficial](https://unraid.net/download)**
![](https://manage.icewhale.io/api/static/docs/1727250152598_image.png)
**c. Descargue la [Imagen oficial](https://unraid.net/download)**
![](https://manage.icewhale.io/api/static/docs/1727250193523_image.png)
**d. Abra el Creador de USB y escriba Unraid OS**
Seleccione las siguientes opciones según la especificación
![](https://manage.icewhale.io/api/static/docs/1727250248143_image.png)
**Haga clic en escribir y espere**
![](https://manage.icewhale.io/api/static/docs/1727250272215_image.png)
![](https://manage.icewhale.io/api/static/docs/1727250278309_image.png)
### Paso 2: Instalando Unraid en ZimaCube
**a. Arranque desde la memoria USB de instalación**
![](https://manage.icewhale.io/api/static/docs/1727250302063_image.png)
**b. Elija SO**
![](https://manage.icewhale.io/api/static/docs/1727250317388_image.png)
**c. Obtener IP**
![](https://manage.icewhale.io/api/static/docs/1727250333338_image.png)
## Conectándose a la webGui de Unraid
Hay dos métodos para conectarse a la webGui en Unraid:
  - Inicie Unraid en modo GUI e inicie sesión (el nombre de usuario es `root`, sin contraseña por defecto); o
  - Abra un navegador web desde su Mac o PC y navegue a `http://tower.local` Nota: si configuró un nombre de host diferente en el Creador de Memoria USB, use ese nombre en lugar de `tower`.
![](https://manage.icewhale.io/api/static/docs/1727250410689_image.png)
## ¡Ahora puede usar UNRAID en ZimaCube!
![](https://manage.icewhale.io/api/static/docs/1727250432285_image.png)