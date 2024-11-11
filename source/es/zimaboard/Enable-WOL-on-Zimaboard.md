---
title: Cómo habilitar Wake-on-LAN (WOL) en Zimaboard
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
LAN Wake-on-LAN (WOL) es una parte muy importante del procesamiento de sistemas y computadoras, especialmente si estás tratando con un SBS (Servidor de Placa Única) como Zimaboard.
Para satisfacer tus necesidades, nuestro producto Zimaboard proporciona soporte para WOL, listo para usar, y solo necesitas habilitarlo.
Habilitar LAN Wake-on-LAN (WOL) en Zimaboard a través de su BIOS es un proceso de tres pasos.
- El primer paso es configurar WOL a través de la BIOS.
- El segundo paso es habilitar WOL en los servicios del sistema y anotar la dirección MAC y otra información.
- El tercer paso es descargar el software WakeOnLine adecuado y configurar el nuevo dispositivo.

Aquí están los pasos específicos:

### Configuración de BIOS
1. Enciende la alimentación del sistema y presiona la tecla **Delete** para ingresar a la BIOS.
2. Usa las teclas de flecha del teclado para navegar a la pestaña **Advanced**, luego selecciona el ítem **Power Management Configuration**. Asegúrate de que la opción **Wake on PME** esté configurada en **Enabled**. Presiona **F10** y haz clic en **OK** para guardar la configuración, y el sistema se reiniciará automáticamente.
   ![](https://manage.icewhale.io/api/static/docs/1730194172109_image.png)
   ![](https://manage.icewhale.io/api/static/docs/1730194187655_image.png)

### Habilitar Servicios del Sistema

1. Nuestro ZimaBoard viene preinstalado con el sistema CasaOS. Aquí, se puede utilizar una herramienta SSH para controlar la línea de comandos y conectarse usando tu propio nombre de usuario y contraseña.
Usa el comando `ip a` para listar todas las interfaces de red y su estado en el sistema. Los nombres de las interfaces de red son típicamente como `eth0`, `enp2s0`, `wlan0`, etc. Puedes identificar el nombre de la interfaz adecuada según la interfaz de red a la que estás conectado:
Al mismo tiempo, cuando uses WakeMeOnLan en Windows en los pasos posteriores, asegúrate de usar la dirección de destino correcta. Generalmente, la dirección de difusión es la dirección IP de difusión de toda la subred. Por ejemplo, si la dirección IP de ZimaBoard es `10.0.192.211`, la dirección de difusión debería ser `10.0.255.255`. Por lo tanto, también se debe prestar atención a la dirección de difusión.
![](https://manage.icewhale.io/api/static/docs/1730195494901_copyImage.jpeg)

2. Ejecuta los siguientes comandos para actualizar tu gestor de paquetes e instalar la herramienta ethtool:
```
sudo apt update
sudo apt install ethtool
```

3. La interfaz de red que habilité aquí es `enp3s0`. Por defecto, WOL en la interfaz de red está deshabilitado. Puedes usar el siguiente comando para verificar si WOL está habilitado:
```
sudo ethtool enp3s0
```
Donde `enp3s0` debería ser el nombre de la interfaz de red que habilitaste, como se muestra a continuación.
![](https://manage.icewhale.io/api/static/docs/1730196409296_image.png)
`Wake-on: d` significa que WOL está actualmente deshabilitado.

4. Para habilitar la función Wake-on-LAN, necesitas ejecutar el siguiente comando:
```
sudo ethtool -s enp3s0 wol g
```
  Este comando habilitará los paquetes mágicos (g), los cuales permitirán despertar el ZimaBoard a través de paquetes mágicos.
  Después de ejecutar este comando, puedes usar nuevamente el siguiente comando para confirmar que WOL está habilitado:
```
sudo ethtool enp3s0
```

| ![](https://manage.icewhale.io/api/static/docs/1730196776593_image.png) | ![](https://manage.icewhale.io/api/static/docs/1730196793376_image.png) |
| - | - |
| ejecutando este comando | El estado de `Wake-on` debería cambiar a `g`, indicando que WOL se ha habilitado con éxito |


5. Crea un script de inicio a través de systemd
- Crea un servicio systemd para ejecutar automáticamente el comando ethtool para habilitar WOL al iniciar el sistema. Los servicios son los más simples.
- Crea un nuevo archivo de servicio:
```
sudo nano /etc/systemd/system/wol.service
```
- Ingresa el siguiente contenido en el archivo:
```
[Unit]
Description=Enable Wake-on-LAN enp3s0

[Service]
Type=oneshot
ExecStart=/sbin/ethtool -s enp3s0 wol g

[Install]
WantedBy=multi-user.target
```
![](https://manage.icewhale.io/api/static/docs/1730197095005_image.png)
- Presiona `Ctel+O` para guardar, luego presiona `Enter`, después presiona `Ctrl+X` para cerrar el archivo, y luego usa el siguiente comando para habilitar el servicio:
```
sudo systemctl enable wol.service
```

- Reinicia el sistema y verifica si la configuración de Wake-on se mantiene como `g`:
```
sudo systemctl start wol.service
```

El método anterior puede asegurar que la configuración de WOL se habilite automáticamente después del reinicio.

6. Después de que haya sido exitoso, apaga la computadora en la página web, o ingresa `sudo shutdown now` para apagar la computadora.
![](https://manage.icewhale.io/api/static/docs/1730197245860_image.png)

### Wake on LAN

**Prueba en Windows**
1. Descarga el software [WakeMeOnLan](https://sourceforge.net/projects/wakemeonlan/) (por supuesto hay muchas opciones, aquí usamos este software para la prueba).
2. Abre el software y haz clic en `Add New Computer` bajo Archivo.
![](https://manage.icewhale.io/api/static/docs/1730197626956_image.png)
3. Ingresa la dirección de difusión anterior en la dirección IP. Por ejemplo, si la dirección IP de ZimaBoard es `10.0.192.211`, la dirección de difusión debería ser `10.0.255.255`. Completa la dirección MAC normalmente. No llenes otra información. Haz clic en `OK`.
4. Selecciona el dispositivo a despertar, haz clic en `Wake Up Selected Computers` en la esquina superior derecha, y observa si se puede despertar y comenzar.
![](https://manage.icewhale.io/api/static/docs/1730197821740_image.png)
{% note warn Tips %}
Si necesitas despertar de forma remota otros dispositivos (como Android, iOS, MacOS, etc.), puedes buscar software relacionado en línea. Dado que los pasos básicos no son muy diferentes, no entraré en detalles aquí. Te deseo todo lo mejor.
{% endnote %}