---
title: Enlace de Synology y comparticiones SMB  
description:  
type: "Docs"  
tip: No elimine el formato fijo de la barra superior, la descripción debe ser un resumen del artículo, si no se llena se tomará el primer párrafo como descripción  
---  

# ¿Cómo compartir y obtener archivos desde un NAS? SAMBA puede ser la forma más importante  
Cuando hablamos de almacenamiento conectado a la red, queremos que nuestros archivos se almacenen, gestionen en un solo lugar y puedan accederse desde cualquier lugar. ¿Pero cómo funciona eso?  
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)  
Siempre puedes acceder a tus datos visitando la interfaz web de ZimaOS, que tiene una interfaz bellamente organizada y una experiencia fluida. Sin embargo, cuando tu trabajo implica hacer referencia a archivos, o necesitas una operación más compleja sobre la jerarquía del sistema de archivos, montar tus discos NAS en tu sistema cliente mediante tecnologías como SMB/SAMBA será una mejor opción.  
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)  
SMB (Server Message Block) es un protocolo incorporado en el sistema Windows para compartir archivos y otros servicios a través de la red. SAMBA implementa el protocolo SMB, lo que enriquece los métodos de compartir archivos en sistemas *nix-like. ZimaOS está equipado con SAMBA, lo que hace que compartir y transferir archivos sea muy conveniente. En el contenido siguiente, describiremos tanto SMB como SAMBA, utilizando SMB por razones de conveniencia.  

## Crear una carpeta compartida en ZimaOS  
Lanza la aplicación Archivos en el panel de control de ZimaOS y busca la carpeta de destino que contiene los archivos que deseas compartir. Haz clic derecho en la carpeta y selecciona Compartir.  
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)  
Aparecerá una ventana de diálogo que te proporcionará las URL necesarias para montar la carpeta compartida en los sistemas correspondientes.  
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)  
Estas dos URL están destinadas a usuarios profesionales que montarán manualmente las unidades. Además, con el [cliente Zima](https://findzima.com/) en los sistemas correspondientes, podemos hacer que el proceso de montaje sea más fácil.  
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)  

## Montar tu carpeta SMB compartida en Windows  
Descarga Zima-latest setup.exe desde [findzima](https://findzima.com/) y ábrelo. Esto iniciará el proceso de instalación y el cliente Zima se lanzará automáticamente después de la instalación. Encontrarás el ícono de Zima en la parte derecha de la barra de tareas, el cual se muestra como un signo de interrogación debido a que aún no está conectado.  
Haz clic derecho en el ícono y selecciona Escanear y Conectar a Zima.  
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)  
Ubica tu dispositivo Zima y haz clic en Conectar.  
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)  
Zima.exe te pedirá ingresar tu nombre de usuario y contraseña de la WebUI para iniciar sesión. Después de eso, tu ícono de zima.exe pasará de un signo de interrogación a una marca ZIMA, lo que significa que tu zima.exe ha iniciado sesión correctamente.  
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)  
Haz clic derecho en el ícono de zima y selecciona Abrir en el Explorador de Archivos, lo que montará tu carpeta compartida en tu sistema Windows y la abrirá automáticamente.  

> Nota: Para que funcione correctamente, tanto tu Windows como ZimaOS deben estar en la misma red local (LAN).  

## Montar tu carpeta SMB compartida en macOS  
Al igual que antes, también hemos preparado una aplicación Zima para usuarios de Mac en [findzima](https://findzima.com/). El uso de la aplicación Zima para Mac es prácticamente igual al de Windows. Solo sigue los mismos pasos mencionados anteriormente.  

¿Recuerdas qué te muestra la aplicación Archivos cuando terminas de crear una carpeta compartida? ¡En macOS, usaremos las URL que acabas de obtener para montar manualmente!  
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)  
Abre Finder en tu Mac y presiona CMD+K, luego copia y pega la URL correspondiente en el cuadro de entrada.  
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)  
Haz clic en Conectar. En este momento, en el cuadro de diálogo emergente, selecciona Invitado y haz clic en Conectar.  

> Para los usuarios de ZimaOS v1.2.3, selecciona Usuario Registrado e ingresa el nombre de usuario y la contraseña correctos.  
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)  
Ahora, verás tu carpeta compartida abierta y estará listada en la columna izquierda de la aplicación Finder.  
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)  

> ¿Qué pasa con la URL para el Explorador de Windows? ¿Cuáles son las diferencias entre el montaje automático de Zima y el montaje manual de la unidad a través de la URL?  

Actualmente, nuestro uso compartido SMB utiliza la cuenta de Invitado. En futuras versiones, introduciremos múltiples usuarios para la función de compartir y mejoraremos la gestión de permisos. Esperamos que esto satisfaga las necesidades más diversas de todos.  

## No solo en LAN  
De hecho, no solo en LAN, sino también en redes directas y WAN, puedes conectar fácilmente tu dispositivo Zima y mapear el directorio compartido como una unidad de red. Publicaremos tutoriales relevantes en el futuro. ¡Gracias por tu atención continua!  

Si encuentras algún problema durante el uso, no dudes en hacérnoslo saber en cualquier momento. También puedes unirte a nuestra [comunidad](https://community.zimaspace.com/) y a nuestro [Discord](https://discord.com/invite/uuNfKzG5) para discutir más sobre NAS y ZimaOS. ¡Esperamos tus comentarios!