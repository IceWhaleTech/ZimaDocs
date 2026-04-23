---
title: Instalación de Arch Linux en ZimaBoard 2
description: 
type: Docs
author: admin
tip: No elimine el encabezado; description es la descripción del artículo. Si está vacío, se tomará el primer párrafo.
permalink: /es/zimaboard/arch-linux-installation-on-zimaboard-2.html
---
## **I. Visión general**

Arch Linux ha sido durante mucho tiempo la preferencia de desarrolladores y usuarios avanzados por su diseño minimalista, modelo de lanzamiento continuo y alto grado de personalización.

ZimaBoard 2 es una placa servidor basada en x86 que equilibra rendimiento y capacidad de expansión, lo que la convierte en una excelente plataforma para desplegar Arch Linux en escenarios como servidores domésticos, servicios autohospedados y entornos de desarrollo o prueba.

Este artículo proporciona una guía completa para instalar Arch Linux en ZimaBoard 2 y realizar la configuración básica del sistema. Los pasos se presentan de manera clara y reproducible, sirviendo como referencia práctica para quienes despliegan Arch Linux en esta plataforma por primera vez.

* * *

## **II. Preparación**

1.  ### Lista de hardware
    

*   **Placa ZimaBoard 2**
*   > ⚠️ En esta guía, el sistema se instala en la eMMC a bordo. El proceso de instalación particionará y formateará la eMMC. Asegúrese de que no haya datos importantes en ella.
>

*   **Monitor HDMI + teclado USB**
    

 *   **Unidad USB (≥ 8 GB)** (para crear el instalador arrancable)

 *   >⚠️ La unidad USB se formateará al crear el medio arrancable. Todos los datos existentes se borrarán. Haga copia de seguridad de los archivos importantes con antelación.
>    

*   **Conexión de red por cable** (recomendada, ya que se necesita Internet durante la instalación)
    
2.  ### Preparación del software
    

* **Un ordenador para crear el USB arrancable** (Windows, macOS o Linux)
    
