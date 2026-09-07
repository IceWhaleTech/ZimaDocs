---
title: Conectar unidades en la nube
seo_title: "Unidades en la nube en ZimaOS: conecta Google Drive, Dropbox y OneDrive"
description: "Conecta Google Drive, Dropbox y OneDrive a ZimaOS. Monta carpetas en la nube en Files, trabaja entre almacenamiento local y remoto y utiliza la nube como copia externa de tu plan 3-2-1."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Las unidades en la nube hacen bien su trabajo: están disponibles en todas partes, son fiables y otras personas ya comparten archivos contigo a través de ellas. Tu dispositivo ZimaOS destaca en lo demás: velocidad dentro de tu propia red, capacidad real y datos que permanecen bajo tu control. Al conectar ambos entornos, puedes mover los datos entre ellos a medida que cambien tus necesidades. Traslada parte de tus datos de la nube al NAS para reducir el coste de una suscripción o utiliza la nube como copia externa del NAS. Tú decides dónde se guarda cada elemento.

## Montar unidades en la nube en Files

La aplicación Files se conecta directamente a **Google Drive**, **Dropbox** y **OneDrive**. Tres pasos y tus carpetas en la nube aparecen junto a tu almacenamiento local.

### Paso 1: Añadir una unidad en la nube

Abre **Files** en el panel de ZimaOS y añade una unidad en la nube desde la lista de almacenamiento.

![Aplicación Files de ZimaOS mostrando las opciones de conexión de Google Drive, Dropbox y OneDrive](/images/guides/files-cloud-drive-mount.png)

### Paso 2: Autorizar tu dispositivo

Inicia sesión con tu cuenta en la nube y autoriza el acceso. Lo que autorizas es tu dispositivo ZimaOS, no a un tercero. Cada solicitud parte de tu propio hardware y viaja directamente entre tu dispositivo y tu proveedor de nube. Nada pasa por terceros, así que tu privacidad y la seguridad del acceso quedan en tus manos.

![Pantalla de autorización de Files de ZimaOS para conectar tu dispositivo con la cuenta en la nube](/images/guides/files-cloud-drive-authorize.png)

### Paso 3: Gestionarlo todo desde tu dispositivo

Una vez conectada, la unidad aparece en Files junto a tus espacios de almacenamiento locales. Tu dispositivo ZimaOS se convierte en el único lugar desde el que gestionar todo entre tus nubes: copia automática, migración por lotes o acceso directo, desde un solo panel.

![Files de ZimaOS mostrando unidades en la nube junto al almacenamiento local para una gestión unificada](/images/guides/files-cloud-drive-list.png)

## Trabajar entre lo local y la nube

Con la nube montada, mover datos entre ambos mundos deja de ser un proyecto.

Abre un archivo desde la nube, edítalo y vuelve a guardarlo. Arrastra una carpeta local a la unidad en la nube cuando quieras una copia en otro lugar. Si mueves suficientes datos a tu dispositivo, a menudo puedes bajar a un plan de nube más barato. La transferencia se ejecuta en Files con verificación, de modo que una migración grande no termina con archivos dañados en silencio.

Aquí tienes un traslado de una unidad en la nube al almacenamiento local, paso a paso.

### Paso 1: Seleccionar la carpeta

En Files, abre la unidad en la nube y selecciona la carpeta que quieres mover.

![Files de ZimaOS mostrando una carpeta en la nube seleccionada para migrar](/images/guides/files-cloud-migrate-select.png)

### Paso 2: Elegir el destino

Elige el espacio de almacenamiento de destino.

![Diálogo de migración de Files de ZimaOS para elegir el espacio de almacenamiento de destino](/images/guides/files-cloud-migrate-destination.png)

### Paso 3: Confirmar conflictos y originales

Antes de iniciar la transferencia, Files te pide que confirmes dos opciones.

- **Conflictos.** Si ya existe un archivo en el destino, elige qué hacer: omitirlo, sobrescribirlo o conservar ambos.
- **Originales.** Elige si los archivos originales permanecen en la unidad en la nube o se eliminan tras una migración verificada.

### Paso 4: Iniciar y verificar

Inicia la transferencia. El progreso se muestra en tiempo real. Al terminar, Files verifica el resultado y confirma que los archivos están intactos.

![Progreso de la migración de Files de ZimaOS mostrando la transferencia en tiempo real](/images/guides/files-cloud-migrate-progress.png)

![Migración de Files de ZimaOS completada con verificación que confirma que los archivos están intactos](/images/guides/files-cloud-migrate-verified.png)

## Varias cuentas y desconexión

Una sola cuenta rara vez cuenta toda la historia. Puedes conectar más de una cuenta del mismo servicio y cada una aparece en Files como su propia entrada. Dos Google Drive o dos OneDrive funcionan en paralelo como cualquier otro espacio de almacenamiento.

![Files de ZimaOS mostrando dos cuentas del mismo servicio en la nube como entradas separadas](/images/guides/files-cloud-multi-account.png)

Cuando una unidad en la nube haya cumplido su función, elimínala de Files. La conexión se cierra y los datos en la nube permanecen donde estaban, en el proveedor. Todo lo que ya hayas copiado al almacenamiento local se queda en local.

![Files de ZimaOS mostrando la opción de eliminar una unidad en la nube conectada](/images/guides/files-cloud-disconnect.png)

## La copia externa

Una unidad en la nube conectada asume una segunda función en el plan de copias de seguridad: se convierte en la copia externa de tu **[estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")**.

El almacenamiento local contiene la copia de trabajo, una segunda unidad guarda la copia local y la nube conserva una copia externa que sobrevive a un incendio o una inundación. Es la misma nube que ya utilizas, ahora dedicada a una tarea para la que resulta especialmente adecuada.

## Siguiente

- **[Estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")** — crea el plan de protección completo
- **[Copia de seguridad del teléfono](./phone-backup "Copia automáticamente el teléfono en ZimaOS con ZimaClient")** — lleva también a casa los datos del teléfono
