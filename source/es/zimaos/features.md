---
title: Funciones de ZimaOS
seo_title: "Funciones de ZimaOS: acceso remoto, almacenamiento, RAID y App Store"
description: "Un recorrido por el panel de ZimaOS. Acceso remoto, uso compartido de archivos, gestión del almacenamiento, opciones RAID, máquinas virtuales y App Store con instalación de aplicaciones Docker en un clic."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Si acabas de seguir la guía **[Primeros pasos](./get-started "Configura ZimaOS desde el primer arranque con ZimaClient y la creación de una cuenta")**, tu dispositivo ya está conectado y preparado. El acceso remoto está activo, el almacenamiento está compartido y tu cuenta está configurada. Ese primer momento en el que todo el panel cobra vida resulta realmente satisfactorio.

Esta página recorre lo que puede hacer ZimaOS e indica dónde encontrar las guías detalladas de cada función. Piensa en ella como un mapa: si algo te interesa, sigue el enlace para profundizar.

## Accede a tu dispositivo desde cualquier lugar

La mayoría de los dispositivos NAS obligan a configurar el reenvío de puertos o una VPN para conectarse desde fuera de casa. ZimaOS no. La primera vez que te conectas mediante ZimaClient, se crea automáticamente un canal cifrado de igual a igual. A partir de entonces, puedes acceder al dispositivo desde cualquier lugar.

Tus datos siguen siendo privados. La conexión está cifrada de extremo a extremo y no hay ningún servidor de terceros en medio. Puedes desactivar el acceso remoto en Ajustes cuando quieras.

No recopilamos ni almacenamos tus archivos personales, registros de conexión o datos de uso, ni tenemos acceso a ellos. El acceso remoto funciona mediante un canal cifrado de igual a igual. Ningún servidor de terceros se interpone entre tú y tu dispositivo. Nuestras prácticas de privacidad están completamente documentadas y abiertas a la revisión de la comunidad.

**[Política de privacidad](../help-center/privacy-policy "Política de privacidad de ZimaOS sobre el tratamiento de tus datos y conexiones")**

<table style="width:100%; table-layout:fixed;">
  <tr>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885802_zimaclient-ios-v-1-6-dash.png" alt="Pantalla del panel de ZimaClient para iOS con el estado del dispositivo, el uso del almacenamiento y la información del sistema" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885801_zimaclient-ios-v-1-6-files.png" alt="Pantalla de archivos de ZimaClient para iOS con las carpetas compartidas y los archivos del servidor doméstico" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885803_zimaclient-ios-v-1-6-app.png" alt="Pantalla de aplicaciones de ZimaClient para iOS con las aplicaciones instaladas y su estado de ejecución" style="max-width:100%; height:auto;">
    </td>
    <td style="width:25%; text-align:center; vertical-align:top; padding:4px;">
      <img src="https://manage.icewhale.io/api/static/docs/1786263885804_zimaclient-ios-v-1-6-photos.png" alt="Pantalla de fotos de ZimaClient para iOS con la fototeca sincronizada desde el servidor doméstico" style="max-width:100%; height:auto;">
    </td>
  </tr>
</table>

**[Acceso remoto](./remote-access "Configura el acceso remoto para poder llegar a tu servidor doméstico desde cualquier lugar")** · **[Descargar ZimaClient](./zimaclient-install "Instala y configura ZimaClient en el ordenador y el móvil para acceder al dispositivo")** · **[ID de red](./remote-id "Encuentra el ID de red de ZimaOS y úsalo para conectarte desde otros dispositivos")**

## Guarda, comparte y protege tus archivos

La configuración del almacenamiento depende del uso que vayas a dar al dispositivo.

Para la mayoría de los hogares recomendamos empezar con dos unidades idénticas en RAID 1. Los datos se duplican en ambas unidades, de modo que si una falla no pierdes nada. Los archivos aparecen en Finder y en el Explorador de archivos de todos los ordenadores de la casa, sin las esperas de carga ni las cuotas mensuales del almacenamiento en la nube. Si quieres mantener una copia externa de tus archivos más importantes, la aplicación Files puede conectarse a Google Drive, Dropbox u OneDrive para realizar copias selectivas.

Tu música, tus fotos y tus vídeos se transmiten directamente desde el dispositivo a cualquier pantalla de la red. Como capa adicional de protección, la aplicación Files puede copiar de forma selectiva tus carpetas más importantes en Google Drive, Dropbox u OneDrive.

