---
title: Método de actualización de BIOS de ZimaBoard
description: 
type: "Docs"
tip: La barra superior tiene un formato fijo, no la elimine. La descripción es para el artículo y si no se llena, se tomará el primer párrafo del contenido.
---
## Preparación previa:
- USB flash drive (sin contenido) X1
- Monitor X1
- Teclado X1
- MiniDP X1
## Paso 1: Descargar el instalador de BIOS
**Enlace:**
{% note warn Advertencia %}
No hay paquete de actualización de BIOS para zimaboard832 con CPU J3455
{% endnote %}

| Modelo | CPU | Enlace de descarga |
| - | - | - |
| ZimaBoard 232 | N3350 | [https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link](https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link) |
| ZimaBoard 432 | N3450 | [https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link](https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link) |
| ZimaBoard 832 | N3450 | [https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link](https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link) |
## Paso 2: Preparar una unidad flash USB
Formatee la unidad USB en formato FAT32, abra el paquete de instalación según el número de modelo de ZimaBoard y copie la carpeta EFI en una unidad USB vacía.
|![](https://manage.icewhale.io/api/static/docs/1729154067524_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729154081840_image.png) |
| - | - |
## Paso 3: Actualizar BIOS
Conecte la unidad flash USB, el teclado y el monitor al ZimaBoard, enciéndalo y presione F11 continuamente para entrar en la pantalla de selección y manipule el teclado para seleccionar UEFI:
![](https://manage.icewhale.io/api/static/docs/1729154195372_image.png)
## Paso 4: Iniciar la instalación
![](https://manage.icewhale.io/api/static/docs/1729154235770_image.png)

## Paso 5: Instalación completada
![](https://manage.icewhale.io/api/static/docs/1729154248434_image.png)