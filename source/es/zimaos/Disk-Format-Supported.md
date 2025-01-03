---
title: Recuperación de fábrica de ZimaBoard CasaOS
---

# Preparación

Descargue la imagen oficial de ZimaBoard CasaOS

- Para [**imagen ZimaBoard CasaOS -832/432**](https://drive.google.com/file/d/1b-k7d1LzPHNUtem-hOrHB5dDt0_AC6mK/view)

- Para [**imagen ZimaBoard CasaOS -216**](https://drive.google.com/file/d/1PFw1JXoimwUvOX9kgkmOSUM0evi_GGxv/view)
## Crear una imagen usando una memoria USB

**Preparar con anticipación**

- Descargue e instale [BalenaEtcher](https://www.balena.io/etcher/) en su computadora
- Descargue la imagen oficial de ZimaBoard CasaOS

Preparación relacionada con ZimaBoard.

- ZimaBoard y adaptador de corriente
- Una unidad USB (8GB+, los datos en ella se borrarán)
- Un adaptador miniDP a DP/HDMI (utilizado para conectar a un monitor)
- Un monitor
- Un teclado
- Un hub USB (opcional, si los puertos USB no son suficientes)

## Instalar usando una unidad USB

###  Abra [BalenaEtcher](https://www.balena.io/etcher/)

![Abrir Balenaetcher](/images/Restore-factory-settings/open-balenaetcher.png)

### Seleccione la imagen del sistema 

![Elegir imagen](/images/Restore-factory-settings/choose-image.png)

### Seleccione su unidad USB insertada

![Elegir Usb](/images/Restore-factory-settings/choose-usb.png)

### Haga clic en "Flash!" 

**Es posible que se le pida que ingrese su contraseña del sistema durante el proceso, simplemente ingrésela y haga clic en OK.**

![Usando Balenaetcher Haga clic en Flash](/images/Restore-factory-settings/click-flash.png)

![Ingrese su cuenta de computadora y contraseña](/images/Restore-factory-settings/enter-password.png)

**Todo el proceso tomará unos minutos, dependiendo del tamaño de su imagen del sistema y la velocidad de lectura/escritura de su unidad USB.**

![Esperando Flash](/images/Restore-factory-settings/waiting-flash.png)

### ¡Completo! 

**Retire la unidad USB y estará listo para comenzar!**

![Completar crear disco USB](/images/Restore-factory-settings/complete-flash.png)

## **Arrancar desde la unidad USB de instalación**

### Conectar los accesorios a ZimaBoard

Conecte su unidad USB, monitor, teclado, `hub USB` **(opcional)**, `ratón` **(opcional)**, `cable de red` **(recomendado)** a ZimaBoard.

![Diagrama de conexión](/images/Restore-factory-settings/connection-diagram.png)

### Encienda y seleccione el dispositivo de arranque

Conecte la alimentación y presione **F11** continuamente.

## **Iniciar instalación**

**1. Seleccione su unidad USB comenzando con UEFI en el menú del dispositivo de arranque.**

![Elegir arranque UEFI](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

**2. Espere unos minutos**

![Esperando arranque](/images/Restore-factory-settings/witting-boot.png)

**3. Seleccione el primero**

![Seleccionar mmcblk0](/images/Restore-factory-settings/select-mmcblk0.png)

**4. Ingrese `y`**

![Instalando CasaOS](/images/Restore-factory-settings/enter-yes.png)

**5. Espere unos minutos**

![Esperando instalador de CasaOS](/images/Restore-factory-settings/witting-install.png)

**6. Seleccione el primero**

![Seleccionar Apagar](/images/Restore-factory-settings/select-poweroff.png)

**¡Termine la instalación después de la cuenta regresiva！！**

# Video tutoriales cortos

{% youtuber video SMV3wG1YbUk %}
https://www.youtube.com/embed/SMV3wG1YbUk
{% endyoutuber %}

**Nota**: al seleccionar el almacenamiento, tenga cuidado de seleccionar el disco correcto

Debido a que los sistemas operativos y los proveedores de almacenamiento calculan los tamaños de espacio de almacenamiento de manera diferente, la capacidad que ve al instalar su sistema no es la misma que la capacidad del hardware. Puede notar la diferencia por el tipo de disco y el tamaño aproximado.
El tipo de almacenamiento integrado del ZimaBoard es eMMC, que también puede ser reconocido como un dispositivo MMC en el sistema operativo.

**¡Atención!** Es posible que deba modificar la secuencia de arranque en el BIOS o seleccionar el dispositivo de arranque en el momento del arranque si instala el sistema operativo en un disco duro externo.