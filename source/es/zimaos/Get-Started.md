---
title: Empezar
description:
type: “Docs”
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción es para el artículo, si no se completa se tomará el primer párrafo del contenido.
---

# Integración

Empezar con ZimaOS es muy simple. El **diseño general del sistema se centra en la simplicidad y la consistencia del lenguaje**. Nuestro objetivo es asegurar que usar, compartir y gestionar datos en una nube privada sea una experiencia fluida, elegante y rápida. 
A lo largo del proceso de configuración, la **aplicación cliente de Zima establece todas las conexiones** entre tu laptop o iMac y el ZimaCube, **proporcionando la base para el acceso, transferencias de alta velocidad y experiencias remotas**. Después de instalar la aplicación cliente, simplemente sigue los pasos guiados para completar la inicialización del ZimaCube.

## Instalar Cliente Zima 
### Descarga del Cliente Zima
https://find.zimaspace.com/ e instala ZimaClient. Se escaneará automáticamente en busca de dispositivos disponibles.
### Búsqueda Rápida
Si prefieres usar la interfaz web, puedes visitar el sitio web. Asegúrate de que tu dispositivo esté conectado a la misma red que ZimaCube. Escanea en la página web, y después de que el escaneo se haya completado, verás una lista de dispositivos ZimaCube disponibles. Solo haz clic en el dispositivo correspondiente para conectarte a ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727082045246_image.png)

