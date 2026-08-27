---
title: Método de actualización de la BIOS de ZimaCube
description: "Actualiza la BIOS de tu ZimaCube con una memoria USB. Instrucciones paso a paso para los modelos N100 y Pro, con enlaces de descarga y solución de problemas."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Las actualizaciones de la BIOS pueden corregir problemas de compatibilidad de hardware, mejorar la estabilidad del sistema y añadir funciones nuevas. Actualiza la BIOS únicamente si tienes un problema concreto que resuelva una versión más reciente o si nuestro equipo de soporte te lo ha recomendado.

Si el proceso de actualización se interrumpe —por ejemplo, debido a un corte de corriente—, la placa base puede quedar sin posibilidad de arrancar. Antes de comenzar, asegúrate de que ZimaCube esté conectado a una fuente de alimentación fiable.

## Qué necesitas

- Una memoria USB vacía y formateada como FAT32
- Un monitor conectado mediante Mini DisplayPort
- Un teclado USB
- El paquete de BIOS correcto para tu modelo de ZimaCube (consulta la tabla siguiente)

## Paso 1: Identifica tu modelo

Comprueba qué ZimaCube tienes antes de realizar la descarga. El nombre del modelo está impreso en una etiqueta situada en la parte inferior del dispositivo. Será uno de los siguientes:

| Modelo | Paquete de BIOS |
|---|---|
| **ZimaCube N100** | [Enlace de Google Drive](https://drive.google.com/file/d/1yd8Z2fJNr69TLyy6381JzVSHP_Af0awQ/view?usp=drive_link) |
| **ZimaCube Pro 1235u** | [Enlace de Google Drive](https://drive.google.com/file/d/1hQI2oe0C9CIsylP0vjdP3tZSljgslkx8/view?usp=drive_link) |
| **ZimaCube Pro 1235u con Resizable BAR** | [Enlace de Google Drive](https://drive.google.com/file/d/1i0cm2QHK2e4oNNmQU-0-pnABuqp4HR8N/view?usp=drive_link) |

La función Resizable BAR ya está incluida en la BIOS de ZimaCube 2; no es necesario actualizar ese modelo para obtenerla.

## Paso 2: Prepara la memoria USB

1. Formatea la memoria USB como **FAT32**.
2. Descarga el paquete de BIOS correspondiente a tu modelo desde la tabla anterior.
3. Extrae el archivo descargado. En su interior debería aparecer una carpeta `EFI`.
4. Copia la carpeta `EFI` completa en la raíz de la memoria USB.

![](https://manage.icewhale.io/api/static/docs/1779788907886_image.png)

## Paso 3: Arranca desde USB

1. Conecta la memoria USB, el teclado y el monitor a ZimaCube.
2. Enciende el dispositivo y pulsa **F11** repetidamente hasta que aparezca el menú de arranque.
3. Utiliza las teclas de dirección para seleccionar **UEFI: (tu memoria USB)** y pulsa Enter.

![](https://manage.icewhale.io/api/static/docs/1729233125821_image.png)

## Paso 4: Ejecuta la actualización

La actualización de la BIOS comenzará automáticamente y aparecerá una pantalla de progreso. No apagues el dispositivo ni retires la memoria USB durante el proceso; normalmente tarda menos de dos minutos.

![](https://manage.icewhale.io/api/static/docs/1729233155418_image.png)

## Paso 5: Finaliza

Cuando termine la actualización, aparecerá una pantalla de confirmación.

![](https://manage.icewhale.io/api/static/docs/1729233179864_image.png)

Pulsa el botón de encendido para apagar el dispositivo. Retira la memoria USB. Vuelve a pulsar el botón de encendido para arrancar normalmente.

El primer arranque después de actualizar la BIOS puede tardar más de lo habitual porque el sistema está reinicializando el hardware. Es normal.

## Solución de problemas

- **El menú de arranque no aparece**: prueba otro puerto USB. Los puertos USB 2.0 traseros suelen ser los más fiables para actualizar la BIOS. También puedes probar **Delete** o **F2** en lugar de F11.
- **La memoria USB no aparece en el menú de arranque**: comprueba que esté formateada como FAT32 y que la carpeta EFI se encuentre en la raíz, no dentro de otra carpeta.
- **La actualización parece bloqueada**: espera al menos cinco minutos antes de asumir que se ha congelado. Algunas actualizaciones de BIOS tienen pausas largas entre pasos.
- **El sistema no arranca después de la actualización**: prueba el procedimiento de **[restablecimiento de la CMOS](./resets-cmos)** para restaurar los valores predeterminados de la BIOS.
