---
title: Cómo instalar ZimaOS
description: Aprende a instalar ZimaOS con esta guía paso a paso. Incluye la descarga de la imagen, el proceso de grabado en USB, la instalación y el inicio de sesión a través de ZimaClient o dirección IP.
type: Docs
author: admin
tip: El formato fijo de la barra superior no debe eliminarse, la descripción será un resumen del artículo, si no se rellena se tomará el primer párrafo como texto descriptivo.
---

## Lo que aprenderás
ZimaOS es un sistema operativo ligero para NAS diseñado para ZimaCube y otros dispositivos de servidor doméstico.  
Esta guía proporciona un proceso completo paso a paso para ayudarte a **descargar, grabar e instalar ZimaOS** de manera rápida y exitosa.

---

## Lo que necesitarás
- Un **dispositivo Zima** o un x86-64 genérico con al menos 25 GB de espacio de almacenamiento.
- Una unidad flash (se recomienda de 4 GB o más).

---

## Empezando
Para iniciar ZimaOS, la BIOS debe tener habilitado el modo de arranque UEFI y deshabilitado el arranque seguro.

### Paso 1: Descargar la imagen de instalación de ZimaOS
Para comenzar, descarga el archivo `.img` más reciente de ZimaOS desde la página oficial de lanzamientos de GitHub:  
👉 [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases)

### Paso 2: Crear una unidad USB de arranque
Necesitas grabar la imagen de ZimaOS en una unidad USB. La herramienta más fácil para esto es **Balena Etcher**.

1. Descarga e instala [**Balena Etcher**](https://etcher.balena.io/#download-etcher)  
2. Abre Etcher y selecciona el archivo `.img` de ZimaOS.  
3. Inserta tu unidad USB y selecciónala como destino.  
4. Haz clic en **Flash** para comenzar a grabar la imagen.  

![balena etcher tool open zimaos installer image file](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)
![balena etcher select flash device as a target to install zimaos](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)
![flash zimaso image to flash device completed](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)

### Paso 3: Iniciar el dispositivo desde USB
1. Inserta la unidad USB de arranque en tu dispositivo.  
2. Entra en el menú de BIOS/arranque y selecciona **Arrancar desde USB**.  
![main memu of zimaos installation tool to choose install zimaos or reboot](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)
![quick install memu to select a device or space or location to install zimaos](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)
![confirmation before istalling and choose yes.](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)
![last chance to abort install and choose yes.]](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)
![Installation progress bar displayed. Please wait patiently at this time.](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)

### Paso 4: Completar la instalación de ZimaOS
Sigue las instrucciones en pantalla para instalar ZimaOS.  
Cuando el sistema lo indique, retira la unidad USB y reinicia el dispositivo.  
Ahora arrancará automáticamente en **ZimaOS**.  
![remove the flash device and reboot](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)

### Paso 5: Acceder a ZimaOS
Después de reiniciar, la forma más fácil de iniciar sesión es mediante **ZimaClient**, que detecta automáticamente tu dispositivo en la red y te ayuda a acceder rápidamente a ZimaOS.  

👉 Descarga ZimaClient y sigue la guía aquí: [Guía Rápida de ZimaOS](https://www.zimaspace.com/docs/zimaos/Get-Started)  

![welcome to zimacos webgui](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)

Alternativamente, también puedes verificar la dirección IP en tu red e ingresarla en un navegador web para acceder a la **Interfaz Web de ZimaOS**.  
![zimaos key information show on the screen include ip address os version](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)

🎉 **¡Felicidades!** Has instalado con éxito ZimaOS en tu dispositivo y ahora puedes comenzar a explorar todas sus características de NAS.

---

## Próximos pasos con ZimaOS

Ahora que ZimaOS está instalado en tu servidor inteligente, puedes comenzar a construir tu nube personal y servidor doméstico.  
Aquí tienes algunas ideas sobre qué hacer a continuación:

- 🔧 **Configura RAID o grupos de almacenamiento** para proteger tus datos.  
- 📂 **Habilita el uso compartido de archivos (SMB/FTP)** entre tus dispositivos.  
- 🎞️ **Ejecuta un servidor de medios (Plex, Jellyfin)** para transmitir tus películas y música.  
- 🐳 **Despliega aplicaciones Docker** directamente desde la tienda de aplicaciones de ZimaOS.  
- ☁️ **Realiza copias de seguridad de datos importantes** a unidades externas o la nube.  

👉 ¿Listo para desbloquear más funciones?  
- Visita la [Documentación de ZimaOS](https://github.com/IceWhaleTech/ZimaOS/wiki)  
- Únete a nuestro [Foro Comunitario](https://github.com/IceWhaleTech/ZimaOS/discussions)  
- Explora la [Tienda de Aplicaciones](https://github.com/IceWhaleTech/ZimaOS) para ampliar tu configuración  

💡 **Consejo útil**: Marca esta guía para futuras actualizaciones. Las nuevas versiones de ZimaOS a menudo incluyen mejoras en el rendimiento y nuevas aplicaciones.  

¡Comienza tu viaje con ZimaOS hoy y disfruta de una experiencia NAS más rápida, simple y confiable! 🚀
