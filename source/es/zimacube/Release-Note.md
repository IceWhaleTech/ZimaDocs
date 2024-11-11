---
title: Título
description:
type: “Docs”
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción será el resumen del artículo; si no se completa, se tomará el primer párrafo del contenido.
---

Agradecemos sinceramente a nuestros usuarios de la comunidad por su activa participación y valiosas sugerencias, ¡lo que nos permite mejorar y perfeccionar ZimaOS continuamente! ¡Les damos la bienvenida a compartir más ideas, por favor!

Consejos

Si encuentras algún problema con el software, te damos la bienvenida a unirte a Discord y a obtener apoyo de 20,000 miembros de la comunidad Zima.-[IceWhale](https://discord.com/invite/f9nzbmpMtU)
# ZimaOS v1.2.3
![](https://manage.icewhale.io/api/static/docs/1724749372699_image.png)
## Arreglado
Arreglar problemas de experiencia relacionados con el almacenamiento RAID @scottyman2k@orochikun

Arreglar fallo en la instalación o actualización del sistema @Secarius@Bmorg

Arreglar el problema de que el SSD no sea reconocido o esté mal ubicado @Scyto@artophe@Vinney

Arreglar algunos problemas con el uso anormal de recursos de CPU @jojo@goultron

Arreglar el problema de no poder crear usuarios, que SSH no sea utilizable y errores en la visualización de la capacidad del disco del sistema @applegeek@Halogen

En Archivos, las miniaturas se muestran 5 veces más rápido

En ZVM, se arregla la creación doble de máquinas virtuales al hacer clic continuamente en el botón crear @cfouche

PeerDrop añade autenticación de inicio de sesión para aumentar la seguridad

El puerto 53 se libera para asegurar que Pi-hole o AdGuard Home funcionen correctamente @oldintynazar

## Nuevo

Para nuevos usuarios de ZimaOS, el uso compartido de Samba está habilitado por defecto para ZimaOS HD y todos los espacios de almacenamiento, y está protegido por la cuenta y contraseña de ZimaOS

Después de actualizar ZimaOS a la versión actual, cambiar la contraseña habilitará el uso compartido de Samba mencionado anteriormente

Después de que se cambie la contraseña del sistema ZimaOS, la contraseña del recurso compartido de Samba se cambiará de manera sincronizada

RAID5 permite que se añadan nuevos discos duros para ampliar el espacio

Cuando un disco en RAID5 está dañado, los datos aún se pueden leer

En Archivos, se añade la capacidad del espacio de almacenamiento a la columna de la izquierda

En Archivos, se añade un nuevo logo de Zima en la esquina superior izquierda para regresar al panel de control al hacer clic

En ZVM, Asistencia y configuración de aplicaciones, el selector de archivos añade una barra lateral de espacios de almacenamiento para una selección de ruta de archivo más conveniente

En Configuración, se añade un interruptor "la luz de alimentación siempre está encendida" para apagar activamente la luz de alimentación siempre encendida @Sabitech

En Configuración, se añade la visualización del estado de trabajo del puerto Ethernet de ZimaCubePro 10G y el puerto Thunderbolt

Se mejora la probabilidad de que ZimaCube sea escaneado automáticamente en la función de red del Finder de Mac y del Explorador de Windows

Permitir que el almacenamiento ZFS funcione en ZimaOS @Brucio

## Eliminar
Ya no se permite modificar el nombre de usuario de la cuenta de ZimaOS
## Descargar
:zap: Para usuarios que han instalado ZimaOS V1.1: Haz clic en el punto rojo en la esquina superior izquierda del panel de control para iniciar la actualización.

:zap: Instalador: https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3_installer.img

:zap: Actualización manual: https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3.raucb