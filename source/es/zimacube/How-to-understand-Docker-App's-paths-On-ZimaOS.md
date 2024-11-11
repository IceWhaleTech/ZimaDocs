---
title: Cómo entender las rutas de Docker App en ZimaOS
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, no la elimines, la descripción es para el artículo, si no se llena se tomará el primer párrafo del contenido
---
# Docker y ZimaOS
Docker es una plataforma que permite a los usuarios automatizar la implementación, escalado y gestión de aplicaciones en contenedores ligeros. Estos contenedores empaquetan una aplicación con todas sus dependencias, asegurando un rendimiento consistente en diversos entornos. La eficiencia de Docker radica en su capacidad para aislar aplicaciones, haciéndolas más portátiles y escalables.

![](https://manage.icewhale.io/api/static/docs/1722494286724_image.png)
ZimaOS es realmente impresionante cuando hablamos de aplicaciones Docker, simplificando el proceso con solo unos pocos clics. ZimaOS también es un cambio de juego para los entusiastas de NAS, usuarios profesionales y usuarios de estudio. Su interfaz intuitiva simplifica la copia de seguridad y gestión de datos.

![](https://manage.icewhale.io/api/static/docs/1722494305565_image.png)
Pero, ¿realmente entiendes la ruta al usar aplicaciones Docker en ZimaOS? ¿Puedes distinguir entre la ruta de ZimaOS y la ruta de las aplicaciones Docker?

# Cómo Docker Organiza las Rutas
Cuando ejecutas un contenedor Docker, opera dentro de su propio sistema de archivos, separado del sistema anfitrión. Aquí hay un resumen general de cómo Docker organiza las rutas:

- Sistema de Archivos del Contenedor: Dentro de un contenedor Docker, el sistema de archivos está aislado de la máquina host. Las aplicaciones que se ejecutan en un contenedor ven su propio sistema de archivos raíz, que típicamente comienza desde /. Por ejemplo, si tienes una aplicación que almacena datos en /app/data dentro del contenedor, esta ruta existe únicamente dentro del sistema de archivos de ese contenedor.

- Volúmenes: Para persistir datos más allá del ciclo de vida de un contenedor, Docker utiliza volúmenes. Los volúmenes son directorios o archivos fuera del sistema de archivos del contenedor, generalmente ubicados en el sistema anfitrión, y pueden compartirse entre contenedores. A menudo se montan en contenedores en rutas específicas.

![](https://manage.icewhale.io/api/static/docs/1722494354267_image.png)
Hay otros modos de compartir datos, que puedes aprender aquí.

# El Ejemplo de Plex
![](https://manage.icewhale.io/api/static/docs/1722494383898_image.png)
Tomemos Plex, una aplicación de servidor de medios popular, como ejemplo para entender cómo se organizan las rutas dentro de ZimaOS utilizando Docker.

**Aplicación Docker**: Plex se distribuye como una aplicación Docker en la tienda de aplicaciones de ZimaOS. Cuando instalas Plex desde la tienda de aplicaciones de ZimaOS, ZimaOS especificará varias rutas para diferentes directorios:

- /config en el contenedor: este directorio contiene los archivos de configuración de Plex. En ZimaOS, su ruta de volumen es /DATA/AppData/plex/config en ZimaOS, que está montada en /config del contenedor para asegurar que las configuraciones persistan a través de los reinicios del contenedor.

- /media en el contenedor: aquí es donde Plex accede a tus archivos multimedia. Además, la ruta de volumen de los archivos multimedia es /DATA/Media en ZimaOS y está montada en /media del contenedor.

Ten en cuenta que queremos que los archivos se almacenen en el host. De esta forma, incluso si un contenedor se detiene o se recrea, los datos permanecen intactos.
![](https://manage.icewhale.io/api/static/docs/1722494441184_image.png)
Puedes encontrar la configuración detallada haciendo clic en Configuración de Plex. Además, en esta página, la ruta del volumen se puede modificar fácilmente haciendo clic en el icono gris junto a la ruta del volumen.

![](https://manage.icewhale.io/api/static/docs/1722494459333_image.png)
Al entender las rutas de Docker y cómo se integran con aplicaciones como Plex, los entusiastas de NAS y los usuarios de Homelab pueden gestionar eficazmente sus aplicaciones de una manera que combine la flexibilidad de la contenedorización con la fiabilidad del almacenamiento persistente.