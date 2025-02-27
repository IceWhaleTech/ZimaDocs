---
title: Comenzando con iSCSI en ZimaOS
description: 
type: Docs
author: admin
tip: La barra superior con formato fijo no debe eliminarse, la descripción es el resumen del artículo, si no se llena, se tomará el primer párrafo del contenido.
---
ZimaOS ofrece una variedad de protocolos de compartición de red para satisfacer diferentes necesidades de almacenamiento y compartición de archivos, incluyendo NFS, SAMBA e iSCSI:

**[NFS (Network File System)](https://www.zimaspace.com/docs/zimaos/NFS-on-ZimaOS)**: Ideal para compartir archivos en sistemas Unix/Linux, soporta acceso de alta concurrencia y compartición de archivos entre plataformas.

**SAMBA**: Ofrece una excelente compatibilidad. Soporta gestión avanzada de permisos y transmisión cifrada, siendo una opción ideal para entornos multiplataforma.

**iSCSI (Internet Small Computer System Interface)**: Mapea dispositivos de almacenamiento remotos a discos locales a través de redes IP, lo que lo hace adecuado para escenarios de almacenamiento en bloque de alto rendimiento, como entornos de virtualización y almacenamiento de bases de datos.

Estos protocolos de compartición de red aseguran que los usuarios puedan elegir la solución más adecuada según sus necesidades.

Este tutorial proporciona una guía sobre cómo configurar y usar iSCSI en ZimaOS, ayudándote a lograr rápidamente un intercambio eficiente de almacenamiento en bloque. Antes de comenzar, expliquemos algunos conceptos.

## Target, targetcli e iSCSI Initiator
Un **target** es lo que se configura en el lado del servidor. Aquí, el servidor es **ZimaOS**. Y **targetcli** es la herramienta que se utiliza para la configuración.

En la máquina cliente, se debe usar el **iSCSI Initiator** para conectarse al **target** en el servidor. En este tutorial, tomaremos Windows como ejemplo.

## Lado de ZimaOS
### Configurar el Target iSCSI
1. Primero, necesitas ingresar al terminal web de ZimaOS y obtener privilegios de root.
2. ZimaOS dashboard -> Configuración -> General -> Modo de desarrollador -> Terminal basado en web
3. Inicia sesión y cambia a root
```language
sudo -i
```
lanzar targetcli
```language
targetcli
```
Ahora, estás en targetcli
```language
/>
```
**Crear un target:**
Navega al directorio iscsi
```language
/> cd iscsi
```
crear un target iSCSI
```language
/iscsi> create
```
↓ Este es el resultado:
```language
Created target iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
Es posible que necesites eliminar el target algún día, esta operación eliminará el target completo, incluyendo todas las ACL, LUNs y portals
```language
/iscsi> delete iqn.2003-01.org.linux-iscsi.zimacube.x8664:sn.66390bd598df
```
También puedes especificar un nombre al crear un target:
```language
/iscsi> create iqn.2025-03.com.icewhale:888
```
↓ Este es el resultado
```language
Created target iqn.2025-03.com.icewhale:888.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
```
### Backstore y Creación
Los Backstores de iSCSI se crean para uso de almacenamiento por el target. Primero, entremos al directorio de backstores.
Navega a backstores
```language
/> cd /backstores
```
Hay cuatro tipos de backstore.
**Crear un backstore con un archivo:**
```language
/backstores> cd fileio 
/backstores/fileio> create file1 /media/myRAID5/disk1.img 200M write_back=false
Created fileio file1 with size 209715200
```
↑ Este es el resultado del sistema
**Crear un backstore con un objeto de almacenamiento en bloque:**
```language
/backstores> cd block
/backstores/block> create name=block_backend dev=/dev/sdf

Created block storage object block_backend using /dev/sdf.
```
↑ Este es el resultado
Puedes usar lsblk para identificar dispositivos de bloque.
**Crear un backstore con otros tipos:**
Crear un backstore con objeto de almacenamiento pscsi
```language
/backstores> cd pscsi
/backstores> create name=pscsi_backend dev=/dev/sr0
```
o crear un backstore con RAM
```language
/backstores> cd ramdisk
/backstores> create name=rd_backend size=1GB
```
### LUN enlaza el target y los backstores
Entra a luns de un iqn
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/luns
```
enlaza el backstore a este target
```language
/iscsi/iqn.20...888/tpg1/luns> create /backstores/fileio/file1

Created LUN 0
```
↑ Este es el resultado
### Listas de Control de Acceso
Necesitamos crear una ACL para otorgar acceso al initiator.
Navega al directorio de acls del iqn
```language
/> cd /iscsi/iqn.2025-03.com.icewhale:888/tpg1/acls
```
Haz que este initiator_iqn_name sea accesible, necesitas encontrar o definir el initiator_iqn_name en la máquina cliente
```language
/iscsi/iqn.20...888/tpg1/acls> create iqn.1991-05.com.microsoft:desktop-44sqg6u
```
↓ Este es el resultado
```language
Created Node ACL for iqn.1991-05.com.microsoft:desktop-44sqg6u
Created mapped LUN 0.
```
## Lado de Windows
En Windows, conectarse a un target iSCSI es fácil.

Escribe iSCSI Initiator en la barra de búsqueda y haz clic en el ícono que aparece.
![](https://manage.icewhale.io/api/static/docs/1740639156824_image.png)
Es posible que necesites habilitar esta función primero según la ventana emergente.

En el panel de Propiedades del Iniciador iSCSI, puedes encontrar el `initiator_iqn_name` en la pestaña de Configuración.
![](https://manage.icewhale.io/api/static/docs/1740639189242_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639196492_image.png)
En la pestaña de Targets, ingresa la IP del servidor y haz clic en `Quick Connect...`.
Elige el nombre correcto y haz clic en `Connect`.
![](https://manage.icewhale.io/api/static/docs/1740639240986_image.png)
![](https://manage.icewhale.io/api/static/docs/1740639249479_image.png)
En la barra de búsqueda, escribe `Disk Management` y el ícono `Create and format...` aparecerá. Haz clic y entra, encontrarás el dispositivo de almacenamiento que acabas de conectar.
![](https://manage.icewhale.io/api/static/docs/1740639298524_image.png)
Inicializa el disco y úsalo como un disco local! 
![](https://manage.icewhale.io/api/static/docs/1740639317499_image.png)
Para cómo inicializar un disco en Windows, consulta este [artículo](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/initialize-new-disks). 
Este es el uso básico de `targetcli`. Para un tutorial detallado, consulta [redhat docs](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/managing_storage_devices/configuring-an-iscsi-target_managing-storage-devices#configuring-an-iscsi-target_managing-storage-devices). Si encuentras algún problema durante el uso, no dudes en contactarnos en cualquier momento. También puedes unirte a nuestra [comunidad](https://community.zimaspace.com/) y [Discord](https://discord.com/invite/uuNfKzG5) para discutir más sobre NAS y ZimaOS. ¡Esperamos tus comentarios!
