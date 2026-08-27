---
title: ¿Cómo habilitar el módulo Wi-Fi Intel AX210 en ZimaOS?
description:  
type: Docs
author: admin
tip: Formato fijo en la barra superior, por favor no eliminar, description es la descripción del artículo, si no se completa se tomará el primer párrafo del contenido
---

**🎯 Objetivo**
Habilitar la tarjeta Wi-Fi AX210 en ZimaOS y conectarse a una red inalámbrica, sin necesidad de interfaz gráfica.

## Para ZimaOS v1.4.2 y superiores
El Intel AX210 es una tarjeta inalámbrica de alto rendimiento que soporta Wi-Fi 6E. Muchos usuarios de dispositivos Zima dependen de ella para la conectividad inalámbrica. Esta guía te mostrará cómo habilitar el AX210 y conectarte a Wi-Fi en un entorno solo de línea de comandos.
👉 [Haz clic aquí para descargar la última versión de ZimaOS](https://github.com/IceWhaleTech/ZimaOS)

## Paso 1: Confirmar que AX210 es reconocido
Ejecuta el siguiente comando:
```language
lspci | grep -i network
```
Deberías ver una salida similar a:

`Intel Corporation Wi-Fi 6E AX210...`

![La salida del terminal confirma la detección del Wi-Fi Intel AX210 en ZimaOS a través de lspci.](https://manage.icewhale.io/api/static/docs/1751615644136_image.png)

Si no se detecta, asegúrate de que la tarjeta esté insertada en la ranura M.2 E correcta y que el hardware esté funcional.

## Paso 2: Conectar a Wi-Fi utilizando nmtui
ZimaOS incluye la herramienta de línea de comandos `nmtui`. Iníciala con:
```language
sudo nmtui
```
Luego:
- Selecciona `Activar una conexión`
- Elige tu red Wi-Fi (SSID)
- Ingresa la contraseña y presiona Enter

| ![](https://manage.icewhale.io/api/static/docs/1751616098976_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616105026_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616124786_image.png) |
| :---------------: | :---------------: | :---------------: |

## Paso 3: Verificar dirección IP y conectividad
Verifica el estado de tu interfaz inalámbrica:
```language
ip a
```
![la salida del terminal del comando ip a en Linux, mostrando configuraciones de interfaces de red, incluidas direcciones IP y estados.](https://manage.icewhale.io/api/static/docs/1751616224099_image.png)

🖥️ **Opcional:** Ver y gestionar la configuración de red en el panel de control de ZimaOS
Si estás utilizando la interfaz web de ZimaOS (Panel de control), también puedes ver y configurar los ajustes de red allí.
Ejemplo:
<p align="center">
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616926003_image.png)" width="45%" />
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616939282_image.png)" width="45%" />
</p>

🎉 **¡Estás listo!**
Tu tarjeta Wi-Fi AX210 ahora está conectada y lista para usar con ZimaOS.

Si tienes alguna pregunta, por favor contacta al correo de soporte: <support@icewhale.org>