![Página de ajustes de almacenamiento de ZimaOS con la lista de discos y las opciones para combinar unidades en un almacenamiento RAID](https://manage.icewhale.io/api/static/docs/1786262061523_zimaos-storage-settings.png)

Si gestionas una pequeña empresa o conservas archivos familiares irremplazables, RAID 5 ofrece más espacio utilizable y mantiene la protección frente al fallo de una unidad. Empieza con tres unidades y añade más después. Los datos permanecen disponibles incluso mientras sustituyes un disco averiado. ZimaOS también admite RAID 0, RAID 1 y RAID 6 para otros escenarios.

Si necesitas instantáneas, sumas de comprobación e integridad de datos avanzada, también puedes usar **[ZFS](../developer/zfs-setup "Configura ZFS en ZimaOS para obtener instantáneas, sumas de comprobación e integridad de datos")**.

Una vez configurado, el almacenamiento aparece automáticamente en la red local: en Mac se muestra en Finder y, en Windows, en el Explorador de archivos. El acceso está protegido por tu cuenta de ZimaOS. Puedes crear cuentas independientes para familiares o compañeros de equipo, cada una con sus propios permisos de lectura y escritura.

**[Configuración del almacenamiento](./storage-setup "Elige la configuración de almacenamiento y las opciones RAID que mejor se adapten a tus necesidades")** · **[Uso compartido de archivos SMB](./smb-troubleshooting "Comparte archivos mediante SMB para que aparezcan en Finder y en el Explorador de archivos")** · **[Conectar unidades en la nube](./cloud-drive-connect "Conecta Google Drive, Dropbox u OneDrive a ZimaOS para realizar copias de seguridad")** · **[Opciones RAID](./raid-options "Explicación de los niveles RAID y JBOD con instrucciones de configuración paso a paso")** · **[Mover datos entre unidades](./data-migration "Mueve imágenes Docker, datos de aplicaciones y carpetas entre unidades en ZimaOS")**


## Instala aplicaciones con un clic

Aquí es donde el dispositivo deja de limitarse a guardar archivos y se convierte en un servidor doméstico. La App Store se amplió considerablemente en ZimaOS 1.7.

**Instalación con un clic.** Hay cientos de aplicaciones disponibles con un solo clic y no necesitas conocer Docker. Instala Pi-hole para bloquear anuncios en toda la red doméstica o Jellyfin para crear tu propio servidor de streaming. La interfaz está diseñada para explorar, con categorías y recomendaciones que te ayudan a encontrar lo que necesitas.

**Gestiona todo en un solo lugar.** Todas las aplicaciones instaladas se encuentran en una única página. Puedes ver cuáles están en ejecución, buscar actualizaciones y ajustar la configuración básica sin tocar un archivo de configuración. Si algo falla, dispones de registros integrados y un terminal cuando los necesites.

**Para usuarios avanzados.** Importa cualquier archivo YAML de Docker Compose, edita directamente las configuraciones y ejecuta conjuntos de varios contenedores con control completo de su ciclo de vida. ZimaOS gestiona la capa de Docker para que puedas centrarte en lo que estás creando.

La comunidad mantiene varias tiendas de terceros con cientos de aplicaciones adicionales. Tu hardware, tus aplicaciones, tus reglas. Nada depende de una suscripción ni de la nube de otra persona.

**[Descripción general de App Store](./app-store/ "Explora las categorías de App Store para contenido multimedia, aplicaciones autoalojadas e IA")** — streaming multimedia, aplicaciones autoalojadas, IA y proyectos creativos

## Importa primero tus datos

Sé que la App Store resulta tentadora. Probablemente ya la hayas recorrido y tengas tres cosas que quieres probar. Pero si pudiera repetir mi primera configuración, organizaría el almacenamiento antes de instalar nada. Evita problemas más adelante.

Empieza por las unidades. Un solo disco es la opción más sencilla. Dos unidades idénticas en RAID 1 aportan redundancia sin complejidad. RAID 5 abarca tres o más discos cuando necesitas más espacio con protección. Las unidades USB sirven como espacio adicional o almacenamiento portátil. La página **[Configuración del almacenamiento](./storage-setup "Elige la configuración de almacenamiento y las opciones RAID que mejor se adapten a tus necesidades")** asigna una configuración recomendada a cada escenario, mientras que **[Opciones RAID](./raid-options "Explicación de los niveles RAID y JBOD con instrucciones de configuración paso a paso")** sirve como referencia técnica.

A continuación, decide dónde se guardarán los datos de tus aplicaciones. Cada aplicación instalada almacena sus archivos en algún lugar del dispositivo. La guía **[Rutas de almacenamiento de aplicaciones](./docker-app-paths "Dónde guardan sus datos las aplicaciones y cómo moverlos entre unidades")** indica dónde y explica cómo trasladar después esos datos a una unidad más grande. Configurarlo pronto evita tener que migrar los datos de las aplicaciones más adelante.

Después, importa tu contenido. **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** y **[Copia de seguridad del ordenador](./computer-backup "Realiza una copia de seguridad de tu ordenador en ZimaOS mediante Finder, el Explorador o sincronización")** cubren los dispositivos que utilizas a diario. **[Migrar desde otro NAS](./synology-to-zimacube-migration "Mueve archivos de un NAS Synology a ZimaOS mediante un proceso por fases")** y **[Conectar unidades en la nube](./cloud-drive-connect "Conecta Google Drive, Dropbox u OneDrive a ZimaOS para realizar copias de seguridad")** cubren las dos fuentes más habituales.

Estas guías y muchas más están organizadas en la **[Descripción general de ZimaOS](./ "Descripción general de la documentación de ZimaOS sobre configuración, almacenamiento y uso compartido")**, dentro de Configuración y almacenamiento. Después, instala lo que quieras. Te lo has ganado.
