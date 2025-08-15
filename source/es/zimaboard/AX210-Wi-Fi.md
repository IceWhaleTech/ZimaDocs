Here is the translation into Spanish while keeping the original format intact:

---
title: Guía del Usuario de la Tarjeta Wi-Fi AX210  
description:  
type: Docs  
author: admin  
tip: No elimine el formato fijo de la barra superior, la descripción es el resumen del artículo, si no se completa, se tomará el primer párrafo del contenido.  
---  
## 1. Introducción  
El adaptador Intel® Wi-Fi 6E AX210 (Gig+) está diseñado para soportar la tecnología Wi-Fi 6E. El producto soporta Wi-Fi de doble transmisión en las bandas de 2.4GHz, 5GHz y 6GHz, así como Bluetooth® 5.3. Combinado con procesadores Intel® Core™ e innovaciones inalámbricas excepcionales de Intel, el módulo Intel® Wi-Fi 6E AX210 puede mejorar drásticamente tu experiencia conectada en casa, el trabajo o mientras estás en movimiento.

## 2. Especificaciones  
![Especificaciones de la tarjeta Wi-Fi AX210](https://manage.icewhale.io/api/static/docs/1755248064574_copyImage.png)  

## 3. Instrucciones de uso  
**Pasos rápidos de operación:  
A. Inserta la tarjeta AX210 en el ZimaBoard.  
B. Actualiza el controlador de AX210.  
C. Abre el sistema CasaOS y conéctate a Wi-Fi.**  
### 3.1 Modo STA  
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
#### Paso 1: Verificar si la tarjeta Wi-Fi AX210 es detectada  
1. Accede a tu dispositivo a través de la Terminal.  
![Terminal](https://manage.icewhale.io/api/static/docs/1755248310999_copyImage.png)  
![Terminal de inicio de sesión](https://manage.icewhale.io/api/static/docs/1755248335646_image.png)  

2. Cambia al modo root `su`  
![Modo root](https://manage.icewhale.io/api/static/docs/1755248357144_image.png)  

3. Ejecuta el comando `lspci`  
![Resultado de lspci](https://manage.icewhale.io/api/static/docs/1755248383004_image.png)  

   Deberías ver el dispositivo Intel listado, confirmando que está conectado al ZimaBoard.

#### Paso 2: Instalar el controlador AX210  
<mark style="background-color: #fff9bd">Nota:  
Si estás utilizando CasaOS preinstalado en ZimaBoard o ZimaBlade con la versión del núcleo **5.10**, puedes saltar directamente al **Paso 3**.  
También puedes obtener esta versión desde [el enlace proporcionado](https://www.zimaspace.com/docs/zimaboard/Restore-factory-settings).</mark>  
1. Verifica tu versión de núcleo. Si es inferior a 6.10, se recomienda actualizar. En esta guía, usaremos el núcleo backports.  
![Versión del núcleo](https://manage.icewhale.io/api/static/docs/1755248568547_image.png)  

2. Agrega el repositorio de backports:  
```language  
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" | sudo tee -a /etc/apt/sources.list  
```  

3. Actualiza las listas de paquetes:  
```language  
sudo apt update  
```  
![apt update](https://manage.icewhale.io/api/static/docs/1755249083029_image.png)  

4. Agrega la clave del archivo de Debian:  
```language  
sudo apt install -y debian-archive-keyring  
```  
![Licencia](https://manage.icewhale.io/api/static/docs/1755249117075_image.png)  

5. Actualiza las listas de paquetes nuevamente:  
```language  
sudo apt update  
```  
![apt update](https://manage.icewhale.io/api/static/docs/1755249154038_image.png)  

6. Actualiza el núcleo e instala el firmware:  
```language  
sudo apt install -y -t bookworm-backports linux-image-amd64 firmware-iwlwifi  
```  
![Descargar el núcleo y el controlador](https://manage.icewhale.io/api/static/docs/1755249240618_image.png)  

7. Reinicia:  
```language  
sudo reboot  
```  
Después de reiniciar, confirma que la versión del núcleo sea 6.12 o superior.  
![](https://manage.icewhale.io/api/static/docs/1755249301302_image.png)  

#### Paso 3: Conectar a Wi-Fi usando `nmtui`  
Usaremos la herramienta `nmtui` para conectarnos.  
```language  
sudo nmtui  
```  

Si el sistema no reconoce el comando `nmtui`, por favor consulta la sección **FAQ** para las instrucciones de instalación.

1. Selecciona **Activar una conexión**.  
![Gestor de red GUI/TUi](https://manage.icewhale.io/api/static/docs/1755249412290_image.png)  

2. Elige tu red Wi-Fi (SSID).  
![Selecciona wifi](https://manage.icewhale.io/api/static/docs/1755249456648_image.png)  

3. Ingresa la contraseña y presiona Enter.  
![Autenticación/contraseña requerida por la red inalámbrica](https://manage.icewhale.io/api/static/docs/1755249476230_image.png)  

4. Verifica la dirección IP y la conectividad  
Guarda y sal de la herramienta `nmtui` y usa `ip a` para verificar el estado de tu interfaz inalámbrica:

```language  
ip a  
```  
![Encontrar la dirección IP](https://manage.icewhale.io/api/static/docs/1755249580916_image.png)  

Si estás usando la versión GUI de CasaOS, simplemente abre el menú de Wi-Fi y selecciona tu red deseada.

![](https://manage.icewhale.io/api/static/docs/1755249604651_image.png)  

#### Sistemas Operativos de enrutadores compatibles  
- **OpenWRT**  
  1. Debes instalar iwlwifi, que es el controlador oficial para ax210.  
  2. Ve al [sitio oficial de Intel](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html 383) para descargar el firmware.  
  3. Descomprime el archivo iwlwifi-ty-59.601f3a66.0.tgz y copia el archivo en /lib/firmware/  
  4. Usa el comando lspci para verificar la ruta de ax210.  
  5. Ve a /sys/bus/pci/devices y verás el ID del dispositivo.  
  6. Ingresa al directorio y usa el comando pwd para obtener la ruta absoluta.  
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
  8. Reinicia y verás que el controlador funciona bien.

#### FAQ  
- **Prueba de velocidad de red desde el dispositivo Zima a un dispositivo LAN**  
![iperf3](https://manage.icewhale.io/api/static/docs/1755249878561_image.png)  

- **Modo AP (solo 2.4 GHz)**

- 1. Instala los paquetes necesarios:  
     `sudo apt update`  
     `sudo apt install hostapd iw`  
- 2. Configura la red inalámbrica:  
     Edita `/etc/hostapd/hostapd.conf`  
```language  
interface=wlp1s0  # Reemplaza con el nombre de tu tarjeta de red  
driver=nl80211  
ssid=mylove   # Reemplaza "YourSSID" con el nombre de red que desees  
hw_mode=a  
channel=36      # Selecciona el canal deseado  
country_code=US  
ieee80211ac=1  
wmm_enabled=1  
auth_algs=1  
wpa=2  
wpa_key_mgmt=WPA-PSK  
rsn_pairwise=CCMP  
wpa_passphrase=YourPassphrase  # Reemplaza con tu contraseña de Wi-Fi  
logger_stdout=-1  
logger_stdout_level=2  
```  
- 3. Inicia hostapd:  
    ` sudo systemctl start hostapd`  
