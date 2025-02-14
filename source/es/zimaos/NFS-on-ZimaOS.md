---
title: Cómo usar NFS en ZimaOS
description: 
type: Docs
author: admin
tip: No elimine el formato fijo en la barra superior, description es la descripción del artículo, si no se completa, se tomará el primer párrafo del contenido.
---
Los protocolos de intercambio de archivos en red permiten compartir archivos y directorios desde tu computadora con otros dispositivos en la red. Los protocolos comunes incluyen SAMBA, NFS y FTP. 
Ventajas del intercambio en red:
| **Aspecto** | **Copia USB** | **Aplicaciones de mensajería** | **Intercambio en red** |
| - | - | - | - |
| **Almacenamiento** | Copias locales | Copias múltiples | **Centralizado, sin duplicados** |
| **Gestión** | Manual, propenso a errores | Disperso en chats | **Control centralizado** |
| **Uso de medios** | Se requiere copia completa | Se requiere descarga completa | **Soporte de transmisión** |
| **Colaboración** | Transferencia física | Límites de tamaño de archivo | **Acceso múltiple en tiempo real** |

ZimaOS actualmente ofrece soporte CLI y GUI para SAMBA. En versiones posteriores a la 1.3.2, ZimaOS también integra la funcionalidad de NFS (a nivel de CLI). Este tutorial muestra cómo usar NFS en ZimaOS para compartir carpetas y acceder a ellas desde Windows, macOS y Ubuntu.
Primero, necesitas crear o encontrar una carpeta para compartir. Aquí usaré `/DATA/C/demo` como ejemplo.
## Editar el archivo de configuración
Usa `vi` para editar el archivo `/etc/exports`, que es el archivo de configuración para NFS.

```language
# Primero, necesitas ingresar al terminal web de ZimaOS y obtener privilegios de root.
# Panel de ZimaOS -> Configuración -> General 
# -> Modo desarrollador -> Terminal basado en web
# Inicia sesión y cambia a root
sudo -i

# editar el archivo de configuración
vi /etc/exports

# en el archivo /etc/exports, pega esta línea
/DATA/C/demo *(rw,sync,no_subtree_check)

# la primera columna especifica la carpeta compartida (por ejemplo, /DATA/C/demo)
# la segunda columna define
    # La subred que tiene permiso para acceder
        # por ejemplo, 10.0.0.0/8,
        # el * permite el acceso desde todas las redes
    # Permitir permisos de Lectura y Escritura para los usuarios de la red (rw)
    # Método de escritura, generalmente se usa sync o async (en este caso sync)
    # no_subtree_check permite acceso total al directorio compartido sin restricciones de subárbol
# consulta esto: https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/5/html/deployment_guide/s1-nfs-server-config-exports#s1-nfs-server-config-exports
```
Funcionará automáticamente, incluso después de reiniciar.
## Hacer efectivo el archivo de configuración
```language
# En algunos casos,
# Es posible que necesites ejecutar este comando en el terminal para que la configuración sea efectiva.
systemctl restart nfs-server

#o
exportfs -a
```
## Usar (Montar/Desmontar) las carpetas NFS
### En ZimaOS/Ubuntu
```language
# Probado en ZimaOS 1.3.2-beta2 y Ubuntu 22.04.5 LTS
# Aquí en una máquina cliente
# abre la Terminal
# primero cambia a root
# crea un directorio para montar
sudo -i
mkdir /mnt/demo

# monta la carpeta nfs
# esta ip es la IP del Servidor
mount 10.0.0.71:/DATA/C/demo /mnt/demo

# Ahora puedes ver y usar tu compartición

# puede que quieras eliminar las carpetas NFS montadas algún día
# Solo revisa las carpetas montadas
df -h
# o
mount | grep nfs

# desmonta las carpetas nfs
umount /mnt/demo
```
### En macOS
```language
# Probado en macOS Sequoia en Chip M4
# crea un directorio para montar
mkdir ~/demo

# monta la carpeta nfs
# necesitas usar sudo para montar
# te pedirá que ingreses la contraseña
sudo mount -t nfs -o resvport 10.0.0.71:/DATA/C/demo ~/demo

# abre la carpeta para usarla
open .

# puede que quieras eliminar las carpetas NFS montadas algún día
# Solo revisa las carpetas montadas
df -h
# o
mount | grep nfs

# desmonta las carpetas nfs
sudo umount /mnt/demo
```
### En Windows
```language
# Probado en Windows 11
# puede que necesites ingresar a CMD primero 
# ya que la terminal podría colocarte en Powershell por defecto en Windows 11
cmd

# puede que necesites cambiar W: a un carácter disponible que no esté ocupado
mount \\10.0.0.71\DATA\C\demo W:

# Ahora puedes ver y usar tu compartición

# puede que quieras eliminar las carpetas NFS montadas algún día
# Solo revisa las carpetas montadas
net use

# desmonta las carpetas nfs
net use W: /delete
```
La captura de pantalla después de montar en Windows:
![](https://manage.icewhale.io/api/static/docs/1739500988306_image.png)
## Consejos útiles
Aquí algunos comandos que podrías necesitar más adelante.
```language
# En el servidor ZimaOS
# verifica el estado del servicio nfs
systemctl status nfs-server

# elimina o comenta la línea en /etc/exports para deshabilitar la compartición
# ejecuta esto para que sea efectivo
exportfs -a
# o
systemctl restart nfs-server
```
Si encuentras algún problema durante el uso, no dudes en hacérnoslo saber en cualquier momento. También puedes unirte a nuestra [comunidad](https://community.zimaspace.com/) y [Discord](https://discord.com/invite/uuNfKzG5) para discutir más sobre NAS y ZimaOS. ¡Esperamos tus comentarios!
