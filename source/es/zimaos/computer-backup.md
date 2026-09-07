---
title: Copia de seguridad del ordenador
seo_title: "Copia de seguridad de Mac y Windows en ZimaOS: Finder, Explorador y sincronización programada"
description: "Realiza copias de seguridad de tu ordenador en ZimaOS con ZimaClient. Inicia sesión una vez, accede a carpetas compartidas desde Finder o el Explorador y protege las carpetas importantes."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

La misma copia de seguridad que protege tu teléfono funciona también con el ordenador. Instala el cliente de escritorio, inicia sesión una vez y las carpetas que te importan seguirán llegando a tu propio dispositivo.

## Antes de empezar

El dispositivo ZimaOS debe estar encendido y conectado a la red. Para la primera conexión, el ordenador y el dispositivo deben encontrarse en la misma red. Ten preparados tu cuenta y contraseña de ZimaOS. Si acabas de sacar el dispositivo de la caja, sigue primero la guía **[Primeros pasos](./get-started "Configura ZimaOS desde el primer arranque con ZimaClient y la creación de una cuenta")**.

## Instala ZimaClient

Descarga ZimaClient para **[Windows o macOS](https://www.zimaspace.com/zimaos/download "Descarga la aplicación de escritorio ZimaClient para Windows y macOS")** y ábrelo.

## Inicia sesión y conecta

1. Abre ZimaClient. La aplicación busca en la red local y muestra los dispositivos NAS con ZimaOS que encuentra. Selecciona el tuyo y haz clic para conectarte.

![Pantalla de detección de dispositivos de ZimaClient con los dispositivos NAS que ejecutan ZimaOS encontrados en la red local](/images/guides/zimaclient-desktop-discovery.webp)

2. Selecciona el dispositivo e inicia sesión con tu cuenta de ZimaOS. Marca **recordar contraseña** para mantener la sesión iniciada.

![Pantalla de inicio de sesión de ZimaClient para escritorio con los campos de nombre de usuario y contraseña de la cuenta ZimaOS](/images/guides/zimaclient-desktop-sign-in.webp)

3. Configura el montaje predeterminado para que el espacio de almacenamiento aparezca en la sección de red de Finder en macOS o del Explorador de archivos en Windows. Una vez montado, se comporta como una unidad USB que siempre está conectada. Los programas de edición de vídeo y otras aplicaciones del ordenador pueden abrir archivos directamente desde el NAS como si estuvieran en un disco local.

![Pantalla de ZimaClient para escritorio donde se configura el montaje de almacenamiento predeterminado para Finder y el Explorador de archivos](/images/guides/computer-zimaclient-mount.webp)

Después del primer inicio de sesión, el ordenador queda vinculado al dispositivo.

{% note tip Acceso remoto %}
El acceso remoto se configura automáticamente durante el primer inicio de sesión. A partir de entonces, el portátil puede acceder al NAS desde cualquier lugar a través del canal cifrado de igual a igual, sin ninguna configuración adicional, siempre que hayas activado la función de acceso remoto en **Ajustes > Red** en el dispositivo ZimaOS.
{% endnote %}

## Accede a carpetas compartidas desde Finder

Después de conectarte, el almacenamiento de ZimaOS aparece directamente en Finder en macOS y en el Explorador de archivos en Windows. Explora las carpetas compartidas como cualquier otra carpeta del ordenador y arrastra archivos en ambas direcciones sin utilizar una interfaz web.

![Ventana de Finder en macOS con carpetas compartidas de ZimaOS accesibles como carpetas locales](/images/guides/computer-finder-smb.png)

El uso compartido de archivos está activado de forma predeterminada mediante **[SMB](./smb-troubleshooting "Comparte archivos mediante SMB para que aparezcan en Finder y en el Explorador de archivos")** y protegido por tu cuenta de ZimaOS.

## Elige las carpetas que quieres copiar

Selecciona las carpetas importantes del ordenador: documentos, proyectos y fotos.

1. En ZimaClient, haz clic en **Copia de seguridad**.
2. Haz clic en **Añadir directorio de copia de seguridad**.
3. Selecciona las carpetas que quieras copiar.

Solo tienes que elegirlas una vez. A partir de entonces, ZimaClient las mantiene respaldadas automáticamente, en segundo plano y con la programación que definas. No necesitas acordarte de ejecutarlo.

![Pantalla de ZimaClient para escritorio donde se seleccionan las carpetas del ordenador que se incluirán en la copia de seguridad](/images/guides/computer-zimaclient-folders.png)

## Elige el destino

Dirige la copia a un espacio de almacenamiento propio —un solo disco o un conjunto RAID— y nunca a la unidad del sistema ZimaOS. La unidad del sistema suele ser la más pequeña y las carpetas del ordenador pueden llenarla rápidamente. Consulta **[Configuración del almacenamiento](./storage-setup "Elige la configuración de almacenamiento y las opciones RAID que mejor se adapten a tus necesidades")** para planificar tus espacios de almacenamiento.

![Selector de destino de ZimaClient para escritorio con los espacios de almacenamiento disponibles para la copia de seguridad](/images/guides/computer-zimaclient-destination.png)

## Inicia la copia de seguridad

Confirma e inicia el proceso. La primera copia tarda más porque transfiere todo lo que has seleccionado. Las siguientes solo transfieren los cambios.

![Confirmación de la copia de seguridad en ZimaClient para escritorio con el botón de inicio](/images/guides/computer-zimaclient-start.png)

## Restaura archivos

Recuperar los archivos es tan sencillo como copiarlos.

Abre el almacenamiento de ZimaOS en Finder o en el Explorador de archivos y arrastra los archivos de vuelta al ordenador. La copia de carpetas protege los archivos donde se encuentra tu trabajo. En un Mac, **[Copia de seguridad con Time Machine](./time-machine-backup "Realiza una copia de seguridad de tu Mac en el NAS a través de la red con Time Machine")** añade la recuperación completa del sistema.

Antes de confiar en una copia de seguridad, restaura un archivo y ábrelo. Una copia que nunca has probado es un plan que nunca has probado.

## Velocidad de la copia de seguridad

En teoría, un ordenador conectado por Wi-Fi de 5 GHz alcanza unos 100 MB/s. En un hogar habitual, las transferencias reales por Wi-Fi se sitúan entre 40 y 80 MB/s, dependiendo del router y de la saturación del espectro. El NAS puede seguir ese ritmo sin esfuerzo y ZimaOS transfiere grandes lotes de archivos pequeños con la misma fluidez que vídeos grandes, de modo que las carpetas de proyectos repletas de archivos diminutos no son más lentas que las películas.

Estos son los factores que realmente cambian la cifra, por orden de impacto:

1. **Cable frente a Wi-Fi.** Un cable gigabit ofrece entre 110 y 125 MB/s de forma estable y predecible. Wi-Fi comparte el aire con todos los dispositivos de la casa y pierde velocidad con la distancia y las paredes.
2. **El router.** Es la mejora individual más importante. En pruebas de la comunidad, sustituir el router del proveedor por uno decente hizo que la misma transferencia Wi-Fi pasara de 18 MB/s a unos 90 MB/s.
3. **Distancia e interferencias.** Estar cerca del router con 5 GHz es mejor que estar lejos, y un canal saturado por vecinos y dispositivos IoT reduce el tiempo de transmisión disponible.
4. **Todo lo demás apenas influye.** El puerto de red del dispositivo, los discos internos y la combinación de archivos rara vez son el cuello de botella una vez resueltos los tres primeros factores.

Si tu ordenador tiene Thunderbolt, **[Conexión directa por Thunderbolt](./thunderbolt-direct-connect "Conecta tu ordenador a ZimaOS mediante Thunderbolt para obtener la máxima velocidad")** supera ampliamente al Wi-Fi y solo queda limitada por las unidades instaladas en el dispositivo.

Para la primera copia grande, conecta el cable y deja que termine.

## Problemas habituales

**La copia de seguridad se interrumpió.** ZimaOS reanuda automáticamente el proceso donde se detuvo. Vuelve a conectar el dispositivo y continuará.

**Has sustituido el ordenador.** Instala ZimaClient, inicia sesión con la misma cuenta de ZimaOS y vuelve a añadir las carpetas. Los datos del NAS no se modifican.

**El destino se está quedando sin espacio.** Dirige la copia a un espacio de almacenamiento mayor o utiliza la herramienta integrada de **[Migración de datos](./data-migration "Mueve imágenes Docker, datos de aplicaciones y carpetas entre unidades en ZimaOS")** para liberar espacio.

## Consejos prácticos

{% note tip %}
- Antes de sustituir un ordenador, abre ZimaClient una vez y deja que termine una última copia de seguridad.
- Una carpeta sincronizada con la nube no es una copia de seguridad: eliminar un archivo localmente lo elimina en todas partes. Una copia de seguridad conserva versiones y solo escribe hacia delante.
{% endnote %}

## Siguiente

- **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** — la misma sencillez para el teléfono que llevas en el bolsillo
- **[Estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos con la regla de copia de seguridad 3-2-1 en tu NAS")** — una sola copia no es un plan
