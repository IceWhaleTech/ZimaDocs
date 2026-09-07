---
title: Copia de seguridad de Time Machine en ZimaOS
seo_title: "Copia de seguridad de Time Machine en tu NAS: protege un Mac con ZimaOS"
description: "Crea copias de seguridad del Mac en ZimaOS con Time Machine. Configura un recurso compartido Samba para Time Machine y conéctalo desde Ajustes del Sistema de macOS."
type: Docs
author: admin
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Si utilizas un Mac, Time Machine es la solución de copia de seguridad que ya conoces. Configúrala para que utilice tu dispositivo ZimaOS y todos los Mac de la casa tendrán copias automáticas completas sin pagar otra suscripción.

## Paso 1: Configurar una carpeta compartida en ZimaOS

1. Abre el panel de ZimaOS y accede a la página **Files**.
2. Busca o crea la carpeta que quieras utilizar como destino de las copias, por ejemplo **Time Machine**.
3. Haz clic con el botón derecho en la carpeta y selecciona **Share via Samba**.

![Menú contextual de ZimaOS Files con la opción Share via Samba para una carpeta](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)

4. En la ventana emergente, confirma el nombre y la ubicación de la carpeta y marca **Configure for Time Machine**. Se utilizará el usuario predeterminado de ZimaOS para la autenticación. También puedes añadir otros usuarios.

![Ventana de recurso compartido Samba con la opción Configure for Time Machine activada](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)

5. Haz clic en **Create**.

![Creación de la carpeta compartida de ZimaOS completada para la copia de Time Machine](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)

## Paso 2: Conectar Time Machine en el Mac

1. Abre **Ajustes del Sistema** y accede a **Time Machine**.

![Ajustes del Sistema de macOS con las opciones de copia de seguridad de Time Machine](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)

2. Haz clic en **Añadir disco de copia de seguridad**.

![Ajustes de Time Machine con el botón Añadir disco de copia de seguridad](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)

3. Selecciona la carpeta compartida que acabas de crear en ZimaOS y haz clic en **Configurar disco**.

![Lista de discos de Time Machine con la carpeta compartida de ZimaOS seleccionada](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)

4. Cuando se solicite, introduce el nombre de usuario y la contraseña de ZimaOS.

![Solicitud de macOS para introducir el usuario y la contraseña del recurso compartido de Time Machine](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)

## Paso 3: Iniciar la copia de seguridad

Cuando el Mac y el dispositivo ZimaOS están en la misma red, Time Machine encuentra la carpeta de destino y comienza a crear la copia automáticamente.

![Interfaz de Time Machine con la primera copia de seguridad en curso](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)

{% note tip Solución de problemas %}
Si la copia falla, comprueba la conexión de red y confirma que el servicio SMB esté activado en el dispositivo. Si macOS no te permite escribir la contraseña, haz clic primero en una zona vacía y vuelve a seleccionar el campo de contraseña.
{% endnote %}

## Restaurar archivos

Cuando necesites recuperar un archivo, restáuralo desde la interfaz de Time Machine. La guía de Apple explica el proceso en detalle: [Restaurar elementos de los que se ha creado una copia con Time Machine en el Mac](https://support.apple.com/es-es/guide/mac-help/mh11422/mac).

## Siguiente paso

- **[Estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")** — Time Machine es una parte del plan; añade también una copia externa
- **[Copia de seguridad del ordenador](./computer-backup "Copia el ordenador en ZimaOS mediante Finder, el Explorador o sincronización")** — opciones para proteger todos los ordenadores de la casa
