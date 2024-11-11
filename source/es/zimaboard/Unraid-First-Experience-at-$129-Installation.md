---
title: La Primera Experiencia de Unraid a $129 - Instalación
---

# Introducción a Unraid

![introduce unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-introduce-unraid.png)

Unraid OS permite a los aficionados a los medios sofisticados, gamers y otros usuarios de datos intensivos tener un control total sobre sus datos, medios, aplicaciones y escritorios, utilizando casi cualquier combinación de hardware.

# Primera Opción - Imagen de Software Oficial de Grabación

## Instalación Usando una Memoria USB

Prepara una memoria USB (mayor de 1G) y formateala en formato FAT32. Cambia el nombre a UNRAID (Mac)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive1.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive2.png)

![Unraid Usb flash drive](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-format-usb-flash-drive3.png)

## Descarga el [Creador USB Oficial](https://unraid.net/download)

![Creator Unraid Offical](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-usb-creator.png)

## Descarga la [Imagen Oficial](https://unraid.net/download)

![Download Unraid offical image](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-download-offical-image.png)

## Abre el Creador USB y Escribe UnraidOS

Selecciona las siguientes opciones según la especificación:

![write unraid os](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-unraid-os.png)

**Haz clic en 'Escribir' y espera.**

![write unraid image](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image.png)

![write unraid image done](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-write-image-done.png)

# Segunda Opción - Escribe la Imagen del Sistema Manualmente

## Modificar "make_bootable"

**Descarga el paquete de imagen y extrae todos los archivos, luego copia los archivos extraídos en el directorio raíz de tu memoria USB**

> **Consejos:**
>
> El formato de la memoria USB también necesita ser FAT32
>
> Los sistemas Windows necesitan ejecutar el archivo make_bootable.bat desde la memoria USB como administrador
>
> Los sistemas Linux ejecutan el archivo make_bootable_linux

![change Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-click-boottable.png)

## Completar la Grabación

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in.png)

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-complete-burn-in1.png)

## Instalando UnraidOS en ZimaBoard

## Arrancar desde la Memoria USB de Instalación

![Boot Unraid](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot.png)

## Elegir SO

![Unraid boottable](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-usb-boot-choose-unraidos.png)

> ## Selector de Modo de Arranque (Syslinux)
> 
> Después de configurar tu BIOS, se te mostrará el menú de arranque de Unraid Server OS. Hay varias opciones disponibles para seleccionar:
>
> **unRAID OS (Sin Cabeza)**
>
> El modo de arranque estándar para Unraid Server OS. El modo sin cabeza utiliza menos memoria que el modo de escritorio, pero se basa en el uso de otro dispositivo para acceder a la WebGUI para gestión.
>
> **Unraid OS Modo GUI (Escritorio)**
>
> El modo de escritorio carga una interfaz de escritorio ligera con un menú de lanzamiento rápido para acceder a la WebGUI, documentación del producto y utilidades útiles de Linux, incluyendo un shell bash, midnight commander y htop. Este modo puede ser útil para los usuarios que intentan diagnosticar problemas de conectividad de red o para aquellos que no tienen un dispositivo separado para conectar a la WebGUI.
> 
> **unRAID OS Modo Seguro (Sin Cabeza)**
>
> Usa este modo de arranque para diagnosticar si los complementos están causando problemas de estabilidad en tu sistema.

![log in unraid OS](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-log-in-unraid-with-ip.png)

# Conectando a la WebGUI de Unraid

Hay dos métodos para conectarse a la WebGUI en Unraid:

- Arrancar Unraid en modo GUI e iniciar sesión (el nombre de usuario es **`root`**, sin contraseña por defecto); o

- Abrir un navegador web desde tu Mac o PC y navegar a **`http://tower.local`** Nota: si configuraste un nombre de host diferente en el Creador de Flash USB, usa ese nombre en lugar de **`tower`**.

![Unraid user dashboard](/images/Unraid-First-Experience-At-$129-Installation/unraid-first-experience-at-$129-unraid-dashborad.png)

Esta es la interfaz principal de UNRAID. Se puede ver mucha información en esta página, como el estado del sistema, información de la placa base, uso de la CPU, red, información del disco, información del usuario, etc.


[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)