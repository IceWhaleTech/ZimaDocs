---
title: Referencia de configuración RAID
seo_title: "Configuración RAID en ZimaOS: explicación de RAID 0, 1, 5, 6 y JBOD"
description: "Guía detallada de configuración RAID para ZimaOS. Explica RAID 0, 1, 5, 6 y JBOD con tablas comparativas, instrucciones paso a paso y respuestas a preguntas habituales."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

RAID combina varias unidades para mejorar la fiabilidad, el rendimiento o ambos. Distribuye los datos entre las unidades para permitir mayores velocidades de lectura y escritura, y mantiene los datos intactos aunque falle una unidad. JBOD simplemente une varios discos en un volumen continuo para aprovechar al máximo la capacidad total.

Si este tema es nuevo para ti y solo quieres saber qué configuración se adapta a tu situación, empieza por **[Configuración del almacenamiento](./storage-setup "Elige la configuración de almacenamiento y las opciones RAID que mejor se adapten a tus necesidades")**. Esa guía explica la decisión sin dar por sentado que ya tienes conocimientos. Esta página es la referencia técnica.

## Qué hace cada opción

Esto es lo que significa cada nivel en términos sencillos.

- **RAID 0 (rápido)**: distribuye los datos entre las unidades para obtener la máxima velocidad y capacidad. No ofrece redundancia. Si falla una unidad, se pierden todos los datos. Es adecuado para datos temporales o cuando la velocidad importa más que la seguridad.
- **RAID 1 (seguro)**: duplica los datos en dos unidades. Si una falla, la otra sigue funcionando. Es sencillo y fiable, la opción clásica para un NAS doméstico. Por diseño, está limitado a dos unidades.
- **RAID 5 (equilibrado)**: distribuye datos y paridad entre tres o más unidades. Tolera el fallo de una unidad, aprovecha el espacio de forma eficiente y permite crecer añadiendo unidades con el tiempo. Es la opción habitual para pequeñas empresas y bibliotecas en expansión.
- **RAID 6 (estable)**: similar a RAID 5, pero con doble paridad. Tolera el fallo de dos unidades. Requiere cuatro o más unidades. Es adecuado para instalaciones en las que el tiempo de inactividad resulta costoso.
- **JBOD**: concatena discos en un gran volumen sin redundancia. Ofrece la capacidad máxima, pero si falla un disco se pierde todo el volumen. En general, no lo recomendamos para datos importantes.

Consulta la siguiente imagen para ver una comparación visual.

![Resumen de las opciones RAID de ZimaOS con RAID 0, 1, 5, 6 y JBOD comparados lado a lado](https://manage.icewhale.io/api/static/docs/1755075585086_copyImage.png)





## Pasos detallados para crear RAID 5

RAID 5 es ideal para quienes buscan un equilibrio entre eficiencia de almacenamiento, rendimiento y protección frente al fallo de una unidad. Requiere al menos tres discos. A continuación se explica paso a paso cómo crear un conjunto RAID 5 con la interfaz actualizada de ZimaOS.



1.  Abre **Ajustes > Almacenamiento**. Verás una lista de los discos actuales y las operaciones disponibles.


![Página de almacenamiento de Ajustes de ZimaOS con la lista de discos actuales y las operaciones disponibles](https://manage.icewhale.io/api/static/docs/1755075586219_copyImage.png)

2.  Haz clic en **Combinar** para abrir el menú de combinación de discos.


![Página de almacenamiento de ZimaOS con el botón Combinar para abrir el menú de combinación de discos](https://manage.icewhale.io/api/static/docs/1755075587914_copyImage.png)

3.  Selecciona **RAID 5** y haz clic en **Siguiente**.


![Menú de combinación de discos de ZimaOS con RAID 5 seleccionado entre las opciones RAID disponibles](https://manage.icewhale.io/api/static/docs/1755075589691_copyImage.png)

4.  **Selecciona tres discos disponibles**. El sistema calculará la capacidad estimada; después, haz clic en **“Siguiente”**.


![Asistente de creación RAID de ZimaOS con tres discos seleccionados y la capacidad estimada del conjunto](https://manage.icewhale.io/api/static/docs/1755075591241_copyImage.png)

5.  **Configura y asigna un nombre al conjunto**: introduce un nombre, por ejemplo “RAID5”, marca los protocolos que quieras y haz clic en **“Crear”** para iniciar la inicialización.


![Pantalla de configuración del conjunto de almacenamiento de ZimaOS con el campo de nombre y las opciones de protocolo antes de crearlo](https://manage.icewhale.io/api/static/docs/1755075592784_copyImage.png)

6.  **Creación terminada**: el sistema distribuirá los datos, mostrará el progreso hasta finalizar y presentará el estado del conjunto como **“Saludable”**.


![Pantalla de ZimaOS después de crear el almacenamiento, con el nuevo conjunto en estado Saludable](https://manage.icewhale.io/api/static/docs/1755075594884_copyImage.png)

7.  **Ya puedes utilizar RAID 5.** Tras la creación, la paridad se activará automáticamente. Durante el proceso, la velocidad de lectura de los discos puede verse afectada, pero el uso normal no se interrumpirá.


![Página de almacenamiento de ZimaOS con el nuevo conjunto RAID 5 preparado y la paridad activada automáticamente](https://manage.icewhale.io/api/static/docs/1755075596383_copyImage.png)

## Elegir un nivel RAID

¿Aún no te has decidido? Esta referencia rápida resume las ventajas y desventajas.

![Tabla de referencia rápida de los niveles RAID de ZimaOS con las diferencias de capacidad, velocidad y redundancia](https://manage.icewhale.io/api/static/docs/1755075597233_copyImage.png)

Para obtener recomendaciones basadas en cada escenario, empieza por **[Configuración del almacenamiento](./storage-setup "Elige la configuración de almacenamiento y las opciones RAID que mejor se adapten a tus necesidades")**.

## Otros niveles RAID

Los pasos para RAID 0, 1 y 6 son los mismos; solo cambian la opción seleccionada y el número mínimo de discos. RAID 6 requiere al menos cuatro unidades y tolera el fallo de dos.

## ZFS

ZimaOS también admite el sistema de archivos ZFS para quienes necesitan instantáneas, sumas de comprobación e integridad de datos avanzada. Consulta la **[guía de configuración de ZFS](../developer/zfs-setup "Configura ZFS en ZimaOS para obtener instantáneas, sumas de comprobación e integridad de datos")** en la sección Desarrollo.

## Preguntas frecuentes

**¿Por qué se tarda tanto en crear un RAID?**

El tiempo de inicialización depende de la capacidad y la velocidad de las unidades. Las unidades de mayor capacidad tardan más. El conjunto se puede utilizar durante el proceso, aunque las velocidades de lectura pueden reducirse hasta que finalice la inicialización.

## Siguiente

RAID protege frente al fallo de una unidad, no frente a una eliminación accidental o un desastre. Combínalo con la estrategia de **[copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos con la regla de copia de seguridad 3-2-1 en tu NAS")** para obtener una protección completa. Si aún no has decidido qué configuración se adapta a tus necesidades, empieza por **[Configuración del almacenamiento](./storage-setup "Elige la configuración de almacenamiento y las opciones RAID que mejor se adapten a tus necesidades")**.
