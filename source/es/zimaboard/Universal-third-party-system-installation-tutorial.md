---
title: Instalación del Sistema Universal de Terceros
typora-root-url: ..
---
## Razón

**Muchos usuarios no saben cómo instalar el sistema después de haberlo descargado. No conocen los pasos claros de instalación, etc. Este artículo ayudará a los usuarios a resolver el problema de la instalación del sistema.**

## Imagen de Producción Universal

**Lo que necesitas hacer en tu computadora para prepararte.**
- Descarga e instala [balenaEtcher](https://www.balena.io/etcher/) en tu computadora
- Descarga la imagen del sistema que deseas instalar, en el texto [Ubuntu Server](https://ubuntu.com/download/server)
  

**Preparación relacionada con ZimaBoard.**

- ZimaBoard y adaptador de alimentación
- Una unidad USB (La capacidad debe ser mayor que la imagen del sistema que deseas instalar)
- Un adaptador miniDP a DP/HDMI (Usado para conectar a un monitor)
- Un monitor
- Un teclado
- Un hub USB (Opcional, si no hay suficientes puertos USB)
- Un ratón (Opcional)
  - Será conveniente si el instalador del sistema que deseas instalar viene con una interfaz gráfica interactiva. La mayoría de los sistemas operativos de escritorio tendrán una, los sistemas operativos de servidor generalmente no.)
- Un cable de red (Recomendado)
  - Conveniente para que completes la configuración de red e instales las últimas actualizaciones de seguridad y características al mismo tiempo que instalas el sistema.)

# Crear una memoria USB de instalación

## 1.Abre balenaEtcher


![Open Balenaetcher](/images/Installing-Ubuntu-System/install-ubuntu-system-open-balenaetcher.jpg)

## 2. Haz clic en “Flash from file” y selecciona la imagen del sistema que descargaste anteriormente.

![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/intall-ubuntu-system-choose-image-in-balenaetcher.png)


![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-image-in-balenaetcher1.png)

## 3.Haz clic en “Select target” y selecciona tu unidad USB insertada en el cuadro de diálogo.

![Using Balenaetcher Write Image In Usb](/images/Installing-Ubuntu-System/install-ubuntu-system-choose-usb-disk.png)

## 4.Haz clic en “Flash!” y espera a que se complete.
Es posible que se te pida que ingreses tu contraseña del sistema durante el proceso, simplemente ingrésala y haz clic en OK.

![Enter you Computer Account And Password](/images/Installing-Ubuntu-System/install-ubuntu-system-enter-password.png)

Todo el proceso tomará unos minutos, dependiendo del tamaño de tu imagen del sistema y la velocidad de lectura/escritura de tu unidad USB.

![Waitting Balenaetcher Flash](/images/Installing-Ubuntu-System/install-ubuntu-system-makeing-image.png)

## 5.¡Completo! Retira la unidad USB, ¡y estás listo para empezar!

![Complete Create Usb Boot](/images/Installing-Ubuntu-System/install-ubuntu-system-image-complete.png)

## Sistema de Inicio Universal

Después de que el ZimaBoard esté enchufado, presiona la **`tecla F11`** / **`tecla Supr`** sin interrupciones. Cuando insertemos la unidad USB de arranque, se mostrará automáticamente la clave USB, selecciona la clave USB y presiona la tecla Enter.

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)