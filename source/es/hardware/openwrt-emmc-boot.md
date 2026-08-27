---
title: OpenWRT es el compañero perfecto para la versión de Burn-in eMMC de ZimaBoard
---

# Temas

Con un rendimiento del ZimaBoard que se sitúa entre un Raspberry Pi y un MicroServer y una posicionamiento de precio, el mejor uso para el ZimaBoard para muchos jugadores es sin duda ser un router x86 personalizable de OpenWRT / pfSense de cien dólares con suficiente poder aritmético.

Basado en este tutorial, demostraremos cómo utilizar el sistema preconstruido del ZimaBoard. Después de unos pasos, esto allanará el camino para que juegues con el sistema de enrutamiento que te resulta familiar.

# Preparación

1. PC Host x1
2. ZimaBoard x1 (conectado a la misma LAN que el PC)
3. tu imagen de OpenWrt x86 favorita o descarga la imagen recomendada por el equipo a través de este enlace


> **Consejos：**
>1. Este tutorial instalará OpenWRT directamente en la eMMC del ZimaBoard, sobrescribiendo y eliminando el sistema operativo preinstalado. ¡Por favor, guarda y respalda también los datos del usuario de tu sistema original!
>2. Imagen de OpenWRT, por ejemplo, un archivo de imagen con el sufijo .img! Si el .gz


# Pasos de Operación

## Iniciar sesión en el Sistema

En el PC, inicia sesión en el panel CasaOS del ZimaBoard a través de ```casaos.local```

![Iniciar sesión en CasaOS de Openwrt eMMc](/images/Openwrt-emmc-boot/openwrt-emmc-boot-log-in-casaos.png)


## Subir la imagen de OpenWRT
**1. Sube la imagen de OpenWRT preparada en tu PC al almacenamiento del ZimaBoard**
  a.Haz clic en la aplicación Archivos, selecciona un directorio y haz clic en el botón Subir Archivos

**2. Desde la ruta local, selecciona Sube tu imagen de OpenWRT**

![Subir la imagen de OpenWRT](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image.png)

**3.Espera a que la carga se complete**

![Subir la imagen de OpenWRT](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image2.png)

## OpenWRT Sistema Escribe en eMMC
1. Escribe la imagen de OpenWRT en la eMMC del ZimaBoard usando el comando DD
    a.a.Inicia sesión en el sistema del ZimaBoard a través de Terminal, SSH en tu PC (la conexión de Terminal de salida, necesitas saber la dirección IP de tu máquina)

![Conectar OpenWRT SSH](/images/Openwrt-emmc-boot/openwrt-emmc-boot-connect-ssh.png)

2. Inicia sesión con tu cuenta y contraseña de CasaOS
{% note danger %}
Contraseña de cuenta predeterminada
   Cuenta： `casaos`
   Contraseña：`casaos`
{% endnote %}

3. Ingresa lsblk y revisa para ver si estás obteniendo el nombre de la eMMC de destino, que debería ser mmcblk0

![](/images/Openwrt-emmc-boot/openwrt-emmc-boot-find-emmc-name.png)

4. Descomprime el archivo de imagen (si tu archivo OpenWrt es un archivo zip)
```
gzip -d [.gz o .img.gz nombre de imagen]
```
![Descomprimir imagen de OpenWRT](/images/Openwrt-emmc-boot/openwrt-emmc-boot-unzip-image-file.png)

5. ¡Verifica que la descompresión esté funcionando! Asegúrate de que no haya anormalidades en el archivo de imagen

  ```
  ls -lh
  ```
- Ingresa el siguiente comando DD para escribir la imagen de OpenWrt subida al ZimaBoard en la eMMC!

  1. Asegúrate de que la ruta de tu imagen coincida con la ubicación y el nombre del archivo de la carpeta que subiste!
  2. ¡Asegúrate de que tu imagen escrita tenga una extensión .img! y no un archivo zip!

    ```bash
    sudo dd if=/DATA/[ruta de subida]/[nombre.img] of=/dev/mmcblk0 bs=1024k status=progress
    ```
- Después de que se haya ejecutado el comando DD, apaga y vuelve a encender el ZimaBoard.

## iniciar sesión en el sistema OpenWrt
**1. Configura la información de dirección IP de tu sistema OpenWrt y usa un navegador de PC para iniciar sesión en la página Luci de OpenWrt**

    {% note danger %}
    Adjunto hay un tutorial sobre el comando de configuración de dirección IP de OpenWrt
    https://openwrt.org/docs/guide-user/network/openwrt_as_routerdevice
    {% endnote %}

**2. Reinicia e inicia sesión en tu sistema OpenWrt**
   
![Entrar a Openwrt Luci](/images/Openwrt-emmc-boot/openwrt-emmc-boot-enter-to-openwrt-luci.png)

# Resumen
Prefiero ejecutar un sistema y servicio completamente separado en cada ZimaBoard. Así que, este es un modo mucho más simple que arrancar OpenWRT en el ZimaBoard con una memoria USB. Si estás interesado en tener tu ZimaBoard ejecutando sistemas duales al mismo tiempo, considera hacer una memoria USB y cambiar el sistema al que está conectado el ZimaBoard a través de la configuración de la BIOS.

Para aquellos interesados en ejecutar CasaOS en su sistema OpenWRT, ¡consulta el tutorial!

[![Tarjeta de Discord](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)