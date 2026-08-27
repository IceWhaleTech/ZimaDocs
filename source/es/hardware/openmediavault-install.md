---
title: Tamaño Pequeño, Grandes Aplicaciones (OMV+ZimaBoard)
---
# Introducción a OMV

![introducir openmediavault](/images/Small-body-Big-applications-(OMV+Zima)/introduce-openmediavault.png)

**OpenMediaVault (OMV), una solución de almacenamiento conectado en red (NAS) basada en Debian Linux para uso en un entorno doméstico o una pequeña oficina, es una solución simple y fácil de usar lista para usar que puede ser instalada y gestionada fácilmente por cualquier usuario novato e incluye muchos servicios de aplicaciones de datos estándar como SSH, SMB, DAAP Media Server, RSync. También se puede mejorar con características de marco de diseño modular para extensiones de aplicaciones adicionales como KVM, Docker, etc. Por otro lado, el pequeño tamaño de ZimaBoard y el pequeño tamaño del OMV significan conveniencia para el usuario. ¡El tamaño realmente no importa!**

# Preparación para la Instalación de OMV

- Archivo de imagen de instalación de OMV [**image file**](https://www.openmediavault.org/download.html) (Se recomienda descargar la última versión estable oficial OMV6)
- Una memoria USB con una capacidad de al menos 1G
- Cable miniDP conectando el monitor
- Cable de red: Conectado al puerto de red en la ZimaBoard cerca del puerto miniDP
- Teclados: Un teclado conectado por USB es suficiente

# Atención

- Si la imagen no se escribe correctamente, puedes usar una herramienta de disco como Diskgenius para borrar la partición y la información de formato en la memoria USB. Intenta escribir la imagen nuevamente.

- Dado que el proceso de instalación de OMV requiere un entorno de red en muchos lugares, es importante que el usuario conecte Zima a un enrutador o conmutador con una conexión a Internet fluida.

# Nueva Instalación de OMV

## Configuración de BIOS

**1. Inserta la memoria USB, conecta el monitor con el cable miniDP, conecta el teclado, enciende la ZimaBoard y presiona la tecla Del en el teclado continuamente para ingresar al BIOS.**
**2. Por defecto, el BIOS de ZimaBoard utiliza su propia eMMC como disco de arranque preferido, como se muestra aquí**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/setup-of-bios.jpeg)

**3. En Boot, ajusta la Opción de Arranque #1 a la partición 1 de la memoria USB, como sigue: `"UEFI:Legend ZhenJBFast 1100"` es la partición donde se encuentra la imagen OMV6, y `"UEFI:Legend ZhenJBFast 1100`, Partición 1" es el espacio restante en la memoria USB. `UEFI:Legend ZhenJBFast 1100, Partición 1"` es el espacio restante en la memoria USB, y el usuario debe seleccionar `"UEFI:Legend ZhenJBFast 1100"` como preferencia de arranque.**
**4. Después de presionar Guardar y Salir, la ZimaBoard se reiniciará y mostrará la pantalla de instalación de OMV6.**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/chosse-uefi-boot.jpeg)

## Pasos de Instalación

**1. Para inicializar la instalación, selecciona Instalar y presiona enter**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/install-omv.png)

**2. Selecciona el idioma para el proceso de instalación; el predeterminado es inglés**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/select-language.png)

**3. Por defecto, ZimaBoard tiene puertos de red duales, siendo enp2s0 el que está cerca del puerto miniDP y enp3s0 el que está cerca de la fuente de alimentación**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-lan-port.jpeg)

**4. Cuando el instalador pida al usuario seleccionar la ruta de instalación del OMV, asegúrate de que esté configurado en "MMC/SD CARD"**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-emmc.jpeg)

**5. El instalador pedirá al usuario confirmar que el espacio en disco duro interno de ZimaBoard está limpio de todo contenido y se volverá a particionar**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/partition-disks.jpeg)

**6. Luego, el instalador pide al usuario establecer la contraseña inicial para la cuenta root**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/Initialize-password.jpeg)

{% note danger %}
**consejos:**
  Asegúrate de recordar que este conjunto de contraseñas de cuenta es necesario para operaciones de configuración posterior en segundo plano.
{% endnote  %}

**7. Cuando el instalador pida al usuario seleccionar la fuente de imagen de Debian, asegúrate de seleccionar el país o región actual del usuario y elegir la fuente de imagen apropiada. Recuerda: Esta elección afectará enormemente la velocidad de actualización/instalación diaria de varios complementos de OMV del usuario.**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-image.jpeg)

**8. Al continuar con la imagen a continuación, la instalación fresca de OVM está completa, y el usuario puede continuar con el reinicio de OMV después de retirar la unidad USB.**

![configuración de bios](/images/Small-body-Big-applications-(OMV+Zima)/usb-drive-boot.jpeg)

{% note danger %}

**Por favor Nota:**

- Si se realiza una selección o configuración incorrecta durante el proceso de instalación, puedes presionar el botón Cancelar para regresar al directorio del progreso de instalación y seleccionar la página de progreso que el usuario necesita restablecer.
- Después de que la nueva instalación esté completa, si la unidad USB se retira antes de que OMV reinicie, el BIOS utilizará automáticamente la partición de arranque de OMV en eMMC como el disco de arranque preferido, por lo que los usuarios no tendrán que ingresar al BIOS nuevamente para establecer la Opción de Arranque.

{% endnote  %}

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)