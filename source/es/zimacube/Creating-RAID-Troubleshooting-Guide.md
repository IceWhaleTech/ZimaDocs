---
title: Guía de Solución de Problemas de Creación de RAID
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, por favor no la elimines. La descripción es para el artículo; si no se llena, se tomará el primer párrafo del contenido.
---
# Al tratar problemas relacionados con la imposibilidad de crear RAID, se recomienda seguir estos pasos de solución de problemas:

## Verificar el Número de Discos Duros
Asegúrese de que haya al menos dos discos duros disponibles para cumplir con los requisitos básicos para la configuración de RAID.
![](https://manage.icewhale.io/api/static/docs/1722484339854_image.png)
## Verificar el Estado de Salud del Disco
![](https://manage.icewhale.io/api/static/docs/1722484363590_image.png)
## Verificar si la Formateo de Cada Disco se Realiza Exitosamente
Formatee cada disco duro de manera individual para asegurarse de que el proceso de formateo se complete con éxito sin errores.
![](https://manage.icewhale.io/api/static/docs/1722484386621_image.png)
## Verificar el Punto de Montaje
Verifique que el punto de montaje de RAID no contenga ya archivos. El punto de montaje debe estar vacío para garantizar la configuración correcta de RAID. Si hay archivos presentes, haga una copia de seguridad y limpie el punto de montaje.
![](https://manage.icewhale.io/api/static/docs/1722484409099_image.png)
## Reinicio del Sistema
Después de completar las verificaciones anteriores, reinicie el sistema e intente crear RAID nuevamente.
![](https://manage.icewhale.io/api/static/docs/1722484430867_image.png)