---
title: Elige tu configuración de almacenamiento
seo_title: "Configuración de almacenamiento en ZimaOS: elige RAID, NAS o ZFS para tu servidor doméstico"
description: "Cómo configurar el almacenamiento en ZimaOS. Compara disco único, RAID y ZFS para distintos usos: NAS doméstico, servidor de aplicaciones, agente de IA y uso compartido de archivos en pequeñas empresas."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

La forma de configurar las unidades depende de lo que estés construyendo. Un servidor multimedia doméstico necesita un almacenamiento distinto del que requiere un agente de IA que funciona todo el día.

La configuración del almacenamiento depende del uso del dispositivo. A continuación se presentan cuatro opciones habituales. No necesitas saber de antemano qué es RAID.

## Casos de uso habituales

- **Datos familiares** — empieza con RAID 1 y pasa a RAID 5 cuando crezca la biblioteca
- **Servidor de aplicaciones** — SSD para la velocidad y RAID para la biblioteca multimedia
- **Agente de IA** — una sola unidad fiable con copias de seguridad periódicas
- **Pequeña empresa** — RAID 5, con un equilibrio entre capacidad y disponibilidad

![Panel de almacenamiento de ZimaOS en Ajustes con una vista general de discos, espacios de almacenamiento y opciones](/images/guides/storage-dashboard-overview.png)

### Fotos, vídeos y archivos familiares

Quieres un único lugar para todo lo que crea la familia: las fotos de cada teléfono, los vídeos domésticos y los documentos. El dispositivo está en el salón y lo utiliza toda la familia.

Empieza con dos unidades idénticas en RAID 1. Los datos se duplican. Si una unidad falla, no pierdes nada.

**[Conecta unidades en la nube](./cloud-drive-connect "Conecta Google Drive, Dropbox u OneDrive a ZimaOS para realizar copias de seguridad")** para añadir flexibilidad. Traslada bibliotecas multimedia grandes fuera de Google Drive o iCloud para reducir los costes de suscripción. Conserva una tercera copia externa de los archivos irremplazables como parte de una estrategia de copia de seguridad 3-2-1. Distribuye los proyectos compartidos entre el almacenamiento local y la nube para que los colaboradores puedan acceder a lo que necesitan.

Si la biblioteca supera la capacidad de dos unidades, RAID 5 con tres o más unidades permite seguir creciendo sin renunciar a la protección.

### Servidor de aplicaciones y host Docker

Ejecutas Jellyfin, Paperless, Pi-hole y algunas aplicaciones más. Para algunos datos te importa más la velocidad que la redundancia y, para otros, lo contrario.

Un solo SSD para los datos de las aplicaciones permite iniciar rápidamente los contenedores y acceder con agilidad a los archivos. Guarda el contenido multimedia y los documentos en un conjunto RAID 1 o RAID 5 independiente, donde la redundancia sí es importante.

### Servidor de agentes de IA

Ejecutas OpenClaw o Hermes. El agente funciona las 24 horas y escribe registros y memoria. Como los datos son principalmente texto, la capacidad rara vez es el problema. Lo importante es la fiabilidad.

Un solo SSD, un HDD básico o incluso la unidad del sistema funcionan bien. Los datos son principalmente texto: registros, archivos de memoria y configuraciones. Haz copias de seguridad periódicas. Si ejecutas varios agentes junto con otras aplicaciones, RAID 1 en dos SSD cuesta algo más, pero elimina un único punto de fallo.

### Uso compartido de archivos en una pequeña empresa

Varias personas de una oficina o un estudio necesitan acceso compartido a los archivos de los proyectos. La velocidad importa durante la jornada y la redundancia importa en todo momento.

RAID 5 con tres o más unidades equilibra capacidad, velocidad y protección. Una unidad puede fallar sin que nadie lo note. Su mayor ventaja es que puedes añadir más unidades con el tiempo, a medida que aumentan las necesidades de almacenamiento, sin tener que reconstruir desde cero.

## Cómo configurarlo

ZimaOS se encarga de la configuración. Al conectar un disco nuevo, aparecerá una notificación que te pedirá configurarlo.

![Notificación de ZimaOS que solicita configurar un disco recién conectado cuando se detecta la unidad](/images/guides/storage-new-disk-notification.png)

1. Ve a **Ajustes > Almacenamiento**.
2. Haz clic en **Combinar** para abrir el asistente de configuración de discos.

![Asistente de configuración de almacenamiento de ZimaOS abierto desde el botón Combinar y con las opciones de configuración de discos](/images/guides/storage-combine-wizard.png)

3. Elige la configuración y selecciona las unidades.
4. Asigna un nombre al conjunto y confirma.

![Pantalla de creación de almacenamiento de ZimaOS donde se seleccionan las unidades, se asigna un nombre al conjunto y se confirma la configuración](/images/guides/storage-create-name.png)

## Después de crearlo

Una vez configurado el almacenamiento, el conjunto aparecerá con su estado en **Ajustes > Almacenamiento**. Un conjunto en buen estado muestra un indicador verde. Desde esta página puedes comprobar la salud de los discos, la capacidad disponible y las velocidades de lectura y escritura.

![Página de estado del almacenamiento de ZimaOS con la salud del conjunto, la capacidad disponible y las velocidades de lectura y escritura](/images/guides/storage-disk-status.png)

Si falla una unidad de un conjunto RAID, el estado cambiará a degradado. Los datos seguirán siendo totalmente accesibles y las operaciones de lectura y escritura continuarán con normalidad. Sustituye la unidad averiada y ZimaOS te guiará durante la reconstrucción.

Los discos individuales y las unidades USB muestran una vista de estado más sencilla con su salud y capacidad. No requieren gestión RAID.

Las unidades USB siguen la misma lógica que los HDD y SSD internos: conecta una y podrás utilizarla como almacenamiento, añadirla a un conjunto o ampliar el espacio existente.

Para consultar los pasos detallados de cada nivel RAID, revisa **[Opciones RAID](./raid-options "Explicación de los niveles RAID y JBOD con instrucciones de configuración paso a paso")**. Si quieres usar ZFS para obtener instantáneas e integridad de datos avanzada, la **[guía de configuración de ZFS](../developer/zfs-setup "Configura ZFS en ZimaOS para obtener instantáneas, sumas de comprobación e integridad de datos")**, en la sección Desarrollo, explica el proceso.

Una vez configurado el almacenamiento, el siguiente paso es importar los datos. **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** y **[Copia de seguridad del ordenador](./computer-backup "Realiza una copia de seguridad de tu ordenador en ZimaOS mediante Finder, el Explorador o sincronización")** cubren los dispositivos que utilizas a diario. **[Mover datos entre unidades](./data-migration "Mueve imágenes Docker, datos de aplicaciones y carpetas entre unidades en ZimaOS")** te ayuda cuando una unidad se llena. **[Rutas de almacenamiento de aplicaciones](./docker-app-paths "Dónde guardan las aplicaciones sus datos y cómo moverlos entre unidades")** permite dirigir cada aplicación a la unidad adecuada.
