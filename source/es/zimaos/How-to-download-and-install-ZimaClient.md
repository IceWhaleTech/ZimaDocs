---
title: Cómo descargar e instalar ZimaClient
description: 
type: "Docs"
tip: La barra superior formateada es fija, por favor no la elimine. La descripción es para el artículo; si no se completa, se tomará el primer párrafo del contenido.
---
## Introducción:
ZimaClient está diseñado para ser un cliente silencioso, pero su funcionalidad es lo suficientemente sustancial como para que algunas experiencias centrales ocurran en lugares que quizás ni siquiera notes, de manera silenciosa y natural.

El acceso remoto es una de las características más importantes. Una vez que habilites y conectes ZimaCube, siempre encontrará la conexión más rápida para abrir la webUI en cualquier escenario de red (LAN, Thunderbolt, red externa, punto de acceso).
Esto también se aplica a compartir los servicios de ZimaOS con tus amigos. Algunos servicios, como OpenWebUI y servidores de juegos, se pueden acceder sin iniciar sesión, utilizando las propias características de autenticación de la aplicación.

Al mismo tiempo, también proporcionamos un acceso rápido a funciones, como Peer Drop, Copia de seguridad, Abrir en el buscador.
Por supuesto, todavía estamos en las primeras iteraciones y agradecemos más ideas de los clientes.

Para descargar e instalar ZimaClient, sigue los pasos a continuación:
### 1. Descarga ZimaClient
Visita el siguiente enlace en tu dispositivo de host para descargar el paquete de instalación de ZimaClient:
https://find.zimaspace.com/
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. Guía de instalación de Mac OS
- Una vez que la descarga esté completa, haz doble clic para abrir el paquete de instalación descargado.
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- Arrastra y suelta ZimaClient en la carpeta “Aplicaciones” y espera a que se complete la instalación.
- Después de que la instalación esté completa, puedes encontrar y hacer clic en “Launchpad” para ejecutar ZimaClient.
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
Notas:
ZimaClient **mostrará su ícono en la barra de tareas** y podrás abrir y operar el cliente haciendo clic en el ícono.

Para conectarte a ZimaCube a través de ZimaClient, consulta este [documento](https://www.zimaspace.com/docs/zimaos/Romote-Access.html)
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Guía de instalación de Windows
- Después de que la descarga esté completa, haz doble clic para ejecutar el paquete de instalación de ZimaClient.
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- Después de que la instalación esté completa, ZimaClient mostrará su ícono en la barra de tareas y podrás usar el cliente haciendo clic en el ícono.

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### Preguntas Frecuentes
**1. Si te quedas atascado en la siguiente pantalla durante la instalación, intenta los siguientes pasos:**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- Visita https://www.zerotier.com/download/ para descargar e instalar Asegúrate de que la conexión a Internet esté funcionando.
- Intenta ejecutar ZimaClient nuevamente.

<br>

**2. Si ZimaClient no aparece en macOS pero indica que está en ejecución, sigue los pasos a continuación para solucionar el problema:**
- Abre el “Monitor de Actividad” de macOS, busca y encuentra procesos relacionados con Zima (por ejemplo, Zima, Zima Helper, zima-client-backup, etc.).
- Cierra todos los procesos relacionados.
- Vuelve a abrir el Launchpad y ejecuta ZimaClient.
<br>

**3. ¿El acceso remoto comprometerá mi privacidad?**
¡Absolutamente no! La conexión entre tu laptop y ZimaCube se establece automáticamente mediante la aplicación Zima Client y ZimaOS, utilizando comunicación P2P para establecer la conexión. La transferencia de datos entre los dos está encriptada, asegurando que todas las transferencias de datos sean de igual a igual.
Usamos un controlador de red autodeployado en ZimaCube, lo que significa que solo usamos los servidores de descubrimiento públicos globales de ZeroTier. El control de la red virtual está completamente bajo el control de ZimaCube. ni IceWhale ni ZeroTier tienen derechos administrativos. La privacidad y la soberanía de los datos son nuestras principales prioridades, así que si tienes alguna pregunta, no dudes en desafiarlas.
Continuaremos monitoreando y optimizando estos temas.
<br>

**4. Cómo acceder a los registros y ayudar con la depuración**
Cuando ocurra un error/problema, toma una captura de pantalla inmediatamente (si es aplicable) y sal del cliente Zima.
Recupera los registros de las siguientes ubicaciones:
macOS:
`~/Library/Application Support/Zima/logs`
Windows:
`%AppData%\Zima\logs`
Empaqueta todos los archivos de registro y envíalos a john@icewhale.org, describiendo el problema y proporcionando capturas de pantalla (si las hubiera).