---
title: Transferencia manual desde Synology
seo_title: "Transferencia manual desde Synology: monta recursos DSM y copia archivos a ZimaOS"
description: "Transfiere archivos manualmente desde Synology DSM a ZimaOS. Monta recursos DSM como LAN Storage en Files y copia los archivos paso a paso, teniendo en cuenta la capacidad y las cuentas."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Este es el manual paso a paso para mover archivos desde un dispositivo Synology. Si antes quieres conocer el método recomendado y una estrategia por fases, empieza por **[Migrar desde otro NAS](./synology-to-zimacube-migration "Mueve archivos desde un NAS Synology a ZimaOS mediante un proceso gradual")**.

## Montar recursos compartidos de DSM en Files

SMB es el lenguaje común en este proceso. Tanto Synology DSM como ZimaOS lo admiten correctamente, lo que permite una transferencia directa por red sin herramientas adicionales.

Antes de empezar, comprueba que las carpetas que vas a mover estén compartidas en DSM. Si una carpeta se creó sin compartirla, crea un nuevo directorio compartido en DSM y mueve allí los datos que quieras transferir.

1. Abre la aplicación Files en el panel de ZimaOS.
2. En la navegación izquierda, busca el signo más junto a Storage, haz clic en él y selecciona **LAN Storage**.

![Aplicación ZimaOS Files con el signo más junto a Storage y la opción LAN Storage](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)

3. En la ventana emergente, introduce la dirección IP del dispositivo Synology y haz clic en **Connect**. Si la cuenta compartida tiene nombre de usuario y contraseña, introdúcelos también.

![Ventana de conexión de ZimaOS Files para introducir la dirección IP de Synology DSM](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)

Cuando se establezca la conexión, el dispositivo Synology aparecerá como dispositivo de red bajo Storage y sus directorios compartidos se mostrarán a la derecha.

![ZimaOS Files con el dispositivo Synology conectado y la lista de directorios compartidos](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)

## Copiar los archivos

1. Abre el directorio compartido y selecciona los archivos y carpetas que quieras mover. Puedes seleccionarlo todo.
2. Haz clic en el botón **Copy** de la esquina superior derecha.

![Directorio compartido de Synology en ZimaOS Files con archivos seleccionados y el botón Copy](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

3. Accede al directorio de destino del almacenamiento de ZimaOS y haz clic en **Paste**.

![Directorio de almacenamiento de ZimaOS con el botón Paste en la esquina superior derecha](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)

{% note warn Comprobar la capacidad %}
Comprueba que la capacidad libre del almacenamiento de destino sea superior al tamaño total de los datos que vas a copiar. Después, deja que la transferencia termine.
{% endnote %}

## Después de la migración

Cuando los archivos estén en el dispositivo nuevo, protégelos con un **[plan de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")**. Una biblioteca recién migrada es precisamente el tipo de información que no quieres perder por segunda vez.
