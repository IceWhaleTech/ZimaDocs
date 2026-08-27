---
title: Explorando OMV
---

# Primer Inicio de Sesión

## Método de Inicio de Sesión

![método de inicio de sesión omv](/images/Small-body-Big-applications-(OMV+Zima)/menthod-of-login.jpeg)

Para iniciar sesión en OMV por primera vez, escriba **`openmediavault.local/`** en su navegador

{% note info %}
**Nombre de Usuario**: `admin`
**Contraseña**: `openmediavault` (Los usuarios pueden cambiar la contraseña predeterminada después del primer inicio de sesión)

{% endnote %}

## Panel de Control

![Panel de Control Omv](/images/Small-body-Big-applications-OMV-First-Experience/omv-dashboard.jpeg)

**Los usuarios pueden personalizar el diseño del Panel de Control a través de la configuración (botón en forma de engranaje) en la esquina superior derecha.**

![Cambiar Panel de Control OMV](/images/Small-body-Big-applications-OMV-First-Experience/change-dashboard.jpeg)

# Tres elementos de Inicialización

## Grupos/Usuarios

**Usuarios -> Grupo -> Crear**

![Omv Crear Usuarios](/images/Small-body-Big-applications-OMV-First-Experience/omv-creat-users.jpeg)

**Al crear un nuevo grupo de usuarios, el usuario puede añadir la ID del nuevo usuario creado a este grupo de usuarios.**

![Crear ID de Usuarios de Omv](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-users-id.jpeg)

**Usuarios -> Usuarios -> Crear**

![Crear Permisos de Omv](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions.jpeg)

**El nuevo usuario pertenece al grupo de usuarios por defecto, pero los usuarios también pueden personalizar el grupo de usuarios de acuerdo a sus necesidades reales para diferenciar su uso.**

![Crear Permisos de Omv con grupos](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-groups.jpeg)

**Los permisos de la carpeta compartida establecen los derechos de acceso del nuevo usuario a la carpeta compartida (consulte el contenido del tutorial de la carpeta compartida)**
![Crear Permisos de Omv con Carpetas Compartidas](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-%20share-folders.jpeg)

## Carpetas Compartidas

**Almacenamiento - Sistemas de Archivos - Montaje de particiones Ext3/4 (Montar)**
**OMV admite el montaje directo de particiones Ext3 o Ext4 existentes, si el disco duro actualmente conectado no tiene tales particiones, la gestión de disco relevante (particionamiento o formateo) puede realizarse en las particiones existentes del disco duro.**

{% note danger %}
**Las particiones montadas son un prerequisito para nuevas carpetas compartidas.**
{% endnote %}

![Crear Carpetas Compartidas de Omv](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders.jpeg)

**Almacenamiento -> Carpetas Compartidas -> Crear**

![Crear Carpetas Compartidas de Omv](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders1.jpeg)

**Los usuarios pueden optar por crear una nueva carpeta compartida en la partición montada y establecer los derechos de acceso apropiados (lectura/escritura).**

![Crear Permisos de Carpetas Compartidas de Omv](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders-permissions.jpeg)

## Gestión de Plugins

**Sistema -> Gestión de Actualizaciones -> Actualizaciones**

![Actualizaciones del Sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/omv-system-upadtes.jpeg)

{% note danger %}
**Las actualizaciones del sistema son generalmente parches oficiales del sistema o contenidos actualizados de OMV, por lo que se recomienda operar esto después de la inicialización.**
{% endnote %}

**Sistema -> Plugins**

Como se mencionó al principio de este artículo, OMV es una solución de almacenamiento conectado a la red (NAS) basada en Debian Linux para un entorno doméstico o pequeña oficina, y su biblioteca de plugins oficial puede satisfacer la mayoría de los requisitos de aplicación diaria del usuario.
![Instalación de Plugins del Sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/omv-plugins-install.jpeg)

{% note primary %}
**Recomendación de plugins a instalar**

