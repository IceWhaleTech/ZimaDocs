---
title: Tutorial de uso de iSCSI
description: 
type: "Docs"
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción es para el artículo, si no se completa se tomará el primer párrafo del contenido
---

iSCSI (Interfaz de Sistema de Computadora Pequeña por Internet) es un protocolo para transmitir comandos SCSI a través de una red, permitiendo que los dispositivos de almacenamiento se comuniquen a través de una red, similar al almacenamiento conectado directamente. Puede virtualizar recursos de almacenamiento, lograr gestión centralizada, compartir en red y acceso remoto, y es adecuado para escenarios como centros de datos, entornos virtualizados, y copias de seguridad y recuperación. 
A través de este tutorial, aprenderás cómo configurar y usar iSCSI en ZimaOS para mejorar la eficiencia en la gestión del almacenamiento, simplificar la arquitectura del almacenamiento en red, y lograr métodos de acceso a datos flexibles.

## Requisitos previos
1. El disco duro utilizado no está en uso
2. Confirmar el IQN del cliente

## Pasos de operación
### Servidor
*Asegúrate de que tu ZimaOS se haya actualizado a la versión 1.2.5 o superior.*

1. Usa el comando `sudo -i` para ingresar al modo superusuario, inicia targetcli
```
targetcli
```

![](https://manage.icewhale.io/api/static/docs/1730362966225_image.png)

2. Crea un LUN, suponiendo que `/dev/sde` se usa como el backend de almacenamiento (Aquí usamos sde. Puedes usar el `lsblk` para ver el estado del dispositivo y cambiar a `sda` o `sdb`):
```
cd backstores/block
create myblockdev /dev/sde
```

![](https://manage.icewhale.io/api/static/docs/1730362990127_image.png)

3. Crea un objetivo iSCSI (`iqn.2024-10.com.zima:target1` es un ejemplo)
```
cd /iscsi
create iqn.2024-10.com.zima:target1
```

![](https://manage.icewhale.io/api/static/docs/1730363013870_image.png)

4. Agrega un LUN al objetivo
```
cd iqn.2024-10.com.zima:target1/tpg1/luns
create /backstores/block/myblockdev
```

![](https://manage.icewhale.io/api/static/docs/1730363050568_image.png)

5. Establece la ACL (lista de control de acceso) para permitir la conexión. El IQN aquí debe ser consistente con el del cliente (Abre el Iniciador de iSCSI, está en la pestaña de Configuración)
```
cd ../acls
create iqn.1993-08.org.debian:01:bb1e6772dfb6
```

![](https://manage.icewhale.io/api/static/docs/1730363186571_image.png)

### Cliente
**Windows**
1. Abre el Iniciador de iSCSI, en la pestaña de Descubrimiento, haz clic en Descubrir Portal
![](https://manage.icewhale.io/api/static/docs/1730363629547_image.png)

2. Configura la dirección IP, haz clic en OK
![](https://manage.icewhale.io/api/static/docs/1730363646462_image.png)

3. En la pestaña de Objetivos, haz clic en Conectar
![](https://manage.icewhale.io/api/static/docs/1730363656977_image.png)

4. Abre la Administración de Computadoras, haz clic en Almacenamiento > Administración de Discos, y podrás ver el volumen iSCSI recién conectado
![](https://manage.icewhale.io/api/static/docs/1730363667742_image.png)

**Linux**
1. Descubre los objetivos iSCSI
```
iscsiadm -m discovery -t sendtargets -p <DIRECCIÓN_IP>
```

Reemplaza `<DIRECCIÓN_IP>` con la dirección IP del servidor
![](https://manage.icewhale.io/api/static/docs/1730363793486_image.png)

2. Inicia sesión en el objetivo iSCSI
```
iscsiadm -m node --login
```
![](https://manage.icewhale.io/api/static/docs/1730363899468_image.png)