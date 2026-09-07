---
title: Conectar otro NAS
seo_title: "Conecta un NAS Synology a ZimaOS: mueve archivos o haz copias entre dispositivos"
description: "Conecta otro NAS a tu dispositivo ZimaOS. Monta carpetas compartidas por red, mueve archivos o mantén la conexión para copias entre dispositivos dentro de tu plan 3-2-1."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---
Conectar otro NAS a ZimaOS abre dos puertas a la vez. Puedes mover los archivos de forma definitiva o mantener la conexión y usarla para copias entre dispositivos. Ambas empiezan con el mismo paso: conectar los dos dispositivos a través de tu red. Esta página cubre el viaje completo, con Synology DSM como ejemplo.

## Por qué conectar

Una conexión, dos cosas que puedes hacer con ella:

- **Mover los archivos.** Lleva las carpetas que te importan a tu dispositivo ZimaOS, mantén el NAS antiguo funcionando durante la transición y limpia cuando estés listo.
- **Mantenerlo en el plan de copias.** Un NAS conectado se convierte en una fuente LAN o en un destino de segundo dispositivo dentro de tu **[plan de copias 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")**. Una conexión alimenta ambos trabajos.

## Conectar los dos dispositivos

SMB es el idioma común aquí. ZimaOS y otros sistemas NAS lo hablan bien, lo que hace posible una transferencia directa por red sin herramientas adicionales.

Antes de empezar, asegúrate de que las carpetas que piensas mover están compartidas en el dispositivo antiguo. En DSM, consulta **Panel de control > Carpeta compartida**. Si una carpeta se creó sin compartir, crea un nuevo directorio compartido en DSM y mueve a él los datos que quieras transferir.

1. Abre la aplicación **Files** en el panel de ZimaOS.
2. En la navegación izquierda, haz clic en el signo más junto a **Storage** y luego en **LAN Storage**.

![Aplicación Files de ZimaOS mostrando el signo más junto a Storage con la opción LAN Storage](/images/guides/files-lan-storage-option.webp)

3. En la ventana emergente, introduce la dirección IP del otro dispositivo y haz clic en **Connect**. Si la cuenta compartida tiene usuario y contraseña, introdúcelos también.

![Ventana emergente de conexión en Files de ZimaOS para introducir la dirección IP del otro NAS](/images/guides/files-lan-storage-connect.webp)

Cuando la conexión tiene éxito, el dispositivo aparece como dispositivo de red bajo Storage, con sus directorios compartidos a la derecha.

![Files de ZimaOS mostrando el otro NAS conectado con sus directorios compartidos](/images/guides/files-lan-storage-listed.webp)

## Copiar los archivos

1. Abre el directorio compartido y selecciona los archivos y carpetas que quieras mover. Puedes seleccionarlo todo.
2. Haz clic en el botón **Copy** de la esquina superior derecha.

![Directorio compartido en Files de ZimaOS con archivos seleccionados y el botón Copy](/images/guides/files-lan-copy.webp)

3. Ve al directorio de destino en tu almacenamiento ZimaOS y haz clic en **Paste**.

![Directorio de almacenamiento de ZimaOS con el botón Paste en la esquina superior derecha](/images/guides/files-lan-paste.webp)

{% note warn Comprobación de capacidad %}
Asegúrate de que la capacidad restante del almacenamiento de destino es mayor que el tamaño total de lo que vas a copiar. Después, deja que la transferencia se ejecute.
{% endnote %}

Copiar deja los originales en el dispositivo antiguo. No se borra nada hasta que decidas limpiar, lo que hace seguro verificar las copias antes.

Cuando la transferencia termina, los archivos aparecen en tu almacenamiento ZimaOS como cualquier otro contenido del dispositivo. Ábrelos, comprueba que ha llegado todo y el NAS antiguo puede seguir sirviendo hasta que estés listo para retirarlo.

![Files de ZimaOS mostrando las carpetas copiadas ya disponibles en el almacenamiento ZimaOS](/images/guides/files-lan-copied.webp)

## Tómate tu tiempo

No hay fecha límite para completar el cambio. Una migración por fases funciona mejor que una de golpe.

Empieza por las carpetas que usas cada día. Cuando vivan en el nuevo dispositivo, recorre el resto a tu ritmo. El dispositivo antiguo sigue sirviendo sus archivos hasta que se completa la última copia.

## Después de la migración

Una vez que los archivos están en el nuevo dispositivo, protégelos con un **[plan de copias 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")**. Una biblioteca recién migrada es exactamente lo que no quieres perder dos veces.

## Siguiente

- **[Estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")** — protege los archivos que acabas de mover
- **[Conectar unidades en la nube](./cloud-drive-connect "Conecta Google Drive, Dropbox o OneDrive a ZimaOS")** — la otra mitad de la historia externa
- **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** — trae también el resto de los datos del hogar
