---
title: Enlazar Synology y SMB Compartidos
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# ¿Cómo compartir y obtener archivos de un NAS? SAMBA puede ser la forma más importante
Cuando hablamos de Almacenamiento Conectado a la Red, queremos que nuestros archivos estén almacenados, gestionados en un solo lugar y accesibles desde cualquier lugar. Pero, ¿cómo se hace eso?
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)
Siempre puedes acceder a tus datos visitando la WebUI de ZimaOS, que tiene una interfaz bellamente organizada y una experiencia fluida. Sin embargo, cuando tu trabajo implica referencias a archivos, o necesitas una operación más compleja en la jerarquía del sistema de archivos, montar tus unidades NAS en tu sistema cliente a través de tecnologías como SMB/SAMBA será una mejor manera.
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)
SMB (Server Message Block) es un protocolo incorporado en el sistema Windows para compartir archivos y otros servicios a través de la red. SAMBA implementa el protocolo SMB, lo que enriquece los métodos de compartición de archivos de sistemas similares a *nix. ZimaOS está equipado con SAMBA, lo que hace que compartir y transferir archivos sea muy conveniente. En el contenido siguiente, describiremos tanto SMB como SAMBA como SMB para fines de conveniencia.
## Crear una carpeta compartida en ZimaOS
Inicia la aplicación Archivos en el panel de control de ZimaOS y encuentra la carpeta de destino que contiene los archivos que deseas compartir. Haz clic derecho en la carpeta y selecciona Compartir.
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)
Una ventana de diálogo te mostrará las URL que necesitas para montar la carpeta compartida en los sistemas correspondientes.
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)
Estas dos URL son para usuarios profesionales que desean montar manualmente las unidades. Además, con el [cliente Zima](https://findzima.com/) en los sistemas correspondientes, podemos hacer que el proceso de montaje sea más fácil.
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)
## Montar tu carpeta compartida SMB en Windows
Descarga Zima-latest setup.exe de [findzima](https://findzima.com/) y ábrelo. Esto iniciará el proceso de instalación y el cliente Zima se lanzará automáticamente después de la instalación. Encontrarás el ícono de Zima a la derecha de tu barra de tareas, que se muestra como un signo de interrogación debido al estado de no estar conectado.
Haz clic derecho en el ícono y selecciona Escanear y Conectar a Zima.
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)
Localiza tu dispositivo Zima y haz clic en Conectar.
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)
Zima.exe te pedirá que ingreses el nombre de usuario y la contraseña de tu WebUI para iniciar sesión. Después de eso, tu ícono de zima.exe cambiará de un signo de interrogación a una marca de ZIMA, lo que significa que tu zima.exe ha entrado en un estado de inicio de sesión.
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)
Haz clic derecho en el ícono de zima y selecciona Abrir en el Explorador de Archivos, lo que montará tu carpeta compartida en tu sistema Windows y la abrirá automáticamente.

> Nota: para funcionar correctamente, tu Windows y ZimaOS deben estar en la misma red local (LAN).
## Montar tu carpeta compartida SMB en macOS
Al igual que arriba, también hemos preparado una aplicación zima para usuarios de Mac en [findzima](https://findzima.com/). El uso de la aplicación zima para Mac es bastante similar al de Windows. Solo sigue el contenido anterior.

¿Recuerdas lo que te solicita la aplicación Archivos cuando terminas de crear una carpeta compartida? En macOS, utilizaremos las URL que acabas de obtener para montar manualmente.
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)
Abre Finder en tu Mac y presiona CMD+K, luego copia y pega la URL correspondiente en el cuadro de entrada.
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)
Haz clic en Conectar. Por ahora, en el cuadro de diálogo, elige Invitado y haz clic en Conectar.

> Para usuarios de ZimaOS v1.2.3, elige Usuario Registrado e ingresa el nombre de usuario y la contraseña correctos.
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)
Ahora, tendrás tu carpeta compartida abierta y aparecerá en la columna izquierda de la aplicación Finder.
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)
> ¿Qué pasa con la URL para el Explorador de Windows? ¿Cuáles son las diferencias entre el montaje automático de zima y el montaje manual de la unidad a través de la URL?

Actualmente, nuestro compartir SMB utiliza la cuenta Invitado. En versiones futuras, presentaremos múltiples usuarios a la función de compartición y fortaleceremos la gestión de permisos. Esperamos que esto pueda satisfacer más necesidades diversas de todos.
## No solo LAN
De hecho, no solo en LAN, sino también en red directa y WAN, puedes conectar fácilmente tu dispositivo Zima y mapear el directorio compartido como una unidad de red. Publicaremos tutoriales relevantes. Gracias por tu atención continua.

Si encuentras algún problema durante el uso, no dudes en hacérnoslo saber en cualquier momento. También puedes unirte a nuestra [comunidad](https://community.zimaspace.com/) y [Discord](https://discord.com/invite/uuNfKzG5) para discutir más sobre NAS y ZimaOS. ¡Esperamos tus comentarios!