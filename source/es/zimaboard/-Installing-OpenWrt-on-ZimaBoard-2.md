# 1.Introducción

![El logo oficial de openwrt](https://manage.icewhale.io/api/static/docs/1763713194262_copyImage.png)

OpenWrt es un sistema operativo basado en Linux de código abierto, ampliamente utilizado en routers domésticos, routers empresariales, routers suaves, dispositivos NAS y otros equipos de red. Ofrece una gran flexibilidad y personalización, permitiendo a los usuarios gestionar sus dispositivos de red como si estuvieran operando un pequeño servidor Linux.

Las características clave de OpenWrt incluyen:

*   **Código abierto y transparente**: Control total sin componentes de caja negra.
    
*   **Altamente extensible**: Instale paquetes adicionales como VPN, AdGuard, Docker, y más.
    
*   **Alto rendimiento**: Bien adaptado para redes de gigabit y hardware potente de routers suaves.
    
*   **Redes flexibles**: Admite características avanzadas como VLAN, multi-WAN y enrutamiento bypass.
    

Este tutorial tiene como objetivo demostrar cómo usar el ZimaBoard 2 para construir un router suave de alto rendimiento y guiarlo a través del proceso completo de instalación de OpenWrt.

* * *

# **2.Preparativos**

Por favor, prepare el siguiente hardware y herramientas de antemano para asegurar un proceso de instalación sin problemas:

**1.Dispositivo ZimaBoard 2**

**2.Unidad USB (≥16GB)** para crear el instalador de arranque

El proceso de flasheo borrará todos los datos en la unidad USB. ¡Por favor, haga una copia de seguridad de cualquier archivo importante antes de comenzar!

**3.PC (Windows / macOS)** para descargar el firmware y flashearlo en la unidad USB

**4.Monitor + Adaptador MiniDP a HDMI/DP + teclado + cable Ethernet**

* * *

# 3.Pasos de instalación

## **Paso 1: Crear una unidad USB de arranque con OpenWrt**

**Descargue el firmware**

*   Visite la página oficial de descargas: [Descargar el firmware oficial de openwrt](https://firmware-selector.openwrt.org/?version=24.10.4&target=x86%2F64&id=generic)
    
*   Seleccione el tipo de imagen recomendada: Elija la versión **COMBINED-EFI (SQUASHFS)**. Esta es una imagen de arranque completa diseñada para dispositivos x86_64, soporta arranque UEFI y es totalmente compatible con el entorno BIOS de ZimaBoard 2.
    
    ![Descargar el firmware oficial de openwrt](https://manage.icewhale.io/api/static/docs/1763713196060_copyImage.png)
    

## Paso 2: Flashear la imagen en la unidad USB usando balenaEtcher

1.Prepare una unidad USB vacía en su computadora

El proceso de flasheo borrará todos los datos en la unidad USB. ¡Por favor, haga una copia de seguridad de cualquier archivo importante antes de comenzar!

2.Inserte la unidad USB en su PC

![Flasheo con balenaEtcher](https://manage.icewhale.io/api/static/docs/1763713196652_copyImage.png)

3.Abra balenaEtcher(Si no lo tiene instalado, puede descargarlo desde [el sitio oficial](https://etcher.balena.io/).)

4.Comience a flashear

*   Haga clic en **Flash from file** y seleccione la imagen descargada de OpenWrt x86
    
*   Haga clic en **Select target** y elija su unidad USB
    
*   El proceso de flasheo generalmente toma **1–3 minutos**, así que espere pacientemente
    

5.Flashing completo — retire la unidad USB

  Una vez que Etcher muestre **“¡Flasheo completo!”**, puede retirar la unidad USB de forma segura. Su unidad USB ahora es un medio de instalación OpenWrt de arranque.

![El flasheo con balenaEtcher se ha completado](https://manage.icewhale.io/api/static/docs/1763713197464_copyImage.png)

## **Paso 3: Arrancar el ZimaBoard 2 desde la unidad USB**

**1.Prepare y conecte el hardware**

*   Inserte la unidad USB de arranque OpenWrt recién creada en uno de los puertos USB del ZimaBoard 2
    
*   Use un cable Ethernet para conectar el **puerto LAN (el más cercano al conector de alimentación)** a su computadora
    
*   Conecte la fuente de alimentación y asegúrese de que el teclado y el monitor (u otro método de control) estén listos
    

**2.Ingrese al menú de arranque**

*   Presione el botón de encendido para iniciar el ZimaBoard 2
    
*   Cuando aparezca la pantalla de arranque, presione repetidamente **F11** para ingresar al **Menú de arranque**
    

**3.Seleccione la unidad USB como dispositivo de arranque**

*   En el Menú de arranque, use las teclas de flecha para seleccionar su unidad USB
    
*   Presione **Enter** para confirmar y arrancar desde la unidad USB
    

![Opción de secuencia de arranque](https://manage.icewhale.io/api/static/docs/1763713198322_copyImage.png)

**4.Confirme que OpenWrt ha arrancado correctamente**

*   Si todo está funcionando correctamente, el ZimaBoard 2 arrancará desde la unidad USB e ingresará al sistema OpenWrt (generalmente una interfaz de línea de comandos)
    

![openwrt ha sido lanzado con éxito](https://manage.icewhale.io/api/static/docs/1763713201272_copyImage.png)

## **Paso 4: Acceder a la interfaz web de OpenWrt a través del navegador**

**1.Asegúrese de que su computadora esté conectada al ZimaBoard 2**

*   El cable Ethernet de su computadora debe estar conectado al **puerto LAN (el puerto más cercano al conector de alimentación)** en el ZimaBoard 2
    
*   El adaptador de red de su computadora debe estar configurado para **obtener una dirección IP automáticamente (DHCP)**
    
*   En la mayoría de los casos, OpenWrt asignará a su computadora una dirección en el rango **192.168.1.x** (por ejemplo, 192.168.1.100)
    

**2.Abra la página de gestión de OpenWrt en su navegador** En su computadora, abra cualquier navegador (Chrome, Edge, Firefox, etc.) e ingrese la siguiente dirección en la barra de URL:

    http://192.168.1.1

**3.Inicie sesión en OpenWrt** Usuario predeterminado: **root** Contraseña predeterminada: **password**

![Interfaz de inicio de sesión de openwrt](https://manage.icewhale.io/api/static/docs/1763713201956_copyImage.png)

![La interfaz principal de openwrt](https://manage.icewhale.io/api/static/docs/1763713203997_copyImage.png)

# **4.Notas finales**

En este punto, ha completado el proceso básico de instalación de OpenWrt en el ZimaBoard 2.

Desde descargar el firmware y crear la unidad USB de arranque hasta arrancar desde ella e iniciar sesión correctamente en la interfaz web, ha transformado esta pequeña placa en un potente router suave.

A partir de aquí, puede seguir personalizando su configuración según sus necesidades, como:

*   Configurar PPPoE o establecer un router bypass (puente)
    
*   Instalar complementos comunes (Docker, herramientas de bloqueo de anuncios, servicios proxy, etc.)
    
*   Configurar acceso remoto, NAS, servidores multimedia, y más
    

La combinación de **ZimaBoard 2 + OpenWrt** ofrece posibilidades infinitas: este tutorial es solo el comienzo.

Si encuentra algún problema durante el proceso, no dude en compartir su situación y los mensajes de error con la comunidad para obtener ayuda.