---
title: Velocidades de Transferencia de ZimaCube a Través de Conexiones Thunderbolt Explicadas
description: 
type: "Docs"
tip: El formato fijo de la barra superior no debe eliminarse, la descripción es una descripción del artículo, si no se completa, se tomará el primer párrafo del contenido.
---
Esta guía se centra en las velocidades de transferencia de archivos más rápidas logradas a través de una conexión Thunderbolt en el ZimaCube, proporcionando a los usuarios datos específicos de pruebas de rendimiento y consejos de optimización.
Asegúrese de haber consultado [Cómo conectar ZimaCube a través de un cable Thunderbolt](https://www.zimaspace.com/docs/zimaos/Thunderbolt-PC-Direct).

## Transferencias de Alta Velocidad a través del Puente de Red Thunderbolt

### 1. Transferencias a través del Puente de Red Samba
Asegúrese de haber consultado el archivo de ayuda - [Samba con Multi-Usuario](https://www.zimaspace.com/docs/zimaos/Using-Samba-as-a-Member).
En el sistema ZimaOS, puede transferir a través de una carpeta compartida Samba. En esta configuración, el Puente de Red Thunderbolt puede aumentar significativamente las velocidades de transferencia.
**Datos de rendimiento: Usando el puente de red Samba, solo se necesitan 5 segundos para cargar un archivo de 13GB, y la velocidad de transferencia alcanza <u>2GB/s</u>, lo que supera con creces la velocidad de los métodos de transferencia de red tradicionales.**
![](https://manage.icewhale.io/api/static/docs/1729592792338_image.png)
- Esta velocidad de transferencia extrema tiene ventajas obvias en escenarios de transferencia de archivos grandes, especialmente para usuarios profesionales que necesitan procesar grandes cantidades de datos rápidamente.

### 2. Transferencia de Archivos a Través de la Interfaz de Usuario de ZimaOS

Además del puente de red Samba, los usuarios también pueden transferir archivos directamente a través de la interfaz de usuario de ZimaOS. Con la última optimización, la velocidad de carga de archivos a través de Thunderbolt puede alcanzar <u>600MB/s</u>.
![](https://manage.icewhale.io/api/static/docs/1729593331553_image.png)
Aunque es un poco más lenta que el método Samba, todavía estamos optimizando este método de transferencia y mejoraremos aún más la eficiencia de transferencia en futuras versiones. Nota: La versión actual es la v1.2.5.

## Si sus velocidades de transferencia no son tan rápidas como se esperaba
Si está utilizando la conexión Thunderbolt para transferencias de archivos que no cumplen con las velocidades anteriores, le recomendamos consultar el documento de ayuda de preguntas frecuentes al final de este artículo - [Cómo conectar su ZimaCube a través del cable Thunderbolt](https://www.zimaspace.com/docs/zimaos/Thunderbolt-PC-Direct). Siguiendo los pasos en la guía de solución de problemas, puede optimizar aún más el rendimiento de la transferencia y asegurar que obtenga la mejor experiencia posible de velocidad de transferencia de archivos.