## Iniciar sesión en ZimaOS
Después de conectarte exitosamente a ZimaCube, ingresa la dirección IP correspondiente para acceder a la interfaz de inicialización de ZimaOS, donde puedes comenzar a configurar tu ZimaCube.
### Seleccionar idioma
Actualmente, ZimaOS soporta 6 idiomas, incluyendo inglés, chino, japonés, italiano y noruego. Elige el idioma que mejor manejes para asegurar la mejor experiencia de usuario.
![](https://manage.icewhale.io/api/static/docs/1727082127778_image.png)
### Crear Usuario
A continuación, necesitarás crear una cuenta de usuario. Esta cuenta será la forma principal en que gestionas ZimaOS. Por favor, establece un nombre de usuario y una contraseña seguros para proteger tus datos y configuraciones.
![](https://manage.icewhale.io/api/static/docs/1727082165610_image.png)
### Inicialización exitosa
Después de la inicialización, ZimaOS te proporcionará una breve introducción a las funciones y la guía de uso. Esto te ayudará a entender las características y el uso principal de ZimaOS. Puedes aprender sobre: 
- Sistema de gestión de archivos
- Tienda de aplicaciones y aplicaciones instalables
- Gestión de dispositivos y configuraciones de red
- Múltiples tipos de RAID para elegir
![](https://manage.icewhale.io/api/static/docs/1727082245929_image.png)
![](https://manage.icewhale.io/api/static/docs/1728377751054_copyImage.png)


# Breve

## Acceso Remoto
La accesibilidad es fundamental para las nubes privadas, y configurar la red en la mayoría de los dispositivos NAS puede ser bastante complejo. ZimaOS pretende ofrecer una experiencia de acceso remoto plug-and-play que sea segura y confiable, sin riesgo de reenvío en la nube o filtración de datos.

Por lo tanto, una vez que instales la aplicación [**Zima Client**](https://find.zimaspace.com/) y escaneas para conectarte a ZimaOS por primera vez, ¡tu canal de acceso remoto ya está configurado!

![](https://manage.icewhale.io/api/static/docs/1728377748520_image.png)

Puedes conectarte a tu ZimaCube en casa o en la oficina desde cualquier lugar usando tu MacBook o laptop sin ningún tipo de configuraciones adicionales. La conexión entre tu laptop y el ZimaCube se establece automáticamente a través de la aplicación cliente de Zima y ZimaOS, utilizando comunicación P2P para construir la conexión. Las transferencias de datos entre ambos están cifradas, asegurando que todas las transmisiones de datos sean en pares.

Para tener un control completo, también puedes iniciar sesión en el panel de configuración para desactivar la función de acceso remoto con un solo clic.
![](https://manage.icewhale.io/api/static/docs/1727081506994_image.png)
## Archivos
Files se centra en la gestión unificada para creadores y datos personales, ofreciendo una experiencia de almacenamiento y acceso a archivos simplificada. Sin duda, se asemeja a un servicio de almacenamiento en la nube local. Sin embargo, a diferencia de los servicios de almacenamiento en la nube más utilizados, su velocidad puede alcanzar GB/s a través de Thunderbolt, y con redes inalámbricas Wi-Fi 6, puede lograr más de 100MB/s en experiencias de sincronización de material y vista previa de archivos. Esto proporciona velocidades óptimas para respaldar grandes cantidades de imágenes personales o contenido de video, incluyendo 4K.

Files ofrece funciones de vista previa de video, fijación y expansión de almacenamiento en la nube, satisfaciendo eficazmente tus necesidades de acceso a contenido y unificando datos a través de servicios en la nube. Usos comunes incluyen compartir un conjunto de materiales dentro de un pequeño equipo o fijar tus carpetas de proyectos más utilizadas para un acceso fácil.

Si bien el rendimiento de 100MB/s generalmente satisface la mayoría de las necesidades de vista previa y edición, si requieres velocidades extremas, las capacidades de 10GbE o Thunderbolt de ZimaCube son excelentes opciones.
![](https://manage.icewhale.io/api/static/docs/1727081538638_image.png)
## Transferencia Thunderbolt

Thunderbolt, un método que no debe ser pasado por alto por editores profesionales o usuarios que buscan un rendimiento de transferencia óptimo, se utiliza con ZimaCube. Ofrece velocidades de transferencia de datos que superan 1GB/s, con velocidades teóricas de lectura-escritura que alcanzan hasta 20Gbps.

Sin embargo, no debería ser complicado, debería ser tan simple como conectar un cable Thunderbolt y usarlo de inmediato. Sí, a través de la aplicación cliente de Zima y ZimaOS. Una vez que el cable Thunderbolt esté conectado, simplemente vuelve a acceder a ZimaOS a través de la aplicación cliente de Zima para experimentar las velocidades más rápidas de edición, acceso a material o compartición Samba. No se requieren configuraciones adicionales; el sistema y las aplicaciones manejarán automáticamente todo por ti.
![](https://manage.icewhale.io/api/static/docs/1727081568557_image.png)
## Compartición Samba
Crear un espacio dentro de una red de área local (LAN) donde un equipo pueda editar directamente, o habilitar el acceso directo al almacenamiento de red local desde dispositivos como TVs y visores VR, Samba es a menudo la opción preferida por muchos. Configurar y gestionar Samba en ZimaOS continúa ofreciendo la facilidad y fluidez inherentes del sistema. Puedes crear fácilmente un recurso compartido en LAN haciendo clic derecho en cualquier carpeta en Files.

Curiosamente, cuando se combina con la función de acceso remoto de la aplicación cliente de Zima, incluso puedes cargar de forma remota espacios de almacenamiento y editar archivos directamente dentro de ese espacio remoto. Esto ofrece una solución convincente y simple para la colaboración y el trabajo remoto.

A través del panel de configuración, puedes crear directamente diferentes usuarios y asignar permisos de acceso al contenido correspondientes, personalizando la accesibilidad según sea necesario para tu equipo o familia.
![](https://manage.icewhale.io/api/static/docs/1727081592637_image.png)
## Integración de Almacenamiento en la Nube
Hoy en día, los datos de todos están increíblemente dispersos—algunos en Notion, algunos en Slack, y muchos en correos electrónicos. Creemos que los datos personales o de pequeños equipos deberían estar más unificados. No necesariamente tienen que residir en una nube privada, pero la gestión debería ser centralizada. Con esta filosofía en mente, el primer paso de ZimaOS es habilitar la gestión de tus datos de almacenamiento en la nube, datos NAS o datos en dispositivos Zima a través de una única interfaz de sistema.

Con la función Agregar en Files, puedes vincular fácilmente tu Google Drive, Dropbox, OneDrive o carpetas compartidas Samba locales con un solo clic, todo desde un único y elegante gestor de archivos. Esto permite una gestión por lotes o unificada de tus datos personales.

Esto significa que si consideras que la gestión de datos de Google Drive ya no es confiable o económica, puedes migrar por lotes datos de Google Drive a Dropbox o cualquier otro medio de tu elección. Esto será muy emocionante, y basado en esta idea, ofreceremos soluciones de gestión de datos personales más efectivas.
![](https://manage.icewhale.io/api/static/docs/1727081614882_image.png)
## RAID
RAID es una característica fundamental esencial para los usuarios de NAS existentes. ZimaOS ahora soporta tres modos RAID: RAID 0, RAID 1 y RAID 5. Estas opciones proporcionan soluciones de respaldo redundante para tu almacenamiento de datos personales, ofreciendo protección contra el riesgo impredecible de fallos en los discos duros.

RAID 0 es una opción que existe principalmente para maximizar el rendimiento de lectura y escritura y unificar el espacio de almacenamiento, sin ningún mecanismo de redundancia. RAID 1 ofrece una solución segura y confiable, almacenando tus datos en dos discos duros idénticos, reduciendo a la mitad el espacio pero duplicando la seguridad. RAID 5, a través de la configuración de tres discos, maximiza el espacio de almacenamiento mientras proporciona un mecanismo de redundancia.

Si estás interesado en ZFS o configuraciones RAID más avanzadas, puedes construir estas a través de las interfaces de nivel de sistema proporcionadas por ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727081705277_image.png)
## ZVM
Basado en tecnología de virtualización, puedes utilizar aún más los recursos informáticos en tu hardware de ZimaCube. Por ejemplo, puedes usar tu NAS como un host de escritorio Windows, un entorno de desarrollo Debian segregado, o incluso como un sistema de enrutamiento para gestionar tu red. Las capacidades de VM aún se encuentran en las primeras etapas, y estamos refinando continuamente sus características más avanzadas basadas en los comentarios de la comunidad.
![](https://manage.icewhale.io/api/static/docs/1727081725764_image.png)
## Drop
Es una característica de postre sencilla: todos los teléfonos móviles, laptops o dispositivos cliente dentro de la misma red de área local creada por ZimaOS pueden realizar transferencias entre pares de archivos individuales libremente cuando abren un enlace compartido por ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727081744441_image.png)
## App Store
La AppStore hereda casi todas las características de CasaOS, ofreciendo más de cien aplicaciones privatizadas que se pueden desplegar con solo un clic. Estas incluyen aplicaciones populares de servidor multimedia como Plex y Jellyfin, aplicaciones para el hogar inteligente como Home Assistant y Homebridge, y herramientas de documentos y colaboración de equipo privatizadas como Notion y Affinity. 
Aplicaciones locales de IA recientes y populares como OpenWeb UI y Stable Diffusion también se pueden instalar y activar con solo un clic.

Hay muchos escenarios y usos por explorar, esperando que los desbloquees. Gradualmente te mostraremos estos a través de los próximos contenidos.
![](https://manage.icewhale.io/api/static/docs/1727081765695_image.png)


# ZimaOS y CasaOS
En este artículo, presentaremos brevemente las principales características disponibles en ZimaOS. Aquellos que están familiarizados con Zima saben que ZimaOS se desarrolla basado en CasaOS, un proyecto de nube privada de código abierto lanzado por el equipo de Zima en 2022. Ha ganado una atención significativa de desarrolladores de todo el mundo, con más de 700k instalaciones que sirven a entusiastas en cientos de países a nivel global.

Construyendo sobre la base de CasaOS, ZimaOS ha mejorado aún más sus funcionalidades clave como un sistema operativo NAS definitivo. En resumen, mientras **CasaOS sirve** como un **hub de aplicaciones en la nube personal** que facilita el fácil despliegue de varias aplicaciones de nube privada, **ZimaOS** se basa en esta fundación para **establecer un sistema operativo robusto y completo.** Cuenta con configuración RAID, acceso remoto, un gestor de archivos similar a la nube, copias de seguridad automáticas y gestión unificada de datos en la nube y NAS—una suite de funciones a nivel de sistema. 

Contenido adicional profundizará en las características detalladas de ZimaOS.