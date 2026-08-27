---
title: Cómo descargar e instalar ZimaClient
seo_title: "Descargar e instalar ZimaClient en Windows, macOS, iOS y Android"
description: "Descarga e instala ZimaClient en Windows o Mac para acceder a ZimaCube desde cualquier lugar. Configura el acceso remoto, la exploración de archivos y la conexión directa con el dispositivo."
type: Docs
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---
## Introducción
ZimaClient está diseñado para funcionar de forma discreta, pero ofrece funciones importantes y algunas experiencias esenciales ocurren en segundo plano, de manera silenciosa y natural.

El acceso remoto es una de sus funciones principales. Después de activar y conectar ZimaCube, el cliente encuentra siempre la conexión más rápida para abrir la interfaz web en cualquier situación de red: LAN, Thunderbolt, red externa o punto de acceso.
Lo mismo se aplica al compartir servicios de ZimaOS con otras personas. Algunos servicios, como OpenWebUI y los servidores de juegos, pueden utilizar la autenticación de la propia aplicación y permitir el acceso sin iniciar sesión en ZimaOS.

También proporcionamos accesos rápidos a funciones como Peer Drop, Back up y Open in Finder.
El cliente todavía está en sus primeras iteraciones y agradecemos nuevas ideas.

Para descargar e instalar ZimaClient, sigue estos pasos:
### 1. Descargar ZimaClient
Abre el siguiente enlace en el dispositivo principal y descarga el paquete de instalación:
https://www.zimaspace.com/zimaos/download
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. Instalación en macOS
- Cuando termine la descarga, haz doble clic en el paquete de instalación.
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- Arrastra ZimaClient a la carpeta “Applications” y espera a que termine la instalación.
- Después, abre “Launchpad” y ejecuta ZimaClient.
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
Nota:
ZimaClient **muestra su icono en la barra de menús**. Haz clic en él para abrir y utilizar el cliente.

Para conectar ZimaCube mediante ZimaClient, consulta este [documento](./remote-access).
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Instalación en Windows
- Cuando termine la descarga, haz doble clic en el paquete de instalación de ZimaClient para ejecutarlo.
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- Al terminar, ZimaClient mostrará su icono en la barra de tareas. Haz clic en él para utilizar el cliente.

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### Preguntas frecuentes
**1. Si la instalación se queda bloqueada en la siguiente pantalla, prueba estos pasos:**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- Visita https://www.zerotier.com/download/, descarga e instala ZeroTier y comprueba que la conexión a Internet funcione.
- Vuelve a ejecutar ZimaClient.

<br>

**2. Si ZimaClient no aparece en macOS aunque el sistema indica que está ejecutándose, sigue estos pasos:**
- Abre “Monitor de Actividad” de macOS y busca procesos relacionados con Zima, como Zima, Zima Helper o zima-client-backup.
- Cierra todos los procesos relacionados.
- Vuelve a abrir Launchpad y ejecuta ZimaClient.
<br>

**3. ¿El acceso remoto pone en riesgo mi privacidad?**
No. ZimaClient y ZimaOS establecen automáticamente una conexión P2P entre el portátil y ZimaCube. Los datos se transfieren cifrados directamente entre ambos dispositivos.
Utilizamos un controlador de red alojado en ZimaCube y solo recurrimos a los servidores públicos globales de ZeroTier para el descubrimiento. La red virtual está controlada por completo desde ZimaCube; ni IceWhale ni ZeroTier tienen permisos administrativos. La privacidad y la soberanía de los datos son nuestra prioridad, por lo que puedes plantearnos cualquier duda.
Seguiremos supervisando y optimizando estas funciones.
<br>

**4. Cómo obtener los registros y ayudar a depurar problemas**
Cuando se produzca un error, toma inmediatamente una captura de pantalla si es posible y cierra ZimaClient.
Obtén los registros en estas ubicaciones:
macOS:
`~/Library/Application Support/Zima/logs`
Windows:
`%AppData%\Zima\logs`
Comprime todos los archivos de registro y envíalos a john@icewhale.org. Describe el problema y adjunta las capturas disponibles.
