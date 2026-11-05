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

Para una máquina virtual, consulta [Instalar ZimaOS en Proxmox VE](./install-zimaos-on-proxmox-ve).

---

## Qué necesitas
- Un **dispositivo Zima** o un equipo x86-64 genérico con al menos 25 GB de almacenamiento.
- Una unidad USB de 4 GB o más.
- [ZimaOS USB Creator](https://www.zimaspace.com/zimaos/download) o [balenaEtcher](https://etcher.balena.io/).

---

## Primeros pasos
Para arrancar ZimaOS, activa el modo de arranque UEFI en la BIOS y desactiva Secure Boot.

### Paso 1: Preparar la imagen de instalación de ZimaOS
ZimaOS USB Creator descarga la versión que selecciones en la aplicación. Si utilizas balenaEtcher, descarga el archivo que termina en `_installer.img` de [Versiones de ZimaOS en GitHub](https://github.com/IceWhaleTech/ZimaOS/releases). El archivo `.raucb` es un paquete de actualización, no una imagen de instalación USB.

### Paso 2: Crear una unidad USB de arranque de ZimaOS
Elige uno de los métodos siguientes y continúa con el paso 3.

> Los números de versión, los archivos, las unidades y los detalles de la interfaz de las capturas son ejemplos.

> Al escribir una imagen se borran todos los datos de la unidad USB seleccionada. Guarda los archivos importantes y comprueba el nombre y la capacidad de la unidad antes de continuar.

#### Opción A: ZimaOS USB Creator

1. Inserta la unidad USB y abre **ZimaOS USB Creator**. En **Choose operating system**, selecciona la versión de ZimaOS que quieras instalar y haz clic en **Next**.

![Elegir una versión de ZimaOS en USB Creator](/images/guides/usb-creator-select-os.webp)

2. Selecciona la unidad USB. Comprueba su nombre y capacidad, mantén marcada la opción **Exclude system drives** y haz clic en **Next**.

![Seleccionar la unidad USB en USB Creator](/images/guides/usb-creator-select-storage.webp)

3. Revisa la imagen del sistema y la unidad de almacenamiento en el resumen y haz clic en **Write**.

![Revisar la imagen y la unidad USB de destino](/images/guides/usb-creator-review-write.webp)

4. Comprueba la unidad de destino en el diálogo **Erase this device?** y haz clic en **Erase and write**.

![Confirmar el borrado y la escritura en la unidad USB](/images/guides/usb-creator-erase-warning.webp)

5. Autoriza el acceso de administrador si se solicita. Espera mientras USB Creator descarga y graba la imagen; mantén conectada la unidad USB.

![USB Creator descarga y graba la imagen](/images/guides/usb-creator-writing-progress.webp)

6. Cuando aparezca **Write complete!**, la unidad se habrá expulsado automáticamente. Haz clic en **Finish** y retírala de forma segura.

![Pantalla de escritura completa de USB Creator](/images/guides/usb-creator-write-complete.webp)

#### Opción B: balenaEtcher

1. Descarga e instala [balenaEtcher](https://etcher.balena.io/).

2. Abre Etcher, haz clic en **Flash from file** y selecciona el archivo `_installer.img` descargado en el paso 1.

![Seleccionar la imagen de instalación de ZimaOS en balenaEtcher](/images/guides/zimaos-etcher-select-image.webp)

3. Haz clic en **Select target** y elige la unidad USB. Comprueba su nombre y capacidad.

![Seleccionar la unidad USB de destino en balenaEtcher](/images/guides/zimaos-etcher-select-target.webp)

4. Haz clic en **Flash!**, autoriza el acceso si se solicita y espera a que terminen la escritura y la verificación.

5. Cuando Etcher indique que ha terminado, expulsa la unidad USB de forma segura y continúa con el paso 3.

![balenaEtcher ha terminado de grabar la imagen de ZimaOS](/images/guides/zimaos-etcher-complete.webp)

### Paso 3: Arrancar el dispositivo desde USB
1. Inserta la unidad USB de arranque en el dispositivo. Abre la BIOS o el menú de arranque e inicia el equipo desde la unidad USB.
2. En la pantalla de bienvenida de ZimaOS Installer, haz clic en **Start**.

![Pantalla de bienvenida de ZimaOS Installer con el botón Start](/images/guides/zimaos-installer-welcome.webp)

3. Elige el idioma del instalador y haz clic en **Continue**.

![Selección del idioma de ZimaOS Installer](/images/guides/zimaos-installer-choose-language.webp)

4. Selecciona el disco donde instalar ZimaOS. Comprueba cuidadosamente su nombre, ruta y capacidad: **se borrarán todos los datos de ese disco**. Haz clic en **Continue**.

![Selección del disco donde instalar ZimaOS](/images/guides/zimaos-installer-choose-disk.webp)

5. Revisa el disco de destino y las comprobaciones de instalación; después, haz clic en **Continue**.

![Revisión del disco de destino y las comprobaciones de instalación](/images/guides/zimaos-installer-ready.webp)

6. Comprueba de nuevo el disco en el aviso de borrado y haz clic en **Erase and install**.

![Confirmación del borrado del disco seleccionado](/images/guides/zimaos-installer-erase-confirmation.webp)

7. Mantén el dispositivo encendido mientras el instalador graba ZimaOS.

![Progreso de la instalación de ZimaOS](/images/guides/zimaos-installer-progress.webp)

### Paso 4: Completar la instalación de ZimaOS
Cuando aparezca la pantalla de instalación completa, retira la unidad USB y haz clic en **Restart**. El dispositivo arrancará desde el disco instalado e iniciará ZimaOS.

![Pantalla de instalación completa de ZimaOS con el botón Restart](/images/guides/zimaos-installer-complete.webp)

### Paso 5: Acceder a ZimaOS
Después de reiniciar, la pantalla del dispositivo muestra los datos del sistema y cómo acceder a ZimaOS. El número de serie y la dirección IP están ocultos en la captura; utiliza la dirección que aparezca en tu dispositivo.

![Consola de ZimaOS con datos del sistema e información de acceso, con el número de serie y la dirección IP ocultos](/images/guides/zimaos-console-access.webp)

La forma más sencilla de conectarse es con **ZimaClient**, que detecta el dispositivo en la red. Descarga ZimaClient y sigue la [Guía de inicio rápido de ZimaOS](./get-started).

También puedes introducir en un navegador la dirección IP que aparece en tu dispositivo para abrir la **interfaz web de ZimaOS**.

El ejemplo siguiente muestra la página inicial en un ZimaCube. Selecciona un idioma y revisa la Política de privacidad antes de continuar. La página puede ser distinta en otros dispositivos.

![Página inicial de configuración de ZimaCube con opciones de idioma y Política de privacidad](/images/guides/zimaos-zimacube-welcome.webp)

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
