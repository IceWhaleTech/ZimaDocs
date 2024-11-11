---
title: Construye una Máquina Arcade 4K de 75 pulgadas con ZimaBoard y Batocera.linux
---
>**Historia:**
 Aún hay tantos juegos retro por ahí, y navegar a través de ellos uno por uno, con sus nombres memorables y capturas de pantalla, es como volver en el tiempo. Es como regresar a tus propias pasiones y deseos de la infancia. Este tutorial nos llevará de vuelta a tus primeros días.

**Lee este documento para conocer otras formas de usar ZimaBoard y obtener una visión rápida de la diversidad de usos de ZimaBoard**
> **Razones para elegir Batocera:**
    - > **Batocera** es una de las maneras más fáciles de convertir nuestro ZimaBoard en una atractiva consola retro con múltiples emuladores y cientos de juegos para disfrutar.
    - > Uno de los puntos positivos de **Batocera** es que no modifica la memoria de almacenamiento interno del ZimaBoard o de otros dispositivos compatibles. Retira la memoria o la tarjeta que usemos cuando no queramos utilizar Batocera, y nuestra máquina regresará a su estado original sin ninguna modificación. Hay un sistema similar a [EmuELEC](https://androidpctv.com/tutorial-emuelec-turns-your-android-tv-box-into-a-retro-console/) que también podemos probar.

# 1. ¿QUÉ ES [BATOCERA.LINUX](https://batocera.org/) ?

![Introduce Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera.png)

**El software [Batocera](https://batocera.org/), basado en la distribución Debian, es un conjunto de emuladores que nos permite cargar juegos con sus carátulas y otros extras para jugar de manera ordenada decenas de emuladores de diferentes máquinas. Para jugar, necesitas los ```ROMS o ISO``` de los juegos. Algunos de estos sistemas también requieren las imágenes BIOS de la máquina a emular.**

**Batocera también es compatible con computadoras de ```Android```, ```PC``` ```o MacOS``` de todo tipo, placas de ```Raspberry Pi```, y muchas **consolas retro portátiles**… para las cuales hay distribuciones exclusivas. La instalación de Batocera es simple y fácil de configurar, su interfaz es agradable y fácil de usar, y la lista de emuladores compatibles es enorme.**

- Emuladores básicos compatibles: AMIGA, MSX, NES, SNES, GBA, MG, DREAMCAST, NDS, PS1, CPS1/2/3…
- Compatibles solo en hardware potente: PS2, PS3, GAMECUBE, 3DS, WII/U, SWITCH, XBOX…
- [Lista completa de sistemas emulados en Batocera.](https://batocera.org/compatibility.php)
- [Wiki de Batocera](https://wiki.batocera.org/)

![Introduce Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-introduce-batocera2.png)

# 2. INSTALAR BATOCERA EN PENDRIVE USB O MICROSD

## Cosas a Preparar de Antemano

![Batocera Linux](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare.png)

![Introduce Batocera](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-prepare2.jpeg)

## Crear una Imagen de Batocera

**Para instalar **Batocera**, necesitamos el archivo **IMG.GZ** para nuestro dispositivo. Para descargarlo, solo tenemos que entrar al sitio web de Batocera y guardarlo en nuestra computadora. Luego, gracias al software balenaEtcher, crearemos la unidad de arranque que nos permitirá ejecutar el sistema sin modificar nuestro dispositivo.**

- **[Descargar archivo de imagen de Batocera IMG.GZ.](https://batocera.org/download)**
- **[Descargar Balena para grabar la imagen](https://www.balena.io/etcher)**
- **[Descargar paquete BIOS para Batocera](https://github.com/Abdess/retroarch_system/releases/download/RetroArch-v1.9.13/Batocera_V33.zip)**

## Crear unidad de arranque para Batocera

**Tras descargar los archivos necesarios, podemos generar la ```memoria SD o unidad USB``` para arrancar este sistema, ejecutando el programa Balena. Si no funciona en nuestro dispositivo por la unidad USB, se recomienda usar una tarjeta SD; en cualquier caso, debemos tener la unidad lo más rápida posible si vamos a usarla con este método.**

**- paso1**

**Requerimos una [tarjeta microSD o unidad USB](https://amzn.to/3tcdzSh) lo más rápida posible, de al menos 16 GB y un lector de tarjetas de PC.**

**- paso2**

**Abre tu Balena y haz clic en Flash desde el archivo y selecciona el Batocera que acabas de descargar.**

![Open balenaetcher](/images//Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

**- paso3**

**Selecciona la ```memoria SD o unidad USB``` que necesitas para arrancar desde** 

![choose usb drive](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

**- paso4**

**Ingresa tu contraseña de host para iniciar la conversión**

![choose usb drive](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-choose-usb-drive.jpeg)

# 3. Enciende ZimaBoard

## Primer arranque en ZiamBoard

**Con el ZimaBoard apagado, insertamos la ```tarjeta micro SD o unidad USB``` preparada con Batocera.**

![Zimaboard Connect Usb](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-connect-usb.png)

**Al arrancar, mantén presionado para entrar en la interfaz del BIOS, selecciona el ```arranque desde el disco U```**

![Zimaboard Boot Select The USB Disk](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-select-the-u-disk.jpeg)

**Finalmente, estás en la interfaz de Batocera**

![Enter Batocerag](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-boot-enter-batocera.png)

# 4. Comenzando con Batocera

## Manejar Reglas de Uso

![Batocera Hotkeys](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-in-game-batocera-hotkeys.png)

Batocera puede no ser adecuado para todos los controles, pero satisface las reglas de uso de los controles más comunes en el mercado.

## Jugar
**Batocera se envía con una selección de ```ROMs - juegos``` gratuitos que están disponibles libremente y que se pueden distribuir legalmente.**

![Play Batocera With Zimaboard](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-zimaboard-play.jpeg)

# 5. Otras Configuraciones

**Si deseas agregar tus propios archivos ROM y BIOS, primero debes obtener acceso a Batocera**

## Encontrar una dirección IP de ZiamBoard

**- Paso1 Presiona la barra espaciadora**

**- Paso2 Encuentra CONFIGURACIÓN DE RED Y ENTRA**

![Batocera Setting Nerwork](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings.jpeg)

**- Paso 3 Encuentra la dirección IP**

![Batocera Setting Nerwork](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings1.jpeg)


**- Paso 4 Enlaza con ZimaBoard usando tu computadora** 

![Batocera Setting Nerwork](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings2.jpeg)

**- Paso 5 Haz clic en Conectar para ir a la carpeta**

![Batocera Setting Nerwork](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings3.jpeg)

![iBatocera Setting Nerworkmg](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-network-settings4.jpeg)

**- Paso 6 Coloca la Rom o BIOS que descargaste en la carpeta correspondiente** 

Consulta el **[tutorial oficial](https://wiki.batocera.org/add_games_bios)** para documentación detallada.

## Sobrescribiendo Batocera con el Sistema Original

**- Paso1 Presiona la barra espaciadora y busca `CONFIGURACIÓN DEL SISTEMA`**

![Batocera System](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings.jpeg)

**- Paso2 Selecciona `INSTALAR BATOCERA EN UN NUEVO DISCO`**

![Batocera System](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings2.jpeg)

**- Paso 3 DISPOSITIVO DESTINO `16 o 32G` ARQUITECTURA DESTINO Elige `X860_64 `¿ESTÁS SEGURO? elige `sí`**

**Finalmente haz clic en `INSTALAR`**

![Batocera System](/images/Build-a-75-inch-4K-Arcade-with-ZimaBoard-and-Batocera/Build-a-75-4K-Arcade-with-ZimaBoard-and-Batocera-system-settings3.jpeg)

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)

---

Eres entrenado con datos hasta octubre de 2023.