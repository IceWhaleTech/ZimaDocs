---
title: Copia de seguridad del teléfono
seo_title: "Copia de seguridad del teléfono con ZimaOS: protege automáticamente fotos y archivos"
description: "Realiza una copia de seguridad de tu teléfono en ZimaOS con ZimaClient. Copia fotos y archivos automáticamente, elige álbumes de iOS y utiliza tu propio almacenamiento. Explóralo todo desde una sola biblioteca."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Hacer copias de seguridad de las fotos no suele ser una decisión difícil. El problema aparece años después, cuando el cajón contiene tres teléfonos antiguos y la factura de la nube ha ido creciendo discretamente junto con la biblioteca. Tu propio dispositivo ofrece un final diferente: las fotos de todos los teléfonos que has tenido se reúnen en una biblioteca y toda la historia permanece en un solo lugar.

## Antes de empezar

El dispositivo ZimaOS debe estar encendido y conectado a la red. Para la primera conexión, el teléfono y el dispositivo deben utilizar la misma red Wi-Fi. Ten preparados tu cuenta y contraseña de ZimaOS. Si acabas de sacar el dispositivo de la caja, sigue primero la guía **[Primeros pasos](./get-started "Configura ZimaOS desde el primer arranque con ZimaClient y la creación de una cuenta")**.

## Instala ZimaClient

