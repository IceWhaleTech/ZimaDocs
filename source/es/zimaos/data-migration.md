---
title: Mover datos entre unidades
seo_title: "Mover datos entre unidades en ZimaOS: Docker, datos de aplicaciones y carpetas"
description: "Mueve imágenes de Docker, datos de aplicaciones y carpetas de usuario entre espacios de almacenamiento de ZimaOS con la herramienta Data Migration integrada."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Cuando una unidad se llena, no tienes que reinstalar nada. La herramienta de migración integrada mueve las imágenes de Docker, los datos de las aplicaciones y las carpetas de usuario a otro espacio de almacenamiento sin interrumpir su funcionamiento.

## Qué puedes mover

- Imágenes de Docker
- Datos de aplicaciones Docker
- Bases de datos de usuario (Gallery, Downloads, Documents, Media y Backup)

## Cómo mover los datos

![Página Settings de ZimaOS con la entrada Data Migration y la lista de carpetas de almacenamiento](https://manage.icewhale.io/api/static/docs/1727178430378_image.png)

1. Abre **Settings > Data Migration**.
2. Selecciona el elemento que quieres migrar y haz clic en el botón **Modify Location** situado a la derecha.

![Página Data Migration con el botón Modify Location junto a cada elemento seleccionable](https://manage.icewhale.io/api/static/docs/1727178444256_image.png)

3. Elige el nuevo espacio de almacenamiento y haz clic en **Next**.

![Asistente Data Migration con la selección del espacio de almacenamiento y el botón Next](https://manage.icewhale.io/api/static/docs/1727178450237_image.png)

4. Marca la casilla "I acknowledge and confirm this action" y haz clic en **Start Migration**.

![Pantalla de confirmación de Data Migration con la casilla de aceptación y el botón Start Migration](https://manage.icewhale.io/api/static/docs/1727178455511_image.png)

5. El progreso se muestra a pantalla completa y no se pueden realizar otras operaciones durante la migración.

![Pantalla de progreso de Data Migration con el estado de la migración a pantalla completa](https://manage.icewhale.io/api/static/docs/1727178460307_image.png)

6. Cuando termine, una ventana emergente mostrará los detalles de la migración.

![Ventana de finalización de Data Migration con los detalles de la migración completada](https://manage.icewhale.io/api/static/docs/1727178465734_image.png)

## Contenido relacionado

- **[Rutas de almacenamiento de las aplicaciones](./docker-app-paths "Dónde guardan datos las aplicaciones y cómo moverlos")** — conoce dónde se almacenan los datos antes de trasladarlos
- **[Configuración del almacenamiento](./storage-setup "Elige una configuración de almacenamiento con opciones RAID adaptadas a tus necesidades")** — planifica los espacios de almacenamiento
