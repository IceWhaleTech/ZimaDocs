---
title: Cómo configurar un NAS con ZimaBlade
description:
type: “Docs”
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción es para el artículo, si no se llena, se tomará el primer párrafo del contenido
---
NAS es un refugio digital donde residen tus valiosos activos de datos.
--------------------------------------------------------------

ZimaBlade es un servidor compacto de placa única que transforma tus necesidades de almacenamiento en una experiencia NAS fluida. ¡Y no solo en la Tierra, sino que incluso un día en Marte! Ya seas un entusiasta de Linux experimentado o un curioso explorador tecnológico, configurar tu santuario de datos en tamaño de bolsillo NAS con ZimaBlade es pan comido. ¡Vamos a sumergirnos en este tutorial!

![](https://manage.icewhale.io/api/static/docs/1719988281769_copyImage.png)

**Lo que necesitas:**

*   ZimaBlade: ¡Tu confiable servidor de placa única!
    
*   SO-DIMM DDR3L: El módulo de memoria que alimenta tu ZimaBlade.
    
*   Adaptador de poder de 12V 3A Tipo-C: Mantén tu ZimaBlade cargado.
    
*   Cable MiniDP: Para conectar tu pantalla.
    
*   Uno o dos HDD o SSD (Interfaz SATA): Tus héroes de almacenamiento.
    
*   Conector RJ45 con conexión LAN: Para mantener tu ZimaBlade conectado a la red.
    
*   Teclado USB: Para la configuración inicial.
    
*   Pantalla: Para que puedas ver lo que sucede durante el arranque y la configuración.
    

Puedes encontrar todos los accesorios en nuestra [Tienda Zima](https://shop.zimaspace.com/collections/zima-accessories?utm_source=head&utm_medium=menu).

[Además, echa un vistazo a nuestro video de inicio rápido.](https://www.youtube.com/watch?v=--G4T5aGGEM) ¡Empecemos!

## Paso 1: Instalar SO-DIMM

Retira la tapa negra de ZimaBlade y abre la tapa transparente:

![](https://manage.icewhale.io/api/static/docs/1719988660694_2.png)


Usa un destornillador para abrir la tapa transparente:

![](https://manage.icewhale.io/api/static/docs/1719988685607_3.png)


Inserta el SO-DIMM hasta que escuches un clic.

![](https://manage.icewhale.io/api/static/docs/1719988701892_4.png)


Vuelve a ensamblar todas las tapas.

## Paso 2: Conectar

**Conecta ZimaBlade a tu unidad. Aquí, usamos un HDD como ejemplo:**

Para funcionar correctamente, tu unidad necesita datos y un suministro de energía de ZimaBlade. Utiliza el cable SATA incluido en el paquete de ZimaBlade, que obtiene tanto datos como suministro de energía de ZimaBlade.

![](https://manage.icewhale.io/api/static/docs/1719988728728_5.png)


**Conecta ZimaBlade usando un RJ45:**
![](https://manage.icewhale.io/api/static/docs/1719988748568_6.png)


**Conecta ZimaBlade a un teclado (USB) y una pantalla (miniDP):**
![](https://manage.icewhale.io/api/static/docs/1719988770426_7.png)


**Conecta ZimaBlade a la fuente de alimentación:**
![](https://manage.icewhale.io/api/static/docs/1719988789048_8.png)


Usa el cable tipo-C incluido en el paquete de ZimaBlade.

> La interfaz tipo-C de ZimaBlade admite USB PD 3.1.
> 
> Para un uso a largo plazo con un HDD, considera usar una fuente de alimentación externa.

## Paso 3: Arrancar y obtener la IP

Una vez que enchufes la alimentación, el dispositivo se iniciará automáticamente. ¡Y luego... Boom! ¡Estás dentro!

![](https://manage.icewhale.io/api/static/docs/1724748313259_image.png)



Se te pedirá que ingreses la cuenta predeterminada `casaos` y la contraseña `casaos` para iniciar sesión.


  

**Ahora, obtén la dirección IP de ZimaBlade:**

Escribe `ip addr` y presiona `Enter` para ver la dirección IP. Será algo como `192.x.x.x` o `10.0.x.x`. (dependiendo de tu configuración LAN.)


![](https://manage.icewhale.io/api/static/docs/1724748361255_image.png)


La dirección IP de la interfaz de red física `enp2s0` (eg: `10.0.179.111`) ha sido anotada, y se usará para futuros intentos de inicio de sesión si es necesario.
> Las direcciones IP `127.x.x.x` (bucle) son para comunicación interna, `10.x.x.x` (interfaz física) son para conexiones de red, y `172.x.x.x` (Docker) son para la red de contenedores.

## Paso 4: ¡Tu NAS está aquí!

Abre un navegador en tu teléfono o computadora de escritorio y visita la dirección IP que acabas de anotar.

Sigue las instrucciones para crear una cuenta de interfaz web.
![](https://manage.icewhale.io/api/static/docs/1719988936857_Arc_MyleHxojSb.png)

Después de crear la cuenta, iniciarás sesión en la interfaz web de CasaOS.
<br>

**Ahora, configura tu disco.** CasaOS detectará el disco conectado. Haz clic en el botón de configuración de almacenamiento, luego haz clic en el botón "Crear Almacenamiento".
![](https://manage.icewhale.io/api/static/docs/1720065540546_image.png)
![](https://manage.icewhale.io/api/static/docs/1719988986725_Arc_Xe3iywhbjm.png)

Elige la opción apropiada para tus necesidades. Tu unidad ahora está lista para ser utilizada como almacenamiento.
![](https://manage.icewhale.io/api/static/docs/1719989035890_Arc_0Jjnl9skw3.png)

**¡Usa la aplicación "Archivos" para subir y acceder a tus archivos!**
![](https://manage.icewhale.io/api/static/docs/1719989056324_Arc_gdroRMM9ST.png)

**¡Tu NAS ZimaBlade está configurado! ¡Disfruta!**

  

Si encuentras algún problema durante el uso, no dudes en hacérnoslo saber en cualquier momento. También puedes unirte a nuestra [comunidad](https://community.zimaspace.com/) y [Discord](https://discord.gg/uuNfKzG5) para discutir más sobre NAS y ZimaBlade. ¡Esperamos tu retroalimentación!