*   [\- Imagen ISO oficial de Arch Linux (2025.12.01)](https://archlinux.org/download/)
    
*   **Herramienta para crear USB arrancable** (elige una):
    
    *   **balenaEtcher** (multiplataforma, interfaz gráfica, recomendado)
        
    *   **Rufus** (para usuarios de Windows)
        

* * *

## **III. Crear el USB arrancable (ejemplo con balenaEtcher)**

![balenaEtcher burning process](https://manage.icewhale.io/api/static/docs/1766567149666_copyImage.png)

> ⚠️ Crear el USB arrancable formateará la unidad y borrará todos los datos. Haga copia de seguridad antes.

1. Inserte la memoria USB. 
    
2.  Abra **balenaEtcher**.
    
3.  Haga clic en **“Flash from file”** y seleccione `archlinux-2025.12.01-x86_64.iso` descargado.
    
4.  Haga clic en **“Select target”** y elija su unidad USB (no seleccione el dispositivo equivocado).
    
5.  Haga clic en **“Flash!”** y espere a que termine el proceso.
    
6.  Expulse la unidad USB de forma segura.
    

![balenaEtcher burning complete](https://manage.icewhale.io/api/static/docs/1766567150367_copyImage.png)  

* * *

## **IV. Arrancar ZimaBoard 2 desde el USB**

1.  Inserte el USB de instalación en un puerto USB del ZimaBoard 2.
    
2.  Conecte el monitor HDMI, el teclado y el cable Ethernet.
    
3.  Encienda el dispositivo. Cuando aparezca el logotipo **ZIMA**, presione repetidamente **F11** para entrar al **Menú de Arranque**.
    
4.  Use las flechas para seleccionar su unidad USB.
    
5.  Presione **Enter** para confirmar y arrancar desde el USB.
    

![boot options](https://manage.icewhale.io/api/static/docs/1766567151194_copyImage.png)

* * *

## **V. Entrar al entorno de instalación y configuración inicial**

1.  ### Arrancar en el medio de instalación de Arch Linux
    
En el menú de arranque, seleccione la primera opción:

    Arch Linux install medium (x86_64)

![arch startup options](https://manage.icewhale.io/api/static/docs/1766567151645_copyImage.png)

Tras el arranque se mostrará un shell como root:

    root@archiso ~ #

![
Arch installation environment](https://manage.icewhale.io/api/static/docs/1766567152384_copyImage.png)

Esto indica que ya está en el entorno de instalación de Arch Linux.

* * *

2.  ### Verificar interfaces de red
    
Primero compruebe si el sistema detectó alguna interfaz de red:

    ip link

Si ve una interfaz como **enp***, la tarjeta de red ha sido detectada correctamente.

* * *

3.  ### Probar conectividad de red
    
A continuación, pruebe la conexión de red:

    ping archlinux.org

Si el ping tiene respuesta, la red funciona correctamente. Presione `Ctrl + C` para detener la prueba.

![Network connectivity test](https://manage.icewhale.io/api/static/docs/1766567153730_copyImage.png)

* * *

4.  ### Sincronizar la hora del sistema
    
Antes de continuar, se recomienda habilitar la sincronización de tiempo por red para asegurar que la hora del sistema sea precisa.

Habilitar NTP:

    timedatectl set-ntp true

Ver el estado de sincronización:

    timedatectl

Si la hora aparece correcta, la sincronización se completó.

![Synchronize system time](https://manage.icewhale.io/api/static/docs/1766567154188_copyImage.png)

* * *

5.  ### Particionado de disco (GPT)
    
Esta guía asume que el sistema se instalará en la **eMMC a bordo**.

> ⚠️ El proceso de instalación particionará y formateará la eMMC. Asegúrese de que no contiene datos importantes.

* * *

#### Ver información de disco

    lsblk

Ejecute el comando anterior para ver la información de discos y particiones en formato de árbol:

![View disk information](https://manage.icewhale.io/api/static/docs/1766567155139_copyImage.png)

#### Crear tabla de particiones GPT con `cfdisk`

##### Iniciar la herramienta de particionado:

    cfdisk /dev/mmcblk0

![Enter the partition tool](https://manage.icewhale.io/api/static/docs/1766567156058_copyImage.png)

##### Seleccionar tipo de tabla de particiones

Al entrar a `cfdisk` por primera vez, se le pedirá elegir el tipo de tabla. Seleccione: `GPT`

![Select partition table type](https://manage.icewhale.io/api/static/docs/1766567156700_copyImage.png)

##### Crear la primera partición (EFI)

###### ① Crear nueva partición

En la interfaz principal de `cfdisk`:

1.  Use la flecha derecha (→).
2.  Mueva el cursor al menú inferior y seleccione **[NEW]**.

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567157176_copyImage.png)

3.  Presione **Enter** para crear la partición.
    

###### ② Especificar tamaño

Cuando se le pida el tamaño, escriba: `512M`

![Input 512M](https://manage.icewhale.io/api/static/docs/1766567157797_copyImage.png)

Luego presione **Enter**.

###### ③ Establecer tipo de partición

Después de crearla:

1.  Asegúrese de que la partición recién creada está seleccionada.
2.  Use la flecha derecha (→) para ir al menú inferior.
3.  Seleccione **[Type]**.
4.  Presione **Enter**.
    

![View partition type](https://manage.icewhale.io/api/static/docs/1766567158616_copyImage.png)

###### ④ Elegir EFI System

En la lista de tipos de partición:

1.  Use las flechas ↑ / ↓.
2.  Localice **EFI System**.
3.  Presione **Enter** para confirmar.
    

![Select partition type](https://manage.icewhale.io/api/static/docs/1766567159383_copyImage.png)

###### ⑤ Verificar resultado

En la interfaz principal debe aparecer una línea similar a:

`/dev/mmcblk0p1 512M EFI System`

![Confirm partition results](https://manage.icewhale.io/api/static/docs/1766567160155_copyImage.png)

* * *

##### Crear segunda partición (Swap)

###### ① Seleccionar espacio libre

Use la flecha ↓ para seleccionar: `Free space 28.6G`

###### ② Crear nueva partición

*   Use la flecha derecha (→) para ir al menú inferior.
*   Resalte **[NEW]**.
*   Presione **Enter**.
    

###### ③ Especificar tamaño

Cuando se le pida el tamaño, ingrese: `2G`

![Enter 2G](https://manage.icewhale.io/api/static/docs/1766567161097_copyImage.png)

###### ④ Establecer tipo a Linux swap

*   Seleccione la partición de ~2 GB recién creada.
*   Entre en **[Type]**.
*   Elija **Linux swap**.
    

![Set the partition type to Linux swap.](https://manage.icewhale.io/api/static/docs/1766567162104_copyImage.png)

* * *

##### Crear tercera partición (root)

###### ① Seleccionar espacio restante

Debería ver: `Free space 26.6G`. Manténgalo seleccionado.

![Create the third partition (Root).](https://manage.icewhale.io/api/static/docs/1766567162844_copyImage.png)

###### ② Crear nueva partición

*   Use la flecha derecha (→) para ir al menú inferior.
*   Seleccione **[NEW]**.
*   Presione **Enter**.
    

![
Select the 3rd partition (Root).](https://manage.icewhale.io/api/static/docs/1766567163775_copyImage.png)

###### ③ Usar todo el espacio restante

Cuando se solicite el tamaño: **no ingrese nada**; presione Enter para usar todo el espacio restante.

![Create new partition](https://manage.icewhale.io/api/static/docs/1766567164682_copyImage.png)

###### ④ Establecer tipo de partición

La partición creada tendrá por defecto el tipo **Linux filesystem**. En la mayoría de los casos no es necesario cambiarlo.

![Default partition type](https://manage.icewhale.io/api/static/docs/1766567165509_copyImage.png)

* * *

##### Escribir la tabla y salir

###### Escribir la tabla

*   Seleccione **[Write]**.

![Write to partition table](https://manage.icewhale.io/api/static/docs/1766567166450_copyImage.png)

*   Presione **Enter**.
*   Cuando se le solicite, escriba: `yes`
    

![Confirm writing](https://manage.icewhale.io/api/static/docs/1766567167219_copyImage.png)  

###### Salir de `cfdisk`

*   Seleccione **[Quit]**.

![Exit cfdisk](https://manage.icewhale.io/api/static/docs/1766567168020_copyImage.png)

*   Presione **Enter**.

* * *

##### Resumen de particiones

En este punto la partición del disco está completa. Debe tener la siguiente disposición:

| Size |Partition | type |
| - | - | - |
| mmcblk0p1| 512M | EFI System |
| mmcblk0p2 | 2G | Linux swap |
| mmcblk0p3 | 26.6G | Linux filesystem |

![Partition completed](https://manage.icewhale.io/api/static/docs/1766567168969_copyImage.png)

Hasta aquí ha completado la etapa más propensa a errores en la instalación de Arch Linux.

* * *

6.  ### Formatear particiones
    
En términos sencillos:

*   **Formatear** = borrar una partición y prepararla para su uso
*   **Montar** = decirle al sistema cómo usar esas particiones

* * *

#### ① Formatear la partición EFI (FAT32)

Ejecute el siguiente comando para formatear `mmcblk0p1`:

    mkfs.fat -F32 /dev/mmcblk0p1

![Format partition](https://manage.icewhale.io/api/static/docs/1766567169740_copyImage.png)

#### ② Inicializar y activar la partición swap

    mkswap /dev/mmcblk0p2
    swapon /dev/mmcblk0p2

![Initialize and enable partitions](https://manage.icewhale.io/api/static/docs/1766567170625_copyImage.png)

#### ③ Formatear la partición root (ext4)

    mkfs.ext4 /dev/mmcblk0p3

![Format root partition](https://manage.icewhale.io/api/static/docs/1766567171361_copyImage.png)

* * *

7.  ### Montar particiones
    
#### Montar la partición root en `/mnt`

    mount /dev/mmcblk0p3 /mnt

#### Crear y montar la partición EFI

    mkdir /mnt/boot
    mount /dev/mmcblk0p1 /mnt/boot

![Create and mount the EFI partition](https://manage.icewhale.io/api/static/docs/1766567172129_copyImage.png)

* * *

## VI. Instalar Arch Linux (pacstrap)

1.  ### Ejecutar `pacstrap`
    
    pacstrap /mnt base linux linux-firmware networkmanager sudo vim

**Explicación de parámetros (para referencia):**

*   **base**: sistema Arch Linux mínimo
*   **linux**: kernel estándar de Linux
*   **linux-firmware**: firmware de hardware (requerido)
*   **networkmanager**: herramienta de gestión de red
*   **sudo**: gestión de privilegios para usuarios no root
*   **vim**: editor de texto (usado para configuración posterior)

Este paso descargará e instalará paquetes. La duración depende de la velocidad de red. Es normal ver mucho output durante el proceso.

![Execute pacstrap](https://manage.icewhale.io/api/static/docs/1766567172894_copyImage.png)

![pacstrap execution complete](https://manage.icewhale.io/api/static/docs/1766567174214_copyImage.png)

* * *

2.  ### Generar el archivo `fstab`
    
Genere la tabla de montaje para el nuevo sistema:

    genfstab -U /mnt >> /mnt/etc/fstab

![Generate fstab file](https://manage.icewhale.io/api/static/docs/1766567175220_copyImage.png)

* * *

3.  ### Entrar al sistema recién instalado (chroot)
    
*   Cambie al entorno del sistema recién instalado:
    
`arch-chroot /mnt`

*   Tras el cambio, el prompt será similar a:
    
`[root@arch /]#`

**Esto indica que ha salido del entorno de instalación y ahora está dentro del sistema Arch Linux recién instalado.**

![Enter the newly installed system (chroot)](https://manage.icewhale.io/api/static/docs/1766567175932_copyImage.png)

* * *

## VII. Configuración básica del sistema

1.  ### Ajustar la zona horaria
    
Usando Hong Kong como ejemplo:

    ln -sf /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime

Sincronizar el reloj hardware (muy importante):

    hwclock --systohc

![Synchronizing hardware clock](https://manage.icewhale.io/api/static/docs/1766567176716_copyImage.png)

Verificación rápida (opcional)

Si la hora aparece como **UTC+8 (Hong Kong)**, la configuración fue correcta.

![Hardware clock synchronization successful](https://manage.icewhale.io/api/static/docs/1766567177777_copyImage.png)

* * *

2.  ### Configurar locale (idioma)
    
#### ① Editar la lista de locales

Abra el archivo de configuración de locales:

    vim /etc/locale.gen

![Set language](https://manage.icewhale.io/api/static/docs/1766567178733_copyImage.png)

Busque el idioma que desea y descomente la línea correspondiente (quite el `#` al inicio). Ejemplo para inglés (EE. UU.):

    en_US.UTF-8 UTF-8

![Set language en_US](https://manage.icewhale.io/api/static/docs/1766567179497_copyImage.png)

Guarde y salga:

*   Presione **Esc**
*   Escriba `:wq`
*   Presione **Enter**

#### ② Generar locales

    locale-gen

![Generate locale](https://manage.icewhale.io/api/static/docs/1766567180239_copyImage.png)  

3.  ### Establecer el nombre del host
    
Establezca el hostname del sistema. Puede reemplazarlo por cualquier nombre; aquí usamos `arch` como ejemplo:

    echo "arch" > /etc/hostname

![Set system hostname](https://manage.icewhale.io/api/static/docs/1766567180931_copyImage.png)

Luego configure el archivo `hosts`:

    vim /etc/hosts

![vim hosts](https://manage.icewhale.io/api/static/docs/1766567181830_copyImage.png)

Modifique el archivo así:

    127.0.0.1   localhost
    ::1         localhost
    127.0.1.1   arch.localdomain arch

![hosts example](https://manage.icewhale.io/api/static/docs/1766567182309_copyImage.png)

⚠️ Si su hostname no es `arch`, reemplace `arch` en las líneas anteriores por el nombre que haya elegido.

Guarde y salga de Vim:

*   Presione **Esc**
*   Escriba `:wq`
*   Presione **Enter**

* * *

4.  ### Establecer la contraseña de root
    
Establezca una contraseña para el usuario `root`:

    passwd

El sistema le pedirá ingresar la contraseña dos veces:

1.  Ingrese la nueva contraseña
2.  Vuelva a ingresarla para confirmar

⚠️ No se mostrarán caracteres mientras escribe la contraseña (ni siquiera `*`) — esto es normal. Asegúrese de que ambas entradas coincidan.

Una vez completado, podrá iniciar sesión como `root` con esa contraseña.

![Set root password](https://manage.icewhale.io/api/static/docs/1766567182798_copyImage.png)

* * *

5.  ### Habilitar el servicio de red
    
Habilite NetworkManager para que se inicie automáticamente en el arranque:

    systemctl enable NetworkManager

![Enable network services](https://manage.icewhale.io/api/static/docs/1766567183538_copyImage.png)

![Network service enabled successfully](https://manage.icewhale.io/api/static/docs/1766567184534_copyImage.png)

* * *

## VIII. Instalar y configurar el cargador de arranque systemd-boot

1.  ### Instalar systemd-boot
    
Ejecute:

    bootctl install

![Install systemd-boot](https://manage.icewhale.io/api/static/docs/1766567185486_copyImage.png)

* * *

2.  ### Crear una entrada de arranque para Arch Linux
    
Necesita crear el siguiente archivo:

`/boot/loader/entries/arch.conf`

Este archivo indica a systemd-boot:

*   Dónde está el kernel
*   Dónde está el initramfs
*   Qué partición contiene el sistema raíz

#### ① Obtener el PARTUUID de la partición root

    blkid /dev/mmcblk0p3

Verá una salida similar a:

    /dev/mmcblk0p3: PARTUUID="12345678-9abc-def0-1234-56789abcdef0"

> Copie y anote el valor entre comillas.

![Write down PARTUUID.](https://manage.icewhale.io/api/static/docs/1766567186422_copyImage.png)

* * *

#### ② Crear el archivo de entrada de arranque

    vi /boot/loader/entries/arch.conf

![Create startup configuration file](https://manage.icewhale.io/api/static/docs/1766567187080_copyImage.png)

En modo inserción (presione **i**) introduzca el siguiente contenido:

⚠️ Reemplace `YOUR_PARTUUID` por el valor real obtenido en el paso anterior.

    title   Arch Linux
    linux   /vmlinuz-linux
    initrd  /initramfs-linux.img
    options root=PARTUUID=YOUR_PARTUUID rw

![arch.conf example](https://manage.icewhale.io/api/static/docs/1766567187556_copyImage.png)

Guarde y salga:

*   Presione **Esc**
*   Escriba `:wq`
*   Presione **Enter**

* * *

## IX. Finalizar instalación y reiniciar

### Salir del chroot

Salga del entorno chroot: `exit`

![Exit the chroot environment](https://manage.icewhale.io/api/static/docs/1766567188512_copyImage.png)

### Reiniciar el sistema

`reboot`

> ⚠️ Antes de reiniciar, **asegúrese de retirar el medio de instalación** (unidad USB / ISO).

![Restart the system](https://manage.icewhale.io/api/static/docs/1766567189421_copyImage.png)

* * *

### Instalación completada

Después de un arranque exitoso, debería ver una pantalla similar a la siguiente:

![Installation completed](https://manage.icewhale.io/api/static/docs/1766567190046_copyImage.png)

🎉 En este punto, la instalación básica de **Arch Linux** está completa. El sistema es ahora una base limpia, funcional y extensible.

### Pasos siguientes recomendados:

*   Configurar la red
*   Instalar un entorno de escritorio

Consulte la Arch Wiki oficial para más información: [https://wiki.archlinux.org/title/General\_recommendations](https://wiki.archlinux.org/title/General_recommendations)

Todas las configuraciones adicionales pueden construirse gradualmente sobre esta base.
