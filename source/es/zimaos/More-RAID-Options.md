---
title: Más Opciones de RAID
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, no la elimine, la descripción es una descripción del artículo; si no se rellena, se cortará el texto en el primer párrafo.
---
# Configuración de Conjunto RAID
En resumen, RAID es una solución de respaldo por redundancia para discos después de un uso prolongado. Aunque hoy en día, muchos optan por soluciones de respaldo en la nube y múltiples almacenamiento local, RAID sigue siendo una tecnología de configuración de almacenamiento en el NAS, mejorando la fiabilidad del almacenamiento de datos y el rendimiento. Mejora la tolerancia a fallos y las velocidades de lectura/escritura al combinar múltiples unidades de disco en una o más unidades.

ZimaOS encarna tecnología compleja con una experiencia simple. Al crear y mantener espacio RAID, no necesitas pasar por configuraciones complejas. Con solo cinco clics simples, puedes completar la configuración.

## Proceso de Creación de RAID en ZimaOS
A continuación, usaremos una configuración RAID 5 con tres discos como estudio de caso para entender cómo crear y usar RAID en ZimaOS:
1. Abre el panel de configuración y verás el botón para crear RAID. Haz clic en "Crear".
Consejo: Si solo necesitas montar y usar tu disco directamente, entonces "Descubrir el nuevo disco duro" será tu elección.
![](https://manage.icewhale.io/api/static/docs/1727161448346_image.png)
2. Según tus necesidades, elige la opción RAID apropiada. Aquí hay explicaciones simples de las características de los tres tipos de RAID:
![](https://manage.icewhale.io/api/static/docs/1727161467120_image.png)
3. Elige la opción RAID que se adapte a tus necesidades.
![](https://manage.icewhale.io/api/static/docs/1727161792442_image.png)
4. Modifica el nombre de tu conjunto y confirma.
![](https://manage.icewhale.io/api/static/docs/1727161810070_image.png)
5. Permite algo de tiempo para la inicialización; dependiendo del tamaño de tus discos, esto podría tardar desde unos segundos hasta unos minutos.
![](https://manage.icewhale.io/api/static/docs/1727161825483_image.png)
6. Completa la configuración y comienza a usar tu espacio de almacenamiento RAID.
![](https://manage.icewhale.io/api/static/docs/1727161840983_image.png)
## Más Configuración

Al configurar RAID en ZimaOS, puedes mejorar efectivamente la seguridad de los datos y el rendimiento del sistema. Elige el nivel RAID apropiado según tus necesidades específicas para lograr el equilibrio óptimo entre rendimiento y protección de datos. Para la mayoría de los usuarios, RAID 1 o RAID 5 son opciones sólidas, dependiendo de tus requisitos de espacio y necesidades de seguridad.

Además, para usuarios que no están satisfechos con las opciones RAID predeterminadas de ZimaOS, el sistema también admite ZFS para configuraciones de espacio de almacenamiento personalizadas.