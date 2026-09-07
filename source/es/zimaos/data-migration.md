---
title: Migración de datos
seo_title: "Migración de datos de ZimaOS: mueve Docker, datos de aplicaciones y carpetas entre unidades"
description: "Mueve imágenes de Docker, datos de aplicaciones y carpetas de usuario entre espacios de almacenamiento de ZimaOS con la herramienta Data Migration integrada."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---
Cuando una unidad se llena o la cambias por una más grande, no necesitas reinstalar nada. La herramienta integrada Data Migration traslada categorías completas de datos a otro espacio de almacenamiento en una sola ejecución.

## Qué puedes mover

La herramienta trabaja con tres categorías:

- **Imágenes de Docker.** Los paquetes sobre los que se ejecutan tus aplicaciones. Esta categoría crece más rápido cuando sigues instalando aplicaciones.
- **Datos de aplicaciones de Docker.** Todo lo que han escrito tus aplicaciones instaladas, movido en bloque.
- **Carpetas de usuario.** Fotos, Descargas, Documentos, Multimedia y Copias de seguridad.

Trabaja a nivel de categoría, no aplicación por aplicación. Si quieres mover una sola aplicación o entender dónde viven sus archivos, consulta **[Rutas de almacenamiento de aplicaciones](./docker-app-paths "Consulta dónde se guardan los datos de las aplicaciones y cómo moverlos")**.

## Cuando los contenedores llenan la unidad del sistema

La unidad del sistema suele ser la más pequeña, y los contenedores escriben en ella por defecto. Las imágenes de Docker y los datos de aplicaciones crecen en silencio hasta que las actualizaciones fallan y las aplicaciones se comportan de forma extraña.

Configurar la ubicación de los datos de aplicaciones desde el principio es la forma de prevenirlo, y **[Rutas de almacenamiento de aplicaciones](./docker-app-paths "Consulta dónde se guardan los datos de las aplicaciones y cómo moverlos")** lo explica. Si la unidad del sistema ya está llena, la herramienta Data Migration lo resuelve en una ejecución: migra las imágenes de Docker y los datos de aplicaciones a tu espacio de almacenamiento y la unidad del sistema queda despejada.

## Cuando migras datos de RAID

Sustituir discos de un array RAID o pasar a un array más grande sigue el mismo camino. Migra cada categoría al nuevo espacio de almacenamiento, una por una. Cuando la última termine, el array antiguo queda libre para retirarse. Las aplicaciones siguen funcionando en todo momento y la migración no reinstala ni reconfigura nada.

## Cómo mover

1. Abre **Ajustes > Data Migration**.

![Página de Ajustes de ZimaOS mostrando la entrada Data Migration con las carpetas de almacenamiento](/images/guides/data-migration-entry.webp)

2. Selecciona el elemento que quieras migrar y haz clic en el botón **Modify Location** de la derecha.

![Página Data Migration con el botón Modify Location junto a cada elemento seleccionable](/images/guides/data-migration-modify-location.webp)

3. Elige el nuevo espacio de almacenamiento y haz clic en **Next**.

![Asistente de Data Migration mostrando la selección de espacio de almacenamiento con el botón Next](/images/guides/data-migration-choose-space.webp)

4. Confirma cómo se gestionan los conflictos. Si ya existe un archivo en el destino, elige qué hacer: omitirlo, sobrescribirlo o conservar ambos. Elige también si los archivos originales permanecen en la unidad antigua o se eliminan tras una migración verificada. Después marca la casilla de aceptación y haz clic en **Start Migration**.


5. El progreso se muestra a pantalla completa y no se pueden realizar otras operaciones durante la migración.

![Pantalla de progreso de Data Migration mostrando el estado de la migración a pantalla completa](/images/guides/data-migration-progress.webp)

6. Al terminar, una ventana emergente muestra los detalles de la migración. En migraciones grandes, la herramienta ofrece un informe completo de los resultados.

![Ventana emergente de finalización de Data Migration con los detalles de la migración terminada](/images/guides/data-migration-done.webp)

![Página de informe de Data Migration con los resultados completos de una migración grande](/images/guides/data-migration-report.webp)

## Limitaciones

La herramienta migra las tres categorías anteriores. Las particiones del sistema y los datos fuera de esas categorías no forman parte de ella.

## Relacionado

- **[Rutas de almacenamiento de aplicaciones](./docker-app-paths "Consulta dónde se guardan los datos de las aplicaciones y cómo moverlos")** — movimientos por aplicación y dónde viven los datos de las aplicaciones
- **[Configuración del almacenamiento](./storage-setup "Elige las unidades y la configuración de almacenamiento adecuadas")** — planifica tus espacios de almacenamiento
- **[Conectar otro NAS](./synology-to-zimacube-migration "Conecta otro NAS a ZimaOS para mover archivos o hacer copias entre dispositivos")** — los datos entre dispositivos pasan por la aplicación Files
- **[Estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")** — los anillos externo y de segundo dispositivo de tu plan
