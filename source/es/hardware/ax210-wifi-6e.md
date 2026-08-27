---
title: Guía del usuario de la tarjeta Wi-Fi AX210
seo_title: "Wi-Fi AX210 en ZimaBoard: guía de instalación y configuración"
description: "Instala y activa la tarjeta Intel AX210 Wi-Fi 6E en ZimaBoard. Guía paso a paso para instalar el hardware y el controlador, y conectarse a una red inalámbrica."
type: Docs
author: admin
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## 1. Introducción
El [adaptador Intel® Wi-Fi 6E AX210 (Gig+)](https://shop.zimaspace.com/products/intel-ax210-wifi-6e-pcie-card-zimaboard) está diseñado para admitir la tecnología Wi-Fi 6E. El producto es compatible con Wi-Fi de doble flujo en las bandas de 2.4GHz, 5GHz y 6GHz, además de Bluetooth® 5.3. Combinado con procesadores Intel® Core™ y las innovaciones inalámbricas de Intel, el módulo Intel® Wi-Fi 6E AX210 puede mejorar considerablemente tu experiencia de conexión en casa, en el trabajo o durante tus desplazamientos.

## 2. Especificaciones
![Especificaciones de la tarjeta Wi-Fi AX210](https://manage.icewhale.io/api/static/docs/1755248064574_copyImage.png)

## 3. Instrucciones de uso
**Pasos rápidos:
A. Inserta la tarjeta AX210 en ZimaBoard.
B. Actualiza el controlador de la AX210.
C. Abre el sistema CasaOS y conéctate a una red Wi-Fi.**

**Modo STA**
**Equipo necesario:**
- ZimaBlade / ZimaBoard × 1
- Tarjeta Wi-Fi AX210 × 1
- Cable Ethernet × 1
- Adaptador de corriente × 1
**Opcional:**
- Cable miniDP × 1
- Monitor × 1
- Teclado × 1
**Diagrama de conexión**
![Diagrama de conexión](https://manage.icewhale.io/api/static/docs/1755248150818_image.png)
### Paso 1: Comprueba si se detecta la tarjeta Wi-Fi AX210
1. Accede al dispositivo mediante el terminal.
![Terminal](https://manage.icewhale.io/api/static/docs/1755248310999_copyImage.png)
![Terminal de inicio de sesión](https://manage.icewhale.io/api/static/docs/1755248335646_image.png)

2. Cambia al modo root con `su`
![Modo root](https://manage.icewhale.io/api/static/docs/1755248357144_image.png)

3. Ejecuta el comando `lspci`
![Resultado de lspci](https://manage.icewhale.io/api/static/docs/1755248383004_image.png)

   Deberías ver el dispositivo Intel en la lista, lo que confirma que está conectado a ZimaBoard.

### Paso 2: Instala el controlador de la AX210
<mark style="background-color: #fff9bd">Nota:
 Si utilizas CasaOS preinstalado en ZimaBoard o ZimaBlade con la versión de kernel **5.10**, puedes pasar directamente al **Paso 3**.
 También puedes obtener esta versión mediante [el enlace proporcionado](../help-center/restore-factory-settings).</mark>
1. Comprueba la versión del kernel. Si es anterior a 6.10, se recomienda actualizarla. En esta guía utilizaremos el kernel de backports.
![Versión del kernel](https://manage.icewhale.io/api/static/docs/1755248568547_image.png)

2. Añade el repositorio de backports:
```language
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" | sudo tee -a /etc/apt/sources.list
```


3. Actualiza las listas de paquetes:
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249083029_image.png)

4. Instala el archivo de claves de Debian:
```language
sudo apt install -y debian-archive-keyring
```
![Licencia](https://manage.icewhale.io/api/static/docs/1755249117075_image.png)

5. Vuelve a actualizar las listas de paquetes:
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249154038_image.png)

6. Actualiza el kernel e instala el firmware:
```language
sudo apt install -y -t bookworm-backports linux-image-amd64 firmware-iwlwifi
```
![Descarga del kernel y el controlador](https://manage.icewhale.io/api/static/docs/1755249240618_image.png)

7. Reinicia el dispositivo:
```language
sudo reboot
```
Después del reinicio, confirma que la versión del kernel sea 6.12 o superior.
![](https://manage.icewhale.io/api/static/docs/1755249301302_image.png)

### Paso 3: Conéctate a una red Wi-Fi con `nmtui`
Utilizaremos la herramienta `nmtui` para establecer la conexión.
```language
sudo nmtui
```

Si el sistema no reconoce el comando `nmtui`, consulta la sección **Instalación de nmtui** situada más abajo.

1. Selecciona **Activate a connection**.
![Interfaz GUI/TUI del gestor de red](https://manage.icewhale.io/api/static/docs/1755249412290_image.png)

2. Elige tu red Wi-Fi (SSID).
![Selección de la red Wi-Fi](https://manage.icewhale.io/api/static/docs/1755249456648_image.png)

3. Introduce la contraseña y pulsa Enter.
![Autenticación o contraseña requerida por la red inalámbrica](https://manage.icewhale.io/api/static/docs/1755249476230_image.png)

4. Comprueba la dirección IP y la conectividad
Guarda los cambios, sal de `nmtui` y utiliza `ip a` para comprobar el estado de la interfaz inalámbrica:

```language
ip a
```
![Localización de la dirección IP](https://manage.icewhale.io/api/static/docs/1755249580916_image.png)

  Si utilizas la versión gráfica de CasaOS, abre el menú Wi-Fi y selecciona la red que quieras.

![](https://manage.icewhale.io/api/static/docs/1755249604651_image.png)

### Sistemas operativos de router compatibles
- **OpenWRT**
  1. Instala iwlwifi, el controlador oficial de la AX210.
  2. Visita el [sitio web oficial de Intel](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html 383) para descargar el firmware.
  3. Descomprime iwlwifi-ty-59.601f3a66.0.tgz y copia el archivo en /lib/firmware/
  4. Utiliza el comando lspci para comprobar la ruta de la AX210.
  5. Ve a /sys/bus/pci/devices; allí verás el ID del dispositivo.
  6. Entra en el directorio y utiliza el comando pwd para obtener la ruta absoluta.
  7. Edita /etc/config/wireless
```language
config wifi-device 'radio0'
        option type 'mac80211'
        option country 'US'
        option cell_density '0'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'

config wifi-device 'radio1'
        option type 'mac80211'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'
        option band '5g'
        option htmode 'HE80'
        option cell_density '0'
        option country 'US'
```
  8. Reinicia el dispositivo. El controlador debería funcionar correctamente.

## Prueba de velocidad de red
![iperf3](https://manage.icewhale.io/api/static/docs/1755249878561_image.png)


## Modo AP (solo 2.4 GHz)

1. Instala los paquetes necesarios:
   `sudo apt update`
   `sudo apt install hostapd iw`
2. Configura la red inalámbrica:
   Edita `/etc/hostapd/hostapd.conf`
```language
interface=wlp1s0  # Replace according to your network adapter name
driver=nl80211
ssid=mylove   # Replace "YourSSID" with your desired network name
hw_mode=a
channel=36      # Select your preferred channel
country_code=US
ieee80211ac=1
wmm_enabled=1
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP
wpa_passphrase=YourPassphrase  # Replace "YourPassphrase" with your Wi-Fi password
logger_stdout=-1
logger_stdout_level=2
```
3. Inicia hostapd:
   `sudo systemctl start hostapd`
![](https://manage.icewhale.io/api/static/docs/1755250711162_image.png)

4. Prueba la red Wi-Fi conectándote desde otro dispositivo.
![](https://manage.icewhale.io/api/static/docs/1755250706664_image.png)

## Instalación de nmtui

`nmtui` está incluido en el paquete `network-manager`:
```language
sudo apt install network-manager
```

¿Quieres probarlo personalmente? Consigue los componentes necesarios en [nuestra tienda](https://shop.zimaspace.com/).
