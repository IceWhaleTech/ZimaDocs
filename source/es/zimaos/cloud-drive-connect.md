---
title: Conectar unidades en la nube
seo_title: "Unidades en la nube en ZimaOS: conecta Google Drive, Dropbox y OneDrive"
description: "Conecta Google Drive, Dropbox y OneDrive a ZimaOS. Monta carpetas en la nube en Files, trabaja entre almacenamiento local y remoto y utiliza la nube como copia externa de tu plan 3-2-1."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Las unidades en la nube hacen bien su trabajo: están disponibles en todas partes, son fiables y otras personas ya comparten archivos contigo a través de ellas. Tu dispositivo ZimaOS destaca en lo demás: velocidad dentro de tu propia red, capacidad real y datos que permanecen bajo tu control. Al conectar ambos entornos, puedes mover los datos entre ellos a medida que cambien tus necesidades. Traslada parte de tus datos de la nube al NAS para reducir el coste de una suscripción o utiliza la nube como copia externa cifrada del NAS. Tú decides dónde se guarda cada elemento.

## Montar unidades en la nube en Files

La aplicación Files se conecta directamente a **Google Drive**, **Dropbox** y **OneDrive**. Solo tienes que conectarla una vez para que las carpetas en la nube aparezcan junto al almacenamiento local.

1. Abre **Files** en el panel de ZimaOS.
2. Añade una unidad en la nube desde la lista de almacenamiento.
3. Inicia sesión en la cuenta de la nube y autoriza el acceso.

![Aplicación ZimaOS Files con las opciones para conectar Google Drive, Dropbox y OneDrive](/images/guides/files-cloud-drive-mount.png)

Después de conectarla, la unidad en la nube aparece junto a los espacios de almacenamiento y puedes explorar sus carpetas como cualquier otra.

![Barra lateral de ZimaOS Files con una unidad en la nube conectada junto a los espacios locales](/images/guides/files-cloud-drive-list.png)

## Trabajar entre el almacenamiento local y la nube

Cuando la nube está montada, pasar de un entorno al otro deja de ser un proyecto aparte.

Abre un archivo de la nube, edítalo y vuelve a guardarlo allí. Arrastra una carpeta local a la unidad en la nube cuando quieras conservar otra copia. Descarga archivos de la nube cuando necesites tenerlos en un almacenamiento local rápido. Si trasladas suficientes datos al dispositivo, a menudo podrás cambiar a un plan de nube más económico. Files realiza la transferencia con verificación, de modo que una migración grande no termine con archivos dañados sin que te enteres.

A continuación se muestra cómo mover datos desde una unidad en la nube al almacenamiento local.

1. En Files, abre la unidad en la nube y selecciona la carpeta que quieras mover.

![ZimaOS Files con una carpeta en la nube seleccionada para la migración](/images/guides/files-cloud-migrate-select.png)

2. Elige el espacio de almacenamiento de destino.

![Diálogo de migración de ZimaOS Files para elegir el espacio de almacenamiento de destino](/images/guides/files-cloud-migrate-destination.png)

3. Inicia la transferencia. El progreso se muestra en tiempo real.

![Progreso de migración de ZimaOS Files con la transferencia ejecutándose en tiempo real](/images/guides/files-cloud-migrate-progress.png)

4. Al terminar, Files verifica el resultado y confirma que los archivos están intactos.

![Migración de ZimaOS Files completada y verificada, con los archivos intactos](/images/guides/files-cloud-migrate-verified.png)

## La copia externa

Una unidad en la nube conectada asume una segunda función en el plan de copias de seguridad: se convierte en la copia externa de tu **[estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")**.

El almacenamiento local contiene la copia de trabajo, una segunda unidad guarda la copia local y la nube conserva una copia cifrada que sobrevive a un incendio o una inundación. Es la misma nube que ya utilizas, ahora dedicada a una tarea para la que resulta especialmente adecuada.

## Siguiente paso

- **[Estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")** — crea el plan de protección completo
- **[Copia de seguridad del teléfono](./phone-backup "Copia automáticamente el teléfono en ZimaOS con ZimaClient")** — lleva también a casa los datos del teléfono
