---
title: Lista de formatos de disco compatibles con ZimaOS
description: 
type: Docs
author: admin
tip: La estructura del encabezado fijo no debe eliminarse, la descripción es el resumen del artículo, si no se completa, se tomará el primer párrafo del contenido
---
## Introducción
A medida que las demandas de los usuarios para los dispositivos de almacenamiento se diversifican, ZimaOS continúa optimizando y ampliando su soporte para sistemas de archivos. Este documento tiene como objetivo proporcionar a los usuarios una visión completa del soporte de formatos de disco en la versión actual (v1.3.0), ayudando a los usuarios a gestionar y utilizar los recursos de almacenamiento de manera más eficiente.

<div style="text-align: center;">

| Formato del Sistema de Archivos | Auto-Montaje de Disco USB | Disco Interno |
|----------------------------------|---------------------------|---------------|
| APFS                             | No Soportado              | No Soportado  |
| HFS/HFS+                         | Lectura/Escritura         | No Soportado  |
| ExFAT                            | Lectura/Escritura         | Lectura/Escritura |
| FAT16                            | Lectura/Escritura         | No Soportado  |
| FAT32                            | Lectura/Escritura         | Lectura/Escritura |
| NTFS                             | Lectura/Escritura         | Lectura/Escritura |
| EXT4                             | Lectura/Escritura         | Lectura/Escritura |
| EXT3                             | Lectura/Escritura         | Lectura/Escritura |
| EXT2                             | Lectura/Escritura         | Lectura/Escritura |
| BTRFS                            | No Soportado              | No Soportado  |
| XFS                              | No Soportado              | No Soportado  |

</div>


**<u>Versión actual (v1.3.0)</u>**

{% note warn Tips: %}

Unidad USB: Se puede usar directamente para retener datos.
Disco duro interno: Después de insertar el Cube, haga clic en el botón "Habilitar" para retener datos para su uso.

{% endnote %}


## Resumen
ZimaOS se compromete a proporcionar a los usuarios soluciones de almacenamiento eficientes y estables. Esta guía le ayuda a comprender el soporte del sistema de archivos en la versión actual, lo que le permite planificar mejor el uso de sus dispositivos de almacenamiento. Gracias por elegir ZimaOS; continuaremos optimizando y mejorando su experiencia de usuario.

Para cualquier pregunta, comuníquese con el equipo de soporte técnico de ZimaOS a support@icewhale.org.