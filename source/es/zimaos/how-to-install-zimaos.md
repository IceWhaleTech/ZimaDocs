---
title: Cómo instalar ZimaOS
description: "Aprende a instalar ZimaOS paso a paso: descarga la imagen, grábala en una unidad USB, completa la instalación e inicia sesión mediante ZimaClient o una dirección IP."
type: Docs
author: admin
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

## Qué aprenderás
ZimaOS es un sistema operativo NAS ligero diseñado para equipos x86-64 genéricos.
Esta guía ofrece el proceso completo para **descargar, grabar e instalar ZimaOS** de forma rápida y correcta.

---

## Qué necesitas
- Un **dispositivo Zima** o un equipo x86-64 genérico con al menos 25 GB de almacenamiento.
- Una unidad USB de 4 GB o más.

---

## Primeros pasos
Para arrancar ZimaOS, activa el modo de arranque UEFI en la BIOS y desactiva Secure Boot.

### Paso 1: Descargar la imagen de instalación de ZimaOS
Descarga el archivo `.img` más reciente de ZimaOS desde la página oficial de versiones de GitHub:
👉 [Versiones de ZimaOS en GitHub](https://github.com/IceWhaleTech/ZimaOS/releases)


### Paso 2: Crear una unidad USB de arranque
Debes grabar la imagen de ZimaOS en una unidad USB. La herramienta más sencilla es **Balena Etcher**.

1. Descarga e instala [Balena Etcher](https://etcher.balena.io/#download-etcher)
2. Abre Etcher y selecciona el archivo `.img` de ZimaOS.
3. Inserta la unidad USB y selecciónala como destino.
4. Haz clic en **Flash** para escribir la imagen.

![Balena Etcher abierto con el archivo de imagen del instalador de ZimaOS](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)
![Balena Etcher seleccionando la unidad USB de destino para instalar ZimaOS](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)
![Grabación de la imagen de ZimaOS en la unidad USB completada](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)



### Paso 3: Arrancar el dispositivo desde USB
1. Inserta la unidad USB de arranque en el dispositivo.
2. Abre la BIOS o el menú de arranque y selecciona **Boot from USB**.

![Menú principal del instalador para elegir entre instalar ZimaOS o reiniciar](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)

![Menú de instalación rápida para seleccionar el dispositivo o espacio donde instalar ZimaOS](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)

![Confirmación previa a la instalación con la opción Yes](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)

![Última oportunidad para cancelar la instalación con la opción Yes](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)

![Barra de progreso de la instalación](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)


### Paso 4: Completar la instalación de ZimaOS
Sigue las instrucciones en pantalla para instalar ZimaOS.
Cuando el sistema lo solicite, retira la unidad USB y reinicia el dispositivo.
El equipo arrancará automáticamente en **ZimaOS**.
![Retirar la unidad USB y reiniciar](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)



### Paso 5: Acceder a ZimaOS
Después de reiniciar, la forma más sencilla de iniciar sesión es utilizar **ZimaClient**. El cliente detecta automáticamente el dispositivo en la red y permite acceder rápidamente a ZimaOS.

👉 Descarga ZimaClient y sigue esta guía: [Guía de inicio rápido de ZimaOS](./get-started)

![Pantalla de bienvenida de la interfaz web de ZimaOS](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)


También puedes consultar la dirección IP del dispositivo en la red e introducirla en un navegador para abrir la **interfaz web de ZimaOS**.
![Pantalla de información de ZimaOS con la dirección IP y la versión del sistema](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)


🎉 **¡Enhorabuena!** Has instalado ZimaOS y ya puedes explorar todas sus funciones de NAS.

---

## Siguientes pasos con ZimaOS

Después de instalar ZimaOS en el servidor, puedes empezar a crear tu nube personal y tu servidor doméstico.
Algunas ideas:

- 🔧 **Configura RAID o grupos de almacenamiento** para proteger los datos.
- 📂 **Activa el uso compartido de archivos (SMB/FTP)** entre dispositivos.
- 🎞️ **Ejecuta un servidor multimedia (Plex, Jellyfin)** para reproducir películas y música.
- 🐳 **Implementa aplicaciones Docker** desde ZimaOS App Store.
- ☁️ **Crea copias de seguridad de los datos importantes** en unidades externas o en la nube.

👉 ¿Quieres activar más funciones?
- Continúa con **[Primeros pasos](./get-started)** para completar el primer arranque
- Configura el **[Acceso remoto](./remote-access)** para conectarte desde cualquier lugar
- Únete al **[Foro de la comunidad](https://community.zimaspace.com/)**

💡 Guarda esta guía para futuras actualizaciones. Las nuevas versiones de ZimaOS suelen incluir mejoras de rendimiento y nuevas aplicaciones.