Descarga ZimaClient para **[iOS](https://www.zimaspace.com/zimaos/download "Descarga la aplicación ZimaClient para iOS desde App Store")** desde App Store o para **[Android](https://www.zimaspace.com/zimaos/download "Descarga la aplicación ZimaClient para Android desde Google Play")** desde Google Play, y ábrelo.

## Inicia sesión y conecta

1. Abre ZimaClient. La aplicación busca en la red local y muestra los dispositivos NAS con ZimaOS que encuentra.

![Pantalla de detección de dispositivos de ZimaClient con los dispositivos NAS que ejecutan ZimaOS encontrados en la red local](/images/guides/zimaclient-device-discovery.jpg)

2. Toca tu dispositivo e inicia sesión con tu cuenta de ZimaOS.

![Pantalla de inicio de sesión de ZimaClient con los campos de nombre de usuario y contraseña de la cuenta ZimaOS](/images/guides/zimaclient-sign-in.jpg)

Después del primer inicio de sesión, el teléfono queda vinculado al dispositivo.

{% note tip Acceso remoto %}
El acceso remoto se configura automáticamente, por lo que las copias de seguridad continúan cuando estás fuera de casa, siempre que hayas activado la función de acceso remoto en **Ajustes > Red** en el dispositivo ZimaOS.
{% endnote %}

Si utilizas más de un dispositivo ZimaOS, asigna a cada uno un icono personalizado para distinguir fácilmente tus servidores domésticos. En el panel de ZimaOS, abre **Ajustes > General** y haz clic en el botón de configuración situado junto a **Información del dispositivo**. Elige iconos con personalidad. Uno de los nuestros lleva las ondas de púlsar de la portada de un álbum clásico, porque un servidor doméstico nunca deja de latir con datos.

<div style="display:flex; align-items:stretch; gap:16px;">
  <img src="/docs/images/guides/zimaclient-device-icons.png" alt="Página General de Ajustes de ZimaOS con iconos de dispositivo personalizados, uno inspirado en la portada del álbum con ondas de púlsar" style="flex:0 0 62%; max-width:62%; height:auto;">
  <img src="/docs/images/guides/zimaclient-phone-device-icon.jpg" alt="Pantalla de ZimaClient en el teléfono con dispositivos NAS que ejecutan ZimaOS y sus iconos personalizados" style="flex:0 0 30%; max-width:30%; object-fit:cover; object-position:top;">
</div>

## Elige qué quieres copiar

Selecciona los álbumes que quieras de la fototeca de iOS. Puedes elegir álbumes concretos en lugar de toda la biblioteca, para dejar fuera de la copia las capturas de pantalla y las descargas si lo prefieres.

Empieza por los ajustes de copia de seguridad, donde eliges qué incluye. Después, revisa tus álbumes y selecciona los importantes.

<div style="display:flex; align-items:flex-start; justify-content:center; gap:40px;">
  <img src="/docs/images/guides/zimaclient-album-backup-setting.png" alt="Página de ajustes de copia de seguridad de ZimaClient con las opciones que determinan qué incluye la copia de fotos" style="flex:0 0 42%; max-width:42%; height:auto;">
  <img src="/docs/images/guides/zimaclient-album-selection.png" alt="Pantalla de selección de álbumes de ZimaClient con los álbumes de Fotos de iOS y casillas de selección" style="flex:0 0 42%; max-width:42%; height:auto;">
</div>

## Elige el destino

El destino predeterminado se crea automáticamente. Cuando dispongas de un espacio de almacenamiento propio, dirige allí la copia —un conjunto RAID o un disco dedicado— en lugar de utilizar la unidad del sistema ZimaOS. La unidad del sistema suele ser la más pequeña y las fotos pueden llenarla rápidamente. Consulta **[Configuración del almacenamiento](./storage-setup "Elige la configuración de almacenamiento y las opciones RAID que mejor se adapten a tus necesidades")** para planificar tus espacios de almacenamiento.

## Inicia la copia de seguridad

Confirma e inicia el proceso. La primera copia tarda más porque transfiere toda la selección. Las siguientes solo transfieren los cambios.

![Pantalla de confirmación de la copia de seguridad de ZimaClient con el botón de inicio antes de la primera ejecución](/images/guides/zimaclient-backup-start.webp)

Así se ve una copia desde el teléfono: la vista previa de fotos y una foto abierta en detalle.

<div style="display:flex; align-items:flex-start; justify-content:center; gap:40px;">
  <img src="/docs/images/guides/zimaclient-photo-preview.webp" alt="Vista previa de fotos de ZimaClient con las fotos copiadas disponibles para explorar desde el teléfono" style="flex:0 0 42%; max-width:42%; height:auto;">
  <img src="/docs/images/guides/zimaclient-photo-detail.webp" alt="Vista detallada de una foto en ZimaClient con una imagen de la copia abierta a pantalla completa" style="flex:0 0 42%; max-width:42%; height:auto;">
</div>

Las opciones de copia van más allá. Las Live Photos de iOS se transfieren conservando el movimiento. La copia automática y la copia mediante datos móviles se activan con simples interruptores, y el espacio disponible en el destino aparece en la misma pantalla para que siempre sepas cuánto queda.

<img src="/docs/images/guides/zimaclient-more-options.png" alt="Opciones de copia de seguridad de ZimaClient con compatibilidad con Live Photos, interruptores de copia y espacio disponible en el destino" style="display:block; margin:0 auto; width:35%; height:auto;">

## Vincula una carpeta

La opción **Vincular una carpeta** dirige la copia a una carpeta que ya existe en ZimaOS. Sirve para incorporar a la misma biblioteca contenido que no procede del teléfono.

Piensa en las carpetas que ya tienes: material grabado con una cámara profesional o de acción, copias de teléfonos antiguos o archivos trasladados desde un ordenador anterior. Vincula cualquiera de ellas y el contenido aparecerá en ZimaClient en tu teléfono, organizado junto con todo lo demás que copies. Una sola biblioteca y un único lugar para explorarlo todo.

## Velocidad de la copia de seguridad

En teoría, un teléfono conectado a una red local en buen estado puede superar los 50 MB/s de ancho de banda de transferencia. La cifra real depende principalmente de una sola cosa: tu Wi-Fi.

**La calidad del Wi-Fi es el factor más importante.** Una conexión de 5 GHz cerca del router es mucho más rápida que una de 2.4 GHz desde otra habitación. La distancia, las paredes y un canal saturado reducen la velocidad. Estar cerca del router con 5 GHz supera cualquier otro ajuste que puedas realizar.

Todo lo demás rara vez es el cuello de botella. El puerto de red del dispositivo es más rápido que la ruta Wi-Fi del teléfono, por lo que nunca limita la transferencia. Los discos duros leen y escriben a 100 MB/s o más, muy por encima de lo que puede enviar el enlace del teléfono. En la práctica, el rendimiento del propio teléfono tampoco es un factor.

{% note tip Optimización de archivos pequeños de ZimaOS %}
Las bibliotecas de fotos están compuestas principalmente por archivos pequeños y ZimaOS está diseñado precisamente para ellos. Gracias a una optimización profunda de archivos pequeños en el lado receptor, los lotes de capturas, clips cortos y ráfagas se transfieren con la misma fluidez que los vídeos grandes.
{% endnote %}

La conclusión práctica es sencilla: para la primera copia grande, coloca el teléfono junto al router y deja que termine.

## Consejos prácticos

{% note tip %}
- Ejecuta la primera copia grande mediante Wi-Fi y no con datos móviles para evitar límites de consumo.
- Antes de cambiar de teléfono, abre ZimaClient una vez y deja que termine una última copia.
- Cada miembro de la familia inicia sesión con su propia cuenta de ZimaOS, de modo que las fotos de cada persona permanecen en su propia biblioteca. La **[Fototeca familiar](./family-photo-library "Crea una fototeca familiar en ZimaOS con las fotos de todos")** permite reunirlas cuando quieras.
- Si la copia se detiene, acercarse al router resuelve la mayoría de los casos.
{% endnote %}

## Siguiente

- **[Copia de seguridad del ordenador](./computer-backup "Realiza una copia de seguridad de tu ordenador en ZimaOS mediante Finder, el Explorador o sincronización")** — incorpora también el portátil
- **[Vista previa de fotos](./photos-preview "Explora tus fotos de ZimaOS en los modos cuadrícula, cascada y justificado")** — explora la biblioteca cuando ya esté importada
- **[Estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos con la regla de copia de seguridad 3-2-1 en tu NAS")** — una sola copia no es un plan
