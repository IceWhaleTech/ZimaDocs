---
title: Servidor de Cámaras NVR
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, por favor no la elimine, la descripción es para la descripción del artículo, si no se llena, se cortará el primer párrafo del contenido.
---
# Introducción
Este tutorial te guiará sobre cómo crear un sistema de videovigilancia doméstico en CasaOS usando Kerberos.io y ZimaBoard. Utilizaremos la función de instalación personalizada de Docker de CasaOS para simplificar el proceso de instalación y configuración, y también explicaremos en detalle cómo configurar una cámara RTSP.
## 1. Preparación
- ZimaBoard X 1
- Asegúrate de que el ZimaBoard esté conectado a la corriente y a Internet, y que CasaOS esté instalado
- Cámara IP compatible con RTSP
## 2. Obtener el enlace RTSP de la cámara
Dado que las cámaras de diferentes fabricantes tienen diferentes formas de obtener el enlace RTSP, consulta el manual de usuario de tu cámara o el sitio web oficial del fabricante para obtener instrucciones relevantes, o inicia sesión en la interfaz de gestión de la cámara para encontrar el enlace RTSP. En este tutorial, probamos con éxito cámaras de las marcas TP-Link y Tuya y verificamos su compatibilidad con Kerberos.io. Además, esperamos que el sistema sea compatible con cámaras de marcas como Hikvision, Ezviz, Dahua, eufy y Yousee.
## 3. Configurar Kerberos.io
### Paso 1: Iniciar sesión en CasaOS
1. Asegúrate de que ZimaBoard esté conectado a la corriente y a internet, y que CasaOS esté instalado.
2. Accede a la interfaz web de CasaOS (usualmente http://<tu IP de ZimaBoard>).
### Paso 2: Instalar Docker usando CasaOS
1. Abre la tienda de aplicaciones
![](https://manage.icewhale.io/api/static/docs/1727083688403_image.png)
2. Haz clic en Instalación Personalizada
![](https://manage.icewhale.io/api/static/docs/1727083742110_image.png)
3. Haz clic en Importar
![](https://manage.icewhale.io/api/static/docs/1727083761139_image.png)
4. Pega el siguiente código para configurar Docker en el campo de entrada
version: '3'  # Versión del archivo Docker Compose

services:
  kerberos:
    image: kerberos/kerberos  # Usar la imagen kerberos/kerberos
    container_name: kerberos  # Nombre del contenedor
    ports:
      - "8080:80"  # Mapea el puerto 8080 del host al puerto 80 del contenedor
    volumes:
      - ./config:/config  # Monta el directorio de configuración del host en /config en el contenedor
      - ./recordings:/etc/opt/kerberosio/capture  # Monta el directorio de grabaciones del host en /etc/opt/kerberosio/capture en el contenedor
    restart: unless-stopped  # Política de reinicio del contenedor: reiniciar automáticamente a menos que se detenga manualmente
    environment:
      - TZ=Europe/London  # Establecer la zona horaria del contenedor en Europa/Londres
      - KERBEROSIO_SETTINGS_PORT=80  # Establecer el puerto de escucha del servicio Kerberos en 80
      - KERBEROSIO_SETTINGS_RECORDSTREAM="/config/recordings"  # Establecer la ubicación del stream de grabación en /config/recordings
![](https://manage.icewhale.io/api/static/docs/1727083935343_image.png)
5. Haz clic en Enviar
6. Completa 'tag': latset y 'title': kerberos
![](https://manage.icewhale.io/api/static/docs/1727083963029_image.png)
7. Envía y espera a que se complete la instalación
### Paso 3: Configurar Kerberos.io
1. Abre http://<tu IP de ZimaBoard>:8080 en tu navegador para ingresar a la interfaz de configuración de Kerberos.io.
![](https://manage.icewhale.io/api/static/docs/1727084036342_image.png)
2. Crea una cuenta y una contraseña y accede a Kerberos.io.
![](https://manage.icewhale.io/api/static/docs/1727084057212_image.png)
3. Haz clic en 'Configuración'
![](https://manage.icewhale.io/api/static/docs/1727084077776_image.png)
4. Selecciona ‘Cámara IP’
![](https://manage.icewhale.io/api/static/docs/1727084096179_image.png)
5. Ingresa la URL RTSP obtenida, por ejemplo: rtsp://admin:Hjj12345@10.0.171.52/stream1.
![](https://manage.icewhale.io/api/static/docs/1727084126856_image.png)
6. Configura la resolución y la tasa de cuadros, por ejemplo: 720x480.
7. Después de completar la configuración, puedes ver las imágenes y videos capturados en la interfaz de Kerberos
![](https://manage.icewhale.io/api/static/docs/1727084148176_image.png)
![](https://manage.icewhale.io/api/static/docs/1727084153287_image.png)
8. También puedes ver el estado de monitoreo en tiempo real en la interfaz principal
![](https://manage.icewhale.io/api/static/docs/1727084172190_image.png)
9. Este sistema es adecuado para usuarios que necesitan monitorear un área específica en tiempo real, especialmente en escenarios de hogar y oficina pequeña. Aunque el sistema actualmente solo soporta la configuración de una sola cámara, su fácil instalación, rendimiento eficiente y buena compatibilidad de marca lo convierten en una solución de monitoreo confiable.