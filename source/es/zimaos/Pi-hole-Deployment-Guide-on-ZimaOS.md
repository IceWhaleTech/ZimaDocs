Aquí tienes la traducción al español del contenido solicitado:

---

**Título: Vincular Synology y compartir carpetas SMB**  
**Descripción:**  
**Tipo:** “Docs”  
**Consejo:** No eliminar el formato fijo de la barra superior, la descripción debe ser el texto introductorio del artículo. Si no se proporciona, se tomará el primer párrafo como descripción.

---  
# ¿Cómo compartir y obtener archivos desde un NAS? SAMBA podría ser la forma más importante  
Cuando hablamos de Almacenamiento Conectado a la Red (NAS), queremos que nuestros archivos se almacenen, gestionen en un solo lugar y sean accesibles desde cualquier lugar. Pero, ¿cómo se lleva a cabo esto?  
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)  
Siempre puedes acceder a tus datos visitando la interfaz web de ZimaOS, que tiene una interfaz bellamente organizada y una experiencia fluida. Sin embargo, cuando tu trabajo involucra hacer referencia a archivos o necesitas realizar operaciones más complejas en la jerarquía del sistema de archivos, montar las unidades NAS en tu sistema cliente mediante tecnologías como SMB/SAMBA será una mejor opción.  
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)  
SMB (Server Message Block) es un protocolo integrado en el sistema Windows para compartir archivos y otros servicios a través de la red. SAMBA implementa el protocolo SMB, lo que enriquece los métodos de compartición de archivos en sistemas *nix-like. ZimaOS está equipado con SAMBA, lo que hace que compartir y transferir archivos sea muy conveniente. En el siguiente contenido, describiremos tanto SMB como SAMBA como SMB para fines de conveniencia.  

## Crear una carpeta compartida en ZimaOS  
Lanza la aplicación Archivos en el panel de ZimaOS y busca la carpeta de destino que contiene los archivos que deseas compartir. Haz clic derecho en la carpeta y selecciona "Compartir".  
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)  
Una ventana de diálogo te mostrará las URLs necesarias para montar la carpeta compartida en los sistemas correspondientes.  
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)  
Estas dos URLs son para que los usuarios profesionales monten manualmente las unidades. Además, con el [cliente Zima](https://findzima.com/) en los sistemas correspondientes, podemos hacer que el proceso de montaje sea más fácil.  
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)  

## Montar tu carpeta compartida SMB en Windows  
Descarga el archivo Zima-latest setup.exe desde [findzima](https://findzima.com/) y ábrelo. Esto iniciará el proceso de instalación y el cliente Zima se abrirá automáticamente después de la instalación. Encontrarás el ícono de Zima a la derecha de la barra de tareas, el cual se mostrará como un signo de interrogación debido al estado de no conexión.  
Haz clic derecho en el ícono y selecciona "Escanear y Conectar a Zima".  
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)  
Localiza tu dispositivo Zima y haz clic en "Conectar".  
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)  
Zima.exe te pedirá que ingreses tu nombre de usuario y contraseña del WebUI para iniciar sesión. Después de esto, el ícono de zima.exe cambiará de un signo de interrogación a un logo de ZIMA, lo que indica que has iniciado sesión.  
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)  
Haz clic derecho en el ícono de Zima y selecciona "Abrir en el Explorador de Archivos", lo que montará tu carpeta compartida en tu sistema Windows y la abrirá automáticamente.

> Nota: Para que funcione correctamente, tanto tu Windows como ZimaOS deben estar en la misma red local (LAN).  

## Montar tu carpeta compartida SMB en macOS  
De manera similar, también hemos preparado una aplicación Zima para usuarios de Mac en [findzima](https://findzima.com/). El uso de la aplicación Zima en Mac es muy similar al de Windows. Solo sigue las instrucciones mencionadas anteriormente.

¿Recuerdas qué mensaje te muestra la aplicación Archivos cuando terminas de crear una carpeta compartida? En macOS, utilizaremos las URLs que acabas de obtener para montar manualmente.  
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)  
Abre Finder en tu Mac y presiona CMD+K, luego copia y pega la URL correspondiente en el cuadro de entrada.  
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)  
Haz clic en "Conectar". Ahora, en el cuadro de diálogo, selecciona "Invitado" y haz clic en "Conectar".  

> Para usuarios de ZimaOS v1.2.3, selecciona "Usuario Registrado" e ingresa el nombre de usuario y contraseña correctos.  
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)  
Ahora, tu carpeta compartida se abrirá y aparecerá en la columna izquierda de la aplicación Finder.  
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)  

> ¿Qué pasa con la URL para el Explorador de Archivos de Windows? ¿Cuáles son las diferencias entre el montaje automatizado por Zima y el montaje manual mediante URL?

Actualmente, nuestra compartición SMB usa la cuenta de invitado. En versiones futuras, introduciremos múltiples usuarios en la función de compartición y reforzaremos la gestión de permisos. Esperamos que estas mejoras satisfagan las necesidades más diversas de los usuarios.  

## No solo en LAN  
De hecho, no solo en LAN, sino también en redes directas y WAN, puedes conectar fácilmente tu dispositivo Zima y mapear el directorio compartido como una unidad de red. Publicaremos tutoriales relacionados al respecto. ¡Gracias por seguir prestando atención!

Si encuentras algún problema durante el uso, no dudes en avisarnos en cualquier momento. También puedes unirte a nuestra [comunidad](https://community.zimaspace.com/) y [Discord](https://discord.com/invite/uuNfKzG5) para discutir más sobre NAS y ZimaOS. ¡Esperamos tus comentarios!

---  

¡Listo! Espero que esta traducción te sea útil.