**- Gestor de archivos: [Filebrowser](https://filebrowser.org/)**
**- Netbook: [Onedrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage)**
**- Gestor de Imágenes: [Photoprism](https://photoprism.app/)**
**- Empuje de Aeropuerto: [Shairport](https://github.com/mikebrady/shairport-sync)**
**- Compartición de partición del sistema OMV: sharerootfs (si el usuario desea experimentar y usar el emmc de Zima como una carpeta compartida sin un disco duro externo)**
**- Gestor de Máquinas Virtuales: [Kvm](https://www.linux-kvm.org/page/Main_Page)**
**- Navegador de terminal SSH: [Wetty](https://github.com/butlerx/wetty)**

{% endnote %}

## Consejos para el uso

### Tiempo de cierre de sesión automático

![Tiempo de cierre de sesión automático del sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-automatic-logout-times.jpeg)

En el proceso de uso diario, la mayoría de los usuarios descubrirán que, solo después de un corto tiempo, deben volver a ingresar sus credenciales de inicio de sesión. Esto se debe a que el tiempo de cierre de sesión automático predeterminado de OMV es de solo 5 minutos. **`Sistema - Banco de Trabajo - Cierre de sesión automático.`** Establezca el tiempo un poco más largo para resolver este problema.

### Zona Horaria

![Zona Horaria del Sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-a-times-zone.jpeg)

Algunos usuarios encuentran que cuando utilizan la sincronización de datos, han configurado para sincronizar datos todas las tardes. Sin embargo, en realidad sincroniza los datos a primera hora de la mañana. Esto se debe a que los usuarios no han establecido su propia zona horaria. Para solucionar esto, vaya a **`Sistema - Fecha y Hora - Zona Horaria`**

### Recordatorios

![Notificación de recordatorio del sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-reminder-notice.jpeg)

La pequeña campana en la esquina superior derecha del escritorio de OMV a menudo aparece con notificaciones redundantes, que los usuarios a menudo encuentran molestas ya que no son relevantes. El usuario solo necesita ir a **`Sistema - Notificación - Notificaciones`** para desactivar las notificaciones que no les son relevantes.

### Dirección IP Fija

![Dirección IP Fija del Sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-fixed-ip-address.jpeg)

Para algunos usuarios, debido a los factores ambientales de la LAN, la dirección de OMV cambiará constantemente. Puede utilizar Host (openmediavault.local/) para acceder a la página de gestión, pero la operación actual de aplicación sigue siendo muy incómoda. Por lo tanto, los usuarios deberán ir a **`Red -> Interfaz`** para modificar la dirección IP de la interfaz de red existente de la dirección IP variable del DHCP a la dirección IP fija de Static. **`SMB/CIFS`**
**El servicio SMB** es una de las aplicaciones NAS más básicas; los usuarios que inician OMV por primera vez se encontrarán con la vergüenza de no poder crear el servicio SMB correctamente. De hecho, los usuarios solo necesitan seguir los pasos en esta guía para completar la inicialización de los tres elementos de la configuración de la carpeta compartida, la creación del servicio SMB se puede solucionar fácilmente (igual que abrir el servicio NFS).

### SMB/CIFS

![Sistema Omv SMB/CIFS](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-smb-cifs.jpeg)

**El servicio SMB es una de las aplicaciones NAS más básicas, los usuarios que inician OMV por primera vez se encontrarán con la vergüenza de no poder crear el servicio SMB correctamente, de hecho, los usuarios solo necesitan seguir los pasos en esta guía para completar la inicialización de los tres elementos de la configuración de la carpeta compartida, la creación del servicio SMB se puede solucionar fácilmente (igual que abrir el servicio NFS).**

# Juego Avanzado de OMV

## Biblioteca de Plugins de la Comunidad

**Además de los plugins oficiales que vienen con el sistema, OMV también tiene una gran biblioteca de plugins comunitarios mantenidos/construidos por fans, de los cuales el más importante es el pleno soporte de Docker.**

**a)** Los usuarios pueden utilizar el plugin oficial Wetty [Servicios - Wetty] recomendado en el artículo anterior

![Plugins de Comunidad del Sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins.jpeg)

**b)** Abra la versión web del navegador SSH de Wetty e inicie sesión ingresando la cuenta root y la contraseña establecida durante la instalación del sistema.

**c)** Inicie sesión e ingrese:**<code>`wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash`<code>**

![Plugins de Comunidad del Sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins1.jpeg)

**d)** Una vez instalado el repositorio de plugins comunitarios, los usuarios pueden instalar Docker

![Plugins de Comunidad del Sistema Omv](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins2.jpeg)

## Docker y CasaOS

**a)** Inicie sesión en el SSH de Wetty con la contraseña de la cuenta root y escriba.
**<code>`wget -qO- https://get.casaos.io | sudo bash`<code>**

![Sistema Omv con-casaos](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos.jpeg)

**b)** Después de completar la instalación, los usuarios deben recordar la dirección de inicio de sesión de CasaOS.

![Sistema Omv con-casaos](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos1.jpeg)

**c)** Ingrese a la página principal de CasaOS, y los usuarios pueden disfrutar fácilmente de la colección de aplicaciones Docker personalizadas.

![Sistema Omv con-casaos](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos2.jpeg)

# Resumen

**Como una solución de almacenamiento conectado a la red (NAS) basada en Debian Linux para un entorno doméstico o pequeña oficina, el sistema de OMV es lo suficientemente pequeño como para ayudar a los usuarios a satisfacer sus necesidades diarias con su propia biblioteca de plugins, además de una gran biblioteca de Docker y nuestro CasaOS adaptado a los usuarios, en comparación con otros grandes sistemas NAS en el mercado como Synology, QNAP y UNAS.**

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)