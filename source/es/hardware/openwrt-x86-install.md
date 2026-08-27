---
title: Instalación de OpenWrt en ZimaBoard 2
description: 
type: Docs
author: admin
tip: No elimine el formato fijo de la barra superior, la descripción es el resumen del artículo, si no se llena, se tomará el primer párrafo.
---
##  1.Introducción

![El logo oficial de openwrt](https://manage.icewhale.io/api/static/docs/1764298451910_The_official_logo_of_openwrt.png)

OpenWrt es un sistema operativo de enrutador basado en Linux de código abierto, ampliamente utilizado en enrutadores domésticos, enrutadores empresariales, enrutadores suaves, dispositivos NAS y otros equipos de red. Ofrece una gran flexibilidad y personalización, permitiendo a los usuarios gestionar sus dispositivos de red como si operaran un pequeño servidor Linux. 

Las características clave de OpenWrt incluyen:

*   **Código abierto y transparente**: Control total sin componentes de caja negra.
    
*   **Altamente extensible**: Instala paquetes adicionales como VPN, AdGuard, Docker, y más.
    
*   **Alto rendimiento**: Ideal para redes gigabit y hardware de enrutadores suaves potentes.
    
*   **Redes flexibles**: Soporta características avanzadas como VLAN, multi-WAN y enrutamiento de bypass.
    

Este tutorial tiene como objetivo demostrar cómo usar el ZimaBoard 2 para construir un enrutador suave de alto rendimiento y guiarte a través del proceso completo de instalación de OpenWrt.

* * *

## **2.Preparativos**

Por favor, prepara el siguiente hardware y herramientas con anticipación para asegurar un proceso de instalación sin problemas:

* **Dispositivo ZimaBoard 2**

* **Unidad USB (≥16GB)** para crear el instalador de arranque

  {% note warn Tips %}

El proceso de flasheo borrará todos los datos de la unidad USB. ¡Por favor, haz una copia de seguridad de cualquier archivo importante de antemano!
{% endnote %}


* **PC (Windows / macOS)** para descargar el firmware y flashearlo a la unidad USB

* **Monitor + adaptador MiniDP a HDMI/DP + teclado + cable Ethernet**

* * *

## 3.Pasos de Instalación

### **Paso 1: Crear una Unidad USB de Arranque con OpenWrt**

**Descargar el firmware**

*   Visita la página oficial de descargas: [Descargar el firmware oficial de openwrt](https://firmware-selector.openwrt.org/?version=24.10.4&target=x86%2F64&id=generic)
    
*   Selecciona el tipo de imagen recomendado: Elige la versión **COMBINED-EFI (SQUASHFS)**. Esta es una imagen completa de arranque diseñada para dispositivos x86_64, soporta arranque UEFI y es totalmente compatible con el entorno BIOS de ZimaBoard 2.
    
    ![Descargar el firmware oficial de openwrt](https://manage.icewhale.io/api/static/docs/1764302027764_Download_the_official_firmware_of_openwrt.png)
   

### Paso 2: Flashear la Imagen en la Unidad USB Usando balenaEtcher

**1.Prepara una unidad USB vacía en tu computadora**

  {% note warn Tips %}


El proceso de flasheo borrará todos los datos de la unidad USB. ¡Por favor, haz una copia de seguridad de cualquier archivo importante de antemano!
{% endnote %}


**2.Insertar la unidad USB en tu PC**

![balenaEtcher quemando](https://manage.icewhale.io/api/static/docs/1764309100941_balenaEtcher_burning.png)


**3.Abrir balenaEtcher**(Si no lo tienes instalado, puedes descargarlo desde [el sitio web oficial](https://etcher.balena.io/).)

**4.Comenzar el flasheo**

*   Haz clic en **Flash from file** y selecciona la imagen OpenWrt x86 descargada
    
*   Haz clic en **Select target** y elige tu unidad USB
    
*   El proceso de flasheo generalmente toma **1–3 minutos**, por favor, espera pacientemente
    

**5.Flasheo completo — retira la unidad USB**

  Una vez que Etcher muestre **“Flash Complete!”**, puedes retirar la unidad USB con seguridad. Tu unidad USB ahora es un medio de instalación de OpenWrt de arranque.

![El flasheo de balenaEtcher está completo](https://manage.icewhale.io/api/static/docs/1764299872754_The_burning_of_balenaEtcher_is_complete.png)

### **Paso 3: Arrancar ZimaBoard 2 desde la Unidad USB**

**1.Prepara y conecta el hardware**

*   Inserta la nueva unidad USB de arranque OpenWrt en uno de los puertos USB de ZimaBoard 2
    
*   Usa un cable Ethernet para conectar el **puerto LAN (el más cercano al conector de alimentación)** a tu computadora
    
*   Conecta la fuente de alimentación y asegúrate de que el teclado y el monitor (u otro método de control) estén listos
    

**2.Entrar al Menú de Arranque**

*   Presiona el botón de encendido para iniciar ZimaBoard 2
    
*   Cuando aparezca la pantalla de arranque, presiona repetidamente **F11** para ingresar al **Menú de Arranque**
    

**3.Seleccionar la unidad USB como dispositivo de arranque**

*   En el Menú de Arranque, usa las teclas de flecha para seleccionar tu unidad USB
    
*   Presiona **Enter** para confirmar y arrancar desde la unidad USB
    

![Opción de secuencia de inicio](https://manage.icewhale.io/api/static/docs/1764300015325_Startup_sequence_option.png)


**4.Confirmar que OpenWrt ha arrancado correctamente**

*   Si todo funciona correctamente, ZimaBoard 2 arrancará desde la unidad USB e ingresará al sistema OpenWrt (generalmente una interfaz de línea de comandos)
    

![openwrt ha arrancado con éxito](https://manage.icewhale.io/api/static/docs/1764300101135_openwrt_has_been_launched_successfully.png)


### **Paso 4: Acceder a la Interfaz Web de OpenWrt a Través del Navegador**

**1.Asegúrate de que tu computadora esté conectada al ZimaBoard 2**

*   El cable Ethernet de tu computadora debe estar conectado al **puerto LAN (el puerto más cercano al conector de alimentación)** en ZimaBoard 2
    
*   El adaptador de red de tu computadora debe estar configurado para **obtener una dirección IP automáticamente (DHCP)**
    
*   En la mayoría de los casos, OpenWrt asignará a tu computadora una dirección en el rango **192.168.1.x** (por ejemplo, 192.168.1.100)
    

**2.Abrir la página de administración de OpenWrt en tu navegador** En tu computadora, abre cualquier navegador (Chrome, Edge, Firefox, etc.) e ingresa la siguiente dirección en la barra de URL:

    http://192.168.1.1

**3.Iniciar sesión en OpenWrt** Nombre de usuario predeterminado: **root** Contraseña predeterminada: **password**



![interfaz de inicio de sesión de openwrt](https://manage.icewhale.io/api/static/docs/1764301256473_openwrt_login_interface.png)

![](https://manage.icewhale.io/api/static/docs/1764301317557_The_main_interface_of_openwrt.png)


## **4.Notas Finales**

En este punto, has completado el proceso básico de instalación de OpenWrt en ZimaBoard 2.

Desde la descarga del firmware y la creación de la unidad USB de arranque, hasta arrancar desde ella y acceder con éxito a la interfaz web, has transformado esta pequeña placa en un poderoso enrutador suave.

A partir de aquí, puedes seguir personalizando tu configuración según tus necesidades, como:

*   Configuración de PPPoE o configurar un enrutador de bypass (puente)
    
*   Instalar complementos comunes (Docker, herramientas de bloqueo de anuncios, servicios de proxy, etc.)
    
*   Configurar acceso remoto, NAS, servidores multimedia y más
    

La combinación de **ZimaBoard 2 + OpenWrt** ofrece posibilidades infinitas; este tutorial es solo el comienzo.

Si encuentras algún problema durante el proceso, no dudes en compartir tu situación y los mensajes de error con la comunidad para obtener ayuda.
